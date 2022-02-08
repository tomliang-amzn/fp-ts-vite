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
exports.extract = exports.extend = exports.empty = exports.duplicate = void 0;
exports.filter = filter;
exports.getUnionSemigroup = exports.getShow = exports.getSemigroup = exports.getEq = exports.fromReadonlyArray = exports.fromArray = exports.foldMapWithIndex = exports.foldMap = exports.fold = exports.flatten = exports.flap = exports.filterWithIndex = void 0;
exports.group = group;
exports.groupBy = void 0;
exports.groupSort = groupSort;
exports.unsafeUpdateAt = exports.unsafeInsertAt = exports.unprepend = exports.uniq = exports.union = exports.uncons = exports.unappend = exports.traverseWithIndex = exports.traverse = exports.tail = exports.splitAt = exports.sortBy = exports.sort = exports.snoc = exports.sequence = exports.rotate = exports.reverse = exports.replicate = exports.reduceWithIndex = exports.reduceRightWithIndex = exports.reduceRight = exports.reduce = exports.readonlyNonEmptyArray = exports.range = exports.prependW = exports.prependToAll = exports.prependAll = exports.prepend = exports.of = exports.modifyLast = exports.modifyHead = exports.modifyAt = exports.min = exports.max = exports.matchRight = exports.matchLeft = exports.mapWithIndex = exports.map = exports.makeBy = exports.last = exports.isOutOfBound = exports.isNonEmpty = exports.intersperse = exports.insertAt = exports.init = exports.head = void 0;
exports.updateLast = exports.updateHead = exports.updateAt = exports.unzip = exports.unsnoc = exports.unsafeUpdateAt = exports.unsafeInsertAt = exports.unprepend = exports.uniq = exports.union = exports.uncons = exports.unappend = exports.traverseWithIndex = exports.traverse = exports.tail = exports.splitAt = exports.sortBy = exports.sort = exports.snoc = exports.sequence = exports.rotate = exports.reverse = exports.replicate = exports.reduceWithIndex = exports.reduceRightWithIndex = exports.reduceRight = exports.reduce = exports.readonlyNonEmptyArray = exports.range = exports.prependW = exports.prependToAll = exports.prependAll = exports.prepend = exports.of = exports.modifyLast = exports.modifyHead = exports.modifyAt = exports.min = exports.max = exports.matchRight = exports.matchLeft = exports.mapWithIndex = exports.map = exports.makeBy = exports.last = exports.isOutOfBound = exports.isNonEmpty = exports.intersperse = exports.insertAt = exports.init = exports.head = void 0;
exports.zip = zip;
exports.zipWith = void 0;

var _Apply = require("./Apply");

var _Chain = require("./Chain");

var _Eq = require("./Eq");

var _function = require("./function");

var _Functor = require("./Functor");

var _ = _interopRequireWildcard(require("./internal"));

var _Ord = require("./Ord");

var Se = _interopRequireWildcard(require("./Semigroup"));

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

var Semigroup = Se.Semigroup; // -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

/**
 * @category model
 * @since 2.5.0
 */

// -------------------------------------------------------------------------------------
// internal
// -------------------------------------------------------------------------------------

/**
 * @internal
 */
var empty = _.emptyReadonlyArray;
/**
 * @internal
 */

exports.empty = empty;
var isNonEmpty = _.isNonEmpty;
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
    var xs = _.fromReadonlyNonEmptyArray(as);

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
  if (as[i] === a) {
    return as;
  } else {
    var xs = _.fromReadonlyNonEmptyArray(as);

    xs[i] = a;
    return xs;
  }
};
/**
 * Remove duplicates from a `ReadonlyNonEmptyArray`, keeping the first occurrence of an element.
 *
 * @example
 * import { uniq } from 'fp-ts/ReadonlyNonEmptyArray'
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
      return as;
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
 * Sort the elements of a `ReadonlyNonEmptyArray` in increasing order, where elements are compared using first `ords[0]`, then `ords[1]`,
 * etc...
 *
 * @example
 * import * as RNEA from 'fp-ts/ReadonlyNonEmptyArray'
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
 * const sortByNameByAge = RNEA.sortBy([byName, byAge])
 *
 * const persons: RNEA.ReadonlyNonEmptyArray<Person> = [
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

  return _function.identity;
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
 * Rotate a `ReadonlyNonEmptyArray` by `n` steps.
 *
 * @example
 * import { rotate } from 'fp-ts/ReadonlyNonEmptyArray'
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
      return as;
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
 * Return a `ReadonlyNonEmptyArray` from a `ReadonlyArray` returning `none` if the input is empty.
 *
 * @category constructors
 * @since 2.5.0
 */


exports.rotate = rotate;

var fromReadonlyArray = function fromReadonlyArray(as) {
  return isNonEmpty(as) ? _.some(as) : _.none;
};
/**
 * Return a `ReadonlyNonEmptyArray` of length `n` with element `i` initialized with `f(i)`.
 *
 * **Note**. `n` is normalized to a natural number.
 *
 * @example
 * import { makeBy } from 'fp-ts/ReadonlyNonEmptyArray'
 * import { pipe } from 'fp-ts/function'
 *
 * const double = (n: number): number => n * 2
 * assert.deepStrictEqual(pipe(5, makeBy(double)), [0, 2, 4, 6, 8])
 *
 * @category constructors
 * @since 2.11.0
 */


exports.fromReadonlyArray = fromReadonlyArray;

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
 * Create a `ReadonlyNonEmptyArray` containing a value repeated the specified number of times.
 *
 * **Note**. `n` is normalized to a natural number.
 *
 * @example
 * import { replicate } from 'fp-ts/ReadonlyNonEmptyArray'
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
 * Create a `ReadonlyNonEmptyArray` containing a range of integers, including both endpoints.
 *
 * @example
 * import { range } from 'fp-ts/ReadonlyNonEmptyArray'
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
 * import { unprepend } from 'fp-ts/ReadonlyNonEmptyArray'
 *
 * assert.deepStrictEqual(unprepend([1, 2, 3, 4]), [1, [2, 3, 4]])
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
 * import { unappend } from 'fp-ts/ReadonlyNonEmptyArray'
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
// interop
// -------------------------------------------------------------------------------------

/**
 * @category interop
 * @since 2.5.0
 */


exports.unappend = unappend;

var fromArray = function fromArray(as) {
  return fromReadonlyArray(as.slice());
}; // -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------

/**
 * @category combinators
 * @since 2.11.0
 */


exports.fromArray = fromArray;

function concatW(second) {
  return function (first) {
    return first.concat(second);
  };
}
/**
 * @category combinators
 * @since 2.5.0
 */


function concat(x, y) {
  return y ? x.concat(y) : function (y) {
    return y.concat(x);
  };
}
/**
 * @category combinators
 * @since 2.5.0
 */


var reverse = function reverse(as) {
  return as.length === 1 ? as : [last(as)].concat(_toConsumableArray(as.slice(0, -1).reverse()));
};
/**
 * Group equal, consecutive elements of a `ReadonlyArray` into `ReadonlyNonEmptyArray`s.
 *
 * @example
 * import { group } from 'fp-ts/ReadonlyNonEmptyArray'
 * import * as N from 'fp-ts/number'
 *
 * assert.deepStrictEqual(group(N.Eq)([1, 2, 1, 1]), [
 *   [1],
 *   [2],
 *   [1, 1]
 * ])
 *
 * @category combinators
 * @since 2.5.0
 */


exports.reverse = reverse;

function group(E) {
  return function (as) {
    var len = as.length;

    if (len === 0) {
      return empty;
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
 * import { groupBy } from 'fp-ts/ReadonlyNonEmptyArray'
 *
 * assert.deepStrictEqual(groupBy((s: string) => String(s.length))(['a', 'b', 'ab']), {
 *   '1': ['a', 'b'],
 *   '2': ['ab']
 * })
 *
 * @category combinators
 * @since 2.5.0
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
 * @since 2.5.0
 */


exports.groupBy = groupBy;

var sort = function sort(O) {
  return function (as) {
    return as.length === 1 ? as : as.slice().sort(O.compare);
  };
};
/**
 * @category combinators
 * @since 2.5.0
 */


exports.sort = sort;

var updateAt = function updateAt(i, a) {
  return modifyAt(i, function () {
    return a;
  });
};
/**
 * @category combinators
 * @since 2.5.0
 */


exports.updateAt = updateAt;

var modifyAt = function modifyAt(i, f) {
  return function (as) {
    return isOutOfBound(i, as) ? _.none : _.some(unsafeUpdateAt(i, f(as[i]), as));
  };
};
/**
 * @category combinators
 * @since 2.5.1
 */


exports.modifyAt = modifyAt;

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
 * Prepend an element to every member of a `ReadonlyNonEmptyArray`.
 *
 * @example
 * import { prependAll } from 'fp-ts/ReadonlyNonEmptyArray'
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
 * Places an element in between members of a `ReadonlyNonEmptyArray`.
 *
 * @example
 * import { intersperse } from 'fp-ts/ReadonlyNonEmptyArray'
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
    return isNonEmpty(rest) ? (0, _function.pipe)(rest, prependAll(middle), prepend(head(as))) : as;
  };
};
/**
 * @category combinators
 * @since 2.10.0
 */


exports.intersperse = intersperse;

var chainWithIndex = function chainWithIndex(f) {
  return function (as) {
    var out = _.fromReadonlyNonEmptyArray(f(0, head(as)));

    for (var _i7 = 1; _i7 < as.length; _i7++) {
      out.push.apply(out, _toConsumableArray(f(_i7, as[_i7])));
    }

    return out;
  };
};
/**
 * A useful recursion pattern for processing a `ReadonlyNonEmptyArray` to produce a new `ReadonlyNonEmptyArray`, often used for "chopping" up the input
 * `ReadonlyNonEmptyArray`. Typically `chop` is called with some function that will consume an initial prefix of the `ReadonlyNonEmptyArray` and produce a
 * value and the tail of the `ReadonlyNonEmptyArray`.
 *
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
 * Splits a `ReadonlyNonEmptyArray` into two pieces, the first piece has max `n` elements.
 *
 * @category combinators
 * @since 2.10.0
 */


exports.chop = chop;

var splitAt = function splitAt(n) {
  return function (as) {
    var m = Math.max(1, n);
    return m >= as.length ? [as, empty] : [(0, _function.pipe)(as.slice(1, m), prepend(head(as))), as.slice(m)];
  };
};
/**
 * Splits a `ReadonlyNonEmptyArray` into length-`n` pieces. The last piece will be shorter if `n` does not evenly divide the length of
 * the `ReadonlyNonEmptyArray`.
 *
 * @category combinators
 * @since 2.10.0
 */


exports.splitAt = splitAt;

var chunksOf = function chunksOf(n) {
  return chop(splitAt(n));
}; // -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------


exports.chunksOf = chunksOf;

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
 * @category Pointed
 * @since 2.5.0
 */


var of = _.singleton;
/**
 * Less strict version of [`alt`](#alt).
 *
 * @category Alt
 * @since 2.9.0
 */

exports.of = of;

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
 * @category Apply
 * @since 2.5.0
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
 * @since 2.5.0
 */


exports.ap = ap;

var chain = function chain(f) {
  return chainWithIndex(function (_, a) {
    return f(a);
  });
};
/**
 * @category Extend
 * @since 2.5.0
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
 * @since 2.5.0
 */

exports.flatten = flatten;

var map = function map(f) {
  return mapWithIndex(function (_, a) {
    return f(a);
  });
};
/**
 * @category FunctorWithIndex
 * @since 2.5.0
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
 * @since 2.5.0
 */


exports.mapWithIndex = mapWithIndex;

var reduce = function reduce(b, f) {
  return reduceWithIndex(b, function (_, b, a) {
    return f(b, a);
  });
};
/**
 * **Note**. The constraint is relaxed: a `Semigroup` instead of a `Monoid`.
 *
 * @category Foldable
 * @since 2.5.0
 */


exports.reduce = reduce;

var foldMap = function foldMap(S) {
  return function (f) {
    return function (as) {
      return as.slice(1).reduce(function (s, a) {
        return S.concat(s, f(a));
      }, f(as[0]));
    };
  };
};
/**
 * @category Foldable
 * @since 2.5.0
 */


exports.foldMap = foldMap;

var reduceRight = function reduceRight(b, f) {
  return reduceRightWithIndex(b, function (_, b, a) {
    return f(b, a);
  });
};
/**
 * @category FoldableWithIndex
 * @since 2.5.0
 */


exports.reduceRight = reduceRight;

var reduceWithIndex = function reduceWithIndex(b, f) {
  return function (as) {
    return as.reduce(function (b, a, i) {
      return f(i, b, a);
    }, b);
  };
};
/**
 * **Note**. The constraint is relaxed: a `Semigroup` instead of a `Monoid`.
 *
 * @category FoldableWithIndex
 * @since 2.5.0
 */


exports.reduceWithIndex = reduceWithIndex;

var foldMapWithIndex = function foldMapWithIndex(S) {
  return function (f) {
    return function (as) {
      return as.slice(1).reduce(function (s, a, i) {
        return S.concat(s, f(i + 1, a));
      }, f(0, as[0]));
    };
  };
};
/**
 * @category FoldableWithIndex
 * @since 2.5.0
 */


exports.foldMapWithIndex = foldMapWithIndex;

var reduceRightWithIndex = function reduceRightWithIndex(b, f) {
  return function (as) {
    return as.reduceRight(function (b, a, i) {
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
  return traverseWithIndex(F)(_function.SK);
};
/**
 * @category TraversableWithIndex
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
 * @category Comonad
 * @since 2.6.3
 */


exports.traverseWithIndex = traverseWithIndex;
var extract = _.head; // -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------

/**
 * @category instances
 * @since 2.5.0
 */

exports.extract = extract;
var URI = 'ReadonlyNonEmptyArray';
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
 * Builds a `Semigroup` instance for `ReadonlyNonEmptyArray`
 *
 * @category instances
 * @since 2.5.0
 */


exports.getShow = getShow;

var getSemigroup = function getSemigroup() {
  return {
    concat: concat
  };
};
/**
 * @example
 * import { getEq } from 'fp-ts/ReadonlyNonEmptyArray'
 * import * as N from 'fp-ts/number'
 *
 * const E = getEq(N.Eq)
 * assert.strictEqual(E.equals([1, 2], [1, 2]), true)
 * assert.strictEqual(E.equals([1, 2], [1, 3]), false)
 *
 * @category instances
 * @since 2.5.0
 */


exports.getSemigroup = getSemigroup;

var getEq = function getEq(E) {
  return (0, _Eq.fromEquals)(function (xs, ys) {
    return xs.length === ys.length && xs.every(function (x, i) {
      return E.equals(x, ys[i]);
    });
  });
};
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
 * @since 2.5.0
 */

exports.apS = apS;
var head = extract;
/**
 * @since 2.5.0
 */

exports.head = head;
var tail = _.tail;
/**
 * @since 2.5.0
 */

exports.tail = tail;

var last = function last(as) {
  return as[as.length - 1];
};
/**
 * Get all but the last element of a non empty array, creating a new array.
 *
 * @example
 * import { init } from 'fp-ts/ReadonlyNonEmptyArray'
 *
 * assert.deepStrictEqual(init([1, 2, 3]), [1, 2])
 * assert.deepStrictEqual(init([1]), [])
 *
 * @since 2.5.0
 */


exports.last = last;

var init = function init(as) {
  return as.slice(0, -1);
};
/**
 * @since 2.5.0
 */


exports.init = init;

var min = function min(O) {
  var S = Se.min(O);
  return function (as) {
    return as.reduce(S.concat);
  };
};
/**
 * @since 2.5.0
 */


exports.min = min;

var max = function max(O) {
  var S = Se.max(O);
  return function (as) {
    return as.reduce(S.concat);
  };
};
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
 * Break a `ReadonlyArray` into its first element and remaining elements.
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
 * Break a `ReadonlyArray` into its initial elements and the last element.
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
 * Apply a function to the head, creating a new `ReadonlyNonEmptyArray`.
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
 * Change the head, creating a new `ReadonlyNonEmptyArray`.
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
 * Apply a function to the last element, creating a new `ReadonlyNonEmptyArray`.
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
 * Change the last element, creating a new `ReadonlyNonEmptyArray`.
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
 * @since 2.5.0
 * @deprecated
 */


exports.updateLast = updateLast;

function groupSort(O) {
  var sortO = sort(O);
  var groupO = group(O);
  return function (as) {
    return isNonEmpty(as) ? groupO(sortO(as)) : empty;
  };
}
/**
 * Use [`filter`](./ReadonlyArray.ts.html#filter) instead.
 *
 * @category combinators
 * @since 2.5.0
 * @deprecated
 */


function filter(predicate) {
  return filterWithIndex(function (_, a) {
    return predicate(a);
  });
}
/**
 * Use [`filterWithIndex`](./ReadonlyArray.ts.html#filterwithindex) instead.
 *
 * @category combinators
 * @since 2.5.0
 * @deprecated
 */


var filterWithIndex = function filterWithIndex(predicate) {
  return function (as) {
    return fromReadonlyArray(as.filter(function (a, i) {
      return predicate(i, a);
    }));
  };
};
/**
 * Use [`unprepend`](#unprepend) instead.
 *
 * @category destructors
 * @since 2.10.0
 * @deprecated
 */


exports.filterWithIndex = filterWithIndex;
var uncons = unprepend;
/**
 * Use [`unappend`](#unappend) instead.
 *
 * @category destructors
 * @since 2.10.0
 * @deprecated
 */

exports.uncons = uncons;
var unsnoc = unappend;
/**
 * Use [`prepend`](./ReadonlyArray.ts.html#prepend) instead.
 *
 * @category constructors
 * @since 2.5.0
 * @deprecated
 */

exports.unsnoc = unsnoc;

function cons(head, tail) {
  return tail === undefined ? prepend(head) : (0, _function.pipe)(tail, prepend(head));
}
/**
 * Use [`append`](./ReadonlyArray.ts.html#append) instead.
 *
 * @category constructors
 * @since 2.5.0
 * @deprecated
 */


var snoc = function snoc(init, end) {
  return (0, _function.pipe)(init, concat([end]));
};
/**
 * Use [`insertAt`](./ReadonlyArray.ts.html#insertat) instead.
 *
 * @category combinators
 * @since 2.5.0
 * @deprecated
 */


exports.snoc = snoc;

var insertAt = function insertAt(i, a) {
  return function (as) {
    return i < 0 || i > as.length ? _.none : _.some(unsafeInsertAt(i, a, as));
  };
};
/**
 * Use [`prependAll`](#prependall) instead.
 *
 * @category combinators
 * @since 2.9.0
 * @deprecated
 */


exports.insertAt = insertAt;
var prependToAll = prependAll;
/**
 * Use [`concatAll`](#concatall) instead.
 *
 * @since 2.5.0
 * @deprecated
 */

exports.prependToAll = prependToAll;
var fold = concatAll;
/**
 * Use small, specific instances instead.
 *
 * @category instances
 * @since 2.5.0
 * @deprecated
 */

exports.fold = fold;
var readonlyNonEmptyArray = {
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
exports.readonlyNonEmptyArray = readonlyNonEmptyArray;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mcC10cy9SZWFkb25seU5vbkVtcHR5QXJyYXkudHMiXSwibmFtZXMiOlsiU2VtaWdyb3VwIiwiU2UiLCJlbXB0eSIsIl8iLCJlbXB0eVJlYWRvbmx5QXJyYXkiLCJpc05vbkVtcHR5IiwiaXNPdXRPZkJvdW5kIiwiaSIsImFzIiwibGVuZ3RoIiwicHJlcGVuZFciLCJoZWFkIiwidGFpbCIsInByZXBlbmQiLCJhcHBlbmRXIiwiZW5kIiwiaW5pdCIsImFwcGVuZCIsInVuc2FmZUluc2VydEF0IiwiYSIsInhzIiwiZnJvbVJlYWRvbmx5Tm9uRW1wdHlBcnJheSIsInNwbGljZSIsInVuc2FmZVVwZGF0ZUF0IiwidW5pcSIsIkUiLCJvdXQiLCJyZXN0IiwiZXZlcnkiLCJvIiwiZXF1YWxzIiwicHVzaCIsInNvcnRCeSIsIm9yZHMiLCJNIiwic29ydCIsInJlZHVjZSIsImNvbmNhdCIsImlkZW50aXR5IiwidW5pb24iLCJ1bmlxRSIsInNlY29uZCIsImZpcnN0Iiwicm90YXRlIiwibiIsImxlbiIsIm0iLCJNYXRoIiwicm91bmQiLCJhYnMiLCJzcGxpdEF0IiwiZiIsInMiLCJmcm9tUmVhZG9ubHlBcnJheSIsInNvbWUiLCJub25lIiwibWFrZUJ5IiwiaiIsIm1heCIsImZsb29yIiwicmVwbGljYXRlIiwicmFuZ2UiLCJzdGFydCIsInVucHJlcGVuZCIsInVuYXBwZW5kIiwibGFzdCIsImZyb21BcnJheSIsInNsaWNlIiwiY29uY2F0VyIsIngiLCJ5IiwicmV2ZXJzZSIsImdyb3VwIiwibmVhIiwiZ3JvdXBCeSIsImsiLCJoYXNPd25Qcm9wZXJ0eSIsIk8iLCJjb21wYXJlIiwidXBkYXRlQXQiLCJtb2RpZnlBdCIsInppcFdpdGgiLCJicyIsImNzIiwibWluIiwiemlwIiwidW5kZWZpbmVkIiwiYiIsInVuemlwIiwiZmEiLCJmYiIsInByZXBlbmRBbGwiLCJtaWRkbGUiLCJpbnRlcnNwZXJzZSIsImNoYWluV2l0aEluZGV4IiwiY2hvcCIsIm5leHQiLCJjaHVua3NPZiIsIl9tYXAiLCJtYXAiLCJfbWFwV2l0aEluZGV4IiwibWFwV2l0aEluZGV4IiwiX2FwIiwiZmFiIiwiYXAiLCJfY2hhaW4iLCJtYSIsImNoYWluIiwiX2V4dGVuZCIsIndhIiwiZXh0ZW5kIiwiX3JlZHVjZSIsIl9mb2xkTWFwIiwiZm9sZE1hcE0iLCJmb2xkTWFwIiwiX3JlZHVjZVJpZ2h0IiwicmVkdWNlUmlnaHQiLCJfdHJhdmVyc2UiLCJGIiwidHJhdmVyc2VGIiwidHJhdmVyc2UiLCJ0YSIsIl9hbHQiLCJ0aGF0IiwiYWx0IiwiX3JlZHVjZVdpdGhJbmRleCIsInJlZHVjZVdpdGhJbmRleCIsIl9mb2xkTWFwV2l0aEluZGV4IiwiZm9sZE1hcFdpdGhJbmRleE0iLCJmb2xkTWFwV2l0aEluZGV4IiwiX3JlZHVjZVJpZ2h0V2l0aEluZGV4IiwicmVkdWNlUmlnaHRXaXRoSW5kZXgiLCJfdHJhdmVyc2VXaXRoSW5kZXgiLCJ0cmF2ZXJzZVdpdGhJbmRleEYiLCJ0cmF2ZXJzZVdpdGhJbmRleCIsIm9mIiwic2luZ2xldG9uIiwiYWx0VyIsImR1cGxpY2F0ZSIsImZsYXR0ZW4iLCJTIiwic2VxdWVuY2UiLCJTSyIsImV4dHJhY3QiLCJVUkkiLCJnZXRTaG93Iiwic2hvdyIsImpvaW4iLCJnZXRTZW1pZ3JvdXAiLCJnZXRFcSIsInlzIiwiZ2V0VW5pb25TZW1pZ3JvdXAiLCJ1bmlvbkUiLCJGdW5jdG9yIiwiZmxhcCIsIlBvaW50ZWQiLCJGdW5jdG9yV2l0aEluZGV4IiwiQXBwbHkiLCJhcEZpcnN0IiwiYXBTZWNvbmQiLCJBcHBsaWNhdGl2ZSIsIkNoYWluIiwiY2hhaW5GaXJzdCIsIk1vbmFkIiwiRm9sZGFibGUiLCJGb2xkYWJsZVdpdGhJbmRleCIsIlRyYXZlcnNhYmxlIiwiVHJhdmVyc2FibGVXaXRoSW5kZXgiLCJBbHQiLCJDb21vbmFkIiwiRG8iLCJlbXB0eVJlY29yZCIsImJpbmRUbyIsImJpbmQiLCJhcFMiLCJjb25jYXRBbGwiLCJtYXRjaExlZnQiLCJtYXRjaFJpZ2h0IiwibW9kaWZ5SGVhZCIsInVwZGF0ZUhlYWQiLCJtb2RpZnlMYXN0IiwidXBkYXRlTGFzdCIsImdyb3VwU29ydCIsInNvcnRPIiwiZ3JvdXBPIiwiZmlsdGVyIiwicHJlZGljYXRlIiwiZmlsdGVyV2l0aEluZGV4IiwidW5jb25zIiwidW5zbm9jIiwiY29ucyIsInNub2MiLCJpbnNlcnRBdCIsInByZXBlbmRUb0FsbCIsImZvbGQiLCJyZWFkb25seU5vbkVtcHR5QXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBOztBQUNBOztBQUdBOztBQUlBOztBQUNBOztBQUdBOztBQUlBOztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBS09BLFMsR0FBWUMsRSxDQUFHRCxTLEVBRXRCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFLQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ08sSUFBTUUsS0FBMkIsR0FBR0MsQ0FBQyxDQUFDQyxrQkFBdEM7QUFFUDtBQUNBO0FBQ0E7OztBQUNPLElBQU1DLFVBQXVFLEdBQUdGLENBQUMsQ0FBQ0UsVUFBbEY7QUFFUDtBQUNBO0FBQ0E7Ozs7QUFDTyxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFJQyxDQUFKLEVBQWVDLEVBQWY7QUFBQSxTQUFpREQsQ0FBQyxHQUFHLENBQUosSUFBU0EsQ0FBQyxJQUFJQyxFQUFFLENBQUNDLE1BQWxFO0FBQUEsQ0FBckI7QUFFUDtBQUNBO0FBQ0E7Ozs7O0FBQ08sSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBSUMsSUFBSjtBQUFBLFNBQWdCLFVBQUlDLElBQUo7QUFBQSxZQUE4REQsSUFBOUQsNEJBQXVFQyxJQUF2RTtBQUFBLEdBQWhCO0FBQUEsQ0FBakI7QUFFUDtBQUNBO0FBQ0E7Ozs7QUFDTyxJQUFNQyxPQUE2RSxHQUFHSCxRQUF0RjtBQUVQO0FBQ0E7QUFDQTs7OztBQUNPLElBQU1JLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUlDLEdBQUo7QUFBQSxTQUFlLFVBQUlDLElBQUo7QUFBQSx3Q0FBaUVBLElBQWpFLElBQXVFRCxHQUF2RTtBQUFBLEdBQWY7QUFBQSxDQUFoQjtBQUVQO0FBQ0E7QUFDQTs7OztBQUNPLElBQU1FLE1BQTJFLEdBQUdILE9BQXBGO0FBRVA7QUFDQTtBQUNBOzs7O0FBQ08sSUFBTUksY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFJWCxDQUFKLEVBQWVZLENBQWYsRUFBcUJYLEVBQXJCLEVBQXdFO0FBQ3BHLE1BQUlILFVBQVUsQ0FBQ0csRUFBRCxDQUFkLEVBQW9CO0FBQ2xCLFFBQU1ZLEVBQUUsR0FBR2pCLENBQUMsQ0FBQ2tCLHlCQUFGLENBQTRCYixFQUE1QixDQUFYOztBQUNBWSxJQUFBQSxFQUFFLENBQUNFLE1BQUgsQ0FBVWYsQ0FBVixFQUFhLENBQWIsRUFBZ0JZLENBQWhCO0FBQ0EsV0FBT0MsRUFBUDtBQUNEOztBQUNELFNBQU8sQ0FBQ0QsQ0FBRCxDQUFQO0FBQ0QsQ0FQTTtBQVNQO0FBQ0E7QUFDQTs7Ozs7QUFDTyxJQUFNSSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUloQixDQUFKLEVBQWVZLENBQWYsRUFBcUJYLEVBQXJCLEVBQWdGO0FBQzVHLE1BQUlBLEVBQUUsQ0FBQ0QsQ0FBRCxDQUFGLEtBQVVZLENBQWQsRUFBaUI7QUFDZixXQUFPWCxFQUFQO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsUUFBTVksRUFBRSxHQUFHakIsQ0FBQyxDQUFDa0IseUJBQUYsQ0FBNEJiLEVBQTVCLENBQVg7O0FBQ0FZLElBQUFBLEVBQUUsQ0FBQ2IsQ0FBRCxDQUFGLEdBQVFZLENBQVI7QUFDQSxXQUFPQyxFQUFQO0FBQ0Q7QUFDRixDQVJNO0FBVVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNPLElBQU1JLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUlDLENBQUo7QUFBQSxTQUFpQixVQUFDakIsRUFBRCxFQUE0RDtBQUMvRixRQUFJQSxFQUFFLENBQUNDLE1BQUgsS0FBYyxDQUFsQixFQUFxQjtBQUNuQixhQUFPRCxFQUFQO0FBQ0Q7O0FBQ0QsUUFBTWtCLEdBQXFCLEdBQUcsQ0FBQ2YsSUFBSSxDQUFDSCxFQUFELENBQUwsQ0FBOUI7QUFDQSxRQUFNbUIsSUFBSSxHQUFHZixJQUFJLENBQUNKLEVBQUQsQ0FBakI7O0FBTCtGLCtDQU0vRW1CLElBTitFO0FBQUE7O0FBQUE7QUFBQTtBQUFBLFlBTXBGUixDQU5vRjs7QUFPN0YsWUFBSU8sR0FBRyxDQUFDRSxLQUFKLENBQVUsVUFBQ0MsQ0FBRDtBQUFBLGlCQUFPLENBQUNKLENBQUMsQ0FBQ0ssTUFBRixDQUFTRCxDQUFULEVBQVlWLENBQVosQ0FBUjtBQUFBLFNBQVYsQ0FBSixFQUF1QztBQUNyQ08sVUFBQUEsR0FBRyxDQUFDSyxJQUFKLENBQVNaLENBQVQ7QUFDRDtBQVQ0Rjs7QUFNL0YsMERBQXNCO0FBQUE7QUFJckI7QUFWOEY7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFXL0YsV0FBT08sR0FBUDtBQUNELEdBWm1CO0FBQUEsQ0FBYjtBQWNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDTyxJQUFNTSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUNwQkMsSUFEb0IsRUFFMEQ7QUFDOUUsTUFBSTVCLFVBQVUsQ0FBQzRCLElBQUQsQ0FBZCxFQUFzQjtBQUNwQixRQUFNQyxDQUFDLEdBQUcscUJBQVY7QUFDQSxXQUFPQyxJQUFJLENBQUNGLElBQUksQ0FBQ0csTUFBTCxDQUFZRixDQUFDLENBQUNHLE1BQWQsRUFBc0JILENBQUMsQ0FBQ2hDLEtBQXhCLENBQUQsQ0FBWDtBQUNEOztBQUNELFNBQU9vQyxrQkFBUDtBQUNELENBUk07QUFVUDtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDTyxJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUNuQmQsQ0FEbUIsRUFFdUY7QUFDMUcsTUFBTWUsS0FBSyxHQUFHaEIsSUFBSSxDQUFDQyxDQUFELENBQWxCO0FBQ0EsU0FBTyxVQUFDZ0IsTUFBRDtBQUFBLFdBQVksVUFBQ0MsS0FBRDtBQUFBLGFBQVdGLEtBQUssQ0FBQyxvQkFBS0UsS0FBTCxFQUFZTCxNQUFNLENBQUNJLE1BQUQsQ0FBbEIsQ0FBRCxDQUFoQjtBQUFBLEtBQVo7QUFBQSxHQUFQO0FBQ0QsQ0FMTTtBQU9QO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDTyxJQUFNRSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxDQUFEO0FBQUEsU0FBZSxVQUFJcEMsRUFBSixFQUErRDtBQUNsRyxRQUFNcUMsR0FBRyxHQUFHckMsRUFBRSxDQUFDQyxNQUFmO0FBQ0EsUUFBTXFDLENBQUMsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdKLENBQVgsSUFBZ0JDLEdBQTFCOztBQUNBLFFBQUl2QyxZQUFZLENBQUN5QyxJQUFJLENBQUNFLEdBQUwsQ0FBU0gsQ0FBVCxDQUFELEVBQWN0QyxFQUFkLENBQVosSUFBaUNzQyxDQUFDLEtBQUssQ0FBM0MsRUFBOEM7QUFDNUMsYUFBT3RDLEVBQVA7QUFDRDs7QUFDRCxRQUFJc0MsQ0FBQyxHQUFHLENBQVIsRUFBVztBQUNULHFCQUFlSSxPQUFPLENBQUMsQ0FBQ0osQ0FBRixDQUFQLENBQVl0QyxFQUFaLENBQWY7QUFBQTtBQUFBLFVBQU8yQyxFQUFQO0FBQUEsVUFBVUMsQ0FBVjs7QUFDQSxhQUFPLG9CQUFLQSxDQUFMLEVBQVFmLE1BQU0sQ0FBQ2MsRUFBRCxDQUFkLENBQVA7QUFDRCxLQUhELE1BR087QUFDTCxhQUFPUixNQUFNLENBQUNHLENBQUMsR0FBR0QsR0FBTCxDQUFOLENBQWdCckMsRUFBaEIsQ0FBUDtBQUNEO0FBQ0YsR0FacUI7QUFBQSxDQUFmLEMsQ0FjUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNPLElBQU02QyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUk3QyxFQUFKO0FBQUEsU0FDL0JILFVBQVUsQ0FBQ0csRUFBRCxDQUFWLEdBQWlCTCxDQUFDLENBQUNtRCxJQUFGLENBQU85QyxFQUFQLENBQWpCLEdBQThCTCxDQUFDLENBQUNvRCxJQUREO0FBQUEsQ0FBMUI7QUFHUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ08sSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBSUwsQ0FBSjtBQUFBLFNBQTRCLFVBQUNQLENBQUQsRUFBeUM7QUFDekYsUUFBTWEsQ0FBQyxHQUFHVixJQUFJLENBQUNXLEdBQUwsQ0FBUyxDQUFULEVBQVlYLElBQUksQ0FBQ1ksS0FBTCxDQUFXZixDQUFYLENBQVosQ0FBVjtBQUNBLFFBQU1sQixHQUFxQixHQUFHLENBQUN5QixDQUFDLENBQUMsQ0FBRCxDQUFGLENBQTlCOztBQUNBLFNBQUssSUFBSTVDLEdBQUMsR0FBRyxDQUFiLEVBQWdCQSxHQUFDLEdBQUdrRCxDQUFwQixFQUF1QmxELEdBQUMsRUFBeEIsRUFBNEI7QUFDMUJtQixNQUFBQSxHQUFHLENBQUNLLElBQUosQ0FBU29CLENBQUMsQ0FBQzVDLEdBQUQsQ0FBVjtBQUNEOztBQUNELFdBQU9tQixHQUFQO0FBQ0QsR0FQcUI7QUFBQSxDQUFmO0FBU1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDTyxJQUFNa0MsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBSXpDLENBQUo7QUFBQSxTQUF3RHFDLE1BQU0sQ0FBQztBQUFBLFdBQU1yQyxDQUFOO0FBQUEsR0FBRCxDQUE5RDtBQUFBLENBQWxCO0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDTyxJQUFNMEMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRCxFQUFnQi9DLEdBQWhCO0FBQUEsU0FDbkIrQyxLQUFLLElBQUkvQyxHQUFULEdBQWV5QyxNQUFNLENBQUMsVUFBQ2pELENBQUQ7QUFBQSxXQUFPdUQsS0FBSyxHQUFHdkQsQ0FBZjtBQUFBLEdBQUQsQ0FBTixDQUF5QlEsR0FBRyxHQUFHK0MsS0FBTixHQUFjLENBQXZDLENBQWYsR0FBMkQsQ0FBQ0EsS0FBRCxDQUR4QztBQUFBLENBQWQsQyxDQUdQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNPLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUl2RCxFQUFKO0FBQUEsU0FBcUUsQ0FBQ0csSUFBSSxDQUFDSCxFQUFELENBQUwsRUFBV0ksSUFBSSxDQUFDSixFQUFELENBQWYsQ0FBckU7QUFBQSxDQUFsQjtBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ08sSUFBTXdELFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUl4RCxFQUFKO0FBQUEsU0FBcUUsQ0FBQ1EsSUFBSSxDQUFDUixFQUFELENBQUwsRUFBV3lELElBQUksQ0FBQ3pELEVBQUQsQ0FBZixDQUFyRTtBQUFBLENBQWpCLEMsQ0FFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ08sSUFBTTBELFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUkxRCxFQUFKO0FBQUEsU0FBdUQ2QyxpQkFBaUIsQ0FBQzdDLEVBQUUsQ0FBQzJELEtBQUgsRUFBRCxDQUF4RTtBQUFBLENBQWxCLEMsQ0FFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBT08sU0FBU0MsT0FBVCxDQUFvQjNCLE1BQXBCLEVBQTRHO0FBQ2pILFNBQU8sVUFBSUMsS0FBSjtBQUFBLFdBQTRDQSxLQUFLLENBQUNMLE1BQU4sQ0FBYUksTUFBYixDQUE1QztBQUFBLEdBQVA7QUFDRDtBQUVEO0FBQ0E7QUFDQTtBQUNBOzs7QUFPTyxTQUFTSixNQUFULENBQ0xnQyxDQURLLEVBRUxDLENBRkssRUFHbUU7QUFDeEUsU0FBT0EsQ0FBQyxHQUFHRCxDQUFDLENBQUNoQyxNQUFGLENBQVNpQyxDQUFULENBQUgsR0FBaUIsVUFBQ0EsQ0FBRDtBQUFBLFdBQU9BLENBQUMsQ0FBQ2pDLE1BQUYsQ0FBU2dDLENBQVQsQ0FBUDtBQUFBLEdBQXpCO0FBQ0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTUUsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBSS9ELEVBQUo7QUFBQSxTQUNyQkEsRUFBRSxDQUFDQyxNQUFILEtBQWMsQ0FBZCxHQUFrQkQsRUFBbEIsSUFBd0J5RCxJQUFJLENBQUN6RCxFQUFELENBQTVCLDRCQUFxQ0EsRUFBRSxDQUFDMkQsS0FBSCxDQUFTLENBQVQsRUFBWSxDQUFDLENBQWIsRUFBZ0JJLE9BQWhCLEVBQXJDLEVBRHFCO0FBQUEsQ0FBaEI7QUFHUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFPTyxTQUFTQyxLQUFULENBQWtCL0MsQ0FBbEIsRUFBK0Y7QUFDcEcsU0FBTyxVQUFDakIsRUFBRCxFQUFRO0FBQ2IsUUFBTXFDLEdBQUcsR0FBR3JDLEVBQUUsQ0FBQ0MsTUFBZjs7QUFDQSxRQUFJb0MsR0FBRyxLQUFLLENBQVosRUFBZTtBQUNiLGFBQU8zQyxLQUFQO0FBQ0Q7O0FBQ0QsUUFBTXdCLEdBQW9DLEdBQUcsRUFBN0M7QUFDQSxRQUFJZixJQUFPLEdBQUdILEVBQUUsQ0FBQyxDQUFELENBQWhCO0FBQ0EsUUFBSWlFLEdBQXFCLEdBQUcsQ0FBQzlELElBQUQsQ0FBNUI7O0FBQ0EsU0FBSyxJQUFJSixHQUFDLEdBQUcsQ0FBYixFQUFnQkEsR0FBQyxHQUFHc0MsR0FBcEIsRUFBeUJ0QyxHQUFDLEVBQTFCLEVBQThCO0FBQzVCLFVBQU1ZLEVBQUMsR0FBR1gsRUFBRSxDQUFDRCxHQUFELENBQVo7O0FBQ0EsVUFBSWtCLENBQUMsQ0FBQ0ssTUFBRixDQUFTWCxFQUFULEVBQVlSLElBQVosQ0FBSixFQUF1QjtBQUNyQjhELFFBQUFBLEdBQUcsQ0FBQzFDLElBQUosQ0FBU1osRUFBVDtBQUNELE9BRkQsTUFFTztBQUNMTyxRQUFBQSxHQUFHLENBQUNLLElBQUosQ0FBUzBDLEdBQVQ7QUFDQTlELFFBQUFBLElBQUksR0FBR1EsRUFBUDtBQUNBc0QsUUFBQUEsR0FBRyxHQUFHLENBQUM5RCxJQUFELENBQU47QUFDRDtBQUNGOztBQUNEZSxJQUFBQSxHQUFHLENBQUNLLElBQUosQ0FBUzBDLEdBQVQ7QUFDQSxXQUFPL0MsR0FBUDtBQUNELEdBcEJEO0FBcUJEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxJQUFNZ0QsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBSXZCLENBQUo7QUFBQSxTQUE0QixVQUNqRDNDLEVBRGlELEVBRUk7QUFDckQsUUFBTWtCLEdBQXFDLEdBQUcsRUFBOUM7O0FBRHFELGdEQUVyQ2xCLEVBRnFDO0FBQUE7O0FBQUE7QUFFckQsNkRBQW9CO0FBQUEsWUFBVFcsR0FBUztBQUNsQixZQUFNd0QsQ0FBQyxHQUFHeEIsQ0FBQyxDQUFDaEMsR0FBRCxDQUFYOztBQUNBLFlBQUlPLEdBQUcsQ0FBQ2tELGNBQUosQ0FBbUJELENBQW5CLENBQUosRUFBMkI7QUFDekJqRCxVQUFBQSxHQUFHLENBQUNpRCxDQUFELENBQUgsQ0FBTzVDLElBQVAsQ0FBWVosR0FBWjtBQUNELFNBRkQsTUFFTztBQUNMTyxVQUFBQSxHQUFHLENBQUNpRCxDQUFELENBQUgsR0FBUyxDQUFDeEQsR0FBRCxDQUFUO0FBQ0Q7QUFDRjtBQVRvRDtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVVyRCxXQUFPTyxHQUFQO0FBQ0QsR0Fic0I7QUFBQSxDQUFoQjtBQWVQO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNPLElBQU1TLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUkwQyxDQUFKO0FBQUEsU0FBa0IsVUFBY3JFLEVBQWQ7QUFBQSxXQUNwQ0EsRUFBRSxDQUFDQyxNQUFILEtBQWMsQ0FBZCxHQUFrQkQsRUFBbEIsR0FBd0JBLEVBQUUsQ0FBQzJELEtBQUgsR0FBV2hDLElBQVgsQ0FBZ0IwQyxDQUFDLENBQUNDLE9BQWxCLENBRFk7QUFBQSxHQUFsQjtBQUFBLENBQWI7QUFHUDtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDTyxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFJeEUsQ0FBSixFQUFlWSxDQUFmO0FBQUEsU0FDdEI2RCxRQUFRLENBQUN6RSxDQUFELEVBQUk7QUFBQSxXQUFNWSxDQUFOO0FBQUEsR0FBSixDQURjO0FBQUEsQ0FBakI7QUFHUDtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDTyxJQUFNNkQsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBSXpFLENBQUosRUFBZTRDLENBQWY7QUFBQSxTQUFrQyxVQUN4RDNDLEVBRHdEO0FBQUEsV0FFbEJGLFlBQVksQ0FBQ0MsQ0FBRCxFQUFJQyxFQUFKLENBQVosR0FBc0JMLENBQUMsQ0FBQ29ELElBQXhCLEdBQStCcEQsQ0FBQyxDQUFDbUQsSUFBRixDQUFPL0IsY0FBYyxDQUFDaEIsQ0FBRCxFQUFJNEMsQ0FBQyxDQUFDM0MsRUFBRSxDQUFDRCxDQUFELENBQUgsQ0FBTCxFQUFjQyxFQUFkLENBQXJCLENBRmI7QUFBQSxHQUFsQztBQUFBLENBQWpCO0FBSVA7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ08sSUFBTXlFLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQ3JCekUsRUFEcUIsRUFFckIwRSxFQUZxQixFQUdyQi9CLENBSHFCLEVBSVE7QUFDN0IsTUFBTWdDLEVBQW9CLEdBQUcsQ0FBQ2hDLENBQUMsQ0FBQzNDLEVBQUUsQ0FBQyxDQUFELENBQUgsRUFBUTBFLEVBQUUsQ0FBQyxDQUFELENBQVYsQ0FBRixDQUE3QjtBQUNBLE1BQU1yQyxHQUFHLEdBQUdFLElBQUksQ0FBQ3FDLEdBQUwsQ0FBUzVFLEVBQUUsQ0FBQ0MsTUFBWixFQUFvQnlFLEVBQUUsQ0FBQ3pFLE1BQXZCLENBQVo7O0FBQ0EsT0FBSyxJQUFJRixHQUFDLEdBQUcsQ0FBYixFQUFnQkEsR0FBQyxHQUFHc0MsR0FBcEIsRUFBeUJ0QyxHQUFDLEVBQTFCLEVBQThCO0FBQzVCNEUsSUFBQUEsRUFBRSxDQUFDNUUsR0FBRCxDQUFGLEdBQVE0QyxDQUFDLENBQUMzQyxFQUFFLENBQUNELEdBQUQsQ0FBSCxFQUFRMkUsRUFBRSxDQUFDM0UsR0FBRCxDQUFWLENBQVQ7QUFDRDs7QUFDRCxTQUFPNEUsRUFBUDtBQUNELENBWE07QUFhUDtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFRTyxTQUFTRSxHQUFULENBQ0w3RSxFQURLLEVBRUwwRSxFQUZLLEVBR2dIO0FBQ3JILE1BQUlBLEVBQUUsS0FBS0ksU0FBWCxFQUFzQjtBQUNwQixXQUFPLFVBQUNKLEVBQUQ7QUFBQSxhQUFRRyxHQUFHLENBQUNILEVBQUQsRUFBSzFFLEVBQUwsQ0FBWDtBQUFBLEtBQVA7QUFDRDs7QUFDRCxTQUFPeUUsT0FBTyxDQUFDekUsRUFBRCxFQUFLMEUsRUFBTCxFQUFTLFVBQUMvRCxDQUFELEVBQUlvRSxDQUFKO0FBQUEsV0FBVSxDQUFDcEUsQ0FBRCxFQUFJb0UsQ0FBSixDQUFWO0FBQUEsR0FBVCxDQUFkO0FBQ0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FDbkJ2QyxHQURtQixFQUUrQztBQUNsRSxNQUFNd0MsRUFBb0IsR0FBRyxDQUFDeEMsR0FBRyxDQUFDLENBQUQsQ0FBSCxDQUFPLENBQVAsQ0FBRCxDQUE3QjtBQUNBLE1BQU15QyxFQUFvQixHQUFHLENBQUN6QyxHQUFHLENBQUMsQ0FBRCxDQUFILENBQU8sQ0FBUCxDQUFELENBQTdCOztBQUNBLE9BQUssSUFBSTFDLEdBQUMsR0FBRyxDQUFiLEVBQWdCQSxHQUFDLEdBQUcwQyxHQUFHLENBQUN4QyxNQUF4QixFQUFnQ0YsR0FBQyxFQUFqQyxFQUFxQztBQUNuQ2tGLElBQUFBLEVBQUUsQ0FBQ2xGLEdBQUQsQ0FBRixHQUFRMEMsR0FBRyxDQUFDMUMsR0FBRCxDQUFILENBQU8sQ0FBUCxDQUFSO0FBQ0FtRixJQUFBQSxFQUFFLENBQUNuRixHQUFELENBQUYsR0FBUTBDLEdBQUcsQ0FBQzFDLEdBQUQsQ0FBSCxDQUFPLENBQVAsQ0FBUjtBQUNEOztBQUNELFNBQU8sQ0FBQ2tGLEVBQUQsRUFBS0MsRUFBTCxDQUFQO0FBQ0QsQ0FWTTtBQVlQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ08sSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBSUMsTUFBSjtBQUFBLFNBQWtCLFVBQUNwRixFQUFELEVBQTREO0FBQ3RHLFFBQU1rQixHQUFxQixHQUFHLENBQUNrRSxNQUFELEVBQVNwRixFQUFFLENBQUMsQ0FBRCxDQUFYLENBQTlCOztBQUNBLFNBQUssSUFBSUQsR0FBQyxHQUFHLENBQWIsRUFBZ0JBLEdBQUMsR0FBR0MsRUFBRSxDQUFDQyxNQUF2QixFQUErQkYsR0FBQyxFQUFoQyxFQUFvQztBQUNsQ21CLE1BQUFBLEdBQUcsQ0FBQ0ssSUFBSixDQUFTNkQsTUFBVCxFQUFpQnBGLEVBQUUsQ0FBQ0QsR0FBRCxDQUFuQjtBQUNEOztBQUNELFdBQU9tQixHQUFQO0FBQ0QsR0FOeUI7QUFBQSxDQUFuQjtBQVFQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ08sSUFBTW1FLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUlELE1BQUo7QUFBQSxTQUFrQixVQUFDcEYsRUFBRCxFQUE0RDtBQUN2RyxRQUFNbUIsSUFBSSxHQUFHZixJQUFJLENBQUNKLEVBQUQsQ0FBakI7QUFDQSxXQUFPSCxVQUFVLENBQUNzQixJQUFELENBQVYsR0FBbUIsb0JBQUtBLElBQUwsRUFBV2dFLFVBQVUsQ0FBQ0MsTUFBRCxDQUFyQixFQUErQi9FLE9BQU8sQ0FBQ0YsSUFBSSxDQUFDSCxFQUFELENBQUwsQ0FBdEMsQ0FBbkIsR0FBdUVBLEVBQTlFO0FBQ0QsR0FIMEI7QUFBQSxDQUFwQjtBQUtQO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNPLElBQU1zRixjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQU8zQyxDQUFQO0FBQUEsU0FBNEQsVUFDeEYzQyxFQUR3RixFQUUzRDtBQUM3QixRQUFNa0IsR0FBcUIsR0FBR3ZCLENBQUMsQ0FBQ2tCLHlCQUFGLENBQTRCOEIsQ0FBQyxDQUFDLENBQUQsRUFBSXhDLElBQUksQ0FBQ0gsRUFBRCxDQUFSLENBQTdCLENBQTlCOztBQUNBLFNBQUssSUFBSUQsR0FBQyxHQUFHLENBQWIsRUFBZ0JBLEdBQUMsR0FBR0MsRUFBRSxDQUFDQyxNQUF2QixFQUErQkYsR0FBQyxFQUFoQyxFQUFvQztBQUNsQ21CLE1BQUFBLEdBQUcsQ0FBQ0ssSUFBSixPQUFBTCxHQUFHLHFCQUFTeUIsQ0FBQyxDQUFDNUMsR0FBRCxFQUFJQyxFQUFFLENBQUNELEdBQUQsQ0FBTixDQUFWLEVBQUg7QUFDRDs7QUFDRCxXQUFPbUIsR0FBUDtBQUNELEdBUjZCO0FBQUEsQ0FBdkI7QUFVUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNPLElBQU1xRSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFPNUMsQ0FBUDtBQUFBLFNBQStFLFVBQ2pHM0MsRUFEaUcsRUFFcEU7QUFDN0IsY0FBa0IyQyxDQUFDLENBQUMzQyxFQUFELENBQW5CO0FBQUE7QUFBQSxRQUFPK0UsQ0FBUDtBQUFBLFFBQVU1RCxJQUFWOztBQUNBLFFBQU1ELEdBQXFCLEdBQUcsQ0FBQzZELENBQUQsQ0FBOUI7QUFDQSxRQUFJUyxJQUFzQixHQUFHckUsSUFBN0I7O0FBQ0EsV0FBT3RCLFVBQVUsQ0FBQzJGLElBQUQsQ0FBakIsRUFBeUI7QUFDdkIsZ0JBQWtCN0MsQ0FBQyxDQUFDNkMsSUFBRCxDQUFuQjtBQUFBO0FBQUEsVUFBT1QsRUFBUDtBQUFBLFVBQVU1RCxLQUFWOztBQUNBRCxNQUFBQSxHQUFHLENBQUNLLElBQUosQ0FBU3dELEVBQVQ7QUFDQVMsTUFBQUEsSUFBSSxHQUFHckUsS0FBUDtBQUNEOztBQUNELFdBQU9ELEdBQVA7QUFDRCxHQVptQjtBQUFBLENBQWI7QUFjUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ08sSUFBTXdCLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNOLENBQUQ7QUFBQSxTQUFlLFVBQ3BDcEMsRUFEb0MsRUFFc0I7QUFDMUQsUUFBTXNDLENBQUMsR0FBR0MsSUFBSSxDQUFDVyxHQUFMLENBQVMsQ0FBVCxFQUFZZCxDQUFaLENBQVY7QUFDQSxXQUFPRSxDQUFDLElBQUl0QyxFQUFFLENBQUNDLE1BQVIsR0FBaUIsQ0FBQ0QsRUFBRCxFQUFLTixLQUFMLENBQWpCLEdBQStCLENBQUMsb0JBQUtNLEVBQUUsQ0FBQzJELEtBQUgsQ0FBUyxDQUFULEVBQVlyQixDQUFaLENBQUwsRUFBcUJqQyxPQUFPLENBQUNGLElBQUksQ0FBQ0gsRUFBRCxDQUFMLENBQTVCLENBQUQsRUFBMENBLEVBQUUsQ0FBQzJELEtBQUgsQ0FBU3JCLENBQVQsQ0FBMUMsQ0FBdEM7QUFDRCxHQUxzQjtBQUFBLENBQWhCO0FBT1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ08sSUFBTW1ELFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQ3RCckQsQ0FEc0I7QUFBQSxTQUVxRW1ELElBQUksQ0FBQzdDLE9BQU8sQ0FBQ04sQ0FBRCxDQUFSLENBRnpFO0FBQUEsQ0FBakIsQyxDQUlQO0FBQ0E7QUFDQTs7Ozs7QUFFQSxJQUFNc0QsSUFBMEIsR0FBRyxTQUE3QkEsSUFBNkIsQ0FBQ1QsRUFBRCxFQUFLdEMsQ0FBTDtBQUFBLFNBQVcsb0JBQUtzQyxFQUFMLEVBQVNVLEdBQUcsQ0FBQ2hELENBQUQsQ0FBWixDQUFYO0FBQUEsQ0FBbkM7QUFDQTs7O0FBQ0EsSUFBTWlELGFBQTZELEdBQUcsU0FBaEVBLGFBQWdFLENBQUNYLEVBQUQsRUFBS3RDLENBQUw7QUFBQSxTQUFXLG9CQUFLc0MsRUFBTCxFQUFTWSxZQUFZLENBQUNsRCxDQUFELENBQXJCLENBQVg7QUFBQSxDQUF0RTs7QUFDQSxJQUFNbUQsR0FBc0IsR0FBRyxTQUF6QkEsR0FBeUIsQ0FBQ0MsR0FBRCxFQUFNZCxFQUFOO0FBQUEsU0FBYSxvQkFBS2MsR0FBTCxFQUFVQyxFQUFFLENBQUNmLEVBQUQsQ0FBWixDQUFiO0FBQUEsQ0FBL0I7O0FBQ0EsSUFBTWdCLE1BQTRCLEdBQUcsU0FBL0JBLE1BQStCLENBQUNDLEVBQUQsRUFBS3ZELENBQUw7QUFBQSxTQUFXLG9CQUFLdUQsRUFBTCxFQUFTQyxLQUFLLENBQUN4RCxDQUFELENBQWQsQ0FBWDtBQUFBLENBQXJDO0FBQ0E7OztBQUNBLElBQU15RCxPQUErQixHQUFHLFNBQWxDQSxPQUFrQyxDQUFDQyxFQUFELEVBQUsxRCxDQUFMO0FBQUEsU0FBVyxvQkFBSzBELEVBQUwsRUFBU0MsTUFBTSxDQUFDM0QsQ0FBRCxDQUFmLENBQVg7QUFBQSxDQUF4QztBQUNBOzs7QUFDQSxJQUFNNEQsT0FBaUMsR0FBRyxTQUFwQ0EsT0FBb0MsQ0FBQ3RCLEVBQUQsRUFBS0YsQ0FBTCxFQUFRcEMsQ0FBUjtBQUFBLFNBQWMsb0JBQUtzQyxFQUFMLEVBQVNyRCxNQUFNLENBQUNtRCxDQUFELEVBQUlwQyxDQUFKLENBQWYsQ0FBZDtBQUFBLENBQTFDO0FBQ0E7OztBQUNBLElBQU02RCxRQUFtQyxHQUFHLFNBQXRDQSxRQUFzQyxDQUFDOUUsQ0FBRCxFQUFPO0FBQ2pELE1BQU0rRSxRQUFRLEdBQUdDLE9BQU8sQ0FBQ2hGLENBQUQsQ0FBeEI7QUFDQSxTQUFPLFVBQUN1RCxFQUFELEVBQUt0QyxDQUFMO0FBQUEsV0FBVyxvQkFBS3NDLEVBQUwsRUFBU3dCLFFBQVEsQ0FBQzlELENBQUQsQ0FBakIsQ0FBWDtBQUFBLEdBQVA7QUFDRCxDQUhEO0FBSUE7OztBQUNBLElBQU1nRSxZQUEyQyxHQUFHLFNBQTlDQSxZQUE4QyxDQUFDMUIsRUFBRCxFQUFLRixDQUFMLEVBQVFwQyxDQUFSO0FBQUEsU0FBYyxvQkFBS3NDLEVBQUwsRUFBUzJCLFdBQVcsQ0FBQzdCLENBQUQsRUFBSXBDLENBQUosQ0FBcEIsQ0FBZDtBQUFBLENBQXBEO0FBQ0E7OztBQUNBLElBQU1rRSxTQUF3QyxHQUFHLFNBQTNDQSxTQUEyQyxDQUMvQ0MsQ0FEK0MsRUFFd0Q7QUFDdkcsTUFBTUMsU0FBUyxHQUFHQyxRQUFRLENBQUNGLENBQUQsQ0FBMUI7QUFDQSxTQUFPLFVBQUNHLEVBQUQsRUFBS3RFLENBQUw7QUFBQSxXQUFXLG9CQUFLc0UsRUFBTCxFQUFTRixTQUFTLENBQUNwRSxDQUFELENBQWxCLENBQVg7QUFBQSxHQUFQO0FBQ0QsQ0FMRDtBQU1BOzs7QUFDQSxJQUFNdUUsSUFBc0IsR0FBRyxTQUF6QkEsSUFBeUIsQ0FBQ2pDLEVBQUQsRUFBS2tDLElBQUw7QUFBQSxTQUFjLG9CQUFLbEMsRUFBTCxFQUFTbUMsR0FBRyxDQUFDRCxJQUFELENBQVosQ0FBZDtBQUFBLENBQS9CO0FBQ0E7OztBQUNBLElBQU1FLGdCQUFvRSxHQUFHLFNBQXZFQSxnQkFBdUUsQ0FBQ3BDLEVBQUQsRUFBS0YsQ0FBTCxFQUFRcEMsQ0FBUjtBQUFBLFNBQzNFLG9CQUFLc0MsRUFBTCxFQUFTcUMsZUFBZSxDQUFDdkMsQ0FBRCxFQUFJcEMsQ0FBSixDQUF4QixDQUQyRTtBQUFBLENBQTdFO0FBRUE7OztBQUNBLElBQU00RSxpQkFBc0UsR0FBRyxTQUF6RUEsaUJBQXlFLENBQUM3RixDQUFELEVBQU87QUFDcEYsTUFBTThGLGlCQUFpQixHQUFHQyxnQkFBZ0IsQ0FBQy9GLENBQUQsQ0FBMUM7QUFDQSxTQUFPLFVBQUN1RCxFQUFELEVBQUt0QyxDQUFMO0FBQUEsV0FBVyxvQkFBS3NDLEVBQUwsRUFBU3VDLGlCQUFpQixDQUFDN0UsQ0FBRCxDQUExQixDQUFYO0FBQUEsR0FBUDtBQUNELENBSEQ7QUFJQTs7O0FBQ0EsSUFBTStFLHFCQUE4RSxHQUFHLFNBQWpGQSxxQkFBaUYsQ0FBQ3pDLEVBQUQsRUFBS0YsQ0FBTCxFQUFRcEMsQ0FBUjtBQUFBLFNBQ3JGLG9CQUFLc0MsRUFBTCxFQUFTMEMsb0JBQW9CLENBQUM1QyxDQUFELEVBQUlwQyxDQUFKLENBQTdCLENBRHFGO0FBQUEsQ0FBdkY7QUFFQTs7O0FBQ0EsSUFBTWlGLGtCQUEyRSxHQUFHLFNBQTlFQSxrQkFBOEUsQ0FDbEZkLENBRGtGLEVBRWdDO0FBQ2xILE1BQU1lLGtCQUFrQixHQUFHQyxpQkFBaUIsQ0FBQ2hCLENBQUQsQ0FBNUM7QUFDQSxTQUFPLFVBQUNHLEVBQUQsRUFBS3RFLENBQUw7QUFBQSxXQUFXLG9CQUFLc0UsRUFBTCxFQUFTWSxrQkFBa0IsQ0FBQ2xGLENBQUQsQ0FBM0IsQ0FBWDtBQUFBLEdBQVA7QUFDRCxDQUxELEMsQ0FPQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLElBQU1vRixFQUF1QixHQUFHcEksQ0FBQyxDQUFDcUksU0FBbEM7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFDTyxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFJZCxJQUFKO0FBQUEsU0FBNkMsVUFDL0RuSCxFQUQrRDtBQUFBLFdBRTlCLG9CQUFLQSxFQUFMLEVBQVM0RCxPQUFPLENBQUN1RCxJQUFJLEVBQUwsQ0FBaEIsQ0FGOEI7QUFBQSxHQUE3QztBQUFBLENBQWI7QUFJUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUNPLElBQU1DLEdBRWtELEdBQUdhLElBRjNEO0FBSVA7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFDTyxJQUFNakMsRUFBRSxHQUFHLFNBQUxBLEVBQUssQ0FDaEJoRyxFQURnQjtBQUFBLFNBRStEbUcsS0FBSyxDQUFDLFVBQUN4RCxDQUFEO0FBQUEsV0FBTyxvQkFBSzNDLEVBQUwsRUFBUzJGLEdBQUcsQ0FBQ2hELENBQUQsQ0FBWixDQUFQO0FBQUEsR0FBRCxDQUZwRTtBQUFBLENBQVg7QUFJUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ08sSUFBTXdELEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQ25CeEQsQ0FEbUI7QUFBQSxTQUU4QzJDLGNBQWMsQ0FBQyxVQUFDM0YsQ0FBRCxFQUFJZ0IsQ0FBSjtBQUFBLFdBQVVnQyxDQUFDLENBQUNoQyxDQUFELENBQVg7QUFBQSxHQUFELENBRjVEO0FBQUEsQ0FBZDtBQUlQO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNPLElBQU0yRixNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFPM0QsQ0FBUDtBQUFBLFNBQWtELFVBQ3RFM0MsRUFEc0UsRUFFekM7QUFDN0IsUUFBSXdGLElBQXNCLEdBQUdwRixJQUFJLENBQUNKLEVBQUQsQ0FBakM7QUFDQSxRQUFNa0IsR0FBcUIsR0FBRyxDQUFDeUIsQ0FBQyxDQUFDM0MsRUFBRCxDQUFGLENBQTlCOztBQUNBLFdBQU9ILFVBQVUsQ0FBQzJGLElBQUQsQ0FBakIsRUFBeUI7QUFDdkJ0RSxNQUFBQSxHQUFHLENBQUNLLElBQUosQ0FBU29CLENBQUMsQ0FBQzZDLElBQUQsQ0FBVjtBQUNBQSxNQUFBQSxJQUFJLEdBQUdwRixJQUFJLENBQUNvRixJQUFELENBQVg7QUFDRDs7QUFDRCxXQUFPdEUsR0FBUDtBQUNELEdBVnFCO0FBQUEsQ0FBZjtBQVlQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUNPLElBQU1nSCxTQUErRixHQUMxRyxhQUNBNUIsTUFBTSxDQUFDeEUsa0JBQUQsQ0FGRDtBQUlQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTXFHLE9BQThGLEdBQ3pHLGFBQ0FoQyxLQUFLLENBQUNyRSxrQkFBRCxDQUZBO0FBSVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFDTyxJQUFNNkQsR0FBRyxHQUFHLFNBQU5BLEdBQU0sQ0FBT2hELENBQVA7QUFBQSxTQUNqQmtELFlBQVksQ0FBQyxVQUFDbEcsQ0FBRCxFQUFJZ0IsQ0FBSjtBQUFBLFdBQVVnQyxDQUFDLENBQUNoQyxDQUFELENBQVg7QUFBQSxHQUFELENBREs7QUFBQSxDQUFaO0FBR1A7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ08sSUFBTWtGLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQU9sRCxDQUFQO0FBQUEsU0FBcUMsVUFDL0QzQyxFQUQrRCxFQUVsQztBQUM3QixRQUFNa0IsR0FBcUIsR0FBRyxDQUFDeUIsQ0FBQyxDQUFDLENBQUQsRUFBSXhDLElBQUksQ0FBQ0gsRUFBRCxDQUFSLENBQUYsQ0FBOUI7O0FBQ0EsU0FBSyxJQUFJRCxHQUFDLEdBQUcsQ0FBYixFQUFnQkEsR0FBQyxHQUFHQyxFQUFFLENBQUNDLE1BQXZCLEVBQStCRixHQUFDLEVBQWhDLEVBQW9DO0FBQ2xDbUIsTUFBQUEsR0FBRyxDQUFDSyxJQUFKLENBQVNvQixDQUFDLENBQUM1QyxHQUFELEVBQUlDLEVBQUUsQ0FBQ0QsR0FBRCxDQUFOLENBQVY7QUFDRDs7QUFDRCxXQUFPbUIsR0FBUDtBQUNELEdBUjJCO0FBQUEsQ0FBckI7QUFVUDtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDTyxJQUFNVSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFPbUQsQ0FBUCxFQUFhcEMsQ0FBYjtBQUFBLFNBQ3BCMkUsZUFBZSxDQUFDdkMsQ0FBRCxFQUFJLFVBQUNwRixDQUFELEVBQUlvRixDQUFKLEVBQU9wRSxDQUFQO0FBQUEsV0FBYWdDLENBQUMsQ0FBQ29DLENBQUQsRUFBSXBFLENBQUosQ0FBZDtBQUFBLEdBQUosQ0FESztBQUFBLENBQWY7QUFHUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ08sSUFBTStGLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUkwQixDQUFKO0FBQUEsU0FBd0IsVUFBSXpGLENBQUo7QUFBQSxXQUF1QixVQUFDM0MsRUFBRDtBQUFBLGFBQ3BFQSxFQUFFLENBQUMyRCxLQUFILENBQVMsQ0FBVCxFQUFZL0IsTUFBWixDQUFtQixVQUFDZ0IsQ0FBRCxFQUFJakMsQ0FBSjtBQUFBLGVBQVV5SCxDQUFDLENBQUN2RyxNQUFGLENBQVNlLENBQVQsRUFBWUQsQ0FBQyxDQUFDaEMsQ0FBRCxDQUFiLENBQVY7QUFBQSxPQUFuQixFQUFnRGdDLENBQUMsQ0FBQzNDLEVBQUUsQ0FBQyxDQUFELENBQUgsQ0FBakQsQ0FEb0U7QUFBQSxLQUF2QjtBQUFBLEdBQXhCO0FBQUEsQ0FBaEI7QUFHUDtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDTyxJQUFNNEcsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBTzdCLENBQVAsRUFBYXBDLENBQWI7QUFBQSxTQUN6QmdGLG9CQUFvQixDQUFDNUMsQ0FBRCxFQUFJLFVBQUNwRixDQUFELEVBQUlvRixDQUFKLEVBQU9wRSxDQUFQO0FBQUEsV0FBYWdDLENBQUMsQ0FBQ29DLENBQUQsRUFBSXBFLENBQUosQ0FBZDtBQUFBLEdBQUosQ0FESztBQUFBLENBQXBCO0FBR1A7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ08sSUFBTTJHLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBT3ZDLENBQVAsRUFBYXBDLENBQWI7QUFBQSxTQUFpRCxVQUFDM0MsRUFBRDtBQUFBLFdBQzlFQSxFQUFFLENBQUM0QixNQUFILENBQVUsVUFBQ21ELENBQUQsRUFBSXBFLENBQUosRUFBT1osQ0FBUDtBQUFBLGFBQWE0QyxDQUFDLENBQUM1QyxDQUFELEVBQUlnRixDQUFKLEVBQU9wRSxDQUFQLENBQWQ7QUFBQSxLQUFWLEVBQW1Db0UsQ0FBbkMsQ0FEOEU7QUFBQSxHQUFqRDtBQUFBLENBQXhCO0FBR1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNPLElBQU0wQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUlXLENBQUo7QUFBQSxTQUF3QixVQUFJekYsQ0FBSjtBQUFBLFdBQWtDLFVBQ3hGM0MsRUFEd0Y7QUFBQSxhQUVyRkEsRUFBRSxDQUFDMkQsS0FBSCxDQUFTLENBQVQsRUFBWS9CLE1BQVosQ0FBbUIsVUFBQ2dCLENBQUQsRUFBSWpDLENBQUosRUFBT1osQ0FBUDtBQUFBLGVBQWFxSSxDQUFDLENBQUN2RyxNQUFGLENBQVNlLENBQVQsRUFBWUQsQ0FBQyxDQUFDNUMsQ0FBQyxHQUFHLENBQUwsRUFBUVksQ0FBUixDQUFiLENBQWI7QUFBQSxPQUFuQixFQUEwRGdDLENBQUMsQ0FBQyxDQUFELEVBQUkzQyxFQUFFLENBQUMsQ0FBRCxDQUFOLENBQTNELENBRnFGO0FBQUEsS0FBbEM7QUFBQSxHQUF4QjtBQUFBLENBQXpCO0FBSVA7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ08sSUFBTTJILG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsQ0FBTzVDLENBQVAsRUFBYXBDLENBQWI7QUFBQSxTQUFpRCxVQUNuRjNDLEVBRG1GO0FBQUEsV0FFN0VBLEVBQUUsQ0FBQzRHLFdBQUgsQ0FBZSxVQUFDN0IsQ0FBRCxFQUFJcEUsQ0FBSixFQUFPWixDQUFQO0FBQUEsYUFBYTRDLENBQUMsQ0FBQzVDLENBQUQsRUFBSVksQ0FBSixFQUFPb0UsQ0FBUCxDQUFkO0FBQUEsS0FBZixFQUF3Q0EsQ0FBeEMsQ0FGNkU7QUFBQSxHQUFqRDtBQUFBLENBQTdCO0FBSVA7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ08sSUFBTWlDLFFBQWdDLEdBQUcsU0FBbkNBLFFBQW1DLENBQzlDRixDQUQ4QyxFQUU2RDtBQUMzRyxNQUFNZSxrQkFBa0IsR0FBR0MsaUJBQWlCLENBQUNoQixDQUFELENBQTVDO0FBQ0EsU0FBTyxVQUFDbkUsQ0FBRDtBQUFBLFdBQU9rRixrQkFBa0IsQ0FBQyxVQUFDbEksQ0FBRCxFQUFJZ0IsQ0FBSjtBQUFBLGFBQVVnQyxDQUFDLENBQUNoQyxDQUFELENBQVg7QUFBQSxLQUFELENBQXpCO0FBQUEsR0FBUDtBQUNELENBTE07QUFPUDtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDTyxJQUFNMEgsUUFBdUMsR0FBRyxTQUExQ0EsUUFBMEMsQ0FDckR2QixDQURxRDtBQUFBLFNBRStCZ0IsaUJBQWlCLENBQUNoQixDQUFELENBQWpCLENBQXFCd0IsWUFBckIsQ0FGL0I7QUFBQSxDQUFoRDtBQUlQO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNPLElBQU1SLGlCQUEwRCxHQUFHLFNBQTdEQSxpQkFBNkQsQ0FBSWhCLENBQUo7QUFBQSxTQUE2QixVQUNyR25FLENBRHFHO0FBQUEsV0FFbEcsVUFBQzNDLEVBQUQsRUFBb0U7QUFDdkUsVUFBSWtCLEdBQXFDLEdBQUc0RixDQUFDLENBQUNuQixHQUFGLENBQU1oRCxDQUFDLENBQUMsQ0FBRCxFQUFJeEMsSUFBSSxDQUFDSCxFQUFELENBQVIsQ0FBUCxFQUFzQitILEVBQXRCLENBQTVDOztBQUNBLFdBQUssSUFBSWhJLEdBQUMsR0FBRyxDQUFiLEVBQWdCQSxHQUFDLEdBQUdDLEVBQUUsQ0FBQ0MsTUFBdkIsRUFBK0JGLEdBQUMsRUFBaEMsRUFBb0M7QUFDbENtQixRQUFBQSxHQUFHLEdBQUc0RixDQUFDLENBQUNkLEVBQUYsQ0FDSmMsQ0FBQyxDQUFDbkIsR0FBRixDQUFNekUsR0FBTixFQUFXLFVBQUN3RCxFQUFEO0FBQUEsaUJBQVEsVUFBQ0ssQ0FBRDtBQUFBLG1CQUFVLG9CQUFLTCxFQUFMLEVBQVNqRSxNQUFNLENBQUNzRSxDQUFELENBQWYsQ0FBVjtBQUFBLFdBQVI7QUFBQSxTQUFYLENBREksRUFFSnBDLENBQUMsQ0FBQzVDLEdBQUQsRUFBSUMsRUFBRSxDQUFDRCxHQUFELENBQU4sQ0FGRyxDQUFOO0FBSUQ7O0FBQ0QsYUFBT21CLEdBQVA7QUFDRCxLQVhzRztBQUFBLEdBQTdCO0FBQUEsQ0FBbkU7QUFhUDtBQUNBO0FBQ0E7QUFDQTs7OztBQUNPLElBQU1xSCxPQUFpQyxHQUFHNUksQ0FBQyxDQUFDUSxJQUE1QyxDLENBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxJQUFNcUksR0FBRyxHQUFHLHVCQUFaO0FBRVA7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUlMLENBQUo7QUFBQSxTQUFvRDtBQUN6RU0sSUFBQUEsSUFBSSxFQUFFLGNBQUMxSSxFQUFEO0FBQUEsd0JBQVlBLEVBQUUsQ0FBQzJGLEdBQUgsQ0FBT3lDLENBQUMsQ0FBQ00sSUFBVCxFQUFlQyxJQUFmLENBQW9CLElBQXBCLENBQVo7QUFBQTtBQURtRSxHQUFwRDtBQUFBLENBQWhCO0FBSVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNPLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlO0FBQUEsU0FBdUQ7QUFDakYvRyxJQUFBQSxNQUFNLEVBQU5BO0FBRGlGLEdBQXZEO0FBQUEsQ0FBckI7QUFJUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ08sSUFBTWdILEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUk1SCxDQUFKO0FBQUEsU0FDbkIsb0JBQVcsVUFBQ0wsRUFBRCxFQUFLa0ksRUFBTDtBQUFBLFdBQVlsSSxFQUFFLENBQUNYLE1BQUgsS0FBYzZJLEVBQUUsQ0FBQzdJLE1BQWpCLElBQTJCVyxFQUFFLENBQUNRLEtBQUgsQ0FBUyxVQUFDeUMsQ0FBRCxFQUFJOUQsQ0FBSjtBQUFBLGFBQVVrQixDQUFDLENBQUNLLE1BQUYsQ0FBU3VDLENBQVQsRUFBWWlGLEVBQUUsQ0FBQy9JLENBQUQsQ0FBZCxDQUFWO0FBQUEsS0FBVCxDQUF2QztBQUFBLEdBQVgsQ0FEbUI7QUFBQSxDQUFkO0FBR1A7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ08sSUFBTWdKLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBSTlILENBQUosRUFBc0Q7QUFDckYsTUFBTStILE1BQU0sR0FBR2pILEtBQUssQ0FBQ2QsQ0FBRCxDQUFwQjtBQUNBLFNBQU87QUFDTFksSUFBQUEsTUFBTSxFQUFFLGdCQUFDSyxLQUFELEVBQVFELE1BQVI7QUFBQSxhQUFtQitHLE1BQU0sQ0FBQy9HLE1BQUQsQ0FBTixDQUFlQyxLQUFmLENBQW5CO0FBQUE7QUFESCxHQUFQO0FBR0QsQ0FMTTtBQU9QO0FBQ0E7QUFDQTtBQUNBOzs7O0FBQ08sSUFBTStHLE9BQXNCLEdBQUc7QUFDcENULEVBQUFBLEdBQUcsRUFBSEEsR0FEb0M7QUFFcEM3QyxFQUFBQSxHQUFHLEVBQUVEO0FBRitCLENBQS9CO0FBS1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxJQUFNd0QsSUFBSSxHQUNmLGFBQ0EsbUJBQU1ELE9BQU4sQ0FGSztBQUlQO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxJQUFNRSxPQUFzQixHQUFHO0FBQ3BDWCxFQUFBQSxHQUFHLEVBQUhBLEdBRG9DO0FBRXBDVCxFQUFBQSxFQUFFLEVBQUZBO0FBRm9DLENBQS9CO0FBS1A7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLElBQU1xQixnQkFBZ0QsR0FBRztBQUM5RFosRUFBQUEsR0FBRyxFQUFIQSxHQUQ4RDtBQUU5RDdDLEVBQUFBLEdBQUcsRUFBRUQsSUFGeUQ7QUFHOURHLEVBQUFBLFlBQVksRUFBRUQ7QUFIZ0QsQ0FBekQ7QUFNUDtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTXlELEtBQWtCLEdBQUc7QUFDaENiLEVBQUFBLEdBQUcsRUFBSEEsR0FEZ0M7QUFFaEM3QyxFQUFBQSxHQUFHLEVBQUVELElBRjJCO0FBR2hDTSxFQUFBQSxFQUFFLEVBQUVGO0FBSDRCLENBQTNCO0FBTVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTXdELE9BQU8sR0FDbEIsYUFDQSxvQkFBU0QsS0FBVCxDQUZLO0FBSVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTUUsUUFBUSxHQUNuQixhQUNBLHFCQUFVRixLQUFWLENBRks7QUFJUDtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTUcsV0FBOEIsR0FBRztBQUM1Q2hCLEVBQUFBLEdBQUcsRUFBSEEsR0FENEM7QUFFNUM3QyxFQUFBQSxHQUFHLEVBQUVELElBRnVDO0FBRzVDTSxFQUFBQSxFQUFFLEVBQUVGLEdBSHdDO0FBSTVDaUMsRUFBQUEsRUFBRSxFQUFGQTtBQUo0QyxDQUF2QztBQU9QO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxJQUFNMEIsS0FBa0IsR0FBRztBQUNoQ2pCLEVBQUFBLEdBQUcsRUFBSEEsR0FEZ0M7QUFFaEM3QyxFQUFBQSxHQUFHLEVBQUVELElBRjJCO0FBR2hDTSxFQUFBQSxFQUFFLEVBQUVGLEdBSDRCO0FBSWhDSyxFQUFBQSxLQUFLLEVBQUVGO0FBSnlCLENBQTNCO0FBT1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxJQUFNeUQsVUFBVSxHQUNyQixhQUNBLHVCQUFZRCxLQUFaLENBRks7QUFJUDtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTUUsS0FBa0IsR0FBRztBQUNoQ25CLEVBQUFBLEdBQUcsRUFBSEEsR0FEZ0M7QUFFaEM3QyxFQUFBQSxHQUFHLEVBQUVELElBRjJCO0FBR2hDTSxFQUFBQSxFQUFFLEVBQUVGLEdBSDRCO0FBSWhDaUMsRUFBQUEsRUFBRSxFQUFGQSxFQUpnQztBQUtoQzVCLEVBQUFBLEtBQUssRUFBRUY7QUFMeUIsQ0FBM0I7QUFRUDtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTTJELFFBQXdCLEdBQUc7QUFDdENwQixFQUFBQSxHQUFHLEVBQUhBLEdBRHNDO0FBRXRDNUcsRUFBQUEsTUFBTSxFQUFFMkUsT0FGOEI7QUFHdENHLEVBQUFBLE9BQU8sRUFBRUYsUUFINkI7QUFJdENJLEVBQUFBLFdBQVcsRUFBRUQ7QUFKeUIsQ0FBakM7QUFPUDtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTWtELGlCQUFrRCxHQUFHO0FBQ2hFckIsRUFBQUEsR0FBRyxFQUFIQSxHQURnRTtBQUVoRTVHLEVBQUFBLE1BQU0sRUFBRTJFLE9BRndEO0FBR2hFRyxFQUFBQSxPQUFPLEVBQUVGLFFBSHVEO0FBSWhFSSxFQUFBQSxXQUFXLEVBQUVELFlBSm1EO0FBS2hFVyxFQUFBQSxlQUFlLEVBQUVELGdCQUwrQztBQU1oRUksRUFBQUEsZ0JBQWdCLEVBQUVGLGlCQU44QztBQU9oRUksRUFBQUEsb0JBQW9CLEVBQUVEO0FBUDBDLENBQTNEO0FBVVA7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLElBQU1vQyxXQUE4QixHQUFHO0FBQzVDdEIsRUFBQUEsR0FBRyxFQUFIQSxHQUQ0QztBQUU1QzdDLEVBQUFBLEdBQUcsRUFBRUQsSUFGdUM7QUFHNUM5RCxFQUFBQSxNQUFNLEVBQUUyRSxPQUhvQztBQUk1Q0csRUFBQUEsT0FBTyxFQUFFRixRQUptQztBQUs1Q0ksRUFBQUEsV0FBVyxFQUFFRCxZQUwrQjtBQU01Q0ssRUFBQUEsUUFBUSxFQUFFSCxTQU5rQztBQU81Q3dCLEVBQUFBLFFBQVEsRUFBUkE7QUFQNEMsQ0FBdkM7QUFVUDtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTTBCLG9CQUF3RCxHQUFHO0FBQ3RFdkIsRUFBQUEsR0FBRyxFQUFIQSxHQURzRTtBQUV0RTdDLEVBQUFBLEdBQUcsRUFBRUQsSUFGaUU7QUFHdEVHLEVBQUFBLFlBQVksRUFBRUQsYUFId0Q7QUFJdEVoRSxFQUFBQSxNQUFNLEVBQUUyRSxPQUo4RDtBQUt0RUcsRUFBQUEsT0FBTyxFQUFFRixRQUw2RDtBQU10RUksRUFBQUEsV0FBVyxFQUFFRCxZQU55RDtBQU90RUssRUFBQUEsUUFBUSxFQUFFSCxTQVA0RDtBQVF0RXdCLEVBQUFBLFFBQVEsRUFBUkEsUUFSc0U7QUFTdEVmLEVBQUFBLGVBQWUsRUFBRUQsZ0JBVHFEO0FBVXRFSSxFQUFBQSxnQkFBZ0IsRUFBRUYsaUJBVm9EO0FBV3RFSSxFQUFBQSxvQkFBb0IsRUFBRUQscUJBWGdEO0FBWXRFSSxFQUFBQSxpQkFBaUIsRUFBRUY7QUFabUQsQ0FBakU7QUFlUDtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTW9DLEdBQWMsR0FBRztBQUM1QnhCLEVBQUFBLEdBQUcsRUFBSEEsR0FENEI7QUFFNUI3QyxFQUFBQSxHQUFHLEVBQUVELElBRnVCO0FBRzVCMEIsRUFBQUEsR0FBRyxFQUFFRjtBQUh1QixDQUF2QjtBQU1QO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxJQUFNK0MsT0FBc0IsR0FBRztBQUNwQ3pCLEVBQUFBLEdBQUcsRUFBSEEsR0FEb0M7QUFFcEM3QyxFQUFBQSxHQUFHLEVBQUVELElBRitCO0FBR3BDWSxFQUFBQSxNQUFNLEVBQUVGLE9BSDRCO0FBSXBDbUMsRUFBQUEsT0FBTyxFQUFQQTtBQUpvQyxDQUEvQixDLENBT1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTTJCLEVBQTZCLEdBQ3hDLGFBQ0FuQyxFQUFFLENBQUNwSSxDQUFDLENBQUN3SyxXQUFILENBRkc7QUFJUDtBQUNBO0FBQ0E7OztBQUNPLElBQU1DLE1BQU0sR0FDakIsYUFDQSxxQkFBUW5CLE9BQVIsQ0FGSztBQUlQO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTW9CLElBQUksR0FDZixhQUNBLGlCQUFNWixLQUFOLENBRkssQyxDQUlQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUNPLElBQU1hLEdBQUcsR0FDZCxhQUNBLGdCQUFLakIsS0FBTCxDQUZLLEMsQ0FJUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFDTyxJQUFNbEosSUFBNEMsR0FBR29JLE9BQXJEO0FBRVA7QUFDQTtBQUNBOzs7QUFDTyxJQUFNbkksSUFBMkQsR0FBR1QsQ0FBQyxDQUFDUyxJQUF0RTtBQUVQO0FBQ0E7QUFDQTs7OztBQUNPLElBQU1xRCxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFJekQsRUFBSjtBQUFBLFNBQXdDQSxFQUFFLENBQUNBLEVBQUUsQ0FBQ0MsTUFBSCxHQUFZLENBQWIsQ0FBMUM7QUFBQSxDQUFiO0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDTyxJQUFNTyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFJUixFQUFKO0FBQUEsU0FBdURBLEVBQUUsQ0FBQzJELEtBQUgsQ0FBUyxDQUFULEVBQVksQ0FBQyxDQUFiLENBQXZEO0FBQUEsQ0FBYjtBQUVQO0FBQ0E7QUFDQTs7Ozs7QUFDTyxJQUFNaUIsR0FBRyxHQUFHLFNBQU5BLEdBQU0sQ0FBSVAsQ0FBSixFQUF5RDtBQUMxRSxNQUFNK0QsQ0FBQyxHQUFHM0ksRUFBRSxDQUFDbUYsR0FBSCxDQUFPUCxDQUFQLENBQVY7QUFDQSxTQUFPLFVBQUNyRSxFQUFEO0FBQUEsV0FBUUEsRUFBRSxDQUFDNEIsTUFBSCxDQUFVd0csQ0FBQyxDQUFDdkcsTUFBWixDQUFSO0FBQUEsR0FBUDtBQUNELENBSE07QUFLUDtBQUNBO0FBQ0E7Ozs7O0FBQ08sSUFBTXFCLEdBQUcsR0FBRyxTQUFOQSxHQUFNLENBQUltQixDQUFKLEVBQXlEO0FBQzFFLE1BQU0rRCxDQUFDLEdBQUczSSxFQUFFLENBQUN5RCxHQUFILENBQU9tQixDQUFQLENBQVY7QUFDQSxTQUFPLFVBQUNyRSxFQUFEO0FBQUEsV0FBUUEsRUFBRSxDQUFDNEIsTUFBSCxDQUFVd0csQ0FBQyxDQUFDdkcsTUFBWixDQUFSO0FBQUEsR0FBUDtBQUNELENBSE07QUFLUDtBQUNBO0FBQ0E7Ozs7O0FBQ08sSUFBTTBJLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUluQyxDQUFKO0FBQUEsU0FBd0IsVUFBQ3BJLEVBQUQ7QUFBQSxXQUFxQ0EsRUFBRSxDQUFDNEIsTUFBSCxDQUFVd0csQ0FBQyxDQUFDdkcsTUFBWixDQUFyQztBQUFBLEdBQXhCO0FBQUEsQ0FBbEI7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ08sSUFBTTJJLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQU83SCxDQUFQO0FBQUEsU0FBcUQsVUFBQzNDLEVBQUQ7QUFBQSxXQUM1RTJDLENBQUMsQ0FBQ3hDLElBQUksQ0FBQ0gsRUFBRCxDQUFMLEVBQVdJLElBQUksQ0FBQ0osRUFBRCxDQUFmLENBRDJFO0FBQUEsR0FBckQ7QUFBQSxDQUFsQjtBQUdQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDTyxJQUFNeUssVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBTzlILENBQVA7QUFBQSxTQUFxRCxVQUFDM0MsRUFBRDtBQUFBLFdBQzdFMkMsQ0FBQyxDQUFDbkMsSUFBSSxDQUFDUixFQUFELENBQUwsRUFBV3lELElBQUksQ0FBQ3pELEVBQUQsQ0FBZixDQUQ0RTtBQUFBLEdBQXJEO0FBQUEsQ0FBbkI7QUFHUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNPLElBQU0wSyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFJL0gsQ0FBSjtBQUFBLFNBQTJCLFVBQUMzQyxFQUFEO0FBQUEsWUFDbkQyQyxDQUFDLENBQUN4QyxJQUFJLENBQUNILEVBQUQsQ0FBTCxDQURrRCw0QkFFaERJLElBQUksQ0FBQ0osRUFBRCxDQUY0QztBQUFBLEdBQTNCO0FBQUEsQ0FBbkI7QUFLUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ08sSUFBTTJLLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUloSyxDQUFKO0FBQUEsU0FBMkUrSixVQUFVLENBQUM7QUFBQSxXQUFNL0osQ0FBTjtBQUFBLEdBQUQsQ0FBckY7QUFBQSxDQUFuQjtBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ08sSUFBTWlLLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUlqSSxDQUFKO0FBQUEsU0FBMkIsVUFBQzNDLEVBQUQ7QUFBQSxXQUNuRCxvQkFBS1EsSUFBSSxDQUFDUixFQUFELENBQVQsRUFBZVMsTUFBTSxDQUFDa0MsQ0FBQyxDQUFDYyxJQUFJLENBQUN6RCxFQUFELENBQUwsQ0FBRixDQUFyQixDQURtRDtBQUFBLEdBQTNCO0FBQUEsQ0FBbkI7QUFHUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ08sSUFBTTZLLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUlsSyxDQUFKO0FBQUEsU0FBMkVpSyxVQUFVLENBQUM7QUFBQSxXQUFNakssQ0FBTjtBQUFBLEdBQUQsQ0FBckY7QUFBQSxDQUFuQixDLENBRVA7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBT08sU0FBU21LLFNBQVQsQ0FBc0J6RyxDQUF0QixFQUFvRztBQUN6RyxNQUFNMEcsS0FBSyxHQUFHcEosSUFBSSxDQUFDMEMsQ0FBRCxDQUFsQjtBQUNBLE1BQU0yRyxNQUFNLEdBQUdoSCxLQUFLLENBQUNLLENBQUQsQ0FBcEI7QUFDQSxTQUFPLFVBQUNyRSxFQUFEO0FBQUEsV0FBU0gsVUFBVSxDQUFDRyxFQUFELENBQVYsR0FBaUJnTCxNQUFNLENBQUNELEtBQUssQ0FBQy9LLEVBQUQsQ0FBTixDQUF2QixHQUFxQ04sS0FBOUM7QUFBQSxHQUFQO0FBQ0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBUU8sU0FBU3VMLE1BQVQsQ0FBbUJDLFNBQW5CLEVBQWdIO0FBQ3JILFNBQU9DLGVBQWUsQ0FBQyxVQUFDeEwsQ0FBRCxFQUFJZ0IsQ0FBSjtBQUFBLFdBQVV1SyxTQUFTLENBQUN2SyxDQUFELENBQW5CO0FBQUEsR0FBRCxDQUF0QjtBQUNEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLElBQU13SyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUlELFNBQUo7QUFBQSxTQUFnRCxVQUM3RWxMLEVBRDZFO0FBQUEsV0FFeEM2QyxpQkFBaUIsQ0FBQzdDLEVBQUUsQ0FBQ2lMLE1BQUgsQ0FBVSxVQUFDdEssQ0FBRCxFQUFJWixDQUFKO0FBQUEsYUFBVW1MLFNBQVMsQ0FBQ25MLENBQUQsRUFBSVksQ0FBSixDQUFuQjtBQUFBLEtBQVYsQ0FBRCxDQUZ1QjtBQUFBLEdBQWhEO0FBQUEsQ0FBeEI7QUFJUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUNPLElBQU15SyxNQUEyRSxHQUFHN0gsU0FBcEY7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTThILE1BQTJFLEdBQUc3SCxRQUFwRjtBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSU8sU0FBUzhILElBQVQsQ0FDTG5MLElBREssRUFFTEMsSUFGSyxFQUc4RTtBQUNuRixTQUFPQSxJQUFJLEtBQUswRSxTQUFULEdBQXFCekUsT0FBTyxDQUFDRixJQUFELENBQTVCLEdBQXFDLG9CQUFLQyxJQUFMLEVBQVdDLE9BQU8sQ0FBQ0YsSUFBRCxDQUFsQixDQUE1QztBQUNEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLElBQU1vTCxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFJL0ssSUFBSixFQUE0QkQsR0FBNUI7QUFBQSxTQUFpRSxvQkFBS0MsSUFBTCxFQUFXcUIsTUFBTSxDQUFDLENBQUN0QixHQUFELENBQUQsQ0FBakIsQ0FBakU7QUFBQSxDQUFiO0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ08sSUFBTWlMLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUl6TCxDQUFKLEVBQWVZLENBQWY7QUFBQSxTQUF3QixVQUFDWCxFQUFEO0FBQUEsV0FDOUNELENBQUMsR0FBRyxDQUFKLElBQVNBLENBQUMsR0FBR0MsRUFBRSxDQUFDQyxNQUFoQixHQUF5Qk4sQ0FBQyxDQUFDb0QsSUFBM0IsR0FBa0NwRCxDQUFDLENBQUNtRCxJQUFGLENBQU9wQyxjQUFjLENBQUNYLENBQUQsRUFBSVksQ0FBSixFQUFPWCxFQUFQLENBQXJCLENBRFk7QUFBQSxHQUF4QjtBQUFBLENBQWpCO0FBR1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFDTyxJQUFNeUwsWUFBWSxHQUFHdEcsVUFBckI7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLElBQU11RyxJQUFJLEdBQUduQixTQUFiO0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLElBQU1vQixxQkFLRixHQUFHO0FBQ1puRCxFQUFBQSxHQUFHLEVBQUhBLEdBRFk7QUFFWlQsRUFBQUEsRUFBRSxFQUFGQSxFQUZZO0FBR1pwQyxFQUFBQSxHQUFHLEVBQUVELElBSE87QUFJWkcsRUFBQUEsWUFBWSxFQUFFRCxhQUpGO0FBS1pJLEVBQUFBLEVBQUUsRUFBRUYsR0FMUTtBQU1aSyxFQUFBQSxLQUFLLEVBQUVGLE1BTks7QUFPWkssRUFBQUEsTUFBTSxFQUFFRixPQVBJO0FBUVptQyxFQUFBQSxPQUFPLEVBQUVBLE9BUkc7QUFTWjNHLEVBQUFBLE1BQU0sRUFBRTJFLE9BVEk7QUFVWkcsRUFBQUEsT0FBTyxFQUFFRixRQVZHO0FBV1pJLEVBQUFBLFdBQVcsRUFBRUQsWUFYRDtBQVlaSyxFQUFBQSxRQUFRLEVBQUVILFNBWkU7QUFhWndCLEVBQUFBLFFBQVEsRUFBUkEsUUFiWTtBQWNaZixFQUFBQSxlQUFlLEVBQUVELGdCQWRMO0FBZVpJLEVBQUFBLGdCQUFnQixFQUFFRixpQkFmTjtBQWdCWkksRUFBQUEsb0JBQW9CLEVBQUVELHFCQWhCVjtBQWlCWkksRUFBQUEsaUJBQWlCLEVBQUVGLGtCQWpCUDtBQWtCWlIsRUFBQUEsR0FBRyxFQUFFRjtBQWxCTyxDQUxQIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBEYXRhIHN0cnVjdHVyZSB3aGljaCByZXByZXNlbnRzIG5vbi1lbXB0eSByZWFkb25seSBhcnJheXMuXG4gKlxuICogYGBgdHNcbiAqIGV4cG9ydCB0eXBlIFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxBPiA9IFJlYWRvbmx5QXJyYXk8QT4gJiB7XG4gKiAgIHJlYWRvbmx5IDA6IEFcbiAqIH1cbiAqIGBgYFxuICpcbiAqIE5vdGUgdGhhdCB5b3UgZG9uJ3QgbmVlZCBhbnkgY29udmVyc2lvbiwgYSBgUmVhZG9ubHlOb25FbXB0eUFycmF5YCBpcyBhIGBSZWFkb25seUFycmF5YCxcbiAqIHNvIGFsbCBgUmVhZG9ubHlBcnJheWAncyBBUElzIGNhbiBiZSB1c2VkIHdpdGggYSBgUmVhZG9ubHlOb25FbXB0eUFycmF5YCB3aXRob3V0IGZ1cnRoZXIgYWRvLlxuICpcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5pbXBvcnQgeyBBbHQxIH0gZnJvbSAnLi9BbHQnXG5pbXBvcnQgeyBBcHBsaWNhdGl2ZSBhcyBBcHBsaWNhdGl2ZUhLVCwgQXBwbGljYXRpdmUxIH0gZnJvbSAnLi9BcHBsaWNhdGl2ZSdcbmltcG9ydCB7IGFwRmlyc3QgYXMgYXBGaXJzdF8sIEFwcGx5MSwgYXBTIGFzIGFwU18sIGFwU2Vjb25kIGFzIGFwU2Vjb25kXyB9IGZyb20gJy4vQXBwbHknXG5pbXBvcnQgeyBiaW5kIGFzIGJpbmRfLCBDaGFpbjEsIGNoYWluRmlyc3QgYXMgY2hhaW5GaXJzdF8gfSBmcm9tICcuL0NoYWluJ1xuaW1wb3J0IHsgQ29tb25hZDEgfSBmcm9tICcuL0NvbW9uYWQnXG5pbXBvcnQgeyBFbmRvbW9ycGhpc20gfSBmcm9tICcuL0VuZG9tb3JwaGlzbSdcbmltcG9ydCB7IEVxLCBmcm9tRXF1YWxzIH0gZnJvbSAnLi9FcSdcbmltcG9ydCB7IEV4dGVuZDEgfSBmcm9tICcuL0V4dGVuZCdcbmltcG9ydCB7IEZvbGRhYmxlMSB9IGZyb20gJy4vRm9sZGFibGUnXG5pbXBvcnQgeyBGb2xkYWJsZVdpdGhJbmRleDEgfSBmcm9tICcuL0ZvbGRhYmxlV2l0aEluZGV4J1xuaW1wb3J0IHsgaWRlbnRpdHksIExhenksIHBpcGUsIFNLIH0gZnJvbSAnLi9mdW5jdGlvbidcbmltcG9ydCB7IGJpbmRUbyBhcyBiaW5kVG9fLCBmbGFwIGFzIGZsYXBfLCBGdW5jdG9yMSB9IGZyb20gJy4vRnVuY3RvcidcbmltcG9ydCB7IEZ1bmN0b3JXaXRoSW5kZXgxIH0gZnJvbSAnLi9GdW5jdG9yV2l0aEluZGV4J1xuaW1wb3J0IHsgSEtUIH0gZnJvbSAnLi9IS1QnXG5pbXBvcnQgKiBhcyBfIGZyb20gJy4vaW50ZXJuYWwnXG5pbXBvcnQgeyBNb25hZDEgfSBmcm9tICcuL01vbmFkJ1xuaW1wb3J0IHsgTm9uRW1wdHlBcnJheSB9IGZyb20gJy4vTm9uRW1wdHlBcnJheSdcbmltcG9ydCB7IE9wdGlvbiB9IGZyb20gJy4vT3B0aW9uJ1xuaW1wb3J0IHsgZ2V0TW9ub2lkLCBPcmQgfSBmcm9tICcuL09yZCdcbmltcG9ydCB7IFBvaW50ZWQxIH0gZnJvbSAnLi9Qb2ludGVkJ1xuaW1wb3J0IHsgUHJlZGljYXRlIH0gZnJvbSAnLi9QcmVkaWNhdGUnXG5pbXBvcnQgeyBSZWFkb25seVJlY29yZCB9IGZyb20gJy4vUmVhZG9ubHlSZWNvcmQnXG5pbXBvcnQgeyBSZWZpbmVtZW50IH0gZnJvbSAnLi9SZWZpbmVtZW50J1xuaW1wb3J0ICogYXMgU2UgZnJvbSAnLi9TZW1pZ3JvdXAnXG5pbXBvcnQgeyBTaG93IH0gZnJvbSAnLi9TaG93J1xuaW1wb3J0IHsgUGlwZWFibGVUcmF2ZXJzZTEsIFRyYXZlcnNhYmxlMSB9IGZyb20gJy4vVHJhdmVyc2FibGUnXG5pbXBvcnQgeyBQaXBlYWJsZVRyYXZlcnNlV2l0aEluZGV4MSwgVHJhdmVyc2FibGVXaXRoSW5kZXgxIH0gZnJvbSAnLi9UcmF2ZXJzYWJsZVdpdGhJbmRleCdcblxuaW1wb3J0IFNlbWlncm91cCA9IFNlLlNlbWlncm91cFxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBtb2RlbFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEBjYXRlZ29yeSBtb2RlbFxuICogQHNpbmNlIDIuNS4wXG4gKi9cbmV4cG9ydCB0eXBlIFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxBPiA9IFJlYWRvbmx5QXJyYXk8QT4gJiB7XG4gIHJlYWRvbmx5IDA6IEFcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gaW50ZXJuYWxcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGNvbnN0IGVtcHR5OiBSZWFkb25seUFycmF5PG5ldmVyPiA9IF8uZW1wdHlSZWFkb25seUFycmF5XG5cbi8qKlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBjb25zdCBpc05vbkVtcHR5OiA8QT4oYXM6IFJlYWRvbmx5QXJyYXk8QT4pID0+IGFzIGlzIFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxBPiA9IF8uaXNOb25FbXB0eVxuXG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgY29uc3QgaXNPdXRPZkJvdW5kID0gPEE+KGk6IG51bWJlciwgYXM6IFJlYWRvbmx5QXJyYXk8QT4pOiBib29sZWFuID0+IGkgPCAwIHx8IGkgPj0gYXMubGVuZ3RoXG5cbi8qKlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBjb25zdCBwcmVwZW5kVyA9IDxCPihoZWFkOiBCKSA9PiA8QT4odGFpbDogUmVhZG9ubHlBcnJheTxBPik6IFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxBIHwgQj4gPT4gW2hlYWQsIC4uLnRhaWxdXG5cbi8qKlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBjb25zdCBwcmVwZW5kOiA8QT4oaGVhZDogQSkgPT4gKHRhaWw6IFJlYWRvbmx5QXJyYXk8QT4pID0+IFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxBPiA9IHByZXBlbmRXXG5cbi8qKlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBjb25zdCBhcHBlbmRXID0gPEI+KGVuZDogQikgPT4gPEE+KGluaXQ6IFJlYWRvbmx5QXJyYXk8QT4pOiBSZWFkb25seU5vbkVtcHR5QXJyYXk8QSB8IEI+ID0+IFsuLi5pbml0LCBlbmRdIGFzIGFueVxuXG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgY29uc3QgYXBwZW5kOiA8QT4oZW5kOiBBKSA9PiAoaW5pdDogUmVhZG9ubHlBcnJheTxBPikgPT4gUmVhZG9ubHlOb25FbXB0eUFycmF5PEE+ID0gYXBwZW5kV1xuXG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgY29uc3QgdW5zYWZlSW5zZXJ0QXQgPSA8QT4oaTogbnVtYmVyLCBhOiBBLCBhczogUmVhZG9ubHlBcnJheTxBPik6IFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxBPiA9PiB7XG4gIGlmIChpc05vbkVtcHR5KGFzKSkge1xuICAgIGNvbnN0IHhzID0gXy5mcm9tUmVhZG9ubHlOb25FbXB0eUFycmF5KGFzKVxuICAgIHhzLnNwbGljZShpLCAwLCBhKVxuICAgIHJldHVybiB4c1xuICB9XG4gIHJldHVybiBbYV1cbn1cblxuLyoqXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGNvbnN0IHVuc2FmZVVwZGF0ZUF0ID0gPEE+KGk6IG51bWJlciwgYTogQSwgYXM6IFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxBPik6IFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxBPiA9PiB7XG4gIGlmIChhc1tpXSA9PT0gYSkge1xuICAgIHJldHVybiBhc1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHhzID0gXy5mcm9tUmVhZG9ubHlOb25FbXB0eUFycmF5KGFzKVxuICAgIHhzW2ldID0gYVxuICAgIHJldHVybiB4c1xuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlIGR1cGxpY2F0ZXMgZnJvbSBhIGBSZWFkb25seU5vbkVtcHR5QXJyYXlgLCBrZWVwaW5nIHRoZSBmaXJzdCBvY2N1cnJlbmNlIG9mIGFuIGVsZW1lbnQuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IHVuaXEgfSBmcm9tICdmcC10cy9SZWFkb25seU5vbkVtcHR5QXJyYXknXG4gKiBpbXBvcnQgKiBhcyBOIGZyb20gJ2ZwLXRzL251bWJlcidcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKHVuaXEoTi5FcSkoWzEsIDIsIDFdKSwgWzEsIDJdKVxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgdW5pcSA9IDxBPihFOiBFcTxBPikgPT4gKGFzOiBSZWFkb25seU5vbkVtcHR5QXJyYXk8QT4pOiBSZWFkb25seU5vbkVtcHR5QXJyYXk8QT4gPT4ge1xuICBpZiAoYXMubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIGFzXG4gIH1cbiAgY29uc3Qgb3V0OiBOb25FbXB0eUFycmF5PEE+ID0gW2hlYWQoYXMpXVxuICBjb25zdCByZXN0ID0gdGFpbChhcylcbiAgZm9yIChjb25zdCBhIG9mIHJlc3QpIHtcbiAgICBpZiAob3V0LmV2ZXJ5KChvKSA9PiAhRS5lcXVhbHMobywgYSkpKSB7XG4gICAgICBvdXQucHVzaChhKVxuICAgIH1cbiAgfVxuICByZXR1cm4gb3V0XG59XG5cbi8qKlxuICogU29ydCB0aGUgZWxlbWVudHMgb2YgYSBgUmVhZG9ubHlOb25FbXB0eUFycmF5YCBpbiBpbmNyZWFzaW5nIG9yZGVyLCB3aGVyZSBlbGVtZW50cyBhcmUgY29tcGFyZWQgdXNpbmcgZmlyc3QgYG9yZHNbMF1gLCB0aGVuIGBvcmRzWzFdYCxcbiAqIGV0Yy4uLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgKiBhcyBSTkVBIGZyb20gJ2ZwLXRzL1JlYWRvbmx5Tm9uRW1wdHlBcnJheSdcbiAqIGltcG9ydCB7IGNvbnRyYW1hcCB9IGZyb20gJ2ZwLXRzL09yZCdcbiAqIGltcG9ydCAqIGFzIFMgZnJvbSAnZnAtdHMvc3RyaW5nJ1xuICogaW1wb3J0ICogYXMgTiBmcm9tICdmcC10cy9udW1iZXInXG4gKiBpbXBvcnQgeyBwaXBlIH0gZnJvbSAnZnAtdHMvZnVuY3Rpb24nXG4gKlxuICogaW50ZXJmYWNlIFBlcnNvbiB7XG4gKiAgIG5hbWU6IHN0cmluZ1xuICogICBhZ2U6IG51bWJlclxuICogfVxuICpcbiAqIGNvbnN0IGJ5TmFtZSA9IHBpcGUoUy5PcmQsIGNvbnRyYW1hcCgocDogUGVyc29uKSA9PiBwLm5hbWUpKVxuICpcbiAqIGNvbnN0IGJ5QWdlID0gcGlwZShOLk9yZCwgY29udHJhbWFwKChwOiBQZXJzb24pID0+IHAuYWdlKSlcbiAqXG4gKiBjb25zdCBzb3J0QnlOYW1lQnlBZ2UgPSBSTkVBLnNvcnRCeShbYnlOYW1lLCBieUFnZV0pXG4gKlxuICogY29uc3QgcGVyc29uczogUk5FQS5SZWFkb25seU5vbkVtcHR5QXJyYXk8UGVyc29uPiA9IFtcbiAqICAgeyBuYW1lOiAnYScsIGFnZTogMSB9LFxuICogICB7IG5hbWU6ICdiJywgYWdlOiAzIH0sXG4gKiAgIHsgbmFtZTogJ2MnLCBhZ2U6IDIgfSxcbiAqICAgeyBuYW1lOiAnYicsIGFnZTogMiB9XG4gKiBdXG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChzb3J0QnlOYW1lQnlBZ2UocGVyc29ucyksIFtcbiAqICAgeyBuYW1lOiAnYScsIGFnZTogMSB9LFxuICogICB7IG5hbWU6ICdiJywgYWdlOiAyIH0sXG4gKiAgIHsgbmFtZTogJ2InLCBhZ2U6IDMgfSxcbiAqICAgeyBuYW1lOiAnYycsIGFnZTogMiB9XG4gKiBdKVxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3Qgc29ydEJ5ID0gPEI+KFxuICBvcmRzOiBSZWFkb25seUFycmF5PE9yZDxCPj5cbik6ICg8QSBleHRlbmRzIEI+KGFzOiBSZWFkb25seU5vbkVtcHR5QXJyYXk8QT4pID0+IFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxBPikgPT4ge1xuICBpZiAoaXNOb25FbXB0eShvcmRzKSkge1xuICAgIGNvbnN0IE0gPSBnZXRNb25vaWQ8Qj4oKVxuICAgIHJldHVybiBzb3J0KG9yZHMucmVkdWNlKE0uY29uY2F0LCBNLmVtcHR5KSlcbiAgfVxuICByZXR1cm4gaWRlbnRpdHlcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHVuaW9uID0gPEE+KFxuICBFOiBFcTxBPlxuKTogKChzZWNvbmQ6IFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxBPikgPT4gKGZpcnN0OiBSZWFkb25seU5vbkVtcHR5QXJyYXk8QT4pID0+IFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxBPikgPT4ge1xuICBjb25zdCB1bmlxRSA9IHVuaXEoRSlcbiAgcmV0dXJuIChzZWNvbmQpID0+IChmaXJzdCkgPT4gdW5pcUUocGlwZShmaXJzdCwgY29uY2F0KHNlY29uZCkpKVxufVxuXG4vKipcbiAqIFJvdGF0ZSBhIGBSZWFkb25seU5vbkVtcHR5QXJyYXlgIGJ5IGBuYCBzdGVwcy5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgcm90YXRlIH0gZnJvbSAnZnAtdHMvUmVhZG9ubHlOb25FbXB0eUFycmF5J1xuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwocm90YXRlKDIpKFsxLCAyLCAzLCA0LCA1XSksIFs0LCA1LCAxLCAyLCAzXSlcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwocm90YXRlKC0yKShbMSwgMiwgMywgNCwgNV0pLCBbMywgNCwgNSwgMSwgMl0pXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCByb3RhdGUgPSAobjogbnVtYmVyKSA9PiA8QT4oYXM6IFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxBPik6IFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxBPiA9PiB7XG4gIGNvbnN0IGxlbiA9IGFzLmxlbmd0aFxuICBjb25zdCBtID0gTWF0aC5yb3VuZChuKSAlIGxlblxuICBpZiAoaXNPdXRPZkJvdW5kKE1hdGguYWJzKG0pLCBhcykgfHwgbSA9PT0gMCkge1xuICAgIHJldHVybiBhc1xuICB9XG4gIGlmIChtIDwgMCkge1xuICAgIGNvbnN0IFtmLCBzXSA9IHNwbGl0QXQoLW0pKGFzKVxuICAgIHJldHVybiBwaXBlKHMsIGNvbmNhdChmKSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcm90YXRlKG0gLSBsZW4pKGFzKVxuICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGNvbnN0cnVjdG9yc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIFJldHVybiBhIGBSZWFkb25seU5vbkVtcHR5QXJyYXlgIGZyb20gYSBgUmVhZG9ubHlBcnJheWAgcmV0dXJuaW5nIGBub25lYCBpZiB0aGUgaW5wdXQgaXMgZW1wdHkuXG4gKlxuICogQGNhdGVnb3J5IGNvbnN0cnVjdG9yc1xuICogQHNpbmNlIDIuNS4wXG4gKi9cbmV4cG9ydCBjb25zdCBmcm9tUmVhZG9ubHlBcnJheSA9IDxBPihhczogUmVhZG9ubHlBcnJheTxBPik6IE9wdGlvbjxSZWFkb25seU5vbkVtcHR5QXJyYXk8QT4+ID0+XG4gIGlzTm9uRW1wdHkoYXMpID8gXy5zb21lKGFzKSA6IF8ubm9uZVxuXG4vKipcbiAqIFJldHVybiBhIGBSZWFkb25seU5vbkVtcHR5QXJyYXlgIG9mIGxlbmd0aCBgbmAgd2l0aCBlbGVtZW50IGBpYCBpbml0aWFsaXplZCB3aXRoIGBmKGkpYC5cbiAqXG4gKiAqKk5vdGUqKi4gYG5gIGlzIG5vcm1hbGl6ZWQgdG8gYSBuYXR1cmFsIG51bWJlci5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgbWFrZUJ5IH0gZnJvbSAnZnAtdHMvUmVhZG9ubHlOb25FbXB0eUFycmF5J1xuICogaW1wb3J0IHsgcGlwZSB9IGZyb20gJ2ZwLXRzL2Z1bmN0aW9uJ1xuICpcbiAqIGNvbnN0IGRvdWJsZSA9IChuOiBudW1iZXIpOiBudW1iZXIgPT4gbiAqIDJcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwocGlwZSg1LCBtYWtlQnkoZG91YmxlKSksIFswLCAyLCA0LCA2LCA4XSlcbiAqXG4gKiBAY2F0ZWdvcnkgY29uc3RydWN0b3JzXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBtYWtlQnkgPSA8QT4oZjogKGk6IG51bWJlcikgPT4gQSkgPT4gKG46IG51bWJlcik6IFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxBPiA9PiB7XG4gIGNvbnN0IGogPSBNYXRoLm1heCgwLCBNYXRoLmZsb29yKG4pKVxuICBjb25zdCBvdXQ6IE5vbkVtcHR5QXJyYXk8QT4gPSBbZigwKV1cbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBqOyBpKyspIHtcbiAgICBvdXQucHVzaChmKGkpKVxuICB9XG4gIHJldHVybiBvdXRcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBgUmVhZG9ubHlOb25FbXB0eUFycmF5YCBjb250YWluaW5nIGEgdmFsdWUgcmVwZWF0ZWQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgdGltZXMuXG4gKlxuICogKipOb3RlKiouIGBuYCBpcyBub3JtYWxpemVkIHRvIGEgbmF0dXJhbCBudW1iZXIuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IHJlcGxpY2F0ZSB9IGZyb20gJ2ZwLXRzL1JlYWRvbmx5Tm9uRW1wdHlBcnJheSdcbiAqIGltcG9ydCB7IHBpcGUgfSBmcm9tICdmcC10cy9mdW5jdGlvbidcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKHBpcGUoMywgcmVwbGljYXRlKCdhJykpLCBbJ2EnLCAnYScsICdhJ10pXG4gKlxuICogQGNhdGVnb3J5IGNvbnN0cnVjdG9yc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgcmVwbGljYXRlID0gPEE+KGE6IEEpOiAoKG46IG51bWJlcikgPT4gUmVhZG9ubHlOb25FbXB0eUFycmF5PEE+KSA9PiBtYWtlQnkoKCkgPT4gYSlcblxuLyoqXG4gKiBDcmVhdGUgYSBgUmVhZG9ubHlOb25FbXB0eUFycmF5YCBjb250YWluaW5nIGEgcmFuZ2Ugb2YgaW50ZWdlcnMsIGluY2x1ZGluZyBib3RoIGVuZHBvaW50cy5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgcmFuZ2UgfSBmcm9tICdmcC10cy9SZWFkb25seU5vbkVtcHR5QXJyYXknXG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChyYW5nZSgxLCA1KSwgWzEsIDIsIDMsIDQsIDVdKVxuICpcbiAqIEBjYXRlZ29yeSBjb25zdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHJhbmdlID0gKHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyKTogUmVhZG9ubHlOb25FbXB0eUFycmF5PG51bWJlcj4gPT5cbiAgc3RhcnQgPD0gZW5kID8gbWFrZUJ5KChpKSA9PiBzdGFydCArIGkpKGVuZCAtIHN0YXJ0ICsgMSkgOiBbc3RhcnRdXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGRlc3RydWN0b3JzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogUmV0dXJuIHRoZSB0dXBsZSBvZiB0aGUgYGhlYWRgIGFuZCB0aGUgYHRhaWxgLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyB1bnByZXBlbmQgfSBmcm9tICdmcC10cy9SZWFkb25seU5vbkVtcHR5QXJyYXknXG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbCh1bnByZXBlbmQoWzEsIDIsIDMsIDRdKSwgWzEsIFsyLCAzLCA0XV0pXG4gKlxuICogQGNhdGVnb3J5IGRlc3RydWN0b3JzXG4gKiBAc2luY2UgMi45LjBcbiAqL1xuZXhwb3J0IGNvbnN0IHVucHJlcGVuZCA9IDxBPihhczogUmVhZG9ubHlOb25FbXB0eUFycmF5PEE+KTogcmVhZG9ubHkgW0EsIFJlYWRvbmx5QXJyYXk8QT5dID0+IFtoZWFkKGFzKSwgdGFpbChhcyldXG5cbi8qKlxuICogUmV0dXJuIHRoZSB0dXBsZSBvZiB0aGUgYGluaXRgIGFuZCB0aGUgYGxhc3RgLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyB1bmFwcGVuZCB9IGZyb20gJ2ZwLXRzL1JlYWRvbmx5Tm9uRW1wdHlBcnJheSdcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKHVuYXBwZW5kKFsxLCAyLCAzLCA0XSksIFtbMSwgMiwgM10sIDRdKVxuICpcbiAqIEBjYXRlZ29yeSBkZXN0cnVjdG9yc1xuICogQHNpbmNlIDIuOS4wXG4gKi9cbmV4cG9ydCBjb25zdCB1bmFwcGVuZCA9IDxBPihhczogUmVhZG9ubHlOb25FbXB0eUFycmF5PEE+KTogcmVhZG9ubHkgW1JlYWRvbmx5QXJyYXk8QT4sIEFdID0+IFtpbml0KGFzKSwgbGFzdChhcyldXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGludGVyb3Bcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW50ZXJvcFxuICogQHNpbmNlIDIuNS4wXG4gKi9cbmV4cG9ydCBjb25zdCBmcm9tQXJyYXkgPSA8QT4oYXM6IEFycmF5PEE+KTogT3B0aW9uPFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxBPj4gPT4gZnJvbVJlYWRvbmx5QXJyYXkoYXMuc2xpY2UoKSlcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gY29tYmluYXRvcnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbmNhdFc8Qj4oXG4gIHNlY29uZDogUmVhZG9ubHlOb25FbXB0eUFycmF5PEI+XG4pOiA8QT4oZmlyc3Q6IFJlYWRvbmx5QXJyYXk8QT4pID0+IFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxBIHwgQj5cbmV4cG9ydCBmdW5jdGlvbiBjb25jYXRXPEI+KFxuICBzZWNvbmQ6IFJlYWRvbmx5QXJyYXk8Qj5cbik6IDxBPihmaXJzdDogUmVhZG9ubHlOb25FbXB0eUFycmF5PEE+KSA9PiBSZWFkb25seU5vbkVtcHR5QXJyYXk8QSB8IEI+XG5leHBvcnQgZnVuY3Rpb24gY29uY2F0VzxCPihzZWNvbmQ6IFJlYWRvbmx5QXJyYXk8Qj4pOiA8QT4oZmlyc3Q6IFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxBPikgPT4gUmVhZG9ubHlBcnJheTxBIHwgQj4ge1xuICByZXR1cm4gPEE+KGZpcnN0OiBSZWFkb25seU5vbkVtcHR5QXJyYXk8QSB8IEI+KSA9PiBmaXJzdC5jb25jYXQoc2Vjb25kKVxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuNS4wXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb25jYXQ8QT4oc2Vjb25kOiBSZWFkb25seU5vbkVtcHR5QXJyYXk8QT4pOiAoZmlyc3Q6IFJlYWRvbmx5QXJyYXk8QT4pID0+IFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxBPlxuZXhwb3J0IGZ1bmN0aW9uIGNvbmNhdDxBPihzZWNvbmQ6IFJlYWRvbmx5QXJyYXk8QT4pOiAoZmlyc3Q6IFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxBPikgPT4gUmVhZG9ubHlOb25FbXB0eUFycmF5PEE+XG4vKiogQGRlcHJlY2F0ZWQgKi9cbmV4cG9ydCBmdW5jdGlvbiBjb25jYXQ8QT4oZmlyc3Q6IFJlYWRvbmx5QXJyYXk8QT4sIHNlY29uZDogUmVhZG9ubHlOb25FbXB0eUFycmF5PEE+KTogUmVhZG9ubHlOb25FbXB0eUFycmF5PEE+XG4vKiogQGRlcHJlY2F0ZWQgKi9cbmV4cG9ydCBmdW5jdGlvbiBjb25jYXQ8QT4oZmlyc3Q6IFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxBPiwgc2Vjb25kOiBSZWFkb25seUFycmF5PEE+KTogUmVhZG9ubHlOb25FbXB0eUFycmF5PEE+XG5leHBvcnQgZnVuY3Rpb24gY29uY2F0PEE+KFxuICB4OiBSZWFkb25seUFycmF5PEE+LFxuICB5PzogUmVhZG9ubHlBcnJheTxBPlxuKTogUmVhZG9ubHlBcnJheTxBPiB8ICgoeTogUmVhZG9ubHlOb25FbXB0eUFycmF5PEE+KSA9PiBSZWFkb25seUFycmF5PEE+KSB7XG4gIHJldHVybiB5ID8geC5jb25jYXQoeSkgOiAoeSkgPT4geS5jb25jYXQoeClcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgY29uc3QgcmV2ZXJzZSA9IDxBPihhczogUmVhZG9ubHlOb25FbXB0eUFycmF5PEE+KTogUmVhZG9ubHlOb25FbXB0eUFycmF5PEE+ID0+XG4gIGFzLmxlbmd0aCA9PT0gMSA/IGFzIDogW2xhc3QoYXMpLCAuLi5hcy5zbGljZSgwLCAtMSkucmV2ZXJzZSgpXVxuXG4vKipcbiAqIEdyb3VwIGVxdWFsLCBjb25zZWN1dGl2ZSBlbGVtZW50cyBvZiBhIGBSZWFkb25seUFycmF5YCBpbnRvIGBSZWFkb25seU5vbkVtcHR5QXJyYXlgcy5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgZ3JvdXAgfSBmcm9tICdmcC10cy9SZWFkb25seU5vbkVtcHR5QXJyYXknXG4gKiBpbXBvcnQgKiBhcyBOIGZyb20gJ2ZwLXRzL251bWJlcidcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKGdyb3VwKE4uRXEpKFsxLCAyLCAxLCAxXSksIFtcbiAqICAgWzFdLFxuICogICBbMl0sXG4gKiAgIFsxLCAxXVxuICogXSlcbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ3JvdXA8Qj4oXG4gIEU6IEVxPEI+XG4pOiB7XG4gIDxBIGV4dGVuZHMgQj4oYXM6IFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxBPik6IFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxSZWFkb25seU5vbkVtcHR5QXJyYXk8QT4+XG4gIDxBIGV4dGVuZHMgQj4oYXM6IFJlYWRvbmx5QXJyYXk8QT4pOiBSZWFkb25seUFycmF5PFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxBPj5cbn1cbmV4cG9ydCBmdW5jdGlvbiBncm91cDxBPihFOiBFcTxBPik6IChhczogUmVhZG9ubHlBcnJheTxBPikgPT4gUmVhZG9ubHlBcnJheTxSZWFkb25seU5vbkVtcHR5QXJyYXk8QT4+IHtcbiAgcmV0dXJuIChhcykgPT4ge1xuICAgIGNvbnN0IGxlbiA9IGFzLmxlbmd0aFxuICAgIGlmIChsZW4gPT09IDApIHtcbiAgICAgIHJldHVybiBlbXB0eVxuICAgIH1cbiAgICBjb25zdCBvdXQ6IEFycmF5PFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxBPj4gPSBbXVxuICAgIGxldCBoZWFkOiBBID0gYXNbMF1cbiAgICBsZXQgbmVhOiBOb25FbXB0eUFycmF5PEE+ID0gW2hlYWRdXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBsZW47IGkrKykge1xuICAgICAgY29uc3QgYSA9IGFzW2ldXG4gICAgICBpZiAoRS5lcXVhbHMoYSwgaGVhZCkpIHtcbiAgICAgICAgbmVhLnB1c2goYSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG91dC5wdXNoKG5lYSlcbiAgICAgICAgaGVhZCA9IGFcbiAgICAgICAgbmVhID0gW2hlYWRdXG4gICAgICB9XG4gICAgfVxuICAgIG91dC5wdXNoKG5lYSlcbiAgICByZXR1cm4gb3V0XG4gIH1cbn1cblxuLyoqXG4gKiBTcGxpdHMgYW4gYXJyYXkgaW50byBzdWItbm9uLWVtcHR5LWFycmF5cyBzdG9yZWQgaW4gYW4gb2JqZWN0LCBiYXNlZCBvbiB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgYSBgc3RyaW5nYC1yZXR1cm5pbmdcbiAqIGZ1bmN0aW9uIG9uIGVhY2ggZWxlbWVudCwgYW5kIGdyb3VwaW5nIHRoZSByZXN1bHRzIGFjY29yZGluZyB0byB2YWx1ZXMgcmV0dXJuZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgZ3JvdXBCeSB9IGZyb20gJ2ZwLXRzL1JlYWRvbmx5Tm9uRW1wdHlBcnJheSdcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKGdyb3VwQnkoKHM6IHN0cmluZykgPT4gU3RyaW5nKHMubGVuZ3RoKSkoWydhJywgJ2InLCAnYWInXSksIHtcbiAqICAgJzEnOiBbJ2EnLCAnYiddLFxuICogICAnMic6IFsnYWInXVxuICogfSlcbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgY29uc3QgZ3JvdXBCeSA9IDxBPihmOiAoYTogQSkgPT4gc3RyaW5nKSA9PiAoXG4gIGFzOiBSZWFkb25seUFycmF5PEE+XG4pOiBSZWFkb25seVJlY29yZDxzdHJpbmcsIFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxBPj4gPT4ge1xuICBjb25zdCBvdXQ6IFJlY29yZDxzdHJpbmcsIE5vbkVtcHR5QXJyYXk8QT4+ID0ge31cbiAgZm9yIChjb25zdCBhIG9mIGFzKSB7XG4gICAgY29uc3QgayA9IGYoYSlcbiAgICBpZiAob3V0Lmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICBvdXRba10ucHVzaChhKVxuICAgIH0gZWxzZSB7XG4gICAgICBvdXRba10gPSBbYV1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG91dFxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuNS4wXG4gKi9cbmV4cG9ydCBjb25zdCBzb3J0ID0gPEI+KE86IE9yZDxCPikgPT4gPEEgZXh0ZW5kcyBCPihhczogUmVhZG9ubHlOb25FbXB0eUFycmF5PEE+KTogUmVhZG9ubHlOb25FbXB0eUFycmF5PEE+ID0+XG4gIGFzLmxlbmd0aCA9PT0gMSA/IGFzIDogKGFzLnNsaWNlKCkuc29ydChPLmNvbXBhcmUpIGFzIGFueSlcblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgY29uc3QgdXBkYXRlQXQgPSA8QT4oaTogbnVtYmVyLCBhOiBBKTogKChhczogUmVhZG9ubHlOb25FbXB0eUFycmF5PEE+KSA9PiBPcHRpb248UmVhZG9ubHlOb25FbXB0eUFycmF5PEE+PikgPT5cbiAgbW9kaWZ5QXQoaSwgKCkgPT4gYSlcblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgY29uc3QgbW9kaWZ5QXQgPSA8QT4oaTogbnVtYmVyLCBmOiAoYTogQSkgPT4gQSkgPT4gKFxuICBhczogUmVhZG9ubHlOb25FbXB0eUFycmF5PEE+XG4pOiBPcHRpb248UmVhZG9ubHlOb25FbXB0eUFycmF5PEE+PiA9PiAoaXNPdXRPZkJvdW5kKGksIGFzKSA/IF8ubm9uZSA6IF8uc29tZSh1bnNhZmVVcGRhdGVBdChpLCBmKGFzW2ldKSwgYXMpKSlcblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjUuMVxuICovXG5leHBvcnQgY29uc3QgemlwV2l0aCA9IDxBLCBCLCBDPihcbiAgYXM6IFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxBPixcbiAgYnM6IFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxCPixcbiAgZjogKGE6IEEsIGI6IEIpID0+IENcbik6IFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxDPiA9PiB7XG4gIGNvbnN0IGNzOiBOb25FbXB0eUFycmF5PEM+ID0gW2YoYXNbMF0sIGJzWzBdKV1cbiAgY29uc3QgbGVuID0gTWF0aC5taW4oYXMubGVuZ3RoLCBicy5sZW5ndGgpXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjc1tpXSA9IGYoYXNbaV0sIGJzW2ldKVxuICB9XG4gIHJldHVybiBjc1xufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuNS4xXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB6aXA8Qj4oXG4gIGJzOiBSZWFkb25seU5vbkVtcHR5QXJyYXk8Qj5cbik6IDxBPihhczogUmVhZG9ubHlOb25FbXB0eUFycmF5PEE+KSA9PiBSZWFkb25seU5vbkVtcHR5QXJyYXk8cmVhZG9ubHkgW0EsIEJdPlxuZXhwb3J0IGZ1bmN0aW9uIHppcDxBLCBCPihcbiAgYXM6IFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxBPixcbiAgYnM6IFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxCPlxuKTogUmVhZG9ubHlOb25FbXB0eUFycmF5PHJlYWRvbmx5IFtBLCBCXT5cbmV4cG9ydCBmdW5jdGlvbiB6aXA8QSwgQj4oXG4gIGFzOiBSZWFkb25seU5vbkVtcHR5QXJyYXk8QT4sXG4gIGJzPzogUmVhZG9ubHlOb25FbXB0eUFycmF5PEI+XG4pOiBSZWFkb25seU5vbkVtcHR5QXJyYXk8cmVhZG9ubHkgW0EsIEJdPiB8ICgoYnM6IFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxCPikgPT4gUmVhZG9ubHlOb25FbXB0eUFycmF5PHJlYWRvbmx5IFtCLCBBXT4pIHtcbiAgaWYgKGJzID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gKGJzKSA9PiB6aXAoYnMsIGFzKVxuICB9XG4gIHJldHVybiB6aXBXaXRoKGFzLCBicywgKGEsIGIpID0+IFthLCBiXSlcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjUuMVxuICovXG5leHBvcnQgY29uc3QgdW56aXAgPSA8QSwgQj4oXG4gIGFiczogUmVhZG9ubHlOb25FbXB0eUFycmF5PHJlYWRvbmx5IFtBLCBCXT5cbik6IHJlYWRvbmx5IFtSZWFkb25seU5vbkVtcHR5QXJyYXk8QT4sIFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxCPl0gPT4ge1xuICBjb25zdCBmYTogTm9uRW1wdHlBcnJheTxBPiA9IFthYnNbMF1bMF1dXG4gIGNvbnN0IGZiOiBOb25FbXB0eUFycmF5PEI+ID0gW2Fic1swXVsxXV1cbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBhYnMubGVuZ3RoOyBpKyspIHtcbiAgICBmYVtpXSA9IGFic1tpXVswXVxuICAgIGZiW2ldID0gYWJzW2ldWzFdXG4gIH1cbiAgcmV0dXJuIFtmYSwgZmJdXG59XG5cbi8qKlxuICogUHJlcGVuZCBhbiBlbGVtZW50IHRvIGV2ZXJ5IG1lbWJlciBvZiBhIGBSZWFkb25seU5vbkVtcHR5QXJyYXlgLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBwcmVwZW5kQWxsIH0gZnJvbSAnZnAtdHMvUmVhZG9ubHlOb25FbXB0eUFycmF5J1xuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwocHJlcGVuZEFsbCg5KShbMSwgMiwgMywgNF0pLCBbOSwgMSwgOSwgMiwgOSwgMywgOSwgNF0pXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBwcmVwZW5kQWxsID0gPEE+KG1pZGRsZTogQSkgPT4gKGFzOiBSZWFkb25seU5vbkVtcHR5QXJyYXk8QT4pOiBSZWFkb25seU5vbkVtcHR5QXJyYXk8QT4gPT4ge1xuICBjb25zdCBvdXQ6IE5vbkVtcHR5QXJyYXk8QT4gPSBbbWlkZGxlLCBhc1swXV1cbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBhcy5sZW5ndGg7IGkrKykge1xuICAgIG91dC5wdXNoKG1pZGRsZSwgYXNbaV0pXG4gIH1cbiAgcmV0dXJuIG91dFxufVxuXG4vKipcbiAqIFBsYWNlcyBhbiBlbGVtZW50IGluIGJldHdlZW4gbWVtYmVycyBvZiBhIGBSZWFkb25seU5vbkVtcHR5QXJyYXlgLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBpbnRlcnNwZXJzZSB9IGZyb20gJ2ZwLXRzL1JlYWRvbmx5Tm9uRW1wdHlBcnJheSdcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKGludGVyc3BlcnNlKDkpKFsxLCAyLCAzLCA0XSksIFsxLCA5LCAyLCA5LCAzLCA5LCA0XSlcbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjkuMFxuICovXG5leHBvcnQgY29uc3QgaW50ZXJzcGVyc2UgPSA8QT4obWlkZGxlOiBBKSA9PiAoYXM6IFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxBPik6IFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxBPiA9PiB7XG4gIGNvbnN0IHJlc3QgPSB0YWlsKGFzKVxuICByZXR1cm4gaXNOb25FbXB0eShyZXN0KSA/IHBpcGUocmVzdCwgcHJlcGVuZEFsbChtaWRkbGUpLCBwcmVwZW5kKGhlYWQoYXMpKSkgOiBhc1xufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgY2hhaW5XaXRoSW5kZXggPSA8QSwgQj4oZjogKGk6IG51bWJlciwgYTogQSkgPT4gUmVhZG9ubHlOb25FbXB0eUFycmF5PEI+KSA9PiAoXG4gIGFzOiBSZWFkb25seU5vbkVtcHR5QXJyYXk8QT5cbik6IFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxCPiA9PiB7XG4gIGNvbnN0IG91dDogTm9uRW1wdHlBcnJheTxCPiA9IF8uZnJvbVJlYWRvbmx5Tm9uRW1wdHlBcnJheShmKDAsIGhlYWQoYXMpKSlcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBhcy5sZW5ndGg7IGkrKykge1xuICAgIG91dC5wdXNoKC4uLmYoaSwgYXNbaV0pKVxuICB9XG4gIHJldHVybiBvdXRcbn1cblxuLyoqXG4gKiBBIHVzZWZ1bCByZWN1cnNpb24gcGF0dGVybiBmb3IgcHJvY2Vzc2luZyBhIGBSZWFkb25seU5vbkVtcHR5QXJyYXlgIHRvIHByb2R1Y2UgYSBuZXcgYFJlYWRvbmx5Tm9uRW1wdHlBcnJheWAsIG9mdGVuIHVzZWQgZm9yIFwiY2hvcHBpbmdcIiB1cCB0aGUgaW5wdXRcbiAqIGBSZWFkb25seU5vbkVtcHR5QXJyYXlgLiBUeXBpY2FsbHkgYGNob3BgIGlzIGNhbGxlZCB3aXRoIHNvbWUgZnVuY3Rpb24gdGhhdCB3aWxsIGNvbnN1bWUgYW4gaW5pdGlhbCBwcmVmaXggb2YgdGhlIGBSZWFkb25seU5vbkVtcHR5QXJyYXlgIGFuZCBwcm9kdWNlIGFcbiAqIHZhbHVlIGFuZCB0aGUgdGFpbCBvZiB0aGUgYFJlYWRvbmx5Tm9uRW1wdHlBcnJheWAuXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBjaG9wID0gPEEsIEI+KGY6IChhczogUmVhZG9ubHlOb25FbXB0eUFycmF5PEE+KSA9PiByZWFkb25seSBbQiwgUmVhZG9ubHlBcnJheTxBPl0pID0+IChcbiAgYXM6IFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxBPlxuKTogUmVhZG9ubHlOb25FbXB0eUFycmF5PEI+ID0+IHtcbiAgY29uc3QgW2IsIHJlc3RdID0gZihhcylcbiAgY29uc3Qgb3V0OiBOb25FbXB0eUFycmF5PEI+ID0gW2JdXG4gIGxldCBuZXh0OiBSZWFkb25seUFycmF5PEE+ID0gcmVzdFxuICB3aGlsZSAoaXNOb25FbXB0eShuZXh0KSkge1xuICAgIGNvbnN0IFtiLCByZXN0XSA9IGYobmV4dClcbiAgICBvdXQucHVzaChiKVxuICAgIG5leHQgPSByZXN0XG4gIH1cbiAgcmV0dXJuIG91dFxufVxuXG4vKipcbiAqIFNwbGl0cyBhIGBSZWFkb25seU5vbkVtcHR5QXJyYXlgIGludG8gdHdvIHBpZWNlcywgdGhlIGZpcnN0IHBpZWNlIGhhcyBtYXggYG5gIGVsZW1lbnRzLlxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3Qgc3BsaXRBdCA9IChuOiBudW1iZXIpID0+IDxBPihcbiAgYXM6IFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxBPlxuKTogcmVhZG9ubHkgW1JlYWRvbmx5Tm9uRW1wdHlBcnJheTxBPiwgUmVhZG9ubHlBcnJheTxBPl0gPT4ge1xuICBjb25zdCBtID0gTWF0aC5tYXgoMSwgbilcbiAgcmV0dXJuIG0gPj0gYXMubGVuZ3RoID8gW2FzLCBlbXB0eV0gOiBbcGlwZShhcy5zbGljZSgxLCBtKSwgcHJlcGVuZChoZWFkKGFzKSkpLCBhcy5zbGljZShtKV1cbn1cblxuLyoqXG4gKiBTcGxpdHMgYSBgUmVhZG9ubHlOb25FbXB0eUFycmF5YCBpbnRvIGxlbmd0aC1gbmAgcGllY2VzLiBUaGUgbGFzdCBwaWVjZSB3aWxsIGJlIHNob3J0ZXIgaWYgYG5gIGRvZXMgbm90IGV2ZW5seSBkaXZpZGUgdGhlIGxlbmd0aCBvZlxuICogdGhlIGBSZWFkb25seU5vbkVtcHR5QXJyYXlgLlxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgY2h1bmtzT2YgPSAoXG4gIG46IG51bWJlclxuKTogKDxBPihhczogUmVhZG9ubHlOb25FbXB0eUFycmF5PEE+KSA9PiBSZWFkb25seU5vbkVtcHR5QXJyYXk8UmVhZG9ubHlOb25FbXB0eUFycmF5PEE+PikgPT4gY2hvcChzcGxpdEF0KG4pKVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBub24tcGlwZWFibGVzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmNvbnN0IF9tYXA6IEZ1bmN0b3IxPFVSST5bJ21hcCddID0gKGZhLCBmKSA9PiBwaXBlKGZhLCBtYXAoZikpXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuY29uc3QgX21hcFdpdGhJbmRleDogRnVuY3RvcldpdGhJbmRleDE8VVJJLCBudW1iZXI+WydtYXBXaXRoSW5kZXgnXSA9IChmYSwgZikgPT4gcGlwZShmYSwgbWFwV2l0aEluZGV4KGYpKVxuY29uc3QgX2FwOiBBcHBseTE8VVJJPlsnYXAnXSA9IChmYWIsIGZhKSA9PiBwaXBlKGZhYiwgYXAoZmEpKVxuY29uc3QgX2NoYWluOiBNb25hZDE8VVJJPlsnY2hhaW4nXSA9IChtYSwgZikgPT4gcGlwZShtYSwgY2hhaW4oZikpXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuY29uc3QgX2V4dGVuZDogRXh0ZW5kMTxVUkk+WydleHRlbmQnXSA9ICh3YSwgZikgPT4gcGlwZSh3YSwgZXh0ZW5kKGYpKVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmNvbnN0IF9yZWR1Y2U6IEZvbGRhYmxlMTxVUkk+WydyZWR1Y2UnXSA9IChmYSwgYiwgZikgPT4gcGlwZShmYSwgcmVkdWNlKGIsIGYpKVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmNvbnN0IF9mb2xkTWFwOiBGb2xkYWJsZTE8VVJJPlsnZm9sZE1hcCddID0gKE0pID0+IHtcbiAgY29uc3QgZm9sZE1hcE0gPSBmb2xkTWFwKE0pXG4gIHJldHVybiAoZmEsIGYpID0+IHBpcGUoZmEsIGZvbGRNYXBNKGYpKVxufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmNvbnN0IF9yZWR1Y2VSaWdodDogRm9sZGFibGUxPFVSST5bJ3JlZHVjZVJpZ2h0J10gPSAoZmEsIGIsIGYpID0+IHBpcGUoZmEsIHJlZHVjZVJpZ2h0KGIsIGYpKVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmNvbnN0IF90cmF2ZXJzZTogVHJhdmVyc2FibGUxPFVSST5bJ3RyYXZlcnNlJ10gPSA8Rj4oXG4gIEY6IEFwcGxpY2F0aXZlSEtUPEY+XG4pOiAoPEEsIEI+KHRhOiBSZWFkb25seU5vbkVtcHR5QXJyYXk8QT4sIGY6IChhOiBBKSA9PiBIS1Q8RiwgQj4pID0+IEhLVDxGLCBSZWFkb25seU5vbkVtcHR5QXJyYXk8Qj4+KSA9PiB7XG4gIGNvbnN0IHRyYXZlcnNlRiA9IHRyYXZlcnNlKEYpXG4gIHJldHVybiAodGEsIGYpID0+IHBpcGUodGEsIHRyYXZlcnNlRihmKSlcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5jb25zdCBfYWx0OiBBbHQxPFVSST5bJ2FsdCddID0gKGZhLCB0aGF0KSA9PiBwaXBlKGZhLCBhbHQodGhhdCkpXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuY29uc3QgX3JlZHVjZVdpdGhJbmRleDogRm9sZGFibGVXaXRoSW5kZXgxPFVSSSwgbnVtYmVyPlsncmVkdWNlV2l0aEluZGV4J10gPSAoZmEsIGIsIGYpID0+XG4gIHBpcGUoZmEsIHJlZHVjZVdpdGhJbmRleChiLCBmKSlcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5jb25zdCBfZm9sZE1hcFdpdGhJbmRleDogRm9sZGFibGVXaXRoSW5kZXgxPFVSSSwgbnVtYmVyPlsnZm9sZE1hcFdpdGhJbmRleCddID0gKE0pID0+IHtcbiAgY29uc3QgZm9sZE1hcFdpdGhJbmRleE0gPSBmb2xkTWFwV2l0aEluZGV4KE0pXG4gIHJldHVybiAoZmEsIGYpID0+IHBpcGUoZmEsIGZvbGRNYXBXaXRoSW5kZXhNKGYpKVxufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmNvbnN0IF9yZWR1Y2VSaWdodFdpdGhJbmRleDogRm9sZGFibGVXaXRoSW5kZXgxPFVSSSwgbnVtYmVyPlsncmVkdWNlUmlnaHRXaXRoSW5kZXgnXSA9IChmYSwgYiwgZikgPT5cbiAgcGlwZShmYSwgcmVkdWNlUmlnaHRXaXRoSW5kZXgoYiwgZikpXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuY29uc3QgX3RyYXZlcnNlV2l0aEluZGV4OiBUcmF2ZXJzYWJsZVdpdGhJbmRleDE8VVJJLCBudW1iZXI+Wyd0cmF2ZXJzZVdpdGhJbmRleCddID0gPEY+KFxuICBGOiBBcHBsaWNhdGl2ZUhLVDxGPlxuKTogKDxBLCBCPih0YTogUmVhZG9ubHlOb25FbXB0eUFycmF5PEE+LCBmOiAoaTogbnVtYmVyLCBhOiBBKSA9PiBIS1Q8RiwgQj4pID0+IEhLVDxGLCBSZWFkb25seU5vbkVtcHR5QXJyYXk8Qj4+KSA9PiB7XG4gIGNvbnN0IHRyYXZlcnNlV2l0aEluZGV4RiA9IHRyYXZlcnNlV2l0aEluZGV4KEYpXG4gIHJldHVybiAodGEsIGYpID0+IHBpcGUodGEsIHRyYXZlcnNlV2l0aEluZGV4RihmKSlcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gdHlwZSBjbGFzcyBtZW1iZXJzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQGNhdGVnb3J5IFBvaW50ZWRcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgY29uc3Qgb2Y6IFBvaW50ZWQxPFVSST5bJ29mJ10gPSBfLnNpbmdsZXRvblxuXG4vKipcbiAqIExlc3Mgc3RyaWN0IHZlcnNpb24gb2YgW2BhbHRgXSgjYWx0KS5cbiAqXG4gKiBAY2F0ZWdvcnkgQWx0XG4gKiBAc2luY2UgMi45LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGFsdFcgPSA8Qj4odGhhdDogTGF6eTxSZWFkb25seU5vbkVtcHR5QXJyYXk8Qj4+KSA9PiA8QT4oXG4gIGFzOiBSZWFkb25seU5vbkVtcHR5QXJyYXk8QT5cbik6IFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxBIHwgQj4gPT4gcGlwZShhcywgY29uY2F0Vyh0aGF0KCkpKVxuXG4vKipcbiAqIElkZW50aWZpZXMgYW4gYXNzb2NpYXRpdmUgb3BlcmF0aW9uIG9uIGEgdHlwZSBjb25zdHJ1Y3Rvci4gSXQgaXMgc2ltaWxhciB0byBgU2VtaWdyb3VwYCwgZXhjZXB0IHRoYXQgaXQgYXBwbGllcyB0b1xuICogdHlwZXMgb2Yga2luZCBgKiAtPiAqYC5cbiAqXG4gKiBAY2F0ZWdvcnkgQWx0XG4gKiBAc2luY2UgMi42LjJcbiAqL1xuZXhwb3J0IGNvbnN0IGFsdDogPEE+KFxuICB0aGF0OiBMYXp5PFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxBPj5cbikgPT4gKGFzOiBSZWFkb25seU5vbkVtcHR5QXJyYXk8QT4pID0+IFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxBPiA9IGFsdFdcblxuLyoqXG4gKiBAY2F0ZWdvcnkgQXBwbHlcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgY29uc3QgYXAgPSA8QT4oXG4gIGFzOiBSZWFkb25seU5vbkVtcHR5QXJyYXk8QT5cbik6ICg8Qj4oZmFiOiBSZWFkb25seU5vbkVtcHR5QXJyYXk8KGE6IEEpID0+IEI+KSA9PiBSZWFkb25seU5vbkVtcHR5QXJyYXk8Qj4pID0+IGNoYWluKChmKSA9PiBwaXBlKGFzLCBtYXAoZikpKVxuXG4vKipcbiAqIENvbXBvc2VzIGNvbXB1dGF0aW9ucyBpbiBzZXF1ZW5jZSwgdXNpbmcgdGhlIHJldHVybiB2YWx1ZSBvZiBvbmUgY29tcHV0YXRpb24gdG8gZGV0ZXJtaW5lIHRoZSBuZXh0IGNvbXB1dGF0aW9uLlxuICpcbiAqIEBjYXRlZ29yeSBNb25hZFxuICogQHNpbmNlIDIuNS4wXG4gKi9cbmV4cG9ydCBjb25zdCBjaGFpbiA9IDxBLCBCPihcbiAgZjogKGE6IEEpID0+IFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxCPlxuKTogKChtYTogUmVhZG9ubHlOb25FbXB0eUFycmF5PEE+KSA9PiBSZWFkb25seU5vbkVtcHR5QXJyYXk8Qj4pID0+IGNoYWluV2l0aEluZGV4KChfLCBhKSA9PiBmKGEpKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBFeHRlbmRcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgY29uc3QgZXh0ZW5kID0gPEEsIEI+KGY6IChhczogUmVhZG9ubHlOb25FbXB0eUFycmF5PEE+KSA9PiBCKSA9PiAoXG4gIGFzOiBSZWFkb25seU5vbkVtcHR5QXJyYXk8QT5cbik6IFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxCPiA9PiB7XG4gIGxldCBuZXh0OiBSZWFkb25seUFycmF5PEE+ID0gdGFpbChhcylcbiAgY29uc3Qgb3V0OiBOb25FbXB0eUFycmF5PEI+ID0gW2YoYXMpXVxuICB3aGlsZSAoaXNOb25FbXB0eShuZXh0KSkge1xuICAgIG91dC5wdXNoKGYobmV4dCkpXG4gICAgbmV4dCA9IHRhaWwobmV4dClcbiAgfVxuICByZXR1cm4gb3V0XG59XG5cbi8qKlxuICogRGVyaXZhYmxlIGZyb20gYEV4dGVuZGAuXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGR1cGxpY2F0ZTogPEE+KG1hOiBSZWFkb25seU5vbkVtcHR5QXJyYXk8QT4pID0+IFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxSZWFkb25seU5vbkVtcHR5QXJyYXk8QT4+ID1cbiAgLyojX19QVVJFX18qL1xuICBleHRlbmQoaWRlbnRpdHkpXG5cbi8qKlxuICogRGVyaXZhYmxlIGZyb20gYENoYWluYC5cbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgY29uc3QgZmxhdHRlbjogPEE+KG1tYTogUmVhZG9ubHlOb25FbXB0eUFycmF5PFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxBPj4pID0+IFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxBPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgY2hhaW4oaWRlbnRpdHkpXG5cbi8qKlxuICogYG1hcGAgY2FuIGJlIHVzZWQgdG8gdHVybiBmdW5jdGlvbnMgYChhOiBBKSA9PiBCYCBpbnRvIGZ1bmN0aW9ucyBgKGZhOiBGPEE+KSA9PiBGPEI+YCB3aG9zZSBhcmd1bWVudCBhbmQgcmV0dXJuIHR5cGVzXG4gKiB1c2UgdGhlIHR5cGUgY29uc3RydWN0b3IgYEZgIHRvIHJlcHJlc2VudCBzb21lIGNvbXB1dGF0aW9uYWwgY29udGV4dC5cbiAqXG4gKiBAY2F0ZWdvcnkgRnVuY3RvclxuICogQHNpbmNlIDIuNS4wXG4gKi9cbmV4cG9ydCBjb25zdCBtYXAgPSA8QSwgQj4oZjogKGE6IEEpID0+IEIpOiAoKGFzOiBSZWFkb25seU5vbkVtcHR5QXJyYXk8QT4pID0+IFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxCPikgPT5cbiAgbWFwV2l0aEluZGV4KChfLCBhKSA9PiBmKGEpKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBGdW5jdG9yV2l0aEluZGV4XG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGNvbnN0IG1hcFdpdGhJbmRleCA9IDxBLCBCPihmOiAoaTogbnVtYmVyLCBhOiBBKSA9PiBCKSA9PiAoXG4gIGFzOiBSZWFkb25seU5vbkVtcHR5QXJyYXk8QT5cbik6IFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxCPiA9PiB7XG4gIGNvbnN0IG91dDogTm9uRW1wdHlBcnJheTxCPiA9IFtmKDAsIGhlYWQoYXMpKV1cbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBhcy5sZW5ndGg7IGkrKykge1xuICAgIG91dC5wdXNoKGYoaSwgYXNbaV0pKVxuICB9XG4gIHJldHVybiBvdXRcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgRm9sZGFibGVcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgY29uc3QgcmVkdWNlID0gPEEsIEI+KGI6IEIsIGY6IChiOiBCLCBhOiBBKSA9PiBCKTogKChhczogUmVhZG9ubHlOb25FbXB0eUFycmF5PEE+KSA9PiBCKSA9PlxuICByZWR1Y2VXaXRoSW5kZXgoYiwgKF8sIGIsIGEpID0+IGYoYiwgYSkpXG5cbi8qKlxuICogKipOb3RlKiouIFRoZSBjb25zdHJhaW50IGlzIHJlbGF4ZWQ6IGEgYFNlbWlncm91cGAgaW5zdGVhZCBvZiBhIGBNb25vaWRgLlxuICpcbiAqIEBjYXRlZ29yeSBGb2xkYWJsZVxuICogQHNpbmNlIDIuNS4wXG4gKi9cbmV4cG9ydCBjb25zdCBmb2xkTWFwID0gPFM+KFM6IFNlbWlncm91cDxTPikgPT4gPEE+KGY6IChhOiBBKSA9PiBTKSA9PiAoYXM6IFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxBPikgPT5cbiAgYXMuc2xpY2UoMSkucmVkdWNlKChzLCBhKSA9PiBTLmNvbmNhdChzLCBmKGEpKSwgZihhc1swXSkpXG5cbi8qKlxuICogQGNhdGVnb3J5IEZvbGRhYmxlXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGNvbnN0IHJlZHVjZVJpZ2h0ID0gPEEsIEI+KGI6IEIsIGY6IChhOiBBLCBiOiBCKSA9PiBCKTogKChhczogUmVhZG9ubHlOb25FbXB0eUFycmF5PEE+KSA9PiBCKSA9PlxuICByZWR1Y2VSaWdodFdpdGhJbmRleChiLCAoXywgYiwgYSkgPT4gZihiLCBhKSlcblxuLyoqXG4gKiBAY2F0ZWdvcnkgRm9sZGFibGVXaXRoSW5kZXhcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgY29uc3QgcmVkdWNlV2l0aEluZGV4ID0gPEEsIEI+KGI6IEIsIGY6IChpOiBudW1iZXIsIGI6IEIsIGE6IEEpID0+IEIpID0+IChhczogUmVhZG9ubHlOb25FbXB0eUFycmF5PEE+KTogQiA9PlxuICBhcy5yZWR1Y2UoKGIsIGEsIGkpID0+IGYoaSwgYiwgYSksIGIpXG5cbi8qKlxuICogKipOb3RlKiouIFRoZSBjb25zdHJhaW50IGlzIHJlbGF4ZWQ6IGEgYFNlbWlncm91cGAgaW5zdGVhZCBvZiBhIGBNb25vaWRgLlxuICpcbiAqIEBjYXRlZ29yeSBGb2xkYWJsZVdpdGhJbmRleFxuICogQHNpbmNlIDIuNS4wXG4gKi9cbmV4cG9ydCBjb25zdCBmb2xkTWFwV2l0aEluZGV4ID0gPFM+KFM6IFNlbWlncm91cDxTPikgPT4gPEE+KGY6IChpOiBudW1iZXIsIGE6IEEpID0+IFMpID0+IChcbiAgYXM6IFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxBPlxuKSA9PiBhcy5zbGljZSgxKS5yZWR1Y2UoKHMsIGEsIGkpID0+IFMuY29uY2F0KHMsIGYoaSArIDEsIGEpKSwgZigwLCBhc1swXSkpXG5cbi8qKlxuICogQGNhdGVnb3J5IEZvbGRhYmxlV2l0aEluZGV4XG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGNvbnN0IHJlZHVjZVJpZ2h0V2l0aEluZGV4ID0gPEEsIEI+KGI6IEIsIGY6IChpOiBudW1iZXIsIGE6IEEsIGI6IEIpID0+IEIpID0+IChcbiAgYXM6IFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxBPlxuKTogQiA9PiBhcy5yZWR1Y2VSaWdodCgoYiwgYSwgaSkgPT4gZihpLCBhLCBiKSwgYilcblxuLyoqXG4gKiBAY2F0ZWdvcnkgVHJhdmVyc2FibGVcbiAqIEBzaW5jZSAyLjYuM1xuICovXG5leHBvcnQgY29uc3QgdHJhdmVyc2U6IFBpcGVhYmxlVHJhdmVyc2UxPFVSST4gPSA8Rj4oXG4gIEY6IEFwcGxpY2F0aXZlSEtUPEY+XG4pOiAoPEEsIEI+KGY6IChhOiBBKSA9PiBIS1Q8RiwgQj4pID0+IChhczogUmVhZG9ubHlOb25FbXB0eUFycmF5PEE+KSA9PiBIS1Q8RiwgUmVhZG9ubHlOb25FbXB0eUFycmF5PEI+PikgPT4ge1xuICBjb25zdCB0cmF2ZXJzZVdpdGhJbmRleEYgPSB0cmF2ZXJzZVdpdGhJbmRleChGKVxuICByZXR1cm4gKGYpID0+IHRyYXZlcnNlV2l0aEluZGV4RigoXywgYSkgPT4gZihhKSlcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgVHJhdmVyc2FibGVcbiAqIEBzaW5jZSAyLjYuM1xuICovXG5leHBvcnQgY29uc3Qgc2VxdWVuY2U6IFRyYXZlcnNhYmxlMTxVUkk+WydzZXF1ZW5jZSddID0gPEY+KFxuICBGOiBBcHBsaWNhdGl2ZUhLVDxGPlxuKTogKDxBPihhczogUmVhZG9ubHlOb25FbXB0eUFycmF5PEhLVDxGLCBBPj4pID0+IEhLVDxGLCBSZWFkb25seU5vbkVtcHR5QXJyYXk8QT4+KSA9PiB0cmF2ZXJzZVdpdGhJbmRleChGKShTSylcblxuLyoqXG4gKiBAY2F0ZWdvcnkgVHJhdmVyc2FibGVXaXRoSW5kZXhcbiAqIEBzaW5jZSAyLjYuM1xuICovXG5leHBvcnQgY29uc3QgdHJhdmVyc2VXaXRoSW5kZXg6IFBpcGVhYmxlVHJhdmVyc2VXaXRoSW5kZXgxPFVSSSwgbnVtYmVyPiA9IDxGPihGOiBBcHBsaWNhdGl2ZUhLVDxGPikgPT4gPEEsIEI+KFxuICBmOiAoaTogbnVtYmVyLCBhOiBBKSA9PiBIS1Q8RiwgQj5cbikgPT4gKGFzOiBSZWFkb25seU5vbkVtcHR5QXJyYXk8QT4pOiBIS1Q8RiwgUmVhZG9ubHlOb25FbXB0eUFycmF5PEI+PiA9PiB7XG4gIGxldCBvdXQ6IEhLVDxGLCBSZWFkb25seU5vbkVtcHR5QXJyYXk8Qj4+ID0gRi5tYXAoZigwLCBoZWFkKGFzKSksIG9mKVxuICBmb3IgKGxldCBpID0gMTsgaSA8IGFzLmxlbmd0aDsgaSsrKSB7XG4gICAgb3V0ID0gRi5hcChcbiAgICAgIEYubWFwKG91dCwgKGJzKSA9PiAoYjogQikgPT4gcGlwZShicywgYXBwZW5kKGIpKSksXG4gICAgICBmKGksIGFzW2ldKVxuICAgIClcbiAgfVxuICByZXR1cm4gb3V0XG59XG5cbi8qKlxuICogQGNhdGVnb3J5IENvbW9uYWRcbiAqIEBzaW5jZSAyLjYuM1xuICovXG5leHBvcnQgY29uc3QgZXh0cmFjdDogQ29tb25hZDE8VVJJPlsnZXh0cmFjdCddID0gXy5oZWFkXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGluc3RhbmNlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgY29uc3QgVVJJID0gJ1JlYWRvbmx5Tm9uRW1wdHlBcnJheSdcblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IHR5cGUgVVJJID0gdHlwZW9mIFVSSVxuXG5kZWNsYXJlIG1vZHVsZSAnLi9IS1QnIHtcbiAgaW50ZXJmYWNlIFVSSXRvS2luZDxBPiB7XG4gICAgcmVhZG9ubHkgW1VSSV06IFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxBPlxuICB9XG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuNS4wXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRTaG93ID0gPEE+KFM6IFNob3c8QT4pOiBTaG93PFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxBPj4gPT4gKHtcbiAgc2hvdzogKGFzKSA9PiBgWyR7YXMubWFwKFMuc2hvdykuam9pbignLCAnKX1dYFxufSlcblxuLyoqXG4gKiBCdWlsZHMgYSBgU2VtaWdyb3VwYCBpbnN0YW5jZSBmb3IgYFJlYWRvbmx5Tm9uRW1wdHlBcnJheWBcbiAqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGdldFNlbWlncm91cCA9IDxBID0gbmV2ZXI+KCk6IFNlbWlncm91cDxSZWFkb25seU5vbkVtcHR5QXJyYXk8QT4+ID0+ICh7XG4gIGNvbmNhdFxufSlcblxuLyoqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgZ2V0RXEgfSBmcm9tICdmcC10cy9SZWFkb25seU5vbkVtcHR5QXJyYXknXG4gKiBpbXBvcnQgKiBhcyBOIGZyb20gJ2ZwLXRzL251bWJlcidcbiAqXG4gKiBjb25zdCBFID0gZ2V0RXEoTi5FcSlcbiAqIGFzc2VydC5zdHJpY3RFcXVhbChFLmVxdWFscyhbMSwgMl0sIFsxLCAyXSksIHRydWUpXG4gKiBhc3NlcnQuc3RyaWN0RXF1YWwoRS5lcXVhbHMoWzEsIDJdLCBbMSwgM10pLCBmYWxzZSlcbiAqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGdldEVxID0gPEE+KEU6IEVxPEE+KTogRXE8UmVhZG9ubHlOb25FbXB0eUFycmF5PEE+PiA9PlxuICBmcm9tRXF1YWxzKCh4cywgeXMpID0+IHhzLmxlbmd0aCA9PT0geXMubGVuZ3RoICYmIHhzLmV2ZXJ5KCh4LCBpKSA9PiBFLmVxdWFscyh4LCB5c1tpXSkpKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgZ2V0VW5pb25TZW1pZ3JvdXAgPSA8QT4oRTogRXE8QT4pOiBTZW1pZ3JvdXA8UmVhZG9ubHlOb25FbXB0eUFycmF5PEE+PiA9PiB7XG4gIGNvbnN0IHVuaW9uRSA9IHVuaW9uKEUpXG4gIHJldHVybiB7XG4gICAgY29uY2F0OiAoZmlyc3QsIHNlY29uZCkgPT4gdW5pb25FKHNlY29uZCkoZmlyc3QpXG4gIH1cbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi43LjBcbiAqL1xuZXhwb3J0IGNvbnN0IEZ1bmN0b3I6IEZ1bmN0b3IxPFVSST4gPSB7XG4gIFVSSSxcbiAgbWFwOiBfbWFwXG59XG5cbi8qKlxuICogRGVyaXZhYmxlIGZyb20gYEZ1bmN0b3JgLlxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgZmxhcCA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZmxhcF8oRnVuY3RvcilcblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBQb2ludGVkOiBQb2ludGVkMTxVUkk+ID0ge1xuICBVUkksXG4gIG9mXG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuNy4wXG4gKi9cbmV4cG9ydCBjb25zdCBGdW5jdG9yV2l0aEluZGV4OiBGdW5jdG9yV2l0aEluZGV4MTxVUkksIG51bWJlcj4gPSB7XG4gIFVSSSxcbiAgbWFwOiBfbWFwLFxuICBtYXBXaXRoSW5kZXg6IF9tYXBXaXRoSW5kZXhcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBBcHBseTogQXBwbHkxPFVSST4gPSB7XG4gIFVSSSxcbiAgbWFwOiBfbWFwLFxuICBhcDogX2FwXG59XG5cbi8qKlxuICogQ29tYmluZSB0d28gZWZmZWN0ZnVsIGFjdGlvbnMsIGtlZXBpbmcgb25seSB0aGUgcmVzdWx0IG9mIHRoZSBmaXJzdC5cbiAqXG4gKiBEZXJpdmFibGUgZnJvbSBgQXBwbHlgLlxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuNS4wXG4gKi9cbmV4cG9ydCBjb25zdCBhcEZpcnN0ID1cbiAgLyojX19QVVJFX18qL1xuICBhcEZpcnN0XyhBcHBseSlcblxuLyoqXG4gKiBDb21iaW5lIHR3byBlZmZlY3RmdWwgYWN0aW9ucywga2VlcGluZyBvbmx5IHRoZSByZXN1bHQgb2YgdGhlIHNlY29uZC5cbiAqXG4gKiBEZXJpdmFibGUgZnJvbSBgQXBwbHlgLlxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuNS4wXG4gKi9cbmV4cG9ydCBjb25zdCBhcFNlY29uZCA9XG4gIC8qI19fUFVSRV9fKi9cbiAgYXBTZWNvbmRfKEFwcGx5KVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjcuMFxuICovXG5leHBvcnQgY29uc3QgQXBwbGljYXRpdmU6IEFwcGxpY2F0aXZlMTxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgYXA6IF9hcCxcbiAgb2Zcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBDaGFpbjogQ2hhaW4xPFVSST4gPSB7XG4gIFVSSSxcbiAgbWFwOiBfbWFwLFxuICBhcDogX2FwLFxuICBjaGFpbjogX2NoYWluXG59XG5cbi8qKlxuICogQ29tcG9zZXMgY29tcHV0YXRpb25zIGluIHNlcXVlbmNlLCB1c2luZyB0aGUgcmV0dXJuIHZhbHVlIG9mIG9uZSBjb21wdXRhdGlvbiB0byBkZXRlcm1pbmUgdGhlIG5leHQgY29tcHV0YXRpb24gYW5kXG4gKiBrZWVwaW5nIG9ubHkgdGhlIHJlc3VsdCBvZiB0aGUgZmlyc3QuXG4gKlxuICogRGVyaXZhYmxlIGZyb20gYENoYWluYC5cbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgY29uc3QgY2hhaW5GaXJzdCA9XG4gIC8qI19fUFVSRV9fKi9cbiAgY2hhaW5GaXJzdF8oQ2hhaW4pXG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuNy4wXG4gKi9cbmV4cG9ydCBjb25zdCBNb25hZDogTW9uYWQxPFVSST4gPSB7XG4gIFVSSSxcbiAgbWFwOiBfbWFwLFxuICBhcDogX2FwLFxuICBvZixcbiAgY2hhaW46IF9jaGFpblxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjcuMFxuICovXG5leHBvcnQgY29uc3QgRm9sZGFibGU6IEZvbGRhYmxlMTxVUkk+ID0ge1xuICBVUkksXG4gIHJlZHVjZTogX3JlZHVjZSxcbiAgZm9sZE1hcDogX2ZvbGRNYXAsXG4gIHJlZHVjZVJpZ2h0OiBfcmVkdWNlUmlnaHRcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi43LjBcbiAqL1xuZXhwb3J0IGNvbnN0IEZvbGRhYmxlV2l0aEluZGV4OiBGb2xkYWJsZVdpdGhJbmRleDE8VVJJLCBudW1iZXI+ID0ge1xuICBVUkksXG4gIHJlZHVjZTogX3JlZHVjZSxcbiAgZm9sZE1hcDogX2ZvbGRNYXAsXG4gIHJlZHVjZVJpZ2h0OiBfcmVkdWNlUmlnaHQsXG4gIHJlZHVjZVdpdGhJbmRleDogX3JlZHVjZVdpdGhJbmRleCxcbiAgZm9sZE1hcFdpdGhJbmRleDogX2ZvbGRNYXBXaXRoSW5kZXgsXG4gIHJlZHVjZVJpZ2h0V2l0aEluZGV4OiBfcmVkdWNlUmlnaHRXaXRoSW5kZXhcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi43LjBcbiAqL1xuZXhwb3J0IGNvbnN0IFRyYXZlcnNhYmxlOiBUcmF2ZXJzYWJsZTE8VVJJPiA9IHtcbiAgVVJJLFxuICBtYXA6IF9tYXAsXG4gIHJlZHVjZTogX3JlZHVjZSxcbiAgZm9sZE1hcDogX2ZvbGRNYXAsXG4gIHJlZHVjZVJpZ2h0OiBfcmVkdWNlUmlnaHQsXG4gIHRyYXZlcnNlOiBfdHJhdmVyc2UsXG4gIHNlcXVlbmNlXG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuNy4wXG4gKi9cbmV4cG9ydCBjb25zdCBUcmF2ZXJzYWJsZVdpdGhJbmRleDogVHJhdmVyc2FibGVXaXRoSW5kZXgxPFVSSSwgbnVtYmVyPiA9IHtcbiAgVVJJLFxuICBtYXA6IF9tYXAsXG4gIG1hcFdpdGhJbmRleDogX21hcFdpdGhJbmRleCxcbiAgcmVkdWNlOiBfcmVkdWNlLFxuICBmb2xkTWFwOiBfZm9sZE1hcCxcbiAgcmVkdWNlUmlnaHQ6IF9yZWR1Y2VSaWdodCxcbiAgdHJhdmVyc2U6IF90cmF2ZXJzZSxcbiAgc2VxdWVuY2UsXG4gIHJlZHVjZVdpdGhJbmRleDogX3JlZHVjZVdpdGhJbmRleCxcbiAgZm9sZE1hcFdpdGhJbmRleDogX2ZvbGRNYXBXaXRoSW5kZXgsXG4gIHJlZHVjZVJpZ2h0V2l0aEluZGV4OiBfcmVkdWNlUmlnaHRXaXRoSW5kZXgsXG4gIHRyYXZlcnNlV2l0aEluZGV4OiBfdHJhdmVyc2VXaXRoSW5kZXhcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi43LjBcbiAqL1xuZXhwb3J0IGNvbnN0IEFsdDogQWx0MTxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgYWx0OiBfYWx0XG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuNy4wXG4gKi9cbmV4cG9ydCBjb25zdCBDb21vbmFkOiBDb21vbmFkMTxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgZXh0ZW5kOiBfZXh0ZW5kLFxuICBleHRyYWN0XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGRvIG5vdGF0aW9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQHNpbmNlIDIuOS4wXG4gKi9cbmV4cG9ydCBjb25zdCBEbzogUmVhZG9ubHlOb25FbXB0eUFycmF5PHt9PiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgb2YoXy5lbXB0eVJlY29yZClcblxuLyoqXG4gKiBAc2luY2UgMi44LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGJpbmRUbyA9XG4gIC8qI19fUFVSRV9fKi9cbiAgYmluZFRvXyhGdW5jdG9yKVxuXG4vKipcbiAqIEBzaW5jZSAyLjguMFxuICovXG5leHBvcnQgY29uc3QgYmluZCA9XG4gIC8qI19fUFVSRV9fKi9cbiAgYmluZF8oQ2hhaW4pXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIHBpcGVhYmxlIHNlcXVlbmNlIFNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBAc2luY2UgMi44LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGFwUyA9XG4gIC8qI19fUFVSRV9fKi9cbiAgYXBTXyhBcHBseSlcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gdXRpbHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGhlYWQ6IDxBPihhczogUmVhZG9ubHlOb25FbXB0eUFycmF5PEE+KSA9PiBBID0gZXh0cmFjdFxuXG4vKipcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgY29uc3QgdGFpbDogPEE+KGFzOiBSZWFkb25seU5vbkVtcHR5QXJyYXk8QT4pID0+IFJlYWRvbmx5QXJyYXk8QT4gPSBfLnRhaWxcblxuLyoqXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGxhc3QgPSA8QT4oYXM6IFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxBPik6IEEgPT4gYXNbYXMubGVuZ3RoIC0gMV1cblxuLyoqXG4gKiBHZXQgYWxsIGJ1dCB0aGUgbGFzdCBlbGVtZW50IG9mIGEgbm9uIGVtcHR5IGFycmF5LCBjcmVhdGluZyBhIG5ldyBhcnJheS5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgaW5pdCB9IGZyb20gJ2ZwLXRzL1JlYWRvbmx5Tm9uRW1wdHlBcnJheSdcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKGluaXQoWzEsIDIsIDNdKSwgWzEsIDJdKVxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChpbml0KFsxXSksIFtdKVxuICpcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgY29uc3QgaW5pdCA9IDxBPihhczogUmVhZG9ubHlOb25FbXB0eUFycmF5PEE+KTogUmVhZG9ubHlBcnJheTxBPiA9PiBhcy5zbGljZSgwLCAtMSlcblxuLyoqXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGNvbnN0IG1pbiA9IDxBPihPOiBPcmQ8QT4pOiAoKGFzOiBSZWFkb25seU5vbkVtcHR5QXJyYXk8QT4pID0+IEEpID0+IHtcbiAgY29uc3QgUyA9IFNlLm1pbihPKVxuICByZXR1cm4gKGFzKSA9PiBhcy5yZWR1Y2UoUy5jb25jYXQpXG59XG5cbi8qKlxuICogQHNpbmNlIDIuNS4wXG4gKi9cbmV4cG9ydCBjb25zdCBtYXggPSA8QT4oTzogT3JkPEE+KTogKChhczogUmVhZG9ubHlOb25FbXB0eUFycmF5PEE+KSA9PiBBKSA9PiB7XG4gIGNvbnN0IFMgPSBTZS5tYXgoTylcbiAgcmV0dXJuIChhcykgPT4gYXMucmVkdWNlKFMuY29uY2F0KVxufVxuXG4vKipcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGNvbmNhdEFsbCA9IDxBPihTOiBTZW1pZ3JvdXA8QT4pID0+IChhczogUmVhZG9ubHlOb25FbXB0eUFycmF5PEE+KTogQSA9PiBhcy5yZWR1Y2UoUy5jb25jYXQpXG5cbi8qKlxuICogQnJlYWsgYSBgUmVhZG9ubHlBcnJheWAgaW50byBpdHMgZmlyc3QgZWxlbWVudCBhbmQgcmVtYWluaW5nIGVsZW1lbnRzLlxuICpcbiAqIEBjYXRlZ29yeSBkZXN0cnVjdG9yc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgbWF0Y2hMZWZ0ID0gPEEsIEI+KGY6IChoZWFkOiBBLCB0YWlsOiBSZWFkb25seUFycmF5PEE+KSA9PiBCKSA9PiAoYXM6IFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxBPik6IEIgPT5cbiAgZihoZWFkKGFzKSwgdGFpbChhcykpXG5cbi8qKlxuICogQnJlYWsgYSBgUmVhZG9ubHlBcnJheWAgaW50byBpdHMgaW5pdGlhbCBlbGVtZW50cyBhbmQgdGhlIGxhc3QgZWxlbWVudC5cbiAqXG4gKiBAY2F0ZWdvcnkgZGVzdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IG1hdGNoUmlnaHQgPSA8QSwgQj4oZjogKGluaXQ6IFJlYWRvbmx5QXJyYXk8QT4sIGxhc3Q6IEEpID0+IEIpID0+IChhczogUmVhZG9ubHlOb25FbXB0eUFycmF5PEE+KTogQiA9PlxuICBmKGluaXQoYXMpLCBsYXN0KGFzKSlcblxuLyoqXG4gKiBBcHBseSBhIGZ1bmN0aW9uIHRvIHRoZSBoZWFkLCBjcmVhdGluZyBhIG5ldyBgUmVhZG9ubHlOb25FbXB0eUFycmF5YC5cbiAqXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBtb2RpZnlIZWFkID0gPEE+KGY6IEVuZG9tb3JwaGlzbTxBPikgPT4gKGFzOiBSZWFkb25seU5vbkVtcHR5QXJyYXk8QT4pOiBSZWFkb25seU5vbkVtcHR5QXJyYXk8QT4gPT4gW1xuICBmKGhlYWQoYXMpKSxcbiAgLi4udGFpbChhcylcbl1cblxuLyoqXG4gKiBDaGFuZ2UgdGhlIGhlYWQsIGNyZWF0aW5nIGEgbmV3IGBSZWFkb25seU5vbkVtcHR5QXJyYXlgLlxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgdXBkYXRlSGVhZCA9IDxBPihhOiBBKTogKChhczogUmVhZG9ubHlOb25FbXB0eUFycmF5PEE+KSA9PiBSZWFkb25seU5vbkVtcHR5QXJyYXk8QT4pID0+IG1vZGlmeUhlYWQoKCkgPT4gYSlcblxuLyoqXG4gKiBBcHBseSBhIGZ1bmN0aW9uIHRvIHRoZSBsYXN0IGVsZW1lbnQsIGNyZWF0aW5nIGEgbmV3IGBSZWFkb25seU5vbkVtcHR5QXJyYXlgLlxuICpcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IG1vZGlmeUxhc3QgPSA8QT4oZjogRW5kb21vcnBoaXNtPEE+KSA9PiAoYXM6IFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxBPik6IFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxBPiA9PlxuICBwaXBlKGluaXQoYXMpLCBhcHBlbmQoZihsYXN0KGFzKSkpKVxuXG4vKipcbiAqIENoYW5nZSB0aGUgbGFzdCBlbGVtZW50LCBjcmVhdGluZyBhIG5ldyBgUmVhZG9ubHlOb25FbXB0eUFycmF5YC5cbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHVwZGF0ZUxhc3QgPSA8QT4oYTogQSk6ICgoYXM6IFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxBPikgPT4gUmVhZG9ubHlOb25FbXB0eUFycmF5PEE+KSA9PiBtb2RpZnlMYXN0KCgpID0+IGEpXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGRlcHJlY2F0ZWRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gdHNsaW50OmRpc2FibGU6IGRlcHJlY2F0aW9uXG5cbi8qKlxuICogVGhpcyBpcyBqdXN0IGBzb3J0YCBmb2xsb3dlZCBieSBgZ3JvdXBgLlxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuNS4wXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ3JvdXBTb3J0PEI+KFxuICBPOiBPcmQ8Qj5cbik6IHtcbiAgPEEgZXh0ZW5kcyBCPihhczogUmVhZG9ubHlOb25FbXB0eUFycmF5PEE+KTogUmVhZG9ubHlOb25FbXB0eUFycmF5PFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxBPj5cbiAgPEEgZXh0ZW5kcyBCPihhczogUmVhZG9ubHlBcnJheTxBPik6IFJlYWRvbmx5QXJyYXk8UmVhZG9ubHlOb25FbXB0eUFycmF5PEE+PlxufVxuZXhwb3J0IGZ1bmN0aW9uIGdyb3VwU29ydDxBPihPOiBPcmQ8QT4pOiAoYXM6IFJlYWRvbmx5QXJyYXk8QT4pID0+IFJlYWRvbmx5QXJyYXk8UmVhZG9ubHlOb25FbXB0eUFycmF5PEE+PiB7XG4gIGNvbnN0IHNvcnRPID0gc29ydChPKVxuICBjb25zdCBncm91cE8gPSBncm91cChPKVxuICByZXR1cm4gKGFzKSA9PiAoaXNOb25FbXB0eShhcykgPyBncm91cE8oc29ydE8oYXMpKSA6IGVtcHR5KVxufVxuXG4vKipcbiAqIFVzZSBbYGZpbHRlcmBdKC4vUmVhZG9ubHlBcnJheS50cy5odG1sI2ZpbHRlcikgaW5zdGVhZC5cbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjUuMFxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlcjxBLCBCIGV4dGVuZHMgQT4oXG4gIHJlZmluZW1lbnQ6IFJlZmluZW1lbnQ8QSwgQj5cbik6IChhczogUmVhZG9ubHlOb25FbXB0eUFycmF5PEE+KSA9PiBPcHRpb248UmVhZG9ubHlOb25FbXB0eUFycmF5PEI+PlxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlcjxBPihcbiAgcHJlZGljYXRlOiBQcmVkaWNhdGU8QT5cbik6IDxCIGV4dGVuZHMgQT4oYnM6IFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxCPikgPT4gT3B0aW9uPFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxCPj5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXI8QT4ocHJlZGljYXRlOiBQcmVkaWNhdGU8QT4pOiAoYXM6IFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxBPikgPT4gT3B0aW9uPFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxBPj5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXI8QT4ocHJlZGljYXRlOiBQcmVkaWNhdGU8QT4pOiAoYXM6IFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxBPikgPT4gT3B0aW9uPFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxBPj4ge1xuICByZXR1cm4gZmlsdGVyV2l0aEluZGV4KChfLCBhKSA9PiBwcmVkaWNhdGUoYSkpXG59XG5cbi8qKlxuICogVXNlIFtgZmlsdGVyV2l0aEluZGV4YF0oLi9SZWFkb25seUFycmF5LnRzLmh0bWwjZmlsdGVyd2l0aGluZGV4KSBpbnN0ZWFkLlxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuNS4wXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgY29uc3QgZmlsdGVyV2l0aEluZGV4ID0gPEE+KHByZWRpY2F0ZTogKGk6IG51bWJlciwgYTogQSkgPT4gYm9vbGVhbikgPT4gKFxuICBhczogUmVhZG9ubHlOb25FbXB0eUFycmF5PEE+XG4pOiBPcHRpb248UmVhZG9ubHlOb25FbXB0eUFycmF5PEE+PiA9PiBmcm9tUmVhZG9ubHlBcnJheShhcy5maWx0ZXIoKGEsIGkpID0+IHByZWRpY2F0ZShpLCBhKSkpXG5cbi8qKlxuICogVXNlIFtgdW5wcmVwZW5kYF0oI3VucHJlcGVuZCkgaW5zdGVhZC5cbiAqXG4gKiBAY2F0ZWdvcnkgZGVzdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBjb25zdCB1bmNvbnM6IDxBPihhczogUmVhZG9ubHlOb25FbXB0eUFycmF5PEE+KSA9PiByZWFkb25seSBbQSwgUmVhZG9ubHlBcnJheTxBPl0gPSB1bnByZXBlbmRcblxuLyoqXG4gKiBVc2UgW2B1bmFwcGVuZGBdKCN1bmFwcGVuZCkgaW5zdGVhZC5cbiAqXG4gKiBAY2F0ZWdvcnkgZGVzdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBjb25zdCB1bnNub2M6IDxBPihhczogUmVhZG9ubHlOb25FbXB0eUFycmF5PEE+KSA9PiByZWFkb25seSBbUmVhZG9ubHlBcnJheTxBPiwgQV0gPSB1bmFwcGVuZFxuXG4vKipcbiAqIFVzZSBbYHByZXBlbmRgXSguL1JlYWRvbmx5QXJyYXkudHMuaHRtbCNwcmVwZW5kKSBpbnN0ZWFkLlxuICpcbiAqIEBjYXRlZ29yeSBjb25zdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjUuMFxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnM8QT4oaGVhZDogQSk6ICh0YWlsOiBSZWFkb25seUFycmF5PEE+KSA9PiBSZWFkb25seU5vbkVtcHR5QXJyYXk8QT5cbi8qKiBAZGVwcmVjYXRlZCAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnM8QT4oaGVhZDogQSwgdGFpbDogUmVhZG9ubHlBcnJheTxBPik6IFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxBPlxuZXhwb3J0IGZ1bmN0aW9uIGNvbnM8QT4oXG4gIGhlYWQ6IEEsXG4gIHRhaWw/OiBSZWFkb25seUFycmF5PEE+XG4pOiBSZWFkb25seU5vbkVtcHR5QXJyYXk8QT4gfCAoKHRhaWw6IFJlYWRvbmx5QXJyYXk8QT4pID0+IFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxBPikge1xuICByZXR1cm4gdGFpbCA9PT0gdW5kZWZpbmVkID8gcHJlcGVuZChoZWFkKSA6IHBpcGUodGFpbCwgcHJlcGVuZChoZWFkKSlcbn1cblxuLyoqXG4gKiBVc2UgW2BhcHBlbmRgXSguL1JlYWRvbmx5QXJyYXkudHMuaHRtbCNhcHBlbmQpIGluc3RlYWQuXG4gKlxuICogQGNhdGVnb3J5IGNvbnN0cnVjdG9yc1xuICogQHNpbmNlIDIuNS4wXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgY29uc3Qgc25vYyA9IDxBPihpbml0OiBSZWFkb25seUFycmF5PEE+LCBlbmQ6IEEpOiBSZWFkb25seU5vbkVtcHR5QXJyYXk8QT4gPT4gcGlwZShpbml0LCBjb25jYXQoW2VuZF0pKVxuXG4vKipcbiAqIFVzZSBbYGluc2VydEF0YF0oLi9SZWFkb25seUFycmF5LnRzLmh0bWwjaW5zZXJ0YXQpIGluc3RlYWQuXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi41LjBcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBjb25zdCBpbnNlcnRBdCA9IDxBPihpOiBudW1iZXIsIGE6IEEpID0+IChhczogUmVhZG9ubHlBcnJheTxBPik6IE9wdGlvbjxSZWFkb25seU5vbkVtcHR5QXJyYXk8QT4+ID0+XG4gIGkgPCAwIHx8IGkgPiBhcy5sZW5ndGggPyBfLm5vbmUgOiBfLnNvbWUodW5zYWZlSW5zZXJ0QXQoaSwgYSwgYXMpKVxuXG4vKipcbiAqIFVzZSBbYHByZXBlbmRBbGxgXSgjcHJlcGVuZGFsbCkgaW5zdGVhZC5cbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjkuMFxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IHByZXBlbmRUb0FsbCA9IHByZXBlbmRBbGxcblxuLyoqXG4gKiBVc2UgW2Bjb25jYXRBbGxgXSgjY29uY2F0YWxsKSBpbnN0ZWFkLlxuICpcbiAqIEBzaW5jZSAyLjUuMFxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IGZvbGQgPSBjb25jYXRBbGxcblxuLyoqXG4gKiBVc2Ugc21hbGwsIHNwZWNpZmljIGluc3RhbmNlcyBpbnN0ZWFkLlxuICpcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjUuMFxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IHJlYWRvbmx5Tm9uRW1wdHlBcnJheTogTW9uYWQxPFVSST4gJlxuICBDb21vbmFkMTxVUkk+ICZcbiAgVHJhdmVyc2FibGVXaXRoSW5kZXgxPFVSSSwgbnVtYmVyPiAmXG4gIEZ1bmN0b3JXaXRoSW5kZXgxPFVSSSwgbnVtYmVyPiAmXG4gIEZvbGRhYmxlV2l0aEluZGV4MTxVUkksIG51bWJlcj4gJlxuICBBbHQxPFVSST4gPSB7XG4gIFVSSSxcbiAgb2YsXG4gIG1hcDogX21hcCxcbiAgbWFwV2l0aEluZGV4OiBfbWFwV2l0aEluZGV4LFxuICBhcDogX2FwLFxuICBjaGFpbjogX2NoYWluLFxuICBleHRlbmQ6IF9leHRlbmQsXG4gIGV4dHJhY3Q6IGV4dHJhY3QsXG4gIHJlZHVjZTogX3JlZHVjZSxcbiAgZm9sZE1hcDogX2ZvbGRNYXAsXG4gIHJlZHVjZVJpZ2h0OiBfcmVkdWNlUmlnaHQsXG4gIHRyYXZlcnNlOiBfdHJhdmVyc2UsXG4gIHNlcXVlbmNlLFxuICByZWR1Y2VXaXRoSW5kZXg6IF9yZWR1Y2VXaXRoSW5kZXgsXG4gIGZvbGRNYXBXaXRoSW5kZXg6IF9mb2xkTWFwV2l0aEluZGV4LFxuICByZWR1Y2VSaWdodFdpdGhJbmRleDogX3JlZHVjZVJpZ2h0V2l0aEluZGV4LFxuICB0cmF2ZXJzZVdpdGhJbmRleDogX3RyYXZlcnNlV2l0aEluZGV4LFxuICBhbHQ6IF9hbHRcbn1cbiJdfQ==