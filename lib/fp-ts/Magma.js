"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reverse = exports.filterSecond = exports.filterFirst = exports.endo = exports.concatAll = void 0;

/**
 * A `Magma` is a pair `(A, concat)` in which `A` is a non-empty set and `concat` is a binary operation on `A`
 *
 * See [Semigroup](https://gcanti.github.io/fp-ts/modules/Semigroup.ts.html) for some instances.
 *
 * @since 2.0.0
 */
// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

/**
 * @category type classes
 * @since 2.0.0
 */
// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------

/**
 * The dual of a `Magma`, obtained by swapping the arguments of `concat`.
 *
 * @example
 * import { reverse, concatAll } from 'fp-ts/Magma'
 * import * as N from 'fp-ts/number'
 *
 * const subAll = concatAll(reverse(N.MagmaSub))(0)
 *
 * assert.deepStrictEqual(subAll([1, 2, 3]), 2)
 *
 * @category combinators
 * @since 2.11.0
 */
var reverse = function reverse(M) {
  return {
    concat: function concat(first, second) {
      return M.concat(second, first);
    }
  };
};
/**
 * @category combinators
 * @since 2.11.0
 */


exports.reverse = reverse;

var filterFirst = function filterFirst(predicate) {
  return function (M) {
    return {
      concat: function concat(first, second) {
        return predicate(first) ? M.concat(first, second) : second;
      }
    };
  };
};
/**
 * @category combinators
 * @since 2.11.0
 */


exports.filterFirst = filterFirst;

var filterSecond = function filterSecond(predicate) {
  return function (M) {
    return {
      concat: function concat(first, second) {
        return predicate(second) ? M.concat(first, second) : first;
      }
    };
  };
};
/**
 * @category combinators
 * @since 2.11.0
 */


exports.filterSecond = filterSecond;

var endo = function endo(f) {
  return function (M) {
    return {
      concat: function concat(first, second) {
        return M.concat(f(first), f(second));
      }
    };
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
 * import { concatAll } from 'fp-ts/Magma'
 * import * as N from 'fp-ts/number'
 *
 * const subAll = concatAll(N.MagmaSub)(0)
 *
 * assert.deepStrictEqual(subAll([1, 2, 3]), -6)
 *
 * @since 2.11.0
 */


exports.endo = endo;

var concatAll = function concatAll(M) {
  return function (startWith) {
    return function (as) {
      return as.reduce(function (a, acc) {
        return M.concat(a, acc);
      }, startWith);
    };
  };
};

exports.concatAll = concatAll;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mcC10cy9NYWdtYS50cyJdLCJuYW1lcyI6WyJyZXZlcnNlIiwiTSIsImNvbmNhdCIsImZpcnN0Iiwic2Vjb25kIiwiZmlsdGVyRmlyc3QiLCJwcmVkaWNhdGUiLCJmaWx0ZXJTZWNvbmQiLCJlbmRvIiwiZiIsImNvbmNhdEFsbCIsInN0YXJ0V2l0aCIsImFzIiwicmVkdWNlIiwiYSIsImFjYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFJQyxDQUFKO0FBQUEsU0FBK0I7QUFDcERDLElBQUFBLE1BQU0sRUFBRSxnQkFBQ0MsS0FBRCxFQUFRQyxNQUFSO0FBQUEsYUFBbUJILENBQUMsQ0FBQ0MsTUFBRixDQUFTRSxNQUFULEVBQWlCRCxLQUFqQixDQUFuQjtBQUFBO0FBRDRDLEdBQS9CO0FBQUEsQ0FBaEI7QUFJUDtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDTyxJQUFNRSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFJQyxTQUFKO0FBQUEsU0FBZ0MsVUFBQ0wsQ0FBRDtBQUFBLFdBQTRCO0FBQ3JGQyxNQUFBQSxNQUFNLEVBQUUsZ0JBQUNDLEtBQUQsRUFBUUMsTUFBUjtBQUFBLGVBQW9CRSxTQUFTLENBQUNILEtBQUQsQ0FBVCxHQUFtQkYsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVQsRUFBZ0JDLE1BQWhCLENBQW5CLEdBQTZDQSxNQUFqRTtBQUFBO0FBRDZFLEtBQTVCO0FBQUEsR0FBaEM7QUFBQSxDQUFwQjtBQUlQO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNPLElBQU1HLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUlELFNBQUo7QUFBQSxTQUFnQyxVQUFDTCxDQUFEO0FBQUEsV0FBNEI7QUFDdEZDLE1BQUFBLE1BQU0sRUFBRSxnQkFBQ0MsS0FBRCxFQUFRQyxNQUFSO0FBQUEsZUFBb0JFLFNBQVMsQ0FBQ0YsTUFBRCxDQUFULEdBQW9CSCxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVCxFQUFnQkMsTUFBaEIsQ0FBcEIsR0FBOENELEtBQWxFO0FBQUE7QUFEOEUsS0FBNUI7QUFBQSxHQUFoQztBQUFBLENBQXJCO0FBSVA7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ08sSUFBTUssSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBSUMsQ0FBSjtBQUFBLFNBQTJCLFVBQUNSLENBQUQ7QUFBQSxXQUE0QjtBQUN6RUMsTUFBQUEsTUFBTSxFQUFFLGdCQUFDQyxLQUFELEVBQVFDLE1BQVI7QUFBQSxlQUFtQkgsQ0FBQyxDQUFDQyxNQUFGLENBQVNPLENBQUMsQ0FBQ04sS0FBRCxDQUFWLEVBQW1CTSxDQUFDLENBQUNMLE1BQUQsQ0FBcEIsQ0FBbkI7QUFBQTtBQURpRSxLQUE1QjtBQUFBLEdBQTNCO0FBQUEsQ0FBYixDLENBSVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDTyxJQUFNTSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFJVCxDQUFKO0FBQUEsU0FBb0IsVUFBQ1UsU0FBRDtBQUFBLFdBQWtCLFVBQUNDLEVBQUQ7QUFBQSxhQUM3REEsRUFBRSxDQUFDQyxNQUFILENBQVUsVUFBQ0MsQ0FBRCxFQUFJQyxHQUFKO0FBQUEsZUFBWWQsQ0FBQyxDQUFDQyxNQUFGLENBQVNZLENBQVQsRUFBWUMsR0FBWixDQUFaO0FBQUEsT0FBVixFQUF3Q0osU0FBeEMsQ0FENkQ7QUFBQSxLQUFsQjtBQUFBLEdBQXBCO0FBQUEsQ0FBbEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEEgYE1hZ21hYCBpcyBhIHBhaXIgYChBLCBjb25jYXQpYCBpbiB3aGljaCBgQWAgaXMgYSBub24tZW1wdHkgc2V0IGFuZCBgY29uY2F0YCBpcyBhIGJpbmFyeSBvcGVyYXRpb24gb24gYEFgXG4gKlxuICogU2VlIFtTZW1pZ3JvdXBdKGh0dHBzOi8vZ2NhbnRpLmdpdGh1Yi5pby9mcC10cy9tb2R1bGVzL1NlbWlncm91cC50cy5odG1sKSBmb3Igc29tZSBpbnN0YW5jZXMuXG4gKlxuICogQHNpbmNlIDIuMC4wXG4gKi9cblxuaW1wb3J0IHsgRW5kb21vcnBoaXNtIH0gZnJvbSAnLi9FbmRvbW9ycGhpc20nXG5pbXBvcnQgeyBQcmVkaWNhdGUgfSBmcm9tICcuL1ByZWRpY2F0ZSdcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gbW9kZWxcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgdHlwZSBjbGFzc2VzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBNYWdtYTxBPiB7XG4gIHJlYWRvbmx5IGNvbmNhdDogKHg6IEEsIHk6IEEpID0+IEFcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gY29tYmluYXRvcnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBUaGUgZHVhbCBvZiBhIGBNYWdtYWAsIG9idGFpbmVkIGJ5IHN3YXBwaW5nIHRoZSBhcmd1bWVudHMgb2YgYGNvbmNhdGAuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IHJldmVyc2UsIGNvbmNhdEFsbCB9IGZyb20gJ2ZwLXRzL01hZ21hJ1xuICogaW1wb3J0ICogYXMgTiBmcm9tICdmcC10cy9udW1iZXInXG4gKlxuICogY29uc3Qgc3ViQWxsID0gY29uY2F0QWxsKHJldmVyc2UoTi5NYWdtYVN1YikpKDApXG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChzdWJBbGwoWzEsIDIsIDNdKSwgMilcbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHJldmVyc2UgPSA8QT4oTTogTWFnbWE8QT4pOiBNYWdtYTxBPiA9PiAoe1xuICBjb25jYXQ6IChmaXJzdCwgc2Vjb25kKSA9PiBNLmNvbmNhdChzZWNvbmQsIGZpcnN0KVxufSlcblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZpbHRlckZpcnN0ID0gPEE+KHByZWRpY2F0ZTogUHJlZGljYXRlPEE+KSA9PiAoTTogTWFnbWE8QT4pOiBNYWdtYTxBPiA9PiAoe1xuICBjb25jYXQ6IChmaXJzdCwgc2Vjb25kKSA9PiAocHJlZGljYXRlKGZpcnN0KSA/IE0uY29uY2F0KGZpcnN0LCBzZWNvbmQpIDogc2Vjb25kKVxufSlcblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZpbHRlclNlY29uZCA9IDxBPihwcmVkaWNhdGU6IFByZWRpY2F0ZTxBPikgPT4gKE06IE1hZ21hPEE+KTogTWFnbWE8QT4gPT4gKHtcbiAgY29uY2F0OiAoZmlyc3QsIHNlY29uZCkgPT4gKHByZWRpY2F0ZShzZWNvbmQpID8gTS5jb25jYXQoZmlyc3QsIHNlY29uZCkgOiBmaXJzdClcbn0pXG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBlbmRvID0gPEE+KGY6IEVuZG9tb3JwaGlzbTxBPikgPT4gKE06IE1hZ21hPEE+KTogTWFnbWE8QT4gPT4gKHtcbiAgY29uY2F0OiAoZmlyc3QsIHNlY29uZCkgPT4gTS5jb25jYXQoZihmaXJzdCksIGYoc2Vjb25kKSlcbn0pXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIHV0aWxzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogR2l2ZW4gYSBzZXF1ZW5jZSBvZiBgYXNgLCBjb25jYXQgdGhlbSBhbmQgcmV0dXJuIHRoZSB0b3RhbC5cbiAqXG4gKiBJZiBgYXNgIGlzIGVtcHR5LCByZXR1cm4gdGhlIHByb3ZpZGVkIGBzdGFydFdpdGhgIHZhbHVlLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBjb25jYXRBbGwgfSBmcm9tICdmcC10cy9NYWdtYSdcbiAqIGltcG9ydCAqIGFzIE4gZnJvbSAnZnAtdHMvbnVtYmVyJ1xuICpcbiAqIGNvbnN0IHN1YkFsbCA9IGNvbmNhdEFsbChOLk1hZ21hU3ViKSgwKVxuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoc3ViQWxsKFsxLCAyLCAzXSksIC02KVxuICpcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGNvbmNhdEFsbCA9IDxBPihNOiBNYWdtYTxBPikgPT4gKHN0YXJ0V2l0aDogQSkgPT4gKGFzOiBSZWFkb25seUFycmF5PEE+KTogQSA9PlxuICBhcy5yZWR1Y2UoKGEsIGFjYykgPT4gTS5jb25jYXQoYSwgYWNjKSwgc3RhcnRXaXRoKVxuIl19