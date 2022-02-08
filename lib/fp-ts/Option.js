"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.duplicate = exports.compact = exports.chainNullableK = exports.chainFirst = exports.chainEitherK = exports.chain = exports.bindTo = exports.bind = exports.apSecond = exports.apS = exports.apFirst = exports.ap = exports.altW = exports.alt = exports.Zero = exports.Witherable = exports.URI = exports.Traversable = exports.Pointed = exports.MonadThrow = exports.Monad = exports.Functor = exports.FromEither = exports.Foldable = exports.Filterable = exports.Extend = exports.Do = exports.Compactable = exports.Chain = exports.Apply = exports.Applicative = exports.ApT = exports.Alternative = exports.Alt = void 0;
exports.elem = elem;
exports.fromNullableK = exports.fromNullable = exports.fromEitherK = exports.fromEither = exports.foldW = exports.foldMap = exports.fold = exports.flatten = exports.flap = exports.filterMap = exports.filter = exports.extend = exports.exists = void 0;
exports.fromPredicate = fromPredicate;
exports.getOrd = exports.getOrElseW = exports.getOrElse = exports.getMonoid = exports.getLeft = exports.getLastMonoid = exports.getFirstMonoid = exports.getEq = exports.getApplySemigroup = exports.getApplyMonoid = void 0;
exports.getRefinement = getRefinement;
exports.zero = exports.wither = exports.wilt = exports.tryCatchK = exports.tryCatch = exports.traverseReadonlyNonEmptyArrayWithIndex = exports.traverseReadonlyArrayWithIndex = exports.traverseArrayWithIndex = exports.traverseArray = exports.traverse = exports.toUndefined = exports.toNullable = exports.throwError = exports.some = exports.sequenceArray = exports.sequence = exports.separate = exports.reduceRight = exports.reduce = exports.partitionMap = exports.partition = exports.option = exports.of = exports.none = exports.matchW = exports.match = exports.mapNullable = exports.map = exports.isSome = exports.isNone = exports.guard = exports.getShow = exports.getRight = void 0;

var _Applicative = require("./Applicative");

var _Apply = require("./Apply");

var _Chain = require("./Chain");

var _FromEither = require("./FromEither");

var _function = require("./function");

var _Functor = require("./Functor");

var _ = _interopRequireWildcard(require("./internal"));

var _Predicate = require("./Predicate");

var _Semigroup = require("./Semigroup");

var _Separated = require("./Separated");

var _Witherable = require("./Witherable");

var _Zero = require("./Zero");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * ```ts
 * type Option<A> = None | Some<A>
 * ```
 *
 * `Option<A>` is a container for an optional value of type `A`. If the value of type `A` is present, the `Option<A>` is
 * an instance of `Some<A>`, containing the present value of type `A`. If the value is absent, the `Option<A>` is an
 * instance of `None`.
 *
 * An option could be looked at as a collection or foldable structure with either one or zero elements.
 * Another way to look at `Option` is: it represents the effect of a possibly failing computation.
 *
 * @since 2.0.0
 */
// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------

/**
 * `None` doesn't have a constructor, instead you can use it directly as a value. Represents a missing value.
 *
 * @category constructors
 * @since 2.0.0
 */
var none = _.none;
/**
 * Constructs a `Some`. Represents an optional value that exists.
 *
 * @category constructors
 * @since 2.0.0
 */

exports.none = none;
var some = _.some;
/**
 * Returns a *smart constructor* based on the given predicate.
 *
 * @example
 * import { none, some, fromPredicate } from 'fp-ts/Option'
 *
 * const getOption = fromPredicate((n: number) => n >= 0)
 *
 * assert.deepStrictEqual(getOption(-1), none)
 * assert.deepStrictEqual(getOption(1), some(1))
 *
 * @category constructors
 * @since 2.0.0
 */

exports.some = some;

function fromPredicate(predicate) {
  return function (a) {
    return predicate(a) ? some(a) : none;
  };
}
/**
 * Returns the `Left` value of an `Either` if possible.
 *
 * @example
 * import { getLeft, none, some } from 'fp-ts/Option'
 * import { right, left } from 'fp-ts/Either'
 *
 * assert.deepStrictEqual(getLeft(right(1)), none)
 * assert.deepStrictEqual(getLeft(left('a')), some('a'))
 *
 * @category constructors
 * @since 2.0.0
 */


var getLeft = function getLeft(ma) {
  return ma._tag === 'Right' ? none : some(ma.left);
};
/**
 * Returns the `Right` value of an `Either` if possible.
 *
 * @example
 * import { getRight, none, some } from 'fp-ts/Option'
 * import { right, left } from 'fp-ts/Either'
 *
 * assert.deepStrictEqual(getRight(right(1)), some(1))
 * assert.deepStrictEqual(getRight(left('a')), none)
 *
 * @category constructors
 * @since 2.0.0
 */


exports.getLeft = getLeft;

var getRight = function getRight(ma) {
  return ma._tag === 'Left' ? none : some(ma.right);
}; // -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------


exports.getRight = getRight;

var _map = function _map(fa, f) {
  return (0, _function.pipe)(fa, map(f));
};

var _ap = function _ap(fab, fa) {
  return (0, _function.pipe)(fab, ap(fa));
};

var _chain = function _chain(ma, f) {
  return (0, _function.pipe)(ma, chain(f));
};

var _reduce = function _reduce(fa, b, f) {
  return (0, _function.pipe)(fa, reduce(b, f));
};

var _foldMap = function _foldMap(M) {
  var foldMapM = foldMap(M);
  return function (fa, f) {
    return (0, _function.pipe)(fa, foldMapM(f));
  };
};

var _reduceRight = function _reduceRight(fa, b, f) {
  return (0, _function.pipe)(fa, reduceRight(b, f));
};

var _traverse = function _traverse(F) {
  var traverseF = traverse(F);
  return function (ta, f) {
    return (0, _function.pipe)(ta, traverseF(f));
  };
};
/* istanbul ignore next */


var _alt = function _alt(fa, that) {
  return (0, _function.pipe)(fa, alt(that));
};

var _filter = function _filter(fa, predicate) {
  return (0, _function.pipe)(fa, filter(predicate));
};
/* istanbul ignore next */


var _filterMap = function _filterMap(fa, f) {
  return (0, _function.pipe)(fa, filterMap(f));
};
/* istanbul ignore next */


var _extend = function _extend(wa, f) {
  return (0, _function.pipe)(wa, extend(f));
};
/* istanbul ignore next */


var _partition = function _partition(fa, predicate) {
  return (0, _function.pipe)(fa, partition(predicate));
};
/* istanbul ignore next */


var _partitionMap = function _partitionMap(fa, f) {
  return (0, _function.pipe)(fa, partitionMap(f));
}; // -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------

/**
 * @category instances
 * @since 2.0.0
 */


var URI = 'Option';
/**
 * @category instances
 * @since 2.0.0
 */

exports.URI = URI;

/**
 * @category instances
 * @since 2.0.0
 */
var getShow = function getShow(S) {
  return {
    show: function show(ma) {
      return isNone(ma) ? 'none' : "some(".concat(S.show(ma.value), ")");
    }
  };
};
/**
 * @example
 * import { none, some, getEq } from 'fp-ts/Option'
 * import * as N from 'fp-ts/number'
 *
 * const E = getEq(N.Eq)
 * assert.strictEqual(E.equals(none, none), true)
 * assert.strictEqual(E.equals(none, some(1)), false)
 * assert.strictEqual(E.equals(some(1), none), false)
 * assert.strictEqual(E.equals(some(1), some(2)), false)
 * assert.strictEqual(E.equals(some(1), some(1)), true)
 *
 * @category instances
 * @since 2.0.0
 */


exports.getShow = getShow;

var getEq = function getEq(E) {
  return {
    equals: function equals(x, y) {
      return x === y || (isNone(x) ? isNone(y) : isNone(y) ? false : E.equals(x.value, y.value));
    }
  };
};
/**
 * The `Ord` instance allows `Option` values to be compared with
 * `compare`, whenever there is an `Ord` instance for
 * the type the `Option` contains.
 *
 * `None` is considered to be less than any `Some` value.
 *
 *
 * @example
 * import { none, some, getOrd } from 'fp-ts/Option'
 * import * as N from 'fp-ts/number'
 *
 * const O = getOrd(N.Ord)
 * assert.strictEqual(O.compare(none, none), 0)
 * assert.strictEqual(O.compare(none, some(1)), -1)
 * assert.strictEqual(O.compare(some(1), none), 1)
 * assert.strictEqual(O.compare(some(1), some(2)), -1)
 * assert.strictEqual(O.compare(some(1), some(1)), 0)
 *
 * @category instances
 * @since 2.0.0
 */


exports.getEq = getEq;

var getOrd = function getOrd(O) {
  return {
    equals: getEq(O).equals,
    compare: function compare(x, y) {
      return x === y ? 0 : isSome(x) ? isSome(y) ? O.compare(x.value, y.value) : 1 : -1;
    }
  };
};
/**
 * Monoid returning the left-most non-`None` value. If both operands are `Some`s then the inner values are
 * concatenated using the provided `Semigroup`
 *
 * | x       | y       | concat(x, y)       |
 * | ------- | ------- | ------------------ |
 * | none    | none    | none               |
 * | some(a) | none    | some(a)            |
 * | none    | some(b) | some(b)            |
 * | some(a) | some(b) | some(concat(a, b)) |
 *
 * @example
 * import { getMonoid, some, none } from 'fp-ts/Option'
 * import { SemigroupSum } from 'fp-ts/number'
 *
 * const M = getMonoid(SemigroupSum)
 * assert.deepStrictEqual(M.concat(none, none), none)
 * assert.deepStrictEqual(M.concat(some(1), none), some(1))
 * assert.deepStrictEqual(M.concat(none, some(1)), some(1))
 * assert.deepStrictEqual(M.concat(some(1), some(2)), some(3))
 *
 * @category instances
 * @since 2.0.0
 */


exports.getOrd = getOrd;

var getMonoid = function getMonoid(S) {
  return {
    concat: function concat(x, y) {
      return isNone(x) ? y : isNone(y) ? x : some(S.concat(x.value, y.value));
    },
    empty: none
  };
};
/**
 * @category instance operations
 * @since 2.0.0
 */


exports.getMonoid = getMonoid;

var map = function map(f) {
  return function (fa) {
    return isNone(fa) ? none : some(f(fa.value));
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
var of = some;
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
 * @category instance operations
 * @since 2.0.0
 */

exports.Pointed = Pointed;

var ap = function ap(fa) {
  return function (fab) {
    return isNone(fab) ? none : isNone(fa) ? none : some(fab.value(fa.value));
  };
};
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
 * Composes computations in sequence, using the return value of one computation to determine the next computation.
 *
 * @category instance operations
 * @since 2.0.0
 */

exports.Applicative = Applicative;

var chain = function chain(f) {
  return function (ma) {
    return isNone(ma) ? none : f(ma.value);
  };
};
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
 * @category instance operations
 * @since 2.0.0
 */

exports.Monad = Monad;

var reduce = function reduce(b, f) {
  return function (fa) {
    return isNone(fa) ? b : f(b, fa.value);
  };
};
/**
 * @category instance operations
 * @since 2.0.0
 */


exports.reduce = reduce;

var foldMap = function foldMap(M) {
  return function (f) {
    return function (fa) {
      return isNone(fa) ? M.empty : f(fa.value);
    };
  };
};
/**
 * @category instance operations
 * @since 2.0.0
 */


exports.foldMap = foldMap;

var reduceRight = function reduceRight(b, f) {
  return function (fa) {
    return isNone(fa) ? b : f(fa.value, b);
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
 * Less strict version of [`alt`](#alt).
 *
 * @category instance operations
 * @since 2.9.0
 */

exports.Foldable = Foldable;

var altW = function altW(that) {
  return function (fa) {
    return isNone(fa) ? that() : fa;
  };
};
/**
 * Identifies an associative operation on a type constructor. It is similar to `Semigroup`, except that it applies to
 * types of kind `* -> *`.
 *
 * In case of `Option` returns the left-most non-`None` value.
 *
 * @example
 * import * as O from 'fp-ts/Option'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.deepStrictEqual(
 *   pipe(
 *     O.some('a'),
 *     O.alt(() => O.some('b'))
 *   ),
 *   O.some('a')
 * )
 * assert.deepStrictEqual(
 *   pipe(
 *     O.none,
 *     O.alt(() => O.some('b'))
 *   ),
 *   O.some('b')
 * )
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
 * @since 2.7.0
 */

exports.Alt = Alt;

var zero = function zero() {
  return none;
};
/**
 * @category instances
 * @since 2.11.0
 */


exports.zero = zero;
var Zero = {
  URI: URI,
  zero: zero
};
/**
 * @category constructors
 * @since 2.11.0
 */

exports.Zero = Zero;
var guard = /*#__PURE__*/(0, _Zero.guard)(Zero, Pointed);
/**
 * @category instances
 * @since 2.7.0
 */

exports.guard = guard;
var Alternative = {
  URI: URI,
  map: _map,
  ap: _ap,
  of: of,
  alt: _alt,
  zero: zero
};
/**
 * @category instance operations
 * @since 2.0.0
 */

exports.Alternative = Alternative;

var extend = function extend(f) {
  return function (wa) {
    return isNone(wa) ? none : some(f(wa));
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
 * @category instance operations
 * @since 2.0.0
 */

exports.Extend = Extend;
var compact = /*#__PURE__*/chain(_function.identity);
exports.compact = compact;
var defaultSeparated = /*#__PURE__*/(0, _Separated.separated)(none, none);
/**
 * @category instance operations
 * @since 2.0.0
 */

var separate = function separate(ma) {
  return isNone(ma) ? defaultSeparated : (0, _Separated.separated)(getLeft(ma.value), getRight(ma.value));
};
/**
 * @category instances
 * @since 2.7.0
 */


exports.separate = separate;
var Compactable = {
  URI: URI,
  compact: compact,
  separate: separate
};
/**
 * @category instance operations
 * @since 2.0.0
 */

exports.Compactable = Compactable;

var filter = function filter(predicate) {
  return function (fa) {
    return isNone(fa) ? none : predicate(fa.value) ? fa : none;
  };
};
/**
 * @category instance operations
 * @since 2.0.0
 */


exports.filter = filter;

var filterMap = function filterMap(f) {
  return function (fa) {
    return isNone(fa) ? none : f(fa.value);
  };
};
/**
 * @category instance operations
 * @since 2.0.0
 */


exports.filterMap = filterMap;

var partition = function partition(predicate) {
  return function (fa) {
    return (0, _Separated.separated)(_filter(fa, (0, _Predicate.not)(predicate)), _filter(fa, predicate));
  };
};
/**
 * @category instance operations
 * @since 2.0.0
 */


exports.partition = partition;

var partitionMap = function partitionMap(f) {
  return (0, _function.flow)(map(f), separate);
};
/**
 * @category instances
 * @since 2.7.0
 */


exports.partitionMap = partitionMap;
var Filterable = {
  URI: URI,
  map: _map,
  compact: compact,
  separate: separate,
  filter: _filter,
  filterMap: _filterMap,
  partition: _partition,
  partitionMap: _partitionMap
};
/**
 * @category instance operations
 * @since 2.6.3
 */

exports.Filterable = Filterable;

var traverse = function traverse(F) {
  return function (f) {
    return function (ta) {
      return isNone(ta) ? F.of(none) : F.map(f(ta.value), some);
    };
  };
};
/**
 * @category instance operations
 * @since 2.6.3
 */


exports.traverse = traverse;

var sequence = function sequence(F) {
  return function (ta) {
    return isNone(ta) ? F.of(none) : F.map(ta.value, some);
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
exports.Traversable = Traversable;

var _wither = /*#__PURE__*/(0, _Witherable.witherDefault)(Traversable, Compactable);

var _wilt = /*#__PURE__*/(0, _Witherable.wiltDefault)(Traversable, Compactable);
/**
 * @category instance operations
 * @since 2.6.5
 */


var wither = function wither(F) {
  var _witherF = _wither(F);

  return function (f) {
    return function (fa) {
      return _witherF(fa, f);
    };
  };
};
/**
 * @category instance operations
 * @since 2.6.5
 */


exports.wither = wither;

var wilt = function wilt(F) {
  var _wiltF = _wilt(F);

  return function (f) {
    return function (fa) {
      return _wiltF(fa, f);
    };
  };
};
/**
 * @category instances
 * @since 2.7.0
 */


exports.wilt = wilt;
var Witherable = {
  URI: URI,
  map: _map,
  reduce: _reduce,
  foldMap: _foldMap,
  reduceRight: _reduceRight,
  traverse: _traverse,
  sequence: sequence,
  compact: compact,
  separate: separate,
  filter: _filter,
  filterMap: _filterMap,
  partition: _partition,
  partitionMap: _partitionMap,
  wither: _wither,
  wilt: _wilt
};
/**
 * @category instance operations
 * @since 2.7.0
 */

exports.Witherable = Witherable;

var throwError = function throwError() {
  return none;
};
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
 * Transforms an `Either` to an `Option` discarding the error.
 *
 * Alias of [getRight](#getright)
 *
 * @category natural transformations
 * @since 2.0.0
 */

exports.MonadThrow = MonadThrow;
var fromEither = getRight;
/**
 * @category instances
 * @since 2.11.0
 */

exports.fromEither = fromEither;
var FromEither = {
  URI: URI,
  fromEither: fromEither
}; // -------------------------------------------------------------------------------------
// refinements
// -------------------------------------------------------------------------------------

/**
 * Returns `true` if the option is an instance of `Some`, `false` otherwise.
 *
 * @example
 * import { some, none, isSome } from 'fp-ts/Option'
 *
 * assert.strictEqual(isSome(some(1)), true)
 * assert.strictEqual(isSome(none), false)
 *
 * @category refinements
 * @since 2.0.0
 */

exports.FromEither = FromEither;
var isSome = _.isSome;
/**
 * Returns `true` if the option is `None`, `false` otherwise.
 *
 * @example
 * import { some, none, isNone } from 'fp-ts/Option'
 *
 * assert.strictEqual(isNone(some(1)), false)
 * assert.strictEqual(isNone(none), true)
 *
 * @category refinements
 * @since 2.0.0
 */

exports.isSome = isSome;

var isNone = function isNone(fa) {
  return fa._tag === 'None';
}; // -------------------------------------------------------------------------------------
// destructors
// -------------------------------------------------------------------------------------

/**
 * Less strict version of [`match`](#match).
 *
 * @category destructors
 * @since 2.10.0
 */


exports.isNone = isNone;

var matchW = function matchW(onNone, onSome) {
  return function (ma) {
    return isNone(ma) ? onNone() : onSome(ma.value);
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
 * Takes a (lazy) default value, a function, and an `Option` value, if the `Option` value is `None` the default value is
 * returned, otherwise the function is applied to the value inside the `Some` and the result is returned.
 *
 * @example
 * import { some, none, match } from 'fp-ts/Option'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.strictEqual(
 *   pipe(
 *     some(1),
 *     match(() => 'a none', a => `a some containing ${a}`)
 *   ),
 *   'a some containing 1'
 * )
 *
 * assert.strictEqual(
 *   pipe(
 *     none,
 *     match(() => 'a none', a => `a some containing ${a}`)
 *   ),
 *   'a none'
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

var getOrElseW = function getOrElseW(onNone) {
  return function (ma) {
    return isNone(ma) ? onNone() : ma.value;
  };
};
/**
 * Extracts the value out of the structure, if it exists. Otherwise returns the given default value
 *
 * @example
 * import { some, none, getOrElse } from 'fp-ts/Option'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.strictEqual(
 *   pipe(
 *     some(1),
 *     getOrElse(() => 0)
 *   ),
 *   1
 * )
 * assert.strictEqual(
 *   pipe(
 *     none,
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
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.0.0
 */

exports.apSecond = apSecond;
var flatten = compact;
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation and
 * keeping only the result of the first.
 *
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.0.0
 */

exports.flatten = flatten;
var chainFirst = /*#__PURE__*/(0, _Chain.chainFirst)(Chain);
/**
 * Derivable from `Extend`.
 *
 * @category combinators
 * @since 2.0.0
 */

exports.chainFirst = chainFirst;
var duplicate = /*#__PURE__*/extend(_function.identity);
/**
 * @category combinators
 * @since 2.11.0
 */

exports.duplicate = duplicate;
var fromEitherK = /*#__PURE__*/(0, _FromEither.fromEitherK)(FromEither);
/**
 * @category combinators
 * @since 2.11.0
 */

exports.fromEitherK = fromEitherK;
var chainEitherK = /*#__PURE__*/(0, _FromEither.chainEitherK)(FromEither, Chain); // -------------------------------------------------------------------------------------
// interop
// -------------------------------------------------------------------------------------

/**
 * Constructs a new `Option` from a nullable type. If the value is `null` or `undefined`, returns `None`, otherwise
 * returns the value wrapped in a `Some`.
 *
 * @example
 * import { none, some, fromNullable } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(fromNullable(undefined), none)
 * assert.deepStrictEqual(fromNullable(null), none)
 * assert.deepStrictEqual(fromNullable(1), some(1))
 *
 * @category interop
 * @since 2.0.0
 */

exports.chainEitherK = chainEitherK;

var fromNullable = function fromNullable(a) {
  return a == null ? none : some(a);
};
/**
 * Transforms an exception into an `Option`. If `f` throws, returns `None`, otherwise returns the output wrapped in a
 * `Some`.
 *
 * See also [`tryCatchK`](#trycatchk).
 *
 * @example
 * import { none, some, tryCatch } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(
 *   tryCatch(() => {
 *     throw new Error()
 *   }),
 *   none
 * )
 * assert.deepStrictEqual(tryCatch(() => 1), some(1))
 *
 * @category interop
 * @since 2.0.0
 */


exports.fromNullable = fromNullable;

var tryCatch = function tryCatch(f) {
  try {
    return some(f());
  } catch (e) {
    return none;
  }
};
/**
 * Converts a function that may throw to one returning a `Option`.
 *
 * @category interop
 * @since 2.10.0
 */


exports.tryCatch = tryCatch;

var tryCatchK = function tryCatchK(f) {
  return function () {
    for (var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++) {
      a[_key] = arguments[_key];
    }

    return tryCatch(function () {
      return f.apply(void 0, a);
    });
  };
};
/**
 * Returns a *smart constructor* from a function that returns a nullable value.
 *
 * @example
 * import { fromNullableK, none, some } from 'fp-ts/Option'
 *
 * const f = (s: string): number | undefined => {
 *   const n = parseFloat(s)
 *   return isNaN(n) ? undefined : n
 * }
 *
 * const g = fromNullableK(f)
 *
 * assert.deepStrictEqual(g('1'), some(1))
 * assert.deepStrictEqual(g('a'), none)
 *
 * @category interop
 * @since 2.9.0
 */


exports.tryCatchK = tryCatchK;

var fromNullableK = function fromNullableK(f) {
  return (0, _function.flow)(f, fromNullable);
};
/**
 * This is `chain` + `fromNullable`, useful when working with optional values.
 *
 * @example
 * import { some, none, fromNullable, chainNullableK } from 'fp-ts/Option'
 * import { pipe } from 'fp-ts/function'
 *
 * interface Employee {
 *   readonly company?: {
 *     readonly address?: {
 *       readonly street?: {
 *         readonly name?: string
 *       }
 *     }
 *   }
 * }
 *
 * const employee1: Employee = { company: { address: { street: { name: 'high street' } } } }
 *
 * assert.deepStrictEqual(
 *   pipe(
 *     fromNullable(employee1.company),
 *     chainNullableK(company => company.address),
 *     chainNullableK(address => address.street),
 *     chainNullableK(street => street.name)
 *   ),
 *   some('high street')
 * )
 *
 * const employee2: Employee = { company: { address: { street: {} } } }
 *
 * assert.deepStrictEqual(
 *   pipe(
 *     fromNullable(employee2.company),
 *     chainNullableK(company => company.address),
 *     chainNullableK(address => address.street),
 *     chainNullableK(street => street.name)
 *   ),
 *   none
 * )
 *
 * @category interop
 * @since 2.9.0
 */


exports.fromNullableK = fromNullableK;

var chainNullableK = function chainNullableK(f) {
  return function (ma) {
    return isNone(ma) ? none : fromNullable(f(ma.value));
  };
};
/**
 * Extracts the value out of the structure, if it exists. Otherwise returns `null`.
 *
 * @example
 * import { some, none, toNullable } from 'fp-ts/Option'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.strictEqual(
 *   pipe(
 *     some(1),
 *     toNullable
 *   ),
 *   1
 * )
 * assert.strictEqual(
 *   pipe(
 *     none,
 *     toNullable
 *   ),
 *   null
 * )
 *
 * @category interop
 * @since 2.0.0
 */


exports.chainNullableK = chainNullableK;
var toNullable = /*#__PURE__*/match(_function.constNull, _function.identity);
/**
 * Extracts the value out of the structure, if it exists. Otherwise returns `undefined`.
 *
 * @example
 * import { some, none, toUndefined } from 'fp-ts/Option'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.strictEqual(
 *   pipe(
 *     some(1),
 *     toUndefined
 *   ),
 *   1
 * )
 * assert.strictEqual(
 *   pipe(
 *     none,
 *     toUndefined
 *   ),
 *   undefined
 * )
 *
 * @category interop
 * @since 2.0.0
 */

exports.toNullable = toNullable;
var toUndefined = /*#__PURE__*/match(_function.constUndefined, _function.identity); // -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------

/**
 * Returns `true` if `ma` contains `a`
 *
 * @example
 * import { some, none, elem } from 'fp-ts/Option'
 * import { pipe } from 'fp-ts/function'
 * import * as N from 'fp-ts/number'
 *
 * assert.strictEqual(pipe(some(1), elem(N.Eq)(1)), true)
 * assert.strictEqual(pipe(some(1), elem(N.Eq)(2)), false)
 * assert.strictEqual(pipe(none, elem(N.Eq)(1)), false)
 *
 * @since 2.0.0
 */

exports.toUndefined = toUndefined;

function elem(E) {
  return function (a, ma) {
    if (ma === undefined) {
      var elemE = elem(E);
      return function (ma) {
        return elemE(a, ma);
      };
    }

    return isNone(ma) ? false : E.equals(a, ma.value);
  };
}
/**
 * Returns `true` if the predicate is satisfied by the wrapped value
 *
 * @example
 * import { some, none, exists } from 'fp-ts/Option'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.strictEqual(
 *   pipe(
 *     some(1),
 *     exists(n => n > 0)
 *   ),
 *   true
 * )
 * assert.strictEqual(
 *   pipe(
 *     some(1),
 *     exists(n => n > 1)
 *   ),
 *   false
 * )
 * assert.strictEqual(
 *   pipe(
 *     none,
 *     exists(n => n > 0)
 *   ),
 *   false
 * )
 *
 * @since 2.0.0
 */


var exists = function exists(predicate) {
  return function (ma) {
    return isNone(ma) ? false : predicate(ma.value);
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
var bind = /*#__PURE__*/(0, _Chain.bind)(Chain); // -------------------------------------------------------------------------------------
// pipeable sequence S
// -------------------------------------------------------------------------------------

/**
 * @since 2.8.0
 */

exports.bind = bind;
var apS = /*#__PURE__*/(0, _Apply.apS)(Apply); // -------------------------------------------------------------------------------------
// sequence T
// -------------------------------------------------------------------------------------

/**
 * @since 2.11.0
 */

exports.apS = apS;
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
    var o = f(0, _.head(as));

    if (isNone(o)) {
      return none;
    }

    var out = [o.value];

    for (var i = 1; i < as.length; i++) {
      var _o = f(i, as[i]);

      if (isNone(_o)) {
        return none;
      }

      out.push(_o.value);
    }

    return some(out);
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
 * Use `Refinement` module instead.
 *
 * @since 2.0.0
 * @deprecated
 */

exports.sequenceArray = sequenceArray;

function getRefinement(getOption) {
  return function (a) {
    return isSome(getOption(a));
  };
}
/**
 * Use [`chainNullableK`](#chainnullablek) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */


var mapNullable = chainNullableK;
/**
 * Use small, specific instances instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */

exports.mapNullable = mapNullable;
var option = {
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
  zero: zero,
  alt: _alt,
  extend: _extend,
  compact: compact,
  separate: separate,
  filter: _filter,
  filterMap: _filterMap,
  partition: _partition,
  partitionMap: _partitionMap,
  wither: _wither,
  wilt: _wilt,
  throwError: throwError
};
/**
 * Use [`getApplySemigroup`](./Apply.ts.html#getapplysemigroup) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */

exports.option = option;
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
 * Use
 *
 * ```ts
 * import { first } from 'fp-ts/Semigroup'
 * import { getMonoid } from 'fp-ts/Option'
 *
 * getMonoid(first())
 * ```
 *
 * instead.
 *
 * Monoid returning the left-most non-`None` value
 *
 * | x       | y       | concat(x, y) |
 * | ------- | ------- | ------------ |
 * | none    | none    | none         |
 * | some(a) | none    | some(a)      |
 * | none    | some(b) | some(b)      |
 * | some(a) | some(b) | some(a)      |
 *
 * @example
 * import { getFirstMonoid, some, none } from 'fp-ts/Option'
 *
 * const M = getFirstMonoid<number>()
 * assert.deepStrictEqual(M.concat(none, none), none)
 * assert.deepStrictEqual(M.concat(some(1), none), some(1))
 * assert.deepStrictEqual(M.concat(none, some(2)), some(2))
 * assert.deepStrictEqual(M.concat(some(1), some(2)), some(1))
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */

exports.getApplyMonoid = getApplyMonoid;

var getFirstMonoid = function getFirstMonoid() {
  return getMonoid((0, _Semigroup.first)());
};
/**
 * Use
 *
 * ```ts
 * import { last } from 'fp-ts/Semigroup'
 * import { getMonoid } from 'fp-ts/Option'
 *
 * getMonoid(last())
 * ```
 *
 * instead.
 *
 * Monoid returning the right-most non-`None` value
 *
 * | x       | y       | concat(x, y) |
 * | ------- | ------- | ------------ |
 * | none    | none    | none         |
 * | some(a) | none    | some(a)      |
 * | none    | some(b) | some(b)      |
 * | some(a) | some(b) | some(b)      |
 *
 * @example
 * import { getLastMonoid, some, none } from 'fp-ts/Option'
 *
 * const M = getLastMonoid<number>()
 * assert.deepStrictEqual(M.concat(none, none), none)
 * assert.deepStrictEqual(M.concat(some(1), none), some(1))
 * assert.deepStrictEqual(M.concat(none, some(2)), some(2))
 * assert.deepStrictEqual(M.concat(some(1), some(2)), some(2))
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */


exports.getFirstMonoid = getFirstMonoid;

var getLastMonoid = function getLastMonoid() {
  return getMonoid((0, _Semigroup.last)());
};

exports.getLastMonoid = getLastMonoid;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mcC10cy9PcHRpb24udHMiXSwibmFtZXMiOlsibm9uZSIsIl8iLCJzb21lIiwiZnJvbVByZWRpY2F0ZSIsInByZWRpY2F0ZSIsImEiLCJnZXRMZWZ0IiwibWEiLCJfdGFnIiwibGVmdCIsImdldFJpZ2h0IiwicmlnaHQiLCJfbWFwIiwiZmEiLCJmIiwibWFwIiwiX2FwIiwiZmFiIiwiYXAiLCJfY2hhaW4iLCJjaGFpbiIsIl9yZWR1Y2UiLCJiIiwicmVkdWNlIiwiX2ZvbGRNYXAiLCJNIiwiZm9sZE1hcE0iLCJmb2xkTWFwIiwiX3JlZHVjZVJpZ2h0IiwicmVkdWNlUmlnaHQiLCJfdHJhdmVyc2UiLCJGIiwidHJhdmVyc2VGIiwidHJhdmVyc2UiLCJ0YSIsIl9hbHQiLCJ0aGF0IiwiYWx0IiwiX2ZpbHRlciIsImZpbHRlciIsIl9maWx0ZXJNYXAiLCJmaWx0ZXJNYXAiLCJfZXh0ZW5kIiwid2EiLCJleHRlbmQiLCJfcGFydGl0aW9uIiwicGFydGl0aW9uIiwiX3BhcnRpdGlvbk1hcCIsInBhcnRpdGlvbk1hcCIsIlVSSSIsImdldFNob3ciLCJTIiwic2hvdyIsImlzTm9uZSIsInZhbHVlIiwiZ2V0RXEiLCJFIiwiZXF1YWxzIiwieCIsInkiLCJnZXRPcmQiLCJPIiwiY29tcGFyZSIsImlzU29tZSIsImdldE1vbm9pZCIsImNvbmNhdCIsImVtcHR5IiwiRnVuY3RvciIsIm9mIiwiUG9pbnRlZCIsIkFwcGx5IiwiQXBwbGljYXRpdmUiLCJDaGFpbiIsIk1vbmFkIiwiRm9sZGFibGUiLCJhbHRXIiwiQWx0IiwiemVybyIsIlplcm8iLCJndWFyZCIsIkFsdGVybmF0aXZlIiwiRXh0ZW5kIiwiY29tcGFjdCIsImlkZW50aXR5IiwiZGVmYXVsdFNlcGFyYXRlZCIsInNlcGFyYXRlIiwiQ29tcGFjdGFibGUiLCJGaWx0ZXJhYmxlIiwic2VxdWVuY2UiLCJUcmF2ZXJzYWJsZSIsIl93aXRoZXIiLCJfd2lsdCIsIndpdGhlciIsIl93aXRoZXJGIiwid2lsdCIsIl93aWx0RiIsIldpdGhlcmFibGUiLCJ0aHJvd0Vycm9yIiwiTW9uYWRUaHJvdyIsImZyb21FaXRoZXIiLCJGcm9tRWl0aGVyIiwibWF0Y2hXIiwib25Ob25lIiwib25Tb21lIiwiZm9sZFciLCJtYXRjaCIsImZvbGQiLCJnZXRPckVsc2VXIiwiZ2V0T3JFbHNlIiwiZmxhcCIsImFwRmlyc3QiLCJhcFNlY29uZCIsImZsYXR0ZW4iLCJjaGFpbkZpcnN0IiwiZHVwbGljYXRlIiwiZnJvbUVpdGhlcksiLCJjaGFpbkVpdGhlcksiLCJmcm9tTnVsbGFibGUiLCJ0cnlDYXRjaCIsImUiLCJ0cnlDYXRjaEsiLCJmcm9tTnVsbGFibGVLIiwiY2hhaW5OdWxsYWJsZUsiLCJ0b051bGxhYmxlIiwiY29uc3ROdWxsIiwidG9VbmRlZmluZWQiLCJjb25zdFVuZGVmaW5lZCIsImVsZW0iLCJ1bmRlZmluZWQiLCJlbGVtRSIsImV4aXN0cyIsIkRvIiwiZW1wdHlSZWNvcmQiLCJiaW5kVG8iLCJiaW5kIiwiYXBTIiwiQXBUIiwiZW1wdHlSZWFkb25seUFycmF5IiwidHJhdmVyc2VSZWFkb25seU5vbkVtcHR5QXJyYXlXaXRoSW5kZXgiLCJhcyIsIm8iLCJoZWFkIiwib3V0IiwiaSIsImxlbmd0aCIsInB1c2giLCJ0cmF2ZXJzZVJlYWRvbmx5QXJyYXlXaXRoSW5kZXgiLCJnIiwiaXNOb25FbXB0eSIsInRyYXZlcnNlQXJyYXlXaXRoSW5kZXgiLCJ0cmF2ZXJzZUFycmF5Iiwic2VxdWVuY2VBcnJheSIsImdldFJlZmluZW1lbnQiLCJnZXRPcHRpb24iLCJtYXBOdWxsYWJsZSIsIm9wdGlvbiIsImdldEFwcGx5U2VtaWdyb3VwIiwiZ2V0QXBwbHlNb25vaWQiLCJnZXRGaXJzdE1vbm9pZCIsImdldExhc3RNb25vaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQWdCQTs7QUFDQTs7QUFPQTs7QUFPQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFPQTs7QUFHQTs7QUFDQTs7QUFHQTs7QUFDQTs7Ozs7O0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ08sSUFBTStGLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0I7QUFBQSxTQUFvQy9GLFNBQVMsQ0FBQyxzQkFBRCxDQUE3QztBQUFBLENBQXRCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBgYGB0c1xuICogdHlwZSBPcHRpb248QT4gPSBOb25lIHwgU29tZTxBPlxuICogYGBgXG4gKlxuICogYE9wdGlvbjxBPmAgaXMgYSBjb250YWluZXIgZm9yIGFuIG9wdGlvbmFsIHZhbHVlIG9mIHR5cGUgYEFgLiBJZiB0aGUgdmFsdWUgb2YgdHlwZSBgQWAgaXMgcHJlc2VudCwgdGhlIGBPcHRpb248QT5gIGlzXG4gKiBhbiBpbnN0YW5jZSBvZiBgU29tZTxBPmAsIGNvbnRhaW5pbmcgdGhlIHByZXNlbnQgdmFsdWUgb2YgdHlwZSBgQWAuIElmIHRoZSB2YWx1ZSBpcyBhYnNlbnQsIHRoZSBgT3B0aW9uPEE+YCBpcyBhblxuICogaW5zdGFuY2Ugb2YgYE5vbmVgLlxuICpcbiAqIEFuIG9wdGlvbiBjb3VsZCBiZSBsb29rZWQgYXQgYXMgYSBjb2xsZWN0aW9uIG9yIGZvbGRhYmxlIHN0cnVjdHVyZSB3aXRoIGVpdGhlciBvbmUgb3IgemVybyBlbGVtZW50cy5cbiAqIEFub3RoZXIgd2F5IHRvIGxvb2sgYXQgYE9wdGlvbmAgaXM6IGl0IHJlcHJlc2VudHMgdGhlIGVmZmVjdCBvZiBhIHBvc3NpYmx5IGZhaWxpbmcgY29tcHV0YXRpb24uXG4gKlxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmltcG9ydCB7IEFsdDEgfSBmcm9tICcuL0FsdCdcbmltcG9ydCB7IEFsdGVybmF0aXZlMSB9IGZyb20gJy4vQWx0ZXJuYXRpdmUnXG5pbXBvcnQgeyBBcHBsaWNhdGl2ZSBhcyBBcHBsaWNhdGl2ZUhLVCwgQXBwbGljYXRpdmUxLCBnZXRBcHBsaWNhdGl2ZU1vbm9pZCB9IGZyb20gJy4vQXBwbGljYXRpdmUnXG5pbXBvcnQge1xuICBhcEZpcnN0IGFzIGFwRmlyc3RfLFxuICBBcHBseTEsXG4gIGFwUyBhcyBhcFNfLFxuICBhcFNlY29uZCBhcyBhcFNlY29uZF8sXG4gIGdldEFwcGx5U2VtaWdyb3VwIGFzIGdldEFwcGx5U2VtaWdyb3VwX1xufSBmcm9tICcuL0FwcGx5J1xuaW1wb3J0IHsgYmluZCBhcyBiaW5kXywgQ2hhaW4xLCBjaGFpbkZpcnN0IGFzIGNoYWluRmlyc3RfIH0gZnJvbSAnLi9DaGFpbidcbmltcG9ydCB7IENvbXBhY3RhYmxlMSB9IGZyb20gJy4vQ29tcGFjdGFibGUnXG5pbXBvcnQgeyBFaXRoZXIgfSBmcm9tICcuL0VpdGhlcidcbmltcG9ydCB7IEVxIH0gZnJvbSAnLi9FcSdcbmltcG9ydCB7IEV4dGVuZDEgfSBmcm9tICcuL0V4dGVuZCdcbmltcG9ydCB7IEZpbHRlcmFibGUxIH0gZnJvbSAnLi9GaWx0ZXJhYmxlJ1xuaW1wb3J0IHsgRm9sZGFibGUxIH0gZnJvbSAnLi9Gb2xkYWJsZSdcbmltcG9ydCB7IGNoYWluRWl0aGVySyBhcyBjaGFpbkVpdGhlcktfLCBGcm9tRWl0aGVyMSwgZnJvbUVpdGhlcksgYXMgZnJvbUVpdGhlcktfIH0gZnJvbSAnLi9Gcm9tRWl0aGVyJ1xuaW1wb3J0IHsgY29uc3ROdWxsLCBjb25zdFVuZGVmaW5lZCwgZmxvdywgaWRlbnRpdHksIExhenksIHBpcGUgfSBmcm9tICcuL2Z1bmN0aW9uJ1xuaW1wb3J0IHsgYmluZFRvIGFzIGJpbmRUb18sIGZsYXAgYXMgZmxhcF8sIEZ1bmN0b3IxIH0gZnJvbSAnLi9GdW5jdG9yJ1xuaW1wb3J0IHsgSEtUIH0gZnJvbSAnLi9IS1QnXG5pbXBvcnQgKiBhcyBfIGZyb20gJy4vaW50ZXJuYWwnXG5pbXBvcnQgeyBNb25hZDEgfSBmcm9tICcuL01vbmFkJ1xuaW1wb3J0IHsgTW9uYWRUaHJvdzEgfSBmcm9tICcuL01vbmFkVGhyb3cnXG5pbXBvcnQgeyBNb25vaWQgfSBmcm9tICcuL01vbm9pZCdcbmltcG9ydCB7IE5vbkVtcHR5QXJyYXkgfSBmcm9tICcuL05vbkVtcHR5QXJyYXknXG5pbXBvcnQgeyBPcmQgfSBmcm9tICcuL09yZCdcbmltcG9ydCB7IFBvaW50ZWQxIH0gZnJvbSAnLi9Qb2ludGVkJ1xuaW1wb3J0IHsgbm90LCBQcmVkaWNhdGUgfSBmcm9tICcuL1ByZWRpY2F0ZSdcbmltcG9ydCB7IFJlYWRvbmx5Tm9uRW1wdHlBcnJheSB9IGZyb20gJy4vUmVhZG9ubHlOb25FbXB0eUFycmF5J1xuaW1wb3J0IHsgUmVmaW5lbWVudCB9IGZyb20gJy4vUmVmaW5lbWVudCdcbmltcG9ydCB7IGZpcnN0LCBsYXN0LCBTZW1pZ3JvdXAgfSBmcm9tICcuL1NlbWlncm91cCdcbmltcG9ydCB7IFNlcGFyYXRlZCwgc2VwYXJhdGVkIH0gZnJvbSAnLi9TZXBhcmF0ZWQnXG5pbXBvcnQgeyBTaG93IH0gZnJvbSAnLi9TaG93J1xuaW1wb3J0IHsgUGlwZWFibGVUcmF2ZXJzZTEsIFRyYXZlcnNhYmxlMSB9IGZyb20gJy4vVHJhdmVyc2FibGUnXG5pbXBvcnQgeyBQaXBlYWJsZVdpbHQxLCBQaXBlYWJsZVdpdGhlcjEsIHdpbHREZWZhdWx0LCBXaXRoZXJhYmxlMSwgd2l0aGVyRGVmYXVsdCB9IGZyb20gJy4vV2l0aGVyYWJsZSdcbmltcG9ydCB7IFplcm8xLCBndWFyZCBhcyBndWFyZF8gfSBmcm9tICcuL1plcm8nXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIG1vZGVsXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQGNhdGVnb3J5IG1vZGVsXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOb25lIHtcbiAgcmVhZG9ubHkgX3RhZzogJ05vbmUnXG59XG5cbi8qKlxuICogQGNhdGVnb3J5IG1vZGVsXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTb21lPEE+IHtcbiAgcmVhZG9ubHkgX3RhZzogJ1NvbWUnXG4gIHJlYWRvbmx5IHZhbHVlOiBBXG59XG5cbi8qKlxuICogQGNhdGVnb3J5IG1vZGVsXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IHR5cGUgT3B0aW9uPEE+ID0gTm9uZSB8IFNvbWU8QT5cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gY29uc3RydWN0b3JzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogYE5vbmVgIGRvZXNuJ3QgaGF2ZSBhIGNvbnN0cnVjdG9yLCBpbnN0ZWFkIHlvdSBjYW4gdXNlIGl0IGRpcmVjdGx5IGFzIGEgdmFsdWUuIFJlcHJlc2VudHMgYSBtaXNzaW5nIHZhbHVlLlxuICpcbiAqIEBjYXRlZ29yeSBjb25zdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3Qgbm9uZTogT3B0aW9uPG5ldmVyPiA9IF8ubm9uZVxuXG4vKipcbiAqIENvbnN0cnVjdHMgYSBgU29tZWAuIFJlcHJlc2VudHMgYW4gb3B0aW9uYWwgdmFsdWUgdGhhdCBleGlzdHMuXG4gKlxuICogQGNhdGVnb3J5IGNvbnN0cnVjdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBzb21lOiA8QT4oYTogQSkgPT4gT3B0aW9uPEE+ID0gXy5zb21lXG5cbi8qKlxuICogUmV0dXJucyBhICpzbWFydCBjb25zdHJ1Y3RvciogYmFzZWQgb24gdGhlIGdpdmVuIHByZWRpY2F0ZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgbm9uZSwgc29tZSwgZnJvbVByZWRpY2F0ZSB9IGZyb20gJ2ZwLXRzL09wdGlvbidcbiAqXG4gKiBjb25zdCBnZXRPcHRpb24gPSBmcm9tUHJlZGljYXRlKChuOiBudW1iZXIpID0+IG4gPj0gMClcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKGdldE9wdGlvbigtMSksIG5vbmUpXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKGdldE9wdGlvbigxKSwgc29tZSgxKSlcbiAqXG4gKiBAY2F0ZWdvcnkgY29uc3RydWN0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21QcmVkaWNhdGU8QSwgQiBleHRlbmRzIEE+KHJlZmluZW1lbnQ6IFJlZmluZW1lbnQ8QSwgQj4pOiAoYTogQSkgPT4gT3B0aW9uPEI+XG5leHBvcnQgZnVuY3Rpb24gZnJvbVByZWRpY2F0ZTxBPihwcmVkaWNhdGU6IFByZWRpY2F0ZTxBPik6IDxCIGV4dGVuZHMgQT4oYjogQikgPT4gT3B0aW9uPEI+XG5leHBvcnQgZnVuY3Rpb24gZnJvbVByZWRpY2F0ZTxBPihwcmVkaWNhdGU6IFByZWRpY2F0ZTxBPik6IChhOiBBKSA9PiBPcHRpb248QT5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tUHJlZGljYXRlPEE+KHByZWRpY2F0ZTogUHJlZGljYXRlPEE+KTogKGE6IEEpID0+IE9wdGlvbjxBPiB7XG4gIHJldHVybiAoYSkgPT4gKHByZWRpY2F0ZShhKSA/IHNvbWUoYSkgOiBub25lKVxufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIGBMZWZ0YCB2YWx1ZSBvZiBhbiBgRWl0aGVyYCBpZiBwb3NzaWJsZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgZ2V0TGVmdCwgbm9uZSwgc29tZSB9IGZyb20gJ2ZwLXRzL09wdGlvbidcbiAqIGltcG9ydCB7IHJpZ2h0LCBsZWZ0IH0gZnJvbSAnZnAtdHMvRWl0aGVyJ1xuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoZ2V0TGVmdChyaWdodCgxKSksIG5vbmUpXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKGdldExlZnQobGVmdCgnYScpKSwgc29tZSgnYScpKVxuICpcbiAqIEBjYXRlZ29yeSBjb25zdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgZ2V0TGVmdCA9IDxFLCBBPihtYTogRWl0aGVyPEUsIEE+KTogT3B0aW9uPEU+ID0+IChtYS5fdGFnID09PSAnUmlnaHQnID8gbm9uZSA6IHNvbWUobWEubGVmdCkpXG5cbi8qKlxuICogUmV0dXJucyB0aGUgYFJpZ2h0YCB2YWx1ZSBvZiBhbiBgRWl0aGVyYCBpZiBwb3NzaWJsZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgZ2V0UmlnaHQsIG5vbmUsIHNvbWUgfSBmcm9tICdmcC10cy9PcHRpb24nXG4gKiBpbXBvcnQgeyByaWdodCwgbGVmdCB9IGZyb20gJ2ZwLXRzL0VpdGhlcidcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKGdldFJpZ2h0KHJpZ2h0KDEpKSwgc29tZSgxKSlcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoZ2V0UmlnaHQobGVmdCgnYScpKSwgbm9uZSlcbiAqXG4gKiBAY2F0ZWdvcnkgY29uc3RydWN0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGdldFJpZ2h0ID0gPEUsIEE+KG1hOiBFaXRoZXI8RSwgQT4pOiBPcHRpb248QT4gPT4gKG1hLl90YWcgPT09ICdMZWZ0JyA/IG5vbmUgOiBzb21lKG1hLnJpZ2h0KSlcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gbm9uLXBpcGVhYmxlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5jb25zdCBfbWFwOiBNb25hZDE8VVJJPlsnbWFwJ10gPSAoZmEsIGYpID0+IHBpcGUoZmEsIG1hcChmKSlcbmNvbnN0IF9hcDogTW9uYWQxPFVSST5bJ2FwJ10gPSAoZmFiLCBmYSkgPT4gcGlwZShmYWIsIGFwKGZhKSlcbmNvbnN0IF9jaGFpbjogTW9uYWQxPFVSST5bJ2NoYWluJ10gPSAobWEsIGYpID0+IHBpcGUobWEsIGNoYWluKGYpKVxuY29uc3QgX3JlZHVjZTogRm9sZGFibGUxPFVSST5bJ3JlZHVjZSddID0gKGZhLCBiLCBmKSA9PiBwaXBlKGZhLCByZWR1Y2UoYiwgZikpXG5jb25zdCBfZm9sZE1hcDogRm9sZGFibGUxPFVSST5bJ2ZvbGRNYXAnXSA9IChNKSA9PiB7XG4gIGNvbnN0IGZvbGRNYXBNID0gZm9sZE1hcChNKVxuICByZXR1cm4gKGZhLCBmKSA9PiBwaXBlKGZhLCBmb2xkTWFwTShmKSlcbn1cbmNvbnN0IF9yZWR1Y2VSaWdodDogRm9sZGFibGUxPFVSST5bJ3JlZHVjZVJpZ2h0J10gPSAoZmEsIGIsIGYpID0+IHBpcGUoZmEsIHJlZHVjZVJpZ2h0KGIsIGYpKVxuY29uc3QgX3RyYXZlcnNlOiBUcmF2ZXJzYWJsZTE8VVJJPlsndHJhdmVyc2UnXSA9IDxGPihcbiAgRjogQXBwbGljYXRpdmVIS1Q8Rj5cbik6ICg8QSwgQj4odGE6IE9wdGlvbjxBPiwgZjogKGE6IEEpID0+IEhLVDxGLCBCPikgPT4gSEtUPEYsIE9wdGlvbjxCPj4pID0+IHtcbiAgY29uc3QgdHJhdmVyc2VGID0gdHJhdmVyc2UoRilcbiAgcmV0dXJuICh0YSwgZikgPT4gcGlwZSh0YSwgdHJhdmVyc2VGKGYpKVxufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmNvbnN0IF9hbHQ6IEFsdDE8VVJJPlsnYWx0J10gPSAoZmEsIHRoYXQpID0+IHBpcGUoZmEsIGFsdCh0aGF0KSlcbmNvbnN0IF9maWx0ZXI6IEZpbHRlcmFibGUxPFVSST5bJ2ZpbHRlciddID0gPEE+KGZhOiBPcHRpb248QT4sIHByZWRpY2F0ZTogUHJlZGljYXRlPEE+KSA9PiBwaXBlKGZhLCBmaWx0ZXIocHJlZGljYXRlKSlcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5jb25zdCBfZmlsdGVyTWFwOiBGaWx0ZXJhYmxlMTxVUkk+WydmaWx0ZXJNYXAnXSA9IChmYSwgZikgPT4gcGlwZShmYSwgZmlsdGVyTWFwKGYpKVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmNvbnN0IF9leHRlbmQ6IEV4dGVuZDE8VVJJPlsnZXh0ZW5kJ10gPSAod2EsIGYpID0+IHBpcGUod2EsIGV4dGVuZChmKSlcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5jb25zdCBfcGFydGl0aW9uOiBGaWx0ZXJhYmxlMTxVUkk+WydwYXJ0aXRpb24nXSA9IDxBPihmYTogT3B0aW9uPEE+LCBwcmVkaWNhdGU6IFByZWRpY2F0ZTxBPikgPT5cbiAgcGlwZShmYSwgcGFydGl0aW9uKHByZWRpY2F0ZSkpXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuY29uc3QgX3BhcnRpdGlvbk1hcDogRmlsdGVyYWJsZTE8VVJJPlsncGFydGl0aW9uTWFwJ10gPSAoZmEsIGYpID0+IHBpcGUoZmEsIHBhcnRpdGlvbk1hcChmKSlcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gaW5zdGFuY2VzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBVUkkgPSAnT3B0aW9uJ1xuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgdHlwZSBVUkkgPSB0eXBlb2YgVVJJXG5cbmRlY2xhcmUgbW9kdWxlICcuL0hLVCcge1xuICBpbnRlcmZhY2UgVVJJdG9LaW5kPEE+IHtcbiAgICByZWFkb25seSBbVVJJXTogT3B0aW9uPEE+XG4gIH1cbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGdldFNob3cgPSA8QT4oUzogU2hvdzxBPik6IFNob3c8T3B0aW9uPEE+PiA9PiAoe1xuICBzaG93OiAobWEpID0+IChpc05vbmUobWEpID8gJ25vbmUnIDogYHNvbWUoJHtTLnNob3cobWEudmFsdWUpfSlgKVxufSlcblxuLyoqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgbm9uZSwgc29tZSwgZ2V0RXEgfSBmcm9tICdmcC10cy9PcHRpb24nXG4gKiBpbXBvcnQgKiBhcyBOIGZyb20gJ2ZwLXRzL251bWJlcidcbiAqXG4gKiBjb25zdCBFID0gZ2V0RXEoTi5FcSlcbiAqIGFzc2VydC5zdHJpY3RFcXVhbChFLmVxdWFscyhub25lLCBub25lKSwgdHJ1ZSlcbiAqIGFzc2VydC5zdHJpY3RFcXVhbChFLmVxdWFscyhub25lLCBzb21lKDEpKSwgZmFsc2UpXG4gKiBhc3NlcnQuc3RyaWN0RXF1YWwoRS5lcXVhbHMoc29tZSgxKSwgbm9uZSksIGZhbHNlKVxuICogYXNzZXJ0LnN0cmljdEVxdWFsKEUuZXF1YWxzKHNvbWUoMSksIHNvbWUoMikpLCBmYWxzZSlcbiAqIGFzc2VydC5zdHJpY3RFcXVhbChFLmVxdWFscyhzb21lKDEpLCBzb21lKDEpKSwgdHJ1ZSlcbiAqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGdldEVxID0gPEE+KEU6IEVxPEE+KTogRXE8T3B0aW9uPEE+PiA9PiAoe1xuICBlcXVhbHM6ICh4LCB5KSA9PiB4ID09PSB5IHx8IChpc05vbmUoeCkgPyBpc05vbmUoeSkgOiBpc05vbmUoeSkgPyBmYWxzZSA6IEUuZXF1YWxzKHgudmFsdWUsIHkudmFsdWUpKVxufSlcblxuLyoqXG4gKiBUaGUgYE9yZGAgaW5zdGFuY2UgYWxsb3dzIGBPcHRpb25gIHZhbHVlcyB0byBiZSBjb21wYXJlZCB3aXRoXG4gKiBgY29tcGFyZWAsIHdoZW5ldmVyIHRoZXJlIGlzIGFuIGBPcmRgIGluc3RhbmNlIGZvclxuICogdGhlIHR5cGUgdGhlIGBPcHRpb25gIGNvbnRhaW5zLlxuICpcbiAqIGBOb25lYCBpcyBjb25zaWRlcmVkIHRvIGJlIGxlc3MgdGhhbiBhbnkgYFNvbWVgIHZhbHVlLlxuICpcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgbm9uZSwgc29tZSwgZ2V0T3JkIH0gZnJvbSAnZnAtdHMvT3B0aW9uJ1xuICogaW1wb3J0ICogYXMgTiBmcm9tICdmcC10cy9udW1iZXInXG4gKlxuICogY29uc3QgTyA9IGdldE9yZChOLk9yZClcbiAqIGFzc2VydC5zdHJpY3RFcXVhbChPLmNvbXBhcmUobm9uZSwgbm9uZSksIDApXG4gKiBhc3NlcnQuc3RyaWN0RXF1YWwoTy5jb21wYXJlKG5vbmUsIHNvbWUoMSkpLCAtMSlcbiAqIGFzc2VydC5zdHJpY3RFcXVhbChPLmNvbXBhcmUoc29tZSgxKSwgbm9uZSksIDEpXG4gKiBhc3NlcnQuc3RyaWN0RXF1YWwoTy5jb21wYXJlKHNvbWUoMSksIHNvbWUoMikpLCAtMSlcbiAqIGFzc2VydC5zdHJpY3RFcXVhbChPLmNvbXBhcmUoc29tZSgxKSwgc29tZSgxKSksIDApXG4gKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRPcmQgPSA8QT4oTzogT3JkPEE+KTogT3JkPE9wdGlvbjxBPj4gPT4gKHtcbiAgZXF1YWxzOiBnZXRFcShPKS5lcXVhbHMsXG4gIGNvbXBhcmU6ICh4LCB5KSA9PiAoeCA9PT0geSA/IDAgOiBpc1NvbWUoeCkgPyAoaXNTb21lKHkpID8gTy5jb21wYXJlKHgudmFsdWUsIHkudmFsdWUpIDogMSkgOiAtMSlcbn0pXG5cbi8qKlxuICogTW9ub2lkIHJldHVybmluZyB0aGUgbGVmdC1tb3N0IG5vbi1gTm9uZWAgdmFsdWUuIElmIGJvdGggb3BlcmFuZHMgYXJlIGBTb21lYHMgdGhlbiB0aGUgaW5uZXIgdmFsdWVzIGFyZVxuICogY29uY2F0ZW5hdGVkIHVzaW5nIHRoZSBwcm92aWRlZCBgU2VtaWdyb3VwYFxuICpcbiAqIHwgeCAgICAgICB8IHkgICAgICAgfCBjb25jYXQoeCwgeSkgICAgICAgfFxuICogfCAtLS0tLS0tIHwgLS0tLS0tLSB8IC0tLS0tLS0tLS0tLS0tLS0tLSB8XG4gKiB8IG5vbmUgICAgfCBub25lICAgIHwgbm9uZSAgICAgICAgICAgICAgIHxcbiAqIHwgc29tZShhKSB8IG5vbmUgICAgfCBzb21lKGEpICAgICAgICAgICAgfFxuICogfCBub25lICAgIHwgc29tZShiKSB8IHNvbWUoYikgICAgICAgICAgICB8XG4gKiB8IHNvbWUoYSkgfCBzb21lKGIpIHwgc29tZShjb25jYXQoYSwgYikpIHxcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgZ2V0TW9ub2lkLCBzb21lLCBub25lIH0gZnJvbSAnZnAtdHMvT3B0aW9uJ1xuICogaW1wb3J0IHsgU2VtaWdyb3VwU3VtIH0gZnJvbSAnZnAtdHMvbnVtYmVyJ1xuICpcbiAqIGNvbnN0IE0gPSBnZXRNb25vaWQoU2VtaWdyb3VwU3VtKVxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChNLmNvbmNhdChub25lLCBub25lKSwgbm9uZSlcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoTS5jb25jYXQoc29tZSgxKSwgbm9uZSksIHNvbWUoMSkpXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKE0uY29uY2F0KG5vbmUsIHNvbWUoMSkpLCBzb21lKDEpKVxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChNLmNvbmNhdChzb21lKDEpLCBzb21lKDIpKSwgc29tZSgzKSlcbiAqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGdldE1vbm9pZCA9IDxBPihTOiBTZW1pZ3JvdXA8QT4pOiBNb25vaWQ8T3B0aW9uPEE+PiA9PiAoe1xuICBjb25jYXQ6ICh4LCB5KSA9PiAoaXNOb25lKHgpID8geSA6IGlzTm9uZSh5KSA/IHggOiBzb21lKFMuY29uY2F0KHgudmFsdWUsIHkudmFsdWUpKSksXG4gIGVtcHR5OiBub25lXG59KVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZSBvcGVyYXRpb25zXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IG1hcDogPEEsIEI+KGY6IChhOiBBKSA9PiBCKSA9PiAoZmE6IE9wdGlvbjxBPikgPT4gT3B0aW9uPEI+ID0gKGYpID0+IChmYSkgPT5cbiAgaXNOb25lKGZhKSA/IG5vbmUgOiBzb21lKGYoZmEudmFsdWUpKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjcuMFxuICovXG5leHBvcnQgY29uc3QgRnVuY3RvcjogRnVuY3RvcjE8VVJJPiA9IHtcbiAgVVJJLFxuICBtYXA6IF9tYXBcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2Ugb3BlcmF0aW9uc1xuICogQHNpbmNlIDIuNy4wXG4gKi9cbmV4cG9ydCBjb25zdCBvZjogUG9pbnRlZDE8VVJJPlsnb2YnXSA9IHNvbWVcblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBQb2ludGVkOiBQb2ludGVkMTxVUkk+ID0ge1xuICBVUkksXG4gIG9mXG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlIG9wZXJhdGlvbnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgYXA6IDxBPihmYTogT3B0aW9uPEE+KSA9PiA8Qj4oZmFiOiBPcHRpb248KGE6IEEpID0+IEI+KSA9PiBPcHRpb248Qj4gPSAoZmEpID0+IChmYWIpID0+XG4gIGlzTm9uZShmYWIpID8gbm9uZSA6IGlzTm9uZShmYSkgPyBub25lIDogc29tZShmYWIudmFsdWUoZmEudmFsdWUpKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IEFwcGx5OiBBcHBseTE8VVJJPiA9IHtcbiAgVVJJLFxuICBtYXA6IF9tYXAsXG4gIGFwOiBfYXBcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi43LjBcbiAqL1xuZXhwb3J0IGNvbnN0IEFwcGxpY2F0aXZlOiBBcHBsaWNhdGl2ZTE8VVJJPiA9IHtcbiAgVVJJLFxuICBtYXA6IF9tYXAsXG4gIGFwOiBfYXAsXG4gIG9mXG59XG5cbi8qKlxuICogQ29tcG9zZXMgY29tcHV0YXRpb25zIGluIHNlcXVlbmNlLCB1c2luZyB0aGUgcmV0dXJuIHZhbHVlIG9mIG9uZSBjb21wdXRhdGlvbiB0byBkZXRlcm1pbmUgdGhlIG5leHQgY29tcHV0YXRpb24uXG4gKlxuICogQGNhdGVnb3J5IGluc3RhbmNlIG9wZXJhdGlvbnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgY2hhaW46IDxBLCBCPihmOiAoYTogQSkgPT4gT3B0aW9uPEI+KSA9PiAobWE6IE9wdGlvbjxBPikgPT4gT3B0aW9uPEI+ID0gKGYpID0+IChtYSkgPT5cbiAgaXNOb25lKG1hKSA/IG5vbmUgOiBmKG1hLnZhbHVlKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IENoYWluOiBDaGFpbjE8VVJJPiA9IHtcbiAgVVJJLFxuICBtYXA6IF9tYXAsXG4gIGFwOiBfYXAsXG4gIGNoYWluOiBfY2hhaW5cbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi43LjBcbiAqL1xuZXhwb3J0IGNvbnN0IE1vbmFkOiBNb25hZDE8VVJJPiA9IHtcbiAgVVJJLFxuICBtYXA6IF9tYXAsXG4gIGFwOiBfYXAsXG4gIG9mLFxuICBjaGFpbjogX2NoYWluXG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlIG9wZXJhdGlvbnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgcmVkdWNlOiA8QSwgQj4oYjogQiwgZjogKGI6IEIsIGE6IEEpID0+IEIpID0+IChmYTogT3B0aW9uPEE+KSA9PiBCID0gKGIsIGYpID0+IChmYSkgPT5cbiAgaXNOb25lKGZhKSA/IGIgOiBmKGIsIGZhLnZhbHVlKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZSBvcGVyYXRpb25zXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZvbGRNYXA6IDxNPihNOiBNb25vaWQ8TT4pID0+IDxBPihmOiAoYTogQSkgPT4gTSkgPT4gKGZhOiBPcHRpb248QT4pID0+IE0gPSAoTSkgPT4gKGYpID0+IChmYSkgPT5cbiAgaXNOb25lKGZhKSA/IE0uZW1wdHkgOiBmKGZhLnZhbHVlKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZSBvcGVyYXRpb25zXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHJlZHVjZVJpZ2h0OiA8QSwgQj4oYjogQiwgZjogKGE6IEEsIGI6IEIpID0+IEIpID0+IChmYTogT3B0aW9uPEE+KSA9PiBCID0gKGIsIGYpID0+IChmYSkgPT5cbiAgaXNOb25lKGZhKSA/IGIgOiBmKGZhLnZhbHVlLCBiKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjcuMFxuICovXG5leHBvcnQgY29uc3QgRm9sZGFibGU6IEZvbGRhYmxlMTxVUkk+ID0ge1xuICBVUkksXG4gIHJlZHVjZTogX3JlZHVjZSxcbiAgZm9sZE1hcDogX2ZvbGRNYXAsXG4gIHJlZHVjZVJpZ2h0OiBfcmVkdWNlUmlnaHRcbn1cblxuLyoqXG4gKiBMZXNzIHN0cmljdCB2ZXJzaW9uIG9mIFtgYWx0YF0oI2FsdCkuXG4gKlxuICogQGNhdGVnb3J5IGluc3RhbmNlIG9wZXJhdGlvbnNcbiAqIEBzaW5jZSAyLjkuMFxuICovXG5leHBvcnQgY29uc3QgYWx0VzogPEI+KHRoYXQ6IExhenk8T3B0aW9uPEI+PikgPT4gPEE+KGZhOiBPcHRpb248QT4pID0+IE9wdGlvbjxBIHwgQj4gPSAodGhhdCkgPT4gKGZhKSA9PlxuICBpc05vbmUoZmEpID8gdGhhdCgpIDogZmFcblxuLyoqXG4gKiBJZGVudGlmaWVzIGFuIGFzc29jaWF0aXZlIG9wZXJhdGlvbiBvbiBhIHR5cGUgY29uc3RydWN0b3IuIEl0IGlzIHNpbWlsYXIgdG8gYFNlbWlncm91cGAsIGV4Y2VwdCB0aGF0IGl0IGFwcGxpZXMgdG9cbiAqIHR5cGVzIG9mIGtpbmQgYCogLT4gKmAuXG4gKlxuICogSW4gY2FzZSBvZiBgT3B0aW9uYCByZXR1cm5zIHRoZSBsZWZ0LW1vc3Qgbm9uLWBOb25lYCB2YWx1ZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0ICogYXMgTyBmcm9tICdmcC10cy9PcHRpb24nXG4gKiBpbXBvcnQgeyBwaXBlIH0gZnJvbSAnZnAtdHMvZnVuY3Rpb24nXG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAqICAgcGlwZShcbiAqICAgICBPLnNvbWUoJ2EnKSxcbiAqICAgICBPLmFsdCgoKSA9PiBPLnNvbWUoJ2InKSlcbiAqICAgKSxcbiAqICAgTy5zb21lKCdhJylcbiAqIClcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXG4gKiAgIHBpcGUoXG4gKiAgICAgTy5ub25lLFxuICogICAgIE8uYWx0KCgpID0+IE8uc29tZSgnYicpKVxuICogICApLFxuICogICBPLnNvbWUoJ2InKVxuICogKVxuICpcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZSBvcGVyYXRpb25zXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGFsdDogPEE+KHRoYXQ6IExhenk8T3B0aW9uPEE+PikgPT4gKGZhOiBPcHRpb248QT4pID0+IE9wdGlvbjxBPiA9IGFsdFdcblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi43LjBcbiAqL1xuZXhwb3J0IGNvbnN0IEFsdDogQWx0MTxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgYWx0OiBfYWx0XG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlIG9wZXJhdGlvbnNcbiAqIEBzaW5jZSAyLjcuMFxuICovXG5leHBvcnQgY29uc3QgemVybzogWmVybzE8VVJJPlsnemVybyddID0gKCkgPT4gbm9uZVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IFplcm86IFplcm8xPFVSST4gPSB7XG4gIFVSSSxcbiAgemVyb1xufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb25zdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGd1YXJkID1cbiAgLyojX19QVVJFX18qL1xuICBndWFyZF8oWmVybywgUG9pbnRlZClcblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi43LjBcbiAqL1xuZXhwb3J0IGNvbnN0IEFsdGVybmF0aXZlOiBBbHRlcm5hdGl2ZTE8VVJJPiA9IHtcbiAgVVJJLFxuICBtYXA6IF9tYXAsXG4gIGFwOiBfYXAsXG4gIG9mLFxuICBhbHQ6IF9hbHQsXG4gIHplcm9cbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2Ugb3BlcmF0aW9uc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBleHRlbmQ6IDxBLCBCPihmOiAod2E6IE9wdGlvbjxBPikgPT4gQikgPT4gKHdhOiBPcHRpb248QT4pID0+IE9wdGlvbjxCPiA9IChmKSA9PiAod2EpID0+XG4gIGlzTm9uZSh3YSkgPyBub25lIDogc29tZShmKHdhKSlcblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi43LjBcbiAqL1xuZXhwb3J0IGNvbnN0IEV4dGVuZDogRXh0ZW5kMTxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgZXh0ZW5kOiBfZXh0ZW5kXG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlIG9wZXJhdGlvbnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgY29tcGFjdDogPEE+KGZhOiBPcHRpb248T3B0aW9uPEE+PikgPT4gT3B0aW9uPEE+ID1cbiAgLyojX19QVVJFX18qL1xuICBjaGFpbihpZGVudGl0eSlcblxuY29uc3QgZGVmYXVsdFNlcGFyYXRlZCA9XG4gIC8qI19fUFVSRV9fKi9cbiAgc2VwYXJhdGVkKG5vbmUsIG5vbmUpXG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlIG9wZXJhdGlvbnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3Qgc2VwYXJhdGU6IDxBLCBCPihtYTogT3B0aW9uPEVpdGhlcjxBLCBCPj4pID0+IFNlcGFyYXRlZDxPcHRpb248QT4sIE9wdGlvbjxCPj4gPSAobWEpID0+XG4gIGlzTm9uZShtYSkgPyBkZWZhdWx0U2VwYXJhdGVkIDogc2VwYXJhdGVkKGdldExlZnQobWEudmFsdWUpLCBnZXRSaWdodChtYS52YWx1ZSkpXG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuNy4wXG4gKi9cbmV4cG9ydCBjb25zdCBDb21wYWN0YWJsZTogQ29tcGFjdGFibGUxPFVSST4gPSB7XG4gIFVSSSxcbiAgY29tcGFjdCxcbiAgc2VwYXJhdGVcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2Ugb3BlcmF0aW9uc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBmaWx0ZXI6IHtcbiAgPEEsIEIgZXh0ZW5kcyBBPihyZWZpbmVtZW50OiBSZWZpbmVtZW50PEEsIEI+KTogKGZhOiBPcHRpb248QT4pID0+IE9wdGlvbjxCPlxuICA8QT4ocHJlZGljYXRlOiBQcmVkaWNhdGU8QT4pOiA8QiBleHRlbmRzIEE+KGZiOiBPcHRpb248Qj4pID0+IE9wdGlvbjxCPlxuICA8QT4ocHJlZGljYXRlOiBQcmVkaWNhdGU8QT4pOiAoZmE6IE9wdGlvbjxBPikgPT4gT3B0aW9uPEE+XG59ID0gPEE+KHByZWRpY2F0ZTogUHJlZGljYXRlPEE+KSA9PiAoZmE6IE9wdGlvbjxBPikgPT4gKGlzTm9uZShmYSkgPyBub25lIDogcHJlZGljYXRlKGZhLnZhbHVlKSA/IGZhIDogbm9uZSlcblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2Ugb3BlcmF0aW9uc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBmaWx0ZXJNYXA6IDxBLCBCPihmOiAoYTogQSkgPT4gT3B0aW9uPEI+KSA9PiAoZmE6IE9wdGlvbjxBPikgPT4gT3B0aW9uPEI+ID0gKGYpID0+IChmYSkgPT5cbiAgaXNOb25lKGZhKSA/IG5vbmUgOiBmKGZhLnZhbHVlKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZSBvcGVyYXRpb25zXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHBhcnRpdGlvbjoge1xuICA8QSwgQiBleHRlbmRzIEE+KHJlZmluZW1lbnQ6IFJlZmluZW1lbnQ8QSwgQj4pOiAoZmE6IE9wdGlvbjxBPikgPT4gU2VwYXJhdGVkPE9wdGlvbjxBPiwgT3B0aW9uPEI+PlxuICA8QT4ocHJlZGljYXRlOiBQcmVkaWNhdGU8QT4pOiA8QiBleHRlbmRzIEE+KGZiOiBPcHRpb248Qj4pID0+IFNlcGFyYXRlZDxPcHRpb248Qj4sIE9wdGlvbjxCPj5cbiAgPEE+KHByZWRpY2F0ZTogUHJlZGljYXRlPEE+KTogKGZhOiBPcHRpb248QT4pID0+IFNlcGFyYXRlZDxPcHRpb248QT4sIE9wdGlvbjxBPj5cbn0gPSA8QT4ocHJlZGljYXRlOiBQcmVkaWNhdGU8QT4pID0+IChmYTogT3B0aW9uPEE+KSA9PiBzZXBhcmF0ZWQoX2ZpbHRlcihmYSwgbm90KHByZWRpY2F0ZSkpLCBfZmlsdGVyKGZhLCBwcmVkaWNhdGUpKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZSBvcGVyYXRpb25zXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHBhcnRpdGlvbk1hcDogPEEsIEIsIEM+KFxuICBmOiAoYTogQSkgPT4gRWl0aGVyPEIsIEM+XG4pID0+IChmYTogT3B0aW9uPEE+KSA9PiBTZXBhcmF0ZWQ8T3B0aW9uPEI+LCBPcHRpb248Qz4+ID0gKGYpID0+IGZsb3cobWFwKGYpLCBzZXBhcmF0ZSlcblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi43LjBcbiAqL1xuZXhwb3J0IGNvbnN0IEZpbHRlcmFibGU6IEZpbHRlcmFibGUxPFVSST4gPSB7XG4gIFVSSSxcbiAgbWFwOiBfbWFwLFxuICBjb21wYWN0LFxuICBzZXBhcmF0ZSxcbiAgZmlsdGVyOiBfZmlsdGVyLFxuICBmaWx0ZXJNYXA6IF9maWx0ZXJNYXAsXG4gIHBhcnRpdGlvbjogX3BhcnRpdGlvbixcbiAgcGFydGl0aW9uTWFwOiBfcGFydGl0aW9uTWFwXG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlIG9wZXJhdGlvbnNcbiAqIEBzaW5jZSAyLjYuM1xuICovXG5leHBvcnQgY29uc3QgdHJhdmVyc2U6IFBpcGVhYmxlVHJhdmVyc2UxPFVSST4gPSA8Rj4oRjogQXBwbGljYXRpdmVIS1Q8Rj4pID0+IDxBLCBCPihmOiAoYTogQSkgPT4gSEtUPEYsIEI+KSA9PiAoXG4gIHRhOiBPcHRpb248QT5cbik6IEhLVDxGLCBPcHRpb248Qj4+ID0+IChpc05vbmUodGEpID8gRi5vZihub25lKSA6IEYubWFwKGYodGEudmFsdWUpLCBzb21lKSlcblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2Ugb3BlcmF0aW9uc1xuICogQHNpbmNlIDIuNi4zXG4gKi9cbmV4cG9ydCBjb25zdCBzZXF1ZW5jZTogVHJhdmVyc2FibGUxPFVSST5bJ3NlcXVlbmNlJ10gPSA8Rj4oRjogQXBwbGljYXRpdmVIS1Q8Rj4pID0+IDxBPihcbiAgdGE6IE9wdGlvbjxIS1Q8RiwgQT4+XG4pOiBIS1Q8RiwgT3B0aW9uPEE+PiA9PiAoaXNOb25lKHRhKSA/IEYub2Yobm9uZSkgOiBGLm1hcCh0YS52YWx1ZSwgc29tZSkpXG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuNy4wXG4gKi9cbmV4cG9ydCBjb25zdCBUcmF2ZXJzYWJsZTogVHJhdmVyc2FibGUxPFVSST4gPSB7XG4gIFVSSSxcbiAgbWFwOiBfbWFwLFxuICByZWR1Y2U6IF9yZWR1Y2UsXG4gIGZvbGRNYXA6IF9mb2xkTWFwLFxuICByZWR1Y2VSaWdodDogX3JlZHVjZVJpZ2h0LFxuICB0cmF2ZXJzZTogX3RyYXZlcnNlLFxuICBzZXF1ZW5jZVxufVxuXG5jb25zdCBfd2l0aGVyOiBXaXRoZXJhYmxlMTxVUkk+Wyd3aXRoZXInXSA9XG4gIC8qI19fUFVSRV9fKi9cbiAgd2l0aGVyRGVmYXVsdChUcmF2ZXJzYWJsZSwgQ29tcGFjdGFibGUpXG5cbmNvbnN0IF93aWx0OiBXaXRoZXJhYmxlMTxVUkk+Wyd3aWx0J10gPVxuICAvKiNfX1BVUkVfXyovXG4gIHdpbHREZWZhdWx0KFRyYXZlcnNhYmxlLCBDb21wYWN0YWJsZSlcblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2Ugb3BlcmF0aW9uc1xuICogQHNpbmNlIDIuNi41XG4gKi9cbmV4cG9ydCBjb25zdCB3aXRoZXI6IFBpcGVhYmxlV2l0aGVyMTxVUkk+ID0gPEY+KFxuICBGOiBBcHBsaWNhdGl2ZUhLVDxGPlxuKTogKDxBLCBCPihmOiAoYTogQSkgPT4gSEtUPEYsIE9wdGlvbjxCPj4pID0+IChmYTogT3B0aW9uPEE+KSA9PiBIS1Q8RiwgT3B0aW9uPEI+PikgPT4ge1xuICBjb25zdCBfd2l0aGVyRiA9IF93aXRoZXIoRilcbiAgcmV0dXJuIChmKSA9PiAoZmEpID0+IF93aXRoZXJGKGZhLCBmKVxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZSBvcGVyYXRpb25zXG4gKiBAc2luY2UgMi42LjVcbiAqL1xuZXhwb3J0IGNvbnN0IHdpbHQ6IFBpcGVhYmxlV2lsdDE8VVJJPiA9IDxGPihcbiAgRjogQXBwbGljYXRpdmVIS1Q8Rj5cbik6ICg8QSwgQiwgQz4oZjogKGE6IEEpID0+IEhLVDxGLCBFaXRoZXI8QiwgQz4+KSA9PiAoZmE6IE9wdGlvbjxBPikgPT4gSEtUPEYsIFNlcGFyYXRlZDxPcHRpb248Qj4sIE9wdGlvbjxDPj4+KSA9PiB7XG4gIGNvbnN0IF93aWx0RiA9IF93aWx0KEYpXG4gIHJldHVybiAoZikgPT4gKGZhKSA9PiBfd2lsdEYoZmEsIGYpXG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuNy4wXG4gKi9cbmV4cG9ydCBjb25zdCBXaXRoZXJhYmxlOiBXaXRoZXJhYmxlMTxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgcmVkdWNlOiBfcmVkdWNlLFxuICBmb2xkTWFwOiBfZm9sZE1hcCxcbiAgcmVkdWNlUmlnaHQ6IF9yZWR1Y2VSaWdodCxcbiAgdHJhdmVyc2U6IF90cmF2ZXJzZSxcbiAgc2VxdWVuY2UsXG4gIGNvbXBhY3QsXG4gIHNlcGFyYXRlLFxuICBmaWx0ZXI6IF9maWx0ZXIsXG4gIGZpbHRlck1hcDogX2ZpbHRlck1hcCxcbiAgcGFydGl0aW9uOiBfcGFydGl0aW9uLFxuICBwYXJ0aXRpb25NYXA6IF9wYXJ0aXRpb25NYXAsXG4gIHdpdGhlcjogX3dpdGhlcixcbiAgd2lsdDogX3dpbHRcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2Ugb3BlcmF0aW9uc1xuICogQHNpbmNlIDIuNy4wXG4gKi9cbmV4cG9ydCBjb25zdCB0aHJvd0Vycm9yOiBNb25hZFRocm93MTxVUkk+Wyd0aHJvd0Vycm9yJ10gPSAoKSA9PiBub25lXG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuNy4wXG4gKi9cbmV4cG9ydCBjb25zdCBNb25hZFRocm93OiBNb25hZFRocm93MTxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgYXA6IF9hcCxcbiAgb2YsXG4gIGNoYWluOiBfY2hhaW4sXG4gIHRocm93RXJyb3Jcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm1zIGFuIGBFaXRoZXJgIHRvIGFuIGBPcHRpb25gIGRpc2NhcmRpbmcgdGhlIGVycm9yLlxuICpcbiAqIEFsaWFzIG9mIFtnZXRSaWdodF0oI2dldHJpZ2h0KVxuICpcbiAqIEBjYXRlZ29yeSBuYXR1cmFsIHRyYW5zZm9ybWF0aW9uc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBmcm9tRWl0aGVyOiBGcm9tRWl0aGVyMTxVUkk+Wydmcm9tRWl0aGVyJ10gPSBnZXRSaWdodFxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IEZyb21FaXRoZXI6IEZyb21FaXRoZXIxPFVSST4gPSB7XG4gIFVSSSxcbiAgZnJvbUVpdGhlclxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyByZWZpbmVtZW50c1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIFJldHVybnMgYHRydWVgIGlmIHRoZSBvcHRpb24gaXMgYW4gaW5zdGFuY2Ugb2YgYFNvbWVgLCBgZmFsc2VgIG90aGVyd2lzZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgc29tZSwgbm9uZSwgaXNTb21lIH0gZnJvbSAnZnAtdHMvT3B0aW9uJ1xuICpcbiAqIGFzc2VydC5zdHJpY3RFcXVhbChpc1NvbWUoc29tZSgxKSksIHRydWUpXG4gKiBhc3NlcnQuc3RyaWN0RXF1YWwoaXNTb21lKG5vbmUpLCBmYWxzZSlcbiAqXG4gKiBAY2F0ZWdvcnkgcmVmaW5lbWVudHNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgaXNTb21lOiA8QT4oZmE6IE9wdGlvbjxBPikgPT4gZmEgaXMgU29tZTxBPiA9IF8uaXNTb21lXG5cbi8qKlxuICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG9wdGlvbiBpcyBgTm9uZWAsIGBmYWxzZWAgb3RoZXJ3aXNlLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBzb21lLCBub25lLCBpc05vbmUgfSBmcm9tICdmcC10cy9PcHRpb24nXG4gKlxuICogYXNzZXJ0LnN0cmljdEVxdWFsKGlzTm9uZShzb21lKDEpKSwgZmFsc2UpXG4gKiBhc3NlcnQuc3RyaWN0RXF1YWwoaXNOb25lKG5vbmUpLCB0cnVlKVxuICpcbiAqIEBjYXRlZ29yeSByZWZpbmVtZW50c1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBpc05vbmUgPSAoZmE6IE9wdGlvbjx1bmtub3duPik6IGZhIGlzIE5vbmUgPT4gZmEuX3RhZyA9PT0gJ05vbmUnXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGRlc3RydWN0b3JzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogTGVzcyBzdHJpY3QgdmVyc2lvbiBvZiBbYG1hdGNoYF0oI21hdGNoKS5cbiAqXG4gKiBAY2F0ZWdvcnkgZGVzdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IG1hdGNoVyA9IDxCLCBBLCBDPihvbk5vbmU6IExhenk8Qj4sIG9uU29tZTogKGE6IEEpID0+IEMpID0+IChtYTogT3B0aW9uPEE+KTogQiB8IEMgPT5cbiAgaXNOb25lKG1hKSA/IG9uTm9uZSgpIDogb25Tb21lKG1hLnZhbHVlKVxuXG4vKipcbiAqIEFsaWFzIG9mIFtgbWF0Y2hXYF0oI21hdGNodykuXG4gKlxuICogQGNhdGVnb3J5IGRlc3RydWN0b3JzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBmb2xkVyA9IG1hdGNoV1xuXG4vKipcbiAqIFRha2VzIGEgKGxhenkpIGRlZmF1bHQgdmFsdWUsIGEgZnVuY3Rpb24sIGFuZCBhbiBgT3B0aW9uYCB2YWx1ZSwgaWYgdGhlIGBPcHRpb25gIHZhbHVlIGlzIGBOb25lYCB0aGUgZGVmYXVsdCB2YWx1ZSBpc1xuICogcmV0dXJuZWQsIG90aGVyd2lzZSB0aGUgZnVuY3Rpb24gaXMgYXBwbGllZCB0byB0aGUgdmFsdWUgaW5zaWRlIHRoZSBgU29tZWAgYW5kIHRoZSByZXN1bHQgaXMgcmV0dXJuZWQuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IHNvbWUsIG5vbmUsIG1hdGNoIH0gZnJvbSAnZnAtdHMvT3B0aW9uJ1xuICogaW1wb3J0IHsgcGlwZSB9IGZyb20gJ2ZwLXRzL2Z1bmN0aW9uJ1xuICpcbiAqIGFzc2VydC5zdHJpY3RFcXVhbChcbiAqICAgcGlwZShcbiAqICAgICBzb21lKDEpLFxuICogICAgIG1hdGNoKCgpID0+ICdhIG5vbmUnLCBhID0+IGBhIHNvbWUgY29udGFpbmluZyAke2F9YClcbiAqICAgKSxcbiAqICAgJ2Egc29tZSBjb250YWluaW5nIDEnXG4gKiApXG4gKlxuICogYXNzZXJ0LnN0cmljdEVxdWFsKFxuICogICBwaXBlKFxuICogICAgIG5vbmUsXG4gKiAgICAgbWF0Y2goKCkgPT4gJ2Egbm9uZScsIGEgPT4gYGEgc29tZSBjb250YWluaW5nICR7YX1gKVxuICogICApLFxuICogICAnYSBub25lJ1xuICogKVxuICpcbiAqIEBjYXRlZ29yeSBkZXN0cnVjdG9yc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgbWF0Y2g6IDxBLCBCPihvbk5vbmU6IExhenk8Qj4sIG9uU29tZTogKGE6IEEpID0+IEIpID0+IChtYTogT3B0aW9uPEE+KSA9PiBCID0gbWF0Y2hXXG5cbi8qKlxuICogQWxpYXMgb2YgW2BtYXRjaGBdKCNtYXRjaCkuXG4gKlxuICogQGNhdGVnb3J5IGRlc3RydWN0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZvbGQgPSBtYXRjaFxuXG4vKipcbiAqIExlc3Mgc3RyaWN0IHZlcnNpb24gb2YgW2BnZXRPckVsc2VgXSgjZ2V0b3JlbHNlKS5cbiAqXG4gKiBAY2F0ZWdvcnkgZGVzdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjYuMFxuICovXG5leHBvcnQgY29uc3QgZ2V0T3JFbHNlVyA9IDxCPihvbk5vbmU6IExhenk8Qj4pID0+IDxBPihtYTogT3B0aW9uPEE+KTogQSB8IEIgPT4gKGlzTm9uZShtYSkgPyBvbk5vbmUoKSA6IG1hLnZhbHVlKVxuXG4vKipcbiAqIEV4dHJhY3RzIHRoZSB2YWx1ZSBvdXQgb2YgdGhlIHN0cnVjdHVyZSwgaWYgaXQgZXhpc3RzLiBPdGhlcndpc2UgcmV0dXJucyB0aGUgZ2l2ZW4gZGVmYXVsdCB2YWx1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBzb21lLCBub25lLCBnZXRPckVsc2UgfSBmcm9tICdmcC10cy9PcHRpb24nXG4gKiBpbXBvcnQgeyBwaXBlIH0gZnJvbSAnZnAtdHMvZnVuY3Rpb24nXG4gKlxuICogYXNzZXJ0LnN0cmljdEVxdWFsKFxuICogICBwaXBlKFxuICogICAgIHNvbWUoMSksXG4gKiAgICAgZ2V0T3JFbHNlKCgpID0+IDApXG4gKiAgICksXG4gKiAgIDFcbiAqIClcbiAqIGFzc2VydC5zdHJpY3RFcXVhbChcbiAqICAgcGlwZShcbiAqICAgICBub25lLFxuICogICAgIGdldE9yRWxzZSgoKSA9PiAwKVxuICogICApLFxuICogICAwXG4gKiApXG4gKlxuICogQGNhdGVnb3J5IGRlc3RydWN0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGdldE9yRWxzZTogPEE+KG9uTm9uZTogTGF6eTxBPikgPT4gKG1hOiBPcHRpb248QT4pID0+IEEgPSBnZXRPckVsc2VXXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGNvbWJpbmF0b3JzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogRGVyaXZhYmxlIGZyb20gYEZ1bmN0b3JgLlxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgZmxhcCA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZmxhcF8oRnVuY3RvcilcblxuLyoqXG4gKiBDb21iaW5lIHR3byBlZmZlY3RmdWwgYWN0aW9ucywga2VlcGluZyBvbmx5IHRoZSByZXN1bHQgb2YgdGhlIGZpcnN0LlxuICpcbiAqIERlcml2YWJsZSBmcm9tIGBBcHBseWAuXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGFwRmlyc3QgPVxuICAvKiNfX1BVUkVfXyovXG4gIGFwRmlyc3RfKEFwcGx5KVxuXG4vKipcbiAqIENvbWJpbmUgdHdvIGVmZmVjdGZ1bCBhY3Rpb25zLCBrZWVwaW5nIG9ubHkgdGhlIHJlc3VsdCBvZiB0aGUgc2Vjb25kLlxuICpcbiAqIERlcml2YWJsZSBmcm9tIGBBcHBseWAuXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGFwU2Vjb25kID1cbiAgLyojX19QVVJFX18qL1xuICBhcFNlY29uZF8oQXBwbHkpXG5cbi8qKlxuICogRGVyaXZhYmxlIGZyb20gYENoYWluYC5cbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgZmxhdHRlbjogPEE+KG1tYTogT3B0aW9uPE9wdGlvbjxBPj4pID0+IE9wdGlvbjxBPiA9IGNvbXBhY3RcblxuLyoqXG4gKiBDb21wb3NlcyBjb21wdXRhdGlvbnMgaW4gc2VxdWVuY2UsIHVzaW5nIHRoZSByZXR1cm4gdmFsdWUgb2Ygb25lIGNvbXB1dGF0aW9uIHRvIGRldGVybWluZSB0aGUgbmV4dCBjb21wdXRhdGlvbiBhbmRcbiAqIGtlZXBpbmcgb25seSB0aGUgcmVzdWx0IG9mIHRoZSBmaXJzdC5cbiAqXG4gKiBEZXJpdmFibGUgZnJvbSBgQ2hhaW5gLlxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBjaGFpbkZpcnN0ID1cbiAgLyojX19QVVJFX18qL1xuICBjaGFpbkZpcnN0XyhDaGFpbilcblxuLyoqXG4gKiBEZXJpdmFibGUgZnJvbSBgRXh0ZW5kYC5cbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgZHVwbGljYXRlOiA8QT4obWE6IE9wdGlvbjxBPikgPT4gT3B0aW9uPE9wdGlvbjxBPj4gPVxuICAvKiNfX1BVUkVfXyovXG4gIGV4dGVuZChpZGVudGl0eSlcblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZyb21FaXRoZXJLID1cbiAgLyojX19QVVJFX18qL1xuICBmcm9tRWl0aGVyS18oRnJvbUVpdGhlcilcblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGNoYWluRWl0aGVySyA9XG4gIC8qI19fUFVSRV9fKi9cbiAgY2hhaW5FaXRoZXJLXyhGcm9tRWl0aGVyLCBDaGFpbilcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gaW50ZXJvcFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIENvbnN0cnVjdHMgYSBuZXcgYE9wdGlvbmAgZnJvbSBhIG51bGxhYmxlIHR5cGUuIElmIHRoZSB2YWx1ZSBpcyBgbnVsbGAgb3IgYHVuZGVmaW5lZGAsIHJldHVybnMgYE5vbmVgLCBvdGhlcndpc2VcbiAqIHJldHVybnMgdGhlIHZhbHVlIHdyYXBwZWQgaW4gYSBgU29tZWAuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IG5vbmUsIHNvbWUsIGZyb21OdWxsYWJsZSB9IGZyb20gJ2ZwLXRzL09wdGlvbidcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKGZyb21OdWxsYWJsZSh1bmRlZmluZWQpLCBub25lKVxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChmcm9tTnVsbGFibGUobnVsbCksIG5vbmUpXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKGZyb21OdWxsYWJsZSgxKSwgc29tZSgxKSlcbiAqXG4gKiBAY2F0ZWdvcnkgaW50ZXJvcFxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBmcm9tTnVsbGFibGUgPSA8QT4oYTogQSk6IE9wdGlvbjxOb25OdWxsYWJsZTxBPj4gPT4gKGEgPT0gbnVsbCA/IG5vbmUgOiBzb21lKGEgYXMgTm9uTnVsbGFibGU8QT4pKVxuXG4vKipcbiAqIFRyYW5zZm9ybXMgYW4gZXhjZXB0aW9uIGludG8gYW4gYE9wdGlvbmAuIElmIGBmYCB0aHJvd3MsIHJldHVybnMgYE5vbmVgLCBvdGhlcndpc2UgcmV0dXJucyB0aGUgb3V0cHV0IHdyYXBwZWQgaW4gYVxuICogYFNvbWVgLlxuICpcbiAqIFNlZSBhbHNvIFtgdHJ5Q2F0Y2hLYF0oI3RyeWNhdGNoaykuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IG5vbmUsIHNvbWUsIHRyeUNhdGNoIH0gZnJvbSAnZnAtdHMvT3B0aW9uJ1xuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXG4gKiAgIHRyeUNhdGNoKCgpID0+IHtcbiAqICAgICB0aHJvdyBuZXcgRXJyb3IoKVxuICogICB9KSxcbiAqICAgbm9uZVxuICogKVxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbCh0cnlDYXRjaCgoKSA9PiAxKSwgc29tZSgxKSlcbiAqXG4gKiBAY2F0ZWdvcnkgaW50ZXJvcFxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCB0cnlDYXRjaCA9IDxBPihmOiBMYXp5PEE+KTogT3B0aW9uPEE+ID0+IHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gc29tZShmKCkpXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gbm9uZVxuICB9XG59XG5cbi8qKlxuICogQ29udmVydHMgYSBmdW5jdGlvbiB0aGF0IG1heSB0aHJvdyB0byBvbmUgcmV0dXJuaW5nIGEgYE9wdGlvbmAuXG4gKlxuICogQGNhdGVnb3J5IGludGVyb3BcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHRyeUNhdGNoSyA9IDxBIGV4dGVuZHMgUmVhZG9ubHlBcnJheTx1bmtub3duPiwgQj4oZjogKC4uLmE6IEEpID0+IEIpOiAoKC4uLmE6IEEpID0+IE9wdGlvbjxCPikgPT4gKC4uLmEpID0+XG4gIHRyeUNhdGNoKCgpID0+IGYoLi4uYSkpXG5cbi8qKlxuICogUmV0dXJucyBhICpzbWFydCBjb25zdHJ1Y3RvciogZnJvbSBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIG51bGxhYmxlIHZhbHVlLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBmcm9tTnVsbGFibGVLLCBub25lLCBzb21lIH0gZnJvbSAnZnAtdHMvT3B0aW9uJ1xuICpcbiAqIGNvbnN0IGYgPSAoczogc3RyaW5nKTogbnVtYmVyIHwgdW5kZWZpbmVkID0+IHtcbiAqICAgY29uc3QgbiA9IHBhcnNlRmxvYXQocylcbiAqICAgcmV0dXJuIGlzTmFOKG4pID8gdW5kZWZpbmVkIDogblxuICogfVxuICpcbiAqIGNvbnN0IGcgPSBmcm9tTnVsbGFibGVLKGYpXG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChnKCcxJyksIHNvbWUoMSkpXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKGcoJ2EnKSwgbm9uZSlcbiAqXG4gKiBAY2F0ZWdvcnkgaW50ZXJvcFxuICogQHNpbmNlIDIuOS4wXG4gKi9cbmV4cG9ydCBjb25zdCBmcm9tTnVsbGFibGVLOiA8QSBleHRlbmRzIFJlYWRvbmx5QXJyYXk8dW5rbm93bj4sIEI+KFxuICBmOiAoLi4uYTogQSkgPT4gQiB8IG51bGwgfCB1bmRlZmluZWRcbikgPT4gKC4uLmE6IEEpID0+IE9wdGlvbjxOb25OdWxsYWJsZTxCPj4gPSAoZikgPT4gZmxvdyhmLCBmcm9tTnVsbGFibGUpXG5cbi8qKlxuICogVGhpcyBpcyBgY2hhaW5gICsgYGZyb21OdWxsYWJsZWAsIHVzZWZ1bCB3aGVuIHdvcmtpbmcgd2l0aCBvcHRpb25hbCB2YWx1ZXMuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IHNvbWUsIG5vbmUsIGZyb21OdWxsYWJsZSwgY2hhaW5OdWxsYWJsZUsgfSBmcm9tICdmcC10cy9PcHRpb24nXG4gKiBpbXBvcnQgeyBwaXBlIH0gZnJvbSAnZnAtdHMvZnVuY3Rpb24nXG4gKlxuICogaW50ZXJmYWNlIEVtcGxveWVlIHtcbiAqICAgcmVhZG9ubHkgY29tcGFueT86IHtcbiAqICAgICByZWFkb25seSBhZGRyZXNzPzoge1xuICogICAgICAgcmVhZG9ubHkgc3RyZWV0Pzoge1xuICogICAgICAgICByZWFkb25seSBuYW1lPzogc3RyaW5nXG4gKiAgICAgICB9XG4gKiAgICAgfVxuICogICB9XG4gKiB9XG4gKlxuICogY29uc3QgZW1wbG95ZWUxOiBFbXBsb3llZSA9IHsgY29tcGFueTogeyBhZGRyZXNzOiB7IHN0cmVldDogeyBuYW1lOiAnaGlnaCBzdHJlZXQnIH0gfSB9IH1cbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxuICogICBwaXBlKFxuICogICAgIGZyb21OdWxsYWJsZShlbXBsb3llZTEuY29tcGFueSksXG4gKiAgICAgY2hhaW5OdWxsYWJsZUsoY29tcGFueSA9PiBjb21wYW55LmFkZHJlc3MpLFxuICogICAgIGNoYWluTnVsbGFibGVLKGFkZHJlc3MgPT4gYWRkcmVzcy5zdHJlZXQpLFxuICogICAgIGNoYWluTnVsbGFibGVLKHN0cmVldCA9PiBzdHJlZXQubmFtZSlcbiAqICAgKSxcbiAqICAgc29tZSgnaGlnaCBzdHJlZXQnKVxuICogKVxuICpcbiAqIGNvbnN0IGVtcGxveWVlMjogRW1wbG95ZWUgPSB7IGNvbXBhbnk6IHsgYWRkcmVzczogeyBzdHJlZXQ6IHt9IH0gfSB9XG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAqICAgcGlwZShcbiAqICAgICBmcm9tTnVsbGFibGUoZW1wbG95ZWUyLmNvbXBhbnkpLFxuICogICAgIGNoYWluTnVsbGFibGVLKGNvbXBhbnkgPT4gY29tcGFueS5hZGRyZXNzKSxcbiAqICAgICBjaGFpbk51bGxhYmxlSyhhZGRyZXNzID0+IGFkZHJlc3Muc3RyZWV0KSxcbiAqICAgICBjaGFpbk51bGxhYmxlSyhzdHJlZXQgPT4gc3RyZWV0Lm5hbWUpXG4gKiAgICksXG4gKiAgIG5vbmVcbiAqIClcbiAqXG4gKiBAY2F0ZWdvcnkgaW50ZXJvcFxuICogQHNpbmNlIDIuOS4wXG4gKi9cbmV4cG9ydCBjb25zdCBjaGFpbk51bGxhYmxlSyA9IDxBLCBCPihmOiAoYTogQSkgPT4gQiB8IG51bGwgfCB1bmRlZmluZWQpID0+IChtYTogT3B0aW9uPEE+KTogT3B0aW9uPE5vbk51bGxhYmxlPEI+PiA9PlxuICBpc05vbmUobWEpID8gbm9uZSA6IGZyb21OdWxsYWJsZShmKG1hLnZhbHVlKSlcblxuLyoqXG4gKiBFeHRyYWN0cyB0aGUgdmFsdWUgb3V0IG9mIHRoZSBzdHJ1Y3R1cmUsIGlmIGl0IGV4aXN0cy4gT3RoZXJ3aXNlIHJldHVybnMgYG51bGxgLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBzb21lLCBub25lLCB0b051bGxhYmxlIH0gZnJvbSAnZnAtdHMvT3B0aW9uJ1xuICogaW1wb3J0IHsgcGlwZSB9IGZyb20gJ2ZwLXRzL2Z1bmN0aW9uJ1xuICpcbiAqIGFzc2VydC5zdHJpY3RFcXVhbChcbiAqICAgcGlwZShcbiAqICAgICBzb21lKDEpLFxuICogICAgIHRvTnVsbGFibGVcbiAqICAgKSxcbiAqICAgMVxuICogKVxuICogYXNzZXJ0LnN0cmljdEVxdWFsKFxuICogICBwaXBlKFxuICogICAgIG5vbmUsXG4gKiAgICAgdG9OdWxsYWJsZVxuICogICApLFxuICogICBudWxsXG4gKiApXG4gKlxuICogQGNhdGVnb3J5IGludGVyb3BcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgdG9OdWxsYWJsZTogPEE+KG1hOiBPcHRpb248QT4pID0+IEEgfCBudWxsID1cbiAgLyojX19QVVJFX18qL1xuICBtYXRjaChjb25zdE51bGwsIGlkZW50aXR5KVxuXG4vKipcbiAqIEV4dHJhY3RzIHRoZSB2YWx1ZSBvdXQgb2YgdGhlIHN0cnVjdHVyZSwgaWYgaXQgZXhpc3RzLiBPdGhlcndpc2UgcmV0dXJucyBgdW5kZWZpbmVkYC5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgc29tZSwgbm9uZSwgdG9VbmRlZmluZWQgfSBmcm9tICdmcC10cy9PcHRpb24nXG4gKiBpbXBvcnQgeyBwaXBlIH0gZnJvbSAnZnAtdHMvZnVuY3Rpb24nXG4gKlxuICogYXNzZXJ0LnN0cmljdEVxdWFsKFxuICogICBwaXBlKFxuICogICAgIHNvbWUoMSksXG4gKiAgICAgdG9VbmRlZmluZWRcbiAqICAgKSxcbiAqICAgMVxuICogKVxuICogYXNzZXJ0LnN0cmljdEVxdWFsKFxuICogICBwaXBlKFxuICogICAgIG5vbmUsXG4gKiAgICAgdG9VbmRlZmluZWRcbiAqICAgKSxcbiAqICAgdW5kZWZpbmVkXG4gKiApXG4gKlxuICogQGNhdGVnb3J5IGludGVyb3BcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgdG9VbmRlZmluZWQ6IDxBPihtYTogT3B0aW9uPEE+KSA9PiBBIHwgdW5kZWZpbmVkID1cbiAgLyojX19QVVJFX18qL1xuICBtYXRjaChjb25zdFVuZGVmaW5lZCwgaWRlbnRpdHkpXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIHV0aWxzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogUmV0dXJucyBgdHJ1ZWAgaWYgYG1hYCBjb250YWlucyBgYWBcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgc29tZSwgbm9uZSwgZWxlbSB9IGZyb20gJ2ZwLXRzL09wdGlvbidcbiAqIGltcG9ydCB7IHBpcGUgfSBmcm9tICdmcC10cy9mdW5jdGlvbidcbiAqIGltcG9ydCAqIGFzIE4gZnJvbSAnZnAtdHMvbnVtYmVyJ1xuICpcbiAqIGFzc2VydC5zdHJpY3RFcXVhbChwaXBlKHNvbWUoMSksIGVsZW0oTi5FcSkoMSkpLCB0cnVlKVxuICogYXNzZXJ0LnN0cmljdEVxdWFsKHBpcGUoc29tZSgxKSwgZWxlbShOLkVxKSgyKSksIGZhbHNlKVxuICogYXNzZXJ0LnN0cmljdEVxdWFsKHBpcGUobm9uZSwgZWxlbShOLkVxKSgxKSksIGZhbHNlKVxuICpcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gZWxlbTxBPihcbiAgRTogRXE8QT5cbik6IHtcbiAgKGE6IEEpOiAobWE6IE9wdGlvbjxBPikgPT4gYm9vbGVhblxuICAoYTogQSwgbWE6IE9wdGlvbjxBPik6IGJvb2xlYW5cbn1cbmV4cG9ydCBmdW5jdGlvbiBlbGVtPEE+KEU6IEVxPEE+KTogKGE6IEEsIG1hPzogT3B0aW9uPEE+KSA9PiBib29sZWFuIHwgKChtYTogT3B0aW9uPEE+KSA9PiBib29sZWFuKSB7XG4gIHJldHVybiAoYSwgbWE/KSA9PiB7XG4gICAgaWYgKG1hID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGVsZW1FID0gZWxlbShFKVxuICAgICAgcmV0dXJuIChtYSkgPT4gZWxlbUUoYSwgbWEpXG4gICAgfVxuICAgIHJldHVybiBpc05vbmUobWEpID8gZmFsc2UgOiBFLmVxdWFscyhhLCBtYS52YWx1ZSlcbiAgfVxufVxuXG4vKipcbiAqIFJldHVybnMgYHRydWVgIGlmIHRoZSBwcmVkaWNhdGUgaXMgc2F0aXNmaWVkIGJ5IHRoZSB3cmFwcGVkIHZhbHVlXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IHNvbWUsIG5vbmUsIGV4aXN0cyB9IGZyb20gJ2ZwLXRzL09wdGlvbidcbiAqIGltcG9ydCB7IHBpcGUgfSBmcm9tICdmcC10cy9mdW5jdGlvbidcbiAqXG4gKiBhc3NlcnQuc3RyaWN0RXF1YWwoXG4gKiAgIHBpcGUoXG4gKiAgICAgc29tZSgxKSxcbiAqICAgICBleGlzdHMobiA9PiBuID4gMClcbiAqICAgKSxcbiAqICAgdHJ1ZVxuICogKVxuICogYXNzZXJ0LnN0cmljdEVxdWFsKFxuICogICBwaXBlKFxuICogICAgIHNvbWUoMSksXG4gKiAgICAgZXhpc3RzKG4gPT4gbiA+IDEpXG4gKiAgICksXG4gKiAgIGZhbHNlXG4gKiApXG4gKiBhc3NlcnQuc3RyaWN0RXF1YWwoXG4gKiAgIHBpcGUoXG4gKiAgICAgbm9uZSxcbiAqICAgICBleGlzdHMobiA9PiBuID4gMClcbiAqICAgKSxcbiAqICAgZmFsc2VcbiAqIClcbiAqXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGV4aXN0cyA9IDxBPihwcmVkaWNhdGU6IFByZWRpY2F0ZTxBPikgPT4gKG1hOiBPcHRpb248QT4pOiBib29sZWFuID0+XG4gIGlzTm9uZShtYSkgPyBmYWxzZSA6IHByZWRpY2F0ZShtYS52YWx1ZSlcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gZG8gbm90YXRpb25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBAc2luY2UgMi45LjBcbiAqL1xuZXhwb3J0IGNvbnN0IERvOiBPcHRpb248e30+ID1cbiAgLyojX19QVVJFX18qL1xuICBvZihfLmVtcHR5UmVjb3JkKVxuXG4vKipcbiAqIEBzaW5jZSAyLjguMFxuICovXG5leHBvcnQgY29uc3QgYmluZFRvID1cbiAgLyojX19QVVJFX18qL1xuICBiaW5kVG9fKEZ1bmN0b3IpXG5cbi8qKlxuICogQHNpbmNlIDIuOC4wXG4gKi9cbmV4cG9ydCBjb25zdCBiaW5kID1cbiAgLyojX19QVVJFX18qL1xuICBiaW5kXyhDaGFpbilcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gcGlwZWFibGUgc2VxdWVuY2UgU1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEBzaW5jZSAyLjguMFxuICovXG5leHBvcnQgY29uc3QgYXBTID1cbiAgLyojX19QVVJFX18qL1xuICBhcFNfKEFwcGx5KVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBzZXF1ZW5jZSBUXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgQXBUOiBPcHRpb248cmVhZG9ubHkgW10+ID1cbiAgLyojX19QVVJFX18qL1xuICBvZihfLmVtcHR5UmVhZG9ubHlBcnJheSlcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gYXJyYXkgdXRpbHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBFcXVpdmFsZW50IHRvIGBSZWFkb25seU5vbkVtcHR5QXJyYXkjdHJhdmVyc2VXaXRoSW5kZXgoQXBwbGljYXRpdmUpYC5cbiAqXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCB0cmF2ZXJzZVJlYWRvbmx5Tm9uRW1wdHlBcnJheVdpdGhJbmRleCA9IDxBLCBCPihmOiAoaW5kZXg6IG51bWJlciwgYTogQSkgPT4gT3B0aW9uPEI+KSA9PiAoXG4gIGFzOiBSZWFkb25seU5vbkVtcHR5QXJyYXk8QT5cbik6IE9wdGlvbjxSZWFkb25seU5vbkVtcHR5QXJyYXk8Qj4+ID0+IHtcbiAgY29uc3QgbyA9IGYoMCwgXy5oZWFkKGFzKSlcbiAgaWYgKGlzTm9uZShvKSkge1xuICAgIHJldHVybiBub25lXG4gIH1cbiAgY29uc3Qgb3V0OiBOb25FbXB0eUFycmF5PEI+ID0gW28udmFsdWVdXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgYXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBvID0gZihpLCBhc1tpXSlcbiAgICBpZiAoaXNOb25lKG8pKSB7XG4gICAgICByZXR1cm4gbm9uZVxuICAgIH1cbiAgICBvdXQucHVzaChvLnZhbHVlKVxuICB9XG4gIHJldHVybiBzb21lKG91dClcbn1cblxuLyoqXG4gKiBFcXVpdmFsZW50IHRvIGBSZWFkb25seUFycmF5I3RyYXZlcnNlV2l0aEluZGV4KEFwcGxpY2F0aXZlKWAuXG4gKlxuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgdHJhdmVyc2VSZWFkb25seUFycmF5V2l0aEluZGV4ID0gPEEsIEI+KFxuICBmOiAoaW5kZXg6IG51bWJlciwgYTogQSkgPT4gT3B0aW9uPEI+XG4pOiAoKGFzOiBSZWFkb25seUFycmF5PEE+KSA9PiBPcHRpb248UmVhZG9ubHlBcnJheTxCPj4pID0+IHtcbiAgY29uc3QgZyA9IHRyYXZlcnNlUmVhZG9ubHlOb25FbXB0eUFycmF5V2l0aEluZGV4KGYpXG4gIHJldHVybiAoYXMpID0+IChfLmlzTm9uRW1wdHkoYXMpID8gZyhhcykgOiBBcFQpXG59XG5cbi8qKlxuICogQHNpbmNlIDIuOS4wXG4gKi9cbmV4cG9ydCBjb25zdCB0cmF2ZXJzZUFycmF5V2l0aEluZGV4OiA8QSwgQj4oXG4gIGY6IChpbmRleDogbnVtYmVyLCBhOiBBKSA9PiBPcHRpb248Qj5cbikgPT4gKGFzOiBSZWFkb25seUFycmF5PEE+KSA9PiBPcHRpb248UmVhZG9ubHlBcnJheTxCPj4gPSB0cmF2ZXJzZVJlYWRvbmx5QXJyYXlXaXRoSW5kZXhcblxuLyoqXG4gKiBAc2luY2UgMi45LjBcbiAqL1xuZXhwb3J0IGNvbnN0IHRyYXZlcnNlQXJyYXkgPSA8QSwgQj4oZjogKGE6IEEpID0+IE9wdGlvbjxCPik6ICgoYXM6IFJlYWRvbmx5QXJyYXk8QT4pID0+IE9wdGlvbjxSZWFkb25seUFycmF5PEI+PikgPT5cbiAgdHJhdmVyc2VSZWFkb25seUFycmF5V2l0aEluZGV4KChfLCBhKSA9PiBmKGEpKVxuXG4vKipcbiAqIEBzaW5jZSAyLjkuMFxuICovXG5leHBvcnQgY29uc3Qgc2VxdWVuY2VBcnJheTogPEE+KGFycjogUmVhZG9ubHlBcnJheTxPcHRpb248QT4+KSA9PiBPcHRpb248UmVhZG9ubHlBcnJheTxBPj4gPVxuICAvKiNfX1BVUkVfXyovXG4gIHRyYXZlcnNlQXJyYXkoaWRlbnRpdHkpXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGRlcHJlY2F0ZWRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gdHNsaW50OmRpc2FibGU6IGRlcHJlY2F0aW9uXG5cbi8qKlxuICogVXNlIGBSZWZpbmVtZW50YCBtb2R1bGUgaW5zdGVhZC5cbiAqXG4gKiBAc2luY2UgMi4wLjBcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZWZpbmVtZW50PEEsIEIgZXh0ZW5kcyBBPihnZXRPcHRpb246IChhOiBBKSA9PiBPcHRpb248Qj4pOiBSZWZpbmVtZW50PEEsIEI+IHtcbiAgcmV0dXJuIChhOiBBKTogYSBpcyBCID0+IGlzU29tZShnZXRPcHRpb24oYSkpXG59XG5cbi8qKlxuICogVXNlIFtgY2hhaW5OdWxsYWJsZUtgXSgjY2hhaW5udWxsYWJsZWspIGluc3RlYWQuXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBjb25zdCBtYXBOdWxsYWJsZSA9IGNoYWluTnVsbGFibGVLXG5cbi8qKlxuICogVXNlIHNtYWxsLCBzcGVjaWZpYyBpbnN0YW5jZXMgaW5zdGVhZC5cbiAqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4wLjBcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBjb25zdCBvcHRpb246IE1vbmFkMTxVUkk+ICZcbiAgRm9sZGFibGUxPFVSST4gJlxuICBBbHRlcm5hdGl2ZTE8VVJJPiAmXG4gIEV4dGVuZDE8VVJJPiAmXG4gIFdpdGhlcmFibGUxPFVSST4gJlxuICBNb25hZFRocm93MTxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgb2YsXG4gIGFwOiBfYXAsXG4gIGNoYWluOiBfY2hhaW4sXG4gIHJlZHVjZTogX3JlZHVjZSxcbiAgZm9sZE1hcDogX2ZvbGRNYXAsXG4gIHJlZHVjZVJpZ2h0OiBfcmVkdWNlUmlnaHQsXG4gIHRyYXZlcnNlOiBfdHJhdmVyc2UsXG4gIHNlcXVlbmNlLFxuICB6ZXJvLFxuICBhbHQ6IF9hbHQsXG4gIGV4dGVuZDogX2V4dGVuZCxcbiAgY29tcGFjdCxcbiAgc2VwYXJhdGUsXG4gIGZpbHRlcjogX2ZpbHRlcixcbiAgZmlsdGVyTWFwOiBfZmlsdGVyTWFwLFxuICBwYXJ0aXRpb246IF9wYXJ0aXRpb24sXG4gIHBhcnRpdGlvbk1hcDogX3BhcnRpdGlvbk1hcCxcbiAgd2l0aGVyOiBfd2l0aGVyLFxuICB3aWx0OiBfd2lsdCxcbiAgdGhyb3dFcnJvclxufVxuXG4vKipcbiAqIFVzZSBbYGdldEFwcGx5U2VtaWdyb3VwYF0oLi9BcHBseS50cy5odG1sI2dldGFwcGx5c2VtaWdyb3VwKSBpbnN0ZWFkLlxuICpcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjAuMFxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IGdldEFwcGx5U2VtaWdyb3VwOiA8QT4oUzogU2VtaWdyb3VwPEE+KSA9PiBTZW1pZ3JvdXA8T3B0aW9uPEE+PiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZ2V0QXBwbHlTZW1pZ3JvdXBfKEFwcGx5KVxuXG4vKipcbiAqIFVzZSBbYGdldEFwcGxpY2F0aXZlTW9ub2lkYF0oLi9BcHBsaWNhdGl2ZS50cy5odG1sI2dldGFwcGxpY2F0aXZlbW9ub2lkKSBpbnN0ZWFkLlxuICpcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjAuMFxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IGdldEFwcGx5TW9ub2lkOiA8QT4oTTogTW9ub2lkPEE+KSA9PiBNb25vaWQ8T3B0aW9uPEE+PiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZ2V0QXBwbGljYXRpdmVNb25vaWQoQXBwbGljYXRpdmUpXG5cbi8qKlxuICogVXNlXG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IGZpcnN0IH0gZnJvbSAnZnAtdHMvU2VtaWdyb3VwJ1xuICogaW1wb3J0IHsgZ2V0TW9ub2lkIH0gZnJvbSAnZnAtdHMvT3B0aW9uJ1xuICpcbiAqIGdldE1vbm9pZChmaXJzdCgpKVxuICogYGBgXG4gKlxuICogaW5zdGVhZC5cbiAqXG4gKiBNb25vaWQgcmV0dXJuaW5nIHRoZSBsZWZ0LW1vc3Qgbm9uLWBOb25lYCB2YWx1ZVxuICpcbiAqIHwgeCAgICAgICB8IHkgICAgICAgfCBjb25jYXQoeCwgeSkgfFxuICogfCAtLS0tLS0tIHwgLS0tLS0tLSB8IC0tLS0tLS0tLS0tLSB8XG4gKiB8IG5vbmUgICAgfCBub25lICAgIHwgbm9uZSAgICAgICAgIHxcbiAqIHwgc29tZShhKSB8IG5vbmUgICAgfCBzb21lKGEpICAgICAgfFxuICogfCBub25lICAgIHwgc29tZShiKSB8IHNvbWUoYikgICAgICB8XG4gKiB8IHNvbWUoYSkgfCBzb21lKGIpIHwgc29tZShhKSAgICAgIHxcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgZ2V0Rmlyc3RNb25vaWQsIHNvbWUsIG5vbmUgfSBmcm9tICdmcC10cy9PcHRpb24nXG4gKlxuICogY29uc3QgTSA9IGdldEZpcnN0TW9ub2lkPG51bWJlcj4oKVxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChNLmNvbmNhdChub25lLCBub25lKSwgbm9uZSlcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoTS5jb25jYXQoc29tZSgxKSwgbm9uZSksIHNvbWUoMSkpXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKE0uY29uY2F0KG5vbmUsIHNvbWUoMikpLCBzb21lKDIpKVxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChNLmNvbmNhdChzb21lKDEpLCBzb21lKDIpKSwgc29tZSgxKSlcbiAqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4wLjBcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRGaXJzdE1vbm9pZCA9IDxBID0gbmV2ZXI+KCk6IE1vbm9pZDxPcHRpb248QT4+ID0+IGdldE1vbm9pZChmaXJzdCgpKVxuXG4vKipcbiAqIFVzZVxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBsYXN0IH0gZnJvbSAnZnAtdHMvU2VtaWdyb3VwJ1xuICogaW1wb3J0IHsgZ2V0TW9ub2lkIH0gZnJvbSAnZnAtdHMvT3B0aW9uJ1xuICpcbiAqIGdldE1vbm9pZChsYXN0KCkpXG4gKiBgYGBcbiAqXG4gKiBpbnN0ZWFkLlxuICpcbiAqIE1vbm9pZCByZXR1cm5pbmcgdGhlIHJpZ2h0LW1vc3Qgbm9uLWBOb25lYCB2YWx1ZVxuICpcbiAqIHwgeCAgICAgICB8IHkgICAgICAgfCBjb25jYXQoeCwgeSkgfFxuICogfCAtLS0tLS0tIHwgLS0tLS0tLSB8IC0tLS0tLS0tLS0tLSB8XG4gKiB8IG5vbmUgICAgfCBub25lICAgIHwgbm9uZSAgICAgICAgIHxcbiAqIHwgc29tZShhKSB8IG5vbmUgICAgfCBzb21lKGEpICAgICAgfFxuICogfCBub25lICAgIHwgc29tZShiKSB8IHNvbWUoYikgICAgICB8XG4gKiB8IHNvbWUoYSkgfCBzb21lKGIpIHwgc29tZShiKSAgICAgIHxcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgZ2V0TGFzdE1vbm9pZCwgc29tZSwgbm9uZSB9IGZyb20gJ2ZwLXRzL09wdGlvbidcbiAqXG4gKiBjb25zdCBNID0gZ2V0TGFzdE1vbm9pZDxudW1iZXI+KClcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoTS5jb25jYXQobm9uZSwgbm9uZSksIG5vbmUpXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKE0uY29uY2F0KHNvbWUoMSksIG5vbmUpLCBzb21lKDEpKVxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChNLmNvbmNhdChub25lLCBzb21lKDIpKSwgc29tZSgyKSlcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoTS5jb25jYXQoc29tZSgxKSwgc29tZSgyKSksIHNvbWUoMikpXG4gKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMC4wXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgY29uc3QgZ2V0TGFzdE1vbm9pZCA9IDxBID0gbmV2ZXI+KCk6IE1vbm9pZDxPcHRpb248QT4+ID0+IGdldE1vbm9pZChsYXN0KCkpXG4iXX0=