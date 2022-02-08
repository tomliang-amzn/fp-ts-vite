"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.or = exports.not = exports.getSemigroupAny = exports.getSemigroupAll = exports.getMonoidAny = exports.getMonoidAll = exports.contramap = exports.and = exports.URI = exports.Contravariant = void 0;

var _function = require("./function");

/**
 * @since 2.11.0
 */
// -------------------------------------------------------------------------------------
// type class members
// -------------------------------------------------------------------------------------
var contramap_ = function contramap_(predicate, f) {
  return (0, _function.pipe)(predicate, contramap(f));
};
/**
 * @category Contravariant
 * @since 2.11.0
 */


var contramap = function contramap(f) {
  return function (predicate) {
    return (0, _function.flow)(f, predicate);
  };
}; // -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------

/**
 * @category instances
 * @since 2.11.0
 */


exports.contramap = contramap;
var URI = 'Predicate';
/**
 * @category instances
 * @since 2.11.0
 */

exports.URI = URI;

/**
 * @category instances
 * @since 2.11.0
 */
var getSemigroupAny = function getSemigroupAny() {
  return {
    concat: function concat(first, second) {
      return (0, _function.pipe)(first, or(second));
    }
  };
};
/**
 * @category instances
 * @since 2.11.0
 */


exports.getSemigroupAny = getSemigroupAny;

var getMonoidAny = function getMonoidAny() {
  return {
    concat: getSemigroupAny().concat,
    empty: _function.constFalse
  };
};
/**
 * @category instances
 * @since 2.11.0
 */


exports.getMonoidAny = getMonoidAny;

var getSemigroupAll = function getSemigroupAll() {
  return {
    concat: function concat(first, second) {
      return (0, _function.pipe)(first, and(second));
    }
  };
};
/**
 * @category instances
 * @since 2.11.0
 */


exports.getSemigroupAll = getSemigroupAll;

var getMonoidAll = function getMonoidAll() {
  return {
    concat: getSemigroupAll().concat,
    empty: _function.constTrue
  };
};
/**
 * @category instances
 * @since 2.11.0
 */


exports.getMonoidAll = getMonoidAll;
var Contravariant = {
  URI: URI,
  contramap: contramap_
}; // -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------

/**
 * @since 2.11.0
 */

exports.Contravariant = Contravariant;

var not = function not(predicate) {
  return function (a) {
    return !predicate(a);
  };
};
/**
 * @since 2.11.0
 */


exports.not = not;

var or = function or(second) {
  return function (first) {
    return function (a) {
      return first(a) || second(a);
    };
  };
};
/**
 * @since 2.11.0
 */


exports.or = or;

var and = function and(second) {
  return function (first) {
    return function (a) {
      return first(a) && second(a);
    };
  };
};

exports.and = and;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mcC10cy9QcmVkaWNhdGUudHMiXSwibmFtZXMiOlsiY29udHJhbWFwXyIsInByZWRpY2F0ZSIsImYiLCJjb250cmFtYXAiLCJVUkkiLCJnZXRTZW1pZ3JvdXBBbnkiLCJjb25jYXQiLCJmaXJzdCIsInNlY29uZCIsIm9yIiwiZ2V0TW9ub2lkQW55IiwiZW1wdHkiLCJjb25zdEZhbHNlIiwiZ2V0U2VtaWdyb3VwQWxsIiwiYW5kIiwiZ2V0TW9ub2lkQWxsIiwiY29uc3RUcnVlIiwiQ29udHJhdmFyaWFudCIsIm5vdCIsImEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQTs7QUFKQTtBQUNBO0FBQ0E7QUFpQkE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsVUFBNEMsR0FBRyxTQUEvQ0EsVUFBK0MsQ0FBQ0MsU0FBRCxFQUFZQyxDQUFaO0FBQUEsU0FBa0Isb0JBQUtELFNBQUwsRUFBZ0JFLFNBQVMsQ0FBQ0QsQ0FBRCxDQUF6QixDQUFsQjtBQUFBLENBQXJEO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQU9ELENBQVA7QUFBQSxTQUEwQixVQUFDRCxTQUFEO0FBQUEsV0FBMkMsb0JBQUtDLENBQUwsRUFBUUQsU0FBUixDQUEzQztBQUFBLEdBQTFCO0FBQUEsQ0FBbEIsQyxDQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUNPLElBQU1HLEdBQUcsR0FBRyxXQUFaO0FBRVA7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0I7QUFBQSxTQUEyQztBQUN4RUMsSUFBQUEsTUFBTSxFQUFFLGdCQUFDQyxLQUFELEVBQVFDLE1BQVI7QUFBQSxhQUFtQixvQkFBS0QsS0FBTCxFQUFZRSxFQUFFLENBQUNELE1BQUQsQ0FBZCxDQUFuQjtBQUFBO0FBRGdFLEdBQTNDO0FBQUEsQ0FBeEI7QUFJUDtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDTyxJQUFNRSxZQUFZLEdBQUcsU0FBZkEsWUFBZTtBQUFBLFNBQXdDO0FBQ2xFSixJQUFBQSxNQUFNLEVBQUVELGVBQWUsR0FBTUMsTUFEcUM7QUFFbEVLLElBQUFBLEtBQUssRUFBRUM7QUFGMkQsR0FBeEM7QUFBQSxDQUFyQjtBQUtQO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNPLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0I7QUFBQSxTQUEyQztBQUN4RVAsSUFBQUEsTUFBTSxFQUFFLGdCQUFDQyxLQUFELEVBQVFDLE1BQVI7QUFBQSxhQUFtQixvQkFBS0QsS0FBTCxFQUFZTyxHQUFHLENBQUNOLE1BQUQsQ0FBZixDQUFuQjtBQUFBO0FBRGdFLEdBQTNDO0FBQUEsQ0FBeEI7QUFJUDtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDTyxJQUFNTyxZQUFZLEdBQUcsU0FBZkEsWUFBZTtBQUFBLFNBQXdDO0FBQ2xFVCxJQUFBQSxNQUFNLEVBQUVPLGVBQWUsR0FBTVAsTUFEcUM7QUFFbEVLLElBQUFBLEtBQUssRUFBRUs7QUFGMkQsR0FBeEM7QUFBQSxDQUFyQjtBQUtQO0FBQ0E7QUFDQTtBQUNBOzs7O0FBQ08sSUFBTUMsYUFBa0MsR0FBRztBQUNoRGIsRUFBQUEsR0FBRyxFQUFIQSxHQURnRDtBQUVoREQsRUFBQUEsU0FBUyxFQUFFSDtBQUZxQyxDQUEzQyxDLENBS1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7OztBQUNPLElBQU1rQixHQUFHLEdBQUcsU0FBTkEsR0FBTSxDQUFJakIsU0FBSjtBQUFBLFNBQThDLFVBQUNrQixDQUFEO0FBQUEsV0FBTyxDQUFDbEIsU0FBUyxDQUFDa0IsQ0FBRCxDQUFqQjtBQUFBLEdBQTlDO0FBQUEsQ0FBWjtBQUVQO0FBQ0E7QUFDQTs7Ozs7QUFDTyxJQUFNVixFQUFFLEdBQUcsU0FBTEEsRUFBSyxDQUFJRCxNQUFKO0FBQUEsU0FBNkIsVUFBQ0QsS0FBRDtBQUFBLFdBQXVDLFVBQUNZLENBQUQ7QUFBQSxhQUFPWixLQUFLLENBQUNZLENBQUQsQ0FBTCxJQUFZWCxNQUFNLENBQUNXLENBQUQsQ0FBekI7QUFBQSxLQUF2QztBQUFBLEdBQTdCO0FBQUEsQ0FBWDtBQUVQO0FBQ0E7QUFDQTs7Ozs7QUFDTyxJQUFNTCxHQUFHLEdBQUcsU0FBTkEsR0FBTSxDQUFJTixNQUFKO0FBQUEsU0FBNkIsVUFBQ0QsS0FBRDtBQUFBLFdBQXVDLFVBQUNZLENBQUQ7QUFBQSxhQUFPWixLQUFLLENBQUNZLENBQUQsQ0FBTCxJQUFZWCxNQUFNLENBQUNXLENBQUQsQ0FBekI7QUFBQSxLQUF2QztBQUFBLEdBQTdCO0FBQUEsQ0FBWiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHNpbmNlIDIuMTEuMFxuICovXG5pbXBvcnQgeyBDb250cmF2YXJpYW50MSB9IGZyb20gJy4vQ29udHJhdmFyaWFudCdcbmltcG9ydCB7IGNvbnN0RmFsc2UsIGNvbnN0VHJ1ZSwgZmxvdywgcGlwZSB9IGZyb20gJy4vZnVuY3Rpb24nXG5pbXBvcnQgeyBNb25vaWQgfSBmcm9tICcuL01vbm9pZCdcbmltcG9ydCB7IFNlbWlncm91cCB9IGZyb20gJy4vU2VtaWdyb3VwJ1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBtb2RlbFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQcmVkaWNhdGU8QT4ge1xuICAoYTogQSk6IGJvb2xlYW5cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gdHlwZSBjbGFzcyBtZW1iZXJzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmNvbnN0IGNvbnRyYW1hcF86IENvbnRyYXZhcmlhbnQxPFVSST5bJ2NvbnRyYW1hcCddID0gKHByZWRpY2F0ZSwgZikgPT4gcGlwZShwcmVkaWNhdGUsIGNvbnRyYW1hcChmKSlcblxuLyoqXG4gKiBAY2F0ZWdvcnkgQ29udHJhdmFyaWFudFxuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgY29udHJhbWFwID0gPEIsIEE+KGY6IChiOiBCKSA9PiBBKSA9PiAocHJlZGljYXRlOiBQcmVkaWNhdGU8QT4pOiBQcmVkaWNhdGU8Qj4gPT4gZmxvdyhmLCBwcmVkaWNhdGUpXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGluc3RhbmNlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IFVSSSA9ICdQcmVkaWNhdGUnXG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgdHlwZSBVUkkgPSB0eXBlb2YgVVJJXG5cbmRlY2xhcmUgbW9kdWxlICcuL0hLVCcge1xuICBpbnRlcmZhY2UgVVJJdG9LaW5kPEE+IHtcbiAgICByZWFkb25seSBbVVJJXTogUHJlZGljYXRlPEE+XG4gIH1cbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRTZW1pZ3JvdXBBbnkgPSA8QSA9IG5ldmVyPigpOiBTZW1pZ3JvdXA8UHJlZGljYXRlPEE+PiA9PiAoe1xuICBjb25jYXQ6IChmaXJzdCwgc2Vjb25kKSA9PiBwaXBlKGZpcnN0LCBvcihzZWNvbmQpKVxufSlcblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRNb25vaWRBbnkgPSA8QSA9IG5ldmVyPigpOiBNb25vaWQ8UHJlZGljYXRlPEE+PiA9PiAoe1xuICBjb25jYXQ6IGdldFNlbWlncm91cEFueTxBPigpLmNvbmNhdCxcbiAgZW1wdHk6IGNvbnN0RmFsc2Vcbn0pXG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgZ2V0U2VtaWdyb3VwQWxsID0gPEEgPSBuZXZlcj4oKTogU2VtaWdyb3VwPFByZWRpY2F0ZTxBPj4gPT4gKHtcbiAgY29uY2F0OiAoZmlyc3QsIHNlY29uZCkgPT4gcGlwZShmaXJzdCwgYW5kKHNlY29uZCkpXG59KVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGdldE1vbm9pZEFsbCA9IDxBID0gbmV2ZXI+KCk6IE1vbm9pZDxQcmVkaWNhdGU8QT4+ID0+ICh7XG4gIGNvbmNhdDogZ2V0U2VtaWdyb3VwQWxsPEE+KCkuY29uY2F0LFxuICBlbXB0eTogY29uc3RUcnVlXG59KVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IENvbnRyYXZhcmlhbnQ6IENvbnRyYXZhcmlhbnQxPFVSST4gPSB7XG4gIFVSSSxcbiAgY29udHJhbWFwOiBjb250cmFtYXBfXG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIHV0aWxzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3Qgbm90ID0gPEE+KHByZWRpY2F0ZTogUHJlZGljYXRlPEE+KTogUHJlZGljYXRlPEE+ID0+IChhKSA9PiAhcHJlZGljYXRlKGEpXG5cbi8qKlxuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3Qgb3IgPSA8QT4oc2Vjb25kOiBQcmVkaWNhdGU8QT4pID0+IChmaXJzdDogUHJlZGljYXRlPEE+KTogUHJlZGljYXRlPEE+ID0+IChhKSA9PiBmaXJzdChhKSB8fCBzZWNvbmQoYSlcblxuLyoqXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBhbmQgPSA8QT4oc2Vjb25kOiBQcmVkaWNhdGU8QT4pID0+IChmaXJzdDogUHJlZGljYXRlPEE+KTogUHJlZGljYXRlPEE+ID0+IChhKSA9PiBmaXJzdChhKSAmJiBzZWNvbmQoYSlcbiJdfQ==