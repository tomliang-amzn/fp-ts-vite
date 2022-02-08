"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.left = exports.gets = exports.get = exports.fromTaskK = exports.fromTaskEitherK = exports.fromTaskEither = exports.fromTask = exports.fromStateK = exports.fromState = exports.fromReaderTaskEitherK = exports.fromReaderTaskEither = exports.fromReaderK = exports.fromReaderEither = exports.fromReader = exports.fromPredicate = exports.fromOptionK = exports.fromOption = exports.fromIOK = exports.fromIOEitherK = exports.fromIOEither = exports.fromIO = exports.fromEitherK = exports.fromEither = exports.flattenW = exports.flatten = exports.flap = exports.filterOrElseW = exports.filterOrElse = exports.execute = exports.execState = exports.evaluate = exports.evalState = exports.chainW = exports.chainTaskK = exports.chainTaskEitherKW = exports.chainTaskEitherK = exports.chainStateK = exports.chainReaderTaskEitherKW = exports.chainReaderTaskEitherK = exports.chainReaderKW = exports.chainReaderK = exports.chainOptionK = exports.chainIOK = exports.chainIOEitherKW = exports.chainIOEitherK = exports.chainFirstW = exports.chainFirstTaskK = exports.chainFirstReaderKW = exports.chainFirstReaderK = exports.chainFirstIOK = exports.chainFirst = exports.chainEitherKW = exports.chainEitherK = exports.chain = exports.bindW = exports.bindTo = exports.bind = exports.bimap = exports.asksStateReaderTaskEitherW = exports.asksStateReaderTaskEither = exports.asks = exports.ask = exports.apW = exports.apSecond = exports.apSW = exports.apS = exports.apFirst = exports.ap = exports.altW = exports.alt = exports.URI = exports.Pointed = exports.MonadThrow = exports.MonadTask = exports.MonadIO = exports.Monad = exports.Functor = exports.FromTask = exports.FromState = exports.FromReader = exports.FromIO = exports.FromEither = exports.Chain = exports.Bifunctor = exports.Apply = exports.Applicative = exports.Alt = void 0;
exports.leftIO = leftIO;
exports.leftReader = leftReader;
exports.leftState = void 0;
exports.leftTask = leftTask;
exports.right = exports.put = exports.of = exports.modify = exports.mapLeft = exports.map = exports.local = void 0;
exports.rightIO = rightIO;
exports.rightReader = rightReader;
exports.rightState = void 0;
exports.rightTask = rightTask;
exports.run = run;
exports.traverseReadonlyNonEmptyArrayWithIndex = exports.traverseReadonlyArrayWithIndex = exports.traverseArrayWithIndex = exports.traverseArray = exports.throwError = exports.stateReaderTaskEitherSeq = exports.stateReaderTaskEither = exports.sequenceArray = void 0;

var _Apply = require("./Apply");

var _Chain = require("./Chain");

var E = _interopRequireWildcard(require("./Either"));

var _FromEither = require("./FromEither");

var _FromIO = require("./FromIO");

var _FromReader = require("./FromReader");

var _FromState = require("./FromState");

var _FromTask = require("./FromTask");

var _function = require("./function");

var _Functor = require("./Functor");

var _ = _interopRequireWildcard(require("./internal"));

var R = _interopRequireWildcard(require("./Reader"));

var RTE = _interopRequireWildcard(require("./ReaderTaskEither"));

var ST = _interopRequireWildcard(require("./StateT"));

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
var ReaderTaskEither = RTE.ReaderTaskEither;
var Either = E.Either;
var Reader = R.Reader;
/**
 * @category model
 * @since 2.0.0
 */

// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------

/**
 * @category constructors
 * @since 2.0.0
 */
var left = function left(e) {
  return function () {
    return RTE.left(e);
  };
};
/**
 * @category constructors
 * @since 2.0.0
 */


exports.left = left;
var right = /*#__PURE__*/ST.of(RTE.Pointed);
/**
 * @category constructors
 * @since 2.0.0
 */

exports.right = right;

function rightTask(ma) {
  return fromReaderTaskEither(RTE.rightTask(ma));
}
/**
 * @category constructors
 * @since 2.0.0
 */


function leftTask(me) {
  return fromReaderTaskEither(RTE.leftTask(me));
}
/**
 * @category constructors
 * @since 2.0.0
 */


function rightReader(ma) {
  return fromReaderTaskEither(RTE.rightReader(ma));
}
/**
 * @category constructors
 * @since 2.0.0
 */


function leftReader(me) {
  return fromReaderTaskEither(RTE.leftReader(me));
}
/**
 * @category constructors
 * @since 2.0.0
 */


function rightIO(ma) {
  return fromReaderTaskEither(RTE.rightIO(ma));
}
/**
 * @category constructors
 * @since 2.0.0
 */


function leftIO(me) {
  return fromReaderTaskEither(RTE.leftIO(me));
}
/**
 * @category constructors
 * @since 2.0.0
 */


var rightState = function rightState(sa) {
  return (0, _function.flow)(sa, RTE.right);
};
/**
 * @category constructors
 * @since 2.0.0
 */


exports.rightState = rightState;

var leftState = function leftState(me) {
  return function (s) {
    return RTE.left(me(s)[0]);
  };
}; // -------------------------------------------------------------------------------------
// natural transformations
// -------------------------------------------------------------------------------------

/**
 * @category natural transformations
 * @since 2.0.0
 */


exports.leftState = leftState;
var fromEither = /*#__PURE__*/E.match(function (e) {
  return left(e);
}, right);
/**
 * @category natural transformations
 * @since 2.11.0
 */

exports.fromEither = fromEither;
var fromReader = rightReader;
/**
 * @category natural transformations
 * @since 2.7.0
 */

exports.fromReader = fromReader;
var fromIO = rightIO;
/**
 * @category natural transformations
 * @since 2.7.0
 */

exports.fromIO = fromIO;
var fromTask = rightTask;
/**
 * @category natural transformations
 * @since 2.10.0
 */

exports.fromTask = fromTask;
var fromState = /*#__PURE__*/ST.fromState(RTE.Pointed);
/**
 * @category natural transformations
 * @since 2.0.0
 */

exports.fromState = fromState;

var fromTaskEither = function fromTaskEither(ma) {
  return fromReaderTaskEither(RTE.fromTaskEither(ma));
};
/**
 * @category natural transformations
 * @since 2.0.0
 */


exports.fromTaskEither = fromTaskEither;

var fromIOEither = function fromIOEither(ma) {
  return fromReaderTaskEither(RTE.fromIOEither(ma));
};
/**
 * @category natural transformations
 * @since 2.0.0
 */


exports.fromIOEither = fromIOEither;

var fromReaderEither = function fromReaderEither(ma) {
  return fromReaderTaskEither(RTE.fromReaderEither(ma));
};
/**
 * @category constructors
 * @since 2.0.0
 */


exports.fromReaderEither = fromReaderEither;
var fromReaderTaskEither = /*#__PURE__*/ST.fromF(RTE.Functor); // -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------

/**
 * Changes the value of the local context during the execution of the action `ma` (similar to `Contravariant`'s
 * `contramap`).
 *
 * @category combinators
 * @since 2.11.0
 */

exports.fromReaderTaskEither = fromReaderTaskEither;

var local = function local(f) {
  return function (ma) {
    return (0, _function.flow)(ma, R.local(f));
  };
};
/**
 * Less strict version of [`asksStateReaderTaskEither`](#asksstatereadertaskeither).
 *
 * @category combinators
 * @since 2.11.0
 */


exports.local = local;

var asksStateReaderTaskEitherW = function asksStateReaderTaskEitherW(f) {
  return function (s) {
    return function (r) {
      return f(r)(s)(r);
    };
  };
};
/**
 * Effectfully accesses the environment.
 *
 * @category combinators
 * @since 2.11.0
 */


exports.asksStateReaderTaskEitherW = asksStateReaderTaskEitherW;
var asksStateReaderTaskEither = asksStateReaderTaskEitherW;
/**
 * @category combinators
 * @since 2.4.0
 */

exports.asksStateReaderTaskEither = asksStateReaderTaskEither;

var fromIOEitherK = function fromIOEitherK(f) {
  return function () {
    return fromIOEither(f.apply(void 0, arguments));
  };
};
/**
 * Less strict version of [`chainIOEitherK`](#chainioeitherk).
 *
 * @category combinators
 * @since 2.6.1
 */


exports.fromIOEitherK = fromIOEitherK;

var chainIOEitherKW = function chainIOEitherKW(f) {
  return function (ma) {
    return (0, _function.pipe)(ma, chainW(fromIOEitherK(f)));
  };
};
/**
 * @category combinators
 * @since 2.4.0
 */


exports.chainIOEitherKW = chainIOEitherKW;
var chainIOEitherK = chainIOEitherKW;
/**
 * @category combinators
 * @since 2.4.0
 */

exports.chainIOEitherK = chainIOEitherK;

var fromTaskEitherK = function fromTaskEitherK(f) {
  return function () {
    return fromTaskEither(f.apply(void 0, arguments));
  };
};
/**
 * Less strict version of [`chainTaskEitherK`](#chaintaskeitherk).
 *
 * @category combinators
 * @since 2.6.1
 */


exports.fromTaskEitherK = fromTaskEitherK;

var chainTaskEitherKW = function chainTaskEitherKW(f) {
  return function (ma) {
    return (0, _function.pipe)(ma, chainW(fromTaskEitherK(f)));
  };
};
/**
 * @category combinators
 * @since 2.4.0
 */


exports.chainTaskEitherKW = chainTaskEitherKW;
var chainTaskEitherK = chainTaskEitherKW;
/**
 * @category combinators
 * @since 2.4.0
 */

exports.chainTaskEitherK = chainTaskEitherK;

var fromReaderTaskEitherK = function fromReaderTaskEitherK(f) {
  return function () {
    return fromReaderTaskEither(f.apply(void 0, arguments));
  };
};
/**
 * Less strict version of [`chainReaderTaskEitherK`](#chainreadertaskeitherk).
 *
 * @category combinators
 * @since 2.6.1
 */


exports.fromReaderTaskEitherK = fromReaderTaskEitherK;

var chainReaderTaskEitherKW = function chainReaderTaskEitherKW(f) {
  return function (ma) {
    return (0, _function.pipe)(ma, chainW(fromReaderTaskEitherK(f)));
  };
};
/**
 * @category combinators
 * @since 2.4.0
 */


exports.chainReaderTaskEitherKW = chainReaderTaskEitherKW;
var chainReaderTaskEitherK = chainReaderTaskEitherKW; // -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------

/* istanbul ignore next */

exports.chainReaderTaskEitherK = chainReaderTaskEitherK;

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
/* istanbul ignore next */


var _alt = function _alt(fa, that) {
  return function (s) {
    return (0, _function.pipe)(fa(s), RTE.alt(function () {
      return that()(s);
    }));
  };
};

var _bimap = function _bimap(fea, f, g) {
  return function (s) {
    return (0, _function.pipe)(fea(s), RTE.bimap(f, function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          a = _ref2[0],
          s = _ref2[1];

      return [g(a), s];
    }));
  };
};

var _mapLeft = function _mapLeft(fea, f) {
  return function (s) {
    return (0, _function.pipe)(fea(s), RTE.mapLeft(f));
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


var map = /*#__PURE__*/ST.map(RTE.Functor);
/**
 * Map a pair of functions over the two last type arguments of the bifunctor.
 *
 * @category Bifunctor
 * @since 2.6.2
 */

exports.map = map;

var bimap = function bimap(f, g) {
  return function (fa) {
    return _bimap(fa, f, g);
  };
};
/**
 * Map a function over the third type argument of a bifunctor.
 *
 * @category Bifunctor
 * @since 2.6.2
 */


exports.bimap = bimap;

var mapLeft = function mapLeft(f) {
  return function (fa) {
    return _mapLeft(fa, f);
  };
};
/**
 * Apply a function to an argument under a type constructor.
 *
 * @category Apply
 * @since 2.0.0
 */


exports.mapLeft = mapLeft;
var ap = /*#__PURE__*/ST.ap(RTE.Chain);
/**
 * Less strict version of [`ap`](#ap).
 *
 * @category Apply
 * @since 2.8.0
 */

exports.ap = ap;
var apW = ap;
/**
 * @category Pointed
 * @since 2.7.0
 */

exports.apW = apW;
var of = right;
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation.
 *
 * @category Monad
 * @since 2.0.0
 */

exports.of = of;
var chain = /*#__PURE__*/ST.chain(RTE.Chain);
/**
 * Less strict version of [`chain`](#chain).
 *
 * @category Monad
 * @since 2.6.0
 */

exports.chain = chain;
var chainW = chain;
/**
 * Less strict version of [`flatten`](#flatten).
 *
 * @category combinators
 * @since 2.11.0
 */

exports.chainW = chainW;
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
 * Less strict version of [`alt`](#alt).
 *
 * @category Alt
 * @since 2.9.0
 */

exports.flatten = flatten;

var altW = function altW(that) {
  return function (fa) {
    return function (r) {
      return (0, _function.pipe)(fa(r), RTE.altW(function () {
        return that()(r);
      }));
    };
  };
};
/**
 * Identifies an associative operation on a type constructor. It is similar to `Semigroup`, except that it applies to
 * types of kind `* -> *`.
 *
 * @category Alt
 * @since 2.6.2
 */


exports.altW = altW;
var alt = altW;
/**
 * @category MonadThrow
 * @since 2.7.0
 */

exports.alt = alt;
var throwError = left; // -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------

/**
 * @category instances
 * @since 2.0.0
 */

exports.throwError = throwError;
var URI = 'StateReaderTaskEither';
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
 * @since 2.11.0
 */

exports.Chain = Chain;
var FromState = {
  URI: URI,
  fromState: fromState
};
/**
 * Get the current state
 *
 * @category constructors
 * @since 2.0.0
 */

exports.FromState = FromState;
var get = /*#__PURE__*/(0, _FromState.get)(FromState);
/**
 * Set the state
 *
 * @category constructors
 * @since 2.0.0
 */

exports.get = get;
var put = /*#__PURE__*/(0, _FromState.put)(FromState);
/**
 * Modify the state by applying a function to the current state
 *
 * @category constructors
 * @since 2.0.0
 */

exports.put = put;
var modify = /*#__PURE__*/(0, _FromState.modify)(FromState);
/**
 * Get a value which depends on the current state
 *
 * @category constructors
 * @since 2.0.0
 */

exports.modify = modify;
var gets = /*#__PURE__*/(0, _FromState.gets)(FromState);
/**
 * @category combinators
 * @since 2.11.0
 */

exports.gets = gets;
var fromStateK = /*#__PURE__*/(0, _FromState.fromStateK)(FromState);
/**
 * @category combinators
 * @since 2.11.0
 */

exports.fromStateK = fromStateK;
var chainStateK = /*#__PURE__*/(0, _FromState.chainStateK)(FromState, Chain);
/**
 * @category instances
 * @since 2.10.0
 */

exports.chainStateK = chainStateK;
var Monad = {
  URI: URI,
  map: _map,
  ap: _ap,
  of: of,
  chain: _chain
};
/**
 * @category instances
 * @since 2.10.0
 */

exports.Monad = Monad;
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
 * @since 2.10.0
 */

exports.MonadIO = MonadIO;
var MonadTask = {
  URI: URI,
  map: _map,
  ap: _ap,
  of: of,
  chain: _chain,
  fromIO: fromIO,
  fromTask: fromTask
};
/**
 * @category instances
 * @since 2.10.0
 */

exports.MonadTask = MonadTask;
var MonadThrow = {
  URI: URI,
  map: _map,
  ap: _ap,
  of: of,
  chain: _chain,
  throwError: throwError
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

exports.MonadThrow = MonadThrow;
var chainFirst = /*#__PURE__*/(0, _Chain.chainFirst)(Chain);
/**
 * Less strict version of [`chainFirst`](#chainfirst).
 *
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.8.0
 */

exports.chainFirst = chainFirst;
var chainFirstW = chainFirst;
/**
 * @category instances
 * @since 2.7.0
 */

exports.chainFirstW = chainFirstW;
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
var Alt = {
  URI: URI,
  map: _map,
  alt: _alt
};
/**
 * @category instances
 * @since 2.11.0
 */

exports.Alt = Alt;
var FromReader = {
  URI: URI,
  fromReader: fromReader
};
/**
 * Reads the current context.
 *
 * @category constructors
 * @since 2.11.0
 */

exports.FromReader = FromReader;
var ask = /*#__PURE__*/(0, _FromReader.ask)(FromReader);
/**
 * Projects a value from the global context in a `ReaderEither`.
 *
 * @category constructors
 * @since 2.11.0
 */

exports.ask = ask;
var asks = /*#__PURE__*/(0, _FromReader.asks)(FromReader);
/**
 * @category combinators
 * @since 2.11.0
 */

exports.asks = asks;
var fromReaderK = /*#__PURE__*/(0, _FromReader.fromReaderK)(FromReader);
/**
 * @category combinators
 * @since 2.11.0
 */

exports.fromReaderK = fromReaderK;
var chainReaderK = /*#__PURE__*/(0, _FromReader.chainReaderK)(FromReader, Chain);
/**
 * Less strict version of [`chainReaderK`](#chainReaderK).
 *
 * @category combinators
 * @since 2.11.0
 */

exports.chainReaderK = chainReaderK;
var chainReaderKW = chainReaderK;
/**
 * @category combinators
 * @since 2.11.0
 */

exports.chainReaderKW = chainReaderKW;
var chainFirstReaderK = /*#__PURE__*/(0, _FromReader.chainFirstReaderK)(FromReader, Chain);
/**
 * Less strict version of [`chainFirstReaderK`](#chainFirstReaderK).
 *
 * @category combinators
 * @since 2.11.0
 */

exports.chainFirstReaderK = chainFirstReaderK;
var chainFirstReaderKW = chainFirstReaderK;
/**
 * @category instances
 * @since 2.10.0
 */

exports.chainFirstReaderKW = chainFirstReaderKW;
var FromEither = {
  URI: URI,
  fromEither: fromEither
};
/**
 * @category natural transformations
 * @since 2.0.0
 */

exports.FromEither = FromEither;
var fromOption = /*#__PURE__*/(0, _FromEither.fromOption)(FromEither);
/**
 * @category combinators
 * @since 2.10.0
 */

exports.fromOption = fromOption;
var fromOptionK = /*#__PURE__*/(0, _FromEither.fromOptionK)(FromEither);
/**
 * @category combinators
 * @since 2.10.0
 */

exports.fromOptionK = fromOptionK;
var chainOptionK = /*#__PURE__*/(0, _FromEither.chainOptionK)(FromEither, Chain);
/**
 * @category combinators
 * @since 2.4.0
 */

exports.chainOptionK = chainOptionK;
var chainEitherK = /*#__PURE__*/(0, _FromEither.chainEitherK)(FromEither, Chain);
/**
 * Less strict version of [`chainEitherK`](#chaineitherk).
 *
 * @category combinators
 * @since 2.6.1
 */

exports.chainEitherK = chainEitherK;
var chainEitherKW = chainEitherK;
/**
 * @category constructors
 * @since 2.4.4
 */

exports.chainEitherKW = chainEitherKW;
var fromPredicate = /*#__PURE__*/(0, _FromEither.fromPredicate)(FromEither);
/**
 * @category combinators
 * @since 2.4.4
 */

exports.fromPredicate = fromPredicate;
var filterOrElse = /*#__PURE__*/(0, _FromEither.filterOrElse)(FromEither, Chain);
/**
 * Less strict version of [`filterOrElse`](#filterorelse).
 *
 * @category combinators
 * @since 2.9.0
 */

exports.filterOrElse = filterOrElse;
var filterOrElseW = filterOrElse;
/**
 * @category combinators
 * @since 2.4.0
 */

exports.filterOrElseW = filterOrElseW;
var fromEitherK = /*#__PURE__*/(0, _FromEither.fromEitherK)(FromEither);
/**
 * @category instances
 * @since 2.10.0
 */

exports.fromEitherK = fromEitherK;
var FromIO = {
  URI: URI,
  fromIO: fromIO
};
/**
 * @category combinators
 * @since 2.10.0
 */

exports.FromIO = FromIO;
var fromIOK = /*#__PURE__*/(0, _FromIO.fromIOK)(FromIO);
/**
 * @category combinators
 * @since 2.10.0
 */

exports.fromIOK = fromIOK;
var chainIOK = /*#__PURE__*/(0, _FromIO.chainIOK)(FromIO, Chain);
/**
 * @category combinators
 * @since 2.10.0
 */

exports.chainIOK = chainIOK;
var chainFirstIOK = /*#__PURE__*/(0, _FromIO.chainFirstIOK)(FromIO, Chain);
/**
 * @category instances
 * @since 2.10.0
 */

exports.chainFirstIOK = chainFirstIOK;
var FromTask = {
  URI: URI,
  fromIO: fromIO,
  fromTask: fromTask
};
/**
 * @category combinators
 * @since 2.10.0
 */

exports.FromTask = FromTask;
var fromTaskK = /*#__PURE__*/(0, _FromTask.fromTaskK)(FromTask);
/**
 * @category combinators
 * @since 2.10.0
 */

exports.fromTaskK = fromTaskK;
var chainTaskK = /*#__PURE__*/(0, _FromTask.chainTaskK)(FromTask, Chain);
/**
 * @category combinators
 * @since 2.10.0
 */

exports.chainTaskK = chainTaskK;
var chainFirstTaskK = /*#__PURE__*/(0, _FromTask.chainFirstTaskK)(FromTask, Chain); // -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------

/**
 * Run a computation in the `StateReaderTaskEither` monad, discarding the final state
 *
 * @since 2.8.0
 */

exports.chainFirstTaskK = chainFirstTaskK;
var evaluate = /*#__PURE__*/ST.evaluate(RTE.Functor);
/**
 * Run a computation in the `StateReaderTaskEither` monad discarding the result
 *
 * @since 2.8.0
 */

exports.evaluate = evaluate;
var execute = /*#__PURE__*/ST.execute(RTE.Functor); // -------------------------------------------------------------------------------------
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
var bind = /*#__PURE__*/(0, _Chain.bind)(Chain);
/**
 * @since 2.8.0
 */

exports.bind = bind;
var bindW = bind; // -------------------------------------------------------------------------------------
// pipeable sequence S
// -------------------------------------------------------------------------------------

/**
 * @since 2.8.0
 */

exports.bindW = bindW;
var apS = /*#__PURE__*/(0, _Apply.apS)(Apply);
/**
 * @since 2.8.0
 */

exports.apS = apS;
var apSW = apS; // -------------------------------------------------------------------------------------
// array utils
// -------------------------------------------------------------------------------------

/**
 * Equivalent to `ReadonlyNonEmptyArray#traverseWithIndex(Applicative)`.
 *
 * @since 2.11.0
 */

exports.apSW = apSW;

var traverseReadonlyNonEmptyArrayWithIndex = function traverseReadonlyNonEmptyArrayWithIndex(f) {
  return function (as) {
    return function (s) {
      return function (r) {
        return function () {
          return _.tail(as).reduce(function (acc, a, i) {
            return acc.then(function (ebs) {
              return _.isLeft(ebs) ? acc : f(i + 1, a)(ebs.right[1])(r)().then(function (eb) {
                if (_.isLeft(eb)) {
                  return eb;
                }

                var _eb$right = _slicedToArray(eb.right, 2),
                    b = _eb$right[0],
                    s = _eb$right[1];

                ebs.right[0].push(b);
                ebs.right[1] = s;
                return ebs;
              });
            });
          }, f(0, _.head(as))(s)(r)().then(E.map(function (_ref3) {
            var _ref4 = _slicedToArray(_ref3, 2),
                b = _ref4[0],
                s = _ref4[1];

            return [[b], s];
          })));
        };
      };
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
 * Use small, specific instances instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */

exports.sequenceArray = sequenceArray;
var stateReaderTaskEither = {
  URI: URI,
  map: _map,
  of: of,
  ap: _ap,
  chain: _chain,
  bimap: _bimap,
  mapLeft: _mapLeft,
  alt: _alt,
  fromIO: fromIO,
  fromTask: fromTask,
  throwError: throwError
};
/**
 * Use small, specific instances instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */

exports.stateReaderTaskEither = stateReaderTaskEither;
var stateReaderTaskEitherSeq = {
  URI: URI,
  map: _map,
  of: of,
  ap: _ap,
  chain: _chain,
  bimap: _bimap,
  mapLeft: _mapLeft,
  alt: _alt,
  fromIO: fromIO,
  fromTask: fromTask,
  throwError: throwError
};
/**
 * Use [`evaluate`](#evaluate) instead
 *
 * @since 2.0.0
 * @deprecated
 */

/* istanbul ignore next */

exports.stateReaderTaskEitherSeq = stateReaderTaskEitherSeq;

var evalState = function evalState(fsa, s) {
  return (0, _function.pipe)(fsa(s), RTE.map(function (_ref5) {
    var _ref6 = _slicedToArray(_ref5, 1),
        a = _ref6[0];

    return a;
  }));
};
/**
 * Use [`execute`](#execute) instead
 *
 * @since 2.0.0
 * @deprecated
 */

/* istanbul ignore next */


exports.evalState = evalState;

var execState = function execState(fsa, s) {
  return (0, _function.pipe)(fsa(s), RTE.map(function (_ref7) {
    var _ref8 = _slicedToArray(_ref7, 2),
        _ = _ref8[0],
        s = _ref8[1];

    return s;
  }));
};
/**
 * @since 2.0.0
 * @deprecated
 */

/* istanbul ignore next */


exports.execState = execState;

function run(ma, s, r) {
  return ma(s)(r)();
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mcC10cy9TdGF0ZVJlYWRlclRhc2tFaXRoZXIudHMiXSwibmFtZXMiOlsiUmVhZGVyVGFza0VpdGhlciIsIlJURSIsIkVpdGhlciIsIkUiLCJSZWFkZXIiLCJSIiwibGVmdCIsImUiLCJyaWdodCIsIlNUIiwib2YiLCJQb2ludGVkIiwicmlnaHRUYXNrIiwibWEiLCJmcm9tUmVhZGVyVGFza0VpdGhlciIsImxlZnRUYXNrIiwibWUiLCJyaWdodFJlYWRlciIsImxlZnRSZWFkZXIiLCJyaWdodElPIiwibGVmdElPIiwicmlnaHRTdGF0ZSIsInNhIiwibGVmdFN0YXRlIiwicyIsImZyb21FaXRoZXIiLCJtYXRjaCIsImZyb21SZWFkZXIiLCJmcm9tSU8iLCJmcm9tVGFzayIsImZyb21TdGF0ZSIsImZyb21UYXNrRWl0aGVyIiwiZnJvbUlPRWl0aGVyIiwiZnJvbVJlYWRlckVpdGhlciIsImZyb21GIiwiRnVuY3RvciIsImxvY2FsIiwiZiIsImFza3NTdGF0ZVJlYWRlclRhc2tFaXRoZXJXIiwiciIsImFza3NTdGF0ZVJlYWRlclRhc2tFaXRoZXIiLCJmcm9tSU9FaXRoZXJLIiwiY2hhaW5JT0VpdGhlcktXIiwiY2hhaW5XIiwiY2hhaW5JT0VpdGhlcksiLCJmcm9tVGFza0VpdGhlcksiLCJjaGFpblRhc2tFaXRoZXJLVyIsImNoYWluVGFza0VpdGhlcksiLCJmcm9tUmVhZGVyVGFza0VpdGhlcksiLCJjaGFpblJlYWRlclRhc2tFaXRoZXJLVyIsImNoYWluUmVhZGVyVGFza0VpdGhlcksiLCJfbWFwIiwiZmEiLCJtYXAiLCJfYXAiLCJmYWIiLCJhcCIsIl9jaGFpbiIsImNoYWluIiwiX2FsdCIsInRoYXQiLCJhbHQiLCJfYmltYXAiLCJmZWEiLCJnIiwiYmltYXAiLCJhIiwiX21hcExlZnQiLCJtYXBMZWZ0IiwiQ2hhaW4iLCJhcFciLCJmbGF0dGVuVyIsImlkZW50aXR5IiwiZmxhdHRlbiIsImFsdFciLCJ0aHJvd0Vycm9yIiwiVVJJIiwiZmxhcCIsIkFwcGx5IiwiYXBGaXJzdCIsImFwU2Vjb25kIiwiQXBwbGljYXRpdmUiLCJGcm9tU3RhdGUiLCJnZXQiLCJwdXQiLCJtb2RpZnkiLCJnZXRzIiwiZnJvbVN0YXRlSyIsImNoYWluU3RhdGVLIiwiTW9uYWQiLCJNb25hZElPIiwiTW9uYWRUYXNrIiwiTW9uYWRUaHJvdyIsImNoYWluRmlyc3QiLCJjaGFpbkZpcnN0VyIsIkJpZnVuY3RvciIsIkFsdCIsIkZyb21SZWFkZXIiLCJhc2siLCJhc2tzIiwiZnJvbVJlYWRlcksiLCJjaGFpblJlYWRlcksiLCJjaGFpblJlYWRlcktXIiwiY2hhaW5GaXJzdFJlYWRlcksiLCJjaGFpbkZpcnN0UmVhZGVyS1ciLCJGcm9tRWl0aGVyIiwiZnJvbU9wdGlvbiIsImZyb21PcHRpb25LIiwiY2hhaW5PcHRpb25LIiwiY2hhaW5FaXRoZXJLIiwiY2hhaW5FaXRoZXJLVyIsImZyb21QcmVkaWNhdGUiLCJmaWx0ZXJPckVsc2UiLCJmaWx0ZXJPckVsc2VXIiwiZnJvbUVpdGhlcksiLCJGcm9tSU8iLCJmcm9tSU9LIiwiY2hhaW5JT0siLCJjaGFpbkZpcnN0SU9LIiwiRnJvbVRhc2siLCJmcm9tVGFza0siLCJjaGFpblRhc2tLIiwiY2hhaW5GaXJzdFRhc2tLIiwiZXZhbHVhdGUiLCJleGVjdXRlIiwiYmluZFRvIiwiYmluZCIsImJpbmRXIiwiYXBTIiwiYXBTVyIsInRyYXZlcnNlUmVhZG9ubHlOb25FbXB0eUFycmF5V2l0aEluZGV4IiwiYXMiLCJfIiwidGFpbCIsInJlZHVjZSIsImFjYyIsImkiLCJ0aGVuIiwiZWJzIiwiaXNMZWZ0IiwiZWIiLCJiIiwicHVzaCIsImhlYWQiLCJ0cmF2ZXJzZVJlYWRvbmx5QXJyYXlXaXRoSW5kZXgiLCJpc05vbkVtcHR5IiwiZW1wdHlSZWFkb25seUFycmF5IiwidHJhdmVyc2VBcnJheVdpdGhJbmRleCIsInRyYXZlcnNlQXJyYXkiLCJzZXF1ZW5jZUFycmF5Iiwic3RhdGVSZWFkZXJUYXNrRWl0aGVyIiwic3RhdGVSZWFk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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7Ozs7O0FBQ08sSUFBTXdGLFNBQWlHLEdBQUcsU0FBcEdBLFNBQW9HLENBQy9HRCxHQUQrRyxFQUUvR2pJLENBRitHO0FBQUEsU0FJL0csb0JBQ0VpSSxHQUFHLENBQUNqSSxDQUFELENBREwsRUFFRXZCLEdBQUcsQ0FBQ29ELEdBQUosQ0FBUTtBQUFBO0FBQUEsUUFBRStFLENBQUY7QUFBQSxRQUFLNUcsQ0FBTDs7QUFBQSxXQUFZQSxDQUFaO0FBQUEsR0FBUixDQUZGLENBSitHO0FBQUEsQ0FBMUc7QUFTUDtBQUNBO0FBQ0E7QUFDQTs7QUFDQTs7Ozs7QUFDTyxTQUFTbUksR0FBVCxDQUF5QjlJLEVBQXpCLEVBQWdFVyxDQUFoRSxFQUFzRWUsQ0FBdEUsRUFBd0c7QUFDN0csU0FBTzFCLEVBQUUsQ0FBQ1csQ0FBRCxDQUFGLENBQU1lLENBQU4sR0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuaW1wb3J0IHsgQWx0NCB9IGZyb20gJy4vQWx0J1xuaW1wb3J0IHsgQXBwbGljYXRpdmU0IH0gZnJvbSAnLi9BcHBsaWNhdGl2ZSdcbmltcG9ydCB7IGFwRmlyc3QgYXMgYXBGaXJzdF8sIEFwcGx5NCwgYXBTIGFzIGFwU18sIGFwU2Vjb25kIGFzIGFwU2Vjb25kXyB9IGZyb20gJy4vQXBwbHknXG5pbXBvcnQgeyBCaWZ1bmN0b3I0IH0gZnJvbSAnLi9CaWZ1bmN0b3InXG5pbXBvcnQgeyBiaW5kIGFzIGJpbmRfLCBDaGFpbjQsIGNoYWluRmlyc3QgYXMgY2hhaW5GaXJzdF8gfSBmcm9tICcuL0NoYWluJ1xuaW1wb3J0ICogYXMgRSBmcm9tICcuL0VpdGhlcidcbmltcG9ydCB7IEVuZG9tb3JwaGlzbSB9IGZyb20gJy4vRW5kb21vcnBoaXNtJ1xuaW1wb3J0IHtcbiAgY2hhaW5FaXRoZXJLIGFzIGNoYWluRWl0aGVyS18sXG4gIGNoYWluT3B0aW9uSyBhcyBjaGFpbk9wdGlvbktfLFxuICBmaWx0ZXJPckVsc2UgYXMgZmlsdGVyT3JFbHNlXyxcbiAgRnJvbUVpdGhlcjQsXG4gIGZyb21FaXRoZXJLIGFzIGZyb21FaXRoZXJLXyxcbiAgZnJvbU9wdGlvbiBhcyBmcm9tT3B0aW9uXyxcbiAgZnJvbU9wdGlvbksgYXMgZnJvbU9wdGlvbktfLFxuICBmcm9tUHJlZGljYXRlIGFzIGZyb21QcmVkaWNhdGVfXG59IGZyb20gJy4vRnJvbUVpdGhlcidcbmltcG9ydCB7IGNoYWluRmlyc3RJT0sgYXMgY2hhaW5GaXJzdElPS18sIGNoYWluSU9LIGFzIGNoYWluSU9LXywgRnJvbUlPNCwgZnJvbUlPSyBhcyBmcm9tSU9LXyB9IGZyb20gJy4vRnJvbUlPJ1xuaW1wb3J0IHtcbiAgYXNrIGFzIGFza18sXG4gIGFza3MgYXMgYXNrc18sXG4gIGNoYWluRmlyc3RSZWFkZXJLIGFzIGNoYWluRmlyc3RSZWFkZXJLXyxcbiAgY2hhaW5SZWFkZXJLIGFzIGNoYWluUmVhZGVyS18sXG4gIEZyb21SZWFkZXI0LFxuICBmcm9tUmVhZGVySyBhcyBmcm9tUmVhZGVyS19cbn0gZnJvbSAnLi9Gcm9tUmVhZGVyJ1xuaW1wb3J0IHtcbiAgY2hhaW5TdGF0ZUsgYXMgY2hhaW5TdGF0ZUtfLFxuICBGcm9tU3RhdGU0LFxuICBmcm9tU3RhdGVLIGFzIGZyb21TdGF0ZUtfLFxuICBnZXQgYXMgZ2V0XyxcbiAgZ2V0cyBhcyBnZXRzXyxcbiAgbW9kaWZ5IGFzIG1vZGlmeV8sXG4gIHB1dCBhcyBwdXRfXG59IGZyb20gJy4vRnJvbVN0YXRlJ1xuaW1wb3J0IHtcbiAgY2hhaW5GaXJzdFRhc2tLIGFzIGNoYWluRmlyc3RUYXNrS18sXG4gIGNoYWluVGFza0sgYXMgY2hhaW5UYXNrS18sXG4gIEZyb21UYXNrNCxcbiAgZnJvbVRhc2tLIGFzIGZyb21UYXNrS19cbn0gZnJvbSAnLi9Gcm9tVGFzaydcbmltcG9ydCB7IGZsb3csIGlkZW50aXR5LCBMYXp5LCBwaXBlIH0gZnJvbSAnLi9mdW5jdGlvbidcbmltcG9ydCB7IGJpbmRUbyBhcyBiaW5kVG9fLCBmbGFwIGFzIGZsYXBfLCBGdW5jdG9yNCB9IGZyb20gJy4vRnVuY3RvcidcbmltcG9ydCAqIGFzIF8gZnJvbSAnLi9pbnRlcm5hbCdcbmltcG9ydCB7IElPIH0gZnJvbSAnLi9JTydcbmltcG9ydCB7IElPRWl0aGVyLCBVUkkgYXMgSUVVUkkgfSBmcm9tICcuL0lPRWl0aGVyJ1xuaW1wb3J0IHsgTW9uYWQ0IH0gZnJvbSAnLi9Nb25hZCdcbmltcG9ydCB7IE1vbmFkSU80IH0gZnJvbSAnLi9Nb25hZElPJ1xuaW1wb3J0IHsgTW9uYWRUYXNrNCB9IGZyb20gJy4vTW9uYWRUYXNrJ1xuaW1wb3J0IHsgTW9uYWRUaHJvdzQgfSBmcm9tICcuL01vbmFkVGhyb3cnXG5pbXBvcnQgeyBOYXR1cmFsVHJhbnNmb3JtYXRpb24xNEMsIE5hdHVyYWxUcmFuc2Zvcm1hdGlvbjI0LCBOYXR1cmFsVHJhbnNmb3JtYXRpb24zNCB9IGZyb20gJy4vTmF0dXJhbFRyYW5zZm9ybWF0aW9uJ1xuaW1wb3J0IHsgTm9uRW1wdHlBcnJheSB9IGZyb20gJy4vTm9uRW1wdHlBcnJheSdcbmltcG9ydCB7IFVSSSBhcyBPVVJJIH0gZnJvbSAnLi9PcHRpb24nXG5pbXBvcnQgeyBQb2ludGVkNCB9IGZyb20gJy4vUG9pbnRlZCdcbmltcG9ydCB7IFByZWRpY2F0ZSB9IGZyb20gJy4vUHJlZGljYXRlJ1xuaW1wb3J0ICogYXMgUiBmcm9tICcuL1JlYWRlcidcbmltcG9ydCB7IFVSSSBhcyBSRVVSSSB9IGZyb20gJy4vUmVhZGVyRWl0aGVyJ1xuaW1wb3J0ICogYXMgUlRFIGZyb20gJy4vUmVhZGVyVGFza0VpdGhlcidcbmltcG9ydCB7IFJlYWRvbmx5Tm9uRW1wdHlBcnJheSB9IGZyb20gJy4vUmVhZG9ubHlOb25FbXB0eUFycmF5J1xuaW1wb3J0IHsgUmVmaW5lbWVudCB9IGZyb20gJy4vUmVmaW5lbWVudCdcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi9TdGF0ZSdcbmltcG9ydCAqIGFzIFNUIGZyb20gJy4vU3RhdGVUJ1xuaW1wb3J0IHsgVGFzayB9IGZyb20gJy4vVGFzaydcbmltcG9ydCB7IFRhc2tFaXRoZXIsIFVSSSBhcyBURVVSSSB9IGZyb20gJy4vVGFza0VpdGhlcidcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gbW9kZWxcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IFJlYWRlclRhc2tFaXRoZXIgPSBSVEUuUmVhZGVyVGFza0VpdGhlclxuaW1wb3J0IEVpdGhlciA9IEUuRWl0aGVyXG5pbXBvcnQgUmVhZGVyID0gUi5SZWFkZXJcblxuLyoqXG4gKiBAY2F0ZWdvcnkgbW9kZWxcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlUmVhZGVyVGFza0VpdGhlcjxTLCBSLCBFLCBBPiB7XG4gIChzOiBTKTogUmVhZGVyVGFza0VpdGhlcjxSLCBFLCBbQSwgU10+XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGNvbnN0cnVjdG9yc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb25zdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgbGVmdDogPFMsIFIsIEUgPSBuZXZlciwgQSA9IG5ldmVyPihlOiBFKSA9PiBTdGF0ZVJlYWRlclRhc2tFaXRoZXI8UywgUiwgRSwgQT4gPSAoZSkgPT4gKCkgPT4gUlRFLmxlZnQoZSlcblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29uc3RydWN0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHJpZ2h0OiA8UywgUiwgRSA9IG5ldmVyLCBBID0gbmV2ZXI+KGE6IEEpID0+IFN0YXRlUmVhZGVyVGFza0VpdGhlcjxTLCBSLCBFLCBBPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgU1Qub2YoUlRFLlBvaW50ZWQpXG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbnN0cnVjdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByaWdodFRhc2s8UywgUiwgRSA9IG5ldmVyLCBBID0gbmV2ZXI+KG1hOiBUYXNrPEE+KTogU3RhdGVSZWFkZXJUYXNrRWl0aGVyPFMsIFIsIEUsIEE+IHtcbiAgcmV0dXJuIGZyb21SZWFkZXJUYXNrRWl0aGVyKFJURS5yaWdodFRhc2sobWEpKVxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb25zdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gbGVmdFRhc2s8UywgUiwgRSA9IG5ldmVyLCBBID0gbmV2ZXI+KG1lOiBUYXNrPEU+KTogU3RhdGVSZWFkZXJUYXNrRWl0aGVyPFMsIFIsIEUsIEE+IHtcbiAgcmV0dXJuIGZyb21SZWFkZXJUYXNrRWl0aGVyKFJURS5sZWZ0VGFzayhtZSkpXG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbnN0cnVjdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByaWdodFJlYWRlcjxTLCBSLCBFID0gbmV2ZXIsIEEgPSBuZXZlcj4obWE6IFJlYWRlcjxSLCBBPik6IFN0YXRlUmVhZGVyVGFza0VpdGhlcjxTLCBSLCBFLCBBPiB7XG4gIHJldHVybiBmcm9tUmVhZGVyVGFza0VpdGhlcihSVEUucmlnaHRSZWFkZXIobWEpKVxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb25zdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gbGVmdFJlYWRlcjxTLCBSLCBFID0gbmV2ZXIsIEEgPSBuZXZlcj4obWU6IFJlYWRlcjxSLCBFPik6IFN0YXRlUmVhZGVyVGFza0VpdGhlcjxTLCBSLCBFLCBBPiB7XG4gIHJldHVybiBmcm9tUmVhZGVyVGFza0VpdGhlcihSVEUubGVmdFJlYWRlcihtZSkpXG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbnN0cnVjdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByaWdodElPPFMsIFIsIEUgPSBuZXZlciwgQSA9IG5ldmVyPihtYTogSU88QT4pOiBTdGF0ZVJlYWRlclRhc2tFaXRoZXI8UywgUiwgRSwgQT4ge1xuICByZXR1cm4gZnJvbVJlYWRlclRhc2tFaXRoZXIoUlRFLnJpZ2h0SU8obWEpKVxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb25zdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gbGVmdElPPFMsIFIsIEUgPSBuZXZlciwgQSA9IG5ldmVyPihtZTogSU88RT4pOiBTdGF0ZVJlYWRlclRhc2tFaXRoZXI8UywgUiwgRSwgQT4ge1xuICByZXR1cm4gZnJvbVJlYWRlclRhc2tFaXRoZXIoUlRFLmxlZnRJTyhtZSkpXG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbnN0cnVjdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCByaWdodFN0YXRlOiA8UywgUiwgRSA9IG5ldmVyLCBBID0gbmV2ZXI+KG1hOiBTdGF0ZTxTLCBBPikgPT4gU3RhdGVSZWFkZXJUYXNrRWl0aGVyPFMsIFIsIEUsIEE+ID0gKHNhKSA9PlxuICBmbG93KHNhLCBSVEUucmlnaHQpXG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbnN0cnVjdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBsZWZ0U3RhdGU6IDxTLCBSLCBFID0gbmV2ZXIsIEEgPSBuZXZlcj4obWU6IFN0YXRlPFMsIEU+KSA9PiBTdGF0ZVJlYWRlclRhc2tFaXRoZXI8UywgUiwgRSwgQT4gPSAobWUpID0+IChcbiAgc1xuKSA9PiBSVEUubGVmdChtZShzKVswXSlcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gbmF0dXJhbCB0cmFuc2Zvcm1hdGlvbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgbmF0dXJhbCB0cmFuc2Zvcm1hdGlvbnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgZnJvbUVpdGhlcjogRnJvbUVpdGhlcjQ8VVJJPlsnZnJvbUVpdGhlciddID1cbiAgLyojX19QVVJFX18qL1xuICBFLm1hdGNoKChlKSA9PiBsZWZ0KGUpLCByaWdodClcblxuLyoqXG4gKiBAY2F0ZWdvcnkgbmF0dXJhbCB0cmFuc2Zvcm1hdGlvbnNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZyb21SZWFkZXI6IEZyb21SZWFkZXI0PFVSST5bJ2Zyb21SZWFkZXInXSA9IHJpZ2h0UmVhZGVyXG5cbi8qKlxuICogQGNhdGVnb3J5IG5hdHVyYWwgdHJhbnNmb3JtYXRpb25zXG4gKiBAc2luY2UgMi43LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZyb21JTzogRnJvbUlPNDxVUkk+Wydmcm9tSU8nXSA9IHJpZ2h0SU9cblxuLyoqXG4gKiBAY2F0ZWdvcnkgbmF0dXJhbCB0cmFuc2Zvcm1hdGlvbnNcbiAqIEBzaW5jZSAyLjcuMFxuICovXG5leHBvcnQgY29uc3QgZnJvbVRhc2s6IEZyb21UYXNrNDxVUkk+Wydmcm9tVGFzayddID0gcmlnaHRUYXNrXG5cbi8qKlxuICogQGNhdGVnb3J5IG5hdHVyYWwgdHJhbnNmb3JtYXRpb25zXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBmcm9tU3RhdGU6IEZyb21TdGF0ZTQ8VVJJPlsnZnJvbVN0YXRlJ10gPVxuICAvKiNfX1BVUkVfXyovXG4gIFNULmZyb21TdGF0ZShSVEUuUG9pbnRlZClcblxuLyoqXG4gKiBAY2F0ZWdvcnkgbmF0dXJhbCB0cmFuc2Zvcm1hdGlvbnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgZnJvbVRhc2tFaXRoZXI6IE5hdHVyYWxUcmFuc2Zvcm1hdGlvbjI0PFRFVVJJLCBVUkk+ID0gKG1hKSA9PiBmcm9tUmVhZGVyVGFza0VpdGhlcihSVEUuZnJvbVRhc2tFaXRoZXIobWEpKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBuYXR1cmFsIHRyYW5zZm9ybWF0aW9uc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBmcm9tSU9FaXRoZXI6IE5hdHVyYWxUcmFuc2Zvcm1hdGlvbjI0PElFVVJJLCBVUkk+ID0gKG1hKSA9PiBmcm9tUmVhZGVyVGFza0VpdGhlcihSVEUuZnJvbUlPRWl0aGVyKG1hKSlcblxuLyoqXG4gKiBAY2F0ZWdvcnkgbmF0dXJhbCB0cmFuc2Zvcm1hdGlvbnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgZnJvbVJlYWRlckVpdGhlcjogTmF0dXJhbFRyYW5zZm9ybWF0aW9uMzQ8UkVVUkksIFVSST4gPSAobWEpID0+XG4gIGZyb21SZWFkZXJUYXNrRWl0aGVyKFJURS5mcm9tUmVhZGVyRWl0aGVyKG1hKSlcblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29uc3RydWN0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZyb21SZWFkZXJUYXNrRWl0aGVyOiBOYXR1cmFsVHJhbnNmb3JtYXRpb24zNDxSVEUuVVJJLCBVUkk+ID1cbiAgLyojX19QVVJFX18qL1xuICBTVC5mcm9tRihSVEUuRnVuY3RvcilcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gY29tYmluYXRvcnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBDaGFuZ2VzIHRoZSB2YWx1ZSBvZiB0aGUgbG9jYWwgY29udGV4dCBkdXJpbmcgdGhlIGV4ZWN1dGlvbiBvZiB0aGUgYWN0aW9uIGBtYWAgKHNpbWlsYXIgdG8gYENvbnRyYXZhcmlhbnRgJ3NcbiAqIGBjb250cmFtYXBgKS5cbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGxvY2FsID0gPFIyLCBSMT4oZjogKHIyOiBSMikgPT4gUjEpID0+IDxTLCBFLCBBPihcbiAgbWE6IFN0YXRlUmVhZGVyVGFza0VpdGhlcjxTLCBSMSwgRSwgQT5cbik6IFN0YXRlUmVhZGVyVGFza0VpdGhlcjxTLCBSMiwgRSwgQT4gPT4gZmxvdyhtYSwgUi5sb2NhbChmKSlcblxuLyoqXG4gKiBMZXNzIHN0cmljdCB2ZXJzaW9uIG9mIFtgYXNrc1N0YXRlUmVhZGVyVGFza0VpdGhlcmBdKCNhc2tzc3RhdGVyZWFkZXJ0YXNrZWl0aGVyKS5cbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGFza3NTdGF0ZVJlYWRlclRhc2tFaXRoZXJXID0gPFIxLCBTLCBSMiwgRSwgQT4oXG4gIGY6IChyMTogUjEpID0+IFN0YXRlUmVhZGVyVGFza0VpdGhlcjxTLCBSMiwgRSwgQT5cbik6IFN0YXRlUmVhZGVyVGFza0VpdGhlcjxTLCBSMSAmIFIyLCBFLCBBPiA9PiAocykgPT4gKHIpID0+IGYocikocykocilcblxuLyoqXG4gKiBFZmZlY3RmdWxseSBhY2Nlc3NlcyB0aGUgZW52aXJvbm1lbnQuXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBhc2tzU3RhdGVSZWFkZXJUYXNrRWl0aGVyOiA8UiwgUywgRSwgQT4oXG4gIGY6IChyOiBSKSA9PiBTdGF0ZVJlYWRlclRhc2tFaXRoZXI8UywgUiwgRSwgQT5cbikgPT4gU3RhdGVSZWFkZXJUYXNrRWl0aGVyPFMsIFIsIEUsIEE+ID0gYXNrc1N0YXRlUmVhZGVyVGFza0VpdGhlcldcblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjQuMFxuICovXG5leHBvcnQgY29uc3QgZnJvbUlPRWl0aGVySyA9IDxFLCBBIGV4dGVuZHMgUmVhZG9ubHlBcnJheTx1bmtub3duPiwgQj4oXG4gIGY6ICguLi5hOiBBKSA9PiBJT0VpdGhlcjxFLCBCPlxuKTogKDxTLCBSPiguLi5hOiBBKSA9PiBTdGF0ZVJlYWRlclRhc2tFaXRoZXI8UywgUiwgRSwgQj4pID0+ICguLi5hKSA9PiBmcm9tSU9FaXRoZXIoZiguLi5hKSlcblxuLyoqXG4gKiBMZXNzIHN0cmljdCB2ZXJzaW9uIG9mIFtgY2hhaW5JT0VpdGhlcktgXSgjY2hhaW5pb2VpdGhlcmspLlxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuNi4xXG4gKi9cbmV4cG9ydCBjb25zdCBjaGFpbklPRWl0aGVyS1cgPSA8RTIsIEEsIEI+KGY6IChhOiBBKSA9PiBJT0VpdGhlcjxFMiwgQj4pID0+IDxTLCBSLCBFMT4oXG4gIG1hOiBTdGF0ZVJlYWRlclRhc2tFaXRoZXI8UywgUiwgRTEsIEE+XG4pOiBTdGF0ZVJlYWRlclRhc2tFaXRoZXI8UywgUiwgRTEgfCBFMiwgQj4gPT4gcGlwZShtYSwgY2hhaW5XPFMsIFIsIEUyLCBBLCBCPihmcm9tSU9FaXRoZXJLKGYpKSlcblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjQuMFxuICovXG5leHBvcnQgY29uc3QgY2hhaW5JT0VpdGhlcks6IDxFLCBBLCBCPihcbiAgZjogKGE6IEEpID0+IElPRWl0aGVyPEUsIEI+XG4pID0+IDxTLCBSPihtYTogU3RhdGVSZWFkZXJUYXNrRWl0aGVyPFMsIFIsIEUsIEE+KSA9PiBTdGF0ZVJlYWRlclRhc2tFaXRoZXI8UywgUiwgRSwgQj4gPSBjaGFpbklPRWl0aGVyS1dcblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjQuMFxuICovXG5leHBvcnQgY29uc3QgZnJvbVRhc2tFaXRoZXJLID0gPEUsIEEgZXh0ZW5kcyBSZWFkb25seUFycmF5PHVua25vd24+LCBCPihcbiAgZjogKC4uLmE6IEEpID0+IFRhc2tFaXRoZXI8RSwgQj5cbik6ICg8UywgUj4oLi4uYTogQSkgPT4gU3RhdGVSZWFkZXJUYXNrRWl0aGVyPFMsIFIsIEUsIEI+KSA9PiAoLi4uYSkgPT4gZnJvbVRhc2tFaXRoZXIoZiguLi5hKSlcblxuLyoqXG4gKiBMZXNzIHN0cmljdCB2ZXJzaW9uIG9mIFtgY2hhaW5UYXNrRWl0aGVyS2BdKCNjaGFpbnRhc2tlaXRoZXJrKS5cbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjYuMVxuICovXG5leHBvcnQgY29uc3QgY2hhaW5UYXNrRWl0aGVyS1cgPSA8RTIsIEEsIEI+KGY6IChhOiBBKSA9PiBUYXNrRWl0aGVyPEUyLCBCPikgPT4gPFMsIFIsIEUxPihcbiAgbWE6IFN0YXRlUmVhZGVyVGFza0VpdGhlcjxTLCBSLCBFMSwgQT5cbik6IFN0YXRlUmVhZGVyVGFza0VpdGhlcjxTLCBSLCBFMSB8IEUyLCBCPiA9PiBwaXBlKG1hLCBjaGFpblc8UywgUiwgRTIsIEEsIEI+KGZyb21UYXNrRWl0aGVySyhmKSkpXG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi40LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGNoYWluVGFza0VpdGhlcks6IDxFLCBBLCBCPihcbiAgZjogKGE6IEEpID0+IFRhc2tFaXRoZXI8RSwgQj5cbikgPT4gPFMsIFI+KG1hOiBTdGF0ZVJlYWRlclRhc2tFaXRoZXI8UywgUiwgRSwgQT4pID0+IFN0YXRlUmVhZGVyVGFza0VpdGhlcjxTLCBSLCBFLCBCPiA9IGNoYWluVGFza0VpdGhlcktXXG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi40LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZyb21SZWFkZXJUYXNrRWl0aGVySyA9IDxSLCBFLCBBIGV4dGVuZHMgUmVhZG9ubHlBcnJheTx1bmtub3duPiwgQj4oXG4gIGY6ICguLi5hOiBBKSA9PiBSZWFkZXJUYXNrRWl0aGVyPFIsIEUsIEI+XG4pOiAoPFM+KC4uLmE6IEEpID0+IFN0YXRlUmVhZGVyVGFza0VpdGhlcjxTLCBSLCBFLCBCPikgPT4gKC4uLmEpID0+IGZyb21SZWFkZXJUYXNrRWl0aGVyKGYoLi4uYSkpXG5cbi8qKlxuICogTGVzcyBzdHJpY3QgdmVyc2lvbiBvZiBbYGNoYWluUmVhZGVyVGFza0VpdGhlcktgXSgjY2hhaW5yZWFkZXJ0YXNrZWl0aGVyaykuXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi42LjFcbiAqL1xuZXhwb3J0IGNvbnN0IGNoYWluUmVhZGVyVGFza0VpdGhlcktXID0gPFIsIEUyLCBBLCBCPihmOiAoYTogQSkgPT4gUmVhZGVyVGFza0VpdGhlcjxSLCBFMiwgQj4pID0+IDxTLCBFMT4oXG4gIG1hOiBTdGF0ZVJlYWRlclRhc2tFaXRoZXI8UywgUiwgRTEsIEE+XG4pOiBTdGF0ZVJlYWRlclRhc2tFaXRoZXI8UywgUiwgRTEgfCBFMiwgQj4gPT4gcGlwZShtYSwgY2hhaW5XPFMsIFIsIEUyLCBBLCBCPihmcm9tUmVhZGVyVGFza0VpdGhlcksoZikpKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuNC4wXG4gKi9cbmV4cG9ydCBjb25zdCBjaGFpblJlYWRlclRhc2tFaXRoZXJLOiA8UiwgRSwgQSwgQj4oXG4gIGY6IChhOiBBKSA9PiBSZWFkZXJUYXNrRWl0aGVyPFIsIEUsIEI+XG4pID0+IDxTPihtYTogU3RhdGVSZWFkZXJUYXNrRWl0aGVyPFMsIFIsIEUsIEE+KSA9PiBTdGF0ZVJlYWRlclRhc2tFaXRoZXI8UywgUiwgRSwgQj4gPSBjaGFpblJlYWRlclRhc2tFaXRoZXJLV1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBub24tcGlwZWFibGVzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5jb25zdCBfbWFwOiBNb25hZDQ8VVJJPlsnbWFwJ10gPSAoZmEsIGYpID0+IHBpcGUoZmEsIG1hcChmKSlcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5jb25zdCBfYXA6IE1vbmFkNDxVUkk+WydhcCddID0gKGZhYiwgZmEpID0+IHBpcGUoZmFiLCBhcChmYSkpXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuY29uc3QgX2NoYWluOiBNb25hZDQ8VVJJPlsnY2hhaW4nXSA9IChtYSwgZikgPT4gcGlwZShtYSwgY2hhaW4oZikpXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuY29uc3QgX2FsdDogPFMsIFIsIEUsIEE+KFxuICBmYTogU3RhdGVSZWFkZXJUYXNrRWl0aGVyPFMsIFIsIEUsIEE+LFxuICB0aGF0OiBMYXp5PFN0YXRlUmVhZGVyVGFza0VpdGhlcjxTLCBSLCBFLCBBPj5cbikgPT4gU3RhdGVSZWFkZXJUYXNrRWl0aGVyPFMsIFIsIEUsIEE+ID0gKGZhLCB0aGF0KSA9PiAocykgPT5cbiAgcGlwZShcbiAgICBmYShzKSxcbiAgICBSVEUuYWx0KCgpID0+IHRoYXQoKShzKSlcbiAgKVxuY29uc3QgX2JpbWFwOiA8UywgUiwgRSwgQSwgRywgQj4oXG4gIGZlYTogU3RhdGVSZWFkZXJUYXNrRWl0aGVyPFMsIFIsIEUsIEE+LFxuICBmOiAoZTogRSkgPT4gRyxcbiAgZzogKGE6IEEpID0+IEJcbikgPT4gU3RhdGVSZWFkZXJUYXNrRWl0aGVyPFMsIFIsIEcsIEI+ID0gKGZlYSwgZiwgZykgPT4gKHMpID0+XG4gIHBpcGUoXG4gICAgZmVhKHMpLFxuICAgIFJURS5iaW1hcChmLCAoW2EsIHNdKSA9PiBbZyhhKSwgc10pXG4gIClcbmNvbnN0IF9tYXBMZWZ0OiA8UywgUiwgRSwgQSwgRz4oXG4gIGZlYTogU3RhdGVSZWFkZXJUYXNrRWl0aGVyPFMsIFIsIEUsIEE+LFxuICBmOiAoZTogRSkgPT4gR1xuKSA9PiBTdGF0ZVJlYWRlclRhc2tFaXRoZXI8UywgUiwgRywgQT4gPSAoZmVhLCBmKSA9PiAocykgPT4gcGlwZShmZWEocyksIFJURS5tYXBMZWZ0KGYpKVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyB0eXBlIGNsYXNzIG1lbWJlcnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBgbWFwYCBjYW4gYmUgdXNlZCB0byB0dXJuIGZ1bmN0aW9ucyBgKGE6IEEpID0+IEJgIGludG8gZnVuY3Rpb25zIGAoZmE6IEY8QT4pID0+IEY8Qj5gIHdob3NlIGFyZ3VtZW50IGFuZCByZXR1cm4gdHlwZXNcbiAqIHVzZSB0aGUgdHlwZSBjb25zdHJ1Y3RvciBgRmAgdG8gcmVwcmVzZW50IHNvbWUgY29tcHV0YXRpb25hbCBjb250ZXh0LlxuICpcbiAqIEBjYXRlZ29yeSBGdW5jdG9yXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IG1hcDogPEEsIEI+KFxuICBmOiAoYTogQSkgPT4gQlxuKSA9PiA8UywgUiwgRT4oZmE6IFN0YXRlUmVhZGVyVGFza0VpdGhlcjxTLCBSLCBFLCBBPikgPT4gU3RhdGVSZWFkZXJUYXNrRWl0aGVyPFMsIFIsIEUsIEI+ID1cbiAgLyojX19QVVJFX18qL1xuICBTVC5tYXAoUlRFLkZ1bmN0b3IpXG5cbi8qKlxuICogTWFwIGEgcGFpciBvZiBmdW5jdGlvbnMgb3ZlciB0aGUgdHdvIGxhc3QgdHlwZSBhcmd1bWVudHMgb2YgdGhlIGJpZnVuY3Rvci5cbiAqXG4gKiBAY2F0ZWdvcnkgQmlmdW5jdG9yXG4gKiBAc2luY2UgMi42LjJcbiAqL1xuZXhwb3J0IGNvbnN0IGJpbWFwOiA8RSwgRywgQSwgQj4oXG4gIGY6IChlOiBFKSA9PiBHLFxuICBnOiAoYTogQSkgPT4gQlxuKSA9PiA8UywgUj4oZmE6IFN0YXRlUmVhZGVyVGFza0VpdGhlcjxTLCBSLCBFLCBBPikgPT4gU3RhdGVSZWFkZXJUYXNrRWl0aGVyPFMsIFIsIEcsIEI+ID0gKGYsIGcpID0+IChmYSkgPT5cbiAgX2JpbWFwKGZhLCBmLCBnKVxuXG4vKipcbiAqIE1hcCBhIGZ1bmN0aW9uIG92ZXIgdGhlIHRoaXJkIHR5cGUgYXJndW1lbnQgb2YgYSBiaWZ1bmN0b3IuXG4gKlxuICogQGNhdGVnb3J5IEJpZnVuY3RvclxuICogQHNpbmNlIDIuNi4yXG4gKi9cbmV4cG9ydCBjb25zdCBtYXBMZWZ0OiA8RSwgRz4oXG4gIGY6IChlOiBFKSA9PiBHXG4pID0+IDxTLCBSLCBBPihmYTogU3RhdGVSZWFkZXJUYXNrRWl0aGVyPFMsIFIsIEUsIEE+KSA9PiBTdGF0ZVJlYWRlclRhc2tFaXRoZXI8UywgUiwgRywgQT4gPSAoZikgPT4gKGZhKSA9PlxuICBfbWFwTGVmdChmYSwgZilcblxuLyoqXG4gKiBBcHBseSBhIGZ1bmN0aW9uIHRvIGFuIGFyZ3VtZW50IHVuZGVyIGEgdHlwZSBjb25zdHJ1Y3Rvci5cbiAqXG4gKiBAY2F0ZWdvcnkgQXBwbHlcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgYXA6IDxTLCBSLCBFLCBBPihcbiAgZmE6IFN0YXRlUmVhZGVyVGFza0VpdGhlcjxTLCBSLCBFLCBBPlxuKSA9PiA8Qj4oZmFiOiBTdGF0ZVJlYWRlclRhc2tFaXRoZXI8UywgUiwgRSwgKGE6IEEpID0+IEI+KSA9PiBTdGF0ZVJlYWRlclRhc2tFaXRoZXI8UywgUiwgRSwgQj4gPVxuICAvKiNfX1BVUkVfXyovXG4gIFNULmFwKFJURS5DaGFpbilcblxuLyoqXG4gKiBMZXNzIHN0cmljdCB2ZXJzaW9uIG9mIFtgYXBgXSgjYXApLlxuICpcbiAqIEBjYXRlZ29yeSBBcHBseVxuICogQHNpbmNlIDIuOC4wXG4gKi9cbmV4cG9ydCBjb25zdCBhcFc6IDxTLCBSMiwgRTIsIEE+KFxuICBmYTogU3RhdGVSZWFkZXJUYXNrRWl0aGVyPFMsIFIyLCBFMiwgQT5cbikgPT4gPFIxLCBFMSwgQj4oXG4gIGZhYjogU3RhdGVSZWFkZXJUYXNrRWl0aGVyPFMsIFIxLCBFMSwgKGE6IEEpID0+IEI+XG4pID0+IFN0YXRlUmVhZGVyVGFza0VpdGhlcjxTLCBSMSAmIFIyLCBFMSB8IEUyLCBCPiA9IGFwIGFzIGFueVxuXG4vKipcbiAqIEBjYXRlZ29yeSBQb2ludGVkXG4gKiBAc2luY2UgMi43LjBcbiAqL1xuZXhwb3J0IGNvbnN0IG9mOiA8UywgUiwgRSA9IG5ldmVyLCBBID0gbmV2ZXI+KGE6IEEpID0+IFN0YXRlUmVhZGVyVGFza0VpdGhlcjxTLCBSLCBFLCBBPiA9IHJpZ2h0XG5cbi8qKlxuICogQ29tcG9zZXMgY29tcHV0YXRpb25zIGluIHNlcXVlbmNlLCB1c2luZyB0aGUgcmV0dXJuIHZhbHVlIG9mIG9uZSBjb21wdXRhdGlvbiB0byBkZXRlcm1pbmUgdGhlIG5leHQgY29tcHV0YXRpb24uXG4gKlxuICogQGNhdGVnb3J5IE1vbmFkXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGNoYWluOiA8UywgUiwgRSwgQSwgQj4oXG4gIGY6IChhOiBBKSA9PiBTdGF0ZVJlYWRlclRhc2tFaXRoZXI8UywgUiwgRSwgQj5cbikgPT4gKG1hOiBTdGF0ZVJlYWRlclRhc2tFaXRoZXI8UywgUiwgRSwgQT4pID0+IFN0YXRlUmVhZGVyVGFza0VpdGhlcjxTLCBSLCBFLCBCPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgU1QuY2hhaW4oUlRFLkNoYWluKVxuXG4vKipcbiAqIExlc3Mgc3RyaWN0IHZlcnNpb24gb2YgW2BjaGFpbmBdKCNjaGFpbikuXG4gKlxuICogQGNhdGVnb3J5IE1vbmFkXG4gKiBAc2luY2UgMi42LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGNoYWluVzogPFMsIFIyLCBFMiwgQSwgQj4oXG4gIGY6IChhOiBBKSA9PiBTdGF0ZVJlYWRlclRhc2tFaXRoZXI8UywgUjIsIEUyLCBCPlxuKSA9PiA8UjEsIEUxPihtYTogU3RhdGVSZWFkZXJUYXNrRWl0aGVyPFMsIFIxLCBFMSwgQT4pID0+IFN0YXRlUmVhZGVyVGFza0VpdGhlcjxTLCBSMSAmIFIyLCBFMSB8IEUyLCBCPiA9IGNoYWluIGFzIGFueVxuXG4vKipcbiAqIExlc3Mgc3RyaWN0IHZlcnNpb24gb2YgW2BmbGF0dGVuYF0oI2ZsYXR0ZW4pLlxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgZmxhdHRlblc6IDxTLCBSMSwgRTEsIFIyLCBFMiwgQT4oXG4gIG1tYTogU3RhdGVSZWFkZXJUYXNrRWl0aGVyPFMsIFIxLCBFMSwgU3RhdGVSZWFkZXJUYXNrRWl0aGVyPFMsIFIyLCBFMiwgQT4+XG4pID0+IFN0YXRlUmVhZGVyVGFza0VpdGhlcjxTLCBSMSAmIFIyLCBFMSB8IEUyLCBBPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgY2hhaW5XKGlkZW50aXR5KVxuXG4vKipcbiAqIERlcml2YWJsZSBmcm9tIGBDaGFpbmAuXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZsYXR0ZW46IDxTLCBSLCBFLCBBPihcbiAgbW1hOiBTdGF0ZVJlYWRlclRhc2tFaXRoZXI8UywgUiwgRSwgU3RhdGVSZWFkZXJUYXNrRWl0aGVyPFMsIFIsIEUsIEE+PlxuKSA9PiBTdGF0ZVJlYWRlclRhc2tFaXRoZXI8UywgUiwgRSwgQT4gPSBmbGF0dGVuV1xuXG4vKipcbiAqIExlc3Mgc3RyaWN0IHZlcnNpb24gb2YgW2BhbHRgXSgjYWx0KS5cbiAqXG4gKiBAY2F0ZWdvcnkgQWx0XG4gKiBAc2luY2UgMi45LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGFsdFcgPSA8UywgUjIsIEUyLCBCPih0aGF0OiAoKSA9PiBTdGF0ZVJlYWRlclRhc2tFaXRoZXI8UywgUjIsIEUyLCBCPikgPT4gPFIxLCBFMSwgQT4oXG4gIGZhOiBTdGF0ZVJlYWRlclRhc2tFaXRoZXI8UywgUjEsIEUxLCBBPlxuKTogU3RhdGVSZWFkZXJUYXNrRWl0aGVyPFMsIFIxICYgUjIsIEUyLCBBIHwgQj4gPT4gKHIpID0+XG4gIHBpcGUoXG4gICAgZmEociksXG4gICAgUlRFLmFsdFcoKCkgPT4gdGhhdCgpKHIpKVxuICApXG5cbi8qKlxuICogSWRlbnRpZmllcyBhbiBhc3NvY2lhdGl2ZSBvcGVyYXRpb24gb24gYSB0eXBlIGNvbnN0cnVjdG9yLiBJdCBpcyBzaW1pbGFyIHRvIGBTZW1pZ3JvdXBgLCBleGNlcHQgdGhhdCBpdCBhcHBsaWVzIHRvXG4gKiB0eXBlcyBvZiBraW5kIGAqIC0+ICpgLlxuICpcbiAqIEBjYXRlZ29yeSBBbHRcbiAqIEBzaW5jZSAyLjYuMlxuICovXG5leHBvcnQgY29uc3QgYWx0OiA8UywgUiwgRSwgQT4oXG4gIHRoYXQ6IExhenk8U3RhdGVSZWFkZXJUYXNrRWl0aGVyPFMsIFIsIEUsIEE+PlxuKSA9PiAoZmE6IFN0YXRlUmVhZGVyVGFza0VpdGhlcjxTLCBSLCBFLCBBPikgPT4gU3RhdGVSZWFkZXJUYXNrRWl0aGVyPFMsIFIsIEUsIEE+ID0gYWx0V1xuXG4vKipcbiAqIEBjYXRlZ29yeSBNb25hZFRocm93XG4gKiBAc2luY2UgMi43LjBcbiAqL1xuZXhwb3J0IGNvbnN0IHRocm93RXJyb3I6IE1vbmFkVGhyb3c0PFVSST5bJ3Rocm93RXJyb3InXSA9IGxlZnRcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gaW5zdGFuY2VzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBVUkkgPSAnU3RhdGVSZWFkZXJUYXNrRWl0aGVyJ1xuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgdHlwZSBVUkkgPSB0eXBlb2YgVVJJXG5cbmRlY2xhcmUgbW9kdWxlICcuL0hLVCcge1xuICBpbnRlcmZhY2UgVVJJdG9LaW5kNDxTLCBSLCBFLCBBPiB7XG4gICAgcmVhZG9ubHkgW1VSSV06IFN0YXRlUmVhZGVyVGFza0VpdGhlcjxTLCBSLCBFLCBBPlxuICB9XG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuNy4wXG4gKi9cbmV4cG9ydCBjb25zdCBGdW5jdG9yOiBGdW5jdG9yNDxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcFxufVxuXG4vKipcbiAqIERlcml2YWJsZSBmcm9tIGBGdW5jdG9yYC5cbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZsYXAgPVxuICAvKiNfX1BVUkVfXyovXG4gIGZsYXBfKEZ1bmN0b3IpXG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgUG9pbnRlZDogUG9pbnRlZDQ8VVJJPiA9IHtcbiAgVVJJLFxuICBvZlxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IEFwcGx5OiBBcHBseTQ8VVJJPiA9IHtcbiAgVVJJLFxuICBtYXA6IF9tYXAsXG4gIGFwOiBfYXBcbn1cblxuLyoqXG4gKiBDb21iaW5lIHR3byBlZmZlY3RmdWwgYWN0aW9ucywga2VlcGluZyBvbmx5IHRoZSByZXN1bHQgb2YgdGhlIGZpcnN0LlxuICpcbiAqIERlcml2YWJsZSBmcm9tIGBBcHBseWAuXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGFwRmlyc3QgPVxuICAvKiNfX1BVUkVfXyovXG4gIGFwRmlyc3RfKEFwcGx5KVxuXG4vKipcbiAqIENvbWJpbmUgdHdvIGVmZmVjdGZ1bCBhY3Rpb25zLCBrZWVwaW5nIG9ubHkgdGhlIHJlc3VsdCBvZiB0aGUgc2Vjb25kLlxuICpcbiAqIERlcml2YWJsZSBmcm9tIGBBcHBseWAuXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGFwU2Vjb25kID1cbiAgLyojX19QVVJFX18qL1xuICBhcFNlY29uZF8oQXBwbHkpXG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuNy4wXG4gKi9cbmV4cG9ydCBjb25zdCBBcHBsaWNhdGl2ZTogQXBwbGljYXRpdmU0PFVSST4gPSB7XG4gIFVSSSxcbiAgbWFwOiBfbWFwLFxuICBhcDogX2FwLFxuICBvZlxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IENoYWluOiBDaGFpbjQ8VVJJPiA9IHtcbiAgVVJJLFxuICBtYXA6IF9tYXAsXG4gIGFwOiBfYXAsXG4gIGNoYWluOiBfY2hhaW5cbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBGcm9tU3RhdGU6IEZyb21TdGF0ZTQ8VVJJPiA9IHtcbiAgVVJJLFxuICBmcm9tU3RhdGVcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGN1cnJlbnQgc3RhdGVcbiAqXG4gKiBAY2F0ZWdvcnkgY29uc3RydWN0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGdldDogPFMsIFIsIEUgPSBuZXZlcj4oKSA9PiBTdGF0ZVJlYWRlclRhc2tFaXRoZXI8UywgUiwgRSwgUz4gPVxuICAvKiNfX1BVUkVfXyovXG4gIGdldF8oRnJvbVN0YXRlKVxuXG4vKipcbiAqIFNldCB0aGUgc3RhdGVcbiAqXG4gKiBAY2F0ZWdvcnkgY29uc3RydWN0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHB1dDogPFMsIFIsIEUgPSBuZXZlcj4oczogUykgPT4gU3RhdGVSZWFkZXJUYXNrRWl0aGVyPFMsIFIsIEUsIHZvaWQ+ID1cbiAgLyojX19QVVJFX18qL1xuICBwdXRfKEZyb21TdGF0ZSlcblxuLyoqXG4gKiBNb2RpZnkgdGhlIHN0YXRlIGJ5IGFwcGx5aW5nIGEgZnVuY3Rpb24gdG8gdGhlIGN1cnJlbnQgc3RhdGVcbiAqXG4gKiBAY2F0ZWdvcnkgY29uc3RydWN0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IG1vZGlmeTogPFMsIFIsIEUgPSBuZXZlcj4oZjogRW5kb21vcnBoaXNtPFM+KSA9PiBTdGF0ZVJlYWRlclRhc2tFaXRoZXI8UywgUiwgRSwgdm9pZD4gPVxuICAvKiNfX1BVUkVfXyovXG4gIG1vZGlmeV8oRnJvbVN0YXRlKVxuXG4vKipcbiAqIEdldCBhIHZhbHVlIHdoaWNoIGRlcGVuZHMgb24gdGhlIGN1cnJlbnQgc3RhdGVcbiAqXG4gKiBAY2F0ZWdvcnkgY29uc3RydWN0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGdldHM6IDxTLCBSLCBFID0gbmV2ZXIsIEEgPSBuZXZlcj4oZjogKHM6IFMpID0+IEEpID0+IFN0YXRlUmVhZGVyVGFza0VpdGhlcjxTLCBSLCBFLCBBPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZ2V0c18oRnJvbVN0YXRlKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgZnJvbVN0YXRlSzogPEEgZXh0ZW5kcyBSZWFkb25seUFycmF5PHVua25vd24+LCBTLCBCPihcbiAgZjogKC4uLmE6IEEpID0+IFN0YXRlPFMsIEI+XG4pID0+IDxSLCBFID0gbmV2ZXI+KC4uLmE6IEEpID0+IFN0YXRlUmVhZGVyVGFza0VpdGhlcjxTLCBSLCBFLCBCPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnJvbVN0YXRlS18oRnJvbVN0YXRlKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgY2hhaW5TdGF0ZUs6IDxBLCBTLCBCPihcbiAgZjogKGE6IEEpID0+IFN0YXRlPFMsIEI+XG4pID0+IDxSLCBFID0gbmV2ZXI+KG1hOiBTdGF0ZVJlYWRlclRhc2tFaXRoZXI8UywgUiwgRSwgQT4pID0+IFN0YXRlUmVhZGVyVGFza0VpdGhlcjxTLCBSLCBFLCBCPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgY2hhaW5TdGF0ZUtfKEZyb21TdGF0ZSwgQ2hhaW4pXG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgTW9uYWQ6IE1vbmFkNDxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgYXA6IF9hcCxcbiAgb2YsXG4gIGNoYWluOiBfY2hhaW5cbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBNb25hZElPOiBNb25hZElPNDxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgYXA6IF9hcCxcbiAgb2YsXG4gIGNoYWluOiBfY2hhaW4sXG4gIGZyb21JT1xufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IE1vbmFkVGFzazogTW9uYWRUYXNrNDxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgYXA6IF9hcCxcbiAgb2YsXG4gIGNoYWluOiBfY2hhaW4sXG4gIGZyb21JTyxcbiAgZnJvbVRhc2tcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBNb25hZFRocm93OiBNb25hZFRocm93NDxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgYXA6IF9hcCxcbiAgb2YsXG4gIGNoYWluOiBfY2hhaW4sXG4gIHRocm93RXJyb3Jcbn1cblxuLyoqXG4gKiBDb21wb3NlcyBjb21wdXRhdGlvbnMgaW4gc2VxdWVuY2UsIHVzaW5nIHRoZSByZXR1cm4gdmFsdWUgb2Ygb25lIGNvbXB1dGF0aW9uIHRvIGRldGVybWluZSB0aGUgbmV4dCBjb21wdXRhdGlvbiBhbmRcbiAqIGtlZXBpbmcgb25seSB0aGUgcmVzdWx0IG9mIHRoZSBmaXJzdC5cbiAqXG4gKiBEZXJpdmFibGUgZnJvbSBgQ2hhaW5gLlxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBjaGFpbkZpcnN0OiA8UywgUiwgRSwgQSwgQj4oXG4gIGY6IChhOiBBKSA9PiBTdGF0ZVJlYWRlclRhc2tFaXRoZXI8UywgUiwgRSwgQj5cbikgPT4gKG1hOiBTdGF0ZVJlYWRlclRhc2tFaXRoZXI8UywgUiwgRSwgQT4pID0+IFN0YXRlUmVhZGVyVGFza0VpdGhlcjxTLCBSLCBFLCBBPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgY2hhaW5GaXJzdF8oQ2hhaW4pXG5cbi8qKlxuICogTGVzcyBzdHJpY3QgdmVyc2lvbiBvZiBbYGNoYWluRmlyc3RgXSgjY2hhaW5maXJzdCkuXG4gKlxuICogRGVyaXZhYmxlIGZyb20gYENoYWluYC5cbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjguMFxuICovXG5leHBvcnQgY29uc3QgY2hhaW5GaXJzdFc6IDxTLCBSMiwgRTIsIEEsIEI+KFxuICBmOiAoYTogQSkgPT4gU3RhdGVSZWFkZXJUYXNrRWl0aGVyPFMsIFIyLCBFMiwgQj5cbikgPT4gPFIxLCBFMT4oXG4gIG1hOiBTdGF0ZVJlYWRlclRhc2tFaXRoZXI8UywgUjEsIEUxLCBBPlxuKSA9PiBTdGF0ZVJlYWRlclRhc2tFaXRoZXI8UywgUjEgJiBSMiwgRTEgfCBFMiwgQT4gPSBjaGFpbkZpcnN0IGFzIGFueVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjcuMFxuICovXG5leHBvcnQgY29uc3QgQmlmdW5jdG9yOiBCaWZ1bmN0b3I0PFVSST4gPSB7XG4gIFVSSSxcbiAgYmltYXA6IF9iaW1hcCxcbiAgbWFwTGVmdDogX21hcExlZnRcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi43LjBcbiAqL1xuZXhwb3J0IGNvbnN0IEFsdDogQWx0NDxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgYWx0OiBfYWx0XG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgRnJvbVJlYWRlcjogRnJvbVJlYWRlcjQ8VVJJPiA9IHtcbiAgVVJJLFxuICBmcm9tUmVhZGVyXG59XG5cbi8qKlxuICogUmVhZHMgdGhlIGN1cnJlbnQgY29udGV4dC5cbiAqXG4gKiBAY2F0ZWdvcnkgY29uc3RydWN0b3JzXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBhc2s6IDxTLCBSLCBFID0gbmV2ZXI+KCkgPT4gU3RhdGVSZWFkZXJUYXNrRWl0aGVyPFMsIFIsIEUsIFI+ID1cbiAgLyojX19QVVJFX18qL1xuICBhc2tfKEZyb21SZWFkZXIpXG5cbi8qKlxuICogUHJvamVjdHMgYSB2YWx1ZSBmcm9tIHRoZSBnbG9iYWwgY29udGV4dCBpbiBhIGBSZWFkZXJFaXRoZXJgLlxuICpcbiAqIEBjYXRlZ29yeSBjb25zdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGFza3M6IDxTLCBSLCBBLCBFID0gbmV2ZXI+KGY6IChyOiBSKSA9PiBBKSA9PiBTdGF0ZVJlYWRlclRhc2tFaXRoZXI8UywgUiwgRSwgQT4gPVxuICAvKiNfX1BVUkVfXyovXG4gIGFza3NfKEZyb21SZWFkZXIpXG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBmcm9tUmVhZGVySzogPEEgZXh0ZW5kcyBSZWFkb25seUFycmF5PHVua25vd24+LCBSLCBCPihcbiAgZjogKC4uLmE6IEEpID0+IFJlYWRlcjxSLCBCPlxuKSA9PiA8UywgRSA9IG5ldmVyPiguLi5hOiBBKSA9PiBTdGF0ZVJlYWRlclRhc2tFaXRoZXI8UywgUiwgRSwgQj4gPVxuICAvKiNfX1BVUkVfXyovXG4gIGZyb21SZWFkZXJLXyhGcm9tUmVhZGVyKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgY2hhaW5SZWFkZXJLOiA8QSwgUiwgQj4oXG4gIGY6IChhOiBBKSA9PiBSZWFkZXI8UiwgQj5cbikgPT4gPFMsIEUgPSBuZXZlcj4obWE6IFN0YXRlUmVhZGVyVGFza0VpdGhlcjxTLCBSLCBFLCBBPikgPT4gU3RhdGVSZWFkZXJUYXNrRWl0aGVyPFMsIFIsIEUsIEI+ID1cbiAgLyojX19QVVJFX18qL1xuICBjaGFpblJlYWRlcktfKEZyb21SZWFkZXIsIENoYWluKVxuXG4vKipcbiAqIExlc3Mgc3RyaWN0IHZlcnNpb24gb2YgW2BjaGFpblJlYWRlcktgXSgjY2hhaW5SZWFkZXJLKS5cbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGNoYWluUmVhZGVyS1c6IDxBLCBSMSwgQj4oXG4gIGY6IChhOiBBKSA9PiBSZWFkZXI8UjEsIEI+XG4pID0+IDxTLCBSMiwgRSA9IG5ldmVyPihcbiAgbWE6IFN0YXRlUmVhZGVyVGFza0VpdGhlcjxTLCBSMiwgRSwgQT5cbikgPT4gU3RhdGVSZWFkZXJUYXNrRWl0aGVyPFMsIFIxICYgUjIsIEUsIEI+ID0gY2hhaW5SZWFkZXJLIGFzIGFueVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgY2hhaW5GaXJzdFJlYWRlcks6IDxBLCBSLCBCPihcbiAgZjogKGE6IEEpID0+IFJlYWRlcjxSLCBCPlxuKSA9PiA8UywgRSA9IG5ldmVyPihtYTogU3RhdGVSZWFkZXJUYXNrRWl0aGVyPFMsIFIsIEUsIEE+KSA9PiBTdGF0ZVJlYWRlclRhc2tFaXRoZXI8UywgUiwgRSwgQT4gPVxuICAvKiNfX1BVUkVfXyovXG4gIGNoYWluRmlyc3RSZWFkZXJLXyhGcm9tUmVhZGVyLCBDaGFpbilcblxuLyoqXG4gKiBMZXNzIHN0cmljdCB2ZXJzaW9uIG9mIFtgY2hhaW5GaXJzdFJlYWRlcktgXSgjY2hhaW5GaXJzdFJlYWRlckspLlxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgY2hhaW5GaXJzdFJlYWRlcktXOiA8QSwgUjEsIEI+KFxuICBmOiAoYTogQSkgPT4gUmVhZGVyPFIxLCBCPlxuKSA9PiA8UywgUjIsIEUgPSBuZXZlcj4oXG4gIG1hOiBTdGF0ZVJlYWRlclRhc2tFaXRoZXI8UywgUjIsIEUsIEE+XG4pID0+IFN0YXRlUmVhZGVyVGFza0VpdGhlcjxTLCBSMiwgRSwgQT4gPSBjaGFpbkZpcnN0UmVhZGVySyBhcyBhbnlcblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBGcm9tRWl0aGVyOiBGcm9tRWl0aGVyNDxVUkk+ID0ge1xuICBVUkksXG4gIGZyb21FaXRoZXJcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgbmF0dXJhbCB0cmFuc2Zvcm1hdGlvbnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgZnJvbU9wdGlvbjogPEU+KG9uTm9uZTogTGF6eTxFPikgPT4gTmF0dXJhbFRyYW5zZm9ybWF0aW9uMTRDPE9VUkksIFVSSSwgRT4gPVxuICAvKiNfX1BVUkVfXyovXG4gIGZyb21PcHRpb25fKEZyb21FaXRoZXIpXG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBmcm9tT3B0aW9uSyA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnJvbU9wdGlvbktfKEZyb21FaXRoZXIpXG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBjaGFpbk9wdGlvbksgPVxuICAvKiNfX1BVUkVfXyovXG4gIGNoYWluT3B0aW9uS18oRnJvbUVpdGhlciwgQ2hhaW4pXG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi40LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGNoYWluRWl0aGVySzogPEUsIEEsIEI+KFxuICBmOiAoYTogQSkgPT4gRS5FaXRoZXI8RSwgQj5cbikgPT4gPFMsIFI+KG1hOiBTdGF0ZVJlYWRlclRhc2tFaXRoZXI8UywgUiwgRSwgQT4pID0+IFN0YXRlUmVhZGVyVGFza0VpdGhlcjxTLCBSLCBFLCBCPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgY2hhaW5FaXRoZXJLXyhGcm9tRWl0aGVyLCBDaGFpbilcblxuLyoqXG4gKiBMZXNzIHN0cmljdCB2ZXJzaW9uIG9mIFtgY2hhaW5FaXRoZXJLYF0oI2NoYWluZWl0aGVyaykuXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi42LjFcbiAqL1xuZXhwb3J0IGNvbnN0IGNoYWluRWl0aGVyS1c6IDxFMiwgQSwgQj4oXG4gIGY6IChhOiBBKSA9PiBFaXRoZXI8RTIsIEI+XG4pID0+IDxTLCBSLCBFMT4obWE6IFN0YXRlUmVhZGVyVGFza0VpdGhlcjxTLCBSLCBFMSwgQT4pID0+IFN0YXRlUmVhZGVyVGFza0VpdGhlcjxTLCBSLCBFMSB8IEUyLCBCPiA9IGNoYWluRWl0aGVySyBhcyBhbnlcblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29uc3RydWN0b3JzXG4gKiBAc2luY2UgMi40LjRcbiAqL1xuZXhwb3J0IGNvbnN0IGZyb21QcmVkaWNhdGU6IHtcbiAgPEUsIEEsIEIgZXh0ZW5kcyBBPihyZWZpbmVtZW50OiBSZWZpbmVtZW50PEEsIEI+LCBvbkZhbHNlOiAoYTogQSkgPT4gRSk6IDxTLCBSPihcbiAgICBhOiBBXG4gICkgPT4gU3RhdGVSZWFkZXJUYXNrRWl0aGVyPFMsIFIsIEUsIEI+XG4gIDxFLCBBPihwcmVkaWNhdGU6IFByZWRpY2F0ZTxBPiwgb25GYWxzZTogKGE6IEEpID0+IEUpOiA8UywgUiwgQiBleHRlbmRzIEE+KGI6IEIpID0+IFN0YXRlUmVhZGVyVGFza0VpdGhlcjxTLCBSLCBFLCBCPlxuICA8RSwgQT4ocHJlZGljYXRlOiBQcmVkaWNhdGU8QT4sIG9uRmFsc2U6IChhOiBBKSA9PiBFKTogPFMsIFI+KGE6IEEpID0+IFN0YXRlUmVhZGVyVGFza0VpdGhlcjxTLCBSLCBFLCBBPlxufSA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnJvbVByZWRpY2F0ZV8oRnJvbUVpdGhlcilcblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjQuNFxuICovXG5leHBvcnQgY29uc3QgZmlsdGVyT3JFbHNlOiB7XG4gIDxFLCBBLCBCIGV4dGVuZHMgQT4ocmVmaW5lbWVudDogUmVmaW5lbWVudDxBLCBCPiwgb25GYWxzZTogKGE6IEEpID0+IEUpOiA8UywgUj4oXG4gICAgbWE6IFN0YXRlUmVhZGVyVGFza0VpdGhlcjxTLCBSLCBFLCBBPlxuICApID0+IFN0YXRlUmVhZGVyVGFza0VpdGhlcjxTLCBSLCBFLCBCPlxuICA8RSwgQT4ocHJlZGljYXRlOiBQcmVkaWNhdGU8QT4sIG9uRmFsc2U6IChhOiBBKSA9PiBFKTogPFMsIFIsIEIgZXh0ZW5kcyBBPihcbiAgICBtYjogU3RhdGVSZWFkZXJUYXNrRWl0aGVyPFMsIFIsIEUsIEI+XG4gICkgPT4gU3RhdGVSZWFkZXJUYXNrRWl0aGVyPFMsIFIsIEUsIEI+XG4gIDxFLCBBPihwcmVkaWNhdGU6IFByZWRpY2F0ZTxBPiwgb25GYWxzZTogKGE6IEEpID0+IEUpOiA8UywgUj4oXG4gICAgbWE6IFN0YXRlUmVhZGVyVGFza0VpdGhlcjxTLCBSLCBFLCBBPlxuICApID0+IFN0YXRlUmVhZGVyVGFza0VpdGhlcjxTLCBSLCBFLCBBPlxufSA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZmlsdGVyT3JFbHNlXyhGcm9tRWl0aGVyLCBDaGFpbilcblxuLyoqXG4gKiBMZXNzIHN0cmljdCB2ZXJzaW9uIG9mIFtgZmlsdGVyT3JFbHNlYF0oI2ZpbHRlcm9yZWxzZSkuXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi45LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZpbHRlck9yRWxzZVc6IHtcbiAgPEEsIEIgZXh0ZW5kcyBBLCBFMj4ocmVmaW5lbWVudDogUmVmaW5lbWVudDxBLCBCPiwgb25GYWxzZTogKGE6IEEpID0+IEUyKTogPFMsIFIsIEUxPihcbiAgICBtYTogU3RhdGVSZWFkZXJUYXNrRWl0aGVyPFMsIFIsIEUxLCBBPlxuICApID0+IFN0YXRlUmVhZGVyVGFza0VpdGhlcjxTLCBSLCBFMSB8IEUyLCBCPlxuICA8QSwgRTI+KHByZWRpY2F0ZTogUHJlZGljYXRlPEE+LCBvbkZhbHNlOiAoYTogQSkgPT4gRTIpOiA8UywgUiwgRTEsIEIgZXh0ZW5kcyBBPihcbiAgICBtYjogU3RhdGVSZWFkZXJUYXNrRWl0aGVyPFMsIFIsIEUxLCBCPlxuICApID0+IFN0YXRlUmVhZGVyVGFza0VpdGhlcjxTLCBSLCBFMSB8IEUyLCBCPlxuICA8QSwgRTI+KHByZWRpY2F0ZTogUHJlZGljYXRlPEE+LCBvbkZhbHNlOiAoYTogQSkgPT4gRTIpOiA8UywgUiwgRTE+KFxuICAgIG1hOiBTdGF0ZVJlYWRlclRhc2tFaXRoZXI8UywgUiwgRTEsIEE+XG4gICkgPT4gU3RhdGVSZWFkZXJUYXNrRWl0aGVyPFMsIFIsIEUxIHwgRTIsIEE+XG59ID0gZmlsdGVyT3JFbHNlXG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi40LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZyb21FaXRoZXJLOiA8RSwgQSBleHRlbmRzIFJlYWRvbmx5QXJyYXk8dW5rbm93bj4sIEI+KFxuICBmOiAoLi4uYTogQSkgPT4gRS5FaXRoZXI8RSwgQj5cbikgPT4gPFMsIFI+KC4uLmE6IEEpID0+IFN0YXRlUmVhZGVyVGFza0VpdGhlcjxTLCBSLCBFLCBCPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnJvbUVpdGhlcktfKEZyb21FaXRoZXIpXG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgRnJvbUlPOiBGcm9tSU80PFVSST4gPSB7XG4gIFVSSSxcbiAgZnJvbUlPXG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBmcm9tSU9LID1cbiAgLyojX19QVVJFX18qL1xuICBmcm9tSU9LXyhGcm9tSU8pXG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBjaGFpbklPSyA9XG4gIC8qI19fUFVSRV9fKi9cbiAgY2hhaW5JT0tfKEZyb21JTywgQ2hhaW4pXG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBjaGFpbkZpcnN0SU9LID1cbiAgLyojX19QVVJFX18qL1xuICBjaGFpbkZpcnN0SU9LXyhGcm9tSU8sIENoYWluKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IEZyb21UYXNrOiBGcm9tVGFzazQ8VVJJPiA9IHtcbiAgVVJJLFxuICBmcm9tSU8sXG4gIGZyb21UYXNrXG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBmcm9tVGFza0sgPVxuICAvKiNfX1BVUkVfXyovXG4gIGZyb21UYXNrS18oRnJvbVRhc2spXG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBjaGFpblRhc2tLID1cbiAgLyojX19QVVJFX18qL1xuICBjaGFpblRhc2tLXyhGcm9tVGFzaywgQ2hhaW4pXG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBjaGFpbkZpcnN0VGFza0sgPVxuICAvKiNfX1BVUkVfXyovXG4gIGNoYWluRmlyc3RUYXNrS18oRnJvbVRhc2ssIENoYWluKVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyB1dGlsc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIFJ1biBhIGNvbXB1dGF0aW9uIGluIHRoZSBgU3RhdGVSZWFkZXJUYXNrRWl0aGVyYCBtb25hZCwgZGlzY2FyZGluZyB0aGUgZmluYWwgc3RhdGVcbiAqXG4gKiBAc2luY2UgMi44LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGV2YWx1YXRlOiA8Uz4oczogUykgPT4gPFIsIEUsIEE+KG1hOiBTdGF0ZVJlYWRlclRhc2tFaXRoZXI8UywgUiwgRSwgQT4pID0+IFJlYWRlclRhc2tFaXRoZXI8UiwgRSwgQT4gPVxuICAvKiNfX1BVUkVfXyovXG4gIFNULmV2YWx1YXRlKFJURS5GdW5jdG9yKVxuXG4vKipcbiAqIFJ1biBhIGNvbXB1dGF0aW9uIGluIHRoZSBgU3RhdGVSZWFkZXJUYXNrRWl0aGVyYCBtb25hZCBkaXNjYXJkaW5nIHRoZSByZXN1bHRcbiAqXG4gKiBAc2luY2UgMi44LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGV4ZWN1dGU6IDxTPihzOiBTKSA9PiA8UiwgRSwgQT4obWE6IFN0YXRlUmVhZGVyVGFza0VpdGhlcjxTLCBSLCBFLCBBPikgPT4gUmVhZGVyVGFza0VpdGhlcjxSLCBFLCBTPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgU1QuZXhlY3V0ZShSVEUuRnVuY3RvcilcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gZG8gbm90YXRpb25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBAc2luY2UgMi44LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGJpbmRUbyA9XG4gIC8qI19fUFVSRV9fKi9cbiAgYmluZFRvXyhGdW5jdG9yKVxuXG4vKipcbiAqIEBzaW5jZSAyLjguMFxuICovXG5leHBvcnQgY29uc3QgYmluZCA9XG4gIC8qI19fUFVSRV9fKi9cbiAgYmluZF8oQ2hhaW4pXG5cbi8qKlxuICogQHNpbmNlIDIuOC4wXG4gKi9cbmV4cG9ydCBjb25zdCBiaW5kVzogPE4gZXh0ZW5kcyBzdHJpbmcsIEEsIFMsIFIyLCBFMiwgQj4oXG4gIG5hbWU6IEV4Y2x1ZGU8Tiwga2V5b2YgQT4sXG4gIGY6IChhOiBBKSA9PiBTdGF0ZVJlYWRlclRhc2tFaXRoZXI8UywgUjIsIEUyLCBCPlxuKSA9PiA8UjEsIEUxPihcbiAgZmE6IFN0YXRlUmVhZGVyVGFza0VpdGhlcjxTLCBSMSwgRTEsIEE+XG4pID0+IFN0YXRlUmVhZGVyVGFza0VpdGhlcjxcbiAgUyxcbiAgUjEgJiBSMixcbiAgRTEgfCBFMixcbiAgeyByZWFkb25seSBbSyBpbiBrZXlvZiBBIHwgTl06IEsgZXh0ZW5kcyBrZXlvZiBBID8gQVtLXSA6IEIgfVxuPiA9IGJpbmQgYXMgYW55XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIHBpcGVhYmxlIHNlcXVlbmNlIFNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBAc2luY2UgMi44LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGFwUyA9XG4gIC8qI19fUFVSRV9fKi9cbiAgYXBTXyhBcHBseSlcblxuLyoqXG4gKiBAc2luY2UgMi44LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGFwU1c6IDxBLCBOIGV4dGVuZHMgc3RyaW5nLCBTLCBSMiwgRTIsIEI+KFxuICBuYW1lOiBFeGNsdWRlPE4sIGtleW9mIEE+LFxuICBmYjogU3RhdGVSZWFkZXJUYXNrRWl0aGVyPFMsIFIyLCBFMiwgQj5cbikgPT4gPFIxLCBFMT4oXG4gIGZhOiBTdGF0ZVJlYWRlclRhc2tFaXRoZXI8UywgUjEsIEUxLCBBPlxuKSA9PiBTdGF0ZVJlYWRlclRhc2tFaXRoZXI8XG4gIFMsXG4gIFIxICYgUjIsXG4gIEUxIHwgRTIsXG4gIHsgcmVhZG9ubHkgW0sgaW4ga2V5b2YgQSB8IE5dOiBLIGV4dGVuZHMga2V5b2YgQSA/IEFbS10gOiBCIH1cbj4gPSBhcFMgYXMgYW55XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGFycmF5IHV0aWxzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogRXF1aXZhbGVudCB0byBgUmVhZG9ubHlOb25FbXB0eUFycmF5I3RyYXZlcnNlV2l0aEluZGV4KEFwcGxpY2F0aXZlKWAuXG4gKlxuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgdHJhdmVyc2VSZWFkb25seU5vbkVtcHR5QXJyYXlXaXRoSW5kZXggPSA8QSwgUywgUiwgRSwgQj4oXG4gIGY6IChpbmRleDogbnVtYmVyLCBhOiBBKSA9PiBTdGF0ZVJlYWRlclRhc2tFaXRoZXI8UywgUiwgRSwgQj5cbikgPT4gKGFzOiBSZWFkb25seU5vbkVtcHR5QXJyYXk8QT4pOiBTdGF0ZVJlYWRlclRhc2tFaXRoZXI8UywgUiwgRSwgUmVhZG9ubHlOb25FbXB0eUFycmF5PEI+PiA9PiAocykgPT4gKHIpID0+ICgpID0+XG4gIF8udGFpbChhcykucmVkdWNlPFByb21pc2U8RWl0aGVyPEUsIFtOb25FbXB0eUFycmF5PEI+LCBTXT4+PihcbiAgICAoYWNjLCBhLCBpKSA9PlxuICAgICAgYWNjLnRoZW4oKGVicykgPT5cbiAgICAgICAgXy5pc0xlZnQoZWJzKVxuICAgICAgICAgID8gYWNjXG4gICAgICAgICAgOiBmKFxuICAgICAgICAgICAgICBpICsgMSxcbiAgICAgICAgICAgICAgYVxuICAgICAgICAgICAgKShlYnMucmlnaHRbMV0pKHIpKCkudGhlbigoZWIpID0+IHtcbiAgICAgICAgICAgICAgaWYgKF8uaXNMZWZ0KGViKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlYlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvbnN0IFtiLCBzXSA9IGViLnJpZ2h0XG4gICAgICAgICAgICAgIGVicy5yaWdodFswXS5wdXNoKGIpXG4gICAgICAgICAgICAgIGVicy5yaWdodFsxXSA9IHNcbiAgICAgICAgICAgICAgcmV0dXJuIGVic1xuICAgICAgICAgICAgfSlcbiAgICAgICksXG4gICAgZigwLCBfLmhlYWQoYXMpKShzKShyKSgpLnRoZW4oRS5tYXAoKFtiLCBzXSkgPT4gW1tiXSwgc10pKVxuICApXG5cbi8qKlxuICogRXF1aXZhbGVudCB0byBgUmVhZG9ubHlBcnJheSN0cmF2ZXJzZVdpdGhJbmRleChBcHBsaWNhdGl2ZSlgLlxuICpcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHRyYXZlcnNlUmVhZG9ubHlBcnJheVdpdGhJbmRleCA9IDxBLCBTLCBSLCBFLCBCPihcbiAgZjogKGluZGV4OiBudW1iZXIsIGE6IEEpID0+IFN0YXRlUmVhZGVyVGFza0VpdGhlcjxTLCBSLCBFLCBCPlxuKTogKChhczogUmVhZG9ubHlBcnJheTxBPikgPT4gU3RhdGVSZWFkZXJUYXNrRWl0aGVyPFMsIFIsIEUsIFJlYWRvbmx5QXJyYXk8Qj4+KSA9PiB7XG4gIGNvbnN0IGcgPSB0cmF2ZXJzZVJlYWRvbmx5Tm9uRW1wdHlBcnJheVdpdGhJbmRleChmKVxuICByZXR1cm4gKGFzKSA9PiAoXy5pc05vbkVtcHR5KGFzKSA/IGcoYXMpIDogb2YoXy5lbXB0eVJlYWRvbmx5QXJyYXkpKVxufVxuXG4vKipcbiAqIEBzaW5jZSAyLjkuMFxuICovXG5leHBvcnQgY29uc3QgdHJhdmVyc2VBcnJheVdpdGhJbmRleDogPFMsIFIsIEUsIEEsIEI+KFxuICBmOiAoaW5kZXg6IG51bWJlciwgYTogQSkgPT4gU3RhdGVSZWFkZXJUYXNrRWl0aGVyPFMsIFIsIEUsIEI+XG4pID0+IChhczogUmVhZG9ubHlBcnJheTxBPikgPT4gU3RhdGVSZWFkZXJUYXNrRWl0aGVyPFMsIFIsIEUsIFJlYWRvbmx5QXJyYXk8Qj4+ID0gdHJhdmVyc2VSZWFkb25seUFycmF5V2l0aEluZGV4XG5cbi8qKlxuICogQHNpbmNlIDIuOS4wXG4gKi9cbmV4cG9ydCBjb25zdCB0cmF2ZXJzZUFycmF5ID0gPFMsIFIsIEUsIEEsIEI+KFxuICBmOiAoYTogQSkgPT4gU3RhdGVSZWFkZXJUYXNrRWl0aGVyPFMsIFIsIEUsIEI+XG4pOiAoKGFzOiBSZWFkb25seUFycmF5PEE+KSA9PiBTdGF0ZVJlYWRlclRhc2tFaXRoZXI8UywgUiwgRSwgUmVhZG9ubHlBcnJheTxCPj4pID0+XG4gIHRyYXZlcnNlUmVhZG9ubHlBcnJheVdpdGhJbmRleCgoXywgYSkgPT4gZihhKSlcblxuLyoqXG4gKiBAc2luY2UgMi45LjBcbiAqL1xuZXhwb3J0IGNvbnN0IHNlcXVlbmNlQXJyYXk6IDxTLCBSLCBFLCBBPihcbiAgYXJyOiBSZWFkb25seUFycmF5PFN0YXRlUmVhZGVyVGFza0VpdGhlcjxTLCBSLCBFLCBBPj5cbikgPT4gU3RhdGVSZWFkZXJUYXNrRWl0aGVyPFMsIFIsIEUsIFJlYWRvbmx5QXJyYXk8QT4+ID1cbiAgLyojX19QVVJFX18qL1xuICB0cmF2ZXJzZUFycmF5KGlkZW50aXR5KVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBkZXByZWNhdGVkXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIHRzbGludDpkaXNhYmxlOiBkZXByZWNhdGlvblxuXG4vKipcbiAqIFVzZSBzbWFsbCwgc3BlY2lmaWMgaW5zdGFuY2VzIGluc3RlYWQuXG4gKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMC4wXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgY29uc3Qgc3RhdGVSZWFkZXJUYXNrRWl0aGVyOiBNb25hZDQ8VVJJPiAmIEJpZnVuY3RvcjQ8VVJJPiAmIEFsdDQ8VVJJPiAmIE1vbmFkVGFzazQ8VVJJPiAmIE1vbmFkVGhyb3c0PFVSST4gPSB7XG4gIFVSSSxcbiAgbWFwOiBfbWFwLFxuICBvZixcbiAgYXA6IF9hcCxcbiAgY2hhaW46IF9jaGFpbixcbiAgYmltYXA6IF9iaW1hcCxcbiAgbWFwTGVmdDogX21hcExlZnQsXG4gIGFsdDogX2FsdCxcbiAgZnJvbUlPLFxuICBmcm9tVGFzayxcbiAgdGhyb3dFcnJvclxufVxuXG4vKipcbiAqIFVzZSBzbWFsbCwgc3BlY2lmaWMgaW5zdGFuY2VzIGluc3RlYWQuXG4gKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMC4wXG4gKiBAZGVwcmVjYXRlZFxuICovXG5cbmV4cG9ydCBjb25zdCBzdGF0ZVJlYWRlclRhc2tFaXRoZXJTZXE6IHR5cGVvZiBzdGF0ZVJlYWRlclRhc2tFaXRoZXIgPSB7XG4gIFVSSSxcbiAgbWFwOiBfbWFwLFxuICBvZixcbiAgYXA6IF9hcCxcbiAgY2hhaW46IF9jaGFpbixcbiAgYmltYXA6IF9iaW1hcCxcbiAgbWFwTGVmdDogX21hcExlZnQsXG4gIGFsdDogX2FsdCxcbiAgZnJvbUlPLFxuICBmcm9tVGFzayxcbiAgdGhyb3dFcnJvclxufVxuXG4vKipcbiAqIFVzZSBbYGV2YWx1YXRlYF0oI2V2YWx1YXRlKSBpbnN0ZWFkXG4gKlxuICogQHNpbmNlIDIuMC4wXG4gKiBAZGVwcmVjYXRlZFxuICovXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuZXhwb3J0IGNvbnN0IGV2YWxTdGF0ZTogPFMsIFIsIEUsIEE+KG1hOiBTdGF0ZVJlYWRlclRhc2tFaXRoZXI8UywgUiwgRSwgQT4sIHM6IFMpID0+IFJlYWRlclRhc2tFaXRoZXI8UiwgRSwgQT4gPSAoXG4gIGZzYSxcbiAgc1xuKSA9PlxuICBwaXBlKFxuICAgIGZzYShzKSxcbiAgICBSVEUubWFwKChbYV0pID0+IGEpXG4gIClcblxuLyoqXG4gKiBVc2UgW2BleGVjdXRlYF0oI2V4ZWN1dGUpIGluc3RlYWRcbiAqXG4gKiBAc2luY2UgMi4wLjBcbiAqIEBkZXByZWNhdGVkXG4gKi9cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5leHBvcnQgY29uc3QgZXhlY1N0YXRlOiA8UywgUiwgRSwgQT4obWE6IFN0YXRlUmVhZGVyVGFza0VpdGhlcjxTLCBSLCBFLCBBPiwgczogUykgPT4gUmVhZGVyVGFza0VpdGhlcjxSLCBFLCBTPiA9IChcbiAgZnNhLFxuICBzXG4pID0+XG4gIHBpcGUoXG4gICAgZnNhKHMpLFxuICAgIFJURS5tYXAoKFtfLCBzXSkgPT4gcylcbiAgKVxuXG4vKipcbiAqIEBzaW5jZSAyLjAuMFxuICogQGRlcHJlY2F0ZWRcbiAqL1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmV4cG9ydCBmdW5jdGlvbiBydW48UywgUiwgRSwgQT4obWE6IFN0YXRlUmVhZGVyVGFza0VpdGhlcjxTLCBSLCBFLCBBPiwgczogUywgcjogUik6IFByb21pc2U8RWl0aGVyPEUsIFtBLCBTXT4+IHtcbiAgcmV0dXJuIG1hKHMpKHIpKClcbn1cbiJdfQ==