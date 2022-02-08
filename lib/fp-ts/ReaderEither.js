"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromReaderK = exports.fromReader = exports.fromPredicate = exports.fromOptionK = exports.fromOption = exports.fromEitherK = exports.fromEither = exports.foldW = exports.fold = exports.flattenW = exports.flatten = exports.flap = exports.filterOrElseW = exports.filterOrElse = exports.chainW = exports.chainReaderKW = exports.chainReaderK = exports.chainOptionK = exports.chainFirstW = exports.chainFirstReaderKW = exports.chainFirstReaderK = exports.chainFirst = exports.chainEitherKW = exports.chainEitherK = exports.chain = exports.bindW = exports.bindTo = exports.bind = exports.bimap = exports.asksReaderEitherW = exports.asksReaderEither = exports.asks = exports.ask = exports.apW = exports.apSecond = exports.apSW = exports.apS = exports.apFirst = exports.ap = exports.altW = exports.alt = exports.URI = exports.Pointed = exports.MonadThrow = exports.Monad = exports.Functor = exports.FromReader = exports.FromEither = exports.Do = exports.Chain = exports.Bifunctor = exports.Apply = exports.Applicative = exports.ApT = exports.Alt = void 0;
exports.getAltReaderValidation = getAltReaderValidation;
exports.getApplicativeReaderValidation = getApplicativeReaderValidation;
exports.getCompactable = exports.getApplySemigroup = exports.getApplyMonoid = void 0;
exports.getFilterable = getFilterable;
exports.getOrElseW = exports.getOrElse = void 0;
exports.getReaderValidation = getReaderValidation;
exports.traverseReadonlyNonEmptyArrayWithIndex = exports.traverseReadonlyArrayWithIndex = exports.traverseArrayWithIndex = exports.traverseArray = exports.toUnion = exports.throwError = exports.swap = exports.sequenceArray = exports.rightReader = exports.right = exports.readerEither = exports.orLeft = exports.orElseW = exports.orElseFirstW = exports.orElseFirst = exports.orElse = exports.of = exports.matchW = exports.matchEW = exports.matchE = exports.match = exports.mapLeft = exports.map = exports.local = exports.leftReader = exports.left = exports.getSemigroup = void 0;

var _Applicative = require("./Applicative");

var _Apply = require("./Apply");

var _Chain = require("./Chain");

var _Compactable = require("./Compactable");

var E = _interopRequireWildcard(require("./Either"));

var ET = _interopRequireWildcard(require("./EitherT"));

var _Filterable = require("./Filterable");

var _FromEither = require("./FromEither");

var _FromReader = require("./FromReader");

var _function = require("./function");

var _Functor = require("./Functor");

var _ = _interopRequireWildcard(require("./internal"));

var R = _interopRequireWildcard(require("./Reader"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @since 2.0.0
 */
var Reader = R.Reader;
var Either = E.Either; // -------------------------------------------------------------------------------------
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
 * @category constructors
 * @since 2.0.0
 */
var left = /*#__PURE__*/ET.left(R.Pointed);
/**
 * @category constructors
 * @since 2.0.0
 */

exports.left = left;
var right = /*#__PURE__*/ET.right(R.Pointed);
/**
 * @category constructors
 * @since 2.0.0
 */

exports.right = right;
var rightReader = /*#__PURE__*/ET.rightF(R.Functor);
/**
 * @category constructors
 * @since 2.0.0
 */

exports.rightReader = rightReader;
var leftReader = /*#__PURE__*/ET.leftF(R.Functor); // -------------------------------------------------------------------------------------
// natural transformations
// -------------------------------------------------------------------------------------

/**
 * @category natural transformations
 * @since 2.0.0
 */

exports.leftReader = leftReader;
var fromEither = R.of;
/**
 * @category natural transformations
 * @since 2.11.0
 */

exports.fromEither = fromEither;
var fromReader = rightReader; // -------------------------------------------------------------------------------------
// destructors
// -------------------------------------------------------------------------------------

/**
 * @category destructors
 * @since 2.10.0
 */

exports.fromReader = fromReader;
var match = /*#__PURE__*/ET.match(R.Functor);
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
var matchE = /*#__PURE__*/ET.matchE(R.Monad);
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
var getOrElse = /*#__PURE__*/ET.getOrElse(R.Monad);
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
var toUnion = /*#__PURE__*/ET.toUnion(R.Functor); // -------------------------------------------------------------------------------------
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
 * Less strict version of [`asksReaderEither`](#asksreadereither).
 *
 * @category combinators
 * @since 2.11.0
 */

exports.local = local;
var asksReaderEitherW = R.asksReaderW;
/**
 * Effectfully accesses the environment.
 *
 * @category combinators
 * @since 2.11.0
 */

exports.asksReaderEitherW = asksReaderEitherW;
var asksReaderEither = asksReaderEitherW;
/**
 * @category combinators
 * @since 2.0.0
 */

exports.asksReaderEither = asksReaderEither;
var orElse = /*#__PURE__*/ET.orElse(R.Monad);
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
var orElseFirst = /*#__PURE__*/ET.orElseFirst(R.Monad);
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
var orLeft = /*#__PURE__*/ET.orLeft(R.Monad);
/**
 * @category combinators
 * @since 2.0.0
 */

exports.orLeft = orLeft;
var swap = /*#__PURE__*/ET.swap(R.Functor); // -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------

/* istanbul ignore next */

exports.swap = swap;

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
  return (0, _function.pipe)(fa, alt(that));
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


var map = /*#__PURE__*/ET.map(R.Functor);
/**
 * Map a pair of functions over the two last type arguments of the bifunctor.
 *
 * @category Bifunctor
 * @since 2.0.0
 */

exports.map = map;
var bimap = /*#__PURE__*/ET.bimap(R.Functor);
/**
 * Map a function over the second type argument of a bifunctor.
 *
 * @category Bifunctor
 * @since 2.0.0
 */

exports.bimap = bimap;
var mapLeft = /*#__PURE__*/ET.mapLeft(R.Functor);
/**
 * Apply a function to an argument under a type constructor.
 *
 * @category Apply
 * @since 2.0.0
 */

exports.mapLeft = mapLeft;
var ap = /*#__PURE__*/ET.ap(R.Apply);
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
 * @since 2.8.5
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
var chain = /*#__PURE__*/ET.chain(R.Monad);
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
var alt = /*#__PURE__*/ET.alt(R.Monad);
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
 * @since 2.7.0
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
var URI = 'ReaderEither';
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
    compact: (0, _Compactable.compact)(R.Functor, C),
    separate: (0, _Compactable.separate)(R.Functor, C, E.Functor)
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

  var _filter = (0, _Filterable.filter)(R.Functor, F);

  var _filterMap = (0, _Filterable.filterMap)(R.Functor, F);

  var _partition = (0, _Filterable.partition)(R.Functor, F);

  var _partitionMap = (0, _Filterable.partitionMap)(R.Functor, F);

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


function getApplicativeReaderValidation(S) {
  var _ap2 = (0, _Apply.ap)(R.Apply, E.getApplicativeValidation(S));

  return {
    URI: URI,
    _E: undefined,
    map: _map,
    ap: function ap(fab, fa) {
      return (0, _function.pipe)(fab, _ap2(fa));
    },
    of: of
  };
}
/**
 * @category instances
 * @since 2.7.0
 */


function getAltReaderValidation(S) {
  var _alt2 = ET.altValidation(R.Monad, S);

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
 * Less strict version of [`chainFirst`](#chainfirst)
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
 * Less strict version of [`chainReaderK`](#chainreaderk).
 *
 * @category combinators
 * @since 2.11.0
 */

exports.chainFirstReaderK = chainFirstReaderK;
var chainFirstReaderKW = chainFirstReaderK;
/**
 * @category instances
 * @since 2.7.0
 */

exports.chainFirstReaderKW = chainFirstReaderKW;
var MonadThrow = {
  URI: URI,
  map: _map,
  ap: _ap,
  of: of,
  chain: _chain,
  throwError: throwError
};
/**
 * @category instances
 * @since 2.10.0
 */

exports.MonadThrow = MonadThrow;
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
var fromEitherK = /*#__PURE__*/(0, _FromEither.fromEitherK)(FromEither); // -------------------------------------------------------------------------------------
// do notation
// -------------------------------------------------------------------------------------

/**
 * @since 2.9.0
 */

exports.fromEitherK = fromEitherK;
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
  return (0, _function.flow)(R.traverseReadonlyNonEmptyArrayWithIndex(f), R.map(E.traverseReadonlyNonEmptyArrayWithIndex(_function.SK)));
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
var readerEither = {
  URI: URI,
  bimap: _bimap,
  mapLeft: _mapLeft,
  map: _map,
  of: of,
  ap: _ap,
  chain: _chain,
  alt: _alt,
  throwError: left
};
/**
 * Use [`getApplySemigroup`](./Apply.ts.html#getapplysemigroup) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */

exports.readerEither = readerEither;
var getApplySemigroup = /*#__PURE__*/(0, _Apply.getApplySemigroup)(Apply);
/**
 * Use [`getApplicativeMonoid`](./Applicative.ts.html#getapplicativemonoid) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */

exports.getApplySemigroup = getApplySemigroup;
var getApplyMonoid = /*#__PURE__*/(0, _Applicative.getApplicativeMonoid)(Applicative);
/**
 * Use [`getApplySemigroup`](./Apply.ts.html#getapplysemigroup) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */

exports.getApplyMonoid = getApplyMonoid;

var getSemigroup = function getSemigroup(S) {
  return (0, _Apply.getApplySemigroup)(R.Apply)(E.getSemigroup(S));
};
/**
 * Use [`getApplicativeReaderValidation`](#getapplicativereadervalidation) and [`getAltReaderValidation`](#getaltreadervalidation) instead.
 *
 * @category instances
 * @since 2.3.0
 * @deprecated
 */


exports.getSemigroup = getSemigroup;

function getReaderValidation(SE) {
  var applicativeReaderValidation = getApplicativeReaderValidation(SE);
  var altReaderValidation = getAltReaderValidation(SE);
  return {
    URI: URI,
    _E: undefined,
    map: _map,
    ap: applicativeReaderValidation.ap,
    of: of,
    chain: _chain,
    bimap: _bimap,
    mapLeft: _mapLeft,
    alt: altReaderValidation.alt,
    throwError: throwError
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mcC10cy9SZWFkZXJFaXRoZXIudHMiXSwibmFtZXMiOlsiUmVhZGVyIiwiUiIsIkVpdGhlciIsIkUiLCJsZWZ0IiwiRVQiLCJQb2ludGVkIiwicmlnaHQiLCJyaWdodFJlYWRlciIsInJpZ2h0RiIsIkZ1bmN0b3IiLCJsZWZ0UmVhZGVyIiwibGVmdEYiLCJmcm9tRWl0aGVyIiwib2YiLCJmcm9tUmVhZGVyIiwibWF0Y2giLCJtYXRjaFciLCJtYXRjaEUiLCJNb25hZCIsImZvbGQiLCJtYXRjaEVXIiwiZm9sZFciLCJnZXRPckVsc2UiLCJnZXRPckVsc2VXIiwidG9VbmlvbiIsImxvY2FsIiwiYXNrc1JlYWRlckVpdGhlclciLCJhc2tzUmVhZGVyVyIsImFza3NSZWFkZXJFaXRoZXIiLCJvckVsc2UiLCJvckVsc2VXIiwib3JFbHNlRmlyc3QiLCJvckVsc2VGaXJzdFciLCJvckxlZnQiLCJzd2FwIiwiX21hcCIsImZhIiwiZiIsIm1hcCIsIl9iaW1hcCIsImciLCJiaW1hcCIsIl9tYXBMZWZ0IiwibWFwTGVmdCIsIl9hcCIsImZhYiIsImFwIiwiX2NoYWluIiwibWEiLCJjaGFpbiIsIl9hbHQiLCJ0aGF0IiwiYWx0IiwiQXBwbHkiLCJhcFciLCJjaGFpblciLCJmbGF0dGVuVyIsImlkZW50aXR5IiwiZmxhdHRlbiIsImFsdFciLCJ0aHJvd0Vycm9yIiwiVVJJIiwiZ2V0Q29tcGFjdGFibGUiLCJNIiwiQyIsIl9FIiwidW5kZWZpbmVkIiwiY29tcGFjdCIsInNlcGFyYXRlIiwiZ2V0RmlsdGVyYWJsZSIsIkYiLCJmaWx0ZXIiLCJmaWx0ZXJNYXAiLCJwYXJ0aXRpb24iLCJwYXJ0aXRpb25NYXAiLCJwcmVkaWNhdGUiLCJnZXRBcHBsaWNhdGl2ZVJlYWRlclZhbGlkYXRpb24iLCJTIiwiZ2V0QXBwbGljYXRpdmVWYWxpZGF0aW9uIiwiZ2V0QWx0UmVhZGVyVmFsaWRhdGlvbiIsImFsdFZhbGlkYXRpb24iLCJmbGFwIiwiYXBGaXJzdCIsImFwU2Vjb25kIiwiQXBwbGljYXRpdmUiLCJDaGFpbiIsImNoYWluRmlyc3QiLCJjaGFpbkZpcnN0VyIsIkJpZnVuY3RvciIsIkFsdCIsIkZyb21SZWFkZXIiLCJhc2siLCJhc2tzIiwiZnJvbVJlYWRlcksiLCJjaGFpblJlYWRlcksiLCJjaGFpblJlYWRlcktXIiwiY2hhaW5GaXJzdFJlYWRlcksiLCJjaGFpbkZpcnN0UmVhZGVyS1ciLCJNb25hZFRocm93IiwiRnJvbUVpdGhlciIsImZyb21PcHRpb24iLCJmcm9tT3B0aW9uSyIsImNoYWluT3B0aW9uSyIsImNoYWluRWl0aGVySyIsImNoYWluRWl0aGVyS1ciLCJmcm9tUHJlZGljYXRlIiwiZmlsdGVyT3JFbHNlIiwiZmlsdGVyT3JFbHNlVyIsImZyb21FaXRoZXJLIiwiRG8iLCJfIiwiZW1wdHlSZWNvcmQiLCJiaW5kVG8iLCJiaW5kIiwiYmluZFciLCJhcFMiLCJhcFNXIiwiQXBUIiwiZW1wdHlSZWFkb25seUFycmF5IiwidHJhdmVyc2VSZWFkb25seU5vbkVtcHR5QXJyYXlXaXRoSW5kZXgiLCJTSyIsInRyYXZlcnNlUmVhZG9ubHlBcnJheVdpdGhJbmRleCIsImFzIiwiaXNOb25FbXB0eSIsInRyYXZlcnNlQXJyYXlXaXRoSW5kZXgiLCJ0cmF2ZXJzZUFycmF5IiwiYSIsInNlcXVlbmNlQXJyYXkiLCJyZWFkZXJFaXRoZXIiLCJnZXRBcHBseVNlbWlncm91cCIsImdldEFwcGx5TW9ub2lkIiwiZ2V0U2VtaWdyb3VwIiwiZ2V0UmVhZGVyVmFsaWRhdGlvbiIsIlNFIiwiYXBwbGljYXRpdmVSZWFkZXJWYWxpZGF0aW9uIiwiYWx0UmVhZGVyVmFsaWRhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUlBOztBQUNBOztBQVNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQU9BOztBQVVBOztBQVFBOztBQUNBOztBQUNBOztBQVFBOzs7Ozs7QUFyREE7QUFDQTtBQUNBO0lBd0RPQSxNLEdBQVNDLEMsQ0FBRUQsTTtJQUNYRSxNLEdB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SUFBQUEsRUFBRSxFQUFFQyxTQUZDO0FBR0w1QixJQUFBQSxHQUFHLEVBQUVILElBSEE7QUFJTFcsSUFBQUEsRUFBRSxFQUFFd0YsMkJBQTJCLENBQUN4RixFQUozQjtBQUtMakMsSUFBQUEsRUFBRSxFQUFGQSxFQUxLO0FBTUxvQyxJQUFBQSxLQUFLLEVBQUVGLE1BTkY7QUFPTE4sSUFBQUEsS0FBSyxFQUFFRixNQVBGO0FBUUxJLElBQUFBLE9BQU8sRUFBRUQsUUFSSjtBQVNMVSxJQUFBQSxHQUFHLEVBQUVtRixtQkFBbUIsQ0FBQ25GLEdBVHBCO0FBVUxRLElBQUFBLFVBQVUsRUFBVkE7QUFWSyxHQUFQO0FBWUQiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5pbXBvcnQgeyBBbHQzLCBBbHQzQyB9IGZyb20gJy4vQWx0J1xuaW1wb3J0IHsgQXBwbGljYXRpdmUzLCBBcHBsaWNhdGl2ZTNDLCBnZXRBcHBsaWNhdGl2ZU1vbm9pZCB9IGZyb20gJy4vQXBwbGljYXRpdmUnXG5pbXBvcnQge1xuICBhcCBhcyBhcF8sXG4gIGFwRmlyc3QgYXMgYXBGaXJzdF8sXG4gIEFwcGx5MyxcbiAgYXBTIGFzIGFwU18sXG4gIGFwU2Vjb25kIGFzIGFwU2Vjb25kXyxcbiAgZ2V0QXBwbHlTZW1pZ3JvdXAgYXMgZ2V0QXBwbHlTZW1pZ3JvdXBfXG59IGZyb20gJy4vQXBwbHknXG5pbXBvcnQgeyBCaWZ1bmN0b3IzIH0gZnJvbSAnLi9CaWZ1bmN0b3InXG5pbXBvcnQgeyBiaW5kIGFzIGJpbmRfLCBDaGFpbjMsIGNoYWluRmlyc3QgYXMgY2hhaW5GaXJzdF8gfSBmcm9tICcuL0NoYWluJ1xuaW1wb3J0IHsgY29tcGFjdCBhcyBjb21wYWN0XywgQ29tcGFjdGFibGUzQywgc2VwYXJhdGUgYXMgc2VwYXJhdGVfIH0gZnJvbSAnLi9Db21wYWN0YWJsZSdcbmltcG9ydCAqIGFzIEUgZnJvbSAnLi9FaXRoZXInXG5pbXBvcnQgKiBhcyBFVCBmcm9tICcuL0VpdGhlclQnXG5pbXBvcnQge1xuICBmaWx0ZXIgYXMgZmlsdGVyXyxcbiAgRmlsdGVyYWJsZTNDLFxuICBmaWx0ZXJNYXAgYXMgZmlsdGVyTWFwXyxcbiAgcGFydGl0aW9uIGFzIHBhcnRpdGlvbl8sXG4gIHBhcnRpdGlvbk1hcCBhcyBwYXJ0aXRpb25NYXBfXG59IGZyb20gJy4vRmlsdGVyYWJsZSdcbmltcG9ydCB7XG4gIGNoYWluRWl0aGVySyBhcyBjaGFpbkVpdGhlcktfLFxuICBjaGFpbk9wdGlvbksgYXMgY2hhaW5PcHRpb25LXyxcbiAgZmlsdGVyT3JFbHNlIGFzIGZpbHRlck9yRWxzZV8sXG4gIEZyb21FaXRoZXIzLFxuICBmcm9tRWl0aGVySyBhcyBmcm9tRWl0aGVyS18sXG4gIGZyb21PcHRpb24gYXMgZnJvbU9wdGlvbl8sXG4gIGZyb21PcHRpb25LIGFzIGZyb21PcHRpb25LXyxcbiAgZnJvbVByZWRpY2F0ZSBhcyBmcm9tUHJlZGljYXRlX1xufSBmcm9tICcuL0Zyb21FaXRoZXInXG5pbXBvcnQge1xuICBhc2sgYXMgYXNrXyxcbiAgYXNrcyBhcyBhc2tzXyxcbiAgY2hhaW5GaXJzdFJlYWRlcksgYXMgY2hhaW5GaXJzdFJlYWRlcktfLFxuICBjaGFpblJlYWRlcksgYXMgY2hhaW5SZWFkZXJLXyxcbiAgRnJvbVJlYWRlcjMsXG4gIGZyb21SZWFkZXJLIGFzIGZyb21SZWFkZXJLX1xufSBmcm9tICcuL0Zyb21SZWFkZXInXG5pbXBvcnQgeyBmbG93LCBpZGVudGl0eSwgTGF6eSwgcGlwZSwgU0sgfSBmcm9tICcuL2Z1bmN0aW9uJ1xuaW1wb3J0IHsgYmluZFRvIGFzIGJpbmRUb18sIGZsYXAgYXMgZmxhcF8sIEZ1bmN0b3IzIH0gZnJvbSAnLi9GdW5jdG9yJ1xuaW1wb3J0ICogYXMgXyBmcm9tICcuL2ludGVybmFsJ1xuaW1wb3J0IHsgTW9uYWQzLCBNb25hZDNDIH0gZnJvbSAnLi9Nb25hZCdcbmltcG9ydCB7IE1vbmFkVGhyb3czLCBNb25hZFRocm93M0MgfSBmcm9tICcuL01vbmFkVGhyb3cnXG5pbXBvcnQgeyBNb25vaWQgfSBmcm9tICcuL01vbm9pZCdcbmltcG9ydCB7IE5hdHVyYWxUcmFuc2Zvcm1hdGlvbjEzQyB9IGZyb20gJy4vTmF0dXJhbFRyYW5zZm9ybWF0aW9uJ1xuaW1wb3J0IHsgVVJJIGFzIE9VUkkgfSBmcm9tICcuL09wdGlvbidcbmltcG9ydCB7IFBvaW50ZWQzIH0gZnJvbSAnLi9Qb2ludGVkJ1xuaW1wb3J0IHsgUHJlZGljYXRlIH0gZnJvbSAnLi9QcmVkaWNhdGUnXG5pbXBvcnQgKiBhcyBSIGZyb20gJy4vUmVhZGVyJ1xuaW1wb3J0IHsgUmVhZG9ubHlOb25FbXB0eUFycmF5IH0gZnJvbSAnLi9SZWFkb25seU5vbkVtcHR5QXJyYXknXG5pbXBvcnQgeyBSZWZpbmVtZW50IH0gZnJvbSAnLi9SZWZpbmVtZW50J1xuaW1wb3J0IHsgU2VtaWdyb3VwIH0gZnJvbSAnLi9TZW1pZ3JvdXAnXG5cbmltcG9ydCBSZWFkZXIgPSBSLlJlYWRlclxuaW1wb3J0IEVpdGhlciA9IEUuRWl0aGVyXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIG1vZGVsXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQGNhdGVnb3J5IG1vZGVsXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSZWFkZXJFaXRoZXI8UiwgRSwgQT4gZXh0ZW5kcyBSZWFkZXI8UiwgRWl0aGVyPEUsIEE+PiB7fVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBjb25zdHJ1Y3RvcnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29uc3RydWN0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGxlZnQ6IDxSLCBFID0gbmV2ZXIsIEEgPSBuZXZlcj4oZTogRSkgPT4gUmVhZGVyRWl0aGVyPFIsIEUsIEE+ID1cbiAgLyojX19QVVJFX18qL1xuICBFVC5sZWZ0KFIuUG9pbnRlZClcblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29uc3RydWN0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHJpZ2h0OiA8UiwgRSA9IG5ldmVyLCBBID0gbmV2ZXI+KGE6IEEpID0+IFJlYWRlckVpdGhlcjxSLCBFLCBBPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgRVQucmlnaHQoUi5Qb2ludGVkKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb25zdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgcmlnaHRSZWFkZXI6IDxSLCBFID0gbmV2ZXIsIEEgPSBuZXZlcj4obWE6IFJlYWRlcjxSLCBBPikgPT4gUmVhZGVyRWl0aGVyPFIsIEUsIEE+ID1cbiAgLyojX19QVVJFX18qL1xuICBFVC5yaWdodEYoUi5GdW5jdG9yKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb25zdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgbGVmdFJlYWRlcjogPFIsIEUgPSBuZXZlciwgQSA9IG5ldmVyPihtZTogUmVhZGVyPFIsIEU+KSA9PiBSZWFkZXJFaXRoZXI8UiwgRSwgQT4gPVxuICAvKiNfX1BVUkVfXyovXG4gIEVULmxlZnRGKFIuRnVuY3RvcilcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gbmF0dXJhbCB0cmFuc2Zvcm1hdGlvbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgbmF0dXJhbCB0cmFuc2Zvcm1hdGlvbnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgZnJvbUVpdGhlcjogRnJvbUVpdGhlcjM8VVJJPlsnZnJvbUVpdGhlciddID0gUi5vZlxuXG4vKipcbiAqIEBjYXRlZ29yeSBuYXR1cmFsIHRyYW5zZm9ybWF0aW9uc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgZnJvbVJlYWRlcjogRnJvbVJlYWRlcjM8VVJJPlsnZnJvbVJlYWRlciddID0gcmlnaHRSZWFkZXJcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gZGVzdHJ1Y3RvcnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgZGVzdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IG1hdGNoOiA8RSwgQiwgQT4oXG4gIG9uTGVmdDogKGU6IEUpID0+IEIsXG4gIG9uUmlnaHQ6IChhOiBBKSA9PiBCXG4pID0+IDxSPihtYTogUmVhZGVyRWl0aGVyPFIsIEUsIEE+KSA9PiBSZWFkZXI8UiwgQj4gPVxuICAvKiNfX1BVUkVfXyovXG4gIEVULm1hdGNoKFIuRnVuY3RvcilcblxuLyoqXG4gKiBMZXNzIHN0cmljdCB2ZXJzaW9uIG9mIFtgbWF0Y2hgXSgjbWF0Y2gpLlxuICpcbiAqIEBjYXRlZ29yeSBkZXN0cnVjdG9yc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgbWF0Y2hXOiA8RSwgQiwgQSwgQz4oXG4gIG9uTGVmdDogKGU6IEUpID0+IEIsXG4gIG9uUmlnaHQ6IChhOiBBKSA9PiBDXG4pID0+IDxSPihtYTogUmVhZGVyPFIsIEVpdGhlcjxFLCBBPj4pID0+IFJlYWRlcjxSLCBCIHwgQz4gPSBtYXRjaCBhcyBhbnlcblxuLyoqXG4gKiBAY2F0ZWdvcnkgZGVzdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IG1hdGNoRTogPFIsIEUsIEEsIEI+KFxuICBvbkxlZnQ6IChlOiBFKSA9PiBSZWFkZXI8UiwgQj4sXG4gIG9uUmlnaHQ6IChhOiBBKSA9PiBSZWFkZXI8UiwgQj5cbikgPT4gKG1hOiBSZWFkZXJFaXRoZXI8UiwgRSwgQT4pID0+IFJlYWRlcjxSLCBCPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgRVQubWF0Y2hFKFIuTW9uYWQpXG5cbi8qKlxuICogQWxpYXMgb2YgW2BtYXRjaEVgXSgjbWF0Y2hlKS5cbiAqXG4gKiBAY2F0ZWdvcnkgZGVzdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgZm9sZCA9IG1hdGNoRVxuXG4vKipcbiAqIExlc3Mgc3RyaWN0IHZlcnNpb24gb2YgW2BtYXRjaEVgXSgjbWF0Y2hlKS5cbiAqXG4gKiBAY2F0ZWdvcnkgZGVzdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IG1hdGNoRVc6IDxFLCBSMiwgQiwgQSwgUjMsIEM+KFxuICBvbkxlZnQ6IChlOiBFKSA9PiBSZWFkZXI8UjIsIEI+LFxuICBvblJpZ2h0OiAoYTogQSkgPT4gUmVhZGVyPFIzLCBDPlxuKSA9PiA8UjE+KG1hOiBSZWFkZXJFaXRoZXI8UjEsIEUsIEE+KSA9PiBSZWFkZXI8UjEgJiBSMiAmIFIzLCBCIHwgQz4gPSBtYXRjaEUgYXMgYW55XG5cbi8qKlxuICogQWxpYXMgb2YgW2BtYXRjaEVXYF0oI21hdGNoZXcpLlxuICpcbiAqIEBjYXRlZ29yeSBkZXN0cnVjdG9yc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgZm9sZFcgPSBtYXRjaEVXXG5cbi8qKlxuICogQGNhdGVnb3J5IGRlc3RydWN0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGdldE9yRWxzZTogPEUsIFIsIEE+KG9uTGVmdDogKGU6IEUpID0+IFJlYWRlcjxSLCBBPikgPT4gKG1hOiBSZWFkZXJFaXRoZXI8UiwgRSwgQT4pID0+IFJlYWRlcjxSLCBBPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgRVQuZ2V0T3JFbHNlKFIuTW9uYWQpXG5cbi8qKlxuICogTGVzcyBzdHJpY3QgdmVyc2lvbiBvZiBbYGdldE9yRWxzZWBdKCNnZXRvcmVsc2UpLlxuICpcbiAqIEBjYXRlZ29yeSBkZXN0cnVjdG9yc1xuICogQHNpbmNlIDIuNi4wXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRPckVsc2VXOiA8UjIsIEUsIEI+KFxuICBvbkxlZnQ6IChlOiBFKSA9PiBSZWFkZXI8UjIsIEI+XG4pID0+IDxSMSwgQT4obWE6IFJlYWRlckVpdGhlcjxSMSwgRSwgQT4pID0+IFJlYWRlcjxSMSAmIFIyLCBBIHwgQj4gPSBnZXRPckVsc2UgYXMgYW55XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGludGVyb3Bcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW50ZXJvcFxuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgdG9VbmlvbjogPFIsIEUsIEE+KGZhOiBSZWFkZXJFaXRoZXI8UiwgRSwgQT4pID0+IFJlYWRlcjxSLCBFIHwgQT4gPVxuICAvKiNfX1BVUkVfXyovXG4gIEVULnRvVW5pb24oUi5GdW5jdG9yKVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBjb21iaW5hdG9yc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIENoYW5nZXMgdGhlIHZhbHVlIG9mIHRoZSBsb2NhbCBjb250ZXh0IGR1cmluZyB0aGUgZXhlY3V0aW9uIG9mIHRoZSBhY3Rpb24gYG1hYCAoc2ltaWxhciB0byBgQ29udHJhdmFyaWFudGAnc1xuICogYGNvbnRyYW1hcGApLlxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBsb2NhbDogPFIyLCBSMT4oZjogKHIyOiBSMikgPT4gUjEpID0+IDxFLCBBPihtYTogUmVhZGVyRWl0aGVyPFIxLCBFLCBBPikgPT4gUmVhZGVyRWl0aGVyPFIyLCBFLCBBPiA9XG4gIFIubG9jYWxcblxuLyoqXG4gKiBMZXNzIHN0cmljdCB2ZXJzaW9uIG9mIFtgYXNrc1JlYWRlckVpdGhlcmBdKCNhc2tzcmVhZGVyZWl0aGVyKS5cbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGFza3NSZWFkZXJFaXRoZXJXOiA8UjEsIFIyLCBFLCBBPihmOiAocjE6IFIxKSA9PiBSZWFkZXJFaXRoZXI8UjIsIEUsIEE+KSA9PiBSZWFkZXJFaXRoZXI8UjEgJiBSMiwgRSwgQT4gPVxuICBSLmFza3NSZWFkZXJXXG5cbi8qKlxuICogRWZmZWN0ZnVsbHkgYWNjZXNzZXMgdGhlIGVudmlyb25tZW50LlxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgYXNrc1JlYWRlckVpdGhlcjogPFIsIEUsIEE+KFxuICBmOiAocjogUikgPT4gUmVhZGVyRWl0aGVyPFIsIEUsIEE+XG4pID0+IFJlYWRlckVpdGhlcjxSLCBFLCBBPiA9IGFza3NSZWFkZXJFaXRoZXJXXG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IG9yRWxzZTogPEUxLCBSLCBFMiwgQT4oXG4gIG9uTGVmdDogKGU6IEUxKSA9PiBSZWFkZXJFaXRoZXI8UiwgRTIsIEE+XG4pID0+IChtYTogUmVhZGVyRWl0aGVyPFIsIEUxLCBBPikgPT4gUmVhZGVyRWl0aGVyPFIsIEUyLCBBPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgRVQub3JFbHNlKFIuTW9uYWQpXG5cbi8qKlxuICogTGVzcyBzdHJpY3QgdmVyc2lvbiBvZiBbYG9yRWxzZWBdKCNvcmVsc2UpLlxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3Qgb3JFbHNlVzogPEUxLCBSMSwgRTIsIEI+KFxuICBvbkxlZnQ6IChlOiBFMSkgPT4gUmVhZGVyRWl0aGVyPFIxLCBFMiwgQj5cbikgPT4gPFIyLCBBPihtYTogUmVhZGVyRWl0aGVyPFIyLCBFMSwgQT4pID0+IFJlYWRlckVpdGhlcjxSMSAmIFIyLCBFMiwgQSB8IEI+ID0gb3JFbHNlIGFzIGFueVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3Qgb3JFbHNlRmlyc3Q6IDxFLCBSLCBCPihcbiAgb25MZWZ0OiAoZTogRSkgPT4gUmVhZGVyRWl0aGVyPFIsIEUsIEI+XG4pID0+IDxBPihtYTogUmVhZGVyRWl0aGVyPFIsIEUsIEE+KSA9PiBSZWFkZXJFaXRoZXI8UiwgRSwgQT4gPVxuICAvKiNfX1BVUkVfXyovXG4gIEVULm9yRWxzZUZpcnN0KFIuTW9uYWQpXG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBvckVsc2VGaXJzdFc6IDxFMSwgUjIsIEUyLCBCPihcbiAgb25MZWZ0OiAoZTogRTEpID0+IFJlYWRlckVpdGhlcjxSMiwgRTIsIEI+XG4pID0+IDxSMSwgQT4obWE6IFJlYWRlckVpdGhlcjxSMSwgRTEsIEE+KSA9PiBSZWFkZXJFaXRoZXI8UjEgJiBSMiwgRTEgfCBFMiwgQT4gPSBvckVsc2VGaXJzdCBhcyBhbnlcblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IG9yTGVmdDogPEUxLCBSLCBFMj4oXG4gIG9uTGVmdDogKGU6IEUxKSA9PiBSZWFkZXI8UiwgRTI+XG4pID0+IDxBPihmYTogUmVhZGVyRWl0aGVyPFIsIEUxLCBBPikgPT4gUmVhZGVyRWl0aGVyPFIsIEUyLCBBPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgRVQub3JMZWZ0KFIuTW9uYWQpXG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHN3YXA6IDxSLCBFLCBBPihtYTogUmVhZGVyRWl0aGVyPFIsIEUsIEE+KSA9PiBSZWFkZXJFaXRoZXI8UiwgQSwgRT4gPVxuICAvKiNfX1BVUkVfXyovXG4gIEVULnN3YXAoUi5GdW5jdG9yKVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBub24tcGlwZWFibGVzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5jb25zdCBfbWFwOiBNb25hZDM8VVJJPlsnbWFwJ10gPSAoZmEsIGYpID0+IHBpcGUoZmEsIG1hcChmKSlcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5jb25zdCBfYmltYXA6IEJpZnVuY3RvcjM8VVJJPlsnYmltYXAnXSA9IChmYSwgZiwgZykgPT4gcGlwZShmYSwgYmltYXAoZiwgZykpXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuY29uc3QgX21hcExlZnQ6IEJpZnVuY3RvcjM8VVJJPlsnbWFwTGVmdCddID0gKGZhLCBmKSA9PiBwaXBlKGZhLCBtYXBMZWZ0KGYpKVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmNvbnN0IF9hcDogTW9uYWQzPFVSST5bJ2FwJ10gPSAoZmFiLCBmYSkgPT4gcGlwZShmYWIsIGFwKGZhKSlcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5jb25zdCBfY2hhaW46IE1vbmFkMzxVUkk+WydjaGFpbiddID0gKG1hLCBmKSA9PiBwaXBlKG1hLCBjaGFpbihmKSlcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5jb25zdCBfYWx0OiBBbHQzPFVSST5bJ2FsdCddID0gKGZhLCB0aGF0KSA9PiBwaXBlKGZhLCBhbHQodGhhdCkpXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIHR5cGUgY2xhc3MgbWVtYmVyc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIGBtYXBgIGNhbiBiZSB1c2VkIHRvIHR1cm4gZnVuY3Rpb25zIGAoYTogQSkgPT4gQmAgaW50byBmdW5jdGlvbnMgYChmYTogRjxBPikgPT4gRjxCPmAgd2hvc2UgYXJndW1lbnQgYW5kIHJldHVybiB0eXBlc1xuICogdXNlIHRoZSB0eXBlIGNvbnN0cnVjdG9yIGBGYCB0byByZXByZXNlbnQgc29tZSBjb21wdXRhdGlvbmFsIGNvbnRleHQuXG4gKlxuICogQGNhdGVnb3J5IEZ1bmN0b3JcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgbWFwOiA8QSwgQj4oZjogKGE6IEEpID0+IEIpID0+IDxSLCBFPihmYTogUmVhZGVyRWl0aGVyPFIsIEUsIEE+KSA9PiBSZWFkZXJFaXRoZXI8UiwgRSwgQj4gPVxuICAvKiNfX1BVUkVfXyovXG4gIEVULm1hcChSLkZ1bmN0b3IpXG5cbi8qKlxuICogTWFwIGEgcGFpciBvZiBmdW5jdGlvbnMgb3ZlciB0aGUgdHdvIGxhc3QgdHlwZSBhcmd1bWVudHMgb2YgdGhlIGJpZnVuY3Rvci5cbiAqXG4gKiBAY2F0ZWdvcnkgQmlmdW5jdG9yXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGJpbWFwOiA8RSwgRywgQSwgQj4oXG4gIGY6IChlOiBFKSA9PiBHLFxuICBnOiAoYTogQSkgPT4gQlxuKSA9PiA8Uj4oZmE6IFJlYWRlckVpdGhlcjxSLCBFLCBBPikgPT4gUmVhZGVyRWl0aGVyPFIsIEcsIEI+ID1cbiAgLyojX19QVVJFX18qL1xuICBFVC5iaW1hcChSLkZ1bmN0b3IpXG5cbi8qKlxuICogTWFwIGEgZnVuY3Rpb24gb3ZlciB0aGUgc2Vjb25kIHR5cGUgYXJndW1lbnQgb2YgYSBiaWZ1bmN0b3IuXG4gKlxuICogQGNhdGVnb3J5IEJpZnVuY3RvclxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBtYXBMZWZ0OiA8RSwgRz4oZjogKGU6IEUpID0+IEcpID0+IDxSLCBBPihmYTogUmVhZGVyRWl0aGVyPFIsIEUsIEE+KSA9PiBSZWFkZXJFaXRoZXI8UiwgRywgQT4gPVxuICAvKiNfX1BVUkVfXyovXG4gIEVULm1hcExlZnQoUi5GdW5jdG9yKVxuXG4vKipcbiAqIEFwcGx5IGEgZnVuY3Rpb24gdG8gYW4gYXJndW1lbnQgdW5kZXIgYSB0eXBlIGNvbnN0cnVjdG9yLlxuICpcbiAqIEBjYXRlZ29yeSBBcHBseVxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBhcDogPFIsIEUsIEE+KFxuICBmYTogUmVhZGVyRWl0aGVyPFIsIEUsIEE+XG4pID0+IDxCPihmYWI6IFJlYWRlckVpdGhlcjxSLCBFLCAoYTogQSkgPT4gQj4pID0+IFJlYWRlckVpdGhlcjxSLCBFLCBCPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgRVQuYXAoUi5BcHBseSlcblxuLyoqXG4gKiBMZXNzIHN0cmljdCB2ZXJzaW9uIG9mIFtgYXBgXSgjYXApLlxuICpcbiAqIEBjYXRlZ29yeSBBcHBseVxuICogQHNpbmNlIDIuOC4wXG4gKi9cbmV4cG9ydCBjb25zdCBhcFc6IDxSMiwgRTIsIEE+KFxuICBmYTogUmVhZGVyRWl0aGVyPFIyLCBFMiwgQT5cbikgPT4gPFIxLCBFMSwgQj4oZmFiOiBSZWFkZXJFaXRoZXI8UjEsIEUxLCAoYTogQSkgPT4gQj4pID0+IFJlYWRlckVpdGhlcjxSMSAmIFIyLCBFMSB8IEUyLCBCPiA9IGFwIGFzIGFueVxuXG4vKipcbiAqIEBjYXRlZ29yeSBQb2ludGVkXG4gKiBAc2luY2UgMi44LjVcbiAqL1xuZXhwb3J0IGNvbnN0IG9mOiA8UiwgRSA9IG5ldmVyLCBBID0gbmV2ZXI+KGE6IEEpID0+IFJlYWRlckVpdGhlcjxSLCBFLCBBPiA9IHJpZ2h0XG5cbi8qKlxuICogQ29tcG9zZXMgY29tcHV0YXRpb25zIGluIHNlcXVlbmNlLCB1c2luZyB0aGUgcmV0dXJuIHZhbHVlIG9mIG9uZSBjb21wdXRhdGlvbiB0byBkZXRlcm1pbmUgdGhlIG5leHQgY29tcHV0YXRpb24uXG4gKlxuICogQGNhdGVnb3J5IE1vbmFkXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGNoYWluOiA8UiwgRSwgQSwgQj4oXG4gIGY6IChhOiBBKSA9PiBSZWFkZXJFaXRoZXI8UiwgRSwgQj5cbikgPT4gKG1hOiBSZWFkZXJFaXRoZXI8UiwgRSwgQT4pID0+IFJlYWRlckVpdGhlcjxSLCBFLCBCPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgRVQuY2hhaW4oUi5Nb25hZClcblxuLyoqXG4gKiBMZXNzIHN0cmljdCB2ZXJzaW9uIG9mIFtgY2hhaW5gXSgjY2hhaW4pLlxuICpcbiAqIEBjYXRlZ29yeSBNb25hZFxuICogQHNpbmNlIDIuNi4wXG4gKi9cbmV4cG9ydCBjb25zdCBjaGFpblc6IDxSMiwgRTIsIEEsIEI+KFxuICBmOiAoYTogQSkgPT4gUmVhZGVyRWl0aGVyPFIyLCBFMiwgQj5cbikgPT4gPFIxLCBFMT4obWE6IFJlYWRlckVpdGhlcjxSMSwgRTEsIEE+KSA9PiBSZWFkZXJFaXRoZXI8UjEgJiBSMiwgRTEgfCBFMiwgQj4gPSBjaGFpbiBhcyBhbnlcblxuLyoqXG4gKiBMZXNzIHN0cmljdCB2ZXJzaW9uIG9mIFtgZmxhdHRlbmBdKCNmbGF0dGVuKS5cbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZsYXR0ZW5XOiA8UjEsIFIyLCBFMSwgRTIsIEE+KFxuICBtbWE6IFJlYWRlckVpdGhlcjxSMSwgRTEsIFJlYWRlckVpdGhlcjxSMiwgRTIsIEE+PlxuKSA9PiBSZWFkZXJFaXRoZXI8UjEgJiBSMiwgRTEgfCBFMiwgQT4gPVxuICAvKiNfX1BVUkVfXyovXG4gIGNoYWluVyhpZGVudGl0eSlcblxuLyoqXG4gKiBEZXJpdmFibGUgZnJvbSBgQ2hhaW5gLlxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBmbGF0dGVuOiA8UiwgRSwgQT4obW1hOiBSZWFkZXJFaXRoZXI8UiwgRSwgUmVhZGVyRWl0aGVyPFIsIEUsIEE+PikgPT4gUmVhZGVyRWl0aGVyPFIsIEUsIEE+ID0gZmxhdHRlbldcblxuLyoqXG4gKiBJZGVudGlmaWVzIGFuIGFzc29jaWF0aXZlIG9wZXJhdGlvbiBvbiBhIHR5cGUgY29uc3RydWN0b3IuIEl0IGlzIHNpbWlsYXIgdG8gYFNlbWlncm91cGAsIGV4Y2VwdCB0aGF0IGl0IGFwcGxpZXMgdG9cbiAqIHR5cGVzIG9mIGtpbmQgYCogLT4gKmAuXG4gKlxuICogQGNhdGVnb3J5IEFsdFxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBhbHQ6IDxSLCBFLCBBPih0aGF0OiAoKSA9PiBSZWFkZXJFaXRoZXI8UiwgRSwgQT4pID0+IChmYTogUmVhZGVyRWl0aGVyPFIsIEUsIEE+KSA9PiBSZWFkZXJFaXRoZXI8UiwgRSwgQT4gPVxuICAvKiNfX1BVUkVfXyovXG4gIEVULmFsdChSLk1vbmFkKVxuXG4vKipcbiAqIExlc3Mgc3RyaWN0IHZlcnNpb24gb2YgW2BhbHRgXSgjYWx0KS5cbiAqXG4gKiBAY2F0ZWdvcnkgQWx0XG4gKiBAc2luY2UgMi45LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGFsdFc6IDxSMiwgRTIsIEI+KFxuICB0aGF0OiAoKSA9PiBSZWFkZXJFaXRoZXI8UjIsIEUyLCBCPlxuKSA9PiA8UjEsIEUxLCBBPihmYTogUmVhZGVyRWl0aGVyPFIxLCBFMSwgQT4pID0+IFJlYWRlckVpdGhlcjxSMSAmIFIyLCBFMiwgQSB8IEI+ID0gYWx0IGFzIGFueVxuXG4vKipcbiAqIEBjYXRlZ29yeSBNb25hZFRocm93XG4gKiBAc2luY2UgMi43LjBcbiAqL1xuZXhwb3J0IGNvbnN0IHRocm93RXJyb3I6IE1vbmFkVGhyb3czPFVSST5bJ3Rocm93RXJyb3InXSA9IGxlZnRcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gaW5zdGFuY2VzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBVUkkgPSAnUmVhZGVyRWl0aGVyJ1xuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgdHlwZSBVUkkgPSB0eXBlb2YgVVJJXG5cbmRlY2xhcmUgbW9kdWxlICcuL0hLVCcge1xuICBpbnRlcmZhY2UgVVJJdG9LaW5kMzxSLCBFLCBBPiB7XG4gICAgcmVhZG9ubHkgW1VSSV06IFJlYWRlckVpdGhlcjxSLCBFLCBBPlxuICB9XG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgZ2V0Q29tcGFjdGFibGUgPSA8RT4oTTogTW9ub2lkPEU+KTogQ29tcGFjdGFibGUzQzxVUkksIEU+ID0+IHtcbiAgY29uc3QgQyA9IEUuZ2V0Q29tcGFjdGFibGUoTSlcbiAgcmV0dXJuIHtcbiAgICBVUkksXG4gICAgX0U6IHVuZGVmaW5lZCBhcyBhbnksXG4gICAgY29tcGFjdDogY29tcGFjdF8oUi5GdW5jdG9yLCBDKSxcbiAgICBzZXBhcmF0ZTogc2VwYXJhdGVfKFIuRnVuY3RvciwgQywgRS5GdW5jdG9yKVxuICB9XG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmlsdGVyYWJsZTxFPihNOiBNb25vaWQ8RT4pOiBGaWx0ZXJhYmxlM0M8VVJJLCBFPiB7XG4gIGNvbnN0IEYgPSBFLmdldEZpbHRlcmFibGUoTSlcbiAgY29uc3QgQyA9IGdldENvbXBhY3RhYmxlKE0pXG5cbiAgY29uc3QgZmlsdGVyID0gZmlsdGVyXyhSLkZ1bmN0b3IsIEYpXG4gIGNvbnN0IGZpbHRlck1hcCA9IGZpbHRlck1hcF8oUi5GdW5jdG9yLCBGKVxuICBjb25zdCBwYXJ0aXRpb24gPSBwYXJ0aXRpb25fKFIuRnVuY3RvciwgRilcbiAgY29uc3QgcGFydGl0aW9uTWFwID0gcGFydGl0aW9uTWFwXyhSLkZ1bmN0b3IsIEYpXG4gIHJldHVybiB7XG4gICAgVVJJLFxuICAgIF9FOiB1bmRlZmluZWQgYXMgYW55LFxuICAgIG1hcDogX21hcCxcbiAgICBjb21wYWN0OiBDLmNvbXBhY3QsXG4gICAgc2VwYXJhdGU6IEMuc2VwYXJhdGUsXG4gICAgZmlsdGVyOiA8UiwgQT4oZmE6IFJlYWRlckVpdGhlcjxSLCBFLCBBPiwgcHJlZGljYXRlOiBQcmVkaWNhdGU8QT4pID0+IHBpcGUoZmEsIGZpbHRlcihwcmVkaWNhdGUpKSxcbiAgICBmaWx0ZXJNYXA6IChmYSwgZikgPT4gcGlwZShmYSwgZmlsdGVyTWFwKGYpKSxcbiAgICBwYXJ0aXRpb246IDxSLCBBPihmYTogUmVhZGVyRWl0aGVyPFIsIEUsIEE+LCBwcmVkaWNhdGU6IFByZWRpY2F0ZTxBPikgPT4gcGlwZShmYSwgcGFydGl0aW9uKHByZWRpY2F0ZSkpLFxuICAgIHBhcnRpdGlvbk1hcDogKGZhLCBmKSA9PiBwaXBlKGZhLCBwYXJ0aXRpb25NYXAoZikpXG4gIH1cbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi43LjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEFwcGxpY2F0aXZlUmVhZGVyVmFsaWRhdGlvbjxFPihTOiBTZW1pZ3JvdXA8RT4pOiBBcHBsaWNhdGl2ZTNDPFVSSSwgRT4ge1xuICBjb25zdCBhcCA9IGFwXyhSLkFwcGx5LCBFLmdldEFwcGxpY2F0aXZlVmFsaWRhdGlvbihTKSlcbiAgcmV0dXJuIHtcbiAgICBVUkksXG4gICAgX0U6IHVuZGVmaW5lZCBhcyBhbnksXG4gICAgbWFwOiBfbWFwLFxuICAgIGFwOiAoZmFiLCBmYSkgPT4gcGlwZShmYWIsIGFwKGZhKSksXG4gICAgb2ZcbiAgfVxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjcuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWx0UmVhZGVyVmFsaWRhdGlvbjxFPihTOiBTZW1pZ3JvdXA8RT4pOiBBbHQzQzxVUkksIEU+IHtcbiAgY29uc3QgYWx0ID0gRVQuYWx0VmFsaWRhdGlvbihSLk1vbmFkLCBTKVxuICByZXR1cm4ge1xuICAgIFVSSSxcbiAgICBfRTogdW5kZWZpbmVkIGFzIGFueSxcbiAgICBtYXA6IF9tYXAsXG4gICAgYWx0OiAoZmEsIHRoYXQpID0+IHBpcGUoZmEsIGFsdCh0aGF0KSlcbiAgfVxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjcuMFxuICovXG5leHBvcnQgY29uc3QgRnVuY3RvcjogRnVuY3RvcjM8VVJJPiA9IHtcbiAgVVJJLFxuICBtYXA6IF9tYXBcbn1cblxuLyoqXG4gKiBEZXJpdmFibGUgZnJvbSBgRnVuY3RvcmAuXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBmbGFwID1cbiAgLyojX19QVVJFX18qL1xuICBmbGFwXyhGdW5jdG9yKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IFBvaW50ZWQ6IFBvaW50ZWQzPFVSST4gPSB7XG4gIFVSSSxcbiAgb2Zcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBBcHBseTogQXBwbHkzPFVSST4gPSB7XG4gIFVSSSxcbiAgbWFwOiBfbWFwLFxuICBhcDogX2FwXG59XG5cbi8qKlxuICogQ29tYmluZSB0d28gZWZmZWN0ZnVsIGFjdGlvbnMsIGtlZXBpbmcgb25seSB0aGUgcmVzdWx0IG9mIHRoZSBmaXJzdC5cbiAqXG4gKiBEZXJpdmFibGUgZnJvbSBgQXBwbHlgLlxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBhcEZpcnN0ID1cbiAgLyojX19QVVJFX18qL1xuICBhcEZpcnN0XyhBcHBseSlcblxuLyoqXG4gKiBDb21iaW5lIHR3byBlZmZlY3RmdWwgYWN0aW9ucywga2VlcGluZyBvbmx5IHRoZSByZXN1bHQgb2YgdGhlIHNlY29uZC5cbiAqXG4gKiBEZXJpdmFibGUgZnJvbSBgQXBwbHlgLlxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBhcFNlY29uZCA9XG4gIC8qI19fUFVSRV9fKi9cbiAgYXBTZWNvbmRfKEFwcGx5KVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjcuMFxuICovXG5leHBvcnQgY29uc3QgQXBwbGljYXRpdmU6IEFwcGxpY2F0aXZlMzxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgYXA6IF9hcCxcbiAgb2Zcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBDaGFpbjogQ2hhaW4zPFVSST4gPSB7XG4gIFVSSSxcbiAgbWFwOiBfbWFwLFxuICBhcDogX2FwLFxuICBjaGFpbjogX2NoYWluXG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuNy4wXG4gKi9cbmV4cG9ydCBjb25zdCBNb25hZDogTW9uYWQzPFVSST4gPSB7XG4gIFVSSSxcbiAgbWFwOiBfbWFwLFxuICBhcDogX2FwLFxuICBvZixcbiAgY2hhaW46IF9jaGFpblxufVxuXG4vKipcbiAqIENvbXBvc2VzIGNvbXB1dGF0aW9ucyBpbiBzZXF1ZW5jZSwgdXNpbmcgdGhlIHJldHVybiB2YWx1ZSBvZiBvbmUgY29tcHV0YXRpb24gdG8gZGV0ZXJtaW5lIHRoZSBuZXh0IGNvbXB1dGF0aW9uIGFuZFxuICoga2VlcGluZyBvbmx5IHRoZSByZXN1bHQgb2YgdGhlIGZpcnN0LlxuICpcbiAqIERlcml2YWJsZSBmcm9tIGBDaGFpbmAuXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGNoYWluRmlyc3Q6IDxSLCBFLCBBLCBCPihcbiAgZjogKGE6IEEpID0+IFJlYWRlckVpdGhlcjxSLCBFLCBCPlxuKSA9PiAobWE6IFJlYWRlckVpdGhlcjxSLCBFLCBBPikgPT4gUmVhZGVyRWl0aGVyPFIsIEUsIEE+ID1cbiAgLyojX19QVVJFX18qL1xuICBjaGFpbkZpcnN0XyhDaGFpbilcblxuLyoqXG4gKiBMZXNzIHN0cmljdCB2ZXJzaW9uIG9mIFtgY2hhaW5GaXJzdGBdKCNjaGFpbmZpcnN0KVxuICpcbiAqIERlcml2YWJsZSBmcm9tIGBDaGFpbmAuXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi44LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGNoYWluRmlyc3RXOiA8UjIsIEUyLCBBLCBCPihcbiAgZjogKGE6IEEpID0+IFJlYWRlckVpdGhlcjxSMiwgRTIsIEI+XG4pID0+IDxSMSwgRTE+KG1hOiBSZWFkZXJFaXRoZXI8UjEsIEUxLCBBPikgPT4gUmVhZGVyRWl0aGVyPFIxICYgUjIsIEUxIHwgRTIsIEE+ID0gY2hhaW5GaXJzdCBhcyBhbnlcblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi43LjBcbiAqL1xuZXhwb3J0IGNvbnN0IEJpZnVuY3RvcjogQmlmdW5jdG9yMzxVUkk+ID0ge1xuICBVUkksXG4gIGJpbWFwOiBfYmltYXAsXG4gIG1hcExlZnQ6IF9tYXBMZWZ0XG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuNy4wXG4gKi9cbmV4cG9ydCBjb25zdCBBbHQ6IEFsdDM8VVJJPiA9IHtcbiAgVVJJLFxuICBtYXA6IF9tYXAsXG4gIGFsdDogX2FsdFxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IEZyb21SZWFkZXI6IEZyb21SZWFkZXIzPFVSST4gPSB7XG4gIFVSSSxcbiAgZnJvbVJlYWRlclxufVxuXG4vKipcbiAqIFJlYWRzIHRoZSBjdXJyZW50IGNvbnRleHQuXG4gKlxuICogQGNhdGVnb3J5IGNvbnN0cnVjdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBhc2s6IDxSLCBFID0gbmV2ZXI+KCkgPT4gUmVhZGVyRWl0aGVyPFIsIEUsIFI+ID1cbiAgLyojX19QVVJFX18qL1xuICBhc2tfKEZyb21SZWFkZXIpXG5cbi8qKlxuICogUHJvamVjdHMgYSB2YWx1ZSBmcm9tIHRoZSBnbG9iYWwgY29udGV4dCBpbiBhIGBSZWFkZXJFaXRoZXJgLlxuICpcbiAqIEBjYXRlZ29yeSBjb25zdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgYXNrczogPFIsIEEsIEUgPSBuZXZlcj4oZjogKHI6IFIpID0+IEEpID0+IFJlYWRlckVpdGhlcjxSLCBFLCBBPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgYXNrc18oRnJvbVJlYWRlcilcblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZyb21SZWFkZXJLOiA8QSBleHRlbmRzIFJlYWRvbmx5QXJyYXk8dW5rbm93bj4sIFIsIEI+KFxuICBmOiAoLi4uYTogQSkgPT4gUmVhZGVyPFIsIEI+XG4pID0+IDxFID0gbmV2ZXI+KC4uLmE6IEEpID0+IFJlYWRlckVpdGhlcjxSLCBFLCBCPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnJvbVJlYWRlcktfKEZyb21SZWFkZXIpXG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBjaGFpblJlYWRlcks6IDxBLCBSLCBCPihcbiAgZjogKGE6IEEpID0+IFJlYWRlcjxSLCBCPlxuKSA9PiA8RSA9IG5ldmVyPihtYTogUmVhZGVyRWl0aGVyPFIsIEUsIEE+KSA9PiBSZWFkZXJFaXRoZXI8UiwgRSwgQj4gPVxuICAvKiNfX1BVUkVfXyovXG4gIGNoYWluUmVhZGVyS18oRnJvbVJlYWRlciwgQ2hhaW4pXG5cbi8qKlxuICogTGVzcyBzdHJpY3QgdmVyc2lvbiBvZiBbYGNoYWluUmVhZGVyS2BdKCNjaGFpbnJlYWRlcmspLlxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgY2hhaW5SZWFkZXJLVzogPEEsIFIyLCBCPihcbiAgZjogKGE6IEEpID0+IFJlYWRlcjxSMiwgQj5cbikgPT4gPFIxLCBFID0gbmV2ZXI+KG1hOiBSZWFkZXJFaXRoZXI8UjEsIEUsIEE+KSA9PiBSZWFkZXJFaXRoZXI8UjEgJiBSMiwgRSwgQj4gPSBjaGFpblJlYWRlcksgYXMgYW55XG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBjaGFpbkZpcnN0UmVhZGVySzogPEEsIFIsIEI+KFxuICBmOiAoYTogQSkgPT4gUmVhZGVyPFIsIEI+XG4pID0+IDxFID0gbmV2ZXI+KG1hOiBSZWFkZXJFaXRoZXI8UiwgRSwgQT4pID0+IFJlYWRlckVpdGhlcjxSLCBFLCBBPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgY2hhaW5GaXJzdFJlYWRlcktfKEZyb21SZWFkZXIsIENoYWluKVxuXG4vKipcbiAqIExlc3Mgc3RyaWN0IHZlcnNpb24gb2YgW2BjaGFpblJlYWRlcktgXSgjY2hhaW5yZWFkZXJrKS5cbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGNoYWluRmlyc3RSZWFkZXJLVzogPEEsIFIxLCBCPihcbiAgZjogKGE6IEEpID0+IFJlYWRlcjxSMSwgQj5cbikgPT4gPFIyLCBFID0gbmV2ZXI+KG1hOiBSZWFkZXJFaXRoZXI8UjIsIEUsIEE+KSA9PiBSZWFkZXJFaXRoZXI8UjEgJiBSMiwgRSwgQT4gPSBjaGFpbkZpcnN0UmVhZGVySyBhcyBhbnlcblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi43LjBcbiAqL1xuZXhwb3J0IGNvbnN0IE1vbmFkVGhyb3c6IE1vbmFkVGhyb3czPFVSST4gPSB7XG4gIFVSSSxcbiAgbWFwOiBfbWFwLFxuICBhcDogX2FwLFxuICBvZixcbiAgY2hhaW46IF9jaGFpbixcbiAgdGhyb3dFcnJvclxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IEZyb21FaXRoZXI6IEZyb21FaXRoZXIzPFVSST4gPSB7XG4gIFVSSSxcbiAgZnJvbUVpdGhlclxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBuYXR1cmFsIHRyYW5zZm9ybWF0aW9uc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBmcm9tT3B0aW9uOiA8RT4ob25Ob25lOiBMYXp5PEU+KSA9PiBOYXR1cmFsVHJhbnNmb3JtYXRpb24xM0M8T1VSSSwgVVJJLCBFPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnJvbU9wdGlvbl8oRnJvbUVpdGhlcilcblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZyb21PcHRpb25LID1cbiAgLyojX19QVVJFX18qL1xuICBmcm9tT3B0aW9uS18oRnJvbUVpdGhlcilcblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGNoYWluT3B0aW9uSyA9XG4gIC8qI19fUFVSRV9fKi9cbiAgY2hhaW5PcHRpb25LXyhGcm9tRWl0aGVyLCBDaGFpbilcblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjQuMFxuICovXG5leHBvcnQgY29uc3QgY2hhaW5FaXRoZXJLOiA8RSwgQSwgQj4oXG4gIGY6IChhOiBBKSA9PiBFLkVpdGhlcjxFLCBCPlxuKSA9PiA8Uj4obWE6IFJlYWRlckVpdGhlcjxSLCBFLCBBPikgPT4gUmVhZGVyRWl0aGVyPFIsIEUsIEI+ID1cbiAgLyojX19QVVJFX18qL1xuICBjaGFpbkVpdGhlcktfKEZyb21FaXRoZXIsIENoYWluKVxuXG4vKipcbiAqIExlc3Mgc3RyaWN0IHZlcnNpb24gb2YgW2BjaGFpbkVpdGhlcktgXSgjY2hhaW5laXRoZXJrKS5cbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjYuMVxuICovXG5leHBvcnQgY29uc3QgY2hhaW5FaXRoZXJLVzogPEUyLCBBLCBCPihcbiAgZjogKGE6IEEpID0+IEVpdGhlcjxFMiwgQj5cbikgPT4gPFIsIEUxPihtYTogUmVhZGVyRWl0aGVyPFIsIEUxLCBBPikgPT4gUmVhZGVyRWl0aGVyPFIsIEUxIHwgRTIsIEI+ID0gY2hhaW5FaXRoZXJLIGFzIGFueVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb25zdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgZnJvbVByZWRpY2F0ZToge1xuICA8RSwgQSwgQiBleHRlbmRzIEE+KHJlZmluZW1lbnQ6IFJlZmluZW1lbnQ8QSwgQj4sIG9uRmFsc2U6IChhOiBBKSA9PiBFKTogPFI+KGE6IEEpID0+IFJlYWRlckVpdGhlcjxSLCBFLCBCPlxuICA8RSwgQT4ocHJlZGljYXRlOiBQcmVkaWNhdGU8QT4sIG9uRmFsc2U6IChhOiBBKSA9PiBFKTogPFIsIEIgZXh0ZW5kcyBBPihiOiBCKSA9PiBSZWFkZXJFaXRoZXI8UiwgRSwgQj5cbiAgPEUsIEE+KHByZWRpY2F0ZTogUHJlZGljYXRlPEE+LCBvbkZhbHNlOiAoYTogQSkgPT4gRSk6IDxSPihhOiBBKSA9PiBSZWFkZXJFaXRoZXI8UiwgRSwgQT5cbn0gPVxuICAvKiNfX1BVUkVfXyovXG4gIGZyb21QcmVkaWNhdGVfKEZyb21FaXRoZXIpXG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZpbHRlck9yRWxzZToge1xuICA8RSwgQSwgQiBleHRlbmRzIEE+KHJlZmluZW1lbnQ6IFJlZmluZW1lbnQ8QSwgQj4sIG9uRmFsc2U6IChhOiBBKSA9PiBFKTogPFI+KFxuICAgIG1hOiBSZWFkZXJFaXRoZXI8UiwgRSwgQT5cbiAgKSA9PiBSZWFkZXJFaXRoZXI8UiwgRSwgQj5cbiAgPEUsIEE+KHByZWRpY2F0ZTogUHJlZGljYXRlPEE+LCBvbkZhbHNlOiAoYTogQSkgPT4gRSk6IDxSLCBCIGV4dGVuZHMgQT4oXG4gICAgbWI6IFJlYWRlckVpdGhlcjxSLCBFLCBCPlxuICApID0+IFJlYWRlckVpdGhlcjxSLCBFLCBCPlxuICA8RSwgQT4ocHJlZGljYXRlOiBQcmVkaWNhdGU8QT4sIG9uRmFsc2U6IChhOiBBKSA9PiBFKTogPFI+KG1hOiBSZWFkZXJFaXRoZXI8UiwgRSwgQT4pID0+IFJlYWRlckVpdGhlcjxSLCBFLCBBPlxufSA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZmlsdGVyT3JFbHNlXyhGcm9tRWl0aGVyLCBDaGFpbilcblxuLyoqXG4gKiBMZXNzIHN0cmljdCB2ZXJzaW9uIG9mIFtgZmlsdGVyT3JFbHNlYF0oI2ZpbHRlcm9yZWxzZSkuXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi45LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZpbHRlck9yRWxzZVc6IHtcbiAgPEEsIEIgZXh0ZW5kcyBBLCBFMj4ocmVmaW5lbWVudDogUmVmaW5lbWVudDxBLCBCPiwgb25GYWxzZTogKGE6IEEpID0+IEUyKTogPFIsIEUxPihcbiAgICBtYTogUmVhZGVyRWl0aGVyPFIsIEUxLCBBPlxuICApID0+IFJlYWRlckVpdGhlcjxSLCBFMSB8IEUyLCBCPlxuICA8QSwgRTI+KHByZWRpY2F0ZTogUHJlZGljYXRlPEE+LCBvbkZhbHNlOiAoYTogQSkgPT4gRTIpOiA8UiwgRTEsIEIgZXh0ZW5kcyBBPihcbiAgICBtYjogUmVhZGVyRWl0aGVyPFIsIEUxLCBCPlxuICApID0+IFJlYWRlckVpdGhlcjxSLCBFMSB8IEUyLCBCPlxuICA8QSwgRTI+KHByZWRpY2F0ZTogUHJlZGljYXRlPEE+LCBvbkZhbHNlOiAoYTogQSkgPT4gRTIpOiA8UiwgRTE+KFxuICAgIG1hOiBSZWFkZXJFaXRoZXI8UiwgRTEsIEE+XG4gICkgPT4gUmVhZGVyRWl0aGVyPFIsIEUxIHwgRTIsIEE+XG59ID0gZmlsdGVyT3JFbHNlXG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi40LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZyb21FaXRoZXJLOiA8RSwgQSBleHRlbmRzIFJlYWRvbmx5QXJyYXk8dW5rbm93bj4sIEI+KFxuICBmOiAoLi4uYTogQSkgPT4gRS5FaXRoZXI8RSwgQj5cbikgPT4gPFI+KC4uLmE6IEEpID0+IFJlYWRlckVpdGhlcjxSLCBFLCBCPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnJvbUVpdGhlcktfKEZyb21FaXRoZXIpXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGRvIG5vdGF0aW9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQHNpbmNlIDIuOS4wXG4gKi9cbmV4cG9ydCBjb25zdCBEbzogUmVhZGVyRWl0aGVyPHVua25vd24sIG5ldmVyLCB7fT4gPVxuICAvKiNfX1BVUkVfXyovXG4gIG9mKF8uZW1wdHlSZWNvcmQpXG5cbi8qKlxuICogQHNpbmNlIDIuOC4wXG4gKi9cbmV4cG9ydCBjb25zdCBiaW5kVG8gPVxuICAvKiNfX1BVUkVfXyovXG4gIGJpbmRUb18oRnVuY3RvcilcblxuLyoqXG4gKiBAc2luY2UgMi44LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGJpbmQgPVxuICAvKiNfX1BVUkVfXyovXG4gIGJpbmRfKENoYWluKVxuXG4vKipcbiAqIEBzaW5jZSAyLjguMFxuICovXG5leHBvcnQgY29uc3QgYmluZFc6IDxOIGV4dGVuZHMgc3RyaW5nLCBBLCBSMiwgRTIsIEI+KFxuICBuYW1lOiBFeGNsdWRlPE4sIGtleW9mIEE+LFxuICBmOiAoYTogQSkgPT4gUmVhZGVyRWl0aGVyPFIyLCBFMiwgQj5cbikgPT4gPFIxLCBFMT4oXG4gIGZhOiBSZWFkZXJFaXRoZXI8UjEsIEUxLCBBPlxuKSA9PiBSZWFkZXJFaXRoZXI8UjEgJiBSMiwgRTEgfCBFMiwgeyByZWFkb25seSBbSyBpbiBrZXlvZiBBIHwgTl06IEsgZXh0ZW5kcyBrZXlvZiBBID8gQVtLXSA6IEIgfT4gPSBiaW5kIGFzIGFueVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBwaXBlYWJsZSBzZXF1ZW5jZSBTXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQHNpbmNlIDIuOC4wXG4gKi9cbmV4cG9ydCBjb25zdCBhcFMgPVxuICAvKiNfX1BVUkVfXyovXG4gIGFwU18oQXBwbHkpXG5cbi8qKlxuICogQHNpbmNlIDIuOC4wXG4gKi9cbmV4cG9ydCBjb25zdCBhcFNXOiA8QSwgTiBleHRlbmRzIHN0cmluZywgUjIsIEUyLCBCPihcbiAgbmFtZTogRXhjbHVkZTxOLCBrZXlvZiBBPixcbiAgZmI6IFJlYWRlckVpdGhlcjxSMiwgRTIsIEI+XG4pID0+IDxSMSwgRTE+KFxuICBmYTogUmVhZGVyRWl0aGVyPFIxLCBFMSwgQT5cbikgPT4gUmVhZGVyRWl0aGVyPFIxICYgUjIsIEUxIHwgRTIsIHsgcmVhZG9ubHkgW0sgaW4ga2V5b2YgQSB8IE5dOiBLIGV4dGVuZHMga2V5b2YgQSA/IEFbS10gOiBCIH0+ID0gYXBTIGFzIGFueVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBzZXF1ZW5jZSBUXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgQXBUOiBSZWFkZXJFaXRoZXI8dW5rbm93biwgbmV2ZXIsIHJlYWRvbmx5IFtdPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgb2YoXy5lbXB0eVJlYWRvbmx5QXJyYXkpXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGFycmF5IHV0aWxzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogRXF1aXZhbGVudCB0byBgUmVhZG9ubHlOb25FbXB0eUFycmF5I3RyYXZlcnNlV2l0aEluZGV4KEFwcGxpY2F0aXZlKWAuXG4gKlxuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgdHJhdmVyc2VSZWFkb25seU5vbkVtcHR5QXJyYXlXaXRoSW5kZXggPSA8QSwgUiwgRSwgQj4oXG4gIGY6IChpbmRleDogbnVtYmVyLCBhOiBBKSA9PiBSZWFkZXJFaXRoZXI8UiwgRSwgQj5cbik6ICgoYXM6IFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxBPikgPT4gUmVhZGVyRWl0aGVyPFIsIEUsIFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxCPj4pID0+XG4gIGZsb3coUi50cmF2ZXJzZVJlYWRvbmx5Tm9uRW1wdHlBcnJheVdpdGhJbmRleChmKSwgUi5tYXAoRS50cmF2ZXJzZVJlYWRvbmx5Tm9uRW1wdHlBcnJheVdpdGhJbmRleChTSykpKVxuXG4vKipcbiAqIEVxdWl2YWxlbnQgdG8gYFJlYWRvbmx5QXJyYXkjdHJhdmVyc2VXaXRoSW5kZXgoQXBwbGljYXRpdmUpYC5cbiAqXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCB0cmF2ZXJzZVJlYWRvbmx5QXJyYXlXaXRoSW5kZXggPSA8QSwgUiwgRSwgQj4oXG4gIGY6IChpbmRleDogbnVtYmVyLCBhOiBBKSA9PiBSZWFkZXJFaXRoZXI8UiwgRSwgQj5cbik6ICgoYXM6IFJlYWRvbmx5QXJyYXk8QT4pID0+IFJlYWRlckVpdGhlcjxSLCBFLCBSZWFkb25seUFycmF5PEI+PikgPT4ge1xuICBjb25zdCBnID0gdHJhdmVyc2VSZWFkb25seU5vbkVtcHR5QXJyYXlXaXRoSW5kZXgoZilcbiAgcmV0dXJuIChhcykgPT4gKF8uaXNOb25FbXB0eShhcykgPyBnKGFzKSA6IEFwVClcbn1cblxuLyoqXG4gKiBAc2luY2UgMi45LjBcbiAqL1xuZXhwb3J0IGNvbnN0IHRyYXZlcnNlQXJyYXlXaXRoSW5kZXg6IDxSLCBFLCBBLCBCPihcbiAgZjogKGluZGV4OiBudW1iZXIsIGE6IEEpID0+IFJlYWRlckVpdGhlcjxSLCBFLCBCPlxuKSA9PiAoYXM6IFJlYWRvbmx5QXJyYXk8QT4pID0+IFJlYWRlckVpdGhlcjxSLCBFLCBSZWFkb25seUFycmF5PEI+PiA9IHRyYXZlcnNlUmVhZG9ubHlBcnJheVdpdGhJbmRleFxuXG4vKipcbiAqIEBzaW5jZSAyLjkuMFxuICovXG5leHBvcnQgY29uc3QgdHJhdmVyc2VBcnJheSA9IDxSLCBFLCBBLCBCPihcbiAgZjogKGE6IEEpID0+IFJlYWRlckVpdGhlcjxSLCBFLCBCPlxuKTogKChhczogUmVhZG9ubHlBcnJheTxBPikgPT4gUmVhZGVyRWl0aGVyPFIsIEUsIFJlYWRvbmx5QXJyYXk8Qj4+KSA9PiB0cmF2ZXJzZVJlYWRvbmx5QXJyYXlXaXRoSW5kZXgoKF8sIGEpID0+IGYoYSkpXG5cbi8qKlxuICogQHNpbmNlIDIuOS4wXG4gKi9cbmV4cG9ydCBjb25zdCBzZXF1ZW5jZUFycmF5OiA8UiwgRSwgQT4oXG4gIGFycjogUmVhZG9ubHlBcnJheTxSZWFkZXJFaXRoZXI8UiwgRSwgQT4+XG4pID0+IFJlYWRlckVpdGhlcjxSLCBFLCBSZWFkb25seUFycmF5PEE+PiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgdHJhdmVyc2VBcnJheShpZGVudGl0eSlcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gZGVwcmVjYXRlZFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyB0c2xpbnQ6ZGlzYWJsZTogZGVwcmVjYXRpb25cblxuLyoqXG4gKiBVc2Ugc21hbGwsIHNwZWNpZmljIGluc3RhbmNlcyBpbnN0ZWFkLlxuICpcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjAuMFxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IHJlYWRlckVpdGhlcjogTW9uYWQzPFVSST4gJiBCaWZ1bmN0b3IzPFVSST4gJiBBbHQzPFVSST4gJiBNb25hZFRocm93MzxVUkk+ID0ge1xuICBVUkksXG4gIGJpbWFwOiBfYmltYXAsXG4gIG1hcExlZnQ6IF9tYXBMZWZ0LFxuICBtYXA6IF9tYXAsXG4gIG9mLFxuICBhcDogX2FwLFxuICBjaGFpbjogX2NoYWluLFxuICBhbHQ6IF9hbHQsXG4gIHRocm93RXJyb3I6IGxlZnRcbn1cblxuLyoqXG4gKiBVc2UgW2BnZXRBcHBseVNlbWlncm91cGBdKC4vQXBwbHkudHMuaHRtbCNnZXRhcHBseXNlbWlncm91cCkgaW5zdGVhZC5cbiAqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4wLjBcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRBcHBseVNlbWlncm91cDogPFIsIEUsIEE+KFM6IFNlbWlncm91cDxBPikgPT4gU2VtaWdyb3VwPFJlYWRlckVpdGhlcjxSLCBFLCBBPj4gPVxuICAvKiNfX1BVUkVfXyovXG4gIGdldEFwcGx5U2VtaWdyb3VwXyhBcHBseSlcblxuLyoqXG4gKiBVc2UgW2BnZXRBcHBsaWNhdGl2ZU1vbm9pZGBdKC4vQXBwbGljYXRpdmUudHMuaHRtbCNnZXRhcHBsaWNhdGl2ZW1vbm9pZCkgaW5zdGVhZC5cbiAqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4wLjBcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRBcHBseU1vbm9pZDogPFIsIEUsIEE+KE06IE1vbm9pZDxBPikgPT4gTW9ub2lkPFJlYWRlckVpdGhlcjxSLCBFLCBBPj4gPVxuICAvKiNfX1BVUkVfXyovXG4gIGdldEFwcGxpY2F0aXZlTW9ub2lkKEFwcGxpY2F0aXZlKVxuXG4vKipcbiAqIFVzZSBbYGdldEFwcGx5U2VtaWdyb3VwYF0oLi9BcHBseS50cy5odG1sI2dldGFwcGx5c2VtaWdyb3VwKSBpbnN0ZWFkLlxuICpcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjAuMFxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IGdldFNlbWlncm91cCA9IDxSLCBFLCBBPihTOiBTZW1pZ3JvdXA8QT4pOiBTZW1pZ3JvdXA8UmVhZGVyRWl0aGVyPFIsIEUsIEE+PiA9PlxuICBnZXRBcHBseVNlbWlncm91cF8oUi5BcHBseSkoRS5nZXRTZW1pZ3JvdXAoUykpXG5cbi8qKlxuICogVXNlIFtgZ2V0QXBwbGljYXRpdmVSZWFkZXJWYWxpZGF0aW9uYF0oI2dldGFwcGxpY2F0aXZlcmVhZGVydmFsaWRhdGlvbikgYW5kIFtgZ2V0QWx0UmVhZGVyVmFsaWRhdGlvbmBdKCNnZXRhbHRyZWFkZXJ2YWxpZGF0aW9uKSBpbnN0ZWFkLlxuICpcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjMuMFxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFJlYWRlclZhbGlkYXRpb248RT4oXG4gIFNFOiBTZW1pZ3JvdXA8RT5cbik6IE1vbmFkM0M8VVJJLCBFPiAmIEJpZnVuY3RvcjM8VVJJPiAmIEFsdDNDPFVSSSwgRT4gJiBNb25hZFRocm93M0M8VVJJLCBFPiB7XG4gIGNvbnN0IGFwcGxpY2F0aXZlUmVhZGVyVmFsaWRhdGlvbiA9IGdldEFwcGxpY2F0aXZlUmVhZGVyVmFsaWRhdGlvbihTRSlcbiAgY29uc3QgYWx0UmVhZGVyVmFsaWRhdGlvbiA9IGdldEFsdFJlYWRlclZhbGlkYXRpb24oU0UpXG4gIHJldHVybiB7XG4gICAgVVJJLFxuICAgIF9FOiB1bmRlZmluZWQgYXMgYW55LFxuICAgIG1hcDogX21hcCxcbiAgICBhcDogYXBwbGljYXRpdmVSZWFkZXJWYWxpZGF0aW9uLmFwLFxuICAgIG9mLFxuICAgIGNoYWluOiBfY2hhaW4sXG4gICAgYmltYXA6IF9iaW1hcCxcbiAgICBtYXBMZWZ0OiBfbWFwTGVmdCxcbiAgICBhbHQ6IGFsdFJlYWRlclZhbGlkYXRpb24uYWx0LFxuICAgIHRocm93RXJyb3JcbiAgfVxufVxuIl19