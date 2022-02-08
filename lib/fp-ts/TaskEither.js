"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromTaskOptionK = exports.fromTaskOption = exports.fromTaskK = exports.fromTask = exports.fromPredicate = exports.fromOptionK = exports.fromOption = exports.fromIOK = exports.fromIOEitherK = exports.fromIOEither = exports.fromIO = exports.fromEitherK = exports.fromEither = exports.foldW = exports.fold = exports.flattenW = exports.flatten = exports.flap = exports.filterOrElseW = exports.filterOrElse = exports.chainW = exports.chainTaskOptionK = exports.chainTaskK = exports.chainOptionK = exports.chainIOK = exports.chainIOEitherKW = exports.chainIOEitherK = exports.chainFirstW = exports.chainFirstTaskK = exports.chainFirstIOK = exports.chainFirst = exports.chainEitherKW = exports.chainEitherK = exports.chain = exports.bracket = exports.bindW = exports.bindTo = exports.bind = exports.bimap = exports.apW = exports.apSecond = exports.apSW = exports.apS = exports.apFirst = exports.ap = exports.altW = exports.alt = exports.URI = exports.Pointed = exports.MonadThrow = exports.MonadTask = exports.MonadIO = exports.Monad = exports.Functor = exports.FromTask = exports.FromIO = exports.FromEither = exports.Do = exports.Chain = exports.Bifunctor = exports.ApplySeq = exports.ApplyPar = exports.ApplicativeSeq = exports.ApplicativePar = exports.ApT = exports.Alt = void 0;
exports.getAltTaskValidation = getAltTaskValidation;
exports.getApplicativeTaskValidation = getApplicativeTaskValidation;
exports.getCompactable = exports.getApplySemigroup = exports.getApplyMonoid = void 0;
exports.getFilterable = getFilterable;
exports.getSemigroup = exports.getOrElseW = exports.getOrElse = void 0;
exports.getTaskValidation = getTaskValidation;
exports.taskEitherSeq = exports.taskEither = exports.swap = exports.sequenceSeqArray = exports.sequenceArray = exports.rightTask = exports.rightIO = exports.right = exports.orLeft = exports.orElseW = exports.orElseFirstW = exports.orElseFirst = exports.orElse = exports.of = exports.matchW = exports.matchEW = exports.matchE = exports.match = exports.mapLeft = exports.map = exports.leftTask = exports.leftIO = exports.left = void 0;
exports.taskify = taskify;
exports.tryCatchK = exports.tryCatch = exports.traverseSeqArrayWithIndex = exports.traverseSeqArray = exports.traverseReadonlyNonEmptyArrayWithIndexSeq = exports.traverseReadonlyNonEmptyArrayWithIndex = exports.traverseReadonlyArrayWithIndexSeq = exports.traverseReadonlyArrayWithIndex = exports.traverseArrayWithIndex = exports.traverseArray = exports.toUnion = exports.throwError = void 0;

var _Applicative = require("./Applicative");

var _Apply = require("./Apply");

var _Chain = require("./Chain");

var _Compactable = require("./Compactable");

var E = _interopRequireWildcard(require("./Either"));

var ET = _interopRequireWildcard(require("./EitherT"));

var _Filterable = require("./Filterable");

var _FromEither = require("./FromEither");

var _FromIO = require("./FromIO");

var _FromTask = require("./FromTask");

var _function = require("./function");

var _Functor = require("./Functor");

var _ = _interopRequireWildcard(require("./internal"));

var T = _interopRequireWildcard(require("./Task"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * ```ts
 * interface TaskEither<E, A> extends Task<Either<E, A>> {}
 * ```
 *
 * `TaskEither<E, A>` represents an asynchronous computation that either yields a value of type `A` or fails yielding an
 * error of type `E`. If you want to represent an asynchronous computation that never fails, please see `Task`.
 *
 * @since 2.0.0
 */
// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------
var Either = E.Either;
var Task = T.Task;
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
var left = /*#__PURE__*/ET.left(T.Pointed);
/**
 * @category constructors
 * @since 2.0.0
 */

exports.left = left;
var right = /*#__PURE__*/ET.right(T.Pointed);
/**
 * @category constructors
 * @since 2.0.0
 */

exports.right = right;
var rightTask = /*#__PURE__*/ET.rightF(T.Functor);
/**
 * @category constructors
 * @since 2.0.0
 */

exports.rightTask = rightTask;
var leftTask = /*#__PURE__*/ET.leftF(T.Functor);
/**
 * @category constructors
 * @since 2.0.0
 */

exports.leftTask = leftTask;
var rightIO = /*#__PURE__*/(0, _function.flow)(T.fromIO, rightTask);
/**
 * @category constructors
 * @since 2.0.0
 */

exports.rightIO = rightIO;
var leftIO = /*#__PURE__*/(0, _function.flow)(T.fromIO, leftTask); // -------------------------------------------------------------------------------------
// natural transformations
// -------------------------------------------------------------------------------------

/**
 * @category natural transformations
 * @since 2.7.0
 */

exports.leftIO = leftIO;
var fromIO = rightIO;
/**
 * @category natural transformations
 * @since 2.7.0
 */

exports.fromIO = fromIO;
var fromTask = rightTask;
/**
 * @category natural transformations
 * @since 2.0.0
 */

exports.fromTask = fromTask;
var fromEither = T.of;
/**
 * @category natural transformations
 * @since 2.0.0
 */

exports.fromEither = fromEither;
var fromIOEither = T.fromIO;
/**
 * @category natural transformations
 * @since 2.11.0
 */

exports.fromIOEither = fromIOEither;

var fromTaskOption = function fromTaskOption(onNone) {
  return T.map(E.fromOption(onNone));
}; // -------------------------------------------------------------------------------------
// destructors
// -------------------------------------------------------------------------------------

/**
 * @category destructors
 * @since 2.10.0
 */


exports.fromTaskOption = fromTaskOption;
var match = /*#__PURE__*/ET.match(T.Functor);
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
var matchE = /*#__PURE__*/ET.matchE(T.Monad);
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
var getOrElse = /*#__PURE__*/ET.getOrElse(T.Monad);
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
 * Transforms a `Promise` that may reject to a `Promise` that never rejects and returns an `Either` instead.
 *
 * Note: `f` should never `throw` errors, they are not caught.
 *
 * See also [`tryCatchK`](#trycatchk).
 *
 * @example
 * import { left, right } from 'fp-ts/Either'
 * import { tryCatch } from 'fp-ts/TaskEither'
 *
 * tryCatch(() => Promise.resolve(1), String)().then(result => {
 *   assert.deepStrictEqual(result, right(1))
 * })
 * tryCatch(() => Promise.reject('error'), String)().then(result => {
 *   assert.deepStrictEqual(result, left('error'))
 * })
 *
 * @category interop
 * @since 2.0.0
 */

exports.getOrElseW = getOrElseW;

var tryCatch = function tryCatch(f, onRejected) {
  return function () {
    return f().then(_.right, function (reason) {
      return _.left(onRejected(reason));
    });
  };
};
/**
 * Converts a function returning a `Promise` to one returning a `TaskEither`.
 *
 * @category interop
 * @since 2.5.0
 */


exports.tryCatch = tryCatch;

var tryCatchK = function tryCatchK(f, onRejected) {
  return function () {
    for (var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++) {
      a[_key] = arguments[_key];
    }

    return tryCatch(function () {
      return f.apply(void 0, a);
    }, onRejected);
  };
};
/**
 * @category interop
 * @since 2.10.0
 */


exports.tryCatchK = tryCatchK;
var toUnion = /*#__PURE__*/ET.toUnion(T.Functor); // -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------

/**
 * Returns `ma` if is a `Right` or the value returned by `onLeft` otherwise.
 *
 * See also [alt](#alt).
 *
 * @example
 * import * as E from 'fp-ts/Either'
 * import { pipe } from 'fp-ts/function'
 * import * as TE from 'fp-ts/TaskEither'
 *
 * async function test() {
 *   const errorHandler = TE.orElse((error: string) => TE.right(`recovering from ${error}...`))
 *   assert.deepStrictEqual(await pipe(TE.right('ok'), errorHandler)(), E.right('ok'))
 *   assert.deepStrictEqual(await pipe(TE.left('ko'), errorHandler)(), E.right('recovering from ko...'))
 * }
 *
 * test()
 *
 * @category combinators
 * @since 2.0.0
 */

exports.toUnion = toUnion;
var orElse = /*#__PURE__*/ET.orElse(T.Monad);
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
var orElseFirst = /*#__PURE__*/ET.orElseFirst(T.Monad);
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
var orLeft = /*#__PURE__*/ET.orLeft(T.Monad);
/**
 * @category combinators
 * @since 2.0.0
 */

exports.orLeft = orLeft;
var swap = /*#__PURE__*/ET.swap(T.Functor);
/**
 * @category combinators
 * @since 2.11.0
 */

exports.swap = swap;

var fromTaskOptionK = function fromTaskOptionK(onNone) {
  var from = fromTaskOption(onNone);
  return function (f) {
    return (0, _function.flow)(f, from);
  };
};
/**
 * @category combinators
 * @since 2.11.0
 */


exports.fromTaskOptionK = fromTaskOptionK;

var chainTaskOptionK = function chainTaskOptionK(onNone) {
  return (0, _function.flow)(fromTaskOptionK(onNone), chain);
};
/**
 * @category combinators
 * @since 2.4.0
 */


exports.chainTaskOptionK = chainTaskOptionK;

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
var chainIOEitherK = chainIOEitherKW; // -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------

exports.chainIOEitherK = chainIOEitherK;

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


var map = /*#__PURE__*/ET.map(T.Functor);
/**
 * Map a pair of functions over the two type arguments of the bifunctor.
 *
 * @category Bifunctor
 * @since 2.0.0
 */

exports.map = map;
var bimap = /*#__PURE__*/ET.bimap(T.Functor);
/**
 * Map a function over the first type argument of a bifunctor.
 *
 * @category Bifunctor
 * @since 2.0.0
 */

exports.bimap = bimap;
var mapLeft = /*#__PURE__*/ET.mapLeft(T.Functor);
/**
 * Apply a function to an argument under a type constructor.
 *
 * @category Apply
 * @since 2.0.0
 */

exports.mapLeft = mapLeft;
var ap = /*#__PURE__*/ET.ap(T.ApplyPar);
/**
 * Less strict version of [`ap`](#ap).
 *
 * @category Apply
 * @since 2.8.0
 */

exports.ap = ap;
var apW = ap;
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation.
 *
 * @category Monad
 * @since 2.0.0
 */

exports.apW = apW;
var chain = /*#__PURE__*/ET.chain(T.Monad);
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
 * In case of `TaskEither` returns `fa` if is a `Right` or the value returned by `that` otherwise.
 *
 * See also [orElse](#orelse).
 *
 * @example
 * import * as E from 'fp-ts/Either'
 * import { pipe } from 'fp-ts/function'
 * import * as TE from 'fp-ts/TaskEither'
 *
 * async function test() {
 *   assert.deepStrictEqual(
 *     await pipe(
 *       TE.right(1),
 *       TE.alt(() => TE.right(2))
 *     )(),
 *     E.right(1)
 *   )
 *   assert.deepStrictEqual(
 *     await pipe(
 *       TE.left('a'),
 *       TE.alt(() => TE.right(2))
 *     )(),
 *     E.right(2)
 *   )
 *   assert.deepStrictEqual(
 *     await pipe(
 *       TE.left('a'),
 *       TE.alt(() => TE.left('b'))
 *     )(),
 *     E.left('b')
 *   )
 * }
 *
 * test()
 *
 * @category Alt
 * @since 2.0.0
 */

exports.flatten = flatten;
var alt = /*#__PURE__*/ET.alt(T.Monad);
/**
 * Less strict version of [`alt`](#alt).
 *
 * @category Alt
 * @since 2.9.0
 */

exports.alt = alt;
var altW = alt;
/**
 * @category Pointed
 * @since 2.0.0
 */

exports.altW = altW;
var of = right;
/**
 * @category MonadTask
 * @since 2.7.0
 */

exports.of = of;
var throwError = left; // -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------

/**
 * @category instances
 * @since 2.0.0
 */

exports.throwError = throwError;
var URI = 'TaskEither';
/**
 * @category instances
 * @since 2.0.0
 */

exports.URI = URI;

/**
 * @category instances
 * @since 2.7.0
 */
function getApplicativeTaskValidation(A, S) {
  var _ap = (0, _Apply.ap)(A, E.getApplicativeValidation(S));

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


function getAltTaskValidation(S) {
  var _alt2 = ET.altValidation(T.Monad, S);

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
    compact: (0, _Compactable.compact)(T.Functor, C),
    separate: (0, _Compactable.separate)(T.Functor, C, E.Functor)
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

  var _filter = (0, _Filterable.filter)(T.Functor, F);

  var _filterMap = (0, _Filterable.filterMap)(T.Functor, F);

  var _partition = (0, _Filterable.partition)(T.Functor, F);

  var _partitionMap = (0, _Filterable.partitionMap)(T.Functor, F);

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
 * @since 2.10.0
 */

exports.Alt = Alt;
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
 * Convert a node style callback function to one returning a `TaskEither`
 *
 * **Note**. If the function `f` admits multiple overloadings, `taskify` will pick last one. If you want a different
 * behaviour, add an explicit type annotation
 *
 * ```ts
 * // readFile admits multiple overloadings
 *
 * // const readFile: (a: string) => TaskEither<NodeJS.ErrnoException, Buffer>
 * const readFile = taskify(fs.readFile)
 *
 * const readFile2: (filename: string, encoding: string) => TaskEither<NodeJS.ErrnoException, Buffer> = taskify(
 *   fs.readFile
 * )
 * ```
 *
 * @example
 * import { taskify } from 'fp-ts/TaskEither'
 * import * as fs from 'fs'
 *
 * // const stat: (a: string | Buffer) => TaskEither<NodeJS.ErrnoException, fs.Stats>
 * const stat = taskify(fs.stat)
 * assert.strictEqual(stat.length, 0)
 *
 * @since 2.0.0
 */

exports.chainFirstTaskK = chainFirstTaskK;

function taskify(f) {
  return function () {
    var args = Array.prototype.slice.call(arguments);
    return function () {
      return new Promise(function (resolve) {
        var cbResolver = function cbResolver(e, r) {
          return e != null ? resolve(_.left(e)) : resolve(_.right(r));
        };

        f.apply(null, args.concat(cbResolver));
      });
    };
  };
}
/**
 * Make sure that a resource is cleaned up in the event of an exception (\*). The release action is called regardless of
 * whether the body action throws (\*) or returns.
 *
 * (\*) i.e. returns a `Left`
 *
 * @since 2.0.0
 */


var bracket = function bracket(acquire, use, release) {
  return (0, _function.pipe)(acquire, chain(function (a) {
    return (0, _function.pipe)(use(a), T.chain(function (e) {
      return (0, _function.pipe)(release(a, e), chain(function () {
        return T.of(e);
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
  return (0, _function.flow)(T.traverseReadonlyNonEmptyArrayWithIndex(f), T.map(E.traverseReadonlyNonEmptyArrayWithIndex(_function.SK)));
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
 * Equivalent to `ReadonlyArray#traverseWithIndex(ApplicativeSeq)`.
 *
 * @since 2.11.0
 */


exports.traverseReadonlyArrayWithIndex = traverseReadonlyArrayWithIndex;

var traverseReadonlyNonEmptyArrayWithIndexSeq = function traverseReadonlyNonEmptyArrayWithIndexSeq(f) {
  return function (as) {
    return function () {
      return _.tail(as).reduce(function (acc, a, i) {
        return acc.then(function (ebs) {
          return _.isLeft(ebs) ? acc : f(i + 1, a)().then(function (eb) {
            if (_.isLeft(eb)) {
              return eb;
            }

            ebs.right.push(eb.right);
            return ebs;
          });
        });
      }, f(0, _.head(as))().then(E.map(_.singleton)));
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
 * Use small, specific instances instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */

exports.sequenceSeqArray = sequenceSeqArray;
var taskEither = {
  URI: URI,
  bimap: _bimap,
  mapLeft: _mapLeft,
  map: _map,
  of: of,
  ap: _apPar,
  chain: _chain,
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

exports.taskEither = taskEither;
var taskEitherSeq = {
  URI: URI,
  bimap: _bimap,
  mapLeft: _mapLeft,
  map: _map,
  of: of,
  ap: _apSeq,
  chain: _chain,
  alt: _alt,
  fromIO: fromIO,
  fromTask: fromTask,
  throwError: throwError
};
/**
 * Use [`getApplySemigroup`](./Apply.ts.html#getapplysemigroup) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */

exports.taskEitherSeq = taskEitherSeq;
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
  return (0, _Apply.getApplySemigroup)(T.ApplySeq)(E.getSemigroup(S));
};
/**
 * Use [`getApplicativeTaskValidation`](#getapplicativetaskvalidation) and [`getAltTaskValidation`](#getalttaskvalidation) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */


exports.getSemigroup = getSemigroup;

function getTaskValidation(SE) {
  var applicativeTaskValidation = getApplicativeTaskValidation(T.ApplicativePar, SE);
  var altTaskValidation = getAltTaskValidation(SE);
  return {
    URI: URI,
    _E: undefined,
    map: _map,
    ap: applicativeTaskValidation.ap,
    of: of,
    chain: _chain,
    bimap: _bimap,
    mapLeft: _mapLeft,
    alt: altTaskValidation.alt,
    fromIO: fromIO,
    fromTask: fromTask,
    throwError: throwError
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mcC10cy9UYXNrRWl0aGVyLnRzIl0sIm5hbWVzIjpbIkVpdGhlciIsIkUiLCJUYXNrIiwiVCIsImxlZnQiLCJFVCIsIlBvaW50ZWQiLCJyaWdodCIsInJpZ2h0VGFzayIsInJpZ2h0RiIsIkZ1bmN0b3IiLCJsZWZ0VGFzayIsImxlZnRGIiwicmlnaHRJTyIsImZyb21JTyIsImxlZnRJTyIsImZyb21UYXNrIiwiZnJvbUVpdGhlciIsIm9mIiwiZnJvbUlPRWl0aGVyIiwiZnJvbVRhc2tPcHRpb24iLCJvbk5vbmUiLCJtYXAiLCJmcm9tT3B0aW9uIiwibWF0Y2giLCJtYXRjaFciLCJtYXRjaEUiLCJNb25hZCIsImZvbGQiLCJtYXRjaEVXIiwiZm9sZFciLCJnZXRPckVsc2UiLCJnZXRPckVsc2VXIiwidHJ5Q2F0Y2giLCJmIiwib25SZWplY3RlZCIsInRoZW4iLCJfIiwicmVhc29uIiwidHJ5Q2F0Y2hLIiwiYSIsInRvVW5pb24iLCJvckVsc2UiLCJvckVsc2VXIiwib3JFbHNlRmlyc3QiLCJvckVsc2VGaXJzdFciLCJvckxlZnQiLCJzd2FwIiwiZnJvbVRhc2tPcHRpb25LIiwiZnJvbSIsImNoYWluVGFza09wdGlvbksiLCJjaGFpbiIsImZyb21JT0VpdGhlcksiLCJjaGFpbklPRWl0aGVyS1ciLCJjaGFpblciLCJjaGFpbklPRWl0aGVySyIsIl9tYXAiLCJmYSIsIl9hcFBhciIsImZhYiIsImFwIiwiX2FwU2VxIiwiX2NoYWluIiwibWEiLCJfYmltYXAiLCJnIiwiYmltYXAiLCJfbWFwTGVmdCIsIm1hcExlZnQiLCJfYWx0IiwidGhhdCIsImFsdCIsIkFwcGx5UGFyIiwiYXBXIiwiZmxhdHRlblciLCJpZGVudGl0eSIsImZsYXR0ZW4iLCJhbHRXIiwidGhyb3dFcnJvciIsIlVSSSIsImdldEFwcGxpY2F0aXZlVGFza1ZhbGlkYXRpb24iLCJBIiwiUyIsImdldEFwcGxpY2F0aXZlVmFsaWRhdGlvbiIsIl9FIiwidW5kZWZpbmVkIiwiZ2V0QWx0VGFza1ZhbGlkYXRpb24iLCJhbHRWYWxpZGF0aW9uIiwiZ2V0Q29tcGFjdGFibGUiLCJNIiwiQyIsImNvbXBhY3QiLCJzZXBhcmF0ZSIsImdldEZpbHRlcmFibGUiLCJGIiwiZmlsdGVyIiwiZmlsdGVyTWFwIiwicGFydGl0aW9uIiwicGFydGl0aW9uTWFwIiwicHJlZGljYXRlIiwiZmxhcCIsImFwRmlyc3QiLCJhcFNlY29uZCIsIkFwcGxpY2F0aXZlUGFyIiwiQXBwbHlTZXEiLCJBcHBsaWNhdGl2ZVNlcSIsIkNoYWluIiwiTW9uYWRJTyIsIk1vbmFkVGFzayIsIk1vbmFkVGhyb3ciLCJjaGFpbkZpcnN0IiwiY2hhaW5GaXJzdFciLCJCaWZ1bmN0b3IiLCJBbHQiLCJGcm9tRWl0aGVyIiwiZnJvbU9wdGlvbksiLCJjaGFpbk9wdGlvbksiLCJjaGFpbkVpdGhlcksiLCJjaGFpbkVpdGhlcktXIiwiZnJvbVByZWRpY2F0ZSIsImZpbHRlck9yRWxzZSIsImZpbHRlck9yRWxzZVciLCJmcm9tRWl0aGVySyIsIkZyb21JTyIsImZyb21JT0siLCJjaGFpbklPSyIsImNoYWluRmlyc3RJT0siLCJGcm9tVGFzayIsImZyb21UYXNrSyIsImNoYWluVGFza0siLCJjaGFpbkZpcnN0VGFza0siLCJ0YXNraWZ5IiwiYXJncyIsIkFycmF5IiwicHJvdG90eXBlIiwic2xpY2UiLCJjYWxsIiwiYXJndW1lbnRzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJjYlJlc29sdmVyIiwiZSIsInIiLCJhcHBseSIsImNvbmNhdCIsImJyYWNrZXQiLCJhY3F1aXJlIiwidXNlIiwicmVsZWFzZSIsIkRvIiwiZW1wdHlSZWNvcmQiLCJiaW5kVG8iLCJiaW5kIiwiYmluZFciLCJhcFMiLCJhcFNXIiwiQXBUIiwiZW1wdHlSZWFkb25seUFycmF5IiwidHJhdmVyc2VSZWFkb25seU5vbkVtcHR5QXJyYXlXaXRoSW5kZXgiLCJTSyIsInRyYXZlcnNlUmVhZG9ubHlBcnJheVdpdGhJbmRleCIsImFzIiwiaXNOb25FbXB0eSIsInRyYXZlcnNlUmVhZG9ubHlOb25FbXB0eUFycmF5V2l0aEluZGV4U2VxIiwidGFpbCIsInJlZHVjZSIsImFjYyIsImkiLCJlYnMiLCJpc0xlZnQiLCJlYiIsInB1c2giLCJoZWFkIiwic2luZ2xldG9uIiwidHJhdmVyc2VSZWFkb25seUFycmF5V2l0aEluZGV4U2VxIiwidHJhdmVyc2VBcnJheVdpdGhJbmRleCIsInRyYXZlcnNlQXJyYXkiLCJzZXF1ZW5jZUFycmF5IiwidHJhdmVyc2VTZXFBcnJheVdpdGhJbmRleCIsInRyYXZlcnNlU2VxQXJyYXkiLCJzZXF1ZW5jZVNlcUFycmF5IiwidGFza0VpdGhlciIsInRhc2tFaXRoZXJTZXEiLCJnZXRBcHBseVNlbWlncm91cCIsImdldEFwcGx5TW9ub2lkIiwiZ2V0U2VtaWdyb3VwIiwiZ2V0VGFza1ZhbGlkYXRpb24iLCJTRSIsImFwcGxpY2F0aXZlVGFza1ZhbGlkYXRpb24iLCJhbHRUYXNrVmFsaWRhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV0E7O0FBQ0E7O0FBVUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBT0E7O0FBVUE7O0FBQ0E7O0FBTUE7O0FBQ0E7O0FBQ0E7O0FBZUE7Ozs7OztBQW5FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTZEQTtBQUNBO0FBQ0E7SUFFT0EsTSxHQUFTQyxDLENBQUVELE07SUFDWEUsSSxHQUFPQyxDLENBQUVELEk7QUFFaEI7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sSUFBTUUsSUFBc0QsR0FDakUsYUFDQUMsRUFBRSxDQUFDRCxJQUFILENBQVFELENBQUMsQ0FBQ0csT0FBVixDQUZLO0FBSVA7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLElBQU1DLEtBQXVELEdBQ2xFLGFBQ0FGLEVBQUUsQ0FBQ0UsS0FBSCxDQUFTSixDQUFDLENBQUNHLE9BQVgsQ0FGSztBQUlQO0FBQ0E7QUFDQTtBQUNB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NEIsQ0FBQzdFLENBQUMsQ0FBQ29HLGNBQUgsRUFBbUJvRixFQUFuQixDQUE5RDtBQUNBLE1BQU1FLGlCQUFpQixHQUFHdkcsb0JBQW9CLENBQUNxRyxFQUFELENBQTlDO0FBQ0EsU0FBTztBQUNMNUcsSUFBQUEsR0FBRyxFQUFIQSxHQURLO0FBRUxLLElBQUFBLEVBQUUsRUFBRUMsU0FGQztBQUdML0QsSUFBQUEsR0FBRyxFQUFFa0MsSUFIQTtBQUlMSSxJQUFBQSxFQUFFLEVBQUVnSSx5QkFBeUIsQ0FBQ2hJLEVBSnpCO0FBS0wxQyxJQUFBQSxFQUFFLEVBQUZBLEVBTEs7QUFNTGlDLElBQUFBLEtBQUssRUFBRVcsTUFORjtBQU9MSSxJQUFBQSxLQUFLLEVBQUVGLE1BUEY7QUFRTEksSUFBQUEsT0FBTyxFQUFFRCxRQVJKO0FBU0xJLElBQUFBLEdBQUcsRUFBRXNILGlCQUFpQixDQUFDdEgsR0FUbEI7QUFVTHpELElBQUFBLE1BQU0sRUFBTkEsTUFWSztBQVdMRSxJQUFBQSxRQUFRLEVBQVJBLFFBWEs7QUFZTDhELElBQUFBLFVBQVUsRUFBVkE7QUFaSyxHQUFQO0FBY0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIGBgYHRzXG4gKiBpbnRlcmZhY2UgVGFza0VpdGhlcjxFLCBBPiBleHRlbmRzIFRhc2s8RWl0aGVyPEUsIEE+PiB7fVxuICogYGBgXG4gKlxuICogYFRhc2tFaXRoZXI8RSwgQT5gIHJlcHJlc2VudHMgYW4gYXN5bmNocm9ub3VzIGNvbXB1dGF0aW9uIHRoYXQgZWl0aGVyIHlpZWxkcyBhIHZhbHVlIG9mIHR5cGUgYEFgIG9yIGZhaWxzIHlpZWxkaW5nIGFuXG4gKiBlcnJvciBvZiB0eXBlIGBFYC4gSWYgeW91IHdhbnQgdG8gcmVwcmVzZW50IGFuIGFzeW5jaHJvbm91cyBjb21wdXRhdGlvbiB0aGF0IG5ldmVyIGZhaWxzLCBwbGVhc2Ugc2VlIGBUYXNrYC5cbiAqXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuaW1wb3J0IHsgQWx0MiwgQWx0MkMgfSBmcm9tICcuL0FsdCdcbmltcG9ydCB7IEFwcGxpY2F0aXZlMiwgQXBwbGljYXRpdmUyQywgZ2V0QXBwbGljYXRpdmVNb25vaWQgfSBmcm9tICcuL0FwcGxpY2F0aXZlJ1xuaW1wb3J0IHtcbiAgYXAgYXMgYXBfLFxuICBhcEZpcnN0IGFzIGFwRmlyc3RfLFxuICBBcHBseTEsXG4gIEFwcGx5MixcbiAgYXBTIGFzIGFwU18sXG4gIGFwU2Vjb25kIGFzIGFwU2Vjb25kXyxcbiAgZ2V0QXBwbHlTZW1pZ3JvdXAgYXMgZ2V0QXBwbHlTZW1pZ3JvdXBfXG59IGZyb20gJy4vQXBwbHknXG5pbXBvcnQgeyBCaWZ1bmN0b3IyIH0gZnJvbSAnLi9CaWZ1bmN0b3InXG5pbXBvcnQgeyBiaW5kIGFzIGJpbmRfLCBDaGFpbjIsIGNoYWluRmlyc3QgYXMgY2hhaW5GaXJzdF8gfSBmcm9tICcuL0NoYWluJ1xuaW1wb3J0IHsgY29tcGFjdCBhcyBjb21wYWN0XywgQ29tcGFjdGFibGUyQywgc2VwYXJhdGUgYXMgc2VwYXJhdGVfIH0gZnJvbSAnLi9Db21wYWN0YWJsZSdcbmltcG9ydCAqIGFzIEUgZnJvbSAnLi9FaXRoZXInXG5pbXBvcnQgKiBhcyBFVCBmcm9tICcuL0VpdGhlclQnXG5pbXBvcnQge1xuICBmaWx0ZXIgYXMgZmlsdGVyXyxcbiAgRmlsdGVyYWJsZTJDLFxuICBmaWx0ZXJNYXAgYXMgZmlsdGVyTWFwXyxcbiAgcGFydGl0aW9uIGFzIHBhcnRpdGlvbl8sXG4gIHBhcnRpdGlvbk1hcCBhcyBwYXJ0aXRpb25NYXBfXG59IGZyb20gJy4vRmlsdGVyYWJsZSdcbmltcG9ydCB7XG4gIGNoYWluRWl0aGVySyBhcyBjaGFpbkVpdGhlcktfLFxuICBjaGFpbk9wdGlvbksgYXMgY2hhaW5PcHRpb25LXyxcbiAgZmlsdGVyT3JFbHNlIGFzIGZpbHRlck9yRWxzZV8sXG4gIEZyb21FaXRoZXIyLFxuICBmcm9tRWl0aGVySyBhcyBmcm9tRWl0aGVyS18sXG4gIGZyb21PcHRpb24gYXMgZnJvbU9wdGlvbl8sXG4gIGZyb21PcHRpb25LIGFzIGZyb21PcHRpb25LXyxcbiAgZnJvbVByZWRpY2F0ZSBhcyBmcm9tUHJlZGljYXRlX1xufSBmcm9tICcuL0Zyb21FaXRoZXInXG5pbXBvcnQgeyBjaGFpbkZpcnN0SU9LIGFzIGNoYWluRmlyc3RJT0tfLCBjaGFpbklPSyBhcyBjaGFpbklPS18sIEZyb21JTzIsIGZyb21JT0sgYXMgZnJvbUlPS18gfSBmcm9tICcuL0Zyb21JTydcbmltcG9ydCB7XG4gIGNoYWluRmlyc3RUYXNrSyBhcyBjaGFpbkZpcnN0VGFza0tfLFxuICBjaGFpblRhc2tLIGFzIGNoYWluVGFza0tfLFxuICBGcm9tVGFzazIsXG4gIGZyb21UYXNrSyBhcyBmcm9tVGFza0tfXG59IGZyb20gJy4vRnJvbVRhc2snXG5pbXBvcnQgeyBmbG93LCBpZGVudGl0eSwgTGF6eSwgcGlwZSwgU0sgfSBmcm9tICcuL2Z1bmN0aW9uJ1xuaW1wb3J0IHsgYmluZFRvIGFzIGJpbmRUb18sIGZsYXAgYXMgZmxhcF8sIEZ1bmN0b3IyIH0gZnJvbSAnLi9GdW5jdG9yJ1xuaW1wb3J0ICogYXMgXyBmcm9tICcuL2ludGVybmFsJ1xuaW1wb3J0IHsgSU8gfSBmcm9tICcuL0lPJ1xuaW1wb3J0IHsgSU9FaXRoZXIsIFVSSSBhcyBJRVVSSSB9IGZyb20gJy4vSU9FaXRoZXInXG5pbXBvcnQgeyBNb25hZDIsIE1vbmFkMkMgfSBmcm9tICcuL01vbmFkJ1xuaW1wb3J0IHsgTW9uYWRJTzIgfSBmcm9tICcuL01vbmFkSU8nXG5pbXBvcnQgeyBNb25hZFRhc2syLCBNb25hZFRhc2syQyB9IGZyb20gJy4vTW9uYWRUYXNrJ1xuaW1wb3J0IHsgTW9uYWRUaHJvdzIsIE1vbmFkVGhyb3cyQyB9IGZyb20gJy4vTW9uYWRUaHJvdydcbmltcG9ydCB7IE1vbm9pZCB9IGZyb20gJy4vTW9ub2lkJ1xuaW1wb3J0IHsgTmF0dXJhbFRyYW5zZm9ybWF0aW9uMTJDLCBOYXR1cmFsVHJhbnNmb3JtYXRpb24yMiB9IGZyb20gJy4vTmF0dXJhbFRyYW5zZm9ybWF0aW9uJ1xuaW1wb3J0IHsgTm9uRW1wdHlBcnJheSB9IGZyb20gJy4vTm9uRW1wdHlBcnJheSdcbmltcG9ydCB7IFBvaW50ZWQyIH0gZnJvbSAnLi9Qb2ludGVkJ1xuaW1wb3J0IHsgUHJlZGljYXRlIH0gZnJvbSAnLi9QcmVkaWNhdGUnXG5pbXBvcnQgeyBSZWFkb25seU5vbkVtcHR5QXJyYXkgfSBmcm9tICcuL1JlYWRvbmx5Tm9uRW1wdHlBcnJheSdcbmltcG9ydCB7IFJlZmluZW1lbnQgfSBmcm9tICcuL1JlZmluZW1lbnQnXG5pbXBvcnQgeyBTZW1pZ3JvdXAgfSBmcm9tICcuL1NlbWlncm91cCdcbmltcG9ydCAqIGFzIFQgZnJvbSAnLi9UYXNrJ1xuaW1wb3J0IHsgVGFza09wdGlvbiwgVVJJIGFzIFRPVVJJIH0gZnJvbSAnLi9UYXNrT3B0aW9uJ1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBtb2RlbFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgRWl0aGVyID0gRS5FaXRoZXJcbmltcG9ydCBUYXNrID0gVC5UYXNrXG5cbi8qKlxuICogQGNhdGVnb3J5IG1vZGVsXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBUYXNrRWl0aGVyPEUsIEE+IGV4dGVuZHMgVGFzazxFaXRoZXI8RSwgQT4+IHt9XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGNvbnN0cnVjdG9yc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb25zdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgbGVmdDogPEUgPSBuZXZlciwgQSA9IG5ldmVyPihlOiBFKSA9PiBUYXNrRWl0aGVyPEUsIEE+ID1cbiAgLyojX19QVVJFX18qL1xuICBFVC5sZWZ0KFQuUG9pbnRlZClcblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29uc3RydWN0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHJpZ2h0OiA8RSA9IG5ldmVyLCBBID0gbmV2ZXI+KGE6IEEpID0+IFRhc2tFaXRoZXI8RSwgQT4gPVxuICAvKiNfX1BVUkVfXyovXG4gIEVULnJpZ2h0KFQuUG9pbnRlZClcblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29uc3RydWN0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHJpZ2h0VGFzazogPEUgPSBuZXZlciwgQSA9IG5ldmVyPihtYTogVGFzazxBPikgPT4gVGFza0VpdGhlcjxFLCBBPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgRVQucmlnaHRGKFQuRnVuY3RvcilcblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29uc3RydWN0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGxlZnRUYXNrOiA8RSA9IG5ldmVyLCBBID0gbmV2ZXI+KG1lOiBUYXNrPEU+KSA9PiBUYXNrRWl0aGVyPEUsIEE+ID1cbiAgLyojX19QVVJFX18qL1xuICBFVC5sZWZ0RihULkZ1bmN0b3IpXG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbnN0cnVjdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCByaWdodElPOiA8RSA9IG5ldmVyLCBBID0gbmV2ZXI+KG1hOiBJTzxBPikgPT4gVGFza0VpdGhlcjxFLCBBPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZmxvdyhULmZyb21JTywgcmlnaHRUYXNrKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb25zdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgbGVmdElPOiA8RSA9IG5ldmVyLCBBID0gbmV2ZXI+KG1lOiBJTzxFPikgPT4gVGFza0VpdGhlcjxFLCBBPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZmxvdyhULmZyb21JTywgbGVmdFRhc2spXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIG5hdHVyYWwgdHJhbnNmb3JtYXRpb25zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQGNhdGVnb3J5IG5hdHVyYWwgdHJhbnNmb3JtYXRpb25zXG4gKiBAc2luY2UgMi43LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZyb21JTzogRnJvbUlPMjxVUkk+Wydmcm9tSU8nXSA9IHJpZ2h0SU9cblxuLyoqXG4gKiBAY2F0ZWdvcnkgbmF0dXJhbCB0cmFuc2Zvcm1hdGlvbnNcbiAqIEBzaW5jZSAyLjcuMFxuICovXG5leHBvcnQgY29uc3QgZnJvbVRhc2s6IEZyb21UYXNrMjxVUkk+Wydmcm9tVGFzayddID0gcmlnaHRUYXNrXG5cbi8qKlxuICogQGNhdGVnb3J5IG5hdHVyYWwgdHJhbnNmb3JtYXRpb25zXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZyb21FaXRoZXI6IEZyb21FaXRoZXIyPFVSST5bJ2Zyb21FaXRoZXInXSA9IFQub2ZcblxuLyoqXG4gKiBAY2F0ZWdvcnkgbmF0dXJhbCB0cmFuc2Zvcm1hdGlvbnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgZnJvbUlPRWl0aGVyOiBOYXR1cmFsVHJhbnNmb3JtYXRpb24yMjxJRVVSSSwgVVJJPiA9IFQuZnJvbUlPXG5cbi8qKlxuICogQGNhdGVnb3J5IG5hdHVyYWwgdHJhbnNmb3JtYXRpb25zXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBmcm9tVGFza09wdGlvbjogPEU+KG9uTm9uZTogTGF6eTxFPikgPT4gTmF0dXJhbFRyYW5zZm9ybWF0aW9uMTJDPFRPVVJJLCBVUkksIEU+ID0gKG9uTm9uZSkgPT5cbiAgVC5tYXAoRS5mcm9tT3B0aW9uKG9uTm9uZSkpXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGRlc3RydWN0b3JzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQGNhdGVnb3J5IGRlc3RydWN0b3JzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBtYXRjaDogPEUsIEIsIEE+KG9uTGVmdDogKGU6IEUpID0+IEIsIG9uUmlnaHQ6IChhOiBBKSA9PiBCKSA9PiAobWE6IFRhc2tFaXRoZXI8RSwgQT4pID0+IFRhc2s8Qj4gPVxuICAvKiNfX1BVUkVfXyovXG4gIEVULm1hdGNoKFQuRnVuY3RvcilcblxuLyoqXG4gKiBMZXNzIHN0cmljdCB2ZXJzaW9uIG9mIFtgbWF0Y2hgXSgjbWF0Y2gpLlxuICpcbiAqIEBjYXRlZ29yeSBkZXN0cnVjdG9yc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgbWF0Y2hXOiA8RSwgQiwgQSwgQz4oXG4gIG9uTGVmdDogKGU6IEUpID0+IEIsXG4gIG9uUmlnaHQ6IChhOiBBKSA9PiBDXG4pID0+IChtYTogVGFza0VpdGhlcjxFLCBBPikgPT4gVGFzazxCIHwgQz4gPSBtYXRjaCBhcyBhbnlcblxuLyoqXG4gKiBAY2F0ZWdvcnkgZGVzdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IG1hdGNoRTogPEUsIEEsIEI+KFxuICBvbkxlZnQ6IChlOiBFKSA9PiBUYXNrPEI+LFxuICBvblJpZ2h0OiAoYTogQSkgPT4gVGFzazxCPlxuKSA9PiAobWE6IFRhc2tFaXRoZXI8RSwgQT4pID0+IFRhc2s8Qj4gPVxuICAvKiNfX1BVUkVfXyovXG4gIEVULm1hdGNoRShULk1vbmFkKVxuXG4vKipcbiAqIEFsaWFzIG9mIFtgbWF0Y2hFYF0oI21hdGNoZSkuXG4gKlxuICogQGNhdGVnb3J5IGRlc3RydWN0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZvbGQgPSBtYXRjaEVcblxuLyoqXG4gKiBMZXNzIHN0cmljdCB2ZXJzaW9uIG9mIFtgbWF0Y2hFYF0oI21hdGNoZSkuXG4gKlxuICogQGNhdGVnb3J5IGRlc3RydWN0b3JzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBtYXRjaEVXOiA8RSwgQiwgQSwgQz4oXG4gIG9uTGVmdDogKGU6IEUpID0+IFRhc2s8Qj4sXG4gIG9uUmlnaHQ6IChhOiBBKSA9PiBUYXNrPEM+XG4pID0+IChtYTogVGFza0VpdGhlcjxFLCBBPikgPT4gVGFzazxCIHwgQz4gPSBtYXRjaEUgYXMgYW55XG5cbi8qKlxuICogQWxpYXMgb2YgW2BtYXRjaEVXYF0oI21hdGNoZXcpLlxuICpcbiAqIEBjYXRlZ29yeSBkZXN0cnVjdG9yc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgZm9sZFcgPSBtYXRjaEVXXG5cbi8qKlxuICogQGNhdGVnb3J5IGRlc3RydWN0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGdldE9yRWxzZTogPEUsIEE+KG9uTGVmdDogKGU6IEUpID0+IFRhc2s8QT4pID0+IChtYTogVGFza0VpdGhlcjxFLCBBPikgPT4gVGFzazxBPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgRVQuZ2V0T3JFbHNlKFQuTW9uYWQpXG5cbi8qKlxuICogTGVzcyBzdHJpY3QgdmVyc2lvbiBvZiBbYGdldE9yRWxzZWBdKCNnZXRvcmVsc2UpLlxuICpcbiAqIEBjYXRlZ29yeSBkZXN0cnVjdG9yc1xuICogQHNpbmNlIDIuNi4wXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRPckVsc2VXOiA8RSwgQj4oXG4gIG9uTGVmdDogKGU6IEUpID0+IFRhc2s8Qj5cbikgPT4gPEE+KG1hOiBUYXNrRWl0aGVyPEUsIEE+KSA9PiBUYXNrPEEgfCBCPiA9IGdldE9yRWxzZSBhcyBhbnlcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gaW50ZXJvcFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIFRyYW5zZm9ybXMgYSBgUHJvbWlzZWAgdGhhdCBtYXkgcmVqZWN0IHRvIGEgYFByb21pc2VgIHRoYXQgbmV2ZXIgcmVqZWN0cyBhbmQgcmV0dXJucyBhbiBgRWl0aGVyYCBpbnN0ZWFkLlxuICpcbiAqIE5vdGU6IGBmYCBzaG91bGQgbmV2ZXIgYHRocm93YCBlcnJvcnMsIHRoZXkgYXJlIG5vdCBjYXVnaHQuXG4gKlxuICogU2VlIGFsc28gW2B0cnlDYXRjaEtgXSgjdHJ5Y2F0Y2hrKS5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgbGVmdCwgcmlnaHQgfSBmcm9tICdmcC10cy9FaXRoZXInXG4gKiBpbXBvcnQgeyB0cnlDYXRjaCB9IGZyb20gJ2ZwLXRzL1Rhc2tFaXRoZXInXG4gKlxuICogdHJ5Q2F0Y2goKCkgPT4gUHJvbWlzZS5yZXNvbHZlKDEpLCBTdHJpbmcpKCkudGhlbihyZXN1bHQgPT4ge1xuICogICBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKHJlc3VsdCwgcmlnaHQoMSkpXG4gKiB9KVxuICogdHJ5Q2F0Y2goKCkgPT4gUHJvbWlzZS5yZWplY3QoJ2Vycm9yJyksIFN0cmluZykoKS50aGVuKHJlc3VsdCA9PiB7XG4gKiAgIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwocmVzdWx0LCBsZWZ0KCdlcnJvcicpKVxuICogfSlcbiAqXG4gKiBAY2F0ZWdvcnkgaW50ZXJvcFxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCB0cnlDYXRjaCA9IDxFLCBBPihmOiBMYXp5PFByb21pc2U8QT4+LCBvblJlamVjdGVkOiAocmVhc29uOiB1bmtub3duKSA9PiBFKTogVGFza0VpdGhlcjxFLCBBPiA9PiAoKSA9PlxuICBmKCkudGhlbihfLnJpZ2h0LCAocmVhc29uKSA9PiBfLmxlZnQob25SZWplY3RlZChyZWFzb24pKSlcblxuLyoqXG4gKiBDb252ZXJ0cyBhIGZ1bmN0aW9uIHJldHVybmluZyBhIGBQcm9taXNlYCB0byBvbmUgcmV0dXJuaW5nIGEgYFRhc2tFaXRoZXJgLlxuICpcbiAqIEBjYXRlZ29yeSBpbnRlcm9wXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGNvbnN0IHRyeUNhdGNoSyA9IDxFLCBBIGV4dGVuZHMgUmVhZG9ubHlBcnJheTx1bmtub3duPiwgQj4oXG4gIGY6ICguLi5hOiBBKSA9PiBQcm9taXNlPEI+LFxuICBvblJlamVjdGVkOiAocmVhc29uOiB1bmtub3duKSA9PiBFXG4pOiAoKC4uLmE6IEEpID0+IFRhc2tFaXRoZXI8RSwgQj4pID0+ICguLi5hKSA9PiB0cnlDYXRjaCgoKSA9PiBmKC4uLmEpLCBvblJlamVjdGVkKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnRlcm9wXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCB0b1VuaW9uOiA8RSwgQT4oZmE6IFRhc2tFaXRoZXI8RSwgQT4pID0+IFRhc2s8RSB8IEE+ID1cbiAgLyojX19QVVJFX18qL1xuICBFVC50b1VuaW9uKFQuRnVuY3RvcilcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gY29tYmluYXRvcnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBSZXR1cm5zIGBtYWAgaWYgaXMgYSBgUmlnaHRgIG9yIHRoZSB2YWx1ZSByZXR1cm5lZCBieSBgb25MZWZ0YCBvdGhlcndpc2UuXG4gKlxuICogU2VlIGFsc28gW2FsdF0oI2FsdCkuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCAqIGFzIEUgZnJvbSAnZnAtdHMvRWl0aGVyJ1xuICogaW1wb3J0IHsgcGlwZSB9IGZyb20gJ2ZwLXRzL2Z1bmN0aW9uJ1xuICogaW1wb3J0ICogYXMgVEUgZnJvbSAnZnAtdHMvVGFza0VpdGhlcidcbiAqXG4gKiBhc3luYyBmdW5jdGlvbiB0ZXN0KCkge1xuICogICBjb25zdCBlcnJvckhhbmRsZXIgPSBURS5vckVsc2UoKGVycm9yOiBzdHJpbmcpID0+IFRFLnJpZ2h0KGByZWNvdmVyaW5nIGZyb20gJHtlcnJvcn0uLi5gKSlcbiAqICAgYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChhd2FpdCBwaXBlKFRFLnJpZ2h0KCdvaycpLCBlcnJvckhhbmRsZXIpKCksIEUucmlnaHQoJ29rJykpXG4gKiAgIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoYXdhaXQgcGlwZShURS5sZWZ0KCdrbycpLCBlcnJvckhhbmRsZXIpKCksIEUucmlnaHQoJ3JlY292ZXJpbmcgZnJvbSBrby4uLicpKVxuICogfVxuICpcbiAqIHRlc3QoKVxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBvckVsc2U6IDxFMSwgQSwgRTI+KG9uTGVmdDogKGU6IEUxKSA9PiBUYXNrRWl0aGVyPEUyLCBBPikgPT4gKG1hOiBUYXNrRWl0aGVyPEUxLCBBPikgPT4gVGFza0VpdGhlcjxFMiwgQT4gPVxuICAvKiNfX1BVUkVfXyovXG4gIEVULm9yRWxzZShULk1vbmFkKVxuXG4vKipcbiAqIExlc3Mgc3RyaWN0IHZlcnNpb24gb2YgW2BvckVsc2VgXSgjb3JlbHNlKS5cbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IG9yRWxzZVc6IDxFMSwgRTIsIEI+KFxuICBvbkxlZnQ6IChlOiBFMSkgPT4gVGFza0VpdGhlcjxFMiwgQj5cbikgPT4gPEE+KG1hOiBUYXNrRWl0aGVyPEUxLCBBPikgPT4gVGFza0VpdGhlcjxFMiwgQSB8IEI+ID0gb3JFbHNlIGFzIGFueVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3Qgb3JFbHNlRmlyc3Q6IDxFLCBCPihvbkxlZnQ6IChlOiBFKSA9PiBUYXNrRWl0aGVyPEUsIEI+KSA9PiA8QT4obWE6IFRhc2tFaXRoZXI8RSwgQT4pID0+IFRhc2tFaXRoZXI8RSwgQT4gPVxuICAvKiNfX1BVUkVfXyovXG4gIEVULm9yRWxzZUZpcnN0KFQuTW9uYWQpXG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBvckVsc2VGaXJzdFc6IDxFMSwgRTIsIEI+KFxuICBvbkxlZnQ6IChlOiBFMSkgPT4gVGFza0VpdGhlcjxFMiwgQj5cbikgPT4gPEE+KG1hOiBUYXNrRWl0aGVyPEUxLCBBPikgPT4gVGFza0VpdGhlcjxFMSB8IEUyLCBBPiA9IG9yRWxzZUZpcnN0IGFzIGFueVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3Qgb3JMZWZ0OiA8RTEsIEUyPihvbkxlZnQ6IChlOiBFMSkgPT4gVGFzazxFMj4pID0+IDxBPihmYTogVGFza0VpdGhlcjxFMSwgQT4pID0+IFRhc2tFaXRoZXI8RTIsIEE+ID1cbiAgLyojX19QVVJFX18qL1xuICBFVC5vckxlZnQoVC5Nb25hZClcblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3Qgc3dhcDogPEUsIEE+KG1hOiBUYXNrRWl0aGVyPEUsIEE+KSA9PiBUYXNrRWl0aGVyPEEsIEU+ID1cbiAgLyojX19QVVJFX18qL1xuICBFVC5zd2FwKFQuRnVuY3RvcilcblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZyb21UYXNrT3B0aW9uSyA9IDxFPihcbiAgb25Ob25lOiBMYXp5PEU+XG4pOiAoPEEgZXh0ZW5kcyBSZWFkb25seUFycmF5PHVua25vd24+LCBCPihmOiAoLi4uYTogQSkgPT4gVGFza09wdGlvbjxCPikgPT4gKC4uLmE6IEEpID0+IFRhc2tFaXRoZXI8RSwgQj4pID0+IHtcbiAgY29uc3QgZnJvbSA9IGZyb21UYXNrT3B0aW9uKG9uTm9uZSlcbiAgcmV0dXJuIChmKSA9PiBmbG93KGYsIGZyb20pXG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBjaGFpblRhc2tPcHRpb25LID0gPEU+KFxuICBvbk5vbmU6IExhenk8RT5cbik6ICg8QSwgQj4oZjogKGE6IEEpID0+IFRhc2tPcHRpb248Qj4pID0+IChtYTogVGFza0VpdGhlcjxFLCBBPikgPT4gVGFza0VpdGhlcjxFLCBCPikgPT5cbiAgZmxvdyhmcm9tVGFza09wdGlvbksob25Ob25lKSwgY2hhaW4pXG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi40LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZyb21JT0VpdGhlcksgPSA8RSwgQSBleHRlbmRzIFJlYWRvbmx5QXJyYXk8dW5rbm93bj4sIEI+KFxuICBmOiAoLi4uYTogQSkgPT4gSU9FaXRoZXI8RSwgQj5cbik6ICgoLi4uYTogQSkgPT4gVGFza0VpdGhlcjxFLCBCPikgPT4gZmxvdyhmLCBmcm9tSU9FaXRoZXIpXG5cbi8qKlxuICogTGVzcyBzdHJpY3QgdmVyc2lvbiBvZiBbYGNoYWluSU9FaXRoZXJLYF0oI2NoYWluaW9laXRoZXJrKS5cbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjYuMVxuICovXG5leHBvcnQgY29uc3QgY2hhaW5JT0VpdGhlcktXOiA8RTIsIEEsIEI+KFxuICBmOiAoYTogQSkgPT4gSU9FaXRoZXI8RTIsIEI+XG4pID0+IDxFMT4obWE6IFRhc2tFaXRoZXI8RTEsIEE+KSA9PiBUYXNrRWl0aGVyPEUxIHwgRTIsIEI+ID0gKGYpID0+IGNoYWluVyhmcm9tSU9FaXRoZXJLKGYpKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuNC4wXG4gKi9cbmV4cG9ydCBjb25zdCBjaGFpbklPRWl0aGVySzogPEUsIEEsIEI+KFxuICBmOiAoYTogQSkgPT4gSU9FaXRoZXI8RSwgQj5cbikgPT4gKG1hOiBUYXNrRWl0aGVyPEUsIEE+KSA9PiBUYXNrRWl0aGVyPEUsIEI+ID0gY2hhaW5JT0VpdGhlcktXXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIG5vbi1waXBlYWJsZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuY29uc3QgX21hcDogRnVuY3RvcjI8VVJJPlsnbWFwJ10gPSAoZmEsIGYpID0+IHBpcGUoZmEsIG1hcChmKSlcbmNvbnN0IF9hcFBhcjogQXBwbHkyPFVSST5bJ2FwJ10gPSAoZmFiLCBmYSkgPT4gcGlwZShmYWIsIGFwKGZhKSlcbmNvbnN0IF9hcFNlcTogQXBwbHkyPFVSST5bJ2FwJ10gPSAoZmFiLCBmYSkgPT5cbiAgcGlwZShcbiAgICBmYWIsXG4gICAgY2hhaW4oKGYpID0+IHBpcGUoZmEsIG1hcChmKSkpXG4gIClcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5jb25zdCBfY2hhaW46IENoYWluMjxVUkk+WydjaGFpbiddID0gKG1hLCBmKSA9PiBwaXBlKG1hLCBjaGFpbihmKSlcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5jb25zdCBfYmltYXA6IEJpZnVuY3RvcjI8VVJJPlsnYmltYXAnXSA9IChmYSwgZiwgZykgPT4gcGlwZShmYSwgYmltYXAoZiwgZykpXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuY29uc3QgX21hcExlZnQ6IEJpZnVuY3RvcjI8VVJJPlsnbWFwTGVmdCddID0gKGZhLCBmKSA9PiBwaXBlKGZhLCBtYXBMZWZ0KGYpKVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmNvbnN0IF9hbHQ6IEFsdDI8VVJJPlsnYWx0J10gPSAoZmEsIHRoYXQpID0+IHBpcGUoZmEsIGFsdCh0aGF0KSlcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gdHlwZSBjbGFzcyBtZW1iZXJzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogYG1hcGAgY2FuIGJlIHVzZWQgdG8gdHVybiBmdW5jdGlvbnMgYChhOiBBKSA9PiBCYCBpbnRvIGZ1bmN0aW9ucyBgKGZhOiBGPEE+KSA9PiBGPEI+YCB3aG9zZSBhcmd1bWVudCBhbmQgcmV0dXJuIHR5cGVzXG4gKiB1c2UgdGhlIHR5cGUgY29uc3RydWN0b3IgYEZgIHRvIHJlcHJlc2VudCBzb21lIGNvbXB1dGF0aW9uYWwgY29udGV4dC5cbiAqXG4gKiBAY2F0ZWdvcnkgRnVuY3RvclxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBtYXA6IDxBLCBCPihmOiAoYTogQSkgPT4gQikgPT4gPEU+KGZhOiBUYXNrRWl0aGVyPEUsIEE+KSA9PiBUYXNrRWl0aGVyPEUsIEI+ID1cbiAgLyojX19QVVJFX18qL1xuICBFVC5tYXAoVC5GdW5jdG9yKVxuXG4vKipcbiAqIE1hcCBhIHBhaXIgb2YgZnVuY3Rpb25zIG92ZXIgdGhlIHR3byB0eXBlIGFyZ3VtZW50cyBvZiB0aGUgYmlmdW5jdG9yLlxuICpcbiAqIEBjYXRlZ29yeSBCaWZ1bmN0b3JcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgYmltYXA6IDxFLCBHLCBBLCBCPihmOiAoZTogRSkgPT4gRywgZzogKGE6IEEpID0+IEIpID0+IChmYTogVGFza0VpdGhlcjxFLCBBPikgPT4gVGFza0VpdGhlcjxHLCBCPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgRVQuYmltYXAoVC5GdW5jdG9yKVxuXG4vKipcbiAqIE1hcCBhIGZ1bmN0aW9uIG92ZXIgdGhlIGZpcnN0IHR5cGUgYXJndW1lbnQgb2YgYSBiaWZ1bmN0b3IuXG4gKlxuICogQGNhdGVnb3J5IEJpZnVuY3RvclxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBtYXBMZWZ0OiA8RSwgRz4oZjogKGU6IEUpID0+IEcpID0+IDxBPihmYTogVGFza0VpdGhlcjxFLCBBPikgPT4gVGFza0VpdGhlcjxHLCBBPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgRVQubWFwTGVmdChULkZ1bmN0b3IpXG5cbi8qKlxuICogQXBwbHkgYSBmdW5jdGlvbiB0byBhbiBhcmd1bWVudCB1bmRlciBhIHR5cGUgY29uc3RydWN0b3IuXG4gKlxuICogQGNhdGVnb3J5IEFwcGx5XG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGFwOiA8RSwgQT4oZmE6IFRhc2tFaXRoZXI8RSwgQT4pID0+IDxCPihmYWI6IFRhc2tFaXRoZXI8RSwgKGE6IEEpID0+IEI+KSA9PiBUYXNrRWl0aGVyPEUsIEI+ID1cbiAgLyojX19QVVJFX18qL1xuICBFVC5hcChULkFwcGx5UGFyKVxuXG4vKipcbiAqIExlc3Mgc3RyaWN0IHZlcnNpb24gb2YgW2BhcGBdKCNhcCkuXG4gKlxuICogQGNhdGVnb3J5IEFwcGx5XG4gKiBAc2luY2UgMi44LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGFwVzogPEUyLCBBPihcbiAgZmE6IFRhc2tFaXRoZXI8RTIsIEE+XG4pID0+IDxFMSwgQj4oZmFiOiBUYXNrRWl0aGVyPEUxLCAoYTogQSkgPT4gQj4pID0+IFRhc2tFaXRoZXI8RTEgfCBFMiwgQj4gPSBhcCBhcyBhbnlcblxuLyoqXG4gKiBDb21wb3NlcyBjb21wdXRhdGlvbnMgaW4gc2VxdWVuY2UsIHVzaW5nIHRoZSByZXR1cm4gdmFsdWUgb2Ygb25lIGNvbXB1dGF0aW9uIHRvIGRldGVybWluZSB0aGUgbmV4dCBjb21wdXRhdGlvbi5cbiAqXG4gKiBAY2F0ZWdvcnkgTW9uYWRcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgY2hhaW46IDxFLCBBLCBCPihmOiAoYTogQSkgPT4gVGFza0VpdGhlcjxFLCBCPikgPT4gKG1hOiBUYXNrRWl0aGVyPEUsIEE+KSA9PiBUYXNrRWl0aGVyPEUsIEI+ID1cbiAgLyojX19QVVJFX18qL1xuICBFVC5jaGFpbihULk1vbmFkKVxuXG4vKipcbiAqIExlc3Mgc3RyaWN0IHZlcnNpb24gb2YgW2BjaGFpbmBdKCNjaGFpbikuXG4gKlxuICogQGNhdGVnb3J5IE1vbmFkXG4gKiBAc2luY2UgMi42LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGNoYWluVzogPEUyLCBBLCBCPihcbiAgZjogKGE6IEEpID0+IFRhc2tFaXRoZXI8RTIsIEI+XG4pID0+IDxFMT4obWE6IFRhc2tFaXRoZXI8RTEsIEE+KSA9PiBUYXNrRWl0aGVyPEUxIHwgRTIsIEI+ID0gY2hhaW4gYXMgYW55XG5cbi8qKlxuICogTGVzcyBzdHJpY3QgdmVyc2lvbiBvZiBbYGZsYXR0ZW5gXSgjZmxhdHRlbikuXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBmbGF0dGVuVzogPEUxLCBFMiwgQT4obW1hOiBUYXNrRWl0aGVyPEUxLCBUYXNrRWl0aGVyPEUyLCBBPj4pID0+IFRhc2tFaXRoZXI8RTEgfCBFMiwgQT4gPVxuICAvKiNfX1BVUkVfXyovXG4gIGNoYWluVyhpZGVudGl0eSlcblxuLyoqXG4gKiBEZXJpdmFibGUgZnJvbSBgQ2hhaW5gLlxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBmbGF0dGVuOiA8RSwgQT4obW1hOiBUYXNrRWl0aGVyPEUsIFRhc2tFaXRoZXI8RSwgQT4+KSA9PiBUYXNrRWl0aGVyPEUsIEE+ID0gZmxhdHRlbldcblxuLyoqXG4gKiBJZGVudGlmaWVzIGFuIGFzc29jaWF0aXZlIG9wZXJhdGlvbiBvbiBhIHR5cGUgY29uc3RydWN0b3IuIEl0IGlzIHNpbWlsYXIgdG8gYFNlbWlncm91cGAsIGV4Y2VwdCB0aGF0IGl0IGFwcGxpZXMgdG9cbiAqIHR5cGVzIG9mIGtpbmQgYCogLT4gKmAuXG4gKlxuICogSW4gY2FzZSBvZiBgVGFza0VpdGhlcmAgcmV0dXJucyBgZmFgIGlmIGlzIGEgYFJpZ2h0YCBvciB0aGUgdmFsdWUgcmV0dXJuZWQgYnkgYHRoYXRgIG90aGVyd2lzZS5cbiAqXG4gKiBTZWUgYWxzbyBbb3JFbHNlXSgjb3JlbHNlKS5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0ICogYXMgRSBmcm9tICdmcC10cy9FaXRoZXInXG4gKiBpbXBvcnQgeyBwaXBlIH0gZnJvbSAnZnAtdHMvZnVuY3Rpb24nXG4gKiBpbXBvcnQgKiBhcyBURSBmcm9tICdmcC10cy9UYXNrRWl0aGVyJ1xuICpcbiAqIGFzeW5jIGZ1bmN0aW9uIHRlc3QoKSB7XG4gKiAgIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXG4gKiAgICAgYXdhaXQgcGlwZShcbiAqICAgICAgIFRFLnJpZ2h0KDEpLFxuICogICAgICAgVEUuYWx0KCgpID0+IFRFLnJpZ2h0KDIpKVxuICogICAgICkoKSxcbiAqICAgICBFLnJpZ2h0KDEpXG4gKiAgIClcbiAqICAgYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAqICAgICBhd2FpdCBwaXBlKFxuICogICAgICAgVEUubGVmdCgnYScpLFxuICogICAgICAgVEUuYWx0KCgpID0+IFRFLnJpZ2h0KDIpKVxuICogICAgICkoKSxcbiAqICAgICBFLnJpZ2h0KDIpXG4gKiAgIClcbiAqICAgYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAqICAgICBhd2FpdCBwaXBlKFxuICogICAgICAgVEUubGVmdCgnYScpLFxuICogICAgICAgVEUuYWx0KCgpID0+IFRFLmxlZnQoJ2InKSlcbiAqICAgICApKCksXG4gKiAgICAgRS5sZWZ0KCdiJylcbiAqICAgKVxuICogfVxuICpcbiAqIHRlc3QoKVxuICpcbiAqIEBjYXRlZ29yeSBBbHRcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgYWx0OiA8RSwgQT4odGhhdDogTGF6eTxUYXNrRWl0aGVyPEUsIEE+PikgPT4gKGZhOiBUYXNrRWl0aGVyPEUsIEE+KSA9PiBUYXNrRWl0aGVyPEUsIEE+ID1cbiAgLyojX19QVVJFX18qL1xuICBFVC5hbHQoVC5Nb25hZClcblxuLyoqXG4gKiBMZXNzIHN0cmljdCB2ZXJzaW9uIG9mIFtgYWx0YF0oI2FsdCkuXG4gKlxuICogQGNhdGVnb3J5IEFsdFxuICogQHNpbmNlIDIuOS4wXG4gKi9cbmV4cG9ydCBjb25zdCBhbHRXOiA8RTIsIEI+KFxuICB0aGF0OiBMYXp5PFRhc2tFaXRoZXI8RTIsIEI+PlxuKSA9PiA8RTEsIEE+KGZhOiBUYXNrRWl0aGVyPEUxLCBBPikgPT4gVGFza0VpdGhlcjxFMiwgQSB8IEI+ID0gYWx0IGFzIGFueVxuXG4vKipcbiAqIEBjYXRlZ29yeSBQb2ludGVkXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IG9mOiA8RSA9IG5ldmVyLCBBID0gbmV2ZXI+KGE6IEEpID0+IFRhc2tFaXRoZXI8RSwgQT4gPSByaWdodFxuXG4vKipcbiAqIEBjYXRlZ29yeSBNb25hZFRhc2tcbiAqIEBzaW5jZSAyLjcuMFxuICovXG5leHBvcnQgY29uc3QgdGhyb3dFcnJvcjogTW9uYWRUaHJvdzI8VVJJPlsndGhyb3dFcnJvciddID0gbGVmdFxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBpbnN0YW5jZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IFVSSSA9ICdUYXNrRWl0aGVyJ1xuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgdHlwZSBVUkkgPSB0eXBlb2YgVVJJXG5cbmRlY2xhcmUgbW9kdWxlICcuL0hLVCcge1xuICBpbnRlcmZhY2UgVVJJdG9LaW5kMjxFLCBBPiB7XG4gICAgcmVhZG9ubHkgW1VSSV06IFRhc2tFaXRoZXI8RSwgQT5cbiAgfVxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjcuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXBwbGljYXRpdmVUYXNrVmFsaWRhdGlvbjxFPihBOiBBcHBseTE8VC5VUkk+LCBTOiBTZW1pZ3JvdXA8RT4pOiBBcHBsaWNhdGl2ZTJDPFVSSSwgRT4ge1xuICBjb25zdCBhcCA9IGFwXyhBLCBFLmdldEFwcGxpY2F0aXZlVmFsaWRhdGlvbihTKSlcbiAgcmV0dXJuIHtcbiAgICBVUkksXG4gICAgX0U6IHVuZGVmaW5lZCBhcyBhbnksXG4gICAgbWFwOiBfbWFwLFxuICAgIGFwOiAoZmFiLCBmYSkgPT4gcGlwZShmYWIsIGFwKGZhKSksXG4gICAgb2ZcbiAgfVxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjcuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWx0VGFza1ZhbGlkYXRpb248RT4oUzogU2VtaWdyb3VwPEU+KTogQWx0MkM8VVJJLCBFPiB7XG4gIGNvbnN0IGFsdCA9IEVULmFsdFZhbGlkYXRpb24oVC5Nb25hZCwgUylcbiAgcmV0dXJuIHtcbiAgICBVUkksXG4gICAgX0U6IHVuZGVmaW5lZCBhcyBhbnksXG4gICAgbWFwOiBfbWFwLFxuICAgIGFsdDogKGZhLCB0aGF0KSA9PiBwaXBlKGZhLCBhbHQodGhhdCkpXG4gIH1cbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRDb21wYWN0YWJsZSA9IDxFPihNOiBNb25vaWQ8RT4pOiBDb21wYWN0YWJsZTJDPFVSSSwgRT4gPT4ge1xuICBjb25zdCBDID0gRS5nZXRDb21wYWN0YWJsZShNKVxuICByZXR1cm4ge1xuICAgIFVSSSxcbiAgICBfRTogdW5kZWZpbmVkIGFzIGFueSxcbiAgICBjb21wYWN0OiBjb21wYWN0XyhULkZ1bmN0b3IsIEMpLFxuICAgIHNlcGFyYXRlOiBzZXBhcmF0ZV8oVC5GdW5jdG9yLCBDLCBFLkZ1bmN0b3IpXG4gIH1cbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xLjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEZpbHRlcmFibGU8RT4oTTogTW9ub2lkPEU+KTogRmlsdGVyYWJsZTJDPFVSSSwgRT4ge1xuICBjb25zdCBGID0gRS5nZXRGaWx0ZXJhYmxlKE0pXG4gIGNvbnN0IEMgPSBnZXRDb21wYWN0YWJsZShNKVxuXG4gIGNvbnN0IGZpbHRlciA9IGZpbHRlcl8oVC5GdW5jdG9yLCBGKVxuICBjb25zdCBmaWx0ZXJNYXAgPSBmaWx0ZXJNYXBfKFQuRnVuY3RvciwgRilcbiAgY29uc3QgcGFydGl0aW9uID0gcGFydGl0aW9uXyhULkZ1bmN0b3IsIEYpXG4gIGNvbnN0IHBhcnRpdGlvbk1hcCA9IHBhcnRpdGlvbk1hcF8oVC5GdW5jdG9yLCBGKVxuICByZXR1cm4ge1xuICAgIFVSSSxcbiAgICBfRTogdW5kZWZpbmVkIGFzIGFueSxcbiAgICBtYXA6IF9tYXAsXG4gICAgY29tcGFjdDogQy5jb21wYWN0LFxuICAgIHNlcGFyYXRlOiBDLnNlcGFyYXRlLFxuICAgIGZpbHRlcjogPEE+KGZhOiBUYXNrRWl0aGVyPEUsIEE+LCBwcmVkaWNhdGU6IFByZWRpY2F0ZTxBPikgPT4gcGlwZShmYSwgZmlsdGVyKHByZWRpY2F0ZSkpLFxuICAgIGZpbHRlck1hcDogKGZhLCBmKSA9PiBwaXBlKGZhLCBmaWx0ZXJNYXAoZikpLFxuICAgIHBhcnRpdGlvbjogPEE+KGZhOiBUYXNrRWl0aGVyPEUsIEE+LCBwcmVkaWNhdGU6IFByZWRpY2F0ZTxBPikgPT4gcGlwZShmYSwgcGFydGl0aW9uKHByZWRpY2F0ZSkpLFxuICAgIHBhcnRpdGlvbk1hcDogKGZhLCBmKSA9PiBwaXBlKGZhLCBwYXJ0aXRpb25NYXAoZikpXG4gIH1cbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi43LjBcbiAqL1xuZXhwb3J0IGNvbnN0IEZ1bmN0b3I6IEZ1bmN0b3IyPFVSST4gPSB7XG4gIFVSSSxcbiAgbWFwOiBfbWFwXG59XG5cbi8qKlxuICogRGVyaXZhYmxlIGZyb20gYEZ1bmN0b3JgLlxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgZmxhcCA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZmxhcF8oRnVuY3RvcilcblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBQb2ludGVkOiBQb2ludGVkMjxVUkk+ID0ge1xuICBVUkksXG4gIG9mXG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgQXBwbHlQYXI6IEFwcGx5MjxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgYXA6IF9hcFBhclxufVxuXG4vKipcbiAqIENvbWJpbmUgdHdvIGVmZmVjdGZ1bCBhY3Rpb25zLCBrZWVwaW5nIG9ubHkgdGhlIHJlc3VsdCBvZiB0aGUgZmlyc3QuXG4gKlxuICogRGVyaXZhYmxlIGZyb20gYEFwcGx5YC5cbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgYXBGaXJzdCA9XG4gIC8qI19fUFVSRV9fKi9cbiAgYXBGaXJzdF8oQXBwbHlQYXIpXG5cbi8qKlxuICogQ29tYmluZSB0d28gZWZmZWN0ZnVsIGFjdGlvbnMsIGtlZXBpbmcgb25seSB0aGUgcmVzdWx0IG9mIHRoZSBzZWNvbmQuXG4gKlxuICogRGVyaXZhYmxlIGZyb20gYEFwcGx5YC5cbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgYXBTZWNvbmQgPVxuICAvKiNfX1BVUkVfXyovXG4gIGFwU2Vjb25kXyhBcHBseVBhcilcblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi43LjBcbiAqL1xuZXhwb3J0IGNvbnN0IEFwcGxpY2F0aXZlUGFyOiBBcHBsaWNhdGl2ZTI8VVJJPiA9IHtcbiAgVVJJLFxuICBtYXA6IF9tYXAsXG4gIGFwOiBfYXBQYXIsXG4gIG9mXG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgQXBwbHlTZXE6IEFwcGx5MjxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgYXA6IF9hcFNlcVxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjcuMFxuICovXG5leHBvcnQgY29uc3QgQXBwbGljYXRpdmVTZXE6IEFwcGxpY2F0aXZlMjxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgYXA6IF9hcFNlcSxcbiAgb2Zcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBDaGFpbjogQ2hhaW4yPFVSST4gPSB7XG4gIFVSSSxcbiAgbWFwOiBfbWFwLFxuICBhcDogX2FwUGFyLFxuICBjaGFpbjogX2NoYWluXG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgTW9uYWQ6IE1vbmFkMjxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgYXA6IF9hcFBhcixcbiAgY2hhaW46IF9jaGFpbixcbiAgb2Zcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBNb25hZElPOiBNb25hZElPMjxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgYXA6IF9hcFBhcixcbiAgY2hhaW46IF9jaGFpbixcbiAgb2YsXG4gIGZyb21JT1xufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IE1vbmFkVGFzazogTW9uYWRUYXNrMjxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgYXA6IF9hcFBhcixcbiAgY2hhaW46IF9jaGFpbixcbiAgb2YsXG4gIGZyb21JTyxcbiAgZnJvbVRhc2tcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBNb25hZFRocm93OiBNb25hZFRocm93MjxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgYXA6IF9hcFBhcixcbiAgY2hhaW46IF9jaGFpbixcbiAgb2YsXG4gIHRocm93RXJyb3Jcbn1cblxuLyoqXG4gKiBDb21wb3NlcyBjb21wdXRhdGlvbnMgaW4gc2VxdWVuY2UsIHVzaW5nIHRoZSByZXR1cm4gdmFsdWUgb2Ygb25lIGNvbXB1dGF0aW9uIHRvIGRldGVybWluZSB0aGUgbmV4dCBjb21wdXRhdGlvbiBhbmRcbiAqIGtlZXBpbmcgb25seSB0aGUgcmVzdWx0IG9mIHRoZSBmaXJzdC5cbiAqXG4gKiBEZXJpdmFibGUgZnJvbSBgQ2hhaW5gLlxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBjaGFpbkZpcnN0OiA8RSwgQSwgQj4oZjogKGE6IEEpID0+IFRhc2tFaXRoZXI8RSwgQj4pID0+IChtYTogVGFza0VpdGhlcjxFLCBBPikgPT4gVGFza0VpdGhlcjxFLCBBPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgY2hhaW5GaXJzdF8oQ2hhaW4pXG5cbi8qKlxuICogTGVzcyBzdHJpY3QgdmVyc2lvbiBvZiBbYGNoYWluRmlyc3RgXSgjY2hhaW5maXJzdCkuXG4gKlxuICogRGVyaXZhYmxlIGZyb20gYENoYWluYC5cbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjguMFxuICovXG5leHBvcnQgY29uc3QgY2hhaW5GaXJzdFc6IDxFMiwgQSwgQj4oXG4gIGY6IChhOiBBKSA9PiBUYXNrRWl0aGVyPEUyLCBCPlxuKSA9PiA8RTE+KG1hOiBUYXNrRWl0aGVyPEUxLCBBPikgPT4gVGFza0VpdGhlcjxFMSB8IEUyLCBBPiA9IGNoYWluRmlyc3QgYXMgYW55XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuNy4wXG4gKi9cbmV4cG9ydCBjb25zdCBCaWZ1bmN0b3I6IEJpZnVuY3RvcjI8VVJJPiA9IHtcbiAgVVJJLFxuICBiaW1hcDogX2JpbWFwLFxuICBtYXBMZWZ0OiBfbWFwTGVmdFxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjcuMFxuICovXG5leHBvcnQgY29uc3QgQWx0OiBBbHQyPFVSST4gPSB7XG4gIFVSSSxcbiAgbWFwOiBfbWFwLFxuICBhbHQ6IF9hbHRcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBGcm9tRWl0aGVyOiBGcm9tRWl0aGVyMjxVUkk+ID0ge1xuICBVUkksXG4gIGZyb21FaXRoZXJcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgbmF0dXJhbCB0cmFuc2Zvcm1hdGlvbnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgZnJvbU9wdGlvbiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnJvbU9wdGlvbl8oRnJvbUVpdGhlcilcblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZyb21PcHRpb25LID1cbiAgLyojX19QVVJFX18qL1xuICBmcm9tT3B0aW9uS18oRnJvbUVpdGhlcilcblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGNoYWluT3B0aW9uSyA9XG4gIC8qI19fUFVSRV9fKi9cbiAgY2hhaW5PcHRpb25LXyhGcm9tRWl0aGVyLCBDaGFpbilcblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjQuMFxuICovXG5leHBvcnQgY29uc3QgY2hhaW5FaXRoZXJLOiA8RSwgQSwgQj4oZjogKGE6IEEpID0+IEUuRWl0aGVyPEUsIEI+KSA9PiAobWE6IFRhc2tFaXRoZXI8RSwgQT4pID0+IFRhc2tFaXRoZXI8RSwgQj4gPVxuICAvKiNfX1BVUkVfXyovXG4gIGNoYWluRWl0aGVyS18oRnJvbUVpdGhlciwgQ2hhaW4pXG5cbi8qKlxuICogTGVzcyBzdHJpY3QgdmVyc2lvbiBvZiBbYGNoYWluRWl0aGVyS2BdKCNjaGFpbmVpdGhlcmspLlxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuNi4xXG4gKi9cbmV4cG9ydCBjb25zdCBjaGFpbkVpdGhlcktXOiA8RTIsIEEsIEI+KFxuICBmOiAoYTogQSkgPT4gRWl0aGVyPEUyLCBCPlxuKSA9PiA8RTE+KG1hOiBUYXNrRWl0aGVyPEUxLCBBPikgPT4gVGFza0VpdGhlcjxFMSB8IEUyLCBCPiA9IGNoYWluRWl0aGVySyBhcyBhbnlcblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29uc3RydWN0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZyb21QcmVkaWNhdGU6IHtcbiAgPEUsIEEsIEIgZXh0ZW5kcyBBPihyZWZpbmVtZW50OiBSZWZpbmVtZW50PEEsIEI+LCBvbkZhbHNlOiAoYTogQSkgPT4gRSk6IChhOiBBKSA9PiBUYXNrRWl0aGVyPEUsIEI+XG4gIDxFLCBBPihwcmVkaWNhdGU6IFByZWRpY2F0ZTxBPiwgb25GYWxzZTogKGE6IEEpID0+IEUpOiA8Qj4oYjogQikgPT4gVGFza0VpdGhlcjxFLCBCPlxuICA8RSwgQT4ocHJlZGljYXRlOiBQcmVkaWNhdGU8QT4sIG9uRmFsc2U6IChhOiBBKSA9PiBFKTogKGE6IEEpID0+IFRhc2tFaXRoZXI8RSwgQT5cbn0gPVxuICAvKiNfX1BVUkVfXyovXG4gIGZyb21QcmVkaWNhdGVfKEZyb21FaXRoZXIpXG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZpbHRlck9yRWxzZToge1xuICA8RSwgQSwgQiBleHRlbmRzIEE+KHJlZmluZW1lbnQ6IFJlZmluZW1lbnQ8QSwgQj4sIG9uRmFsc2U6IChhOiBBKSA9PiBFKTogKG1hOiBUYXNrRWl0aGVyPEUsIEE+KSA9PiBUYXNrRWl0aGVyPEUsIEI+XG4gIDxFLCBBPihwcmVkaWNhdGU6IFByZWRpY2F0ZTxBPiwgb25GYWxzZTogKGE6IEEpID0+IEUpOiA8QiBleHRlbmRzIEE+KG1iOiBUYXNrRWl0aGVyPEUsIEI+KSA9PiBUYXNrRWl0aGVyPEUsIEI+XG4gIDxFLCBBPihwcmVkaWNhdGU6IFByZWRpY2F0ZTxBPiwgb25GYWxzZTogKGE6IEEpID0+IEUpOiAobWE6IFRhc2tFaXRoZXI8RSwgQT4pID0+IFRhc2tFaXRoZXI8RSwgQT5cbn0gPVxuICAvKiNfX1BVUkVfXyovXG4gIGZpbHRlck9yRWxzZV8oRnJvbUVpdGhlciwgQ2hhaW4pXG5cbi8qKlxuICogTGVzcyBzdHJpY3QgdmVyc2lvbiBvZiBbYGZpbHRlck9yRWxzZWBdKCNmaWx0ZXJvcmVsc2UpLlxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuOS4wXG4gKi9cbmV4cG9ydCBjb25zdCBmaWx0ZXJPckVsc2VXOiB7XG4gIDxBLCBCIGV4dGVuZHMgQSwgRTI+KHJlZmluZW1lbnQ6IFJlZmluZW1lbnQ8QSwgQj4sIG9uRmFsc2U6IChhOiBBKSA9PiBFMik6IDxFMT4oXG4gICAgbWE6IFRhc2tFaXRoZXI8RTEsIEE+XG4gICkgPT4gVGFza0VpdGhlcjxFMSB8IEUyLCBCPlxuICA8QSwgRTI+KHByZWRpY2F0ZTogUHJlZGljYXRlPEE+LCBvbkZhbHNlOiAoYTogQSkgPT4gRTIpOiA8RTEsIEIgZXh0ZW5kcyBBPihcbiAgICBtYjogVGFza0VpdGhlcjxFMSwgQj5cbiAgKSA9PiBUYXNrRWl0aGVyPEUxIHwgRTIsIEI+XG4gIDxBLCBFMj4ocHJlZGljYXRlOiBQcmVkaWNhdGU8QT4sIG9uRmFsc2U6IChhOiBBKSA9PiBFMik6IDxFMT4obWE6IFRhc2tFaXRoZXI8RTEsIEE+KSA9PiBUYXNrRWl0aGVyPEUxIHwgRTIsIEE+XG59ID0gZmlsdGVyT3JFbHNlXG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi40LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZyb21FaXRoZXJLOiA8RSwgQSBleHRlbmRzIFJlYWRvbmx5QXJyYXk8dW5rbm93bj4sIEI+KFxuICBmOiAoLi4uYTogQSkgPT4gRS5FaXRoZXI8RSwgQj5cbikgPT4gKC4uLmE6IEEpID0+IFRhc2tFaXRoZXI8RSwgQj4gPVxuICAvKiNfX1BVUkVfXyovXG4gIGZyb21FaXRoZXJLXyhGcm9tRWl0aGVyKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IEZyb21JTzogRnJvbUlPMjxVUkk+ID0ge1xuICBVUkksXG4gIGZyb21JT1xufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgZnJvbUlPSyA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnJvbUlPS18oRnJvbUlPKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgY2hhaW5JT0sgPVxuICAvKiNfX1BVUkVfXyovXG4gIGNoYWluSU9LXyhGcm9tSU8sIENoYWluKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgY2hhaW5GaXJzdElPSyA9XG4gIC8qI19fUFVSRV9fKi9cbiAgY2hhaW5GaXJzdElPS18oRnJvbUlPLCBDaGFpbilcblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBGcm9tVGFzazogRnJvbVRhc2syPFVSST4gPSB7XG4gIFVSSSxcbiAgZnJvbUlPLFxuICBmcm9tVGFza1xufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgZnJvbVRhc2tLID1cbiAgLyojX19QVVJFX18qL1xuICBmcm9tVGFza0tfKEZyb21UYXNrKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgY2hhaW5UYXNrSyA9XG4gIC8qI19fUFVSRV9fKi9cbiAgY2hhaW5UYXNrS18oRnJvbVRhc2ssIENoYWluKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgY2hhaW5GaXJzdFRhc2tLID1cbiAgLyojX19QVVJFX18qL1xuICBjaGFpbkZpcnN0VGFza0tfKEZyb21UYXNrLCBDaGFpbilcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gdXRpbHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBDb252ZXJ0IGEgbm9kZSBzdHlsZSBjYWxsYmFjayBmdW5jdGlvbiB0byBvbmUgcmV0dXJuaW5nIGEgYFRhc2tFaXRoZXJgXG4gKlxuICogKipOb3RlKiouIElmIHRoZSBmdW5jdGlvbiBgZmAgYWRtaXRzIG11bHRpcGxlIG92ZXJsb2FkaW5ncywgYHRhc2tpZnlgIHdpbGwgcGljayBsYXN0IG9uZS4gSWYgeW91IHdhbnQgYSBkaWZmZXJlbnRcbiAqIGJlaGF2aW91ciwgYWRkIGFuIGV4cGxpY2l0IHR5cGUgYW5ub3RhdGlvblxuICpcbiAqIGBgYHRzXG4gKiAvLyByZWFkRmlsZSBhZG1pdHMgbXVsdGlwbGUgb3ZlcmxvYWRpbmdzXG4gKlxuICogLy8gY29uc3QgcmVhZEZpbGU6IChhOiBzdHJpbmcpID0+IFRhc2tFaXRoZXI8Tm9kZUpTLkVycm5vRXhjZXB0aW9uLCBCdWZmZXI+XG4gKiBjb25zdCByZWFkRmlsZSA9IHRhc2tpZnkoZnMucmVhZEZpbGUpXG4gKlxuICogY29uc3QgcmVhZEZpbGUyOiAoZmlsZW5hbWU6IHN0cmluZywgZW5jb2Rpbmc6IHN0cmluZykgPT4gVGFza0VpdGhlcjxOb2RlSlMuRXJybm9FeGNlcHRpb24sIEJ1ZmZlcj4gPSB0YXNraWZ5KFxuICogICBmcy5yZWFkRmlsZVxuICogKVxuICogYGBgXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IHRhc2tpZnkgfSBmcm9tICdmcC10cy9UYXNrRWl0aGVyJ1xuICogaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMnXG4gKlxuICogLy8gY29uc3Qgc3RhdDogKGE6IHN0cmluZyB8IEJ1ZmZlcikgPT4gVGFza0VpdGhlcjxOb2RlSlMuRXJybm9FeGNlcHRpb24sIGZzLlN0YXRzPlxuICogY29uc3Qgc3RhdCA9IHRhc2tpZnkoZnMuc3RhdClcbiAqIGFzc2VydC5zdHJpY3RFcXVhbChzdGF0Lmxlbmd0aCwgMClcbiAqXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRhc2tpZnk8TCwgUj4oZjogKGNiOiAoZTogTCB8IG51bGwgfCB1bmRlZmluZWQsIHI/OiBSKSA9PiB2b2lkKSA9PiB2b2lkKTogKCkgPT4gVGFza0VpdGhlcjxMLCBSPlxuZXhwb3J0IGZ1bmN0aW9uIHRhc2tpZnk8QSwgTCwgUj4oXG4gIGY6IChhOiBBLCBjYjogKGU6IEwgfCBudWxsIHwgdW5kZWZpbmVkLCByPzogUikgPT4gdm9pZCkgPT4gdm9pZFxuKTogKGE6IEEpID0+IFRhc2tFaXRoZXI8TCwgUj5cbmV4cG9ydCBmdW5jdGlvbiB0YXNraWZ5PEEsIEIsIEwsIFI+KFxuICBmOiAoYTogQSwgYjogQiwgY2I6IChlOiBMIHwgbnVsbCB8IHVuZGVmaW5lZCwgcj86IFIpID0+IHZvaWQpID0+IHZvaWRcbik6IChhOiBBLCBiOiBCKSA9PiBUYXNrRWl0aGVyPEwsIFI+XG5leHBvcnQgZnVuY3Rpb24gdGFza2lmeTxBLCBCLCBDLCBMLCBSPihcbiAgZjogKGE6IEEsIGI6IEIsIGM6IEMsIGNiOiAoZTogTCB8IG51bGwgfCB1bmRlZmluZWQsIHI/OiBSKSA9PiB2b2lkKSA9PiB2b2lkXG4pOiAoYTogQSwgYjogQiwgYzogQykgPT4gVGFza0VpdGhlcjxMLCBSPlxuZXhwb3J0IGZ1bmN0aW9uIHRhc2tpZnk8QSwgQiwgQywgRCwgTCwgUj4oXG4gIGY6IChhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCBjYjogKGU6IEwgfCBudWxsIHwgdW5kZWZpbmVkLCByPzogUikgPT4gdm9pZCkgPT4gdm9pZFxuKTogKGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQpID0+IFRhc2tFaXRoZXI8TCwgUj5cbmV4cG9ydCBmdW5jdGlvbiB0YXNraWZ5PEEsIEIsIEMsIEQsIEUsIEwsIFI+KFxuICBmOiAoYTogQSwgYjogQiwgYzogQywgZDogRCwgZTogRSwgY2I6IChlOiBMIHwgbnVsbCB8IHVuZGVmaW5lZCwgcj86IFIpID0+IHZvaWQpID0+IHZvaWRcbik6IChhOiBBLCBiOiBCLCBjOiBDLCBkOiBELCBlOiBFKSA9PiBUYXNrRWl0aGVyPEwsIFI+XG5leHBvcnQgZnVuY3Rpb24gdGFza2lmeTxMLCBSPihmOiBGdW5jdGlvbik6ICgpID0+IFRhc2tFaXRoZXI8TCwgUj4ge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpXG4gICAgcmV0dXJuICgpID0+XG4gICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBjb25zdCBjYlJlc29sdmVyID0gKGU6IEwsIHI6IFIpID0+IChlICE9IG51bGwgPyByZXNvbHZlKF8ubGVmdChlKSkgOiByZXNvbHZlKF8ucmlnaHQocikpKVxuICAgICAgICBmLmFwcGx5KG51bGwsIGFyZ3MuY29uY2F0KGNiUmVzb2x2ZXIpKVxuICAgICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIE1ha2Ugc3VyZSB0aGF0IGEgcmVzb3VyY2UgaXMgY2xlYW5lZCB1cCBpbiB0aGUgZXZlbnQgb2YgYW4gZXhjZXB0aW9uIChcXCopLiBUaGUgcmVsZWFzZSBhY3Rpb24gaXMgY2FsbGVkIHJlZ2FyZGxlc3Mgb2ZcbiAqIHdoZXRoZXIgdGhlIGJvZHkgYWN0aW9uIHRocm93cyAoXFwqKSBvciByZXR1cm5zLlxuICpcbiAqIChcXCopIGkuZS4gcmV0dXJucyBhIGBMZWZ0YFxuICpcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgYnJhY2tldCA9IDxFLCBBLCBCPihcbiAgYWNxdWlyZTogVGFza0VpdGhlcjxFLCBBPixcbiAgdXNlOiAoYTogQSkgPT4gVGFza0VpdGhlcjxFLCBCPixcbiAgcmVsZWFzZTogKGE6IEEsIGU6IEVpdGhlcjxFLCBCPikgPT4gVGFza0VpdGhlcjxFLCB2b2lkPlxuKTogVGFza0VpdGhlcjxFLCBCPiA9PlxuICBwaXBlKFxuICAgIGFjcXVpcmUsXG4gICAgY2hhaW4oKGEpID0+XG4gICAgICBwaXBlKFxuICAgICAgICB1c2UoYSksXG4gICAgICAgIFQuY2hhaW4oKGUpID0+XG4gICAgICAgICAgcGlwZShcbiAgICAgICAgICAgIHJlbGVhc2UoYSwgZSksXG4gICAgICAgICAgICBjaGFpbigoKSA9PiBULm9mKGUpKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBkbyBub3RhdGlvblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEBzaW5jZSAyLjkuMFxuICovXG5leHBvcnQgY29uc3QgRG86IFRhc2tFaXRoZXI8bmV2ZXIsIHt9PiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgb2YoXy5lbXB0eVJlY29yZClcblxuLyoqXG4gKiBAc2luY2UgMi44LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGJpbmRUbyA9XG4gIC8qI19fUFVSRV9fKi9cbiAgYmluZFRvXyhGdW5jdG9yKVxuXG4vKipcbiAqIEBzaW5jZSAyLjguMFxuICovXG5leHBvcnQgY29uc3QgYmluZCA9XG4gIC8qI19fUFVSRV9fKi9cbiAgYmluZF8oQ2hhaW4pXG5cbi8qKlxuICogQHNpbmNlIDIuOC4wXG4gKi9cbmV4cG9ydCBjb25zdCBiaW5kVzogPE4gZXh0ZW5kcyBzdHJpbmcsIEEsIEUyLCBCPihcbiAgbmFtZTogRXhjbHVkZTxOLCBrZXlvZiBBPixcbiAgZjogKGE6IEEpID0+IFRhc2tFaXRoZXI8RTIsIEI+XG4pID0+IDxFMT4oXG4gIGZhOiBUYXNrRWl0aGVyPEUxLCBBPlxuKSA9PiBUYXNrRWl0aGVyPEUxIHwgRTIsIHsgcmVhZG9ubHkgW0sgaW4ga2V5b2YgQSB8IE5dOiBLIGV4dGVuZHMga2V5b2YgQSA/IEFbS10gOiBCIH0+ID0gYmluZCBhcyBhbnlcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gcGlwZWFibGUgc2VxdWVuY2UgU1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEBzaW5jZSAyLjguMFxuICovXG5leHBvcnQgY29uc3QgYXBTID1cbiAgLyojX19QVVJFX18qL1xuICBhcFNfKEFwcGx5UGFyKVxuXG4vKipcbiAqIEBzaW5jZSAyLjguMFxuICovXG5leHBvcnQgY29uc3QgYXBTVzogPEEsIE4gZXh0ZW5kcyBzdHJpbmcsIEUyLCBCPihcbiAgbmFtZTogRXhjbHVkZTxOLCBrZXlvZiBBPixcbiAgZmI6IFRhc2tFaXRoZXI8RTIsIEI+XG4pID0+IDxFMT4oXG4gIGZhOiBUYXNrRWl0aGVyPEUxLCBBPlxuKSA9PiBUYXNrRWl0aGVyPEUxIHwgRTIsIHsgcmVhZG9ubHkgW0sgaW4ga2V5b2YgQSB8IE5dOiBLIGV4dGVuZHMga2V5b2YgQSA/IEFbS10gOiBCIH0+ID0gYXBTIGFzIGFueVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBzZXF1ZW5jZSBUXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgQXBUOiBUYXNrRWl0aGVyPG5ldmVyLCByZWFkb25seSBbXT4gPVxuICAvKiNfX1BVUkVfXyovXG4gIG9mKF8uZW1wdHlSZWFkb25seUFycmF5KVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBhcnJheSB1dGlsc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEVxdWl2YWxlbnQgdG8gYFJlYWRvbmx5Tm9uRW1wdHlBcnJheSN0cmF2ZXJzZVdpdGhJbmRleChBcHBsaWNhdGl2ZVBhcilgLlxuICpcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHRyYXZlcnNlUmVhZG9ubHlOb25FbXB0eUFycmF5V2l0aEluZGV4ID0gPEEsIEUsIEI+KFxuICBmOiAoaW5kZXg6IG51bWJlciwgYTogQSkgPT4gVGFza0VpdGhlcjxFLCBCPlxuKTogKChhczogUmVhZG9ubHlOb25FbXB0eUFycmF5PEE+KSA9PiBUYXNrRWl0aGVyPEUsIFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxCPj4pID0+XG4gIGZsb3coVC50cmF2ZXJzZVJlYWRvbmx5Tm9uRW1wdHlBcnJheVdpdGhJbmRleChmKSwgVC5tYXAoRS50cmF2ZXJzZVJlYWRvbmx5Tm9uRW1wdHlBcnJheVdpdGhJbmRleChTSykpKVxuXG4vKipcbiAqIEVxdWl2YWxlbnQgdG8gYFJlYWRvbmx5QXJyYXkjdHJhdmVyc2VXaXRoSW5kZXgoQXBwbGljYXRpdmVQYXIpYC5cbiAqXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCB0cmF2ZXJzZVJlYWRvbmx5QXJyYXlXaXRoSW5kZXggPSA8QSwgRSwgQj4oXG4gIGY6IChpbmRleDogbnVtYmVyLCBhOiBBKSA9PiBUYXNrRWl0aGVyPEUsIEI+XG4pOiAoKGFzOiBSZWFkb25seUFycmF5PEE+KSA9PiBUYXNrRWl0aGVyPEUsIFJlYWRvbmx5QXJyYXk8Qj4+KSA9PiB7XG4gIGNvbnN0IGcgPSB0cmF2ZXJzZVJlYWRvbmx5Tm9uRW1wdHlBcnJheVdpdGhJbmRleChmKVxuICByZXR1cm4gKGFzKSA9PiAoXy5pc05vbkVtcHR5KGFzKSA/IGcoYXMpIDogQXBUKVxufVxuXG4vKipcbiAqIEVxdWl2YWxlbnQgdG8gYFJlYWRvbmx5QXJyYXkjdHJhdmVyc2VXaXRoSW5kZXgoQXBwbGljYXRpdmVTZXEpYC5cbiAqXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCB0cmF2ZXJzZVJlYWRvbmx5Tm9uRW1wdHlBcnJheVdpdGhJbmRleFNlcSA9IDxBLCBFLCBCPihmOiAoaW5kZXg6IG51bWJlciwgYTogQSkgPT4gVGFza0VpdGhlcjxFLCBCPikgPT4gKFxuICBhczogUmVhZG9ubHlOb25FbXB0eUFycmF5PEE+XG4pOiBUYXNrRWl0aGVyPEUsIFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxCPj4gPT4gKCkgPT5cbiAgXy50YWlsKGFzKS5yZWR1Y2U8UHJvbWlzZTxFaXRoZXI8RSwgTm9uRW1wdHlBcnJheTxCPj4+PihcbiAgICAoYWNjLCBhLCBpKSA9PlxuICAgICAgYWNjLnRoZW4oKGVicykgPT5cbiAgICAgICAgXy5pc0xlZnQoZWJzKVxuICAgICAgICAgID8gYWNjXG4gICAgICAgICAgOiBmKGkgKyAxLCBhKSgpLnRoZW4oKGViKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChfLmlzTGVmdChlYikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlYnMucmlnaHQucHVzaChlYi5yaWdodClcbiAgICAgICAgICAgICAgcmV0dXJuIGVic1xuICAgICAgICAgICAgfSlcbiAgICAgICksXG4gICAgZigwLCBfLmhlYWQoYXMpKSgpLnRoZW4oRS5tYXAoXy5zaW5nbGV0b24pKVxuICApXG5cbi8qKlxuICogRXF1aXZhbGVudCB0byBgUmVhZG9ubHlBcnJheSN0cmF2ZXJzZVdpdGhJbmRleChBcHBsaWNhdGl2ZVNlcSlgLlxuICpcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHRyYXZlcnNlUmVhZG9ubHlBcnJheVdpdGhJbmRleFNlcSA9IDxBLCBFLCBCPihcbiAgZjogKGluZGV4OiBudW1iZXIsIGE6IEEpID0+IFRhc2tFaXRoZXI8RSwgQj5cbik6ICgoYXM6IFJlYWRvbmx5QXJyYXk8QT4pID0+IFRhc2tFaXRoZXI8RSwgUmVhZG9ubHlBcnJheTxCPj4pID0+IHtcbiAgY29uc3QgZyA9IHRyYXZlcnNlUmVhZG9ubHlOb25FbXB0eUFycmF5V2l0aEluZGV4U2VxKGYpXG4gIHJldHVybiAoYXMpID0+IChfLmlzTm9uRW1wdHkoYXMpID8gZyhhcykgOiBBcFQpXG59XG5cbi8qKlxuICogQHNpbmNlIDIuOS4wXG4gKi9cbmV4cG9ydCBjb25zdCB0cmF2ZXJzZUFycmF5V2l0aEluZGV4OiA8QSwgQiwgRT4oXG4gIGY6IChpbmRleDogbnVtYmVyLCBhOiBBKSA9PiBUYXNrRWl0aGVyPEUsIEI+XG4pID0+IChhczogUmVhZG9ubHlBcnJheTxBPikgPT4gVGFza0VpdGhlcjxFLCBSZWFkb25seUFycmF5PEI+PiA9IHRyYXZlcnNlUmVhZG9ubHlBcnJheVdpdGhJbmRleFxuXG4vKipcbiAqIEBzaW5jZSAyLjkuMFxuICovXG5leHBvcnQgY29uc3QgdHJhdmVyc2VBcnJheSA9IDxBLCBCLCBFPihcbiAgZjogKGE6IEEpID0+IFRhc2tFaXRoZXI8RSwgQj5cbik6ICgoYXM6IFJlYWRvbmx5QXJyYXk8QT4pID0+IFRhc2tFaXRoZXI8RSwgUmVhZG9ubHlBcnJheTxCPj4pID0+IHRyYXZlcnNlUmVhZG9ubHlBcnJheVdpdGhJbmRleCgoXywgYSkgPT4gZihhKSlcblxuLyoqXG4gKiBAc2luY2UgMi45LjBcbiAqL1xuZXhwb3J0IGNvbnN0IHNlcXVlbmNlQXJyYXk6IDxBLCBFPihhcnI6IFJlYWRvbmx5QXJyYXk8VGFza0VpdGhlcjxFLCBBPj4pID0+IFRhc2tFaXRoZXI8RSwgUmVhZG9ubHlBcnJheTxBPj4gPVxuICAvKiNfX1BVUkVfXyovXG4gIHRyYXZlcnNlQXJyYXkoaWRlbnRpdHkpXG5cbi8qKlxuICogQHNpbmNlIDIuOS4wXG4gKi9cbmV4cG9ydCBjb25zdCB0cmF2ZXJzZVNlcUFycmF5V2l0aEluZGV4OiA8QSwgQiwgRT4oXG4gIGY6IChpbmRleDogbnVtYmVyLCBhOiBBKSA9PiBUYXNrRWl0aGVyPEUsIEI+XG4pID0+IChhczogUmVhZG9ubHlBcnJheTxBPikgPT4gVGFza0VpdGhlcjxFLCBSZWFkb25seUFycmF5PEI+PiA9IHRyYXZlcnNlUmVhZG9ubHlBcnJheVdpdGhJbmRleFNlcVxuXG4vKipcbiAqIEBzaW5jZSAyLjkuMFxuICovXG5leHBvcnQgY29uc3QgdHJhdmVyc2VTZXFBcnJheSA9IDxBLCBCLCBFPihcbiAgZjogKGE6IEEpID0+IFRhc2tFaXRoZXI8RSwgQj5cbik6ICgoYXM6IFJlYWRvbmx5QXJyYXk8QT4pID0+IFRhc2tFaXRoZXI8RSwgUmVhZG9ubHlBcnJheTxCPj4pID0+IHRyYXZlcnNlUmVhZG9ubHlBcnJheVdpdGhJbmRleFNlcSgoXywgYSkgPT4gZihhKSlcblxuLyoqXG4gKiBAc2luY2UgMi45LjBcbiAqL1xuZXhwb3J0IGNvbnN0IHNlcXVlbmNlU2VxQXJyYXk6IDxBLCBFPihhcnI6IFJlYWRvbmx5QXJyYXk8VGFza0VpdGhlcjxFLCBBPj4pID0+IFRhc2tFaXRoZXI8RSwgUmVhZG9ubHlBcnJheTxBPj4gPVxuICAvKiNfX1BVUkVfXyovXG4gIHRyYXZlcnNlU2VxQXJyYXkoaWRlbnRpdHkpXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGRlcHJlY2F0ZWRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gdHNsaW50OmRpc2FibGU6IGRlcHJlY2F0aW9uXG5cbi8qKlxuICogVXNlIHNtYWxsLCBzcGVjaWZpYyBpbnN0YW5jZXMgaW5zdGVhZC5cbiAqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4wLjBcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBjb25zdCB0YXNrRWl0aGVyOiBNb25hZDI8VVJJPiAmIEJpZnVuY3RvcjI8VVJJPiAmIEFsdDI8VVJJPiAmIE1vbmFkVGFzazI8VVJJPiAmIE1vbmFkVGhyb3cyPFVSST4gPSB7XG4gIFVSSSxcbiAgYmltYXA6IF9iaW1hcCxcbiAgbWFwTGVmdDogX21hcExlZnQsXG4gIG1hcDogX21hcCxcbiAgb2YsXG4gIGFwOiBfYXBQYXIsXG4gIGNoYWluOiBfY2hhaW4sXG4gIGFsdDogX2FsdCxcbiAgZnJvbUlPLFxuICBmcm9tVGFzayxcbiAgdGhyb3dFcnJvclxufVxuXG4vKipcbiAqIFVzZSBzbWFsbCwgc3BlY2lmaWMgaW5zdGFuY2VzIGluc3RlYWQuXG4gKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMC4wXG4gKiBAZGVwcmVjYXRlZFxuICovXG5cbmV4cG9ydCBjb25zdCB0YXNrRWl0aGVyU2VxOiB0eXBlb2YgdGFza0VpdGhlciA9IHtcbiAgVVJJLFxuICBiaW1hcDogX2JpbWFwLFxuICBtYXBMZWZ0OiBfbWFwTGVmdCxcbiAgbWFwOiBfbWFwLFxuICBvZixcbiAgYXA6IF9hcFNlcSxcbiAgY2hhaW46IF9jaGFpbixcbiAgYWx0OiBfYWx0LFxuICBmcm9tSU8sXG4gIGZyb21UYXNrLFxuICB0aHJvd0Vycm9yXG59XG5cbi8qKlxuICogVXNlIFtgZ2V0QXBwbHlTZW1pZ3JvdXBgXSguL0FwcGx5LnRzLmh0bWwjZ2V0YXBwbHlzZW1pZ3JvdXApIGluc3RlYWQuXG4gKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMC4wXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgY29uc3QgZ2V0QXBwbHlTZW1pZ3JvdXA6IDxFLCBBPihTOiBTZW1pZ3JvdXA8QT4pID0+IFNlbWlncm91cDxUYXNrRWl0aGVyPEUsIEE+PiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZ2V0QXBwbHlTZW1pZ3JvdXBfKEFwcGx5U2VxKVxuXG4vKipcbiAqIFVzZSBbYGdldEFwcGxpY2F0aXZlTW9ub2lkYF0oLi9BcHBsaWNhdGl2ZS50cy5odG1sI2dldGFwcGxpY2F0aXZlbW9ub2lkKSBpbnN0ZWFkLlxuICpcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjAuMFxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IGdldEFwcGx5TW9ub2lkOiA8RSwgQT4oTTogTW9ub2lkPEE+KSA9PiBNb25vaWQ8VGFza0VpdGhlcjxFLCBBPj4gPVxuICAvKiNfX1BVUkVfXyovXG4gIGdldEFwcGxpY2F0aXZlTW9ub2lkKEFwcGxpY2F0aXZlU2VxKVxuXG4vKipcbiAqIFVzZSBbYGdldEFwcGx5U2VtaWdyb3VwYF0oLi9BcHBseS50cy5odG1sI2dldGFwcGx5c2VtaWdyb3VwKSBpbnN0ZWFkLlxuICpcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjAuMFxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IGdldFNlbWlncm91cCA9IDxFLCBBPihTOiBTZW1pZ3JvdXA8QT4pOiBTZW1pZ3JvdXA8VGFza0VpdGhlcjxFLCBBPj4gPT5cbiAgZ2V0QXBwbHlTZW1pZ3JvdXBfKFQuQXBwbHlTZXEpKEUuZ2V0U2VtaWdyb3VwKFMpKVxuXG4vKipcbiAqIFVzZSBbYGdldEFwcGxpY2F0aXZlVGFza1ZhbGlkYXRpb25gXSgjZ2V0YXBwbGljYXRpdmV0YXNrdmFsaWRhdGlvbikgYW5kIFtgZ2V0QWx0VGFza1ZhbGlkYXRpb25gXSgjZ2V0YWx0dGFza3ZhbGlkYXRpb24pIGluc3RlYWQuXG4gKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMC4wXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGFza1ZhbGlkYXRpb248RT4oXG4gIFNFOiBTZW1pZ3JvdXA8RT5cbik6IE1vbmFkMkM8VVJJLCBFPiAmIEJpZnVuY3RvcjI8VVJJPiAmIEFsdDJDPFVSSSwgRT4gJiBNb25hZFRhc2syQzxVUkksIEU+ICYgTW9uYWRUaHJvdzJDPFVSSSwgRT4ge1xuICBjb25zdCBhcHBsaWNhdGl2ZVRhc2tWYWxpZGF0aW9uID0gZ2V0QXBwbGljYXRpdmVUYXNrVmFsaWRhdGlvbihULkFwcGxpY2F0aXZlUGFyLCBTRSlcbiAgY29uc3QgYWx0VGFza1ZhbGlkYXRpb24gPSBnZXRBbHRUYXNrVmFsaWRhdGlvbihTRSlcbiAgcmV0dXJuIHtcbiAgICBVUkksXG4gICAgX0U6IHVuZGVmaW5lZCBhcyBhbnksXG4gICAgbWFwOiBfbWFwLFxuICAgIGFwOiBhcHBsaWNhdGl2ZVRhc2tWYWxpZGF0aW9uLmFwLFxuICAgIG9mLFxuICAgIGNoYWluOiBfY2hhaW4sXG4gICAgYmltYXA6IF9iaW1hcCxcbiAgICBtYXBMZWZ0OiBfbWFwTGVmdCxcbiAgICBhbHQ6IGFsdFRhc2tWYWxpZGF0aW9uLmFsdCxcbiAgICBmcm9tSU8sXG4gICAgZnJvbVRhc2ssXG4gICAgdGhyb3dFcnJvclxuICB9XG59XG4iXX0=