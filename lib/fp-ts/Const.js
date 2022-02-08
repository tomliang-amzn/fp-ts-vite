"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flap = exports.contramap = exports.const_ = exports.bimap = exports.URI = exports.Functor = exports.Contravariant = exports.Bifunctor = void 0;
exports.getApplicative = getApplicative;
exports.getApply = getApply;
exports.getSemiring = exports.getSemigroup = exports.getRing = exports.getOrd = exports.getMonoid = exports.getHeytingAlgebra = exports.getEq = exports.getBounded = exports.getBooleanAlgebra = void 0;
exports.getShow = getShow;
exports.mapLeft = exports.map = exports.make = void 0;

var _function = require("./function");

var _Functor = require("./Functor");

/**
 * The `Const` type constructor, which wraps its first type argument and ignores its second.
 * That is, `Const<E, A>` is isomorphic to `E` for any `A`.
 *
 * `Const` has some useful instances. For example, the `Applicative` instance allows us to collect results using a `Monoid`
 * while ignoring return values.
 *
 * @since 2.0.0
 */

/**
 * @category constructors
 * @since 2.0.0
 */
var make = _function.unsafeCoerce;
/**
 * @category instances
 * @since 2.0.0
 */

exports.make = make;

function getShow(S) {
  return {
    show: function show(c) {
      return "make(".concat(S.show(c), ")");
    }
  };
}
/**
 * @category instances
 * @since 2.0.0
 */


var getEq = _function.identity;
/**
 * @category instances
 * @since 2.6.0
 */

exports.getEq = getEq;
var getOrd = _function.identity;
/**
 * @category instances
 * @since 2.6.0
 */

exports.getOrd = getOrd;
var getBounded = _function.identity;
/**
 * @category instances
 * @since 2.6.0
 */

exports.getBounded = getBounded;
var getSemigroup = _function.identity;
/**
 * @category instances
 * @since 2.6.0
 */

exports.getSemigroup = getSemigroup;
var getMonoid = _function.identity;
/**
 * @category instances
 * @since 2.6.0
 */

exports.getMonoid = getMonoid;
var getSemiring = _function.identity;
/**
 * @category instances
 * @since 2.6.0
 */

exports.getSemiring = getSemiring;
var getRing = _function.identity;
/**
 * @category instances
 * @since 2.6.0
 */

exports.getRing = getRing;
var getHeytingAlgebra = _function.identity;
/**
 * @category instances
 * @since 2.6.0
 */

exports.getHeytingAlgebra = getHeytingAlgebra;
var getBooleanAlgebra = _function.identity;
/**
 * @category instances
 * @since 2.0.0
 */

exports.getBooleanAlgebra = getBooleanAlgebra;

function getApply(S) {
  return {
    URI: URI,
    _E: undefined,
    map: _map,
    ap: function ap(fab, fa) {
      return make(S.concat(fab, fa));
    }
  };
}
/**
 * @category instances
 * @since 2.0.0
 */


function getApplicative(M) {
  var A = getApply(M);
  return {
    URI: URI,
    _E: undefined,
    map: A.map,
    ap: A.ap,
    of: function of() {
      return make(M.empty);
    }
  };
} // -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------


var _contramap = function _contramap(fa, f) {
  return (0, _function.pipe)(fa, contramap(f));
};
/* istanbul ignore next */


var _map = function _map(fa, f) {
  return (0, _function.pipe)(fa, map(f));
};
/* istanbul ignore next */


var _bimap = function _bimap(fa, f, g) {
  return (0, _function.pipe)(fa, bimap(f, g));
};
/* istanbul ignore next */


var _mapLeft = function _mapLeft(fa, f) {
  return (0, _function.pipe)(fa, mapLeft(f));
}; // -------------------------------------------------------------------------------------
// type class members
// -------------------------------------------------------------------------------------

/**
 * @category Contravariant
 * @since 2.0.0
 */


var contramap = function contramap() {
  return _function.unsafeCoerce;
};
/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent some computational context.
 *
 * @category Functor
 * @since 2.0.0
 */


exports.contramap = contramap;

var map = function map() {
  return _function.unsafeCoerce;
};
/**
 * Map a pair of functions over the two type arguments of the bifunctor.
 *
 * @category Bifunctor
 * @since 2.6.2
 */


exports.map = map;

var bimap = function bimap(f) {
  return function (fa) {
    return make(f(fa));
  };
};
/**
 * Map a function over the first type argument of a bifunctor.
 *
 * @category Bifunctor
 * @since 2.6.2
 */


exports.bimap = bimap;

var mapLeft = function mapLeft(f) {
  return function (fa) {
    return make(f(fa));
  };
}; // -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------

/**
 * @category instances
 * @since 2.0.0
 */


exports.mapLeft = mapLeft;
var URI = 'Const';
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
var flap = /*#__PURE__*/(0, _Functor.flap)(Functor);
/**
 * @category instances
 * @since 2.7.0
 */

exports.flap = flap;
var Contravariant = {
  URI: URI,
  contramap: _contramap
};
/**
 * @category instances
 * @since 2.7.0
 */

exports.Contravariant = Contravariant;
var Bifunctor = {
  URI: URI,
  bimap: _bimap,
  mapLeft: _mapLeft
}; // -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------

/**
 * Use small, specific instances instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */

exports.Bifunctor = Bifunctor;
var const_ = {
  URI: URI,
  map: _map,
  contramap: _contramap,
  bimap: _bimap,
  mapLeft: _mapLeft
};
exports.const_ = const_;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mcC10cy9Db25zdC50cyJdLCJuYW1lcyI6WyJtYWtlIiwidW5zYWZlQ29lcmNlIiwiZ2V0U2hvdyIsIlMiLCJzaG93IiwiYyIsImdldEVxIiwiaWRlbnRpdHkiLCJnZXRPcmQiLCJnZXRCb3VuZGVkIiwiZ2V0U2VtaWdyb3VwIiwiZ2V0TW9ub2lkIiwiZ2V0U2VtaXJpbmciLCJnZXRSaW5nIiwiZ2V0SGV5dGluZ0FsZ2VicmEiLCJnZXRCb29sZWFuQWxnZWJyYSIsImdldEFwcGx5IiwiVVJJIiwiX0UiLCJ1bmRlZmluZWQiLCJtYXAiLCJfbWFwIiwiYXAiLCJmYWIiLCJmYSIsImNvbmNhdCIsImdldEFwcGxpY2F0aXZlIiwiTSIsIkEiLCJvZiIsImVtcHR5IiwiX2NvbnRyYW1hcCIsImYiLCJjb250cmFtYXAiLCJfYmltYXAiLCJnIiwiYmltYXAiLCJfbWFwTGVmdCIsIm1hcExlZnQiLCJGdW5jdG9yIiwiZmxhcCIsIkNvbnRyYXZhcmlhbnQiLCJCaWZ1bmN0b3IiLCJjb25zdF8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQWdCQTs7QUFDQTs7QUFqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQTRCQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLElBQU1BLElBQXlDLEdBQUdDLHNCQUFsRDtBQUVQO0FBQ0E7QUFDQTtBQUNBOzs7O0FBQ08sU0FBU0MsT0FBVCxDQUF1QkMsQ0FBdkIsRUFBc0Q7QUFDM0QsU0FBTztBQUNMQyxJQUFBQSxJQUFJLEVBQUUsY0FBQ0MsQ0FBRDtBQUFBLDRCQUFlRixDQUFDLENBQUNDLElBQUYsQ0FBT0MsQ0FBUCxDQUFmO0FBQUE7QUFERCxHQUFQO0FBR0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTUMsS0FBMEMsR0FBR0Msa0JBQW5EO0FBRVA7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLElBQU1DLE1BQTZDLEdBQUdELGtCQUF0RDtBQUVQO0FBQ0E7QUFDQTtBQUNB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QUcsRUFBSEEsR0FEMkU7QUFFM0VHLEVBQUFBLEdBQUcsRUFBRUMsSUFGc0U7QUFHM0VZLEVBQUFBLFNBQVMsRUFBRUYsVUFIZ0U7QUFJM0VLLEVBQUFBLEtBQUssRUFBRUYsTUFKb0U7QUFLM0VJLEVBQUFBLE9BQU8sRUFBRUQ7QUFMa0UsQ0FBdEUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoZSBgQ29uc3RgIHR5cGUgY29uc3RydWN0b3IsIHdoaWNoIHdyYXBzIGl0cyBmaXJzdCB0eXBlIGFyZ3VtZW50IGFuZCBpZ25vcmVzIGl0cyBzZWNvbmQuXG4gKiBUaGF0IGlzLCBgQ29uc3Q8RSwgQT5gIGlzIGlzb21vcnBoaWMgdG8gYEVgIGZvciBhbnkgYEFgLlxuICpcbiAqIGBDb25zdGAgaGFzIHNvbWUgdXNlZnVsIGluc3RhbmNlcy4gRm9yIGV4YW1wbGUsIHRoZSBgQXBwbGljYXRpdmVgIGluc3RhbmNlIGFsbG93cyB1cyB0byBjb2xsZWN0IHJlc3VsdHMgdXNpbmcgYSBgTW9ub2lkYFxuICogd2hpbGUgaWdub3JpbmcgcmV0dXJuIHZhbHVlcy5cbiAqXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuaW1wb3J0IHsgQXBwbGljYXRpdmUyQyB9IGZyb20gJy4vQXBwbGljYXRpdmUnXG5pbXBvcnQgeyBBcHBseTJDIH0gZnJvbSAnLi9BcHBseSdcbmltcG9ydCB7IEJpZnVuY3RvcjIgfSBmcm9tICcuL0JpZnVuY3RvcidcbmltcG9ydCB7IEJvb2xlYW5BbGdlYnJhIH0gZnJvbSAnLi9Cb29sZWFuQWxnZWJyYSdcbmltcG9ydCB7IEJvdW5kZWQgfSBmcm9tICcuL0JvdW5kZWQnXG5pbXBvcnQgeyBDb250cmF2YXJpYW50MiB9IGZyb20gJy4vQ29udHJhdmFyaWFudCdcbmltcG9ydCB7IEVxIH0gZnJvbSAnLi9FcSdcbmltcG9ydCB7IGlkZW50aXR5LCBwaXBlLCB1bnNhZmVDb2VyY2UgfSBmcm9tICcuL2Z1bmN0aW9uJ1xuaW1wb3J0IHsgZmxhcCBhcyBmbGFwXywgRnVuY3RvcjIgfSBmcm9tICcuL0Z1bmN0b3InXG5pbXBvcnQgeyBIZXl0aW5nQWxnZWJyYSB9IGZyb20gJy4vSGV5dGluZ0FsZ2VicmEnXG5pbXBvcnQgeyBNb25vaWQgfSBmcm9tICcuL01vbm9pZCdcbmltcG9ydCB7IE9yZCB9IGZyb20gJy4vT3JkJ1xuaW1wb3J0IHsgUmluZyB9IGZyb20gJy4vUmluZydcbmltcG9ydCB7IFNlbWlncm91cCB9IGZyb20gJy4vU2VtaWdyb3VwJ1xuaW1wb3J0IHsgU2VtaXJpbmcgfSBmcm9tICcuL1NlbWlyaW5nJ1xuaW1wb3J0IHsgU2hvdyB9IGZyb20gJy4vU2hvdydcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gbW9kZWxcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgbW9kZWxcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgdHlwZSBDb25zdDxFLCBBPiA9IEUgJiB7IHJlYWRvbmx5IF9BOiBBIH1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29uc3RydWN0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IG1ha2U6IDxFLCBBID0gbmV2ZXI+KGU6IEUpID0+IENvbnN0PEUsIEE+ID0gdW5zYWZlQ29lcmNlXG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRTaG93PEUsIEE+KFM6IFNob3c8RT4pOiBTaG93PENvbnN0PEUsIEE+PiB7XG4gIHJldHVybiB7XG4gICAgc2hvdzogKGMpID0+IGBtYWtlKCR7Uy5zaG93KGMpfSlgXG4gIH1cbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGdldEVxOiA8RSwgQT4oRTogRXE8RT4pID0+IEVxPENvbnN0PEUsIEE+PiA9IGlkZW50aXR5XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuNi4wXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRPcmQ6IDxFLCBBPihPOiBPcmQ8RT4pID0+IE9yZDxDb25zdDxFLCBBPj4gPSBpZGVudGl0eVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjYuMFxuICovXG5leHBvcnQgY29uc3QgZ2V0Qm91bmRlZDogPEUsIEE+KEI6IEJvdW5kZWQ8RT4pID0+IEJvdW5kZWQ8Q29uc3Q8RSwgQT4+ID0gaWRlbnRpdHkgYXMgYW55XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuNi4wXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRTZW1pZ3JvdXA6IDxFLCBBPihTOiBTZW1pZ3JvdXA8RT4pID0+IFNlbWlncm91cDxDb25zdDxFLCBBPj4gPSBpZGVudGl0eSBhcyBhbnlcblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi42LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGdldE1vbm9pZDogPEUsIEE+KE06IE1vbm9pZDxFPikgPT4gTW9ub2lkPENvbnN0PEUsIEE+PiA9IGlkZW50aXR5IGFzIGFueVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjYuMFxuICovXG5leHBvcnQgY29uc3QgZ2V0U2VtaXJpbmc6IDxFLCBBPihTOiBTZW1pcmluZzxFPikgPT4gU2VtaXJpbmc8Q29uc3Q8RSwgQT4+ID0gaWRlbnRpdHkgYXMgYW55XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuNi4wXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRSaW5nOiA8RSwgQT4oUzogUmluZzxFPikgPT4gUmluZzxDb25zdDxFLCBBPj4gPSBpZGVudGl0eSBhcyBhbnlcblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi42LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGdldEhleXRpbmdBbGdlYnJhOiA8RSwgQT4oSDogSGV5dGluZ0FsZ2VicmE8RT4pID0+IEhleXRpbmdBbGdlYnJhPENvbnN0PEUsIEE+PiA9IGlkZW50aXR5IGFzIGFueVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjYuMFxuICovXG5leHBvcnQgY29uc3QgZ2V0Qm9vbGVhbkFsZ2VicmE6IDxFLCBBPihIOiBCb29sZWFuQWxnZWJyYTxFPikgPT4gQm9vbGVhbkFsZ2VicmE8Q29uc3Q8RSwgQT4+ID0gaWRlbnRpdHkgYXMgYW55XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRBcHBseTxFPihTOiBTZW1pZ3JvdXA8RT4pOiBBcHBseTJDPFVSSSwgRT4ge1xuICByZXR1cm4ge1xuICAgIFVSSSxcbiAgICBfRTogdW5kZWZpbmVkIGFzIGFueSxcbiAgICBtYXA6IF9tYXAsXG4gICAgYXA6IChmYWIsIGZhKSA9PiBtYWtlKFMuY29uY2F0KGZhYiwgZmEpKVxuICB9XG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRBcHBsaWNhdGl2ZTxFPihNOiBNb25vaWQ8RT4pOiBBcHBsaWNhdGl2ZTJDPFVSSSwgRT4ge1xuICBjb25zdCBBID0gZ2V0QXBwbHkoTSlcbiAgcmV0dXJuIHtcbiAgICBVUkksXG4gICAgX0U6IHVuZGVmaW5lZCBhcyBhbnksXG4gICAgbWFwOiBBLm1hcCxcbiAgICBhcDogQS5hcCxcbiAgICBvZjogKCkgPT4gbWFrZShNLmVtcHR5KVxuICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIG5vbi1waXBlYWJsZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuY29uc3QgX2NvbnRyYW1hcDogQ29udHJhdmFyaWFudDI8VVJJPlsnY29udHJhbWFwJ10gPSAoZmEsIGYpID0+IHBpcGUoZmEsIGNvbnRyYW1hcChmKSlcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5jb25zdCBfbWFwOiBGdW5jdG9yMjxVUkk+WydtYXAnXSA9IChmYSwgZikgPT4gcGlwZShmYSwgbWFwKGYpKVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmNvbnN0IF9iaW1hcDogQmlmdW5jdG9yMjxVUkk+WydiaW1hcCddID0gKGZhLCBmLCBnKSA9PiBwaXBlKGZhLCBiaW1hcChmLCBnKSlcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5jb25zdCBfbWFwTGVmdDogQmlmdW5jdG9yMjxVUkk+WydtYXBMZWZ0J10gPSAoZmEsIGYpID0+IHBpcGUoZmEsIG1hcExlZnQoZikpXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIHR5cGUgY2xhc3MgbWVtYmVyc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEBjYXRlZ29yeSBDb250cmF2YXJpYW50XG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGNvbnRyYW1hcDogPEEsIEI+KGY6IChiOiBCKSA9PiBBKSA9PiA8RT4oZmE6IENvbnN0PEUsIEE+KSA9PiBDb25zdDxFLCBCPiA9ICgpID0+IHVuc2FmZUNvZXJjZVxuXG4vKipcbiAqIGBtYXBgIGNhbiBiZSB1c2VkIHRvIHR1cm4gZnVuY3Rpb25zIGAoYTogQSkgPT4gQmAgaW50byBmdW5jdGlvbnMgYChmYTogRjxBPikgPT4gRjxCPmAgd2hvc2UgYXJndW1lbnQgYW5kIHJldHVybiB0eXBlc1xuICogdXNlIHRoZSB0eXBlIGNvbnN0cnVjdG9yIGBGYCB0byByZXByZXNlbnQgc29tZSBjb21wdXRhdGlvbmFsIGNvbnRleHQuXG4gKlxuICogQGNhdGVnb3J5IEZ1bmN0b3JcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgbWFwOiA8QSwgQj4oZjogKGE6IEEpID0+IEIpID0+IDxFPihmYTogQ29uc3Q8RSwgQT4pID0+IENvbnN0PEUsIEI+ID0gKCkgPT4gdW5zYWZlQ29lcmNlXG5cbi8qKlxuICogTWFwIGEgcGFpciBvZiBmdW5jdGlvbnMgb3ZlciB0aGUgdHdvIHR5cGUgYXJndW1lbnRzIG9mIHRoZSBiaWZ1bmN0b3IuXG4gKlxuICogQGNhdGVnb3J5IEJpZnVuY3RvclxuICogQHNpbmNlIDIuNi4yXG4gKi9cbmV4cG9ydCBjb25zdCBiaW1hcDogPEUsIEcsIEEsIEI+KGY6IChlOiBFKSA9PiBHLCBnOiAoYTogQSkgPT4gQikgPT4gKGZhOiBDb25zdDxFLCBBPikgPT4gQ29uc3Q8RywgQj4gPSAoZikgPT4gKGZhKSA9PlxuICBtYWtlKGYoZmEpKVxuXG4vKipcbiAqIE1hcCBhIGZ1bmN0aW9uIG92ZXIgdGhlIGZpcnN0IHR5cGUgYXJndW1lbnQgb2YgYSBiaWZ1bmN0b3IuXG4gKlxuICogQGNhdGVnb3J5IEJpZnVuY3RvclxuICogQHNpbmNlIDIuNi4yXG4gKi9cbmV4cG9ydCBjb25zdCBtYXBMZWZ0OiA8RSwgRz4oZjogKGU6IEUpID0+IEcpID0+IDxBPihmYTogQ29uc3Q8RSwgQT4pID0+IENvbnN0PEcsIEE+ID0gKGYpID0+IChmYSkgPT4gbWFrZShmKGZhKSlcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gaW5zdGFuY2VzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBVUkkgPSAnQ29uc3QnXG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCB0eXBlIFVSSSA9IHR5cGVvZiBVUklcblxuZGVjbGFyZSBtb2R1bGUgJy4vSEtUJyB7XG4gIGludGVyZmFjZSBVUkl0b0tpbmQyPEUsIEE+IHtcbiAgICByZWFkb25seSBbVVJJXTogQ29uc3Q8RSwgQT5cbiAgfVxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjcuMFxuICovXG5leHBvcnQgY29uc3QgRnVuY3RvcjogRnVuY3RvcjI8VVJJPiA9IHtcbiAgVVJJLFxuICBtYXA6IF9tYXBcbn1cblxuLyoqXG4gKiBEZXJpdmFibGUgZnJvbSBgRnVuY3RvcmAuXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBmbGFwID1cbiAgLyojX19QVVJFX18qL1xuICBmbGFwXyhGdW5jdG9yKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjcuMFxuICovXG5leHBvcnQgY29uc3QgQ29udHJhdmFyaWFudDogQ29udHJhdmFyaWFudDI8VVJJPiA9IHtcbiAgVVJJLFxuICBjb250cmFtYXA6IF9jb250cmFtYXBcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi43LjBcbiAqL1xuZXhwb3J0IGNvbnN0IEJpZnVuY3RvcjogQmlmdW5jdG9yMjxVUkk+ID0ge1xuICBVUkksXG4gIGJpbWFwOiBfYmltYXAsXG4gIG1hcExlZnQ6IF9tYXBMZWZ0XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGRlcHJlY2F0ZWRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBVc2Ugc21hbGwsIHNwZWNpZmljIGluc3RhbmNlcyBpbnN0ZWFkLlxuICpcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjAuMFxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IGNvbnN0XzogRnVuY3RvcjI8VVJJPiAmIENvbnRyYXZhcmlhbnQyPFVSST4gJiBCaWZ1bmN0b3IyPFVSST4gPSB7XG4gIFVSSSxcbiAgbWFwOiBfbWFwLFxuICBjb250cmFtYXA6IF9jb250cmFtYXAsXG4gIGJpbWFwOiBfYmltYXAsXG4gIG1hcExlZnQ6IF9tYXBMZWZ0XG59XG4iXX0=