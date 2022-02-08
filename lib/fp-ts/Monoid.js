"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tuple = exports.struct = exports.reverse = exports.monoidVoid = exports.monoidSum = exports.monoidString = exports.monoidProduct = exports.monoidAny = exports.monoidAll = exports.min = exports.max = exports.getTupleMonoid = exports.getStructMonoid = exports.getMeetMonoid = exports.getJoinMonoid = exports.getFunctionMonoid = exports.getEndomorphismMonoid = exports.getDualMonoid = exports.fold = exports.concatAll = void 0;

var _function = require("./function");

var _Endomorphism = require("./Endomorphism");

var _ = _interopRequireWildcard(require("./internal"));

var Se = _interopRequireWildcard(require("./Semigroup"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------

/**
 * Get a monoid where `concat` will return the minimum, based on the provided bounded order.
 *
 * The `empty` value is the `top` value.
 *
 * @example
 * import * as N from 'fp-ts/number'
 * import * as M from 'fp-ts/Monoid'
 *
 * const M1 = M.min(N.Bounded)
 *
 * assert.deepStrictEqual(M1.concat(1, 2), 1)
 *
 * @category constructors
 * @since 2.10.0
 */
var min = function min(B) {
  return {
    concat: Se.min(B).concat,
    empty: B.top
  };
};
/**
 * Get a monoid where `concat` will return the maximum, based on the provided bounded order.
 *
 * The `empty` value is the `bottom` value.
 *
 * @example
 * import * as N from 'fp-ts/number'
 * import * as M from 'fp-ts/Monoid'
 *
 * const M1 = M.max(N.Bounded)
 *
 * assert.deepStrictEqual(M1.concat(1, 2), 2)
 *
 * @category constructors
 * @since 2.10.0
 */


exports.min = min;

var max = function max(B) {
  return {
    concat: Se.max(B).concat,
    empty: B.bottom
  };
}; // -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------

/**
 * The dual of a `Monoid`, obtained by swapping the arguments of `concat`.
 *
 * @example
 * import { reverse } from 'fp-ts/Monoid'
 * import * as S from 'fp-ts/string'
 *
 * assert.deepStrictEqual(reverse(S.Monoid).concat('a', 'b'), 'ba')
 *
 * @category combinators
 * @since 2.10.0
 */


exports.max = max;

var reverse = function reverse(M) {
  return {
    concat: Se.reverse(M).concat,
    empty: M.empty
  };
};
/**
 * Given a struct of monoids returns a monoid for the struct.
 *
 * @example
 * import { struct } from 'fp-ts/Monoid'
 * import * as N from 'fp-ts/number'
 *
 * interface Point {
 *   readonly x: number
 *   readonly y: number
 * }
 *
 * const M = struct<Point>({
 *   x: N.MonoidSum,
 *   y: N.MonoidSum
 * })
 *
 * assert.deepStrictEqual(M.concat({ x: 1, y: 2 }, { x: 3, y: 4 }), { x: 4, y: 6 })
 *
 * @category combinators
 * @since 2.10.0
 */


exports.reverse = reverse;

var struct = function struct(monoids) {
  var empty = {};

  for (var k in monoids) {
    if (_.has.call(monoids, k)) {
      empty[k] = monoids[k].empty;
    }
  }

  return {
    concat: Se.struct(monoids).concat,
    empty: empty
  };
};
/**
 * Given a tuple of monoids returns a monoid for the tuple.
 *
 * @example
 * import { tuple } from 'fp-ts/Monoid'
 * import * as B from 'fp-ts/boolean'
 * import * as N from 'fp-ts/number'
 * import * as S from 'fp-ts/string'
 *
 * const M1 = tuple(S.Monoid, N.MonoidSum)
 * assert.deepStrictEqual(M1.concat(['a', 1], ['b', 2]), ['ab', 3])
 *
 * const M2 = tuple(S.Monoid, N.MonoidSum, B.MonoidAll)
 * assert.deepStrictEqual(M2.concat(['a', 1, true], ['b', 2, false]), ['ab', 3, false])
 *
 * @category combinators
 * @since 2.10.0
 */


exports.struct = struct;

var tuple = function tuple() {
  for (var _len = arguments.length, monoids = new Array(_len), _key = 0; _key < _len; _key++) {
    monoids[_key] = arguments[_key];
  }

  return {
    concat: Se.tuple.apply(Se, _toConsumableArray(monoids)).concat,
    empty: monoids.map(function (m) {
      return m.empty;
    })
  };
}; // -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------

/**
 * Given a sequence of `as`, concat them and return the total.
 *
 * If `as` is empty, return the monoid `empty` value.
 *
 * @example
 * import { concatAll } from 'fp-ts/Monoid'
 * import * as N from 'fp-ts/number'
 *
 * assert.deepStrictEqual(concatAll(N.MonoidSum)([1, 2, 3]), 6)
 * assert.deepStrictEqual(concatAll(N.MonoidSum)([]), 0)
 *
 * @since 2.10.0
 */


exports.tuple = tuple;

var concatAll = function concatAll(M) {
  return Se.concatAll(M)(M.empty);
}; // -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
// tslint:disable: deprecation

/**
 * Use [`Monoid`](./void.ts.html#monoid) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */


exports.concatAll = concatAll;
var monoidVoid = {
  concat: Se.semigroupVoid.concat,
  empty: undefined
};
/**
 * Use [`tuple`](#tuple) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */

exports.monoidVoid = monoidVoid;
var getTupleMonoid = tuple;
/**
 * Use [`struct`](#struct) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */

exports.getTupleMonoid = getTupleMonoid;
var getStructMonoid = struct;
/**
 * Use [`reverse`](#reverse) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */

exports.getStructMonoid = getStructMonoid;
var getDualMonoid = reverse;
/**
 * Use [`max`](#max) instead.
 *
 * @category constructors
 * @since 2.0.0
 * @deprecated
 */

exports.getDualMonoid = getDualMonoid;
var getJoinMonoid = max;
/**
 * Use [`min`](#min) instead.
 *
 * @category constructors
 * @since 2.0.0
 * @deprecated
 */

exports.getJoinMonoid = getJoinMonoid;
var getMeetMonoid = min;
/**
 * Use [`concatAll`](#concatall) instead.
 *
 * @since 2.0.0
 * @deprecated
 */

exports.getMeetMonoid = getMeetMonoid;
var fold = concatAll;
/**
 * Use [`MonoidAll`](./boolean.ts.html#monoidall) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */

exports.fold = fold;
var monoidAll = {
  concat: Se.semigroupAll.concat,
  empty: true
};
/**
 * Use [`MonoidAny`](./boolean.ts.html#monoidany) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */

exports.monoidAll = monoidAll;
var monoidAny = {
  concat: Se.semigroupAny.concat,
  empty: false
};
/**
 * Use [`getMonoid`](./function.ts.html#getmonoid) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */

exports.monoidAny = monoidAny;
var getFunctionMonoid = _function.getMonoid;
/**
 * Use [`getEndomorphismMonoid`](./function.ts.html#getendomorphismmonoid) instead.
 *
 * **Note**. The execution order in [`getEndomorphismMonoid`](./function.ts.html#getendomorphismmonoid) is reversed.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */

exports.getFunctionMonoid = getFunctionMonoid;

var getEndomorphismMonoid = function getEndomorphismMonoid() {
  return reverse((0, _Endomorphism.getMonoid)());
};
/**
 * Use [`Monoid`](./string.ts.html#monoid) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */


exports.getEndomorphismMonoid = getEndomorphismMonoid;
var monoidString = {
  concat: Se.semigroupString.concat,
  empty: ''
};
/**
 * Use [`MonoidSum`](./number.ts.html#monoidsum) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */

exports.monoidString = monoidString;
var monoidSum = {
  concat: Se.semigroupSum.concat,
  empty: 0
};
/**
 * Use [`MonoidProduct`](./number.ts.html#monoidproduct) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */

exports.monoidSum = monoidSum;
var monoidProduct = {
  concat: Se.semigroupProduct.concat,
  empty: 1
};
exports.monoidProduct = monoidProduct;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mcC10cy9Nb25vaWQudHMiXSwibmFtZXMiOlsibWluIiwiQiIsImNvbmNhdCIsIlNlIiwiZW1wdHkiLCJ0b3AiLCJtYXgiLCJib3R0b20iLCJyZXZlcnNlIiwiTSIsInN0cnVjdCIsIm1vbm9pZHMiLCJrIiwiXyIsImhhcyIsImNhbGwiLCJ0dXBsZSIsIm1hcCIsIm0iLCJjb25jYXRBbGwiLCJtb25vaWRWb2lkIiwic2VtaWdyb3VwVm9pZCIsInVuZGVmaW5lZCIsImdldFR1cGxlTW9ub2lkIiwiZ2V0U3RydWN0TW9ub2lkIiwiZ2V0RHVhbE1vbm9pZCIsImdldEpvaW5Nb25vaWQiLCJnZXRNZWV0TW9ub2lkIiwiZm9sZCIsIm1vbm9pZEFsbCIsInNlbWlncm91cEFsbCIsIm1vbm9pZEFueSIsInNlbWlncm91cEFueSIsImdldEZ1bmN0aW9uTW9ub2lkIiwiZ2V0Rk0iLCJnZXRFbmRvbW9ycGhpc21Nb25vaWQiLCJtb25vaWRTdHJpbmciLCJzZW1pZ3JvdXBTdHJpbmciLCJtb25vaWRTdW0iLCJzZW1pZ3JvdXBTdW0iLCJtb25vaWRQcm9kdWN0Iiwic2VtaWdyb3VwUHJvZHVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBbUNBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxDQUFJQyxDQUFKO0FBQUEsU0FBa0M7QUFDbkRDLElBQUFBLE1BQU0sRUFBRUMsRUFBRSxDQUFDSCxHQUFILENBQU9DLENBQVAsRUFBVUMsTUFEaUM7QUFFbkRFLElBQUFBLEtBQUssRUFBRUgsQ0FBQyxDQUFDSTtBQUYwQyxHQUFsQztBQUFBLENBQVo7QUFJUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUc7QUFDMUNsQyxFQUFBQSxNQUFNLEVBQUVDLEVBQUUsQ0FBQ2tDLGVBQUgsQ0FBbUJuQyxNQURlO0FBRTFDRSxFQUFBQSxLQUFLLEVBQUU7QUFGbUMsQ0FBckM7QUFLUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTWtDLFNBQXlCLEdBQUc7QUFDdkNwQyxFQUFBQSxNQUFNLEVBQUVDLEVBQUUsQ0FBQ29DLFlBQUgsQ0FBZ0JyQyxNQURlO0FBRXZDRSxFQUFBQSxLQUFLLEVBQUU7QUFGZ0MsQ0FBbEM7QUFLUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTW9DLGFBQTZCLEdBQUc7QUFDM0N0QyxFQUFBQSxNQUFNLEVBQUVDLEVBQUUsQ0FBQ3NDLGdCQUFILENBQW9CdkMsTUFEZTtBQUUzQ0UsRUFBQUEsS0FBSyxFQUFFO0FBRm9DLENBQXRDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBgTW9ub2lkYCBleHRlbmRzIHRoZSBwb3dlciBvZiBgU2VtaWdyb3VwYCBieSBwcm92aWRpbmcgYW4gYWRkaXRpb25hbCBgZW1wdHlgIHZhbHVlLlxuICpcbiAqIGBgYHRzXG4gKiBpbnRlcmZhY2UgU2VtaWdyb3VwPEE+IHtcbiAqICAgcmVhZG9ubHkgY29uY2F0OiAoeDogQSwgeTogQSkgPT4gQVxuICogfVxuICpcbiAqIGludGVyZmFjZSBNb25vaWQ8QT4gZXh0ZW5kcyBTZW1pZ3JvdXA8QT4ge1xuICogICByZWFkb25seSBlbXB0eTogQVxuICogfVxuICogYGBgXG4gKlxuICogVGhpcyBgZW1wdHlgIHZhbHVlIHNob3VsZCBiZSBhbiBpZGVudGl0eSBmb3IgdGhlIGBjb25jYXRgIG9wZXJhdGlvbiwgd2hpY2ggbWVhbnMgdGhlIGZvbGxvd2luZyBlcXVhbGl0aWVzIGhvbGQgZm9yIGFueSBjaG9pY2Ugb2YgYHhgLlxuICpcbiAqIGBgYHRzXG4gKiBjb25jYXQoeCwgZW1wdHkpID0gY29uY2F0KGVtcHR5LCB4KSA9IHhcbiAqIGBgYFxuICpcbiAqIE1hbnkgdHlwZXMgdGhhdCBmb3JtIGEgYFNlbWlncm91cGAgYWxzbyBmb3JtIGEgYE1vbm9pZGAsIHN1Y2ggYXMgYG51bWJlcmBzICh3aXRoIGAwYCkgYW5kIGBzdHJpbmdgcyAod2l0aCBgJydgKS5cbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgTW9ub2lkIH0gZnJvbSAnZnAtdHMvTW9ub2lkJ1xuICpcbiAqIGNvbnN0IG1vbm9pZFN0cmluZzogTW9ub2lkPHN0cmluZz4gPSB7XG4gKiAgIGNvbmNhdDogKHgsIHkpID0+IHggKyB5LFxuICogICBlbXB0eTogJydcbiAqIH1cbiAqIGBgYFxuICpcbiAqICpBZGFwdGVkIGZyb20gaHR0cHM6Ly90eXBlbGV2ZWwub3JnL2NhdHMqXG4gKlxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmltcG9ydCB7IEJvdW5kZWQgfSBmcm9tICcuL0JvdW5kZWQnXG5pbXBvcnQgeyBnZXRNb25vaWQgYXMgZ2V0Rk0gfSBmcm9tICcuL2Z1bmN0aW9uJ1xuaW1wb3J0IHsgRW5kb21vcnBoaXNtLCBnZXRNb25vaWQgYXMgZ2V0RU0gfSBmcm9tICcuL0VuZG9tb3JwaGlzbSdcbmltcG9ydCAqIGFzIF8gZnJvbSAnLi9pbnRlcm5hbCdcbmltcG9ydCB7IFJlYWRvbmx5UmVjb3JkIH0gZnJvbSAnLi9SZWFkb25seVJlY29yZCdcbmltcG9ydCAqIGFzIFNlIGZyb20gJy4vU2VtaWdyb3VwJ1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBtb2RlbFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEBjYXRlZ29yeSB0eXBlIGNsYXNzZXNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE1vbm9pZDxBPiBleHRlbmRzIFNlLlNlbWlncm91cDxBPiB7XG4gIHJlYWRvbmx5IGVtcHR5OiBBXG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGNvbnN0cnVjdG9yc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEdldCBhIG1vbm9pZCB3aGVyZSBgY29uY2F0YCB3aWxsIHJldHVybiB0aGUgbWluaW11bSwgYmFzZWQgb24gdGhlIHByb3ZpZGVkIGJvdW5kZWQgb3JkZXIuXG4gKlxuICogVGhlIGBlbXB0eWAgdmFsdWUgaXMgdGhlIGB0b3BgIHZhbHVlLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgKiBhcyBOIGZyb20gJ2ZwLXRzL251bWJlcidcbiAqIGltcG9ydCAqIGFzIE0gZnJvbSAnZnAtdHMvTW9ub2lkJ1xuICpcbiAqIGNvbnN0IE0xID0gTS5taW4oTi5Cb3VuZGVkKVxuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoTTEuY29uY2F0KDEsIDIpLCAxKVxuICpcbiAqIEBjYXRlZ29yeSBjb25zdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IG1pbiA9IDxBPihCOiBCb3VuZGVkPEE+KTogTW9ub2lkPEE+ID0+ICh7XG4gIGNvbmNhdDogU2UubWluKEIpLmNvbmNhdCxcbiAgZW1wdHk6IEIudG9wXG59KVxuLyoqXG4gKiBHZXQgYSBtb25vaWQgd2hlcmUgYGNvbmNhdGAgd2lsbCByZXR1cm4gdGhlIG1heGltdW0sIGJhc2VkIG9uIHRoZSBwcm92aWRlZCBib3VuZGVkIG9yZGVyLlxuICpcbiAqIFRoZSBgZW1wdHlgIHZhbHVlIGlzIHRoZSBgYm90dG9tYCB2YWx1ZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0ICogYXMgTiBmcm9tICdmcC10cy9udW1iZXInXG4gKiBpbXBvcnQgKiBhcyBNIGZyb20gJ2ZwLXRzL01vbm9pZCdcbiAqXG4gKiBjb25zdCBNMSA9IE0ubWF4KE4uQm91bmRlZClcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKE0xLmNvbmNhdCgxLCAyKSwgMilcbiAqXG4gKiBAY2F0ZWdvcnkgY29uc3RydWN0b3JzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBtYXggPSA8QT4oQjogQm91bmRlZDxBPik6IE1vbm9pZDxBPiA9PiAoe1xuICBjb25jYXQ6IFNlLm1heChCKS5jb25jYXQsXG4gIGVtcHR5OiBCLmJvdHRvbVxufSlcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gY29tYmluYXRvcnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBUaGUgZHVhbCBvZiBhIGBNb25vaWRgLCBvYnRhaW5lZCBieSBzd2FwcGluZyB0aGUgYXJndW1lbnRzIG9mIGBjb25jYXRgLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyByZXZlcnNlIH0gZnJvbSAnZnAtdHMvTW9ub2lkJ1xuICogaW1wb3J0ICogYXMgUyBmcm9tICdmcC10cy9zdHJpbmcnXG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChyZXZlcnNlKFMuTW9ub2lkKS5jb25jYXQoJ2EnLCAnYicpLCAnYmEnKVxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgcmV2ZXJzZSA9IDxBPihNOiBNb25vaWQ8QT4pOiBNb25vaWQ8QT4gPT4gKHtcbiAgY29uY2F0OiBTZS5yZXZlcnNlKE0pLmNvbmNhdCxcbiAgZW1wdHk6IE0uZW1wdHlcbn0pXG5cbi8qKlxuICogR2l2ZW4gYSBzdHJ1Y3Qgb2YgbW9ub2lkcyByZXR1cm5zIGEgbW9ub2lkIGZvciB0aGUgc3RydWN0LlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBzdHJ1Y3QgfSBmcm9tICdmcC10cy9Nb25vaWQnXG4gKiBpbXBvcnQgKiBhcyBOIGZyb20gJ2ZwLXRzL251bWJlcidcbiAqXG4gKiBpbnRlcmZhY2UgUG9pbnQge1xuICogICByZWFkb25seSB4OiBudW1iZXJcbiAqICAgcmVhZG9ubHkgeTogbnVtYmVyXG4gKiB9XG4gKlxuICogY29uc3QgTSA9IHN0cnVjdDxQb2ludD4oe1xuICogICB4OiBOLk1vbm9pZFN1bSxcbiAqICAgeTogTi5Nb25vaWRTdW1cbiAqIH0pXG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChNLmNvbmNhdCh7IHg6IDEsIHk6IDIgfSwgeyB4OiAzLCB5OiA0IH0pLCB7IHg6IDQsIHk6IDYgfSlcbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHN0cnVjdCA9IDxBPihtb25vaWRzOiB7IFtLIGluIGtleW9mIEFdOiBNb25vaWQ8QVtLXT4gfSk6IE1vbm9pZDx7IHJlYWRvbmx5IFtLIGluIGtleW9mIEFdOiBBW0tdIH0+ID0+IHtcbiAgY29uc3QgZW1wdHk6IEEgPSB7fSBhcyBhbnlcbiAgZm9yIChjb25zdCBrIGluIG1vbm9pZHMpIHtcbiAgICBpZiAoXy5oYXMuY2FsbChtb25vaWRzLCBrKSkge1xuICAgICAgZW1wdHlba10gPSBtb25vaWRzW2tdLmVtcHR5XG4gICAgfVxuICB9XG4gIHJldHVybiB7XG4gICAgY29uY2F0OiBTZS5zdHJ1Y3QobW9ub2lkcykuY29uY2F0LFxuICAgIGVtcHR5XG4gIH1cbn1cblxuLyoqXG4gKiBHaXZlbiBhIHR1cGxlIG9mIG1vbm9pZHMgcmV0dXJucyBhIG1vbm9pZCBmb3IgdGhlIHR1cGxlLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyB0dXBsZSB9IGZyb20gJ2ZwLXRzL01vbm9pZCdcbiAqIGltcG9ydCAqIGFzIEIgZnJvbSAnZnAtdHMvYm9vbGVhbidcbiAqIGltcG9ydCAqIGFzIE4gZnJvbSAnZnAtdHMvbnVtYmVyJ1xuICogaW1wb3J0ICogYXMgUyBmcm9tICdmcC10cy9zdHJpbmcnXG4gKlxuICogY29uc3QgTTEgPSB0dXBsZShTLk1vbm9pZCwgTi5Nb25vaWRTdW0pXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKE0xLmNvbmNhdChbJ2EnLCAxXSwgWydiJywgMl0pLCBbJ2FiJywgM10pXG4gKlxuICogY29uc3QgTTIgPSB0dXBsZShTLk1vbm9pZCwgTi5Nb25vaWRTdW0sIEIuTW9ub2lkQWxsKVxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChNMi5jb25jYXQoWydhJywgMSwgdHJ1ZV0sIFsnYicsIDIsIGZhbHNlXSksIFsnYWInLCAzLCBmYWxzZV0pXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCB0dXBsZSA9IDxBIGV4dGVuZHMgUmVhZG9ubHlBcnJheTx1bmtub3duPj4oXG4gIC4uLm1vbm9pZHM6IHsgW0sgaW4ga2V5b2YgQV06IE1vbm9pZDxBW0tdPiB9XG4pOiBNb25vaWQ8UmVhZG9ubHk8QT4+ID0+XG4gICh7XG4gICAgY29uY2F0OiBTZS50dXBsZSguLi4obW9ub2lkcyBhcyBhbnkpKS5jb25jYXQsXG4gICAgZW1wdHk6IG1vbm9pZHMubWFwKChtKSA9PiBtLmVtcHR5KVxuICB9IGFzIGFueSlcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gdXRpbHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBHaXZlbiBhIHNlcXVlbmNlIG9mIGBhc2AsIGNvbmNhdCB0aGVtIGFuZCByZXR1cm4gdGhlIHRvdGFsLlxuICpcbiAqIElmIGBhc2AgaXMgZW1wdHksIHJldHVybiB0aGUgbW9ub2lkIGBlbXB0eWAgdmFsdWUuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGNvbmNhdEFsbCB9IGZyb20gJ2ZwLXRzL01vbm9pZCdcbiAqIGltcG9ydCAqIGFzIE4gZnJvbSAnZnAtdHMvbnVtYmVyJ1xuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoY29uY2F0QWxsKE4uTW9ub2lkU3VtKShbMSwgMiwgM10pLCA2KVxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChjb25jYXRBbGwoTi5Nb25vaWRTdW0pKFtdKSwgMClcbiAqXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBjb25jYXRBbGwgPSA8QT4oTTogTW9ub2lkPEE+KTogKChhczogUmVhZG9ubHlBcnJheTxBPikgPT4gQSkgPT4gU2UuY29uY2F0QWxsKE0pKE0uZW1wdHkpXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGRlcHJlY2F0ZWRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gdHNsaW50OmRpc2FibGU6IGRlcHJlY2F0aW9uXG5cbi8qKlxuICogVXNlIFtgTW9ub2lkYF0oLi92b2lkLnRzLmh0bWwjbW9ub2lkKSBpbnN0ZWFkLlxuICpcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjAuMFxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IG1vbm9pZFZvaWQ6IE1vbm9pZDx2b2lkPiA9IHtcbiAgY29uY2F0OiBTZS5zZW1pZ3JvdXBWb2lkLmNvbmNhdCxcbiAgZW1wdHk6IHVuZGVmaW5lZFxufVxuXG4vKipcbiAqIFVzZSBbYHR1cGxlYF0oI3R1cGxlKSBpbnN0ZWFkLlxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgY29uc3QgZ2V0VHVwbGVNb25vaWQ6IDxUIGV4dGVuZHMgUmVhZG9ubHlBcnJheTxNb25vaWQ8YW55Pj4+KFxuICAuLi5tb25vaWRzOiBUXG4pID0+IE1vbm9pZDx7IFtLIGluIGtleW9mIFRdOiBUW0tdIGV4dGVuZHMgU2UuU2VtaWdyb3VwPGluZmVyIEE+ID8gQSA6IG5ldmVyIH0+ID0gdHVwbGUgYXMgYW55XG5cbi8qKlxuICogVXNlIFtgc3RydWN0YF0oI3N0cnVjdCkgaW5zdGVhZC5cbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IGdldFN0cnVjdE1vbm9pZDogPE8gZXh0ZW5kcyBSZWFkb25seVJlY29yZDxzdHJpbmcsIGFueT4+KFxuICBtb25vaWRzOiB7IFtLIGluIGtleW9mIE9dOiBNb25vaWQ8T1tLXT4gfVxuKSA9PiBNb25vaWQ8Tz4gPSBzdHJ1Y3RcblxuLyoqXG4gKiBVc2UgW2ByZXZlcnNlYF0oI3JldmVyc2UpIGluc3RlYWQuXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBjb25zdCBnZXREdWFsTW9ub2lkID0gcmV2ZXJzZVxuXG4vKipcbiAqIFVzZSBbYG1heGBdKCNtYXgpIGluc3RlYWQuXG4gKlxuICogQGNhdGVnb3J5IGNvbnN0cnVjdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgY29uc3QgZ2V0Sm9pbk1vbm9pZCA9IG1heFxuXG4vKipcbiAqIFVzZSBbYG1pbmBdKCNtaW4pIGluc3RlYWQuXG4gKlxuICogQGNhdGVnb3J5IGNvbnN0cnVjdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgY29uc3QgZ2V0TWVldE1vbm9pZCA9IG1pblxuXG4vKipcbiAqIFVzZSBbYGNvbmNhdEFsbGBdKCNjb25jYXRhbGwpIGluc3RlYWQuXG4gKlxuICogQHNpbmNlIDIuMC4wXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgY29uc3QgZm9sZCA9IGNvbmNhdEFsbFxuXG4vKipcbiAqIFVzZSBbYE1vbm9pZEFsbGBdKC4vYm9vbGVhbi50cy5odG1sI21vbm9pZGFsbCkgaW5zdGVhZC5cbiAqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4wLjBcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBjb25zdCBtb25vaWRBbGw6IE1vbm9pZDxib29sZWFuPiA9IHtcbiAgY29uY2F0OiBTZS5zZW1pZ3JvdXBBbGwuY29uY2F0LFxuICBlbXB0eTogdHJ1ZVxufVxuXG4vKipcbiAqIFVzZSBbYE1vbm9pZEFueWBdKC4vYm9vbGVhbi50cy5odG1sI21vbm9pZGFueSkgaW5zdGVhZC5cbiAqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4wLjBcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBjb25zdCBtb25vaWRBbnk6IE1vbm9pZDxib29sZWFuPiA9IHtcbiAgY29uY2F0OiBTZS5zZW1pZ3JvdXBBbnkuY29uY2F0LFxuICBlbXB0eTogZmFsc2Vcbn1cblxuLyoqXG4gKiBVc2UgW2BnZXRNb25vaWRgXSguL2Z1bmN0aW9uLnRzLmh0bWwjZ2V0bW9ub2lkKSBpbnN0ZWFkLlxuICpcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjAuMFxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IGdldEZ1bmN0aW9uTW9ub2lkOiA8TT4oTTogTW9ub2lkPE0+KSA9PiA8QSA9IG5ldmVyPigpID0+IE1vbm9pZDwoYTogQSkgPT4gTT4gPSBnZXRGTVxuXG4vKipcbiAqIFVzZSBbYGdldEVuZG9tb3JwaGlzbU1vbm9pZGBdKC4vZnVuY3Rpb24udHMuaHRtbCNnZXRlbmRvbW9ycGhpc21tb25vaWQpIGluc3RlYWQuXG4gKlxuICogKipOb3RlKiouIFRoZSBleGVjdXRpb24gb3JkZXIgaW4gW2BnZXRFbmRvbW9ycGhpc21Nb25vaWRgXSguL2Z1bmN0aW9uLnRzLmh0bWwjZ2V0ZW5kb21vcnBoaXNtbW9ub2lkKSBpcyByZXZlcnNlZC5cbiAqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4wLjBcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRFbmRvbW9ycGhpc21Nb25vaWQgPSA8QSA9IG5ldmVyPigpOiBNb25vaWQ8RW5kb21vcnBoaXNtPEE+PiA9PiByZXZlcnNlKGdldEVNKCkpXG5cbi8qKlxuICogVXNlIFtgTW9ub2lkYF0oLi9zdHJpbmcudHMuaHRtbCNtb25vaWQpIGluc3RlYWQuXG4gKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMC4wXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgY29uc3QgbW9ub2lkU3RyaW5nOiBNb25vaWQ8c3RyaW5nPiA9IHtcbiAgY29uY2F0OiBTZS5zZW1pZ3JvdXBTdHJpbmcuY29uY2F0LFxuICBlbXB0eTogJydcbn1cblxuLyoqXG4gKiBVc2UgW2BNb25vaWRTdW1gXSguL251bWJlci50cy5odG1sI21vbm9pZHN1bSkgaW5zdGVhZC5cbiAqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4wLjBcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBjb25zdCBtb25vaWRTdW06IE1vbm9pZDxudW1iZXI+ID0ge1xuICBjb25jYXQ6IFNlLnNlbWlncm91cFN1bS5jb25jYXQsXG4gIGVtcHR5OiAwXG59XG5cbi8qKlxuICogVXNlIFtgTW9ub2lkUHJvZHVjdGBdKC4vbnVtYmVyLnRzLmh0bWwjbW9ub2lkcHJvZHVjdCkgaW5zdGVhZC5cbiAqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4wLjBcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBjb25zdCBtb25vaWRQcm9kdWN0OiBNb25vaWQ8bnVtYmVyPiA9IHtcbiAgY29uY2F0OiBTZS5zZW1pZ3JvdXBQcm9kdWN0LmNvbmNhdCxcbiAgZW1wdHk6IDFcbn1cbiJdfQ==