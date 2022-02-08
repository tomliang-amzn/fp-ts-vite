"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromPredicate = exports.fromOptionK = exports.fromOption = exports.fromIOK = exports.fromIO = exports.fromEitherK = exports.fromEither = exports.foldW = exports.fold = exports.flattenW = exports.flatten = exports.flap = exports.filterOrElseW = exports.filterOrElse = exports.chainW = exports.chainOptionK = exports.chainIOK = exports.chainFirstW = exports.chainFirstIOK = exports.chainFirst = exports.chainEitherKW = exports.chainEitherK = exports.chain = exports.bracket = exports.bindW = exports.bindTo = exports.bind = exports.bimap = exports.apW = exports.apSecond = exports.apSW = exports.apS = exports.apFirst = exports.ap = exports.altW = exports.alt = exports.URI = exports.Pointed = exports.MonadThrow = exports.MonadIO = exports.Monad = exports.Functor = exports.FromIO = exports.FromEither = exports.Do = exports.Chain = exports.Bifunctor = exports.ApplyPar = exports.ApplicativeSeq = exports.ApplicativePar = exports.Applicative = exports.ApT = exports.Alt = void 0;
exports.getAltIOValidation = getAltIOValidation;
exports.getApplicativeIOValidation = getApplicativeIOValidation;
exports.getCompactable = exports.getApplySemigroup = exports.getApplyMonoid = void 0;
exports.getFilterable = getFilterable;
exports.getIOValidation = getIOValidation;
exports.tryCatchK = exports.tryCatch = exports.traverseSeqArrayWithIndex = exports.traverseSeqArray = exports.traverseReadonlyNonEmptyArrayWithIndexSeq = exports.traverseReadonlyNonEmptyArrayWithIndex = exports.traverseReadonlyArrayWithIndexSeq = exports.traverseReadonlyArrayWithIndex = exports.traverseArrayWithIndex = exports.traverseArray = exports.toUnion = exports.throwError = exports.swap = exports.sequenceSeqArray = exports.sequenceArray = exports.rightIO = exports.right = exports.orLeft = exports.orElseW = exports.orElseFirstW = exports.orElseFirst = exports.orElse = exports.of = exports.matchW = exports.matchEW = exports.matchE = exports.match = exports.mapLeft = exports.map = exports.leftIO = exports.left = exports.ioEither = exports.getSemigroup = exports.getOrElseW = exports.getOrElse = void 0;

var _Applicative = require("./Applicative");

var _Apply = require("./Apply");

var _Chain = require("./Chain");

var _Compactable = require("./Compactable");

var E = _interopRequireWildcard(require("./Either"));

var ET = _interopRequireWildcard(require("./EitherT"));

var _Filterable = require("./Filterable");

var _FromEither = require("./FromEither");

var _FromIO = require("./FromIO");

var _function = require("./function");

var _Functor = require("./Functor");

var _ = _interopRequireWildcard(require("./internal"));

var I = _interopRequireWildcard(require("./IO"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * `IOEither<E, A>` represents a synchronous computation that either yields a value of type `A` or fails yielding an
 * error of type `E`. If you want to represent a synchronous computation that never fails, please see `IO`.
 *
 * @since 2.0.0
 */
// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------
var Either = E.Either;
var IO = I.IO;
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
var left = /*#__PURE__*/ET.left(I.Pointed);
/**
 * @category constructors
 * @since 2.0.0
 */

exports.left = left;
var right = /*#__PURE__*/ET.right(I.Pointed);
/**
 * @category constructors
 * @since 2.0.0
 */

exports.right = right;
var rightIO = /*#__PURE__*/ET.rightF(I.Functor);
/**
 * @category constructors
 * @since 2.0.0
 */

exports.rightIO = rightIO;
var leftIO = /*#__PURE__*/ET.leftF(I.Functor); // -------------------------------------------------------------------------------------
// natural transformations
// -------------------------------------------------------------------------------------

/**
 * @category natural transformations
 * @since 2.0.0
 */

exports.leftIO = leftIO;
var fromEither = I.of;
/**
 * @category natural transformations
 * @since 2.7.0
 */

exports.fromEither = fromEither;
var fromIO = rightIO; // -------------------------------------------------------------------------------------
// destructors
// -------------------------------------------------------------------------------------

/**
 * @category destructors
 * @since 2.10.0
 */

exports.fromIO = fromIO;
var match = /*#__PURE__*/ET.match(I.Functor);
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
var matchE = /*#__PURE__*/ET.matchE(I.Monad);
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
var getOrElse = /*#__PURE__*/ET.getOrElse(I.Monad);
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
 * Constructs a new `IOEither` from a function that performs a side effect and might throw
 *
 * See also [`tryCatchK`](#trycatchk).
 *
 * @category interop
 * @since 2.0.0
 */

exports.getOrElseW = getOrElseW;

var tryCatch = function tryCatch(f, onThrow) {
  return function () {
    return E.tryCatch(f, onThrow);
  };
};
/**
 * Converts a function that may throw to one returning a `IOEither`.
 *
 * @category interop
 * @since 2.10.0
 */


exports.tryCatch = tryCatch;

var tryCatchK = function tryCatchK(f, onThrow) {
  return function () {
    for (var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++) {
      a[_key] = arguments[_key];
    }

    return tryCatch(function () {
      return f.apply(void 0, a);
    }, onThrow);
  };
};
/**
 * @category interop
 * @since 2.10.0
 */


exports.tryCatchK = tryCatchK;
var toUnion = /*#__PURE__*/ET.toUnion(I.Functor); // -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------

/**
 * @category combinators
 * @since 2.0.0
 */

exports.toUnion = toUnion;
var orElse = /*#__PURE__*/ET.orElse(I.Monad);
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
var orElseFirst = /*#__PURE__*/ET.orElseFirst(I.Monad);
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
var orLeft = /*#__PURE__*/ET.orLeft(I.Monad);
/**
 * @category combinators
 * @since 2.0.0
 */

exports.orLeft = orLeft;
var swap = /*#__PURE__*/ET.swap(I.Functor); // -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------

/* istanbul ignore next */

exports.swap = swap;

var _map = function _map(fa, f) {
  return (0, _function.pipe)(fa, map(f));
};
/* istanbul ignore next */


var _ap = function _ap(fab, fa) {
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


var _bimap = function _bimap(fa, f, g) {
  return (0, _function.pipe)(fa, bimap(f, g));
};
/* istanbul ignore next */


var _mapLeft = function _mapLeft(fa, f) {
  return (0, _function.pipe)(fa, mapLeft(f));
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


var map = /*#__PURE__*/ET.map(I.Functor);
/**
 * Map a pair of functions over the two type arguments of the bifunctor.
 *
 * @category Bifunctor
 * @since 2.0.0
 */

exports.map = map;
var bimap = /*#__PURE__*/ET.bimap(I.Functor);
/**
 * Map a function over the first type argument of a bifunctor.
 *
 * @category Bifunctor
 * @since 2.0.0
 */

exports.bimap = bimap;
var mapLeft = /*#__PURE__*/ET.mapLeft(I.Functor);
/**
 * Apply a function to an argument under a type constructor.
 *
 * @category Apply
 * @since 2.0.0
 */

exports.mapLeft = mapLeft;
var ap = /*#__PURE__*/ET.ap(I.Apply);
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
var chain = /*#__PURE__*/ET.chain(I.Monad);
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
var alt = /*#__PURE__*/ET.alt(I.Monad);
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
var URI = 'IOEither';
/**
 * @category instances
 * @since 2.0.0
 */

exports.URI = URI;

/**
 * @category instances
 * @since 2.7.0
 */
function getApplicativeIOValidation(S) {
  var _ap2 = (0, _Apply.ap)(I.Apply, E.getApplicativeValidation(S));

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


function getAltIOValidation(S) {
  var _alt2 = ET.altValidation(I.Monad, S);

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
 * @since 2.10.0
 */


var getCompactable = function getCompactable(M) {
  var C = E.getCompactable(M);
  return {
    URI: URI,
    _E: undefined,
    compact: (0, _Compactable.compact)(I.Functor, C),
    separate: (0, _Compactable.separate)(I.Functor, C, E.Functor)
  };
};
/**
 * @category instances
 * @since 2.1.0
 */


exports.getCompactable = getCompactable;

function getFilterable(M) {
  var F = E.getFilterable(M);
  var C = getCompactable(M);

  var _filter = (0, _Filterable.filter)(I.Functor, F);

  var _filterMap = (0, _Filterable.filterMap)(I.Functor, F);

  var _partition = (0, _Filterable.partition)(I.Functor, F);

  var _partitionMap = (0, _Filterable.partitionMap)(I.Functor, F);

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
 * @since 2.7.0
 */

exports.Pointed = Pointed;
var Bifunctor = {
  URI: URI,
  bimap: _bimap,
  mapLeft: _mapLeft
};
/**
 * @category instances
 * @since 2.10.0
 */

exports.Bifunctor = Bifunctor;
var ApplyPar = {
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
 * @since 2.8.4
 */

exports.apSecond = apSecond;
var ApplicativePar = {
  URI: URI,
  map: _map,
  ap: _ap,
  of: of
};
/**
 * @category instances
 * @since 2.8.4
 */

exports.ApplicativePar = ApplicativePar;
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
// utils
// -------------------------------------------------------------------------------------

/**
 * Make sure that a resource is cleaned up in the event of an exception (\*). The release action is called regardless of
 * whether the body action throws (\*) or returns.
 *
 * (\*) i.e. returns a `Left`
 *
 * @since 2.0.0
 */

exports.fromEitherK = fromEitherK;

var bracket = function bracket(acquire, use, release) {
  return (0, _function.pipe)(acquire, chain(function (a) {
    return (0, _function.pipe)(use(a), I.chain(function (e) {
      return (0, _function.pipe)(release(a, e), chain(function () {
        return I.of(e);
      }));
    }));
  }));
}; // -------------------------------------------------------------------------------------
// do notation
// -------------------------------------------------------------------------------------

/**
 * @since 2.9.0
 */


exports.bracket = bracket;
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
  return (0, _function.flow)(I.traverseReadonlyNonEmptyArrayWithIndex(f), I.map(E.traverseReadonlyNonEmptyArrayWithIndex(_function.SK)));
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
  return function (as) {
    return function () {
      var e = f(0, _.head(as))();

      if (_.isLeft(e)) {
        return e;
      }

      var out = [e.right];

      for (var i = 1; i < as.length; i++) {
        var _e = f(i, as[i])();

        if (_.isLeft(_e)) {
          return _e;
        }

        out.push(_e.right);
      }

      return _.right(out);
    };
  };
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
 * Use [`ApplicativePar`](#applicativepar) instead
 *
 * @since 2.7.0
 * @category instances
 * @deprecated
 */

exports.sequenceSeqArray = sequenceSeqArray;
var Applicative = ApplicativePar; // -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------

/**
 * Use small, specific instances instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */

exports.Applicative = Applicative;
var ioEither = {
  URI: URI,
  bimap: _bimap,
  mapLeft: _mapLeft,
  map: _map,
  of: of,
  ap: _ap,
  chain: _chain,
  alt: _alt,
  fromIO: fromIO,
  throwError: throwError
};
/**
 * Use [`getApplySemigroup`](./Apply.ts.html#getapplysemigroup) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */

exports.ioEither = ioEither;
var getApplySemigroup = /*#__PURE__*/(0, _Apply.getApplySemigroup)(ApplyPar);
/**
 * Use [`getApplicativeMonoid`](./Applicative.ts.html#getapplicativemonoid) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */

exports.getApplySemigroup = getApplySemigroup;
var getApplyMonoid = /*#__PURE__*/(0, _Applicative.getApplicativeMonoid)(ApplicativePar);
/**
 * Use [`getApplySemigroup`](./Apply.ts.html#getapplysemigroup) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */

exports.getApplyMonoid = getApplyMonoid;

var getSemigroup = function getSemigroup(S) {
  return (0, _Apply.getApplySemigroup)(I.Apply)(E.getSemigroup(S));
};
/**
 * Use [`getApplicativeIOValidation`](#getapplicativeiovalidation) and [`getAltIOValidation`](#getaltiovalidation).
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */


exports.getSemigroup = getSemigroup;

function getIOValidation(SE) {
  var applicativeIOValidation = getApplicativeIOValidation(SE);
  var altIOValidation = getAltIOValidation(SE);
  return {
    URI: URI,
    _E: undefined,
    map: _map,
    ap: applicativeIOValidation.ap,
    of: of,
    chain: _chain,
    bimap: _bimap,
    mapLeft: _mapLeft,
    alt: altIOValidation.alt,
    fromIO: fromIO,
    throwError: throwError
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mcC10cy9JT0VpdGhlci50cyJdLCJuYW1lcyI6WyJFaXRoZXIiLCJFIiwiSU8iLCJJIiwibGVmdCIsIkVUIiwiUG9pbnRlZCIsInJpZ2h0IiwicmlnaHRJTyIsInJpZ2h0RiIsIkZ1bmN0b3IiLCJsZWZ0SU8iLCJsZWZ0RiIsImZyb21FaXRoZXIiLCJvZiIsImZyb21JTyIsIm1hdGNoIiwibWF0Y2hXIiwibWF0Y2hFIiwiTW9uYWQiLCJmb2xkIiwibWF0Y2hFVyIsImZvbGRXIiwiZ2V0T3JFbHNlIiwiZ2V0T3JFbHNlVyIsInRyeUNhdGNoIiwiZiIsIm9uVGhyb3ciLCJ0cnlDYXRjaEsiLCJhIiwidG9VbmlvbiIsIm9yRWxzZSIsIm9yRWxzZVciLCJvckVsc2VGaXJzdCIsIm9yRWxzZUZpcnN0VyIsIm9yTGVmdCIsInN3YXAiLCJfbWFwIiwiZmEiLCJtYXAiLCJfYXAiLCJmYWIiLCJhcCIsIl9hcFNlcSIsImNoYWluIiwiX2NoYWluIiwibWEiLCJfYmltYXAiLCJnIiwiYmltYXAiLCJfbWFwTGVmdCIsIm1hcExlZnQiLCJfYWx0IiwidGhhdCIsImFsdCIsIkFwcGx5IiwiYXBXIiwiY2hhaW5XIiwiZmxhdHRlblciLCJpZGVudGl0eSIsImZsYXR0ZW4iLCJhbHRXIiwidGhyb3dFcnJvciIsIlVSSSIsImdldEFwcGxpY2F0aXZlSU9WYWxpZGF0aW9uIiwiUyIsImdldEFwcGxpY2F0aXZlVmFsaWRhdGlvbiIsIl9FIiwidW5kZWZpbmVkIiwiZ2V0QWx0SU9WYWxpZGF0aW9uIiwiYWx0VmFsaWRhdGlvbiIsImdldENvbXBhY3RhYmxlIiwiTSIsIkMiLCJjb21wYWN0Iiwic2VwYXJhdGUiLCJnZXRGaWx0ZXJhYmxlIiwiRiIsImZpbHRlciIsImZpbHRlck1hcCIsInBhcnRpdGlvbiIsInBhcnRpdGlvbk1hcCIsInByZWRpY2F0ZSIsImZsYXAiLCJCaWZ1bmN0b3IiLCJBcHBseVBhciIsImFwRmlyc3QiLCJhcFNlY29uZCIsIkFwcGxpY2F0aXZlUGFyIiwiQXBwbGljYXRpdmVTZXEiLCJDaGFpbiIsImNoYWluRmlyc3QiLCJjaGFpbkZpcnN0VyIsIkFsdCIsIk1vbmFkSU8iLCJNb25hZFRocm93IiwiRnJvbUlPIiwiZnJvbUlPSyIsImNoYWluSU9LIiwiY2hhaW5GaXJzdElPSyIsIkZyb21FaXRoZXIiLCJmcm9tT3B0aW9uIiwiZnJvbU9wdGlvbksiLCJjaGFpbk9wdGlvbksiLCJjaGFpbkVpdGhlcksiLCJjaGFpbkVpdGhlcktXIiwiZnJvbVByZWRpY2F0ZSIsImZpbHRlck9yRWxzZSIsImZpbHRlck9yRWxzZVciLCJmcm9tRWl0aGVySyIsImJyYWNrZXQiLCJhY3F1aXJlIiwidXNlIiwicmVsZWFzZSIsImUiLCJEbyIsIl8iLCJlbXB0eVJlY29yZCIsImJpbmRUbyIsImJpbmQiLCJiaW5kVyIsImFwUyIsImFwU1ciLCJBcFQiLCJlbXB0eVJlYWRvbmx5QXJyYXkiLCJ0cmF2ZXJzZVJlYWRvbmx5Tm9uRW1wdHlBcnJheVdpdGhJbmRleCIsIlNLIiwidHJhdmVyc2VSZWFkb25seUFycmF5V2l0aEluZGV4IiwiYXMiLCJpc05vbkVtcHR5IiwidHJhdmVyc2VSZWFkb25seU5vbkVtcHR5QXJyYXlXaXRoSW5kZXhTZXEiLCJoZWFkIiwiaXNMZWZ0Iiwib3V0IiwiaSIsImxlbmd0aCIsInB1c2giLCJ0cmF2ZXJzZVJlYWRvbmx5QXJyYXlXaXRoSW5kZXhTZXEiLCJ0cmF2ZXJzZUFycmF5V2l0aEluZGV4IiwidHJhdmVyc2VBcnJheSIsInNlcXVlbmNlQXJyYXkiLCJ0cmF2ZXJzZVNlcUFycmF5V2l0aEluZGV4IiwidHJhdmVyc2VTZXFBcnJheSIsInNlcXVlbmNlU2VxQXJyYXkiLCJBcHBsaWNhdGl2ZSIsImlvRWl0aGVyIiwiZ2V0QXBwbHlTZW1pZ3JvdXAiLCJnZXRBcHBseU1vbm9pZCIsImdldFNlbWlncm91cCIsImdldElPVmFsaWRhdGlvbiIsIlNFIiwiYXBwbGljYXRpdmVJT1ZhbGlkYXRpb24iLCJhbHRJT1ZhbGlkYXRpb24iXSwibWFwcGlu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QyxNQU5GO0FBT0xJLElBQUFBLEtBQUssRUFBRUYsTUFQRjtBQVFMSSxJQUFBQSxPQUFPLEVBQUVELFFBUko7QUFTTEksSUFBQUEsR0FBRyxFQUFFa0csZUFBZSxDQUFDbEcsR0FUaEI7QUFVTHZDLElBQUFBLE1BQU0sRUFBTkEsTUFWSztBQVdMK0MsSUFBQUEsVUFBVSxFQUFWQTtBQVhLLEdBQVA7QUFhRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogYElPRWl0aGVyPEUsIEE+YCByZXByZXNlbnRzIGEgc3luY2hyb25vdXMgY29tcHV0YXRpb24gdGhhdCBlaXRoZXIgeWllbGRzIGEgdmFsdWUgb2YgdHlwZSBgQWAgb3IgZmFpbHMgeWllbGRpbmcgYW5cbiAqIGVycm9yIG9mIHR5cGUgYEVgLiBJZiB5b3Ugd2FudCB0byByZXByZXNlbnQgYSBzeW5jaHJvbm91cyBjb21wdXRhdGlvbiB0aGF0IG5ldmVyIGZhaWxzLCBwbGVhc2Ugc2VlIGBJT2AuXG4gKlxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmltcG9ydCB7IEFsdDIsIEFsdDJDIH0gZnJvbSAnLi9BbHQnXG5pbXBvcnQgeyBBcHBsaWNhdGl2ZTIsIEFwcGxpY2F0aXZlMkMsIGdldEFwcGxpY2F0aXZlTW9ub2lkIH0gZnJvbSAnLi9BcHBsaWNhdGl2ZSdcbmltcG9ydCB7XG4gIGFwIGFzIGFwXyxcbiAgYXBGaXJzdCBhcyBhcEZpcnN0XyxcbiAgQXBwbHkyLFxuICBhcFMgYXMgYXBTXyxcbiAgYXBTZWNvbmQgYXMgYXBTZWNvbmRfLFxuICBnZXRBcHBseVNlbWlncm91cCBhcyBnZXRBcHBseVNlbWlncm91cF9cbn0gZnJvbSAnLi9BcHBseSdcbmltcG9ydCB7IEJpZnVuY3RvcjIgfSBmcm9tICcuL0JpZnVuY3RvcidcbmltcG9ydCB7IGJpbmQgYXMgYmluZF8sIENoYWluMiwgY2hhaW5GaXJzdCBhcyBjaGFpbkZpcnN0XyB9IGZyb20gJy4vQ2hhaW4nXG5pbXBvcnQgeyBjb21wYWN0IGFzIGNvbXBhY3RfLCBDb21wYWN0YWJsZTJDLCBzZXBhcmF0ZSBhcyBzZXBhcmF0ZV8gfSBmcm9tICcuL0NvbXBhY3RhYmxlJ1xuaW1wb3J0ICogYXMgRSBmcm9tICcuL0VpdGhlcidcbmltcG9ydCAqIGFzIEVUIGZyb20gJy4vRWl0aGVyVCdcbmltcG9ydCB7XG4gIGZpbHRlciBhcyBmaWx0ZXJfLFxuICBGaWx0ZXJhYmxlMkMsXG4gIGZpbHRlck1hcCBhcyBmaWx0ZXJNYXBfLFxuICBwYXJ0aXRpb24gYXMgcGFydGl0aW9uXyxcbiAgcGFydGl0aW9uTWFwIGFzIHBhcnRpdGlvbk1hcF9cbn0gZnJvbSAnLi9GaWx0ZXJhYmxlJ1xuaW1wb3J0IHtcbiAgY2hhaW5FaXRoZXJLIGFzIGNoYWluRWl0aGVyS18sXG4gIGNoYWluT3B0aW9uSyBhcyBjaGFpbk9wdGlvbktfLFxuICBmaWx0ZXJPckVsc2UgYXMgZmlsdGVyT3JFbHNlXyxcbiAgRnJvbUVpdGhlcjIsXG4gIGZyb21FaXRoZXJLIGFzIGZyb21FaXRoZXJLXyxcbiAgZnJvbU9wdGlvbiBhcyBmcm9tT3B0aW9uXyxcbiAgZnJvbU9wdGlvbksgYXMgZnJvbU9wdGlvbktfLFxuICBmcm9tUHJlZGljYXRlIGFzIGZyb21QcmVkaWNhdGVfXG59IGZyb20gJy4vRnJvbUVpdGhlcidcbmltcG9ydCB7IGNoYWluRmlyc3RJT0sgYXMgY2hhaW5GaXJzdElPS18sIGNoYWluSU9LIGFzIGNoYWluSU9LXywgRnJvbUlPMiwgZnJvbUlPSyBhcyBmcm9tSU9LXyB9IGZyb20gJy4vRnJvbUlPJ1xuaW1wb3J0IHsgZmxvdywgaWRlbnRpdHksIExhenksIHBpcGUsIFNLIH0gZnJvbSAnLi9mdW5jdGlvbidcbmltcG9ydCB7IGJpbmRUbyBhcyBiaW5kVG9fLCBmbGFwIGFzIGZsYXBfLCBGdW5jdG9yMiB9IGZyb20gJy4vRnVuY3RvcidcbmltcG9ydCAqIGFzIF8gZnJvbSAnLi9pbnRlcm5hbCdcbmltcG9ydCAqIGFzIEkgZnJvbSAnLi9JTydcbmltcG9ydCB7IE1vbmFkMiwgTW9uYWQyQyB9IGZyb20gJy4vTW9uYWQnXG5pbXBvcnQgeyBNb25hZElPMiwgTW9uYWRJTzJDIH0gZnJvbSAnLi9Nb25hZElPJ1xuaW1wb3J0IHsgTW9uYWRUaHJvdzIsIE1vbmFkVGhyb3cyQyB9IGZyb20gJy4vTW9uYWRUaHJvdydcbmltcG9ydCB7IE1vbm9pZCB9IGZyb20gJy4vTW9ub2lkJ1xuaW1wb3J0IHsgTm9uRW1wdHlBcnJheSB9IGZyb20gJy4vTm9uRW1wdHlBcnJheSdcbmltcG9ydCB7IFBvaW50ZWQyIH0gZnJvbSAnLi9Qb2ludGVkJ1xuaW1wb3J0IHsgUHJlZGljYXRlIH0gZnJvbSAnLi9QcmVkaWNhdGUnXG5pbXBvcnQgeyBSZWFkb25seU5vbkVtcHR5QXJyYXkgfSBmcm9tICcuL1JlYWRvbmx5Tm9uRW1wdHlBcnJheSdcbmltcG9ydCB7IFJlZmluZW1lbnQgfSBmcm9tICcuL1JlZmluZW1lbnQnXG5pbXBvcnQgeyBTZW1pZ3JvdXAgfSBmcm9tICcuL1NlbWlncm91cCdcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gbW9kZWxcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IEVpdGhlciA9IEUuRWl0aGVyXG5pbXBvcnQgSU8gPSBJLklPXG5cbi8qKlxuICogQGNhdGVnb3J5IG1vZGVsXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJT0VpdGhlcjxFLCBBPiBleHRlbmRzIElPPEVpdGhlcjxFLCBBPj4ge31cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gY29uc3RydWN0b3JzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbnN0cnVjdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBsZWZ0OiA8RSA9IG5ldmVyLCBBID0gbmV2ZXI+KGw6IEUpID0+IElPRWl0aGVyPEUsIEE+ID1cbiAgLyojX19QVVJFX18qL1xuICBFVC5sZWZ0KEkuUG9pbnRlZClcblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29uc3RydWN0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHJpZ2h0OiA8RSA9IG5ldmVyLCBBID0gbmV2ZXI+KGE6IEEpID0+IElPRWl0aGVyPEUsIEE+ID1cbiAgLyojX19QVVJFX18qL1xuICBFVC5yaWdodChJLlBvaW50ZWQpXG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbnN0cnVjdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCByaWdodElPOiA8RSA9IG5ldmVyLCBBID0gbmV2ZXI+KG1hOiBJTzxBPikgPT4gSU9FaXRoZXI8RSwgQT4gPVxuICAvKiNfX1BVUkVfXyovXG4gIEVULnJpZ2h0RihJLkZ1bmN0b3IpXG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbnN0cnVjdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBsZWZ0SU86IDxFID0gbmV2ZXIsIEEgPSBuZXZlcj4obWU6IElPPEU+KSA9PiBJT0VpdGhlcjxFLCBBPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgRVQubGVmdEYoSS5GdW5jdG9yKVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBuYXR1cmFsIHRyYW5zZm9ybWF0aW9uc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEBjYXRlZ29yeSBuYXR1cmFsIHRyYW5zZm9ybWF0aW9uc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBmcm9tRWl0aGVyOiBGcm9tRWl0aGVyMjxVUkk+Wydmcm9tRWl0aGVyJ10gPSBJLm9mXG5cbi8qKlxuICogQGNhdGVnb3J5IG5hdHVyYWwgdHJhbnNmb3JtYXRpb25zXG4gKiBAc2luY2UgMi43LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZyb21JTzogRnJvbUlPMjxVUkk+Wydmcm9tSU8nXSA9IHJpZ2h0SU9cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gZGVzdHJ1Y3RvcnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgZGVzdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IG1hdGNoOiA8RSwgQiwgQT4ob25MZWZ0OiAoZTogRSkgPT4gQiwgb25SaWdodDogKGE6IEEpID0+IEIpID0+IChtYTogSU9FaXRoZXI8RSwgQT4pID0+IElPPEI+ID1cbiAgLyojX19QVVJFX18qL1xuICBFVC5tYXRjaChJLkZ1bmN0b3IpXG5cbi8qKlxuICogTGVzcyBzdHJpY3QgdmVyc2lvbiBvZiBbYG1hdGNoYF0oI21hdGNoKS5cbiAqXG4gKiBAY2F0ZWdvcnkgZGVzdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IG1hdGNoVzogPEUsIEIsIEEsIEM+KFxuICBvbkxlZnQ6IChlOiBFKSA9PiBCLFxuICBvblJpZ2h0OiAoYTogQSkgPT4gQ1xuKSA9PiAobWE6IElPRWl0aGVyPEUsIEE+KSA9PiBJTzxCIHwgQz4gPSBtYXRjaCBhcyBhbnlcblxuLyoqXG4gKiBAY2F0ZWdvcnkgZGVzdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IG1hdGNoRTogPEUsIEEsIEI+KG9uTGVmdDogKGU6IEUpID0+IElPPEI+LCBvblJpZ2h0OiAoYTogQSkgPT4gSU88Qj4pID0+IChtYTogSU9FaXRoZXI8RSwgQT4pID0+IElPPEI+ID1cbiAgLyojX19QVVJFX18qL1xuICBFVC5tYXRjaEUoSS5Nb25hZClcblxuLyoqXG4gKiBBbGlhcyBvZiBbYG1hdGNoRWBdKCNtYXRjaGUpLlxuICpcbiAqIEBjYXRlZ29yeSBkZXN0cnVjdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBmb2xkID0gbWF0Y2hFXG5cbi8qKlxuICogTGVzcyBzdHJpY3QgdmVyc2lvbiBvZiBbYG1hdGNoRWBdKCNtYXRjaGUpLlxuICpcbiAqIEBjYXRlZ29yeSBkZXN0cnVjdG9yc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgbWF0Y2hFVzogPEUsIEIsIEEsIEM+KFxuICBvbkxlZnQ6IChlOiBFKSA9PiBJTzxCPixcbiAgb25SaWdodDogKGE6IEEpID0+IElPPEM+XG4pID0+IChtYTogSU9FaXRoZXI8RSwgQT4pID0+IElPPEIgfCBDPiA9IG1hdGNoRSBhcyBhbnlcblxuLyoqXG4gKiBBbGlhcyBvZiBbYG1hdGNoRVdgXSgjbWF0Y2hldykuXG4gKlxuICogQGNhdGVnb3J5IGRlc3RydWN0b3JzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBmb2xkVyA9IG1hdGNoRVdcblxuLyoqXG4gKiBAY2F0ZWdvcnkgZGVzdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgZ2V0T3JFbHNlOiA8RSwgQT4ob25MZWZ0OiAoZTogRSkgPT4gSU88QT4pID0+IChtYTogSU9FaXRoZXI8RSwgQT4pID0+IElPPEE+ID1cbiAgLyojX19QVVJFX18qL1xuICBFVC5nZXRPckVsc2UoSS5Nb25hZClcblxuLyoqXG4gKiBMZXNzIHN0cmljdCB2ZXJzaW9uIG9mIFtgZ2V0T3JFbHNlYF0oI2dldG9yZWxzZSkuXG4gKlxuICogQGNhdGVnb3J5IGRlc3RydWN0b3JzXG4gKiBAc2luY2UgMi42LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGdldE9yRWxzZVc6IDxFLCBCPihvbkxlZnQ6IChlOiBFKSA9PiBJTzxCPikgPT4gPEE+KG1hOiBJT0VpdGhlcjxFLCBBPikgPT4gSU88QSB8IEI+ID0gZ2V0T3JFbHNlIGFzIGFueVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBpbnRlcm9wXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQ29uc3RydWN0cyBhIG5ldyBgSU9FaXRoZXJgIGZyb20gYSBmdW5jdGlvbiB0aGF0IHBlcmZvcm1zIGEgc2lkZSBlZmZlY3QgYW5kIG1pZ2h0IHRocm93XG4gKlxuICogU2VlIGFsc28gW2B0cnlDYXRjaEtgXSgjdHJ5Y2F0Y2hrKS5cbiAqXG4gKiBAY2F0ZWdvcnkgaW50ZXJvcFxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCB0cnlDYXRjaCA9IDxFLCBBPihmOiBMYXp5PEE+LCBvblRocm93OiAocmVhc29uOiB1bmtub3duKSA9PiBFKTogSU9FaXRoZXI8RSwgQT4gPT4gKCkgPT5cbiAgRS50cnlDYXRjaChmLCBvblRocm93KVxuXG4vKipcbiAqIENvbnZlcnRzIGEgZnVuY3Rpb24gdGhhdCBtYXkgdGhyb3cgdG8gb25lIHJldHVybmluZyBhIGBJT0VpdGhlcmAuXG4gKlxuICogQGNhdGVnb3J5IGludGVyb3BcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHRyeUNhdGNoSyA9IDxBIGV4dGVuZHMgUmVhZG9ubHlBcnJheTx1bmtub3duPiwgQiwgRT4oXG4gIGY6ICguLi5hOiBBKSA9PiBCLFxuICBvblRocm93OiAocmVhc29uOiB1bmtub3duKSA9PiBFXG4pOiAoKC4uLmE6IEEpID0+IElPRWl0aGVyPEUsIEI+KSA9PiAoLi4uYSkgPT4gdHJ5Q2F0Y2goKCkgPT4gZiguLi5hKSwgb25UaHJvdylcblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW50ZXJvcFxuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgdG9VbmlvbjogPEUsIEE+KGZhOiBJT0VpdGhlcjxFLCBBPikgPT4gSU88RSB8IEE+ID1cbiAgLyojX19QVVJFX18qL1xuICBFVC50b1VuaW9uKEkuRnVuY3RvcilcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gY29tYmluYXRvcnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3Qgb3JFbHNlOiA8RTEsIEEsIEUyPihvbkxlZnQ6IChlOiBFMSkgPT4gSU9FaXRoZXI8RTIsIEE+KSA9PiAobWE6IElPRWl0aGVyPEUxLCBBPikgPT4gSU9FaXRoZXI8RTIsIEE+ID1cbiAgLyojX19QVVJFX18qL1xuICBFVC5vckVsc2UoSS5Nb25hZClcblxuLyoqXG4gKiBMZXNzIHN0cmljdCB2ZXJzaW9uIG9mIFtgb3JFbHNlYF0oI29yZWxzZSkuXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBvckVsc2VXOiA8RTEsIEUyLCBCPihcbiAgb25MZWZ0OiAoZTogRTEpID0+IElPRWl0aGVyPEUyLCBCPlxuKSA9PiA8QT4obWE6IElPRWl0aGVyPEUxLCBBPikgPT4gSU9FaXRoZXI8RTIsIEEgfCBCPiA9IG9yRWxzZSBhcyBhbnlcblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IG9yRWxzZUZpcnN0OiA8RSwgQj4ob25MZWZ0OiAoZTogRSkgPT4gSU9FaXRoZXI8RSwgQj4pID0+IDxBPihtYTogSU9FaXRoZXI8RSwgQT4pID0+IElPRWl0aGVyPEUsIEE+ID1cbiAgLyojX19QVVJFX18qL1xuICBFVC5vckVsc2VGaXJzdChJLk1vbmFkKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3Qgb3JFbHNlRmlyc3RXOiA8RTEsIEUyLCBCPihcbiAgb25MZWZ0OiAoZTogRTEpID0+IElPRWl0aGVyPEUyLCBCPlxuKSA9PiA8QT4obWE6IElPRWl0aGVyPEUxLCBBPikgPT4gSU9FaXRoZXI8RTEgfCBFMiwgQT4gPSBvckVsc2VGaXJzdCBhcyBhbnlcblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IG9yTGVmdDogPEUxLCBFMj4ob25MZWZ0OiAoZTogRTEpID0+IElPPEUyPikgPT4gPEE+KGZhOiBJT0VpdGhlcjxFMSwgQT4pID0+IElPRWl0aGVyPEUyLCBBPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgRVQub3JMZWZ0KEkuTW9uYWQpXG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHN3YXA6IDxFLCBBPihtYTogSU9FaXRoZXI8RSwgQT4pID0+IElPRWl0aGVyPEEsIEU+ID1cbiAgLyojX19QVVJFX18qL1xuICBFVC5zd2FwKEkuRnVuY3RvcilcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gbm9uLXBpcGVhYmxlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuY29uc3QgX21hcDogRnVuY3RvcjI8VVJJPlsnbWFwJ10gPSAoZmEsIGYpID0+IHBpcGUoZmEsIG1hcChmKSlcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5jb25zdCBfYXA6IEFwcGx5MjxVUkk+WydhcCddID0gKGZhYiwgZmEpID0+IHBpcGUoZmFiLCBhcChmYSkpXG5jb25zdCBfYXBTZXE6IEFwcGx5MjxVUkk+WydhcCddID0gKGZhYiwgZmEpID0+XG4gIHBpcGUoXG4gICAgZmFiLFxuICAgIGNoYWluKChmKSA9PiBwaXBlKGZhLCBtYXAoZikpKVxuICApXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuY29uc3QgX2NoYWluOiBDaGFpbjI8VVJJPlsnY2hhaW4nXSA9IChtYSwgZikgPT4gcGlwZShtYSwgY2hhaW4oZikpXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuY29uc3QgX2JpbWFwOiBCaWZ1bmN0b3IyPFVSST5bJ2JpbWFwJ10gPSAoZmEsIGYsIGcpID0+IHBpcGUoZmEsIGJpbWFwKGYsIGcpKVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmNvbnN0IF9tYXBMZWZ0OiBCaWZ1bmN0b3IyPFVSST5bJ21hcExlZnQnXSA9IChmYSwgZikgPT4gcGlwZShmYSwgbWFwTGVmdChmKSlcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5jb25zdCBfYWx0OiBBbHQyPFVSST5bJ2FsdCddID0gKGZhLCB0aGF0KSA9PiBwaXBlKGZhLCBhbHQodGhhdCkpXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIHR5cGUgY2xhc3MgbWVtYmVyc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIGBtYXBgIGNhbiBiZSB1c2VkIHRvIHR1cm4gZnVuY3Rpb25zIGAoYTogQSkgPT4gQmAgaW50byBmdW5jdGlvbnMgYChmYTogRjxBPikgPT4gRjxCPmAgd2hvc2UgYXJndW1lbnQgYW5kIHJldHVybiB0eXBlc1xuICogdXNlIHRoZSB0eXBlIGNvbnN0cnVjdG9yIGBGYCB0byByZXByZXNlbnQgc29tZSBjb21wdXRhdGlvbmFsIGNvbnRleHQuXG4gKlxuICogQGNhdGVnb3J5IEZ1bmN0b3JcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgbWFwOiA8QSwgQj4oZjogKGE6IEEpID0+IEIpID0+IDxFPihmYTogSU9FaXRoZXI8RSwgQT4pID0+IElPRWl0aGVyPEUsIEI+ID1cbiAgLyojX19QVVJFX18qL1xuICBFVC5tYXAoSS5GdW5jdG9yKVxuXG4vKipcbiAqIE1hcCBhIHBhaXIgb2YgZnVuY3Rpb25zIG92ZXIgdGhlIHR3byB0eXBlIGFyZ3VtZW50cyBvZiB0aGUgYmlmdW5jdG9yLlxuICpcbiAqIEBjYXRlZ29yeSBCaWZ1bmN0b3JcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgYmltYXA6IDxFLCBHLCBBLCBCPihmOiAoZTogRSkgPT4gRywgZzogKGE6IEEpID0+IEIpID0+IChmYTogSU9FaXRoZXI8RSwgQT4pID0+IElPRWl0aGVyPEcsIEI+ID1cbiAgLyojX19QVVJFX18qL1xuICBFVC5iaW1hcChJLkZ1bmN0b3IpXG5cbi8qKlxuICogTWFwIGEgZnVuY3Rpb24gb3ZlciB0aGUgZmlyc3QgdHlwZSBhcmd1bWVudCBvZiBhIGJpZnVuY3Rvci5cbiAqXG4gKiBAY2F0ZWdvcnkgQmlmdW5jdG9yXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IG1hcExlZnQ6IDxFLCBHPihmOiAoZTogRSkgPT4gRykgPT4gPEE+KGZhOiBJT0VpdGhlcjxFLCBBPikgPT4gSU9FaXRoZXI8RywgQT4gPVxuICAvKiNfX1BVUkVfXyovXG4gIEVULm1hcExlZnQoSS5GdW5jdG9yKVxuXG4vKipcbiAqIEFwcGx5IGEgZnVuY3Rpb24gdG8gYW4gYXJndW1lbnQgdW5kZXIgYSB0eXBlIGNvbnN0cnVjdG9yLlxuICpcbiAqIEBjYXRlZ29yeSBBcHBseVxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBhcDogPEUsIEE+KGZhOiBJT0VpdGhlcjxFLCBBPikgPT4gPEI+KGZhYjogSU9FaXRoZXI8RSwgKGE6IEEpID0+IEI+KSA9PiBJT0VpdGhlcjxFLCBCPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgRVQuYXAoSS5BcHBseSlcblxuLyoqXG4gKiBMZXNzIHN0cmljdCB2ZXJzaW9uIG9mIFtgYXBgXSgjYXApLlxuICpcbiAqIEBjYXRlZ29yeSBBcHBseVxuICogQHNpbmNlIDIuOC4wXG4gKi9cbmV4cG9ydCBjb25zdCBhcFc6IDxFMiwgQT4oXG4gIGZhOiBJT0VpdGhlcjxFMiwgQT5cbikgPT4gPEUxLCBCPihmYWI6IElPRWl0aGVyPEUxLCAoYTogQSkgPT4gQj4pID0+IElPRWl0aGVyPEUxIHwgRTIsIEI+ID0gYXAgYXMgYW55XG5cbi8qKlxuICogQGNhdGVnb3J5IFBvaW50ZWRcbiAqIEBzaW5jZSAyLjguNVxuICovXG5leHBvcnQgY29uc3Qgb2Y6IDxFID0gbmV2ZXIsIEEgPSBuZXZlcj4oYTogQSkgPT4gSU9FaXRoZXI8RSwgQT4gPSByaWdodFxuXG4vKipcbiAqIENvbXBvc2VzIGNvbXB1dGF0aW9ucyBpbiBzZXF1ZW5jZSwgdXNpbmcgdGhlIHJldHVybiB2YWx1ZSBvZiBvbmUgY29tcHV0YXRpb24gdG8gZGV0ZXJtaW5lIHRoZSBuZXh0IGNvbXB1dGF0aW9uLlxuICpcbiAqIEBjYXRlZ29yeSBNb25hZFxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBjaGFpbjogPEUsIEEsIEI+KGY6IChhOiBBKSA9PiBJT0VpdGhlcjxFLCBCPikgPT4gKG1hOiBJT0VpdGhlcjxFLCBBPikgPT4gSU9FaXRoZXI8RSwgQj4gPVxuICAvKiNfX1BVUkVfXyovXG4gIEVULmNoYWluKEkuTW9uYWQpXG5cbi8qKlxuICogTGVzcyBzdHJpY3QgdmVyc2lvbiBvZiBbYGNoYWluYF0oI2NoYWluKS5cbiAqXG4gKiBAY2F0ZWdvcnkgTW9uYWRcbiAqIEBzaW5jZSAyLjYuMFxuICovXG5leHBvcnQgY29uc3QgY2hhaW5XOiA8RTIsIEEsIEI+KFxuICBmOiAoYTogQSkgPT4gSU9FaXRoZXI8RTIsIEI+XG4pID0+IDxFMT4obWE6IElPRWl0aGVyPEUxLCBBPikgPT4gSU9FaXRoZXI8RTEgfCBFMiwgQj4gPSBjaGFpbiBhcyBhbnlcblxuLyoqXG4gKiBMZXNzIHN0cmljdCB2ZXJzaW9uIG9mIFtgZmxhdHRlbmBdKCNmbGF0dGVuKS5cbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZsYXR0ZW5XOiA8RTEsIEUyLCBBPihtbWE6IElPRWl0aGVyPEUxLCBJT0VpdGhlcjxFMiwgQT4+KSA9PiBJT0VpdGhlcjxFMSB8IEUyLCBBPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgY2hhaW5XKGlkZW50aXR5KVxuXG4vKipcbiAqIERlcml2YWJsZSBmcm9tIGBDaGFpbmAuXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZsYXR0ZW46IDxFLCBBPihtbWE6IElPRWl0aGVyPEUsIElPRWl0aGVyPEUsIEE+PikgPT4gSU9FaXRoZXI8RSwgQT4gPSBmbGF0dGVuV1xuXG4vKipcbiAqIElkZW50aWZpZXMgYW4gYXNzb2NpYXRpdmUgb3BlcmF0aW9uIG9uIGEgdHlwZSBjb25zdHJ1Y3Rvci4gSXQgaXMgc2ltaWxhciB0byBgU2VtaWdyb3VwYCwgZXhjZXB0IHRoYXQgaXQgYXBwbGllcyB0b1xuICogdHlwZXMgb2Yga2luZCBgKiAtPiAqYC5cbiAqXG4gKiBAY2F0ZWdvcnkgQWx0XG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGFsdDogPEUsIEE+KHRoYXQ6IExhenk8SU9FaXRoZXI8RSwgQT4+KSA9PiAoZmE6IElPRWl0aGVyPEUsIEE+KSA9PiBJT0VpdGhlcjxFLCBBPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgRVQuYWx0KEkuTW9uYWQpXG5cbi8qKlxuICogTGVzcyBzdHJpY3QgdmVyc2lvbiBvZiBbYGFsdGBdKCNhbHQpLlxuICpcbiAqIEBjYXRlZ29yeSBBbHRcbiAqIEBzaW5jZSAyLjkuMFxuICovXG5leHBvcnQgY29uc3QgYWx0VzogPEUyLCBCPihcbiAgdGhhdDogTGF6eTxJT0VpdGhlcjxFMiwgQj4+XG4pID0+IDxFMSwgQT4oZmE6IElPRWl0aGVyPEUxLCBBPikgPT4gSU9FaXRoZXI8RTIsIEEgfCBCPiA9IGFsdCBhcyBhbnlcblxuLyoqXG4gKiBAY2F0ZWdvcnkgTW9uYWRUaHJvd1xuICogQHNpbmNlIDIuNy4wXG4gKi9cbmV4cG9ydCBjb25zdCB0aHJvd0Vycm9yOiBNb25hZFRocm93MjxVUkk+Wyd0aHJvd0Vycm9yJ10gPSBsZWZ0XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGluc3RhbmNlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgVVJJID0gJ0lPRWl0aGVyJ1xuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgdHlwZSBVUkkgPSB0eXBlb2YgVVJJXG5cbmRlY2xhcmUgbW9kdWxlICcuL0hLVCcge1xuICBpbnRlcmZhY2UgVVJJdG9LaW5kMjxFLCBBPiB7XG4gICAgcmVhZG9ubHkgW1VSSV06IElPRWl0aGVyPEUsIEE+XG4gIH1cbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi43LjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEFwcGxpY2F0aXZlSU9WYWxpZGF0aW9uPEU+KFM6IFNlbWlncm91cDxFPik6IEFwcGxpY2F0aXZlMkM8VVJJLCBFPiB7XG4gIGNvbnN0IGFwID0gYXBfKEkuQXBwbHksIEUuZ2V0QXBwbGljYXRpdmVWYWxpZGF0aW9uKFMpKVxuICByZXR1cm4ge1xuICAgIFVSSSxcbiAgICBfRTogdW5kZWZpbmVkIGFzIGFueSxcbiAgICBtYXA6IF9tYXAsXG4gICAgYXA6IChmYWIsIGZhKSA9PiBwaXBlKGZhYiwgYXAoZmEpKSxcbiAgICBvZlxuICB9XG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuNy4wXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbHRJT1ZhbGlkYXRpb248RT4oUzogU2VtaWdyb3VwPEU+KTogQWx0MkM8VVJJLCBFPiB7XG4gIGNvbnN0IGFsdCA9IEVULmFsdFZhbGlkYXRpb24oSS5Nb25hZCwgUylcbiAgcmV0dXJuIHtcbiAgICBVUkksXG4gICAgX0U6IHVuZGVmaW5lZCBhcyBhbnksXG4gICAgbWFwOiBfbWFwLFxuICAgIGFsdDogKGZhLCB0aGF0KSA9PiBwaXBlKGZhLCBhbHQodGhhdCkpXG4gIH1cbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRDb21wYWN0YWJsZSA9IDxFPihNOiBNb25vaWQ8RT4pOiBDb21wYWN0YWJsZTJDPFVSSSwgRT4gPT4ge1xuICBjb25zdCBDID0gRS5nZXRDb21wYWN0YWJsZShNKVxuICByZXR1cm4ge1xuICAgIFVSSSxcbiAgICBfRTogdW5kZWZpbmVkIGFzIGFueSxcbiAgICBjb21wYWN0OiBjb21wYWN0XyhJLkZ1bmN0b3IsIEMpLFxuICAgIHNlcGFyYXRlOiBzZXBhcmF0ZV8oSS5GdW5jdG9yLCBDLCBFLkZ1bmN0b3IpXG4gIH1cbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xLjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEZpbHRlcmFibGU8RT4oTTogTW9ub2lkPEU+KTogRmlsdGVyYWJsZTJDPFVSSSwgRT4ge1xuICBjb25zdCBGID0gRS5nZXRGaWx0ZXJhYmxlKE0pXG4gIGNvbnN0IEMgPSBnZXRDb21wYWN0YWJsZShNKVxuXG4gIGNvbnN0IGZpbHRlciA9IGZpbHRlcl8oSS5GdW5jdG9yLCBGKVxuICBjb25zdCBmaWx0ZXJNYXAgPSBmaWx0ZXJNYXBfKEkuRnVuY3RvciwgRilcbiAgY29uc3QgcGFydGl0aW9uID0gcGFydGl0aW9uXyhJLkZ1bmN0b3IsIEYpXG4gIGNvbnN0IHBhcnRpdGlvbk1hcCA9IHBhcnRpdGlvbk1hcF8oSS5GdW5jdG9yLCBGKVxuICByZXR1cm4ge1xuICAgIFVSSSxcbiAgICBfRTogdW5kZWZpbmVkIGFzIGFueSxcbiAgICBtYXA6IF9tYXAsXG4gICAgY29tcGFjdDogQy5jb21wYWN0LFxuICAgIHNlcGFyYXRlOiBDLnNlcGFyYXRlLFxuICAgIGZpbHRlcjogPEE+KGZhOiBJT0VpdGhlcjxFLCBBPiwgcHJlZGljYXRlOiBQcmVkaWNhdGU8QT4pID0+IHBpcGUoZmEsIGZpbHRlcihwcmVkaWNhdGUpKSxcbiAgICBmaWx0ZXJNYXA6IChmYSwgZikgPT4gcGlwZShmYSwgZmlsdGVyTWFwKGYpKSxcbiAgICBwYXJ0aXRpb246IDxBPihmYTogSU9FaXRoZXI8RSwgQT4sIHByZWRpY2F0ZTogUHJlZGljYXRlPEE+KSA9PiBwaXBlKGZhLCBwYXJ0aXRpb24ocHJlZGljYXRlKSksXG4gICAgcGFydGl0aW9uTWFwOiAoZmEsIGYpID0+IHBpcGUoZmEsIHBhcnRpdGlvbk1hcChmKSlcbiAgfVxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjcuMFxuICovXG5leHBvcnQgY29uc3QgRnVuY3RvcjogRnVuY3RvcjI8VVJJPiA9IHtcbiAgVVJJLFxuICBtYXA6IF9tYXBcbn1cblxuLyoqXG4gKiBEZXJpdmFibGUgZnJvbSBgRnVuY3RvcmAuXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBmbGFwID1cbiAgLyojX19QVVJFX18qL1xuICBmbGFwXyhGdW5jdG9yKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IFBvaW50ZWQ6IFBvaW50ZWQyPFVSST4gPSB7XG4gIFVSSSxcbiAgb2Zcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi43LjBcbiAqL1xuZXhwb3J0IGNvbnN0IEJpZnVuY3RvcjogQmlmdW5jdG9yMjxVUkk+ID0ge1xuICBVUkksXG4gIGJpbWFwOiBfYmltYXAsXG4gIG1hcExlZnQ6IF9tYXBMZWZ0XG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgQXBwbHlQYXI6IEFwcGx5MjxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgYXA6IF9hcFxufVxuXG4vKipcbiAqIENvbWJpbmUgdHdvIGVmZmVjdGZ1bCBhY3Rpb25zLCBrZWVwaW5nIG9ubHkgdGhlIHJlc3VsdCBvZiB0aGUgZmlyc3QuXG4gKlxuICogRGVyaXZhYmxlIGZyb20gYEFwcGx5YC5cbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgYXBGaXJzdCA9XG4gIC8qI19fUFVSRV9fKi9cbiAgYXBGaXJzdF8oQXBwbHlQYXIpXG5cbi8qKlxuICogQ29tYmluZSB0d28gZWZmZWN0ZnVsIGFjdGlvbnMsIGtlZXBpbmcgb25seSB0aGUgcmVzdWx0IG9mIHRoZSBzZWNvbmQuXG4gKlxuICogRGVyaXZhYmxlIGZyb20gYEFwcGx5YC5cbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgYXBTZWNvbmQgPVxuICAvKiNfX1BVUkVfXyovXG4gIGFwU2Vjb25kXyhBcHBseVBhcilcblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi44LjRcbiAqL1xuZXhwb3J0IGNvbnN0IEFwcGxpY2F0aXZlUGFyOiBBcHBsaWNhdGl2ZTI8VVJJPiA9IHtcbiAgVVJJLFxuICBtYXA6IF9tYXAsXG4gIGFwOiBfYXAsXG4gIG9mXG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuOC40XG4gKi9cbmV4cG9ydCBjb25zdCBBcHBsaWNhdGl2ZVNlcTogQXBwbGljYXRpdmUyPFVSST4gPSB7XG4gIFVSSSxcbiAgbWFwOiBfbWFwLFxuICBhcDogX2FwU2VxLFxuICBvZlxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IENoYWluOiBDaGFpbjI8VVJJPiA9IHtcbiAgVVJJLFxuICBtYXA6IF9tYXAsXG4gIGFwOiBfYXAsXG4gIGNoYWluOiBfY2hhaW5cbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi43LjBcbiAqL1xuZXhwb3J0IGNvbnN0IE1vbmFkOiBNb25hZDI8VVJJPiA9IHtcbiAgVVJJLFxuICBtYXA6IF9tYXAsXG4gIGFwOiBfYXAsXG4gIG9mLFxuICBjaGFpbjogX2NoYWluXG59XG5cbi8qKlxuICogQ29tcG9zZXMgY29tcHV0YXRpb25zIGluIHNlcXVlbmNlLCB1c2luZyB0aGUgcmV0dXJuIHZhbHVlIG9mIG9uZSBjb21wdXRhdGlvbiB0byBkZXRlcm1pbmUgdGhlIG5leHQgY29tcHV0YXRpb24gYW5kXG4gKiBrZWVwaW5nIG9ubHkgdGhlIHJlc3VsdCBvZiB0aGUgZmlyc3QuXG4gKlxuICogRGVyaXZhYmxlIGZyb20gYENoYWluYC5cbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgY2hhaW5GaXJzdDogPEUsIEEsIEI+KGY6IChhOiBBKSA9PiBJT0VpdGhlcjxFLCBCPikgPT4gKG1hOiBJT0VpdGhlcjxFLCBBPikgPT4gSU9FaXRoZXI8RSwgQT4gPVxuICAvKiNfX1BVUkVfXyovXG4gIGNoYWluRmlyc3RfKENoYWluKVxuXG4vKipcbiAqIExlc3Mgc3RyaWN0IHZlcnNpb24gb2YgW2BjaGFpbkZpcnN0YF0oI2NoYWluZmlyc3QpLlxuICpcbiAqIERlcml2YWJsZSBmcm9tIGBDaGFpbmAuXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi44LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGNoYWluRmlyc3RXOiA8RTIsIEEsIEI+KFxuICBmOiAoYTogQSkgPT4gSU9FaXRoZXI8RTIsIEI+XG4pID0+IDxFMT4obWE6IElPRWl0aGVyPEUxLCBBPikgPT4gSU9FaXRoZXI8RTEgfCBFMiwgQT4gPSBjaGFpbkZpcnN0IGFzIGFueVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjcuMFxuICovXG5leHBvcnQgY29uc3QgQWx0OiBBbHQyPFVSST4gPSB7XG4gIFVSSSxcbiAgbWFwOiBfbWFwLFxuICBhbHQ6IF9hbHRcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi43LjBcbiAqL1xuZXhwb3J0IGNvbnN0IE1vbmFkSU86IE1vbmFkSU8yPFVSST4gPSB7XG4gIFVSSSxcbiAgbWFwOiBfbWFwLFxuICBhcDogX2FwLFxuICBvZixcbiAgY2hhaW46IF9jaGFpbixcbiAgZnJvbUlPOiBmcm9tSU9cbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi43LjBcbiAqL1xuZXhwb3J0IGNvbnN0IE1vbmFkVGhyb3c6IE1vbmFkVGhyb3cyPFVSST4gPSB7XG4gIFVSSSxcbiAgbWFwOiBfbWFwLFxuICBhcDogX2FwLFxuICBvZixcbiAgY2hhaW46IF9jaGFpbixcbiAgdGhyb3dFcnJvclxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IEZyb21JTzogRnJvbUlPMjxVUkk+ID0ge1xuICBVUkksXG4gIGZyb21JT1xufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgZnJvbUlPSyA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnJvbUlPS18oRnJvbUlPKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgY2hhaW5JT0sgPVxuICAvKiNfX1BVUkVfXyovXG4gIGNoYWluSU9LXyhGcm9tSU8sIENoYWluKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgY2hhaW5GaXJzdElPSyA9XG4gIC8qI19fUFVSRV9fKi9cbiAgY2hhaW5GaXJzdElPS18oRnJvbUlPLCBDaGFpbilcblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBGcm9tRWl0aGVyOiBGcm9tRWl0aGVyMjxVUkk+ID0ge1xuICBVUkksXG4gIGZyb21FaXRoZXJcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgbmF0dXJhbCB0cmFuc2Zvcm1hdGlvbnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgZnJvbU9wdGlvbiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnJvbU9wdGlvbl8oRnJvbUVpdGhlcilcblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZyb21PcHRpb25LID1cbiAgLyojX19QVVJFX18qL1xuICBmcm9tT3B0aW9uS18oRnJvbUVpdGhlcilcblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGNoYWluT3B0aW9uSyA9XG4gIC8qI19fUFVSRV9fKi9cbiAgY2hhaW5PcHRpb25LXyhGcm9tRWl0aGVyLCBDaGFpbilcblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjQuMFxuICovXG5leHBvcnQgY29uc3QgY2hhaW5FaXRoZXJLOiA8RSwgQSwgQj4oZjogKGE6IEEpID0+IEUuRWl0aGVyPEUsIEI+KSA9PiAobWE6IElPRWl0aGVyPEUsIEE+KSA9PiBJT0VpdGhlcjxFLCBCPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgY2hhaW5FaXRoZXJLXyhGcm9tRWl0aGVyLCBDaGFpbilcblxuLyoqXG4gKiBMZXNzIHN0cmljdCB2ZXJzaW9uIG9mIFtgY2hhaW5FaXRoZXJLYF0oI2NoYWluZWl0aGVyaykuXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi42LjFcbiAqL1xuZXhwb3J0IGNvbnN0IGNoYWluRWl0aGVyS1c6IDxFMiwgQSwgQj4oXG4gIGY6IChhOiBBKSA9PiBFaXRoZXI8RTIsIEI+XG4pID0+IDxFMT4obWE6IElPRWl0aGVyPEUxLCBBPikgPT4gSU9FaXRoZXI8RTEgfCBFMiwgQj4gPSBjaGFpbkVpdGhlcksgYXMgYW55XG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbnN0cnVjdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBmcm9tUHJlZGljYXRlOiB7XG4gIDxFLCBBLCBCIGV4dGVuZHMgQT4ocmVmaW5lbWVudDogUmVmaW5lbWVudDxBLCBCPiwgb25GYWxzZTogKGE6IEEpID0+IEUpOiAoYTogQSkgPT4gSU9FaXRoZXI8RSwgQj5cbiAgPEUsIEE+KHByZWRpY2F0ZTogUHJlZGljYXRlPEE+LCBvbkZhbHNlOiAoYTogQSkgPT4gRSk6IDxCIGV4dGVuZHMgQT4oYjogQikgPT4gSU9FaXRoZXI8RSwgQj5cbiAgPEUsIEE+KHByZWRpY2F0ZTogUHJlZGljYXRlPEE+LCBvbkZhbHNlOiAoYTogQSkgPT4gRSk6IChhOiBBKSA9PiBJT0VpdGhlcjxFLCBBPlxufSA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnJvbVByZWRpY2F0ZV8oRnJvbUVpdGhlcilcblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgZmlsdGVyT3JFbHNlOiB7XG4gIDxFLCBBLCBCIGV4dGVuZHMgQT4ocmVmaW5lbWVudDogUmVmaW5lbWVudDxBLCBCPiwgb25GYWxzZTogKGE6IEEpID0+IEUpOiAobWE6IElPRWl0aGVyPEUsIEE+KSA9PiBJT0VpdGhlcjxFLCBCPlxuICA8RSwgQT4ocHJlZGljYXRlOiBQcmVkaWNhdGU8QT4sIG9uRmFsc2U6IChhOiBBKSA9PiBFKTogPEIgZXh0ZW5kcyBBPihtYjogSU9FaXRoZXI8RSwgQj4pID0+IElPRWl0aGVyPEUsIEI+XG4gIDxFLCBBPihwcmVkaWNhdGU6IFByZWRpY2F0ZTxBPiwgb25GYWxzZTogKGE6IEEpID0+IEUpOiAobWE6IElPRWl0aGVyPEUsIEE+KSA9PiBJT0VpdGhlcjxFLCBBPlxufSA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZmlsdGVyT3JFbHNlXyhGcm9tRWl0aGVyLCBDaGFpbilcblxuLyoqXG4gKiBMZXNzIHN0cmljdCB2ZXJzaW9uIG9mIFtgZmlsdGVyT3JFbHNlYF0oI2ZpbHRlcm9yZWxzZSkuXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi45LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZpbHRlck9yRWxzZVc6IHtcbiAgPEEsIEIgZXh0ZW5kcyBBLCBFMj4ocmVmaW5lbWVudDogUmVmaW5lbWVudDxBLCBCPiwgb25GYWxzZTogKGE6IEEpID0+IEUyKTogPEUxPihcbiAgICBtYTogSU9FaXRoZXI8RTEsIEE+XG4gICkgPT4gSU9FaXRoZXI8RTEgfCBFMiwgQj5cbiAgPEEsIEUyPihwcmVkaWNhdGU6IFByZWRpY2F0ZTxBPiwgb25GYWxzZTogKGE6IEEpID0+IEUyKTogPEUxLCBCIGV4dGVuZHMgQT4oXG4gICAgbWI6IElPRWl0aGVyPEUxLCBCPlxuICApID0+IElPRWl0aGVyPEUxIHwgRTIsIEI+XG4gIDxBLCBFMj4ocHJlZGljYXRlOiBQcmVkaWNhdGU8QT4sIG9uRmFsc2U6IChhOiBBKSA9PiBFMik6IDxFMT4obWE6IElPRWl0aGVyPEUxLCBBPikgPT4gSU9FaXRoZXI8RTEgfCBFMiwgQT5cbn0gPSBmaWx0ZXJPckVsc2VcblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjQuMFxuICovXG5leHBvcnQgY29uc3QgZnJvbUVpdGhlcks6IDxFLCBBIGV4dGVuZHMgUmVhZG9ubHlBcnJheTx1bmtub3duPiwgQj4oXG4gIGY6ICguLi5hOiBBKSA9PiBFLkVpdGhlcjxFLCBCPlxuKSA9PiAoLi4uYTogQSkgPT4gSU9FaXRoZXI8RSwgQj4gPVxuICAvKiNfX1BVUkVfXyovXG4gIGZyb21FaXRoZXJLXyhGcm9tRWl0aGVyKVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyB1dGlsc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIE1ha2Ugc3VyZSB0aGF0IGEgcmVzb3VyY2UgaXMgY2xlYW5lZCB1cCBpbiB0aGUgZXZlbnQgb2YgYW4gZXhjZXB0aW9uIChcXCopLiBUaGUgcmVsZWFzZSBhY3Rpb24gaXMgY2FsbGVkIHJlZ2FyZGxlc3Mgb2ZcbiAqIHdoZXRoZXIgdGhlIGJvZHkgYWN0aW9uIHRocm93cyAoXFwqKSBvciByZXR1cm5zLlxuICpcbiAqIChcXCopIGkuZS4gcmV0dXJucyBhIGBMZWZ0YFxuICpcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgYnJhY2tldCA9IDxFLCBBLCBCPihcbiAgYWNxdWlyZTogSU9FaXRoZXI8RSwgQT4sXG4gIHVzZTogKGE6IEEpID0+IElPRWl0aGVyPEUsIEI+LFxuICByZWxlYXNlOiAoYTogQSwgZTogRWl0aGVyPEUsIEI+KSA9PiBJT0VpdGhlcjxFLCB2b2lkPlxuKTogSU9FaXRoZXI8RSwgQj4gPT5cbiAgcGlwZShcbiAgICBhY3F1aXJlLFxuICAgIGNoYWluKChhKSA9PlxuICAgICAgcGlwZShcbiAgICAgICAgdXNlKGEpLFxuICAgICAgICBJLmNoYWluKChlKSA9PlxuICAgICAgICAgIHBpcGUoXG4gICAgICAgICAgICByZWxlYXNlKGEsIGUpLFxuICAgICAgICAgICAgY2hhaW4oKCkgPT4gSS5vZihlKSlcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gIClcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gZG8gbm90YXRpb25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBAc2luY2UgMi45LjBcbiAqL1xuZXhwb3J0IGNvbnN0IERvOiBJT0VpdGhlcjxuZXZlciwge30+ID1cbiAgLyojX19QVVJFX18qL1xuICBvZihfLmVtcHR5UmVjb3JkKVxuXG4vKipcbiAqIEBzaW5jZSAyLjguMFxuICovXG5leHBvcnQgY29uc3QgYmluZFRvID1cbiAgLyojX19QVVJFX18qL1xuICBiaW5kVG9fKEZ1bmN0b3IpXG5cbi8qKlxuICogQHNpbmNlIDIuOC4wXG4gKi9cbmV4cG9ydCBjb25zdCBiaW5kID1cbiAgLyojX19QVVJFX18qL1xuICBiaW5kXyhDaGFpbilcblxuLyoqXG4gKiBAc2luY2UgMi44LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGJpbmRXOiA8TiBleHRlbmRzIHN0cmluZywgQSwgRTIsIEI+KFxuICBuYW1lOiBFeGNsdWRlPE4sIGtleW9mIEE+LFxuICBmOiAoYTogQSkgPT4gSU9FaXRoZXI8RTIsIEI+XG4pID0+IDxFMT4oXG4gIGZhOiBJT0VpdGhlcjxFMSwgQT5cbikgPT4gSU9FaXRoZXI8RTEgfCBFMiwgeyByZWFkb25seSBbSyBpbiBrZXlvZiBBIHwgTl06IEsgZXh0ZW5kcyBrZXlvZiBBID8gQVtLXSA6IEIgfT4gPSBiaW5kIGFzIGFueVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBwaXBlYWJsZSBzZXF1ZW5jZSBTXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQHNpbmNlIDIuOC4wXG4gKi9cbmV4cG9ydCBjb25zdCBhcFMgPVxuICAvKiNfX1BVUkVfXyovXG4gIGFwU18oQXBwbHlQYXIpXG5cbi8qKlxuICogQHNpbmNlIDIuOC4wXG4gKi9cbmV4cG9ydCBjb25zdCBhcFNXOiA8QSwgTiBleHRlbmRzIHN0cmluZywgRTIsIEI+KFxuICBuYW1lOiBFeGNsdWRlPE4sIGtleW9mIEE+LFxuICBmYjogSU9FaXRoZXI8RTIsIEI+XG4pID0+IDxFMT4oXG4gIGZhOiBJT0VpdGhlcjxFMSwgQT5cbikgPT4gSU9FaXRoZXI8RTEgfCBFMiwgeyByZWFkb25seSBbSyBpbiBrZXlvZiBBIHwgTl06IEsgZXh0ZW5kcyBrZXlvZiBBID8gQVtLXSA6IEIgfT4gPSBhcFMgYXMgYW55XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIHNlcXVlbmNlIFRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBBcFQ6IElPRWl0aGVyPG5ldmVyLCByZWFkb25seSBbXT4gPVxuICAvKiNfX1BVUkVfXyovXG4gIG9mKF8uZW1wdHlSZWFkb25seUFycmF5KVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBhcnJheSB1dGlsc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEVxdWl2YWxlbnQgdG8gYFJlYWRvbmx5Tm9uRW1wdHlBcnJheSN0cmF2ZXJzZVdpdGhJbmRleChBcHBsaWNhdGl2ZVBhcilgLlxuICpcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHRyYXZlcnNlUmVhZG9ubHlOb25FbXB0eUFycmF5V2l0aEluZGV4OiA8QSwgRSwgQj4oXG4gIGY6IChpbmRleDogbnVtYmVyLCBhOiBBKSA9PiBJT0VpdGhlcjxFLCBCPlxuKSA9PiAoYXM6IFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxBPikgPT4gSU9FaXRoZXI8RSwgUmVhZG9ubHlOb25FbXB0eUFycmF5PEI+PiA9IChmKSA9PlxuICBmbG93KEkudHJhdmVyc2VSZWFkb25seU5vbkVtcHR5QXJyYXlXaXRoSW5kZXgoZiksIEkubWFwKEUudHJhdmVyc2VSZWFkb25seU5vbkVtcHR5QXJyYXlXaXRoSW5kZXgoU0spKSlcblxuLyoqXG4gKiBFcXVpdmFsZW50IHRvIGBSZWFkb25seUFycmF5I3RyYXZlcnNlV2l0aEluZGV4KEFwcGxpY2F0aXZlUGFyKWAuXG4gKlxuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgdHJhdmVyc2VSZWFkb25seUFycmF5V2l0aEluZGV4ID0gPEEsIEUsIEI+KFxuICBmOiAoaW5kZXg6IG51bWJlciwgYTogQSkgPT4gSU9FaXRoZXI8RSwgQj5cbik6ICgoYXM6IFJlYWRvbmx5QXJyYXk8QT4pID0+IElPRWl0aGVyPEUsIFJlYWRvbmx5QXJyYXk8Qj4+KSA9PiB7XG4gIGNvbnN0IGcgPSB0cmF2ZXJzZVJlYWRvbmx5Tm9uRW1wdHlBcnJheVdpdGhJbmRleChmKVxuICByZXR1cm4gKGFzKSA9PiAoXy5pc05vbkVtcHR5KGFzKSA/IGcoYXMpIDogQXBUKVxufVxuXG4vKipcbiAqIEVxdWl2YWxlbnQgdG8gYFJlYWRvbmx5Tm9uRW1wdHlBcnJheSN0cmF2ZXJzZVdpdGhJbmRleChBcHBsaWNhdGl2ZVNlcSlgLlxuICpcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHRyYXZlcnNlUmVhZG9ubHlOb25FbXB0eUFycmF5V2l0aEluZGV4U2VxID0gPEEsIEUsIEI+KGY6IChpbmRleDogbnVtYmVyLCBhOiBBKSA9PiBJT0VpdGhlcjxFLCBCPikgPT4gKFxuICBhczogUmVhZG9ubHlOb25FbXB0eUFycmF5PEE+XG4pOiBJT0VpdGhlcjxFLCBSZWFkb25seU5vbkVtcHR5QXJyYXk8Qj4+ID0+ICgpID0+IHtcbiAgY29uc3QgZSA9IGYoMCwgXy5oZWFkKGFzKSkoKVxuICBpZiAoXy5pc0xlZnQoZSkpIHtcbiAgICByZXR1cm4gZVxuICB9XG4gIGNvbnN0IG91dDogTm9uRW1wdHlBcnJheTxCPiA9IFtlLnJpZ2h0XVxuICBmb3IgKGxldCBpID0gMTsgaSA8IGFzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgZSA9IGYoaSwgYXNbaV0pKClcbiAgICBpZiAoXy5pc0xlZnQoZSkpIHtcbiAgICAgIHJldHVybiBlXG4gICAgfVxuICAgIG91dC5wdXNoKGUucmlnaHQpXG4gIH1cbiAgcmV0dXJuIF8ucmlnaHQob3V0KVxufVxuXG4vKipcbiAqIEVxdWl2YWxlbnQgdG8gYFJlYWRvbmx5QXJyYXkjdHJhdmVyc2VXaXRoSW5kZXgoQXBwbGljYXRpdmVTZXEpYC5cbiAqXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCB0cmF2ZXJzZVJlYWRvbmx5QXJyYXlXaXRoSW5kZXhTZXEgPSA8QSwgRSwgQj4oXG4gIGY6IChpbmRleDogbnVtYmVyLCBhOiBBKSA9PiBJT0VpdGhlcjxFLCBCPlxuKTogKChhczogUmVhZG9ubHlBcnJheTxBPikgPT4gSU9FaXRoZXI8RSwgUmVhZG9ubHlBcnJheTxCPj4pID0+IHtcbiAgY29uc3QgZyA9IHRyYXZlcnNlUmVhZG9ubHlOb25FbXB0eUFycmF5V2l0aEluZGV4U2VxKGYpXG4gIHJldHVybiAoYXMpID0+IChfLmlzTm9uRW1wdHkoYXMpID8gZyhhcykgOiBBcFQpXG59XG5cbi8qKlxuICogQHNpbmNlIDIuOS4wXG4gKi9cbmV4cG9ydCBjb25zdCB0cmF2ZXJzZUFycmF5V2l0aEluZGV4OiA8QSwgRSwgQj4oXG4gIGY6IChpbmRleDogbnVtYmVyLCBhOiBBKSA9PiBJT0VpdGhlcjxFLCBCPlxuKSA9PiAoYXM6IFJlYWRvbmx5QXJyYXk8QT4pID0+IElPRWl0aGVyPEUsIFJlYWRvbmx5QXJyYXk8Qj4+ID0gdHJhdmVyc2VSZWFkb25seUFycmF5V2l0aEluZGV4XG5cbi8qKlxuICogQHNpbmNlIDIuOS4wXG4gKi9cbmV4cG9ydCBjb25zdCB0cmF2ZXJzZUFycmF5ID0gPEEsIEUsIEI+KFxuICBmOiAoYTogQSkgPT4gSU9FaXRoZXI8RSwgQj5cbik6ICgoYXM6IFJlYWRvbmx5QXJyYXk8QT4pID0+IElPRWl0aGVyPEUsIFJlYWRvbmx5QXJyYXk8Qj4+KSA9PiB0cmF2ZXJzZVJlYWRvbmx5QXJyYXlXaXRoSW5kZXgoKF8sIGEpID0+IGYoYSkpXG5cbi8qKlxuICogQHNpbmNlIDIuOS4wXG4gKi9cbmV4cG9ydCBjb25zdCBzZXF1ZW5jZUFycmF5OiA8RSwgQT4oYXJyOiBSZWFkb25seUFycmF5PElPRWl0aGVyPEUsIEE+PikgPT4gSU9FaXRoZXI8RSwgUmVhZG9ubHlBcnJheTxBPj4gPVxuICAvKiNfX1BVUkVfXyovXG4gIHRyYXZlcnNlQXJyYXkoaWRlbnRpdHkpXG5cbi8qKlxuICogQHNpbmNlIDIuOS4wXG4gKi9cbmV4cG9ydCBjb25zdCB0cmF2ZXJzZVNlcUFycmF5V2l0aEluZGV4OiA8QSwgRSwgQj4oXG4gIGY6IChpbmRleDogbnVtYmVyLCBhOiBBKSA9PiBJT0VpdGhlcjxFLCBCPlxuKSA9PiAoYXM6IFJlYWRvbmx5QXJyYXk8QT4pID0+IElPRWl0aGVyPEUsIFJlYWRvbmx5QXJyYXk8Qj4+ID0gdHJhdmVyc2VSZWFkb25seUFycmF5V2l0aEluZGV4U2VxXG5cbi8qKlxuICogQHNpbmNlIDIuOS4wXG4gKi9cbmV4cG9ydCBjb25zdCB0cmF2ZXJzZVNlcUFycmF5ID0gPEEsIEUsIEI+KFxuICBmOiAoYTogQSkgPT4gSU9FaXRoZXI8RSwgQj5cbik6ICgoYXM6IFJlYWRvbmx5QXJyYXk8QT4pID0+IElPRWl0aGVyPEUsIFJlYWRvbmx5QXJyYXk8Qj4+KSA9PiB0cmF2ZXJzZVJlYWRvbmx5QXJyYXlXaXRoSW5kZXhTZXEoKF8sIGEpID0+IGYoYSkpXG5cbi8qKlxuICogQHNpbmNlIDIuOS4wXG4gKi9cbmV4cG9ydCBjb25zdCBzZXF1ZW5jZVNlcUFycmF5OiA8RSwgQT4oYXJyOiBSZWFkb25seUFycmF5PElPRWl0aGVyPEUsIEE+PikgPT4gSU9FaXRoZXI8RSwgUmVhZG9ubHlBcnJheTxBPj4gPVxuICAvKiNfX1BVUkVfXyovXG4gIHRyYXZlcnNlU2VxQXJyYXkoaWRlbnRpdHkpXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGRlcHJlY2F0ZWRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gdHNsaW50OmRpc2FibGU6IGRlcHJlY2F0aW9uXG5cbi8qKlxuICogVXNlIFtgQXBwbGljYXRpdmVQYXJgXSgjYXBwbGljYXRpdmVwYXIpIGluc3RlYWRcbiAqXG4gKiBAc2luY2UgMi43LjBcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBjb25zdCBBcHBsaWNhdGl2ZTogQXBwbGljYXRpdmUyPFVSST4gPSBBcHBsaWNhdGl2ZVBhclxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBkZXByZWNhdGVkXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogVXNlIHNtYWxsLCBzcGVjaWZpYyBpbnN0YW5jZXMgaW5zdGVhZC5cbiAqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4wLjBcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBjb25zdCBpb0VpdGhlcjogTW9uYWQyPFVSST4gJiBCaWZ1bmN0b3IyPFVSST4gJiBBbHQyPFVSST4gJiBNb25hZElPMjxVUkk+ICYgTW9uYWRUaHJvdzI8VVJJPiA9IHtcbiAgVVJJLFxuICBiaW1hcDogX2JpbWFwLFxuICBtYXBMZWZ0OiBfbWFwTGVmdCxcbiAgbWFwOiBfbWFwLFxuICBvZixcbiAgYXA6IF9hcCxcbiAgY2hhaW46IF9jaGFpbixcbiAgYWx0OiBfYWx0LFxuICBmcm9tSU8sXG4gIHRocm93RXJyb3Jcbn1cblxuLyoqXG4gKiBVc2UgW2BnZXRBcHBseVNlbWlncm91cGBdKC4vQXBwbHkudHMuaHRtbCNnZXRhcHBseXNlbWlncm91cCkgaW5zdGVhZC5cbiAqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4wLjBcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRBcHBseVNlbWlncm91cDogPEUsIEE+KFM6IFNlbWlncm91cDxBPikgPT4gU2VtaWdyb3VwPElPRWl0aGVyPEUsIEE+PiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZ2V0QXBwbHlTZW1pZ3JvdXBfKEFwcGx5UGFyKVxuXG4vKipcbiAqIFVzZSBbYGdldEFwcGxpY2F0aXZlTW9ub2lkYF0oLi9BcHBsaWNhdGl2ZS50cy5odG1sI2dldGFwcGxpY2F0aXZlbW9ub2lkKSBpbnN0ZWFkLlxuICpcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjAuMFxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IGdldEFwcGx5TW9ub2lkOiA8RSwgQT4oTTogTW9ub2lkPEE+KSA9PiBNb25vaWQ8SU9FaXRoZXI8RSwgQT4+ID1cbiAgLyojX19QVVJFX18qL1xuICBnZXRBcHBsaWNhdGl2ZU1vbm9pZChBcHBsaWNhdGl2ZVBhcilcblxuLyoqXG4gKiBVc2UgW2BnZXRBcHBseVNlbWlncm91cGBdKC4vQXBwbHkudHMuaHRtbCNnZXRhcHBseXNlbWlncm91cCkgaW5zdGVhZC5cbiAqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4wLjBcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRTZW1pZ3JvdXAgPSA8RSwgQT4oUzogU2VtaWdyb3VwPEE+KTogU2VtaWdyb3VwPElPRWl0aGVyPEUsIEE+PiA9PlxuICBnZXRBcHBseVNlbWlncm91cF8oSS5BcHBseSkoRS5nZXRTZW1pZ3JvdXAoUykpXG5cbi8qKlxuICogVXNlIFtgZ2V0QXBwbGljYXRpdmVJT1ZhbGlkYXRpb25gXSgjZ2V0YXBwbGljYXRpdmVpb3ZhbGlkYXRpb24pIGFuZCBbYGdldEFsdElPVmFsaWRhdGlvbmBdKCNnZXRhbHRpb3ZhbGlkYXRpb24pLlxuICpcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjAuMFxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldElPVmFsaWRhdGlvbjxFPihcbiAgU0U6IFNlbWlncm91cDxFPlxuKTogTW9uYWQyQzxVUkksIEU+ICYgQmlmdW5jdG9yMjxVUkk+ICYgQWx0MkM8VVJJLCBFPiAmIE1vbmFkSU8yQzxVUkksIEU+ICYgTW9uYWRUaHJvdzJDPFVSSSwgRT4ge1xuICBjb25zdCBhcHBsaWNhdGl2ZUlPVmFsaWRhdGlvbiA9IGdldEFwcGxpY2F0aXZlSU9WYWxpZGF0aW9uKFNFKVxuICBjb25zdCBhbHRJT1ZhbGlkYXRpb24gPSBnZXRBbHRJT1ZhbGlkYXRpb24oU0UpXG4gIHJldHVybiB7XG4gICAgVVJJLFxuICAgIF9FOiB1bmRlZmluZWQgYXMgYW55LFxuICAgIG1hcDogX21hcCxcbiAgICBhcDogYXBwbGljYXRpdmVJT1ZhbGlkYXRpb24uYXAsXG4gICAgb2YsXG4gICAgY2hhaW46IF9jaGFpbixcbiAgICBiaW1hcDogX2JpbWFwLFxuICAgIG1hcExlZnQ6IF9tYXBMZWZ0LFxuICAgIGFsdDogYWx0SU9WYWxpZGF0aW9uLmFsdCxcbiAgICBmcm9tSU8sXG4gICAgdGhyb3dFcnJvclxuICB9XG59XG4iXX0=