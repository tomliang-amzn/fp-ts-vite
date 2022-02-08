"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fst = exports.foldMap = exports.flap = exports.extract = exports.extend = exports.duplicate = exports.compose = exports.bimap = exports.URI = exports.Traversable = exports.Semigroupoid = exports.Functor = exports.Foldable = exports.Comonad = exports.Bifunctor = void 0;
exports.getApplicative = getApplicative;
exports.getApply = getApply;
exports.getChain = getChain;
exports.getChainRec = getChainRec;
exports.getMonad = getMonad;
exports.tuple = exports.traverse = exports.swap = exports.snd = exports.sequence = exports.reduceRight = exports.reduce = exports.mapSnd = exports.mapLeft = exports.mapFst = exports.map = void 0;

var RT = _interopRequireWildcard(require("./ReadonlyTuple"));

var _Functor = require("./Functor");

var _function = require("./function");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

/**
 * @category destructors
 * @since 2.0.0
 */
var fst = RT.fst;
/**
 * @category destructors
 * @since 2.0.0
 */

exports.fst = fst;
var snd = RT.snd;
/**
 * @category combinators
 * @since 2.0.0
 */

exports.snd = snd;

var swap = function swap(ea) {
  return [snd(ea), fst(ea)];
};
/**
 * @category instances
 * @since 2.0.0
 */


exports.swap = swap;

function getApply(S) {
  return {
    URI: URI,
    _E: undefined,
    map: _map,
    ap: function ap(fab, fa) {
      return [fst(fab)(fst(fa)), S.concat(snd(fab), snd(fa))];
    }
  };
}

var of = function of(M) {
  return function (a) {
    return [a, M.empty];
  };
};
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
    of: of(M)
  };
}
/**
 * @category instances
 * @since 2.0.0
 */


function getChain(S) {
  var A = getApply(S);
  return {
    URI: URI,
    _E: undefined,
    map: A.map,
    ap: A.ap,
    chain: function chain(ma, f) {
      var _f = f(fst(ma)),
          _f2 = _slicedToArray(_f, 2),
          b = _f2[0],
          s = _f2[1];

      return [b, S.concat(snd(ma), s)];
    }
  };
}
/**
 * @category instances
 * @since 2.0.0
 */


function getMonad(M) {
  var C = getChain(M);
  return {
    URI: URI,
    _E: undefined,
    map: C.map,
    ap: C.ap,
    chain: C.chain,
    of: of(M)
  };
}
/**
 * @category instances
 * @since 2.0.0
 */


function getChainRec(M) {
  var chainRec = function chainRec(a, f) {
    var result = f(a);
    var acc = M.empty;
    var s = fst(result);

    while (s._tag === 'Left') {
      acc = M.concat(acc, snd(result));
      result = f(s.left);
      s = fst(result);
    }

    return [s.right, M.concat(acc, snd(result))];
  };

  var C = getChain(M);
  return {
    URI: URI,
    _E: undefined,
    map: C.map,
    ap: C.ap,
    chain: C.chain,
    chainRec: chainRec
  };
} // -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------

/* istanbul ignore next */


var _compose = function _compose(bc, ab) {
  return (0, _function.pipe)(bc, compose(ab));
};
/* istanbul ignore next */


var _map = function _map(fa, f) {
  return (0, _function.pipe)(fa, mapFst(f));
};
/* istanbul ignore next */


var _bimap = function _bimap(fa, f, g) {
  return (0, _function.pipe)(fa, bimap(f, g));
};
/* istanbul ignore next */


var _mapLeft = function _mapLeft(fa, f) {
  return (0, _function.pipe)(fa, mapSnd(f));
};
/* istanbul ignore next */


var _extend = function _extend(wa, f) {
  return (0, _function.pipe)(wa, extend(f));
};
/* istanbul ignore next */


var _reduce = function _reduce(fa, b, f) {
  return (0, _function.pipe)(fa, reduce(b, f));
};
/* istanbul ignore next */


var _foldMap = function _foldMap(M) {
  var foldMapM = foldMap(M);
  return function (fa, f) {
    return (0, _function.pipe)(fa, foldMapM(f));
  };
};
/* istanbul ignore next */


var _reduceRight = function _reduceRight(fa, b, f) {
  return (0, _function.pipe)(fa, reduceRight(b, f));
};
/* istanbul ignore next */


function _traverse(F) {
  var traverseF = traverse(F);
  return function (ta, f) {
    return (0, _function.pipe)(ta, traverseF(f));
  };
} // -------------------------------------------------------------------------------------
// type class members
// -------------------------------------------------------------------------------------

/**
 * Map a pair of functions over the two type arguments of the bifunctor.
 *
 * @category Bifunctor
 * @since 2.0.0
 */


var bimap = function bimap(f, g) {
  return function (fa) {
    return [g(fst(fa)), f(snd(fa))];
  };
};
/**
 * Map a function over the first component of a `Tuple`.
 *
 * This is the `map` operation of the `Functor` instance.
 *
 * @category Functor
 * @since 2.0.0
 */


exports.bimap = bimap;

var mapFst = function mapFst(f) {
  return function (fa) {
    return [f(fst(fa)), snd(fa)];
  };
};
/**
 * Map a function over the second component of a `Tuple`.
 *
 * This is the `mapLeft` operation of the `Bifunctor` instance.
 *
 * @category Bifunctor
 * @since 2.10.0
 */


exports.mapFst = mapFst;

var mapSnd = function mapSnd(f) {
  return function (fa) {
    return [fst(fa), f(snd(fa))];
  };
};
/**
 * @category Semigroupoid
 * @since 2.0.0
 */


exports.mapSnd = mapSnd;

var compose = function compose(ab) {
  return function (bc) {
    return [fst(bc), snd(ab)];
  };
};
/**
 * @category Extend
 * @since 2.0.0
 */


exports.compose = compose;

var extend = function extend(f) {
  return function (wa) {
    return [f(wa), snd(wa)];
  };
};
/**
 * Derivable from `Extend`.
 *
 * @category combinators
 * @since 2.0.0
 */


exports.extend = extend;
var duplicate = /*#__PURE__*/extend(_function.identity);
/**
 * @category Extract
 * @since 2.6.2
 */

exports.duplicate = duplicate;
var extract = RT.extract;
/**
 * @category Foldable
 * @since 2.0.0
 */

exports.extract = extract;
var foldMap = RT.foldMap;
/**
 * @category Foldable
 * @since 2.0.0
 */

exports.foldMap = foldMap;
var reduce = RT.reduce;
/**
 * @category Foldable
 * @since 2.0.0
 */

exports.reduce = reduce;
var reduceRight = RT.reduceRight;
/**
 * @since 2.6.3
 */

exports.reduceRight = reduceRight;

var traverse = function traverse(F) {
  return function (f) {
    return function (ta) {
      return F.map(f(fst(ta)), function (b) {
        return [b, snd(ta)];
      });
    };
  };
};
/**
 * @since 2.6.3
 */


exports.traverse = traverse;

var sequence = function sequence(F) {
  return function (fas) {
    return F.map(fst(fas), function (a) {
      return [a, snd(fas)];
    });
  };
}; // -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------

/**
 * @category instances
 * @since 2.0.0
 */


exports.sequence = sequence;
var URI = 'Tuple';
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
var Bifunctor = {
  URI: URI,
  bimap: _bimap,
  mapLeft: _mapLeft
};
/**
 * @category instances
 * @since 2.7.0
 */

exports.Bifunctor = Bifunctor;
var Semigroupoid = {
  URI: URI,
  compose: _compose
};
/**
 * @category instances
 * @since 2.7.0
 */

exports.Semigroupoid = Semigroupoid;
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
}; // -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------

/**
 * Use [`mapFst`](#mapfst) instead.
 *
 * @since 2.0.0
 * @deprecated
 */

exports.Traversable = Traversable;
var map = mapFst;
/**
 * Use [`mapSnd`](#mapsnd) instead.
 *
 * @since 2.0.0
 * @deprecated
 */

exports.map = map;
var mapLeft = mapSnd;
/**
 * Use small, specific instances instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */

exports.mapLeft = mapLeft;
var tuple = {
  URI: URI,
  compose: _compose,
  map: _map,
  bimap: _bimap,
  mapLeft: _mapLeft,
  extract: extract,
  extend: _extend,
  reduce: _reduce,
  foldMap: _foldMap,
  reduceRight: _reduceRight,
  traverse: _traverse,
  sequence: sequence
};
exports.tuple = tuple;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mcC10cy9UdXBsZS50cyJdLCJuYW1lcyI6WyJmc3QiLCJSVCIsInNuZCIsInN3YXAiLCJlYSIsImdldEFwcGx5IiwiUyIsIlVSSSIsIl9FIiwidW5kZWZpbmVkIiwibWFwIiwiX21hcCIsImFwIiwiZmFiIiwiZmEiLCJjb25jYXQiLCJvZiIsIk0iLCJhIiwiZW1wdHkiLCJnZXRBcHBsaWNhdGl2ZSIsIkEiLCJnZXRDaGFpbiIsImNoYWluIiwibWEiLCJmIiwiYiIsInMiLCJnZXRNb25hZCIsIkMiLCJnZXRDaGFpblJlYyIsImNoYWluUmVjIiwicmVzdWx0IiwiYWNjIiwiX3RhZyIsImxlZnQiLCJyaWdodCIsIl9jb21wb3NlIiwiYmMiLCJhYiIsImNvbXBvc2UiLCJtYXBGc3QiLCJfYmltYXAiLCJnIiwiYmltYXAiLCJfbWFwTGVmdCIsIm1hcFNuZCIsIl9leHRlbmQiLCJ3YSIsImV4dGVuZCIsIl9yZWR1Y2UiLCJyZWR1Y2UiLCJfZm9sZE1hcCIsImZvbGRNYXBNIiwiZm9sZE1hcCIsIl9yZWR1Y2VSaWdodCIsInJlZHVjZVJpZ2h0IiwiX3RyYXZlcnNlIiwiRiIsInRyYXZlcnNlRiIsInRyYXZlcnNlIiwidGEiLCJkdXBsaWNhdGUiLCJpZGVudGl0eSIsImV4dHJhY3QiLCJzZXF1ZW5jZSIsImZhcyIsIkZ1bmN0b3IiLCJmbGFwIiwiQmlmdW5jdG9yIiwibWFwTGVmdCIsIlNlbWlncm91cG9pZCIsIkNvbW9uYWQiLCJGb2xkYWJsZSIsIlRyYXZlcnNhYmxlIiwidHVwbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQVlBOztBQUlBOztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDTyxJQUFNQSxHQUE0QixHQUFHQyxFQUFFLENBQUNELEdBQXhDO0FBRVA7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLElBQU1FLEdBQTRCLEdBQUdELEVBQUUsQ0FBQ0MsR0FBeEM7QUFF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O0FBTzVDUSxFQUFBQSxRQUFRLEVBQVJBO0FBUDRDLENBQXZDLEMsQ0FVUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxJQUFNdkQsR0FBd0QsR0FBRytCLE1BQWpFO0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxJQUFNNkIsT0FBNEQsR0FBR3hCLE1BQXJFO0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLElBQU02QixLQUFnRyxHQUFHO0FBQzlHcEUsRUFBQUEsR0FBRyxFQUFIQSxHQUQ4RztBQUU5R2lDLEVBQUFBLE9BQU8sRUFBRUgsUUFGcUc7QUFHOUczQixFQUFBQSxHQUFHLEVBQUVDLElBSHlHO0FBSTlHaUMsRUFBQUEsS0FBSyxFQUFFRixNQUp1RztBQUs5RzRCLEVBQUFBLE9BQU8sRUFBRXpCLFFBTHFHO0FBTTlHbUIsRUFBQUEsT0FBTyxFQUFQQSxPQU44RztBQU85R2YsRUFBQUEsTUFBTSxFQUFFRixPQVBzRztBQVE5R0ksRUFBQUEsTUFBTSxFQUFFRCxPQVJzRztBQVM5R0ksRUFBQUEsT0FBTyxFQUFFRixRQVRxRztBQVU5R0ksRUFBQUEsV0FBVyxFQUFFRCxZQVZpRztBQVc5R0ssRUFBQUEsUUFBUSxFQUFFSCxTQVhvRztBQVk5R1EsRUFBQUEsUUFBUSxFQUFSQTtBQVo4RyxDQUF6RyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmltcG9ydCB7IEFwcGxpY2F0aXZlLCBBcHBsaWNhdGl2ZTJDIH0gZnJvbSAnLi9BcHBsaWNhdGl2ZSdcbmltcG9ydCB7IEFwcGx5MkMgfSBmcm9tICcuL0FwcGx5J1xuaW1wb3J0IHsgQmlmdW5jdG9yMiB9IGZyb20gJy4vQmlmdW5jdG9yJ1xuaW1wb3J0IHsgQ2hhaW4yQyB9IGZyb20gJy4vQ2hhaW4nXG5pbXBvcnQgeyBDaGFpblJlYzJDIH0gZnJvbSAnLi9DaGFpblJlYydcbmltcG9ydCB7IENvbW9uYWQyIH0gZnJvbSAnLi9Db21vbmFkJ1xuaW1wb3J0IHsgRm9sZGFibGUyIH0gZnJvbSAnLi9Gb2xkYWJsZSdcbmltcG9ydCB7IE1vbmFkMkMgfSBmcm9tICcuL01vbmFkJ1xuaW1wb3J0IHsgTW9ub2lkIH0gZnJvbSAnLi9Nb25vaWQnXG5pbXBvcnQgKiBhcyBSVCBmcm9tICcuL1JlYWRvbmx5VHVwbGUnXG5pbXBvcnQgeyBTZW1pZ3JvdXAgfSBmcm9tICcuL1NlbWlncm91cCdcbmltcG9ydCB7IFNlbWlncm91cG9pZDIgfSBmcm9tICcuL1NlbWlncm91cG9pZCdcbmltcG9ydCB7IFRyYXZlcnNhYmxlMiwgUGlwZWFibGVUcmF2ZXJzZTIgfSBmcm9tICcuL1RyYXZlcnNhYmxlJ1xuaW1wb3J0IHsgZmxhcCBhcyBmbGFwXywgRnVuY3RvcjIgfSBmcm9tICcuL0Z1bmN0b3InXG5pbXBvcnQgeyBFeHRlbmQyIH0gZnJvbSAnLi9FeHRlbmQnXG5pbXBvcnQgeyBFaXRoZXIgfSBmcm9tICcuL0VpdGhlcidcbmltcG9ydCB7IGlkZW50aXR5LCBwaXBlIH0gZnJvbSAnLi9mdW5jdGlvbidcbmltcG9ydCB7IEhLVCB9IGZyb20gJy4vSEtUJ1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBtb2RlbFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEBjYXRlZ29yeSBkZXN0cnVjdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBmc3Q6IDxBLCBFPihlYTogW0EsIEVdKSA9PiBBID0gUlQuZnN0XG5cbi8qKlxuICogQGNhdGVnb3J5IGRlc3RydWN0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHNuZDogPEEsIEU+KGVhOiBbQSwgRV0pID0+IEUgPSBSVC5zbmRcblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3Qgc3dhcCA9IDxBLCBFPihlYTogW0EsIEVdKTogW0UsIEFdID0+IFtzbmQoZWEpLCBmc3QoZWEpXVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXBwbHk8Uz4oUzogU2VtaWdyb3VwPFM+KTogQXBwbHkyQzxVUkksIFM+IHtcbiAgcmV0dXJuIHtcbiAgICBVUkksXG4gICAgX0U6IHVuZGVmaW5lZCBhcyBhbnksXG4gICAgbWFwOiBfbWFwLFxuICAgIGFwOiAoZmFiLCBmYSkgPT4gW2ZzdChmYWIpKGZzdChmYSkpLCBTLmNvbmNhdChzbmQoZmFiKSwgc25kKGZhKSldXG4gIH1cbn1cblxuY29uc3Qgb2YgPSA8TT4oTTogTW9ub2lkPE0+KSA9PiA8QT4oYTogQSk6IFtBLCBNXSA9PiB7XG4gIHJldHVybiBbYSwgTS5lbXB0eV1cbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEFwcGxpY2F0aXZlPE0+KE06IE1vbm9pZDxNPik6IEFwcGxpY2F0aXZlMkM8VVJJLCBNPiB7XG4gIGNvbnN0IEEgPSBnZXRBcHBseShNKVxuICByZXR1cm4ge1xuICAgIFVSSSxcbiAgICBfRTogdW5kZWZpbmVkIGFzIGFueSxcbiAgICBtYXA6IEEubWFwLFxuICAgIGFwOiBBLmFwLFxuICAgIG9mOiBvZihNKVxuICB9XG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRDaGFpbjxTPihTOiBTZW1pZ3JvdXA8Uz4pOiBDaGFpbjJDPFVSSSwgUz4ge1xuICBjb25zdCBBID0gZ2V0QXBwbHkoUylcbiAgcmV0dXJuIHtcbiAgICBVUkksXG4gICAgX0U6IHVuZGVmaW5lZCBhcyBhbnksXG4gICAgbWFwOiBBLm1hcCxcbiAgICBhcDogQS5hcCxcbiAgICBjaGFpbjogKG1hLCBmKSA9PiB7XG4gICAgICBjb25zdCBbYiwgc10gPSBmKGZzdChtYSkpXG4gICAgICByZXR1cm4gW2IsIFMuY29uY2F0KHNuZChtYSksIHMpXVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TW9uYWQ8TT4oTTogTW9ub2lkPE0+KTogTW9uYWQyQzxVUkksIE0+IHtcbiAgY29uc3QgQyA9IGdldENoYWluKE0pXG4gIHJldHVybiB7XG4gICAgVVJJLFxuICAgIF9FOiB1bmRlZmluZWQgYXMgYW55LFxuICAgIG1hcDogQy5tYXAsXG4gICAgYXA6IEMuYXAsXG4gICAgY2hhaW46IEMuY2hhaW4sXG4gICAgb2Y6IG9mKE0pXG4gIH1cbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldENoYWluUmVjPE0+KE06IE1vbm9pZDxNPik6IENoYWluUmVjMkM8VVJJLCBNPiB7XG4gIGNvbnN0IGNoYWluUmVjID0gPEEsIEI+KGE6IEEsIGY6IChhOiBBKSA9PiBbRWl0aGVyPEEsIEI+LCBNXSk6IFtCLCBNXSA9PiB7XG4gICAgbGV0IHJlc3VsdDogW0VpdGhlcjxBLCBCPiwgTV0gPSBmKGEpXG4gICAgbGV0IGFjYzogTSA9IE0uZW1wdHlcbiAgICBsZXQgczogRWl0aGVyPEEsIEI+ID0gZnN0KHJlc3VsdClcbiAgICB3aGlsZSAocy5fdGFnID09PSAnTGVmdCcpIHtcbiAgICAgIGFjYyA9IE0uY29uY2F0KGFjYywgc25kKHJlc3VsdCkpXG4gICAgICByZXN1bHQgPSBmKHMubGVmdClcbiAgICAgIHMgPSBmc3QocmVzdWx0KVxuICAgIH1cbiAgICByZXR1cm4gW3MucmlnaHQsIE0uY29uY2F0KGFjYywgc25kKHJlc3VsdCkpXVxuICB9XG5cbiAgY29uc3QgQyA9IGdldENoYWluKE0pXG4gIHJldHVybiB7XG4gICAgVVJJLFxuICAgIF9FOiB1bmRlZmluZWQgYXMgYW55LFxuICAgIG1hcDogQy5tYXAsXG4gICAgYXA6IEMuYXAsXG4gICAgY2hhaW46IEMuY2hhaW4sXG4gICAgY2hhaW5SZWNcbiAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBub24tcGlwZWFibGVzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5jb25zdCBfY29tcG9zZTogU2VtaWdyb3Vwb2lkMjxVUkk+Wydjb21wb3NlJ10gPSAoYmMsIGFiKSA9PiBwaXBlKGJjLCBjb21wb3NlKGFiKSlcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5jb25zdCBfbWFwOiBGdW5jdG9yMjxVUkk+WydtYXAnXSA9IChmYSwgZikgPT4gcGlwZShmYSwgbWFwRnN0KGYpKVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmNvbnN0IF9iaW1hcDogQmlmdW5jdG9yMjxVUkk+WydiaW1hcCddID0gKGZhLCBmLCBnKSA9PiBwaXBlKGZhLCBiaW1hcChmLCBnKSlcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5jb25zdCBfbWFwTGVmdDogQmlmdW5jdG9yMjxVUkk+WydtYXBMZWZ0J10gPSAoZmEsIGYpID0+IHBpcGUoZmEsIG1hcFNuZChmKSlcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5jb25zdCBfZXh0ZW5kOiBFeHRlbmQyPFVSST5bJ2V4dGVuZCddID0gKHdhLCBmKSA9PiBwaXBlKHdhLCBleHRlbmQoZikpXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuY29uc3QgX3JlZHVjZTogRm9sZGFibGUyPFVSST5bJ3JlZHVjZSddID0gKGZhLCBiLCBmKSA9PiBwaXBlKGZhLCByZWR1Y2UoYiwgZikpXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuY29uc3QgX2ZvbGRNYXA6IEZvbGRhYmxlMjxVUkk+Wydmb2xkTWFwJ10gPSAoTSkgPT4ge1xuICBjb25zdCBmb2xkTWFwTSA9IGZvbGRNYXAoTSlcbiAgcmV0dXJuIChmYSwgZikgPT4gcGlwZShmYSwgZm9sZE1hcE0oZikpXG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuY29uc3QgX3JlZHVjZVJpZ2h0OiBGb2xkYWJsZTI8VVJJPlsncmVkdWNlUmlnaHQnXSA9IChmYSwgYiwgZikgPT4gcGlwZShmYSwgcmVkdWNlUmlnaHQoYiwgZikpXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuZnVuY3Rpb24gX3RyYXZlcnNlPEY+KEY6IEFwcGxpY2F0aXZlPEY+KTogPEEsIFMsIEI+KHRhOiBbQSwgU10sIGY6IChhOiBBKSA9PiBIS1Q8RiwgQj4pID0+IEhLVDxGLCBbQiwgU10+IHtcbiAgY29uc3QgdHJhdmVyc2VGID0gdHJhdmVyc2UoRilcbiAgcmV0dXJuICh0YSwgZikgPT4gcGlwZSh0YSwgdHJhdmVyc2VGKGYpKVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyB0eXBlIGNsYXNzIG1lbWJlcnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBNYXAgYSBwYWlyIG9mIGZ1bmN0aW9ucyBvdmVyIHRoZSB0d28gdHlwZSBhcmd1bWVudHMgb2YgdGhlIGJpZnVuY3Rvci5cbiAqXG4gKiBAY2F0ZWdvcnkgQmlmdW5jdG9yXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGJpbWFwOiA8RSwgRywgQSwgQj4obWFwU25kOiAoZTogRSkgPT4gRywgbWFwRnN0OiAoYTogQSkgPT4gQikgPT4gKGZhOiBbQSwgRV0pID0+IFtCLCBHXSA9IChmLCBnKSA9PiAoXG4gIGZhXG4pID0+IFtnKGZzdChmYSkpLCBmKHNuZChmYSkpXVxuXG4vKipcbiAqIE1hcCBhIGZ1bmN0aW9uIG92ZXIgdGhlIGZpcnN0IGNvbXBvbmVudCBvZiBhIGBUdXBsZWAuXG4gKlxuICogVGhpcyBpcyB0aGUgYG1hcGAgb3BlcmF0aW9uIG9mIHRoZSBgRnVuY3RvcmAgaW5zdGFuY2UuXG4gKlxuICogQGNhdGVnb3J5IEZ1bmN0b3JcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgbWFwRnN0OiA8QSwgQj4oZjogKGE6IEEpID0+IEIpID0+IDxFPihmYTogW0EsIEVdKSA9PiBbQiwgRV0gPSAoZikgPT4gKGZhKSA9PiBbZihmc3QoZmEpKSwgc25kKGZhKV1cblxuLyoqXG4gKiBNYXAgYSBmdW5jdGlvbiBvdmVyIHRoZSBzZWNvbmQgY29tcG9uZW50IG9mIGEgYFR1cGxlYC5cbiAqXG4gKiBUaGlzIGlzIHRoZSBgbWFwTGVmdGAgb3BlcmF0aW9uIG9mIHRoZSBgQmlmdW5jdG9yYCBpbnN0YW5jZS5cbiAqXG4gKiBAY2F0ZWdvcnkgQmlmdW5jdG9yXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBtYXBTbmQ6IDxFLCBHPihmOiAoZTogRSkgPT4gRykgPT4gPEE+KGZhOiBbQSwgRV0pID0+IFtBLCBHXSA9IChmKSA9PiAoZmEpID0+IFtmc3QoZmEpLCBmKHNuZChmYSkpXVxuXG4vKipcbiAqIEBjYXRlZ29yeSBTZW1pZ3JvdXBvaWRcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgY29tcG9zZTogPEEsIEI+KGFiOiBbQiwgQV0pID0+IDxDPihiYzogW0MsIEJdKSA9PiBbQywgQV0gPSAoYWIpID0+IChiYykgPT4gW2ZzdChiYyksIHNuZChhYildXG5cbi8qKlxuICogQGNhdGVnb3J5IEV4dGVuZFxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBleHRlbmQ6IDxFLCBBLCBCPihmOiAod2E6IFtBLCBFXSkgPT4gQikgPT4gKHdhOiBbQSwgRV0pID0+IFtCLCBFXSA9IChmKSA9PiAod2EpID0+IFtmKHdhKSwgc25kKHdhKV1cblxuLyoqXG4gKiBEZXJpdmFibGUgZnJvbSBgRXh0ZW5kYC5cbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgZHVwbGljYXRlOiA8RSwgQT4od2E6IFtBLCBFXSkgPT4gW1tBLCBFXSwgRV0gPVxuICAvKiNfX1BVUkVfXyovXG4gIGV4dGVuZChpZGVudGl0eSlcblxuLyoqXG4gKiBAY2F0ZWdvcnkgRXh0cmFjdFxuICogQHNpbmNlIDIuNi4yXG4gKi9cbmV4cG9ydCBjb25zdCBleHRyYWN0OiA8RSwgQT4od2E6IFtBLCBFXSkgPT4gQSA9IFJULmV4dHJhY3RcblxuLyoqXG4gKiBAY2F0ZWdvcnkgRm9sZGFibGVcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgZm9sZE1hcDogPE0+KE06IE1vbm9pZDxNPikgPT4gPEE+KGY6IChhOiBBKSA9PiBNKSA9PiA8RT4oZmE6IFtBLCBFXSkgPT4gTSA9IFJULmZvbGRNYXBcblxuLyoqXG4gKiBAY2F0ZWdvcnkgRm9sZGFibGVcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgcmVkdWNlOiA8QSwgQj4oYjogQiwgZjogKGI6IEIsIGE6IEEpID0+IEIpID0+IDxFPihmYTogW0EsIEVdKSA9PiBCID0gUlQucmVkdWNlXG5cbi8qKlxuICogQGNhdGVnb3J5IEZvbGRhYmxlXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHJlZHVjZVJpZ2h0OiA8QSwgQj4oYjogQiwgZjogKGE6IEEsIGI6IEIpID0+IEIpID0+IDxFPihmYTogW0EsIEVdKSA9PiBCID0gUlQucmVkdWNlUmlnaHRcblxuLyoqXG4gKiBAc2luY2UgMi42LjNcbiAqL1xuZXhwb3J0IGNvbnN0IHRyYXZlcnNlOiBQaXBlYWJsZVRyYXZlcnNlMjxVUkk+ID0gPEY+KFxuICBGOiBBcHBsaWNhdGl2ZTxGPlxuKTogKDxBLCBCPihmOiAoYTogQSkgPT4gSEtUPEYsIEI+KSA9PiA8RT4oYXM6IFtBLCBFXSkgPT4gSEtUPEYsIFtCLCBFXT4pID0+IHtcbiAgcmV0dXJuIChmKSA9PiAodGEpID0+IEYubWFwKGYoZnN0KHRhKSksIChiKSA9PiBbYiwgc25kKHRhKV0pXG59XG5cbi8qKlxuICogQHNpbmNlIDIuNi4zXG4gKi9cbmV4cG9ydCBjb25zdCBzZXF1ZW5jZTogVHJhdmVyc2FibGUyPFVSST5bJ3NlcXVlbmNlJ10gPSA8Rj4oRjogQXBwbGljYXRpdmU8Rj4pID0+IDxBLCBFPihcbiAgZmFzOiBbSEtUPEYsIEE+LCBFXVxuKTogSEtUPEYsIFtBLCBFXT4gPT4ge1xuICByZXR1cm4gRi5tYXAoZnN0KGZhcyksIChhKSA9PiBbYSwgc25kKGZhcyldKVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBpbnN0YW5jZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IFVSSSA9ICdUdXBsZSdcblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IHR5cGUgVVJJID0gdHlwZW9mIFVSSVxuXG5kZWNsYXJlIG1vZHVsZSAnLi9IS1QnIHtcbiAgaW50ZXJmYWNlIFVSSXRvS2luZDI8RSwgQT4ge1xuICAgIHJlYWRvbmx5IFtVUkldOiBbQSwgRV1cbiAgfVxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjcuMFxuICovXG5leHBvcnQgY29uc3QgRnVuY3RvcjogRnVuY3RvcjI8VVJJPiA9IHtcbiAgVVJJLFxuICBtYXA6IF9tYXBcbn1cblxuLyoqXG4gKiBEZXJpdmFibGUgZnJvbSBgRnVuY3RvcmAuXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBmbGFwID1cbiAgLyojX19QVVJFX18qL1xuICBmbGFwXyhGdW5jdG9yKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjcuMFxuICovXG5leHBvcnQgY29uc3QgQmlmdW5jdG9yOiBCaWZ1bmN0b3IyPFVSST4gPSB7XG4gIFVSSSxcbiAgYmltYXA6IF9iaW1hcCxcbiAgbWFwTGVmdDogX21hcExlZnRcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi43LjBcbiAqL1xuZXhwb3J0IGNvbnN0IFNlbWlncm91cG9pZDogU2VtaWdyb3Vwb2lkMjxVUkk+ID0ge1xuICBVUkksXG4gIGNvbXBvc2U6IF9jb21wb3NlXG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuNy4wXG4gKi9cbmV4cG9ydCBjb25zdCBDb21vbmFkOiBDb21vbmFkMjxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgZXh0ZW5kOiBfZXh0ZW5kLFxuICBleHRyYWN0XG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuNy4wXG4gKi9cbmV4cG9ydCBjb25zdCBGb2xkYWJsZTogRm9sZGFibGUyPFVSST4gPSB7XG4gIFVSSSxcbiAgcmVkdWNlOiBfcmVkdWNlLFxuICBmb2xkTWFwOiBfZm9sZE1hcCxcbiAgcmVkdWNlUmlnaHQ6IF9yZWR1Y2VSaWdodFxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjcuMFxuICovXG5leHBvcnQgY29uc3QgVHJhdmVyc2FibGU6IFRyYXZlcnNhYmxlMjxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgcmVkdWNlOiBfcmVkdWNlLFxuICBmb2xkTWFwOiBfZm9sZE1hcCxcbiAgcmVkdWNlUmlnaHQ6IF9yZWR1Y2VSaWdodCxcbiAgdHJhdmVyc2U6IF90cmF2ZXJzZSxcbiAgc2VxdWVuY2Vcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gZGVwcmVjYXRlZFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIFVzZSBbYG1hcEZzdGBdKCNtYXBmc3QpIGluc3RlYWQuXG4gKlxuICogQHNpbmNlIDIuMC4wXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgY29uc3QgbWFwOiA8QSwgQj4oZjogKGE6IEEpID0+IEIpID0+IDxFPihmYTogW0EsIEVdKSA9PiBbQiwgRV0gPSBtYXBGc3RcblxuLyoqXG4gKiBVc2UgW2BtYXBTbmRgXSgjbWFwc25kKSBpbnN0ZWFkLlxuICpcbiAqIEBzaW5jZSAyLjAuMFxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IG1hcExlZnQ6IDxFLCBHPihmOiAoZTogRSkgPT4gRykgPT4gPEE+KGZhOiBbQSwgRV0pID0+IFtBLCBHXSA9IG1hcFNuZFxuXG4vKipcbiAqIFVzZSBzbWFsbCwgc3BlY2lmaWMgaW5zdGFuY2VzIGluc3RlYWQuXG4gKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMC4wXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgY29uc3QgdHVwbGU6IFNlbWlncm91cG9pZDI8VVJJPiAmIEJpZnVuY3RvcjI8VVJJPiAmIENvbW9uYWQyPFVSST4gJiBGb2xkYWJsZTI8VVJJPiAmIFRyYXZlcnNhYmxlMjxVUkk+ID0ge1xuICBVUkksXG4gIGNvbXBvc2U6IF9jb21wb3NlLFxuICBtYXA6IF9tYXAsXG4gIGJpbWFwOiBfYmltYXAsXG4gIG1hcExlZnQ6IF9tYXBMZWZ0LFxuICBleHRyYWN0LFxuICBleHRlbmQ6IF9leHRlbmQsXG4gIHJlZHVjZTogX3JlZHVjZSxcbiAgZm9sZE1hcDogX2ZvbGRNYXAsXG4gIHJlZHVjZVJpZ2h0OiBfcmVkdWNlUmlnaHQsXG4gIHRyYXZlcnNlOiBfdHJhdmVyc2UsXG4gIHNlcXVlbmNlXG59XG4iXX0=