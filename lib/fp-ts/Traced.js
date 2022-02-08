"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.URI = exports.Functor = void 0;
exports.censor = censor;
exports.flap = void 0;
exports.getComonad = getComonad;
exports.listen = listen;
exports.listens = listens;
exports.traced = exports.map = void 0;
exports.tracks = tracks;

var _Functor = require("./Functor");

var _function = require("./function");

/**
 * @since 2.0.0
 */
// TODO: curry in v3

/**
 * Extracts a value at a relative position which depends on the current value.
 *
 * @since 2.0.0
 */
function tracks(M, f) {
  return function (wa) {
    return wa(f(wa(M.empty)));
  };
}
/**
 * Get the current position
 *
 * @since 2.0.0
 */


function listen(wa) {
  return function (e) {
    return [wa(e), e];
  };
}
/**
 * Get a value which depends on the current position
 *
 * @since 2.0.0
 */


function listens(f) {
  return function (wa) {
    return function (e) {
      return [wa(e), f(e)];
    };
  };
}
/**
 * Apply a function to the current position
 *
 * @since 2.0.0
 */


function censor(f) {
  return function (wa) {
    return function (e) {
      return wa(f(e));
    };
  };
}
/**
 * @category instances
 * @since 2.0.0
 */


function getComonad(monoid) {
  function extend(wa, f) {
    return function (p1) {
      return f(function (p2) {
        return wa(monoid.concat(p1, p2));
      });
    };
  }

  function extract(wa) {
    return wa(monoid.empty);
  }

  return {
    URI: URI,
    _E: undefined,
    map: _map,
    extend: extend,
    extract: extract
  };
} // -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------

/* istanbul ignore next */


var _map = function _map(fa, f) {
  return (0, _function.pipe)(fa, map(f));
}; // -------------------------------------------------------------------------------------
// type class members
// -------------------------------------------------------------------------------------

/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent some computational context.
 *
 * @category Functor
 * @since 2.0.0
 */


var map = function map(f) {
  return function (fa) {
    return function (p) {
      return f(fa(p));
    };
  };
}; // -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------

/**
 * @category instances
 * @since 2.0.0
 */


exports.map = map;
var URI = 'Traced';
/**
 * @category instances
 * @since 2.0.0
 */

exports.URI = URI;

/**
 * @category instances
 * @since 2.7.0
 */
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
// deprecated
// -------------------------------------------------------------------------------------

/**
 * Use [`Functor`](#functor) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */

exports.flap = flap;
var traced = Functor;
exports.traced = traced;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mcC10cy9UcmFjZWQudHMiXSwibmFtZXMiOlsidHJhY2tzIiwiTSIsImYiLCJ3YSIsImVtcHR5IiwibGlzdGVuIiwiZSIsImxpc3RlbnMiLCJjZW5zb3IiLCJnZXRDb21vbmFkIiwibW9ub2lkIiwiZXh0ZW5kIiwicDEiLCJwMiIsImNvbmNhdCIsImV4dHJhY3QiLCJVUkkiLCJfRSIsInVuZGVmaW5lZCIsIm1hcCIsIl9tYXAiLCJmYSIsInAiLCJGdW5jdG9yIiwiZmxhcCIsInRyYWNlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFJQTs7QUFFQTs7QUFOQTtBQUNBO0FBQ0E7QUFrQkE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLFNBQVNBLE1BQVQsQ0FBc0JDLENBQXRCLEVBQW9DQyxDQUFwQyxFQUE2RTtBQUNsRixTQUFPLFVBQUNDLEVBQUQ7QUFBQSxXQUFRQSxFQUFFLENBQUNELENBQUMsQ0FBQ0MsRUFBRSxDQUFDRixDQUFDLENBQUNHLEtBQUgsQ0FBSCxDQUFGLENBQVY7QUFBQSxHQUFQO0FBQ0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxTQUFTQyxNQUFULENBQXNCRixFQUF0QixFQUEyRDtBQUNoRSxTQUFPLFVBQUNHLENBQUQ7QUFBQSxXQUFPLENBQUNILEVBQUUsQ0FBQ0csQ0FBRCxDQUFILEVBQVFBLENBQVIsQ0FBUDtBQUFBLEdBQVA7QUFDRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLFNBQVNDLE9BQVQsQ0FBdUJMLENBQXZCLEVBQW1GO0FBQ3hGLFNBQU8sVUFBQ0MsRUFBRDtBQUFBLFdBQVEsVUFBQ0csQ0FBRDtBQUFBLGFBQU8sQ0FBQ0gsRUFBRSxDQUFDRyxDQUFELENBQUgsRUFBUUosQ0FBQyxDQUFDSSxDQUFELENBQVQsQ0FBUDtBQUFBLEtBQVI7QUFBQSxHQUFQO0FBQ0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxTQUFTRSxNQUFULENBQW1CTixDQUFuQixFQUEwRTtBQUMvRSxTQUFPLFVBQUNDLEVBQUQ7QUFBQSxXQUFRLFVBQUNHLENBQUQ7QUFBQSxhQUFPSCxFQUFFLENBQUNELENBQUMsQ0FBQ0ksQ0FBRCxDQUFGLENBQVQ7QUFBQSxLQUFSO0FBQUEsR0FBUDtBQUNEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLFNBQVNHLFVBQVQsQ0FBdUJDLE1BQXZCLEVBQTZEO0FBQ2xFLFdBQVNDLE1BQVQsQ0FBc0JSLEVBQXRCLEVBQXdDRCxDQUF4QyxFQUFrRjtBQUNoRixXQUFPLFVBQUNVLEVBQUQ7QUFBQSxhQUFRVixDQUFDLENBQUMsVUFBQ1csRUFBRDtBQUFBLGVBQVFWLEVBQUUsQ0FBQ08sTUFBTSxDQUFDSSxNQUFQLENBQWNGLEVBQWQsRUFBa0JDLEVBQWxCLENBQUQsQ0FBVjtBQUFBLE9BQUQsQ0FBVDtBQUFBLEtBQVA7QUFDRDs7QUFFRCxXQUFTRSxPQUFULENBQW9CWixFQUFwQixFQUF5QztBQUN2QyxXQUFPQSxFQUFFLENBQUNPLE1BQU0sQ0FBQ04sS0FBUixDQUFUO0FBQ0Q7O0FBRUQsU0FBTztBQUNMWSxJQUFBQSxHQUFHLEVBQUhBLEdBREs7QUFFTEMsSUFBQUEsRUFBRSxFQUFFQyxTQUZDO0FBR0xDLElBQUFBLEdBQUcsRUFBRUMsSUFIQTtBQUlMVCxJQUFBQSxNQUFNLEVBQU5BLE1BSks7QUFLTEksSUFBQUEsT0FBTyxFQUFQQTtBQUxLLEdBQVA7QUFPRCxDLENBRUQ7QUFDQTtBQUNBOztBQUVBOzs7QUFDQSxJQUFNSyxJQUEwQixHQUFHLFNBQTdCQSxJQUE2QixDQUFDQyxFQUFELEVBQUtuQixDQUFMO0FBQUEsU0FBVyxvQkFBS21CLEVBQUwsRUFBU0YsR0FBRyxDQUFDakIsQ0FBRCxDQUFaLENBQVg7QUFBQSxDQUFuQyxDLENBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxJQUFNaUIsR0FBb0UsR0FBRyxTQUF2RUEsR0FBdUUsQ0FBQ2pCLENBQUQ7QUFBQSxTQUFPLFVBQUNtQixFQUFEO0FBQUEsV0FBUSxVQUFDQyxDQUFEO0FBQUEsYUFBT3BCLENBQUMsQ0FBQ21CLEVBQUUsQ0FBQ0MsQ0FBRCxDQUFILENBQVI7QUFBQSxLQUFSO0FBQUEsR0FBUDtBQUFBLENBQTdFLEMsQ0FFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFDTyxJQUFNTixHQUFHLEdBQUcsUUFBWjtBQUVQO0FBQ0E7QUFDQTtBQUNBOzs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxJQUFNTyxPQUFzQixHQUFHO0FBQ3BDUCxFQUFBQSxHQUFHLEVBQUhBLEdBRG9DO0FBRXBDRyxFQUFBQSxHQUFHLEVBQUVDO0FBRitCLENBQS9CO0FBS1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxJQUFNSSxJQUFJLEdBQ2YsYUFDQSxtQkFBTUQsT0FBTixDQUZLLEMsQ0FJUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLElBQU1FLE1BQXFCLEdBQUdGLE9BQTlCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuaW1wb3J0IHsgQ29tb25hZDJDIH0gZnJvbSAnLi9Db21vbmFkJ1xuaW1wb3J0IHsgZmxhcCBhcyBmbGFwXywgRnVuY3RvcjIgfSBmcm9tICcuL0Z1bmN0b3InXG5pbXBvcnQgeyBNb25vaWQgfSBmcm9tICcuL01vbm9pZCdcbmltcG9ydCB7IHBpcGUgfSBmcm9tICcuL2Z1bmN0aW9uJ1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBtb2RlbFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEBjYXRlZ29yeSBtb2RlbFxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2VkPFAsIEE+IHtcbiAgKHA6IFApOiBBXG59XG5cbi8vIFRPRE86IGN1cnJ5IGluIHYzXG4vKipcbiAqIEV4dHJhY3RzIGEgdmFsdWUgYXQgYSByZWxhdGl2ZSBwb3NpdGlvbiB3aGljaCBkZXBlbmRzIG9uIHRoZSBjdXJyZW50IHZhbHVlLlxuICpcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhY2tzPFAsIEE+KE06IE1vbm9pZDxQPiwgZjogKGE6IEEpID0+IFApOiAod2E6IFRyYWNlZDxQLCBBPikgPT4gQSB7XG4gIHJldHVybiAod2EpID0+IHdhKGYod2EoTS5lbXB0eSkpKVxufVxuXG4vKipcbiAqIEdldCB0aGUgY3VycmVudCBwb3NpdGlvblxuICpcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gbGlzdGVuPFAsIEE+KHdhOiBUcmFjZWQ8UCwgQT4pOiBUcmFjZWQ8UCwgW0EsIFBdPiB7XG4gIHJldHVybiAoZSkgPT4gW3dhKGUpLCBlXVxufVxuXG4vKipcbiAqIEdldCBhIHZhbHVlIHdoaWNoIGRlcGVuZHMgb24gdGhlIGN1cnJlbnQgcG9zaXRpb25cbiAqXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxpc3RlbnM8UCwgQj4oZjogKHA6IFApID0+IEIpOiA8QT4od2E6IFRyYWNlZDxQLCBBPikgPT4gVHJhY2VkPFAsIFtBLCBCXT4ge1xuICByZXR1cm4gKHdhKSA9PiAoZSkgPT4gW3dhKGUpLCBmKGUpXVxufVxuXG4vKipcbiAqIEFwcGx5IGEgZnVuY3Rpb24gdG8gdGhlIGN1cnJlbnQgcG9zaXRpb25cbiAqXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNlbnNvcjxQPihmOiAocDogUCkgPT4gUCk6IDxBPih3YTogVHJhY2VkPFAsIEE+KSA9PiBUcmFjZWQ8UCwgQT4ge1xuICByZXR1cm4gKHdhKSA9PiAoZSkgPT4gd2EoZihlKSlcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldENvbW9uYWQ8UD4obW9ub2lkOiBNb25vaWQ8UD4pOiBDb21vbmFkMkM8VVJJLCBQPiB7XG4gIGZ1bmN0aW9uIGV4dGVuZDxBLCBCPih3YTogVHJhY2VkPFAsIEE+LCBmOiAod2E6IFRyYWNlZDxQLCBBPikgPT4gQik6IFRyYWNlZDxQLCBCPiB7XG4gICAgcmV0dXJuIChwMSkgPT4gZigocDIpID0+IHdhKG1vbm9pZC5jb25jYXQocDEsIHAyKSkpXG4gIH1cblxuICBmdW5jdGlvbiBleHRyYWN0PEE+KHdhOiBUcmFjZWQ8UCwgQT4pOiBBIHtcbiAgICByZXR1cm4gd2EobW9ub2lkLmVtcHR5KVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBVUkksXG4gICAgX0U6IHVuZGVmaW5lZCBhcyBhbnksXG4gICAgbWFwOiBfbWFwLFxuICAgIGV4dGVuZCxcbiAgICBleHRyYWN0XG4gIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gbm9uLXBpcGVhYmxlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuY29uc3QgX21hcDogRnVuY3RvcjI8VVJJPlsnbWFwJ10gPSAoZmEsIGYpID0+IHBpcGUoZmEsIG1hcChmKSlcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gdHlwZSBjbGFzcyBtZW1iZXJzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogYG1hcGAgY2FuIGJlIHVzZWQgdG8gdHVybiBmdW5jdGlvbnMgYChhOiBBKSA9PiBCYCBpbnRvIGZ1bmN0aW9ucyBgKGZhOiBGPEE+KSA9PiBGPEI+YCB3aG9zZSBhcmd1bWVudCBhbmQgcmV0dXJuIHR5cGVzXG4gKiB1c2UgdGhlIHR5cGUgY29uc3RydWN0b3IgYEZgIHRvIHJlcHJlc2VudCBzb21lIGNvbXB1dGF0aW9uYWwgY29udGV4dC5cbiAqXG4gKiBAY2F0ZWdvcnkgRnVuY3RvclxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBtYXA6IDxBLCBCPihmOiAoYTogQSkgPT4gQikgPT4gPEU+KGZhOiBUcmFjZWQ8RSwgQT4pID0+IFRyYWNlZDxFLCBCPiA9IChmKSA9PiAoZmEpID0+IChwKSA9PiBmKGZhKHApKVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBpbnN0YW5jZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IFVSSSA9ICdUcmFjZWQnXG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCB0eXBlIFVSSSA9IHR5cGVvZiBVUklcblxuZGVjbGFyZSBtb2R1bGUgJy4vSEtUJyB7XG4gIGludGVyZmFjZSBVUkl0b0tpbmQyPEUsIEE+IHtcbiAgICByZWFkb25seSBbVVJJXTogVHJhY2VkPEUsIEE+XG4gIH1cbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi43LjBcbiAqL1xuZXhwb3J0IGNvbnN0IEZ1bmN0b3I6IEZ1bmN0b3IyPFVSST4gPSB7XG4gIFVSSSxcbiAgbWFwOiBfbWFwXG59XG5cbi8qKlxuICogRGVyaXZhYmxlIGZyb20gYEZ1bmN0b3JgLlxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgZmxhcCA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZmxhcF8oRnVuY3RvcilcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gZGVwcmVjYXRlZFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIFVzZSBbYEZ1bmN0b3JgXSgjZnVuY3RvcikgaW5zdGVhZC5cbiAqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4wLjBcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBjb25zdCB0cmFjZWQ6IEZ1bmN0b3IyPFVSST4gPSBGdW5jdG9yXG4iXX0=