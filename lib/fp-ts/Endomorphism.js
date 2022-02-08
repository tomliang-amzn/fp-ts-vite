"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSemigroup = exports.getMonoid = exports.URI = void 0;

var _function = require("./function");

/**
 * @since 2.11.0
 */
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------

/**
 * @category instances
 * @since 2.11.0
 */
var URI = 'Endomorphism';
/**
 * @category instances
 * @since 2.11.0
 */

exports.URI = URI;

/**
 * Endomorphism form a `Semigroup` where the `concat` operation is the usual function composition.
 *
 * @category instances
 * @since 2.11.0
 */
var getSemigroup = function getSemigroup() {
  return {
    concat: function concat(first, second) {
      return (0, _function.flow)(first, second);
    }
  };
};
/**
 * Endomorphism form a `Monoid` where the `empty` value is the `identity` function.
 *
 * @category instances
 * @since 2.11.0
 */


exports.getSemigroup = getSemigroup;

var getMonoid = function getMonoid() {
  return {
    concat: getSemigroup().concat,
    empty: _function.identity
  };
};

exports.getMonoid = getMonoid;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mcC10cy9FbmRvbW9ycGhpc20udHMiXSwibmFtZXMiOlsiVVJJIiwiZ2V0U2VtaWdyb3VwIiwiY29uY2F0IiwiZmlyc3QiLCJzZWNvbmQiLCJnZXRNb25vaWQiLCJlbXB0eSIsImlkZW50aXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUE7O0FBSkE7QUFDQTtBQUNBO0FBaUJBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLElBQU1BLEdBQUcsR0FBRyxjQUFaO0FBRVA7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZTtBQUFBLFNBQThDO0FBQ3hFQyxJQUFBQSxNQUFNLEVBQUUsZ0JBQUNDLEtBQUQsRUFBUUMsTUFBUjtBQUFBLGFBQW1CLG9CQUFLRCxLQUFMLEVBQVlDLE1BQVosQ0FBbkI7QUFBQTtBQURnRSxHQUE5QztBQUFBLENBQXJCO0FBSVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNPLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsU0FBMkM7QUFDbEVILElBQUFBLE1BQU0sRUFBRUQsWUFBWSxHQUFNQyxNQUR3QztBQUVsRUksSUFBQUEsS0FBSyxFQUFFQztBQUYyRCxHQUEzQztBQUFBLENBQWxCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cblxuaW1wb3J0IHsgZmxvdywgaWRlbnRpdHkgfSBmcm9tICcuL2Z1bmN0aW9uJ1xuaW1wb3J0IHsgTW9ub2lkIH0gZnJvbSAnLi9Nb25vaWQnXG5pbXBvcnQgeyBTZW1pZ3JvdXAgfSBmcm9tICcuL1NlbWlncm91cCdcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gbW9kZWxcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRW5kb21vcnBoaXNtPEE+IHtcbiAgKGE6IEEpOiBBXG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGluc3RhbmNlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBpbnN0YW5jZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBVUkkgPSAnRW5kb21vcnBoaXNtJ1xuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IHR5cGUgVVJJID0gdHlwZW9mIFVSSVxuXG5kZWNsYXJlIG1vZHVsZSAnLi9IS1QnIHtcbiAgaW50ZXJmYWNlIFVSSXRvS2luZDxBPiB7XG4gICAgcmVhZG9ubHkgW1VSSV06IEVuZG9tb3JwaGlzbTxBPlxuICB9XG59XG5cbi8qKlxuICogRW5kb21vcnBoaXNtIGZvcm0gYSBgU2VtaWdyb3VwYCB3aGVyZSB0aGUgYGNvbmNhdGAgb3BlcmF0aW9uIGlzIHRoZSB1c3VhbCBmdW5jdGlvbiBjb21wb3NpdGlvbi5cbiAqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRTZW1pZ3JvdXAgPSA8QSA9IG5ldmVyPigpOiBTZW1pZ3JvdXA8RW5kb21vcnBoaXNtPEE+PiA9PiAoe1xuICBjb25jYXQ6IChmaXJzdCwgc2Vjb25kKSA9PiBmbG93KGZpcnN0LCBzZWNvbmQpXG59KVxuXG4vKipcbiAqIEVuZG9tb3JwaGlzbSBmb3JtIGEgYE1vbm9pZGAgd2hlcmUgdGhlIGBlbXB0eWAgdmFsdWUgaXMgdGhlIGBpZGVudGl0eWAgZnVuY3Rpb24uXG4gKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgZ2V0TW9ub2lkID0gPEEgPSBuZXZlcj4oKTogTW9ub2lkPEVuZG9tb3JwaGlzbTxBPj4gPT4gKHtcbiAgY29uY2F0OiBnZXRTZW1pZ3JvdXA8QT4oKS5jb25jYXQsXG4gIGVtcHR5OiBpZGVudGl0eVxufSlcbiJdfQ==