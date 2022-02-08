"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.first = exports.constant = exports.concatAll = void 0;
exports.fold = fold;
exports.tuple = exports.struct = exports.semigroupVoid = exports.semigroupSum = exports.semigroupString = exports.semigroupProduct = exports.semigroupAny = exports.semigroupAll = exports.reverse = exports.min = exports.max = exports.last = exports.intercalate = exports.getTupleSemigroup = exports.getStructSemigroup = exports.getObjectSemigroup = exports.getMeetSemigroup = exports.getLastSemigroup = exports.getJoinSemigroup = exports.getIntercalateSemigroup = exports.getFunctionSemigroup = exports.getFirstSemigroup = exports.getDualSemigroup = void 0;

var _function = require("./function");

var _ = _interopRequireWildcard(require("./internal"));

var M = _interopRequireWildcard(require("./Magma"));

var Or = _interopRequireWildcard(require("./Ord"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * If a type `A` can form a `Semigroup` it has an **associative** binary operation.
 *
 * ```ts
 * interface Semigroup<A> {
 *   readonly concat: (x: A, y: A) => A
 * }
 * ```
 *
 * Associativity means the following equality must hold for any choice of `x`, `y`, and `z`.
 *
 * ```ts
 * concat(x, concat(y, z)) = concat(concat(x, y), z)
 * ```
 *
 * A common example of a semigroup is the type `string` with the operation `+`.
 *
 * ```ts
 * import { Semigroup } from 'fp-ts/Semigroup'
 *
 * const semigroupString: Semigroup<string> = {
 *   concat: (x, y) => x + y
 * }
 *
 * const x = 'x'
 * const y = 'y'
 * const z = 'z'
 *
 * semigroupString.concat(x, y) // 'xy'
 *
 * semigroupString.concat(x, semigroupString.concat(y, z)) // 'xyz'
 *
 * semigroupString.concat(semigroupString.concat(x, y), z) // 'xyz'
 * ```
 *
 * *Adapted from https://typelevel.org/cats*
 *
 * @since 2.0.0
 */
var Ord = Or.Ord;
var Magma = M.Magma; // -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

/**
 * @category type classes
 * @since 2.0.0
 */

// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------

/**
 * Get a semigroup where `concat` will return the minimum, based on the provided order.
 *
 * @example
 * import * as N from 'fp-ts/number'
 * import * as S from 'fp-ts/Semigroup'
 *
 * const S1 = S.min(N.Ord)
 *
 * assert.deepStrictEqual(S1.concat(1, 2), 1)
 *
 * @category constructors
 * @since 2.10.0
 */
var min = function min(O) {
  return {
    concat: Or.min(O)
  };
};
/**
 * Get a semigroup where `concat` will return the maximum, based on the provided order.
 *
 * @example
 * import * as N from 'fp-ts/number'
 * import * as S from 'fp-ts/Semigroup'
 *
 * const S1 = S.max(N.Ord)
 *
 * assert.deepStrictEqual(S1.concat(1, 2), 2)
 *
 * @category constructors
 * @since 2.10.0
 */


exports.min = min;

var max = function max(O) {
  return {
    concat: Or.max(O)
  };
};
/**
 * @category constructors
 * @since 2.10.0
 */


exports.max = max;

var constant = function constant(a) {
  return {
    concat: function concat() {
      return a;
    }
  };
}; // -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------

/**
 * The dual of a `Semigroup`, obtained by swapping the arguments of `concat`.
 *
 * @example
 * import { reverse } from 'fp-ts/Semigroup'
 * import * as S from 'fp-ts/string'
 *
 * assert.deepStrictEqual(reverse(S.Semigroup).concat('a', 'b'), 'ba')
 *
 * @category combinators
 * @since 2.10.0
 */


exports.constant = constant;
var reverse = M.reverse;
/**
 * Given a struct of semigroups returns a semigroup for the struct.
 *
 * @example
 * import { struct } from 'fp-ts/Semigroup'
 * import * as N from 'fp-ts/number'
 *
 * interface Point {
 *   readonly x: number
 *   readonly y: number
 * }
 *
 * const S = struct<Point>({
 *   x: N.SemigroupSum,
 *   y: N.SemigroupSum
 * })
 *
 * assert.deepStrictEqual(S.concat({ x: 1, y: 2 }, { x: 3, y: 4 }), { x: 4, y: 6 })
 *
 * @category combinators
 * @since 2.10.0
 */

exports.reverse = reverse;

var struct = function struct(semigroups) {
  return {
    concat: function concat(first, second) {
      var r = {};

      for (var k in semigroups) {
        if (_.has.call(semigroups, k)) {
          r[k] = semigroups[k].concat(first[k], second[k]);
        }
      }

      return r;
    }
  };
};
/**
 * Given a tuple of semigroups returns a semigroup for the tuple.
 *
 * @example
 * import { tuple } from 'fp-ts/Semigroup'
 * import * as B from 'fp-ts/boolean'
 * import * as N from 'fp-ts/number'
 * import * as S from 'fp-ts/string'
 *
 * const S1 = tuple(S.Semigroup, N.SemigroupSum)
 * assert.deepStrictEqual(S1.concat(['a', 1], ['b', 2]), ['ab', 3])
 *
 * const S2 = tuple(S.Semigroup, N.SemigroupSum, B.SemigroupAll)
 * assert.deepStrictEqual(S2.concat(['a', 1, true], ['b', 2, false]), ['ab', 3, false])
 *
 * @category combinators
 * @since 2.10.0
 */


exports.struct = struct;

var tuple = function tuple() {
  for (var _len = arguments.length, semigroups = new Array(_len), _key = 0; _key < _len; _key++) {
    semigroups[_key] = arguments[_key];
  }

  return {
    concat: function concat(first, second) {
      return semigroups.map(function (s, i) {
        return s.concat(first[i], second[i]);
      });
    }
  };
};
/**
 * Between each pair of elements insert `middle`.
 *
 * @example
 * import { intercalate } from 'fp-ts/Semigroup'
 * import * as S from 'fp-ts/string'
 * import { pipe } from 'fp-ts/function'
 *
 * const S1 = pipe(S.Semigroup, intercalate(' + '))
 *
 * assert.strictEqual(S1.concat('a', 'b'), 'a + b')
 *
 * @category combinators
 * @since 2.10.0
 */


exports.tuple = tuple;

var intercalate = function intercalate(middle) {
  return function (S) {
    return {
      concat: function concat(x, y) {
        return S.concat(x, S.concat(middle, y));
      }
    };
  };
}; // -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------

/**
 * Always return the first argument.
 *
 * @example
 * import * as S from 'fp-ts/Semigroup'
 *
 * assert.deepStrictEqual(S.first<number>().concat(1, 2), 1)
 *
 * @category instances
 * @since 2.10.0
 */


exports.intercalate = intercalate;

var first = function first() {
  return {
    concat: _function.identity
  };
};
/**
 * Always return the last argument.
 *
 * @example
 * import * as S from 'fp-ts/Semigroup'
 *
 * assert.deepStrictEqual(S.last<number>().concat(1, 2), 2)
 *
 * @category instances
 * @since 2.10.0
 */


exports.first = first;

var last = function last() {
  return {
    concat: function concat(_, y) {
      return y;
    }
  };
}; // -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------

/**
 * Given a sequence of `as`, concat them and return the total.
 *
 * If `as` is empty, return the provided `startWith` value.
 *
 * @example
 * import { concatAll } from 'fp-ts/Semigroup'
 * import * as N from 'fp-ts/number'
 *
 * const sum = concatAll(N.SemigroupSum)(0)
 *
 * assert.deepStrictEqual(sum([1, 2, 3]), 6)
 * assert.deepStrictEqual(sum([]), 0)
 *
 * @since 2.10.0
 */


exports.last = last;
var concatAll = M.concatAll; // -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------

/**
 * Use `void` module instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */

exports.concatAll = concatAll;
var semigroupVoid = constant(undefined);
/**
 * Use [`getAssignSemigroup`](./struct.ts.html#getAssignSemigroup) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */

exports.semigroupVoid = semigroupVoid;

var getObjectSemigroup = function getObjectSemigroup() {
  return {
    concat: function concat(first, second) {
      return Object.assign({}, first, second);
    }
  };
};
/**
 * Use [`last`](#last) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */


exports.getObjectSemigroup = getObjectSemigroup;
var getLastSemigroup = last;
/**
 * Use [`first`](#first) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */

exports.getLastSemigroup = getLastSemigroup;
var getFirstSemigroup = first;
/**
 * Use [`tuple`](#tuple) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */

exports.getFirstSemigroup = getFirstSemigroup;
var getTupleSemigroup = tuple;
/**
 * Use [`struct`](#struct) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */

exports.getTupleSemigroup = getTupleSemigroup;
var getStructSemigroup = struct;
/**
 * Use [`reverse`](#reverse) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */

exports.getStructSemigroup = getStructSemigroup;
var getDualSemigroup = reverse;
/**
 * Use [`max`](#max) instead.
 *
 * @category constructors
 * @since 2.0.0
 * @deprecated
 */

exports.getDualSemigroup = getDualSemigroup;
var getJoinSemigroup = max;
/**
 * Use [`min`](#min) instead.
 *
 * @category constructors
 * @since 2.0.0
 * @deprecated
 */

exports.getJoinSemigroup = getJoinSemigroup;
var getMeetSemigroup = min;
/**
 * Use [`intercalate`](#intercalate) instead.
 *
 * @category combinators
 * @since 2.5.0
 * @deprecated
 */

exports.getMeetSemigroup = getMeetSemigroup;
var getIntercalateSemigroup = intercalate;
/**
 * Use [`concatAll`](#concatall) instead.
 *
 * @since 2.0.0
 * @deprecated
 */

exports.getIntercalateSemigroup = getIntercalateSemigroup;

function fold(S) {
  var concatAllS = concatAll(S);
  return function (startWith, as) {
    return as === undefined ? concatAllS(startWith) : concatAllS(startWith)(as);
  };
}
/**
 * Use [`SemigroupAll`](./boolean.ts.html#SemigroupAll) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */


var semigroupAll = {
  concat: function concat(x, y) {
    return x && y;
  }
};
/**
 * Use [`SemigroupAny`](./boolean.ts.html#SemigroupAny) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */

exports.semigroupAll = semigroupAll;
var semigroupAny = {
  concat: function concat(x, y) {
    return x || y;
  }
};
/**
 * Use [`getSemigroup`](./function.ts.html#getSemigroup) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */

exports.semigroupAny = semigroupAny;
var getFunctionSemigroup = _function.getSemigroup;
/**
 * Use [`Semigroup`](./string.ts.html#Semigroup) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */

exports.getFunctionSemigroup = getFunctionSemigroup;
var semigroupString = {
  concat: function concat(x, y) {
    return x + y;
  }
};
/**
 * Use [`SemigroupSum`](./number.ts.html#SemigroupSum) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */

exports.semigroupString = semigroupString;
var semigroupSum = {
  concat: function concat(x, y) {
    return x + y;
  }
};
/**
 * Use [`SemigroupProduct`](./number.ts.html#SemigroupProduct) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */

exports.semigroupSum = semigroupSum;
var semigroupProduct = {
  concat: function concat(x, y) {
    return x * y;
  }
};
exports.semigroupProduct = semigroupProduct;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mcC10cy9TZW1pZ3JvdXAudHMiXSwibmFtZXMiOlsiT3JkIiwiT3IiLCJNYWdtYSIsIk0iLCJtaW4iLCJPIiwiY29uY2F0IiwibWF4IiwiY29uc3RhbnQiLCJhIiwicmV2ZXJzZSIsInN0cnVjdCIsInNlbWlncm91cHMiLCJmaXJzdCIsInNlY29uZCIsInIiLCJrIiwiXyIsImhhcyIsImNhbGwiLCJ0dXBsZSIsIm1hcCIsInMiLCJpIiwiaW50ZXJjYWxhdGUiLCJtaWRkbGUiLCJTIiwieCIsInkiLCJpZGVudGl0eSIsImxhc3QiLCJjb25jYXRBbGwiLCJzZW1pZ3JvdXBWb2lkIiwidW5kZWZpbmVkIiwiZ2V0T2JqZWN0U2VtaWdyb3VwIiwiT2JqZWN0IiwiYXNzaWduIiwiZ2V0TGFzdFNlbWlncm91cCIsImdldEZpcnN0U2VtaWdyb3VwIiwiZ2V0VHVwbGVTZW1pZ3JvdXAiLCJnZXRTdHJ1Y3RTZW1pZ3JvdXAiLCJnZXREdWFsU2VtaWdyb3VwIiwiZ2V0Sm9pblNlbWlncm91cCIsImdldE1lZXRTZW1pZ3JvdXAiLCJnZXRJbnRlcmNhbGF0ZVNlbWlncm91cCIsImZvbGQiLCJjb25jYXRBbGxTIiwic3RhcnRXaXRoIiwiYXMiLCJzZW1pZ3JvdXBBbGwiLCJzZW1pZ3JvdXBBbnkiLCJnZXRGdW5jdGlvblNlbWlncm91cCIsImdldFNlbWlncm91cCIsInNlbWlncm91cFN0cmluZyIsInNlbWlncm91cFN1bSIsInNlbWlncm91cFByb2R1Y3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBdUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUExQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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RUFBRSxnQkFBQ3FCLENBQUQsRUFBSUMsQ0FBSjtBQUFBLFdBQVVELENBQUMsR0FBR0MsQ0FBZDtBQUFBO0FBRHlDLENBQTVDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBJZiBhIHR5cGUgYEFgIGNhbiBmb3JtIGEgYFNlbWlncm91cGAgaXQgaGFzIGFuICoqYXNzb2NpYXRpdmUqKiBiaW5hcnkgb3BlcmF0aW9uLlxuICpcbiAqIGBgYHRzXG4gKiBpbnRlcmZhY2UgU2VtaWdyb3VwPEE+IHtcbiAqICAgcmVhZG9ubHkgY29uY2F0OiAoeDogQSwgeTogQSkgPT4gQVxuICogfVxuICogYGBgXG4gKlxuICogQXNzb2NpYXRpdml0eSBtZWFucyB0aGUgZm9sbG93aW5nIGVxdWFsaXR5IG11c3QgaG9sZCBmb3IgYW55IGNob2ljZSBvZiBgeGAsIGB5YCwgYW5kIGB6YC5cbiAqXG4gKiBgYGB0c1xuICogY29uY2F0KHgsIGNvbmNhdCh5LCB6KSkgPSBjb25jYXQoY29uY2F0KHgsIHkpLCB6KVxuICogYGBgXG4gKlxuICogQSBjb21tb24gZXhhbXBsZSBvZiBhIHNlbWlncm91cCBpcyB0aGUgdHlwZSBgc3RyaW5nYCB3aXRoIHRoZSBvcGVyYXRpb24gYCtgLlxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBTZW1pZ3JvdXAgfSBmcm9tICdmcC10cy9TZW1pZ3JvdXAnXG4gKlxuICogY29uc3Qgc2VtaWdyb3VwU3RyaW5nOiBTZW1pZ3JvdXA8c3RyaW5nPiA9IHtcbiAqICAgY29uY2F0OiAoeCwgeSkgPT4geCArIHlcbiAqIH1cbiAqXG4gKiBjb25zdCB4ID0gJ3gnXG4gKiBjb25zdCB5ID0gJ3knXG4gKiBjb25zdCB6ID0gJ3onXG4gKlxuICogc2VtaWdyb3VwU3RyaW5nLmNvbmNhdCh4LCB5KSAvLyAneHknXG4gKlxuICogc2VtaWdyb3VwU3RyaW5nLmNvbmNhdCh4LCBzZW1pZ3JvdXBTdHJpbmcuY29uY2F0KHksIHopKSAvLyAneHl6J1xuICpcbiAqIHNlbWlncm91cFN0cmluZy5jb25jYXQoc2VtaWdyb3VwU3RyaW5nLmNvbmNhdCh4LCB5KSwgeikgLy8gJ3h5eidcbiAqIGBgYFxuICpcbiAqICpBZGFwdGVkIGZyb20gaHR0cHM6Ly90eXBlbGV2ZWwub3JnL2NhdHMqXG4gKlxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmltcG9ydCB7IGdldFNlbWlncm91cCwgaWRlbnRpdHkgfSBmcm9tICcuL2Z1bmN0aW9uJ1xuaW1wb3J0ICogYXMgXyBmcm9tICcuL2ludGVybmFsJ1xuaW1wb3J0ICogYXMgTSBmcm9tICcuL01hZ21hJ1xuaW1wb3J0ICogYXMgT3IgZnJvbSAnLi9PcmQnXG5pbXBvcnQgeyBSZWFkb25seVJlY29yZCB9IGZyb20gJy4vUmVhZG9ubHlSZWNvcmQnXG5cbmltcG9ydCBPcmQgPSBPci5PcmRcbmltcG9ydCBNYWdtYSA9IE0uTWFnbWFcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gbW9kZWxcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgdHlwZSBjbGFzc2VzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTZW1pZ3JvdXA8QT4gZXh0ZW5kcyBNYWdtYTxBPiB7fVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBjb25zdHJ1Y3RvcnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBHZXQgYSBzZW1pZ3JvdXAgd2hlcmUgYGNvbmNhdGAgd2lsbCByZXR1cm4gdGhlIG1pbmltdW0sIGJhc2VkIG9uIHRoZSBwcm92aWRlZCBvcmRlci5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0ICogYXMgTiBmcm9tICdmcC10cy9udW1iZXInXG4gKiBpbXBvcnQgKiBhcyBTIGZyb20gJ2ZwLXRzL1NlbWlncm91cCdcbiAqXG4gKiBjb25zdCBTMSA9IFMubWluKE4uT3JkKVxuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoUzEuY29uY2F0KDEsIDIpLCAxKVxuICpcbiAqIEBjYXRlZ29yeSBjb25zdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IG1pbiA9IDxBPihPOiBPcmQ8QT4pOiBTZW1pZ3JvdXA8QT4gPT4gKHtcbiAgY29uY2F0OiBPci5taW4oTylcbn0pXG5cbi8qKlxuICogR2V0IGEgc2VtaWdyb3VwIHdoZXJlIGBjb25jYXRgIHdpbGwgcmV0dXJuIHRoZSBtYXhpbXVtLCBiYXNlZCBvbiB0aGUgcHJvdmlkZWQgb3JkZXIuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCAqIGFzIE4gZnJvbSAnZnAtdHMvbnVtYmVyJ1xuICogaW1wb3J0ICogYXMgUyBmcm9tICdmcC10cy9TZW1pZ3JvdXAnXG4gKlxuICogY29uc3QgUzEgPSBTLm1heChOLk9yZClcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKFMxLmNvbmNhdCgxLCAyKSwgMilcbiAqXG4gKiBAY2F0ZWdvcnkgY29uc3RydWN0b3JzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBtYXggPSA8QT4oTzogT3JkPEE+KTogU2VtaWdyb3VwPEE+ID0+ICh7XG4gIGNvbmNhdDogT3IubWF4KE8pXG59KVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb25zdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGNvbnN0YW50ID0gPEE+KGE6IEEpOiBTZW1pZ3JvdXA8QT4gPT4gKHtcbiAgY29uY2F0OiAoKSA9PiBhXG59KVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBjb21iaW5hdG9yc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIFRoZSBkdWFsIG9mIGEgYFNlbWlncm91cGAsIG9idGFpbmVkIGJ5IHN3YXBwaW5nIHRoZSBhcmd1bWVudHMgb2YgYGNvbmNhdGAuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IHJldmVyc2UgfSBmcm9tICdmcC10cy9TZW1pZ3JvdXAnXG4gKiBpbXBvcnQgKiBhcyBTIGZyb20gJ2ZwLXRzL3N0cmluZydcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKHJldmVyc2UoUy5TZW1pZ3JvdXApLmNvbmNhdCgnYScsICdiJyksICdiYScpXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCByZXZlcnNlOiA8QT4oUzogU2VtaWdyb3VwPEE+KSA9PiBTZW1pZ3JvdXA8QT4gPSBNLnJldmVyc2VcblxuLyoqXG4gKiBHaXZlbiBhIHN0cnVjdCBvZiBzZW1pZ3JvdXBzIHJldHVybnMgYSBzZW1pZ3JvdXAgZm9yIHRoZSBzdHJ1Y3QuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IHN0cnVjdCB9IGZyb20gJ2ZwLXRzL1NlbWlncm91cCdcbiAqIGltcG9ydCAqIGFzIE4gZnJvbSAnZnAtdHMvbnVtYmVyJ1xuICpcbiAqIGludGVyZmFjZSBQb2ludCB7XG4gKiAgIHJlYWRvbmx5IHg6IG51bWJlclxuICogICByZWFkb25seSB5OiBudW1iZXJcbiAqIH1cbiAqXG4gKiBjb25zdCBTID0gc3RydWN0PFBvaW50Pih7XG4gKiAgIHg6IE4uU2VtaWdyb3VwU3VtLFxuICogICB5OiBOLlNlbWlncm91cFN1bVxuICogfSlcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKFMuY29uY2F0KHsgeDogMSwgeTogMiB9LCB7IHg6IDMsIHk6IDQgfSksIHsgeDogNCwgeTogNiB9KVxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3Qgc3RydWN0ID0gPEE+KFxuICBzZW1pZ3JvdXBzOiB7IFtLIGluIGtleW9mIEFdOiBTZW1pZ3JvdXA8QVtLXT4gfVxuKTogU2VtaWdyb3VwPHsgcmVhZG9ubHkgW0sgaW4ga2V5b2YgQV06IEFbS10gfT4gPT4gKHtcbiAgY29uY2F0OiAoZmlyc3QsIHNlY29uZCkgPT4ge1xuICAgIGNvbnN0IHI6IEEgPSB7fSBhcyBhbnlcbiAgICBmb3IgKGNvbnN0IGsgaW4gc2VtaWdyb3Vwcykge1xuICAgICAgaWYgKF8uaGFzLmNhbGwoc2VtaWdyb3VwcywgaykpIHtcbiAgICAgICAgcltrXSA9IHNlbWlncm91cHNba10uY29uY2F0KGZpcnN0W2tdLCBzZWNvbmRba10pXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByXG4gIH1cbn0pXG5cbi8qKlxuICogR2l2ZW4gYSB0dXBsZSBvZiBzZW1pZ3JvdXBzIHJldHVybnMgYSBzZW1pZ3JvdXAgZm9yIHRoZSB0dXBsZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgdHVwbGUgfSBmcm9tICdmcC10cy9TZW1pZ3JvdXAnXG4gKiBpbXBvcnQgKiBhcyBCIGZyb20gJ2ZwLXRzL2Jvb2xlYW4nXG4gKiBpbXBvcnQgKiBhcyBOIGZyb20gJ2ZwLXRzL251bWJlcidcbiAqIGltcG9ydCAqIGFzIFMgZnJvbSAnZnAtdHMvc3RyaW5nJ1xuICpcbiAqIGNvbnN0IFMxID0gdHVwbGUoUy5TZW1pZ3JvdXAsIE4uU2VtaWdyb3VwU3VtKVxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChTMS5jb25jYXQoWydhJywgMV0sIFsnYicsIDJdKSwgWydhYicsIDNdKVxuICpcbiAqIGNvbnN0IFMyID0gdHVwbGUoUy5TZW1pZ3JvdXAsIE4uU2VtaWdyb3VwU3VtLCBCLlNlbWlncm91cEFsbClcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoUzIuY29uY2F0KFsnYScsIDEsIHRydWVdLCBbJ2InLCAyLCBmYWxzZV0pLCBbJ2FiJywgMywgZmFsc2VdKVxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgdHVwbGUgPSA8QSBleHRlbmRzIFJlYWRvbmx5QXJyYXk8dW5rbm93bj4+KFxuICAuLi5zZW1pZ3JvdXBzOiB7IFtLIGluIGtleW9mIEFdOiBTZW1pZ3JvdXA8QVtLXT4gfVxuKTogU2VtaWdyb3VwPFJlYWRvbmx5PEE+PiA9PiAoe1xuICBjb25jYXQ6IChmaXJzdCwgc2Vjb25kKSA9PiBzZW1pZ3JvdXBzLm1hcCgocywgaSkgPT4gcy5jb25jYXQoZmlyc3RbaV0sIHNlY29uZFtpXSkpIGFzIGFueVxufSlcblxuLyoqXG4gKiBCZXR3ZWVuIGVhY2ggcGFpciBvZiBlbGVtZW50cyBpbnNlcnQgYG1pZGRsZWAuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGludGVyY2FsYXRlIH0gZnJvbSAnZnAtdHMvU2VtaWdyb3VwJ1xuICogaW1wb3J0ICogYXMgUyBmcm9tICdmcC10cy9zdHJpbmcnXG4gKiBpbXBvcnQgeyBwaXBlIH0gZnJvbSAnZnAtdHMvZnVuY3Rpb24nXG4gKlxuICogY29uc3QgUzEgPSBwaXBlKFMuU2VtaWdyb3VwLCBpbnRlcmNhbGF0ZSgnICsgJykpXG4gKlxuICogYXNzZXJ0LnN0cmljdEVxdWFsKFMxLmNvbmNhdCgnYScsICdiJyksICdhICsgYicpXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBpbnRlcmNhbGF0ZSA9IDxBPihtaWRkbGU6IEEpID0+IChTOiBTZW1pZ3JvdXA8QT4pOiBTZW1pZ3JvdXA8QT4gPT4gKHtcbiAgY29uY2F0OiAoeCwgeSkgPT4gUy5jb25jYXQoeCwgUy5jb25jYXQobWlkZGxlLCB5KSlcbn0pXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGluc3RhbmNlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEFsd2F5cyByZXR1cm4gdGhlIGZpcnN0IGFyZ3VtZW50LlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgKiBhcyBTIGZyb20gJ2ZwLXRzL1NlbWlncm91cCdcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKFMuZmlyc3Q8bnVtYmVyPigpLmNvbmNhdCgxLCAyKSwgMSlcbiAqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBmaXJzdCA9IDxBID0gbmV2ZXI+KCk6IFNlbWlncm91cDxBPiA9PiAoeyBjb25jYXQ6IGlkZW50aXR5IH0pXG5cbi8qKlxuICogQWx3YXlzIHJldHVybiB0aGUgbGFzdCBhcmd1bWVudC5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0ICogYXMgUyBmcm9tICdmcC10cy9TZW1pZ3JvdXAnXG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChTLmxhc3Q8bnVtYmVyPigpLmNvbmNhdCgxLCAyKSwgMilcbiAqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBsYXN0ID0gPEEgPSBuZXZlcj4oKTogU2VtaWdyb3VwPEE+ID0+ICh7IGNvbmNhdDogKF8sIHkpID0+IHkgfSlcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gdXRpbHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBHaXZlbiBhIHNlcXVlbmNlIG9mIGBhc2AsIGNvbmNhdCB0aGVtIGFuZCByZXR1cm4gdGhlIHRvdGFsLlxuICpcbiAqIElmIGBhc2AgaXMgZW1wdHksIHJldHVybiB0aGUgcHJvdmlkZWQgYHN0YXJ0V2l0aGAgdmFsdWUuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGNvbmNhdEFsbCB9IGZyb20gJ2ZwLXRzL1NlbWlncm91cCdcbiAqIGltcG9ydCAqIGFzIE4gZnJvbSAnZnAtdHMvbnVtYmVyJ1xuICpcbiAqIGNvbnN0IHN1bSA9IGNvbmNhdEFsbChOLlNlbWlncm91cFN1bSkoMClcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKHN1bShbMSwgMiwgM10pLCA2KVxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChzdW0oW10pLCAwKVxuICpcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGNvbmNhdEFsbDogPEE+KFM6IFNlbWlncm91cDxBPikgPT4gKHN0YXJ0V2l0aDogQSkgPT4gKGFzOiBSZWFkb25seUFycmF5PEE+KSA9PiBBID0gTS5jb25jYXRBbGxcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gZGVwcmVjYXRlZFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIFVzZSBgdm9pZGAgbW9kdWxlIGluc3RlYWQuXG4gKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMC4wXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgY29uc3Qgc2VtaWdyb3VwVm9pZDogU2VtaWdyb3VwPHZvaWQ+ID0gY29uc3RhbnQ8dm9pZD4odW5kZWZpbmVkKVxuXG4vKipcbiAqIFVzZSBbYGdldEFzc2lnblNlbWlncm91cGBdKC4vc3RydWN0LnRzLmh0bWwjZ2V0QXNzaWduU2VtaWdyb3VwKSBpbnN0ZWFkLlxuICpcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjAuMFxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IGdldE9iamVjdFNlbWlncm91cCA9IDxBIGV4dGVuZHMgb2JqZWN0ID0gbmV2ZXI+KCk6IFNlbWlncm91cDxBPiA9PiAoe1xuICBjb25jYXQ6IChmaXJzdCwgc2Vjb25kKSA9PiBPYmplY3QuYXNzaWduKHt9LCBmaXJzdCwgc2Vjb25kKVxufSlcblxuLyoqXG4gKiBVc2UgW2BsYXN0YF0oI2xhc3QpIGluc3RlYWQuXG4gKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMC4wXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgY29uc3QgZ2V0TGFzdFNlbWlncm91cCA9IGxhc3RcblxuLyoqXG4gKiBVc2UgW2BmaXJzdGBdKCNmaXJzdCkgaW5zdGVhZC5cbiAqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4wLjBcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRGaXJzdFNlbWlncm91cCA9IGZpcnN0XG5cbi8qKlxuICogVXNlIFtgdHVwbGVgXSgjdHVwbGUpIGluc3RlYWQuXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRUdXBsZVNlbWlncm91cDogPFQgZXh0ZW5kcyBSZWFkb25seUFycmF5PFNlbWlncm91cDxhbnk+Pj4oXG4gIC4uLnNlbWlncm91cHM6IFRcbikgPT4gU2VtaWdyb3VwPHsgW0sgaW4ga2V5b2YgVF06IFRbS10gZXh0ZW5kcyBTZW1pZ3JvdXA8aW5mZXIgQT4gPyBBIDogbmV2ZXIgfT4gPSB0dXBsZSBhcyBhbnlcblxuLyoqXG4gKiBVc2UgW2BzdHJ1Y3RgXSgjc3RydWN0KSBpbnN0ZWFkLlxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgY29uc3QgZ2V0U3RydWN0U2VtaWdyb3VwOiA8TyBleHRlbmRzIFJlYWRvbmx5UmVjb3JkPHN0cmluZywgYW55Pj4oXG4gIHNlbWlncm91cHM6IHsgW0sgaW4ga2V5b2YgT106IFNlbWlncm91cDxPW0tdPiB9XG4pID0+IFNlbWlncm91cDxPPiA9IHN0cnVjdFxuXG4vKipcbiAqIFVzZSBbYHJldmVyc2VgXSgjcmV2ZXJzZSkgaW5zdGVhZC5cbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IGdldER1YWxTZW1pZ3JvdXAgPSByZXZlcnNlXG5cbi8qKlxuICogVXNlIFtgbWF4YF0oI21heCkgaW5zdGVhZC5cbiAqXG4gKiBAY2F0ZWdvcnkgY29uc3RydWN0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRKb2luU2VtaWdyb3VwID0gbWF4XG5cbi8qKlxuICogVXNlIFtgbWluYF0oI21pbikgaW5zdGVhZC5cbiAqXG4gKiBAY2F0ZWdvcnkgY29uc3RydWN0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRNZWV0U2VtaWdyb3VwID0gbWluXG5cbi8qKlxuICogVXNlIFtgaW50ZXJjYWxhdGVgXSgjaW50ZXJjYWxhdGUpIGluc3RlYWQuXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi41LjBcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRJbnRlcmNhbGF0ZVNlbWlncm91cCA9IGludGVyY2FsYXRlXG5cbi8qKlxuICogVXNlIFtgY29uY2F0QWxsYF0oI2NvbmNhdGFsbCkgaW5zdGVhZC5cbiAqXG4gKiBAc2luY2UgMi4wLjBcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb2xkPEE+KFxuICBTOiBTZW1pZ3JvdXA8QT5cbik6IHtcbiAgKHN0YXJ0V2l0aDogQSk6IChhczogUmVhZG9ubHlBcnJheTxBPikgPT4gQVxuICAoc3RhcnRXaXRoOiBBLCBhczogUmVhZG9ubHlBcnJheTxBPik6IEFcbn1cbmV4cG9ydCBmdW5jdGlvbiBmb2xkPEE+KFM6IFNlbWlncm91cDxBPik6IChzdGFydFdpdGg6IEEsIGFzPzogUmVhZG9ubHlBcnJheTxBPikgPT4gQSB8ICgoYXM6IFJlYWRvbmx5QXJyYXk8QT4pID0+IEEpIHtcbiAgY29uc3QgY29uY2F0QWxsUyA9IGNvbmNhdEFsbChTKVxuICByZXR1cm4gKHN0YXJ0V2l0aCwgYXM/KSA9PiAoYXMgPT09IHVuZGVmaW5lZCA/IGNvbmNhdEFsbFMoc3RhcnRXaXRoKSA6IGNvbmNhdEFsbFMoc3RhcnRXaXRoKShhcykpXG59XG5cbi8qKlxuICogVXNlIFtgU2VtaWdyb3VwQWxsYF0oLi9ib29sZWFuLnRzLmh0bWwjU2VtaWdyb3VwQWxsKSBpbnN0ZWFkLlxuICpcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjAuMFxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IHNlbWlncm91cEFsbDogU2VtaWdyb3VwPGJvb2xlYW4+ID0ge1xuICBjb25jYXQ6ICh4LCB5KSA9PiB4ICYmIHlcbn1cblxuLyoqXG4gKiBVc2UgW2BTZW1pZ3JvdXBBbnlgXSguL2Jvb2xlYW4udHMuaHRtbCNTZW1pZ3JvdXBBbnkpIGluc3RlYWQuXG4gKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMC4wXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgY29uc3Qgc2VtaWdyb3VwQW55OiBTZW1pZ3JvdXA8Ym9vbGVhbj4gPSB7XG4gIGNvbmNhdDogKHgsIHkpID0+IHggfHwgeVxufVxuXG4vKipcbiAqIFVzZSBbYGdldFNlbWlncm91cGBdKC4vZnVuY3Rpb24udHMuaHRtbCNnZXRTZW1pZ3JvdXApIGluc3RlYWQuXG4gKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMC4wXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgY29uc3QgZ2V0RnVuY3Rpb25TZW1pZ3JvdXA6IDxTPihTOiBTZW1pZ3JvdXA8Uz4pID0+IDxBID0gbmV2ZXI+KCkgPT4gU2VtaWdyb3VwPChhOiBBKSA9PiBTPiA9IGdldFNlbWlncm91cFxuXG4vKipcbiAqIFVzZSBbYFNlbWlncm91cGBdKC4vc3RyaW5nLnRzLmh0bWwjU2VtaWdyb3VwKSBpbnN0ZWFkLlxuICpcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjAuMFxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IHNlbWlncm91cFN0cmluZzogU2VtaWdyb3VwPHN0cmluZz4gPSB7XG4gIGNvbmNhdDogKHgsIHkpID0+IHggKyB5XG59XG5cbi8qKlxuICogVXNlIFtgU2VtaWdyb3VwU3VtYF0oLi9udW1iZXIudHMuaHRtbCNTZW1pZ3JvdXBTdW0pIGluc3RlYWQuXG4gKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMC4wXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgY29uc3Qgc2VtaWdyb3VwU3VtOiBTZW1pZ3JvdXA8bnVtYmVyPiA9IHtcbiAgY29uY2F0OiAoeCwgeSkgPT4geCArIHlcbn1cblxuLyoqXG4gKiBVc2UgW2BTZW1pZ3JvdXBQcm9kdWN0YF0oLi9udW1iZXIudHMuaHRtbCNTZW1pZ3JvdXBQcm9kdWN0KSBpbnN0ZWFkLlxuICpcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjAuMFxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IHNlbWlncm91cFByb2R1Y3Q6IFNlbWlncm91cDxudW1iZXI+ID0ge1xuICBjb25jYXQ6ICh4LCB5KSA9PiB4ICogeVxufVxuIl19