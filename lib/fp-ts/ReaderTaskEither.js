"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bindW = exports.bindTo = exports.bind = exports.bimap = exports.asksReaderTaskEitherW = exports.asksReaderTaskEither = exports.asks = exports.ask = exports.apW = exports.apSecond = exports.apSW = exports.apS = exports.apFirst = exports.ap = exports.altW = exports.alt = exports.URI = exports.Pointed = exports.MonadThrow = exports.MonadTask = exports.MonadIO = exports.Monad = exports.Functor = exports.FromTask = exports.FromReader = exports.FromIO = exports.FromEither = exports.Do = exports.Chain = exports.Bifunctor = exports.ApplySeq = exports.ApplyPar = exports.ApplicativeSeq = exports.ApplicativePar = exports.ApT = exports.Alt = void 0;
exports.bracket = bracket;
exports.fromTaskK = exports.fromTaskEitherK = exports.fromTaskEither = exports.fromTask = exports.fromReaderTaskK = exports.fromReaderK = exports.fromReaderEitherK = exports.fromReaderEither = exports.fromReader = exports.fromPredicate = exports.fromOptionK = exports.fromOption = exports.fromIOK = exports.fromIOEitherK = exports.fromIOEither = exports.fromIO = exports.fromEitherK = exports.fromEither = exports.foldW = exports.fold = exports.flattenW = exports.flatten = exports.flap = exports.filterOrElseW = exports.filterOrElse = exports.chainW = exports.chainTaskK = exports.chainTaskEitherKW = exports.chainTaskEitherK = exports.chainReaderTaskKW = exports.chainReaderTaskK = exports.chainReaderKW = exports.chainReaderK = exports.chainReaderEitherKW = exports.chainReaderEitherK = exports.chainOptionK = exports.chainIOK = exports.chainIOEitherKW = exports.chainIOEitherK = exports.chainFirstW = exports.chainFirstTaskK = exports.chainFirstTaskEitherKW = exports.chainFirstTaskEitherK = exports.chainFirstReaderTaskKW = exports.chainFirstReaderTaskK = exports.chainFirstReaderKW = exports.chainFirstReaderK = exports.chainFirstReaderEitherKW = exports.chainFirstReaderEitherK = exports.chainFirstIOK = exports.chainFirst = exports.chainEitherKW = exports.chainEitherK = exports.chain = void 0;
exports.getAltReaderTaskValidation = getAltReaderTaskValidation;
exports.getApplicativeReaderTaskValidation = getApplicativeReaderTaskValidation;
exports.getCompactable = exports.getApplySemigroup = exports.getApplyMonoid = void 0;
exports.getFilterable = getFilterable;
exports.getOrElseW = exports.getOrElse = void 0;
exports.getReaderTaskValidation = getReaderTaskValidation;
exports.rightTask = exports.rightReaderTask = exports.rightReader = exports.rightIO = exports.right = exports.readerTaskEitherSeq = exports.readerTaskEither = exports.orLeft = exports.orElseW = exports.orElseFirstW = exports.orElseFirst = exports.orElse = exports.of = exports.matchW = exports.matchEW = exports.matchE = exports.match = exports.mapLeft = exports.map = exports.local = exports.leftTask = exports.leftReaderTask = exports.leftReader = exports.leftIO = exports.left = exports.getSemigroup = void 0;
exports.run = run;
exports.traverseSeqArrayWithIndex = exports.traverseSeqArray = exports.traverseReadonlyNonEmptyArrayWithIndexSeq = exports.traverseReadonlyNonEmptyArrayWithIndex = exports.traverseReadonlyArrayWithIndexSeq = exports.traverseReadonlyArrayWithIndex = exports.traverseArrayWithIndex = exports.traverseArray = exports.toUnion = exports.throwError = exports.swap = exports.sequenceSeqArray = exports.sequenceArray = void 0;

var _Applicative = require("./Applicative");

var _Apply = require("./Apply");

var _Chain = require("./Chain");

var _Compactable = require("./Compactable");

var E = _interopRequireWildcard(require("./Either"));

var ET = _interopRequireWildcard(require("./EitherT"));

var _Filterable = require("./Filterable");

var _FromEither = require("./FromEither");

var _FromIO = require("./FromIO");

var _FromReader = require("./FromReader");

var _FromTask = require("./FromTask");

var _function = require("./function");

var _Functor = require("./Functor");

var _ = _interopRequireWildcard(require("./internal"));

var R = _interopRequireWildcard(require("./Reader"));

var RT = _interopRequireWildcard(require("./ReaderTask"));

var T = _interopRequireWildcard(require("./Task"));

var TE = _interopRequireWildcard(require("./TaskEither"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @since 2.0.0
 */
var Either = E.Either;
var Task = T.Task;
var TaskEither = TE.TaskEither;
var Reader = R.Reader;
var ReaderTask = RT.ReaderTask; // -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

/**
 * @category model
 * @since 2.0.0
 */

// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------

/**
 * @category natural transformations
 * @since 2.0.0
 */
var fromTaskEither = /*#__PURE__*/R.of;
/**
 * @category constructors
 * @since 2.0.0
 */

exports.fromTaskEither = fromTaskEither;
var left = /*#__PURE__*/ET.left(RT.Pointed);
/**
 * @category constructors
 * @since 2.0.0
 */

exports.left = left;
var right = /*#__PURE__*/ET.right(RT.Pointed);
/**
 * @category constructors
 * @since 2.0.0
 */

exports.right = right;
var rightTask = /*#__PURE__*/(0, _function.flow)(TE.rightTask, fromTaskEither);
/**
 * @category constructors
 * @since 2.0.0
 */

exports.rightTask = rightTask;
var leftTask = /*#__PURE__*/(0, _function.flow)(TE.leftTask, fromTaskEither);
/**
 * @category constructors
 * @since 2.0.0
 */

exports.leftTask = leftTask;

var rightReader = function rightReader(ma) {
  return (0, _function.flow)(ma, TE.right);
};
/**
 * @category constructors
 * @since 2.0.0
 */


exports.rightReader = rightReader;

var leftReader = function leftReader(me) {
  return (0, _function.flow)(me, TE.left);
};
/**
 * @category constructors
 * @since 2.5.0
 */


exports.leftReader = leftReader;
var rightReaderTask = /*#__PURE__*/ET.rightF(RT.Functor);
/**
 * @category constructors
 * @since 2.5.0
 */

exports.rightReaderTask = rightReaderTask;
var leftReaderTask = /*#__PURE__*/ET.leftF(RT.Functor);
/**
 * @category constructors
 * @since 2.0.0
 */

exports.leftReaderTask = leftReaderTask;
var rightIO = /*#__PURE__*/(0, _function.flow)(TE.rightIO, fromTaskEither);
/**
 * @category constructors
 * @since 2.0.0
 */

exports.rightIO = rightIO;
var leftIO = /*#__PURE__*/(0, _function.flow)(TE.leftIO, fromTaskEither); // -------------------------------------------------------------------------------------
// natural transformations
// -------------------------------------------------------------------------------------

/**
 * @category natural transformations
 * @since 2.0.0
 */

exports.leftIO = leftIO;
var fromEither = RT.of;
/**
 * @category natural transformations
 * @since 2.11.0
 */

exports.fromEither = fromEither;
var fromReader = rightReader;
/**
 * @category natural transformations
 * @since 2.0.0
 */

exports.fromReader = fromReader;
var fromIO = rightIO;
/**
 * @category natural transformations
 * @since 2.0.0
 */

exports.fromIO = fromIO;
var fromTask = rightTask;
/**
 * @category natural transformations
 * @since 2.0.0
 */

exports.fromTask = fromTask;
var fromIOEither = /*#__PURE__*/(0, _function.flow)(TE.fromIOEither, fromTaskEither);
/**
 * @category constructors
 * @since 2.0.0
 */

exports.fromIOEither = fromIOEither;

var fromReaderEither = function fromReaderEither(ma) {
  return (0, _function.flow)(ma, TE.fromEither);
}; // -------------------------------------------------------------------------------------
// destructors
// -------------------------------------------------------------------------------------

/**
 * @category destructors
 * @since 2.10.0
 */


exports.fromReaderEither = fromReaderEither;
var match = /*#__PURE__*/ET.match(RT.Functor);
/**
 * Less strict version of [`match`](#match).
 *
 * @category destructors
 * @since 2.10.0
 */

exports.match = match;
var matchW = match;
/**
 * @category destructors
 * @since 2.10.0
 */

exports.matchW = matchW;
var matchE = /*#__PURE__*/ET.matchE(RT.Chain);
/**
 * Alias of [`matchE`](#matche).
 *
 * @category destructors
 * @since 2.0.0
 */

exports.matchE = matchE;
var fold = matchE;
/**
 * Less strict version of [`matchE`](#matche).
 *
 * @category destructors
 * @since 2.10.0
 */

exports.fold = fold;
var matchEW = matchE;
/**
 * Alias of [`matchEW`](#matchew).
 *
 * @category destructors
 * @since 2.10.0
 */

exports.matchEW = matchEW;
var foldW = matchEW;
/**
 * @category destructors
 * @since 2.0.0
 */

exports.foldW = foldW;
var getOrElse = /*#__PURE__*/ET.getOrElse(RT.Monad);
/**
 * Less strict version of [`getOrElse`](#getorelse).
 *
 * @category destructors
 * @since 2.6.0
 */

exports.getOrElse = getOrElse;
var getOrElseW = getOrElse; // -------------------------------------------------------------------------------------
// interop
// -------------------------------------------------------------------------------------

/**
 * @category interop
 * @since 2.10.0
 */

exports.getOrElseW = getOrElseW;
var toUnion = /*#__PURE__*/ET.toUnion(RT.Functor); // -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------

/**
 * Changes the value of the local context during the execution of the action `ma` (similar to `Contravariant`'s
 * `contramap`).
 *
 * @category combinators
 * @since 2.0.0
 */

exports.toUnion = toUnion;
var local = R.local;
/**
 * Less strict version of [`asksReaderTaskEither`](#asksreadertaskeither).
 *
 * @category combinators
 * @since 2.11.0
 */

exports.local = local;
var asksReaderTaskEitherW = R.asksReaderW;
/**
 * Effectfully accesses the environment.
 *
 * @category combinators
 * @since 2.11.0
 */

exports.asksReaderTaskEitherW = asksReaderTaskEitherW;
var asksReaderTaskEither = asksReaderTaskEitherW;
/**
 * @category combinators
 * @since 2.0.0
 */

exports.asksReaderTaskEither = asksReaderTaskEither;
var orElse = /*#__PURE__*/ET.orElse(RT.Monad);
/**
 * Less strict version of [`orElse`](#orelse).
 *
 * @category combinators
 * @since 2.10.0
 */

exports.orElse = orElse;
var orElseW = orElse;
/**
 * @category combinators
 * @since 2.11.0
 */

exports.orElseW = orElseW;
var orElseFirst = /*#__PURE__*/ET.orElseFirst(RT.Monad);
/**
 * @category combinators
 * @since 2.11.0
 */

exports.orElseFirst = orElseFirst;
var orElseFirstW = orElseFirst;
/**
 * @category combinators
 * @since 2.11.0
 */

exports.orElseFirstW = orElseFirstW;
var orLeft = /*#__PURE__*/ET.orLeft(RT.Monad);
/**
 * @category combinators
 * @since 2.0.0
 */

exports.orLeft = orLeft;
var swap = /*#__PURE__*/ET.swap(RT.Functor);
/**
 * @category combinators
 * @since 2.4.0
 */

exports.swap = swap;

var fromIOEitherK = function fromIOEitherK(f) {
  return (0, _function.flow)(f, fromIOEither);
};
/**
 * Less strict version of [`chainIOEitherK`](#chainioeitherk).
 *
 * @category combinators
 * @since 2.6.1
 */


exports.fromIOEitherK = fromIOEitherK;

var chainIOEitherKW = function chainIOEitherKW(f) {
  return chainW(fromIOEitherK(f));
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
  return (0, _function.flow)(f, fromTaskEither);
};
/**
 * Less strict version of [`chainTaskEitherK`](#chaintaskeitherk).
 *
 * @category combinators
 * @since 2.6.1
 */


exports.fromTaskEitherK = fromTaskEitherK;

var chainTaskEitherKW = function chainTaskEitherKW(f) {
  return chainW(fromTaskEitherK(f));
};
/**
 * @category combinators
 * @since 2.4.0
 */


exports.chainTaskEitherKW = chainTaskEitherKW;
var chainTaskEitherK = chainTaskEitherKW;
/**
 * Less strict version of [`chainFirstTaskEitherK`](#chainfirsttaskeitherk).
 *
 * @category combinators
 * @since 2.11.0
 */

exports.chainTaskEitherK = chainTaskEitherK;

var chainFirstTaskEitherKW = function chainFirstTaskEitherKW(f) {
  return chainFirstW(fromTaskEitherK(f));
};
/**
 * @category combinators
 * @since 2.11.0
 */


exports.chainFirstTaskEitherKW = chainFirstTaskEitherKW;
var chainFirstTaskEitherK = chainFirstTaskEitherKW;
/**
 * @category combinators
 * @since 2.11.0
 */

exports.chainFirstTaskEitherK = chainFirstTaskEitherK;

var fromReaderEitherK = function fromReaderEitherK(f) {
  return (0, _function.flow)(f, fromReaderEither);
};
/**
 * Less strict version of [`chainReaderEitherK`](#chainreadereitherk).
 *
 * @category combinators
 * @since 2.11.0
 */


exports.fromReaderEitherK = fromReaderEitherK;

var chainReaderEitherKW = function chainReaderEitherKW(f) {
  return chainW(fromReaderEitherK(f));
};
/**
 * @category combinators
 * @since 2.11.0
 */


exports.chainReaderEitherKW = chainReaderEitherKW;
var chainReaderEitherK = chainReaderEitherKW;
/**
 * Less strict version of [`chainFirstReaderEitherK`](#chainfirstreadereitherk).
 *
 * @category combinators
 * @since 2.11.0
 */

exports.chainReaderEitherK = chainReaderEitherK;

var chainFirstReaderEitherKW = function chainFirstReaderEitherKW(f) {
  return chainFirstW(fromReaderEitherK(f));
};
/**
 * @category combinators
 * @since 2.11.0
 */


exports.chainFirstReaderEitherKW = chainFirstReaderEitherKW;
var chainFirstReaderEitherK = chainFirstReaderEitherKW; // -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------

exports.chainFirstReaderEitherK = chainFirstReaderEitherK;

var _map = function _map(fa, f) {
  return (0, _function.pipe)(fa, map(f));
};

var _apPar = function _apPar(fab, fa) {
  return (0, _function.pipe)(fab, ap(fa));
};

var _apSeq = function _apSeq(fab, fa) {
  return (0, _function.pipe)(fab, chain(function (f) {
    return (0, _function.pipe)(fa, map(f));
  }));
};
/* istanbul ignore next */


var _chain = function _chain(ma, f) {
  return (0, _function.pipe)(ma, chain(f));
};
/* istanbul ignore next */


var _alt = function _alt(fa, that) {
  return (0, _function.pipe)(fa, alt(that));
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
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent some computational context.
 *
 * @category Functor
 * @since 2.0.0
 */


var map = /*#__PURE__*/ET.map(RT.Functor);
/**
 * Map a pair of functions over the two last type arguments of the bifunctor.
 *
 * @category Bifunctor
 * @since 2.0.0
 */

exports.map = map;
var bimap = /*#__PURE__*/ET.bimap(RT.Functor);
/**
 * Map a function over the second type argument of a bifunctor.
 *
 * @category Bifunctor
 * @since 2.0.0
 */

exports.bimap = bimap;
var mapLeft = /*#__PURE__*/ET.mapLeft(RT.Functor);
/**
 * Apply a function to an argument under a type constructor.
 *
 * @category Apply
 * @since 2.0.0
 */

exports.mapLeft = mapLeft;
var ap = /*#__PURE__*/ET.ap(RT.ApplyPar);
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
var chain = /*#__PURE__*/ET.chain(RT.Monad);
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
 * Identifies an associative operation on a type constructor. It is similar to `Semigroup`, except that it applies to
 * types of kind `* -> *`.
 *
 * @category Alt
 * @since 2.0.0
 */

exports.flatten = flatten;
var alt = /*#__PURE__*/ET.alt(RT.Monad);
/**
 * Less strict version of [`alt`](#alt).
 *
 * @category Alt
 * @since 2.9.0
 */

exports.alt = alt;
var altW = alt;
/**
 * @category MonadThrow
 * @since 2.0.0
 */

exports.altW = altW;
var throwError = left; // -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------

/**
 * @category instances
 * @since 2.0.0
 */

exports.throwError = throwError;
var URI = 'ReaderTaskEither';
/**
 * @category instances
 * @since 2.0.0
 */

exports.URI = URI;

/**
 * @category instances
 * @since 2.10.0
 */
var getCompactable = function getCompactable(M) {
  var C = E.getCompactable(M);
  return {
    URI: URI,
    _E: undefined,
    compact: (0, _Compactable.compact)(RT.Functor, C),
    separate: (0, _Compactable.separate)(RT.Functor, C, E.Functor)
  };
};
/**
 * @category instances
 * @since 2.10.0
 */


exports.getCompactable = getCompactable;

function getFilterable(M) {
  var F = E.getFilterable(M);
  var C = getCompactable(M);

  var _filter = (0, _Filterable.filter)(RT.Functor, F);

  var _filterMap = (0, _Filterable.filterMap)(RT.Functor, F);

  var _partition = (0, _Filterable.partition)(RT.Functor, F);

  var _partitionMap = (0, _Filterable.partitionMap)(RT.Functor, F);

  return {
    URI: URI,
    _E: undefined,
    map: _map,
    compact: C.compact,
    separate: C.separate,
    filter: function filter(fa, predicate) {
      return (0, _function.pipe)(fa, _filter(predicate));
    },
    filterMap: function filterMap(fa, f) {
      return (0, _function.pipe)(fa, _filterMap(f));
    },
    partition: function partition(fa, predicate) {
      return (0, _function.pipe)(fa, _partition(predicate));
    },
    partitionMap: function partitionMap(fa, f) {
      return (0, _function.pipe)(fa, _partitionMap(f));
    }
  };
}
/**
 * @category instances
 * @since 2.7.0
 */


function getApplicativeReaderTaskValidation(A, S) {
  var _ap = (0, _Apply.ap)(R.Apply, TE.getApplicativeTaskValidation(A, S));

  return {
    URI: URI,
    _E: undefined,
    map: _map,
    ap: function ap(fab, fa) {
      return (0, _function.pipe)(fab, _ap(fa));
    },
    of: of
  };
}
/**
 * @category instances
 * @since 2.7.0
 */


function getAltReaderTaskValidation(S) {
  var _alt2 = ET.altValidation(RT.Monad, S);

  return {
    URI: URI,
    _E: undefined,
    map: _map,
    alt: function alt(fa, that) {
      return (0, _function.pipe)(fa, _alt2(that));
    }
  };
}
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
var ApplyPar = {
  URI: URI,
  map: _map,
  ap: _apPar
};
/**
 * Combine two effectful actions, keeping only the result of the first.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.0.0
 */

exports.ApplyPar = ApplyPar;
var apFirst = /*#__PURE__*/(0, _Apply.apFirst)(ApplyPar);
/**
 * Combine two effectful actions, keeping only the result of the second.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.0.0
 */

exports.apFirst = apFirst;
var apSecond = /*#__PURE__*/(0, _Apply.apSecond)(ApplyPar);
/**
 * @category instances
 * @since 2.7.0
 */

exports.apSecond = apSecond;
var ApplicativePar = {
  URI: URI,
  map: _map,
  ap: _apPar,
  of: of
};
/**
 * @category instances
 * @since 2.10.0
 */

exports.ApplicativePar = ApplicativePar;
var ApplySeq = {
  URI: URI,
  map: _map,
  ap: _apSeq
};
/**
 * @category instances
 * @since 2.7.0
 */

exports.ApplySeq = ApplySeq;
var ApplicativeSeq = {
  URI: URI,
  map: _map,
  ap: _apSeq,
  of: of
};
/**
 * @category instances
 * @since 2.10.0
 */

exports.ApplicativeSeq = ApplicativeSeq;
var Chain = {
  URI: URI,
  map: _map,
  ap: _apPar,
  chain: _chain
};
/**
 * @category instances
 * @since 2.10.0
 */

exports.Chain = Chain;
var Monad = {
  URI: URI,
  map: _map,
  ap: _apPar,
  chain: _chain,
  of: of
};
/**
 * @category instances
 * @since 2.10.0
 */

exports.Monad = Monad;
var MonadIO = {
  URI: URI,
  map: _map,
  ap: _apPar,
  chain: _chain,
  of: of,
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
  ap: _apPar,
  chain: _chain,
  of: of,
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
  ap: _apPar,
  chain: _chain,
  of: of,
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
 * @since 2.0.0
 */

exports.FromReader = FromReader;
var ask = /*#__PURE__*/(0, _FromReader.ask)(FromReader);
/**
 * Projects a value from the global context in a `ReaderEither`.
 *
 * @category constructors
 * @since 2.0.0
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
 * Less strict version of [`chainReaderK`](#chainreaderk).
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
 * Less strict version of [`chainFirstReaderK`](#chainfirstreaderk).
 *
 * @category combinators
 * @since 2.11.0
 */

exports.chainFirstReaderK = chainFirstReaderK;
var chainFirstReaderKW = chainFirstReaderK;
/**
 * @category combinators
 * @since 2.11.0
 */

exports.chainFirstReaderKW = chainFirstReaderKW;

var fromReaderTaskK = function fromReaderTaskK(f) {
  return function () {
    return rightReaderTask(f.apply(void 0, arguments));
  };
};
/**
 * Less strict version of [`chainReaderTaskK`](#chainreadertaskk).
 *
 * @category combinators
 * @since 2.11.0
 */


exports.fromReaderTaskK = fromReaderTaskK;

var chainReaderTaskKW = function chainReaderTaskKW(f) {
  return chainW(fromReaderTaskK(f));
};
/**
 * @category combinators
 * @since 2.11.0
 */


exports.chainReaderTaskKW = chainReaderTaskKW;
var chainReaderTaskK = chainReaderTaskKW;
/**
 * Less strict version of [`chainFirstReaderTaskK`](#chainfirstreadertaskk).
 *
 * @category combinators
 * @since 2.11.0
 */

exports.chainReaderTaskK = chainReaderTaskK;

var chainFirstReaderTaskKW = function chainFirstReaderTaskKW(f) {
  return chainFirstW(fromReaderTaskK(f));
};
/**
 * @category combinators
 * @since 2.11.0
 */


exports.chainFirstReaderTaskKW = chainFirstReaderTaskKW;
var chainFirstReaderTaskK = chainFirstReaderTaskKW;
/**
 * @category instances
 * @since 2.10.0
 */

exports.chainFirstReaderTaskK = chainFirstReaderTaskK;
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
 * @since 2.0.0
 */

exports.chainEitherKW = chainEitherKW;
var fromPredicate = /*#__PURE__*/(0, _FromEither.fromPredicate)(FromEither);
/**
 * @category combinators
 * @since 2.0.0
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
 * Make sure that a resource is cleaned up in the event of an exception (\*). The release action is called regardless of
 * whether the body action throws (\*) or returns.
 *
 * (\*) i.e. returns a `Left`
 *
 * @since 2.0.4
 */

exports.chainFirstTaskK = chainFirstTaskK;

function bracket(aquire, use, release) {
  return function (r) {
    return TE.bracket(aquire(r), function (a) {
      return use(a)(r);
    }, function (a, e) {
      return release(a, e)(r);
    });
  };
} // -------------------------------------------------------------------------------------
// do notation
// -------------------------------------------------------------------------------------

/**
 * @since 2.9.0
 */


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
var apS = /*#__PURE__*/(0, _Apply.apS)(ApplyPar);
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
 * Equivalent to `ReadonlyNonEmptyArray#traverseWithIndex(ApplicativePar)`.
 *
 * @since 2.11.0
 */

exports.ApT = ApT;

var traverseReadonlyNonEmptyArrayWithIndex = function traverseReadonlyNonEmptyArrayWithIndex(f) {
  return (0, _function.flow)(R.traverseReadonlyNonEmptyArrayWithIndex(f), R.map(TE.traverseReadonlyNonEmptyArrayWithIndex(_function.SK)));
};
/**
 * Equivalent to `ReadonlyArray#traverseWithIndex(ApplicativePar)`.
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
 * Equivalent to `ReadonlyNonEmptyArray#traverseWithIndex(ApplicativeSeq)`.
 *
 * @since 2.11.0
 */


exports.traverseReadonlyArrayWithIndex = traverseReadonlyArrayWithIndex;

var traverseReadonlyNonEmptyArrayWithIndexSeq = function traverseReadonlyNonEmptyArrayWithIndexSeq(f) {
  return (0, _function.flow)(R.traverseReadonlyNonEmptyArrayWithIndex(f), R.map(TE.traverseReadonlyNonEmptyArrayWithIndexSeq(_function.SK)));
};
/**
 * Equivalent to `ReadonlyArray#traverseWithIndex(ApplicativeSeq)`.
 *
 * @since 2.11.0
 */


exports.traverseReadonlyNonEmptyArrayWithIndexSeq = traverseReadonlyNonEmptyArrayWithIndexSeq;

var traverseReadonlyArrayWithIndexSeq = function traverseReadonlyArrayWithIndexSeq(f) {
  var g = traverseReadonlyNonEmptyArrayWithIndexSeq(f);
  return function (as) {
    return _.isNonEmpty(as) ? g(as) : ApT;
  };
};
/**
 * @since 2.9.0
 */


exports.traverseReadonlyArrayWithIndexSeq = traverseReadonlyArrayWithIndexSeq;
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
var sequenceArray = /*#__PURE__*/traverseArray(_function.identity);
/**
 * @since 2.9.0
 */

exports.sequenceArray = sequenceArray;
var traverseSeqArrayWithIndex = traverseReadonlyArrayWithIndexSeq;
/**
 * @since 2.9.0
 */

exports.traverseSeqArrayWithIndex = traverseSeqArrayWithIndex;

var traverseSeqArray = function traverseSeqArray(f) {
  return traverseReadonlyArrayWithIndexSeq(function (_, a) {
    return f(a);
  });
};
/**
 * @since 2.9.0
 */


exports.traverseSeqArray = traverseSeqArray;
var sequenceSeqArray = /*#__PURE__*/traverseSeqArray(_function.identity); // -------------------------------------------------------------------------------------
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

exports.sequenceSeqArray = sequenceSeqArray;
var readerTaskEither = {
  URI: URI,
  map: _map,
  of: of,
  ap: _apPar,
  chain: _chain,
  alt: _alt,
  bimap: _bimap,
  mapLeft: _mapLeft,
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

exports.readerTaskEither = readerTaskEither;
var readerTaskEitherSeq = {
  URI: URI,
  map: _map,
  of: of,
  ap: _apSeq,
  chain: _chain,
  alt: _alt,
  bimap: _bimap,
  mapLeft: _mapLeft,
  fromIO: fromIO,
  fromTask: fromTask,
  throwError: throwError
};
/**
 * Use [`getApplySemigroup`](./Apply.ts.html#getapplysemigroup) instead.
 *
 * Semigroup returning the left-most `Left` value. If both operands are `Right`s then the inner values
 * are concatenated using the provided `Semigroup`
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */

exports.readerTaskEitherSeq = readerTaskEitherSeq;
var getApplySemigroup = /*#__PURE__*/(0, _Apply.getApplySemigroup)(ApplySeq);
/**
 * Use [`getApplicativeMonoid`](./Applicative.ts.html#getapplicativemonoid) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */

exports.getApplySemigroup = getApplySemigroup;
var getApplyMonoid = /*#__PURE__*/(0, _Applicative.getApplicativeMonoid)(ApplicativeSeq);
/**
 * Use [`getApplySemigroup`](./Apply.ts.html#getapplysemigroup) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */

exports.getApplyMonoid = getApplyMonoid;

var getSemigroup = function getSemigroup(S) {
  return (0, _Apply.getApplySemigroup)(RT.ApplySeq)(E.getSemigroup(S));
};
/**
 * Use [`getApplicativeReaderTaskValidation`](#getapplicativereadertaskvalidation) and [`getAltReaderTaskValidation`](#getaltreadertaskvalidation) instead.
 *
 * @category instances
 * @since 2.3.0
 * @deprecated
 */


exports.getSemigroup = getSemigroup;

function getReaderTaskValidation(SE) {
  var applicativeReaderTaskValidation = getApplicativeReaderTaskValidation(T.ApplicativePar, SE);
  var altReaderTaskValidation = getAltReaderTaskValidation(SE);
  return {
    URI: URI,
    _E: undefined,
    map: _map,
    of: of,
    chain: _chain,
    bimap: _bimap,
    mapLeft: _mapLeft,
    ap: applicativeReaderTaskValidation.ap,
    alt: altReaderTaskValidation.alt,
    fromIO: fromIO,
    fromTask: fromTask,
    throwError: throwError
  };
}
/**
 * @since 2.0.0
 * @deprecated
 */

/* istanbul ignore next */


function run(ma, r) {
  return ma(r)();
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mcC10cy9SZWFkZXJUYXNrRWl0aGVyLnRzIl0sIm5hbWVzIjpbIkVpdGhlciIsIkUiLCJUYXNrIiwiVCIsIlRhc2tFaXRoZXIiLCJURSIsIlJlYWRlciIsIlIiLCJSZWFkZXJUYXNrIiwiUlQiLCJmcm9tVGFza0VpdGhlciIsIm9mIiwibGVmdCIsIkVUIiwiUG9pbnRlZCIsInJpZ2h0IiwicmlnaHRUYXNrIiwibGVmdFRhc2siLCJyaWdodFJlYWRlciIsIm1hIiwibGVmdFJlYWRlciIsIm1lIiwicmlnaHRSZWFkZXJUYXNrIiwicmlnaHRGIiwiRnVuY3RvciIsImxlZnRSZWFkZXJUYXNrIiwibGVmdEYiLCJyaWdodElPIiwibGVmdElPIiwiZnJvbUVpdGhlciIsImZyb21SZWFkZXIiLCJmcm9tSU8iLCJmcm9tVGFzayIsImZyb21JT0VpdGhlciIsImZyb21SZWFkZXJFaXRoZXIiLCJtYXRjaCIsIm1hdGNoVyIsIm1hdGNoRSIsIkNoYWluIiwiZm9sZCIsIm1hdGNoRVciLCJmb2xkVyIsImdldE9yRWxzZSIsIk1vbmFkIiwiZ2V0T3JFbHNlVyIsInRvVW5pb24iLCJsb2NhbCIsImFza3NSZWFkZXJUYXNrRWl0aGVyVyIsImFza3NSZWFkZXJXIiwiYXNrc1JlYWRlclRhc2tFaXRoZXIiLCJvckVsc2UiLCJvckVsc2VXIiwib3JFbHNlRmlyc3QiLCJvckVsc2VGaXJzdFciLCJvckxlZnQiLCJzd2FwIiwiZnJvbUlPRWl0aGVySyIsImYiLCJjaGFpbklPRWl0aGVyS1ciLCJjaGFpblciLCJjaGFpbklPRWl0aGVySyIsImZyb21UYXNrRWl0aGVySyIsImNoYWluVGFza0VpdGhlcktXIiwiY2hhaW5UYXNrRWl0aGVySyIsImNoYWluRmlyc3RUYXNrRWl0aGVyS1ciLCJjaGFpbkZpcnN0VyIsImNoYWluRmlyc3RUYXNrRWl0aGVySyIsImZyb21SZWFkZXJFaXRoZXJLIiwiY2hhaW5SZWFkZXJFaXRoZXJLVyIsImNoYWluUmVhZGVyRWl0aGVySyIsImNoYWluRmlyc3RSZWFkZXJFaXRoZXJLVyIsImNoYWluRmlyc3RSZWFkZXJFaXRoZXJLIiwiX21hcCIsImZhIiwibWFwIiwiX2FwUGFyIiwiZmFiIiwiYXAiLCJfYXBTZXEiLCJjaGFpbiIsIl9jaGFpbiIsIl9hbHQiLCJ0aGF0IiwiYWx0IiwiX2JpbWFwIiwiZyIsImJpbWFwIiwiX21hcExlZnQiLCJtYXBMZWZ0IiwiQXBwbHlQYXIiLCJhcFciLCJmbGF0dGVuVyIsImlkZW50aXR5IiwiZmxhdHRlbiIsImFsdFciLCJ0aHJvd0Vycm9yIiwiVVJJIiwiZ2V0Q29tcGFjdGFibGUiLCJNIiwiQyIsIl9FIiwidW5kZWZpbmVkIiwiY29tcGFjdCIsInNlcGFyYXRlIiwiZ2V0RmlsdGVyYWJsZSIsIkYiLCJmaWx0ZXIiLCJmaWx0ZXJNYXAiLCJwYXJ0aXRpb24iLCJwYXJ0aXRpb25NYXAiLCJwcmVkaWNhdGUiLCJnZXRBcHBsaWNhdGl2ZVJlYWRlclRhc2tWYWxpZGF0aW9uIiwiQSIsIlMiLCJBcHBseSIsImdldEFwcGxpY2F0aXZlVGFza1ZhbGlkYXRpb24iLCJnZXRBbHRSZWFkZXJUYXNrVmFsaWRhdGlvbiIsImFsdFZhbGlkYXRpb24iLCJmbGFwIiwiYXBGaXJzdCIsImFwU2Vjb25kIiwiQXBwbGljYXRpdmVQYXIiLCJBcHBseVNlcSIsIkFwcGxpY2F0aXZlU2VxIiwiTW9uYWRJTyIsIk1vbmFkVGFzayIsIk1vbmFkVGhyb3ciLCJjaGFpbkZpcnN0IiwiQmlmdW5jdG9yIiwiQWx0IiwiRnJvbVJlYWRlciIsImFzayIsImFza3MiLCJmcm9tUmVhZGVySyIsImNoYWluUmVhZGVySyIsImNoYWluUmVhZGVyS1ciLCJjaGFpbkZpcnN0UmVhZGVySyIsImNoYWluRmlyc3RSZWFkZXJLVyIsImZyb21SZWFkZXJUYXNrSyIsImNoYWluUmVhZGVyVGFza0tXIiwiY2hhaW5SZWFkZXJUYXNrSyIsImNoYWluRmlyc3RSZWFkZXJUYXNrS1ciLCJjaGFpbkZpcnN0UmVhZGVyVGFza0siLCJGcm9tRWl0aGVyIiwiZnJvbU9wdGlvbiIsImZyb21PcHRpb25LIiwiY2hhaW5PcHRpb25LIiwiY2hhaW5FaXRoZXJLIiwiY2hhaW5FaXRoZXJLVyIsImZyb21QcmVkaWNhdGUiLCJmaWx0ZXJPckVsc2UiLCJmaWx0ZXJPckVsc2VXIiwiZnJvbUVpdGhlcksiLCJGcm9tSU8iLCJmcm9tSU9LIiwiY2hhaW5JT0siLCJjaGFpbkZpcnN0SU9LIiwiRnJvbVRhc2siLCJmcm9tVGFza0siLCJjaGFpblRhc2tLIiwiY2hhaW5GaXJzdFRhc2tLIiwiYnJhY2tldCIsImFxdWlyZSIsInVzZSIsInJlbGVhc2UiLCJyIiwiYSIsImUiLCJEbyIsIl8iLCJlbXB0eVJlY29yZCIsImJpbmRUbyIsImJpbmQiLCJiaW5kVyIsImFwUyIsImFwU1ciLCJBcFQiLCJlbXB0eVJlYWRvbmx5QXJyYXkiLCJ0cmF2ZXJzZVJlYWRvbmx5Tm9uRW1wdHlBcnJheVdpdGhJbmRleCIsIlNLIiwidHJhdmVyc2VSZWFkb25seUFycmF5V2l0aEluZGV4IiwiYXMiLCJpc05vbkVtcHR5IiwidHJhdmVyc2VSZWFkb25seU5vbkVtcHR5QXJyYXlXaXRoSW5kZXhTZXEiLCJ0cmF2ZXJzZVJlYWRvbmx5QXJyYXlXaXRoSW5kZXhTZXEiLCJ0cmF2ZXJzZUFycmF5V2l0aEluZGV4IiwidHJhdmVyc2VBcnJheSIsInNlcXVlbmNlQXJyYXkiLCJ0cmF2ZXJzZVNlcUFycmF5V2l0aEluZGV4IiwidHJhdmVyc2VTZXFBcnJheSIsInNlcXVlbmNlU2VxQXJyYXkiLCJyZWFkZXJUYXNrRWl0aGVyIiwicmVhZGVyVGFza0VpdGhlclNlcSIsImdldEFwcGx5U2VtaWdyb3VwIiwiZ2V0QXBwbHlNb25vaWQiLCJnZXRTZW1pZ3JvdXAiLCJnZXRSZWFkZXJUYXNrVmFsaWRhdGlvbiIsIlNFIiwiYXBwbGljYXRpdmVSZWFkZXJUYXNrVmFsaWRhdGlvbiIsImFsdFJlYWRlclRhc2tWYWxpZGF0aW9uIiwicnVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBOztBQUNBOztB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RUFBRSxDQUFDaUgsUUFBdEIsRUFBZ0N6SCxDQUFDLENBQUNrTSxZQUFGLENBQWVsRixDQUFmLENBQWhDLENBRDBCO0FBQUEsQ0FBckI7QUFHUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDTyxTQUFTbUYsdUJBQVQsQ0FDTEMsRUFESyxFQUUyRjtBQUNoRyxNQUFNQywrQkFBK0IsR0FBR3ZGLGtDQUFrQyxDQUFDNUcsQ0FBQyxDQUFDc0gsY0FBSCxFQUFtQjRFLEVBQW5CLENBQTFFO0FBQ0EsTUFBTUUsdUJBQXVCLEdBQUduRiwwQkFBMEIsQ0FBQ2lGLEVBQUQsQ0FBMUQ7QUFDQSxTQUFPO0FBQ0xyRyxJQUFBQSxHQUFHLEVBQUhBLEdBREs7QUFFTEksSUFBQUEsRUFBRSxFQUFFQyxTQUZDO0FBR0wzQixJQUFBQSxHQUFHLEVBQUVGLElBSEE7QUFJTDdELElBQUFBLEVBQUUsRUFBRkEsRUFKSztBQUtMb0UsSUFBQUEsS0FBSyxFQUFFQyxNQUxGO0FBTUxNLElBQUFBLEtBQUssRUFBRUYsTUFORjtBQU9MSSxJQUFBQSxPQUFPLEVBQUVELFFBUEo7QUFRTFYsSUFBQUEsRUFBRSxFQUFFeUgsK0JBQStCLENBQUN6SCxFQVIvQjtBQVNMTSxJQUFBQSxHQUFHLEVBQUVvSCx1QkFBdUIsQ0FBQ3BILEdBVHhCO0FBVUxwRCxJQUFBQSxNQUFNLEVBQU5BLE1BVks7QUFXTEMsSUFBQUEsUUFBUSxFQUFSQSxRQVhLO0FBWUwrRCxJQUFBQSxVQUFVLEVBQVZBO0FBWkssR0FBUDtBQWNEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7OztBQUNPLFNBQVN5RyxHQUFULENBQXNCckwsRUFBdEIsRUFBcURrSixDQUFyRCxFQUFrRjtBQUN2RixTQUFPbEosRUFBRSxDQUFDa0osQ0FBRCxDQUFGLEVBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmltcG9ydCB7IEFsdDMsIEFsdDNDIH0gZnJvbSAnLi9BbHQnXG5pbXBvcnQgeyBBcHBsaWNhdGl2ZTMsIEFwcGxpY2F0aXZlM0MsIGdldEFwcGxpY2F0aXZlTW9ub2lkIH0gZnJvbSAnLi9BcHBsaWNhdGl2ZSdcbmltcG9ydCB7XG4gIGFwIGFzIGFwXyxcbiAgYXBGaXJzdCBhcyBhcEZpcnN0XyxcbiAgQXBwbHkxLFxuICBBcHBseTMsXG4gIGFwUyBhcyBhcFNfLFxuICBhcFNlY29uZCBhcyBhcFNlY29uZF8sXG4gIGdldEFwcGx5U2VtaWdyb3VwIGFzIGdldEFwcGx5U2VtaWdyb3VwX1xufSBmcm9tICcuL0FwcGx5J1xuaW1wb3J0IHsgQmlmdW5jdG9yMyB9IGZyb20gJy4vQmlmdW5jdG9yJ1xuaW1wb3J0IHsgYmluZCBhcyBiaW5kXywgQ2hhaW4zLCBjaGFpbkZpcnN0IGFzIGNoYWluRmlyc3RfIH0gZnJvbSAnLi9DaGFpbidcbmltcG9ydCB7IGNvbXBhY3QgYXMgY29tcGFjdF8sIENvbXBhY3RhYmxlM0MsIHNlcGFyYXRlIGFzIHNlcGFyYXRlXyB9IGZyb20gJy4vQ29tcGFjdGFibGUnXG5pbXBvcnQgKiBhcyBFIGZyb20gJy4vRWl0aGVyJ1xuaW1wb3J0ICogYXMgRVQgZnJvbSAnLi9FaXRoZXJUJ1xuaW1wb3J0IHtcbiAgZmlsdGVyIGFzIGZpbHRlcl8sXG4gIEZpbHRlcmFibGUzQyxcbiAgZmlsdGVyTWFwIGFzIGZpbHRlck1hcF8sXG4gIHBhcnRpdGlvbiBhcyBwYXJ0aXRpb25fLFxuICBwYXJ0aXRpb25NYXAgYXMgcGFydGl0aW9uTWFwX1xufSBmcm9tICcuL0ZpbHRlcmFibGUnXG5pbXBvcnQge1xuICBjaGFpbkVpdGhlcksgYXMgY2hhaW5FaXRoZXJLXyxcbiAgY2hhaW5PcHRpb25LIGFzIGNoYWluT3B0aW9uS18sXG4gIGZpbHRlck9yRWxzZSBhcyBmaWx0ZXJPckVsc2VfLFxuICBGcm9tRWl0aGVyMyxcbiAgZnJvbUVpdGhlcksgYXMgZnJvbUVpdGhlcktfLFxuICBmcm9tT3B0aW9uIGFzIGZyb21PcHRpb25fLFxuICBmcm9tT3B0aW9uSyBhcyBmcm9tT3B0aW9uS18sXG4gIGZyb21QcmVkaWNhdGUgYXMgZnJvbVByZWRpY2F0ZV9cbn0gZnJvbSAnLi9Gcm9tRWl0aGVyJ1xuaW1wb3J0IHsgY2hhaW5GaXJzdElPSyBhcyBjaGFpbkZpcnN0SU9LXywgY2hhaW5JT0sgYXMgY2hhaW5JT0tfLCBGcm9tSU8zLCBmcm9tSU9LIGFzIGZyb21JT0tfIH0gZnJvbSAnLi9Gcm9tSU8nXG5pbXBvcnQge1xuICBhc2sgYXMgYXNrXyxcbiAgYXNrcyBhcyBhc2tzXyxcbiAgY2hhaW5GaXJzdFJlYWRlcksgYXMgY2hhaW5GaXJzdFJlYWRlcktfLFxuICBjaGFpblJlYWRlcksgYXMgY2hhaW5SZWFkZXJLXyxcbiAgRnJvbVJlYWRlcjMsXG4gIGZyb21SZWFkZXJLIGFzIGZyb21SZWFkZXJLX1xufSBmcm9tICcuL0Zyb21SZWFkZXInXG5pbXBvcnQge1xuICBjaGFpbkZpcnN0VGFza0sgYXMgY2hhaW5GaXJzdFRhc2tLXyxcbiAgY2hhaW5UYXNrSyBhcyBjaGFpblRhc2tLXyxcbiAgRnJvbVRhc2szLFxuICBmcm9tVGFza0sgYXMgZnJvbVRhc2tLX1xufSBmcm9tICcuL0Zyb21UYXNrJ1xuaW1wb3J0IHsgZmxvdywgaWRlbnRpdHksIExhenksIHBpcGUsIFNLIH0gZnJvbSAnLi9mdW5jdGlvbidcbmltcG9ydCB7IGJpbmRUbyBhcyBiaW5kVG9fLCBmbGFwIGFzIGZsYXBfLCBGdW5jdG9yMyB9IGZyb20gJy4vRnVuY3RvcidcbmltcG9ydCAqIGFzIF8gZnJvbSAnLi9pbnRlcm5hbCdcbmltcG9ydCB7IElPIH0gZnJvbSAnLi9JTydcbmltcG9ydCB7IElPRWl0aGVyLCBVUkkgYXMgSUVVUkkgfSBmcm9tICcuL0lPRWl0aGVyJ1xuaW1wb3J0IHsgTW9uYWQzLCBNb25hZDNDIH0gZnJvbSAnLi9Nb25hZCdcbmltcG9ydCB7IE1vbmFkSU8zIH0gZnJvbSAnLi9Nb25hZElPJ1xuaW1wb3J0IHsgTW9uYWRUYXNrMywgTW9uYWRUYXNrM0MgfSBmcm9tICcuL01vbmFkVGFzaydcbmltcG9ydCB7IE1vbmFkVGhyb3czLCBNb25hZFRocm93M0MgfSBmcm9tICcuL01vbmFkVGhyb3cnXG5pbXBvcnQgeyBNb25vaWQgfSBmcm9tICcuL01vbm9pZCdcbmltcG9ydCB7IE5hdHVyYWxUcmFuc2Zvcm1hdGlvbjEzQywgTmF0dXJhbFRyYW5zZm9ybWF0aW9uMjMsIE5hdHVyYWxUcmFuc2Zvcm1hdGlvbjMzIH0gZnJvbSAnLi9OYXR1cmFsVHJhbnNmb3JtYXRpb24nXG5pbXBvcnQgeyBVUkkgYXMgT1VSSSB9IGZyb20gJy4vT3B0aW9uJ1xuaW1wb3J0IHsgUG9pbnRlZDMgfSBmcm9tICcuL1BvaW50ZWQnXG5pbXBvcnQgeyBQcmVkaWNhdGUgfSBmcm9tICcuL1ByZWRpY2F0ZSdcbmltcG9ydCAqIGFzIFIgZnJvbSAnLi9SZWFkZXInXG5pbXBvcnQgeyBSZWFkZXJFaXRoZXIsIFVSSSBhcyBSRVVSSSB9IGZyb20gJy4vUmVhZGVyRWl0aGVyJ1xuaW1wb3J0ICogYXMgUlQgZnJvbSAnLi9SZWFkZXJUYXNrJ1xuaW1wb3J0IHsgUmVhZG9ubHlOb25FbXB0eUFycmF5IH0gZnJvbSAnLi9SZWFkb25seU5vbkVtcHR5QXJyYXknXG5pbXBvcnQgeyBSZWZpbmVtZW50IH0gZnJvbSAnLi9SZWZpbmVtZW50J1xuaW1wb3J0IHsgU2VtaWdyb3VwIH0gZnJvbSAnLi9TZW1pZ3JvdXAnXG5pbXBvcnQgKiBhcyBUIGZyb20gJy4vVGFzaydcbmltcG9ydCAqIGFzIFRFIGZyb20gJy4vVGFza0VpdGhlcidcblxuaW1wb3J0IEVpdGhlciA9IEUuRWl0aGVyXG5pbXBvcnQgVGFzayA9IFQuVGFza1xuaW1wb3J0IFRhc2tFaXRoZXIgPSBURS5UYXNrRWl0aGVyXG5pbXBvcnQgUmVhZGVyID0gUi5SZWFkZXJcbmltcG9ydCBSZWFkZXJUYXNrID0gUlQuUmVhZGVyVGFza1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBtb2RlbFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEBjYXRlZ29yeSBtb2RlbFxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUmVhZGVyVGFza0VpdGhlcjxSLCBFLCBBPiB7XG4gIChyOiBSKTogVGFza0VpdGhlcjxFLCBBPlxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBjb25zdHJ1Y3RvcnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgbmF0dXJhbCB0cmFuc2Zvcm1hdGlvbnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgZnJvbVRhc2tFaXRoZXI6IE5hdHVyYWxUcmFuc2Zvcm1hdGlvbjIzPFRFLlVSSSwgVVJJPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgUi5vZlxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb25zdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgbGVmdDogPFIsIEUgPSBuZXZlciwgQSA9IG5ldmVyPihlOiBFKSA9PiBSZWFkZXJUYXNrRWl0aGVyPFIsIEUsIEE+ID1cbiAgLyojX19QVVJFX18qL1xuICBFVC5sZWZ0KFJULlBvaW50ZWQpXG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbnN0cnVjdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCByaWdodDogPFIsIEUgPSBuZXZlciwgQSA9IG5ldmVyPihhOiBBKSA9PiBSZWFkZXJUYXNrRWl0aGVyPFIsIEUsIEE+ID1cbiAgLyojX19QVVJFX18qL1xuICBFVC5yaWdodChSVC5Qb2ludGVkKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb25zdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgcmlnaHRUYXNrOiA8UiwgRSA9IG5ldmVyLCBBID0gbmV2ZXI+KG1hOiBUYXNrPEE+KSA9PiBSZWFkZXJUYXNrRWl0aGVyPFIsIEUsIEE+ID1cbiAgLyojX19QVVJFX18qL1xuICBmbG93KFRFLnJpZ2h0VGFzaywgZnJvbVRhc2tFaXRoZXIpXG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbnN0cnVjdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBsZWZ0VGFzazogPFIsIEUgPSBuZXZlciwgQSA9IG5ldmVyPihtZTogVGFzazxFPikgPT4gUmVhZGVyVGFza0VpdGhlcjxSLCBFLCBBPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZmxvdyhURS5sZWZ0VGFzaywgZnJvbVRhc2tFaXRoZXIpXG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbnN0cnVjdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCByaWdodFJlYWRlcjogPFIsIEUgPSBuZXZlciwgQSA9IG5ldmVyPihtYTogUmVhZGVyPFIsIEE+KSA9PiBSZWFkZXJUYXNrRWl0aGVyPFIsIEUsIEE+ID0gKG1hKSA9PlxuICBmbG93KG1hLCBURS5yaWdodClcblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29uc3RydWN0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGxlZnRSZWFkZXI6IDxSLCBFID0gbmV2ZXIsIEEgPSBuZXZlcj4obWU6IFJlYWRlcjxSLCBFPikgPT4gUmVhZGVyVGFza0VpdGhlcjxSLCBFLCBBPiA9IChtZSkgPT5cbiAgZmxvdyhtZSwgVEUubGVmdClcblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29uc3RydWN0b3JzXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGNvbnN0IHJpZ2h0UmVhZGVyVGFzazogPFIsIEUgPSBuZXZlciwgQSA9IG5ldmVyPihtYTogUmVhZGVyVGFzazxSLCBBPikgPT4gUmVhZGVyVGFza0VpdGhlcjxSLCBFLCBBPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgRVQucmlnaHRGKFJULkZ1bmN0b3IpXG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbnN0cnVjdG9yc1xuICogQHNpbmNlIDIuNS4wXG4gKi9cbmV4cG9ydCBjb25zdCBsZWZ0UmVhZGVyVGFzazogPFIsIEUgPSBuZXZlciwgQSA9IG5ldmVyPihtZTogUmVhZGVyVGFzazxSLCBFPikgPT4gUmVhZGVyVGFza0VpdGhlcjxSLCBFLCBBPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgRVQubGVmdEYoUlQuRnVuY3RvcilcblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29uc3RydWN0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHJpZ2h0SU86IDxSLCBFID0gbmV2ZXIsIEEgPSBuZXZlcj4obWE6IElPPEE+KSA9PiBSZWFkZXJUYXNrRWl0aGVyPFIsIEUsIEE+ID1cbiAgLyojX19QVVJFX18qL1xuICBmbG93KFRFLnJpZ2h0SU8sIGZyb21UYXNrRWl0aGVyKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb25zdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgbGVmdElPOiA8UiwgRSA9IG5ldmVyLCBBID0gbmV2ZXI+KG1lOiBJTzxFPikgPT4gUmVhZGVyVGFza0VpdGhlcjxSLCBFLCBBPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZmxvdyhURS5sZWZ0SU8sIGZyb21UYXNrRWl0aGVyKVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBuYXR1cmFsIHRyYW5zZm9ybWF0aW9uc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEBjYXRlZ29yeSBuYXR1cmFsIHRyYW5zZm9ybWF0aW9uc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBmcm9tRWl0aGVyOiBGcm9tRWl0aGVyMzxVUkk+Wydmcm9tRWl0aGVyJ10gPSBSVC5vZlxuXG4vKipcbiAqIEBjYXRlZ29yeSBuYXR1cmFsIHRyYW5zZm9ybWF0aW9uc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgZnJvbVJlYWRlcjogRnJvbVJlYWRlcjM8VVJJPlsnZnJvbVJlYWRlciddID0gcmlnaHRSZWFkZXJcblxuLyoqXG4gKiBAY2F0ZWdvcnkgbmF0dXJhbCB0cmFuc2Zvcm1hdGlvbnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgZnJvbUlPOiBGcm9tSU8zPFVSST5bJ2Zyb21JTyddID0gcmlnaHRJT1xuXG4vKipcbiAqIEBjYXRlZ29yeSBuYXR1cmFsIHRyYW5zZm9ybWF0aW9uc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBmcm9tVGFzazogRnJvbVRhc2szPFVSST5bJ2Zyb21UYXNrJ10gPSByaWdodFRhc2tcblxuLyoqXG4gKiBAY2F0ZWdvcnkgbmF0dXJhbCB0cmFuc2Zvcm1hdGlvbnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgZnJvbUlPRWl0aGVyOiBOYXR1cmFsVHJhbnNmb3JtYXRpb24yMzxJRVVSSSwgVVJJPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZmxvdyhURS5mcm9tSU9FaXRoZXIsIGZyb21UYXNrRWl0aGVyKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb25zdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgZnJvbVJlYWRlckVpdGhlcjogTmF0dXJhbFRyYW5zZm9ybWF0aW9uMzM8UkVVUkksIFVSST4gPSAobWEpID0+IGZsb3cobWEsIFRFLmZyb21FaXRoZXIpXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGRlc3RydWN0b3JzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQGNhdGVnb3J5IGRlc3RydWN0b3JzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBtYXRjaDogPEUsIEIsIEE+KFxuICBvbkxlZnQ6IChlOiBFKSA9PiBCLFxuICBvblJpZ2h0OiAoYTogQSkgPT4gQlxuKSA9PiA8Uj4obWE6IFJlYWRlclRhc2tFaXRoZXI8UiwgRSwgQT4pID0+IFJlYWRlclRhc2s8UiwgQj4gPVxuICAvKiNfX1BVUkVfXyovXG4gIEVULm1hdGNoKFJULkZ1bmN0b3IpXG5cbi8qKlxuICogTGVzcyBzdHJpY3QgdmVyc2lvbiBvZiBbYG1hdGNoYF0oI21hdGNoKS5cbiAqXG4gKiBAY2F0ZWdvcnkgZGVzdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IG1hdGNoVzogPEUsIEIsIEEsIEM+KFxuICBvbkxlZnQ6IChlOiBFKSA9PiBCLFxuICBvblJpZ2h0OiAoYTogQSkgPT4gQ1xuKSA9PiA8Uj4obWE6IFJlYWRlclRhc2tFaXRoZXI8UiwgRSwgQT4pID0+IFJlYWRlclRhc2s8UiwgQiB8IEM+ID0gbWF0Y2ggYXMgYW55XG5cbi8qKlxuICogQGNhdGVnb3J5IGRlc3RydWN0b3JzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBtYXRjaEU6IDxSLCBFLCBBLCBCPihcbiAgb25MZWZ0OiAoZTogRSkgPT4gUmVhZGVyVGFzazxSLCBCPixcbiAgb25SaWdodDogKGE6IEEpID0+IFJlYWRlclRhc2s8UiwgQj5cbikgPT4gKG1hOiBSZWFkZXJUYXNrRWl0aGVyPFIsIEUsIEE+KSA9PiBSZWFkZXJUYXNrPFIsIEI+ID1cbiAgLyojX19QVVJFX18qL1xuICBFVC5tYXRjaEUoUlQuQ2hhaW4pXG5cbi8qKlxuICogQWxpYXMgb2YgW2BtYXRjaEVgXSgjbWF0Y2hlKS5cbiAqXG4gKiBAY2F0ZWdvcnkgZGVzdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgZm9sZCA9IG1hdGNoRVxuXG4vKipcbiAqIExlc3Mgc3RyaWN0IHZlcnNpb24gb2YgW2BtYXRjaEVgXSgjbWF0Y2hlKS5cbiAqXG4gKiBAY2F0ZWdvcnkgZGVzdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IG1hdGNoRVc6IDxFLCBSMiwgQiwgQSwgUjMsIEM+KFxuICBvbkxlZnQ6IChlOiBFKSA9PiBSZWFkZXJUYXNrPFIyLCBCPixcbiAgb25SaWdodDogKGE6IEEpID0+IFJlYWRlclRhc2s8UjMsIEM+XG4pID0+IDxSMT4obWE6IFJlYWRlclRhc2tFaXRoZXI8UjEsIEUsIEE+KSA9PiBSZWFkZXJUYXNrPFIxICYgUjIgJiBSMywgQiB8IEM+ID0gbWF0Y2hFIGFzIGFueVxuXG4vKipcbiAqIEFsaWFzIG9mIFtgbWF0Y2hFV2BdKCNtYXRjaGV3KS5cbiAqXG4gKiBAY2F0ZWdvcnkgZGVzdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZvbGRXID0gbWF0Y2hFV1xuXG4vKipcbiAqIEBjYXRlZ29yeSBkZXN0cnVjdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRPckVsc2U6IDxSLCBFLCBBPihcbiAgb25MZWZ0OiAoZTogRSkgPT4gUmVhZGVyVGFzazxSLCBBPlxuKSA9PiAobWE6IFJlYWRlclRhc2tFaXRoZXI8UiwgRSwgQT4pID0+IFJlYWRlclRhc2s8UiwgQT4gPVxuICAvKiNfX1BVUkVfXyovXG4gIEVULmdldE9yRWxzZShSVC5Nb25hZClcblxuLyoqXG4gKiBMZXNzIHN0cmljdCB2ZXJzaW9uIG9mIFtgZ2V0T3JFbHNlYF0oI2dldG9yZWxzZSkuXG4gKlxuICogQGNhdGVnb3J5IGRlc3RydWN0b3JzXG4gKiBAc2luY2UgMi42LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGdldE9yRWxzZVc6IDxSMiwgRSwgQj4oXG4gIG9uTGVmdDogKGU6IEUpID0+IFJlYWRlclRhc2s8UjIsIEI+XG4pID0+IDxSMSwgQT4obWE6IFJlYWRlclRhc2tFaXRoZXI8UjEsIEUsIEE+KSA9PiBSZWFkZXJUYXNrPFIxICYgUjIsIEEgfCBCPiA9IGdldE9yRWxzZSBhcyBhbnlcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gaW50ZXJvcFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnRlcm9wXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCB0b1VuaW9uOiA8UiwgRSwgQT4oZmE6IFJlYWRlclRhc2tFaXRoZXI8UiwgRSwgQT4pID0+IFJlYWRlclRhc2s8UiwgRSB8IEE+ID1cbiAgLyojX19QVVJFX18qL1xuICBFVC50b1VuaW9uKFJULkZ1bmN0b3IpXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGNvbWJpbmF0b3JzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQ2hhbmdlcyB0aGUgdmFsdWUgb2YgdGhlIGxvY2FsIGNvbnRleHQgZHVyaW5nIHRoZSBleGVjdXRpb24gb2YgdGhlIGFjdGlvbiBgbWFgIChzaW1pbGFyIHRvIGBDb250cmF2YXJpYW50YCdzXG4gKiBgY29udHJhbWFwYCkuXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGxvY2FsOiA8UjIsIFIxPihcbiAgZjogKHIyOiBSMikgPT4gUjFcbikgPT4gPEUsIEE+KG1hOiBSZWFkZXJUYXNrRWl0aGVyPFIxLCBFLCBBPikgPT4gUmVhZGVyVGFza0VpdGhlcjxSMiwgRSwgQT4gPSBSLmxvY2FsXG5cbi8qKlxuICogTGVzcyBzdHJpY3QgdmVyc2lvbiBvZiBbYGFza3NSZWFkZXJUYXNrRWl0aGVyYF0oI2Fza3NyZWFkZXJ0YXNrZWl0aGVyKS5cbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGFza3NSZWFkZXJUYXNrRWl0aGVyVzogPFIxLCBSMiwgRSwgQT4oXG4gIGY6IChyMTogUjEpID0+IFJlYWRlclRhc2tFaXRoZXI8UjIsIEUsIEE+XG4pID0+IFJlYWRlclRhc2tFaXRoZXI8UjEgJiBSMiwgRSwgQT4gPSBSLmFza3NSZWFkZXJXXG5cbi8qKlxuICogRWZmZWN0ZnVsbHkgYWNjZXNzZXMgdGhlIGVudmlyb25tZW50LlxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgYXNrc1JlYWRlclRhc2tFaXRoZXI6IDxSLCBFLCBBPihcbiAgZjogKHI6IFIpID0+IFJlYWRlclRhc2tFaXRoZXI8UiwgRSwgQT5cbikgPT4gUmVhZGVyVGFza0VpdGhlcjxSLCBFLCBBPiA9IGFza3NSZWFkZXJUYXNrRWl0aGVyV1xuXG4vKipcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBvckVsc2U6IDxSLCBFMSwgQSwgRTI+KFxuICBvbkxlZnQ6IChlOiBFMSkgPT4gUmVhZGVyVGFza0VpdGhlcjxSLCBFMiwgQT5cbikgPT4gKG1hOiBSZWFkZXJUYXNrRWl0aGVyPFIsIEUxLCBBPikgPT4gUmVhZGVyVGFza0VpdGhlcjxSLCBFMiwgQT4gPVxuICAvKiNfX1BVUkVfXyovXG4gIEVULm9yRWxzZShSVC5Nb25hZClcblxuLyoqXG4gKiBMZXNzIHN0cmljdCB2ZXJzaW9uIG9mIFtgb3JFbHNlYF0oI29yZWxzZSkuXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBvckVsc2VXOiA8RTEsIFIxLCBFMiwgQj4oXG4gIG9uTGVmdDogKGU6IEUxKSA9PiBSZWFkZXJUYXNrRWl0aGVyPFIxLCBFMiwgQj5cbikgPT4gPFIyLCBBPihtYTogUmVhZGVyVGFza0VpdGhlcjxSMiwgRTEsIEE+KSA9PiBSZWFkZXJUYXNrRWl0aGVyPFIxICYgUjIsIEUyLCBBIHwgQj4gPSBvckVsc2UgYXMgYW55XG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBvckVsc2VGaXJzdDogPEUsIFIsIEI+KFxuICBvbkxlZnQ6IChlOiBFKSA9PiBSZWFkZXJUYXNrRWl0aGVyPFIsIEUsIEI+XG4pID0+IDxBPihtYTogUmVhZGVyVGFza0VpdGhlcjxSLCBFLCBBPikgPT4gUmVhZGVyVGFza0VpdGhlcjxSLCBFLCBBPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgRVQub3JFbHNlRmlyc3QoUlQuTW9uYWQpXG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBvckVsc2VGaXJzdFc6IDxFMSwgUjIsIEUyLCBCPihcbiAgb25MZWZ0OiAoZTogRTEpID0+IFJlYWRlclRhc2tFaXRoZXI8UjIsIEUyLCBCPlxuKSA9PiA8UjEsIEE+KG1hOiBSZWFkZXJUYXNrRWl0aGVyPFIxLCBFMSwgQT4pID0+IFJlYWRlclRhc2tFaXRoZXI8UjEgJiBSMiwgRTEgfCBFMiwgQT4gPSBvckVsc2VGaXJzdCBhcyBhbnlcblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IG9yTGVmdDogPEUxLCBSLCBFMj4oXG4gIG9uTGVmdDogKGU6IEUxKSA9PiBSZWFkZXJUYXNrPFIsIEUyPlxuKSA9PiA8QT4oZmE6IFJlYWRlclRhc2tFaXRoZXI8UiwgRTEsIEE+KSA9PiBSZWFkZXJUYXNrRWl0aGVyPFIsIEUyLCBBPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgRVQub3JMZWZ0KFJULk1vbmFkKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBzd2FwOiA8UiwgRSwgQT4obWE6IFJlYWRlclRhc2tFaXRoZXI8UiwgRSwgQT4pID0+IFJlYWRlclRhc2tFaXRoZXI8UiwgQSwgRT4gPVxuICAvKiNfX1BVUkVfXyovXG4gIEVULnN3YXAoUlQuRnVuY3RvcilcblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjQuMFxuICovXG5leHBvcnQgY29uc3QgZnJvbUlPRWl0aGVySyA9IDxFLCBBIGV4dGVuZHMgUmVhZG9ubHlBcnJheTx1bmtub3duPiwgQj4oXG4gIGY6ICguLi5hOiBBKSA9PiBJT0VpdGhlcjxFLCBCPlxuKTogKDxSPiguLi5hOiBBKSA9PiBSZWFkZXJUYXNrRWl0aGVyPFIsIEUsIEI+KSA9PiBmbG93KGYsIGZyb21JT0VpdGhlcilcblxuLyoqXG4gKiBMZXNzIHN0cmljdCB2ZXJzaW9uIG9mIFtgY2hhaW5JT0VpdGhlcktgXSgjY2hhaW5pb2VpdGhlcmspLlxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuNi4xXG4gKi9cbmV4cG9ydCBjb25zdCBjaGFpbklPRWl0aGVyS1c6IDxFMiwgQSwgQj4oXG4gIGY6IChhOiBBKSA9PiBJT0VpdGhlcjxFMiwgQj5cbikgPT4gPFIsIEUxPihtYTogUmVhZGVyVGFza0VpdGhlcjxSLCBFMSwgQT4pID0+IFJlYWRlclRhc2tFaXRoZXI8UiwgRTEgfCBFMiwgQj4gPSAoZikgPT4gY2hhaW5XKGZyb21JT0VpdGhlcksoZikpXG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi40LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGNoYWluSU9FaXRoZXJLOiA8RSwgQSwgQj4oXG4gIGY6IChhOiBBKSA9PiBJT0VpdGhlcjxFLCBCPlxuKSA9PiA8Uj4obWE6IFJlYWRlclRhc2tFaXRoZXI8UiwgRSwgQT4pID0+IFJlYWRlclRhc2tFaXRoZXI8UiwgRSwgQj4gPSBjaGFpbklPRWl0aGVyS1dcblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjQuMFxuICovXG5leHBvcnQgY29uc3QgZnJvbVRhc2tFaXRoZXJLID0gPEUsIEEgZXh0ZW5kcyBSZWFkb25seUFycmF5PHVua25vd24+LCBCPihcbiAgZjogKC4uLmE6IEEpID0+IFRhc2tFaXRoZXI8RSwgQj5cbik6ICg8Uj4oLi4uYTogQSkgPT4gUmVhZGVyVGFza0VpdGhlcjxSLCBFLCBCPikgPT4gZmxvdyhmLCBmcm9tVGFza0VpdGhlcilcblxuLyoqXG4gKiBMZXNzIHN0cmljdCB2ZXJzaW9uIG9mIFtgY2hhaW5UYXNrRWl0aGVyS2BdKCNjaGFpbnRhc2tlaXRoZXJrKS5cbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjYuMVxuICovXG5leHBvcnQgY29uc3QgY2hhaW5UYXNrRWl0aGVyS1c6IDxFMiwgQSwgQj4oXG4gIGY6IChhOiBBKSA9PiBUYXNrRWl0aGVyPEUyLCBCPlxuKSA9PiA8UiwgRTE+KG1hOiBSZWFkZXJUYXNrRWl0aGVyPFIsIEUxLCBBPikgPT4gUmVhZGVyVGFza0VpdGhlcjxSLCBFMSB8IEUyLCBCPiA9IChmKSA9PiBjaGFpblcoZnJvbVRhc2tFaXRoZXJLKGYpKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuNC4wXG4gKi9cbmV4cG9ydCBjb25zdCBjaGFpblRhc2tFaXRoZXJLOiA8RSwgQSwgQj4oXG4gIGY6IChhOiBBKSA9PiBUYXNrRWl0aGVyPEUsIEI+XG4pID0+IDxSPihtYTogUmVhZGVyVGFza0VpdGhlcjxSLCBFLCBBPikgPT4gUmVhZGVyVGFza0VpdGhlcjxSLCBFLCBCPiA9IGNoYWluVGFza0VpdGhlcktXXG5cbi8qKlxuICogTGVzcyBzdHJpY3QgdmVyc2lvbiBvZiBbYGNoYWluRmlyc3RUYXNrRWl0aGVyS2BdKCNjaGFpbmZpcnN0dGFza2VpdGhlcmspLlxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgY2hhaW5GaXJzdFRhc2tFaXRoZXJLVzogPEUyLCBBLCBCPihcbiAgZjogKGE6IEEpID0+IFRhc2tFaXRoZXI8RTIsIEI+XG4pID0+IDxSLCBFMT4obWE6IFJlYWRlclRhc2tFaXRoZXI8UiwgRTEsIEE+KSA9PiBSZWFkZXJUYXNrRWl0aGVyPFIsIEUxIHwgRTIsIEE+ID0gKGYpID0+IGNoYWluRmlyc3RXKGZyb21UYXNrRWl0aGVySyhmKSlcblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGNoYWluRmlyc3RUYXNrRWl0aGVySzogPEUsIEEsIEI+KFxuICBmOiAoYTogQSkgPT4gVGFza0VpdGhlcjxFLCBCPlxuKSA9PiA8Uj4obWE6IFJlYWRlclRhc2tFaXRoZXI8UiwgRSwgQT4pID0+IFJlYWRlclRhc2tFaXRoZXI8UiwgRSwgQT4gPSBjaGFpbkZpcnN0VGFza0VpdGhlcktXXG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBmcm9tUmVhZGVyRWl0aGVySyA9IDxSLCBFLCBBIGV4dGVuZHMgUmVhZG9ubHlBcnJheTx1bmtub3duPiwgQj4oXG4gIGY6ICguLi5hOiBBKSA9PiBSZWFkZXJFaXRoZXI8UiwgRSwgQj5cbik6ICgoLi4uYTogQSkgPT4gUmVhZGVyVGFza0VpdGhlcjxSLCBFLCBCPikgPT4gZmxvdyhmLCBmcm9tUmVhZGVyRWl0aGVyKVxuXG4vKipcbiAqIExlc3Mgc3RyaWN0IHZlcnNpb24gb2YgW2BjaGFpblJlYWRlckVpdGhlcktgXSgjY2hhaW5yZWFkZXJlaXRoZXJrKS5cbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGNoYWluUmVhZGVyRWl0aGVyS1c6IDxSMiwgRTIsIEEsIEI+KFxuICBmOiAoYTogQSkgPT4gUmVhZGVyRWl0aGVyPFIyLCBFMiwgQj5cbikgPT4gPFIxLCBFMT4obWE6IFJlYWRlclRhc2tFaXRoZXI8UjEsIEUxLCBBPikgPT4gUmVhZGVyVGFza0VpdGhlcjxSMSAmIFIyLCBFMSB8IEUyLCBCPiA9IChmKSA9PlxuICBjaGFpblcoZnJvbVJlYWRlckVpdGhlcksoZikpXG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBjaGFpblJlYWRlckVpdGhlcks6IDxSLCBFLCBBLCBCPihcbiAgZjogKGE6IEEpID0+IFJlYWRlckVpdGhlcjxSLCBFLCBCPlxuKSA9PiAobWE6IFJlYWRlclRhc2tFaXRoZXI8UiwgRSwgQT4pID0+IFJlYWRlclRhc2tFaXRoZXI8UiwgRSwgQj4gPSBjaGFpblJlYWRlckVpdGhlcktXXG5cbi8qKlxuICogTGVzcyBzdHJpY3QgdmVyc2lvbiBvZiBbYGNoYWluRmlyc3RSZWFkZXJFaXRoZXJLYF0oI2NoYWluZmlyc3RyZWFkZXJlaXRoZXJrKS5cbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGNoYWluRmlyc3RSZWFkZXJFaXRoZXJLVzogPFIyLCBFMiwgQSwgQj4oXG4gIGY6IChhOiBBKSA9PiBSZWFkZXJFaXRoZXI8UjIsIEUyLCBCPlxuKSA9PiA8UjEsIEUxPihtYTogUmVhZGVyVGFza0VpdGhlcjxSMSwgRTEsIEE+KSA9PiBSZWFkZXJUYXNrRWl0aGVyPFIxICYgUjIsIEUxIHwgRTIsIEE+ID0gKGYpID0+XG4gIGNoYWluRmlyc3RXKGZyb21SZWFkZXJFaXRoZXJLKGYpKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgY2hhaW5GaXJzdFJlYWRlckVpdGhlcks6IDxSLCBFLCBBLCBCPihcbiAgZjogKGE6IEEpID0+IFJlYWRlckVpdGhlcjxSLCBFLCBCPlxuKSA9PiAobWE6IFJlYWRlclRhc2tFaXRoZXI8UiwgRSwgQT4pID0+IFJlYWRlclRhc2tFaXRoZXI8UiwgRSwgQT4gPSBjaGFpbkZpcnN0UmVhZGVyRWl0aGVyS1dcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gbm9uLXBpcGVhYmxlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5jb25zdCBfbWFwOiBGdW5jdG9yMzxVUkk+WydtYXAnXSA9IChmYSwgZikgPT4gcGlwZShmYSwgbWFwKGYpKVxuY29uc3QgX2FwUGFyOiBBcHBseTM8VVJJPlsnYXAnXSA9IChmYWIsIGZhKSA9PiBwaXBlKGZhYiwgYXAoZmEpKVxuY29uc3QgX2FwU2VxOiBBcHBseTM8VVJJPlsnYXAnXSA9IChmYWIsIGZhKSA9PlxuICBwaXBlKFxuICAgIGZhYixcbiAgICBjaGFpbigoZikgPT4gcGlwZShmYSwgbWFwKGYpKSlcbiAgKVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmNvbnN0IF9jaGFpbjogQ2hhaW4zPFVSST5bJ2NoYWluJ10gPSAobWEsIGYpID0+IHBpcGUobWEsIGNoYWluKGYpKVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmNvbnN0IF9hbHQ6IEFsdDM8VVJJPlsnYWx0J10gPSAoZmEsIHRoYXQpID0+IHBpcGUoZmEsIGFsdCh0aGF0KSlcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5jb25zdCBfYmltYXA6IEJpZnVuY3RvcjM8VVJJPlsnYmltYXAnXSA9IChmYSwgZiwgZykgPT4gcGlwZShmYSwgYmltYXAoZiwgZykpXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuY29uc3QgX21hcExlZnQ6IEJpZnVuY3RvcjM8VVJJPlsnbWFwTGVmdCddID0gKGZhLCBmKSA9PiBwaXBlKGZhLCBtYXBMZWZ0KGYpKVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyB0eXBlIGNsYXNzIG1lbWJlcnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBgbWFwYCBjYW4gYmUgdXNlZCB0byB0dXJuIGZ1bmN0aW9ucyBgKGE6IEEpID0+IEJgIGludG8gZnVuY3Rpb25zIGAoZmE6IEY8QT4pID0+IEY8Qj5gIHdob3NlIGFyZ3VtZW50IGFuZCByZXR1cm4gdHlwZXNcbiAqIHVzZSB0aGUgdHlwZSBjb25zdHJ1Y3RvciBgRmAgdG8gcmVwcmVzZW50IHNvbWUgY29tcHV0YXRpb25hbCBjb250ZXh0LlxuICpcbiAqIEBjYXRlZ29yeSBGdW5jdG9yXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IG1hcDogPEEsIEI+KGY6IChhOiBBKSA9PiBCKSA9PiA8UiwgRT4oZmE6IFJlYWRlclRhc2tFaXRoZXI8UiwgRSwgQT4pID0+IFJlYWRlclRhc2tFaXRoZXI8UiwgRSwgQj4gPVxuICAvKiNfX1BVUkVfXyovXG4gIEVULm1hcChSVC5GdW5jdG9yKVxuXG4vKipcbiAqIE1hcCBhIHBhaXIgb2YgZnVuY3Rpb25zIG92ZXIgdGhlIHR3byBsYXN0IHR5cGUgYXJndW1lbnRzIG9mIHRoZSBiaWZ1bmN0b3IuXG4gKlxuICogQGNhdGVnb3J5IEJpZnVuY3RvclxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBiaW1hcDogPEUsIEcsIEEsIEI+KFxuICBmOiAoZTogRSkgPT4gRyxcbiAgZzogKGE6IEEpID0+IEJcbikgPT4gPFI+KGZhOiBSZWFkZXJUYXNrRWl0aGVyPFIsIEUsIEE+KSA9PiBSZWFkZXJUYXNrRWl0aGVyPFIsIEcsIEI+ID1cbiAgLyojX19QVVJFX18qL1xuICBFVC5iaW1hcChSVC5GdW5jdG9yKVxuXG4vKipcbiAqIE1hcCBhIGZ1bmN0aW9uIG92ZXIgdGhlIHNlY29uZCB0eXBlIGFyZ3VtZW50IG9mIGEgYmlmdW5jdG9yLlxuICpcbiAqIEBjYXRlZ29yeSBCaWZ1bmN0b3JcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgbWFwTGVmdDogPEUsIEc+KGY6IChlOiBFKSA9PiBHKSA9PiA8UiwgQT4oZmE6IFJlYWRlclRhc2tFaXRoZXI8UiwgRSwgQT4pID0+IFJlYWRlclRhc2tFaXRoZXI8UiwgRywgQT4gPVxuICAvKiNfX1BVUkVfXyovXG4gIEVULm1hcExlZnQoUlQuRnVuY3RvcilcblxuLyoqXG4gKiBBcHBseSBhIGZ1bmN0aW9uIHRvIGFuIGFyZ3VtZW50IHVuZGVyIGEgdHlwZSBjb25zdHJ1Y3Rvci5cbiAqXG4gKiBAY2F0ZWdvcnkgQXBwbHlcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgYXA6IDxSLCBFLCBBPihcbiAgZmE6IFJlYWRlclRhc2tFaXRoZXI8UiwgRSwgQT5cbikgPT4gPEI+KGZhYjogUmVhZGVyVGFza0VpdGhlcjxSLCBFLCAoYTogQSkgPT4gQj4pID0+IFJlYWRlclRhc2tFaXRoZXI8UiwgRSwgQj4gPVxuICAvKiNfX1BVUkVfXyovXG4gIEVULmFwKFJULkFwcGx5UGFyKVxuXG4vKipcbiAqIExlc3Mgc3RyaWN0IHZlcnNpb24gb2YgW2BhcGBdKCNhcCkuXG4gKlxuICogQGNhdGVnb3J5IEFwcGx5XG4gKiBAc2luY2UgMi44LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGFwVzogPFIyLCBFMiwgQT4oXG4gIGZhOiBSZWFkZXJUYXNrRWl0aGVyPFIyLCBFMiwgQT5cbikgPT4gPFIxLCBFMSwgQj4oZmFiOiBSZWFkZXJUYXNrRWl0aGVyPFIxLCBFMSwgKGE6IEEpID0+IEI+KSA9PiBSZWFkZXJUYXNrRWl0aGVyPFIxICYgUjIsIEUxIHwgRTIsIEI+ID0gYXAgYXMgYW55XG5cbi8qKlxuICogQGNhdGVnb3J5IFBvaW50ZWRcbiAqIEBzaW5jZSAyLjcuMFxuICovXG5leHBvcnQgY29uc3Qgb2Y6IDxSLCBFID0gbmV2ZXIsIEEgPSBuZXZlcj4oYTogQSkgPT4gUmVhZGVyVGFza0VpdGhlcjxSLCBFLCBBPiA9IHJpZ2h0XG5cbi8qKlxuICogQ29tcG9zZXMgY29tcHV0YXRpb25zIGluIHNlcXVlbmNlLCB1c2luZyB0aGUgcmV0dXJuIHZhbHVlIG9mIG9uZSBjb21wdXRhdGlvbiB0byBkZXRlcm1pbmUgdGhlIG5leHQgY29tcHV0YXRpb24uXG4gKlxuICogQGNhdGVnb3J5IE1vbmFkXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGNoYWluOiA8UiwgRSwgQSwgQj4oXG4gIGY6IChhOiBBKSA9PiBSZWFkZXJUYXNrRWl0aGVyPFIsIEUsIEI+XG4pID0+IChtYTogUmVhZGVyVGFza0VpdGhlcjxSLCBFLCBBPikgPT4gUmVhZGVyVGFza0VpdGhlcjxSLCBFLCBCPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgRVQuY2hhaW4oUlQuTW9uYWQpXG5cbi8qKlxuICogTGVzcyBzdHJpY3QgdmVyc2lvbiBvZiBbYGNoYWluYF0oI2NoYWluKS5cbiAqXG4gKiBAY2F0ZWdvcnkgTW9uYWRcbiAqIEBzaW5jZSAyLjYuMFxuICovXG5leHBvcnQgY29uc3QgY2hhaW5XOiA8UjIsIEUyLCBBLCBCPihcbiAgZjogKGE6IEEpID0+IFJlYWRlclRhc2tFaXRoZXI8UjIsIEUyLCBCPlxuKSA9PiA8UjEsIEUxPihtYTogUmVhZGVyVGFza0VpdGhlcjxSMSwgRTEsIEE+KSA9PiBSZWFkZXJUYXNrRWl0aGVyPFIxICYgUjIsIEUxIHwgRTIsIEI+ID0gY2hhaW4gYXMgYW55XG5cbi8qKlxuICogTGVzcyBzdHJpY3QgdmVyc2lvbiBvZiBbYGZsYXR0ZW5gXSgjZmxhdHRlbikuXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBmbGF0dGVuVzogPFIxLCBFMSwgUjIsIEUyLCBBPihcbiAgbW1hOiBSZWFkZXJUYXNrRWl0aGVyPFIxLCBFMSwgUmVhZGVyVGFza0VpdGhlcjxSMiwgRTIsIEE+PlxuKSA9PiBSZWFkZXJUYXNrRWl0aGVyPFIxICYgUjIsIEUxIHwgRTIsIEE+ID1cbiAgLyojX19QVVJFX18qL1xuICBjaGFpblcoaWRlbnRpdHkpXG5cbi8qKlxuICogRGVyaXZhYmxlIGZyb20gYENoYWluYC5cbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgZmxhdHRlbjogPFIsIEUsIEE+KFxuICBtbWE6IFJlYWRlclRhc2tFaXRoZXI8UiwgRSwgUmVhZGVyVGFza0VpdGhlcjxSLCBFLCBBPj5cbikgPT4gUmVhZGVyVGFza0VpdGhlcjxSLCBFLCBBPiA9IGZsYXR0ZW5XXG5cbi8qKlxuICogSWRlbnRpZmllcyBhbiBhc3NvY2lhdGl2ZSBvcGVyYXRpb24gb24gYSB0eXBlIGNvbnN0cnVjdG9yLiBJdCBpcyBzaW1pbGFyIHRvIGBTZW1pZ3JvdXBgLCBleGNlcHQgdGhhdCBpdCBhcHBsaWVzIHRvXG4gKiB0eXBlcyBvZiBraW5kIGAqIC0+ICpgLlxuICpcbiAqIEBjYXRlZ29yeSBBbHRcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgYWx0OiA8UiwgRSwgQT4oXG4gIHRoYXQ6ICgpID0+IFJlYWRlclRhc2tFaXRoZXI8UiwgRSwgQT5cbikgPT4gKGZhOiBSZWFkZXJUYXNrRWl0aGVyPFIsIEUsIEE+KSA9PiBSZWFkZXJUYXNrRWl0aGVyPFIsIEUsIEE+ID1cbiAgLyojX19QVVJFX18qL1xuICBFVC5hbHQoUlQuTW9uYWQpXG5cbi8qKlxuICogTGVzcyBzdHJpY3QgdmVyc2lvbiBvZiBbYGFsdGBdKCNhbHQpLlxuICpcbiAqIEBjYXRlZ29yeSBBbHRcbiAqIEBzaW5jZSAyLjkuMFxuICovXG5leHBvcnQgY29uc3QgYWx0VzogPFIyLCBFMiwgQj4oXG4gIHRoYXQ6ICgpID0+IFJlYWRlclRhc2tFaXRoZXI8UjIsIEUyLCBCPlxuKSA9PiA8UjEsIEUxLCBBPihmYTogUmVhZGVyVGFza0VpdGhlcjxSMSwgRTEsIEE+KSA9PiBSZWFkZXJUYXNrRWl0aGVyPFIxICYgUjIsIEUyLCBBIHwgQj4gPSBhbHQgYXMgYW55XG5cbi8qKlxuICogQGNhdGVnb3J5IE1vbmFkVGhyb3dcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgdGhyb3dFcnJvcjogTW9uYWRUaHJvdzM8VVJJPlsndGhyb3dFcnJvciddID0gbGVmdFxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBpbnN0YW5jZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IFVSSSA9ICdSZWFkZXJUYXNrRWl0aGVyJ1xuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgdHlwZSBVUkkgPSB0eXBlb2YgVVJJXG5cbmRlY2xhcmUgbW9kdWxlICcuL0hLVCcge1xuICBpbnRlcmZhY2UgVVJJdG9LaW5kMzxSLCBFLCBBPiB7XG4gICAgcmVhZG9ubHkgW1VSSV06IFJlYWRlclRhc2tFaXRoZXI8UiwgRSwgQT5cbiAgfVxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGdldENvbXBhY3RhYmxlID0gPEU+KE06IE1vbm9pZDxFPik6IENvbXBhY3RhYmxlM0M8VVJJLCBFPiA9PiB7XG4gIGNvbnN0IEMgPSBFLmdldENvbXBhY3RhYmxlKE0pXG4gIHJldHVybiB7XG4gICAgVVJJLFxuICAgIF9FOiB1bmRlZmluZWQgYXMgYW55LFxuICAgIGNvbXBhY3Q6IGNvbXBhY3RfKFJULkZ1bmN0b3IsIEMpLFxuICAgIHNlcGFyYXRlOiBzZXBhcmF0ZV8oUlQuRnVuY3RvciwgQywgRS5GdW5jdG9yKVxuICB9XG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmlsdGVyYWJsZTxFPihNOiBNb25vaWQ8RT4pOiBGaWx0ZXJhYmxlM0M8VVJJLCBFPiB7XG4gIGNvbnN0IEYgPSBFLmdldEZpbHRlcmFibGUoTSlcbiAgY29uc3QgQyA9IGdldENvbXBhY3RhYmxlKE0pXG5cbiAgY29uc3QgZmlsdGVyID0gZmlsdGVyXyhSVC5GdW5jdG9yLCBGKVxuICBjb25zdCBmaWx0ZXJNYXAgPSBmaWx0ZXJNYXBfKFJULkZ1bmN0b3IsIEYpXG4gIGNvbnN0IHBhcnRpdGlvbiA9IHBhcnRpdGlvbl8oUlQuRnVuY3RvciwgRilcbiAgY29uc3QgcGFydGl0aW9uTWFwID0gcGFydGl0aW9uTWFwXyhSVC5GdW5jdG9yLCBGKVxuICByZXR1cm4ge1xuICAgIFVSSSxcbiAgICBfRTogdW5kZWZpbmVkIGFzIGFueSxcbiAgICBtYXA6IF9tYXAsXG4gICAgY29tcGFjdDogQy5jb21wYWN0LFxuICAgIHNlcGFyYXRlOiBDLnNlcGFyYXRlLFxuICAgIGZpbHRlcjogPFIsIEE+KGZhOiBSZWFkZXJUYXNrRWl0aGVyPFIsIEUsIEE+LCBwcmVkaWNhdGU6IFByZWRpY2F0ZTxBPikgPT4gcGlwZShmYSwgZmlsdGVyKHByZWRpY2F0ZSkpLFxuICAgIGZpbHRlck1hcDogKGZhLCBmKSA9PiBwaXBlKGZhLCBmaWx0ZXJNYXAoZikpLFxuICAgIHBhcnRpdGlvbjogPFIsIEE+KGZhOiBSZWFkZXJUYXNrRWl0aGVyPFIsIEUsIEE+LCBwcmVkaWNhdGU6IFByZWRpY2F0ZTxBPikgPT4gcGlwZShmYSwgcGFydGl0aW9uKHByZWRpY2F0ZSkpLFxuICAgIHBhcnRpdGlvbk1hcDogKGZhLCBmKSA9PiBwaXBlKGZhLCBwYXJ0aXRpb25NYXAoZikpXG4gIH1cbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi43LjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEFwcGxpY2F0aXZlUmVhZGVyVGFza1ZhbGlkYXRpb248RT4oQTogQXBwbHkxPFQuVVJJPiwgUzogU2VtaWdyb3VwPEU+KTogQXBwbGljYXRpdmUzQzxVUkksIEU+IHtcbiAgY29uc3QgYXAgPSBhcF8oUi5BcHBseSwgVEUuZ2V0QXBwbGljYXRpdmVUYXNrVmFsaWRhdGlvbihBLCBTKSlcbiAgcmV0dXJuIHtcbiAgICBVUkksXG4gICAgX0U6IHVuZGVmaW5lZCBhcyBhbnksXG4gICAgbWFwOiBfbWFwLFxuICAgIGFwOiAoZmFiLCBmYSkgPT4gcGlwZShmYWIsIGFwKGZhKSksXG4gICAgb2ZcbiAgfVxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjcuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWx0UmVhZGVyVGFza1ZhbGlkYXRpb248RT4oUzogU2VtaWdyb3VwPEU+KTogQWx0M0M8VVJJLCBFPiB7XG4gIGNvbnN0IGFsdCA9IEVULmFsdFZhbGlkYXRpb24oUlQuTW9uYWQsIFMpXG4gIHJldHVybiB7XG4gICAgVVJJLFxuICAgIF9FOiB1bmRlZmluZWQgYXMgYW55LFxuICAgIG1hcDogX21hcCxcbiAgICBhbHQ6IChmYSwgdGhhdCkgPT4gcGlwZShmYSwgYWx0KHRoYXQpKVxuICB9XG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuNy4wXG4gKi9cbmV4cG9ydCBjb25zdCBGdW5jdG9yOiBGdW5jdG9yMzxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcFxufVxuXG4vKipcbiAqIERlcml2YWJsZSBmcm9tIGBGdW5jdG9yYC5cbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZsYXAgPVxuICAvKiNfX1BVUkVfXyovXG4gIGZsYXBfKEZ1bmN0b3IpXG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgUG9pbnRlZDogUG9pbnRlZDM8VVJJPiA9IHtcbiAgVVJJLFxuICBvZlxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IEFwcGx5UGFyOiBBcHBseTM8VVJJPiA9IHtcbiAgVVJJLFxuICBtYXA6IF9tYXAsXG4gIGFwOiBfYXBQYXJcbn1cblxuLyoqXG4gKiBDb21iaW5lIHR3byBlZmZlY3RmdWwgYWN0aW9ucywga2VlcGluZyBvbmx5IHRoZSByZXN1bHQgb2YgdGhlIGZpcnN0LlxuICpcbiAqIERlcml2YWJsZSBmcm9tIGBBcHBseWAuXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGFwRmlyc3QgPVxuICAvKiNfX1BVUkVfXyovXG4gIGFwRmlyc3RfKEFwcGx5UGFyKVxuXG4vKipcbiAqIENvbWJpbmUgdHdvIGVmZmVjdGZ1bCBhY3Rpb25zLCBrZWVwaW5nIG9ubHkgdGhlIHJlc3VsdCBvZiB0aGUgc2Vjb25kLlxuICpcbiAqIERlcml2YWJsZSBmcm9tIGBBcHBseWAuXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGFwU2Vjb25kID1cbiAgLyojX19QVVJFX18qL1xuICBhcFNlY29uZF8oQXBwbHlQYXIpXG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuNy4wXG4gKi9cbmV4cG9ydCBjb25zdCBBcHBsaWNhdGl2ZVBhcjogQXBwbGljYXRpdmUzPFVSST4gPSB7XG4gIFVSSSxcbiAgbWFwOiBfbWFwLFxuICBhcDogX2FwUGFyLFxuICBvZlxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IEFwcGx5U2VxOiBBcHBseTM8VVJJPiA9IHtcbiAgVVJJLFxuICBtYXA6IF9tYXAsXG4gIGFwOiBfYXBTZXFcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi43LjBcbiAqL1xuZXhwb3J0IGNvbnN0IEFwcGxpY2F0aXZlU2VxOiBBcHBsaWNhdGl2ZTM8VVJJPiA9IHtcbiAgVVJJLFxuICBtYXA6IF9tYXAsXG4gIGFwOiBfYXBTZXEsXG4gIG9mXG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgQ2hhaW46IENoYWluMzxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgYXA6IF9hcFBhcixcbiAgY2hhaW46IF9jaGFpblxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IE1vbmFkOiBNb25hZDM8VVJJPiA9IHtcbiAgVVJJLFxuICBtYXA6IF9tYXAsXG4gIGFwOiBfYXBQYXIsXG4gIGNoYWluOiBfY2hhaW4sXG4gIG9mXG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgTW9uYWRJTzogTW9uYWRJTzM8VVJJPiA9IHtcbiAgVVJJLFxuICBtYXA6IF9tYXAsXG4gIGFwOiBfYXBQYXIsXG4gIGNoYWluOiBfY2hhaW4sXG4gIG9mLFxuICBmcm9tSU9cbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBNb25hZFRhc2s6IE1vbmFkVGFzazM8VVJJPiA9IHtcbiAgVVJJLFxuICBtYXA6IF9tYXAsXG4gIGFwOiBfYXBQYXIsXG4gIGNoYWluOiBfY2hhaW4sXG4gIG9mLFxuICBmcm9tSU8sXG4gIGZyb21UYXNrXG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgTW9uYWRUaHJvdzogTW9uYWRUaHJvdzM8VVJJPiA9IHtcbiAgVVJJLFxuICBtYXA6IF9tYXAsXG4gIGFwOiBfYXBQYXIsXG4gIGNoYWluOiBfY2hhaW4sXG4gIG9mLFxuICB0aHJvd0Vycm9yXG59XG5cbi8qKlxuICogQ29tcG9zZXMgY29tcHV0YXRpb25zIGluIHNlcXVlbmNlLCB1c2luZyB0aGUgcmV0dXJuIHZhbHVlIG9mIG9uZSBjb21wdXRhdGlvbiB0byBkZXRlcm1pbmUgdGhlIG5leHQgY29tcHV0YXRpb24gYW5kXG4gKiBrZWVwaW5nIG9ubHkgdGhlIHJlc3VsdCBvZiB0aGUgZmlyc3QuXG4gKlxuICogRGVyaXZhYmxlIGZyb20gYENoYWluYC5cbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgY2hhaW5GaXJzdDogPFIsIEUsIEEsIEI+KFxuICBmOiAoYTogQSkgPT4gUmVhZGVyVGFza0VpdGhlcjxSLCBFLCBCPlxuKSA9PiAobWE6IFJlYWRlclRhc2tFaXRoZXI8UiwgRSwgQT4pID0+IFJlYWRlclRhc2tFaXRoZXI8UiwgRSwgQT4gPVxuICAvKiNfX1BVUkVfXyovXG4gIGNoYWluRmlyc3RfKENoYWluKVxuXG4vKipcbiAqIExlc3Mgc3RyaWN0IHZlcnNpb24gb2YgW2BjaGFpbkZpcnN0YF0oI2NoYWluZmlyc3QpLlxuICpcbiAqIERlcml2YWJsZSBmcm9tIGBDaGFpbmAuXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi44LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGNoYWluRmlyc3RXOiA8UjIsIEUyLCBBLCBCPihcbiAgZjogKGE6IEEpID0+IFJlYWRlclRhc2tFaXRoZXI8UjIsIEUyLCBCPlxuKSA9PiA8UjEsIEUxPihtYTogUmVhZGVyVGFza0VpdGhlcjxSMSwgRTEsIEE+KSA9PiBSZWFkZXJUYXNrRWl0aGVyPFIxICYgUjIsIEUxIHwgRTIsIEE+ID0gY2hhaW5GaXJzdCBhcyBhbnlcblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi43LjBcbiAqL1xuZXhwb3J0IGNvbnN0IEJpZnVuY3RvcjogQmlmdW5jdG9yMzxVUkk+ID0ge1xuICBVUkksXG4gIGJpbWFwOiBfYmltYXAsXG4gIG1hcExlZnQ6IF9tYXBMZWZ0XG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuNy4wXG4gKi9cbmV4cG9ydCBjb25zdCBBbHQ6IEFsdDM8VVJJPiA9IHtcbiAgVVJJLFxuICBtYXA6IF9tYXAsXG4gIGFsdDogX2FsdFxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IEZyb21SZWFkZXI6IEZyb21SZWFkZXIzPFVSST4gPSB7XG4gIFVSSSxcbiAgZnJvbVJlYWRlclxufVxuXG4vKipcbiAqIFJlYWRzIHRoZSBjdXJyZW50IGNvbnRleHQuXG4gKlxuICogQGNhdGVnb3J5IGNvbnN0cnVjdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBhc2s6IDxSLCBFID0gbmV2ZXI+KCkgPT4gUmVhZGVyVGFza0VpdGhlcjxSLCBFLCBSPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgYXNrXyhGcm9tUmVhZGVyKVxuXG4vKipcbiAqIFByb2plY3RzIGEgdmFsdWUgZnJvbSB0aGUgZ2xvYmFsIGNvbnRleHQgaW4gYSBgUmVhZGVyRWl0aGVyYC5cbiAqXG4gKiBAY2F0ZWdvcnkgY29uc3RydWN0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGFza3M6IDxSLCBBLCBFID0gbmV2ZXI+KGY6IChyOiBSKSA9PiBBKSA9PiBSZWFkZXJUYXNrRWl0aGVyPFIsIEUsIEE+ID1cbiAgLyojX19QVVJFX18qL1xuICBhc2tzXyhGcm9tUmVhZGVyKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgZnJvbVJlYWRlcks6IDxBIGV4dGVuZHMgUmVhZG9ubHlBcnJheTx1bmtub3duPiwgUiwgQj4oXG4gIGY6ICguLi5hOiBBKSA9PiBSZWFkZXI8UiwgQj5cbikgPT4gPEUgPSBuZXZlcj4oLi4uYTogQSkgPT4gUmVhZGVyVGFza0VpdGhlcjxSLCBFLCBCPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnJvbVJlYWRlcktfKEZyb21SZWFkZXIpXG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBjaGFpblJlYWRlcks6IDxBLCBSLCBCPihcbiAgZjogKGE6IEEpID0+IFJlYWRlcjxSLCBCPlxuKSA9PiA8RSA9IG5ldmVyPihtYTogUmVhZGVyVGFza0VpdGhlcjxSLCBFLCBBPikgPT4gUmVhZGVyVGFza0VpdGhlcjxSLCBFLCBCPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgY2hhaW5SZWFkZXJLXyhGcm9tUmVhZGVyLCBDaGFpbilcblxuLyoqXG4gKiBMZXNzIHN0cmljdCB2ZXJzaW9uIG9mIFtgY2hhaW5SZWFkZXJLYF0oI2NoYWlucmVhZGVyaykuXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBjaGFpblJlYWRlcktXOiA8QSwgUjEsIEI+KFxuICBmOiAoYTogQSkgPT4gUi5SZWFkZXI8UjEsIEI+XG4pID0+IDxSMiwgRSA9IG5ldmVyPihtYTogUmVhZGVyVGFza0VpdGhlcjxSMiwgRSwgQT4pID0+IFJlYWRlclRhc2tFaXRoZXI8UjEgJiBSMiwgRSwgQj4gPSBjaGFpblJlYWRlcksgYXMgYW55XG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBjaGFpbkZpcnN0UmVhZGVySzogPEEsIFIsIEI+KFxuICBmOiAoYTogQSkgPT4gUi5SZWFkZXI8UiwgQj5cbikgPT4gPEUgPSBuZXZlcj4obWE6IFJlYWRlclRhc2tFaXRoZXI8UiwgRSwgQT4pID0+IFJlYWRlclRhc2tFaXRoZXI8UiwgRSwgQT4gPVxuICAvKiNfX1BVUkVfXyovXG4gIGNoYWluRmlyc3RSZWFkZXJLXyhGcm9tUmVhZGVyLCBDaGFpbilcblxuLyoqXG4gKiBMZXNzIHN0cmljdCB2ZXJzaW9uIG9mIFtgY2hhaW5GaXJzdFJlYWRlcktgXSgjY2hhaW5maXJzdHJlYWRlcmspLlxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgY2hhaW5GaXJzdFJlYWRlcktXOiA8QSwgUjEsIEI+KFxuICBmOiAoYTogQSkgPT4gUi5SZWFkZXI8UjEsIEI+XG4pID0+IDxSMiwgRSA9IG5ldmVyPihtYTogUmVhZGVyVGFza0VpdGhlcjxSMiwgRSwgQT4pID0+IFJlYWRlclRhc2tFaXRoZXI8UjEgJiBSMiwgRSwgQT4gPSBjaGFpbkZpcnN0UmVhZGVySyBhcyBhbnlcblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZyb21SZWFkZXJUYXNrSyA9IDxBIGV4dGVuZHMgUmVhZG9ubHlBcnJheTx1bmtub3duPiwgUiwgQj4oXG4gIGY6ICguLi5hOiBBKSA9PiBSZWFkZXJUYXNrPFIsIEI+XG4pOiAoPEUgPSBuZXZlcj4oLi4uYTogQSkgPT4gUmVhZGVyVGFza0VpdGhlcjxSLCBFLCBCPikgPT4gKC4uLmEpID0+IHJpZ2h0UmVhZGVyVGFzayhmKC4uLmEpKVxuXG4vKipcbiAqIExlc3Mgc3RyaWN0IHZlcnNpb24gb2YgW2BjaGFpblJlYWRlclRhc2tLYF0oI2NoYWlucmVhZGVydGFza2spLlxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgY2hhaW5SZWFkZXJUYXNrS1c6IDxBLCBSMiwgQj4oXG4gIGY6IChhOiBBKSA9PiBSVC5SZWFkZXJUYXNrPFIyLCBCPlxuKSA9PiA8UjEsIEUgPSBuZXZlcj4obWE6IFJlYWRlclRhc2tFaXRoZXI8UjEsIEUsIEE+KSA9PiBSZWFkZXJUYXNrRWl0aGVyPFIxICYgUjIsIEUsIEI+ID0gKGYpID0+XG4gIGNoYWluVyhmcm9tUmVhZGVyVGFza0soZikpXG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBjaGFpblJlYWRlclRhc2tLOiA8QSwgUiwgQj4oXG4gIGY6IChhOiBBKSA9PiBSVC5SZWFkZXJUYXNrPFIsIEI+XG4pID0+IDxFID0gbmV2ZXI+KG1hOiBSZWFkZXJUYXNrRWl0aGVyPFIsIEUsIEE+KSA9PiBSZWFkZXJUYXNrRWl0aGVyPFIsIEUsIEI+ID0gY2hhaW5SZWFkZXJUYXNrS1dcblxuLyoqXG4gKiBMZXNzIHN0cmljdCB2ZXJzaW9uIG9mIFtgY2hhaW5GaXJzdFJlYWRlclRhc2tLYF0oI2NoYWluZmlyc3RyZWFkZXJ0YXNraykuXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBjaGFpbkZpcnN0UmVhZGVyVGFza0tXOiA8QSwgUjIsIEI+KFxuICBmOiAoYTogQSkgPT4gUlQuUmVhZGVyVGFzazxSMiwgQj5cbikgPT4gPFIxLCBFID0gbmV2ZXI+KG1hOiBSZWFkZXJUYXNrRWl0aGVyPFIxLCBFLCBBPikgPT4gUmVhZGVyVGFza0VpdGhlcjxSMSAmIFIyLCBFLCBBPiA9IChmKSA9PlxuICBjaGFpbkZpcnN0Vyhmcm9tUmVhZGVyVGFza0soZikpXG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBjaGFpbkZpcnN0UmVhZGVyVGFza0s6IDxBLCBSLCBCPihcbiAgZjogKGE6IEEpID0+IFJULlJlYWRlclRhc2s8UiwgQj5cbikgPT4gPEUgPSBuZXZlcj4obWE6IFJlYWRlclRhc2tFaXRoZXI8UiwgRSwgQT4pID0+IFJlYWRlclRhc2tFaXRoZXI8UiwgRSwgQT4gPSBjaGFpbkZpcnN0UmVhZGVyVGFza0tXXG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgRnJvbUVpdGhlcjogRnJvbUVpdGhlcjM8VVJJPiA9IHtcbiAgVVJJLFxuICBmcm9tRWl0aGVyXG59XG5cbi8qKlxuICogQGNhdGVnb3J5IG5hdHVyYWwgdHJhbnNmb3JtYXRpb25zXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZyb21PcHRpb246IDxFPihvbk5vbmU6IExhenk8RT4pID0+IE5hdHVyYWxUcmFuc2Zvcm1hdGlvbjEzQzxPVVJJLCBVUkksIEU+ID1cbiAgLyojX19QVVJFX18qL1xuICBmcm9tT3B0aW9uXyhGcm9tRWl0aGVyKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgZnJvbU9wdGlvbksgPVxuICAvKiNfX1BVUkVfXyovXG4gIGZyb21PcHRpb25LXyhGcm9tRWl0aGVyKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgY2hhaW5PcHRpb25LID1cbiAgLyojX19QVVJFX18qL1xuICBjaGFpbk9wdGlvbktfKEZyb21FaXRoZXIsIENoYWluKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuNC4wXG4gKi9cbmV4cG9ydCBjb25zdCBjaGFpbkVpdGhlcks6IDxFLCBBLCBCPihcbiAgZjogKGE6IEEpID0+IEUuRWl0aGVyPEUsIEI+XG4pID0+IDxSPihtYTogUmVhZGVyVGFza0VpdGhlcjxSLCBFLCBBPikgPT4gUmVhZGVyVGFza0VpdGhlcjxSLCBFLCBCPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgY2hhaW5FaXRoZXJLXyhGcm9tRWl0aGVyLCBDaGFpbilcblxuLyoqXG4gKiBMZXNzIHN0cmljdCB2ZXJzaW9uIG9mIFtgY2hhaW5FaXRoZXJLYF0oI2NoYWluZWl0aGVyaykuXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi42LjFcbiAqL1xuZXhwb3J0IGNvbnN0IGNoYWluRWl0aGVyS1c6IDxFMiwgQSwgQj4oXG4gIGY6IChhOiBBKSA9PiBFaXRoZXI8RTIsIEI+XG4pID0+IDxSLCBFMT4obWE6IFJlYWRlclRhc2tFaXRoZXI8UiwgRTEsIEE+KSA9PiBSZWFkZXJUYXNrRWl0aGVyPFIsIEUxIHwgRTIsIEI+ID0gY2hhaW5FaXRoZXJLIGFzIGFueVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb25zdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgZnJvbVByZWRpY2F0ZToge1xuICA8RSwgQSwgQiBleHRlbmRzIEE+KHJlZmluZW1lbnQ6IFJlZmluZW1lbnQ8QSwgQj4sIG9uRmFsc2U6IChhOiBBKSA9PiBFKTogPFI+KGE6IEEpID0+IFJlYWRlclRhc2tFaXRoZXI8UiwgRSwgQj5cbiAgPEUsIEE+KHByZWRpY2F0ZTogUHJlZGljYXRlPEE+LCBvbkZhbHNlOiAoYTogQSkgPT4gRSk6IDxSLCBCIGV4dGVuZHMgQT4oYjogQikgPT4gUmVhZGVyVGFza0VpdGhlcjxSLCBFLCBCPlxuICA8RSwgQT4ocHJlZGljYXRlOiBQcmVkaWNhdGU8QT4sIG9uRmFsc2U6IChhOiBBKSA9PiBFKTogPFI+KGE6IEEpID0+IFJlYWRlclRhc2tFaXRoZXI8UiwgRSwgQT5cbn0gPVxuICAvKiNfX1BVUkVfXyovXG4gIGZyb21QcmVkaWNhdGVfKEZyb21FaXRoZXIpXG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZpbHRlck9yRWxzZToge1xuICA8RSwgQSwgQiBleHRlbmRzIEE+KHJlZmluZW1lbnQ6IFJlZmluZW1lbnQ8QSwgQj4sIG9uRmFsc2U6IChhOiBBKSA9PiBFKTogPFI+KFxuICAgIG1hOiBSZWFkZXJUYXNrRWl0aGVyPFIsIEUsIEE+XG4gICkgPT4gUmVhZGVyVGFza0VpdGhlcjxSLCBFLCBCPlxuICA8RSwgQT4ocHJlZGljYXRlOiBQcmVkaWNhdGU8QT4sIG9uRmFsc2U6IChhOiBBKSA9PiBFKTogPFIsIEIgZXh0ZW5kcyBBPihcbiAgICBtYjogUmVhZGVyVGFza0VpdGhlcjxSLCBFLCBCPlxuICApID0+IFJlYWRlclRhc2tFaXRoZXI8UiwgRSwgQj5cbiAgPEUsIEE+KHByZWRpY2F0ZTogUHJlZGljYXRlPEE+LCBvbkZhbHNlOiAoYTogQSkgPT4gRSk6IDxSPihtYTogUmVhZGVyVGFza0VpdGhlcjxSLCBFLCBBPikgPT4gUmVhZGVyVGFza0VpdGhlcjxSLCBFLCBBPlxufSA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZmlsdGVyT3JFbHNlXyhGcm9tRWl0aGVyLCBDaGFpbilcblxuLyoqXG4gKiBMZXNzIHN0cmljdCB2ZXJzaW9uIG9mIFtgZmlsdGVyT3JFbHNlYF0oI2ZpbHRlcm9yZWxzZSkuXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi45LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZpbHRlck9yRWxzZVc6IHtcbiAgPEEsIEIgZXh0ZW5kcyBBLCBFMj4ocmVmaW5lbWVudDogUmVmaW5lbWVudDxBLCBCPiwgb25GYWxzZTogKGE6IEEpID0+IEUyKTogPFIsIEUxPihcbiAgICBtYTogUmVhZGVyVGFza0VpdGhlcjxSLCBFMSwgQT5cbiAgKSA9PiBSZWFkZXJUYXNrRWl0aGVyPFIsIEUxIHwgRTIsIEI+XG4gIDxBLCBFMj4ocHJlZGljYXRlOiBQcmVkaWNhdGU8QT4sIG9uRmFsc2U6IChhOiBBKSA9PiBFMik6IDxSLCBFMSwgQiBleHRlbmRzIEE+KFxuICAgIG1iOiBSZWFkZXJUYXNrRWl0aGVyPFIsIEUxLCBCPlxuICApID0+IFJlYWRlclRhc2tFaXRoZXI8UiwgRTEgfCBFMiwgQj5cbiAgPEEsIEUyPihwcmVkaWNhdGU6IFByZWRpY2F0ZTxBPiwgb25GYWxzZTogKGE6IEEpID0+IEUyKTogPFIsIEUxPihcbiAgICBtYTogUmVhZGVyVGFza0VpdGhlcjxSLCBFMSwgQT5cbiAgKSA9PiBSZWFkZXJUYXNrRWl0aGVyPFIsIEUxIHwgRTIsIEE+XG59ID0gZmlsdGVyT3JFbHNlXG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi40LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZyb21FaXRoZXJLOiA8RSwgQSBleHRlbmRzIFJlYWRvbmx5QXJyYXk8dW5rbm93bj4sIEI+KFxuICBmOiAoLi4uYTogQSkgPT4gRS5FaXRoZXI8RSwgQj5cbikgPT4gPFI+KC4uLmE6IEEpID0+IFJlYWRlclRhc2tFaXRoZXI8UiwgRSwgQj4gPVxuICAvKiNfX1BVUkVfXyovXG4gIGZyb21FaXRoZXJLXyhGcm9tRWl0aGVyKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IEZyb21JTzogRnJvbUlPMzxVUkk+ID0ge1xuICBVUkksXG4gIGZyb21JT1xufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgZnJvbUlPSyA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnJvbUlPS18oRnJvbUlPKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgY2hhaW5JT0sgPVxuICAvKiNfX1BVUkVfXyovXG4gIGNoYWluSU9LXyhGcm9tSU8sIENoYWluKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgY2hhaW5GaXJzdElPSyA9XG4gIC8qI19fUFVSRV9fKi9cbiAgY2hhaW5GaXJzdElPS18oRnJvbUlPLCBDaGFpbilcblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBGcm9tVGFzazogRnJvbVRhc2szPFVSST4gPSB7XG4gIFVSSSxcbiAgZnJvbUlPLFxuICBmcm9tVGFza1xufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgZnJvbVRhc2tLID1cbiAgLyojX19QVVJFX18qL1xuICBmcm9tVGFza0tfKEZyb21UYXNrKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgY2hhaW5UYXNrSyA9XG4gIC8qI19fUFVSRV9fKi9cbiAgY2hhaW5UYXNrS18oRnJvbVRhc2ssIENoYWluKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgY2hhaW5GaXJzdFRhc2tLID1cbiAgLyojX19QVVJFX18qL1xuICBjaGFpbkZpcnN0VGFza0tfKEZyb21UYXNrLCBDaGFpbilcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gdXRpbHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBNYWtlIHN1cmUgdGhhdCBhIHJlc291cmNlIGlzIGNsZWFuZWQgdXAgaW4gdGhlIGV2ZW50IG9mIGFuIGV4Y2VwdGlvbiAoXFwqKS4gVGhlIHJlbGVhc2UgYWN0aW9uIGlzIGNhbGxlZCByZWdhcmRsZXNzIG9mXG4gKiB3aGV0aGVyIHRoZSBib2R5IGFjdGlvbiB0aHJvd3MgKFxcKikgb3IgcmV0dXJucy5cbiAqXG4gKiAoXFwqKSBpLmUuIHJldHVybnMgYSBgTGVmdGBcbiAqXG4gKiBAc2luY2UgMi4wLjRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJyYWNrZXQ8UiwgRSwgQSwgQj4oXG4gIGFxdWlyZTogUmVhZGVyVGFza0VpdGhlcjxSLCBFLCBBPixcbiAgdXNlOiAoYTogQSkgPT4gUmVhZGVyVGFza0VpdGhlcjxSLCBFLCBCPixcbiAgcmVsZWFzZTogKGE6IEEsIGU6IEVpdGhlcjxFLCBCPikgPT4gUmVhZGVyVGFza0VpdGhlcjxSLCBFLCB2b2lkPlxuKTogUmVhZGVyVGFza0VpdGhlcjxSLCBFLCBCPiB7XG4gIHJldHVybiAocikgPT5cbiAgICBURS5icmFja2V0KFxuICAgICAgYXF1aXJlKHIpLFxuICAgICAgKGEpID0+IHVzZShhKShyKSxcbiAgICAgIChhLCBlKSA9PiByZWxlYXNlKGEsIGUpKHIpXG4gICAgKVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBkbyBub3RhdGlvblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEBzaW5jZSAyLjkuMFxuICovXG5leHBvcnQgY29uc3QgRG86IFJlYWRlclRhc2tFaXRoZXI8dW5rbm93biwgbmV2ZXIsIHt9PiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgb2YoXy5lbXB0eVJlY29yZClcblxuLyoqXG4gKiBAc2luY2UgMi44LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGJpbmRUbyA9XG4gIC8qI19fUFVSRV9fKi9cbiAgYmluZFRvXyhGdW5jdG9yKVxuXG4vKipcbiAqIEBzaW5jZSAyLjguMFxuICovXG5leHBvcnQgY29uc3QgYmluZCA9XG4gIC8qI19fUFVSRV9fKi9cbiAgYmluZF8oQ2hhaW4pXG5cbi8qKlxuICogQHNpbmNlIDIuOC4wXG4gKi9cbmV4cG9ydCBjb25zdCBiaW5kVzogPE4gZXh0ZW5kcyBzdHJpbmcsIEEsIFIyLCBFMiwgQj4oXG4gIG5hbWU6IEV4Y2x1ZGU8Tiwga2V5b2YgQT4sXG4gIGY6IChhOiBBKSA9PiBSZWFkZXJUYXNrRWl0aGVyPFIyLCBFMiwgQj5cbikgPT4gPFIxLCBFMT4oXG4gIGZhOiBSZWFkZXJUYXNrRWl0aGVyPFIxLCBFMSwgQT5cbikgPT4gUmVhZGVyVGFza0VpdGhlcjxSMSAmIFIyLCBFMSB8IEUyLCB7IHJlYWRvbmx5IFtLIGluIGtleW9mIEEgfCBOXTogSyBleHRlbmRzIGtleW9mIEEgPyBBW0tdIDogQiB9PiA9IGJpbmQgYXMgYW55XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIHBpcGVhYmxlIHNlcXVlbmNlIFNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBAc2luY2UgMi44LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGFwUyA9XG4gIC8qI19fUFVSRV9fKi9cbiAgYXBTXyhBcHBseVBhcilcblxuLyoqXG4gKiBAc2luY2UgMi44LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGFwU1c6IDxBLCBOIGV4dGVuZHMgc3RyaW5nLCBSMiwgRTIsIEI+KFxuICBuYW1lOiBFeGNsdWRlPE4sIGtleW9mIEE+LFxuICBmYjogUmVhZGVyVGFza0VpdGhlcjxSMiwgRTIsIEI+XG4pID0+IDxSMSwgRTE+KFxuICBmYTogUmVhZGVyVGFza0VpdGhlcjxSMSwgRTEsIEE+XG4pID0+IFJlYWRlclRhc2tFaXRoZXI8UjEgJiBSMiwgRTEgfCBFMiwgeyByZWFkb25seSBbSyBpbiBrZXlvZiBBIHwgTl06IEsgZXh0ZW5kcyBrZXlvZiBBID8gQVtLXSA6IEIgfT4gPSBhcFMgYXMgYW55XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIHNlcXVlbmNlIFRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBBcFQ6IFJlYWRlclRhc2tFaXRoZXI8dW5rbm93biwgbmV2ZXIsIHJlYWRvbmx5IFtdPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgb2YoXy5lbXB0eVJlYWRvbmx5QXJyYXkpXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGFycmF5IHV0aWxzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogRXF1aXZhbGVudCB0byBgUmVhZG9ubHlOb25FbXB0eUFycmF5I3RyYXZlcnNlV2l0aEluZGV4KEFwcGxpY2F0aXZlUGFyKWAuXG4gKlxuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgdHJhdmVyc2VSZWFkb25seU5vbkVtcHR5QXJyYXlXaXRoSW5kZXggPSA8QSwgUiwgRSwgQj4oXG4gIGY6IChpbmRleDogbnVtYmVyLCBhOiBBKSA9PiBSZWFkZXJUYXNrRWl0aGVyPFIsIEUsIEI+XG4pOiAoKGFzOiBSZWFkb25seU5vbkVtcHR5QXJyYXk8QT4pID0+IFJlYWRlclRhc2tFaXRoZXI8UiwgRSwgUmVhZG9ubHlOb25FbXB0eUFycmF5PEI+PikgPT5cbiAgZmxvdyhSLnRyYXZlcnNlUmVhZG9ubHlOb25FbXB0eUFycmF5V2l0aEluZGV4KGYpLCBSLm1hcChURS50cmF2ZXJzZVJlYWRvbmx5Tm9uRW1wdHlBcnJheVdpdGhJbmRleChTSykpKVxuXG4vKipcbiAqIEVxdWl2YWxlbnQgdG8gYFJlYWRvbmx5QXJyYXkjdHJhdmVyc2VXaXRoSW5kZXgoQXBwbGljYXRpdmVQYXIpYC5cbiAqXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCB0cmF2ZXJzZVJlYWRvbmx5QXJyYXlXaXRoSW5kZXggPSA8QSwgUiwgRSwgQj4oXG4gIGY6IChpbmRleDogbnVtYmVyLCBhOiBBKSA9PiBSZWFkZXJUYXNrRWl0aGVyPFIsIEUsIEI+XG4pOiAoKGFzOiBSZWFkb25seUFycmF5PEE+KSA9PiBSZWFkZXJUYXNrRWl0aGVyPFIsIEUsIFJlYWRvbmx5QXJyYXk8Qj4+KSA9PiB7XG4gIGNvbnN0IGcgPSB0cmF2ZXJzZVJlYWRvbmx5Tm9uRW1wdHlBcnJheVdpdGhJbmRleChmKVxuICByZXR1cm4gKGFzKSA9PiAoXy5pc05vbkVtcHR5KGFzKSA/IGcoYXMpIDogQXBUKVxufVxuXG4vKipcbiAqIEVxdWl2YWxlbnQgdG8gYFJlYWRvbmx5Tm9uRW1wdHlBcnJheSN0cmF2ZXJzZVdpdGhJbmRleChBcHBsaWNhdGl2ZVNlcSlgLlxuICpcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHRyYXZlcnNlUmVhZG9ubHlOb25FbXB0eUFycmF5V2l0aEluZGV4U2VxID0gPEEsIFIsIEUsIEI+KFxuICBmOiAoaW5kZXg6IG51bWJlciwgYTogQSkgPT4gUmVhZGVyVGFza0VpdGhlcjxSLCBFLCBCPlxuKTogKChhczogUmVhZG9ubHlOb25FbXB0eUFycmF5PEE+KSA9PiBSZWFkZXJUYXNrRWl0aGVyPFIsIEUsIFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxCPj4pID0+XG4gIGZsb3coUi50cmF2ZXJzZVJlYWRvbmx5Tm9uRW1wdHlBcnJheVdpdGhJbmRleChmKSwgUi5tYXAoVEUudHJhdmVyc2VSZWFkb25seU5vbkVtcHR5QXJyYXlXaXRoSW5kZXhTZXEoU0spKSlcblxuLyoqXG4gKiBFcXVpdmFsZW50IHRvIGBSZWFkb25seUFycmF5I3RyYXZlcnNlV2l0aEluZGV4KEFwcGxpY2F0aXZlU2VxKWAuXG4gKlxuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgdHJhdmVyc2VSZWFkb25seUFycmF5V2l0aEluZGV4U2VxID0gPEEsIFIsIEUsIEI+KFxuICBmOiAoaW5kZXg6IG51bWJlciwgYTogQSkgPT4gUmVhZGVyVGFza0VpdGhlcjxSLCBFLCBCPlxuKTogKChhczogUmVhZG9ubHlBcnJheTxBPikgPT4gUmVhZGVyVGFza0VpdGhlcjxSLCBFLCBSZWFkb25seUFycmF5PEI+PikgPT4ge1xuICBjb25zdCBnID0gdHJhdmVyc2VSZWFkb25seU5vbkVtcHR5QXJyYXlXaXRoSW5kZXhTZXEoZilcbiAgcmV0dXJuIChhcykgPT4gKF8uaXNOb25FbXB0eShhcykgPyBnKGFzKSA6IEFwVClcbn1cblxuLyoqXG4gKiBAc2luY2UgMi45LjBcbiAqL1xuZXhwb3J0IGNvbnN0IHRyYXZlcnNlQXJyYXlXaXRoSW5kZXg6IDxSLCBFLCBBLCBCPihcbiAgZjogKGluZGV4OiBudW1iZXIsIGE6IEEpID0+IFJlYWRlclRhc2tFaXRoZXI8UiwgRSwgQj5cbikgPT4gKGFzOiBSZWFkb25seUFycmF5PEE+KSA9PiBSZWFkZXJUYXNrRWl0aGVyPFIsIEUsIFJlYWRvbmx5QXJyYXk8Qj4+ID0gdHJhdmVyc2VSZWFkb25seUFycmF5V2l0aEluZGV4XG5cbi8qKlxuICogQHNpbmNlIDIuOS4wXG4gKi9cbmV4cG9ydCBjb25zdCB0cmF2ZXJzZUFycmF5ID0gPFIsIEUsIEEsIEI+KFxuICBmOiAoYTogQSkgPT4gUmVhZGVyVGFza0VpdGhlcjxSLCBFLCBCPlxuKTogKChhczogUmVhZG9ubHlBcnJheTxBPikgPT4gUmVhZGVyVGFza0VpdGhlcjxSLCBFLCBSZWFkb25seUFycmF5PEI+PikgPT5cbiAgdHJhdmVyc2VSZWFkb25seUFycmF5V2l0aEluZGV4KChfLCBhKSA9PiBmKGEpKVxuXG4vKipcbiAqIEBzaW5jZSAyLjkuMFxuICovXG5leHBvcnQgY29uc3Qgc2VxdWVuY2VBcnJheTogPFIsIEUsIEE+KFxuICBhcnI6IFJlYWRvbmx5QXJyYXk8UmVhZGVyVGFza0VpdGhlcjxSLCBFLCBBPj5cbikgPT4gUmVhZGVyVGFza0VpdGhlcjxSLCBFLCBSZWFkb25seUFycmF5PEE+PiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgdHJhdmVyc2VBcnJheShpZGVudGl0eSlcblxuLyoqXG4gKiBAc2luY2UgMi45LjBcbiAqL1xuZXhwb3J0IGNvbnN0IHRyYXZlcnNlU2VxQXJyYXlXaXRoSW5kZXg6IDxSLCBFLCBBLCBCPihcbiAgZjogKGluZGV4OiBudW1iZXIsIGE6IEEpID0+IFJlYWRlclRhc2tFaXRoZXI8UiwgRSwgQj5cbikgPT4gKGFzOiBSZWFkb25seUFycmF5PEE+KSA9PiBSZWFkZXJUYXNrRWl0aGVyPFIsIEUsIFJlYWRvbmx5QXJyYXk8Qj4+ID0gdHJhdmVyc2VSZWFkb25seUFycmF5V2l0aEluZGV4U2VxXG5cbi8qKlxuICogQHNpbmNlIDIuOS4wXG4gKi9cbmV4cG9ydCBjb25zdCB0cmF2ZXJzZVNlcUFycmF5ID0gPFIsIEUsIEEsIEI+KFxuICBmOiAoYTogQSkgPT4gUmVhZGVyVGFza0VpdGhlcjxSLCBFLCBCPlxuKTogKChhczogUmVhZG9ubHlBcnJheTxBPikgPT4gUmVhZGVyVGFza0VpdGhlcjxSLCBFLCBSZWFkb25seUFycmF5PEI+PikgPT5cbiAgdHJhdmVyc2VSZWFkb25seUFycmF5V2l0aEluZGV4U2VxKChfLCBhKSA9PiBmKGEpKVxuXG4vKipcbiAqIEBzaW5jZSAyLjkuMFxuICovXG5leHBvcnQgY29uc3Qgc2VxdWVuY2VTZXFBcnJheTogPFIsIEUsIEE+KFxuICBhcnI6IFJlYWRvbmx5QXJyYXk8UmVhZGVyVGFza0VpdGhlcjxSLCBFLCBBPj5cbikgPT4gUmVhZGVyVGFza0VpdGhlcjxSLCBFLCBSZWFkb25seUFycmF5PEE+PiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgdHJhdmVyc2VTZXFBcnJheShpZGVudGl0eSlcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gZGVwcmVjYXRlZFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyB0c2xpbnQ6ZGlzYWJsZTogZGVwcmVjYXRpb25cblxuLyoqXG4gKiBVc2Ugc21hbGwsIHNwZWNpZmljIGluc3RhbmNlcyBpbnN0ZWFkLlxuICpcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjAuMFxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IHJlYWRlclRhc2tFaXRoZXI6IE1vbmFkMzxVUkk+ICYgQmlmdW5jdG9yMzxVUkk+ICYgQWx0MzxVUkk+ICYgTW9uYWRUYXNrMzxVUkk+ICYgTW9uYWRUaHJvdzM8VVJJPiA9IHtcbiAgVVJJLFxuICBtYXA6IF9tYXAsXG4gIG9mLFxuICBhcDogX2FwUGFyLFxuICBjaGFpbjogX2NoYWluLFxuICBhbHQ6IF9hbHQsXG4gIGJpbWFwOiBfYmltYXAsXG4gIG1hcExlZnQ6IF9tYXBMZWZ0LFxuICBmcm9tSU8sXG4gIGZyb21UYXNrLFxuICB0aHJvd0Vycm9yXG59XG5cbi8qKlxuICogVXNlIHNtYWxsLCBzcGVjaWZpYyBpbnN0YW5jZXMgaW5zdGVhZC5cbiAqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4wLjBcbiAqIEBkZXByZWNhdGVkXG4gKi9cblxuZXhwb3J0IGNvbnN0IHJlYWRlclRhc2tFaXRoZXJTZXE6IHR5cGVvZiByZWFkZXJUYXNrRWl0aGVyID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgb2YsXG4gIGFwOiBfYXBTZXEsXG4gIGNoYWluOiBfY2hhaW4sXG4gIGFsdDogX2FsdCxcbiAgYmltYXA6IF9iaW1hcCxcbiAgbWFwTGVmdDogX21hcExlZnQsXG4gIGZyb21JTyxcbiAgZnJvbVRhc2ssXG4gIHRocm93RXJyb3Jcbn1cblxuLyoqXG4gKiBVc2UgW2BnZXRBcHBseVNlbWlncm91cGBdKC4vQXBwbHkudHMuaHRtbCNnZXRhcHBseXNlbWlncm91cCkgaW5zdGVhZC5cbiAqXG4gKiBTZW1pZ3JvdXAgcmV0dXJuaW5nIHRoZSBsZWZ0LW1vc3QgYExlZnRgIHZhbHVlLiBJZiBib3RoIG9wZXJhbmRzIGFyZSBgUmlnaHRgcyB0aGVuIHRoZSBpbm5lciB2YWx1ZXNcbiAqIGFyZSBjb25jYXRlbmF0ZWQgdXNpbmcgdGhlIHByb3ZpZGVkIGBTZW1pZ3JvdXBgXG4gKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMC4wXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgY29uc3QgZ2V0QXBwbHlTZW1pZ3JvdXA6IDxSLCBFLCBBPihTOiBTZW1pZ3JvdXA8QT4pID0+IFNlbWlncm91cDxSZWFkZXJUYXNrRWl0aGVyPFIsIEUsIEE+PiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZ2V0QXBwbHlTZW1pZ3JvdXBfKEFwcGx5U2VxKVxuXG4vKipcbiAqIFVzZSBbYGdldEFwcGxpY2F0aXZlTW9ub2lkYF0oLi9BcHBsaWNhdGl2ZS50cy5odG1sI2dldGFwcGxpY2F0aXZlbW9ub2lkKSBpbnN0ZWFkLlxuICpcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjAuMFxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IGdldEFwcGx5TW9ub2lkOiA8UiwgRSwgQT4oTTogTW9ub2lkPEE+KSA9PiBNb25vaWQ8UmVhZGVyVGFza0VpdGhlcjxSLCBFLCBBPj4gPVxuICAvKiNfX1BVUkVfXyovXG4gIGdldEFwcGxpY2F0aXZlTW9ub2lkKEFwcGxpY2F0aXZlU2VxKVxuXG4vKipcbiAqIFVzZSBbYGdldEFwcGx5U2VtaWdyb3VwYF0oLi9BcHBseS50cy5odG1sI2dldGFwcGx5c2VtaWdyb3VwKSBpbnN0ZWFkLlxuICpcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjAuMFxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IGdldFNlbWlncm91cCA9IDxSLCBFLCBBPihTOiBTZW1pZ3JvdXA8QT4pOiBTZW1pZ3JvdXA8UmVhZGVyVGFza0VpdGhlcjxSLCBFLCBBPj4gPT5cbiAgZ2V0QXBwbHlTZW1pZ3JvdXBfKFJULkFwcGx5U2VxKShFLmdldFNlbWlncm91cChTKSlcblxuLyoqXG4gKiBVc2UgW2BnZXRBcHBsaWNhdGl2ZVJlYWRlclRhc2tWYWxpZGF0aW9uYF0oI2dldGFwcGxpY2F0aXZlcmVhZGVydGFza3ZhbGlkYXRpb24pIGFuZCBbYGdldEFsdFJlYWRlclRhc2tWYWxpZGF0aW9uYF0oI2dldGFsdHJlYWRlcnRhc2t2YWxpZGF0aW9uKSBpbnN0ZWFkLlxuICpcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjMuMFxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFJlYWRlclRhc2tWYWxpZGF0aW9uPEU+KFxuICBTRTogU2VtaWdyb3VwPEU+XG4pOiBNb25hZDNDPFVSSSwgRT4gJiBCaWZ1bmN0b3IzPFVSST4gJiBBbHQzQzxVUkksIEU+ICYgTW9uYWRUYXNrM0M8VVJJLCBFPiAmIE1vbmFkVGhyb3czQzxVUkksIEU+IHtcbiAgY29uc3QgYXBwbGljYXRpdmVSZWFkZXJUYXNrVmFsaWRhdGlvbiA9IGdldEFwcGxpY2F0aXZlUmVhZGVyVGFza1ZhbGlkYXRpb24oVC5BcHBsaWNhdGl2ZVBhciwgU0UpXG4gIGNvbnN0IGFsdFJlYWRlclRhc2tWYWxpZGF0aW9uID0gZ2V0QWx0UmVhZGVyVGFza1ZhbGlkYXRpb24oU0UpXG4gIHJldHVybiB7XG4gICAgVVJJLFxuICAgIF9FOiB1bmRlZmluZWQgYXMgYW55LFxuICAgIG1hcDogX21hcCxcbiAgICBvZixcbiAgICBjaGFpbjogX2NoYWluLFxuICAgIGJpbWFwOiBfYmltYXAsXG4gICAgbWFwTGVmdDogX21hcExlZnQsXG4gICAgYXA6IGFwcGxpY2F0aXZlUmVhZGVyVGFza1ZhbGlkYXRpb24uYXAsXG4gICAgYWx0OiBhbHRSZWFkZXJUYXNrVmFsaWRhdGlvbi5hbHQsXG4gICAgZnJvbUlPLFxuICAgIGZyb21UYXNrLFxuICAgIHRocm93RXJyb3JcbiAgfVxufVxuXG4vKipcbiAqIEBzaW5jZSAyLjAuMFxuICogQGRlcHJlY2F0ZWRcbiAqL1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmV4cG9ydCBmdW5jdGlvbiBydW48UiwgRSwgQT4obWE6IFJlYWRlclRhc2tFaXRoZXI8UiwgRSwgQT4sIHI6IFIpOiBQcm9taXNlPEVpdGhlcjxFLCBBPj4ge1xuICByZXR1cm4gbWEocikoKVxufVxuIl19