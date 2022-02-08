"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.separated = exports.right = exports.mapLeft = exports.map = exports.left = exports.flap = exports.bimap = exports.URI = exports.Functor = exports.Bifunctor = void 0;

var _function = require("./function");

var _Functor = require("./Functor");

/**
 * ```ts
 * interface Separated<E, A> {
 *    readonly left: E
 *    readonly right: A
 * }
 * ```
 *
 * Represents a result of separating a whole into two parts.
 *
 * @since 2.10.0
 */
// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------

/**
 * @category constructors
 * @since 2.10.0
 */
var separated = function separated(left, right) {
  return {
    left: left,
    right: right
  };
}; // -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------


exports.separated = separated;

var _map = function _map(fa, f) {
  return (0, _function.pipe)(fa, map(f));
};

var _mapLeft = function _mapLeft(fa, f) {
  return (0, _function.pipe)(fa, mapLeft(f));
};

var _bimap = function _bimap(fa, g, f) {
  return (0, _function.pipe)(fa, bimap(g, f));
}; // -------------------------------------------------------------------------------------
// type class members
// -------------------------------------------------------------------------------------

/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent some computational context.
 *
 * @category Functor
 * @since 2.10.0
 */


var map = function map(f) {
  return function (fa) {
    return separated(left(fa), f(right(fa)));
  };
};
/**
 * Map a function over the first type argument of a bifunctor.
 *
 * @category Bifunctor
 * @since 2.10.0
 */


exports.map = map;

var mapLeft = function mapLeft(f) {
  return function (fa) {
    return separated(f(left(fa)), right(fa));
  };
};
/**
 * Map a pair of functions over the two type arguments of the bifunctor.
 *
 * @category Bifunctor
 * @since 2.10.0
 */


exports.mapLeft = mapLeft;

var bimap = function bimap(f, g) {
  return function (fa) {
    return separated(f(left(fa)), g(right(fa)));
  };
}; // -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------

/**
 * @category instances
 * @since 2.10.0
 */


exports.bimap = bimap;
var URI = 'Separated';
/**
 * @category instances
 * @since 2.10.0
 */

exports.URI = URI;

/**
 * @category instances
 * @since 2.10.0
 */
var Bifunctor = {
  URI: URI,
  mapLeft: _mapLeft,
  bimap: _bimap
};
/**
 * @category instances
 * @since 2.10.0
 */

exports.Bifunctor = Bifunctor;
var Functor = {
  URI: URI,
  map: _map
};
/**
 * Derivable from `Functor`.
 *
 * @category combinators
 * @since 2.10.0
 */

exports.Functor = Functor;
var flap = /*#__PURE__*/(0, _Functor.flap)(Functor); // -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------

/**
 * @since 2.10.0
 */

exports.flap = flap;

var left = function left(s) {
  return s.left;
};
/**
 * @since 2.10.0
 */


exports.left = left;

var right = function right(s) {
  return s.right;
};

exports.right = right;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mcC10cy9TZXBhcmF0ZWQudHMiXSwibmFtZXMiOlsic2VwYXJhdGVkIiwibGVmdCIsInJpZ2h0IiwiX21hcCIsImZhIiwiZiIsIm1hcCIsIl9tYXBMZWZ0IiwibWFwTGVmdCIsIl9iaW1hcCIsImciLCJiaW1hcCIsIlVSSSIsIkJpZnVuY3RvciIsIkZ1bmN0b3IiLCJmbGFwIiwicyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQWFBOztBQUNBOztBQWRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXFCQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDTyxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFPQyxJQUFQLEVBQWdCQyxLQUFoQjtBQUFBLFNBQStDO0FBQUVELElBQUFBLElBQUksRUFBSkEsSUFBRjtBQUFRQyxJQUFBQSxLQUFLLEVBQUxBO0FBQVIsR0FBL0M7QUFBQSxDQUFsQixDLENBRVA7QUFDQTtBQUNBOzs7OztBQUVBLElBQU1DLElBQTBCLEdBQUcsU0FBN0JBLElBQTZCLENBQUNDLEVBQUQsRUFBS0MsQ0FBTDtBQUFBLFNBQVcsb0JBQUtELEVBQUwsRUFBU0UsR0FBRyxDQUFDRCxDQUFELENBQVosQ0FBWDtBQUFBLENBQW5DOztBQUNBLElBQU1FLFFBQW9DLEdBQUcsU0FBdkNBLFFBQXVDLENBQUNILEVBQUQsRUFBS0MsQ0FBTDtBQUFBLFNBQVcsb0JBQUtELEVBQUwsRUFBU0ksT0FBTyxDQUFDSCxDQUFELENBQWhCLENBQVg7QUFBQSxDQUE3Qzs7QUFDQSxJQUFNSSxNQUFnQyxHQUFHLFNBQW5DQSxNQUFtQyxDQUFDTCxFQUFELEVBQUtNLENBQUwsRUFBUUwsQ0FBUjtBQUFBLFNBQWMsb0JBQUtELEVBQUwsRUFBU08sS0FBSyxDQUFDRCxDQUFELEVBQUlMLENBQUosQ0FBZCxDQUFkO0FBQUEsQ0FBekMsQyxDQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTUMsR0FBRyxHQUFHLFNBQU5BLEdBQU0sQ0FBT0QsQ0FBUDtBQUFBLFNBQTBCLFVBQUlELEVBQUo7QUFBQSxXQUMzQ0osU0FBUyxDQUFDQyxJQUFJLENBQUNHLEVBQUQsQ0FBTCxFQUFXQyxDQUFDLENBQUNILEtBQUssQ0FBQ0UsRUFBRCxDQUFOLENBQVosQ0FEa0M7QUFBQSxHQUExQjtBQUFBLENBQVo7QUFHUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ08sSUFBTUksT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBT0gsQ0FBUDtBQUFBLFNBQTBCLFVBQUlELEVBQUo7QUFBQSxXQUMvQ0osU0FBUyxDQUFDSyxDQUFDLENBQUNKLElBQUksQ0FBQ0csRUFBRCxDQUFMLENBQUYsRUFBY0YsS0FBSyxDQUFDRSxFQUFELENBQW5CLENBRHNDO0FBQUEsR0FBMUI7QUFBQSxDQUFoQjtBQUdQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDTyxJQUFNTyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFhTixDQUFiLEVBQTZCSyxDQUE3QjtBQUFBLFNBQWdELFVBQUNOLEVBQUQ7QUFBQSxXQUNuRUosU0FBUyxDQUFDSyxDQUFDLENBQUNKLElBQUksQ0FBQ0csRUFBRCxDQUFMLENBQUYsRUFBY00sQ0FBQyxDQUFDUixLQUFLLENBQUNFLEVBQUQsQ0FBTixDQUFmLENBRDBEO0FBQUEsR0FBaEQ7QUFBQSxDQUFkLEMsQ0FHUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFDTyxJQUFNUSxHQUFHLEdBQUcsV0FBWjtBQUVQO0FBQ0E7QUFDQTtBQUNBOzs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxJQUFNQyxTQUEwQixHQUFHO0FBQ3hDRCxFQUFBQSxHQUFHLEVBQUhBLEdBRHdDO0FBRXhDSixFQUFBQSxPQUFPLEVBQUVELFFBRitCO0FBR3hDSSxFQUFBQSxLQUFLLEVBQUVGO0FBSGlDLENBQW5DO0FBTVA7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLElBQU1LLE9BQXNCLEdBQUc7QUFDcENGLEVBQUFBLEdBQUcsRUFBSEEsR0FEb0M7QUFFcENOLEVBQUFBLEdBQUcsRUFBRUg7QUFGK0IsQ0FBL0I7QUFLUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLElBQU1ZLElBQUksR0FDZixhQUNBLG1CQUFNRCxPQUFOLENBRkssQyxDQUlQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFDTyxJQUFNYixJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFPZSxDQUFQO0FBQUEsU0FBaUNBLENBQUMsQ0FBQ2YsSUFBbkM7QUFBQSxDQUFiO0FBRVA7QUFDQTtBQUNBOzs7OztBQUNPLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQU9jLENBQVA7QUFBQSxTQUFpQ0EsQ0FBQyxDQUFDZCxLQUFuQztBQUFBLENBQWQiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIGBgYHRzXG4gKiBpbnRlcmZhY2UgU2VwYXJhdGVkPEUsIEE+IHtcbiAqICAgIHJlYWRvbmx5IGxlZnQ6IEVcbiAqICAgIHJlYWRvbmx5IHJpZ2h0OiBBXG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBSZXByZXNlbnRzIGEgcmVzdWx0IG9mIHNlcGFyYXRpbmcgYSB3aG9sZSBpbnRvIHR3byBwYXJ0cy5cbiAqXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cblxuaW1wb3J0IHsgcGlwZSB9IGZyb20gJy4vZnVuY3Rpb24nXG5pbXBvcnQgeyBmbGFwIGFzIGZsYXBfLCBGdW5jdG9yMiB9IGZyb20gJy4vRnVuY3RvcidcbmltcG9ydCB7IEJpZnVuY3RvcjIgfSBmcm9tICcuL0JpZnVuY3RvcidcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gbW9kZWxcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBBIGBTZXBhcmF0ZWRgIHR5cGUgd2hpY2ggaG9sZHMgYGxlZnRgIGFuZCBgcmlnaHRgIHBhcnRzLlxuICpcbiAqIEBjYXRlZ29yeSB0eXBlIGNsYXNzZXNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTZXBhcmF0ZWQ8RSwgQT4ge1xuICByZWFkb25seSBsZWZ0OiBFXG4gIHJlYWRvbmx5IHJpZ2h0OiBBXG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGNvbnN0cnVjdG9yc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb25zdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHNlcGFyYXRlZCA9IDxFLCBBPihsZWZ0OiBFLCByaWdodDogQSk6IFNlcGFyYXRlZDxFLCBBPiA9PiAoeyBsZWZ0LCByaWdodCB9KVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBub24tcGlwZWFibGVzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmNvbnN0IF9tYXA6IEZ1bmN0b3IyPFVSST5bJ21hcCddID0gKGZhLCBmKSA9PiBwaXBlKGZhLCBtYXAoZikpXG5jb25zdCBfbWFwTGVmdDogQmlmdW5jdG9yMjxVUkk+WydtYXBMZWZ0J10gPSAoZmEsIGYpID0+IHBpcGUoZmEsIG1hcExlZnQoZikpXG5jb25zdCBfYmltYXA6IEJpZnVuY3RvcjI8VVJJPlsnYmltYXAnXSA9IChmYSwgZywgZikgPT4gcGlwZShmYSwgYmltYXAoZywgZikpXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIHR5cGUgY2xhc3MgbWVtYmVyc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIGBtYXBgIGNhbiBiZSB1c2VkIHRvIHR1cm4gZnVuY3Rpb25zIGAoYTogQSkgPT4gQmAgaW50byBmdW5jdGlvbnMgYChmYTogRjxBPikgPT4gRjxCPmAgd2hvc2UgYXJndW1lbnQgYW5kIHJldHVybiB0eXBlc1xuICogdXNlIHRoZSB0eXBlIGNvbnN0cnVjdG9yIGBGYCB0byByZXByZXNlbnQgc29tZSBjb21wdXRhdGlvbmFsIGNvbnRleHQuXG4gKlxuICogQGNhdGVnb3J5IEZ1bmN0b3JcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IG1hcCA9IDxBLCBCPihmOiAoYTogQSkgPT4gQikgPT4gPEU+KGZhOiBTZXBhcmF0ZWQ8RSwgQT4pOiBTZXBhcmF0ZWQ8RSwgQj4gPT5cbiAgc2VwYXJhdGVkKGxlZnQoZmEpLCBmKHJpZ2h0KGZhKSkpXG5cbi8qKlxuICogTWFwIGEgZnVuY3Rpb24gb3ZlciB0aGUgZmlyc3QgdHlwZSBhcmd1bWVudCBvZiBhIGJpZnVuY3Rvci5cbiAqXG4gKiBAY2F0ZWdvcnkgQmlmdW5jdG9yXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBtYXBMZWZ0ID0gPEUsIEc+KGY6IChlOiBFKSA9PiBHKSA9PiA8QT4oZmE6IFNlcGFyYXRlZDxFLCBBPik6IFNlcGFyYXRlZDxHLCBBPiA9PlxuICBzZXBhcmF0ZWQoZihsZWZ0KGZhKSksIHJpZ2h0KGZhKSlcblxuLyoqXG4gKiBNYXAgYSBwYWlyIG9mIGZ1bmN0aW9ucyBvdmVyIHRoZSB0d28gdHlwZSBhcmd1bWVudHMgb2YgdGhlIGJpZnVuY3Rvci5cbiAqXG4gKiBAY2F0ZWdvcnkgQmlmdW5jdG9yXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBiaW1hcCA9IDxFLCBHLCBBLCBCPihmOiAoZTogRSkgPT4gRywgZzogKGE6IEEpID0+IEIpID0+IChmYTogU2VwYXJhdGVkPEUsIEE+KTogU2VwYXJhdGVkPEcsIEI+ID0+XG4gIHNlcGFyYXRlZChmKGxlZnQoZmEpKSwgZyhyaWdodChmYSkpKVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBpbnN0YW5jZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBVUkkgPSAnU2VwYXJhdGVkJ1xuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IHR5cGUgVVJJID0gdHlwZW9mIFVSSVxuXG5kZWNsYXJlIG1vZHVsZSAnLi9IS1QnIHtcbiAgaW50ZXJmYWNlIFVSSXRvS2luZDI8RSwgQT4ge1xuICAgIHJlYWRvbmx5IFtVUkldOiBTZXBhcmF0ZWQ8RSwgQT5cbiAgfVxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IEJpZnVuY3RvcjogQmlmdW5jdG9yMjxVUkk+ID0ge1xuICBVUkksXG4gIG1hcExlZnQ6IF9tYXBMZWZ0LFxuICBiaW1hcDogX2JpbWFwXG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgRnVuY3RvcjogRnVuY3RvcjI8VVJJPiA9IHtcbiAgVVJJLFxuICBtYXA6IF9tYXBcbn1cblxuLyoqXG4gKiBEZXJpdmFibGUgZnJvbSBgRnVuY3RvcmAuXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBmbGFwID1cbiAgLyojX19QVVJFX18qL1xuICBmbGFwXyhGdW5jdG9yKVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyB1dGlsc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGxlZnQgPSA8RSwgQT4oczogU2VwYXJhdGVkPEUsIEE+KTogRSA9PiBzLmxlZnRcblxuLyoqXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCByaWdodCA9IDxFLCBBPihzOiBTZXBhcmF0ZWQ8RSwgQT4pOiBBID0+IHMucmlnaHRcbiJdfQ==