"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.traverse = exports.sequence = exports.reduceRight = exports.reduce = exports.of = exports.map = exports.identity = exports.getShow = exports.getEq = exports.foldMap = exports.flatten = exports.flap = exports.extract = exports.extend = exports.duplicate = exports.chainFirst = exports.chain = exports.bindTo = exports.bind = exports.apSecond = exports.apS = exports.apFirst = exports.ap = exports.altW = exports.alt = exports.URI = exports.Traversable = exports.Pointed = exports.Monad = exports.Functor = exports.Foldable = exports.Do = exports.Comonad = exports.ChainRec = exports.Chain = exports.Apply = exports.Applicative = exports.Alt = void 0;

var _Apply = require("./Apply");

var _Chain = require("./Chain");

var _ChainRec = require("./ChainRec");

var _function = require("./function");

var _Functor = require("./Functor");

var _ = _interopRequireWildcard(require("./internal"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @since 2.0.0
 */
// -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------
var _map = function _map(fa, f) {
  return (0, _function.pipe)(fa, map(f));
};

var _ap = function _ap(fab, fa) {
  return (0, _function.pipe)(fab, ap(fa));
};

var _chain = function _chain(ma, f) {
  return (0, _function.pipe)(ma, chain(f));
};
/* istanbul ignore next */


var _reduce = function _reduce(fa, b, f) {
  return (0, _function.pipe)(fa, reduce(b, f));
};
/* istanbul ignore next */


var _foldMap = function _foldMap(M) {
  return function (fa, f) {
    return (0, _function.pipe)(fa, foldMap(M)(f));
  };
};
/* istanbul ignore next */


var _reduceRight = function _reduceRight(fa, b, f) {
  return (0, _function.pipe)(fa, reduceRight(b, f));
};
/* istanbul ignore next */


var _alt = function _alt(fa, that) {
  return (0, _function.pipe)(fa, alt(that));
};
/* istanbul ignore next */


var _extend = function _extend(wa, f) {
  return (0, _function.pipe)(wa, extend(f));
};
/* istanbul ignore next */


var _traverse = function _traverse(F) {
  var traverseF = traverse(F);
  return function (ta, f) {
    return (0, _function.pipe)(ta, traverseF(f));
  };
};

var _chainRec = _ChainRec.tailRec; // -------------------------------------------------------------------------------------
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
    return f(fa);
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
    return fab(fa);
  };
};
/**
 * @category Pointed
 * @since 2.0.0
 */


exports.ap = ap;
var of = _function.identity;
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation.
 *
 * @category Monad
 * @since 2.0.0
 */

exports.of = of;

var chain = function chain(f) {
  return function (ma) {
    return f(ma);
  };
};
/**
 * @category Extend
 * @since 2.0.0
 */


exports.chain = chain;

var extend = function extend(f) {
  return function (wa) {
    return f(wa);
  };
};
/**
 * @category Extract
 * @since 2.6.2
 */


exports.extend = extend;
var extract = _function.identity;
/**
 * Derivable from `Extend`.
 *
 * @category combinators
 * @since 2.0.0
 */

exports.extract = extract;
var duplicate = /*#__PURE__*/extend(_function.identity);
/**
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.0.0
 */

exports.duplicate = duplicate;
var flatten = /*#__PURE__*/chain(_function.identity);
/**
 * @category Foldable
 * @since 2.0.0
 */

exports.flatten = flatten;

var reduce = function reduce(b, f) {
  return function (fa) {
    return f(b, fa);
  };
};
/**
 * @category Foldable
 * @since 2.0.0
 */


exports.reduce = reduce;

var foldMap = function foldMap() {
  return function (f) {
    return function (fa) {
      return f(fa);
    };
  };
};
/**
 * @category Foldable
 * @since 2.0.0
 */


exports.foldMap = foldMap;

var reduceRight = function reduceRight(b, f) {
  return function (fa) {
    return f(fa, b);
  };
};
/**
 * @since 2.6.3
 */


exports.reduceRight = reduceRight;

var traverse = function traverse(F) {
  return function (f) {
    return function (ta) {
      return F.map(f(ta), _function.identity);
    };
  };
};
/**
 * @since 2.6.3
 */


exports.traverse = traverse;

var sequence = function sequence(F) {
  return function (ta) {
    return F.map(ta, _function.identity);
  };
};
/**
 * Less strict version of [`alt`](#alt).
 *
 * @category Alt
 * @since 2.9.0
 */


exports.sequence = sequence;

var altW = function altW() {
  return _function.identity;
};
/**
 * Identifies an associative operation on a type constructor. It is similar to `Semigroup`, except that it applies to
 * types of kind `* -> *`.
 *
 * @category Alt
 * @since 2.0.0
 */


exports.altW = altW;
var alt = altW; // -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------

/**
 * @category instances
 * @since 2.0.0
 */

exports.alt = alt;
var URI = 'Identity';
/**
 * @category instances
 * @since 2.0.0
 */

exports.URI = URI;

/**
 * @category instances
 * @since 2.0.0
 */
var getShow = _function.identity;
/**
 * @category instances
 * @since 2.0.0
 */

exports.getShow = getShow;
var getEq = _function.identity;
/**
 * @category instances
 * @since 2.7.0
 */

exports.getEq = getEq;
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
 * @category instances
 * @since 2.7.0
 */

exports.chainFirst = chainFirst;
var Foldable = {
  URI: URI,
  reduce: _reduce,
  foldMap: _foldMap,
  reduceRight: _reduceRight
};
/**
 * @category instances
 * @since 2.7.0
 */

exports.Foldable = Foldable;
var Traversable = {
  URI: URI,
  map: _map,
  reduce: _reduce,
  foldMap: _foldMap,
  reduceRight: _reduceRight,
  traverse: _traverse,
  sequence: sequence
};
/**
 * @category instances
 * @since 2.7.0
 */

exports.Traversable = Traversable;
var Alt = {
  URI: URI,
  map: _map,
  alt: _alt
};
/**
 * @category instances
 * @since 2.7.0
 */

exports.Alt = Alt;
var Comonad = {
  URI: URI,
  map: _map,
  extend: _extend,
  extract: extract
};
/**
 * @category instances
 * @since 2.7.0
 */

exports.Comonad = Comonad;
var ChainRec = {
  URI: URI,
  map: _map,
  ap: _ap,
  chain: _chain,
  chainRec: _chainRec
}; // -------------------------------------------------------------------------------------
// do notation
// -------------------------------------------------------------------------------------

/**
 * @since 2.9.0
 */

exports.ChainRec = ChainRec;
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
// deprecated
// -------------------------------------------------------------------------------------

/**
 * Use small, specific instances instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */

exports.apS = apS;
var identity = {
  URI: URI,
  map: _map,
  ap: _ap,
  of: of,
  chain: _chain,
  reduce: _reduce,
  foldMap: _foldMap,
  reduceRight: _reduceRight,
  traverse: _traverse,
  sequence: sequence,
  alt: _alt,
  extract: extract,
  extend: _extend,
  chainRec: _chainRec
};
exports.identity = identity;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mcC10cy9JZGVudGl0eS50cyJdLCJuYW1lcyI6WyJfbWFwIiwiZmEiLCJmIiwibWFwIiwiX2FwIiwiZmFiIiwiYXAiLCJfY2hhaW4iLCJtYSIsImNoYWluIiwiX3JlZHVjZSIsImIiLCJyZWR1Y2UiLCJfZm9sZE1hcCIsIk0iLCJmb2xkTWFwIiwiX3JlZHVjZVJpZ2h0IiwicmVkdWNlUmlnaHQiLCJfYWx0IiwidGhhdCIsImFsdCIsIl9leHRlbmQiLCJ3YSIsImV4dGVuZCIsIl90cmF2ZXJzZSIsIkYiLCJ0cmF2ZXJzZUYiLCJ0cmF2ZXJzZSIsInRhIiwiX2NoYWluUmVjIiwidGFpbFJlYyIsIm9mIiwiaWQiLCJleHRyYWN0IiwiZHVwbGljYXRlIiwiZmxhdHRlbiIsInNlcXVlbmNlIiwiYWx0VyIsIlVSSSIsImdldFNob3ciLCJnZXRFcSIsIkZ1bmN0b3IiLCJmbGFwIiwiUG9pbnRlZCIsIkFwcGx5IiwiYXBGaXJzdCIsImFwU2Vjb25kIiwiQXBwbGljYXRpdmUiLCJDaGFpbiIsIk1vbmFkIiwiY2hhaW5GaXJzdCIsIkZvbGRhYmxlIiwiVHJhdmVyc2FibGUiLCJBbHQiLCJDb21vbmFkIiwiQ2hhaW5SZWMiLCJjaGFpblJlYyIsIkRvIiwiXyIsImVtcHR5UmVjb3JkIiwiYmluZFRvIiwiYmluZCIsImFwUyIsImlkZW50aXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQTs7QUFDQTs7QUFDQTs7QUFLQTs7QUFDQTs7QUFFQTs7Ozs7O0FBZkE7QUFDQTtBQUNBO0FBOEJBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLElBQXdCLEdBQUcsU0FBM0JBLElBQTJCLENBQUNDLEVBQUQsRUFBS0MsQ0FBTDtBQUFBLFNBQVcsb0JBQUtELEVBQUwsRUFBU0UsR0FBRyxDQUFDRCxDQUFELENBQVosQ0FBWDtBQUFBLENBQWpDOztBQUNBLElBQU1FLEdBQXNCLEdBQUcsU0FBekJBLEdBQXlCLENBQUNDLEdBQUQsRUFBTUosRUFBTjtBQUFBLFNBQWEsb0JB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Y3JIbUMsRUFBQUEsUUFBUSxFQUFFM0I7QUFkMkcsQ0FBaEgiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5pbXBvcnQgeyBBbHQxIH0gZnJvbSAnLi9BbHQnXG5pbXBvcnQgeyBBcHBsaWNhdGl2ZSBhcyBBcHBsaWNhdGl2ZUhLVCwgQXBwbGljYXRpdmUxIH0gZnJvbSAnLi9BcHBsaWNhdGl2ZSdcbmltcG9ydCB7IGFwRmlyc3QgYXMgYXBGaXJzdF8sIEFwcGx5MSwgYXBTIGFzIGFwU18sIGFwU2Vjb25kIGFzIGFwU2Vjb25kXyB9IGZyb20gJy4vQXBwbHknXG5pbXBvcnQgeyBiaW5kIGFzIGJpbmRfLCBDaGFpbjEsIGNoYWluRmlyc3QgYXMgY2hhaW5GaXJzdF8gfSBmcm9tICcuL0NoYWluJ1xuaW1wb3J0IHsgQ2hhaW5SZWMxLCB0YWlsUmVjIH0gZnJvbSAnLi9DaGFpblJlYydcbmltcG9ydCB7IENvbW9uYWQxIH0gZnJvbSAnLi9Db21vbmFkJ1xuaW1wb3J0IHsgRXEgfSBmcm9tICcuL0VxJ1xuaW1wb3J0IHsgRXh0ZW5kMSB9IGZyb20gJy4vRXh0ZW5kJ1xuaW1wb3J0IHsgRm9sZGFibGUxIH0gZnJvbSAnLi9Gb2xkYWJsZSdcbmltcG9ydCB7IGlkZW50aXR5IGFzIGlkLCBwaXBlIH0gZnJvbSAnLi9mdW5jdGlvbidcbmltcG9ydCB7IGJpbmRUbyBhcyBiaW5kVG9fLCBmbGFwIGFzIGZsYXBfLCBGdW5jdG9yMSB9IGZyb20gJy4vRnVuY3RvcidcbmltcG9ydCB7IEhLVCB9IGZyb20gJy4vSEtUJ1xuaW1wb3J0ICogYXMgXyBmcm9tICcuL2ludGVybmFsJ1xuaW1wb3J0IHsgTW9uYWQxIH0gZnJvbSAnLi9Nb25hZCdcbmltcG9ydCB7IE1vbm9pZCB9IGZyb20gJy4vTW9ub2lkJ1xuaW1wb3J0IHsgUG9pbnRlZDEgfSBmcm9tICcuL1BvaW50ZWQnXG5pbXBvcnQgeyBTaG93IH0gZnJvbSAnLi9TaG93J1xuaW1wb3J0IHsgUGlwZWFibGVUcmF2ZXJzZTEsIFRyYXZlcnNhYmxlMSB9IGZyb20gJy4vVHJhdmVyc2FibGUnXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIG1vZGVsXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQGNhdGVnb3J5IG1vZGVsXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IHR5cGUgSWRlbnRpdHk8QT4gPSBBXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIG5vbi1waXBlYWJsZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuY29uc3QgX21hcDogTW9uYWQxPFVSST5bJ21hcCddID0gKGZhLCBmKSA9PiBwaXBlKGZhLCBtYXAoZikpXG5jb25zdCBfYXA6IE1vbmFkMTxVUkk+WydhcCddID0gKGZhYiwgZmEpID0+IHBpcGUoZmFiLCBhcChmYSkpXG5jb25zdCBfY2hhaW46IE1vbmFkMTxVUkk+WydjaGFpbiddID0gKG1hLCBmKSA9PiBwaXBlKG1hLCBjaGFpbihmKSlcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5jb25zdCBfcmVkdWNlOiBGb2xkYWJsZTE8VVJJPlsncmVkdWNlJ10gPSAoZmEsIGIsIGYpID0+IHBpcGUoZmEsIHJlZHVjZShiLCBmKSlcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5jb25zdCBfZm9sZE1hcDogRm9sZGFibGUxPFVSST5bJ2ZvbGRNYXAnXSA9IChNKSA9PiAoZmEsIGYpID0+IHBpcGUoZmEsIGZvbGRNYXAoTSkoZikpXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuY29uc3QgX3JlZHVjZVJpZ2h0OiBGb2xkYWJsZTE8VVJJPlsncmVkdWNlUmlnaHQnXSA9IChmYSwgYiwgZikgPT4gcGlwZShmYSwgcmVkdWNlUmlnaHQoYiwgZikpXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuY29uc3QgX2FsdDogQWx0MTxVUkk+WydhbHQnXSA9IChmYSwgdGhhdCkgPT4gcGlwZShmYSwgYWx0KHRoYXQpKVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmNvbnN0IF9leHRlbmQ6IEV4dGVuZDE8VVJJPlsnZXh0ZW5kJ10gPSAod2EsIGYpID0+IHBpcGUod2EsIGV4dGVuZChmKSlcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5jb25zdCBfdHJhdmVyc2UgPSA8Rj4oXG4gIEY6IEFwcGxpY2F0aXZlSEtUPEY+XG4pOiAoPEEsIEI+KHRhOiBJZGVudGl0eTxBPiwgZjogKGE6IEEpID0+IEhLVDxGLCBCPikgPT4gSEtUPEYsIElkZW50aXR5PEI+PikgPT4ge1xuICBjb25zdCB0cmF2ZXJzZUYgPSB0cmF2ZXJzZShGKVxuICByZXR1cm4gKHRhLCBmKSA9PiBwaXBlKHRhLCB0cmF2ZXJzZUYoZikpXG59XG5jb25zdCBfY2hhaW5SZWM6IENoYWluUmVjMTxVUkk+WydjaGFpblJlYyddID0gdGFpbFJlY1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyB0eXBlIGNsYXNzIG1lbWJlcnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBgbWFwYCBjYW4gYmUgdXNlZCB0byB0dXJuIGZ1bmN0aW9ucyBgKGE6IEEpID0+IEJgIGludG8gZnVuY3Rpb25zIGAoZmE6IEY8QT4pID0+IEY8Qj5gIHdob3NlIGFyZ3VtZW50IGFuZCByZXR1cm4gdHlwZXNcbiAqIHVzZSB0aGUgdHlwZSBjb25zdHJ1Y3RvciBgRmAgdG8gcmVwcmVzZW50IHNvbWUgY29tcHV0YXRpb25hbCBjb250ZXh0LlxuICpcbiAqIEBjYXRlZ29yeSBGdW5jdG9yXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IG1hcDogPEEsIEI+KGY6IChhOiBBKSA9PiBCKSA9PiAoZmE6IElkZW50aXR5PEE+KSA9PiBJZGVudGl0eTxCPiA9IChmKSA9PiAoZmEpID0+IGYoZmEpXG5cbi8qKlxuICogQXBwbHkgYSBmdW5jdGlvbiB0byBhbiBhcmd1bWVudCB1bmRlciBhIHR5cGUgY29uc3RydWN0b3IuXG4gKlxuICogQGNhdGVnb3J5IEFwcGx5XG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGFwOiA8QT4oZmE6IElkZW50aXR5PEE+KSA9PiA8Qj4oZmFiOiBJZGVudGl0eTwoYTogQSkgPT4gQj4pID0+IElkZW50aXR5PEI+ID0gKGZhKSA9PiAoZmFiKSA9PiBmYWIoZmEpXG5cbi8qKlxuICogQGNhdGVnb3J5IFBvaW50ZWRcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3Qgb2Y6IFBvaW50ZWQxPFVSST5bJ29mJ10gPSBpZFxuXG4vKipcbiAqIENvbXBvc2VzIGNvbXB1dGF0aW9ucyBpbiBzZXF1ZW5jZSwgdXNpbmcgdGhlIHJldHVybiB2YWx1ZSBvZiBvbmUgY29tcHV0YXRpb24gdG8gZGV0ZXJtaW5lIHRoZSBuZXh0IGNvbXB1dGF0aW9uLlxuICpcbiAqIEBjYXRlZ29yeSBNb25hZFxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBjaGFpbjogPEEsIEI+KGY6IChhOiBBKSA9PiBJZGVudGl0eTxCPikgPT4gKG1hOiBJZGVudGl0eTxBPikgPT4gSWRlbnRpdHk8Qj4gPSAoZikgPT4gKG1hKSA9PiBmKG1hKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBFeHRlbmRcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgZXh0ZW5kOiA8QSwgQj4oZjogKHdhOiBJZGVudGl0eTxBPikgPT4gQikgPT4gKHdhOiBJZGVudGl0eTxBPikgPT4gSWRlbnRpdHk8Qj4gPSAoZikgPT4gKHdhKSA9PiBmKHdhKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBFeHRyYWN0XG4gKiBAc2luY2UgMi42LjJcbiAqL1xuZXhwb3J0IGNvbnN0IGV4dHJhY3Q6IDxBPih3YTogSWRlbnRpdHk8QT4pID0+IEEgPSBpZFxuXG4vKipcbiAqIERlcml2YWJsZSBmcm9tIGBFeHRlbmRgLlxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBkdXBsaWNhdGU6IDxBPihtYTogSWRlbnRpdHk8QT4pID0+IElkZW50aXR5PElkZW50aXR5PEE+PiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZXh0ZW5kKGlkKVxuXG4vKipcbiAqIERlcml2YWJsZSBmcm9tIGBDaGFpbmAuXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZsYXR0ZW46IDxBPihtbWE6IElkZW50aXR5PElkZW50aXR5PEE+PikgPT4gSWRlbnRpdHk8QT4gPVxuICAvKiNfX1BVUkVfXyovXG4gIGNoYWluKGlkKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBGb2xkYWJsZVxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCByZWR1Y2U6IDxBLCBCPihiOiBCLCBmOiAoYjogQiwgYTogQSkgPT4gQikgPT4gKGZhOiBJZGVudGl0eTxBPikgPT4gQiA9IChiLCBmKSA9PiAoZmEpID0+IGYoYiwgZmEpXG5cbi8qKlxuICogQGNhdGVnb3J5IEZvbGRhYmxlXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZvbGRNYXA6IDxNPihNOiBNb25vaWQ8TT4pID0+IDxBPihmOiAoYTogQSkgPT4gTSkgPT4gKGZhOiBJZGVudGl0eTxBPikgPT4gTSA9ICgpID0+IChmKSA9PiAoZmEpID0+IGYoZmEpXG5cbi8qKlxuICogQGNhdGVnb3J5IEZvbGRhYmxlXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHJlZHVjZVJpZ2h0OiA8QSwgQj4oYjogQiwgZjogKGE6IEEsIGI6IEIpID0+IEIpID0+IChmYTogSWRlbnRpdHk8QT4pID0+IEIgPSAoYiwgZikgPT4gKGZhKSA9PiBmKGZhLCBiKVxuXG4vKipcbiAqIEBzaW5jZSAyLjYuM1xuICovXG5leHBvcnQgY29uc3QgdHJhdmVyc2U6IFBpcGVhYmxlVHJhdmVyc2UxPFVSST4gPSA8Rj4oXG4gIEY6IEFwcGxpY2F0aXZlSEtUPEY+XG4pOiAoPEEsIEI+KGY6IChhOiBBKSA9PiBIS1Q8RiwgQj4pID0+ICh0YTogSWRlbnRpdHk8QT4pID0+IEhLVDxGLCBJZGVudGl0eTxCPj4pID0+IChmKSA9PiAodGEpID0+IEYubWFwKGYodGEpLCBpZClcblxuLyoqXG4gKiBAc2luY2UgMi42LjNcbiAqL1xuZXhwb3J0IGNvbnN0IHNlcXVlbmNlOiBUcmF2ZXJzYWJsZTE8VVJJPlsnc2VxdWVuY2UnXSA9IDxGPihGOiBBcHBsaWNhdGl2ZUhLVDxGPikgPT4gPEE+KFxuICB0YTogSWRlbnRpdHk8SEtUPEYsIEE+PlxuKTogSEtUPEYsIElkZW50aXR5PEE+PiA9PiB7XG4gIHJldHVybiBGLm1hcCh0YSwgaWQpXG59XG5cbi8qKlxuICogTGVzcyBzdHJpY3QgdmVyc2lvbiBvZiBbYGFsdGBdKCNhbHQpLlxuICpcbiAqIEBjYXRlZ29yeSBBbHRcbiAqIEBzaW5jZSAyLjkuMFxuICovXG5leHBvcnQgY29uc3QgYWx0VzogPEI+KHRoYXQ6ICgpID0+IElkZW50aXR5PEI+KSA9PiA8QT4oZmE6IElkZW50aXR5PEE+KSA9PiBJZGVudGl0eTxBIHwgQj4gPSAoKSA9PiBpZFxuXG4vKipcbiAqIElkZW50aWZpZXMgYW4gYXNzb2NpYXRpdmUgb3BlcmF0aW9uIG9uIGEgdHlwZSBjb25zdHJ1Y3Rvci4gSXQgaXMgc2ltaWxhciB0byBgU2VtaWdyb3VwYCwgZXhjZXB0IHRoYXQgaXQgYXBwbGllcyB0b1xuICogdHlwZXMgb2Yga2luZCBgKiAtPiAqYC5cbiAqXG4gKiBAY2F0ZWdvcnkgQWx0XG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGFsdDogPEE+KHRoYXQ6ICgpID0+IElkZW50aXR5PEE+KSA9PiAoZmE6IElkZW50aXR5PEE+KSA9PiBJZGVudGl0eTxBPiA9IGFsdFdcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gaW5zdGFuY2VzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBVUkkgPSAnSWRlbnRpdHknXG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCB0eXBlIFVSSSA9IHR5cGVvZiBVUklcblxuZGVjbGFyZSBtb2R1bGUgJy4vSEtUJyB7XG4gIGludGVyZmFjZSBVUkl0b0tpbmQ8QT4ge1xuICAgIHJlYWRvbmx5IFtVUkldOiBJZGVudGl0eTxBPlxuICB9XG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRTaG93OiA8QT4oUzogU2hvdzxBPikgPT4gU2hvdzxJZGVudGl0eTxBPj4gPSBpZFxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgZ2V0RXE6IDxBPihFOiBFcTxBPikgPT4gRXE8SWRlbnRpdHk8QT4+ID0gaWRcblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi43LjBcbiAqL1xuZXhwb3J0IGNvbnN0IEZ1bmN0b3I6IEZ1bmN0b3IxPFVSST4gPSB7XG4gIFVSSSxcbiAgbWFwOiBfbWFwXG59XG5cbi8qKlxuICogRGVyaXZhYmxlIGZyb20gYEZ1bmN0b3JgLlxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgZmxhcCA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZmxhcF8oRnVuY3RvcilcblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBQb2ludGVkOiBQb2ludGVkMTxVUkk+ID0ge1xuICBVUkksXG4gIG9mXG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgQXBwbHk6IEFwcGx5MTxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgYXA6IF9hcFxufVxuXG4vKipcbiAqIENvbWJpbmUgdHdvIGVmZmVjdGZ1bCBhY3Rpb25zLCBrZWVwaW5nIG9ubHkgdGhlIHJlc3VsdCBvZiB0aGUgZmlyc3QuXG4gKlxuICogRGVyaXZhYmxlIGZyb20gYEFwcGx5YC5cbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgYXBGaXJzdCA9XG4gIC8qI19fUFVSRV9fKi9cbiAgYXBGaXJzdF8oQXBwbHkpXG5cbi8qKlxuICogQ29tYmluZSB0d28gZWZmZWN0ZnVsIGFjdGlvbnMsIGtlZXBpbmcgb25seSB0aGUgcmVzdWx0IG9mIHRoZSBzZWNvbmQuXG4gKlxuICogRGVyaXZhYmxlIGZyb20gYEFwcGx5YC5cbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgYXBTZWNvbmQgPVxuICAvKiNfX1BVUkVfXyovXG4gIGFwU2Vjb25kXyhBcHBseSlcblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi43LjBcbiAqL1xuZXhwb3J0IGNvbnN0IEFwcGxpY2F0aXZlOiBBcHBsaWNhdGl2ZTE8VVJJPiA9IHtcbiAgVVJJLFxuICBtYXA6IF9tYXAsXG4gIGFwOiBfYXAsXG4gIG9mXG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgQ2hhaW46IENoYWluMTxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgYXA6IF9hcCxcbiAgY2hhaW46IF9jaGFpblxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjcuMFxuICovXG5leHBvcnQgY29uc3QgTW9uYWQ6IE1vbmFkMTxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgYXA6IF9hcCxcbiAgb2YsXG4gIGNoYWluOiBfY2hhaW5cbn1cblxuLyoqXG4gKiBDb21wb3NlcyBjb21wdXRhdGlvbnMgaW4gc2VxdWVuY2UsIHVzaW5nIHRoZSByZXR1cm4gdmFsdWUgb2Ygb25lIGNvbXB1dGF0aW9uIHRvIGRldGVybWluZSB0aGUgbmV4dCBjb21wdXRhdGlvbiBhbmRcbiAqIGtlZXBpbmcgb25seSB0aGUgcmVzdWx0IG9mIHRoZSBmaXJzdC5cbiAqXG4gKiBEZXJpdmFibGUgZnJvbSBgQ2hhaW5gLlxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBjaGFpbkZpcnN0ID1cbiAgLyojX19QVVJFX18qL1xuICBjaGFpbkZpcnN0XyhDaGFpbilcblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi43LjBcbiAqL1xuZXhwb3J0IGNvbnN0IEZvbGRhYmxlOiBGb2xkYWJsZTE8VVJJPiA9IHtcbiAgVVJJLFxuICByZWR1Y2U6IF9yZWR1Y2UsXG4gIGZvbGRNYXA6IF9mb2xkTWFwLFxuICByZWR1Y2VSaWdodDogX3JlZHVjZVJpZ2h0XG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuNy4wXG4gKi9cbmV4cG9ydCBjb25zdCBUcmF2ZXJzYWJsZTogVHJhdmVyc2FibGUxPFVSST4gPSB7XG4gIFVSSSxcbiAgbWFwOiBfbWFwLFxuICByZWR1Y2U6IF9yZWR1Y2UsXG4gIGZvbGRNYXA6IF9mb2xkTWFwLFxuICByZWR1Y2VSaWdodDogX3JlZHVjZVJpZ2h0LFxuICB0cmF2ZXJzZTogX3RyYXZlcnNlLFxuICBzZXF1ZW5jZVxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjcuMFxuICovXG5leHBvcnQgY29uc3QgQWx0OiBBbHQxPFVSST4gPSB7XG4gIFVSSSxcbiAgbWFwOiBfbWFwLFxuICBhbHQ6IF9hbHRcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi43LjBcbiAqL1xuZXhwb3J0IGNvbnN0IENvbW9uYWQ6IENvbW9uYWQxPFVSST4gPSB7XG4gIFVSSSxcbiAgbWFwOiBfbWFwLFxuICBleHRlbmQ6IF9leHRlbmQsXG4gIGV4dHJhY3Rcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi43LjBcbiAqL1xuZXhwb3J0IGNvbnN0IENoYWluUmVjOiBDaGFpblJlYzE8VVJJPiA9IHtcbiAgVVJJLFxuICBtYXA6IF9tYXAsXG4gIGFwOiBfYXAsXG4gIGNoYWluOiBfY2hhaW4sXG4gIGNoYWluUmVjOiBfY2hhaW5SZWNcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gZG8gbm90YXRpb25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBAc2luY2UgMi45LjBcbiAqL1xuZXhwb3J0IGNvbnN0IERvOiBJZGVudGl0eTx7fT4gPVxuICAvKiNfX1BVUkVfXyovXG4gIG9mKF8uZW1wdHlSZWNvcmQpXG5cbi8qKlxuICogQHNpbmNlIDIuOC4wXG4gKi9cbmV4cG9ydCBjb25zdCBiaW5kVG8gPVxuICAvKiNfX1BVUkVfXyovXG4gIGJpbmRUb18oRnVuY3RvcilcblxuLyoqXG4gKiBAc2luY2UgMi44LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGJpbmQgPVxuICAvKiNfX1BVUkVfXyovXG4gIGJpbmRfKENoYWluKVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBwaXBlYWJsZSBzZXF1ZW5jZSBTXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQHNpbmNlIDIuOC4wXG4gKi9cbmV4cG9ydCBjb25zdCBhcFMgPVxuICAvKiNfX1BVUkVfXyovXG4gIGFwU18oQXBwbHkpXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGRlcHJlY2F0ZWRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBVc2Ugc21hbGwsIHNwZWNpZmljIGluc3RhbmNlcyBpbnN0ZWFkLlxuICpcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjAuMFxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IGlkZW50aXR5OiBNb25hZDE8VVJJPiAmIEZvbGRhYmxlMTxVUkk+ICYgVHJhdmVyc2FibGUxPFVSST4gJiBBbHQxPFVSST4gJiBDb21vbmFkMTxVUkk+ICYgQ2hhaW5SZWMxPFVSST4gPSB7XG4gIFVSSSxcbiAgbWFwOiBfbWFwLFxuICBhcDogX2FwLFxuICBvZixcbiAgY2hhaW46IF9jaGFpbixcbiAgcmVkdWNlOiBfcmVkdWNlLFxuICBmb2xkTWFwOiBfZm9sZE1hcCxcbiAgcmVkdWNlUmlnaHQ6IF9yZWR1Y2VSaWdodCxcbiAgdHJhdmVyc2U6IF90cmF2ZXJzZSxcbiAgc2VxdWVuY2UsXG4gIGFsdDogX2FsdCxcbiAgZXh0cmFjdCxcbiAgZXh0ZW5kOiBfZXh0ZW5kLFxuICBjaGFpblJlYzogX2NoYWluUmVjXG59XG4iXX0=