"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.traverseReadonlyNonEmptyArrayWithIndex = exports.traverseReadonlyArrayWithIndex = exports.traverseArrayWithIndex = exports.traverseArray = exports.sequenceArray = exports.of = exports.map = exports.io = exports.getSemigroup = exports.getMonoid = exports.fromIO = exports.flatten = exports.flap = exports.chainFirst = exports.chain = exports.bindTo = exports.bind = exports.apSecond = exports.apS = exports.apFirst = exports.ap = exports.URI = exports.Pointed = exports.MonadIO = exports.Monad = exports.Functor = exports.FromIO = exports.Do = exports.ChainRec = exports.Chain = exports.Apply = exports.Applicative = exports.ApT = void 0;

var _Applicative = require("./Applicative");

var _Apply = require("./Apply");

var _Chain = require("./Chain");

var _function = require("./function");

var _Functor = require("./Functor");

var _ = _interopRequireWildcard(require("./internal"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * ```ts
 * interface IO<A> {
 *   (): A
 * }
 * ```
 *
 * `IO<A>` represents a non-deterministic synchronous computation that can cause side effects, yields a value of
 * type `A` and **never fails**. If you want to represent a synchronous computation that may fail, please see
 * `IOEither`.
 *
 * @since 2.0.0
 */
// -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------
var _map = function _map(ma, f) {
  return function () {
    return f(ma());
  };
};

var _ap = function _ap(mab, ma) {
  return function () {
    return mab()(ma());
  };
};

var _chain = function _chain(ma, f) {
  return function () {
    return f(ma())();
  };
};

var _chainRec = function _chainRec(a, f) {
  return function () {
    var e = f(a)();

    while (e._tag === 'Left') {
      e = f(e.left)();
    }

    return e.right;
  };
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
    return _map(fa, f);
  };
};
/**
 * Apply a function to an argument under a type constructor.
 *
 * @category Apply
 * @since 2.0.0
 */


exports.map = map;

var ap = function ap(fa) {
  return function (fab) {
    return _ap(fab, fa);
  };
};
/**
 * @category Pointed
 * @since 2.0.0
 */


exports.ap = ap;
var of = _function.constant;
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation.
 *
 * @category Monad
 * @since 2.0.0
 */

exports.of = of;

var chain = function chain(f) {
  return function (ma) {
    return _chain(ma, f);
  };
};
/**
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.0.0
 */


exports.chain = chain;
var flatten = /*#__PURE__*/chain(_function.identity); // -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------

/**
 * @category instances
 * @since 2.0.0
 */

exports.flatten = flatten;
var URI = 'IO';
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
 * @since 2.10.0
 */

exports.flap = flap;
var Pointed = {
  URI: URI,
  of: of
};
/**
 * @category instances
 * @since 2.10.0
 */

exports.Pointed = Pointed;
var Apply = {
  URI: URI,
  map: _map,
  ap: _ap
};
/**
 * Combine two effectful actions, keeping only the result of the first.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.0.0
 */

exports.Apply = Apply;
var apFirst = /*#__PURE__*/(0, _Apply.apFirst)(Apply);
/**
 * Combine two effectful actions, keeping only the result of the second.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.0.0
 */

exports.apFirst = apFirst;
var apSecond = /*#__PURE__*/(0, _Apply.apSecond)(Apply);
/**
 * @category instances
 * @since 2.7.0
 */

exports.apSecond = apSecond;
var Applicative = {
  URI: URI,
  map: _map,
  ap: _ap,
  of: of
};
/**
 * @category instances
 * @since 2.10.0
 */

exports.Applicative = Applicative;
var Chain = {
  URI: URI,
  map: _map,
  ap: _ap,
  chain: _chain
};
/**
 * @category instances
 * @since 2.7.0
 */

exports.Chain = Chain;
var Monad = {
  URI: URI,
  map: _map,
  ap: _ap,
  of: of,
  chain: _chain
};
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation and
 * keeping only the result of the first.
 *
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.0.0
 */

exports.Monad = Monad;
var chainFirst = /*#__PURE__*/(0, _Chain.chainFirst)(Chain);
/**
 * @category constructors
 * @since 2.7.0
 * @deprecated
 */

exports.chainFirst = chainFirst;
var fromIO = _function.identity;
/**
 * @category instances
 * @since 2.7.0
 */

exports.fromIO = fromIO;
var MonadIO = {
  URI: URI,
  map: _map,
  ap: _ap,
  of: of,
  chain: _chain,
  fromIO: fromIO
};
/**
 * @category instances
 * @since 2.7.0
 */

exports.MonadIO = MonadIO;
var ChainRec = {
  URI: URI,
  map: _map,
  ap: _ap,
  chain: _chain,
  chainRec: _chainRec
};
/**
 * @category instances
 * @since 2.10.0
 */

exports.ChainRec = ChainRec;
var FromIO = {
  URI: URI,
  fromIO: _function.identity
}; // -------------------------------------------------------------------------------------
// do notation
// -------------------------------------------------------------------------------------

/**
 * @since 2.9.0
 */

exports.FromIO = FromIO;
var Do = /*#__PURE__*/of(_.emptyRecord);
/**
 * @since 2.8.0
 */

exports.Do = Do;
var bindTo = /*#__PURE__*/(0, _Functor.bindTo)(Functor);
/**
 * @since 2.8.0
 */

exports.bindTo = bindTo;
var bind = /*#__PURE__*/(0, _Chain.bind)(Chain); // -------------------------------------------------------------------------------------
// pipeable sequence S
// -------------------------------------------------------------------------------------

/**
 * @since 2.8.0
 */

exports.bind = bind;
var apS = /*#__PURE__*/(0, _Apply.apS)(Apply); // -------------------------------------------------------------------------------------
// sequence T
// -------------------------------------------------------------------------------------

/**
 * @since 2.11.0
 */

exports.apS = apS;
var ApT = /*#__PURE__*/of(_.emptyReadonlyArray); // -------------------------------------------------------------------------------------
// array utils
// -------------------------------------------------------------------------------------

/**
 * Equivalent to `ReadonlyNonEmptyArray#traverseWithIndex(Applicative)`.
 *
 * @since 2.11.0
 */

exports.ApT = ApT;

var traverseReadonlyNonEmptyArrayWithIndex = function traverseReadonlyNonEmptyArrayWithIndex(f) {
  return function (as) {
    return function () {
      var out = [f(0, _.head(as))()];

      for (var i = 1; i < as.length; i++) {
        out.push(f(i, as[i])());
      }

      return out;
    };
  };
};
/**
 * Equivalent to `ReadonlyArray#traverseWithIndex(Applicative)`.
 *
 * @since 2.11.0
 */


exports.traverseReadonlyNonEmptyArrayWithIndex = traverseReadonlyNonEmptyArrayWithIndex;

var traverseReadonlyArrayWithIndex = function traverseReadonlyArrayWithIndex(f) {
  var g = traverseReadonlyNonEmptyArrayWithIndex(f);
  return function (as) {
    return _.isNonEmpty(as) ? g(as) : ApT;
  };
};
/**
 * @since 2.9.0
 */


exports.traverseReadonlyArrayWithIndex = traverseReadonlyArrayWithIndex;
var traverseArrayWithIndex = traverseReadonlyArrayWithIndex;
/**
 * @since 2.9.0
 */

exports.traverseArrayWithIndex = traverseArrayWithIndex;

var traverseArray = function traverseArray(f) {
  return traverseReadonlyArrayWithIndex(function (_, a) {
    return f(a);
  });
};
/**
 * @since 2.9.0
 */


exports.traverseArray = traverseArray;
var sequenceArray = /*#__PURE__*/traverseArray(_function.identity); // -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
// tslint:disable: deprecation

/**
 * Use small, specific instances instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */

exports.sequenceArray = sequenceArray;
var io = {
  URI: URI,
  map: _map,
  of: of,
  ap: _ap,
  chain: _chain,
  fromIO: fromIO,
  chainRec: _chainRec
};
/**
 * Use [`getApplySemigroup`](./Apply.ts.html#getapplysemigroup) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */

exports.io = io;
var getSemigroup = /*#__PURE__*/(0, _Apply.getApplySemigroup)(Apply);
/**
 * Use [`getApplicativeMonoid`](./Applicative.ts.html#getapplicativemonoid) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */

exports.getSemigroup = getSemigroup;
var getMonoid = /*#__PURE__*/(0, _Applicative.getApplicativeMonoid)(Applicative);
exports.getMonoid = getMonoid;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mcC10cy9JTy50cyJdLCJuYW1lcyI6WyJfbWFwIiwibWEiLCJmIiwiX2FwIiwibWFiIiwiX2NoYWluIiwiX2NoYWluUmVjIiwiYSIsImUiLCJfdGFnIiwibGVmdCIsInJpZ2h0IiwibWFwIiwiZmEiLCJhcCIsImZhYiIsIm9mIiwiY29uc3RhbnQiLCJjaGFpbiIsImZsYXR0ZW4iLCJpZGVudGl0eSIsIlVSSSIsIkZ1bmN0b3IiLCJmbGFwIiwiUG9pbnRlZCIsIkFwcGx5IiwiYXBGaXJzdCIsImFwU2Vjb25kIiwiQXBwbGljYXRpdmUiLCJDaGFpbiIsIk1vbmFkIiwiY2hhaW5GaXJzdCIsImZyb21JTyIsIk1vbmFkSU8iLCJDaGFpblJlYyIsImNoYWluUmVjIiwiRnJvbUlPIiwiRG8iLCJfIiwiZW1wdHlSZWNvcmQiLCJiaW5kVG8iLCJiaW5kIiwiYXBTIiwiQXBUIiwiZW1wdHlSZWFkb25seUFycmF5IiwidHJhdmVyc2VSZWFkb25seU5vbkVtcHR5QXJyYXlXaXRoSW5kZXgiLCJhcyIsIm91dCIsImhlYWQiLCJpIiwibGVuZ3RoIiwicHVzaCIsInRyYXZlcnNlUmVhZG9ubHlBcnJheVdpdGhJbmRleCIsImciLCJpc05vbkVtcHR5IiwidHJhdmVyc2VBcnJheVdpdGhJbmRleCIsInRyYXZlcnNlQXJyYXkiLCJzZXF1ZW5jZUFycmF5IiwiaW8iLCJnZXRTZW1pZ3JvdXAiLCJnZXRNb25vaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQWFBOztBQUNBOztBQUNBOztBQUdBOztBQUNBOztBQUNBOzs7Ozs7QUFwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE2QkE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsSUFBd0IsR0FBRyxTQUEzQkEsSUFBMkIsQ0FBQ0MsRUFBRCxFQUFLQyxDQUFMO0FBQUEsU0FBVztBQUFBLFdBQU1BLENBQUMsQ0FBQ0QsRUFBRSxFQUFILENBQVA7QUFB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QUFDQTs7OztBQUNPLElBQU1rRCxhQUFxRSxHQUNoRixhQUNBRCxhQUFhLENBQUNwQyxrQkFBRCxDQUZSLEMsQ0FJUDtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTXNDLEVBQWdELEdBQUc7QUFDOURyQyxFQUFBQSxHQUFHLEVBQUhBLEdBRDhEO0FBRTlEVCxFQUFBQSxHQUFHLEVBQUVaLElBRnlEO0FBRzlEZ0IsRUFBQUEsRUFBRSxFQUFGQSxFQUg4RDtBQUk5REYsRUFBQUEsRUFBRSxFQUFFWCxHQUowRDtBQUs5RGUsRUFBQUEsS0FBSyxFQUFFYixNQUx1RDtBQU05RDJCLEVBQUFBLE1BQU0sRUFBTkEsTUFOOEQ7QUFPOURHLEVBQUFBLFFBQVEsRUFBRTdCO0FBUG9ELENBQXpEO0FBVVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLElBQU1xRCxZQUFzRCxHQUNqRSxhQUNBLDhCQUFrQmxDLEtBQWxCLENBRks7QUFJUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTW1DLFNBQTZDLEdBQ3hELGFBQ0EsdUNBQXFCaEMsV0FBckIsQ0FGSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogYGBgdHNcbiAqIGludGVyZmFjZSBJTzxBPiB7XG4gKiAgICgpOiBBXG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBgSU88QT5gIHJlcHJlc2VudHMgYSBub24tZGV0ZXJtaW5pc3RpYyBzeW5jaHJvbm91cyBjb21wdXRhdGlvbiB0aGF0IGNhbiBjYXVzZSBzaWRlIGVmZmVjdHMsIHlpZWxkcyBhIHZhbHVlIG9mXG4gKiB0eXBlIGBBYCBhbmQgKipuZXZlciBmYWlscyoqLiBJZiB5b3Ugd2FudCB0byByZXByZXNlbnQgYSBzeW5jaHJvbm91cyBjb21wdXRhdGlvbiB0aGF0IG1heSBmYWlsLCBwbGVhc2Ugc2VlXG4gKiBgSU9FaXRoZXJgLlxuICpcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5pbXBvcnQgeyBBcHBsaWNhdGl2ZTEsIGdldEFwcGxpY2F0aXZlTW9ub2lkIH0gZnJvbSAnLi9BcHBsaWNhdGl2ZSdcbmltcG9ydCB7IGFwRmlyc3QgYXMgYXBGaXJzdF8sIEFwcGx5MSwgYXBTIGFzIGFwU18sIGFwU2Vjb25kIGFzIGFwU2Vjb25kXywgZ2V0QXBwbHlTZW1pZ3JvdXAgfSBmcm9tICcuL0FwcGx5J1xuaW1wb3J0IHsgYmluZCBhcyBiaW5kXywgQ2hhaW4xLCBjaGFpbkZpcnN0IGFzIGNoYWluRmlyc3RfIH0gZnJvbSAnLi9DaGFpbidcbmltcG9ydCB7IENoYWluUmVjMSB9IGZyb20gJy4vQ2hhaW5SZWMnXG5pbXBvcnQgeyBGcm9tSU8xIH0gZnJvbSAnLi9Gcm9tSU8nXG5pbXBvcnQgeyBjb25zdGFudCwgaWRlbnRpdHkgfSBmcm9tICcuL2Z1bmN0aW9uJ1xuaW1wb3J0IHsgYmluZFRvIGFzIGJpbmRUb18sIGZsYXAgYXMgZmxhcF8sIEZ1bmN0b3IxIH0gZnJvbSAnLi9GdW5jdG9yJ1xuaW1wb3J0ICogYXMgXyBmcm9tICcuL2ludGVybmFsJ1xuaW1wb3J0IHsgTW9uYWQxIH0gZnJvbSAnLi9Nb25hZCdcbmltcG9ydCB7IE1vbmFkSU8xIH0gZnJvbSAnLi9Nb25hZElPJ1xuaW1wb3J0IHsgTW9ub2lkIH0gZnJvbSAnLi9Nb25vaWQnXG5pbXBvcnQgeyBOb25FbXB0eUFycmF5IH0gZnJvbSAnLi9Ob25FbXB0eUFycmF5J1xuaW1wb3J0IHsgUG9pbnRlZDEgfSBmcm9tICcuL1BvaW50ZWQnXG5pbXBvcnQgeyBSZWFkb25seU5vbkVtcHR5QXJyYXkgfSBmcm9tICcuL1JlYWRvbmx5Tm9uRW1wdHlBcnJheSdcbmltcG9ydCB7IFNlbWlncm91cCB9IGZyb20gJy4vU2VtaWdyb3VwJ1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBtb2RlbFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEBjYXRlZ29yeSBtb2RlbFxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSU88QT4ge1xuICAoKTogQVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBub24tcGlwZWFibGVzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmNvbnN0IF9tYXA6IE1vbmFkMTxVUkk+WydtYXAnXSA9IChtYSwgZikgPT4gKCkgPT4gZihtYSgpKVxuY29uc3QgX2FwOiBNb25hZDE8VVJJPlsnYXAnXSA9IChtYWIsIG1hKSA9PiAoKSA9PiBtYWIoKShtYSgpKVxuY29uc3QgX2NoYWluOiBNb25hZDE8VVJJPlsnY2hhaW4nXSA9IChtYSwgZikgPT4gKCkgPT4gZihtYSgpKSgpXG5jb25zdCBfY2hhaW5SZWM6IENoYWluUmVjMTxVUkk+WydjaGFpblJlYyddID0gKGEsIGYpID0+ICgpID0+IHtcbiAgbGV0IGUgPSBmKGEpKClcbiAgd2hpbGUgKGUuX3RhZyA9PT0gJ0xlZnQnKSB7XG4gICAgZSA9IGYoZS5sZWZ0KSgpXG4gIH1cbiAgcmV0dXJuIGUucmlnaHRcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gdHlwZSBjbGFzcyBtZW1iZXJzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogYG1hcGAgY2FuIGJlIHVzZWQgdG8gdHVybiBmdW5jdGlvbnMgYChhOiBBKSA9PiBCYCBpbnRvIGZ1bmN0aW9ucyBgKGZhOiBGPEE+KSA9PiBGPEI+YCB3aG9zZSBhcmd1bWVudCBhbmQgcmV0dXJuIHR5cGVzXG4gKiB1c2UgdGhlIHR5cGUgY29uc3RydWN0b3IgYEZgIHRvIHJlcHJlc2VudCBzb21lIGNvbXB1dGF0aW9uYWwgY29udGV4dC5cbiAqXG4gKiBAY2F0ZWdvcnkgRnVuY3RvclxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBtYXA6IDxBLCBCPihmOiAoYTogQSkgPT4gQikgPT4gKGZhOiBJTzxBPikgPT4gSU88Qj4gPSAoZikgPT4gKGZhKSA9PiBfbWFwKGZhLCBmKVxuXG4vKipcbiAqIEFwcGx5IGEgZnVuY3Rpb24gdG8gYW4gYXJndW1lbnQgdW5kZXIgYSB0eXBlIGNvbnN0cnVjdG9yLlxuICpcbiAqIEBjYXRlZ29yeSBBcHBseVxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBhcDogPEE+KGZhOiBJTzxBPikgPT4gPEI+KGZhYjogSU88KGE6IEEpID0+IEI+KSA9PiBJTzxCPiA9IChmYSkgPT4gKGZhYikgPT4gX2FwKGZhYiwgZmEpXG5cbi8qKlxuICogQGNhdGVnb3J5IFBvaW50ZWRcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3Qgb2Y6IFBvaW50ZWQxPFVSST5bJ29mJ10gPSBjb25zdGFudFxuXG4vKipcbiAqIENvbXBvc2VzIGNvbXB1dGF0aW9ucyBpbiBzZXF1ZW5jZSwgdXNpbmcgdGhlIHJldHVybiB2YWx1ZSBvZiBvbmUgY29tcHV0YXRpb24gdG8gZGV0ZXJtaW5lIHRoZSBuZXh0IGNvbXB1dGF0aW9uLlxuICpcbiAqIEBjYXRlZ29yeSBNb25hZFxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBjaGFpbjogPEEsIEI+KGY6IChhOiBBKSA9PiBJTzxCPikgPT4gKG1hOiBJTzxBPikgPT4gSU88Qj4gPSAoZikgPT4gKG1hKSA9PiBfY2hhaW4obWEsIGYpXG5cbi8qKlxuICogRGVyaXZhYmxlIGZyb20gYENoYWluYC5cbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgZmxhdHRlbjogPEE+KG1tYTogSU88SU88QT4+KSA9PiBJTzxBPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgY2hhaW4oaWRlbnRpdHkpXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGluc3RhbmNlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgVVJJID0gJ0lPJ1xuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgdHlwZSBVUkkgPSB0eXBlb2YgVVJJXG5cbmRlY2xhcmUgbW9kdWxlICcuL0hLVCcge1xuICBpbnRlcmZhY2UgVVJJdG9LaW5kPEE+IHtcbiAgICByZWFkb25seSBbVVJJXTogSU88QT5cbiAgfVxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjcuMFxuICovXG5leHBvcnQgY29uc3QgRnVuY3RvcjogRnVuY3RvcjE8VVJJPiA9IHtcbiAgVVJJLFxuICBtYXA6IF9tYXBcbn1cblxuLyoqXG4gKiBEZXJpdmFibGUgZnJvbSBgRnVuY3RvcmAuXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBmbGFwID1cbiAgLyojX19QVVJFX18qL1xuICBmbGFwXyhGdW5jdG9yKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IFBvaW50ZWQ6IFBvaW50ZWQxPFVSST4gPSB7XG4gIFVSSSxcbiAgb2Zcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBBcHBseTogQXBwbHkxPFVSST4gPSB7XG4gIFVSSSxcbiAgbWFwOiBfbWFwLFxuICBhcDogX2FwXG59XG5cbi8qKlxuICogQ29tYmluZSB0d28gZWZmZWN0ZnVsIGFjdGlvbnMsIGtlZXBpbmcgb25seSB0aGUgcmVzdWx0IG9mIHRoZSBmaXJzdC5cbiAqXG4gKiBEZXJpdmFibGUgZnJvbSBgQXBwbHlgLlxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBhcEZpcnN0ID1cbiAgLyojX19QVVJFX18qL1xuICBhcEZpcnN0XyhBcHBseSlcblxuLyoqXG4gKiBDb21iaW5lIHR3byBlZmZlY3RmdWwgYWN0aW9ucywga2VlcGluZyBvbmx5IHRoZSByZXN1bHQgb2YgdGhlIHNlY29uZC5cbiAqXG4gKiBEZXJpdmFibGUgZnJvbSBgQXBwbHlgLlxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBhcFNlY29uZCA9XG4gIC8qI19fUFVSRV9fKi9cbiAgYXBTZWNvbmRfKEFwcGx5KVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjcuMFxuICovXG5leHBvcnQgY29uc3QgQXBwbGljYXRpdmU6IEFwcGxpY2F0aXZlMTxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgYXA6IF9hcCxcbiAgb2Zcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBDaGFpbjogQ2hhaW4xPFVSST4gPSB7XG4gIFVSSSxcbiAgbWFwOiBfbWFwLFxuICBhcDogX2FwLFxuICBjaGFpbjogX2NoYWluXG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuNy4wXG4gKi9cbmV4cG9ydCBjb25zdCBNb25hZDogTW9uYWQxPFVSST4gPSB7XG4gIFVSSSxcbiAgbWFwOiBfbWFwLFxuICBhcDogX2FwLFxuICBvZixcbiAgY2hhaW46IF9jaGFpblxufVxuXG4vKipcbiAqIENvbXBvc2VzIGNvbXB1dGF0aW9ucyBpbiBzZXF1ZW5jZSwgdXNpbmcgdGhlIHJldHVybiB2YWx1ZSBvZiBvbmUgY29tcHV0YXRpb24gdG8gZGV0ZXJtaW5lIHRoZSBuZXh0IGNvbXB1dGF0aW9uIGFuZFxuICoga2VlcGluZyBvbmx5IHRoZSByZXN1bHQgb2YgdGhlIGZpcnN0LlxuICpcbiAqIERlcml2YWJsZSBmcm9tIGBDaGFpbmAuXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGNoYWluRmlyc3QgPVxuICAvKiNfX1BVUkVfXyovXG4gIGNoYWluRmlyc3RfKENoYWluKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb25zdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjcuMFxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IGZyb21JTzogRnJvbUlPMTxVUkk+Wydmcm9tSU8nXSA9IGlkZW50aXR5XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuNy4wXG4gKi9cbmV4cG9ydCBjb25zdCBNb25hZElPOiBNb25hZElPMTxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgYXA6IF9hcCxcbiAgb2YsXG4gIGNoYWluOiBfY2hhaW4sXG4gIGZyb21JT1xufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjcuMFxuICovXG5leHBvcnQgY29uc3QgQ2hhaW5SZWM6IENoYWluUmVjMTxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgYXA6IF9hcCxcbiAgY2hhaW46IF9jaGFpbixcbiAgY2hhaW5SZWM6IF9jaGFpblJlY1xufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IEZyb21JTzogRnJvbUlPMTxVUkk+ID0ge1xuICBVUkksXG4gIGZyb21JTzogaWRlbnRpdHlcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gZG8gbm90YXRpb25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBAc2luY2UgMi45LjBcbiAqL1xuZXhwb3J0IGNvbnN0IERvOiBJTzx7fT4gPVxuICAvKiNfX1BVUkVfXyovXG4gIG9mKF8uZW1wdHlSZWNvcmQpXG5cbi8qKlxuICogQHNpbmNlIDIuOC4wXG4gKi9cbmV4cG9ydCBjb25zdCBiaW5kVG8gPVxuICAvKiNfX1BVUkVfXyovXG4gIGJpbmRUb18oRnVuY3RvcilcblxuLyoqXG4gKiBAc2luY2UgMi44LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGJpbmQgPVxuICAvKiNfX1BVUkVfXyovXG4gIGJpbmRfKENoYWluKVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBwaXBlYWJsZSBzZXF1ZW5jZSBTXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQHNpbmNlIDIuOC4wXG4gKi9cbmV4cG9ydCBjb25zdCBhcFMgPVxuICAvKiNfX1BVUkVfXyovXG4gIGFwU18oQXBwbHkpXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIHNlcXVlbmNlIFRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBBcFQ6IElPPHJlYWRvbmx5IFtdPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgb2YoXy5lbXB0eVJlYWRvbmx5QXJyYXkpXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGFycmF5IHV0aWxzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogRXF1aXZhbGVudCB0byBgUmVhZG9ubHlOb25FbXB0eUFycmF5I3RyYXZlcnNlV2l0aEluZGV4KEFwcGxpY2F0aXZlKWAuXG4gKlxuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgdHJhdmVyc2VSZWFkb25seU5vbkVtcHR5QXJyYXlXaXRoSW5kZXggPSA8QSwgQj4oZjogKGluZGV4OiBudW1iZXIsIGE6IEEpID0+IElPPEI+KSA9PiAoXG4gIGFzOiBSZWFkb25seU5vbkVtcHR5QXJyYXk8QT5cbik6IElPPFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxCPj4gPT4gKCkgPT4ge1xuICBjb25zdCBvdXQ6IE5vbkVtcHR5QXJyYXk8Qj4gPSBbZigwLCBfLmhlYWQoYXMpKSgpXVxuICBmb3IgKGxldCBpID0gMTsgaSA8IGFzLmxlbmd0aDsgaSsrKSB7XG4gICAgb3V0LnB1c2goZihpLCBhc1tpXSkoKSlcbiAgfVxuICByZXR1cm4gb3V0XG59XG5cbi8qKlxuICogRXF1aXZhbGVudCB0byBgUmVhZG9ubHlBcnJheSN0cmF2ZXJzZVdpdGhJbmRleChBcHBsaWNhdGl2ZSlgLlxuICpcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHRyYXZlcnNlUmVhZG9ubHlBcnJheVdpdGhJbmRleCA9IDxBLCBCPihcbiAgZjogKGluZGV4OiBudW1iZXIsIGE6IEEpID0+IElPPEI+XG4pOiAoKGFzOiBSZWFkb25seUFycmF5PEE+KSA9PiBJTzxSZWFkb25seUFycmF5PEI+PikgPT4ge1xuICBjb25zdCBnID0gdHJhdmVyc2VSZWFkb25seU5vbkVtcHR5QXJyYXlXaXRoSW5kZXgoZilcbiAgcmV0dXJuIChhcykgPT4gKF8uaXNOb25FbXB0eShhcykgPyBnKGFzKSA6IEFwVClcbn1cblxuLyoqXG4gKiBAc2luY2UgMi45LjBcbiAqL1xuZXhwb3J0IGNvbnN0IHRyYXZlcnNlQXJyYXlXaXRoSW5kZXg6IDxBLCBCPihcbiAgZjogKGluZGV4OiBudW1iZXIsIGE6IEEpID0+IElPPEI+XG4pID0+IChhczogUmVhZG9ubHlBcnJheTxBPikgPT4gSU88UmVhZG9ubHlBcnJheTxCPj4gPSB0cmF2ZXJzZVJlYWRvbmx5QXJyYXlXaXRoSW5kZXhcblxuLyoqXG4gKiBAc2luY2UgMi45LjBcbiAqL1xuZXhwb3J0IGNvbnN0IHRyYXZlcnNlQXJyYXkgPSA8QSwgQj4oZjogKGE6IEEpID0+IElPPEI+KTogKChhczogUmVhZG9ubHlBcnJheTxBPikgPT4gSU88UmVhZG9ubHlBcnJheTxCPj4pID0+XG4gIHRyYXZlcnNlUmVhZG9ubHlBcnJheVdpdGhJbmRleCgoXywgYSkgPT4gZihhKSlcblxuLyoqXG4gKiBAc2luY2UgMi45LjBcbiAqL1xuZXhwb3J0IGNvbnN0IHNlcXVlbmNlQXJyYXk6IDxBPihhcnI6IFJlYWRvbmx5QXJyYXk8SU88QT4+KSA9PiBJTzxSZWFkb25seUFycmF5PEE+PiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgdHJhdmVyc2VBcnJheShpZGVudGl0eSlcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gZGVwcmVjYXRlZFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyB0c2xpbnQ6ZGlzYWJsZTogZGVwcmVjYXRpb25cblxuLyoqXG4gKiBVc2Ugc21hbGwsIHNwZWNpZmljIGluc3RhbmNlcyBpbnN0ZWFkLlxuICpcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjAuMFxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IGlvOiBNb25hZDE8VVJJPiAmIE1vbmFkSU8xPFVSST4gJiBDaGFpblJlYzE8VVJJPiA9IHtcbiAgVVJJLFxuICBtYXA6IF9tYXAsXG4gIG9mLFxuICBhcDogX2FwLFxuICBjaGFpbjogX2NoYWluLFxuICBmcm9tSU8sXG4gIGNoYWluUmVjOiBfY2hhaW5SZWNcbn1cblxuLyoqXG4gKiBVc2UgW2BnZXRBcHBseVNlbWlncm91cGBdKC4vQXBwbHkudHMuaHRtbCNnZXRhcHBseXNlbWlncm91cCkgaW5zdGVhZC5cbiAqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4wLjBcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRTZW1pZ3JvdXA6IDxBPihTOiBTZW1pZ3JvdXA8QT4pID0+IFNlbWlncm91cDxJTzxBPj4gPVxuICAvKiNfX1BVUkVfXyovXG4gIGdldEFwcGx5U2VtaWdyb3VwKEFwcGx5KVxuXG4vKipcbiAqIFVzZSBbYGdldEFwcGxpY2F0aXZlTW9ub2lkYF0oLi9BcHBsaWNhdGl2ZS50cy5odG1sI2dldGFwcGxpY2F0aXZlbW9ub2lkKSBpbnN0ZWFkLlxuICpcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjAuMFxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IGdldE1vbm9pZDogPEE+KE06IE1vbm9pZDxBPikgPT4gTW9ub2lkPElPPEE+PiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZ2V0QXBwbGljYXRpdmVNb25vaWQoQXBwbGljYXRpdmUpXG4iXX0=