"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.either = exports.duplicate = exports.chainW = exports.chainOptionK = exports.chainNullableK = exports.chainFirstW = exports.chainFirst = exports.chain = exports.bindW = exports.bindTo = exports.bind = exports.bimap = exports.apW = exports.apSecond = exports.apSW = exports.apS = exports.apFirst = exports.ap = exports.altW = exports.alt = exports.URI = exports.Traversable = exports.Pointed = exports.MonadThrow = exports.Monad = exports.Functor = exports.FromEither = exports.Foldable = exports.Extend = exports.Do = exports.ChainRec = exports.Chain = exports.Bifunctor = exports.Apply = exports.Applicative = exports.ApT = exports.Alt = void 0;
exports.elem = elem;
exports.getShow = exports.getSemigroup = exports.getOrElseW = exports.getOrElse = exports.getFilterable = exports.getEq = exports.getCompactable = exports.getApplySemigroup = exports.getApplyMonoid = exports.getApplicativeValidation = exports.getAltValidation = exports.fromPredicate = exports.fromOptionK = exports.fromOption = exports.fromNullableK = exports.fromNullable = exports.foldW = exports.foldMap = exports.fold = exports.flattenW = exports.flatten = exports.flap = exports.filterOrElseW = exports.filterOrElse = exports.extend = exports.exists = void 0;
exports.getValidation = getValidation;
exports.orElseW = exports.orElse = exports.of = exports.matchW = exports.match = exports.mapLeft = exports.map = exports.left = exports.isRight = exports.isLeft = exports.getWitherable = exports.getValidationSemigroup = exports.getValidationMonoid = void 0;
exports.parseJSON = parseJSON;
exports.throwError = exports.swap = exports.stringifyJSON = exports.sequenceArray = exports.sequence = exports.right = exports.reduceRight = exports.reduce = void 0;
exports.toError = toError;
exports.tryCatchK = exports.tryCatch = exports.traverseReadonlyNonEmptyArrayWithIndex = exports.traverseReadonlyArrayWithIndex = exports.traverseArrayWithIndex = exports.traverseArray = exports.traverse = exports.toUnion = void 0;

var _Applicative = require("./Applicative");

var _Apply = require("./Apply");

var _Chain = require("./Chain");

var _ChainRec = require("./ChainRec");

var _FromEither = require("./FromEither");

var _function = require("./function");

var _Functor = require("./Functor");

var _ = _interopRequireWildcard(require("./internal"));

var _Separated = require("./Separated");

var _Witherable = require("./Witherable");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * ```ts
 * type Either<E, A> = Left<E> | Right<A>
 * ```
 *
 * Represents a value of one of two possible types (a disjoint union).
 *
 * An instance of `Either` is either an instance of `Left` or `Right`.
 *
 * A common use of `Either` is as an alternative to `Option` for dealing with possible missing values. In this usage,
 * `None` is replaced with a `Left` which can contain useful information. `Right` takes the place of `Some`. Convention
 * dictates that `Left` is used for failure and `Right` is used for success.
 *
 * @since 2.0.0
 */
// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------

/**
 * Constructs a new `Either` holding a `Left` value. This usually represents a failure, due to the right-bias of this
 * structure.
 *
 * @category constructors
 * @since 2.0.0
 */
var left = _.left;
/**
 * Constructs a new `Either` holding a `Right` value. This usually represents a successful value due to the right bias
 * of this structure.
 *
 * @category constructors
 * @since 2.0.0
 */

exports.left = left;
var right = _.right; // -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------

exports.right = right;

var _map = function _map(fa, f) {
  return (0, _function.pipe)(fa, map(f));
};

var _ap = function _ap(fab, fa) {
  return (0, _function.pipe)(fab, ap(fa));
};
/* istanbul ignore next */


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
    var foldMapM = foldMap(M);
    return (0, _function.pipe)(fa, foldMapM(f));
  };
};
/* istanbul ignore next */


var _reduceRight = function _reduceRight(fa, b, f) {
  return (0, _function.pipe)(fa, reduceRight(b, f));
};

var _traverse = function _traverse(F) {
  var traverseF = traverse(F);
  return function (ta, f) {
    return (0, _function.pipe)(ta, traverseF(f));
  };
};

var _bimap = function _bimap(fa, f, g) {
  return (0, _function.pipe)(fa, bimap(f, g));
};

var _mapLeft = function _mapLeft(fa, f) {
  return (0, _function.pipe)(fa, mapLeft(f));
};
/* istanbul ignore next */


var _alt = function _alt(fa, that) {
  return (0, _function.pipe)(fa, alt(that));
};
/* istanbul ignore next */


var _extend = function _extend(wa, f) {
  return (0, _function.pipe)(wa, extend(f));
};

var _chainRec = function _chainRec(a, f) {
  return (0, _ChainRec.tailRec)(f(a), function (e) {
    return isLeft(e) ? right(left(e.left)) : isLeft(e.right) ? left(f(e.right.left)) : right(right(e.right.right));
  });
}; // -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------

/**
 * @category instances
 * @since 2.0.0
 */


var URI = 'Either';
/**
 * @category instances
 * @since 2.0.0
 */

exports.URI = URI;

/**
 * @category instances
 * @since 2.0.0
 */
var getShow = function getShow(SE, SA) {
  return {
    show: function show(ma) {
      return isLeft(ma) ? "left(".concat(SE.show(ma.left), ")") : "right(".concat(SA.show(ma.right), ")");
    }
  };
};
/**
 * @category instances
 * @since 2.0.0
 */


exports.getShow = getShow;

var getEq = function getEq(EL, EA) {
  return {
    equals: function equals(x, y) {
      return x === y || (isLeft(x) ? isLeft(y) && EL.equals(x.left, y.left) : isRight(y) && EA.equals(x.right, y.right));
    }
  };
};
/**
 * Semigroup returning the left-most non-`Left` value. If both operands are `Right`s then the inner values are
 * concatenated using the provided `Semigroup`
 *
 * @example
 * import { getSemigroup, left, right } from 'fp-ts/Either'
 * import { SemigroupSum } from 'fp-ts/number'
 *
 * const S = getSemigroup<string, number>(SemigroupSum)
 * assert.deepStrictEqual(S.concat(left('a'), left('b')), left('a'))
 * assert.deepStrictEqual(S.concat(left('a'), right(2)), right(2))
 * assert.deepStrictEqual(S.concat(right(1), left('b')), right(1))
 * assert.deepStrictEqual(S.concat(right(1), right(2)), right(3))
 *
 * @category instances
 * @since 2.0.0
 */


exports.getEq = getEq;

var getSemigroup = function getSemigroup(S) {
  return {
    concat: function concat(x, y) {
      return isLeft(y) ? x : isLeft(x) ? y : right(S.concat(x.right, y.right));
    }
  };
};
/**
 * Builds a `Compactable` instance for `Either` given `Monoid` for the left side.
 *
 * @category instances
 * @since 2.10.0
 */


exports.getSemigroup = getSemigroup;

var getCompactable = function getCompactable(M) {
  var empty = left(M.empty);
  return {
    URI: URI,
    _E: undefined,
    compact: function compact(ma) {
      return isLeft(ma) ? ma : ma.right._tag === 'None' ? empty : right(ma.right.value);
    },
    separate: function separate(ma) {
      return isLeft(ma) ? (0, _Separated.separated)(ma, ma) : isLeft(ma.right) ? (0, _Separated.separated)(right(ma.right.left), empty) : (0, _Separated.separated)(empty, right(ma.right.right));
    }
  };
};
/**
 * Builds a `Filterable` instance for `Either` given `Monoid` for the left side
 *
 * @category instances
 * @since 2.10.0
 */


exports.getCompactable = getCompactable;

var getFilterable = function getFilterable(M) {
  var empty = left(M.empty);

  var _getCompactable = getCompactable(M),
      compact = _getCompactable.compact,
      separate = _getCompactable.separate;

  var filter = function filter(ma, predicate) {
    return isLeft(ma) ? ma : predicate(ma.right) ? ma : empty;
  };

  var partition = function partition(ma, p) {
    return isLeft(ma) ? (0, _Separated.separated)(ma, ma) : p(ma.right) ? (0, _Separated.separated)(empty, right(ma.right)) : (0, _Separated.separated)(right(ma.right), empty);
  };

  return {
    URI: URI,
    _E: undefined,
    map: _map,
    compact: compact,
    separate: separate,
    filter: filter,
    filterMap: function filterMap(ma, f) {
      if (isLeft(ma)) {
        return ma;
      }

      var ob = f(ma.right);
      return ob._tag === 'None' ? empty : right(ob.value);
    },
    partition: partition,
    partitionMap: function partitionMap(ma, f) {
      if (isLeft(ma)) {
        return (0, _Separated.separated)(ma, ma);
      }

      var e = f(ma.right);
      return isLeft(e) ? (0, _Separated.separated)(right(e.left), empty) : (0, _Separated.separated)(empty, right(e.right));
    }
  };
};
/**
 * Builds `Witherable` instance for `Either` given `Monoid` for the left side
 *
 * @category instances
 * @since 2.0.0
 */


exports.getFilterable = getFilterable;

var getWitherable = function getWitherable(M) {
  var F_ = getFilterable(M);
  var C = getCompactable(M);
  return {
    URI: URI,
    _E: undefined,
    map: _map,
    compact: F_.compact,
    separate: F_.separate,
    filter: F_.filter,
    filterMap: F_.filterMap,
    partition: F_.partition,
    partitionMap: F_.partitionMap,
    traverse: _traverse,
    sequence: sequence,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    wither: (0, _Witherable.witherDefault)(Traversable, C),
    wilt: (0, _Witherable.wiltDefault)(Traversable, C)
  };
};
/**
 * @category instances
 * @since 2.7.0
 */


exports.getWitherable = getWitherable;

var getApplicativeValidation = function getApplicativeValidation(SE) {
  return {
    URI: URI,
    _E: undefined,
    map: _map,
    ap: function ap(fab, fa) {
      return isLeft(fab) ? isLeft(fa) ? left(SE.concat(fab.left, fa.left)) : fab : isLeft(fa) ? fa : right(fab.right(fa.right));
    },
    of: of
  };
};
/**
 * @category instances
 * @since 2.7.0
 */


exports.getApplicativeValidation = getApplicativeValidation;

var getAltValidation = function getAltValidation(SE) {
  return {
    URI: URI,
    _E: undefined,
    map: _map,
    alt: function alt(me, that) {
      if (isRight(me)) {
        return me;
      }

      var ea = that();
      return isLeft(ea) ? left(SE.concat(me.left, ea.left)) : ea;
    }
  };
};
/**
 * @category instance operations
 * @since 2.0.0
 */


exports.getAltValidation = getAltValidation;

var map = function map(f) {
  return function (fa) {
    return isLeft(fa) ? fa : right(f(fa.right));
  };
};
/**
 * @category instances
 * @since 2.7.0
 */


exports.map = map;
var Functor = {
  URI: URI,
  map: _map
};
/**
 * @category instance operations
 * @since 2.7.0
 */

exports.Functor = Functor;
var of = right;
/**
 * @category instances
 * @since 2.10.0
 */

exports.of = of;
var Pointed = {
  URI: URI,
  of: of
};
/**
 * Less strict version of [`ap`](#ap).
 *
 * @category instance operations
 * @since 2.8.0
 */

exports.Pointed = Pointed;

var apW = function apW(fa) {
  return function (fab) {
    return isLeft(fab) ? fab : isLeft(fa) ? fa : right(fab.right(fa.right));
  };
};
/**
 * Apply a function to an argument under a type constructor.
 *
 * @category instance operations
 * @since 2.0.0
 */


exports.apW = apW;
var ap = apW;
/**
 * @category instances
 * @since 2.10.0
 */

exports.ap = ap;
var Apply = {
  URI: URI,
  map: _map,
  ap: _ap
};
/**
 * @category instances
 * @since 2.7.0
 */

exports.Apply = Apply;
var Applicative = {
  URI: URI,
  map: _map,
  ap: _ap,
  of: of
};
/**
 * Less strict version of [`chain`](#chain).
 *
 * @category instance operations
 * @since 2.6.0
 */

exports.Applicative = Applicative;

var chainW = function chainW(f) {
  return function (ma) {
    return isLeft(ma) ? ma : f(ma.right);
  };
};
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation.
 *
 * @category instance operations
 * @since 2.0.0
 */


exports.chainW = chainW;
var chain = chainW;
/**
 * @category instances
 * @since 2.10.0
 */

exports.chain = chain;
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
 * Left-associative fold of a structure.
 *
 * @example
 * import { pipe } from 'fp-ts/function'
 * import * as E from 'fp-ts/Either'
 *
 * const startWith = 'prefix'
 * const concat = (a: string, b: string) => `${a}:${b}`
 *
 * assert.deepStrictEqual(
 *   pipe(E.right('a'), E.reduce(startWith, concat)),
 *   'prefix:a'
 * )
 *
 * assert.deepStrictEqual(
 *   pipe(E.left('e'), E.reduce(startWith, concat)),
 *   'prefix'
 * )
 *
 * @category instance operations
 * @since 2.0.0
 */

exports.Monad = Monad;

var reduce = function reduce(b, f) {
  return function (fa) {
    return isLeft(fa) ? b : f(b, fa.right);
  };
};
/**
 * Map each element of the structure to a monoid, and combine the results.
 *
 * @example
 * import { pipe } from 'fp-ts/function'
 * import * as E from 'fp-ts/Either'
 * import * as S from 'fp-ts/string'
 *
 * const yell = (a: string) => `${a}!`
 *
 * assert.deepStrictEqual(
 *   pipe(E.right('a'), E.foldMap(S.Monoid)(yell)),
 *   'a!'
 * )
 *
 * assert.deepStrictEqual(
 *   pipe(E.left('e'), E.foldMap(S.Monoid)(yell)),
 *   S.Monoid.empty
 * )
 *
 * @category instance operations
 * @since 2.0.0
 */


exports.reduce = reduce;

var foldMap = function foldMap(M) {
  return function (f) {
    return function (fa) {
      return isLeft(fa) ? M.empty : f(fa.right);
    };
  };
};
/**
 * Right-associative fold of a structure.
 *
 * @example
 * import { pipe } from 'fp-ts/function'
 * import * as E from 'fp-ts/Either'
 *
 * const startWith = 'postfix'
 * const concat = (a: string, b: string) => `${a}:${b}`
 *
 * assert.deepStrictEqual(
 *   pipe(E.right('a'), E.reduceRight(startWith, concat)),
 *   'a:postfix'
 * )
 *
 * assert.deepStrictEqual(
 *   pipe(E.left('e'), E.reduceRight(startWith, concat)),
 *   'postfix'
 * )
 *
 * @category instance operations
 * @since 2.0.0
 */


exports.foldMap = foldMap;

var reduceRight = function reduceRight(b, f) {
  return function (fa) {
    return isLeft(fa) ? b : f(fa.right, b);
  };
};
/**
 * @category instances
 * @since 2.7.0
 */


exports.reduceRight = reduceRight;
var Foldable = {
  URI: URI,
  reduce: _reduce,
  foldMap: _foldMap,
  reduceRight: _reduceRight
};
/**
 * Map each element of a structure to an action, evaluate these actions from left to right, and collect the results.
 *
 * @example
 * import { pipe } from 'fp-ts/function'
 * import * as RA from 'fp-ts/ReadonlyArray'
 * import * as E from 'fp-ts/Either'
 * import * as O from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(
 *   pipe(E.right(['a']), E.traverse(O.Applicative)(RA.head)),
 *   O.some(E.right('a'))
 *  )
 *
 * assert.deepStrictEqual(
 *   pipe(E.right([]), E.traverse(O.Applicative)(RA.head)),
 *   O.none
 * )
 *
 * @category instance operations
 * @since 2.6.3
 */

exports.Foldable = Foldable;

var traverse = function traverse(F) {
  return function (f) {
    return function (ta) {
      return isLeft(ta) ? F.of(left(ta.left)) : F.map(f(ta.right), right);
    };
  };
};
/**
 * Evaluate each monadic action in the structure from left to right, and collect the results.
 *
 * @example
 * import { pipe } from 'fp-ts/function'
 * import * as E from 'fp-ts/Either'
 * import * as O from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(
 *   pipe(E.right(O.some('a')), E.sequence(O.Applicative)),
 *   O.some(E.right('a'))
 *  )
 *
 * assert.deepStrictEqual(
 *   pipe(E.right(O.none), E.sequence(O.Applicative)),
 *   O.none
 * )
 *
 * @category instance operations
 * @since 2.6.3
 */


exports.traverse = traverse;

var sequence = function sequence(F) {
  return function (ma) {
    return isLeft(ma) ? F.of(left(ma.left)) : F.map(ma.right, right);
  };
};
/**
 * @category instances
 * @since 2.7.0
 */


exports.sequence = sequence;
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
 * Map a pair of functions over the two type arguments of the bifunctor.
 *
 * @category instance operations
 * @since 2.0.0
 */

exports.Traversable = Traversable;

var bimap = function bimap(f, g) {
  return function (fa) {
    return isLeft(fa) ? left(f(fa.left)) : right(g(fa.right));
  };
};
/**
 * Map a function over the first type argument of a bifunctor.
 *
 * @category instance operations
 * @since 2.0.0
 */


exports.bimap = bimap;

var mapLeft = function mapLeft(f) {
  return function (fa) {
    return isLeft(fa) ? left(f(fa.left)) : fa;
  };
};
/**
 * @category instances
 * @since 2.7.0
 */


exports.mapLeft = mapLeft;
var Bifunctor = {
  URI: URI,
  bimap: _bimap,
  mapLeft: _mapLeft
};
/**
 * Less strict version of [`alt`](#alt).
 *
 * @category instance operations
 * @since 2.9.0
 */

exports.Bifunctor = Bifunctor;

var altW = function altW(that) {
  return function (fa) {
    return isLeft(fa) ? that() : fa;
  };
};
/**
 * Identifies an associative operation on a type constructor. It is similar to `Semigroup`, except that it applies to
 * types of kind `* -> *`.
 *
 * @category instance operations
 * @since 2.0.0
 */


exports.altW = altW;
var alt = altW;
/**
 * @category instances
 * @since 2.7.0
 */

exports.alt = alt;
var Alt = {
  URI: URI,
  map: _map,
  alt: _alt
};
/**
 * @category instance operations
 * @since 2.0.0
 */

exports.Alt = Alt;

var extend = function extend(f) {
  return function (wa) {
    return isLeft(wa) ? wa : right(f(wa));
  };
};
/**
 * @category instances
 * @since 2.7.0
 */


exports.extend = extend;
var Extend = {
  URI: URI,
  map: _map,
  extend: _extend
};
/**
 * @category instances
 * @since 2.7.0
 */

exports.Extend = Extend;
var ChainRec = {
  URI: URI,
  map: _map,
  ap: _ap,
  chain: _chain,
  chainRec: _chainRec
};
/**
 * @category instance operations
 * @since 2.6.3
 */

exports.ChainRec = ChainRec;
var throwError = left;
/**
 * @category instances
 * @since 2.7.0
 */

exports.throwError = throwError;
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
  fromEither: _function.identity
};
/**
 * @example
 * import { fromPredicate, left, right } from 'fp-ts/Either'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.deepStrictEqual(
 *   pipe(
 *     1,
 *     fromPredicate(
 *       (n) => n > 0,
 *       () => 'error'
 *     )
 *   ),
 *   right(1)
 * )
 * assert.deepStrictEqual(
 *   pipe(
 *     -1,
 *     fromPredicate(
 *       (n) => n > 0,
 *       () => 'error'
 *     )
 *   ),
 *   left('error')
 * )
 *
 * @category constructors
 * @since 2.0.0
 */

exports.FromEither = FromEither;
var fromPredicate = /*#__PURE__*/(0, _FromEither.fromPredicate)(FromEither); // -------------------------------------------------------------------------------------
// natural transformations
// -------------------------------------------------------------------------------------

/**
 * @example
 * import * as E from 'fp-ts/Either'
 * import { pipe } from 'fp-ts/function'
 * import * as O from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(
 *   pipe(
 *     O.some(1),
 *     E.fromOption(() => 'error')
 *   ),
 *   E.right(1)
 * )
 * assert.deepStrictEqual(
 *   pipe(
 *     O.none,
 *     E.fromOption(() => 'error')
 *   ),
 *   E.left('error')
 * )
 *
 * @category natural transformations
 * @since 2.0.0
 */

exports.fromPredicate = fromPredicate;
var fromOption = /*#__PURE__*/(0, _FromEither.fromOption)(FromEither); // -------------------------------------------------------------------------------------
// refinements
// -------------------------------------------------------------------------------------

/**
 * Returns `true` if the either is an instance of `Left`, `false` otherwise.
 *
 * @category refinements
 * @since 2.0.0
 */

exports.fromOption = fromOption;
var isLeft = _.isLeft;
/**
 * Returns `true` if the either is an instance of `Right`, `false` otherwise.
 *
 * @category refinements
 * @since 2.0.0
 */

exports.isLeft = isLeft;
var isRight = _.isRight; // -------------------------------------------------------------------------------------
// destructors
// -------------------------------------------------------------------------------------

/**
 * Less strict version of [`match`](#match).
 *
 * @category destructors
 * @since 2.10.0
 */

exports.isRight = isRight;

var matchW = function matchW(onLeft, onRight) {
  return function (ma) {
    return isLeft(ma) ? onLeft(ma.left) : onRight(ma.right);
  };
};
/**
 * Alias of [`matchW`](#matchw).
 *
 * @category destructors
 * @since 2.10.0
 */


exports.matchW = matchW;
var foldW = matchW;
/**
 * Takes two functions and an `Either` value, if the value is a `Left` the inner value is applied to the first function,
 * if the value is a `Right` the inner value is applied to the second function.
 *
 * @example
 * import { match, left, right } from 'fp-ts/Either'
 * import { pipe } from 'fp-ts/function'
 *
 * function onLeft(errors: Array<string>): string {
 *   return `Errors: ${errors.join(', ')}`
 * }
 *
 * function onRight(value: number): string {
 *   return `Ok: ${value}`
 * }
 *
 * assert.strictEqual(
 *   pipe(
 *     right(1),
 *     match(onLeft, onRight)
 *   ),
 *   'Ok: 1'
 * )
 * assert.strictEqual(
 *   pipe(
 *     left(['error 1', 'error 2']),
 *     match(onLeft, onRight)
 *   ),
 *   'Errors: error 1, error 2'
 * )
 *
 * @category destructors
 * @since 2.10.0
 */

exports.foldW = foldW;
var match = matchW;
/**
 * Alias of [`match`](#match).
 *
 * @category destructors
 * @since 2.0.0
 */

exports.match = match;
var fold = match;
/**
 * Less strict version of [`getOrElse`](#getorelse).
 *
 * @category destructors
 * @since 2.6.0
 */

exports.fold = fold;

var getOrElseW = function getOrElseW(onLeft) {
  return function (ma) {
    return isLeft(ma) ? onLeft(ma.left) : ma.right;
  };
};
/**
 * Returns the wrapped value if it's a `Right` or a default value if is a `Left`.
 *
 * @example
 * import { getOrElse, left, right } from 'fp-ts/Either'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.deepStrictEqual(
 *   pipe(
 *     right(1),
 *     getOrElse(() => 0)
 *   ),
 *   1
 * )
 * assert.deepStrictEqual(
 *   pipe(
 *     left('error'),
 *     getOrElse(() => 0)
 *   ),
 *   0
 * )
 *
 * @category destructors
 * @since 2.0.0
 */


exports.getOrElseW = getOrElseW;
var getOrElse = getOrElseW; // -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------

/**
 * Derivable from `Functor`.
 *
 * @category combinators
 * @since 2.10.0
 */

exports.getOrElse = getOrElse;
var flap = /*#__PURE__*/(0, _Functor.flap)(Functor);
/**
 * Combine two effectful actions, keeping only the result of the first.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.0.0
 */

exports.flap = flap;
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
 * Composes computations in sequence, using the return value of one computation to determine the next computation and
 * keeping only the result of the first.
 *
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.0.0
 */

exports.apSecond = apSecond;
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
 * Less strict version of [`flatten`](#flatten).
 *
 * @category combinators
 * @since 2.11.0
 */

exports.chainFirstW = chainFirstW;
var flattenW = /*#__PURE__*/chainW(_function.identity);
/**
 * The `flatten` function is the conventional monad join operator. It is used to remove one level of monadic structure, projecting its bound argument into the outer level.
 *
 * Derivable from `Chain`.
 *
 * @example
 * import * as E from 'fp-ts/Either'
 *
 * assert.deepStrictEqual(E.flatten(E.right(E.right('a'))), E.right('a'))
 * assert.deepStrictEqual(E.flatten(E.right(E.left('e'))), E.left('e'))
 * assert.deepStrictEqual(E.flatten(E.left('e')), E.left('e'))
 *
 * @category combinators
 * @since 2.0.0
 */

exports.flattenW = flattenW;
var flatten = flattenW;
/**
 * Derivable from `Extend`.
 *
 * @category combinators
 * @since 2.0.0
 */

exports.flatten = flatten;
var duplicate = /*#__PURE__*/extend(_function.identity);
/**
 * @category combinators
 * @since 2.10.0
 */

exports.duplicate = duplicate;
var fromOptionK = /*#__PURE__*/(0, _FromEither.fromOptionK)(FromEither);
/**
 * @category combinators
 * @since 2.11.0
 */

exports.fromOptionK = fromOptionK;
var chainOptionK = /*#__PURE__*/(0, _FromEither.chainOptionK)(FromEither, Chain);
/**
 * @example
 * import * as E from 'fp-ts/Either'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.deepStrictEqual(
 *   pipe(
 *     E.right(1),
 *     E.filterOrElse(
 *       (n) => n > 0,
 *       () => 'error'
 *     )
 *   ),
 *   E.right(1)
 * )
 * assert.deepStrictEqual(
 *   pipe(
 *     E.right(-1),
 *     E.filterOrElse(
 *       (n) => n > 0,
 *       () => 'error'
 *     )
 *   ),
 *   E.left('error')
 * )
 * assert.deepStrictEqual(
 *   pipe(
 *     E.left('a'),
 *     E.filterOrElse(
 *       (n) => n > 0,
 *       () => 'error'
 *     )
 *   ),
 *   E.left('a')
 * )
 *
 * @category combinators
 * @since 2.0.0
 */

exports.chainOptionK = chainOptionK;
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
 * Returns a `Right` if is a `Left` (and vice versa).
 *
 * @category combinators
 * @since 2.0.0
 */

exports.filterOrElseW = filterOrElseW;

var swap = function swap(ma) {
  return isLeft(ma) ? right(ma.left) : left(ma.right);
};
/**
 * Less strict version of [`orElse`](#orelse).
 *
 * @category combinators
 * @since 2.10.0
 */


exports.swap = swap;

var orElseW = function orElseW(onLeft) {
  return function (ma) {
    return isLeft(ma) ? onLeft(ma.left) : ma;
  };
};
/**
 * Useful for recovering from errors.
 *
 * @category combinators
 * @since 2.0.0
 */


exports.orElseW = orElseW;
var orElse = orElseW; // -------------------------------------------------------------------------------------
// interop
// -------------------------------------------------------------------------------------

/**
 * Takes a default and a nullable value, if the value is not nully, turn it into a `Right`, if the value is nully use
 * the provided default as a `Left`.
 *
 * @example
 * import { fromNullable, left, right } from 'fp-ts/Either'
 *
 * const parse = fromNullable('nully')
 *
 * assert.deepStrictEqual(parse(1), right(1))
 * assert.deepStrictEqual(parse(null), left('nully'))
 *
 * @category interop
 * @since 2.0.0
 */

exports.orElse = orElse;

var fromNullable = function fromNullable(e) {
  return function (a) {
    return a == null ? left(e) : right(a);
  };
};
/**
 * Constructs a new `Either` from a function that might throw.
 *
 * See also [`tryCatchK`](#trycatchk).
 *
 * @example
 * import * as E from 'fp-ts/Either'
 *
 * const unsafeHead = <A>(as: ReadonlyArray<A>): A => {
 *   if (as.length > 0) {
 *     return as[0]
 *   } else {
 *     throw new Error('empty array')
 *   }
 * }
 *
 * const head = <A>(as: ReadonlyArray<A>): E.Either<Error, A> =>
 *   E.tryCatch(() => unsafeHead(as), e => (e instanceof Error ? e : new Error('unknown error')))
 *
 * assert.deepStrictEqual(head([]), E.left(new Error('empty array')))
 * assert.deepStrictEqual(head([1, 2, 3]), E.right(1))
 *
 * @category interop
 * @since 2.0.0
 */


exports.fromNullable = fromNullable;

var tryCatch = function tryCatch(f, onThrow) {
  try {
    return right(f());
  } catch (e) {
    return left(onThrow(e));
  }
};
/**
 * Converts a function that may throw to one returning a `Either`.
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
 * @since 2.9.0
 */


exports.tryCatchK = tryCatchK;

var fromNullableK = function fromNullableK(e) {
  var from = fromNullable(e);
  return function (f) {
    return (0, _function.flow)(f, from);
  };
};
/**
 * @category interop
 * @since 2.9.0
 */


exports.fromNullableK = fromNullableK;

var chainNullableK = function chainNullableK(e) {
  var from = fromNullableK(e);
  return function (f) {
    return chain(from(f));
  };
};
/**
 * @category interop
 * @since 2.10.0
 */


exports.chainNullableK = chainNullableK;
var toUnion = /*#__PURE__*/foldW(_function.identity, _function.identity); // -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------

/**
 * Default value for the `onError` argument of `tryCatch`
 *
 * @since 2.0.0
 */

exports.toUnion = toUnion;

function toError(e) {
  return e instanceof Error ? e : new Error(String(e));
}
/**
 * @since 2.0.0
 */


function elem(E) {
  return function (a, ma) {
    if (ma === undefined) {
      var elemE = elem(E);
      return function (ma) {
        return elemE(a, ma);
      };
    }

    return isLeft(ma) ? false : E.equals(a, ma.right);
  };
}
/**
 * Returns `false` if `Left` or returns the result of the application of the given predicate to the `Right` value.
 *
 * @example
 * import { exists, left, right } from 'fp-ts/Either'
 *
 * const gt2 = exists((n: number) => n > 2)
 *
 * assert.strictEqual(gt2(left('a')), false)
 * assert.strictEqual(gt2(right(1)), false)
 * assert.strictEqual(gt2(right(3)), true)
 *
 * @since 2.0.0
 */


var exists = function exists(predicate) {
  return function (ma) {
    return isLeft(ma) ? false : predicate(ma.right);
  };
}; // -------------------------------------------------------------------------------------
// do notation
// -------------------------------------------------------------------------------------

/**
 * @since 2.9.0
 */


exports.exists = exists;
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
  return function (as) {
    var e = f(0, _.head(as));

    if (isLeft(e)) {
      return e;
    }

    var out = [e.right];

    for (var i = 1; i < as.length; i++) {
      var _e = f(i, as[i]);

      if (isLeft(_e)) {
        return _e;
      }

      out.push(_e.right);
    }

    return right(out);
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
 * Use [`Json`](./Json.ts.html) module instead.
 *
 * @since 2.6.7
 * @deprecated
 */

exports.sequenceArray = sequenceArray;

/**
 * Use [`parse`](./Json.ts.html#parse) instead.
 *
 * @category constructors
 * @since 2.0.0
 * @deprecated
 */
function parseJSON(s, onError) {
  return tryCatch(function () {
    return JSON.parse(s);
  }, onError);
}
/**
 * Use [`stringify`](./Json.ts.html#stringify) instead.
 *
 * @category constructors
 * @since 2.0.0
 * @deprecated
 */


var stringifyJSON = function stringifyJSON(u, onError) {
  return tryCatch(function () {
    var s = JSON.stringify(u);

    if (typeof s !== 'string') {
      throw new Error('Converting unsupported structure to JSON');
    }

    return s;
  }, onError);
};
/**
 * Use small, specific instances instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */


exports.stringifyJSON = stringifyJSON;
var either = {
  URI: URI,
  map: _map,
  of: of,
  ap: _ap,
  chain: _chain,
  reduce: _reduce,
  foldMap: _foldMap,
  reduceRight: _reduceRight,
  traverse: _traverse,
  sequence: sequence,
  bimap: _bimap,
  mapLeft: _mapLeft,
  alt: _alt,
  extend: _extend,
  chainRec: _chainRec,
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

exports.either = either;
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

var getValidationSemigroup = function getValidationSemigroup(SE, SA) {
  return (0, _Apply.getApplySemigroup)(getApplicativeValidation(SE))(SA);
};
/**
 * Use [`getApplicativeMonoid`](./Applicative.ts.html#getapplicativemonoid) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */


exports.getValidationSemigroup = getValidationSemigroup;

var getValidationMonoid = function getValidationMonoid(SE, MA) {
  return (0, _Applicative.getApplicativeMonoid)(getApplicativeValidation(SE))(MA);
};
/**
 * Use [`getApplicativeValidation`](#getapplicativevalidation) and [`getAltValidation`](#getaltvalidation) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */


exports.getValidationMonoid = getValidationMonoid;

function getValidation(SE) {
  var ap = getApplicativeValidation(SE).ap;
  var alt = getAltValidation(SE).alt;
  return {
    URI: URI,
    _E: undefined,
    map: _map,
    of: of,
    chain: _chain,
    bimap: _bimap,
    mapLeft: _mapLeft,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    extend: _extend,
    traverse: _traverse,
    sequence: sequence,
    chainRec: _chainRec,
    throwError: throwError,
    ap: ap,
    alt: alt
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mcC10cy9FaXRoZXIudHMiXSwibmFtZXMiOlsibGVmdCIsIl8iLCJyaWdodCIsIl9tYXAiLCJmYSIsImYiLCJtYXAiLCJfYXAiLCJmYWIiLCJhcCIsIl9jaGFpbiIsIm1hIiwiY2hhaW4iLCJfcmVkdWNlIiwiYiIsInJlZHVjZSIsIl9mb2xkTWFwIiwiTSIsImZvbGRNYXBNIiwiZm9sZE1hcCIsIl9yZWR1Y2VSaWdodCIsInJlZHVjZVJpZ2h0IiwiX3RyYXZlcnNlIiwiRiIsInRyYXZlcnNlRiIsInRyYXZlcnNlIiwidGEiLCJfYmltYXAiLCJnIiwiYmltYXAiLCJfbWFwTGVmdCIsIm1hcExlZnQiLCJfYWx0IiwidGhhdCIsImFsdCIsIl9leHRlbmQiLCJ3YSIsImV4dGVuZCIsIl9jaGFpblJlYyIsImEiLCJlIiwiaXNMZWZ0IiwiVVJJIiwiZ2V0U2hvdyIsIlNFIiwiU0EiLCJzaG93IiwiZ2V0RXEiLCJFTCIsIkVBIiwiZXF1YWxzIiwieCIsInkiLCJpc1JpZ2h0IiwiZ2V0U2VtaWdyb3VwIiwiUyIsImNvbmNhdCIsImdldENvbXBhY3RhYmxlIiwiZW1wdHkiLCJfRSIsInVuZGVmaW5lZCIsImNvbXBhY3QiLCJfdGFnIiwidmFsdWUiLCJzZXBhcmF0ZSIsImdldEZpbHRlcmFibGUiLCJmaWx0ZXIiLCJwcmVkaWNhdGUiLCJwYXJ0aXRpb24iLCJwIiwiZmlsdGVyTWFwIiwib2IiLCJwYXJ0aXRpb25NYXAiLCJnZXRXaXRoZXJhYmxlIiwiRl8iLCJDIiwic2VxdWVuY2UiLCJ3aXRoZXIiLCJUcmF2ZXJzYWJsZSIsIndpbHQiLCJnZXRBcHBsaWNhdGl2ZVZhbGlkYXRpb24iLCJvZiIsImdldEFsdFZhbGlkYXRpb24iLCJtZSIsImVhIiwiRnVuY3RvciIsIlBvaW50ZWQiLCJhcFciLCJBcHBseSIsIkFwcGxpY2F0aXZlIiwiY2hhaW5XIiwiQ2hhaW4iLCJNb25hZCIsIkZvbGRhYmxlIiwiQmlmdW5jdG9yIiwiYWx0VyIsIkFsdCIsIkV4dGVuZCIsIkNoYWluUmVjIiwiY2hhaW5SZWMiLCJ0aHJvd0Vycm9yIiwiTW9uYWRUaHJvdyIsIkZyb21FaXRoZXIiLCJmcm9tRWl0aGVyIiwiaWRlbnRpdHkiLCJmcm9tUHJlZGljYXRlIiwiZnJvbU9wdGlvbiIsIm1hdGNoVyIsIm9uTGVmdCIsIm9uUmlnaHQiLCJmb2xkVyIsIm1hdGNoIiwiZm9sZCIsImdldE9yRWxzZVciLCJnZXRPckVsc2UiLCJmbGFwIiwiYXBGaXJzdCIsImFwU2Vjb25kIiwiY2hhaW5GaXJzdCIsImNoYWluRmlyc3RXIiwiZmxhdHRlblciLCJmbGF0dGVuIiwiZHVwbGljYXRlIiwiZnJvbU9wdGlvbksiLCJjaGFpbk9wdGlvbksiLCJmaWx0ZXJPckVsc2UiLCJmaWx0ZXJPckVsc2VXIiwic3dhcCIsIm9yRWxzZVciLCJvckVsc2UiLCJmcm9tTnVsbGFibGUiLCJ0cnlDYXRjaCIsIm9uVGhyb3ciLCJ0cnlDYXRjaEsiLCJmcm9tTnVsbGFibGVLIiwiZnJvbSIsImNoYWluTnVsbGFibGVLIiwidG9VbmlvbiIsInRvRXJyb3IiLCJFcnJvciIsIlN0cmluZyIsImVsZW0iLCJFIiwiZWxlbUUiLCJleGlzdHMiLCJEbyIsImVtcHR5UmVjb3JkIiwiYmluZFRvIiwiYmluZCIsImJpbmRXIiwiYXBTIiwiYXBTVyIsIkFwVCIsImVtcHR5UmVhZG9ubHlBcnJheSIsInRyYXZlcnNlUmVhZG9ubHlOb25FbXB0eUFycmF5V2l0aEluZGV4IiwiYXMiLCJoZWFkIiwib3V0IiwiaSIsImxlbmd0aCIsInB1c2giLCJ0cmF2ZXJzZVJlYWRvbmx5QXJyYXlXaXRoSW5kZXgiLCJpc05vbkVtcHR5IiwidHJhdmVyc2VBcnJheVdpdGhJbmRleCIsInRyYXZlcnNlQXJyYXkiLCJzZXF1ZW5jZUFycmF5IiwicGFyc2VKU09OIiwicyIsIm9uRXJyb3IiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnlKU09OIiwidSIsInN0cmluZ2lmeSIsImVpdGhlciIsImdldEFwcGx5U2VtaWdyb3VwIiwiZ2V0QXBwbHlNb25vaWQiLCJnZXRWYWxpZGF0aW9uU2VtaWdyb3VwIiwiZ2V0VmFsaWRhdGlvbk1vbm9pZCIsIk1BIiwiZ2V0VmFsaWRhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkE7O0FBQ0E7O0FBUUE7O0FBQ0E7O0FBTUE7O0FBUUE7O0FBQ0E7O0FBRUE7O0FBVUE7O0FBR0E7Ozs7OztBQXhEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF3RUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sSUFBTUEsSUFBa0QsR0FBR0MsQ0FBQyxDQUFDRCxJQUE3RDtBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxJQUFNRSxLQUFtRCxHQUFHRCxDQUFDLENBQUNDLEtBQTlELEMsQ0FFUDtBQUNBO0FBQ0E7Ozs7QUFFQSxJQUFNQyxJQUF3QixHQUFHLFNBQTNCQSxJQUEyQixDQUFDQyxFQUFELEVBQUtDLENBQUw7QUFBQSxTQUFXLG9CQUFLRCxFQUFMLEVBQVNFLEdBQUcsQ0FBQ0QsQ0FBRCxDQUFaLENBQVg7QUFBQSxDQUFqQzs7QUFDQSxJQUFNRSxHQUFzQixHQUFHLFNBQXpCQSxHQUF5QixDQUFDQyxHQUFELEVBQU1KLEVBQU47QUFBQSxTQUFhLG9CQUFLSSxHQUFMLEVBQVVDLEVBQUUsQ0FBQ0wsRUFBRCxDQUFaLENBQWI7QUFBQSxDQUEvQjtBQUNBOzs7QUFDQSxJQUFNTSxNQUE0QixHQUFHLFNBQS9CQSxNQUErQixDQUFDQyxFQUFELEVBQUtOLENBQUw7QUFBQSxTQUFXLG9CQUFLTSxFQUFMLEVBQVNDLEtBQUssQ0FBQ1AsQ0FBRCxDQUFkLENBQVg7QUFBQSxDQUFyQztBQUNBOzs7QUFDQSxJQUFNUSxPQUFpQyxHQUFHLFNBQXBDQSxPQUFvQyxDQUFDVCxFQUFELEVBQUtVLENBQUwsRUFBUVQsQ0FBUjtBQUFBLFNBQWMsb0JBQUtELEVB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ZnQ8RT4gfCBSaWdodDxBPlxuICogYGBgXG4gKlxuICogUmVwcmVzZW50cyBhIHZhbHVlIG9mIG9uZSBvZiB0d28gcG9zc2libGUgdHlwZXMgKGEgZGlzam9pbnQgdW5pb24pLlxuICpcbiAqIEFuIGluc3RhbmNlIG9mIGBFaXRoZXJgIGlzIGVpdGhlciBhbiBpbnN0YW5jZSBvZiBgTGVmdGAgb3IgYFJpZ2h0YC5cbiAqXG4gKiBBIGNvbW1vbiB1c2Ugb2YgYEVpdGhlcmAgaXMgYXMgYW4gYWx0ZXJuYXRpdmUgdG8gYE9wdGlvbmAgZm9yIGRlYWxpbmcgd2l0aCBwb3NzaWJsZSBtaXNzaW5nIHZhbHVlcy4gSW4gdGhpcyB1c2FnZSxcbiAqIGBOb25lYCBpcyByZXBsYWNlZCB3aXRoIGEgYExlZnRgIHdoaWNoIGNhbiBjb250YWluIHVzZWZ1bCBpbmZvcm1hdGlvbi4gYFJpZ2h0YCB0YWtlcyB0aGUgcGxhY2Ugb2YgYFNvbWVgLiBDb252ZW50aW9uXG4gKiBkaWN0YXRlcyB0aGF0IGBMZWZ0YCBpcyB1c2VkIGZvciBmYWlsdXJlIGFuZCBgUmlnaHRgIGlzIHVzZWQgZm9yIHN1Y2Nlc3MuXG4gKlxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmltcG9ydCB7IEFsdDIsIEFsdDJDIH0gZnJvbSAnLi9BbHQnXG5pbXBvcnQgeyBBcHBsaWNhdGl2ZSBhcyBBcHBsaWNhdGl2ZUhLVCwgQXBwbGljYXRpdmUyLCBBcHBsaWNhdGl2ZTJDLCBnZXRBcHBsaWNhdGl2ZU1vbm9pZCB9IGZyb20gJy4vQXBwbGljYXRpdmUnXG5pbXBvcnQge1xuICBhcEZpcnN0IGFzIGFwRmlyc3RfLFxuICBBcHBseTIsXG4gIGFwUyBhcyBhcFNfLFxuICBhcFNlY29uZCBhcyBhcFNlY29uZF8sXG4gIGdldEFwcGx5U2VtaWdyb3VwIGFzIGdldEFwcGx5U2VtaWdyb3VwX1xufSBmcm9tICcuL0FwcGx5J1xuaW1wb3J0IHsgQmlmdW5jdG9yMiB9IGZyb20gJy4vQmlmdW5jdG9yJ1xuaW1wb3J0IHsgYmluZCBhcyBiaW5kXywgQ2hhaW4yLCBjaGFpbkZpcnN0IGFzIGNoYWluRmlyc3RfIH0gZnJvbSAnLi9DaGFpbidcbmltcG9ydCB7IENoYWluUmVjMiwgQ2hhaW5SZWMyQywgdGFpbFJlYyB9IGZyb20gJy4vQ2hhaW5SZWMnXG5pbXBvcnQgeyBDb21wYWN0YWJsZTJDIH0gZnJvbSAnLi9Db21wYWN0YWJsZSdcbmltcG9ydCB7IEVxIH0gZnJvbSAnLi9FcSdcbmltcG9ydCB7IEV4dGVuZDIgfSBmcm9tICcuL0V4dGVuZCdcbmltcG9ydCB7IEZpbHRlcmFibGUyQyB9IGZyb20gJy4vRmlsdGVyYWJsZSdcbmltcG9ydCB7IEZvbGRhYmxlMiB9IGZyb20gJy4vRm9sZGFibGUnXG5pbXBvcnQge1xuICBjaGFpbk9wdGlvbksgYXMgY2hhaW5PcHRpb25LXyxcbiAgZmlsdGVyT3JFbHNlIGFzIGZpbHRlck9yRWxzZV8sXG4gIEZyb21FaXRoZXIyLFxuICBmcm9tT3B0aW9uIGFzIGZyb21PcHRpb25fLFxuICBmcm9tT3B0aW9uSyBhcyBmcm9tT3B0aW9uS18sXG4gIGZyb21QcmVkaWNhdGUgYXMgZnJvbVByZWRpY2F0ZV9cbn0gZnJvbSAnLi9Gcm9tRWl0aGVyJ1xuaW1wb3J0IHsgZmxvdywgaWRlbnRpdHksIExhenksIHBpcGUgfSBmcm9tICcuL2Z1bmN0aW9uJ1xuaW1wb3J0IHsgYmluZFRvIGFzIGJpbmRUb18sIGZsYXAgYXMgZmxhcF8sIEZ1bmN0b3IyIH0gZnJvbSAnLi9GdW5jdG9yJ1xuaW1wb3J0IHsgSEtUIH0gZnJvbSAnLi9IS1QnXG5pbXBvcnQgKiBhcyBfIGZyb20gJy4vaW50ZXJuYWwnXG5pbXBvcnQgeyBNb25hZDIsIE1vbmFkMkMgfSBmcm9tICcuL01vbmFkJ1xuaW1wb3J0IHsgTW9uYWRUaHJvdzIsIE1vbmFkVGhyb3cyQyB9IGZyb20gJy4vTW9uYWRUaHJvdydcbmltcG9ydCB7IE1vbm9pZCB9IGZyb20gJy4vTW9ub2lkJ1xuaW1wb3J0IHsgTm9uRW1wdHlBcnJheSB9IGZyb20gJy4vTm9uRW1wdHlBcnJheSdcbmltcG9ydCB7IFBvaW50ZWQyIH0gZnJvbSAnLi9Qb2ludGVkJ1xuaW1wb3J0IHsgUHJlZGljYXRlIH0gZnJvbSAnLi9QcmVkaWNhdGUnXG5pbXBvcnQgeyBSZWFkb25seU5vbkVtcHR5QXJyYXkgfSBmcm9tICcuL1JlYWRvbmx5Tm9uRW1wdHlBcnJheSdcbmltcG9ydCB7IFJlZmluZW1lbnQgfSBmcm9tICcuL1JlZmluZW1lbnQnXG5pbXBvcnQgeyBTZW1pZ3JvdXAgfSBmcm9tICcuL1NlbWlncm91cCdcbmltcG9ydCB7IFNlcGFyYXRlZCwgc2VwYXJhdGVkIH0gZnJvbSAnLi9TZXBhcmF0ZWQnXG5pbXBvcnQgeyBTaG93IH0gZnJvbSAnLi9TaG93J1xuaW1wb3J0IHsgUGlwZWFibGVUcmF2ZXJzZTIsIFRyYXZlcnNhYmxlMiB9IGZyb20gJy4vVHJhdmVyc2FibGUnXG5pbXBvcnQgeyB3aWx0RGVmYXVsdCwgV2l0aGVyYWJsZTJDLCB3aXRoZXJEZWZhdWx0IH0gZnJvbSAnLi9XaXRoZXJhYmxlJ1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBtb2RlbFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEBjYXRlZ29yeSBtb2RlbFxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTGVmdDxFPiB7XG4gIHJlYWRvbmx5IF90YWc6ICdMZWZ0J1xuICByZWFkb25seSBsZWZ0OiBFXG59XG5cbi8qKlxuICogQGNhdGVnb3J5IG1vZGVsXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSaWdodDxBPiB7XG4gIHJlYWRvbmx5IF90YWc6ICdSaWdodCdcbiAgcmVhZG9ubHkgcmlnaHQ6IEFcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgbW9kZWxcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgdHlwZSBFaXRoZXI8RSwgQT4gPSBMZWZ0PEU+IHwgUmlnaHQ8QT5cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gY29uc3RydWN0b3JzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQ29uc3RydWN0cyBhIG5ldyBgRWl0aGVyYCBob2xkaW5nIGEgYExlZnRgIHZhbHVlLiBUaGlzIHVzdWFsbHkgcmVwcmVzZW50cyBhIGZhaWx1cmUsIGR1ZSB0byB0aGUgcmlnaHQtYmlhcyBvZiB0aGlzXG4gKiBzdHJ1Y3R1cmUuXG4gKlxuICogQGNhdGVnb3J5IGNvbnN0cnVjdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBsZWZ0OiA8RSA9IG5ldmVyLCBBID0gbmV2ZXI+KGU6IEUpID0+IEVpdGhlcjxFLCBBPiA9IF8ubGVmdFxuXG4vKipcbiAqIENvbnN0cnVjdHMgYSBuZXcgYEVpdGhlcmAgaG9sZGluZyBhIGBSaWdodGAgdmFsdWUuIFRoaXMgdXN1YWxseSByZXByZXNlbnRzIGEgc3VjY2Vzc2Z1bCB2YWx1ZSBkdWUgdG8gdGhlIHJpZ2h0IGJpYXNcbiAqIG9mIHRoaXMgc3RydWN0dXJlLlxuICpcbiAqIEBjYXRlZ29yeSBjb25zdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgcmlnaHQ6IDxFID0gbmV2ZXIsIEEgPSBuZXZlcj4oYTogQSkgPT4gRWl0aGVyPEUsIEE+ID0gXy5yaWdodFxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBub24tcGlwZWFibGVzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmNvbnN0IF9tYXA6IE1vbmFkMjxVUkk+WydtYXAnXSA9IChmYSwgZikgPT4gcGlwZShmYSwgbWFwKGYpKVxuY29uc3QgX2FwOiBNb25hZDI8VVJJPlsnYXAnXSA9IChmYWIsIGZhKSA9PiBwaXBlKGZhYiwgYXAoZmEpKVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmNvbnN0IF9jaGFpbjogTW9uYWQyPFVSST5bJ2NoYWluJ10gPSAobWEsIGYpID0+IHBpcGUobWEsIGNoYWluKGYpKVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmNvbnN0IF9yZWR1Y2U6IEZvbGRhYmxlMjxVUkk+WydyZWR1Y2UnXSA9IChmYSwgYiwgZikgPT4gcGlwZShmYSwgcmVkdWNlKGIsIGYpKVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmNvbnN0IF9mb2xkTWFwOiBGb2xkYWJsZTI8VVJJPlsnZm9sZE1hcCddID0gKE0pID0+IChmYSwgZikgPT4ge1xuICBjb25zdCBmb2xkTWFwTSA9IGZvbGRNYXAoTSlcbiAgcmV0dXJuIHBpcGUoZmEsIGZvbGRNYXBNKGYpKVxufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmNvbnN0IF9yZWR1Y2VSaWdodDogRm9sZGFibGUyPFVSST5bJ3JlZHVjZVJpZ2h0J10gPSAoZmEsIGIsIGYpID0+IHBpcGUoZmEsIHJlZHVjZVJpZ2h0KGIsIGYpKVxuY29uc3QgX3RyYXZlcnNlID0gPEY+KFxuICBGOiBBcHBsaWNhdGl2ZUhLVDxGPlxuKTogKDxFLCBBLCBCPih0YTogRWl0aGVyPEUsIEE+LCBmOiAoYTogQSkgPT4gSEtUPEYsIEI+KSA9PiBIS1Q8RiwgRWl0aGVyPEUsIEI+PikgPT4ge1xuICBjb25zdCB0cmF2ZXJzZUYgPSB0cmF2ZXJzZShGKVxuICByZXR1cm4gKHRhLCBmKSA9PiBwaXBlKHRhLCB0cmF2ZXJzZUYoZikpXG59XG5jb25zdCBfYmltYXA6IEJpZnVuY3RvcjI8VVJJPlsnYmltYXAnXSA9IChmYSwgZiwgZykgPT4gcGlwZShmYSwgYmltYXAoZiwgZykpXG5jb25zdCBfbWFwTGVmdDogQmlmdW5jdG9yMjxVUkk+WydtYXBMZWZ0J10gPSAoZmEsIGYpID0+IHBpcGUoZmEsIG1hcExlZnQoZikpXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuY29uc3QgX2FsdDogQWx0MjxVUkk+WydhbHQnXSA9IChmYSwgdGhhdCkgPT4gcGlwZShmYSwgYWx0KHRoYXQpKVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmNvbnN0IF9leHRlbmQ6IEV4dGVuZDI8VVJJPlsnZXh0ZW5kJ10gPSAod2EsIGYpID0+IHBpcGUod2EsIGV4dGVuZChmKSlcbmNvbnN0IF9jaGFpblJlYzogQ2hhaW5SZWMyPFVSST5bJ2NoYWluUmVjJ10gPSAoYSwgZikgPT5cbiAgdGFpbFJlYyhmKGEpLCAoZSkgPT5cbiAgICBpc0xlZnQoZSkgPyByaWdodChsZWZ0KGUubGVmdCkpIDogaXNMZWZ0KGUucmlnaHQpID8gbGVmdChmKGUucmlnaHQubGVmdCkpIDogcmlnaHQocmlnaHQoZS5yaWdodC5yaWdodCkpXG4gIClcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gaW5zdGFuY2VzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBVUkkgPSAnRWl0aGVyJ1xuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgdHlwZSBVUkkgPSB0eXBlb2YgVVJJXG5cbmRlY2xhcmUgbW9kdWxlICcuL0hLVCcge1xuICBpbnRlcmZhY2UgVVJJdG9LaW5kMjxFLCBBPiB7XG4gICAgcmVhZG9ubHkgW1VSSV06IEVpdGhlcjxFLCBBPlxuICB9XG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRTaG93ID0gPEUsIEE+KFNFOiBTaG93PEU+LCBTQTogU2hvdzxBPik6IFNob3c8RWl0aGVyPEUsIEE+PiA9PiAoe1xuICBzaG93OiAobWEpID0+IChpc0xlZnQobWEpID8gYGxlZnQoJHtTRS5zaG93KG1hLmxlZnQpfSlgIDogYHJpZ2h0KCR7U0Euc2hvdyhtYS5yaWdodCl9KWApXG59KVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgZ2V0RXEgPSA8RSwgQT4oRUw6IEVxPEU+LCBFQTogRXE8QT4pOiBFcTxFaXRoZXI8RSwgQT4+ID0+ICh7XG4gIGVxdWFsczogKHgsIHkpID0+XG4gICAgeCA9PT0geSB8fCAoaXNMZWZ0KHgpID8gaXNMZWZ0KHkpICYmIEVMLmVxdWFscyh4LmxlZnQsIHkubGVmdCkgOiBpc1JpZ2h0KHkpICYmIEVBLmVxdWFscyh4LnJpZ2h0LCB5LnJpZ2h0KSlcbn0pXG5cbi8qKlxuICogU2VtaWdyb3VwIHJldHVybmluZyB0aGUgbGVmdC1tb3N0IG5vbi1gTGVmdGAgdmFsdWUuIElmIGJvdGggb3BlcmFuZHMgYXJlIGBSaWdodGBzIHRoZW4gdGhlIGlubmVyIHZhbHVlcyBhcmVcbiAqIGNvbmNhdGVuYXRlZCB1c2luZyB0aGUgcHJvdmlkZWQgYFNlbWlncm91cGBcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgZ2V0U2VtaWdyb3VwLCBsZWZ0LCByaWdodCB9IGZyb20gJ2ZwLXRzL0VpdGhlcidcbiAqIGltcG9ydCB7IFNlbWlncm91cFN1bSB9IGZyb20gJ2ZwLXRzL251bWJlcidcbiAqXG4gKiBjb25zdCBTID0gZ2V0U2VtaWdyb3VwPHN0cmluZywgbnVtYmVyPihTZW1pZ3JvdXBTdW0pXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKFMuY29uY2F0KGxlZnQoJ2EnKSwgbGVmdCgnYicpKSwgbGVmdCgnYScpKVxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChTLmNvbmNhdChsZWZ0KCdhJyksIHJpZ2h0KDIpKSwgcmlnaHQoMikpXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKFMuY29uY2F0KHJpZ2h0KDEpLCBsZWZ0KCdiJykpLCByaWdodCgxKSlcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoUy5jb25jYXQocmlnaHQoMSksIHJpZ2h0KDIpKSwgcmlnaHQoMykpXG4gKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRTZW1pZ3JvdXAgPSA8RSwgQT4oUzogU2VtaWdyb3VwPEE+KTogU2VtaWdyb3VwPEVpdGhlcjxFLCBBPj4gPT4gKHtcbiAgY29uY2F0OiAoeCwgeSkgPT4gKGlzTGVmdCh5KSA/IHggOiBpc0xlZnQoeCkgPyB5IDogcmlnaHQoUy5jb25jYXQoeC5yaWdodCwgeS5yaWdodCkpKVxufSlcblxuLyoqXG4gKiBCdWlsZHMgYSBgQ29tcGFjdGFibGVgIGluc3RhbmNlIGZvciBgRWl0aGVyYCBnaXZlbiBgTW9ub2lkYCBmb3IgdGhlIGxlZnQgc2lkZS5cbiAqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRDb21wYWN0YWJsZSA9IDxFPihNOiBNb25vaWQ8RT4pOiBDb21wYWN0YWJsZTJDPFVSSSwgRT4gPT4ge1xuICBjb25zdCBlbXB0eSA9IGxlZnQoTS5lbXB0eSlcbiAgcmV0dXJuIHtcbiAgICBVUkksXG4gICAgX0U6IHVuZGVmaW5lZCBhcyBhbnksXG4gICAgY29tcGFjdDogKG1hKSA9PiAoaXNMZWZ0KG1hKSA/IG1hIDogbWEucmlnaHQuX3RhZyA9PT0gJ05vbmUnID8gZW1wdHkgOiByaWdodChtYS5yaWdodC52YWx1ZSkpLFxuICAgIHNlcGFyYXRlOiAobWEpID0+XG4gICAgICBpc0xlZnQobWEpXG4gICAgICAgID8gc2VwYXJhdGVkKG1hLCBtYSlcbiAgICAgICAgOiBpc0xlZnQobWEucmlnaHQpXG4gICAgICAgID8gc2VwYXJhdGVkKHJpZ2h0KG1hLnJpZ2h0LmxlZnQpLCBlbXB0eSlcbiAgICAgICAgOiBzZXBhcmF0ZWQoZW1wdHksIHJpZ2h0KG1hLnJpZ2h0LnJpZ2h0KSlcbiAgfVxufVxuXG4vKipcbiAqIEJ1aWxkcyBhIGBGaWx0ZXJhYmxlYCBpbnN0YW5jZSBmb3IgYEVpdGhlcmAgZ2l2ZW4gYE1vbm9pZGAgZm9yIHRoZSBsZWZ0IHNpZGVcbiAqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRGaWx0ZXJhYmxlID0gPEU+KE06IE1vbm9pZDxFPik6IEZpbHRlcmFibGUyQzxVUkksIEU+ID0+IHtcbiAgY29uc3QgZW1wdHkgPSBsZWZ0KE0uZW1wdHkpXG5cbiAgY29uc3QgeyBjb21wYWN0LCBzZXBhcmF0ZSB9ID0gZ2V0Q29tcGFjdGFibGUoTSlcblxuICBjb25zdCBmaWx0ZXIgPSA8QT4obWE6IEVpdGhlcjxFLCBBPiwgcHJlZGljYXRlOiBQcmVkaWNhdGU8QT4pOiBFaXRoZXI8RSwgQT4gPT5cbiAgICBpc0xlZnQobWEpID8gbWEgOiBwcmVkaWNhdGUobWEucmlnaHQpID8gbWEgOiBlbXB0eVxuXG4gIGNvbnN0IHBhcnRpdGlvbiA9IDxBPihtYTogRWl0aGVyPEUsIEE+LCBwOiBQcmVkaWNhdGU8QT4pOiBTZXBhcmF0ZWQ8RWl0aGVyPEUsIEE+LCBFaXRoZXI8RSwgQT4+ID0+IHtcbiAgICByZXR1cm4gaXNMZWZ0KG1hKVxuICAgICAgPyBzZXBhcmF0ZWQobWEsIG1hKVxuICAgICAgOiBwKG1hLnJpZ2h0KVxuICAgICAgPyBzZXBhcmF0ZWQoZW1wdHksIHJpZ2h0KG1hLnJpZ2h0KSlcbiAgICAgIDogc2VwYXJhdGVkKHJpZ2h0KG1hLnJpZ2h0KSwgZW1wdHkpXG4gIH1cblxuICByZXR1cm4ge1xuICAgIFVSSSxcbiAgICBfRTogdW5kZWZpbmVkIGFzIGFueSxcbiAgICBtYXA6IF9tYXAsXG4gICAgY29tcGFjdCxcbiAgICBzZXBhcmF0ZSxcbiAgICBmaWx0ZXIsXG4gICAgZmlsdGVyTWFwOiAobWEsIGYpID0+IHtcbiAgICAgIGlmIChpc0xlZnQobWEpKSB7XG4gICAgICAgIHJldHVybiBtYVxuICAgICAgfVxuICAgICAgY29uc3Qgb2IgPSBmKG1hLnJpZ2h0KVxuICAgICAgcmV0dXJuIG9iLl90YWcgPT09ICdOb25lJyA/IGVtcHR5IDogcmlnaHQob2IudmFsdWUpXG4gICAgfSxcbiAgICBwYXJ0aXRpb24sXG4gICAgcGFydGl0aW9uTWFwOiAobWEsIGYpID0+IHtcbiAgICAgIGlmIChpc0xlZnQobWEpKSB7XG4gICAgICAgIHJldHVybiBzZXBhcmF0ZWQobWEsIG1hKVxuICAgICAgfVxuICAgICAgY29uc3QgZSA9IGYobWEucmlnaHQpXG4gICAgICByZXR1cm4gaXNMZWZ0KGUpID8gc2VwYXJhdGVkKHJpZ2h0KGUubGVmdCksIGVtcHR5KSA6IHNlcGFyYXRlZChlbXB0eSwgcmlnaHQoZS5yaWdodCkpXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQnVpbGRzIGBXaXRoZXJhYmxlYCBpbnN0YW5jZSBmb3IgYEVpdGhlcmAgZ2l2ZW4gYE1vbm9pZGAgZm9yIHRoZSBsZWZ0IHNpZGVcbiAqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGdldFdpdGhlcmFibGUgPSA8RT4oTTogTW9ub2lkPEU+KTogV2l0aGVyYWJsZTJDPFVSSSwgRT4gPT4ge1xuICBjb25zdCBGXyA9IGdldEZpbHRlcmFibGUoTSlcbiAgY29uc3QgQyA9IGdldENvbXBhY3RhYmxlKE0pXG4gIHJldHVybiB7XG4gICAgVVJJLFxuICAgIF9FOiB1bmRlZmluZWQgYXMgYW55LFxuICAgIG1hcDogX21hcCxcbiAgICBjb21wYWN0OiBGXy5jb21wYWN0LFxuICAgIHNlcGFyYXRlOiBGXy5zZXBhcmF0ZSxcbiAgICBmaWx0ZXI6IEZfLmZpbHRlcixcbiAgICBmaWx0ZXJNYXA6IEZfLmZpbHRlck1hcCxcbiAgICBwYXJ0aXRpb246IEZfLnBhcnRpdGlvbixcbiAgICBwYXJ0aXRpb25NYXA6IEZfLnBhcnRpdGlvbk1hcCxcbiAgICB0cmF2ZXJzZTogX3RyYXZlcnNlLFxuICAgIHNlcXVlbmNlLFxuICAgIHJlZHVjZTogX3JlZHVjZSxcbiAgICBmb2xkTWFwOiBfZm9sZE1hcCxcbiAgICByZWR1Y2VSaWdodDogX3JlZHVjZVJpZ2h0LFxuICAgIHdpdGhlcjogd2l0aGVyRGVmYXVsdChUcmF2ZXJzYWJsZSwgQyksXG4gICAgd2lsdDogd2lsdERlZmF1bHQoVHJhdmVyc2FibGUsIEMpXG4gIH1cbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi43LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGdldEFwcGxpY2F0aXZlVmFsaWRhdGlvbiA9IDxFPihTRTogU2VtaWdyb3VwPEU+KTogQXBwbGljYXRpdmUyQzxVUkksIEU+ID0+ICh7XG4gIFVSSSxcbiAgX0U6IHVuZGVmaW5lZCBhcyBhbnksXG4gIG1hcDogX21hcCxcbiAgYXA6IChmYWIsIGZhKSA9PlxuICAgIGlzTGVmdChmYWIpXG4gICAgICA/IGlzTGVmdChmYSlcbiAgICAgICAgPyBsZWZ0KFNFLmNvbmNhdChmYWIubGVmdCwgZmEubGVmdCkpXG4gICAgICAgIDogZmFiXG4gICAgICA6IGlzTGVmdChmYSlcbiAgICAgID8gZmFcbiAgICAgIDogcmlnaHQoZmFiLnJpZ2h0KGZhLnJpZ2h0KSksXG4gIG9mXG59KVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjcuMFxuICovXG5leHBvcnQgY29uc3QgZ2V0QWx0VmFsaWRhdGlvbiA9IDxFPihTRTogU2VtaWdyb3VwPEU+KTogQWx0MkM8VVJJLCBFPiA9PiAoe1xuICBVUkksXG4gIF9FOiB1bmRlZmluZWQgYXMgYW55LFxuICBtYXA6IF9tYXAsXG4gIGFsdDogKG1lLCB0aGF0KSA9PiB7XG4gICAgaWYgKGlzUmlnaHQobWUpKSB7XG4gICAgICByZXR1cm4gbWVcbiAgICB9XG4gICAgY29uc3QgZWEgPSB0aGF0KClcbiAgICByZXR1cm4gaXNMZWZ0KGVhKSA/IGxlZnQoU0UuY29uY2F0KG1lLmxlZnQsIGVhLmxlZnQpKSA6IGVhXG4gIH1cbn0pXG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlIG9wZXJhdGlvbnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgbWFwOiA8QSwgQj4oZjogKGE6IEEpID0+IEIpID0+IDxFPihmYTogRWl0aGVyPEUsIEE+KSA9PiBFaXRoZXI8RSwgQj4gPSAoZikgPT4gKGZhKSA9PlxuICBpc0xlZnQoZmEpID8gZmEgOiByaWdodChmKGZhLnJpZ2h0KSlcblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi43LjBcbiAqL1xuZXhwb3J0IGNvbnN0IEZ1bmN0b3I6IEZ1bmN0b3IyPFVSST4gPSB7XG4gIFVSSSxcbiAgbWFwOiBfbWFwXG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlIG9wZXJhdGlvbnNcbiAqIEBzaW5jZSAyLjcuMFxuICovXG5leHBvcnQgY29uc3Qgb2Y6IDxFID0gbmV2ZXIsIEEgPSBuZXZlcj4oYTogQSkgPT4gRWl0aGVyPEUsIEE+ID0gcmlnaHRcblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBQb2ludGVkOiBQb2ludGVkMjxVUkk+ID0ge1xuICBVUkksXG4gIG9mXG59XG5cbi8qKlxuICogTGVzcyBzdHJpY3QgdmVyc2lvbiBvZiBbYGFwYF0oI2FwKS5cbiAqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2Ugb3BlcmF0aW9uc1xuICogQHNpbmNlIDIuOC4wXG4gKi9cbmV4cG9ydCBjb25zdCBhcFc6IDxFMiwgQT4oZmE6IEVpdGhlcjxFMiwgQT4pID0+IDxFMSwgQj4oZmFiOiBFaXRoZXI8RTEsIChhOiBBKSA9PiBCPikgPT4gRWl0aGVyPEUxIHwgRTIsIEI+ID0gKGZhKSA9PiAoXG4gIGZhYlxuKSA9PiAoaXNMZWZ0KGZhYikgPyBmYWIgOiBpc0xlZnQoZmEpID8gZmEgOiByaWdodChmYWIucmlnaHQoZmEucmlnaHQpKSlcblxuLyoqXG4gKiBBcHBseSBhIGZ1bmN0aW9uIHRvIGFuIGFyZ3VtZW50IHVuZGVyIGEgdHlwZSBjb25zdHJ1Y3Rvci5cbiAqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2Ugb3BlcmF0aW9uc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBhcDogPEUsIEE+KGZhOiBFaXRoZXI8RSwgQT4pID0+IDxCPihmYWI6IEVpdGhlcjxFLCAoYTogQSkgPT4gQj4pID0+IEVpdGhlcjxFLCBCPiA9IGFwV1xuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IEFwcGx5OiBBcHBseTI8VVJJPiA9IHtcbiAgVVJJLFxuICBtYXA6IF9tYXAsXG4gIGFwOiBfYXBcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi43LjBcbiAqL1xuZXhwb3J0IGNvbnN0IEFwcGxpY2F0aXZlOiBBcHBsaWNhdGl2ZTI8VVJJPiA9IHtcbiAgVVJJLFxuICBtYXA6IF9tYXAsXG4gIGFwOiBfYXAsXG4gIG9mXG59XG5cbi8qKlxuICogTGVzcyBzdHJpY3QgdmVyc2lvbiBvZiBbYGNoYWluYF0oI2NoYWluKS5cbiAqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2Ugb3BlcmF0aW9uc1xuICogQHNpbmNlIDIuNi4wXG4gKi9cbmV4cG9ydCBjb25zdCBjaGFpblcgPSA8RTIsIEEsIEI+KGY6IChhOiBBKSA9PiBFaXRoZXI8RTIsIEI+KSA9PiA8RTE+KG1hOiBFaXRoZXI8RTEsIEE+KTogRWl0aGVyPEUxIHwgRTIsIEI+ID0+XG4gIGlzTGVmdChtYSkgPyBtYSA6IGYobWEucmlnaHQpXG5cbi8qKlxuICogQ29tcG9zZXMgY29tcHV0YXRpb25zIGluIHNlcXVlbmNlLCB1c2luZyB0aGUgcmV0dXJuIHZhbHVlIG9mIG9uZSBjb21wdXRhdGlvbiB0byBkZXRlcm1pbmUgdGhlIG5leHQgY29tcHV0YXRpb24uXG4gKlxuICogQGNhdGVnb3J5IGluc3RhbmNlIG9wZXJhdGlvbnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgY2hhaW46IDxFLCBBLCBCPihmOiAoYTogQSkgPT4gRWl0aGVyPEUsIEI+KSA9PiAobWE6IEVpdGhlcjxFLCBBPikgPT4gRWl0aGVyPEUsIEI+ID0gY2hhaW5XXG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgQ2hhaW46IENoYWluMjxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgYXA6IF9hcCxcbiAgY2hhaW46IF9jaGFpblxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjcuMFxuICovXG5leHBvcnQgY29uc3QgTW9uYWQ6IE1vbmFkMjxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgYXA6IF9hcCxcbiAgb2YsXG4gIGNoYWluOiBfY2hhaW5cbn1cblxuLyoqXG4gKiBMZWZ0LWFzc29jaWF0aXZlIGZvbGQgb2YgYSBzdHJ1Y3R1cmUuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IHBpcGUgfSBmcm9tICdmcC10cy9mdW5jdGlvbidcbiAqIGltcG9ydCAqIGFzIEUgZnJvbSAnZnAtdHMvRWl0aGVyJ1xuICpcbiAqIGNvbnN0IHN0YXJ0V2l0aCA9ICdwcmVmaXgnXG4gKiBjb25zdCBjb25jYXQgPSAoYTogc3RyaW5nLCBiOiBzdHJpbmcpID0+IGAke2F9OiR7Yn1gXG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAqICAgcGlwZShFLnJpZ2h0KCdhJyksIEUucmVkdWNlKHN0YXJ0V2l0aCwgY29uY2F0KSksXG4gKiAgICdwcmVmaXg6YSdcbiAqIClcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxuICogICBwaXBlKEUubGVmdCgnZScpLCBFLnJlZHVjZShzdGFydFdpdGgsIGNvbmNhdCkpLFxuICogICAncHJlZml4J1xuICogKVxuICpcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZSBvcGVyYXRpb25zXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHJlZHVjZTogPEEsIEI+KGI6IEIsIGY6IChiOiBCLCBhOiBBKSA9PiBCKSA9PiA8RT4oZmE6IEVpdGhlcjxFLCBBPikgPT4gQiA9IChiLCBmKSA9PiAoZmEpID0+XG4gIGlzTGVmdChmYSkgPyBiIDogZihiLCBmYS5yaWdodClcblxuLyoqXG4gKiBNYXAgZWFjaCBlbGVtZW50IG9mIHRoZSBzdHJ1Y3R1cmUgdG8gYSBtb25vaWQsIGFuZCBjb21iaW5lIHRoZSByZXN1bHRzLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBwaXBlIH0gZnJvbSAnZnAtdHMvZnVuY3Rpb24nXG4gKiBpbXBvcnQgKiBhcyBFIGZyb20gJ2ZwLXRzL0VpdGhlcidcbiAqIGltcG9ydCAqIGFzIFMgZnJvbSAnZnAtdHMvc3RyaW5nJ1xuICpcbiAqIGNvbnN0IHllbGwgPSAoYTogc3RyaW5nKSA9PiBgJHthfSFgXG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAqICAgcGlwZShFLnJpZ2h0KCdhJyksIEUuZm9sZE1hcChTLk1vbm9pZCkoeWVsbCkpLFxuICogICAnYSEnXG4gKiApXG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAqICAgcGlwZShFLmxlZnQoJ2UnKSwgRS5mb2xkTWFwKFMuTW9ub2lkKSh5ZWxsKSksXG4gKiAgIFMuTW9ub2lkLmVtcHR5XG4gKiApXG4gKlxuICogQGNhdGVnb3J5IGluc3RhbmNlIG9wZXJhdGlvbnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgZm9sZE1hcDogPE0+KE06IE1vbm9pZDxNPikgPT4gPEE+KGY6IChhOiBBKSA9PiBNKSA9PiA8RT4oZmE6IEVpdGhlcjxFLCBBPikgPT4gTSA9IChNKSA9PiAoZikgPT4gKGZhKSA9PlxuICBpc0xlZnQoZmEpID8gTS5lbXB0eSA6IGYoZmEucmlnaHQpXG5cbi8qKlxuICogUmlnaHQtYXNzb2NpYXRpdmUgZm9sZCBvZiBhIHN0cnVjdHVyZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgcGlwZSB9IGZyb20gJ2ZwLXRzL2Z1bmN0aW9uJ1xuICogaW1wb3J0ICogYXMgRSBmcm9tICdmcC10cy9FaXRoZXInXG4gKlxuICogY29uc3Qgc3RhcnRXaXRoID0gJ3Bvc3RmaXgnXG4gKiBjb25zdCBjb25jYXQgPSAoYTogc3RyaW5nLCBiOiBzdHJpbmcpID0+IGAke2F9OiR7Yn1gXG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAqICAgcGlwZShFLnJpZ2h0KCdhJyksIEUucmVkdWNlUmlnaHQoc3RhcnRXaXRoLCBjb25jYXQpKSxcbiAqICAgJ2E6cG9zdGZpeCdcbiAqIClcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxuICogICBwaXBlKEUubGVmdCgnZScpLCBFLnJlZHVjZVJpZ2h0KHN0YXJ0V2l0aCwgY29uY2F0KSksXG4gKiAgICdwb3N0Zml4J1xuICogKVxuICpcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZSBvcGVyYXRpb25zXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHJlZHVjZVJpZ2h0OiA8QSwgQj4oYjogQiwgZjogKGE6IEEsIGI6IEIpID0+IEIpID0+IDxFPihmYTogRWl0aGVyPEUsIEE+KSA9PiBCID0gKGIsIGYpID0+IChmYSkgPT5cbiAgaXNMZWZ0KGZhKSA/IGIgOiBmKGZhLnJpZ2h0LCBiKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjcuMFxuICovXG5leHBvcnQgY29uc3QgRm9sZGFibGU6IEZvbGRhYmxlMjxVUkk+ID0ge1xuICBVUkksXG4gIHJlZHVjZTogX3JlZHVjZSxcbiAgZm9sZE1hcDogX2ZvbGRNYXAsXG4gIHJlZHVjZVJpZ2h0OiBfcmVkdWNlUmlnaHRcbn1cblxuLyoqXG4gKiBNYXAgZWFjaCBlbGVtZW50IG9mIGEgc3RydWN0dXJlIHRvIGFuIGFjdGlvbiwgZXZhbHVhdGUgdGhlc2UgYWN0aW9ucyBmcm9tIGxlZnQgdG8gcmlnaHQsIGFuZCBjb2xsZWN0IHRoZSByZXN1bHRzLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBwaXBlIH0gZnJvbSAnZnAtdHMvZnVuY3Rpb24nXG4gKiBpbXBvcnQgKiBhcyBSQSBmcm9tICdmcC10cy9SZWFkb25seUFycmF5J1xuICogaW1wb3J0ICogYXMgRSBmcm9tICdmcC10cy9FaXRoZXInXG4gKiBpbXBvcnQgKiBhcyBPIGZyb20gJ2ZwLXRzL09wdGlvbidcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxuICogICBwaXBlKEUucmlnaHQoWydhJ10pLCBFLnRyYXZlcnNlKE8uQXBwbGljYXRpdmUpKFJBLmhlYWQpKSxcbiAqICAgTy5zb21lKEUucmlnaHQoJ2EnKSlcbiAqICApXG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAqICAgcGlwZShFLnJpZ2h0KFtdKSwgRS50cmF2ZXJzZShPLkFwcGxpY2F0aXZlKShSQS5oZWFkKSksXG4gKiAgIE8ubm9uZVxuICogKVxuICpcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZSBvcGVyYXRpb25zXG4gKiBAc2luY2UgMi42LjNcbiAqL1xuZXhwb3J0IGNvbnN0IHRyYXZlcnNlOiBQaXBlYWJsZVRyYXZlcnNlMjxVUkk+ID0gPEY+KEY6IEFwcGxpY2F0aXZlSEtUPEY+KSA9PiA8QSwgQj4oZjogKGE6IEEpID0+IEhLVDxGLCBCPikgPT4gPEU+KFxuICB0YTogRWl0aGVyPEUsIEE+XG4pOiBIS1Q8RiwgRWl0aGVyPEUsIEI+PiA9PiAoaXNMZWZ0KHRhKSA/IEYub2YobGVmdCh0YS5sZWZ0KSkgOiBGLm1hcDxCLCBFaXRoZXI8RSwgQj4+KGYodGEucmlnaHQpLCByaWdodCkpXG5cbi8qKlxuICogRXZhbHVhdGUgZWFjaCBtb25hZGljIGFjdGlvbiBpbiB0aGUgc3RydWN0dXJlIGZyb20gbGVmdCB0byByaWdodCwgYW5kIGNvbGxlY3QgdGhlIHJlc3VsdHMuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IHBpcGUgfSBmcm9tICdmcC10cy9mdW5jdGlvbidcbiAqIGltcG9ydCAqIGFzIEUgZnJvbSAnZnAtdHMvRWl0aGVyJ1xuICogaW1wb3J0ICogYXMgTyBmcm9tICdmcC10cy9PcHRpb24nXG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAqICAgcGlwZShFLnJpZ2h0KE8uc29tZSgnYScpKSwgRS5zZXF1ZW5jZShPLkFwcGxpY2F0aXZlKSksXG4gKiAgIE8uc29tZShFLnJpZ2h0KCdhJykpXG4gKiAgKVxuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXG4gKiAgIHBpcGUoRS5yaWdodChPLm5vbmUpLCBFLnNlcXVlbmNlKE8uQXBwbGljYXRpdmUpKSxcbiAqICAgTy5ub25lXG4gKiApXG4gKlxuICogQGNhdGVnb3J5IGluc3RhbmNlIG9wZXJhdGlvbnNcbiAqIEBzaW5jZSAyLjYuM1xuICovXG5leHBvcnQgY29uc3Qgc2VxdWVuY2U6IFRyYXZlcnNhYmxlMjxVUkk+WydzZXF1ZW5jZSddID0gPEY+KEY6IEFwcGxpY2F0aXZlSEtUPEY+KSA9PiA8RSwgQT4oXG4gIG1hOiBFaXRoZXI8RSwgSEtUPEYsIEE+PlxuKTogSEtUPEYsIEVpdGhlcjxFLCBBPj4gPT4ge1xuICByZXR1cm4gaXNMZWZ0KG1hKSA/IEYub2YobGVmdChtYS5sZWZ0KSkgOiBGLm1hcDxBLCBFaXRoZXI8RSwgQT4+KG1hLnJpZ2h0LCByaWdodClcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi43LjBcbiAqL1xuZXhwb3J0IGNvbnN0IFRyYXZlcnNhYmxlOiBUcmF2ZXJzYWJsZTI8VVJJPiA9IHtcbiAgVVJJLFxuICBtYXA6IF9tYXAsXG4gIHJlZHVjZTogX3JlZHVjZSxcbiAgZm9sZE1hcDogX2ZvbGRNYXAsXG4gIHJlZHVjZVJpZ2h0OiBfcmVkdWNlUmlnaHQsXG4gIHRyYXZlcnNlOiBfdHJhdmVyc2UsXG4gIHNlcXVlbmNlXG59XG5cbi8qKlxuICogTWFwIGEgcGFpciBvZiBmdW5jdGlvbnMgb3ZlciB0aGUgdHdvIHR5cGUgYXJndW1lbnRzIG9mIHRoZSBiaWZ1bmN0b3IuXG4gKlxuICogQGNhdGVnb3J5IGluc3RhbmNlIG9wZXJhdGlvbnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgYmltYXA6IDxFLCBHLCBBLCBCPihmOiAoZTogRSkgPT4gRywgZzogKGE6IEEpID0+IEIpID0+IChmYTogRWl0aGVyPEUsIEE+KSA9PiBFaXRoZXI8RywgQj4gPSAoZiwgZykgPT4gKFxuICBmYVxuKSA9PiAoaXNMZWZ0KGZhKSA/IGxlZnQoZihmYS5sZWZ0KSkgOiByaWdodChnKGZhLnJpZ2h0KSkpXG5cbi8qKlxuICogTWFwIGEgZnVuY3Rpb24gb3ZlciB0aGUgZmlyc3QgdHlwZSBhcmd1bWVudCBvZiBhIGJpZnVuY3Rvci5cbiAqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2Ugb3BlcmF0aW9uc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBtYXBMZWZ0OiA8RSwgRz4oZjogKGU6IEUpID0+IEcpID0+IDxBPihmYTogRWl0aGVyPEUsIEE+KSA9PiBFaXRoZXI8RywgQT4gPSAoZikgPT4gKGZhKSA9PlxuICBpc0xlZnQoZmEpID8gbGVmdChmKGZhLmxlZnQpKSA6IGZhXG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuNy4wXG4gKi9cbmV4cG9ydCBjb25zdCBCaWZ1bmN0b3I6IEJpZnVuY3RvcjI8VVJJPiA9IHtcbiAgVVJJLFxuICBiaW1hcDogX2JpbWFwLFxuICBtYXBMZWZ0OiBfbWFwTGVmdFxufVxuXG4vKipcbiAqIExlc3Mgc3RyaWN0IHZlcnNpb24gb2YgW2BhbHRgXSgjYWx0KS5cbiAqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2Ugb3BlcmF0aW9uc1xuICogQHNpbmNlIDIuOS4wXG4gKi9cbmV4cG9ydCBjb25zdCBhbHRXOiA8RTIsIEI+KHRoYXQ6IExhenk8RWl0aGVyPEUyLCBCPj4pID0+IDxFMSwgQT4oZmE6IEVpdGhlcjxFMSwgQT4pID0+IEVpdGhlcjxFMiwgQSB8IEI+ID0gKHRoYXQpID0+IChcbiAgZmFcbikgPT4gKGlzTGVmdChmYSkgPyB0aGF0KCkgOiBmYSlcblxuLyoqXG4gKiBJZGVudGlmaWVzIGFuIGFzc29jaWF0aXZlIG9wZXJhdGlvbiBvbiBhIHR5cGUgY29uc3RydWN0b3IuIEl0IGlzIHNpbWlsYXIgdG8gYFNlbWlncm91cGAsIGV4Y2VwdCB0aGF0IGl0IGFwcGxpZXMgdG9cbiAqIHR5cGVzIG9mIGtpbmQgYCogLT4gKmAuXG4gKlxuICogQGNhdGVnb3J5IGluc3RhbmNlIG9wZXJhdGlvbnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgYWx0OiA8RSwgQT4odGhhdDogTGF6eTxFaXRoZXI8RSwgQT4+KSA9PiAoZmE6IEVpdGhlcjxFLCBBPikgPT4gRWl0aGVyPEUsIEE+ID0gYWx0V1xuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjcuMFxuICovXG5leHBvcnQgY29uc3QgQWx0OiBBbHQyPFVSST4gPSB7XG4gIFVSSSxcbiAgbWFwOiBfbWFwLFxuICBhbHQ6IF9hbHRcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2Ugb3BlcmF0aW9uc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBleHRlbmQ6IDxFLCBBLCBCPihmOiAod2E6IEVpdGhlcjxFLCBBPikgPT4gQikgPT4gKHdhOiBFaXRoZXI8RSwgQT4pID0+IEVpdGhlcjxFLCBCPiA9IChmKSA9PiAod2EpID0+XG4gIGlzTGVmdCh3YSkgPyB3YSA6IHJpZ2h0KGYod2EpKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjcuMFxuICovXG5leHBvcnQgY29uc3QgRXh0ZW5kOiBFeHRlbmQyPFVSST4gPSB7XG4gIFVSSSxcbiAgbWFwOiBfbWFwLFxuICBleHRlbmQ6IF9leHRlbmRcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi43LjBcbiAqL1xuZXhwb3J0IGNvbnN0IENoYWluUmVjOiBDaGFpblJlYzI8VVJJPiA9IHtcbiAgVVJJLFxuICBtYXA6IF9tYXAsXG4gIGFwOiBfYXAsXG4gIGNoYWluOiBfY2hhaW4sXG4gIGNoYWluUmVjOiBfY2hhaW5SZWNcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2Ugb3BlcmF0aW9uc1xuICogQHNpbmNlIDIuNi4zXG4gKi9cbmV4cG9ydCBjb25zdCB0aHJvd0Vycm9yOiBNb25hZFRocm93MjxVUkk+Wyd0aHJvd0Vycm9yJ10gPSBsZWZ0XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuNy4wXG4gKi9cbmV4cG9ydCBjb25zdCBNb25hZFRocm93OiBNb25hZFRocm93MjxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgYXA6IF9hcCxcbiAgb2YsXG4gIGNoYWluOiBfY2hhaW4sXG4gIHRocm93RXJyb3Jcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBGcm9tRWl0aGVyOiBGcm9tRWl0aGVyMjxVUkk+ID0ge1xuICBVUkksXG4gIGZyb21FaXRoZXI6IGlkZW50aXR5XG59XG5cbi8qKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGZyb21QcmVkaWNhdGUsIGxlZnQsIHJpZ2h0IH0gZnJvbSAnZnAtdHMvRWl0aGVyJ1xuICogaW1wb3J0IHsgcGlwZSB9IGZyb20gJ2ZwLXRzL2Z1bmN0aW9uJ1xuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXG4gKiAgIHBpcGUoXG4gKiAgICAgMSxcbiAqICAgICBmcm9tUHJlZGljYXRlKFxuICogICAgICAgKG4pID0+IG4gPiAwLFxuICogICAgICAgKCkgPT4gJ2Vycm9yJ1xuICogICAgIClcbiAqICAgKSxcbiAqICAgcmlnaHQoMSlcbiAqIClcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXG4gKiAgIHBpcGUoXG4gKiAgICAgLTEsXG4gKiAgICAgZnJvbVByZWRpY2F0ZShcbiAqICAgICAgIChuKSA9PiBuID4gMCxcbiAqICAgICAgICgpID0+ICdlcnJvcidcbiAqICAgICApXG4gKiAgICksXG4gKiAgIGxlZnQoJ2Vycm9yJylcbiAqIClcbiAqXG4gKiBAY2F0ZWdvcnkgY29uc3RydWN0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZyb21QcmVkaWNhdGUgPVxuICAvKiNfX1BVUkVfXyovXG4gIGZyb21QcmVkaWNhdGVfKEZyb21FaXRoZXIpXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIG5hdHVyYWwgdHJhbnNmb3JtYXRpb25zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCAqIGFzIEUgZnJvbSAnZnAtdHMvRWl0aGVyJ1xuICogaW1wb3J0IHsgcGlwZSB9IGZyb20gJ2ZwLXRzL2Z1bmN0aW9uJ1xuICogaW1wb3J0ICogYXMgTyBmcm9tICdmcC10cy9PcHRpb24nXG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAqICAgcGlwZShcbiAqICAgICBPLnNvbWUoMSksXG4gKiAgICAgRS5mcm9tT3B0aW9uKCgpID0+ICdlcnJvcicpXG4gKiAgICksXG4gKiAgIEUucmlnaHQoMSlcbiAqIClcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXG4gKiAgIHBpcGUoXG4gKiAgICAgTy5ub25lLFxuICogICAgIEUuZnJvbU9wdGlvbigoKSA9PiAnZXJyb3InKVxuICogICApLFxuICogICBFLmxlZnQoJ2Vycm9yJylcbiAqIClcbiAqXG4gKiBAY2F0ZWdvcnkgbmF0dXJhbCB0cmFuc2Zvcm1hdGlvbnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgZnJvbU9wdGlvbiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnJvbU9wdGlvbl8oRnJvbUVpdGhlcilcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gcmVmaW5lbWVudHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZWl0aGVyIGlzIGFuIGluc3RhbmNlIG9mIGBMZWZ0YCwgYGZhbHNlYCBvdGhlcndpc2UuXG4gKlxuICogQGNhdGVnb3J5IHJlZmluZW1lbnRzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGlzTGVmdDogPEU+KG1hOiBFaXRoZXI8RSwgdW5rbm93bj4pID0+IG1hIGlzIExlZnQ8RT4gPSBfLmlzTGVmdFxuXG4vKipcbiAqIFJldHVybnMgYHRydWVgIGlmIHRoZSBlaXRoZXIgaXMgYW4gaW5zdGFuY2Ugb2YgYFJpZ2h0YCwgYGZhbHNlYCBvdGhlcndpc2UuXG4gKlxuICogQGNhdGVnb3J5IHJlZmluZW1lbnRzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGlzUmlnaHQ6IDxBPihtYTogRWl0aGVyPHVua25vd24sIEE+KSA9PiBtYSBpcyBSaWdodDxBPiA9IF8uaXNSaWdodFxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBkZXN0cnVjdG9yc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIExlc3Mgc3RyaWN0IHZlcnNpb24gb2YgW2BtYXRjaGBdKCNtYXRjaCkuXG4gKlxuICogQGNhdGVnb3J5IGRlc3RydWN0b3JzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBtYXRjaFcgPSA8RSwgQiwgQSwgQz4ob25MZWZ0OiAoZTogRSkgPT4gQiwgb25SaWdodDogKGE6IEEpID0+IEMpID0+IChtYTogRWl0aGVyPEUsIEE+KTogQiB8IEMgPT5cbiAgaXNMZWZ0KG1hKSA/IG9uTGVmdChtYS5sZWZ0KSA6IG9uUmlnaHQobWEucmlnaHQpXG5cbi8qKlxuICogQWxpYXMgb2YgW2BtYXRjaFdgXSgjbWF0Y2h3KS5cbiAqXG4gKiBAY2F0ZWdvcnkgZGVzdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZvbGRXID0gbWF0Y2hXXG5cbi8qKlxuICogVGFrZXMgdHdvIGZ1bmN0aW9ucyBhbmQgYW4gYEVpdGhlcmAgdmFsdWUsIGlmIHRoZSB2YWx1ZSBpcyBhIGBMZWZ0YCB0aGUgaW5uZXIgdmFsdWUgaXMgYXBwbGllZCB0byB0aGUgZmlyc3QgZnVuY3Rpb24sXG4gKiBpZiB0aGUgdmFsdWUgaXMgYSBgUmlnaHRgIHRoZSBpbm5lciB2YWx1ZSBpcyBhcHBsaWVkIHRvIHRoZSBzZWNvbmQgZnVuY3Rpb24uXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IG1hdGNoLCBsZWZ0LCByaWdodCB9IGZyb20gJ2ZwLXRzL0VpdGhlcidcbiAqIGltcG9ydCB7IHBpcGUgfSBmcm9tICdmcC10cy9mdW5jdGlvbidcbiAqXG4gKiBmdW5jdGlvbiBvbkxlZnQoZXJyb3JzOiBBcnJheTxzdHJpbmc+KTogc3RyaW5nIHtcbiAqICAgcmV0dXJuIGBFcnJvcnM6ICR7ZXJyb3JzLmpvaW4oJywgJyl9YFxuICogfVxuICpcbiAqIGZ1bmN0aW9uIG9uUmlnaHQodmFsdWU6IG51bWJlcik6IHN0cmluZyB7XG4gKiAgIHJldHVybiBgT2s6ICR7dmFsdWV9YFxuICogfVxuICpcbiAqIGFzc2VydC5zdHJpY3RFcXVhbChcbiAqICAgcGlwZShcbiAqICAgICByaWdodCgxKSxcbiAqICAgICBtYXRjaChvbkxlZnQsIG9uUmlnaHQpXG4gKiAgICksXG4gKiAgICdPazogMSdcbiAqIClcbiAqIGFzc2VydC5zdHJpY3RFcXVhbChcbiAqICAgcGlwZShcbiAqICAgICBsZWZ0KFsnZXJyb3IgMScsICdlcnJvciAyJ10pLFxuICogICAgIG1hdGNoKG9uTGVmdCwgb25SaWdodClcbiAqICAgKSxcbiAqICAgJ0Vycm9yczogZXJyb3IgMSwgZXJyb3IgMidcbiAqIClcbiAqXG4gKiBAY2F0ZWdvcnkgZGVzdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IG1hdGNoOiA8RSwgQSwgQj4ob25MZWZ0OiAoZTogRSkgPT4gQiwgb25SaWdodDogKGE6IEEpID0+IEIpID0+IChtYTogRWl0aGVyPEUsIEE+KSA9PiBCID0gbWF0Y2hXXG5cbi8qKlxuICogQWxpYXMgb2YgW2BtYXRjaGBdKCNtYXRjaCkuXG4gKlxuICogQGNhdGVnb3J5IGRlc3RydWN0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZvbGQ6IDxFLCBBLCBCPihvbkxlZnQ6IChlOiBFKSA9PiBCLCBvblJpZ2h0OiAoYTogQSkgPT4gQikgPT4gKG1hOiBFaXRoZXI8RSwgQT4pID0+IEIgPSBtYXRjaFxuXG4vKipcbiAqIExlc3Mgc3RyaWN0IHZlcnNpb24gb2YgW2BnZXRPckVsc2VgXSgjZ2V0b3JlbHNlKS5cbiAqXG4gKiBAY2F0ZWdvcnkgZGVzdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjYuMFxuICovXG5leHBvcnQgY29uc3QgZ2V0T3JFbHNlVyA9IDxFLCBCPihvbkxlZnQ6IChlOiBFKSA9PiBCKSA9PiA8QT4obWE6IEVpdGhlcjxFLCBBPik6IEEgfCBCID0+XG4gIGlzTGVmdChtYSkgPyBvbkxlZnQobWEubGVmdCkgOiBtYS5yaWdodFxuXG4vKipcbiAqIFJldHVybnMgdGhlIHdyYXBwZWQgdmFsdWUgaWYgaXQncyBhIGBSaWdodGAgb3IgYSBkZWZhdWx0IHZhbHVlIGlmIGlzIGEgYExlZnRgLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBnZXRPckVsc2UsIGxlZnQsIHJpZ2h0IH0gZnJvbSAnZnAtdHMvRWl0aGVyJ1xuICogaW1wb3J0IHsgcGlwZSB9IGZyb20gJ2ZwLXRzL2Z1bmN0aW9uJ1xuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXG4gKiAgIHBpcGUoXG4gKiAgICAgcmlnaHQoMSksXG4gKiAgICAgZ2V0T3JFbHNlKCgpID0+IDApXG4gKiAgICksXG4gKiAgIDFcbiAqIClcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXG4gKiAgIHBpcGUoXG4gKiAgICAgbGVmdCgnZXJyb3InKSxcbiAqICAgICBnZXRPckVsc2UoKCkgPT4gMClcbiAqICAgKSxcbiAqICAgMFxuICogKVxuICpcbiAqIEBjYXRlZ29yeSBkZXN0cnVjdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRPckVsc2U6IDxFLCBBPihvbkxlZnQ6IChlOiBFKSA9PiBBKSA9PiAobWE6IEVpdGhlcjxFLCBBPikgPT4gQSA9IGdldE9yRWxzZVdcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gY29tYmluYXRvcnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBEZXJpdmFibGUgZnJvbSBgRnVuY3RvcmAuXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBmbGFwID1cbiAgLyojX19QVVJFX18qL1xuICBmbGFwXyhGdW5jdG9yKVxuXG4vKipcbiAqIENvbWJpbmUgdHdvIGVmZmVjdGZ1bCBhY3Rpb25zLCBrZWVwaW5nIG9ubHkgdGhlIHJlc3VsdCBvZiB0aGUgZmlyc3QuXG4gKlxuICogRGVyaXZhYmxlIGZyb20gYEFwcGx5YC5cbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgYXBGaXJzdCA9XG4gIC8qI19fUFVSRV9fKi9cbiAgYXBGaXJzdF8oQXBwbHkpXG5cbi8qKlxuICogQ29tYmluZSB0d28gZWZmZWN0ZnVsIGFjdGlvbnMsIGtlZXBpbmcgb25seSB0aGUgcmVzdWx0IG9mIHRoZSBzZWNvbmQuXG4gKlxuICogRGVyaXZhYmxlIGZyb20gYEFwcGx5YC5cbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgYXBTZWNvbmQgPVxuICAvKiNfX1BVUkVfXyovXG4gIGFwU2Vjb25kXyhBcHBseSlcblxuLyoqXG4gKiBDb21wb3NlcyBjb21wdXRhdGlvbnMgaW4gc2VxdWVuY2UsIHVzaW5nIHRoZSByZXR1cm4gdmFsdWUgb2Ygb25lIGNvbXB1dGF0aW9uIHRvIGRldGVybWluZSB0aGUgbmV4dCBjb21wdXRhdGlvbiBhbmRcbiAqIGtlZXBpbmcgb25seSB0aGUgcmVzdWx0IG9mIHRoZSBmaXJzdC5cbiAqXG4gKiBEZXJpdmFibGUgZnJvbSBgQ2hhaW5gLlxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBjaGFpbkZpcnN0OiA8RSwgQSwgQj4oZjogKGE6IEEpID0+IEVpdGhlcjxFLCBCPikgPT4gKG1hOiBFaXRoZXI8RSwgQT4pID0+IEVpdGhlcjxFLCBBPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgY2hhaW5GaXJzdF8oQ2hhaW4pXG5cbi8qKlxuICogTGVzcyBzdHJpY3QgdmVyc2lvbiBvZiBbYGNoYWluRmlyc3RgXSgjY2hhaW5maXJzdClcbiAqXG4gKiBEZXJpdmFibGUgZnJvbSBgQ2hhaW5gLlxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuOC4wXG4gKi9cbmV4cG9ydCBjb25zdCBjaGFpbkZpcnN0VzogPEUyLCBBLCBCPihcbiAgZjogKGE6IEEpID0+IEVpdGhlcjxFMiwgQj5cbikgPT4gPEUxPihtYTogRWl0aGVyPEUxLCBBPikgPT4gRWl0aGVyPEUxIHwgRTIsIEE+ID0gY2hhaW5GaXJzdCBhcyBhbnlcblxuLyoqXG4gKiBMZXNzIHN0cmljdCB2ZXJzaW9uIG9mIFtgZmxhdHRlbmBdKCNmbGF0dGVuKS5cbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZsYXR0ZW5XOiA8RTEsIEUyLCBBPihtbWE6IEVpdGhlcjxFMSwgRWl0aGVyPEUyLCBBPj4pID0+IEVpdGhlcjxFMSB8IEUyLCBBPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgY2hhaW5XKGlkZW50aXR5KVxuXG4vKipcbiAqIFRoZSBgZmxhdHRlbmAgZnVuY3Rpb24gaXMgdGhlIGNvbnZlbnRpb25hbCBtb25hZCBqb2luIG9wZXJhdG9yLiBJdCBpcyB1c2VkIHRvIHJlbW92ZSBvbmUgbGV2ZWwgb2YgbW9uYWRpYyBzdHJ1Y3R1cmUsIHByb2plY3RpbmcgaXRzIGJvdW5kIGFyZ3VtZW50IGludG8gdGhlIG91dGVyIGxldmVsLlxuICpcbiAqIERlcml2YWJsZSBmcm9tIGBDaGFpbmAuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCAqIGFzIEUgZnJvbSAnZnAtdHMvRWl0aGVyJ1xuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoRS5mbGF0dGVuKEUucmlnaHQoRS5yaWdodCgnYScpKSksIEUucmlnaHQoJ2EnKSlcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoRS5mbGF0dGVuKEUucmlnaHQoRS5sZWZ0KCdlJykpKSwgRS5sZWZ0KCdlJykpXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKEUuZmxhdHRlbihFLmxlZnQoJ2UnKSksIEUubGVmdCgnZScpKVxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBmbGF0dGVuOiA8RSwgQT4obW1hOiBFaXRoZXI8RSwgRWl0aGVyPEUsIEE+PikgPT4gRWl0aGVyPEUsIEE+ID0gZmxhdHRlbldcblxuLyoqXG4gKiBEZXJpdmFibGUgZnJvbSBgRXh0ZW5kYC5cbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgZHVwbGljYXRlOiA8RSwgQT4obWE6IEVpdGhlcjxFLCBBPikgPT4gRWl0aGVyPEUsIEVpdGhlcjxFLCBBPj4gPVxuICAvKiNfX1BVUkVfXyovXG4gIGV4dGVuZChpZGVudGl0eSlcblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZyb21PcHRpb25LID1cbiAgLyojX19QVVJFX18qL1xuICBmcm9tT3B0aW9uS18oRnJvbUVpdGhlcilcblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGNoYWluT3B0aW9uSyA9XG4gIC8qI19fUFVSRV9fKi9cbiAgY2hhaW5PcHRpb25LXyhGcm9tRWl0aGVyLCBDaGFpbilcblxuLyoqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0ICogYXMgRSBmcm9tICdmcC10cy9FaXRoZXInXG4gKiBpbXBvcnQgeyBwaXBlIH0gZnJvbSAnZnAtdHMvZnVuY3Rpb24nXG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAqICAgcGlwZShcbiAqICAgICBFLnJpZ2h0KDEpLFxuICogICAgIEUuZmlsdGVyT3JFbHNlKFxuICogICAgICAgKG4pID0+IG4gPiAwLFxuICogICAgICAgKCkgPT4gJ2Vycm9yJ1xuICogICAgIClcbiAqICAgKSxcbiAqICAgRS5yaWdodCgxKVxuICogKVxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAqICAgcGlwZShcbiAqICAgICBFLnJpZ2h0KC0xKSxcbiAqICAgICBFLmZpbHRlck9yRWxzZShcbiAqICAgICAgIChuKSA9PiBuID4gMCxcbiAqICAgICAgICgpID0+ICdlcnJvcidcbiAqICAgICApXG4gKiAgICksXG4gKiAgIEUubGVmdCgnZXJyb3InKVxuICogKVxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAqICAgcGlwZShcbiAqICAgICBFLmxlZnQoJ2EnKSxcbiAqICAgICBFLmZpbHRlck9yRWxzZShcbiAqICAgICAgIChuKSA9PiBuID4gMCxcbiAqICAgICAgICgpID0+ICdlcnJvcidcbiAqICAgICApXG4gKiAgICksXG4gKiAgIEUubGVmdCgnYScpXG4gKiApXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZpbHRlck9yRWxzZSA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZmlsdGVyT3JFbHNlXyhGcm9tRWl0aGVyLCBDaGFpbilcblxuLyoqXG4gKiBMZXNzIHN0cmljdCB2ZXJzaW9uIG9mIFtgZmlsdGVyT3JFbHNlYF0oI2ZpbHRlcm9yZWxzZSkuXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi45LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZpbHRlck9yRWxzZVc6IHtcbiAgPEEsIEIgZXh0ZW5kcyBBLCBFMj4ocmVmaW5lbWVudDogUmVmaW5lbWVudDxBLCBCPiwgb25GYWxzZTogKGE6IEEpID0+IEUyKTogPEUxPihcbiAgICBtYTogRWl0aGVyPEUxLCBBPlxuICApID0+IEVpdGhlcjxFMSB8IEUyLCBCPlxuICA8QSwgRTI+KHByZWRpY2F0ZTogUHJlZGljYXRlPEE+LCBvbkZhbHNlOiAoYTogQSkgPT4gRTIpOiA8RTEsIEIgZXh0ZW5kcyBBPihtYjogRWl0aGVyPEUxLCBCPikgPT4gRWl0aGVyPEUxIHwgRTIsIEI+XG4gIDxBLCBFMj4ocHJlZGljYXRlOiBQcmVkaWNhdGU8QT4sIG9uRmFsc2U6IChhOiBBKSA9PiBFMik6IDxFMT4obWE6IEVpdGhlcjxFMSwgQT4pID0+IEVpdGhlcjxFMSB8IEUyLCBBPlxufSA9IGZpbHRlck9yRWxzZVxuXG4vKipcbiAqIFJldHVybnMgYSBgUmlnaHRgIGlmIGlzIGEgYExlZnRgIChhbmQgdmljZSB2ZXJzYSkuXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHN3YXAgPSA8RSwgQT4obWE6IEVpdGhlcjxFLCBBPik6IEVpdGhlcjxBLCBFPiA9PiAoaXNMZWZ0KG1hKSA/IHJpZ2h0KG1hLmxlZnQpIDogbGVmdChtYS5yaWdodCkpXG5cbi8qKlxuICogTGVzcyBzdHJpY3QgdmVyc2lvbiBvZiBbYG9yRWxzZWBdKCNvcmVsc2UpLlxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3Qgb3JFbHNlVyA9IDxFMSwgRTIsIEI+KG9uTGVmdDogKGU6IEUxKSA9PiBFaXRoZXI8RTIsIEI+KSA9PiA8QT4obWE6IEVpdGhlcjxFMSwgQT4pOiBFaXRoZXI8RTIsIEEgfCBCPiA9PlxuICBpc0xlZnQobWEpID8gb25MZWZ0KG1hLmxlZnQpIDogbWFcblxuLyoqXG4gKiBVc2VmdWwgZm9yIHJlY292ZXJpbmcgZnJvbSBlcnJvcnMuXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IG9yRWxzZTogPEUxLCBBLCBFMj4ob25MZWZ0OiAoZTogRTEpID0+IEVpdGhlcjxFMiwgQT4pID0+IChtYTogRWl0aGVyPEUxLCBBPikgPT4gRWl0aGVyPEUyLCBBPiA9IG9yRWxzZVdcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gaW50ZXJvcFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIFRha2VzIGEgZGVmYXVsdCBhbmQgYSBudWxsYWJsZSB2YWx1ZSwgaWYgdGhlIHZhbHVlIGlzIG5vdCBudWxseSwgdHVybiBpdCBpbnRvIGEgYFJpZ2h0YCwgaWYgdGhlIHZhbHVlIGlzIG51bGx5IHVzZVxuICogdGhlIHByb3ZpZGVkIGRlZmF1bHQgYXMgYSBgTGVmdGAuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGZyb21OdWxsYWJsZSwgbGVmdCwgcmlnaHQgfSBmcm9tICdmcC10cy9FaXRoZXInXG4gKlxuICogY29uc3QgcGFyc2UgPSBmcm9tTnVsbGFibGUoJ251bGx5JylcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKHBhcnNlKDEpLCByaWdodCgxKSlcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwocGFyc2UobnVsbCksIGxlZnQoJ251bGx5JykpXG4gKlxuICogQGNhdGVnb3J5IGludGVyb3BcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgZnJvbU51bGxhYmxlID0gPEU+KGU6IEUpID0+IDxBPihhOiBBKTogRWl0aGVyPEUsIE5vbk51bGxhYmxlPEE+PiA9PlxuICBhID09IG51bGwgPyBsZWZ0KGUpIDogcmlnaHQoYSBhcyBOb25OdWxsYWJsZTxBPilcblxuLyoqXG4gKiBDb25zdHJ1Y3RzIGEgbmV3IGBFaXRoZXJgIGZyb20gYSBmdW5jdGlvbiB0aGF0IG1pZ2h0IHRocm93LlxuICpcbiAqIFNlZSBhbHNvIFtgdHJ5Q2F0Y2hLYF0oI3RyeWNhdGNoaykuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCAqIGFzIEUgZnJvbSAnZnAtdHMvRWl0aGVyJ1xuICpcbiAqIGNvbnN0IHVuc2FmZUhlYWQgPSA8QT4oYXM6IFJlYWRvbmx5QXJyYXk8QT4pOiBBID0+IHtcbiAqICAgaWYgKGFzLmxlbmd0aCA+IDApIHtcbiAqICAgICByZXR1cm4gYXNbMF1cbiAqICAgfSBlbHNlIHtcbiAqICAgICB0aHJvdyBuZXcgRXJyb3IoJ2VtcHR5IGFycmF5JylcbiAqICAgfVxuICogfVxuICpcbiAqIGNvbnN0IGhlYWQgPSA8QT4oYXM6IFJlYWRvbmx5QXJyYXk8QT4pOiBFLkVpdGhlcjxFcnJvciwgQT4gPT5cbiAqICAgRS50cnlDYXRjaCgoKSA9PiB1bnNhZmVIZWFkKGFzKSwgZSA9PiAoZSBpbnN0YW5jZW9mIEVycm9yID8gZSA6IG5ldyBFcnJvcigndW5rbm93biBlcnJvcicpKSlcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKGhlYWQoW10pLCBFLmxlZnQobmV3IEVycm9yKCdlbXB0eSBhcnJheScpKSlcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoaGVhZChbMSwgMiwgM10pLCBFLnJpZ2h0KDEpKVxuICpcbiAqIEBjYXRlZ29yeSBpbnRlcm9wXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHRyeUNhdGNoID0gPEUsIEE+KGY6IExhenk8QT4sIG9uVGhyb3c6IChlOiB1bmtub3duKSA9PiBFKTogRWl0aGVyPEUsIEE+ID0+IHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gcmlnaHQoZigpKVxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGxlZnQob25UaHJvdyhlKSlcbiAgfVxufVxuXG4vKipcbiAqIENvbnZlcnRzIGEgZnVuY3Rpb24gdGhhdCBtYXkgdGhyb3cgdG8gb25lIHJldHVybmluZyBhIGBFaXRoZXJgLlxuICpcbiAqIEBjYXRlZ29yeSBpbnRlcm9wXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCB0cnlDYXRjaEsgPSA8QSBleHRlbmRzIFJlYWRvbmx5QXJyYXk8dW5rbm93bj4sIEIsIEU+KFxuICBmOiAoLi4uYTogQSkgPT4gQixcbiAgb25UaHJvdzogKGVycm9yOiB1bmtub3duKSA9PiBFXG4pOiAoKC4uLmE6IEEpID0+IEVpdGhlcjxFLCBCPikgPT4gKC4uLmEpID0+IHRyeUNhdGNoKCgpID0+IGYoLi4uYSksIG9uVGhyb3cpXG5cbi8qKlxuICogQGNhdGVnb3J5IGludGVyb3BcbiAqIEBzaW5jZSAyLjkuMFxuICovXG5leHBvcnQgY29uc3QgZnJvbU51bGxhYmxlSyA9IDxFPihcbiAgZTogRVxuKTogKDxBIGV4dGVuZHMgUmVhZG9ubHlBcnJheTx1bmtub3duPiwgQj4oXG4gIGY6ICguLi5hOiBBKSA9PiBCIHwgbnVsbCB8IHVuZGVmaW5lZFxuKSA9PiAoLi4uYTogQSkgPT4gRWl0aGVyPEUsIE5vbk51bGxhYmxlPEI+PikgPT4ge1xuICBjb25zdCBmcm9tID0gZnJvbU51bGxhYmxlKGUpXG4gIHJldHVybiAoZikgPT4gZmxvdyhmLCBmcm9tKVxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnRlcm9wXG4gKiBAc2luY2UgMi45LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGNoYWluTnVsbGFibGVLID0gPEU+KFxuICBlOiBFXG4pOiAoPEEsIEI+KGY6IChhOiBBKSA9PiBCIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4gKG1hOiBFaXRoZXI8RSwgQT4pID0+IEVpdGhlcjxFLCBOb25OdWxsYWJsZTxCPj4pID0+IHtcbiAgY29uc3QgZnJvbSA9IGZyb21OdWxsYWJsZUsoZSlcbiAgcmV0dXJuIChmKSA9PiBjaGFpbihmcm9tKGYpKVxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnRlcm9wXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCB0b1VuaW9uOiA8RSwgQT4oZmE6IEVpdGhlcjxFLCBBPikgPT4gRSB8IEEgPVxuICAvKiNfX1BVUkVfXyovXG4gIGZvbGRXKGlkZW50aXR5LCBpZGVudGl0eSlcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gdXRpbHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBEZWZhdWx0IHZhbHVlIGZvciB0aGUgYG9uRXJyb3JgIGFyZ3VtZW50IG9mIGB0cnlDYXRjaGBcbiAqXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvRXJyb3IoZTogdW5rbm93bik6IEVycm9yIHtcbiAgcmV0dXJuIGUgaW5zdGFuY2VvZiBFcnJvciA/IGUgOiBuZXcgRXJyb3IoU3RyaW5nKGUpKVxufVxuXG4vKipcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gZWxlbTxBPihcbiAgRTogRXE8QT5cbik6IHtcbiAgKGE6IEEpOiA8RT4obWE6IEVpdGhlcjxFLCBBPikgPT4gYm9vbGVhblxuICA8RT4oYTogQSwgbWE6IEVpdGhlcjxFLCBBPik6IGJvb2xlYW5cbn1cbmV4cG9ydCBmdW5jdGlvbiBlbGVtPEE+KEU6IEVxPEE+KTogPEU+KGE6IEEsIG1hPzogRWl0aGVyPEUsIEE+KSA9PiBib29sZWFuIHwgKChtYTogRWl0aGVyPEUsIEE+KSA9PiBib29sZWFuKSB7XG4gIHJldHVybiAoYSwgbWE/KSA9PiB7XG4gICAgaWYgKG1hID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGVsZW1FID0gZWxlbShFKVxuICAgICAgcmV0dXJuIChtYSkgPT4gZWxlbUUoYSwgbWEpXG4gICAgfVxuICAgIHJldHVybiBpc0xlZnQobWEpID8gZmFsc2UgOiBFLmVxdWFscyhhLCBtYS5yaWdodClcbiAgfVxufVxuXG4vKipcbiAqIFJldHVybnMgYGZhbHNlYCBpZiBgTGVmdGAgb3IgcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSBhcHBsaWNhdGlvbiBvZiB0aGUgZ2l2ZW4gcHJlZGljYXRlIHRvIHRoZSBgUmlnaHRgIHZhbHVlLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBleGlzdHMsIGxlZnQsIHJpZ2h0IH0gZnJvbSAnZnAtdHMvRWl0aGVyJ1xuICpcbiAqIGNvbnN0IGd0MiA9IGV4aXN0cygobjogbnVtYmVyKSA9PiBuID4gMilcbiAqXG4gKiBhc3NlcnQuc3RyaWN0RXF1YWwoZ3QyKGxlZnQoJ2EnKSksIGZhbHNlKVxuICogYXNzZXJ0LnN0cmljdEVxdWFsKGd0MihyaWdodCgxKSksIGZhbHNlKVxuICogYXNzZXJ0LnN0cmljdEVxdWFsKGd0MihyaWdodCgzKSksIHRydWUpXG4gKlxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBleGlzdHMgPSA8QT4ocHJlZGljYXRlOiBQcmVkaWNhdGU8QT4pID0+IDxFPihtYTogRWl0aGVyPEUsIEE+KTogYm9vbGVhbiA9PlxuICBpc0xlZnQobWEpID8gZmFsc2UgOiBwcmVkaWNhdGUobWEucmlnaHQpXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGRvIG5vdGF0aW9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQHNpbmNlIDIuOS4wXG4gKi9cbmV4cG9ydCBjb25zdCBEbzogRWl0aGVyPG5ldmVyLCB7fT4gPVxuICAvKiNfX1BVUkVfXyovXG4gIG9mKF8uZW1wdHlSZWNvcmQpXG5cbi8qKlxuICogQHNpbmNlIDIuOC4wXG4gKi9cbmV4cG9ydCBjb25zdCBiaW5kVG8gPVxuICAvKiNfX1BVUkVfXyovXG4gIGJpbmRUb18oRnVuY3RvcilcblxuLyoqXG4gKiBAc2luY2UgMi44LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGJpbmQgPVxuICAvKiNfX1BVUkVfXyovXG4gIGJpbmRfKENoYWluKVxuXG4vKipcbiAqIEBzaW5jZSAyLjguMFxuICovXG5leHBvcnQgY29uc3QgYmluZFc6IDxOIGV4dGVuZHMgc3RyaW5nLCBBLCBFMiwgQj4oXG4gIG5hbWU6IEV4Y2x1ZGU8Tiwga2V5b2YgQT4sXG4gIGY6IChhOiBBKSA9PiBFaXRoZXI8RTIsIEI+XG4pID0+IDxFMT4oXG4gIGZhOiBFaXRoZXI8RTEsIEE+XG4pID0+IEVpdGhlcjxFMSB8IEUyLCB7IHJlYWRvbmx5IFtLIGluIGtleW9mIEEgfCBOXTogSyBleHRlbmRzIGtleW9mIEEgPyBBW0tdIDogQiB9PiA9IGJpbmQgYXMgYW55XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIHBpcGVhYmxlIHNlcXVlbmNlIFNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBAc2luY2UgMi44LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGFwUyA9XG4gIC8qI19fUFVSRV9fKi9cbiAgYXBTXyhBcHBseSlcblxuLyoqXG4gKiBAc2luY2UgMi44LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGFwU1c6IDxBLCBOIGV4dGVuZHMgc3RyaW5nLCBFMiwgQj4oXG4gIG5hbWU6IEV4Y2x1ZGU8Tiwga2V5b2YgQT4sXG4gIGZiOiBFaXRoZXI8RTIsIEI+XG4pID0+IDxFMT4oXG4gIGZhOiBFaXRoZXI8RTEsIEE+XG4pID0+IEVpdGhlcjxFMSB8IEUyLCB7IHJlYWRvbmx5IFtLIGluIGtleW9mIEEgfCBOXTogSyBleHRlbmRzIGtleW9mIEEgPyBBW0tdIDogQiB9PiA9IGFwUyBhcyBhbnlcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gc2VxdWVuY2UgVFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IEFwVDogRWl0aGVyPG5ldmVyLCByZWFkb25seSBbXT4gPVxuICAvKiNfX1BVUkVfXyovXG4gIG9mKF8uZW1wdHlSZWFkb25seUFycmF5KVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBhcnJheSB1dGlsc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEVxdWl2YWxlbnQgdG8gYFJlYWRvbmx5Tm9uRW1wdHlBcnJheSN0cmF2ZXJzZVdpdGhJbmRleChBcHBsaWNhdGl2ZSlgLlxuICpcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHRyYXZlcnNlUmVhZG9ubHlOb25FbXB0eUFycmF5V2l0aEluZGV4ID0gPEEsIEUsIEI+KGY6IChpbmRleDogbnVtYmVyLCBhOiBBKSA9PiBFaXRoZXI8RSwgQj4pID0+IChcbiAgYXM6IFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxBPlxuKTogRWl0aGVyPEUsIFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxCPj4gPT4ge1xuICBjb25zdCBlID0gZigwLCBfLmhlYWQoYXMpKVxuICBpZiAoaXNMZWZ0KGUpKSB7XG4gICAgcmV0dXJuIGVcbiAgfVxuICBjb25zdCBvdXQ6IE5vbkVtcHR5QXJyYXk8Qj4gPSBbZS5yaWdodF1cbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBhcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGUgPSBmKGksIGFzW2ldKVxuICAgIGlmIChpc0xlZnQoZSkpIHtcbiAgICAgIHJldHVybiBlXG4gICAgfVxuICAgIG91dC5wdXNoKGUucmlnaHQpXG4gIH1cbiAgcmV0dXJuIHJpZ2h0KG91dClcbn1cblxuLyoqXG4gKiBFcXVpdmFsZW50IHRvIGBSZWFkb25seUFycmF5I3RyYXZlcnNlV2l0aEluZGV4KEFwcGxpY2F0aXZlKWAuXG4gKlxuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgdHJhdmVyc2VSZWFkb25seUFycmF5V2l0aEluZGV4ID0gPEEsIEUsIEI+KFxuICBmOiAoaW5kZXg6IG51bWJlciwgYTogQSkgPT4gRWl0aGVyPEUsIEI+XG4pOiAoKGFzOiBSZWFkb25seUFycmF5PEE+KSA9PiBFaXRoZXI8RSwgUmVhZG9ubHlBcnJheTxCPj4pID0+IHtcbiAgY29uc3QgZyA9IHRyYXZlcnNlUmVhZG9ubHlOb25FbXB0eUFycmF5V2l0aEluZGV4KGYpXG4gIHJldHVybiAoYXMpID0+IChfLmlzTm9uRW1wdHkoYXMpID8gZyhhcykgOiBBcFQpXG59XG5cbi8qKlxuICogQHNpbmNlIDIuOS4wXG4gKi9cbmV4cG9ydCBjb25zdCB0cmF2ZXJzZUFycmF5V2l0aEluZGV4OiA8RSwgQSwgQj4oXG4gIGY6IChpbmRleDogbnVtYmVyLCBhOiBBKSA9PiBFaXRoZXI8RSwgQj5cbikgPT4gKGFzOiBSZWFkb25seUFycmF5PEE+KSA9PiBFaXRoZXI8RSwgUmVhZG9ubHlBcnJheTxCPj4gPSB0cmF2ZXJzZVJlYWRvbmx5QXJyYXlXaXRoSW5kZXhcblxuLyoqXG4gKiBAc2luY2UgMi45LjBcbiAqL1xuZXhwb3J0IGNvbnN0IHRyYXZlcnNlQXJyYXkgPSA8RSwgQSwgQj4oXG4gIGY6IChhOiBBKSA9PiBFaXRoZXI8RSwgQj5cbik6ICgoYXM6IFJlYWRvbmx5QXJyYXk8QT4pID0+IEVpdGhlcjxFLCBSZWFkb25seUFycmF5PEI+PikgPT4gdHJhdmVyc2VSZWFkb25seUFycmF5V2l0aEluZGV4KChfLCBhKSA9PiBmKGEpKVxuXG4vKipcbiAqIEBzaW5jZSAyLjkuMFxuICovXG5leHBvcnQgY29uc3Qgc2VxdWVuY2VBcnJheTogPEUsIEE+KGFzOiBSZWFkb25seUFycmF5PEVpdGhlcjxFLCBBPj4pID0+IEVpdGhlcjxFLCBSZWFkb25seUFycmF5PEE+PiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgdHJhdmVyc2VBcnJheShpZGVudGl0eSlcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gZGVwcmVjYXRlZFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyB0c2xpbnQ6ZGlzYWJsZTogZGVwcmVjYXRpb25cblxuLyoqXG4gKiBVc2UgW2BKc29uYF0oLi9Kc29uLnRzLmh0bWwpIG1vZHVsZSBpbnN0ZWFkLlxuICpcbiAqIEBzaW5jZSAyLjYuN1xuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IHR5cGUgSnNvbiA9IGJvb2xlYW4gfCBudW1iZXIgfCBzdHJpbmcgfCBudWxsIHwgSnNvbkFycmF5IHwgSnNvblJlY29yZFxuXG4vKipcbiAqIFVzZSBbYEpzb25gXSguL0pzb24udHMuaHRtbCkgbW9kdWxlIGluc3RlYWQuXG4gKlxuICogQHNpbmNlIDIuNi43XG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgaW50ZXJmYWNlIEpzb25SZWNvcmQge1xuICByZWFkb25seSBba2V5OiBzdHJpbmddOiBKc29uXG59XG5cbi8qKlxuICogVXNlIFtgSnNvbmBdKC4vSnNvbi50cy5odG1sKSBtb2R1bGUgaW5zdGVhZC5cbiAqXG4gKiBAc2luY2UgMi42LjdcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSnNvbkFycmF5IGV4dGVuZHMgUmVhZG9ubHlBcnJheTxKc29uPiB7fVxuXG4vKipcbiAqIFVzZSBbYHBhcnNlYF0oLi9Kc29uLnRzLmh0bWwjcGFyc2UpIGluc3RlYWQuXG4gKlxuICogQGNhdGVnb3J5IGNvbnN0cnVjdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VKU09OPEU+KHM6IHN0cmluZywgb25FcnJvcjogKHJlYXNvbjogdW5rbm93bikgPT4gRSk6IEVpdGhlcjxFLCBKc29uPiB7XG4gIHJldHVybiB0cnlDYXRjaCgoKSA9PiBKU09OLnBhcnNlKHMpLCBvbkVycm9yKVxufVxuXG4vKipcbiAqIFVzZSBbYHN0cmluZ2lmeWBdKC4vSnNvbi50cy5odG1sI3N0cmluZ2lmeSkgaW5zdGVhZC5cbiAqXG4gKiBAY2F0ZWdvcnkgY29uc3RydWN0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBjb25zdCBzdHJpbmdpZnlKU09OID0gPEU+KHU6IHVua25vd24sIG9uRXJyb3I6IChyZWFzb246IHVua25vd24pID0+IEUpOiBFaXRoZXI8RSwgc3RyaW5nPiA9PlxuICB0cnlDYXRjaCgoKSA9PiB7XG4gICAgY29uc3QgcyA9IEpTT04uc3RyaW5naWZ5KHUpXG4gICAgaWYgKHR5cGVvZiBzICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb252ZXJ0aW5nIHVuc3VwcG9ydGVkIHN0cnVjdHVyZSB0byBKU09OJylcbiAgICB9XG4gICAgcmV0dXJuIHNcbiAgfSwgb25FcnJvcilcblxuLyoqXG4gKiBVc2Ugc21hbGwsIHNwZWNpZmljIGluc3RhbmNlcyBpbnN0ZWFkLlxuICpcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjAuMFxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IGVpdGhlcjogTW9uYWQyPFVSST4gJlxuICBGb2xkYWJsZTI8VVJJPiAmXG4gIFRyYXZlcnNhYmxlMjxVUkk+ICZcbiAgQmlmdW5jdG9yMjxVUkk+ICZcbiAgQWx0MjxVUkk+ICZcbiAgRXh0ZW5kMjxVUkk+ICZcbiAgQ2hhaW5SZWMyPFVSST4gJlxuICBNb25hZFRocm93MjxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgb2YsXG4gIGFwOiBfYXAsXG4gIGNoYWluOiBfY2hhaW4sXG4gIHJlZHVjZTogX3JlZHVjZSxcbiAgZm9sZE1hcDogX2ZvbGRNYXAsXG4gIHJlZHVjZVJpZ2h0OiBfcmVkdWNlUmlnaHQsXG4gIHRyYXZlcnNlOiBfdHJhdmVyc2UsXG4gIHNlcXVlbmNlLFxuICBiaW1hcDogX2JpbWFwLFxuICBtYXBMZWZ0OiBfbWFwTGVmdCxcbiAgYWx0OiBfYWx0LFxuICBleHRlbmQ6IF9leHRlbmQsXG4gIGNoYWluUmVjOiBfY2hhaW5SZWMsXG4gIHRocm93RXJyb3I6IHRocm93RXJyb3Jcbn1cblxuLyoqXG4gKiBVc2UgW2BnZXRBcHBseVNlbWlncm91cGBdKC4vQXBwbHkudHMuaHRtbCNnZXRhcHBseXNlbWlncm91cCkgaW5zdGVhZC5cbiAqXG4gKiBTZW1pZ3JvdXAgcmV0dXJuaW5nIHRoZSBsZWZ0LW1vc3QgYExlZnRgIHZhbHVlLiBJZiBib3RoIG9wZXJhbmRzIGFyZSBgUmlnaHRgcyB0aGVuIHRoZSBpbm5lciB2YWx1ZXNcbiAqIGFyZSBjb25jYXRlbmF0ZWQgdXNpbmcgdGhlIHByb3ZpZGVkIGBTZW1pZ3JvdXBgXG4gKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMC4wXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgY29uc3QgZ2V0QXBwbHlTZW1pZ3JvdXA6IDxFLCBBPihTOiBTZW1pZ3JvdXA8QT4pID0+IFNlbWlncm91cDxFaXRoZXI8RSwgQT4+ID1cbiAgLyojX19QVVJFX18qL1xuICBnZXRBcHBseVNlbWlncm91cF8oQXBwbHkpXG5cbi8qKlxuICogVXNlIFtgZ2V0QXBwbGljYXRpdmVNb25vaWRgXSguL0FwcGxpY2F0aXZlLnRzLmh0bWwjZ2V0YXBwbGljYXRpdmVtb25vaWQpIGluc3RlYWQuXG4gKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMC4wXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgY29uc3QgZ2V0QXBwbHlNb25vaWQ6IDxFLCBBPihNOiBNb25vaWQ8QT4pID0+IE1vbm9pZDxFaXRoZXI8RSwgQT4+ID1cbiAgLyojX19QVVJFX18qL1xuICBnZXRBcHBsaWNhdGl2ZU1vbm9pZChBcHBsaWNhdGl2ZSlcblxuLyoqXG4gKiBVc2UgW2BnZXRBcHBseVNlbWlncm91cGBdKC4vQXBwbHkudHMuaHRtbCNnZXRhcHBseXNlbWlncm91cCkgaW5zdGVhZC5cbiAqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4wLjBcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRWYWxpZGF0aW9uU2VtaWdyb3VwID0gPEUsIEE+KFNFOiBTZW1pZ3JvdXA8RT4sIFNBOiBTZW1pZ3JvdXA8QT4pOiBTZW1pZ3JvdXA8RWl0aGVyPEUsIEE+PiA9PlxuICBnZXRBcHBseVNlbWlncm91cF8oZ2V0QXBwbGljYXRpdmVWYWxpZGF0aW9uKFNFKSkoU0EpXG5cbi8qKlxuICogVXNlIFtgZ2V0QXBwbGljYXRpdmVNb25vaWRgXSguL0FwcGxpY2F0aXZlLnRzLmh0bWwjZ2V0YXBwbGljYXRpdmVtb25vaWQpIGluc3RlYWQuXG4gKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMC4wXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgY29uc3QgZ2V0VmFsaWRhdGlvbk1vbm9pZCA9IDxFLCBBPihTRTogU2VtaWdyb3VwPEU+LCBNQTogTW9ub2lkPEE+KTogTW9ub2lkPEVpdGhlcjxFLCBBPj4gPT5cbiAgZ2V0QXBwbGljYXRpdmVNb25vaWQoZ2V0QXBwbGljYXRpdmVWYWxpZGF0aW9uKFNFKSkoTUEpXG5cbi8qKlxuICogVXNlIFtgZ2V0QXBwbGljYXRpdmVWYWxpZGF0aW9uYF0oI2dldGFwcGxpY2F0aXZldmFsaWRhdGlvbikgYW5kIFtgZ2V0QWx0VmFsaWRhdGlvbmBdKCNnZXRhbHR2YWxpZGF0aW9uKSBpbnN0ZWFkLlxuICpcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjAuMFxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFZhbGlkYXRpb248RT4oXG4gIFNFOiBTZW1pZ3JvdXA8RT5cbik6IE1vbmFkMkM8VVJJLCBFPiAmXG4gIEZvbGRhYmxlMjxVUkk+ICZcbiAgVHJhdmVyc2FibGUyPFVSST4gJlxuICBCaWZ1bmN0b3IyPFVSST4gJlxuICBBbHQyQzxVUkksIEU+ICZcbiAgRXh0ZW5kMjxVUkk+ICZcbiAgQ2hhaW5SZWMyQzxVUkksIEU+ICZcbiAgTW9uYWRUaHJvdzJDPFVSSSwgRT4ge1xuICBjb25zdCBhcCA9IGdldEFwcGxpY2F0aXZlVmFsaWRhdGlvbihTRSkuYXBcbiAgY29uc3QgYWx0ID0gZ2V0QWx0VmFsaWRhdGlvbihTRSkuYWx0XG4gIHJldHVybiB7XG4gICAgVVJJLFxuICAgIF9FOiB1bmRlZmluZWQgYXMgYW55LFxuICAgIG1hcDogX21hcCxcbiAgICBvZixcbiAgICBjaGFpbjogX2NoYWluLFxuICAgIGJpbWFwOiBfYmltYXAsXG4gICAgbWFwTGVmdDogX21hcExlZnQsXG4gICAgcmVkdWNlOiBfcmVkdWNlLFxuICAgIGZvbGRNYXA6IF9mb2xkTWFwLFxuICAgIHJlZHVjZVJpZ2h0OiBfcmVkdWNlUmlnaHQsXG4gICAgZXh0ZW5kOiBfZXh0ZW5kLFxuICAgIHRyYXZlcnNlOiBfdHJhdmVyc2UsXG4gICAgc2VxdWVuY2UsXG4gICAgY2hhaW5SZWM6IF9jaGFpblJlYyxcbiAgICB0aHJvd0Vycm9yLFxuICAgIGFwLFxuICAgIGFsdFxuICB9XG59XG4iXX0=