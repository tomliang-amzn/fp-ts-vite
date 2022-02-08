"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNumber = exports.Show = exports.SemigroupSum = exports.SemigroupProduct = exports.Ord = exports.MonoidSum = exports.MonoidProduct = exports.MagmaSub = exports.Field = exports.Eq = exports.Bounded = void 0;

/**
 * @since 2.10.0
 */
// -------------------------------------------------------------------------------------
// refinements
// -------------------------------------------------------------------------------------

/**
 * @category refinements
 * @since 2.11.0
 */
var isNumber = function isNumber(u) {
  return typeof u === 'number';
}; // -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------

/**
 * @category instances
 * @since 2.10.0
 */


exports.isNumber = isNumber;
var Eq = {
  equals: function equals(first, second) {
    return first === second;
  }
};
/**
 * @category instances
 * @since 2.10.0
 */

exports.Eq = Eq;
var Ord = {
  equals: Eq.equals,
  compare: function compare(first, second) {
    return first < second ? -1 : first > second ? 1 : 0;
  }
};
/**
 * @category instances
 * @since 2.10.0
 */

exports.Ord = Ord;
var Bounded = {
  equals: Eq.equals,
  compare: Ord.compare,
  top: Infinity,
  bottom: -Infinity
};
/**
 * @category instances
 * @since 2.10.0
 */

exports.Bounded = Bounded;
var Show = {
  show: function show(n) {
    return JSON.stringify(n);
  }
};
/**
 * @category instances
 * @since 2.11.0
 */

exports.Show = Show;
var MagmaSub = {
  concat: function concat(first, second) {
    return first - second;
  }
};
/**
 * `number` semigroup under addition.
 *
 * @example
 * import { SemigroupSum } from 'fp-ts/number'
 *
 * assert.deepStrictEqual(SemigroupSum.concat(2, 3), 5)
 *
 * @category instances
 * @since 2.10.0
 */

exports.MagmaSub = MagmaSub;
var SemigroupSum = {
  concat: function concat(first, second) {
    return first + second;
  }
};
/**
 * `number` semigroup under multiplication.
 *
 * @example
 * import { SemigroupProduct } from 'fp-ts/number'
 *
 * assert.deepStrictEqual(SemigroupProduct.concat(2, 3), 6)
 *
 * @category instances
 * @since 2.10.0
 */

exports.SemigroupSum = SemigroupSum;
var SemigroupProduct = {
  concat: function concat(first, second) {
    return first * second;
  }
};
/**
 * `number` monoid under addition.
 *
 * The `empty` value is `0`.
 *
 * @example
 * import { MonoidSum } from 'fp-ts/number'
 *
 * assert.deepStrictEqual(MonoidSum.concat(2, MonoidSum.empty), 2)
 *
 * @category instances
 * @since 2.10.0
 */

exports.SemigroupProduct = SemigroupProduct;
var MonoidSum = {
  concat: SemigroupSum.concat,
  empty: 0
};
/**
 * `number` monoid under multiplication.
 *
 * The `empty` value is `1`.
 *
 * @example
 * import { MonoidProduct } from 'fp-ts/number'
 *
 * assert.deepStrictEqual(MonoidProduct.concat(2, MonoidProduct.empty), 2)
 *
 * @category instances
 * @since 2.10.0
 */

exports.MonoidSum = MonoidSum;
var MonoidProduct = {
  concat: SemigroupProduct.concat,
  empty: 1
};
/**
 * @category instances
 * @since 2.10.0
 */

exports.MonoidProduct = MonoidProduct;
var Field = {
  add: SemigroupSum.concat,
  zero: 0,
  mul: SemigroupProduct.concat,
  one: 1,
  sub: MagmaSub.concat,
  degree: function degree(_) {
    return 1;
  },
  div: function div(first, second) {
    return first / second;
  },
  mod: function mod(first, second) {
    return first % second;
  }
};
exports.Field = Field;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mcC10cy9udW1iZXIudHMiXSwibmFtZXMiOlsiaXNOdW1iZXIiLCJ1IiwiRXEiLCJlcXVhbHMiLCJmaXJzdCIsInNlY29uZCIsIk9yZCIsImNvbXBhcmUiLCJCb3VuZGVkIiwidG9wIiwiSW5maW5pdHkiLCJib3R0b20iLCJTaG93Iiwic2hvdyIsIm4iLCJKU09OIiwic3RyaW5naWZ5IiwiTWFnbWFTdWIiLCJjb25jYXQiLCJTZW1pZ3JvdXBTdW0iLCJTZW1pZ3JvdXBQcm9kdWN0IiwiTW9ub2lkU3VtIiwiZW1wdHkiLCJNb25vaWRQcm9kdWN0IiwiRmllbGQiLCJhZGQiLCJ6ZXJvIiwibXVsIiwib25lIiwic3ViIiwiZGVncmVlIiwiXyIsImRpdiIsIm1vZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQVdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLElBQU1BLFFBQXFDLEdBQUcsU0FBeENBLFFBQXdDLENBQUNDLENBQUQ7QUFBQSxTQUE2QixPQUFPQSxDQUFQLEtBQWEsUUFBMUM7QUFBQSxDQUE5QyxDLENBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBQ08sSUFBTUMsRUFBZ0IsR0FBRztBQUM5QkMsRUFBQUEsTUFBTSxFQUFFLGdCQUFDQyxLQUFELEVBQVFDLE1BQVI7QUFBQSxXQUFtQkQsS0FBSyxLQUFLQyxNQUE3QjtBQUFBO0FBRHNCLENBQXpCO0FBSVA7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLElBQU1DLEdBQWtCLEdBQUc7QUFDaENILEVBQUFBLE1BQU0sRUFBRUQsRUFBRSxDQUFDQyxNQURxQjtBQUVoQ0ksRUFBQUEsT0FBTyxFQUFFLGlCQUFDSCxLQUFELEVBQVFDLE1BQVI7QUFBQSxXQUFvQkQsS0FBSyxHQUFHQyxNQUFSLEdBQWlCLENBQUMsQ0FBbEIsR0FBc0JELEtBQUssR0FBR0MsTUFBUixHQUFpQixDQUFqQixHQUFxQixDQUEvRDtBQUFBO0FBRnVCLENBQTNCO0FBS1A7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLElBQU1HLE9BQTBCLEdBQUc7QUFDeENMLEVBQUFBLE1BQU0sRUFBRUQsRUFBRSxDQUFDQyxNQUQ2QjtBQUV4Q0ksRUFBQUEsT0FBTyxFQUFFRCxHQUFHLENBQUNDLE9BRjJCO0FBR3hDRSxFQUFBQSxHQUFHLEVBQUVDLFFBSG1DO0FBSXhDQyxFQUFBQSxNQUFNLEVBQUUsQ0FBQ0Q7QUFKK0IsQ0FBbkM7QUFPUDtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTUUsSUFBb0IsR0FBRztBQUNsQ0MsRUFBQUEsSUFBSSxFQUFFLGNBQUNDLENBQUQ7QUFBQSxXQUFPQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUYsQ0FBZixDQUFQO0FBQUE7QUFENEIsQ0FBN0I7QUFJUDtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTUcsUUFBdUIsR0FBRztBQUNyQ0MsRUFBQUEsTUFBTSxFQUFFLGdCQUFDZCxLQUFELEVBQVFDLE1BQVI7QUFBQSxXQUFtQkQsS0FBSyxHQUFHQyxNQUEzQjtBQUFBO0FBRDZCLENBQWhDO0FBSVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTWMsWUFBK0IsR0FBRztBQUM3Q0QsRUFBQUEsTUFBTSxFQUFFLGdCQUFDZCxLQUFELEVBQVFDLE1BQVI7QUFBQSxXQUFtQkQsS0FBSyxHQUFHQyxNQUEzQjtBQUFBO0FBRHFDLENBQXhDO0FBSVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTWUsZ0JBQW1DLEdBQUc7QUFDakRGLEVBQUFBLE1BQU0sRUFBRSxnQkFBQ2QsS0FBRCxFQUFRQyxNQUFSO0FBQUEsV0FBbUJELEtBQUssR0FBR0MsTUFBM0I7QUFBQTtBQUR5QyxDQUE1QztBQUlQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxJQUFNZ0IsU0FBeUIsR0FBRztBQUN2Q0gsRUFBQUEsTUFBTSxFQUFFQyxZQUFZLENBQUNELE1BRGtCO0FBRXZDSSxFQUFBQSxLQUFLLEVBQUU7QUFGZ0MsQ0FBbEM7QUFLUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTUMsYUFBNkIsR0FBRztBQUMzQ0wsRUFBQUEsTUFBTSxFQUFFRSxnQkFBZ0IsQ0FBQ0YsTUFEa0I7QUFFM0NJLEVBQUFBLEtBQUssRUFBRTtBQUZvQyxDQUF0QztBQUtQO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxJQUFNRSxLQUFzQixHQUFHO0FBQ3BDQyxFQUFBQSxHQUFHLEVBQUVOLFlBQVksQ0FBQ0QsTUFEa0I7QUFFcENRLEVBQUFBLElBQUksRUFBRSxDQUY4QjtBQUdwQ0MsRUFBQUEsR0FBRyxFQUFFUCxnQkFBZ0IsQ0FBQ0YsTUFIYztBQUlwQ1UsRUFBQUEsR0FBRyxFQUFFLENBSitCO0FBS3BDQyxFQUFBQSxHQUFHLEVBQUVaLFFBQVEsQ0FBQ0MsTUFMc0I7QUFNcENZLEVBQUFBLE1BQU0sRUFBRSxnQkFBQ0MsQ0FBRDtBQUFBLFdBQU8sQ0FBUDtBQUFBLEdBTjRCO0FBT3BDQyxFQUFBQSxHQUFHLEVBQUUsYUFBQzVCLEtBQUQsRUFBUUMsTUFBUjtBQUFBLFdBQW1CRCxLQUFLLEdBQUdDLE1BQTNCO0FBQUEsR0FQK0I7QUFRcEM0QixFQUFBQSxHQUFHLEVBQUUsYUFBQzdCLEtBQUQsRUFBUUMsTUFBUjtBQUFBLFdBQW1CRCxLQUFLLEdBQUdDLE1BQTNCO0FBQUE7QUFSK0IsQ0FBL0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuaW1wb3J0ICogYXMgQiBmcm9tICcuL0JvdW5kZWQnXG5pbXBvcnQgKiBhcyBFIGZyb20gJy4vRXEnXG5pbXBvcnQgKiBhcyBGIGZyb20gJy4vRmllbGQnXG5pbXBvcnQgeyBNYWdtYSB9IGZyb20gJy4vTWFnbWEnXG5pbXBvcnQgeyBNb25vaWQgfSBmcm9tICcuL01vbm9pZCdcbmltcG9ydCAqIGFzIE8gZnJvbSAnLi9PcmQnXG5pbXBvcnQgeyBSZWZpbmVtZW50IH0gZnJvbSAnLi9SZWZpbmVtZW50J1xuaW1wb3J0IHsgU2VtaWdyb3VwIH0gZnJvbSAnLi9TZW1pZ3JvdXAnXG5pbXBvcnQgKiBhcyBTIGZyb20gJy4vU2hvdydcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gcmVmaW5lbWVudHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgcmVmaW5lbWVudHNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGlzTnVtYmVyOiBSZWZpbmVtZW50PHVua25vd24sIG51bWJlcj4gPSAodTogdW5rbm93bik6IHUgaXMgbnVtYmVyID0+IHR5cGVvZiB1ID09PSAnbnVtYmVyJ1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBpbnN0YW5jZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBFcTogRS5FcTxudW1iZXI+ID0ge1xuICBlcXVhbHM6IChmaXJzdCwgc2Vjb25kKSA9PiBmaXJzdCA9PT0gc2Vjb25kXG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgT3JkOiBPLk9yZDxudW1iZXI+ID0ge1xuICBlcXVhbHM6IEVxLmVxdWFscyxcbiAgY29tcGFyZTogKGZpcnN0LCBzZWNvbmQpID0+IChmaXJzdCA8IHNlY29uZCA/IC0xIDogZmlyc3QgPiBzZWNvbmQgPyAxIDogMClcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBCb3VuZGVkOiBCLkJvdW5kZWQ8bnVtYmVyPiA9IHtcbiAgZXF1YWxzOiBFcS5lcXVhbHMsXG4gIGNvbXBhcmU6IE9yZC5jb21wYXJlLFxuICB0b3A6IEluZmluaXR5LFxuICBib3R0b206IC1JbmZpbml0eVxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IFNob3c6IFMuU2hvdzxudW1iZXI+ID0ge1xuICBzaG93OiAobikgPT4gSlNPTi5zdHJpbmdpZnkobilcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBNYWdtYVN1YjogTWFnbWE8bnVtYmVyPiA9IHtcbiAgY29uY2F0OiAoZmlyc3QsIHNlY29uZCkgPT4gZmlyc3QgLSBzZWNvbmRcbn1cblxuLyoqXG4gKiBgbnVtYmVyYCBzZW1pZ3JvdXAgdW5kZXIgYWRkaXRpb24uXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IFNlbWlncm91cFN1bSB9IGZyb20gJ2ZwLXRzL251bWJlcidcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKFNlbWlncm91cFN1bS5jb25jYXQoMiwgMyksIDUpXG4gKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgU2VtaWdyb3VwU3VtOiBTZW1pZ3JvdXA8bnVtYmVyPiA9IHtcbiAgY29uY2F0OiAoZmlyc3QsIHNlY29uZCkgPT4gZmlyc3QgKyBzZWNvbmRcbn1cblxuLyoqXG4gKiBgbnVtYmVyYCBzZW1pZ3JvdXAgdW5kZXIgbXVsdGlwbGljYXRpb24uXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IFNlbWlncm91cFByb2R1Y3QgfSBmcm9tICdmcC10cy9udW1iZXInXG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChTZW1pZ3JvdXBQcm9kdWN0LmNvbmNhdCgyLCAzKSwgNilcbiAqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBTZW1pZ3JvdXBQcm9kdWN0OiBTZW1pZ3JvdXA8bnVtYmVyPiA9IHtcbiAgY29uY2F0OiAoZmlyc3QsIHNlY29uZCkgPT4gZmlyc3QgKiBzZWNvbmRcbn1cblxuLyoqXG4gKiBgbnVtYmVyYCBtb25vaWQgdW5kZXIgYWRkaXRpb24uXG4gKlxuICogVGhlIGBlbXB0eWAgdmFsdWUgaXMgYDBgLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBNb25vaWRTdW0gfSBmcm9tICdmcC10cy9udW1iZXInXG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChNb25vaWRTdW0uY29uY2F0KDIsIE1vbm9pZFN1bS5lbXB0eSksIDIpXG4gKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgTW9ub2lkU3VtOiBNb25vaWQ8bnVtYmVyPiA9IHtcbiAgY29uY2F0OiBTZW1pZ3JvdXBTdW0uY29uY2F0LFxuICBlbXB0eTogMFxufVxuXG4vKipcbiAqIGBudW1iZXJgIG1vbm9pZCB1bmRlciBtdWx0aXBsaWNhdGlvbi5cbiAqXG4gKiBUaGUgYGVtcHR5YCB2YWx1ZSBpcyBgMWAuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IE1vbm9pZFByb2R1Y3QgfSBmcm9tICdmcC10cy9udW1iZXInXG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChNb25vaWRQcm9kdWN0LmNvbmNhdCgyLCBNb25vaWRQcm9kdWN0LmVtcHR5KSwgMilcbiAqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBNb25vaWRQcm9kdWN0OiBNb25vaWQ8bnVtYmVyPiA9IHtcbiAgY29uY2F0OiBTZW1pZ3JvdXBQcm9kdWN0LmNvbmNhdCxcbiAgZW1wdHk6IDFcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBGaWVsZDogRi5GaWVsZDxudW1iZXI+ID0ge1xuICBhZGQ6IFNlbWlncm91cFN1bS5jb25jYXQsXG4gIHplcm86IDAsXG4gIG11bDogU2VtaWdyb3VwUHJvZHVjdC5jb25jYXQsXG4gIG9uZTogMSxcbiAgc3ViOiBNYWdtYVN1Yi5jb25jYXQsXG4gIGRlZ3JlZTogKF8pID0+IDEsXG4gIGRpdjogKGZpcnN0LCBzZWNvbmQpID0+IGZpcnN0IC8gc2Vjb25kLFxuICBtb2Q6IChmaXJzdCwgc2Vjb25kKSA9PiBmaXJzdCAlIHNlY29uZFxufVxuIl19