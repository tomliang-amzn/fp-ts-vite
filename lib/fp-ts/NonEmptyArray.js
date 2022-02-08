"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.chunksOf = exports.chop = exports.chainWithIndex = exports.chainFirst = exports.chain = exports.bindTo = exports.bind = exports.appendW = exports.append = exports.apSecond = exports.apS = exports.apFirst = exports.ap = exports.altW = exports.alt = exports.URI = exports.TraversableWithIndex = exports.Traversable = exports.Pointed = exports.Monad = exports.FunctorWithIndex = exports.Functor = exports.FoldableWithIndex = exports.Foldable = exports.Do = exports.Comonad = exports.Chain = exports.Apply = exports.Applicative = exports.Alt = void 0;
exports.concat = concat;
exports.concatAll = void 0;
exports.concatW = concatW;
exports.cons = cons;
exports.extract = exports.extend = exports.duplicate = exports.copy = void 0;
exports.filter = filter;
exports.getUnionSemigroup = exports.getShow = exports.getSemigroup = exports.getEq = exports.fromReadonlyNonEmptyArray = exports.fromArray = exports.foldMapWithIndex = exports.foldMap = exports.fold = exports.flatten = exports.flap = exports.filterWithIndex = void 0;
exports.group = group;
exports.groupBy = void 0;
exports.groupSort = groupSort;
exports.unsafeUpdateAt = exports.unsafeInsertAt = exports.unprepend = exports.uniq = exports.union = exports.uncons = exports.unappend = exports.traverseWithIndex = exports.traverse = exports.tail = exports.splitAt = exports.sortBy = exports.sort = exports.snoc = exports.sequence = exports.rotate = exports.reverse = exports.replicate = exports.reduceWithIndex = exports.reduceRightWithIndex = exports.reduceRight = exports.reduce = exports.range = exports.prependW = exports.prependToAll = exports.prependAll = exports.prepend = exports.of = exports.nonEmptyArray = exports.modifyLast = exports.modifyHead = exports.modifyAt = exports.min = exports.max = exports.matchRight = exports.matchLeft = exports.mapWithIndex = exports.map = exports.makeBy = exports.last = exports.isOutOfBound = exports.isNonEmpty = exports.intersperse = exports.insertAt = exports.init = exports.head = void 0;
exports.updateLast = exports.updateHead = exports.updateAt = exports.unzip = exports.unsnoc = exports.unsafeUpdateAt = exports.unsafeInsertAt = exports.unprepend = exports.uniq = exports.union = exports.uncons = exports.unappend = exports.traverseWithIndex = exports.traverse = exports.tail = exports.splitAt = exports.sortBy = exports.sort = exports.snoc = exports.sequence = exports.rotate = exports.reverse = exports.replicate = exports.reduceWithIndex = exports.reduceRightWithIndex = exports.reduceRight = exports.reduce = exports.range = exports.prependW = exports.prependToAll = exports.prependAll = exports.prepend = exports.of = exports.nonEmptyArray = exports.modifyLast = exports.modifyHead = exports.modifyAt = exports.min = exports.max = exports.matchRight = exports.matchLeft = exports.mapWithIndex = exports.map = exports.makeBy = exports.last = exports.isOutOfBound = exports.isNonEmpty = exports.intersperse = exports.insertAt = exports.init = exports.head = void 0;
exports.zip = zip;
exports.zipWith = void 0;

var _Apply = require("./Apply");

var _Chain = require("./Chain");

var _function = require("./function");

var _Functor = require("./Functor");

var _ = _interopRequireWildcard(require("./internal"));

var _Ord = require("./Ord");

var RNEA = _interopRequireWildcard(require("./ReadonlyNonEmptyArray"));

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

var Semigroup = Se.Semigroup;
var ReadonlyNonEmptyArray = RNEA.ReadonlyNonEmptyArray; // -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

/**
 * @category model
 * @since 2.0.0
 */

// -------------------------------------------------------------------------------------
// internal
// -------------------------------------------------------------------------------------

/**
 * @internal
 */
var isNonEmpty = function isNonEmpty(as) {
  return as.length > 0;
};
/**
 * @internal
 */


exports.isNonEmpty = isNonEmpty;

var isOutOfBound = function isOutOfBound(i, as) {
  return i < 0 || i >= as.length;
};
/**
 * @internal
 */


exports.isOutOfBound = isOutOfBound;

var prependW = function prependW(head) {
  return function (tail) {
    return [head].concat(_toConsumableArray(tail));
  };
};
/**
 * @internal
 */


exports.prependW = prependW;
var prepend = prependW;
/**
 * @internal
 */

exports.prepend = prepend;

var appendW = function appendW(end) {
  return function (init) {
    return [].concat(_toConsumableArray(init), [end]);
  };
};
/**
 * @internal
 */


exports.appendW = appendW;
var append = appendW;
/**
 * @internal
 */

exports.append = append;

var unsafeInsertAt = function unsafeInsertAt(i, a, as) {
  if (isNonEmpty(as)) {
    var xs = fromReadonlyNonEmptyArray(as);
    xs.splice(i, 0, a);
    return xs;
  }

  return [a];
};
/**
 * @internal
 */


exports.unsafeInsertAt = unsafeInsertAt;

var unsafeUpdateAt = function unsafeUpdateAt(i, a, as) {
  var xs = fromReadonlyNonEmptyArray(as);
  xs[i] = a;
  return xs;
};
/**
 * Remove duplicates from a `NonEmptyArray`, keeping the first occurrence of an element.
 *
 * @example
 * import { uniq } from 'fp-ts/NonEmptyArray'
 * import * as N from 'fp-ts/number'
 *
 * assert.deepStrictEqual(uniq(N.Eq)([1, 2, 1]), [1, 2])
 *
 * @category combinators
 * @since 2.11.0
 */


exports.unsafeUpdateAt = unsafeUpdateAt;

var uniq = function uniq(E) {
  return function (as) {
    if (as.length === 1) {
      return copy(as);
    }

    var out = [head(as)];
    var rest = tail(as);

    var _iterator = _createForOfIteratorHelper(rest),
        _step;

    try {
      var _loop = function _loop() {
        var a = _step.value;

        if (out.every(function (o) {
          return !E.equals(o, a);
        })) {
          out.push(a);
        }
      };

      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        _loop();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return out;
  };
};
/**
 * Sort the elements of a `NonEmptyArray` in increasing order, where elements are compared using first `ords[0]`, then `ords[1]`,
 * etc...
 *
 * @example
 * import * as NEA from 'fp-ts/NonEmptyArray'
 * import { contramap } from 'fp-ts/Ord'
 * import * as S from 'fp-ts/string'
 * import * as N from 'fp-ts/number'
 * import { pipe } from 'fp-ts/function'
 *
 * interface Person {
 *   name: string
 *   age: number
 * }
 *
 * const byName = pipe(S.Ord, contramap((p: Person) => p.name))
 *
 * const byAge = pipe(N.Ord, contramap((p: Person) => p.age))
 *
 * const sortByNameByAge = NEA.sortBy([byName, byAge])
 *
 * const persons: NEA.NonEmptyArray<Person> = [
 *   { name: 'a', age: 1 },
 *   { name: 'b', age: 3 },
 *   { name: 'c', age: 2 },
 *   { name: 'b', age: 2 }
 * ]
 *
 * assert.deepStrictEqual(sortByNameByAge(persons), [
 *   { name: 'a', age: 1 },
 *   { name: 'b', age: 2 },
 *   { name: 'b', age: 3 },
 *   { name: 'c', age: 2 }
 * ])
 *
 * @category combinators
 * @since 2.11.0
 */


exports.uniq = uniq;

var sortBy = function sortBy(ords) {
  if (isNonEmpty(ords)) {
    var M = (0, _Ord.getMonoid)();
    return sort(ords.reduce(M.concat, M.empty));
  }

  return copy;
};
/**
 * @category combinators
 * @since 2.11.0
 */


exports.sortBy = sortBy;

var union = function union(E) {
  var uniqE = uniq(E);
  return function (second) {
    return function (first) {
      return uniqE((0, _function.pipe)(first, concat(second)));
    };
  };
};
/**
 * Rotate a `NonEmptyArray` by `n` steps.
 *
 * @example
 * import { rotate } from 'fp-ts/NonEmptyArray'
 *
 * assert.deepStrictEqual(rotate(2)([1, 2, 3, 4, 5]), [4, 5, 1, 2, 3])
 * assert.deepStrictEqual(rotate(-2)([1, 2, 3, 4, 5]), [3, 4, 5, 1, 2])
 *
 * @category combinators
 * @since 2.11.0
 */


exports.union = union;

var rotate = function rotate(n) {
  return function (as) {
    var len = as.length;
    var m = Math.round(n) % len;

    if (isOutOfBound(Math.abs(m), as) || m === 0) {
      return copy(as);
    }

    if (m < 0) {
      var _splitAt = splitAt(-m)(as),
          _splitAt2 = _slicedToArray(_splitAt, 2),
          _f = _splitAt2[0],
          s = _splitAt2[1];

      return (0, _function.pipe)(s, concat(_f));
    } else {
      return rotate(m - len)(as);
    }
  };
}; // -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------

/**
 * @category constructors
 * @since 2.10.0
 */


exports.rotate = rotate;
var fromReadonlyNonEmptyArray = _.fromReadonlyNonEmptyArray;
/**
 * Builds a `NonEmptyArray` from an `Array` returning `none` if `as` is an empty array
 *
 * @category constructors
 * @since 2.0.0
 */

exports.fromReadonlyNonEmptyArray = fromReadonlyNonEmptyArray;

var fromArray = function fromArray(as) {
  return isNonEmpty(as) ? _.some(as) : _.none;
};
/**
 * Return a `NonEmptyArray` of length `n` with element `i` initialized with `f(i)`.
 *
 * **Note**. `n` is normalized to a natural number.
 *
 * @example
 * import { makeBy } from 'fp-ts/NonEmptyArray'
 * import { pipe } from 'fp-ts/function'
 *
 * const double = (n: number): number => n * 2
 * assert.deepStrictEqual(pipe(5, makeBy(double)), [0, 2, 4, 6, 8])
 *
 * @category constructors
 * @since 2.11.0
 */


exports.fromArray = fromArray;

var makeBy = function makeBy(f) {
  return function (n) {
    var j = Math.max(0, Math.floor(n));
    var out = [f(0)];

    for (var _i2 = 1; _i2 < j; _i2++) {
      out.push(f(_i2));
    }

    return out;
  };
};
/**
 * Create a `NonEmptyArray` containing a value repeated the specified number of times.
 *
 * **Note**. `n` is normalized to a natural number.
 *
 * @example
 * import { replicate } from 'fp-ts/NonEmptyArray'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.deepStrictEqual(pipe(3, replicate('a')), ['a', 'a', 'a'])
 *
 * @category constructors
 * @since 2.11.0
 */


exports.makeBy = makeBy;

var replicate = function replicate(a) {
  return makeBy(function () {
    return a;
  });
};
/**
 * Create a `NonEmptyArray` containing a range of integers, including both endpoints.
 *
 * @example
 * import { range } from 'fp-ts/NonEmptyArray'
 *
 * assert.deepStrictEqual(range(1, 5), [1, 2, 3, 4, 5])
 *
 * @category constructors
 * @since 2.11.0
 */


exports.replicate = replicate;

var range = function range(start, end) {
  return start <= end ? makeBy(function (i) {
    return start + i;
  })(end - start + 1) : [start];
}; // -------------------------------------------------------------------------------------
// destructors
// -------------------------------------------------------------------------------------

/**
 * Return the tuple of the `head` and the `tail`.
 *
 * @example
 * import { unprepend } from 'fp-ts/NonEmptyArray'
 *
 * assert.deepStrictEqual(unprepend([1, 2, 3]), [1, [2, 3]])
 *
 * @category destructors
 * @since 2.9.0
 */


exports.range = range;

var unprepend = function unprepend(as) {
  return [head(as), tail(as)];
};
/**
 * Return the tuple of the `init` and the `last`.
 *
 * @example
 * import { unappend } from 'fp-ts/NonEmptyArray'
 *
 * assert.deepStrictEqual(unappend([1, 2, 3, 4]), [[1, 2, 3], 4])
 *
 * @category destructors
 * @since 2.9.0
 */


exports.unprepend = unprepend;

var unappend = function unappend(as) {
  return [init(as), last(as)];
}; // -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------

/**
 * @category combinators
 * @since 2.11.0
 */


exports.unappend = unappend;

function concatW(second) {
  return function (first) {
    return first.concat(second);
  };
}
/**
 * @category combinators
 * @since 2.2.0
 */


function concat(x, y) {
  return y ? x.concat(y) : function (y) {
    return y.concat(x);
  };
}
/**
 * @category combinators
 * @since 2.0.0
 */


var reverse = function reverse(as) {
  return [last(as)].concat(_toConsumableArray(as.slice(0, -1).reverse()));
};
/**
 * Group equal, consecutive elements of an array into non empty arrays.
 *
 * @example
 * import { group } from 'fp-ts/NonEmptyArray'
 * import * as N from 'fp-ts/number'
 *
 * assert.deepStrictEqual(group(N.Ord)([1, 2, 1, 1]), [
 *   [1],
 *   [2],
 *   [1, 1]
 * ])
 *
 * @category combinators
 * @since 2.0.0
 */


exports.reverse = reverse;

function group(E) {
  return function (as) {
    var len = as.length;

    if (len === 0) {
      return [];
    }

    var out = [];
    var head = as[0];
    var nea = [head];

    for (var _i3 = 1; _i3 < len; _i3++) {
      var _a = as[_i3];

      if (E.equals(_a, head)) {
        nea.push(_a);
      } else {
        out.push(nea);
        head = _a;
        nea = [head];
      }
    }

    out.push(nea);
    return out;
  };
}
/**
 * Splits an array into sub-non-empty-arrays stored in an object, based on the result of calling a `string`-returning
 * function on each element, and grouping the results according to values returned
 *
 * @example
 * import { groupBy } from 'fp-ts/NonEmptyArray'
 *
 * assert.deepStrictEqual(groupBy((s: string) => String(s.length))(['a', 'b', 'ab']), {
 *   '1': ['a', 'b'],
 *   '2': ['ab']
 * })
 *
 * @category combinators
 * @since 2.0.0
 */


var groupBy = function groupBy(f) {
  return function (as) {
    var out = {};

    var _iterator2 = _createForOfIteratorHelper(as),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _a2 = _step2.value;
        var k = f(_a2);

        if (out.hasOwnProperty(k)) {
          out[k].push(_a2);
        } else {
          out[k] = [_a2];
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    return out;
  };
};
/**
 * @category combinators
 * @since 2.0.0
 */


exports.groupBy = groupBy;

var sort = function sort(O) {
  return function (as) {
    return as.slice().sort(O.compare);
  };
};
/**
 * @category combinators
 * @since 2.0.0
 */


exports.sort = sort;

var insertAt = function insertAt(i, a) {
  return function (as) {
    return i < 0 || i > as.length ? _.none : _.some(unsafeInsertAt(i, a, as));
  };
};
/**
 * @category combinators
 * @since 2.0.0
 */


exports.insertAt = insertAt;

var updateAt = function updateAt(i, a) {
  return modifyAt(i, function () {
    return a;
  });
};
/**
 * @category combinators
 * @since 2.0.0
 */


exports.updateAt = updateAt;

var modifyAt = function modifyAt(i, f) {
  return function (as) {
    return isOutOfBound(i, as) ? _.none : _.some(unsafeUpdateAt(i, f(as[i]), as));
  };
};
/**
 * @category combinators
 * @since 2.0.0
 */


exports.modifyAt = modifyAt;
var copy = fromReadonlyNonEmptyArray;
/**
 * @category Pointed
 * @since 2.0.0
 */

exports.copy = copy;

var of = function of(a) {
  return [a];
};
/**
 * @category combinators
 * @since 2.5.1
 */


exports.of = of;

var zipWith = function zipWith(as, bs, f) {
  var cs = [f(as[0], bs[0])];
  var len = Math.min(as.length, bs.length);

  for (var _i4 = 1; _i4 < len; _i4++) {
    cs[_i4] = f(as[_i4], bs[_i4]);
  }

  return cs;
};
/**
 * @category combinators
 * @since 2.5.1
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
 * @category combinators
 * @since 2.5.1
 */


var unzip = function unzip(abs) {
  var fa = [abs[0][0]];
  var fb = [abs[0][1]];

  for (var _i5 = 1; _i5 < abs.length; _i5++) {
    fa[_i5] = abs[_i5][0];
    fb[_i5] = abs[_i5][1];
  }

  return [fa, fb];
};
/**
 * Prepend an element to every member of an array
 *
 * @example
 * import { prependAll } from 'fp-ts/NonEmptyArray'
 *
 * assert.deepStrictEqual(prependAll(9)([1, 2, 3, 4]), [9, 1, 9, 2, 9, 3, 9, 4])
 *
 * @category combinators
 * @since 2.10.0
 */


exports.unzip = unzip;

var prependAll = function prependAll(middle) {
  return function (as) {
    var out = [middle, as[0]];

    for (var _i6 = 1; _i6 < as.length; _i6++) {
      out.push(middle, as[_i6]);
    }

    return out;
  };
};
/**
 * Places an element in between members of an array
 *
 * @example
 * import { intersperse } from 'fp-ts/NonEmptyArray'
 *
 * assert.deepStrictEqual(intersperse(9)([1, 2, 3, 4]), [1, 9, 2, 9, 3, 9, 4])
 *
 * @category combinators
 * @since 2.9.0
 */


exports.prependAll = prependAll;

var intersperse = function intersperse(middle) {
  return function (as) {
    var rest = tail(as);
    return isNonEmpty(rest) ? (0, _function.pipe)(rest, prependAll(middle), prepend(head(as))) : copy(as);
  };
};
/**
 * @category combinators
 * @since 2.0.0
 */


exports.intersperse = intersperse;
var foldMapWithIndex = RNEA.foldMapWithIndex;
/**
 * @category combinators
 * @since 2.0.0
 */

exports.foldMapWithIndex = foldMapWithIndex;
var foldMap = RNEA.foldMap;
/**
 * @category combinators
 * @since 2.10.0
 */

exports.foldMap = foldMap;

var chainWithIndex = function chainWithIndex(f) {
  return function (as) {
    var out = fromReadonlyNonEmptyArray(f(0, head(as)));

    for (var _i7 = 1; _i7 < as.length; _i7++) {
      out.push.apply(out, _toConsumableArray(f(_i7, as[_i7])));
    }

    return out;
  };
};
/**
 * @category combinators
 * @since 2.10.0
 */


exports.chainWithIndex = chainWithIndex;

var chop = function chop(f) {
  return function (as) {
    var _f2 = f(as),
        _f3 = _slicedToArray(_f2, 2),
        b = _f3[0],
        rest = _f3[1];

    var out = [b];
    var next = rest;

    while (isNonEmpty(next)) {
      var _f4 = f(next),
          _f5 = _slicedToArray(_f4, 2),
          _b = _f5[0],
          _rest = _f5[1];

      out.push(_b);
      next = _rest;
    }

    return out;
  };
};
/**
 * Splits a `NonEmptyArray` into two pieces, the first piece has max `n` elements.
 *
 * @category combinators
 * @since 2.10.0
 */


exports.chop = chop;

var splitAt = function splitAt(n) {
  return function (as) {
    var m = Math.max(1, n);
    return m >= as.length ? [copy(as), []] : [(0, _function.pipe)(as.slice(1, m), prepend(head(as))), as.slice(m)];
  };
};
/**
 * @category combinators
 * @since 2.10.0
 */


exports.splitAt = splitAt;

var chunksOf = function chunksOf(n) {
  return chop(splitAt(n));
}; // -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------

/* istanbul ignore next */


exports.chunksOf = chunksOf;

var _map = function _map(fa, f) {
  return (0, _function.pipe)(fa, map(f));
};
/* istanbul ignore next */


var _mapWithIndex = function _mapWithIndex(fa, f) {
  return (0, _function.pipe)(fa, mapWithIndex(f));
};
/* istanbul ignore next */


var _ap = function _ap(fab, fa) {
  return (0, _function.pipe)(fab, ap(fa));
};
/* istanbul ignore next */


var _chain = function _chain(ma, f) {
  return (0, _function.pipe)(ma, chain(f));
};
/* istanbul ignore next */


var _extend = function _extend(wa, f) {
  return (0, _function.pipe)(wa, extend(f));
};
/* istanbul ignore next */


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


var _traverse = function _traverse(F) {
  var traverseF = traverse(F);
  return function (ta, f) {
    return (0, _function.pipe)(ta, traverseF(f));
  };
};
/* istanbul ignore next */


var _alt = function _alt(fa, that) {
  return (0, _function.pipe)(fa, alt(that));
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


var _traverseWithIndex = function _traverseWithIndex(F) {
  var traverseWithIndexF = traverseWithIndex(F);
  return function (ta, f) {
    return (0, _function.pipe)(ta, traverseWithIndexF(f));
  };
}; // -------------------------------------------------------------------------------------
// type class members
// -------------------------------------------------------------------------------------

/**
 * Less strict version of [`alt`](#alt).
 *
 * @category Alt
 * @since 2.9.0
 */


var altW = function altW(that) {
  return function (as) {
    return (0, _function.pipe)(as, concatW(that()));
  };
};
/**
 * Identifies an associative operation on a type constructor. It is similar to `Semigroup`, except that it applies to
 * types of kind `* -> *`.
 *
 * @category Alt
 * @since 2.6.2
 */


exports.altW = altW;
var alt = altW;
/**
 * Apply a function to an argument under a type constructor.
 *
 * @category Apply
 * @since 2.0.0
 */

exports.alt = alt;

var ap = function ap(as) {
  return chain(function (f) {
    return (0, _function.pipe)(as, map(f));
  });
};
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation.
 *
 * @category Monad
 * @since 2.0.0
 */


exports.ap = ap;

var chain = function chain(f) {
  return chainWithIndex(function (_, a) {
    return f(a);
  });
};
/**
 * @category Extend
 * @since 2.0.0
 */


exports.chain = chain;

var extend = function extend(f) {
  return function (as) {
    var next = tail(as);
    var out = [f(as)];

    while (isNonEmpty(next)) {
      out.push(f(next));
      next = tail(next);
    }

    return out;
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
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.5.0
 */

exports.duplicate = duplicate;
var flatten = /*#__PURE__*/chain(_function.identity);
/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent some computational context.
 *
 * @category Functor
 * @since 2.0.0
 */

exports.flatten = flatten;

var map = function map(f) {
  return mapWithIndex(function (_, a) {
    return f(a);
  });
};
/**
 * @category FunctorWithIndex
 * @since 2.0.0
 */


exports.map = map;

var mapWithIndex = function mapWithIndex(f) {
  return function (as) {
    var out = [f(0, head(as))];

    for (var _i8 = 1; _i8 < as.length; _i8++) {
      out.push(f(_i8, as[_i8]));
    }

    return out;
  };
};
/**
 * @category Foldable
 * @since 2.0.0
 */


exports.mapWithIndex = mapWithIndex;
var reduce = RNEA.reduce;
/**
 * @category FoldableWithIndex
 * @since 2.0.0
 */

exports.reduce = reduce;
var reduceWithIndex = RNEA.reduceWithIndex;
/**
 * @category Foldable
 * @since 2.0.0
 */

exports.reduceWithIndex = reduceWithIndex;
var reduceRight = RNEA.reduceRight;
/**
 * @category FoldableWithIndex
 * @since 2.0.0
 */

exports.reduceRight = reduceRight;
var reduceRightWithIndex = RNEA.reduceRightWithIndex;
/**
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
 * @since 2.6.3
 */


exports.traverse = traverse;

var sequence = function sequence(F) {
  return traverseWithIndex(F)(function (_, a) {
    return a;
  });
};
/**
 * @since 2.6.3
 */


exports.sequence = sequence;

var traverseWithIndex = function traverseWithIndex(F) {
  return function (f) {
    return function (as) {
      var out = F.map(f(0, head(as)), of);

      for (var _i9 = 1; _i9 < as.length; _i9++) {
        out = F.ap(F.map(out, function (bs) {
          return function (b) {
            return (0, _function.pipe)(bs, append(b));
          };
        }), f(_i9, as[_i9]));
      }

      return out;
    };
  };
};
/**
 * @since 2.7.0
 */


exports.traverseWithIndex = traverseWithIndex;
var extract = RNEA.head; // -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------

/**
 * @category instances
 * @since 2.0.0
 */

exports.extract = extract;
var URI = 'NonEmptyArray';
/**
 * @category instances
 * @since 2.0.0
 */

exports.URI = URI;

/**
 * @category instances
 * @since 2.0.0
 */
var getShow = RNEA.getShow;
/**
 * Builds a `Semigroup` instance for `NonEmptyArray`
 *
 * @category instances
 * @since 2.0.0
 */

exports.getShow = getShow;

var getSemigroup = function getSemigroup() {
  return {
    concat: concat
  };
};
/**
 * @example
 * import { getEq } from 'fp-ts/NonEmptyArray'
 * import * as N from 'fp-ts/number'
 *
 * const E = getEq(N.Eq)
 * assert.strictEqual(E.equals([1, 2], [1, 2]), true)
 * assert.strictEqual(E.equals([1, 2], [1, 3]), false)
 *
 * @category instances
 * @since 2.0.0
 */


exports.getSemigroup = getSemigroup;
var getEq = RNEA.getEq;
/**
 * @category combinators
 * @since 2.11.0
 */

exports.getEq = getEq;

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
 * @since 2.7.0
 */


exports.getUnionSemigroup = getUnionSemigroup;
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
 * Composes computations in sequence, using the return value of one computation to determine the next computation and
 * keeping only the result of the first.
 *
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.5.0
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
  traverse: _traverse,
  sequence: sequence,
  reduceWithIndex: _reduceWithIndex,
  foldMapWithIndex: _foldMapWithIndex,
  reduceRightWithIndex: _reduceRightWithIndex,
  traverseWithIndex: _traverseWithIndex
};
/**
 * @category instances
 * @since 2.7.0
 */

exports.TraversableWithIndex = TraversableWithIndex;
var Alt = {
  URI: URI,
  map: _map,
  alt: _alt
};
/**
 * @category instances
 * @since 2.7.0
 */

exports.Alt = Alt;
var Comonad = {
  URI: URI,
  map: _map,
  extend: _extend,
  extract: extract
}; // -------------------------------------------------------------------------------------
// do notation
// -------------------------------------------------------------------------------------

/**
 * @since 2.9.0
 */

exports.Comonad = Comonad;
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
// utils
// -------------------------------------------------------------------------------------

/**
 * @since 2.0.0
 */

exports.apS = apS;
var head = RNEA.head;
/**
 * @since 2.0.0
 */

exports.head = head;

var tail = function tail(as) {
  return as.slice(1);
};
/**
 * @since 2.0.0
 */


exports.tail = tail;
var last = RNEA.last;
/**
 * Get all but the last element of a non empty array, creating a new array.
 *
 * @example
 * import { init } from 'fp-ts/NonEmptyArray'
 *
 * assert.deepStrictEqual(init([1, 2, 3]), [1, 2])
 * assert.deepStrictEqual(init([1]), [])
 *
 * @since 2.2.0
 */

exports.last = last;

var init = function init(as) {
  return as.slice(0, -1);
};
/**
 * @since 2.0.0
 */


exports.init = init;
var min = RNEA.min;
/**
 * @since 2.0.0
 */

exports.min = min;
var max = RNEA.max;
/**
 * @since 2.10.0
 */

exports.max = max;

var concatAll = function concatAll(S) {
  return function (as) {
    return as.reduce(S.concat);
  };
};
/**
 * Break an `Array` into its first element and remaining elements.
 *
 * @category destructors
 * @since 2.11.0
 */


exports.concatAll = concatAll;

var matchLeft = function matchLeft(f) {
  return function (as) {
    return f(head(as), tail(as));
  };
};
/**
 * Break an `Array` into its initial elements and the last element.
 *
 * @category destructors
 * @since 2.11.0
 */


exports.matchLeft = matchLeft;

var matchRight = function matchRight(f) {
  return function (as) {
    return f(init(as), last(as));
  };
};
/**
 * Apply a function to the head, creating a new `NonEmptyArray`.
 *
 * @since 2.11.0
 */


exports.matchRight = matchRight;

var modifyHead = function modifyHead(f) {
  return function (as) {
    return [f(head(as))].concat(_toConsumableArray(tail(as)));
  };
};
/**
 * Change the head, creating a new `NonEmptyArray`.
 *
 * @category combinators
 * @since 2.11.0
 */


exports.modifyHead = modifyHead;

var updateHead = function updateHead(a) {
  return modifyHead(function () {
    return a;
  });
};
/**
 * Apply a function to the last element, creating a new `NonEmptyArray`.
 *
 * @since 2.11.0
 */


exports.updateHead = updateHead;

var modifyLast = function modifyLast(f) {
  return function (as) {
    return (0, _function.pipe)(init(as), append(f(last(as))));
  };
};
/**
 * Change the last element, creating a new `NonEmptyArray`.
 *
 * @category combinators
 * @since 2.11.0
 */


exports.modifyLast = modifyLast;

var updateLast = function updateLast(a) {
  return modifyLast(function () {
    return a;
  });
}; // -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
// tslint:disable: deprecation

/**
 * This is just `sort` followed by `group`.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */


exports.updateLast = updateLast;

function groupSort(O) {
  var sortO = sort(O);
  var groupO = group(O);
  return function (as) {
    return isNonEmpty(as) ? groupO(sortO(as)) : [];
  };
}
/**
 * Use [`filter`](./Array.ts.html#filter) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */


function filter(predicate) {
  return filterWithIndex(function (_, a) {
    return predicate(a);
  });
}
/**
 * Use [`filterWithIndex`](./Array.ts.html#filterwithindex) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */


var filterWithIndex = function filterWithIndex(predicate) {
  return function (as) {
    return fromArray(as.filter(function (a, i) {
      return predicate(i, a);
    }));
  };
};
/**
 * Use [`unprepend`](#unprepend) instead.
 *
 * @category destructors
 * @since 2.9.0
 * @deprecated
 */


exports.filterWithIndex = filterWithIndex;
var uncons = unprepend;
/**
 * Use [`unappend`](#unappend) instead.
 *
 * @category destructors
 * @since 2.9.0
 * @deprecated
 */

exports.uncons = uncons;
var unsnoc = unappend;
/**
 * Use [`prepend`](./Array.ts.html#prepend) instead.
 *
 * @category constructors
 * @since 2.0.0
 * @deprecated
 */

exports.unsnoc = unsnoc;

function cons(head, tail) {
  return tail === undefined ? prepend(head) : (0, _function.pipe)(tail, prepend(head));
}
/**
 * Use [`append`](./Array.ts.html#append) instead.
 *
 * @category constructors
 * @since 2.0.0
 * @deprecated
 */


var snoc = function snoc(init, end) {
  return (0, _function.pipe)(init, append(end));
};
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
 * Use [`concatAll`](#concatall) instead.
 *
 * @since 2.5.0
 * @deprecated
 */

exports.prependToAll = prependToAll;
var fold = RNEA.concatAll;
/**
 * Use small, specific instances instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */

exports.fold = fold;
var nonEmptyArray = {
  URI: URI,
  of: of,
  map: _map,
  mapWithIndex: _mapWithIndex,
  ap: _ap,
  chain: _chain,
  extend: _extend,
  extract: extract,
  reduce: _reduce,
  foldMap: _foldMap,
  reduceRight: _reduceRight,
  traverse: _traverse,
  sequence: sequence,
  reduceWithIndex: _reduceWithIndex,
  foldMapWithIndex: _foldMapWithIndex,
  reduceRightWithIndex: _reduceRightWithIndex,
  traverseWithIndex: _traverseWithIndex,
  alt: _alt
};
exports.nonEmptyArray = nonEmptyArray;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mcC10cy9Ob25FbXB0eUFycmF5LnRzIl0sIm5hbWVzIjpbIlNlbWlncm91cCIsIlNlIiwiUmVhZG9ubHlOb25FbXB0eUFycmF5IiwiUk5FQSIsImlzTm9uRW1wdHkiLCJhcyIsImxlbmd0aCIsImlzT3V0T2ZCb3VuZCIsImkiLCJwcmVwZW5kVyIsImhlYWQiLCJ0YWlsIiwicHJlcGVuZCIsImFwcGVuZFciLCJlbmQiLCJpbml0IiwiYXBwZW5kIiwidW5zYWZlSW5zZXJ0QXQiLCJhIiwieHMiLCJmcm9tUmVhZG9ubHlOb25FbXB0eUFycmF5Iiwic3BsaWNlIiwidW5zYWZlVXBkYXRlQXQiLCJ1bmlxIiwiRSIsImNvcHkiLCJvdXQiLCJyZXN0IiwiZXZlcnkiLCJvIiwiZXF1YWxzIiwicHVzaCIsInNvcnRCeSIsIm9yZHMiLCJNIiwic29ydCIsInJlZHVjZSIsImNvbmNhdCIsImVtcHR5IiwidW5pb24iLCJ1bmlxRSIsInNlY29uZCIsImZpcnN0Iiwicm90YXRlIiwibiIsImxlbiIsIm0iLCJNYXRoIiwicm91bmQiLCJhYnMiLCJzcGxpdEF0IiwiZiIsInMiLCJfIiwiZnJvbUFycmF5Iiwic29tZSIsIm5vbmUiLCJtYWtlQnkiLCJqIiwibWF4IiwiZmxvb3IiLCJyZXBsaWNhdGUiLCJyYW5nZSIsInN0YXJ0IiwidW5wcmVwZW5kIiwidW5hcHBlbmQiLCJsYXN0IiwiY29uY2F0VyIsIngiLCJ5IiwicmV2ZXJzZSIsInNsaWNlIiwiZ3JvdXAiLCJuZWEiLCJncm91cEJ5IiwiayIsImhhc093blByb3BlcnR5IiwiTyIsImNvbXBhcmUiLCJpbnNlcnRBdCIsInVwZGF0ZUF0IiwibW9kaWZ5QXQiLCJvZiIsInppcFdpdGgiLCJicyIsImNzIiwibWluIiwiemlwIiwidW5kZWZpbmVkIiwiYiIsInVuemlwIiwiZmEiLCJmYiIsInByZXBlbmRBbGwiLCJtaWRkbGUiLCJpbnRlcnNwZXJzZSIsImZvbGRNYXBXaXRoSW5kZXgiLCJmb2xkTWFwIiwiY2hhaW5XaXRoSW5kZXgiLCJjaG9wIiwibmV4dCIsImNodW5rc09mIiwiX21hcCIsIm1hcCIsIl9tYXBXaXRoSW5kZXgiLCJtYXBXaXRoSW5kZXgiLCJfYXAiLCJmYWIiLCJhcCIsIl9jaGFpbiIsIm1hIiwiY2hhaW4iLCJfZXh0ZW5kIiwid2EiLCJleHRlbmQiLCJfcmVkdWNlIiwiX2ZvbGRNYXAiLCJmb2xkTWFwTSIsIl9yZWR1Y2VSaWdodCIsInJlZHVjZVJpZ2h0IiwiX3RyYXZlcnNlIiwiRiIsInRyYXZlcnNlRiIsInRyYXZlcnNlIiwidGEiLCJfYWx0IiwidGhhdCIsImFsdCIsIl9yZWR1Y2VXaXRoSW5kZXgiLCJyZWR1Y2VXaXRoSW5kZXgiLCJfZm9sZE1hcFdpdGhJbmRleCIsImZvbGRNYXBXaXRoSW5kZXhNIiwiX3JlZHVjZVJpZ2h0V2l0aEluZGV4IiwicmVkdWNlUmlnaHRXaXRoSW5kZXgiLCJfdHJhdmVyc2VXaXRoSW5kZXgiLCJ0cmF2ZXJzZVdpdGhJbmRleEYiLCJ0cmF2ZXJzZVdpdGhJbmRleCIsImFsdFciLCJkdXBsaWNhdGUiLCJpZGVudGl0eSIsImZsYXR0ZW4iLCJzZXF1ZW5jZSIsImV4dHJhY3QiLCJVUkkiLCJnZXRTaG93IiwiZ2V0U2VtaWdyb3VwIiwiZ2V0RXEiLCJnZXRVbmlvblNlbWlncm91cCIsInVuaW9uRSIsIkZ1bmN0b3IiLCJmbGFwIiwiUG9pbnRlZCIsIkZ1bmN0b3JXaXRoSW5kZXgiLCJBcHBseSIsImFwRmlyc3QiLCJhcFNlY29uZCIsIkFwcGxpY2F0aXZlIiwiQ2hhaW4iLCJjaGFpbkZpcnN0IiwiTW9uYWQiLCJGb2xkYWJsZSIsIkZvbGRhYmxlV2l0aEluZGV4IiwiVHJhdmVyc2FibGUiLCJUcmF2ZXJzYWJsZVdpdGhJbmRleCIsIkFsdCIsIkNvbW9uYWQiLCJEbyIsImVtcHR5UmVjb3JkIiwiYmluZFRvIiwiYmluZCIsImFwUyIsImNvbmNhdEFsbCIsIlMiLCJtYXRjaExlZnQiLCJtYXRjaFJpZ2h0IiwibW9kaWZ5SGVhZCIsInVwZGF0ZUhlYWQiLCJtb2RpZnlMYXN0IiwidXBkYXRlTGFzdCIsImdyb3VwU29ydCIsInNvcnRPIiwiZ3JvdXBPIiwiZmlsdGVyIiwicHJlZGljYXRlIiwiZmlsdGVyV2l0aEluZGV4IiwidW5jb25zIiwidW5zbm9jIiwiY29ucyIsInNub2MiLCJwcmVwZW5kVG9BbGwiLCJmb2xkIiwibm9uRW1wdHlBcnJheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkE7O0FBQ0E7O0FBT0E7O0FBQ0E7O0FBR0E7O0FBR0E7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFPT0EsUyxHQUFZQyxFLENBQUdELFM7SUFDZkUscUIsR0FBd0JDLEksQ0FBS0QscUIsRUFFcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQU1BO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDTyxJQUFNRSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFJQyxFQUFKO0FBQUEsU0FBNkNBLEVBQUUsQ0FBQ0MsTUFBSCxHQUFZLENBQXpEO0FBQUEsQ0FBbkI7QUFFUDtBQUNBO0FBQ0E7Ozs7O0FBQ08sSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBSUMsQ0FBSixFQUFlSCxFQUFmO0FBQUEsU0FBeUNHLENBQUMsR0FBRyxDQUFKLElBQVNBLENBQUMsSUFBSUgsRUFBRSxDQUFDQyxNQUExRDtBQUFBLENBQXJCO0FBRVA7QUFDQTtBQUNBOzs7OztBQUNPLElBQU1HLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUlDLElBQUo7QUFBQSxTQUFnQixVQUFJQyxJQUFKO0FBQUEsWUFBOENELElBQTlDLDRCQUF1REMsSUFBdkQ7QUFBQSxHQUFoQjtBQUFBLENBQWpCO0FBRVA7QUFDQTtBQUNBOzs7O0FBQ08sSUFBTUMsT0FBNkQsR0FBR0gsUUFBdEU7QUFFUDtBQUNBO0FBQ0E7Ozs7QUFDTyxJQUFNSSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFJQyxHQUFKO0FBQUEsU0FBZSxVQUFJQyxJQUFKO0FBQUEsd0NBQWlEQSxJQUFqRCxJQUF1REQsR0FBdkQ7QUFBQSxHQUFmO0FBQUEsQ0FBaEI7QUFFUDtBQUNBO0FBQ0E7Ozs7QUFDTyxJQUFNRSxNQUEyRCxHQUFHSCxPQUFwRTtBQUVQO0FBQ0E7QUFDQTs7OztBQUNPLElBQU1JLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBSVQsQ0FBSixFQUFlVSxDQUFmLEVBQXFCYixFQUFyQixFQUF3RDtBQUNwRixNQUFJRCxVQUFVLENBQUNDLEVBQUQsQ0FBZCxFQUFvQjtBQUNsQixRQUFNYyxFQUFFLEdBQUdDLHlCQUF5QixDQUFDZixFQUFELENBQXBDO0FBQ0FjLElBQUFBLEVBQUUsQ0FBQ0UsTUFBSCxDQUFVYixDQUFWLEVBQWEsQ0FBYixFQUFnQlUsQ0FBaEI7QUFDQSxXQUFPQyxFQUFQO0FBQ0Q7O0FBQ0QsU0FBTyxDQUFDRCxDQUFELENBQVA7QUFDRCxDQVBNO0FBU1A7QUFDQTtBQUNBOzs7OztBQUNPLElBQU1JLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBSWQsQ0FBSixFQUFlVSxDQUFmLEVBQXFCYixFQUFyQixFQUFnRTtBQUM1RixNQUFNYyxFQUFFLEdBQUdDLHlCQUF5QixDQUFDZixFQUFELENBQXBDO0FBQ0FjLEVBQUFBLEVBQUUsQ0FBQ1gsQ0FBRCxDQUFGLEdBQVFVLENBQVI7QUFDQSxTQUFPQyxFQUFQO0FBQ0QsQ0FKTTtBQU1QO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDTyxJQUFNSSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFJQyxDQUFKO0FBQUEsU0FBaUIsVUFBQ25CLEVBQUQsRUFBNEM7QUFDL0UsUUFBSUEsRUFBRSxDQUFDQyxNQUFILEtBQWMsQ0FBbEIsRUFBcUI7QUFDbkIsYUFBT21CLElBQUksQ0FBQ3BCLEVBQUQsQ0FBWDtBQUNEOztBQUNELFFBQU1xQixHQUFxQixHQUFHLENBQUNoQixJQUFJLENBQUNMLEVBQUQsQ0FBTCxDQUE5QjtBQUNBLFFBQU1zQixJQUFJLEdBQUdoQixJQUFJLENBQUNOLEVBQUQsQ0FBakI7O0FBTCtFLCtDQU0vRHNCLElBTitEO0FBQUE7O0FBQUE7QUFBQTtBQUFBLFlBTXBFVCxDQU5vRTs7QUFPN0UsWUFBSVEsR0FBRyxDQUFDRSxLQUFKLENBQVUsVUFBQ0MsQ0FBRDtBQUFBLGlCQUFPLENBQUNMLENBQUMsQ0FBQ00sTUFBRixDQUFTRCxDQUFULEVBQVlYLENBQVosQ0FBUjtBQUFBLFNBQVYsQ0FBSixFQUF1QztBQUNyQ1EsVUFBQUEsR0FBRyxDQUFDSyxJQUFKLENBQVNiLENBQVQ7QUFDRDtBQVQ0RTs7QUFNL0UsMERBQXNCO0FBQUE7QUFJckI7QUFWOEU7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFXL0UsV0FBT1EsR0FBUDtBQUNELEdBWm1CO0FBQUEsQ0FBYjtBQWNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDTyxJQUFNTSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFJQyxJQUFKLEVBQXVGO0FBQzNHLE1BQUk3QixVQUFVLENBQUM2QixJQUFELENBQWQsRUFBc0I7QUFDcEIsUUFBTUMsQ0FBQyxHQUFHLHFCQUFWO0FBQ0EsV0FBT0MsSUFBSSxDQUFDRixJQUFJLENBQUNHLE1BQUwsQ0FBWUYsQ0FBQyxDQUFDRyxNQUFkLEVBQXNCSCxDQUFDLENBQUNJLEtBQXhCLENBQUQsQ0FBWDtBQUNEOztBQUNELFNBQU9iLElBQVA7QUFDRCxDQU5NO0FBUVA7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ08sSUFBTWMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBSWYsQ0FBSixFQUFnRztBQUNuSCxNQUFNZ0IsS0FBSyxHQUFHakIsSUFBSSxDQUFDQyxDQUFELENBQWxCO0FBQ0EsU0FBTyxVQUFDaUIsTUFBRDtBQUFBLFdBQVksVUFBQ0MsS0FBRDtBQUFBLGFBQVdGLEtBQUssQ0FBQyxvQkFBS0UsS0FBTCxFQUFZTCxNQUFNLENBQUNJLE1BQUQsQ0FBbEIsQ0FBRCxDQUFoQjtBQUFBLEtBQVo7QUFBQSxHQUFQO0FBQ0QsQ0FITTtBQUtQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDTyxJQUFNRSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxDQUFEO0FBQUEsU0FBZSxVQUFJdkMsRUFBSixFQUErQztBQUNsRixRQUFNd0MsR0FBRyxHQUFHeEMsRUFBRSxDQUFDQyxNQUFmO0FBQ0EsUUFBTXdDLENBQUMsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdKLENBQVgsSUFBZ0JDLEdBQTFCOztBQUNBLFFBQUl0QyxZQUFZLENBQUN3QyxJQUFJLENBQUNFLEdBQUwsQ0FBU0gsQ0FBVCxDQUFELEVBQWN6QyxFQUFkLENBQVosSUFBaUN5QyxDQUFDLEtBQUssQ0FBM0MsRUFBOEM7QUFDNUMsYUFBT3JCLElBQUksQ0FBQ3BCLEVBQUQsQ0FBWDtBQUNEOztBQUNELFFBQUl5QyxDQUFDLEdBQUcsQ0FBUixFQUFXO0FBQ1QscUJBQWVJLE9BQU8sQ0FBQyxDQUFDSixDQUFGLENBQVAsQ0FBWXpDLEVBQVosQ0FBZjtBQUFBO0FBQUEsVUFBTzhDLEVBQVA7QUFBQSxVQUFVQyxDQUFWOztBQUNBLGFBQU8sb0JBQUtBLENBQUwsRUFBUWYsTUFBTSxDQUFDYyxFQUFELENBQWQsQ0FBUDtBQUNELEtBSEQsTUFHTztBQUNMLGFBQU9SLE1BQU0sQ0FBQ0csQ0FBQyxHQUFHRCxHQUFMLENBQU4sQ0FBZ0J4QyxFQUFoQixDQUFQO0FBQ0Q7QUFDRixHQVpxQjtBQUFBLENBQWYsQyxDQWNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUNPLElBQU1lLHlCQUFnRixHQUMzRmlDLENBQUMsQ0FBQ2pDLHlCQURHO0FBR1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBQ08sSUFBTWtDLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUlqRCxFQUFKO0FBQUEsU0FBZ0RELFVBQVUsQ0FBQ0MsRUFBRCxDQUFWLEdBQWlCZ0QsQ0FBQyxDQUFDRSxJQUFGLENBQU9sRCxFQUFQLENBQWpCLEdBQThCZ0QsQ0FBQyxDQUFDRyxJQUFoRjtBQUFBLENBQWxCO0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNPLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUlOLENBQUo7QUFBQSxTQUE0QixVQUFDUCxDQUFELEVBQWlDO0FBQ2pGLFFBQU1jLENBQUMsR0FBR1gsSUFBSSxDQUFDWSxHQUFMLENBQVMsQ0FBVCxFQUFZWixJQUFJLENBQUNhLEtBQUwsQ0FBV2hCLENBQVgsQ0FBWixDQUFWO0FBQ0EsUUFBTWxCLEdBQXFCLEdBQUcsQ0FBQ3lCLENBQUMsQ0FBQyxDQUFELENBQUYsQ0FBOUI7O0FBQ0EsU0FBSyxJQUFJM0MsR0FBQyxHQUFHLENBQWIsRUFBZ0JBLEdBQUMsR0FBR2tELENBQXBCLEVBQXVCbEQsR0FBQyxFQUF4QixFQUE0QjtBQUMxQmtCLE1BQUFBLEdBQUcsQ0FBQ0ssSUFBSixDQUFTb0IsQ0FBQyxDQUFDM0MsR0FBRCxDQUFWO0FBQ0Q7O0FBQ0QsV0FBT2tCLEdBQVA7QUFDRCxHQVBxQjtBQUFBLENBQWY7QUFTUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNPLElBQU1tQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFJM0MsQ0FBSjtBQUFBLFNBQXdEdUMsTUFBTSxDQUFDO0FBQUEsV0FBTXZDLENBQU47QUFBQSxHQUFELENBQTlEO0FBQUEsQ0FBbEI7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNPLElBQU00QyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxLQUFELEVBQWdCakQsR0FBaEI7QUFBQSxTQUNuQmlELEtBQUssSUFBSWpELEdBQVQsR0FBZTJDLE1BQU0sQ0FBQyxVQUFDakQsQ0FBRDtBQUFBLFdBQU91RCxLQUFLLEdBQUd2RCxDQUFmO0FBQUEsR0FBRCxDQUFOLENBQXlCTSxHQUFHLEdBQUdpRCxLQUFOLEdBQWMsQ0FBdkMsQ0FBZixHQUEyRCxDQUFDQSxLQUFELENBRHhDO0FBQUEsQ0FBZCxDLENBR1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ08sSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBSTNELEVBQUo7QUFBQSxTQUE0QyxDQUFDSyxJQUFJLENBQUNMLEVBQUQsQ0FBTCxFQUFXTSxJQUFJLENBQUNOLEVBQUQsQ0FBZixDQUE1QztBQUFBLENBQWxCO0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDTyxJQUFNNEQsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBSTVELEVBQUo7QUFBQSxTQUE0QyxDQUFDVSxJQUFJLENBQUNWLEVBQUQsQ0FBTCxFQUFXNkQsSUFBSSxDQUFDN0QsRUFBRCxDQUFmLENBQTVDO0FBQUEsQ0FBakIsQyxDQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFHTyxTQUFTOEQsT0FBVCxDQUFvQjFCLE1BQXBCLEVBQW9GO0FBQ3pGLFNBQU8sVUFBSUMsS0FBSjtBQUFBLFdBQW9DQSxLQUFLLENBQUNMLE1BQU4sQ0FBYUksTUFBYixDQUFwQztBQUFBLEdBQVA7QUFDRDtBQUVEO0FBQ0E7QUFDQTtBQUNBOzs7QUFPTyxTQUFTSixNQUFULENBQW1CK0IsQ0FBbkIsRUFBZ0NDLENBQWhDLEVBQThGO0FBQ25HLFNBQU9BLENBQUMsR0FBR0QsQ0FBQyxDQUFDL0IsTUFBRixDQUFTZ0MsQ0FBVCxDQUFILEdBQWlCLFVBQUNBLENBQUQ7QUFBQSxXQUFPQSxDQUFDLENBQUNoQyxNQUFGLENBQVMrQixDQUFULENBQVA7QUFBQSxHQUF6QjtBQUNEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLElBQU1FLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUlqRSxFQUFKO0FBQUEsVUFBZ0Q2RCxJQUFJLENBQUM3RCxFQUFELENBQXBELDRCQUE2REEsRUFBRSxDQUFDa0UsS0FBSCxDQUFTLENBQVQsRUFBWSxDQUFDLENBQWIsRUFBZ0JELE9BQWhCLEVBQTdEO0FBQUEsQ0FBaEI7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFPTyxTQUFTRSxLQUFULENBQWtCaEQsQ0FBbEIsRUFBdUU7QUFDNUUsU0FBTyxVQUFDbkIsRUFBRCxFQUFRO0FBQ2IsUUFBTXdDLEdBQUcsR0FBR3hDLEVBQUUsQ0FBQ0MsTUFBZjs7QUFDQSxRQUFJdUMsR0FBRyxLQUFLLENBQVosRUFBZTtBQUNiLGFBQU8sRUFBUDtBQUNEOztBQUNELFFBQU1uQixHQUE0QixHQUFHLEVBQXJDO0FBQ0EsUUFBSWhCLElBQU8sR0FBR0wsRUFBRSxDQUFDLENBQUQsQ0FBaEI7QUFDQSxRQUFJb0UsR0FBcUIsR0FBRyxDQUFDL0QsSUFBRCxDQUE1Qjs7QUFDQSxTQUFLLElBQUlGLEdBQUMsR0FBRyxDQUFiLEVBQWdCQSxHQUFDLEdBQUdxQyxHQUFwQixFQUF5QnJDLEdBQUMsRUFBMUIsRUFBOEI7QUFDNUIsVUFBTVUsRUFBQyxHQUFHYixFQUFFLENBQUNHLEdBQUQsQ0FBWjs7QUFDQSxVQUFJZ0IsQ0FBQyxDQUFDTSxNQUFGLENBQVNaLEVBQVQsRUFBWVIsSUFBWixDQUFKLEVBQXVCO0FBQ3JCK0QsUUFBQUEsR0FBRyxDQUFDMUMsSUFBSixDQUFTYixFQUFUO0FBQ0QsT0FGRCxNQUVPO0FBQ0xRLFFBQUFBLEdBQUcsQ0FBQ0ssSUFBSixDQUFTMEMsR0FBVDtBQUNBL0QsUUFBQUEsSUFBSSxHQUFHUSxFQUFQO0FBQ0F1RCxRQUFBQSxHQUFHLEdBQUcsQ0FBQy9ELElBQUQsQ0FBTjtBQUNEO0FBQ0Y7O0FBQ0RnQixJQUFBQSxHQUFHLENBQUNLLElBQUosQ0FBUzBDLEdBQVQ7QUFDQSxXQUFPL0MsR0FBUDtBQUNELEdBcEJEO0FBcUJEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxJQUFNZ0QsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBSXZCLENBQUo7QUFBQSxTQUE0QixVQUFDOUMsRUFBRCxFQUFvRDtBQUNyRyxRQUFNcUIsR0FBcUMsR0FBRyxFQUE5Qzs7QUFEcUcsZ0RBRXJGckIsRUFGcUY7QUFBQTs7QUFBQTtBQUVyRyw2REFBb0I7QUFBQSxZQUFUYSxHQUFTO0FBQ2xCLFlBQU15RCxDQUFDLEdBQUd4QixDQUFDLENBQUNqQyxHQUFELENBQVg7O0FBQ0EsWUFBSVEsR0FBRyxDQUFDa0QsY0FBSixDQUFtQkQsQ0FBbkIsQ0FBSixFQUEyQjtBQUN6QmpELFVBQUFBLEdBQUcsQ0FBQ2lELENBQUQsQ0FBSCxDQUFPNUMsSUFBUCxDQUFZYixHQUFaO0FBQ0QsU0FGRCxNQUVPO0FBQ0xRLFVBQUFBLEdBQUcsQ0FBQ2lELENBQUQsQ0FBSCxHQUFTLENBQUN6RCxHQUFELENBQVQ7QUFDRDtBQUNGO0FBVG9HO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBVXJHLFdBQU9RLEdBQVA7QUFDRCxHQVhzQjtBQUFBLENBQWhCO0FBYVA7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ08sSUFBTVMsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBSTBDLENBQUo7QUFBQSxTQUFrQixVQUFjeEUsRUFBZDtBQUFBLFdBQ3BDQSxFQUFFLENBQUNrRSxLQUFILEdBQVdwQyxJQUFYLENBQWdCMEMsQ0FBQyxDQUFDQyxPQUFsQixDQURvQztBQUFBLEdBQWxCO0FBQUEsQ0FBYjtBQUdQO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNPLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUl2RSxDQUFKLEVBQWVVLENBQWY7QUFBQSxTQUF3QixVQUFDYixFQUFEO0FBQUEsV0FDOUNHLENBQUMsR0FBRyxDQUFKLElBQVNBLENBQUMsR0FBR0gsRUFBRSxDQUFDQyxNQUFoQixHQUF5QitDLENBQUMsQ0FBQ0csSUFBM0IsR0FBa0NILENBQUMsQ0FBQ0UsSUFBRixDQUFPdEMsY0FBYyxDQUFDVCxDQUFELEVBQUlVLENBQUosRUFBT2IsRUFBUCxDQUFyQixDQURZO0FBQUEsR0FBeEI7QUFBQSxDQUFqQjtBQUdQO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNPLElBQU0yRSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFJeEUsQ0FBSixFQUFlVSxDQUFmO0FBQUEsU0FDdEIrRCxRQUFRLENBQUN6RSxDQUFELEVBQUk7QUFBQSxXQUFNVSxDQUFOO0FBQUEsR0FBSixDQURjO0FBQUEsQ0FBakI7QUFHUDtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDTyxJQUFNK0QsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBSXpFLENBQUosRUFBZTJDLENBQWY7QUFBQSxTQUFrQyxVQUFDOUMsRUFBRDtBQUFBLFdBQ3hERSxZQUFZLENBQUNDLENBQUQsRUFBSUgsRUFBSixDQUFaLEdBQXNCZ0QsQ0FBQyxDQUFDRyxJQUF4QixHQUErQkgsQ0FBQyxDQUFDRSxJQUFGLENBQU9qQyxjQUFjLENBQUNkLENBQUQsRUFBSTJDLENBQUMsQ0FBQzlDLEVBQUUsQ0FBQ0csQ0FBRCxDQUFILENBQUwsRUFBY0gsRUFBZCxDQUFyQixDQUR5QjtBQUFBLEdBQWxDO0FBQUEsQ0FBakI7QUFHUDtBQUNBO0FBQ0E7QUFDQTs7OztBQUNPLElBQU1vQixJQUFtRCxHQUFHTCx5QkFBNUQ7QUFFUDtBQUNBO0FBQ0E7QUFDQTs7OztBQUNPLElBQU04RCxFQUF1QixHQUFHLFNBQTFCQSxFQUEwQixDQUFDaEUsQ0FBRDtBQUFBLFNBQU8sQ0FBQ0EsQ0FBRCxDQUFQO0FBQUEsQ0FBaEM7QUFFUDtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDTyxJQUFNaUUsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FDckI5RSxFQURxQixFQUVyQitFLEVBRnFCLEVBR3JCakMsQ0FIcUIsRUFJQTtBQUNyQixNQUFNa0MsRUFBb0IsR0FBRyxDQUFDbEMsQ0FBQyxDQUFDOUMsRUFBRSxDQUFDLENBQUQsQ0FBSCxFQUFRK0UsRUFBRSxDQUFDLENBQUQsQ0FBVixDQUFGLENBQTdCO0FBQ0EsTUFBTXZDLEdBQUcsR0FBR0UsSUFBSSxDQUFDdUMsR0FBTCxDQUFTakYsRUFBRSxDQUFDQyxNQUFaLEVBQW9COEUsRUFBRSxDQUFDOUUsTUFBdkIsQ0FBWjs7QUFDQSxPQUFLLElBQUlFLEdBQUMsR0FBRyxDQUFiLEVBQWdCQSxHQUFDLEdBQUdxQyxHQUFwQixFQUF5QnJDLEdBQUMsRUFBMUIsRUFBOEI7QUFDNUI2RSxJQUFBQSxFQUFFLENBQUM3RSxHQUFELENBQUYsR0FBUTJDLENBQUMsQ0FBQzlDLEVBQUUsQ0FBQ0csR0FBRCxDQUFILEVBQVE0RSxFQUFFLENBQUM1RSxHQUFELENBQVYsQ0FBVDtBQUNEOztBQUNELFNBQU82RSxFQUFQO0FBQ0QsQ0FYTTtBQWFQO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUdPLFNBQVNFLEdBQVQsQ0FDTGxGLEVBREssRUFFTCtFLEVBRkssRUFHc0U7QUFDM0UsTUFBSUEsRUFBRSxLQUFLSSxTQUFYLEVBQXNCO0FBQ3BCLFdBQU8sVUFBQ0osRUFBRDtBQUFBLGFBQVFHLEdBQUcsQ0FBQ0gsRUFBRCxFQUFLL0UsRUFBTCxDQUFYO0FBQUEsS0FBUDtBQUNEOztBQUNELFNBQU84RSxPQUFPLENBQUM5RSxFQUFELEVBQUsrRSxFQUFMLEVBQVMsVUFBQ2xFLENBQUQsRUFBSXVFLENBQUo7QUFBQSxXQUFVLENBQUN2RSxDQUFELEVBQUl1RSxDQUFKLENBQVY7QUFBQSxHQUFULENBQWQ7QUFDRDtBQUVEO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFPekMsR0FBUCxFQUE0RTtBQUMvRixNQUFNMEMsRUFBb0IsR0FBRyxDQUFDMUMsR0FBRyxDQUFDLENBQUQsQ0FBSCxDQUFPLENBQVAsQ0FBRCxDQUE3QjtBQUNBLE1BQU0yQyxFQUFvQixHQUFHLENBQUMzQyxHQUFHLENBQUMsQ0FBRCxDQUFILENBQU8sQ0FBUCxDQUFELENBQTdCOztBQUNBLE9BQUssSUFBSXpDLEdBQUMsR0FBRyxDQUFiLEVBQWdCQSxHQUFDLEdBQUd5QyxHQUFHLENBQUMzQyxNQUF4QixFQUFnQ0UsR0FBQyxFQUFqQyxFQUFxQztBQUNuQ21GLElBQUFBLEVBQUUsQ0FBQ25GLEdBQUQsQ0FBRixHQUFReUMsR0FBRyxDQUFDekMsR0FBRCxDQUFILENBQU8sQ0FBUCxDQUFSO0FBQ0FvRixJQUFBQSxFQUFFLENBQUNwRixHQUFELENBQUYsR0FBUXlDLEdBQUcsQ0FBQ3pDLEdBQUQsQ0FBSCxDQUFPLENBQVAsQ0FBUjtBQUNEOztBQUNELFNBQU8sQ0FBQ21GLEVBQUQsRUFBS0MsRUFBTCxDQUFQO0FBQ0QsQ0FSTTtBQVVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ08sSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBSUMsTUFBSjtBQUFBLFNBQWtCLFVBQUN6RixFQUFELEVBQTRDO0FBQ3RGLFFBQU1xQixHQUFxQixHQUFHLENBQUNvRSxNQUFELEVBQVN6RixFQUFFLENBQUMsQ0FBRCxDQUFYLENBQTlCOztBQUNBLFNBQUssSUFBSUcsR0FBQyxHQUFHLENBQWIsRUFBZ0JBLEdBQUMsR0FBR0gsRUFBRSxDQUFDQyxNQUF2QixFQUErQkUsR0FBQyxFQUFoQyxFQUFvQztBQUNsQ2tCLE1BQUFBLEdBQUcsQ0FBQ0ssSUFBSixDQUFTK0QsTUFBVCxFQUFpQnpGLEVBQUUsQ0FBQ0csR0FBRCxDQUFuQjtBQUNEOztBQUNELFdBQU9rQixHQUFQO0FBQ0QsR0FOeUI7QUFBQSxDQUFuQjtBQVFQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ08sSUFBTXFFLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUlELE1BQUo7QUFBQSxTQUFrQixVQUFDekYsRUFBRCxFQUE0QztBQUN2RixRQUFNc0IsSUFBSSxHQUFHaEIsSUFBSSxDQUFDTixFQUFELENBQWpCO0FBQ0EsV0FBT0QsVUFBVSxDQUFDdUIsSUFBRCxDQUFWLEdBQW1CLG9CQUFLQSxJQUFMLEVBQVdrRSxVQUFVLENBQUNDLE1BQUQsQ0FBckIsRUFBK0JsRixPQUFPLENBQUNGLElBQUksQ0FBQ0wsRUFBRCxDQUFMLENBQXRDLENBQW5CLEdBQXVFb0IsSUFBSSxDQUFDcEIsRUFBRCxDQUFsRjtBQUNELEdBSDBCO0FBQUEsQ0FBcEI7QUFLUDtBQUNBO0FBQ0E7QUFDQTs7OztBQUNPLElBQU0yRixnQkFBdUcsR0FDbEg3RixJQUFJLENBQUM2RixnQkFEQTtBQUdQO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxJQUFNQyxPQUFtRixHQUFHOUYsSUFBSSxDQUFDOEYsT0FBakc7QUFFUDtBQUNBO0FBQ0E7QUFDQTs7OztBQUNPLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBTy9DLENBQVA7QUFBQSxTQUFvRCxVQUNoRjlDLEVBRGdGLEVBRTNEO0FBQ3JCLFFBQU1xQixHQUFxQixHQUFHTix5QkFBeUIsQ0FBQytCLENBQUMsQ0FBQyxDQUFELEVBQUl6QyxJQUFJLENBQUNMLEVBQUQsQ0FBUixDQUFGLENBQXZEOztBQUNBLFNBQUssSUFBSUcsR0FBQyxHQUFHLENBQWIsRUFBZ0JBLEdBQUMsR0FBR0gsRUFBRSxDQUFDQyxNQUF2QixFQUErQkUsR0FBQyxFQUFoQyxFQUFvQztBQUNsQ2tCLE1BQUFBLEdBQUcsQ0FBQ0ssSUFBSixPQUFBTCxHQUFHLHFCQUFTeUIsQ0FBQyxDQUFDM0MsR0FBRCxFQUFJSCxFQUFFLENBQUNHLEdBQUQsQ0FBTixDQUFWLEVBQUg7QUFDRDs7QUFDRCxXQUFPa0IsR0FBUDtBQUNELEdBUjZCO0FBQUEsQ0FBdkI7QUFVUDtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDTyxJQUFNeUUsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBT2hELENBQVA7QUFBQSxTQUFzRCxVQUFDOUMsRUFBRCxFQUE0QztBQUNwSCxjQUFrQjhDLENBQUMsQ0FBQzlDLEVBQUQsQ0FBbkI7QUFBQTtBQUFBLFFBQU9vRixDQUFQO0FBQUEsUUFBVTlELElBQVY7O0FBQ0EsUUFBTUQsR0FBcUIsR0FBRyxDQUFDK0QsQ0FBRCxDQUE5QjtBQUNBLFFBQUlXLElBQWMsR0FBR3pFLElBQXJCOztBQUNBLFdBQU92QixVQUFVLENBQUNnRyxJQUFELENBQWpCLEVBQXlCO0FBQ3ZCLGdCQUFrQmpELENBQUMsQ0FBQ2lELElBQUQsQ0FBbkI7QUFBQTtBQUFBLFVBQU9YLEVBQVA7QUFBQSxVQUFVOUQsS0FBVjs7QUFDQUQsTUFBQUEsR0FBRyxDQUFDSyxJQUFKLENBQVMwRCxFQUFUO0FBQ0FXLE1BQUFBLElBQUksR0FBR3pFLEtBQVA7QUFDRDs7QUFDRCxXQUFPRCxHQUFQO0FBQ0QsR0FWbUI7QUFBQSxDQUFiO0FBWVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNPLElBQU13QixPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDTixDQUFEO0FBQUEsU0FBZSxVQUFJdkMsRUFBSixFQUEyRDtBQUMvRixRQUFNeUMsQ0FBQyxHQUFHQyxJQUFJLENBQUNZLEdBQUwsQ0FBUyxDQUFULEVBQVlmLENBQVosQ0FBVjtBQUNBLFdBQU9FLENBQUMsSUFBSXpDLEVBQUUsQ0FBQ0MsTUFBUixHQUFpQixDQUFDbUIsSUFBSSxDQUFDcEIsRUFBRCxDQUFMLEVBQVcsRUFBWCxDQUFqQixHQUFrQyxDQUFDLG9CQUFLQSxFQUFFLENBQUNrRSxLQUFILENBQVMsQ0FBVCxFQUFZekIsQ0FBWixDQUFMLEVBQXFCbEMsT0FBTyxDQUFDRixJQUFJLENBQUNMLEVBQUQsQ0FBTCxDQUE1QixDQUFELEVBQTBDQSxFQUFFLENBQUNrRSxLQUFILENBQVN6QixDQUFULENBQTFDLENBQXpDO0FBQ0QsR0FIc0I7QUFBQSxDQUFoQjtBQUtQO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNPLElBQU11RCxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDekQsQ0FBRDtBQUFBLFNBQStFdUQsSUFBSSxDQUFDakQsT0FBTyxDQUFDTixDQUFELENBQVIsQ0FBbkY7QUFBQSxDQUFqQixDLENBRVA7QUFDQTtBQUNBOztBQUVBOzs7OztBQUNBLElBQU0wRCxJQUEwQixHQUFHLFNBQTdCQSxJQUE2QixDQUFDWCxFQUFELEVBQUt4QyxDQUFMO0FBQUEsU0FBVyxvQkFBS3dDLEVBQUwsRUFBU1ksR0FBRyxDQUFDcEQsQ0FBRCxDQUFaLENBQVg7QUFBQSxDQUFuQztBQUNBOzs7QUFDQSxJQUFNcUQsYUFBNkQsR0FBRyxTQUFoRUEsYUFBZ0UsQ0FBQ2IsRUFBRCxFQUFLeEMsQ0FBTDtBQUFBLFNBQVcsb0JBQUt3QyxFQUFMLEVBQVNjLFlBQVksQ0FBQ3RELENBQUQsQ0FBckIsQ0FBWDtBQUFBLENBQXRFO0FBQ0E7OztBQUNBLElBQU11RCxHQUFzQixHQUFHLFNBQXpCQSxHQUF5QixDQUFDQyxHQUFELEVBQU1oQixFQUFOO0FBQUEsU0FBYSxvQkFBS2dCLEdBQUwsRUFBVUMsRUFBRSxDQUFDakIsRUFBRCxDQUFaLENBQWI7QUFBQSxDQUEvQjtBQUNBOzs7QUFDQSxJQUFNa0IsTUFBNEIsR0FBRyxTQUEvQkEsTUFBK0IsQ0FBQ0MsRUFBRCxFQUFLM0QsQ0FBTDtBQUFBLFNBQVcsb0JBQUsyRCxFQUFMLEVBQVNDLEtBQUssQ0FBQzVELENBQUQsQ0FBZCxDQUFYO0FBQUEsQ0FBckM7QUFDQTs7O0FBQ0EsSUFBTTZELE9BQStCLEdBQUcsU0FBbENBLE9BQWtDLENBQUNDLEVBQUQsRUFBSzlELENBQUw7QUFBQSxTQUFXLG9CQUFLOEQsRUFBTCxFQUFTQyxNQUFNLENBQUMvRCxDQUFELENBQWYsQ0FBWDtBQUFBLENBQXhDO0FBQ0E7OztBQUNBLElBQU1nRSxPQUFpQyxHQUFHLFNBQXBDQSxPQUFvQyxDQUFDeEIsRUFBRCxFQUFLRixDQUFMLEVBQVF0QyxDQUFSO0FBQUEsU0FBYyxvQkFBS3dDLEVBQUwsRUFBU3ZELE1BQU0sQ0FBQ3FELENBQUQsRUFBSXRDLENBQUosQ0FBZixDQUFkO0FBQUEsQ0FBMUM7QUFDQTs7O0FBQ0EsSUFBTWlFLFFBQW1DLEdBQUcsU0FBdENBLFFBQXNDLENBQUNsRixDQUFELEVBQU87QUFDakQsTUFBTW1GLFFBQVEsR0FBR3BCLE9BQU8sQ0FBQy9ELENBQUQsQ0FBeEI7QUFDQSxTQUFPLFVBQUN5RCxFQUFELEVBQUt4QyxDQUFMO0FBQUEsV0FBVyxvQkFBS3dDLEVBQUwsRUFBUzBCLFFBQVEsQ0FBQ2xFLENBQUQsQ0FBakIsQ0FBWDtBQUFBLEdBQVA7QUFDRCxDQUhEO0FBSUE7OztBQUNBLElBQU1tRSxZQUEyQyxHQUFHLFNBQTlDQSxZQUE4QyxDQUFDM0IsRUFBRCxFQUFLRixDQUFMLEVBQVF0QyxDQUFSO0FBQUEsU0FBYyxvQkFBS3dDLEVBQUwsRUFBUzRCLFdBQVcsQ0FBQzlCLENBQUQsRUFBSXRDLENBQUosQ0FBcEIsQ0FBZDtBQUFBLENBQXBEO0FBQ0E7OztBQUNBLElBQU1xRSxTQUF3QyxHQUFHLFNBQTNDQSxTQUEyQyxDQUMvQ0MsQ0FEK0MsRUFFd0M7QUFDdkYsTUFBTUMsU0FBUyxHQUFHQyxRQUFRLENBQUNGLENBQUQsQ0FBMUI7QUFDQSxTQUFPLFVBQUNHLEVBQUQsRUFBS3pFLENBQUw7QUFBQSxXQUFXLG9CQUFLeUUsRUFBTCxFQUFTRixTQUFTLENBQUN2RSxDQUFELENBQWxCLENBQVg7QUFBQSxHQUFQO0FBQ0QsQ0FMRDtBQU1BOzs7QUFDQSxJQUFNMEUsSUFBc0IsR0FBRyxTQUF6QkEsSUFBeUIsQ0FBQ2xDLEVBQUQsRUFBS21DLElBQUw7QUFBQSxTQUFjLG9CQUFLbkMsRUFBTCxFQUFTb0MsR0FBRyxDQUFDRCxJQUFELENBQVosQ0FBZDtBQUFBLENBQS9CO0FBQ0E7OztBQUNBLElBQU1FLGdCQUFvRSxHQUFHLFNBQXZFQSxnQkFBdUUsQ0FBQ3JDLEVBQUQsRUFBS0YsQ0FBTCxFQUFRdEMsQ0FBUjtBQUFBLFNBQzNFLG9CQUFLd0MsRUFBTCxFQUFTc0MsZUFBZSxDQUFDeEMsQ0FBRCxFQUFJdEMsQ0FBSixDQUF4QixDQUQyRTtBQUFBLENBQTdFO0FBRUE7OztBQUNBLElBQU0rRSxpQkFBc0UsR0FBRyxTQUF6RUEsaUJBQXlFLENBQUNoRyxDQUFELEVBQU87QUFDcEYsTUFBTWlHLGlCQUFpQixHQUFHbkMsZ0JBQWdCLENBQUM5RCxDQUFELENBQTFDO0FBQ0EsU0FBTyxVQUFDeUQsRUFBRCxFQUFLeEMsQ0FBTDtBQUFBLFdBQVcsb0JBQUt3QyxFQUFMLEVBQVN3QyxpQkFBaUIsQ0FBQ2hGLENBQUQsQ0FBMUIsQ0FBWDtBQUFBLEdBQVA7QUFDRCxDQUhEO0FBSUE7OztBQUNBLElBQU1pRixxQkFBOEUsR0FBRyxTQUFqRkEscUJBQWlGLENBQUN6QyxFQUFELEVBQUtGLENBQUwsRUFBUXRDLENBQVI7QUFBQSxTQUNyRixvQkFBS3dDLEVBQUwsRUFBUzBDLG9CQUFvQixDQUFDNUMsQ0FBRCxFQUFJdEMsQ0FBSixDQUE3QixDQURxRjtBQUFBLENBQXZGO0FBRUE7OztBQUNBLElBQU1tRixrQkFBMkUsR0FBRyxTQUE5RUEsa0JBQThFLENBQ2xGYixDQURrRixFQUVnQjtBQUNsRyxNQUFNYyxrQkFBa0IsR0FBR0MsaUJBQWlCLENBQUNmLENBQUQsQ0FBNUM7QUFDQSxTQUFPLFVBQUNHLEVBQUQsRUFBS3pFLENBQUw7QUFBQSxXQUFXLG9CQUFLeUUsRUFBTCxFQUFTVyxrQkFBa0IsQ0FBQ3BGLENBQUQsQ0FBM0IsQ0FBWDtBQUFBLEdBQVA7QUFDRCxDQUxELEMsQ0FPQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxJQUFNc0YsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBSVgsSUFBSjtBQUFBLFNBQXFDLFVBQUl6SCxFQUFKO0FBQUEsV0FDdkQsb0JBQUtBLEVBQUwsRUFBUzhELE9BQU8sQ0FBQzJELElBQUksRUFBTCxDQUFoQixDQUR1RDtBQUFBLEdBQXJDO0FBQUEsQ0FBYjtBQUdQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBQ08sSUFBTUMsR0FBb0YsR0FBR1UsSUFBN0Y7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFDTyxJQUFNN0IsRUFBRSxHQUFHLFNBQUxBLEVBQUssQ0FBSXZHLEVBQUo7QUFBQSxTQUNoQjBHLEtBQUssQ0FBQyxVQUFDNUQsQ0FBRDtBQUFBLFdBQU8sb0JBQUs5QyxFQUFMLEVBQVNrRyxHQUFHLENBQUNwRCxDQUFELENBQVosQ0FBUDtBQUFBLEdBQUQsQ0FEVztBQUFBLENBQVg7QUFHUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ08sSUFBTTRELEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQU81RCxDQUFQO0FBQUEsU0FDbkIrQyxjQUFjLENBQUMsVUFBQzdDLENBQUQsRUFBSW5DLENBQUo7QUFBQSxXQUFVaUMsQ0FBQyxDQUFDakMsQ0FBRCxDQUFYO0FBQUEsR0FBRCxDQURLO0FBQUEsQ0FBZDtBQUdQO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNPLElBQU1nRyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFPL0QsQ0FBUDtBQUFBLFNBQTBDLFVBQUM5QyxFQUFELEVBQTRDO0FBQzFHLFFBQUkrRixJQUFjLEdBQUd6RixJQUFJLENBQUNOLEVBQUQsQ0FBekI7QUFDQSxRQUFNcUIsR0FBcUIsR0FBRyxDQUFDeUIsQ0FBQyxDQUFDOUMsRUFBRCxDQUFGLENBQTlCOztBQUNBLFdBQU9ELFVBQVUsQ0FBQ2dHLElBQUQsQ0FBakIsRUFBeUI7QUFDdkIxRSxNQUFBQSxHQUFHLENBQUNLLElBQUosQ0FBU29CLENBQUMsQ0FBQ2lELElBQUQsQ0FBVjtBQUNBQSxNQUFBQSxJQUFJLEdBQUd6RixJQUFJLENBQUN5RixJQUFELENBQVg7QUFDRDs7QUFDRCxXQUFPMUUsR0FBUDtBQUNELEdBUnFCO0FBQUEsQ0FBZjtBQVVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUNPLElBQU1nSCxTQUF1RSxHQUNsRixhQUNBeEIsTUFBTSxDQUFDeUIsa0JBQUQsQ0FGRDtBQUlQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTUMsT0FBc0UsR0FDakYsYUFDQTdCLEtBQUssQ0FBQzRCLGtCQUFELENBRkE7QUFJUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUNPLElBQU1wQyxHQUFHLEdBQUcsU0FBTkEsR0FBTSxDQUFPcEQsQ0FBUDtBQUFBLFNBQXdFc0QsWUFBWSxDQUFDLFVBQUNwRCxDQUFELEVBQUluQyxDQUFKO0FBQUEsV0FBVWlDLENBQUMsQ0FBQ2pDLENBQUQsQ0FBWDtBQUFBLEdBQUQsQ0FBcEY7QUFBQSxDQUFaO0FBRVA7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ08sSUFBTXVGLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQU90RCxDQUFQO0FBQUEsU0FBcUMsVUFBQzlDLEVBQUQsRUFBNEM7QUFDM0csUUFBTXFCLEdBQXFCLEdBQUcsQ0FBQ3lCLENBQUMsQ0FBQyxDQUFELEVBQUl6QyxJQUFJLENBQUNMLEVBQUQsQ0FBUixDQUFGLENBQTlCOztBQUNBLFNBQUssSUFBSUcsR0FBQyxHQUFHLENBQWIsRUFBZ0JBLEdBQUMsR0FBR0gsRUFBRSxDQUFDQyxNQUF2QixFQUErQkUsR0FBQyxFQUFoQyxFQUFvQztBQUNsQ2tCLE1BQUFBLEdBQUcsQ0FBQ0ssSUFBSixDQUFTb0IsQ0FBQyxDQUFDM0MsR0FBRCxFQUFJSCxFQUFFLENBQUNHLEdBQUQsQ0FBTixDQUFWO0FBQ0Q7O0FBQ0QsV0FBT2tCLEdBQVA7QUFDRCxHQU4yQjtBQUFBLENBQXJCO0FBUVA7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFDTyxJQUFNVSxNQUF5RSxHQUFHakMsSUFBSSxDQUFDaUMsTUFBdkY7QUFFUDtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTTZGLGVBQTZGLEdBQ3hHOUgsSUFBSSxDQUFDOEgsZUFEQTtBQUdQO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxJQUFNVixXQUE4RSxHQUFHcEgsSUFBSSxDQUFDb0gsV0FBNUY7QUFFUDtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTWMsb0JBQWtHLEdBQzdHbEksSUFBSSxDQUFDa0ksb0JBREE7QUFHUDtBQUNBO0FBQ0E7Ozs7QUFDTyxJQUFNVixRQUFnQyxHQUFHLFNBQW5DQSxRQUFtQyxDQUM5Q0YsQ0FEOEMsRUFFNkM7QUFDM0YsTUFBTWMsa0JBQWtCLEdBQUdDLGlCQUFpQixDQUFDZixDQUFELENBQTVDO0FBQ0EsU0FBTyxVQUFDdEUsQ0FBRDtBQUFBLFdBQU9vRixrQkFBa0IsQ0FBQyxVQUFDbEYsQ0FBRCxFQUFJbkMsQ0FBSjtBQUFBLGFBQVVpQyxDQUFDLENBQUNqQyxDQUFELENBQVg7QUFBQSxLQUFELENBQXpCO0FBQUEsR0FBUDtBQUNELENBTE07QUFPUDtBQUNBO0FBQ0E7Ozs7O0FBQ08sSUFBTTJILFFBQXVDLEdBQUcsU0FBMUNBLFFBQTBDLENBQ3JEcEIsQ0FEcUQ7QUFBQSxTQUVlZSxpQkFBaUIsQ0FBQ2YsQ0FBRCxDQUFqQixDQUFxQixVQUFDcEUsQ0FBRCxFQUFJbkMsQ0FBSjtBQUFBLFdBQVVBLENBQVY7QUFBQSxHQUFyQixDQUZmO0FBQUEsQ0FBaEQ7QUFJUDtBQUNBO0FBQ0E7Ozs7O0FBQ08sSUFBTXNILGlCQUEwRCxHQUFHLFNBQTdEQSxpQkFBNkQsQ0FBSWYsQ0FBSjtBQUFBLFNBQTZCLFVBQ3JHdEUsQ0FEcUc7QUFBQSxXQUVsRyxVQUFDOUMsRUFBRCxFQUFvRDtBQUN2RCxVQUFJcUIsR0FBNkIsR0FBRytGLENBQUMsQ0FBQ2xCLEdBQUYsQ0FBTXBELENBQUMsQ0FBQyxDQUFELEVBQUl6QyxJQUFJLENBQUNMLEVBQUQsQ0FBUixDQUFQLEVBQXNCNkUsRUFBdEIsQ0FBcEM7O0FBQ0EsV0FBSyxJQUFJMUUsR0FBQyxHQUFHLENBQWIsRUFBZ0JBLEdBQUMsR0FBR0gsRUFBRSxDQUFDQyxNQUF2QixFQUErQkUsR0FBQyxFQUFoQyxFQUFvQztBQUNsQ2tCLFFBQUFBLEdBQUcsR0FBRytGLENBQUMsQ0FBQ2IsRUFBRixDQUNKYSxDQUFDLENBQUNsQixHQUFGLENBQU03RSxHQUFOLEVBQVcsVUFBQzBELEVBQUQ7QUFBQSxpQkFBUSxVQUFDSyxDQUFEO0FBQUEsbUJBQVUsb0JBQUtMLEVBQUwsRUFBU3BFLE1BQU0sQ0FBQ3lFLENBQUQsQ0FBZixDQUFWO0FBQUEsV0FBUjtBQUFBLFNBQVgsQ0FESSxFQUVKdEMsQ0FBQyxDQUFDM0MsR0FBRCxFQUFJSCxFQUFFLENBQUNHLEdBQUQsQ0FBTixDQUZHLENBQU47QUFJRDs7QUFDRCxhQUFPa0IsR0FBUDtBQUNELEtBWHNHO0FBQUEsR0FBN0I7QUFBQSxDQUFuRTtBQWFQO0FBQ0E7QUFDQTs7OztBQUNPLElBQU1vSCxPQUFpQyxHQUFHM0ksSUFBSSxDQUFDTyxJQUEvQyxDLENBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxJQUFNcUksR0FBRyxHQUFHLGVBQVo7QUFFUDtBQUNBO0FBQ0E7QUFDQTs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sSUFBTUMsT0FBa0QsR0FBRzdJLElBQUksQ0FBQzZJLE9BQWhFO0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBQ08sSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWU7QUFBQSxTQUErQztBQUN6RTVHLElBQUFBLE1BQU0sRUFBTkE7QUFEeUUsR0FBL0M7QUFBQSxDQUFyQjtBQUlQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUNPLElBQU02RyxLQUE0QyxHQUFHL0ksSUFBSSxDQUFDK0ksS0FBMUQ7QUFFUDtBQUNBO0FBQ0E7QUFDQTs7OztBQUNPLElBQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBSTNILENBQUosRUFBOEM7QUFDN0UsTUFBTTRILE1BQU0sR0FBRzdHLEtBQUssQ0FBQ2YsQ0FBRCxDQUFwQjtBQUNBLFNBQU87QUFDTGEsSUFBQUEsTUFBTSxFQUFFLGdCQUFDSyxLQUFELEVBQVFELE1BQVI7QUFBQSxhQUFtQjJHLE1BQU0sQ0FBQzNHLE1BQUQsQ0FBTixDQUFlQyxLQUFmLENBQW5CO0FBQUE7QUFESCxHQUFQO0FBR0QsQ0FMTTtBQU9QO0FBQ0E7QUFDQTtBQUNBOzs7O0FBQ08sSUFBTTJHLE9BQXNCLEdBQUc7QUFDcENOLEVBQUFBLEdBQUcsRUFBSEEsR0FEb0M7QUFFcEN4QyxFQUFBQSxHQUFHLEVBQUVEO0FBRitCLENBQS9CO0FBS1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxJQUFNZ0QsSUFBSSxHQUNmLGFBQ0EsbUJBQU1ELE9BQU4sQ0FGSztBQUlQO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxJQUFNRSxPQUFzQixHQUFHO0FBQ3BDUixFQUFBQSxHQUFHLEVBQUhBLEdBRG9DO0FBRXBDN0QsRUFBQUEsRUFBRSxFQUFGQTtBQUZvQyxDQUEvQjtBQUtQO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxJQUFNc0UsZ0JBQWdELEdBQUc7QUFDOURULEVBQUFBLEdBQUcsRUFBSEEsR0FEOEQ7QUFFOUR4QyxFQUFBQSxHQUFHLEVBQUVELElBRnlEO0FBRzlERyxFQUFBQSxZQUFZLEVBQUVEO0FBSGdELENBQXpEO0FBTVA7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLElBQU1pRCxLQUFrQixHQUFHO0FBQ2hDVixFQUFBQSxHQUFHLEVBQUhBLEdBRGdDO0FBRWhDeEMsRUFBQUEsR0FBRyxFQUFFRCxJQUYyQjtBQUdoQ00sRUFBQUEsRUFBRSxFQUFFRjtBQUg0QixDQUEzQjtBQU1QO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLElBQU1nRCxPQUFPLEdBQ2xCLGFBQ0Esb0JBQVNELEtBQVQsQ0FGSztBQUlQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLElBQU1FLFFBQVEsR0FDbkIsYUFDQSxxQkFBVUYsS0FBVixDQUZLO0FBSVA7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLElBQU1HLFdBQThCLEdBQUc7QUFDNUNiLEVBQUFBLEdBQUcsRUFBSEEsR0FENEM7QUFFNUN4QyxFQUFBQSxHQUFHLEVBQUVELElBRnVDO0FBRzVDTSxFQUFBQSxFQUFFLEVBQUVGLEdBSHdDO0FBSTVDeEIsRUFBQUEsRUFBRSxFQUFGQTtBQUo0QyxDQUF2QztBQU9QO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxJQUFNMkUsS0FBa0IsR0FBRztBQUNoQ2QsRUFBQUEsR0FBRyxFQUFIQSxHQURnQztBQUVoQ3hDLEVBQUFBLEdBQUcsRUFBRUQsSUFGMkI7QUFHaENNLEVBQUFBLEVBQUUsRUFBRUYsR0FINEI7QUFJaENLLEVBQUFBLEtBQUssRUFBRUY7QUFKeUIsQ0FBM0I7QUFPUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLElBQU1pRCxVQUFVLEdBQ3JCLGFBQ0EsdUJBQVlELEtBQVosQ0FGSztBQUlQO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxJQUFNRSxLQUFrQixHQUFHO0FBQ2hDaEIsRUFBQUEsR0FBRyxFQUFIQSxHQURnQztBQUVoQ3hDLEVBQUFBLEdBQUcsRUFBRUQsSUFGMkI7QUFHaENNLEVBQUFBLEVBQUUsRUFBRUYsR0FINEI7QUFJaEN4QixFQUFBQSxFQUFFLEVBQUZBLEVBSmdDO0FBS2hDNkIsRUFBQUEsS0FBSyxFQUFFRjtBQUx5QixDQUEzQjtBQVFQO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxJQUFNbUQsUUFBd0IsR0FBRztBQUN0Q2pCLEVBQUFBLEdBQUcsRUFBSEEsR0FEc0M7QUFFdEMzRyxFQUFBQSxNQUFNLEVBQUUrRSxPQUY4QjtBQUd0Q2xCLEVBQUFBLE9BQU8sRUFBRW1CLFFBSDZCO0FBSXRDRyxFQUFBQSxXQUFXLEVBQUVEO0FBSnlCLENBQWpDO0FBT1A7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLElBQU0yQyxpQkFBa0QsR0FBRztBQUNoRWxCLEVBQUFBLEdBQUcsRUFBSEEsR0FEZ0U7QUFFaEUzRyxFQUFBQSxNQUFNLEVBQUUrRSxPQUZ3RDtBQUdoRWxCLEVBQUFBLE9BQU8sRUFBRW1CLFFBSHVEO0FBSWhFRyxFQUFBQSxXQUFXLEVBQUVELFlBSm1EO0FBS2hFVyxFQUFBQSxlQUFlLEVBQUVELGdCQUwrQztBQU1oRWhDLEVBQUFBLGdCQUFnQixFQUFFa0MsaUJBTjhDO0FBT2hFRyxFQUFBQSxvQkFBb0IsRUFBRUQ7QUFQMEMsQ0FBM0Q7QUFVUDtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTThCLFdBQThCLEdBQUc7QUFDNUNuQixFQUFBQSxHQUFHLEVBQUhBLEdBRDRDO0FBRTVDeEMsRUFBQUEsR0FBRyxFQUFFRCxJQUZ1QztBQUc1Q2xFLEVBQUFBLE1BQU0sRUFBRStFLE9BSG9DO0FBSTVDbEIsRUFBQUEsT0FBTyxFQUFFbUIsUUFKbUM7QUFLNUNHLEVBQUFBLFdBQVcsRUFBRUQsWUFMK0I7QUFNNUNLLEVBQUFBLFFBQVEsRUFBRUgsU0FOa0M7QUFPNUNxQixFQUFBQSxRQUFRLEVBQVJBO0FBUDRDLENBQXZDO0FBVVA7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLElBQU1zQixvQkFBd0QsR0FBRztBQUN0RXBCLEVBQUFBLEdBQUcsRUFBSEEsR0FEc0U7QUFFdEV4QyxFQUFBQSxHQUFHLEVBQUVELElBRmlFO0FBR3RFRyxFQUFBQSxZQUFZLEVBQUVELGFBSHdEO0FBSXRFcEUsRUFBQUEsTUFBTSxFQUFFK0UsT0FKOEQ7QUFLdEVsQixFQUFBQSxPQUFPLEVBQUVtQixRQUw2RDtBQU10RUcsRUFBQUEsV0FBVyxFQUFFRCxZQU55RDtBQU90RUssRUFBQUEsUUFBUSxFQUFFSCxTQVA0RDtBQVF0RXFCLEVBQUFBLFFBQVEsRUFBUkEsUUFSc0U7QUFTdEVaLEVBQUFBLGVBQWUsRUFBRUQsZ0JBVHFEO0FBVXRFaEMsRUFBQUEsZ0JBQWdCLEVBQUVrQyxpQkFWb0Q7QUFXdEVHLEVBQUFBLG9CQUFvQixFQUFFRCxxQkFYZ0Q7QUFZdEVJLEVBQUFBLGlCQUFpQixFQUFFRjtBQVptRCxDQUFqRTtBQWVQO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxJQUFNOEIsR0FBYyxHQUFHO0FBQzVCckIsRUFBQUEsR0FBRyxFQUFIQSxHQUQ0QjtBQUU1QnhDLEVBQUFBLEdBQUcsRUFBRUQsSUFGdUI7QUFHNUJ5QixFQUFBQSxHQUFHLEVBQUVGO0FBSHVCLENBQXZCO0FBTVA7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLElBQU13QyxPQUFzQixHQUFHO0FBQ3BDdEIsRUFBQUEsR0FBRyxFQUFIQSxHQURvQztBQUVwQ3hDLEVBQUFBLEdBQUcsRUFBRUQsSUFGK0I7QUFHcENZLEVBQUFBLE1BQU0sRUFBRUYsT0FINEI7QUFJcEM4QixFQUFBQSxPQUFPLEVBQVBBO0FBSm9DLENBQS9CLEMsQ0FPUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFDTyxJQUFNd0IsRUFBcUIsR0FDaEMsYUFDQXBGLEVBQUUsQ0FBQzdCLENBQUMsQ0FBQ2tILFdBQUgsQ0FGRztBQUlQO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTUMsTUFBTSxHQUNqQixhQUNBLHFCQUFRbkIsT0FBUixDQUZLO0FBSVA7QUFDQTtBQUNBOzs7QUFDTyxJQUFNb0IsSUFBSSxHQUNmLGFBQ0EsaUJBQU1aLEtBQU4sQ0FGSyxDLENBSVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTWEsR0FBRyxHQUNkLGFBQ0EsZ0JBQUtqQixLQUFMLENBRkssQyxDQUlQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUNPLElBQU0vSSxJQUFxQyxHQUFHUCxJQUFJLENBQUNPLElBQW5EO0FBRVA7QUFDQTtBQUNBOzs7O0FBQ08sSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBSU4sRUFBSjtBQUFBLFNBQXVDQSxFQUFFLENBQUNrRSxLQUFILENBQVMsQ0FBVCxDQUF2QztBQUFBLENBQWI7QUFFUDtBQUNBO0FBQ0E7Ozs7QUFDTyxJQUFNTCxJQUFxQyxHQUFHL0QsSUFBSSxDQUFDK0QsSUFBbkQ7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBQ08sSUFBTW5ELElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUlWLEVBQUo7QUFBQSxTQUF1Q0EsRUFBRSxDQUFDa0UsS0FBSCxDQUFTLENBQVQsRUFBWSxDQUFDLENBQWIsQ0FBdkM7QUFBQSxDQUFiO0FBRVA7QUFDQTtBQUNBOzs7O0FBQ08sSUFBTWUsR0FBcUQsR0FBR25GLElBQUksQ0FBQ21GLEdBQW5FO0FBRVA7QUFDQTtBQUNBOzs7QUFDTyxJQUFNM0IsR0FBcUQsR0FBR3hELElBQUksQ0FBQ3dELEdBQW5FO0FBRVA7QUFDQTtBQUNBOzs7O0FBQ08sSUFBTWdILFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUlDLENBQUo7QUFBQSxTQUF3QixVQUFDdkssRUFBRDtBQUFBLFdBQTZCQSxFQUFFLENBQUMrQixNQUFILENBQVV3SSxDQUFDLENBQUN2SSxNQUFaLENBQTdCO0FBQUEsR0FBeEI7QUFBQSxDQUFsQjtBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDTyxJQUFNd0ksU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBTzFILENBQVA7QUFBQSxTQUE2QyxVQUFDOUMsRUFBRDtBQUFBLFdBQTZCOEMsQ0FBQyxDQUFDekMsSUFBSSxDQUFDTCxFQUFELENBQUwsRUFBV00sSUFBSSxDQUFDTixFQUFELENBQWYsQ0FBOUI7QUFBQSxHQUE3QztBQUFBLENBQWxCO0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNPLElBQU15SyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFPM0gsQ0FBUDtBQUFBLFNBQTZDLFVBQUM5QyxFQUFEO0FBQUEsV0FDckU4QyxDQUFDLENBQUNwQyxJQUFJLENBQUNWLEVBQUQsQ0FBTCxFQUFXNkQsSUFBSSxDQUFDN0QsRUFBRCxDQUFmLENBRG9FO0FBQUEsR0FBN0M7QUFBQSxDQUFuQjtBQUdQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ08sSUFBTTBLLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUk1SCxDQUFKO0FBQUEsU0FBMkIsVUFBQzlDLEVBQUQ7QUFBQSxZQUNuRDhDLENBQUMsQ0FBQ3pDLElBQUksQ0FBQ0wsRUFBRCxDQUFMLENBRGtELDRCQUVoRE0sSUFBSSxDQUFDTixFQUFELENBRjRDO0FBQUEsR0FBM0I7QUFBQSxDQUFuQjtBQUtQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDTyxJQUFNMkssVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBSTlKLENBQUo7QUFBQSxTQUEyRDZKLFVBQVUsQ0FBQztBQUFBLFdBQU03SixDQUFOO0FBQUEsR0FBRCxDQUFyRTtBQUFBLENBQW5CO0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDTyxJQUFNK0osVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBSTlILENBQUo7QUFBQSxTQUEyQixVQUFDOUMsRUFBRDtBQUFBLFdBQ25ELG9CQUFLVSxJQUFJLENBQUNWLEVBQUQsQ0FBVCxFQUFlVyxNQUFNLENBQUNtQyxDQUFDLENBQUNlLElBQUksQ0FBQzdELEVBQUQsQ0FBTCxDQUFGLENBQXJCLENBRG1EO0FBQUEsR0FBM0I7QUFBQSxDQUFuQjtBQUdQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDTyxJQUFNNkssVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBSWhLLENBQUo7QUFBQSxTQUEyRCtKLFVBQVUsQ0FBQztBQUFBLFdBQU0vSixDQUFOO0FBQUEsR0FBRCxDQUFyRTtBQUFBLENBQW5CLEMsQ0FFUDtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFPTyxTQUFTaUssU0FBVCxDQUFzQnRHLENBQXRCLEVBQTRFO0FBQ2pGLE1BQU11RyxLQUFLLEdBQUdqSixJQUFJLENBQUMwQyxDQUFELENBQWxCO0FBQ0EsTUFBTXdHLE1BQU0sR0FBRzdHLEtBQUssQ0FBQ0ssQ0FBRCxDQUFwQjtBQUNBLFNBQU8sVUFBQ3hFLEVBQUQ7QUFBQSxXQUFTRCxVQUFVLENBQUNDLEVBQUQsQ0FBVixHQUFpQmdMLE1BQU0sQ0FBQ0QsS0FBSyxDQUFDL0ssRUFBRCxDQUFOLENBQXZCLEdBQXFDLEVBQTlDO0FBQUEsR0FBUDtBQUNEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUlPLFNBQVNpTCxNQUFULENBQW1CQyxTQUFuQixFQUFnRztBQUNyRyxTQUFPQyxlQUFlLENBQUMsVUFBQ25JLENBQUQsRUFBSW5DLENBQUo7QUFBQSxXQUFVcUssU0FBUyxDQUFDckssQ0FBRCxDQUFuQjtBQUFBLEdBQUQsQ0FBdEI7QUFDRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxJQUFNc0ssZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFJRCxTQUFKO0FBQUEsU0FBZ0QsVUFDN0VsTCxFQUQ2RTtBQUFBLFdBRWhEaUQsU0FBUyxDQUFDakQsRUFBRSxDQUFDaUwsTUFBSCxDQUFVLFVBQUNwSyxDQUFELEVBQUlWLENBQUo7QUFBQSxhQUFVK0ssU0FBUyxDQUFDL0ssQ0FBRCxFQUFJVSxDQUFKLENBQW5CO0FBQUEsS0FBVixDQUFELENBRnVDO0FBQUEsR0FBaEQ7QUFBQSxDQUF4QjtBQUlQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBQ08sSUFBTXVLLE1BQWtELEdBQUd6SCxTQUEzRDtBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxJQUFNMEgsTUFBa0QsR0FBR3pILFFBQTNEO0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJTyxTQUFTMEgsSUFBVCxDQUFpQmpMLElBQWpCLEVBQTBCQyxJQUExQixFQUFzRztBQUMzRyxTQUFPQSxJQUFJLEtBQUs2RSxTQUFULEdBQXFCNUUsT0FBTyxDQUFDRixJQUFELENBQTVCLEdBQXFDLG9CQUFLQyxJQUFMLEVBQVdDLE9BQU8sQ0FBQ0YsSUFBRCxDQUFsQixDQUE1QztBQUNEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLElBQU1rTCxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFJN0ssSUFBSixFQUFvQkQsR0FBcEI7QUFBQSxTQUFpRCxvQkFBS0MsSUFBTCxFQUFXQyxNQUFNLENBQUNGLEdBQUQsQ0FBakIsQ0FBakQ7QUFBQSxDQUFiO0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFDTyxJQUFNK0ssWUFBWSxHQUFHaEcsVUFBckI7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLElBQU1pRyxJQUF5RCxHQUFHM0wsSUFBSSxDQUFDd0ssU0FBdkU7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTW9CLGFBS0YsR0FBRztBQUNaaEQsRUFBQUEsR0FBRyxFQUFIQSxHQURZO0FBRVo3RCxFQUFBQSxFQUFFLEVBQUZBLEVBRlk7QUFHWnFCLEVBQUFBLEdBQUcsRUFBRUQsSUFITztBQUlaRyxFQUFBQSxZQUFZLEVBQUVELGFBSkY7QUFLWkksRUFBQUEsRUFBRSxFQUFFRixHQUxRO0FBTVpLLEVBQUFBLEtBQUssRUFBRUYsTUFOSztBQU9aSyxFQUFBQSxNQUFNLEVBQUVGLE9BUEk7QUFRWjhCLEVBQUFBLE9BQU8sRUFBRUEsT0FSRztBQVNaMUcsRUFBQUEsTUFBTSxFQUFFK0UsT0FUSTtBQVVabEIsRUFBQUEsT0FBTyxFQUFFbUIsUUFWRztBQVdaRyxFQUFBQSxXQUFXLEVBQUVELFlBWEQ7QUFZWkssRUFBQUEsUUFBUSxFQUFFSCxTQVpFO0FBYVpxQixFQUFBQSxRQUFRLEVBQVJBLFFBYlk7QUFjWlosRUFBQUEsZUFBZSxFQUFFRCxnQkFkTDtBQWVaaEMsRUFBQUEsZ0JBQWdCLEVBQUVrQyxpQkFmTjtBQWdCWkcsRUFBQUEsb0JBQW9CLEVBQUVELHFCQWhCVjtBQWlCWkksRUFBQUEsaUJBQWlCLEVBQUVGLGtCQWpCUDtBQWtCWlAsRUFBQUEsR0FBRyxFQUFFRjtBQWxCTyxDQUxQIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBEYXRhIHN0cnVjdHVyZSB3aGljaCByZXByZXNlbnRzIG5vbi1lbXB0eSBhcnJheXMuXG4gKlxuICogYGBgdHNcbiAqIGV4cG9ydCB0eXBlIE5vbkVtcHR5QXJyYXk8QT4gPSBBcnJheTxBPiAmIHtcbiAqICAgMDogQVxuICogfVxuICogYGBgXG4gKlxuICogTm90ZSB0aGF0IHlvdSBkb24ndCBuZWVkIGFueSBjb252ZXJzaW9uLCBhIGBOb25FbXB0eUFycmF5YCBpcyBhbiBgQXJyYXlgLFxuICogc28gYWxsIGBBcnJheWAncyBBUElzIGNhbiBiZSB1c2VkIHdpdGggYSBgTm9uRW1wdHlBcnJheWAgd2l0aG91dCBmdXJ0aGVyIGFkby5cbiAqXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuaW1wb3J0IHsgQWx0MSB9IGZyb20gJy4vQWx0J1xuaW1wb3J0IHsgQXBwbGljYXRpdmUgYXMgQXBwbGljYXRpdmVIS1QsIEFwcGxpY2F0aXZlMSB9IGZyb20gJy4vQXBwbGljYXRpdmUnXG5pbXBvcnQgeyBhcEZpcnN0IGFzIGFwRmlyc3RfLCBBcHBseTEsIGFwUyBhcyBhcFNfLCBhcFNlY29uZCBhcyBhcFNlY29uZF8gfSBmcm9tICcuL0FwcGx5J1xuaW1wb3J0IHsgYmluZCBhcyBiaW5kXywgQ2hhaW4xLCBjaGFpbkZpcnN0IGFzIGNoYWluRmlyc3RfIH0gZnJvbSAnLi9DaGFpbidcbmltcG9ydCB7IENvbW9uYWQxIH0gZnJvbSAnLi9Db21vbmFkJ1xuaW1wb3J0IHsgRW5kb21vcnBoaXNtIH0gZnJvbSAnLi9FbmRvbW9ycGhpc20nXG5pbXBvcnQgeyBFcSB9IGZyb20gJy4vRXEnXG5pbXBvcnQgeyBFeHRlbmQxIH0gZnJvbSAnLi9FeHRlbmQnXG5pbXBvcnQgeyBGb2xkYWJsZTEgfSBmcm9tICcuL0ZvbGRhYmxlJ1xuaW1wb3J0IHsgRm9sZGFibGVXaXRoSW5kZXgxIH0gZnJvbSAnLi9Gb2xkYWJsZVdpdGhJbmRleCdcbmltcG9ydCB7IGlkZW50aXR5LCBMYXp5LCBwaXBlIH0gZnJvbSAnLi9mdW5jdGlvbidcbmltcG9ydCB7IGJpbmRUbyBhcyBiaW5kVG9fLCBmbGFwIGFzIGZsYXBfLCBGdW5jdG9yMSB9IGZyb20gJy4vRnVuY3RvcidcbmltcG9ydCB7IEZ1bmN0b3JXaXRoSW5kZXgxIH0gZnJvbSAnLi9GdW5jdG9yV2l0aEluZGV4J1xuaW1wb3J0IHsgSEtUIH0gZnJvbSAnLi9IS1QnXG5pbXBvcnQgKiBhcyBfIGZyb20gJy4vaW50ZXJuYWwnXG5pbXBvcnQgeyBNb25hZDEgfSBmcm9tICcuL01vbmFkJ1xuaW1wb3J0IHsgT3B0aW9uIH0gZnJvbSAnLi9PcHRpb24nXG5pbXBvcnQgeyBnZXRNb25vaWQsIE9yZCB9IGZyb20gJy4vT3JkJ1xuaW1wb3J0IHsgUG9pbnRlZDEgfSBmcm9tICcuL1BvaW50ZWQnXG5pbXBvcnQgeyBQcmVkaWNhdGUgfSBmcm9tICcuL1ByZWRpY2F0ZSdcbmltcG9ydCAqIGFzIFJORUEgZnJvbSAnLi9SZWFkb25seU5vbkVtcHR5QXJyYXknXG5pbXBvcnQgeyBSZWZpbmVtZW50IH0gZnJvbSAnLi9SZWZpbmVtZW50J1xuaW1wb3J0ICogYXMgU2UgZnJvbSAnLi9TZW1pZ3JvdXAnXG5pbXBvcnQgeyBTaG93IH0gZnJvbSAnLi9TaG93J1xuaW1wb3J0IHsgUGlwZWFibGVUcmF2ZXJzZTEsIFRyYXZlcnNhYmxlMSB9IGZyb20gJy4vVHJhdmVyc2FibGUnXG5pbXBvcnQgeyBQaXBlYWJsZVRyYXZlcnNlV2l0aEluZGV4MSwgVHJhdmVyc2FibGVXaXRoSW5kZXgxIH0gZnJvbSAnLi9UcmF2ZXJzYWJsZVdpdGhJbmRleCdcblxuaW1wb3J0IFNlbWlncm91cCA9IFNlLlNlbWlncm91cFxuaW1wb3J0IFJlYWRvbmx5Tm9uRW1wdHlBcnJheSA9IFJORUEuUmVhZG9ubHlOb25FbXB0eUFycmF5XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIG1vZGVsXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQGNhdGVnb3J5IG1vZGVsXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOb25FbXB0eUFycmF5PEE+IGV4dGVuZHMgQXJyYXk8QT4ge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHJlYWRvbmx5LWtleXdvcmRcbiAgMDogQVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBpbnRlcm5hbFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgY29uc3QgaXNOb25FbXB0eSA9IDxBPihhczogQXJyYXk8QT4pOiBhcyBpcyBOb25FbXB0eUFycmF5PEE+ID0+IGFzLmxlbmd0aCA+IDBcblxuLyoqXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGNvbnN0IGlzT3V0T2ZCb3VuZCA9IDxBPihpOiBudW1iZXIsIGFzOiBBcnJheTxBPik6IGJvb2xlYW4gPT4gaSA8IDAgfHwgaSA+PSBhcy5sZW5ndGhcblxuLyoqXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGNvbnN0IHByZXBlbmRXID0gPEI+KGhlYWQ6IEIpID0+IDxBPih0YWlsOiBBcnJheTxBPik6IE5vbkVtcHR5QXJyYXk8QSB8IEI+ID0+IFtoZWFkLCAuLi50YWlsXVxuXG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgY29uc3QgcHJlcGVuZDogPEE+KGhlYWQ6IEEpID0+ICh0YWlsOiBBcnJheTxBPikgPT4gTm9uRW1wdHlBcnJheTxBPiA9IHByZXBlbmRXXG5cbi8qKlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBjb25zdCBhcHBlbmRXID0gPEI+KGVuZDogQikgPT4gPEE+KGluaXQ6IEFycmF5PEE+KTogTm9uRW1wdHlBcnJheTxBIHwgQj4gPT4gWy4uLmluaXQsIGVuZF0gYXMgYW55XG5cbi8qKlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBjb25zdCBhcHBlbmQ6IDxBPihlbmQ6IEEpID0+IChpbml0OiBBcnJheTxBPikgPT4gTm9uRW1wdHlBcnJheTxBPiA9IGFwcGVuZFdcblxuLyoqXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGNvbnN0IHVuc2FmZUluc2VydEF0ID0gPEE+KGk6IG51bWJlciwgYTogQSwgYXM6IEFycmF5PEE+KTogTm9uRW1wdHlBcnJheTxBPiA9PiB7XG4gIGlmIChpc05vbkVtcHR5KGFzKSkge1xuICAgIGNvbnN0IHhzID0gZnJvbVJlYWRvbmx5Tm9uRW1wdHlBcnJheShhcylcbiAgICB4cy5zcGxpY2UoaSwgMCwgYSlcbiAgICByZXR1cm4geHNcbiAgfVxuICByZXR1cm4gW2FdXG59XG5cbi8qKlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBjb25zdCB1bnNhZmVVcGRhdGVBdCA9IDxBPihpOiBudW1iZXIsIGE6IEEsIGFzOiBOb25FbXB0eUFycmF5PEE+KTogTm9uRW1wdHlBcnJheTxBPiA9PiB7XG4gIGNvbnN0IHhzID0gZnJvbVJlYWRvbmx5Tm9uRW1wdHlBcnJheShhcylcbiAgeHNbaV0gPSBhXG4gIHJldHVybiB4c1xufVxuXG4vKipcbiAqIFJlbW92ZSBkdXBsaWNhdGVzIGZyb20gYSBgTm9uRW1wdHlBcnJheWAsIGtlZXBpbmcgdGhlIGZpcnN0IG9jY3VycmVuY2Ugb2YgYW4gZWxlbWVudC5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgdW5pcSB9IGZyb20gJ2ZwLXRzL05vbkVtcHR5QXJyYXknXG4gKiBpbXBvcnQgKiBhcyBOIGZyb20gJ2ZwLXRzL251bWJlcidcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKHVuaXEoTi5FcSkoWzEsIDIsIDFdKSwgWzEsIDJdKVxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgdW5pcSA9IDxBPihFOiBFcTxBPikgPT4gKGFzOiBOb25FbXB0eUFycmF5PEE+KTogTm9uRW1wdHlBcnJheTxBPiA9PiB7XG4gIGlmIChhcy5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gY29weShhcylcbiAgfVxuICBjb25zdCBvdXQ6IE5vbkVtcHR5QXJyYXk8QT4gPSBbaGVhZChhcyldXG4gIGNvbnN0IHJlc3QgPSB0YWlsKGFzKVxuICBmb3IgKGNvbnN0IGEgb2YgcmVzdCkge1xuICAgIGlmIChvdXQuZXZlcnkoKG8pID0+ICFFLmVxdWFscyhvLCBhKSkpIHtcbiAgICAgIG91dC5wdXNoKGEpXG4gICAgfVxuICB9XG4gIHJldHVybiBvdXRcbn1cblxuLyoqXG4gKiBTb3J0IHRoZSBlbGVtZW50cyBvZiBhIGBOb25FbXB0eUFycmF5YCBpbiBpbmNyZWFzaW5nIG9yZGVyLCB3aGVyZSBlbGVtZW50cyBhcmUgY29tcGFyZWQgdXNpbmcgZmlyc3QgYG9yZHNbMF1gLCB0aGVuIGBvcmRzWzFdYCxcbiAqIGV0Yy4uLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgKiBhcyBORUEgZnJvbSAnZnAtdHMvTm9uRW1wdHlBcnJheSdcbiAqIGltcG9ydCB7IGNvbnRyYW1hcCB9IGZyb20gJ2ZwLXRzL09yZCdcbiAqIGltcG9ydCAqIGFzIFMgZnJvbSAnZnAtdHMvc3RyaW5nJ1xuICogaW1wb3J0ICogYXMgTiBmcm9tICdmcC10cy9udW1iZXInXG4gKiBpbXBvcnQgeyBwaXBlIH0gZnJvbSAnZnAtdHMvZnVuY3Rpb24nXG4gKlxuICogaW50ZXJmYWNlIFBlcnNvbiB7XG4gKiAgIG5hbWU6IHN0cmluZ1xuICogICBhZ2U6IG51bWJlclxuICogfVxuICpcbiAqIGNvbnN0IGJ5TmFtZSA9IHBpcGUoUy5PcmQsIGNvbnRyYW1hcCgocDogUGVyc29uKSA9PiBwLm5hbWUpKVxuICpcbiAqIGNvbnN0IGJ5QWdlID0gcGlwZShOLk9yZCwgY29udHJhbWFwKChwOiBQZXJzb24pID0+IHAuYWdlKSlcbiAqXG4gKiBjb25zdCBzb3J0QnlOYW1lQnlBZ2UgPSBORUEuc29ydEJ5KFtieU5hbWUsIGJ5QWdlXSlcbiAqXG4gKiBjb25zdCBwZXJzb25zOiBORUEuTm9uRW1wdHlBcnJheTxQZXJzb24+ID0gW1xuICogICB7IG5hbWU6ICdhJywgYWdlOiAxIH0sXG4gKiAgIHsgbmFtZTogJ2InLCBhZ2U6IDMgfSxcbiAqICAgeyBuYW1lOiAnYycsIGFnZTogMiB9LFxuICogICB7IG5hbWU6ICdiJywgYWdlOiAyIH1cbiAqIF1cbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKHNvcnRCeU5hbWVCeUFnZShwZXJzb25zKSwgW1xuICogICB7IG5hbWU6ICdhJywgYWdlOiAxIH0sXG4gKiAgIHsgbmFtZTogJ2InLCBhZ2U6IDIgfSxcbiAqICAgeyBuYW1lOiAnYicsIGFnZTogMyB9LFxuICogICB7IG5hbWU6ICdjJywgYWdlOiAyIH1cbiAqIF0pXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBzb3J0QnkgPSA8Qj4ob3JkczogQXJyYXk8T3JkPEI+Pik6ICg8QSBleHRlbmRzIEI+KGFzOiBOb25FbXB0eUFycmF5PEE+KSA9PiBOb25FbXB0eUFycmF5PEE+KSA9PiB7XG4gIGlmIChpc05vbkVtcHR5KG9yZHMpKSB7XG4gICAgY29uc3QgTSA9IGdldE1vbm9pZDxCPigpXG4gICAgcmV0dXJuIHNvcnQob3Jkcy5yZWR1Y2UoTS5jb25jYXQsIE0uZW1wdHkpKVxuICB9XG4gIHJldHVybiBjb3B5XG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCB1bmlvbiA9IDxBPihFOiBFcTxBPik6ICgoc2Vjb25kOiBOb25FbXB0eUFycmF5PEE+KSA9PiAoZmlyc3Q6IE5vbkVtcHR5QXJyYXk8QT4pID0+IE5vbkVtcHR5QXJyYXk8QT4pID0+IHtcbiAgY29uc3QgdW5pcUUgPSB1bmlxKEUpXG4gIHJldHVybiAoc2Vjb25kKSA9PiAoZmlyc3QpID0+IHVuaXFFKHBpcGUoZmlyc3QsIGNvbmNhdChzZWNvbmQpKSlcbn1cblxuLyoqXG4gKiBSb3RhdGUgYSBgTm9uRW1wdHlBcnJheWAgYnkgYG5gIHN0ZXBzLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyByb3RhdGUgfSBmcm9tICdmcC10cy9Ob25FbXB0eUFycmF5J1xuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwocm90YXRlKDIpKFsxLCAyLCAzLCA0LCA1XSksIFs0LCA1LCAxLCAyLCAzXSlcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwocm90YXRlKC0yKShbMSwgMiwgMywgNCwgNV0pLCBbMywgNCwgNSwgMSwgMl0pXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCByb3RhdGUgPSAobjogbnVtYmVyKSA9PiA8QT4oYXM6IE5vbkVtcHR5QXJyYXk8QT4pOiBOb25FbXB0eUFycmF5PEE+ID0+IHtcbiAgY29uc3QgbGVuID0gYXMubGVuZ3RoXG4gIGNvbnN0IG0gPSBNYXRoLnJvdW5kKG4pICUgbGVuXG4gIGlmIChpc091dE9mQm91bmQoTWF0aC5hYnMobSksIGFzKSB8fCBtID09PSAwKSB7XG4gICAgcmV0dXJuIGNvcHkoYXMpXG4gIH1cbiAgaWYgKG0gPCAwKSB7XG4gICAgY29uc3QgW2YsIHNdID0gc3BsaXRBdCgtbSkoYXMpXG4gICAgcmV0dXJuIHBpcGUocywgY29uY2F0KGYpKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiByb3RhdGUobSAtIGxlbikoYXMpXG4gIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gY29uc3RydWN0b3JzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbnN0cnVjdG9yc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgZnJvbVJlYWRvbmx5Tm9uRW1wdHlBcnJheTogPEE+KGFzOiBSZWFkb25seU5vbkVtcHR5QXJyYXk8QT4pID0+IE5vbkVtcHR5QXJyYXk8QT4gPVxuICBfLmZyb21SZWFkb25seU5vbkVtcHR5QXJyYXlcblxuLyoqXG4gKiBCdWlsZHMgYSBgTm9uRW1wdHlBcnJheWAgZnJvbSBhbiBgQXJyYXlgIHJldHVybmluZyBgbm9uZWAgaWYgYGFzYCBpcyBhbiBlbXB0eSBhcnJheVxuICpcbiAqIEBjYXRlZ29yeSBjb25zdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgZnJvbUFycmF5ID0gPEE+KGFzOiBBcnJheTxBPik6IE9wdGlvbjxOb25FbXB0eUFycmF5PEE+PiA9PiAoaXNOb25FbXB0eShhcykgPyBfLnNvbWUoYXMpIDogXy5ub25lKVxuXG4vKipcbiAqIFJldHVybiBhIGBOb25FbXB0eUFycmF5YCBvZiBsZW5ndGggYG5gIHdpdGggZWxlbWVudCBgaWAgaW5pdGlhbGl6ZWQgd2l0aCBgZihpKWAuXG4gKlxuICogKipOb3RlKiouIGBuYCBpcyBub3JtYWxpemVkIHRvIGEgbmF0dXJhbCBudW1iZXIuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IG1ha2VCeSB9IGZyb20gJ2ZwLXRzL05vbkVtcHR5QXJyYXknXG4gKiBpbXBvcnQgeyBwaXBlIH0gZnJvbSAnZnAtdHMvZnVuY3Rpb24nXG4gKlxuICogY29uc3QgZG91YmxlID0gKG46IG51bWJlcik6IG51bWJlciA9PiBuICogMlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChwaXBlKDUsIG1ha2VCeShkb3VibGUpKSwgWzAsIDIsIDQsIDYsIDhdKVxuICpcbiAqIEBjYXRlZ29yeSBjb25zdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IG1ha2VCeSA9IDxBPihmOiAoaTogbnVtYmVyKSA9PiBBKSA9PiAobjogbnVtYmVyKTogTm9uRW1wdHlBcnJheTxBPiA9PiB7XG4gIGNvbnN0IGogPSBNYXRoLm1heCgwLCBNYXRoLmZsb29yKG4pKVxuICBjb25zdCBvdXQ6IE5vbkVtcHR5QXJyYXk8QT4gPSBbZigwKV1cbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBqOyBpKyspIHtcbiAgICBvdXQucHVzaChmKGkpKVxuICB9XG4gIHJldHVybiBvdXRcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBgTm9uRW1wdHlBcnJheWAgY29udGFpbmluZyBhIHZhbHVlIHJlcGVhdGVkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIHRpbWVzLlxuICpcbiAqICoqTm90ZSoqLiBgbmAgaXMgbm9ybWFsaXplZCB0byBhIG5hdHVyYWwgbnVtYmVyLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyByZXBsaWNhdGUgfSBmcm9tICdmcC10cy9Ob25FbXB0eUFycmF5J1xuICogaW1wb3J0IHsgcGlwZSB9IGZyb20gJ2ZwLXRzL2Z1bmN0aW9uJ1xuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwocGlwZSgzLCByZXBsaWNhdGUoJ2EnKSksIFsnYScsICdhJywgJ2EnXSlcbiAqXG4gKiBAY2F0ZWdvcnkgY29uc3RydWN0b3JzXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCByZXBsaWNhdGUgPSA8QT4oYTogQSk6ICgobjogbnVtYmVyKSA9PiBSZWFkb25seU5vbkVtcHR5QXJyYXk8QT4pID0+IG1ha2VCeSgoKSA9PiBhKVxuXG4vKipcbiAqIENyZWF0ZSBhIGBOb25FbXB0eUFycmF5YCBjb250YWluaW5nIGEgcmFuZ2Ugb2YgaW50ZWdlcnMsIGluY2x1ZGluZyBib3RoIGVuZHBvaW50cy5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgcmFuZ2UgfSBmcm9tICdmcC10cy9Ob25FbXB0eUFycmF5J1xuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwocmFuZ2UoMSwgNSksIFsxLCAyLCAzLCA0LCA1XSlcbiAqXG4gKiBAY2F0ZWdvcnkgY29uc3RydWN0b3JzXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCByYW5nZSA9IChzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlcik6IE5vbkVtcHR5QXJyYXk8bnVtYmVyPiA9PlxuICBzdGFydCA8PSBlbmQgPyBtYWtlQnkoKGkpID0+IHN0YXJ0ICsgaSkoZW5kIC0gc3RhcnQgKyAxKSA6IFtzdGFydF1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gZGVzdHJ1Y3RvcnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBSZXR1cm4gdGhlIHR1cGxlIG9mIHRoZSBgaGVhZGAgYW5kIHRoZSBgdGFpbGAuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IHVucHJlcGVuZCB9IGZyb20gJ2ZwLXRzL05vbkVtcHR5QXJyYXknXG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbCh1bnByZXBlbmQoWzEsIDIsIDNdKSwgWzEsIFsyLCAzXV0pXG4gKlxuICogQGNhdGVnb3J5IGRlc3RydWN0b3JzXG4gKiBAc2luY2UgMi45LjBcbiAqL1xuZXhwb3J0IGNvbnN0IHVucHJlcGVuZCA9IDxBPihhczogTm9uRW1wdHlBcnJheTxBPik6IFtBLCBBcnJheTxBPl0gPT4gW2hlYWQoYXMpLCB0YWlsKGFzKV1cblxuLyoqXG4gKiBSZXR1cm4gdGhlIHR1cGxlIG9mIHRoZSBgaW5pdGAgYW5kIHRoZSBgbGFzdGAuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IHVuYXBwZW5kIH0gZnJvbSAnZnAtdHMvTm9uRW1wdHlBcnJheSdcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKHVuYXBwZW5kKFsxLCAyLCAzLCA0XSksIFtbMSwgMiwgM10sIDRdKVxuICpcbiAqIEBjYXRlZ29yeSBkZXN0cnVjdG9yc1xuICogQHNpbmNlIDIuOS4wXG4gKi9cbmV4cG9ydCBjb25zdCB1bmFwcGVuZCA9IDxBPihhczogTm9uRW1wdHlBcnJheTxBPik6IFtBcnJheTxBPiwgQV0gPT4gW2luaXQoYXMpLCBsYXN0KGFzKV1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gY29tYmluYXRvcnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbmNhdFc8Qj4oc2Vjb25kOiBOb25FbXB0eUFycmF5PEI+KTogPEE+KGZpcnN0OiBBcnJheTxBPikgPT4gTm9uRW1wdHlBcnJheTxBIHwgQj5cbmV4cG9ydCBmdW5jdGlvbiBjb25jYXRXPEI+KHNlY29uZDogQXJyYXk8Qj4pOiA8QT4oZmlyc3Q6IE5vbkVtcHR5QXJyYXk8QT4pID0+IE5vbkVtcHR5QXJyYXk8QSB8IEI+XG5leHBvcnQgZnVuY3Rpb24gY29uY2F0VzxCPihzZWNvbmQ6IEFycmF5PEI+KTogPEE+KGZpcnN0OiBOb25FbXB0eUFycmF5PEE+KSA9PiBBcnJheTxBIHwgQj4ge1xuICByZXR1cm4gPEE+KGZpcnN0OiBOb25FbXB0eUFycmF5PEEgfCBCPikgPT4gZmlyc3QuY29uY2F0KHNlY29uZClcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjIuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gY29uY2F0PEE+KHNlY29uZDogTm9uRW1wdHlBcnJheTxBPik6IChmaXJzdDogQXJyYXk8QT4pID0+IE5vbkVtcHR5QXJyYXk8QT5cbmV4cG9ydCBmdW5jdGlvbiBjb25jYXQ8QT4oc2Vjb25kOiBBcnJheTxBPik6IChmaXJzdDogTm9uRW1wdHlBcnJheTxBPikgPT4gTm9uRW1wdHlBcnJheTxBPlxuLyoqIEBkZXByZWNhdGVkICovXG5leHBvcnQgZnVuY3Rpb24gY29uY2F0PEE+KGZpcnN0OiBBcnJheTxBPiwgc2Vjb25kOiBOb25FbXB0eUFycmF5PEE+KTogTm9uRW1wdHlBcnJheTxBPlxuLyoqIEBkZXByZWNhdGVkICovXG5leHBvcnQgZnVuY3Rpb24gY29uY2F0PEE+KGZpcnN0OiBOb25FbXB0eUFycmF5PEE+LCBzZWNvbmQ6IEFycmF5PEE+KTogTm9uRW1wdHlBcnJheTxBPlxuZXhwb3J0IGZ1bmN0aW9uIGNvbmNhdDxBPih4OiBBcnJheTxBPiwgeT86IEFycmF5PEE+KTogQXJyYXk8QT4gfCAoKHk6IE5vbkVtcHR5QXJyYXk8QT4pID0+IEFycmF5PEE+KSB7XG4gIHJldHVybiB5ID8geC5jb25jYXQoeSkgOiAoeSkgPT4geS5jb25jYXQoeClcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgcmV2ZXJzZSA9IDxBPihhczogTm9uRW1wdHlBcnJheTxBPik6IE5vbkVtcHR5QXJyYXk8QT4gPT4gW2xhc3QoYXMpLCAuLi5hcy5zbGljZSgwLCAtMSkucmV2ZXJzZSgpXVxuXG4vKipcbiAqIEdyb3VwIGVxdWFsLCBjb25zZWN1dGl2ZSBlbGVtZW50cyBvZiBhbiBhcnJheSBpbnRvIG5vbiBlbXB0eSBhcnJheXMuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGdyb3VwIH0gZnJvbSAnZnAtdHMvTm9uRW1wdHlBcnJheSdcbiAqIGltcG9ydCAqIGFzIE4gZnJvbSAnZnAtdHMvbnVtYmVyJ1xuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoZ3JvdXAoTi5PcmQpKFsxLCAyLCAxLCAxXSksIFtcbiAqICAgWzFdLFxuICogICBbMl0sXG4gKiAgIFsxLCAxXVxuICogXSlcbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ3JvdXA8Qj4oXG4gIEU6IEVxPEI+XG4pOiB7XG4gIDxBIGV4dGVuZHMgQj4oYXM6IE5vbkVtcHR5QXJyYXk8QT4pOiBOb25FbXB0eUFycmF5PE5vbkVtcHR5QXJyYXk8QT4+XG4gIDxBIGV4dGVuZHMgQj4oYXM6IEFycmF5PEE+KTogQXJyYXk8Tm9uRW1wdHlBcnJheTxBPj5cbn1cbmV4cG9ydCBmdW5jdGlvbiBncm91cDxBPihFOiBFcTxBPik6IChhczogQXJyYXk8QT4pID0+IEFycmF5PE5vbkVtcHR5QXJyYXk8QT4+IHtcbiAgcmV0dXJuIChhcykgPT4ge1xuICAgIGNvbnN0IGxlbiA9IGFzLmxlbmd0aFxuICAgIGlmIChsZW4gPT09IDApIHtcbiAgICAgIHJldHVybiBbXVxuICAgIH1cbiAgICBjb25zdCBvdXQ6IEFycmF5PE5vbkVtcHR5QXJyYXk8QT4+ID0gW11cbiAgICBsZXQgaGVhZDogQSA9IGFzWzBdXG4gICAgbGV0IG5lYTogTm9uRW1wdHlBcnJheTxBPiA9IFtoZWFkXVxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGNvbnN0IGEgPSBhc1tpXVxuICAgICAgaWYgKEUuZXF1YWxzKGEsIGhlYWQpKSB7XG4gICAgICAgIG5lYS5wdXNoKGEpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvdXQucHVzaChuZWEpXG4gICAgICAgIGhlYWQgPSBhXG4gICAgICAgIG5lYSA9IFtoZWFkXVxuICAgICAgfVxuICAgIH1cbiAgICBvdXQucHVzaChuZWEpXG4gICAgcmV0dXJuIG91dFxuICB9XG59XG5cbi8qKlxuICogU3BsaXRzIGFuIGFycmF5IGludG8gc3ViLW5vbi1lbXB0eS1hcnJheXMgc3RvcmVkIGluIGFuIG9iamVjdCwgYmFzZWQgb24gdGhlIHJlc3VsdCBvZiBjYWxsaW5nIGEgYHN0cmluZ2AtcmV0dXJuaW5nXG4gKiBmdW5jdGlvbiBvbiBlYWNoIGVsZW1lbnQsIGFuZCBncm91cGluZyB0aGUgcmVzdWx0cyBhY2NvcmRpbmcgdG8gdmFsdWVzIHJldHVybmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGdyb3VwQnkgfSBmcm9tICdmcC10cy9Ob25FbXB0eUFycmF5J1xuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoZ3JvdXBCeSgoczogc3RyaW5nKSA9PiBTdHJpbmcocy5sZW5ndGgpKShbJ2EnLCAnYicsICdhYiddKSwge1xuICogICAnMSc6IFsnYScsICdiJ10sXG4gKiAgICcyJzogWydhYiddXG4gKiB9KVxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBncm91cEJ5ID0gPEE+KGY6IChhOiBBKSA9PiBzdHJpbmcpID0+IChhczogQXJyYXk8QT4pOiBSZWNvcmQ8c3RyaW5nLCBOb25FbXB0eUFycmF5PEE+PiA9PiB7XG4gIGNvbnN0IG91dDogUmVjb3JkPHN0cmluZywgTm9uRW1wdHlBcnJheTxBPj4gPSB7fVxuICBmb3IgKGNvbnN0IGEgb2YgYXMpIHtcbiAgICBjb25zdCBrID0gZihhKVxuICAgIGlmIChvdXQuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgIG91dFtrXS5wdXNoKGEpXG4gICAgfSBlbHNlIHtcbiAgICAgIG91dFtrXSA9IFthXVxuICAgIH1cbiAgfVxuICByZXR1cm4gb3V0XG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHNvcnQgPSA8Qj4oTzogT3JkPEI+KSA9PiA8QSBleHRlbmRzIEI+KGFzOiBOb25FbXB0eUFycmF5PEE+KTogTm9uRW1wdHlBcnJheTxBPiA9PlxuICBhcy5zbGljZSgpLnNvcnQoTy5jb21wYXJlKSBhcyBhbnlcblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgaW5zZXJ0QXQgPSA8QT4oaTogbnVtYmVyLCBhOiBBKSA9PiAoYXM6IEFycmF5PEE+KTogT3B0aW9uPE5vbkVtcHR5QXJyYXk8QT4+ID0+XG4gIGkgPCAwIHx8IGkgPiBhcy5sZW5ndGggPyBfLm5vbmUgOiBfLnNvbWUodW5zYWZlSW5zZXJ0QXQoaSwgYSwgYXMpKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCB1cGRhdGVBdCA9IDxBPihpOiBudW1iZXIsIGE6IEEpOiAoKGFzOiBOb25FbXB0eUFycmF5PEE+KSA9PiBPcHRpb248Tm9uRW1wdHlBcnJheTxBPj4pID0+XG4gIG1vZGlmeUF0KGksICgpID0+IGEpXG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IG1vZGlmeUF0ID0gPEE+KGk6IG51bWJlciwgZjogKGE6IEEpID0+IEEpID0+IChhczogTm9uRW1wdHlBcnJheTxBPik6IE9wdGlvbjxOb25FbXB0eUFycmF5PEE+PiA9PlxuICBpc091dE9mQm91bmQoaSwgYXMpID8gXy5ub25lIDogXy5zb21lKHVuc2FmZVVwZGF0ZUF0KGksIGYoYXNbaV0pLCBhcykpXG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGNvcHk6IDxBPihhczogTm9uRW1wdHlBcnJheTxBPikgPT4gTm9uRW1wdHlBcnJheTxBPiA9IGZyb21SZWFkb25seU5vbkVtcHR5QXJyYXlcblxuLyoqXG4gKiBAY2F0ZWdvcnkgUG9pbnRlZFxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBvZjogUG9pbnRlZDE8VVJJPlsnb2YnXSA9IChhKSA9PiBbYV1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjUuMVxuICovXG5leHBvcnQgY29uc3QgemlwV2l0aCA9IDxBLCBCLCBDPihcbiAgYXM6IE5vbkVtcHR5QXJyYXk8QT4sXG4gIGJzOiBOb25FbXB0eUFycmF5PEI+LFxuICBmOiAoYTogQSwgYjogQikgPT4gQ1xuKTogTm9uRW1wdHlBcnJheTxDPiA9PiB7XG4gIGNvbnN0IGNzOiBOb25FbXB0eUFycmF5PEM+ID0gW2YoYXNbMF0sIGJzWzBdKV1cbiAgY29uc3QgbGVuID0gTWF0aC5taW4oYXMubGVuZ3RoLCBicy5sZW5ndGgpXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjc1tpXSA9IGYoYXNbaV0sIGJzW2ldKVxuICB9XG4gIHJldHVybiBjc1xufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuNS4xXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB6aXA8Qj4oYnM6IE5vbkVtcHR5QXJyYXk8Qj4pOiA8QT4oYXM6IE5vbkVtcHR5QXJyYXk8QT4pID0+IE5vbkVtcHR5QXJyYXk8W0EsIEJdPlxuZXhwb3J0IGZ1bmN0aW9uIHppcDxBLCBCPihhczogTm9uRW1wdHlBcnJheTxBPiwgYnM6IE5vbkVtcHR5QXJyYXk8Qj4pOiBOb25FbXB0eUFycmF5PFtBLCBCXT5cbmV4cG9ydCBmdW5jdGlvbiB6aXA8QSwgQj4oXG4gIGFzOiBOb25FbXB0eUFycmF5PEE+LFxuICBicz86IE5vbkVtcHR5QXJyYXk8Qj5cbik6IE5vbkVtcHR5QXJyYXk8W0EsIEJdPiB8ICgoYnM6IE5vbkVtcHR5QXJyYXk8Qj4pID0+IE5vbkVtcHR5QXJyYXk8W0IsIEFdPikge1xuICBpZiAoYnMgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiAoYnMpID0+IHppcChicywgYXMpXG4gIH1cbiAgcmV0dXJuIHppcFdpdGgoYXMsIGJzLCAoYSwgYikgPT4gW2EsIGJdKVxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuNS4xXG4gKi9cbmV4cG9ydCBjb25zdCB1bnppcCA9IDxBLCBCPihhYnM6IE5vbkVtcHR5QXJyYXk8W0EsIEJdPik6IFtOb25FbXB0eUFycmF5PEE+LCBOb25FbXB0eUFycmF5PEI+XSA9PiB7XG4gIGNvbnN0IGZhOiBOb25FbXB0eUFycmF5PEE+ID0gW2Fic1swXVswXV1cbiAgY29uc3QgZmI6IE5vbkVtcHR5QXJyYXk8Qj4gPSBbYWJzWzBdWzFdXVxuICBmb3IgKGxldCBpID0gMTsgaSA8IGFicy5sZW5ndGg7IGkrKykge1xuICAgIGZhW2ldID0gYWJzW2ldWzBdXG4gICAgZmJbaV0gPSBhYnNbaV1bMV1cbiAgfVxuICByZXR1cm4gW2ZhLCBmYl1cbn1cblxuLyoqXG4gKiBQcmVwZW5kIGFuIGVsZW1lbnQgdG8gZXZlcnkgbWVtYmVyIG9mIGFuIGFycmF5XG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IHByZXBlbmRBbGwgfSBmcm9tICdmcC10cy9Ob25FbXB0eUFycmF5J1xuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwocHJlcGVuZEFsbCg5KShbMSwgMiwgMywgNF0pLCBbOSwgMSwgOSwgMiwgOSwgMywgOSwgNF0pXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBwcmVwZW5kQWxsID0gPEE+KG1pZGRsZTogQSkgPT4gKGFzOiBOb25FbXB0eUFycmF5PEE+KTogTm9uRW1wdHlBcnJheTxBPiA9PiB7XG4gIGNvbnN0IG91dDogTm9uRW1wdHlBcnJheTxBPiA9IFttaWRkbGUsIGFzWzBdXVxuICBmb3IgKGxldCBpID0gMTsgaSA8IGFzLmxlbmd0aDsgaSsrKSB7XG4gICAgb3V0LnB1c2gobWlkZGxlLCBhc1tpXSlcbiAgfVxuICByZXR1cm4gb3V0XG59XG5cbi8qKlxuICogUGxhY2VzIGFuIGVsZW1lbnQgaW4gYmV0d2VlbiBtZW1iZXJzIG9mIGFuIGFycmF5XG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGludGVyc3BlcnNlIH0gZnJvbSAnZnAtdHMvTm9uRW1wdHlBcnJheSdcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKGludGVyc3BlcnNlKDkpKFsxLCAyLCAzLCA0XSksIFsxLCA5LCAyLCA5LCAzLCA5LCA0XSlcbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjkuMFxuICovXG5leHBvcnQgY29uc3QgaW50ZXJzcGVyc2UgPSA8QT4obWlkZGxlOiBBKSA9PiAoYXM6IE5vbkVtcHR5QXJyYXk8QT4pOiBOb25FbXB0eUFycmF5PEE+ID0+IHtcbiAgY29uc3QgcmVzdCA9IHRhaWwoYXMpXG4gIHJldHVybiBpc05vbkVtcHR5KHJlc3QpID8gcGlwZShyZXN0LCBwcmVwZW5kQWxsKG1pZGRsZSksIHByZXBlbmQoaGVhZChhcykpKSA6IGNvcHkoYXMpXG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZvbGRNYXBXaXRoSW5kZXg6IDxTPihTOiBTZW1pZ3JvdXA8Uz4pID0+IDxBPihmOiAoaTogbnVtYmVyLCBhOiBBKSA9PiBTKSA9PiAoZmE6IE5vbkVtcHR5QXJyYXk8QT4pID0+IFMgPVxuICBSTkVBLmZvbGRNYXBXaXRoSW5kZXhcblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgZm9sZE1hcDogPFM+KFM6IFNlbWlncm91cDxTPikgPT4gPEE+KGY6IChhOiBBKSA9PiBTKSA9PiAoZmE6IE5vbkVtcHR5QXJyYXk8QT4pID0+IFMgPSBSTkVBLmZvbGRNYXBcblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGNoYWluV2l0aEluZGV4ID0gPEEsIEI+KGY6IChpOiBudW1iZXIsIGE6IEEpID0+IE5vbkVtcHR5QXJyYXk8Qj4pID0+IChcbiAgYXM6IE5vbkVtcHR5QXJyYXk8QT5cbik6IE5vbkVtcHR5QXJyYXk8Qj4gPT4ge1xuICBjb25zdCBvdXQ6IE5vbkVtcHR5QXJyYXk8Qj4gPSBmcm9tUmVhZG9ubHlOb25FbXB0eUFycmF5KGYoMCwgaGVhZChhcykpKVxuICBmb3IgKGxldCBpID0gMTsgaSA8IGFzLmxlbmd0aDsgaSsrKSB7XG4gICAgb3V0LnB1c2goLi4uZihpLCBhc1tpXSkpXG4gIH1cbiAgcmV0dXJuIG91dFxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgY2hvcCA9IDxBLCBCPihmOiAoYXM6IE5vbkVtcHR5QXJyYXk8QT4pID0+IFtCLCBBcnJheTxBPl0pID0+IChhczogTm9uRW1wdHlBcnJheTxBPik6IE5vbkVtcHR5QXJyYXk8Qj4gPT4ge1xuICBjb25zdCBbYiwgcmVzdF0gPSBmKGFzKVxuICBjb25zdCBvdXQ6IE5vbkVtcHR5QXJyYXk8Qj4gPSBbYl1cbiAgbGV0IG5leHQ6IEFycmF5PEE+ID0gcmVzdFxuICB3aGlsZSAoaXNOb25FbXB0eShuZXh0KSkge1xuICAgIGNvbnN0IFtiLCByZXN0XSA9IGYobmV4dClcbiAgICBvdXQucHVzaChiKVxuICAgIG5leHQgPSByZXN0XG4gIH1cbiAgcmV0dXJuIG91dFxufVxuXG4vKipcbiAqIFNwbGl0cyBhIGBOb25FbXB0eUFycmF5YCBpbnRvIHR3byBwaWVjZXMsIHRoZSBmaXJzdCBwaWVjZSBoYXMgbWF4IGBuYCBlbGVtZW50cy5cbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHNwbGl0QXQgPSAobjogbnVtYmVyKSA9PiA8QT4oYXM6IE5vbkVtcHR5QXJyYXk8QT4pOiBbTm9uRW1wdHlBcnJheTxBPiwgQXJyYXk8QT5dID0+IHtcbiAgY29uc3QgbSA9IE1hdGgubWF4KDEsIG4pXG4gIHJldHVybiBtID49IGFzLmxlbmd0aCA/IFtjb3B5KGFzKSwgW11dIDogW3BpcGUoYXMuc2xpY2UoMSwgbSksIHByZXBlbmQoaGVhZChhcykpKSwgYXMuc2xpY2UobSldXG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBjaHVua3NPZiA9IChuOiBudW1iZXIpOiAoPEE+KGFzOiBOb25FbXB0eUFycmF5PEE+KSA9PiBOb25FbXB0eUFycmF5PE5vbkVtcHR5QXJyYXk8QT4+KSA9PiBjaG9wKHNwbGl0QXQobikpXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIG5vbi1waXBlYWJsZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmNvbnN0IF9tYXA6IEZ1bmN0b3IxPFVSST5bJ21hcCddID0gKGZhLCBmKSA9PiBwaXBlKGZhLCBtYXAoZikpXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuY29uc3QgX21hcFdpdGhJbmRleDogRnVuY3RvcldpdGhJbmRleDE8VVJJLCBudW1iZXI+WydtYXBXaXRoSW5kZXgnXSA9IChmYSwgZikgPT4gcGlwZShmYSwgbWFwV2l0aEluZGV4KGYpKVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmNvbnN0IF9hcDogQXBwbHkxPFVSST5bJ2FwJ10gPSAoZmFiLCBmYSkgPT4gcGlwZShmYWIsIGFwKGZhKSlcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5jb25zdCBfY2hhaW46IE1vbmFkMTxVUkk+WydjaGFpbiddID0gKG1hLCBmKSA9PiBwaXBlKG1hLCBjaGFpbihmKSlcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5jb25zdCBfZXh0ZW5kOiBFeHRlbmQxPFVSST5bJ2V4dGVuZCddID0gKHdhLCBmKSA9PiBwaXBlKHdhLCBleHRlbmQoZikpXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuY29uc3QgX3JlZHVjZTogRm9sZGFibGUxPFVSST5bJ3JlZHVjZSddID0gKGZhLCBiLCBmKSA9PiBwaXBlKGZhLCByZWR1Y2UoYiwgZikpXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuY29uc3QgX2ZvbGRNYXA6IEZvbGRhYmxlMTxVUkk+Wydmb2xkTWFwJ10gPSAoTSkgPT4ge1xuICBjb25zdCBmb2xkTWFwTSA9IGZvbGRNYXAoTSlcbiAgcmV0dXJuIChmYSwgZikgPT4gcGlwZShmYSwgZm9sZE1hcE0oZikpXG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuY29uc3QgX3JlZHVjZVJpZ2h0OiBGb2xkYWJsZTE8VVJJPlsncmVkdWNlUmlnaHQnXSA9IChmYSwgYiwgZikgPT4gcGlwZShmYSwgcmVkdWNlUmlnaHQoYiwgZikpXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuY29uc3QgX3RyYXZlcnNlOiBUcmF2ZXJzYWJsZTE8VVJJPlsndHJhdmVyc2UnXSA9IDxGPihcbiAgRjogQXBwbGljYXRpdmVIS1Q8Rj5cbik6ICg8QSwgQj4odGE6IE5vbkVtcHR5QXJyYXk8QT4sIGY6IChhOiBBKSA9PiBIS1Q8RiwgQj4pID0+IEhLVDxGLCBOb25FbXB0eUFycmF5PEI+PikgPT4ge1xuICBjb25zdCB0cmF2ZXJzZUYgPSB0cmF2ZXJzZShGKVxuICByZXR1cm4gKHRhLCBmKSA9PiBwaXBlKHRhLCB0cmF2ZXJzZUYoZikpXG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuY29uc3QgX2FsdDogQWx0MTxVUkk+WydhbHQnXSA9IChmYSwgdGhhdCkgPT4gcGlwZShmYSwgYWx0KHRoYXQpKVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmNvbnN0IF9yZWR1Y2VXaXRoSW5kZXg6IEZvbGRhYmxlV2l0aEluZGV4MTxVUkksIG51bWJlcj5bJ3JlZHVjZVdpdGhJbmRleCddID0gKGZhLCBiLCBmKSA9PlxuICBwaXBlKGZhLCByZWR1Y2VXaXRoSW5kZXgoYiwgZikpXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuY29uc3QgX2ZvbGRNYXBXaXRoSW5kZXg6IEZvbGRhYmxlV2l0aEluZGV4MTxVUkksIG51bWJlcj5bJ2ZvbGRNYXBXaXRoSW5kZXgnXSA9IChNKSA9PiB7XG4gIGNvbnN0IGZvbGRNYXBXaXRoSW5kZXhNID0gZm9sZE1hcFdpdGhJbmRleChNKVxuICByZXR1cm4gKGZhLCBmKSA9PiBwaXBlKGZhLCBmb2xkTWFwV2l0aEluZGV4TShmKSlcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5jb25zdCBfcmVkdWNlUmlnaHRXaXRoSW5kZXg6IEZvbGRhYmxlV2l0aEluZGV4MTxVUkksIG51bWJlcj5bJ3JlZHVjZVJpZ2h0V2l0aEluZGV4J10gPSAoZmEsIGIsIGYpID0+XG4gIHBpcGUoZmEsIHJlZHVjZVJpZ2h0V2l0aEluZGV4KGIsIGYpKVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmNvbnN0IF90cmF2ZXJzZVdpdGhJbmRleDogVHJhdmVyc2FibGVXaXRoSW5kZXgxPFVSSSwgbnVtYmVyPlsndHJhdmVyc2VXaXRoSW5kZXgnXSA9IDxGPihcbiAgRjogQXBwbGljYXRpdmVIS1Q8Rj5cbik6ICg8QSwgQj4odGE6IE5vbkVtcHR5QXJyYXk8QT4sIGY6IChpOiBudW1iZXIsIGE6IEEpID0+IEhLVDxGLCBCPikgPT4gSEtUPEYsIE5vbkVtcHR5QXJyYXk8Qj4+KSA9PiB7XG4gIGNvbnN0IHRyYXZlcnNlV2l0aEluZGV4RiA9IHRyYXZlcnNlV2l0aEluZGV4KEYpXG4gIHJldHVybiAodGEsIGYpID0+IHBpcGUodGEsIHRyYXZlcnNlV2l0aEluZGV4RihmKSlcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gdHlwZSBjbGFzcyBtZW1iZXJzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogTGVzcyBzdHJpY3QgdmVyc2lvbiBvZiBbYGFsdGBdKCNhbHQpLlxuICpcbiAqIEBjYXRlZ29yeSBBbHRcbiAqIEBzaW5jZSAyLjkuMFxuICovXG5leHBvcnQgY29uc3QgYWx0VyA9IDxCPih0aGF0OiBMYXp5PE5vbkVtcHR5QXJyYXk8Qj4+KSA9PiA8QT4oYXM6IE5vbkVtcHR5QXJyYXk8QT4pOiBOb25FbXB0eUFycmF5PEEgfCBCPiA9PlxuICBwaXBlKGFzLCBjb25jYXRXKHRoYXQoKSkpXG5cbi8qKlxuICogSWRlbnRpZmllcyBhbiBhc3NvY2lhdGl2ZSBvcGVyYXRpb24gb24gYSB0eXBlIGNvbnN0cnVjdG9yLiBJdCBpcyBzaW1pbGFyIHRvIGBTZW1pZ3JvdXBgLCBleGNlcHQgdGhhdCBpdCBhcHBsaWVzIHRvXG4gKiB0eXBlcyBvZiBraW5kIGAqIC0+ICpgLlxuICpcbiAqIEBjYXRlZ29yeSBBbHRcbiAqIEBzaW5jZSAyLjYuMlxuICovXG5leHBvcnQgY29uc3QgYWx0OiA8QT4odGhhdDogTGF6eTxOb25FbXB0eUFycmF5PEE+PikgPT4gKGZhOiBOb25FbXB0eUFycmF5PEE+KSA9PiBOb25FbXB0eUFycmF5PEE+ID0gYWx0V1xuXG4vKipcbiAqIEFwcGx5IGEgZnVuY3Rpb24gdG8gYW4gYXJndW1lbnQgdW5kZXIgYSB0eXBlIGNvbnN0cnVjdG9yLlxuICpcbiAqIEBjYXRlZ29yeSBBcHBseVxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBhcCA9IDxBPihhczogTm9uRW1wdHlBcnJheTxBPik6ICg8Qj4oZmFiOiBOb25FbXB0eUFycmF5PChhOiBBKSA9PiBCPikgPT4gTm9uRW1wdHlBcnJheTxCPikgPT5cbiAgY2hhaW4oKGYpID0+IHBpcGUoYXMsIG1hcChmKSkpXG5cbi8qKlxuICogQ29tcG9zZXMgY29tcHV0YXRpb25zIGluIHNlcXVlbmNlLCB1c2luZyB0aGUgcmV0dXJuIHZhbHVlIG9mIG9uZSBjb21wdXRhdGlvbiB0byBkZXRlcm1pbmUgdGhlIG5leHQgY29tcHV0YXRpb24uXG4gKlxuICogQGNhdGVnb3J5IE1vbmFkXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGNoYWluID0gPEEsIEI+KGY6IChhOiBBKSA9PiBOb25FbXB0eUFycmF5PEI+KTogKChtYTogTm9uRW1wdHlBcnJheTxBPikgPT4gTm9uRW1wdHlBcnJheTxCPikgPT5cbiAgY2hhaW5XaXRoSW5kZXgoKF8sIGEpID0+IGYoYSkpXG5cbi8qKlxuICogQGNhdGVnb3J5IEV4dGVuZFxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBleHRlbmQgPSA8QSwgQj4oZjogKGFzOiBOb25FbXB0eUFycmF5PEE+KSA9PiBCKSA9PiAoYXM6IE5vbkVtcHR5QXJyYXk8QT4pOiBOb25FbXB0eUFycmF5PEI+ID0+IHtcbiAgbGV0IG5leHQ6IEFycmF5PEE+ID0gdGFpbChhcylcbiAgY29uc3Qgb3V0OiBOb25FbXB0eUFycmF5PEI+ID0gW2YoYXMpXVxuICB3aGlsZSAoaXNOb25FbXB0eShuZXh0KSkge1xuICAgIG91dC5wdXNoKGYobmV4dCkpXG4gICAgbmV4dCA9IHRhaWwobmV4dClcbiAgfVxuICByZXR1cm4gb3V0XG59XG5cbi8qKlxuICogRGVyaXZhYmxlIGZyb20gYEV4dGVuZGAuXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGR1cGxpY2F0ZTogPEE+KG1hOiBOb25FbXB0eUFycmF5PEE+KSA9PiBOb25FbXB0eUFycmF5PE5vbkVtcHR5QXJyYXk8QT4+ID1cbiAgLyojX19QVVJFX18qL1xuICBleHRlbmQoaWRlbnRpdHkpXG5cbi8qKlxuICogRGVyaXZhYmxlIGZyb20gYENoYWluYC5cbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgY29uc3QgZmxhdHRlbjogPEE+KG1tYTogTm9uRW1wdHlBcnJheTxOb25FbXB0eUFycmF5PEE+PikgPT4gTm9uRW1wdHlBcnJheTxBPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgY2hhaW4oaWRlbnRpdHkpXG5cbi8qKlxuICogYG1hcGAgY2FuIGJlIHVzZWQgdG8gdHVybiBmdW5jdGlvbnMgYChhOiBBKSA9PiBCYCBpbnRvIGZ1bmN0aW9ucyBgKGZhOiBGPEE+KSA9PiBGPEI+YCB3aG9zZSBhcmd1bWVudCBhbmQgcmV0dXJuIHR5cGVzXG4gKiB1c2UgdGhlIHR5cGUgY29uc3RydWN0b3IgYEZgIHRvIHJlcHJlc2VudCBzb21lIGNvbXB1dGF0aW9uYWwgY29udGV4dC5cbiAqXG4gKiBAY2F0ZWdvcnkgRnVuY3RvclxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBtYXAgPSA8QSwgQj4oZjogKGE6IEEpID0+IEIpOiAoKGFzOiBOb25FbXB0eUFycmF5PEE+KSA9PiBOb25FbXB0eUFycmF5PEI+KSA9PiBtYXBXaXRoSW5kZXgoKF8sIGEpID0+IGYoYSkpXG5cbi8qKlxuICogQGNhdGVnb3J5IEZ1bmN0b3JXaXRoSW5kZXhcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgbWFwV2l0aEluZGV4ID0gPEEsIEI+KGY6IChpOiBudW1iZXIsIGE6IEEpID0+IEIpID0+IChhczogTm9uRW1wdHlBcnJheTxBPik6IE5vbkVtcHR5QXJyYXk8Qj4gPT4ge1xuICBjb25zdCBvdXQ6IE5vbkVtcHR5QXJyYXk8Qj4gPSBbZigwLCBoZWFkKGFzKSldXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgYXMubGVuZ3RoOyBpKyspIHtcbiAgICBvdXQucHVzaChmKGksIGFzW2ldKSlcbiAgfVxuICByZXR1cm4gb3V0XG59XG5cbi8qKlxuICogQGNhdGVnb3J5IEZvbGRhYmxlXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHJlZHVjZTogPEEsIEI+KGI6IEIsIGY6IChiOiBCLCBhOiBBKSA9PiBCKSA9PiAoZmE6IE5vbkVtcHR5QXJyYXk8QT4pID0+IEIgPSBSTkVBLnJlZHVjZVxuXG4vKipcbiAqIEBjYXRlZ29yeSBGb2xkYWJsZVdpdGhJbmRleFxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCByZWR1Y2VXaXRoSW5kZXg6IDxBLCBCPihiOiBCLCBmOiAoaTogbnVtYmVyLCBiOiBCLCBhOiBBKSA9PiBCKSA9PiAoZmE6IE5vbkVtcHR5QXJyYXk8QT4pID0+IEIgPVxuICBSTkVBLnJlZHVjZVdpdGhJbmRleFxuXG4vKipcbiAqIEBjYXRlZ29yeSBGb2xkYWJsZVxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCByZWR1Y2VSaWdodDogPEEsIEI+KGI6IEIsIGY6IChhOiBBLCBiOiBCKSA9PiBCKSA9PiAoZmE6IE5vbkVtcHR5QXJyYXk8QT4pID0+IEIgPSBSTkVBLnJlZHVjZVJpZ2h0XG5cbi8qKlxuICogQGNhdGVnb3J5IEZvbGRhYmxlV2l0aEluZGV4XG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHJlZHVjZVJpZ2h0V2l0aEluZGV4OiA8QSwgQj4oYjogQiwgZjogKGk6IG51bWJlciwgYTogQSwgYjogQikgPT4gQikgPT4gKGZhOiBOb25FbXB0eUFycmF5PEE+KSA9PiBCID1cbiAgUk5FQS5yZWR1Y2VSaWdodFdpdGhJbmRleFxuXG4vKipcbiAqIEBzaW5jZSAyLjYuM1xuICovXG5leHBvcnQgY29uc3QgdHJhdmVyc2U6IFBpcGVhYmxlVHJhdmVyc2UxPFVSST4gPSA8Rj4oXG4gIEY6IEFwcGxpY2F0aXZlSEtUPEY+XG4pOiAoPEEsIEI+KGY6IChhOiBBKSA9PiBIS1Q8RiwgQj4pID0+IChhczogTm9uRW1wdHlBcnJheTxBPikgPT4gSEtUPEYsIE5vbkVtcHR5QXJyYXk8Qj4+KSA9PiB7XG4gIGNvbnN0IHRyYXZlcnNlV2l0aEluZGV4RiA9IHRyYXZlcnNlV2l0aEluZGV4KEYpXG4gIHJldHVybiAoZikgPT4gdHJhdmVyc2VXaXRoSW5kZXhGKChfLCBhKSA9PiBmKGEpKVxufVxuXG4vKipcbiAqIEBzaW5jZSAyLjYuM1xuICovXG5leHBvcnQgY29uc3Qgc2VxdWVuY2U6IFRyYXZlcnNhYmxlMTxVUkk+WydzZXF1ZW5jZSddID0gPEY+KFxuICBGOiBBcHBsaWNhdGl2ZUhLVDxGPlxuKTogKDxBPihhczogTm9uRW1wdHlBcnJheTxIS1Q8RiwgQT4+KSA9PiBIS1Q8RiwgTm9uRW1wdHlBcnJheTxBPj4pID0+IHRyYXZlcnNlV2l0aEluZGV4KEYpKChfLCBhKSA9PiBhKVxuXG4vKipcbiAqIEBzaW5jZSAyLjYuM1xuICovXG5leHBvcnQgY29uc3QgdHJhdmVyc2VXaXRoSW5kZXg6IFBpcGVhYmxlVHJhdmVyc2VXaXRoSW5kZXgxPFVSSSwgbnVtYmVyPiA9IDxGPihGOiBBcHBsaWNhdGl2ZUhLVDxGPikgPT4gPEEsIEI+KFxuICBmOiAoaTogbnVtYmVyLCBhOiBBKSA9PiBIS1Q8RiwgQj5cbikgPT4gKGFzOiBOb25FbXB0eUFycmF5PEE+KTogSEtUPEYsIE5vbkVtcHR5QXJyYXk8Qj4+ID0+IHtcbiAgbGV0IG91dDogSEtUPEYsIE5vbkVtcHR5QXJyYXk8Qj4+ID0gRi5tYXAoZigwLCBoZWFkKGFzKSksIG9mKVxuICBmb3IgKGxldCBpID0gMTsgaSA8IGFzLmxlbmd0aDsgaSsrKSB7XG4gICAgb3V0ID0gRi5hcChcbiAgICAgIEYubWFwKG91dCwgKGJzKSA9PiAoYjogQikgPT4gcGlwZShicywgYXBwZW5kKGIpKSksXG4gICAgICBmKGksIGFzW2ldKVxuICAgIClcbiAgfVxuICByZXR1cm4gb3V0XG59XG5cbi8qKlxuICogQHNpbmNlIDIuNy4wXG4gKi9cbmV4cG9ydCBjb25zdCBleHRyYWN0OiBDb21vbmFkMTxVUkk+WydleHRyYWN0J10gPSBSTkVBLmhlYWRcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gaW5zdGFuY2VzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBVUkkgPSAnTm9uRW1wdHlBcnJheSdcblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IHR5cGUgVVJJID0gdHlwZW9mIFVSSVxuXG5kZWNsYXJlIG1vZHVsZSAnLi9IS1QnIHtcbiAgaW50ZXJmYWNlIFVSSXRvS2luZDxBPiB7XG4gICAgcmVhZG9ubHkgW1VSSV06IE5vbkVtcHR5QXJyYXk8QT5cbiAgfVxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgZ2V0U2hvdzogPEE+KFM6IFNob3c8QT4pID0+IFNob3c8Tm9uRW1wdHlBcnJheTxBPj4gPSBSTkVBLmdldFNob3dcblxuLyoqXG4gKiBCdWlsZHMgYSBgU2VtaWdyb3VwYCBpbnN0YW5jZSBmb3IgYE5vbkVtcHR5QXJyYXlgXG4gKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRTZW1pZ3JvdXAgPSA8QSA9IG5ldmVyPigpOiBTZW1pZ3JvdXA8Tm9uRW1wdHlBcnJheTxBPj4gPT4gKHtcbiAgY29uY2F0XG59KVxuXG4vKipcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBnZXRFcSB9IGZyb20gJ2ZwLXRzL05vbkVtcHR5QXJyYXknXG4gKiBpbXBvcnQgKiBhcyBOIGZyb20gJ2ZwLXRzL251bWJlcidcbiAqXG4gKiBjb25zdCBFID0gZ2V0RXEoTi5FcSlcbiAqIGFzc2VydC5zdHJpY3RFcXVhbChFLmVxdWFscyhbMSwgMl0sIFsxLCAyXSksIHRydWUpXG4gKiBhc3NlcnQuc3RyaWN0RXF1YWwoRS5lcXVhbHMoWzEsIDJdLCBbMSwgM10pLCBmYWxzZSlcbiAqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGdldEVxOiA8QT4oRTogRXE8QT4pID0+IEVxPE5vbkVtcHR5QXJyYXk8QT4+ID0gUk5FQS5nZXRFcVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgZ2V0VW5pb25TZW1pZ3JvdXAgPSA8QT4oRTogRXE8QT4pOiBTZW1pZ3JvdXA8Tm9uRW1wdHlBcnJheTxBPj4gPT4ge1xuICBjb25zdCB1bmlvbkUgPSB1bmlvbihFKVxuICByZXR1cm4ge1xuICAgIGNvbmNhdDogKGZpcnN0LCBzZWNvbmQpID0+IHVuaW9uRShzZWNvbmQpKGZpcnN0KVxuICB9XG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuNy4wXG4gKi9cbmV4cG9ydCBjb25zdCBGdW5jdG9yOiBGdW5jdG9yMTxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcFxufVxuXG4vKipcbiAqIERlcml2YWJsZSBmcm9tIGBGdW5jdG9yYC5cbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZsYXAgPVxuICAvKiNfX1BVUkVfXyovXG4gIGZsYXBfKEZ1bmN0b3IpXG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgUG9pbnRlZDogUG9pbnRlZDE8VVJJPiA9IHtcbiAgVVJJLFxuICBvZlxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjcuMFxuICovXG5leHBvcnQgY29uc3QgRnVuY3RvcldpdGhJbmRleDogRnVuY3RvcldpdGhJbmRleDE8VVJJLCBudW1iZXI+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgbWFwV2l0aEluZGV4OiBfbWFwV2l0aEluZGV4XG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgQXBwbHk6IEFwcGx5MTxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgYXA6IF9hcFxufVxuXG4vKipcbiAqIENvbWJpbmUgdHdvIGVmZmVjdGZ1bCBhY3Rpb25zLCBrZWVwaW5nIG9ubHkgdGhlIHJlc3VsdCBvZiB0aGUgZmlyc3QuXG4gKlxuICogRGVyaXZhYmxlIGZyb20gYEFwcGx5YC5cbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgY29uc3QgYXBGaXJzdCA9XG4gIC8qI19fUFVSRV9fKi9cbiAgYXBGaXJzdF8oQXBwbHkpXG5cbi8qKlxuICogQ29tYmluZSB0d28gZWZmZWN0ZnVsIGFjdGlvbnMsIGtlZXBpbmcgb25seSB0aGUgcmVzdWx0IG9mIHRoZSBzZWNvbmQuXG4gKlxuICogRGVyaXZhYmxlIGZyb20gYEFwcGx5YC5cbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgY29uc3QgYXBTZWNvbmQgPVxuICAvKiNfX1BVUkVfXyovXG4gIGFwU2Vjb25kXyhBcHBseSlcblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi43LjBcbiAqL1xuZXhwb3J0IGNvbnN0IEFwcGxpY2F0aXZlOiBBcHBsaWNhdGl2ZTE8VVJJPiA9IHtcbiAgVVJJLFxuICBtYXA6IF9tYXAsXG4gIGFwOiBfYXAsXG4gIG9mXG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgQ2hhaW46IENoYWluMTxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgYXA6IF9hcCxcbiAgY2hhaW46IF9jaGFpblxufVxuXG4vKipcbiAqIENvbXBvc2VzIGNvbXB1dGF0aW9ucyBpbiBzZXF1ZW5jZSwgdXNpbmcgdGhlIHJldHVybiB2YWx1ZSBvZiBvbmUgY29tcHV0YXRpb24gdG8gZGV0ZXJtaW5lIHRoZSBuZXh0IGNvbXB1dGF0aW9uIGFuZFxuICoga2VlcGluZyBvbmx5IHRoZSByZXN1bHQgb2YgdGhlIGZpcnN0LlxuICpcbiAqIERlcml2YWJsZSBmcm9tIGBDaGFpbmAuXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGNoYWluRmlyc3QgPVxuICAvKiNfX1BVUkVfXyovXG4gIGNoYWluRmlyc3RfKENoYWluKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjcuMFxuICovXG5leHBvcnQgY29uc3QgTW9uYWQ6IE1vbmFkMTxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgYXA6IF9hcCxcbiAgb2YsXG4gIGNoYWluOiBfY2hhaW5cbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi43LjBcbiAqL1xuZXhwb3J0IGNvbnN0IEZvbGRhYmxlOiBGb2xkYWJsZTE8VVJJPiA9IHtcbiAgVVJJLFxuICByZWR1Y2U6IF9yZWR1Y2UsXG4gIGZvbGRNYXA6IF9mb2xkTWFwLFxuICByZWR1Y2VSaWdodDogX3JlZHVjZVJpZ2h0XG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuNy4wXG4gKi9cbmV4cG9ydCBjb25zdCBGb2xkYWJsZVdpdGhJbmRleDogRm9sZGFibGVXaXRoSW5kZXgxPFVSSSwgbnVtYmVyPiA9IHtcbiAgVVJJLFxuICByZWR1Y2U6IF9yZWR1Y2UsXG4gIGZvbGRNYXA6IF9mb2xkTWFwLFxuICByZWR1Y2VSaWdodDogX3JlZHVjZVJpZ2h0LFxuICByZWR1Y2VXaXRoSW5kZXg6IF9yZWR1Y2VXaXRoSW5kZXgsXG4gIGZvbGRNYXBXaXRoSW5kZXg6IF9mb2xkTWFwV2l0aEluZGV4LFxuICByZWR1Y2VSaWdodFdpdGhJbmRleDogX3JlZHVjZVJpZ2h0V2l0aEluZGV4XG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuNy4wXG4gKi9cbmV4cG9ydCBjb25zdCBUcmF2ZXJzYWJsZTogVHJhdmVyc2FibGUxPFVSST4gPSB7XG4gIFVSSSxcbiAgbWFwOiBfbWFwLFxuICByZWR1Y2U6IF9yZWR1Y2UsXG4gIGZvbGRNYXA6IF9mb2xkTWFwLFxuICByZWR1Y2VSaWdodDogX3JlZHVjZVJpZ2h0LFxuICB0cmF2ZXJzZTogX3RyYXZlcnNlLFxuICBzZXF1ZW5jZVxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjcuMFxuICovXG5leHBvcnQgY29uc3QgVHJhdmVyc2FibGVXaXRoSW5kZXg6IFRyYXZlcnNhYmxlV2l0aEluZGV4MTxVUkksIG51bWJlcj4gPSB7XG4gIFVSSSxcbiAgbWFwOiBfbWFwLFxuICBtYXBXaXRoSW5kZXg6IF9tYXBXaXRoSW5kZXgsXG4gIHJlZHVjZTogX3JlZHVjZSxcbiAgZm9sZE1hcDogX2ZvbGRNYXAsXG4gIHJlZHVjZVJpZ2h0OiBfcmVkdWNlUmlnaHQsXG4gIHRyYXZlcnNlOiBfdHJhdmVyc2UsXG4gIHNlcXVlbmNlLFxuICByZWR1Y2VXaXRoSW5kZXg6IF9yZWR1Y2VXaXRoSW5kZXgsXG4gIGZvbGRNYXBXaXRoSW5kZXg6IF9mb2xkTWFwV2l0aEluZGV4LFxuICByZWR1Y2VSaWdodFdpdGhJbmRleDogX3JlZHVjZVJpZ2h0V2l0aEluZGV4LFxuICB0cmF2ZXJzZVdpdGhJbmRleDogX3RyYXZlcnNlV2l0aEluZGV4XG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuNy4wXG4gKi9cbmV4cG9ydCBjb25zdCBBbHQ6IEFsdDE8VVJJPiA9IHtcbiAgVVJJLFxuICBtYXA6IF9tYXAsXG4gIGFsdDogX2FsdFxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjcuMFxuICovXG5leHBvcnQgY29uc3QgQ29tb25hZDogQ29tb25hZDE8VVJJPiA9IHtcbiAgVVJJLFxuICBtYXA6IF9tYXAsXG4gIGV4dGVuZDogX2V4dGVuZCxcbiAgZXh0cmFjdFxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBkbyBub3RhdGlvblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEBzaW5jZSAyLjkuMFxuICovXG5leHBvcnQgY29uc3QgRG86IE5vbkVtcHR5QXJyYXk8e30+ID1cbiAgLyojX19QVVJFX18qL1xuICBvZihfLmVtcHR5UmVjb3JkKVxuXG4vKipcbiAqIEBzaW5jZSAyLjguMFxuICovXG5leHBvcnQgY29uc3QgYmluZFRvID1cbiAgLyojX19QVVJFX18qL1xuICBiaW5kVG9fKEZ1bmN0b3IpXG5cbi8qKlxuICogQHNpbmNlIDIuOC4wXG4gKi9cbmV4cG9ydCBjb25zdCBiaW5kID1cbiAgLyojX19QVVJFX18qL1xuICBiaW5kXyhDaGFpbilcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gcGlwZWFibGUgc2VxdWVuY2UgU1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEBzaW5jZSAyLjguMFxuICovXG5leHBvcnQgY29uc3QgYXBTID1cbiAgLyojX19QVVJFX18qL1xuICBhcFNfKEFwcGx5KVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyB1dGlsc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgaGVhZDogPEE+KG5lYTogTm9uRW1wdHlBcnJheTxBPikgPT4gQSA9IFJORUEuaGVhZFxuXG4vKipcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgdGFpbCA9IDxBPihhczogTm9uRW1wdHlBcnJheTxBPik6IEFycmF5PEE+ID0+IGFzLnNsaWNlKDEpXG5cbi8qKlxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBsYXN0OiA8QT4obmVhOiBOb25FbXB0eUFycmF5PEE+KSA9PiBBID0gUk5FQS5sYXN0XG5cbi8qKlxuICogR2V0IGFsbCBidXQgdGhlIGxhc3QgZWxlbWVudCBvZiBhIG5vbiBlbXB0eSBhcnJheSwgY3JlYXRpbmcgYSBuZXcgYXJyYXkuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGluaXQgfSBmcm9tICdmcC10cy9Ob25FbXB0eUFycmF5J1xuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoaW5pdChbMSwgMiwgM10pLCBbMSwgMl0pXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKGluaXQoWzFdKSwgW10pXG4gKlxuICogQHNpbmNlIDIuMi4wXG4gKi9cbmV4cG9ydCBjb25zdCBpbml0ID0gPEE+KGFzOiBOb25FbXB0eUFycmF5PEE+KTogQXJyYXk8QT4gPT4gYXMuc2xpY2UoMCwgLTEpXG5cbi8qKlxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBtaW46IDxBPihvcmQ6IE9yZDxBPikgPT4gKG5lYTogTm9uRW1wdHlBcnJheTxBPikgPT4gQSA9IFJORUEubWluXG5cbi8qKlxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBtYXg6IDxBPihvcmQ6IE9yZDxBPikgPT4gKG5lYTogTm9uRW1wdHlBcnJheTxBPikgPT4gQSA9IFJORUEubWF4XG5cbi8qKlxuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgY29uY2F0QWxsID0gPEE+KFM6IFNlbWlncm91cDxBPikgPT4gKGFzOiBOb25FbXB0eUFycmF5PEE+KTogQSA9PiBhcy5yZWR1Y2UoUy5jb25jYXQpXG5cbi8qKlxuICogQnJlYWsgYW4gYEFycmF5YCBpbnRvIGl0cyBmaXJzdCBlbGVtZW50IGFuZCByZW1haW5pbmcgZWxlbWVudHMuXG4gKlxuICogQGNhdGVnb3J5IGRlc3RydWN0b3JzXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBtYXRjaExlZnQgPSA8QSwgQj4oZjogKGhlYWQ6IEEsIHRhaWw6IEFycmF5PEE+KSA9PiBCKSA9PiAoYXM6IE5vbkVtcHR5QXJyYXk8QT4pOiBCID0+IGYoaGVhZChhcyksIHRhaWwoYXMpKVxuXG4vKipcbiAqIEJyZWFrIGFuIGBBcnJheWAgaW50byBpdHMgaW5pdGlhbCBlbGVtZW50cyBhbmQgdGhlIGxhc3QgZWxlbWVudC5cbiAqXG4gKiBAY2F0ZWdvcnkgZGVzdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IG1hdGNoUmlnaHQgPSA8QSwgQj4oZjogKGluaXQ6IEFycmF5PEE+LCBsYXN0OiBBKSA9PiBCKSA9PiAoYXM6IE5vbkVtcHR5QXJyYXk8QT4pOiBCID0+XG4gIGYoaW5pdChhcyksIGxhc3QoYXMpKVxuXG4vKipcbiAqIEFwcGx5IGEgZnVuY3Rpb24gdG8gdGhlIGhlYWQsIGNyZWF0aW5nIGEgbmV3IGBOb25FbXB0eUFycmF5YC5cbiAqXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBtb2RpZnlIZWFkID0gPEE+KGY6IEVuZG9tb3JwaGlzbTxBPikgPT4gKGFzOiBOb25FbXB0eUFycmF5PEE+KTogTm9uRW1wdHlBcnJheTxBPiA9PiBbXG4gIGYoaGVhZChhcykpLFxuICAuLi50YWlsKGFzKVxuXVxuXG4vKipcbiAqIENoYW5nZSB0aGUgaGVhZCwgY3JlYXRpbmcgYSBuZXcgYE5vbkVtcHR5QXJyYXlgLlxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgdXBkYXRlSGVhZCA9IDxBPihhOiBBKTogKChhczogTm9uRW1wdHlBcnJheTxBPikgPT4gTm9uRW1wdHlBcnJheTxBPikgPT4gbW9kaWZ5SGVhZCgoKSA9PiBhKVxuXG4vKipcbiAqIEFwcGx5IGEgZnVuY3Rpb24gdG8gdGhlIGxhc3QgZWxlbWVudCwgY3JlYXRpbmcgYSBuZXcgYE5vbkVtcHR5QXJyYXlgLlxuICpcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IG1vZGlmeUxhc3QgPSA8QT4oZjogRW5kb21vcnBoaXNtPEE+KSA9PiAoYXM6IE5vbkVtcHR5QXJyYXk8QT4pOiBOb25FbXB0eUFycmF5PEE+ID0+XG4gIHBpcGUoaW5pdChhcyksIGFwcGVuZChmKGxhc3QoYXMpKSkpXG5cbi8qKlxuICogQ2hhbmdlIHRoZSBsYXN0IGVsZW1lbnQsIGNyZWF0aW5nIGEgbmV3IGBOb25FbXB0eUFycmF5YC5cbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHVwZGF0ZUxhc3QgPSA8QT4oYTogQSk6ICgoYXM6IE5vbkVtcHR5QXJyYXk8QT4pID0+IE5vbkVtcHR5QXJyYXk8QT4pID0+IG1vZGlmeUxhc3QoKCkgPT4gYSlcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gZGVwcmVjYXRlZFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyB0c2xpbnQ6ZGlzYWJsZTogZGVwcmVjYXRpb25cblxuLyoqXG4gKiBUaGlzIGlzIGp1c3QgYHNvcnRgIGZvbGxvd2VkIGJ5IGBncm91cGAuXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBncm91cFNvcnQ8Qj4oXG4gIE86IE9yZDxCPlxuKToge1xuICA8QSBleHRlbmRzIEI+KGFzOiBOb25FbXB0eUFycmF5PEE+KTogTm9uRW1wdHlBcnJheTxOb25FbXB0eUFycmF5PEE+PlxuICA8QSBleHRlbmRzIEI+KGFzOiBBcnJheTxBPik6IEFycmF5PE5vbkVtcHR5QXJyYXk8QT4+XG59XG5leHBvcnQgZnVuY3Rpb24gZ3JvdXBTb3J0PEE+KE86IE9yZDxBPik6IChhczogQXJyYXk8QT4pID0+IEFycmF5PE5vbkVtcHR5QXJyYXk8QT4+IHtcbiAgY29uc3Qgc29ydE8gPSBzb3J0KE8pXG4gIGNvbnN0IGdyb3VwTyA9IGdyb3VwKE8pXG4gIHJldHVybiAoYXMpID0+IChpc05vbkVtcHR5KGFzKSA/IGdyb3VwTyhzb3J0TyhhcykpIDogW10pXG59XG5cbi8qKlxuICogVXNlIFtgZmlsdGVyYF0oLi9BcnJheS50cy5odG1sI2ZpbHRlcikgaW5zdGVhZC5cbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlcjxBLCBCIGV4dGVuZHMgQT4ocmVmaW5lbWVudDogUmVmaW5lbWVudDxBLCBCPik6IChhczogTm9uRW1wdHlBcnJheTxBPikgPT4gT3B0aW9uPE5vbkVtcHR5QXJyYXk8Qj4+XG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyPEE+KHByZWRpY2F0ZTogUHJlZGljYXRlPEE+KTogPEIgZXh0ZW5kcyBBPihiczogTm9uRW1wdHlBcnJheTxCPikgPT4gT3B0aW9uPE5vbkVtcHR5QXJyYXk8Qj4+XG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyPEE+KHByZWRpY2F0ZTogUHJlZGljYXRlPEE+KTogKGFzOiBOb25FbXB0eUFycmF5PEE+KSA9PiBPcHRpb248Tm9uRW1wdHlBcnJheTxBPj5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXI8QT4ocHJlZGljYXRlOiBQcmVkaWNhdGU8QT4pOiAoYXM6IE5vbkVtcHR5QXJyYXk8QT4pID0+IE9wdGlvbjxOb25FbXB0eUFycmF5PEE+PiB7XG4gIHJldHVybiBmaWx0ZXJXaXRoSW5kZXgoKF8sIGEpID0+IHByZWRpY2F0ZShhKSlcbn1cblxuLyoqXG4gKiBVc2UgW2BmaWx0ZXJXaXRoSW5kZXhgXSguL0FycmF5LnRzLmh0bWwjZmlsdGVyd2l0aGluZGV4KSBpbnN0ZWFkLlxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgY29uc3QgZmlsdGVyV2l0aEluZGV4ID0gPEE+KHByZWRpY2F0ZTogKGk6IG51bWJlciwgYTogQSkgPT4gYm9vbGVhbikgPT4gKFxuICBhczogTm9uRW1wdHlBcnJheTxBPlxuKTogT3B0aW9uPE5vbkVtcHR5QXJyYXk8QT4+ID0+IGZyb21BcnJheShhcy5maWx0ZXIoKGEsIGkpID0+IHByZWRpY2F0ZShpLCBhKSkpXG5cbi8qKlxuICogVXNlIFtgdW5wcmVwZW5kYF0oI3VucHJlcGVuZCkgaW5zdGVhZC5cbiAqXG4gKiBAY2F0ZWdvcnkgZGVzdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjkuMFxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IHVuY29uczogPEE+KGFzOiBOb25FbXB0eUFycmF5PEE+KSA9PiBbQSwgQXJyYXk8QT5dID0gdW5wcmVwZW5kXG5cbi8qKlxuICogVXNlIFtgdW5hcHBlbmRgXSgjdW5hcHBlbmQpIGluc3RlYWQuXG4gKlxuICogQGNhdGVnb3J5IGRlc3RydWN0b3JzXG4gKiBAc2luY2UgMi45LjBcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBjb25zdCB1bnNub2M6IDxBPihhczogTm9uRW1wdHlBcnJheTxBPikgPT4gW0FycmF5PEE+LCBBXSA9IHVuYXBwZW5kXG5cbi8qKlxuICogVXNlIFtgcHJlcGVuZGBdKC4vQXJyYXkudHMuaHRtbCNwcmVwZW5kKSBpbnN0ZWFkLlxuICpcbiAqIEBjYXRlZ29yeSBjb25zdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnM8QT4oaGVhZDogQSk6ICh0YWlsOiBBcnJheTxBPikgPT4gTm9uRW1wdHlBcnJheTxBPlxuLyoqIEBkZXByZWNhdGVkICovXG5leHBvcnQgZnVuY3Rpb24gY29uczxBPihoZWFkOiBBLCB0YWlsOiBBcnJheTxBPik6IE5vbkVtcHR5QXJyYXk8QT5cbmV4cG9ydCBmdW5jdGlvbiBjb25zPEE+KGhlYWQ6IEEsIHRhaWw/OiBBcnJheTxBPik6IE5vbkVtcHR5QXJyYXk8QT4gfCAoKHRhaWw6IEFycmF5PEE+KSA9PiBOb25FbXB0eUFycmF5PEE+KSB7XG4gIHJldHVybiB0YWlsID09PSB1bmRlZmluZWQgPyBwcmVwZW5kKGhlYWQpIDogcGlwZSh0YWlsLCBwcmVwZW5kKGhlYWQpKVxufVxuXG4vKipcbiAqIFVzZSBbYGFwcGVuZGBdKC4vQXJyYXkudHMuaHRtbCNhcHBlbmQpIGluc3RlYWQuXG4gKlxuICogQGNhdGVnb3J5IGNvbnN0cnVjdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgY29uc3Qgc25vYyA9IDxBPihpbml0OiBBcnJheTxBPiwgZW5kOiBBKTogTm9uRW1wdHlBcnJheTxBPiA9PiBwaXBlKGluaXQsIGFwcGVuZChlbmQpKVxuXG4vKipcbiAqIFVzZSBbYHByZXBlbmRBbGxgXSgjcHJlcGVuZGFsbCkgaW5zdGVhZC5cbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjkuMFxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IHByZXBlbmRUb0FsbCA9IHByZXBlbmRBbGxcblxuLyoqXG4gKiBVc2UgW2Bjb25jYXRBbGxgXSgjY29uY2F0YWxsKSBpbnN0ZWFkLlxuICpcbiAqIEBzaW5jZSAyLjUuMFxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IGZvbGQ6IDxBPihTOiBTZW1pZ3JvdXA8QT4pID0+IChmYTogTm9uRW1wdHlBcnJheTxBPikgPT4gQSA9IFJORUEuY29uY2F0QWxsXG5cbi8qKlxuICogVXNlIHNtYWxsLCBzcGVjaWZpYyBpbnN0YW5jZXMgaW5zdGVhZC5cbiAqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4wLjBcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBjb25zdCBub25FbXB0eUFycmF5OiBNb25hZDE8VVJJPiAmXG4gIENvbW9uYWQxPFVSST4gJlxuICBUcmF2ZXJzYWJsZVdpdGhJbmRleDE8VVJJLCBudW1iZXI+ICZcbiAgRnVuY3RvcldpdGhJbmRleDE8VVJJLCBudW1iZXI+ICZcbiAgRm9sZGFibGVXaXRoSW5kZXgxPFVSSSwgbnVtYmVyPiAmXG4gIEFsdDE8VVJJPiA9IHtcbiAgVVJJLFxuICBvZixcbiAgbWFwOiBfbWFwLFxuICBtYXBXaXRoSW5kZXg6IF9tYXBXaXRoSW5kZXgsXG4gIGFwOiBfYXAsXG4gIGNoYWluOiBfY2hhaW4sXG4gIGV4dGVuZDogX2V4dGVuZCxcbiAgZXh0cmFjdDogZXh0cmFjdCxcbiAgcmVkdWNlOiBfcmVkdWNlLFxuICBmb2xkTWFwOiBfZm9sZE1hcCxcbiAgcmVkdWNlUmlnaHQ6IF9yZWR1Y2VSaWdodCxcbiAgdHJhdmVyc2U6IF90cmF2ZXJzZSxcbiAgc2VxdWVuY2UsXG4gIHJlZHVjZVdpdGhJbmRleDogX3JlZHVjZVdpdGhJbmRleCxcbiAgZm9sZE1hcFdpdGhJbmRleDogX2ZvbGRNYXBXaXRoSW5kZXgsXG4gIHJlZHVjZVJpZ2h0V2l0aEluZGV4OiBfcmVkdWNlUmlnaHRXaXRoSW5kZXgsXG4gIHRyYXZlcnNlV2l0aEluZGV4OiBfdHJhdmVyc2VXaXRoSW5kZXgsXG4gIGFsdDogX2FsdFxufVxuIl19