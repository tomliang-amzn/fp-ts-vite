"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Semigroup = exports.Monoid = void 0;

var Se = _interopRequireWildcard(require("./Semigroup"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @since 2.11.0
 */
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------

/**
 * @category instances
 * @since 2.11.0
 */
var Semigroup = Se.constant(undefined);
/**
 * @category instances
 * @since 2.11.0
 */

exports.Semigroup = Semigroup;
var Monoid = {
  concat: Semigroup.concat,
  empty: undefined
};
exports.Monoid = Monoid;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mcC10cy92b2lkLnRzIl0sIm5hbWVzIjpbIlNlbWlncm91cCIsIlNlIiwiY29uc3RhbnQiLCJ1bmRlZmluZWQiLCJNb25vaWQiLCJjb25jYXQiLCJlbXB0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBSUE7Ozs7OztBQUpBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLElBQU1BLFNBQTZCLEdBQUdDLEVBQUUsQ0FBQ0MsUUFBSCxDQUFrQkMsU0FBbEIsQ0FBdEM7QUFFUDtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTUMsTUFBc0IsR0FBRztBQUNwQ0MsRUFBQUEsTUFBTSxFQUFFTCxTQUFTLENBQUNLLE1BRGtCO0FBRXBDQyxFQUFBQSxLQUFLLEVBQUVIO0FBRjZCLENBQS9CIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmltcG9ydCAqIGFzIE0gZnJvbSAnLi9Nb25vaWQnXG5pbXBvcnQgKiBhcyBTZSBmcm9tICcuL1NlbWlncm91cCdcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gaW5zdGFuY2VzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgU2VtaWdyb3VwOiBTZS5TZW1pZ3JvdXA8dm9pZD4gPSBTZS5jb25zdGFudDx2b2lkPih1bmRlZmluZWQpXG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgTW9ub2lkOiBNLk1vbm9pZDx2b2lkPiA9IHtcbiAgY29uY2F0OiBTZW1pZ3JvdXAuY29uY2F0LFxuICBlbXB0eTogdW5kZWZpbmVkXG59XG4iXX0=