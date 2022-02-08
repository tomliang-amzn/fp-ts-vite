"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.traverseReadonlyNonEmptyArrayWithIndex = exports.traverseReadonlyArrayWithIndex = exports.traverseArrayWithIndex = exports.traverseArray = exports.sequenceArray = exports.second = exports.right = exports.reader = exports.promap = exports.of = exports.map = exports.local = exports.left = exports.id = exports.getSemigroup = exports.getMonoid = exports.flattenW = exports.flatten = exports.flap = exports.first = exports.compose = exports.chainW = exports.chainFirstW = exports.chainFirst = exports.chain = exports.bindW = exports.bindTo = exports.bind = exports.asksReaderW = exports.asksReader = exports.asks = exports.ask = exports.apW = exports.apSecond = exports.apSW = exports.apS = exports.apFirst = exports.ap = exports.URI = exports.Strong = exports.Profunctor = exports.Pointed = exports.Monad = exports.Functor = exports.Do = exports.Choice = exports.Chain = exports.Category = exports.Apply = exports.Applicative = exports.ApT = void 0;

var _Applicative = require("./Applicative");

var _Apply = require("./Apply");

var _Chain = require("./Chain");

var E = _interopRequireWildcard(require("./Either"));

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
 * Reads the current context
 *
 * @category constructors
 * @since 2.0.0
 */
var ask = function ask() {
  return _function.identity;
};
/**
 * Projects a value from the global context in a Reader
 *
 * @category constructors
 * @since 2.0.0
 */


exports.ask = ask;
var asks = _function.identity; // -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------

/**
 * Changes the value of the local context during the execution of the action `ma` (similar to `Contravariant`'s
 * `contramap`).
 *
 * @category combinators
 * @since 2.0.0
 */

exports.asks = asks;

var local = function local(f) {
  return function (ma) {
    return function (r2) {
      return ma(f(r2));
    };
  };
};
/**
 * Less strict version of [`asksReader`](#asksreader).
 *
 * @category combinators
 * @since 2.11.0
 */


exports.local = local;

var asksReaderW = function asksReaderW(f) {
  return function (r) {
    return f(r)(r);
  };
};
/**
 * Effectfully accesses the environment.
 *
 * @category combinators
 * @since 2.11.0
 */


exports.asksReaderW = asksReaderW;
var asksReader = asksReaderW; // -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------

/* istanbul ignore next */

exports.asksReader = asksReader;

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
};

var _compose = function _compose(bc, ab) {
  return (0, _function.pipe)(bc, compose(ab));
};

var _promap = function _promap(fea, f, g) {
  return (0, _function.pipe)(fea, promap(f, g));
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
    return function (r) {
      return f(fa(r));
    };
  };
};
/**
 * Less strict version of [`ap`](#ap).
 *
 * @category Apply
 * @since 2.8.0
 */


exports.map = map;

var apW = function apW(fa) {
  return function (fab) {
    return function (r) {
      return fab(r)(fa(r));
    };
  };
};
/**
 * Apply a function to an argument under a type constructor.
 *
 * @category Apply
 * @since 2.0.0
 */


exports.apW = apW;
var ap = apW;
/**
 * @category Pointed
 * @since 2.0.0
 */

exports.ap = ap;
var of = _function.constant;
/**
 * Less strict version of [`chain`](#chain).
 *
 * @category Monad
 * @since 2.6.0
 */

exports.of = of;

var chainW = function chainW(f) {
  return function (fa) {
    return function (r) {
      return f(fa(r))(r);
    };
  };
};
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation.
 *
 * @category Monad
 * @since 2.0.0
 */


exports.chainW = chainW;
var chain = chainW;
/**
 * Less strict version of [`flatten`](#flatten).
 *
 * @category combinators
 * @since 2.11.0
 */

exports.chain = chain;
var flattenW = /*#__PURE__*/chainW(_function.identity);
/**
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.0.0
 */

exports.flattenW = flattenW;
var flatten = flattenW;
/**
 * @category Semigroupoid
 * @since 2.0.0
 */

exports.flatten = flatten;

var compose = function compose(ab) {
  return function (bc) {
    return (0, _function.flow)(ab, bc);
  };
};
/**
 * @category Profunctor
 * @since 2.0.0
 */


exports.compose = compose;

var promap = function promap(f, g) {
  return function (fea) {
    return function (a) {
      return g(fea(f(a)));
    };
  };
};
/**
 * @category Category
 * @since 2.0.0
 */


exports.promap = promap;

var id = function id() {
  return _function.identity;
};
/**
 * @category Strong
 * @since 2.10.0
 */


exports.id = id;

var first = function first(pab) {
  return function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        a = _ref2[0],
        c = _ref2[1];

    return [pab(a), c];
  };
};
/**
 * @category Strong
 * @since 2.10.0
 */


exports.first = first;

var second = function second(pbc) {
  return function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        a = _ref4[0],
        b = _ref4[1];

    return [a, pbc(b)];
  };
};
/**
 * @category Choice
 * @since 2.10.0
 */


exports.second = second;

var left = function left(pab) {
  return E.fold(function (a) {
    return _.left(pab(a));
  }, E.right);
};
/**
 * @category Choice
 * @since 2.10.0
 */


exports.left = left;

var right = function right(pbc) {
  return E.fold(E.left, function (b) {
    return _.right(pbc(b));
  });
}; // -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------

/**
 * @category instances
 * @since 2.0.0
 */


exports.right = right;
var URI = 'Reader';
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
  of: of,
  ap: _ap,
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
 * Less strict version of [`chainFirst`](#chainfirst).
 *
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.11.0
 */

exports.chainFirst = chainFirst;
var chainFirstW = chainFirst;
/**
 * @category instances
 * @since 2.7.0
 */

exports.chainFirstW = chainFirstW;
var Profunctor = {
  URI: URI,
  map: _map,
  promap: _promap
};
/**
 * @category instances
 * @since 2.7.0
 */

exports.Profunctor = Profunctor;
var Category = {
  URI: URI,
  compose: _compose,
  id: id
};
/**
 * @category instances
 * @since 2.8.3
 */

exports.Category = Category;
var Strong = {
  URI: URI,
  map: _map,
  promap: _promap,
  first: first,
  second: second
};
/**
 * @category instances
 * @since 2.8.3
 */

exports.Strong = Strong;
var Choice = {
  URI: URI,
  map: _map,
  promap: _promap,
  left: left,
  right: right
}; // -------------------------------------------------------------------------------------
// do notation
// -------------------------------------------------------------------------------------

/**
 * @since 2.8.0
 */

exports.Choice = Choice;
var bindTo = /*#__PURE__*/(0, _Functor.bindTo)(Functor);
/**
 * @since 2.8.0
 */

exports.bindTo = bindTo;
var bind = /*#__PURE__*/(0, _Chain.bind)(Chain);
/**
 * @since 2.8.0
 */

exports.bind = bind;
var bindW = bind; // -------------------------------------------------------------------------------------
// pipeable sequence S
// -------------------------------------------------------------------------------------

/**
 * @since 2.9.0
 */

exports.bindW = bindW;
var Do = /*#__PURE__*/of(_.emptyRecord);
/**
 * @since 2.8.0
 */

exports.Do = Do;
var apS = /*#__PURE__*/(0, _Apply.apS)(Apply);
/**
 * @since 2.8.0
 */

exports.apS = apS;
var apSW = apS; // -------------------------------------------------------------------------------------
// sequence T
// -------------------------------------------------------------------------------------

/**
 * @since 2.11.0
 */

exports.apSW = apSW;
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
    return function (r) {
      var out = [f(0, _.head(as))(r)];

      for (var i = 1; i < as.length; i++) {
        out.push(f(i, as[i])(r));
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
var reader = {
  URI: URI,
  map: _map,
  of: of,
  ap: _ap,
  chain: _chain,
  promap: _promap,
  compose: _compose,
  id: id,
  first: first,
  second: second,
  left: left,
  right: right
};
/**
 * Use [`getApplySemigroup`](./Apply.ts.html#getapplysemigroup) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */

exports.reader = reader;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mcC10cy9SZWFkZXIudHMiXSwibmFtZXMiOlsiYXNrIiwiaWRlbnRpdHkiLCJhc2tzIiwibG9jYWwiLCJmIiwibWEiLCJyMiIsImFza3NSZWFkZXJXIiwiciIsImFza3NSZWFkZXIiLCJfbWFwIiwiZmEiLCJtYXAiLCJfYXAiLCJmYWIiLCJhcCIsIl9jaGFpbiIsImNoYWluIiwiX2NvbXBvc2UiLCJiYyIsImFiIiwiY29tcG9zZSIsIl9wcm9tYXAiLCJmZWEiLCJnIiwicHJvbWFwIiwiYXBXIiwib2YiLCJjb25zdGFudCIsImNoYWluVyIsImZsYXR0ZW5XIiwiZmxhdHRlbiIsImEiLCJpZCIsImZpcnN0IiwicGFiIiwiYyIsInNlY29uZCIsInBiYyIsImIiLCJsZWZ0IiwiRSIsImZvbGQiLCJfIiwicmlnaHQiLCJVUkkiLCJGdW5jdG9yIiwiZmxhcCIsIlBvaW50ZWQiLCJBcHBseSIsImFwRmlyc3QiLCJhcFNlY29uZCIsIkFwcGxpY2F0aXZlIiwiQ2hhaW4iLCJNb25hZCIsImNoYWluRmlyc3QiLCJjaGFpbkZpcnN0VyIsIlByb2Z1bmN0b3IiLCJDYXRlZ29yeSIsIlN0cm9uZyIsIkNob2ljZSIsImJpbmRUbyIsImJpbmQiLCJiaW5kVyIsIkRvIiwiZW1wdHlSZWNvcmQiLCJhcFMiLCJhcFNXIiwiQXBUIiwiZW1wdHlSZWFkb25seUFycmF5IiwidHJhdmVyc2VSZWFkb25seU5vbkVtcHR5QXJyYXlXaXRoSW5kZXgiLCJhcyIsIm91dCIsImhlYWQiLCJpIiwibGVuZ3RoIiwicHVzaCIsInRyYXZlcnNlUmVhZG9ubHlBcnJheVdpdGhJbmRleCIsImlzTm9uRW1wdHkiLCJ0cmF2ZXJzZUFycmF5V2l0aEluZGV4IiwidHJhdmVyc2VBcnJheSIsInNlcXVlbmNlQXJyYXkiLCJyZWFkZXIiLCJnZXRTZW1pZ3JvdXAiLCJnZXRNb25vaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUdBOztBQUNBOztBQUVBOztBQUVBOztBQUNBOztBQUNBOztB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QUlQO0FBQ0E7QUFDQTs7OztBQUNPLElBQU1pRCxhQUFzRixHQUNqRyxhQUNBRCxhQUFhLENBQUMvRSxrQkFBRCxDQUZSLEMsQ0FJUDtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTWlGLE1BQXFGLEdBQUc7QUFDbkdyQyxFQUFBQSxHQUFHLEVBQUhBLEdBRG1HO0FBRW5HakMsRUFBQUEsR0FBRyxFQUFFRixJQUY4RjtBQUduR2lCLEVBQUFBLEVBQUUsRUFBRkEsRUFIbUc7QUFJbkdaLEVBQUFBLEVBQUUsRUFBRUYsR0FKK0Y7QUFLbkdJLEVBQUFBLEtBQUssRUFBRUQsTUFMNEY7QUFNbkdTLEVBQUFBLE1BQU0sRUFBRUgsT0FOMkY7QUFPbkdELEVBQUFBLE9BQU8sRUFBRUgsUUFQMEY7QUFRbkdlLEVBQUFBLEVBQUUsRUFBRkEsRUFSbUc7QUFTbkdDLEVBQUFBLEtBQUssRUFBTEEsS0FUbUc7QUFVbkdHLEVBQUFBLE1BQU0sRUFBTkEsTUFWbUc7QUFXbkdHLEVBQUFBLElBQUksRUFBSkEsSUFYbUc7QUFZbkdJLEVBQUFBLEtBQUssRUFBTEE7QUFabUcsQ0FBOUY7QUFlUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTXVDLFlBQWdFLEdBQzNFLGFBQ0EsOEJBQWtCbEMsS0FBbEIsQ0FGSztBQUlQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxJQUFNbUMsU0FBdUQsR0FDbEUsYUFDQSx1Q0FBcUJoQyxXQUFyQixDQUZLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuaW1wb3J0IHsgQXBwbGljYXRpdmUyLCBnZXRBcHBsaWNhdGl2ZU1vbm9pZCB9IGZyb20gJy4vQXBwbGljYXRpdmUnXG5pbXBvcnQgeyBhcEZpcnN0IGFzIGFwRmlyc3RfLCBBcHBseTIsIGFwUyBhcyBhcFNfLCBhcFNlY29uZCBhcyBhcFNlY29uZF8sIGdldEFwcGx5U2VtaWdyb3VwIH0gZnJvbSAnLi9BcHBseSdcbmltcG9ydCB7IENhdGVnb3J5MiB9IGZyb20gJy4vQ2F0ZWdvcnknXG5pbXBvcnQgeyBiaW5kIGFzIGJpbmRfLCBDaGFpbjIsIGNoYWluRmlyc3QgYXMgY2hhaW5GaXJzdF8gfSBmcm9tICcuL0NoYWluJ1xuaW1wb3J0IHsgQ2hvaWNlMiB9IGZyb20gJy4vQ2hvaWNlJ1xuaW1wb3J0ICogYXMgRSBmcm9tICcuL0VpdGhlcidcbmltcG9ydCB7IGNvbnN0YW50LCBmbG93LCBpZGVudGl0eSwgcGlwZSB9IGZyb20gJy4vZnVuY3Rpb24nXG5pbXBvcnQgeyBiaW5kVG8gYXMgYmluZFRvXywgZmxhcCBhcyBmbGFwXywgRnVuY3RvcjIgfSBmcm9tICcuL0Z1bmN0b3InXG5pbXBvcnQgKiBhcyBfIGZyb20gJy4vaW50ZXJuYWwnXG5pbXBvcnQgeyBNb25hZDIgfSBmcm9tICcuL01vbmFkJ1xuaW1wb3J0IHsgTW9ub2lkIH0gZnJvbSAnLi9Nb25vaWQnXG5pbXBvcnQgeyBOb25FbXB0eUFycmF5IH0gZnJvbSAnLi9Ob25FbXB0eUFycmF5J1xuaW1wb3J0IHsgUG9pbnRlZDIgfSBmcm9tICcuL1BvaW50ZWQnXG5pbXBvcnQgeyBQcm9mdW5jdG9yMiB9IGZyb20gJy4vUHJvZnVuY3RvcidcbmltcG9ydCB7IFJlYWRvbmx5Tm9uRW1wdHlBcnJheSB9IGZyb20gJy4vUmVhZG9ubHlOb25FbXB0eUFycmF5J1xuaW1wb3J0IHsgU2VtaWdyb3VwIH0gZnJvbSAnLi9TZW1pZ3JvdXAnXG5pbXBvcnQgeyBTdHJvbmcyIH0gZnJvbSAnLi9TdHJvbmcnXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIG1vZGVsXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQGNhdGVnb3J5IG1vZGVsXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSZWFkZXI8UiwgQT4ge1xuICAocjogUik6IEFcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gY29uc3RydWN0b3JzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogUmVhZHMgdGhlIGN1cnJlbnQgY29udGV4dFxuICpcbiAqIEBjYXRlZ29yeSBjb25zdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgYXNrOiA8Uj4oKSA9PiBSZWFkZXI8UiwgUj4gPSAoKSA9PiBpZGVudGl0eVxuXG4vKipcbiAqIFByb2plY3RzIGEgdmFsdWUgZnJvbSB0aGUgZ2xvYmFsIGNvbnRleHQgaW4gYSBSZWFkZXJcbiAqXG4gKiBAY2F0ZWdvcnkgY29uc3RydWN0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGFza3M6IDxSLCBBPihmOiAocjogUikgPT4gQSkgPT4gUmVhZGVyPFIsIEE+ID0gaWRlbnRpdHlcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gY29tYmluYXRvcnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBDaGFuZ2VzIHRoZSB2YWx1ZSBvZiB0aGUgbG9jYWwgY29udGV4dCBkdXJpbmcgdGhlIGV4ZWN1dGlvbiBvZiB0aGUgYWN0aW9uIGBtYWAgKHNpbWlsYXIgdG8gYENvbnRyYXZhcmlhbnRgJ3NcbiAqIGBjb250cmFtYXBgKS5cbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgbG9jYWw6IDxSMiwgUjE+KGY6IChyMjogUjIpID0+IFIxKSA9PiA8QT4obWE6IFJlYWRlcjxSMSwgQT4pID0+IFJlYWRlcjxSMiwgQT4gPSAoZikgPT4gKG1hKSA9PiAocjIpID0+XG4gIG1hKGYocjIpKVxuXG4vKipcbiAqIExlc3Mgc3RyaWN0IHZlcnNpb24gb2YgW2Bhc2tzUmVhZGVyYF0oI2Fza3NyZWFkZXIpLlxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgYXNrc1JlYWRlclcgPSA8UjEsIFIyLCBBPihmOiAocjE6IFIxKSA9PiBSZWFkZXI8UjIsIEE+KTogUmVhZGVyPFIxICYgUjIsIEE+ID0+IChyKSA9PiBmKHIpKHIpXG5cbi8qKlxuICogRWZmZWN0ZnVsbHkgYWNjZXNzZXMgdGhlIGVudmlyb25tZW50LlxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgYXNrc1JlYWRlcjogPFIsIEE+KGY6IChyOiBSKSA9PiBSZWFkZXI8UiwgQT4pID0+IFJlYWRlcjxSLCBBPiA9IGFza3NSZWFkZXJXXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIG5vbi1waXBlYWJsZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmNvbnN0IF9tYXA6IE1vbmFkMjxVUkk+WydtYXAnXSA9IChmYSwgZikgPT4gcGlwZShmYSwgbWFwKGYpKVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmNvbnN0IF9hcDogTW9uYWQyPFVSST5bJ2FwJ10gPSAoZmFiLCBmYSkgPT4gcGlwZShmYWIsIGFwKGZhKSlcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5jb25zdCBfY2hhaW46IE1vbmFkMjxVUkk+WydjaGFpbiddID0gKG1hLCBmKSA9PiBwaXBlKG1hLCBjaGFpbihmKSlcbmNvbnN0IF9jb21wb3NlOiBDYXRlZ29yeTI8VVJJPlsnY29tcG9zZSddID0gKGJjLCBhYikgPT4gcGlwZShiYywgY29tcG9zZShhYikpXG5jb25zdCBfcHJvbWFwOiBQcm9mdW5jdG9yMjxVUkk+Wydwcm9tYXAnXSA9IChmZWEsIGYsIGcpID0+IHBpcGUoZmVhLCBwcm9tYXAoZiwgZykpXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIHR5cGUgY2xhc3MgbWVtYmVyc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIGBtYXBgIGNhbiBiZSB1c2VkIHRvIHR1cm4gZnVuY3Rpb25zIGAoYTogQSkgPT4gQmAgaW50byBmdW5jdGlvbnMgYChmYTogRjxBPikgPT4gRjxCPmAgd2hvc2UgYXJndW1lbnQgYW5kIHJldHVybiB0eXBlc1xuICogdXNlIHRoZSB0eXBlIGNvbnN0cnVjdG9yIGBGYCB0byByZXByZXNlbnQgc29tZSBjb21wdXRhdGlvbmFsIGNvbnRleHQuXG4gKlxuICogQGNhdGVnb3J5IEZ1bmN0b3JcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgbWFwOiA8QSwgQj4oZjogKGE6IEEpID0+IEIpID0+IDxSPihmYTogUmVhZGVyPFIsIEE+KSA9PiBSZWFkZXI8UiwgQj4gPSAoZikgPT4gKGZhKSA9PiAocikgPT4gZihmYShyKSlcblxuLyoqXG4gKiBMZXNzIHN0cmljdCB2ZXJzaW9uIG9mIFtgYXBgXSgjYXApLlxuICpcbiAqIEBjYXRlZ29yeSBBcHBseVxuICogQHNpbmNlIDIuOC4wXG4gKi9cbmV4cG9ydCBjb25zdCBhcFc6IDxSMiwgQT4oZmE6IFJlYWRlcjxSMiwgQT4pID0+IDxSMSwgQj4oZmFiOiBSZWFkZXI8UjEsIChhOiBBKSA9PiBCPikgPT4gUmVhZGVyPFIxICYgUjIsIEI+ID0gKGZhKSA9PiAoXG4gIGZhYlxuKSA9PiAocikgPT4gZmFiKHIpKGZhKHIpKVxuXG4vKipcbiAqIEFwcGx5IGEgZnVuY3Rpb24gdG8gYW4gYXJndW1lbnQgdW5kZXIgYSB0eXBlIGNvbnN0cnVjdG9yLlxuICpcbiAqIEBjYXRlZ29yeSBBcHBseVxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBhcDogPFIsIEE+KGZhOiBSZWFkZXI8UiwgQT4pID0+IDxCPihmYWI6IFJlYWRlcjxSLCAoYTogQSkgPT4gQj4pID0+IFJlYWRlcjxSLCBCPiA9IGFwV1xuXG4vKipcbiAqIEBjYXRlZ29yeSBQb2ludGVkXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IG9mOiBQb2ludGVkMjxVUkk+WydvZiddID0gY29uc3RhbnRcblxuLyoqXG4gKiBMZXNzIHN0cmljdCB2ZXJzaW9uIG9mIFtgY2hhaW5gXSgjY2hhaW4pLlxuICpcbiAqIEBjYXRlZ29yeSBNb25hZFxuICogQHNpbmNlIDIuNi4wXG4gKi9cbmV4cG9ydCBjb25zdCBjaGFpblc6IDxSMiwgQSwgQj4oZjogKGE6IEEpID0+IFJlYWRlcjxSMiwgQj4pID0+IDxSMT4obWE6IFJlYWRlcjxSMSwgQT4pID0+IFJlYWRlcjxSMSAmIFIyLCBCPiA9IChmKSA9PiAoXG4gIGZhXG4pID0+IChyKSA9PiBmKGZhKHIpKShyKVxuXG4vKipcbiAqIENvbXBvc2VzIGNvbXB1dGF0aW9ucyBpbiBzZXF1ZW5jZSwgdXNpbmcgdGhlIHJldHVybiB2YWx1ZSBvZiBvbmUgY29tcHV0YXRpb24gdG8gZGV0ZXJtaW5lIHRoZSBuZXh0IGNvbXB1dGF0aW9uLlxuICpcbiAqIEBjYXRlZ29yeSBNb25hZFxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBjaGFpbjogPEEsIFIsIEI+KGY6IChhOiBBKSA9PiBSZWFkZXI8UiwgQj4pID0+IChtYTogUmVhZGVyPFIsIEE+KSA9PiBSZWFkZXI8UiwgQj4gPSBjaGFpbldcblxuLyoqXG4gKiBMZXNzIHN0cmljdCB2ZXJzaW9uIG9mIFtgZmxhdHRlbmBdKCNmbGF0dGVuKS5cbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZsYXR0ZW5XOiA8UjEsIFIyLCBBPihtbWE6IFJlYWRlcjxSMSwgUmVhZGVyPFIyLCBBPj4pID0+IFJlYWRlcjxSMSAmIFIyLCBBPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgY2hhaW5XKGlkZW50aXR5KVxuXG4vKipcbiAqIERlcml2YWJsZSBmcm9tIGBDaGFpbmAuXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZsYXR0ZW46IDxSLCBBPihtbWE6IFJlYWRlcjxSLCBSZWFkZXI8UiwgQT4+KSA9PiBSZWFkZXI8UiwgQT4gPSBmbGF0dGVuV1xuXG4vKipcbiAqIEBjYXRlZ29yeSBTZW1pZ3JvdXBvaWRcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgY29tcG9zZTogPEEsIEI+KGFiOiBSZWFkZXI8QSwgQj4pID0+IDxDPihiYzogUmVhZGVyPEIsIEM+KSA9PiBSZWFkZXI8QSwgQz4gPSAoYWIpID0+IChiYykgPT4gZmxvdyhhYiwgYmMpXG5cbi8qKlxuICogQGNhdGVnb3J5IFByb2Z1bmN0b3JcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgcHJvbWFwOiA8RSwgQSwgRCwgQj4oZjogKGQ6IEQpID0+IEUsIGc6IChhOiBBKSA9PiBCKSA9PiAoZmVhOiBSZWFkZXI8RSwgQT4pID0+IFJlYWRlcjxELCBCPiA9IChmLCBnKSA9PiAoXG4gIGZlYVxuKSA9PiAoYSkgPT4gZyhmZWEoZihhKSkpXG5cbi8qKlxuICogQGNhdGVnb3J5IENhdGVnb3J5XG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGlkOiBDYXRlZ29yeTI8VVJJPlsnaWQnXSA9ICgpID0+IGlkZW50aXR5XG5cbi8qKlxuICogQGNhdGVnb3J5IFN0cm9uZ1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgZmlyc3Q6IFN0cm9uZzI8VVJJPlsnZmlyc3QnXSA9IChwYWIpID0+IChbYSwgY10pID0+IFtwYWIoYSksIGNdXG5cbi8qKlxuICogQGNhdGVnb3J5IFN0cm9uZ1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kOiBTdHJvbmcyPFVSST5bJ3NlY29uZCddID0gKHBiYykgPT4gKFthLCBiXSkgPT4gW2EsIHBiYyhiKV1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgQ2hvaWNlXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBsZWZ0OiBDaG9pY2UyPFVSST5bJ2xlZnQnXSA9IChwYWIpID0+IEUuZm9sZCgoYSkgPT4gXy5sZWZ0KHBhYihhKSksIEUucmlnaHQpXG5cbi8qKlxuICogQGNhdGVnb3J5IENob2ljZVxuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgcmlnaHQ6IENob2ljZTI8VVJJPlsncmlnaHQnXSA9IChwYmMpID0+IEUuZm9sZChFLmxlZnQsIChiKSA9PiBfLnJpZ2h0KHBiYyhiKSkpXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGluc3RhbmNlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgVVJJID0gJ1JlYWRlcidcblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IHR5cGUgVVJJID0gdHlwZW9mIFVSSVxuXG5kZWNsYXJlIG1vZHVsZSAnLi9IS1QnIHtcbiAgaW50ZXJmYWNlIFVSSXRvS2luZDI8RSwgQT4ge1xuICAgIHJlYWRvbmx5IFtVUkldOiBSZWFkZXI8RSwgQT5cbiAgfVxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjcuMFxuICovXG5leHBvcnQgY29uc3QgRnVuY3RvcjogRnVuY3RvcjI8VVJJPiA9IHtcbiAgVVJJLFxuICBtYXA6IF9tYXBcbn1cblxuLyoqXG4gKiBEZXJpdmFibGUgZnJvbSBgRnVuY3RvcmAuXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBmbGFwID1cbiAgLyojX19QVVJFX18qL1xuICBmbGFwXyhGdW5jdG9yKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IFBvaW50ZWQ6IFBvaW50ZWQyPFVSST4gPSB7XG4gIFVSSSxcbiAgb2Zcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBBcHBseTogQXBwbHkyPFVSST4gPSB7XG4gIFVSSSxcbiAgbWFwOiBfbWFwLFxuICBhcDogX2FwXG59XG5cbi8qKlxuICogQ29tYmluZSB0d28gZWZmZWN0ZnVsIGFjdGlvbnMsIGtlZXBpbmcgb25seSB0aGUgcmVzdWx0IG9mIHRoZSBmaXJzdC5cbiAqXG4gKiBEZXJpdmFibGUgZnJvbSBgQXBwbHlgLlxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBhcEZpcnN0ID1cbiAgLyojX19QVVJFX18qL1xuICBhcEZpcnN0XyhBcHBseSlcblxuLyoqXG4gKiBDb21iaW5lIHR3byBlZmZlY3RmdWwgYWN0aW9ucywga2VlcGluZyBvbmx5IHRoZSByZXN1bHQgb2YgdGhlIHNlY29uZC5cbiAqXG4gKiBEZXJpdmFibGUgZnJvbSBgQXBwbHlgLlxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBhcFNlY29uZCA9XG4gIC8qI19fUFVSRV9fKi9cbiAgYXBTZWNvbmRfKEFwcGx5KVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjcuMFxuICovXG5leHBvcnQgY29uc3QgQXBwbGljYXRpdmU6IEFwcGxpY2F0aXZlMjxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgYXA6IF9hcCxcbiAgb2Zcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBDaGFpbjogQ2hhaW4yPFVSST4gPSB7XG4gIFVSSSxcbiAgbWFwOiBfbWFwLFxuICBhcDogX2FwLFxuICBjaGFpbjogX2NoYWluXG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuNy4wXG4gKi9cbmV4cG9ydCBjb25zdCBNb25hZDogTW9uYWQyPFVSST4gPSB7XG4gIFVSSSxcbiAgbWFwOiBfbWFwLFxuICBvZixcbiAgYXA6IF9hcCxcbiAgY2hhaW46IF9jaGFpblxufVxuXG4vKipcbiAqIENvbXBvc2VzIGNvbXB1dGF0aW9ucyBpbiBzZXF1ZW5jZSwgdXNpbmcgdGhlIHJldHVybiB2YWx1ZSBvZiBvbmUgY29tcHV0YXRpb24gdG8gZGV0ZXJtaW5lIHRoZSBuZXh0IGNvbXB1dGF0aW9uIGFuZFxuICoga2VlcGluZyBvbmx5IHRoZSByZXN1bHQgb2YgdGhlIGZpcnN0LlxuICpcbiAqIERlcml2YWJsZSBmcm9tIGBDaGFpbmAuXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGNoYWluRmlyc3QgPVxuICAvKiNfX1BVUkVfXyovXG4gIGNoYWluRmlyc3RfKENoYWluKVxuXG4vKipcbiAqIExlc3Mgc3RyaWN0IHZlcnNpb24gb2YgW2BjaGFpbkZpcnN0YF0oI2NoYWluZmlyc3QpLlxuICpcbiAqIERlcml2YWJsZSBmcm9tIGBDaGFpbmAuXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBjaGFpbkZpcnN0VzogPFIyLCBBLCBCPihcbiAgZjogKGE6IEEpID0+IFJlYWRlcjxSMiwgQj5cbikgPT4gPFIxPihtYTogUmVhZGVyPFIxLCBBPikgPT4gUmVhZGVyPFIxICYgUjIsIEE+ID0gY2hhaW5GaXJzdCBhcyBhbnlcblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi43LjBcbiAqL1xuZXhwb3J0IGNvbnN0IFByb2Z1bmN0b3I6IFByb2Z1bmN0b3IyPFVSST4gPSB7XG4gIFVSSSxcbiAgbWFwOiBfbWFwLFxuICBwcm9tYXA6IF9wcm9tYXBcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi43LjBcbiAqL1xuZXhwb3J0IGNvbnN0IENhdGVnb3J5OiBDYXRlZ29yeTI8VVJJPiA9IHtcbiAgVVJJLFxuICBjb21wb3NlOiBfY29tcG9zZSxcbiAgaWRcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi44LjNcbiAqL1xuZXhwb3J0IGNvbnN0IFN0cm9uZzogU3Ryb25nMjxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgcHJvbWFwOiBfcHJvbWFwLFxuICBmaXJzdCxcbiAgc2Vjb25kXG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuOC4zXG4gKi9cbmV4cG9ydCBjb25zdCBDaG9pY2U6IENob2ljZTI8VVJJPiA9IHtcbiAgVVJJLFxuICBtYXA6IF9tYXAsXG4gIHByb21hcDogX3Byb21hcCxcbiAgbGVmdCxcbiAgcmlnaHRcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gZG8gbm90YXRpb25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBAc2luY2UgMi44LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGJpbmRUbyA9XG4gIC8qI19fUFVSRV9fKi9cbiAgYmluZFRvXyhGdW5jdG9yKVxuXG4vKipcbiAqIEBzaW5jZSAyLjguMFxuICovXG5leHBvcnQgY29uc3QgYmluZCA9XG4gIC8qI19fUFVSRV9fKi9cbiAgYmluZF8oQ2hhaW4pXG5cbi8qKlxuICogQHNpbmNlIDIuOC4wXG4gKi9cbmV4cG9ydCBjb25zdCBiaW5kVzogPE4gZXh0ZW5kcyBzdHJpbmcsIEEsIFIyLCBCPihcbiAgbmFtZTogRXhjbHVkZTxOLCBrZXlvZiBBPixcbiAgZjogKGE6IEEpID0+IFJlYWRlcjxSMiwgQj5cbikgPT4gPFIxPihcbiAgZmE6IFJlYWRlcjxSMSwgQT5cbikgPT4gUmVhZGVyPFIxICYgUjIsIHsgcmVhZG9ubHkgW0sgaW4ga2V5b2YgQSB8IE5dOiBLIGV4dGVuZHMga2V5b2YgQSA/IEFbS10gOiBCIH0+ID0gYmluZCBhcyBhbnlcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gcGlwZWFibGUgc2VxdWVuY2UgU1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEBzaW5jZSAyLjkuMFxuICovXG5leHBvcnQgY29uc3QgRG86IFJlYWRlcjx1bmtub3duLCB7fT4gPVxuICAvKiNfX1BVUkVfXyovXG4gIG9mKF8uZW1wdHlSZWNvcmQpXG5cbi8qKlxuICogQHNpbmNlIDIuOC4wXG4gKi9cbmV4cG9ydCBjb25zdCBhcFMgPVxuICAvKiNfX1BVUkVfXyovXG4gIGFwU18oQXBwbHkpXG5cbi8qKlxuICogQHNpbmNlIDIuOC4wXG4gKi9cbmV4cG9ydCBjb25zdCBhcFNXOiA8QSwgTiBleHRlbmRzIHN0cmluZywgUjIsIEI+KFxuICBuYW1lOiBFeGNsdWRlPE4sIGtleW9mIEE+LFxuICBmYjogUmVhZGVyPFIyLCBCPlxuKSA9PiA8UjE+KFxuICBmYTogUmVhZGVyPFIxLCBBPlxuKSA9PiBSZWFkZXI8UjEgJiBSMiwgeyByZWFkb25seSBbSyBpbiBrZXlvZiBBIHwgTl06IEsgZXh0ZW5kcyBrZXlvZiBBID8gQVtLXSA6IEIgfT4gPSBhcFMgYXMgYW55XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIHNlcXVlbmNlIFRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBBcFQ6IFJlYWRlcjx1bmtub3duLCByZWFkb25seSBbXT4gPVxuICAvKiNfX1BVUkVfXyovXG4gIG9mKF8uZW1wdHlSZWFkb25seUFycmF5KVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBhcnJheSB1dGlsc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEVxdWl2YWxlbnQgdG8gYFJlYWRvbmx5Tm9uRW1wdHlBcnJheSN0cmF2ZXJzZVdpdGhJbmRleChBcHBsaWNhdGl2ZSlgLlxuICpcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHRyYXZlcnNlUmVhZG9ubHlOb25FbXB0eUFycmF5V2l0aEluZGV4ID0gPEEsIFIsIEI+KGY6IChpbmRleDogbnVtYmVyLCBhOiBBKSA9PiBSZWFkZXI8UiwgQj4pID0+IChcbiAgYXM6IFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxBPlxuKTogUmVhZGVyPFIsIFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxCPj4gPT4gKHIpID0+IHtcbiAgY29uc3Qgb3V0OiBOb25FbXB0eUFycmF5PEI+ID0gW2YoMCwgXy5oZWFkKGFzKSkocildXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgYXMubGVuZ3RoOyBpKyspIHtcbiAgICBvdXQucHVzaChmKGksIGFzW2ldKShyKSlcbiAgfVxuICByZXR1cm4gb3V0XG59XG5cbi8qKlxuICogRXF1aXZhbGVudCB0byBgUmVhZG9ubHlBcnJheSN0cmF2ZXJzZVdpdGhJbmRleChBcHBsaWNhdGl2ZSlgLlxuICpcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHRyYXZlcnNlUmVhZG9ubHlBcnJheVdpdGhJbmRleCA9IDxBLCBSLCBCPihcbiAgZjogKGluZGV4OiBudW1iZXIsIGE6IEEpID0+IFJlYWRlcjxSLCBCPlxuKTogKChhczogUmVhZG9ubHlBcnJheTxBPikgPT4gUmVhZGVyPFIsIFJlYWRvbmx5QXJyYXk8Qj4+KSA9PiB7XG4gIGNvbnN0IGcgPSB0cmF2ZXJzZVJlYWRvbmx5Tm9uRW1wdHlBcnJheVdpdGhJbmRleChmKVxuICByZXR1cm4gKGFzKSA9PiAoXy5pc05vbkVtcHR5KGFzKSA/IGcoYXMpIDogQXBUKVxufVxuXG4vKipcbiAqIEBzaW5jZSAyLjkuMFxuICovXG5leHBvcnQgY29uc3QgdHJhdmVyc2VBcnJheVdpdGhJbmRleDogPFIsIEEsIEI+KFxuICBmOiAoaW5kZXg6IG51bWJlciwgYTogQSkgPT4gUmVhZGVyPFIsIEI+XG4pID0+IChhczogUmVhZG9ubHlBcnJheTxBPikgPT4gUmVhZGVyPFIsIFJlYWRvbmx5QXJyYXk8Qj4+ID0gdHJhdmVyc2VSZWFkb25seUFycmF5V2l0aEluZGV4XG5cbi8qKlxuICogQHNpbmNlIDIuOS4wXG4gKi9cbmV4cG9ydCBjb25zdCB0cmF2ZXJzZUFycmF5ID0gPFIsIEEsIEI+KFxuICBmOiAoYTogQSkgPT4gUmVhZGVyPFIsIEI+XG4pOiAoKGFzOiBSZWFkb25seUFycmF5PEE+KSA9PiBSZWFkZXI8UiwgUmVhZG9ubHlBcnJheTxCPj4pID0+IHRyYXZlcnNlUmVhZG9ubHlBcnJheVdpdGhJbmRleCgoXywgYSkgPT4gZihhKSlcblxuLyoqXG4gKiBAc2luY2UgMi45LjBcbiAqL1xuZXhwb3J0IGNvbnN0IHNlcXVlbmNlQXJyYXk6IDxSLCBBPihhcnI6IFJlYWRvbmx5QXJyYXk8UmVhZGVyPFIsIEE+PikgPT4gUmVhZGVyPFIsIFJlYWRvbmx5QXJyYXk8QT4+ID1cbiAgLyojX19QVVJFX18qL1xuICB0cmF2ZXJzZUFycmF5KGlkZW50aXR5KVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBkZXByZWNhdGVkXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIHRzbGludDpkaXNhYmxlOiBkZXByZWNhdGlvblxuXG4vKipcbiAqIFVzZSBzbWFsbCwgc3BlY2lmaWMgaW5zdGFuY2VzIGluc3RlYWQuXG4gKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMC4wXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgY29uc3QgcmVhZGVyOiBNb25hZDI8VVJJPiAmIFByb2Z1bmN0b3IyPFVSST4gJiBDYXRlZ29yeTI8VVJJPiAmIFN0cm9uZzI8VVJJPiAmIENob2ljZTI8VVJJPiA9IHtcbiAgVVJJLFxuICBtYXA6IF9tYXAsXG4gIG9mLFxuICBhcDogX2FwLFxuICBjaGFpbjogX2NoYWluLFxuICBwcm9tYXA6IF9wcm9tYXAsXG4gIGNvbXBvc2U6IF9jb21wb3NlLFxuICBpZCxcbiAgZmlyc3QsXG4gIHNlY29uZCxcbiAgbGVmdCxcbiAgcmlnaHRcbn1cblxuLyoqXG4gKiBVc2UgW2BnZXRBcHBseVNlbWlncm91cGBdKC4vQXBwbHkudHMuaHRtbCNnZXRhcHBseXNlbWlncm91cCkgaW5zdGVhZC5cbiAqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4wLjBcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRTZW1pZ3JvdXA6IDxSLCBBPihTOiBTZW1pZ3JvdXA8QT4pID0+IFNlbWlncm91cDxSZWFkZXI8UiwgQT4+ID1cbiAgLyojX19QVVJFX18qL1xuICBnZXRBcHBseVNlbWlncm91cChBcHBseSlcblxuLyoqXG4gKiBVc2UgW2BnZXRBcHBsaWNhdGl2ZU1vbm9pZGBdKC4vQXBwbGljYXRpdmUudHMuaHRtbCNnZXRhcHBsaWNhdGl2ZW1vbm9pZCkgaW5zdGVhZC5cbiAqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4wLjBcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRNb25vaWQ6IDxSLCBBPihNOiBNb25vaWQ8QT4pID0+IE1vbm9pZDxSZWFkZXI8UiwgQT4+ID1cbiAgLyojX19QVVJFX18qL1xuICBnZXRBcHBsaWNhdGl2ZU1vbm9pZChBcHBsaWNhdGl2ZSlcbiJdfQ==