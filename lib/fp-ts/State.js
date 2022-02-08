"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.traverseReadonlyNonEmptyArrayWithIndex = exports.traverseReadonlyArrayWithIndex = exports.traverseArrayWithIndex = exports.traverseArray = exports.state = exports.sequenceArray = exports.put = exports.of = exports.modify = exports.map = exports.gets = exports.get = exports.flatten = exports.flap = exports.execute = exports.execState = exports.evaluate = exports.evalState = exports.chainFirst = exports.chain = exports.bindTo = exports.bind = exports.apSecond = exports.apS = exports.apFirst = exports.ap = exports.URI = exports.Pointed = exports.Monad = exports.Functor = exports.FromState = exports.Chain = exports.Apply = exports.Applicative = void 0;

var _Apply = require("./Apply");

var _Chain = require("./Chain");

var _function = require("./function");

var _Functor = require("./Functor");

var _ = _interopRequireWildcard(require("./internal"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------

/**
 * Get the current state
 *
 * @category constructors
 * @since 2.0.0
 */
var get = function get() {
  return function (s) {
    return [s, s];
  };
};
/**
 * Set the state
 *
 * @category constructors
 * @since 2.0.0
 */


exports.get = get;

var put = function put(s) {
  return function () {
    return [undefined, s];
  };
};
/**
 * Modify the state by applying a function to the current state
 *
 * @category constructors
 * @since 2.0.0
 */


exports.put = put;

var modify = function modify(f) {
  return function (s) {
    return [undefined, f(s)];
  };
};
/**
 * Get a value which depends on the current state
 *
 * @category constructors
 * @since 2.0.0
 */


exports.modify = modify;

var gets = function gets(f) {
  return function (s) {
    return [f(s), s];
  };
}; // -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------

/* istanbul ignore next */


exports.gets = gets;

var _map = function _map(fa, f) {
  return (0, _function.pipe)(fa, map(f));
};
/* istanbul ignore next */


var _ap = function _ap(fab, fa) {
  return (0, _function.pipe)(fab, ap(fa));
};
/* istanbul ignore next */


var _chain = function _chain(ma, f) {
  return (0, _function.pipe)(ma, chain(f));
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
    return function (s1) {
      var _fa = fa(s1),
          _fa2 = _slicedToArray(_fa, 2),
          a = _fa2[0],
          s2 = _fa2[1];

      return [f(a), s2];
    };
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
    return function (s1) {
      var _fab = fab(s1),
          _fab2 = _slicedToArray(_fab, 2),
          f = _fab2[0],
          s2 = _fab2[1];

      var _fa3 = fa(s2),
          _fa4 = _slicedToArray(_fa3, 2),
          a = _fa4[0],
          s3 = _fa4[1];

      return [f(a), s3];
    };
  };
};
/**
 * @category Pointed
 * @since 2.0.0
 */


exports.ap = ap;

var of = function of(a) {
  return function (s) {
    return [a, s];
  };
};
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation.
 *
 * @category Monad
 * @since 2.0.0
 */


exports.of = of;

var chain = function chain(f) {
  return function (ma) {
    return function (s1) {
      var _ma = ma(s1),
          _ma2 = _slicedToArray(_ma, 2),
          a = _ma2[0],
          s2 = _ma2[1];

      return f(a)(s2);
    };
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
var URI = 'State';
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
 * @category instances
 * @since 2.11.0
 */

exports.chainFirst = chainFirst;
var FromState = {
  URI: URI,
  fromState: _function.identity
}; // -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------

/**
 * Run a computation in the `State` monad, discarding the final state
 *
 * @since 2.8.0
 */

exports.FromState = FromState;

var evaluate = function evaluate(s) {
  return function (ma) {
    return ma(s)[0];
  };
};
/**
 * Run a computation in the `State` monad discarding the result
 *
 * @since 2.8.0
 */


exports.evaluate = evaluate;

var execute = function execute(s) {
  return function (ma) {
    return ma(s)[1];
  };
}; // -------------------------------------------------------------------------------------
// do notation
// -------------------------------------------------------------------------------------

/**
 * @since 2.8.0
 */


exports.execute = execute;
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
// array utils
// -------------------------------------------------------------------------------------

/**
 * Equivalent to `ReadonlyNonEmptyArray#traverseWithIndex(Applicative)`.
 *
 * @since 2.11.0
 */

exports.apS = apS;

var traverseReadonlyNonEmptyArrayWithIndex = function traverseReadonlyNonEmptyArrayWithIndex(f) {
  return function (as) {
    return function (s) {
      var _f = f(0, _.head(as))(s),
          _f2 = _slicedToArray(_f, 2),
          b = _f2[0],
          s2 = _f2[1];

      var bs = [b];
      var out = s2;

      for (var i = 1; i < as.length; i++) {
        var _f3 = f(i, as[i])(out),
            _f4 = _slicedToArray(_f3, 2),
            _b = _f4[0],
            _s2 = _f4[1];

        bs.push(_b);
        out = _s2;
      }

      return [bs, out];
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
    return _.isNonEmpty(as) ? g(as) : of(_.emptyReadonlyArray);
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
 * Use [`evaluate`](#evaluate) instead
 *
 * @since 2.0.0
 * @deprecated
 */

exports.sequenceArray = sequenceArray;

var evalState = function evalState(ma, s) {
  return ma(s)[0];
};
/**
 * Use [`execute`](#execute) instead
 *
 * @since 2.0.0
 * @deprecated
 */


exports.evalState = evalState;

var execState = function execState(ma, s) {
  return ma(s)[1];
};
/**
 * Use small, specific instances instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */


exports.execState = execState;
var state = Monad;
exports.state = state;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mcC10cy9TdGF0ZS50cyJdLCJuYW1lcyI6WyJnZXQiLCJzIiwicHV0IiwidW5kZWZpbmVkIiwibW9kaWZ5IiwiZiIsImdldHMiLCJfbWFwIiwiZmEiLCJtYXAiLCJfYXAiLCJmYWIiLCJhcCIsIl9jaGFpbiIsIm1hIiwiY2hhaW4iLCJzMSIsImEiLCJzMiIsInMzIiwib2YiLCJmbGF0dGVuIiwiaWRlbnRpdHkiLCJVUkkiLCJGdW5jdG9yIiwiZmxhcCIsIlBvaW50ZWQiLCJBcHBseSIsImFwRmlyc3QiLCJhcFNlY29uZCIsIkFwcGxpY2F0aXZlIiwiQ2hhaW4iLCJNb25hZCIsImNoYWluRmlyc3QiLCJGcm9tU3RhdGUiLCJmcm9tU3RhdGUiLCJldmFsdWF0ZSIsImV4ZWN1dGUiLCJiaW5kVG8iLCJiaW5kIiwiYXBTIiwidHJhdmVyc2VSZWFkb25seU5vbkVtcHR5QXJyYXlXaXRoSW5kZXgiLCJhcyIsIl8iLCJoZWFkIiwiYiIsImJzIiwib3V0IiwiaSIsImxlbmd0aCIsInB1c2giLCJ0cmF2ZXJzZVJlYWRvbmx5QXJyYXlXaXRoSW5kZXgiLCJnIiwiaXNOb25FbXB0eSIsImVtcHR5UmVhZG9ubHlBcnJheSIsInRyYXZlcnNlQXJyYXlXaXRoSW5kZXgiLCJ0cmF2ZXJzZUFycmF5Iiwic2VxdWVuY2VBcnJheSIsImV2YWxTdGF0ZSIsImV4ZWNTdGF0ZSIsInN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFJQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBY0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLElBQU1BLEdBQXlCLEdBQUcsU0FBNUJBLEdBQTRCO0FBQUEsU0FBTSxVQUFDQyxDQUFEO0FBQUEsV0FBTyxDQUFDQSxDQUFELEVBQUlBLENBQUosQ0FBUDtBQUFBLEdBQU47QUFBQSxDQUFsQztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFD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TyxJQUFNb0MsU0FBNkMsR0FBRyxTQUFoREEsU0FBZ0QsQ0FBQzVDLEVBQUQsRUFBS2IsQ0FBTDtBQUFBLFNBQVdhLEVBQUUsQ0FBQ2IsQ0FBRCxDQUFGLENBQU0sQ0FBTixDQUFYO0FBQUEsQ0FBdEQ7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ08sSUFBTTBELFNBQTZDLEdBQUcsU0FBaERBLFNBQWdELENBQUM3QyxFQUFELEVBQUtiLENBQUw7QUFBQSxTQUFXYSxFQUFFLENBQUNiLENBQUQsQ0FBRixDQUFNLENBQU4sQ0FBWDtBQUFBLENBQXREO0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFDTyxJQUFNMkQsS0FBa0IsR0FBRzVCLEtBQTNCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuaW1wb3J0IHsgQXBwbGljYXRpdmUyIH0gZnJvbSAnLi9BcHBsaWNhdGl2ZSdcbmltcG9ydCB7IGFwRmlyc3QgYXMgYXBGaXJzdF8sIEFwcGx5MiwgYXBTIGFzIGFwU18sIGFwU2Vjb25kIGFzIGFwU2Vjb25kXyB9IGZyb20gJy4vQXBwbHknXG5pbXBvcnQgeyBiaW5kIGFzIGJpbmRfLCBDaGFpbjIsIGNoYWluRmlyc3QgYXMgY2hhaW5GaXJzdF8gfSBmcm9tICcuL0NoYWluJ1xuaW1wb3J0IHsgRnJvbVN0YXRlMiB9IGZyb20gJy4vRnJvbVN0YXRlJ1xuaW1wb3J0IHsgaWRlbnRpdHksIHBpcGUgfSBmcm9tICcuL2Z1bmN0aW9uJ1xuaW1wb3J0IHsgYmluZFRvIGFzIGJpbmRUb18sIGZsYXAgYXMgZmxhcF8sIEZ1bmN0b3IyIH0gZnJvbSAnLi9GdW5jdG9yJ1xuaW1wb3J0IHsgTW9uYWQyIH0gZnJvbSAnLi9Nb25hZCdcbmltcG9ydCB7IE5vbkVtcHR5QXJyYXkgfSBmcm9tICcuL05vbkVtcHR5QXJyYXknXG5pbXBvcnQgeyBQb2ludGVkMiB9IGZyb20gJy4vUG9pbnRlZCdcbmltcG9ydCB7IFJlYWRvbmx5Tm9uRW1wdHlBcnJheSB9IGZyb20gJy4vUmVhZG9ubHlOb25FbXB0eUFycmF5J1xuaW1wb3J0ICogYXMgXyBmcm9tICcuL2ludGVybmFsJ1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBtb2RlbFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEBjYXRlZ29yeSBtb2RlbFxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGU8UywgQT4ge1xuICAoczogUyk6IFtBLCBTXVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBjb25zdHJ1Y3RvcnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBHZXQgdGhlIGN1cnJlbnQgc3RhdGVcbiAqXG4gKiBAY2F0ZWdvcnkgY29uc3RydWN0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGdldDogPFM+KCkgPT4gU3RhdGU8UywgUz4gPSAoKSA9PiAocykgPT4gW3MsIHNdXG5cbi8qKlxuICogU2V0IHRoZSBzdGF0ZVxuICpcbiAqIEBjYXRlZ29yeSBjb25zdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgcHV0OiA8Uz4oczogUykgPT4gU3RhdGU8Uywgdm9pZD4gPSAocykgPT4gKCkgPT4gW3VuZGVmaW5lZCwgc11cblxuLyoqXG4gKiBNb2RpZnkgdGhlIHN0YXRlIGJ5IGFwcGx5aW5nIGEgZnVuY3Rpb24gdG8gdGhlIGN1cnJlbnQgc3RhdGVcbiAqXG4gKiBAY2F0ZWdvcnkgY29uc3RydWN0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IG1vZGlmeTogPFM+KGY6IChzOiBTKSA9PiBTKSA9PiBTdGF0ZTxTLCB2b2lkPiA9IChmKSA9PiAocykgPT4gW3VuZGVmaW5lZCwgZihzKV1cblxuLyoqXG4gKiBHZXQgYSB2YWx1ZSB3aGljaCBkZXBlbmRzIG9uIHRoZSBjdXJyZW50IHN0YXRlXG4gKlxuICogQGNhdGVnb3J5IGNvbnN0cnVjdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRzOiA8UywgQT4oZjogKHM6IFMpID0+IEEpID0+IFN0YXRlPFMsIEE+ID0gKGYpID0+IChzKSA9PiBbZihzKSwgc11cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gbm9uLXBpcGVhYmxlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuY29uc3QgX21hcDogTW9uYWQyPFVSST5bJ21hcCddID0gKGZhLCBmKSA9PiBwaXBlKGZhLCBtYXAoZikpXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuY29uc3QgX2FwOiBNb25hZDI8VVJJPlsnYXAnXSA9IChmYWIsIGZhKSA9PiBwaXBlKGZhYiwgYXAoZmEpKVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmNvbnN0IF9jaGFpbjogTW9uYWQyPFVSST5bJ2NoYWluJ10gPSAobWEsIGYpID0+IHBpcGUobWEsIGNoYWluKGYpKVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyB0eXBlIGNsYXNzIG1lbWJlcnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBgbWFwYCBjYW4gYmUgdXNlZCB0byB0dXJuIGZ1bmN0aW9ucyBgKGE6IEEpID0+IEJgIGludG8gZnVuY3Rpb25zIGAoZmE6IEY8QT4pID0+IEY8Qj5gIHdob3NlIGFyZ3VtZW50IGFuZCByZXR1cm4gdHlwZXNcbiAqIHVzZSB0aGUgdHlwZSBjb25zdHJ1Y3RvciBgRmAgdG8gcmVwcmVzZW50IHNvbWUgY29tcHV0YXRpb25hbCBjb250ZXh0LlxuICpcbiAqIEBjYXRlZ29yeSBGdW5jdG9yXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IG1hcDogPEEsIEI+KGY6IChhOiBBKSA9PiBCKSA9PiA8RT4oZmE6IFN0YXRlPEUsIEE+KSA9PiBTdGF0ZTxFLCBCPiA9IChmKSA9PiAoZmEpID0+IChzMSkgPT4ge1xuICBjb25zdCBbYSwgczJdID0gZmEoczEpXG4gIHJldHVybiBbZihhKSwgczJdXG59XG5cbi8qKlxuICogQXBwbHkgYSBmdW5jdGlvbiB0byBhbiBhcmd1bWVudCB1bmRlciBhIHR5cGUgY29uc3RydWN0b3IuXG4gKlxuICogQGNhdGVnb3J5IEFwcGx5XG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGFwOiA8RSwgQT4oZmE6IFN0YXRlPEUsIEE+KSA9PiA8Qj4oZmFiOiBTdGF0ZTxFLCAoYTogQSkgPT4gQj4pID0+IFN0YXRlPEUsIEI+ID0gKGZhKSA9PiAoZmFiKSA9PiAoczEpID0+IHtcbiAgY29uc3QgW2YsIHMyXSA9IGZhYihzMSlcbiAgY29uc3QgW2EsIHMzXSA9IGZhKHMyKVxuICByZXR1cm4gW2YoYSksIHMzXVxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBQb2ludGVkXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IG9mOiBQb2ludGVkMjxVUkk+WydvZiddID0gKGEpID0+IChzKSA9PiBbYSwgc11cblxuLyoqXG4gKiBDb21wb3NlcyBjb21wdXRhdGlvbnMgaW4gc2VxdWVuY2UsIHVzaW5nIHRoZSByZXR1cm4gdmFsdWUgb2Ygb25lIGNvbXB1dGF0aW9uIHRvIGRldGVybWluZSB0aGUgbmV4dCBjb21wdXRhdGlvbi5cbiAqXG4gKiBAY2F0ZWdvcnkgTW9uYWRcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgY2hhaW46IDxFLCBBLCBCPihmOiAoYTogQSkgPT4gU3RhdGU8RSwgQj4pID0+IChtYTogU3RhdGU8RSwgQT4pID0+IFN0YXRlPEUsIEI+ID0gKGYpID0+IChtYSkgPT4gKHMxKSA9PiB7XG4gIGNvbnN0IFthLCBzMl0gPSBtYShzMSlcbiAgcmV0dXJuIGYoYSkoczIpXG59XG5cbi8qKlxuICogRGVyaXZhYmxlIGZyb20gYENoYWluYC5cbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgZmxhdHRlbjogPEUsIEE+KG1tYTogU3RhdGU8RSwgU3RhdGU8RSwgQT4+KSA9PiBTdGF0ZTxFLCBBPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgY2hhaW4oaWRlbnRpdHkpXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGluc3RhbmNlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgVVJJID0gJ1N0YXRlJ1xuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgdHlwZSBVUkkgPSB0eXBlb2YgVVJJXG5cbmRlY2xhcmUgbW9kdWxlICcuL0hLVCcge1xuICBpbnRlcmZhY2UgVVJJdG9LaW5kMjxFLCBBPiB7XG4gICAgcmVhZG9ubHkgW1VSSV06IFN0YXRlPEUsIEE+XG4gIH1cbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi43LjBcbiAqL1xuZXhwb3J0IGNvbnN0IEZ1bmN0b3I6IEZ1bmN0b3IyPFVSST4gPSB7XG4gIFVSSSxcbiAgbWFwOiBfbWFwXG59XG5cbi8qKlxuICogRGVyaXZhYmxlIGZyb20gYEZ1bmN0b3JgLlxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgZmxhcCA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZmxhcF8oRnVuY3RvcilcblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBQb2ludGVkOiBQb2ludGVkMjxVUkk+ID0ge1xuICBVUkksXG4gIG9mXG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgQXBwbHk6IEFwcGx5MjxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgYXA6IF9hcFxufVxuXG4vKipcbiAqIENvbWJpbmUgdHdvIGVmZmVjdGZ1bCBhY3Rpb25zLCBrZWVwaW5nIG9ubHkgdGhlIHJlc3VsdCBvZiB0aGUgZmlyc3QuXG4gKlxuICogRGVyaXZhYmxlIGZyb20gYEFwcGx5YC5cbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgYXBGaXJzdCA9XG4gIC8qI19fUFVSRV9fKi9cbiAgYXBGaXJzdF8oQXBwbHkpXG5cbi8qKlxuICogQ29tYmluZSB0d28gZWZmZWN0ZnVsIGFjdGlvbnMsIGtlZXBpbmcgb25seSB0aGUgcmVzdWx0IG9mIHRoZSBzZWNvbmQuXG4gKlxuICogRGVyaXZhYmxlIGZyb20gYEFwcGx5YC5cbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgYXBTZWNvbmQgPVxuICAvKiNfX1BVUkVfXyovXG4gIGFwU2Vjb25kXyhBcHBseSlcblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi43LjBcbiAqL1xuZXhwb3J0IGNvbnN0IEFwcGxpY2F0aXZlOiBBcHBsaWNhdGl2ZTI8VVJJPiA9IHtcbiAgVVJJLFxuICBtYXA6IF9tYXAsXG4gIGFwOiBfYXAsXG4gIG9mXG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgQ2hhaW46IENoYWluMjxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgYXA6IF9hcCxcbiAgY2hhaW46IF9jaGFpblxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjcuMFxuICovXG5leHBvcnQgY29uc3QgTW9uYWQ6IE1vbmFkMjxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgYXA6IF9hcCxcbiAgb2YsXG4gIGNoYWluOiBfY2hhaW5cbn1cblxuLyoqXG4gKiBDb21wb3NlcyBjb21wdXRhdGlvbnMgaW4gc2VxdWVuY2UsIHVzaW5nIHRoZSByZXR1cm4gdmFsdWUgb2Ygb25lIGNvbXB1dGF0aW9uIHRvIGRldGVybWluZSB0aGUgbmV4dCBjb21wdXRhdGlvbiBhbmRcbiAqIGtlZXBpbmcgb25seSB0aGUgcmVzdWx0IG9mIHRoZSBmaXJzdC5cbiAqXG4gKiBEZXJpdmFibGUgZnJvbSBgQ2hhaW5gLlxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBjaGFpbkZpcnN0OiA8UywgQSwgQj4oZjogKGE6IEEpID0+IFN0YXRlPFMsIEI+KSA9PiAobWE6IFN0YXRlPFMsIEE+KSA9PiBTdGF0ZTxTLCBBPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgY2hhaW5GaXJzdF8oQ2hhaW4pXG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgRnJvbVN0YXRlOiBGcm9tU3RhdGUyPFVSST4gPSB7XG4gIFVSSSxcbiAgZnJvbVN0YXRlOiBpZGVudGl0eVxufVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gdXRpbHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBSdW4gYSBjb21wdXRhdGlvbiBpbiB0aGUgYFN0YXRlYCBtb25hZCwgZGlzY2FyZGluZyB0aGUgZmluYWwgc3RhdGVcbiAqXG4gKiBAc2luY2UgMi44LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGV2YWx1YXRlID0gPFM+KHM6IFMpID0+IDxBPihtYTogU3RhdGU8UywgQT4pOiBBID0+IG1hKHMpWzBdXG5cbi8qKlxuICogUnVuIGEgY29tcHV0YXRpb24gaW4gdGhlIGBTdGF0ZWAgbW9uYWQgZGlzY2FyZGluZyB0aGUgcmVzdWx0XG4gKlxuICogQHNpbmNlIDIuOC4wXG4gKi9cbmV4cG9ydCBjb25zdCBleGVjdXRlID0gPFM+KHM6IFMpID0+IDxBPihtYTogU3RhdGU8UywgQT4pOiBTID0+IG1hKHMpWzFdXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGRvIG5vdGF0aW9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQHNpbmNlIDIuOC4wXG4gKi9cbmV4cG9ydCBjb25zdCBiaW5kVG8gPVxuICAvKiNfX1BVUkVfXyovXG4gIGJpbmRUb18oRnVuY3RvcilcblxuLyoqXG4gKiBAc2luY2UgMi44LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGJpbmQgPVxuICAvKiNfX1BVUkVfXyovXG4gIGJpbmRfKENoYWluKVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBwaXBlYWJsZSBzZXF1ZW5jZSBTXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQHNpbmNlIDIuOC4wXG4gKi9cbmV4cG9ydCBjb25zdCBhcFMgPVxuICAvKiNfX1BVUkVfXyovXG4gIGFwU18oQXBwbHkpXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGFycmF5IHV0aWxzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogRXF1aXZhbGVudCB0byBgUmVhZG9ubHlOb25FbXB0eUFycmF5I3RyYXZlcnNlV2l0aEluZGV4KEFwcGxpY2F0aXZlKWAuXG4gKlxuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgdHJhdmVyc2VSZWFkb25seU5vbkVtcHR5QXJyYXlXaXRoSW5kZXggPSA8QSwgUywgQj4oZjogKGluZGV4OiBudW1iZXIsIGE6IEEpID0+IFN0YXRlPFMsIEI+KSA9PiAoXG4gIGFzOiBSZWFkb25seU5vbkVtcHR5QXJyYXk8QT5cbik6IFN0YXRlPFMsIFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxCPj4gPT4gKHMpID0+IHtcbiAgY29uc3QgW2IsIHMyXSA9IGYoMCwgXy5oZWFkKGFzKSkocylcbiAgY29uc3QgYnM6IE5vbkVtcHR5QXJyYXk8Qj4gPSBbYl1cbiAgbGV0IG91dCA9IHMyXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgYXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBbYiwgczJdID0gZihpLCBhc1tpXSkob3V0KVxuICAgIGJzLnB1c2goYilcbiAgICBvdXQgPSBzMlxuICB9XG4gIHJldHVybiBbYnMsIG91dF1cbn1cblxuLyoqXG4gKiBFcXVpdmFsZW50IHRvIGBSZWFkb25seUFycmF5I3RyYXZlcnNlV2l0aEluZGV4KEFwcGxpY2F0aXZlKWAuXG4gKlxuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgdHJhdmVyc2VSZWFkb25seUFycmF5V2l0aEluZGV4ID0gPEEsIFMsIEI+KFxuICBmOiAoaW5kZXg6IG51bWJlciwgYTogQSkgPT4gU3RhdGU8UywgQj5cbik6ICgoYXM6IFJlYWRvbmx5QXJyYXk8QT4pID0+IFN0YXRlPFMsIFJlYWRvbmx5QXJyYXk8Qj4+KSA9PiB7XG4gIGNvbnN0IGcgPSB0cmF2ZXJzZVJlYWRvbmx5Tm9uRW1wdHlBcnJheVdpdGhJbmRleChmKVxuICByZXR1cm4gKGFzKSA9PiAoXy5pc05vbkVtcHR5KGFzKSA/IGcoYXMpIDogb2YoXy5lbXB0eVJlYWRvbmx5QXJyYXkpKVxufVxuXG4vKipcbiAqIEBzaW5jZSAyLjkuMFxuICovXG5leHBvcnQgY29uc3QgdHJhdmVyc2VBcnJheVdpdGhJbmRleDogPEEsIFMsIEI+KFxuICBmOiAoaW5kZXg6IG51bWJlciwgYTogQSkgPT4gU3RhdGU8UywgQj5cbikgPT4gKGFzOiBSZWFkb25seUFycmF5PEE+KSA9PiBTdGF0ZTxTLCBSZWFkb25seUFycmF5PEI+PiA9IHRyYXZlcnNlUmVhZG9ubHlBcnJheVdpdGhJbmRleFxuXG4vKipcbiAqIEBzaW5jZSAyLjkuMFxuICovXG5leHBvcnQgY29uc3QgdHJhdmVyc2VBcnJheSA9IDxBLCBTLCBCPihcbiAgZjogKGE6IEEpID0+IFN0YXRlPFMsIEI+XG4pOiAoKGFzOiBSZWFkb25seUFycmF5PEE+KSA9PiBTdGF0ZTxTLCBSZWFkb25seUFycmF5PEI+PikgPT4gdHJhdmVyc2VSZWFkb25seUFycmF5V2l0aEluZGV4KChfLCBhKSA9PiBmKGEpKVxuXG4vKipcbiAqIEBzaW5jZSAyLjkuMFxuICovXG5leHBvcnQgY29uc3Qgc2VxdWVuY2VBcnJheTogPFMsIEE+KGFycjogUmVhZG9ubHlBcnJheTxTdGF0ZTxTLCBBPj4pID0+IFN0YXRlPFMsIFJlYWRvbmx5QXJyYXk8QT4+ID1cbiAgLyojX19QVVJFX18qL1xuICB0cmF2ZXJzZUFycmF5KGlkZW50aXR5KVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBkZXByZWNhdGVkXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIHRzbGludDpkaXNhYmxlOiBkZXByZWNhdGlvblxuXG4vKipcbiAqIFVzZSBbYGV2YWx1YXRlYF0oI2V2YWx1YXRlKSBpbnN0ZWFkXG4gKlxuICogQHNpbmNlIDIuMC4wXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgY29uc3QgZXZhbFN0YXRlOiA8UywgQT4obWE6IFN0YXRlPFMsIEE+LCBzOiBTKSA9PiBBID0gKG1hLCBzKSA9PiBtYShzKVswXVxuXG4vKipcbiAqIFVzZSBbYGV4ZWN1dGVgXSgjZXhlY3V0ZSkgaW5zdGVhZFxuICpcbiAqIEBzaW5jZSAyLjAuMFxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IGV4ZWNTdGF0ZTogPFMsIEE+KG1hOiBTdGF0ZTxTLCBBPiwgczogUykgPT4gUyA9IChtYSwgcykgPT4gbWEocylbMV1cblxuLyoqXG4gKiBVc2Ugc21hbGwsIHNwZWNpZmljIGluc3RhbmNlcyBpbnN0ZWFkLlxuICpcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjAuMFxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IHN0YXRlOiBNb25hZDI8VVJJPiA9IE1vbmFkXG4iXX0=