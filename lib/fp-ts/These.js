"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bimap = exports.URI = exports.Traversable = exports.Pointed = exports.Functor = exports.FromThese = exports.FromEither = exports.Foldable = exports.Bifunctor = exports.ApT = void 0;
exports.both = both;
exports.fromOptions = exports.fromOptionK = exports.fromOption = exports.foldW = exports.foldMap = exports.fold = exports.flap = exports.exists = exports.elem = void 0;
exports.getApplicative = getApplicative;
exports.getApply = void 0;
exports.getChain = getChain;
exports.getEq = getEq;
exports.getLeft = getLeft;
exports.getLeftOnly = getLeftOnly;
exports.getMonad = getMonad;
exports.getRight = getRight;
exports.getRightOnly = getRightOnly;
exports.getSemigroup = getSemigroup;
exports.getShow = getShow;
exports.isBoth = isBoth;
exports.isRight = exports.isLeft = void 0;
exports.left = left;
exports.leftOrBoth = leftOrBoth;
exports.reduceRight = exports.reduce = exports.of = exports.matchW = exports.match = exports.mapLeft = exports.map = void 0;
exports.right = right;
exports.rightOrBoth = rightOrBoth;
exports.traverseReadonlyNonEmptyArrayWithIndex = exports.traverseReadonlyArrayWithIndex = exports.traverse = exports.toTuple2 = exports.toTuple = exports.these = exports.swap = exports.sequence = void 0;

var _Eq = require("./Eq");

var _FromEither = require("./FromEither");

var _function = require("./function");

var _Functor = require("./Functor");

var _ = _interopRequireWildcard(require("./internal"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * A data structure providing "inclusive-or" as opposed to `Either`'s "exclusive-or".
 *
 * If you interpret `Either<E, A>` as suggesting the computation may either fail or succeed (exclusively), then
 * `These<E, A>` may fail, succeed, or do both at the same time.
 *
 * There are a few ways to interpret the both case:
 *
 * - You can think of a computation that has a non-fatal error.
 * - You can think of a computation that went as far as it could before erroring.
 * - You can think of a computation that keeps track of errors as it completes.
 *
 * Another way you can think of `These<E, A>` is saying that we want to handle `E` kind of data, `A` kind of data, or
 * both `E` and `A` kind of data at the same time. This is particularly useful when it comes to displaying UI's.
 *
 * (description adapted from https://package.elm-lang.org/packages/joneshf/elm-these)
 *
 * Adapted from https://github.com/purescript-contrib/purescript-these
 *
 * @since 2.0.0
 */
// -------------------------------------------------------------------------------------
// refinements
// -------------------------------------------------------------------------------------

/**
 * Returns `true` if the these is an instance of `Left`, `false` otherwise
 *
 * @category refinements
 * @since 2.0.0
 */
var isLeft = function isLeft(fa) {
  return fa._tag === 'Left';
};
/**
 * Returns `true` if the these is an instance of `Right`, `false` otherwise
 *
 * @category refinements
 * @since 2.0.0
 */


exports.isLeft = isLeft;

var isRight = function isRight(fa) {
  return fa._tag === 'Right';
};
/**
 * Returns `true` if the these is an instance of `Both`, `false` otherwise
 *
 * @category refinements
 * @since 2.0.0
 */


exports.isRight = isRight;

function isBoth(fa) {
  return fa._tag === 'Both';
} // -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------

/**
 * @category constructors
 * @since 2.0.0
 */


function left(left) {
  return {
    _tag: 'Left',
    left: left
  };
}
/**
 * @category constructors
 * @since 2.0.0
 */


function right(right) {
  return {
    _tag: 'Right',
    right: right
  };
}
/**
 * @category constructors
 * @since 2.0.0
 */


function both(left, right) {
  return {
    _tag: 'Both',
    left: left,
    right: right
  };
}
/**
 * Less strict version of [`match`](#match).
 *
 * @category destructors
 * @since 2.10.0
 */


var matchW = function matchW(onLeft, onRight, onBoth) {
  return function (fa) {
    switch (fa._tag) {
      case 'Left':
        return onLeft(fa.left);

      case 'Right':
        return onRight(fa.right);

      case 'Both':
        return onBoth(fa.left, fa.right);
    }
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
 * @category combinators
 * @since 2.4.0
 */

exports.fold = fold;
var swap = match(right, left, function (e, a) {
  return both(a, e);
});
/**
 * @category instances
 * @since 2.0.0
 */

exports.swap = swap;

function getShow(SE, SA) {
  return {
    show: match(function (l) {
      return "left(".concat(SE.show(l), ")");
    }, function (a) {
      return "right(".concat(SA.show(a), ")");
    }, function (l, a) {
      return "both(".concat(SE.show(l), ", ").concat(SA.show(a), ")");
    })
  };
}
/**
 * @category instances
 * @since 2.0.0
 */


function getEq(EE, EA) {
  return (0, _Eq.fromEquals)(function (x, y) {
    return isLeft(x) ? isLeft(y) && EE.equals(x.left, y.left) : isRight(x) ? isRight(y) && EA.equals(x.right, y.right) : isBoth(y) && EE.equals(x.left, y.left) && EA.equals(x.right, y.right);
  });
}
/**
 * @category instances
 * @since 2.0.0
 */


function getSemigroup(SE, SA) {
  return {
    concat: function concat(x, y) {
      return isLeft(x) ? isLeft(y) ? left(SE.concat(x.left, y.left)) : isRight(y) ? both(x.left, y.right) : both(SE.concat(x.left, y.left), y.right) : isRight(x) ? isLeft(y) ? both(y.left, x.right) : isRight(y) ? right(SA.concat(x.right, y.right)) : both(y.left, SA.concat(x.right, y.right)) : isLeft(y) ? both(SE.concat(x.left, y.left), x.right) : isRight(y) ? both(x.left, SA.concat(x.right, y.right)) : both(SE.concat(x.left, y.left), SA.concat(x.right, y.right));
    }
  };
}
/**
 * @category instances
 * @since 2.10.0
 */


var getApply = function getApply(S) {
  return {
    URI: URI,
    _E: undefined,
    map: _map,
    ap: function ap(fab, fa) {
      return isLeft(fab) ? isLeft(fa) ? left(S.concat(fab.left, fa.left)) : isRight(fa) ? left(fab.left) : left(S.concat(fab.left, fa.left)) : isRight(fab) ? isLeft(fa) ? left(fa.left) : isRight(fa) ? right(fab.right(fa.right)) : both(fa.left, fab.right(fa.right)) : isLeft(fa) ? left(S.concat(fab.left, fa.left)) : isRight(fa) ? both(fab.left, fab.right(fa.right)) : both(S.concat(fab.left, fa.left), fab.right(fa.right));
    }
  };
};
/**
 * @category instances
 * @since 2.7.0
 */


exports.getApply = getApply;

function getApplicative(S) {
  var A = getApply(S);
  return {
    URI: URI,
    _E: undefined,
    map: _map,
    ap: A.ap,
    of: of
  };
}
/**
 * @category instances
 * @since 2.10.0
 */


function getChain(S) {
  var A = getApply(S);

  var chain = function chain(ma, f) {
    if (isLeft(ma)) {
      return ma;
    }

    if (isRight(ma)) {
      return f(ma.right);
    }

    var fb = f(ma.right);
    return isLeft(fb) ? left(S.concat(ma.left, fb.left)) : isRight(fb) ? both(ma.left, fb.right) : both(S.concat(ma.left, fb.left), fb.right);
  };

  return {
    URI: URI,
    _E: undefined,
    map: _map,
    ap: A.ap,
    chain: chain
  };
}
/**
 * @category instances
 * @since 2.0.0
 */


function getMonad(S) {
  var C = getChain(S);
  return {
    URI: URI,
    _E: undefined,
    map: _map,
    of: of,
    ap: C.ap,
    chain: C.chain,
    throwError: left
  };
}
/**
 * Returns an `E` value if possible
 *
 * @example
 * import { getLeft, left, right, both } from 'fp-ts/These'
 * import { none, some } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(getLeft(left('a')), some('a'))
 * assert.deepStrictEqual(getLeft(right(1)), none)
 * assert.deepStrictEqual(getLeft(both('a', 1)), some('a'))
 *
 * @category destructors
 * @since 2.0.0
 */


function getLeft(fa) {
  return isLeft(fa) ? _.some(fa.left) : isRight(fa) ? _.none : _.some(fa.left);
}
/**
 * Returns an `A` value if possible
 *
 * @example
 * import { getRight, left, right, both } from 'fp-ts/These'
 * import { none, some } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(getRight(left('a')), none)
 * assert.deepStrictEqual(getRight(right(1)), some(1))
 * assert.deepStrictEqual(getRight(both('a', 1)), some(1))
 *
 * @category destructors
 * @since 2.0.0
 */


function getRight(fa) {
  return isLeft(fa) ? _.none : isRight(fa) ? _.some(fa.right) : _.some(fa.right);
} // TODO: make lazy in v3

/**
 * @example
 * import { leftOrBoth, left, both } from 'fp-ts/These'
 * import { none, some } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(leftOrBoth('a')(none), left('a'))
 * assert.deepStrictEqual(leftOrBoth('a')(some(1)), both('a', 1))
 *
 * @category constructors
 * @since 2.0.0
 */


function leftOrBoth(e) {
  return function (ma) {
    return _.isNone(ma) ? left(e) : both(e, ma.value);
  };
} // TODO: make lazy in v3

/**
 * @example
 * import { rightOrBoth, right, both } from 'fp-ts/These'
 * import { none, some } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(rightOrBoth(1)(none), right(1))
 * assert.deepStrictEqual(rightOrBoth(1)(some('a')), both('a', 1))
 *
 * @category constructors
 * @since 2.0.0
 */


function rightOrBoth(a) {
  return function (me) {
    return _.isNone(me) ? right(a) : both(me.value, a);
  };
}
/**
 * Returns the `E` value if and only if the value is constructed with `Left`
 *
 * @example
 * import { getLeftOnly, left, right, both } from 'fp-ts/These'
 * import { none, some } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(getLeftOnly(left('a')), some('a'))
 * assert.deepStrictEqual(getLeftOnly(right(1)), none)
 * assert.deepStrictEqual(getLeftOnly(both('a', 1)), none)
 *
 * @category destructors
 * @since 2.0.0
 */


function getLeftOnly(fa) {
  return isLeft(fa) ? _.some(fa.left) : _.none;
}
/**
 * Returns the `A` value if and only if the value is constructed with `Right`
 *
 * @example
 * import { getRightOnly, left, right, both } from 'fp-ts/These'
 * import { none, some } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(getRightOnly(left('a')), none)
 * assert.deepStrictEqual(getRightOnly(right(1)), some(1))
 * assert.deepStrictEqual(getRightOnly(both('a', 1)), none)
 *
 * @category destructors
 * @since 2.0.0
 */


function getRightOnly(fa) {
  return isRight(fa) ? _.some(fa.right) : _.none;
}
/**
 * Takes a pair of `Option`s and attempts to create a `These` from them
 *
 * @example
 * import { fromOptions, left, right, both } from 'fp-ts/These'
 * import { none, some } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(fromOptions(none, none), none)
 * assert.deepStrictEqual(fromOptions(some('a'), none), some(left('a')))
 * assert.deepStrictEqual(fromOptions(none, some(1)), some(right(1)))
 * assert.deepStrictEqual(fromOptions(some('a'), some(1)), some(both('a', 1)))
 *
 * @category constructors
 * @since 2.0.0
 */


var fromOptions = function fromOptions(fe, fa) {
  return _.isNone(fe) ? _.isNone(fa) ? _.none : _.some(right(fa.value)) : _.isNone(fa) ? _.some(left(fe.value)) : _.some(both(fe.value, fa.value));
}; // -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------


exports.fromOptions = fromOptions;

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


var _traverse = function _traverse(F) {
  var traverseF = traverse(F);
  return function (ta, f) {
    return (0, _function.pipe)(ta, traverseF(f));
  };
}; // -------------------------------------------------------------------------------------
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
    return isLeft(fa) ? left(f(fa.left)) : isRight(fa) ? right(g(fa.right)) : both(f(fa.left), g(fa.right));
  };
};
/**
 * Map a function over the first type argument of a bifunctor.
 *
 * @category Bifunctor
 * @since 2.0.0
 */


exports.bimap = bimap;

var mapLeft = function mapLeft(f) {
  return function (fa) {
    return isLeft(fa) ? left(f(fa.left)) : isBoth(fa) ? both(f(fa.left), fa.right) : fa;
  };
};
/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent some computational context.
 *
 * @category Functor
 * @since 2.0.0
 */


exports.mapLeft = mapLeft;

var map = function map(f) {
  return function (fa) {
    return isLeft(fa) ? fa : isRight(fa) ? right(f(fa.right)) : both(fa.left, f(fa.right));
  };
};
/**
 * @category Foldable
 * @since 2.0.0
 */


exports.map = map;

var reduce = function reduce(b, f) {
  return function (fa) {
    return isLeft(fa) ? b : f(b, fa.right);
  };
};
/**
 * @category Foldable
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
 * @category Foldable
 * @since 2.0.0
 */


exports.foldMap = foldMap;

var reduceRight = function reduceRight(b, f) {
  return function (fa) {
    return isLeft(fa) ? b : f(fa.right, b);
  };
};
/**
 * @since 2.6.3
 */


exports.reduceRight = reduceRight;

var traverse = function traverse(F) {
  return function (f) {
    return function (ta) {
      return isLeft(ta) ? F.of(ta) : isRight(ta) ? F.map(f(ta.right), right) : F.map(f(ta.right), function (b) {
        return both(ta.left, b);
      });
    };
  };
};
/**
 * @since 2.6.3
 */


exports.traverse = traverse;

var sequence = function sequence(F) {
  return function (ta) {
    return isLeft(ta) ? F.of(ta) : isRight(ta) ? F.map(ta.right, right) : F.map(ta.right, function (b) {
      return both(ta.left, b);
    });
  };
};
/**
 * @category Pointed
 * @since 2.0.0
 */


exports.sequence = sequence;
var of = right; // -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------

/**
 * @category instances
 * @since 2.0.0
 */

exports.of = of;
var URI = 'These';
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
 * @since 2.11.0
 */

exports.Bifunctor = Bifunctor;
var FromThese = {
  URI: URI,
  fromThese: _function.identity
};
/**
 * @category instances
 * @since 2.7.0
 */

exports.FromThese = FromThese;
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
};
/**
 * @category instances
 * @since 2.10.0
 */

exports.Traversable = Traversable;
var FromEither = {
  URI: URI,
  fromEither: _function.identity
};
/**
 * @category natural transformations
 * @since 2.10.0
 */

exports.FromEither = FromEither;
var fromOption = /*#__PURE__*/(0, _FromEither.fromOption)(FromEither);
/**
 * @category combinators
 * @since 2.10.0
 */

exports.fromOption = fromOption;
var fromOptionK = /*#__PURE__*/(0, _FromEither.fromOptionK)(FromEither); // -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------

/**
 * @since 2.11.0
 */

exports.fromOptionK = fromOptionK;

var elem = function elem(E) {
  return function (a) {
    return function (ma) {
      return isLeft(ma) ? false : E.equals(a, ma.right);
    };
  };
};
/**
 * @since 2.11.0
 */


exports.elem = elem;

var exists = function exists(predicate) {
  return function (ma) {
    return isLeft(ma) ? false : predicate(ma.right);
  };
};
/**
 * @example
 * import { toTuple2, left, right, both } from 'fp-ts/These'
 *
 * assert.deepStrictEqual(toTuple2(() => 'a', () => 1)(left('b')), ['b', 1])
 * assert.deepStrictEqual(toTuple2(() => 'a', () => 1)(right(2)), ['a', 2])
 * assert.deepStrictEqual(toTuple2(() => 'a', () => 1)(both('b', 2)), ['b', 2])
 *
 * @since 2.10.0
 */


exports.exists = exists;

var toTuple2 = function toTuple2(e, a) {
  return function (fa) {
    return isLeft(fa) ? [fa.left, a()] : isRight(fa) ? [e(), fa.right] : [fa.left, fa.right];
  };
}; // -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------

/**
 * Use [`toTuple2`](#totuple2) instead.
 *
 * @since 2.0.0
 * @deprecated
 */


exports.toTuple2 = toTuple2;

var toTuple = function toTuple(e, a) {
  return toTuple2(function () {
    return e;
  }, function () {
    return a;
  });
}; // -------------------------------------------------------------------------------------
// sequence T
// -------------------------------------------------------------------------------------

/**
 * @since 2.11.0
 */


exports.toTuple = toTuple;
var ApT = /*#__PURE__*/of(_.emptyReadonlyArray); // -------------------------------------------------------------------------------------
// array utils
// -------------------------------------------------------------------------------------

/**
 * Equivalent to `ReadonlyNonEmptyArray#traverseWithIndex(getApplicative(S))`.
 *
 * @since 2.11.0
 */

exports.ApT = ApT;

var traverseReadonlyNonEmptyArrayWithIndex = function traverseReadonlyNonEmptyArrayWithIndex(S) {
  return function (f) {
    return function (as) {
      var e = _.none;
      var t = f(0, _.head(as));

      if (isLeft(t)) {
        return t;
      }

      if (isBoth(t)) {
        e = _.some(t.left);
      }

      var out = [t.right];

      for (var i = 1; i < as.length; i++) {
        var _t = f(i, as[i]);

        if (isLeft(_t)) {
          return _t;
        }

        if (isBoth(_t)) {
          e = _.isNone(e) ? _.some(_t.left) : _.some(S.concat(e.value, _t.left));
        }

        out.push(_t.right);
      }

      return _.isNone(e) ? right(out) : both(e.value, out);
    };
  };
};
/**
 * Equivalent to `ReadonlyArray#traverseWithIndex(getApplicative(S))`.
 *
 * @since 2.11.0
 */


exports.traverseReadonlyNonEmptyArrayWithIndex = traverseReadonlyNonEmptyArrayWithIndex;

var traverseReadonlyArrayWithIndex = function traverseReadonlyArrayWithIndex(S) {
  return function (f) {
    var g = traverseReadonlyNonEmptyArrayWithIndex(S)(f);
    return function (as) {
      return _.isNonEmpty(as) ? g(as) : ApT;
    };
  };
}; // -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------

/**
 * Use small, specific instances instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */


exports.traverseReadonlyArrayWithIndex = traverseReadonlyArrayWithIndex;
var these = {
  URI: URI,
  map: _map,
  bimap: _bimap,
  mapLeft: _mapLeft,
  reduce: _reduce,
  foldMap: _foldMap,
  reduceRight: _reduceRight,
  traverse: _traverse,
  sequence: sequence
};
exports.these = these;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mcC10cy9UaGVzZS50cyJdLCJuYW1lcyI6WyJpc0xlZnQiLCJmYSIsIl90YWciLCJpc1JpZ2h0IiwiaXNCb3RoIiwibGVmdCIsInJpZ2h0IiwiYm90aCIsIm1hdGNoVyIsIm9uTGVmdCIsIm9uUmlnaHQiLCJvbkJvdGgiLCJmb2xkVyIsIm1hdGNoIiwiZm9sZCIsInN3YXAiLCJlIiwiYSIsImdldFNob3ciLCJTRSIsIlNBIiwic2hvdyIsImwiLCJnZXRFcSIsIkVFIiwiRUEiLCJ4IiwieSIsImVxdWFscyIsImdldFNlbWlncm91cCIsImNvbmNhdCIsImdldEFwcGx5IiwiUyIsIlVSSSIsIl9FIiwidW5kZWZpbmVkIiwibWFwIiwiX21hcCIsImFwIiwiZmFiIiwiZ2V0QXBwbGljYXRpdmUiLCJBIiwib2YiLCJnZXRDaGFpbiIsImNoYWluIiwibWEiLCJmIiwiZmIiLCJnZXRNb25hZCIsIkMiLCJ0aHJvd0Vycm9yIiwiZ2V0TGVmdCIsIl8iLCJzb21lIiwibm9uZSIsImdldFJpZ2h0IiwibGVmdE9yQm90aCIsImlzTm9uZSIsInZhbHVlIiwicmlnaHRPckJvdGgiLCJtZSIsImdldExlZnRPbmx5IiwiZ2V0UmlnaHRPbmx5IiwiZnJvbU9wdGlvbnMiLCJmZSIsIl9iaW1hcCIsImciLCJiaW1hcCIsIl9tYXBMZWZ0IiwibWFwTGVmdCIsIl9yZWR1Y2UiLCJiIiwicmVkdWNlIiwiX2ZvbGRNYXAiLCJNIiwiZm9sZE1hcE0iLCJmb2xkTWFwIiwiX3JlZHVjZVJpZ2h0IiwicmVkdWNlUmlnaHQiLCJfdHJhdmVyc2UiLCJGIiwidHJhdmVyc2VGIiwidHJhdmVyc2UiLCJ0YSIsImVtcHR5Iiwic2VxdWVuY2UiLCJGdW5jdG9yIiwiZmxhcCIsIlBvaW50ZWQiLCJCaWZ1bmN0b3IiLCJGcm9tVGhlc2UiLCJmcm9tVGhlc2UiLCJpZGVudGl0eSIsIkZvbGRhYmxlIiwiVHJhdmVyc2FibGUiLCJGcm9tRWl0aGVyIiwiZnJvbUVpdGhlciIsImZyb21PcHRpb24iLCJmcm9tT3B0aW9uSyIsImVsZW0iLCJFIiwiZXhpc3RzIiwicHJlZGljYXRlIiwidG9UdXBsZTIiLCJ0b1R1cGxlIiwiQXBUIiwiZW1wdHlSZWFkb25seUFycmF5IiwidHJhdmVyc2VSZWFkb25seU5vbkVtcHR5QXJyYXlXaXRoSW5kZXgiLCJhcyIsInQiLCJoZWFkIiwib3V0IiwiaSIsImxlbmd0aCIsInB1c2giLCJ0cmF2ZXJzZVJlYWRvbmx5QXJyYXlXaXRoSW5kZXgiLCJpc05vbkVtcHR5IiwidGhlc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBCQTs7QUFFQTs7QUFFQTs7QUFDQTs7QUFFQTs7Ozs7O0FBakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQThDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBSUMsRUFBSjtBQUFBLFNBQTZDQSxFQUFFLENBQUNDLElBQUgsS0FBWSxNQUF6RDtBQUFBLENBQWY7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ08sSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBSUYsRUFBSjtBQUFBLFNBQThDQSxFQUFFLENBQUNDLElBQUgsS0FBWSxPQUExRDtBQUFBLENBQWhCO0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNPLFNBQVNFLE1BQVQsQ0FBc0JILEVBQXRCLEVBQXlEO0FBQzlELFNBQU9BLEVBQUUsQ0FBQ0MsSUFBSCxLQUFZLE1BQW5CO0FBQ0QsQyxDQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sU0FBU0csSUFBVCxDQUFvQ0EsSUFBcEMsRUFBMEQ7QUFDL0QsU0FBTztBQUFFSCxJQUFBQSxJQUFJ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QUFBLEdBQUcsRUFBSEEsR0FEeUY7QUFFekZHLEVBQUFBLEdBQUcsRUFBRUMsSUFGb0Y7QUFHekY4QixFQUFBQSxLQUFLLEVBQUVGLE1BSGtGO0FBSXpGSSxFQUFBQSxPQUFPLEVBQUVELFFBSmdGO0FBS3pGSSxFQUFBQSxNQUFNLEVBQUVGLE9BTGlGO0FBTXpGTSxFQUFBQSxPQUFPLEVBQUVILFFBTmdGO0FBT3pGSyxFQUFBQSxXQUFXLEVBQUVELFlBUDRFO0FBUXpGSyxFQUFBQSxRQUFRLEVBQUVILFNBUitFO0FBU3pGTSxFQUFBQSxRQUFRLEVBQVJBO0FBVHlGLENBQXBGIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBIGRhdGEgc3RydWN0dXJlIHByb3ZpZGluZyBcImluY2x1c2l2ZS1vclwiIGFzIG9wcG9zZWQgdG8gYEVpdGhlcmAncyBcImV4Y2x1c2l2ZS1vclwiLlxuICpcbiAqIElmIHlvdSBpbnRlcnByZXQgYEVpdGhlcjxFLCBBPmAgYXMgc3VnZ2VzdGluZyB0aGUgY29tcHV0YXRpb24gbWF5IGVpdGhlciBmYWlsIG9yIHN1Y2NlZWQgKGV4Y2x1c2l2ZWx5KSwgdGhlblxuICogYFRoZXNlPEUsIEE+YCBtYXkgZmFpbCwgc3VjY2VlZCwgb3IgZG8gYm90aCBhdCB0aGUgc2FtZSB0aW1lLlxuICpcbiAqIFRoZXJlIGFyZSBhIGZldyB3YXlzIHRvIGludGVycHJldCB0aGUgYm90aCBjYXNlOlxuICpcbiAqIC0gWW91IGNhbiB0aGluayBvZiBhIGNvbXB1dGF0aW9uIHRoYXQgaGFzIGEgbm9uLWZhdGFsIGVycm9yLlxuICogLSBZb3UgY2FuIHRoaW5rIG9mIGEgY29tcHV0YXRpb24gdGhhdCB3ZW50IGFzIGZhciBhcyBpdCBjb3VsZCBiZWZvcmUgZXJyb3JpbmcuXG4gKiAtIFlvdSBjYW4gdGhpbmsgb2YgYSBjb21wdXRhdGlvbiB0aGF0IGtlZXBzIHRyYWNrIG9mIGVycm9ycyBhcyBpdCBjb21wbGV0ZXMuXG4gKlxuICogQW5vdGhlciB3YXkgeW91IGNhbiB0aGluayBvZiBgVGhlc2U8RSwgQT5gIGlzIHNheWluZyB0aGF0IHdlIHdhbnQgdG8gaGFuZGxlIGBFYCBraW5kIG9mIGRhdGEsIGBBYCBraW5kIG9mIGRhdGEsIG9yXG4gKiBib3RoIGBFYCBhbmQgYEFgIGtpbmQgb2YgZGF0YSBhdCB0aGUgc2FtZSB0aW1lLiBUaGlzIGlzIHBhcnRpY3VsYXJseSB1c2VmdWwgd2hlbiBpdCBjb21lcyB0byBkaXNwbGF5aW5nIFVJJ3MuXG4gKlxuICogKGRlc2NyaXB0aW9uIGFkYXB0ZWQgZnJvbSBodHRwczovL3BhY2thZ2UuZWxtLWxhbmcub3JnL3BhY2thZ2VzL2pvbmVzaGYvZWxtLXRoZXNlKVxuICpcbiAqIEFkYXB0ZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vcHVyZXNjcmlwdC1jb250cmliL3B1cmVzY3JpcHQtdGhlc2VcbiAqXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuaW1wb3J0IHsgQXBwbGljYXRpdmUsIEFwcGxpY2F0aXZlMkMgfSBmcm9tICcuL0FwcGxpY2F0aXZlJ1xuaW1wb3J0IHsgQXBwbHkyQyB9IGZyb20gJy4vQXBwbHknXG5pbXBvcnQgeyBCaWZ1bmN0b3IyIH0gZnJvbSAnLi9CaWZ1bmN0b3InXG5pbXBvcnQgeyBDaGFpbjJDIH0gZnJvbSAnLi9DaGFpbidcbmltcG9ydCB7IEVpdGhlciwgTGVmdCwgUmlnaHQgfSBmcm9tICcuL0VpdGhlcidcbmltcG9ydCB7IEVxLCBmcm9tRXF1YWxzIH0gZnJvbSAnLi9FcSdcbmltcG9ydCB7IEZvbGRhYmxlMiB9IGZyb20gJy4vRm9sZGFibGUnXG5pbXBvcnQgeyBGcm9tRWl0aGVyMiwgZnJvbU9wdGlvbiBhcyBmcm9tT3B0aW9uXywgZnJvbU9wdGlvbksgYXMgZnJvbU9wdGlvbktfIH0gZnJvbSAnLi9Gcm9tRWl0aGVyJ1xuaW1wb3J0IHsgRnJvbVRoZXNlMiB9IGZyb20gJy4vRnJvbVRoZXNlJ1xuaW1wb3J0IHsgaWRlbnRpdHksIExhenksIHBpcGUgfSBmcm9tICcuL2Z1bmN0aW9uJ1xuaW1wb3J0IHsgZmxhcCBhcyBmbGFwXywgRnVuY3RvcjIgfSBmcm9tICcuL0Z1bmN0b3InXG5pbXBvcnQgeyBIS1QgfSBmcm9tICcuL0hLVCdcbmltcG9ydCAqIGFzIF8gZnJvbSAnLi9pbnRlcm5hbCdcbmltcG9ydCB7IE1vbmFkMkMgfSBmcm9tICcuL01vbmFkJ1xuaW1wb3J0IHsgTW9uYWRUaHJvdzJDIH0gZnJvbSAnLi9Nb25hZFRocm93J1xuaW1wb3J0IHsgTW9ub2lkIH0gZnJvbSAnLi9Nb25vaWQnXG5pbXBvcnQgeyBOb25FbXB0eUFycmF5IH0gZnJvbSAnLi9Ob25FbXB0eUFycmF5J1xuaW1wb3J0IHsgT3B0aW9uIH0gZnJvbSAnLi9PcHRpb24nXG5pbXBvcnQgeyBQb2ludGVkMiB9IGZyb20gJy4vUG9pbnRlZCdcbmltcG9ydCB7IFByZWRpY2F0ZSB9IGZyb20gJy4vUHJlZGljYXRlJ1xuaW1wb3J0IHsgUmVhZG9ubHlOb25FbXB0eUFycmF5IH0gZnJvbSAnLi9SZWFkb25seU5vbkVtcHR5QXJyYXknXG5pbXBvcnQgeyBTZW1pZ3JvdXAgfSBmcm9tICcuL1NlbWlncm91cCdcbmltcG9ydCB7IFNob3cgfSBmcm9tICcuL1Nob3cnXG5pbXBvcnQgeyBQaXBlYWJsZVRyYXZlcnNlMiwgVHJhdmVyc2FibGUyIH0gZnJvbSAnLi9UcmF2ZXJzYWJsZSdcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gbW9kZWxcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgbW9kZWxcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgaW50ZXJmYWNlIEJvdGg8RSwgQT4ge1xuICByZWFkb25seSBfdGFnOiAnQm90aCdcbiAgcmVhZG9ubHkgbGVmdDogRVxuICByZWFkb25seSByaWdodDogQVxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBtb2RlbFxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCB0eXBlIFRoZXNlPEUsIEE+ID0gRWl0aGVyPEUsIEE+IHwgQm90aDxFLCBBPlxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyByZWZpbmVtZW50c1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIFJldHVybnMgYHRydWVgIGlmIHRoZSB0aGVzZSBpcyBhbiBpbnN0YW5jZSBvZiBgTGVmdGAsIGBmYWxzZWAgb3RoZXJ3aXNlXG4gKlxuICogQGNhdGVnb3J5IHJlZmluZW1lbnRzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGlzTGVmdCA9IDxFPihmYTogVGhlc2U8RSwgdW5rbm93bj4pOiBmYSBpcyBMZWZ0PEU+ID0+IGZhLl90YWcgPT09ICdMZWZ0J1xuXG4vKipcbiAqIFJldHVybnMgYHRydWVgIGlmIHRoZSB0aGVzZSBpcyBhbiBpbnN0YW5jZSBvZiBgUmlnaHRgLCBgZmFsc2VgIG90aGVyd2lzZVxuICpcbiAqIEBjYXRlZ29yeSByZWZpbmVtZW50c1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBpc1JpZ2h0ID0gPEE+KGZhOiBUaGVzZTx1bmtub3duLCBBPik6IGZhIGlzIFJpZ2h0PEE+ID0+IGZhLl90YWcgPT09ICdSaWdodCdcblxuLyoqXG4gKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdGhlc2UgaXMgYW4gaW5zdGFuY2Ugb2YgYEJvdGhgLCBgZmFsc2VgIG90aGVyd2lzZVxuICpcbiAqIEBjYXRlZ29yeSByZWZpbmVtZW50c1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0JvdGg8RSwgQT4oZmE6IFRoZXNlPEUsIEE+KTogZmEgaXMgQm90aDxFLCBBPiB7XG4gIHJldHVybiBmYS5fdGFnID09PSAnQm90aCdcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gY29uc3RydWN0b3JzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbnN0cnVjdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsZWZ0PEUgPSBuZXZlciwgQSA9IG5ldmVyPihsZWZ0OiBFKTogVGhlc2U8RSwgQT4ge1xuICByZXR1cm4geyBfdGFnOiAnTGVmdCcsIGxlZnQgfVxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb25zdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmlnaHQ8RSA9IG5ldmVyLCBBID0gbmV2ZXI+KHJpZ2h0OiBBKTogVGhlc2U8RSwgQT4ge1xuICByZXR1cm4geyBfdGFnOiAnUmlnaHQnLCByaWdodCB9XG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbnN0cnVjdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBib3RoPEUsIEE+KGxlZnQ6IEUsIHJpZ2h0OiBBKTogVGhlc2U8RSwgQT4ge1xuICByZXR1cm4geyBfdGFnOiAnQm90aCcsIGxlZnQsIHJpZ2h0IH1cbn1cblxuLyoqXG4gKiBMZXNzIHN0cmljdCB2ZXJzaW9uIG9mIFtgbWF0Y2hgXSgjbWF0Y2gpLlxuICpcbiAqIEBjYXRlZ29yeSBkZXN0cnVjdG9yc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgbWF0Y2hXID0gPEUsIEIsIEEsIEMsIEQ+KG9uTGVmdDogKGU6IEUpID0+IEIsIG9uUmlnaHQ6IChhOiBBKSA9PiBDLCBvbkJvdGg6IChlOiBFLCBhOiBBKSA9PiBEKSA9PiAoXG4gIGZhOiBUaGVzZTxFLCBBPlxuKTogQiB8IEMgfCBEID0+IHtcbiAgc3dpdGNoIChmYS5fdGFnKSB7XG4gICAgY2FzZSAnTGVmdCc6XG4gICAgICByZXR1cm4gb25MZWZ0KGZhLmxlZnQpXG4gICAgY2FzZSAnUmlnaHQnOlxuICAgICAgcmV0dXJuIG9uUmlnaHQoZmEucmlnaHQpXG4gICAgY2FzZSAnQm90aCc6XG4gICAgICByZXR1cm4gb25Cb3RoKGZhLmxlZnQsIGZhLnJpZ2h0KVxuICB9XG59XG5cbi8qKlxuICogQWxpYXMgb2YgW2BtYXRjaFdgXSgjbWF0Y2h3KS5cbiAqXG4gKiBAY2F0ZWdvcnkgZGVzdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZvbGRXID0gbWF0Y2hXXG5cbi8qKlxuICogQGNhdGVnb3J5IGRlc3RydWN0b3JzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBtYXRjaDogPEUsIEEsIEI+KFxuICBvbkxlZnQ6IChlOiBFKSA9PiBCLFxuICBvblJpZ2h0OiAoYTogQSkgPT4gQixcbiAgb25Cb3RoOiAoZTogRSwgYTogQSkgPT4gQlxuKSA9PiAoZmE6IFRoZXNlPEUsIEE+KSA9PiBCID0gbWF0Y2hXXG5cbi8qKlxuICogQWxpYXMgb2YgW2BtYXRjaGBdKCNtYXRjaCkuXG4gKlxuICogQGNhdGVnb3J5IGRlc3RydWN0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZvbGQgPSBtYXRjaFxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuNC4wXG4gKi9cbmV4cG9ydCBjb25zdCBzd2FwOiA8RSwgQT4oZmE6IFRoZXNlPEUsIEE+KSA9PiBUaGVzZTxBLCBFPiA9IG1hdGNoKHJpZ2h0LCBsZWZ0LCAoZSwgYSkgPT4gYm90aChhLCBlKSlcblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFNob3c8RSwgQT4oU0U6IFNob3c8RT4sIFNBOiBTaG93PEE+KTogU2hvdzxUaGVzZTxFLCBBPj4ge1xuICByZXR1cm4ge1xuICAgIHNob3c6IG1hdGNoKFxuICAgICAgKGwpID0+IGBsZWZ0KCR7U0Uuc2hvdyhsKX0pYCxcbiAgICAgIChhKSA9PiBgcmlnaHQoJHtTQS5zaG93KGEpfSlgLFxuICAgICAgKGwsIGEpID0+IGBib3RoKCR7U0Uuc2hvdyhsKX0sICR7U0Euc2hvdyhhKX0pYFxuICAgIClcbiAgfVxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RXE8RSwgQT4oRUU6IEVxPEU+LCBFQTogRXE8QT4pOiBFcTxUaGVzZTxFLCBBPj4ge1xuICByZXR1cm4gZnJvbUVxdWFscygoeCwgeSkgPT5cbiAgICBpc0xlZnQoeClcbiAgICAgID8gaXNMZWZ0KHkpICYmIEVFLmVxdWFscyh4LmxlZnQsIHkubGVmdClcbiAgICAgIDogaXNSaWdodCh4KVxuICAgICAgPyBpc1JpZ2h0KHkpICYmIEVBLmVxdWFscyh4LnJpZ2h0LCB5LnJpZ2h0KVxuICAgICAgOiBpc0JvdGgoeSkgJiYgRUUuZXF1YWxzKHgubGVmdCwgeS5sZWZ0KSAmJiBFQS5lcXVhbHMoeC5yaWdodCwgeS5yaWdodClcbiAgKVxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VtaWdyb3VwPEUsIEE+KFNFOiBTZW1pZ3JvdXA8RT4sIFNBOiBTZW1pZ3JvdXA8QT4pOiBTZW1pZ3JvdXA8VGhlc2U8RSwgQT4+IHtcbiAgcmV0dXJuIHtcbiAgICBjb25jYXQ6ICh4LCB5KSA9PlxuICAgICAgaXNMZWZ0KHgpXG4gICAgICAgID8gaXNMZWZ0KHkpXG4gICAgICAgICAgPyBsZWZ0KFNFLmNvbmNhdCh4LmxlZnQsIHkubGVmdCkpXG4gICAgICAgICAgOiBpc1JpZ2h0KHkpXG4gICAgICAgICAgPyBib3RoKHgubGVmdCwgeS5yaWdodClcbiAgICAgICAgICA6IGJvdGgoU0UuY29uY2F0KHgubGVmdCwgeS5sZWZ0KSwgeS5yaWdodClcbiAgICAgICAgOiBpc1JpZ2h0KHgpXG4gICAgICAgID8gaXNMZWZ0KHkpXG4gICAgICAgICAgPyBib3RoKHkubGVmdCwgeC5yaWdodClcbiAgICAgICAgICA6IGlzUmlnaHQoeSlcbiAgICAgICAgICA/IHJpZ2h0KFNBLmNvbmNhdCh4LnJpZ2h0LCB5LnJpZ2h0KSlcbiAgICAgICAgICA6IGJvdGgoeS5sZWZ0LCBTQS5jb25jYXQoeC5yaWdodCwgeS5yaWdodCkpXG4gICAgICAgIDogaXNMZWZ0KHkpXG4gICAgICAgID8gYm90aChTRS5jb25jYXQoeC5sZWZ0LCB5LmxlZnQpLCB4LnJpZ2h0KVxuICAgICAgICA6IGlzUmlnaHQoeSlcbiAgICAgICAgPyBib3RoKHgubGVmdCwgU0EuY29uY2F0KHgucmlnaHQsIHkucmlnaHQpKVxuICAgICAgICA6IGJvdGgoU0UuY29uY2F0KHgubGVmdCwgeS5sZWZ0KSwgU0EuY29uY2F0KHgucmlnaHQsIHkucmlnaHQpKVxuICB9XG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgZ2V0QXBwbHkgPSA8RT4oUzogU2VtaWdyb3VwPEU+KTogQXBwbHkyQzxVUkksIEU+ID0+ICh7XG4gIFVSSSxcbiAgX0U6IHVuZGVmaW5lZCBhcyBhbnksXG4gIG1hcDogX21hcCxcbiAgYXA6IChmYWIsIGZhKSA9PlxuICAgIGlzTGVmdChmYWIpXG4gICAgICA/IGlzTGVmdChmYSlcbiAgICAgICAgPyBsZWZ0KFMuY29uY2F0KGZhYi5sZWZ0LCBmYS5sZWZ0KSlcbiAgICAgICAgOiBpc1JpZ2h0KGZhKVxuICAgICAgICA/IGxlZnQoZmFiLmxlZnQpXG4gICAgICAgIDogbGVmdChTLmNvbmNhdChmYWIubGVmdCwgZmEubGVmdCkpXG4gICAgICA6IGlzUmlnaHQoZmFiKVxuICAgICAgPyBpc0xlZnQoZmEpXG4gICAgICAgID8gbGVmdChmYS5sZWZ0KVxuICAgICAgICA6IGlzUmlnaHQoZmEpXG4gICAgICAgID8gcmlnaHQoZmFiLnJpZ2h0KGZhLnJpZ2h0KSlcbiAgICAgICAgOiBib3RoKGZhLmxlZnQsIGZhYi5yaWdodChmYS5yaWdodCkpXG4gICAgICA6IGlzTGVmdChmYSlcbiAgICAgID8gbGVmdChTLmNvbmNhdChmYWIubGVmdCwgZmEubGVmdCkpXG4gICAgICA6IGlzUmlnaHQoZmEpXG4gICAgICA/IGJvdGgoZmFiLmxlZnQsIGZhYi5yaWdodChmYS5yaWdodCkpXG4gICAgICA6IGJvdGgoUy5jb25jYXQoZmFiLmxlZnQsIGZhLmxlZnQpLCBmYWIucmlnaHQoZmEucmlnaHQpKVxufSlcblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi43LjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEFwcGxpY2F0aXZlPEU+KFM6IFNlbWlncm91cDxFPik6IEFwcGxpY2F0aXZlMkM8VVJJLCBFPiB7XG4gIGNvbnN0IEEgPSBnZXRBcHBseShTKVxuICByZXR1cm4ge1xuICAgIFVSSSxcbiAgICBfRTogdW5kZWZpbmVkIGFzIGFueSxcbiAgICBtYXA6IF9tYXAsXG4gICAgYXA6IEEuYXAsXG4gICAgb2ZcbiAgfVxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldENoYWluPEU+KFM6IFNlbWlncm91cDxFPik6IENoYWluMkM8VVJJLCBFPiB7XG4gIGNvbnN0IEEgPSBnZXRBcHBseShTKVxuXG4gIGNvbnN0IGNoYWluID0gPEEsIEI+KG1hOiBUaGVzZTxFLCBBPiwgZjogKGE6IEEpID0+IFRoZXNlPEUsIEI+KTogVGhlc2U8RSwgQj4gPT4ge1xuICAgIGlmIChpc0xlZnQobWEpKSB7XG4gICAgICByZXR1cm4gbWFcbiAgICB9XG4gICAgaWYgKGlzUmlnaHQobWEpKSB7XG4gICAgICByZXR1cm4gZihtYS5yaWdodClcbiAgICB9XG4gICAgY29uc3QgZmIgPSBmKG1hLnJpZ2h0KVxuICAgIHJldHVybiBpc0xlZnQoZmIpXG4gICAgICA/IGxlZnQoUy5jb25jYXQobWEubGVmdCwgZmIubGVmdCkpXG4gICAgICA6IGlzUmlnaHQoZmIpXG4gICAgICA/IGJvdGgobWEubGVmdCwgZmIucmlnaHQpXG4gICAgICA6IGJvdGgoUy5jb25jYXQobWEubGVmdCwgZmIubGVmdCksIGZiLnJpZ2h0KVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBVUkksXG4gICAgX0U6IHVuZGVmaW5lZCBhcyBhbnksXG4gICAgbWFwOiBfbWFwLFxuICAgIGFwOiBBLmFwLFxuICAgIGNoYWluXG4gIH1cbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldE1vbmFkPEU+KFM6IFNlbWlncm91cDxFPik6IE1vbmFkMkM8VVJJLCBFPiAmIE1vbmFkVGhyb3cyQzxVUkksIEU+IHtcbiAgY29uc3QgQyA9IGdldENoYWluKFMpXG4gIHJldHVybiB7XG4gICAgVVJJLFxuICAgIF9FOiB1bmRlZmluZWQgYXMgYW55LFxuICAgIG1hcDogX21hcCxcbiAgICBvZixcbiAgICBhcDogQy5hcCxcbiAgICBjaGFpbjogQy5jaGFpbixcbiAgICB0aHJvd0Vycm9yOiBsZWZ0XG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIGFuIGBFYCB2YWx1ZSBpZiBwb3NzaWJsZVxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBnZXRMZWZ0LCBsZWZ0LCByaWdodCwgYm90aCB9IGZyb20gJ2ZwLXRzL1RoZXNlJ1xuICogaW1wb3J0IHsgbm9uZSwgc29tZSB9IGZyb20gJ2ZwLXRzL09wdGlvbidcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKGdldExlZnQobGVmdCgnYScpKSwgc29tZSgnYScpKVxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChnZXRMZWZ0KHJpZ2h0KDEpKSwgbm9uZSlcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoZ2V0TGVmdChib3RoKCdhJywgMSkpLCBzb21lKCdhJykpXG4gKlxuICogQGNhdGVnb3J5IGRlc3RydWN0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldExlZnQ8RSwgQT4oZmE6IFRoZXNlPEUsIEE+KTogT3B0aW9uPEU+IHtcbiAgcmV0dXJuIGlzTGVmdChmYSkgPyBfLnNvbWUoZmEubGVmdCkgOiBpc1JpZ2h0KGZhKSA/IF8ubm9uZSA6IF8uc29tZShmYS5sZWZ0KVxufVxuXG4vKipcbiAqIFJldHVybnMgYW4gYEFgIHZhbHVlIGlmIHBvc3NpYmxlXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGdldFJpZ2h0LCBsZWZ0LCByaWdodCwgYm90aCB9IGZyb20gJ2ZwLXRzL1RoZXNlJ1xuICogaW1wb3J0IHsgbm9uZSwgc29tZSB9IGZyb20gJ2ZwLXRzL09wdGlvbidcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKGdldFJpZ2h0KGxlZnQoJ2EnKSksIG5vbmUpXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKGdldFJpZ2h0KHJpZ2h0KDEpKSwgc29tZSgxKSlcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoZ2V0UmlnaHQoYm90aCgnYScsIDEpKSwgc29tZSgxKSlcbiAqXG4gKiBAY2F0ZWdvcnkgZGVzdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmlnaHQ8RSwgQT4oZmE6IFRoZXNlPEUsIEE+KTogT3B0aW9uPEE+IHtcbiAgcmV0dXJuIGlzTGVmdChmYSkgPyBfLm5vbmUgOiBpc1JpZ2h0KGZhKSA/IF8uc29tZShmYS5yaWdodCkgOiBfLnNvbWUoZmEucmlnaHQpXG59XG5cbi8vIFRPRE86IG1ha2UgbGF6eSBpbiB2M1xuLyoqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgbGVmdE9yQm90aCwgbGVmdCwgYm90aCB9IGZyb20gJ2ZwLXRzL1RoZXNlJ1xuICogaW1wb3J0IHsgbm9uZSwgc29tZSB9IGZyb20gJ2ZwLXRzL09wdGlvbidcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKGxlZnRPckJvdGgoJ2EnKShub25lKSwgbGVmdCgnYScpKVxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChsZWZ0T3JCb3RoKCdhJykoc29tZSgxKSksIGJvdGgoJ2EnLCAxKSlcbiAqXG4gKiBAY2F0ZWdvcnkgY29uc3RydWN0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxlZnRPckJvdGg8RT4oZTogRSk6IDxBPihtYTogT3B0aW9uPEE+KSA9PiBUaGVzZTxFLCBBPiB7XG4gIHJldHVybiAobWEpID0+IChfLmlzTm9uZShtYSkgPyBsZWZ0KGUpIDogYm90aChlLCBtYS52YWx1ZSkpXG59XG5cbi8vIFRPRE86IG1ha2UgbGF6eSBpbiB2M1xuLyoqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgcmlnaHRPckJvdGgsIHJpZ2h0LCBib3RoIH0gZnJvbSAnZnAtdHMvVGhlc2UnXG4gKiBpbXBvcnQgeyBub25lLCBzb21lIH0gZnJvbSAnZnAtdHMvT3B0aW9uJ1xuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwocmlnaHRPckJvdGgoMSkobm9uZSksIHJpZ2h0KDEpKVxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChyaWdodE9yQm90aCgxKShzb21lKCdhJykpLCBib3RoKCdhJywgMSkpXG4gKlxuICogQGNhdGVnb3J5IGNvbnN0cnVjdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByaWdodE9yQm90aDxBPihhOiBBKTogPEU+KG1lOiBPcHRpb248RT4pID0+IFRoZXNlPEUsIEE+IHtcbiAgcmV0dXJuIChtZSkgPT4gKF8uaXNOb25lKG1lKSA/IHJpZ2h0KGEpIDogYm90aChtZS52YWx1ZSwgYSkpXG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgYEVgIHZhbHVlIGlmIGFuZCBvbmx5IGlmIHRoZSB2YWx1ZSBpcyBjb25zdHJ1Y3RlZCB3aXRoIGBMZWZ0YFxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBnZXRMZWZ0T25seSwgbGVmdCwgcmlnaHQsIGJvdGggfSBmcm9tICdmcC10cy9UaGVzZSdcbiAqIGltcG9ydCB7IG5vbmUsIHNvbWUgfSBmcm9tICdmcC10cy9PcHRpb24nXG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChnZXRMZWZ0T25seShsZWZ0KCdhJykpLCBzb21lKCdhJykpXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKGdldExlZnRPbmx5KHJpZ2h0KDEpKSwgbm9uZSlcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoZ2V0TGVmdE9ubHkoYm90aCgnYScsIDEpKSwgbm9uZSlcbiAqXG4gKiBAY2F0ZWdvcnkgZGVzdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGVmdE9ubHk8RSwgQT4oZmE6IFRoZXNlPEUsIEE+KTogT3B0aW9uPEU+IHtcbiAgcmV0dXJuIGlzTGVmdChmYSkgPyBfLnNvbWUoZmEubGVmdCkgOiBfLm5vbmVcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBgQWAgdmFsdWUgaWYgYW5kIG9ubHkgaWYgdGhlIHZhbHVlIGlzIGNvbnN0cnVjdGVkIHdpdGggYFJpZ2h0YFxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBnZXRSaWdodE9ubHksIGxlZnQsIHJpZ2h0LCBib3RoIH0gZnJvbSAnZnAtdHMvVGhlc2UnXG4gKiBpbXBvcnQgeyBub25lLCBzb21lIH0gZnJvbSAnZnAtdHMvT3B0aW9uJ1xuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoZ2V0UmlnaHRPbmx5KGxlZnQoJ2EnKSksIG5vbmUpXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKGdldFJpZ2h0T25seShyaWdodCgxKSksIHNvbWUoMSkpXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKGdldFJpZ2h0T25seShib3RoKCdhJywgMSkpLCBub25lKVxuICpcbiAqIEBjYXRlZ29yeSBkZXN0cnVjdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRSaWdodE9ubHk8RSwgQT4oZmE6IFRoZXNlPEUsIEE+KTogT3B0aW9uPEE+IHtcbiAgcmV0dXJuIGlzUmlnaHQoZmEpID8gXy5zb21lKGZhLnJpZ2h0KSA6IF8ubm9uZVxufVxuXG4vKipcbiAqIFRha2VzIGEgcGFpciBvZiBgT3B0aW9uYHMgYW5kIGF0dGVtcHRzIHRvIGNyZWF0ZSBhIGBUaGVzZWAgZnJvbSB0aGVtXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGZyb21PcHRpb25zLCBsZWZ0LCByaWdodCwgYm90aCB9IGZyb20gJ2ZwLXRzL1RoZXNlJ1xuICogaW1wb3J0IHsgbm9uZSwgc29tZSB9IGZyb20gJ2ZwLXRzL09wdGlvbidcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKGZyb21PcHRpb25zKG5vbmUsIG5vbmUpLCBub25lKVxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChmcm9tT3B0aW9ucyhzb21lKCdhJyksIG5vbmUpLCBzb21lKGxlZnQoJ2EnKSkpXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKGZyb21PcHRpb25zKG5vbmUsIHNvbWUoMSkpLCBzb21lKHJpZ2h0KDEpKSlcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoZnJvbU9wdGlvbnMoc29tZSgnYScpLCBzb21lKDEpKSwgc29tZShib3RoKCdhJywgMSkpKVxuICpcbiAqIEBjYXRlZ29yeSBjb25zdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgZnJvbU9wdGlvbnMgPSA8RSwgQT4oZmU6IE9wdGlvbjxFPiwgZmE6IE9wdGlvbjxBPik6IE9wdGlvbjxUaGVzZTxFLCBBPj4gPT5cbiAgXy5pc05vbmUoZmUpXG4gICAgPyBfLmlzTm9uZShmYSlcbiAgICAgID8gXy5ub25lXG4gICAgICA6IF8uc29tZShyaWdodChmYS52YWx1ZSkpXG4gICAgOiBfLmlzTm9uZShmYSlcbiAgICA/IF8uc29tZShsZWZ0KGZlLnZhbHVlKSlcbiAgICA6IF8uc29tZShib3RoKGZlLnZhbHVlLCBmYS52YWx1ZSkpXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIG5vbi1waXBlYWJsZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuY29uc3QgX21hcDogRnVuY3RvcjI8VVJJPlsnbWFwJ10gPSAoZmEsIGYpID0+IHBpcGUoZmEsIG1hcChmKSlcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5jb25zdCBfYmltYXA6IEJpZnVuY3RvcjI8VVJJPlsnYmltYXAnXSA9IChmYSwgZiwgZykgPT4gcGlwZShmYSwgYmltYXAoZiwgZykpXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuY29uc3QgX21hcExlZnQ6IEJpZnVuY3RvcjI8VVJJPlsnbWFwTGVmdCddID0gKGZhLCBmKSA9PiBwaXBlKGZhLCBtYXBMZWZ0KGYpKVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmNvbnN0IF9yZWR1Y2U6IEZvbGRhYmxlMjxVUkk+WydyZWR1Y2UnXSA9IChmYSwgYiwgZikgPT4gcGlwZShmYSwgcmVkdWNlKGIsIGYpKVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmNvbnN0IF9mb2xkTWFwOiBGb2xkYWJsZTI8VVJJPlsnZm9sZE1hcCddID0gKE0pID0+IHtcbiAgY29uc3QgZm9sZE1hcE0gPSBmb2xkTWFwKE0pXG4gIHJldHVybiAoZmEsIGYpID0+IHBpcGUoZmEsIGZvbGRNYXBNKGYpKVxufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmNvbnN0IF9yZWR1Y2VSaWdodDogRm9sZGFibGUyPFVSST5bJ3JlZHVjZVJpZ2h0J10gPSAoZmEsIGIsIGYpID0+IHBpcGUoZmEsIHJlZHVjZVJpZ2h0KGIsIGYpKVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmNvbnN0IF90cmF2ZXJzZSA9IDxGPihcbiAgRjogQXBwbGljYXRpdmU8Rj5cbik6ICg8RSwgQSwgQj4odGE6IFRoZXNlPEUsIEE+LCBmOiAoYTogQSkgPT4gSEtUPEYsIEI+KSA9PiBIS1Q8RiwgVGhlc2U8RSwgQj4+KSA9PiB7XG4gIGNvbnN0IHRyYXZlcnNlRiA9IHRyYXZlcnNlKEYpXG4gIHJldHVybiAodGEsIGYpID0+IHBpcGUodGEsIHRyYXZlcnNlRihmKSlcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gdHlwZSBjbGFzcyBtZW1iZXJzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogTWFwIGEgcGFpciBvZiBmdW5jdGlvbnMgb3ZlciB0aGUgdHdvIHR5cGUgYXJndW1lbnRzIG9mIHRoZSBiaWZ1bmN0b3IuXG4gKlxuICogQGNhdGVnb3J5IEJpZnVuY3RvclxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBiaW1hcDogPEUsIEcsIEEsIEI+KGY6IChlOiBFKSA9PiBHLCBnOiAoYTogQSkgPT4gQikgPT4gKGZhOiBUaGVzZTxFLCBBPikgPT4gVGhlc2U8RywgQj4gPSAoZiwgZykgPT4gKGZhKSA9PlxuICBpc0xlZnQoZmEpID8gbGVmdChmKGZhLmxlZnQpKSA6IGlzUmlnaHQoZmEpID8gcmlnaHQoZyhmYS5yaWdodCkpIDogYm90aChmKGZhLmxlZnQpLCBnKGZhLnJpZ2h0KSlcblxuLyoqXG4gKiBNYXAgYSBmdW5jdGlvbiBvdmVyIHRoZSBmaXJzdCB0eXBlIGFyZ3VtZW50IG9mIGEgYmlmdW5jdG9yLlxuICpcbiAqIEBjYXRlZ29yeSBCaWZ1bmN0b3JcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgbWFwTGVmdDogPEUsIEc+KGY6IChlOiBFKSA9PiBHKSA9PiA8QT4oZmE6IFRoZXNlPEUsIEE+KSA9PiBUaGVzZTxHLCBBPiA9IChmKSA9PiAoZmEpID0+XG4gIGlzTGVmdChmYSkgPyBsZWZ0KGYoZmEubGVmdCkpIDogaXNCb3RoKGZhKSA/IGJvdGgoZihmYS5sZWZ0KSwgZmEucmlnaHQpIDogZmFcblxuLyoqXG4gKiBgbWFwYCBjYW4gYmUgdXNlZCB0byB0dXJuIGZ1bmN0aW9ucyBgKGE6IEEpID0+IEJgIGludG8gZnVuY3Rpb25zIGAoZmE6IEY8QT4pID0+IEY8Qj5gIHdob3NlIGFyZ3VtZW50IGFuZCByZXR1cm4gdHlwZXNcbiAqIHVzZSB0aGUgdHlwZSBjb25zdHJ1Y3RvciBgRmAgdG8gcmVwcmVzZW50IHNvbWUgY29tcHV0YXRpb25hbCBjb250ZXh0LlxuICpcbiAqIEBjYXRlZ29yeSBGdW5jdG9yXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IG1hcDogPEEsIEI+KGY6IChhOiBBKSA9PiBCKSA9PiA8RT4oZmE6IFRoZXNlPEUsIEE+KSA9PiBUaGVzZTxFLCBCPiA9IChmKSA9PiAoZmEpID0+XG4gIGlzTGVmdChmYSkgPyBmYSA6IGlzUmlnaHQoZmEpID8gcmlnaHQoZihmYS5yaWdodCkpIDogYm90aChmYS5sZWZ0LCBmKGZhLnJpZ2h0KSlcblxuLyoqXG4gKiBAY2F0ZWdvcnkgRm9sZGFibGVcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgcmVkdWNlOiA8QSwgQj4oYjogQiwgZjogKGI6IEIsIGE6IEEpID0+IEIpID0+IDxFPihmYTogVGhlc2U8RSwgQT4pID0+IEIgPSAoYiwgZikgPT4gKGZhKSA9PlxuICBpc0xlZnQoZmEpID8gYiA6IGYoYiwgZmEucmlnaHQpXG5cbi8qKlxuICogQGNhdGVnb3J5IEZvbGRhYmxlXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZvbGRNYXA6IDxNPihNOiBNb25vaWQ8TT4pID0+IDxBPihmOiAoYTogQSkgPT4gTSkgPT4gPEU+KGZhOiBUaGVzZTxFLCBBPikgPT4gTSA9IChNKSA9PiAoZikgPT4gKGZhKSA9PlxuICBpc0xlZnQoZmEpID8gTS5lbXB0eSA6IGYoZmEucmlnaHQpXG5cbi8qKlxuICogQGNhdGVnb3J5IEZvbGRhYmxlXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHJlZHVjZVJpZ2h0OiA8QSwgQj4oYjogQiwgZjogKGE6IEEsIGI6IEIpID0+IEIpID0+IDxFPihmYTogVGhlc2U8RSwgQT4pID0+IEIgPSAoYiwgZikgPT4gKGZhKSA9PlxuICBpc0xlZnQoZmEpID8gYiA6IGYoZmEucmlnaHQsIGIpXG5cbi8qKlxuICogQHNpbmNlIDIuNi4zXG4gKi9cbmV4cG9ydCBjb25zdCB0cmF2ZXJzZTogUGlwZWFibGVUcmF2ZXJzZTI8VVJJPiA9IDxGPihcbiAgRjogQXBwbGljYXRpdmU8Rj5cbik6ICg8QSwgQj4oZjogKGE6IEEpID0+IEhLVDxGLCBCPikgPT4gPEU+KHRhOiBUaGVzZTxFLCBBPikgPT4gSEtUPEYsIFRoZXNlPEUsIEI+PikgPT4gKGYpID0+ICh0YSkgPT5cbiAgaXNMZWZ0KHRhKSA/IEYub2YodGEpIDogaXNSaWdodCh0YSkgPyBGLm1hcChmKHRhLnJpZ2h0KSwgcmlnaHQpIDogRi5tYXAoZih0YS5yaWdodCksIChiKSA9PiBib3RoKHRhLmxlZnQsIGIpKVxuXG4vKipcbiAqIEBzaW5jZSAyLjYuM1xuICovXG5leHBvcnQgY29uc3Qgc2VxdWVuY2U6IFRyYXZlcnNhYmxlMjxVUkk+WydzZXF1ZW5jZSddID0gPEY+KEY6IEFwcGxpY2F0aXZlPEY+KSA9PiA8RSwgQT4oXG4gIHRhOiBUaGVzZTxFLCBIS1Q8RiwgQT4+XG4pOiBIS1Q8RiwgVGhlc2U8RSwgQT4+ID0+IHtcbiAgcmV0dXJuIGlzTGVmdCh0YSkgPyBGLm9mKHRhKSA6IGlzUmlnaHQodGEpID8gRi5tYXAodGEucmlnaHQsIHJpZ2h0KSA6IEYubWFwKHRhLnJpZ2h0LCAoYikgPT4gYm90aCh0YS5sZWZ0LCBiKSlcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgUG9pbnRlZFxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBvZjogPEUgPSBuZXZlciwgQSA9IG5ldmVyPihyaWdodDogQSkgPT4gVGhlc2U8RSwgQT4gPSByaWdodFxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBpbnN0YW5jZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IFVSSSA9ICdUaGVzZSdcblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IHR5cGUgVVJJID0gdHlwZW9mIFVSSVxuXG5kZWNsYXJlIG1vZHVsZSAnLi9IS1QnIHtcbiAgaW50ZXJmYWNlIFVSSXRvS2luZDI8RSwgQT4ge1xuICAgIHJlYWRvbmx5IFtVUkldOiBUaGVzZTxFLCBBPlxuICB9XG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuNy4wXG4gKi9cbmV4cG9ydCBjb25zdCBGdW5jdG9yOiBGdW5jdG9yMjxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcFxufVxuXG4vKipcbiAqIERlcml2YWJsZSBmcm9tIGBGdW5jdG9yYC5cbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZsYXAgPVxuICAvKiNfX1BVUkVfXyovXG4gIGZsYXBfKEZ1bmN0b3IpXG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgUG9pbnRlZDogUG9pbnRlZDI8VVJJPiA9IHtcbiAgVVJJLFxuICBvZlxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjcuMFxuICovXG5leHBvcnQgY29uc3QgQmlmdW5jdG9yOiBCaWZ1bmN0b3IyPFVSST4gPSB7XG4gIFVSSSxcbiAgYmltYXA6IF9iaW1hcCxcbiAgbWFwTGVmdDogX21hcExlZnRcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBGcm9tVGhlc2U6IEZyb21UaGVzZTI8VVJJPiA9IHtcbiAgVVJJLFxuICBmcm9tVGhlc2U6IGlkZW50aXR5XG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuNy4wXG4gKi9cbmV4cG9ydCBjb25zdCBGb2xkYWJsZTogRm9sZGFibGUyPFVSST4gPSB7XG4gIFVSSSxcbiAgcmVkdWNlOiBfcmVkdWNlLFxuICBmb2xkTWFwOiBfZm9sZE1hcCxcbiAgcmVkdWNlUmlnaHQ6IF9yZWR1Y2VSaWdodFxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjcuMFxuICovXG5leHBvcnQgY29uc3QgVHJhdmVyc2FibGU6IFRyYXZlcnNhYmxlMjxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgcmVkdWNlOiBfcmVkdWNlLFxuICBmb2xkTWFwOiBfZm9sZE1hcCxcbiAgcmVkdWNlUmlnaHQ6IF9yZWR1Y2VSaWdodCxcbiAgdHJhdmVyc2U6IF90cmF2ZXJzZSxcbiAgc2VxdWVuY2Vcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBGcm9tRWl0aGVyOiBGcm9tRWl0aGVyMjxVUkk+ID0ge1xuICBVUkksXG4gIGZyb21FaXRoZXI6IGlkZW50aXR5XG59XG5cbi8qKlxuICogQGNhdGVnb3J5IG5hdHVyYWwgdHJhbnNmb3JtYXRpb25zXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBmcm9tT3B0aW9uID1cbiAgLyojX19QVVJFX18qL1xuICBmcm9tT3B0aW9uXyhGcm9tRWl0aGVyKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgZnJvbU9wdGlvbksgPVxuICAvKiNfX1BVUkVfXyovXG4gIGZyb21PcHRpb25LXyhGcm9tRWl0aGVyKVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyB1dGlsc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGVsZW0gPSA8QT4oRTogRXE8QT4pID0+IChhOiBBKSA9PiA8RT4obWE6IFRoZXNlPEUsIEE+KTogYm9vbGVhbiA9PlxuICBpc0xlZnQobWEpID8gZmFsc2UgOiBFLmVxdWFscyhhLCBtYS5yaWdodClcblxuLyoqXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBleGlzdHMgPSA8QT4ocHJlZGljYXRlOiBQcmVkaWNhdGU8QT4pID0+IDxFPihtYTogVGhlc2U8RSwgQT4pOiBib29sZWFuID0+XG4gIGlzTGVmdChtYSkgPyBmYWxzZSA6IHByZWRpY2F0ZShtYS5yaWdodClcblxuLyoqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgdG9UdXBsZTIsIGxlZnQsIHJpZ2h0LCBib3RoIH0gZnJvbSAnZnAtdHMvVGhlc2UnXG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbCh0b1R1cGxlMigoKSA9PiAnYScsICgpID0+IDEpKGxlZnQoJ2InKSksIFsnYicsIDFdKVxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbCh0b1R1cGxlMigoKSA9PiAnYScsICgpID0+IDEpKHJpZ2h0KDIpKSwgWydhJywgMl0pXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKHRvVHVwbGUyKCgpID0+ICdhJywgKCkgPT4gMSkoYm90aCgnYicsIDIpKSwgWydiJywgMl0pXG4gKlxuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgdG9UdXBsZTIgPSA8RSwgQT4oZTogTGF6eTxFPiwgYTogTGF6eTxBPikgPT4gKGZhOiBUaGVzZTxFLCBBPik6IHJlYWRvbmx5IFtFLCBBXSA9PlxuICBpc0xlZnQoZmEpID8gW2ZhLmxlZnQsIGEoKV0gOiBpc1JpZ2h0KGZhKSA/IFtlKCksIGZhLnJpZ2h0XSA6IFtmYS5sZWZ0LCBmYS5yaWdodF1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gZGVwcmVjYXRlZFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIFVzZSBbYHRvVHVwbGUyYF0oI3RvdHVwbGUyKSBpbnN0ZWFkLlxuICpcbiAqIEBzaW5jZSAyLjAuMFxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IHRvVHVwbGUgPSA8RSwgQT4oZTogRSwgYTogQSk6ICgoZmE6IFRoZXNlPEUsIEE+KSA9PiBbRSwgQV0pID0+XG4gIHRvVHVwbGUyKFxuICAgICgpID0+IGUsXG4gICAgKCkgPT4gYVxuICApIGFzIGFueVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBzZXF1ZW5jZSBUXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgQXBUOiBUaGVzZTxuZXZlciwgcmVhZG9ubHkgW10+ID1cbiAgLyojX19QVVJFX18qL1xuICBvZihfLmVtcHR5UmVhZG9ubHlBcnJheSlcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gYXJyYXkgdXRpbHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBFcXVpdmFsZW50IHRvIGBSZWFkb25seU5vbkVtcHR5QXJyYXkjdHJhdmVyc2VXaXRoSW5kZXgoZ2V0QXBwbGljYXRpdmUoUykpYC5cbiAqXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCB0cmF2ZXJzZVJlYWRvbmx5Tm9uRW1wdHlBcnJheVdpdGhJbmRleCA9IDxFPihTOiBTZW1pZ3JvdXA8RT4pID0+IDxBLCBCPihcbiAgZjogKGluZGV4OiBudW1iZXIsIGE6IEEpID0+IFRoZXNlPEUsIEI+XG4pID0+IChhczogUmVhZG9ubHlOb25FbXB0eUFycmF5PEE+KTogVGhlc2U8RSwgUmVhZG9ubHlOb25FbXB0eUFycmF5PEI+PiA9PiB7XG4gIGxldCBlOiBPcHRpb248RT4gPSBfLm5vbmVcbiAgY29uc3QgdCA9IGYoMCwgXy5oZWFkKGFzKSlcbiAgaWYgKGlzTGVmdCh0KSkge1xuICAgIHJldHVybiB0XG4gIH1cbiAgaWYgKGlzQm90aCh0KSkge1xuICAgIGUgPSBfLnNvbWUodC5sZWZ0KVxuICB9XG4gIGNvbnN0IG91dDogTm9uRW1wdHlBcnJheTxCPiA9IFt0LnJpZ2h0XVxuICBmb3IgKGxldCBpID0gMTsgaSA8IGFzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgdCA9IGYoaSwgYXNbaV0pXG4gICAgaWYgKGlzTGVmdCh0KSkge1xuICAgICAgcmV0dXJuIHRcbiAgICB9XG4gICAgaWYgKGlzQm90aCh0KSkge1xuICAgICAgZSA9IF8uaXNOb25lKGUpID8gXy5zb21lKHQubGVmdCkgOiBfLnNvbWUoUy5jb25jYXQoZS52YWx1ZSwgdC5sZWZ0KSlcbiAgICB9XG4gICAgb3V0LnB1c2godC5yaWdodClcbiAgfVxuICByZXR1cm4gXy5pc05vbmUoZSkgPyByaWdodChvdXQpIDogYm90aChlLnZhbHVlLCBvdXQpXG59XG5cbi8qKlxuICogRXF1aXZhbGVudCB0byBgUmVhZG9ubHlBcnJheSN0cmF2ZXJzZVdpdGhJbmRleChnZXRBcHBsaWNhdGl2ZShTKSlgLlxuICpcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHRyYXZlcnNlUmVhZG9ubHlBcnJheVdpdGhJbmRleCA9IDxFPihTOiBTZW1pZ3JvdXA8RT4pID0+IDxBLCBCPihcbiAgZjogKGluZGV4OiBudW1iZXIsIGE6IEEpID0+IFRoZXNlPEUsIEI+XG4pOiAoKGFzOiBSZWFkb25seUFycmF5PEE+KSA9PiBUaGVzZTxFLCBSZWFkb25seUFycmF5PEI+PikgPT4ge1xuICBjb25zdCBnID0gdHJhdmVyc2VSZWFkb25seU5vbkVtcHR5QXJyYXlXaXRoSW5kZXgoUykoZilcbiAgcmV0dXJuIChhcykgPT4gKF8uaXNOb25FbXB0eShhcykgPyBnKGFzKSA6IEFwVClcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gZGVwcmVjYXRlZFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIFVzZSBzbWFsbCwgc3BlY2lmaWMgaW5zdGFuY2VzIGluc3RlYWQuXG4gKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMC4wXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgY29uc3QgdGhlc2U6IEZ1bmN0b3IyPFVSST4gJiBCaWZ1bmN0b3IyPFVSST4gJiBGb2xkYWJsZTI8VVJJPiAmIFRyYXZlcnNhYmxlMjxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgYmltYXA6IF9iaW1hcCxcbiAgbWFwTGVmdDogX21hcExlZnQsXG4gIHJlZHVjZTogX3JlZHVjZSxcbiAgZm9sZE1hcDogX2ZvbGRNYXAsXG4gIHJlZHVjZVJpZ2h0OiBfcmVkdWNlUmlnaHQsXG4gIHRyYXZlcnNlOiBfdHJhdmVyc2UsXG4gIHNlcXVlbmNlXG59XG4iXX0=