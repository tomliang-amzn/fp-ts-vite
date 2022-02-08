"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.now = exports.eqYear = exports.eqMonth = exports.eqDate = exports.create = exports.Ord = exports.Eq = void 0;

var _function = require("./function");

var O = _interopRequireWildcard(require("./Ord"));

var N = _interopRequireWildcard(require("./number"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @since 2.0.0
 */
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------

/**
 * @category instances
 * @since 2.10.0
 */
var Eq = {
  equals: function equals(first, second) {
    return first.valueOf() === second.valueOf();
  }
};
/**
 * @category instances
 * @since 2.6.0
 */

exports.Eq = Eq;
var eqDate = {
  equals: function equals(x, y) {
    return x.getDate() === y.getDate();
  }
};
/**
 * @category instances
 * @since 2.6.0
 */

exports.eqDate = eqDate;
var eqMonth = {
  equals: function equals(x, y) {
    return x.getMonth() === y.getMonth();
  }
};
/**
 * @category instances
 * @since 2.6.0
 */

exports.eqMonth = eqMonth;
var eqYear = {
  equals: function equals(x, y) {
    return x.getFullYear() === y.getFullYear();
  }
};
/**
 * @example
 * import { Ord } from 'fp-ts/Date'
 *
 * assert.deepStrictEqual(Ord.compare(new Date(1, 1, 2020), new Date(1, 1, 2021)), -1)
 *
 * @category instances
 * @since 2.10.0
 */

exports.eqYear = eqYear;
var Ord = /*#__PURE__*/(0, _function.pipe)(N.Ord, /*#__PURE__*/O.contramap(function (date) {
  return date.valueOf();
})); // -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------

/**
 * Returns the current `Date`
 *
 * @category constructors
 * @since 2.0.0
 */

exports.Ord = Ord;

var create = function create() {
  return new Date();
};
/**
 * Returns the number of milliseconds elapsed since January 1, 1970, 00:00:00 UTC
 *
 * @since 2.0.0
 */


exports.create = create;

var now = function now() {
  return new Date().getTime();
};

exports.now = now;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mcC10cy9EYXRlLnRzIl0sIm5hbWVzIjpbIkVxIiwiZXF1YWxzIiwiZmlyc3QiLCJzZWNvbmQiLCJ2YWx1ZU9mIiwiZXFEYXRlIiwieCIsInkiLCJnZXREYXRlIiwiZXFNb250aCIsImdldE1vbnRoIiwiZXFZZWFyIiwiZ2V0RnVsbFllYXIiLCJPcmQiLCJOIiwiTyIsImNvbnRyYW1hcCIsImRhdGUiLCJjcmVhdGUiLCJEYXRlIiwibm93IiwiZ2V0VGltZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBSUE7O0FBRUE7O0FBQ0E7Ozs7OztBQVBBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLElBQU1BLEVBQWMsR0FBRztBQUM1QkMsRUFBQUEsTUFBTSxFQUFFLGdCQUFDQyxLQUFELEVBQVFDLE1BQVI7QUFBQSxXQUFtQkQsS0FBSyxDQUFDRSxPQUFOLE9BQW9CRCxNQUFNLENBQUNDLE9BQVAsRUFBdkM7QUFBQTtBQURvQixDQUF2QjtBQUlQO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxJQUFNQyxNQUFrQixHQUFHO0FBQ2hDSixFQUFBQSxNQUFNLEVBQUUsZ0JBQUNLLENBQUQsRUFBSUMsQ0FBSjtBQUFBLFdBQVVELENBQUMsQ0FBQ0UsT0FBRixPQUFnQkQsQ0FBQyxDQUFDQyxPQUFGLEVBQTFCO0FBQUE7QUFEd0IsQ0FBM0I7QUFJUDtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTUMsT0FBbUIsR0FBRztBQUNqQ1IsRUFBQUEsTUFBTSxFQUFFLGdCQUFDSyxDQUFELEVBQUlDLENBQUo7QUFBQSxXQUFVRCxDQUFDLENBQUNJLFFBQUYsT0FBaUJILENBQUMsQ0FBQ0csUUFBRixFQUEzQjtBQUFBO0FBRHlCLENBQTVCO0FBSVA7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLElBQU1DLE1BQWtCLEdBQUc7QUFDaENWLEVBQUFBLE1BQU0sRUFBRSxnQkFBQ0ssQ0FBRCxFQUFJQyxDQUFKO0FBQUEsV0FBVUQsQ0FBQyxDQUFDTSxXQUFGLE9BQW9CTCxDQUFDLENBQUNLLFdBQUYsRUFBOUI7QUFBQTtBQUR3QixDQUEzQjtBQUlQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTUMsR0FBZ0IsR0FDM0IsYUFDQSxvQkFDRUMsQ0FBQyxDQUFDRCxHQURKLEVBRUUsYUFDQUUsQ0FBQyxDQUFDQyxTQUFGLENBQVksVUFBQ0MsSUFBRDtBQUFBLFNBQVVBLElBQUksQ0FBQ2IsT0FBTCxFQUFWO0FBQUEsQ0FBWixDQUhGLENBRkssQyxDQVFQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFDTyxJQUFNYyxNQUFnQixHQUFHLFNBQW5CQSxNQUFtQjtBQUFBLFNBQU0sSUFBSUMsSUFBSixFQUFOO0FBQUEsQ0FBekI7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNPLElBQU1DLEdBQWUsR0FBRyxTQUFsQkEsR0FBa0I7QUFBQSxTQUFNLElBQUlELElBQUosR0FBV0UsT0FBWCxFQUFOO0FBQUEsQ0FBeEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5pbXBvcnQgKiBhcyBFIGZyb20gJy4vRXEnXG5pbXBvcnQgeyBwaXBlIH0gZnJvbSAnLi9mdW5jdGlvbidcbmltcG9ydCB7IElPIH0gZnJvbSAnLi9JTydcbmltcG9ydCAqIGFzIE8gZnJvbSAnLi9PcmQnXG5pbXBvcnQgKiBhcyBOIGZyb20gJy4vbnVtYmVyJ1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBpbnN0YW5jZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBFcTogRS5FcTxEYXRlPiA9IHtcbiAgZXF1YWxzOiAoZmlyc3QsIHNlY29uZCkgPT4gZmlyc3QudmFsdWVPZigpID09PSBzZWNvbmQudmFsdWVPZigpXG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuNi4wXG4gKi9cbmV4cG9ydCBjb25zdCBlcURhdGU6IEUuRXE8RGF0ZT4gPSB7XG4gIGVxdWFsczogKHgsIHkpID0+IHguZ2V0RGF0ZSgpID09PSB5LmdldERhdGUoKVxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjYuMFxuICovXG5leHBvcnQgY29uc3QgZXFNb250aDogRS5FcTxEYXRlPiA9IHtcbiAgZXF1YWxzOiAoeCwgeSkgPT4geC5nZXRNb250aCgpID09PSB5LmdldE1vbnRoKClcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi42LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGVxWWVhcjogRS5FcTxEYXRlPiA9IHtcbiAgZXF1YWxzOiAoeCwgeSkgPT4geC5nZXRGdWxsWWVhcigpID09PSB5LmdldEZ1bGxZZWFyKClcbn1cblxuLyoqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgT3JkIH0gZnJvbSAnZnAtdHMvRGF0ZSdcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKE9yZC5jb21wYXJlKG5ldyBEYXRlKDEsIDEsIDIwMjApLCBuZXcgRGF0ZSgxLCAxLCAyMDIxKSksIC0xKVxuICpcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IE9yZDogTy5PcmQ8RGF0ZT4gPVxuICAvKiNfX1BVUkVfXyovXG4gIHBpcGUoXG4gICAgTi5PcmQsXG4gICAgLyojX19QVVJFX18qL1xuICAgIE8uY29udHJhbWFwKChkYXRlKSA9PiBkYXRlLnZhbHVlT2YoKSlcbiAgKVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyB1dGlsc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIFJldHVybnMgdGhlIGN1cnJlbnQgYERhdGVgXG4gKlxuICogQGNhdGVnb3J5IGNvbnN0cnVjdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBjcmVhdGU6IElPPERhdGU+ID0gKCkgPT4gbmV3IERhdGUoKVxuXG4vKipcbiAqIFJldHVybnMgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgZWxhcHNlZCBzaW5jZSBKYW51YXJ5IDEsIDE5NzAsIDAwOjAwOjAwIFVUQ1xuICpcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3Qgbm93OiBJTzxudW1iZXI+ID0gKCkgPT4gbmV3IERhdGUoKS5nZXRUaW1lKClcbiJdfQ==