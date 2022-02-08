"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.randomElem = exports.randomBool = exports.random = void 0;
exports.randomInt = randomInt;
exports.randomRange = randomRange;

var _IO = require("./IO");

var _function = require("./function");

/**
 * @since 2.0.0
 */

/**
 * Returns a random number between 0 (inclusive) and 1 (exclusive). This is a direct wrapper around JavaScript's
 * `Math.random()`.
 *
 * @since 2.0.0
 */
var random = function random() {
  return Math.random();
};
/**
 * Takes a range specified by `low` (the first argument) and `high` (the second), and returns a random integer uniformly
 * distributed in the closed interval `[low, high]`. It is unspecified what happens if `low > high`, or if either of
 * `low` or `high` is not an integer.
 *
 * @since 2.0.0
 */


exports.random = random;

function randomInt(low, high) {
  return (0, _function.pipe)(random, (0, _IO.map)(function (n) {
    return Math.floor((high - low + 1) * n + low);
  }));
}
/**
 * Returns a random number between a minimum value (inclusive) and a maximum value (exclusive). It is unspecified what
 * happens if `maximum < minimum`.
 *
 * @since 2.0.0
 */


function randomRange(min, max) {
  return (0, _function.pipe)(random, (0, _IO.map)(function (n) {
    return (max - min) * n + min;
  }));
}
/**
 * Returns a random boolean value with an equal chance of being `true` or `false`
 *
 * @since 2.0.0
 */


var randomBool = /*#__PURE__*/(0, _function.pipe)(random, (0, _IO.map)(function (n) {
  return n < 0.5;
}));
/**
 * Returns a random element of a `ReadonlyNonEmptyArray`.
 *
 * @since 2.10.0
 */

exports.randomBool = randomBool;

var randomElem = function randomElem(as) {
  return (0, _function.pipe)(randomInt(0, as.length - 1), (0, _IO.map)(function (i) {
    return as[i];
  }));
};

exports.randomElem = randomElem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mcC10cy9SYW5kb20udHMiXSwibmFtZXMiOlsicmFuZG9tIiwiTWF0aCIsInJhbmRvbUludCIsImxvdyIsImhpZ2giLCJuIiwiZmxvb3IiLCJyYW5kb21SYW5nZSIsIm1pbiIsIm1heCIsInJhbmRvbUJvb2wiLCJyYW5kb21FbGVtIiwiYXMiLCJsZW5ndGgiLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFHQTs7QUFDQTs7QUFKQTtBQUNBO0FBQ0E7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sSUFBTUEsTUFBa0IsR0FBRyxTQUFyQkEsTUFBcUI7QUFBQSxTQUFNQyxJQUFJLENBQUNELE1BQUwsRUFBTjtBQUFBLENBQTNCO0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ08sU0FBU0UsU0FBVCxDQUFtQkMsR0FBbkIsRUFBZ0NDLElBQWhDLEVBQTBEO0FBQy9ELFNBQU8sb0JBQ0xKLE1BREssRUFFTCxhQUFJLFVBQUNLLENBQUQ7QUFBQSxXQUFPSixJQUFJLENBQUNLLEtBQUwsQ0FBVyxDQUFDRixJQUFJLEdBQUdELEdBQVAsR0FBYSxDQUFkLElBQW1CRSxDQUFuQixHQUF1QkYsR0FBbEMsQ0FBUDtBQUFBLEdBQUosQ0FGSyxDQUFQO0FBSUQ7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLFNBQVNJLFdBQVQsQ0FBcUJDLEdBQXJCLEVBQWtDQyxHQUFsQyxFQUEyRDtBQUNoRSxTQUFPLG9CQUNMVCxNQURLLEVBRUwsYUFBSSxVQUFDSyxDQUFEO0FBQUEsV0FBTyxDQUFDSSxHQUFHLEdBQUdELEdBQVAsSUFBY0gsQ0FBZCxHQUFrQkcsR0FBekI7QUFBQSxHQUFKLENBRkssQ0FBUDtBQUlEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTUUsVUFBdUIsR0FDbEMsYUFDQSxvQkFDRVYsTUFERixFQUVFLGFBQUksVUFBQ0ssQ0FBRDtBQUFBLFNBQU9BLENBQUMsR0FBRyxHQUFYO0FBQUEsQ0FBSixDQUZGLENBRks7QUFPUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBQ08sSUFBTU0sVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBSUMsRUFBSjtBQUFBLFNBQ3hCLG9CQUNFVixTQUFTLENBQUMsQ0FBRCxFQUFJVSxFQUFFLENBQUNDLE1BQUgsR0FBWSxDQUFoQixDQURYLEVBRUUsYUFBSSxVQUFDQyxDQUFEO0FBQUEsV0FBT0YsRUFBRSxDQUFDRSxDQUFELENBQVQ7QUFBQSxHQUFKLENBRkYsQ0FEd0I7QUFBQSxDQUFuQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmltcG9ydCB7IElPLCBtYXAgfSBmcm9tICcuL0lPJ1xuaW1wb3J0IHsgcGlwZSB9IGZyb20gJy4vZnVuY3Rpb24nXG5pbXBvcnQgeyBSZWFkb25seU5vbkVtcHR5QXJyYXkgfSBmcm9tICcuL1JlYWRvbmx5Tm9uRW1wdHlBcnJheSdcblxuLyoqXG4gKiBSZXR1cm5zIGEgcmFuZG9tIG51bWJlciBiZXR3ZWVuIDAgKGluY2x1c2l2ZSkgYW5kIDEgKGV4Y2x1c2l2ZSkuIFRoaXMgaXMgYSBkaXJlY3Qgd3JhcHBlciBhcm91bmQgSmF2YVNjcmlwdCdzXG4gKiBgTWF0aC5yYW5kb20oKWAuXG4gKlxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCByYW5kb206IElPPG51bWJlcj4gPSAoKSA9PiBNYXRoLnJhbmRvbSgpXG5cbi8qKlxuICogVGFrZXMgYSByYW5nZSBzcGVjaWZpZWQgYnkgYGxvd2AgKHRoZSBmaXJzdCBhcmd1bWVudCkgYW5kIGBoaWdoYCAodGhlIHNlY29uZCksIGFuZCByZXR1cm5zIGEgcmFuZG9tIGludGVnZXIgdW5pZm9ybWx5XG4gKiBkaXN0cmlidXRlZCBpbiB0aGUgY2xvc2VkIGludGVydmFsIGBbbG93LCBoaWdoXWAuIEl0IGlzIHVuc3BlY2lmaWVkIHdoYXQgaGFwcGVucyBpZiBgbG93ID4gaGlnaGAsIG9yIGlmIGVpdGhlciBvZlxuICogYGxvd2Agb3IgYGhpZ2hgIGlzIG5vdCBhbiBpbnRlZ2VyLlxuICpcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tSW50KGxvdzogbnVtYmVyLCBoaWdoOiBudW1iZXIpOiBJTzxudW1iZXI+IHtcbiAgcmV0dXJuIHBpcGUoXG4gICAgcmFuZG9tLFxuICAgIG1hcCgobikgPT4gTWF0aC5mbG9vcigoaGlnaCAtIGxvdyArIDEpICogbiArIGxvdykpXG4gIClcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgcmFuZG9tIG51bWJlciBiZXR3ZWVuIGEgbWluaW11bSB2YWx1ZSAoaW5jbHVzaXZlKSBhbmQgYSBtYXhpbXVtIHZhbHVlIChleGNsdXNpdmUpLiBJdCBpcyB1bnNwZWNpZmllZCB3aGF0XG4gKiBoYXBwZW5zIGlmIGBtYXhpbXVtIDwgbWluaW11bWAuXG4gKlxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByYW5kb21SYW5nZShtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBJTzxudW1iZXI+IHtcbiAgcmV0dXJuIHBpcGUoXG4gICAgcmFuZG9tLFxuICAgIG1hcCgobikgPT4gKG1heCAtIG1pbikgKiBuICsgbWluKVxuICApXG59XG5cbi8qKlxuICogUmV0dXJucyBhIHJhbmRvbSBib29sZWFuIHZhbHVlIHdpdGggYW4gZXF1YWwgY2hhbmNlIG9mIGJlaW5nIGB0cnVlYCBvciBgZmFsc2VgXG4gKlxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCByYW5kb21Cb29sOiBJTzxib29sZWFuPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgcGlwZShcbiAgICByYW5kb20sXG4gICAgbWFwKChuKSA9PiBuIDwgMC41KVxuICApXG5cbi8qKlxuICogUmV0dXJucyBhIHJhbmRvbSBlbGVtZW50IG9mIGEgYFJlYWRvbmx5Tm9uRW1wdHlBcnJheWAuXG4gKlxuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgcmFuZG9tRWxlbSA9IDxBPihhczogUmVhZG9ubHlOb25FbXB0eUFycmF5PEE+KTogSU88QT4gPT5cbiAgcGlwZShcbiAgICByYW5kb21JbnQoMCwgYXMubGVuZ3RoIC0gMSksXG4gICAgbWFwKChpKSA9PiBhc1tpXSlcbiAgKVxuIl19