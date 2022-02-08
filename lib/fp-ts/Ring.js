"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tuple = exports.negate = exports.getTupleRing = exports.getFunctionRing = void 0;

var _function = require("./function");

/**
 * The `Ring` class is for types that support addition, multiplication, and subtraction operations.
 *
 * Instances must satisfy the following law in addition to the `Semiring` laws:
 *
 * - Additive inverse: `a - a <-> (zero - a) + a <-> zero`
 *
 * Adapted from https://github.com/purescript/purescript-prelude/blob/master/src/Data/Ring.purs
 *
 * @since 2.0.0
 */
// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------

/**
 * Given a tuple of `Ring`s returns a `Ring` for the tuple
 *
 * @example
 * import { tuple } from 'fp-ts/Ring'
 * import * as N from 'fp-ts/number'
 *
 * const R = tuple(N.Field, N.Field, N.Field)
 * assert.deepStrictEqual(R.add([1, 2, 3], [4, 5, 6]), [5, 7, 9])
 * assert.deepStrictEqual(R.mul([1, 2, 3], [4, 5, 6]), [4, 10, 18])
 * assert.deepStrictEqual(R.one, [1, 1, 1])
 * assert.deepStrictEqual(R.sub([1, 2, 3], [4, 5, 6]), [-3, -3, -3])
 * assert.deepStrictEqual(R.zero, [0, 0, 0])
 *
 * @category combinators
 * @since 2.10.0
 */
var tuple = function tuple() {
  for (var _len = arguments.length, rings = new Array(_len), _key = 0; _key < _len; _key++) {
    rings[_key] = arguments[_key];
  }

  return {
    add: function add(x, y) {
      return rings.map(function (R, i) {
        return R.add(x[i], y[i]);
      });
    },
    zero: rings.map(function (R) {
      return R.zero;
    }),
    mul: function mul(x, y) {
      return rings.map(function (R, i) {
        return R.mul(x[i], y[i]);
      });
    },
    one: rings.map(function (R) {
      return R.one;
    }),
    sub: function sub(x, y) {
      return rings.map(function (R, i) {
        return R.sub(x[i], y[i]);
      });
    }
  };
}; // -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------

/**
 * `negate x` can be used as a shorthand for `zero - x`
 *
 * @since 2.0.0
 */


exports.tuple = tuple;

var negate = function negate(R) {
  return function (a) {
    return R.sub(R.zero, a);
  };
}; // -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------

/**
 * Use [`tuple`](#tuple) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */


exports.negate = negate;
var getTupleRing = tuple;
/**
 * Use [`getRing`](./function.ts.html#getring) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */

exports.getTupleRing = getTupleRing;
var getFunctionRing = _function.getRing;
exports.getFunctionRing = getFunctionRing;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mcC10cy9SaW5nLnRzIl0sIm5hbWVzIjpbInR1cGxlIiwicmluZ3MiLCJhZGQiLCJ4IiwieSIsIm1hcCIsIlIiLCJpIiwiemVybyIsIm11bCIsIm9uZSIsInN1YiIsIm5lZ2F0ZSIsImEiLCJnZXRUdXBsZVJpbmciLCJnZXRGdW5jdGlvblJpbmciLCJnZXRSaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBV0E7O0FBWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWdCQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRO0FBQUEsb0NBQXNDQyxLQUF0QztBQUFzQ0EsSUFBQUEsS0FBdEM7QUFBQTs7QUFBQSxTQUNsQjtBQUNDQyxJQUFBQSxHQUFHLEVBQUUsYUFBQ0MsQ0FBRCxFQUFTQyxDQUFUO0FBQUEsYUFBb0JILEtBQUssQ0FBQ0ksR0FBTixDQUFVLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLGVBQVVELENBQUMsQ0FBQ0osR0FBRixDQUFNQyxDQUFDLENBQUNJLENBQUQsQ0FBUCxFQUFZSCxDQUFDLENBQUNHLENBQUQsQ0FBYixDQUFWO0FBQUEsT0FBVixDQUFwQjtBQUFBLEtBRE47QUFFQ0MsSUFBQUEsSUFBSSxFQUFFUCxLQUFLLENBQUNJLEdBQU4sQ0FBVSxVQUFDQyxDQUFEO0FBQUEsYUFBT0EsQ0FBQyxDQUFDRSxJQUFUO0FBQUEsS0FBVixDQUZQO0FBR0NDLElBQUFBLEdBQUcsRUFBRSxhQUFDTixDQUFELEVBQVNDLENBQVQ7QUFBQSxhQUFvQkgsS0FBSyxDQUFDSSxHQUFOLENBQVUsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsZUFBVUQsQ0FBQyxDQUFDRyxHQUFGLENBQU1OLENBQUMsQ0FBQ0ksQ0FBRCxDQUFQLEVBQVlILENBQUMsQ0FBQ0csQ0FBRCxDQUFiLENBQVY7QUFBQSxPQUFWLENBQXBCO0FBQUEsS0FITjtBQUlDRyxJQUFBQSxHQUFHLEVBQUVULEtBQUssQ0FBQ0ksR0FBTixDQUFVLFVBQUNDLENBQUQ7QUFBQSxhQUFPQSxDQUFDLENBQUNJLEdBQVQ7QUFBQSxLQUFWLENBSk47QUFLQ0MsSUFBQUEsR0FBRyxFQUFFLGFBQUNSLENBQUQsRUFBU0MsQ0FBVDtBQUFBLGFBQW9CSCxLQUFLLENBQUNJLEdBQU4sQ0FBVSxVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxlQUFVRCxDQUFDLENBQUNLLEdBQUYsQ0FBTVIsQ0FBQyxDQUFDSSxDQUFELENBQVAsRUFBWUgsQ0FBQyxDQUFDRyxDQUFELENBQWIsQ0FBVjtBQUFBLE9BQVYsQ0FBcEI7QUFBQTtBQUxOLEdBRGtCO0FBQUEsQ0FBZCxDLENBU1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ08sSUFBTUssTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBSU4sQ0FBSjtBQUFBLFNBQW1CLFVBQUNPLENBQUQ7QUFBQSxXQUFVUCxDQUFDLENBQUNLLEdBQUYsQ0FBTUwsQ0FBQyxDQUFDRSxJQUFSLEVBQWNLLENBQWQsQ0FBVjtBQUFBLEdBQW5CO0FBQUEsQ0FBZixDLENBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBQ08sSUFBTUMsWUFFd0QsR0FBR2QsS0FGakU7QUFJUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTWUsZUFBd0QsR0FBR0MsaUJBQWpFIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGUgYFJpbmdgIGNsYXNzIGlzIGZvciB0eXBlcyB0aGF0IHN1cHBvcnQgYWRkaXRpb24sIG11bHRpcGxpY2F0aW9uLCBhbmQgc3VidHJhY3Rpb24gb3BlcmF0aW9ucy5cbiAqXG4gKiBJbnN0YW5jZXMgbXVzdCBzYXRpc2Z5IHRoZSBmb2xsb3dpbmcgbGF3IGluIGFkZGl0aW9uIHRvIHRoZSBgU2VtaXJpbmdgIGxhd3M6XG4gKlxuICogLSBBZGRpdGl2ZSBpbnZlcnNlOiBgYSAtIGEgPC0+ICh6ZXJvIC0gYSkgKyBhIDwtPiB6ZXJvYFxuICpcbiAqIEFkYXB0ZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vcHVyZXNjcmlwdC9wdXJlc2NyaXB0LXByZWx1ZGUvYmxvYi9tYXN0ZXIvc3JjL0RhdGEvUmluZy5wdXJzXG4gKlxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmltcG9ydCB7IGdldFJpbmcgfSBmcm9tICcuL2Z1bmN0aW9uJ1xuaW1wb3J0IHsgU2VtaXJpbmcgfSBmcm9tICcuL1NlbWlyaW5nJ1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBtb2RlbFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEBjYXRlZ29yeSB0eXBlIGNsYXNzZXNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJpbmc8QT4gZXh0ZW5kcyBTZW1pcmluZzxBPiB7XG4gIHJlYWRvbmx5IHN1YjogKHg6IEEsIHk6IEEpID0+IEFcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gY29tYmluYXRvcnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBHaXZlbiBhIHR1cGxlIG9mIGBSaW5nYHMgcmV0dXJucyBhIGBSaW5nYCBmb3IgdGhlIHR1cGxlXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IHR1cGxlIH0gZnJvbSAnZnAtdHMvUmluZydcbiAqIGltcG9ydCAqIGFzIE4gZnJvbSAnZnAtdHMvbnVtYmVyJ1xuICpcbiAqIGNvbnN0IFIgPSB0dXBsZShOLkZpZWxkLCBOLkZpZWxkLCBOLkZpZWxkKVxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChSLmFkZChbMSwgMiwgM10sIFs0LCA1LCA2XSksIFs1LCA3LCA5XSlcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoUi5tdWwoWzEsIDIsIDNdLCBbNCwgNSwgNl0pLCBbNCwgMTAsIDE4XSlcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoUi5vbmUsIFsxLCAxLCAxXSlcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoUi5zdWIoWzEsIDIsIDNdLCBbNCwgNSwgNl0pLCBbLTMsIC0zLCAtM10pXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKFIuemVybywgWzAsIDAsIDBdKVxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgdHVwbGUgPSA8QSBleHRlbmRzIFJlYWRvbmx5QXJyYXk8dW5rbm93bj4+KC4uLnJpbmdzOiB7IFtLIGluIGtleW9mIEFdOiBSaW5nPEFbS10+IH0pOiBSaW5nPFJlYWRvbmx5PEE+PiA9PlxuICAoe1xuICAgIGFkZDogKHg6IGFueSwgeTogYW55KSA9PiByaW5ncy5tYXAoKFIsIGkpID0+IFIuYWRkKHhbaV0sIHlbaV0pKSxcbiAgICB6ZXJvOiByaW5ncy5tYXAoKFIpID0+IFIuemVybyksXG4gICAgbXVsOiAoeDogYW55LCB5OiBhbnkpID0+IHJpbmdzLm1hcCgoUiwgaSkgPT4gUi5tdWwoeFtpXSwgeVtpXSkpLFxuICAgIG9uZTogcmluZ3MubWFwKChSKSA9PiBSLm9uZSksXG4gICAgc3ViOiAoeDogYW55LCB5OiBhbnkpID0+IHJpbmdzLm1hcCgoUiwgaSkgPT4gUi5zdWIoeFtpXSwgeVtpXSkpXG4gIH0gYXMgYW55KVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyB1dGlsc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIGBuZWdhdGUgeGAgY2FuIGJlIHVzZWQgYXMgYSBzaG9ydGhhbmQgZm9yIGB6ZXJvIC0geGBcbiAqXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IG5lZ2F0ZSA9IDxBPihSOiBSaW5nPEE+KSA9PiAoYTogQSkgPT4gUi5zdWIoUi56ZXJvLCBhKVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBkZXByZWNhdGVkXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogVXNlIFtgdHVwbGVgXSgjdHVwbGUpIGluc3RlYWQuXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRUdXBsZVJpbmc6IDxUIGV4dGVuZHMgUmVhZG9ubHlBcnJheTxSaW5nPGFueT4+PihcbiAgLi4ucmluZ3M6IFRcbikgPT4gUmluZzx7IFtLIGluIGtleW9mIFRdOiBUW0tdIGV4dGVuZHMgUmluZzxpbmZlciBBPiA/IEEgOiBuZXZlciB9PiA9IHR1cGxlIGFzIGFueVxuXG4vKipcbiAqIFVzZSBbYGdldFJpbmdgXSguL2Z1bmN0aW9uLnRzLmh0bWwjZ2V0cmluZykgaW5zdGVhZC5cbiAqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4wLjBcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRGdW5jdGlvblJpbmc6IDxBLCBCPihSOiBSaW5nPEI+KSA9PiBSaW5nPChhOiBBKSA9PiBCPiA9IGdldFJpbmdcbiJdfQ==