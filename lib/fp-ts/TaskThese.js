"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.functorTaskThese = exports.fromTheseK = exports.fromThese = exports.fromTaskK = exports.fromTask = exports.fromPredicate = exports.fromOptionK = exports.fromOption = exports.fromIOK = exports.fromIOEither = exports.fromIO = exports.fromEither = exports.foldW = exports.fold = exports.flap = exports.both = exports.bimap = exports.bifunctorTaskThese = exports.URI = exports.Pointed = exports.Functor = exports.FromThese = exports.FromTask = exports.FromIO = exports.FromEither = exports.Bifunctor = exports.ApT = void 0;
exports.getApplicative = getApplicative;
exports.getApply = void 0;
exports.getChain = getChain;
exports.getMonad = getMonad;
exports.traverseReadonlyNonEmptyArrayWithIndexSeq = exports.traverseReadonlyNonEmptyArrayWithIndex = exports.traverseReadonlyArrayWithIndexSeq = exports.traverseReadonlyArrayWithIndex = exports.toTuple2 = exports.toTuple = exports.taskThese = exports.swap = exports.rightTask = exports.rightIO = exports.right = exports.of = exports.matchW = exports.matchEW = exports.matchE = exports.match = exports.mapLeft = exports.map = exports.leftTask = exports.leftIO = exports.left = exports.getSemigroup = void 0;

var _Apply = require("./Apply");

var _FromEither = require("./FromEither");

var _FromIO = require("./FromIO");

var _FromTask = require("./FromTask");

var _FromThese = require("./FromThese");

var _function = require("./function");

var _Functor = require("./Functor");

var T = _interopRequireWildcard(require("./Task"));

var TH = _interopRequireWildcard(require("./These"));

var TT = _interopRequireWildcard(require("./TheseT"));

var _ = _interopRequireWildcard(require("./internal"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @since 2.4.0
 */
var These = TH.These;
var Task = T.Task;

/**
 * @category constructors
 * @since 2.4.0
 */
var left = /*#__PURE__*/TT.left(T.Pointed);
/**
 * @category constructors
 * @since 2.4.0
 */

exports.left = left;
var right = /*#__PURE__*/TT.right(T.Pointed);
/**
 * @category constructors
 * @since 2.4.0
 */

exports.right = right;
var both = /*#__PURE__*/TT.both(T.Pointed);
/**
 * @category constructors
 * @since 2.4.0
 */

exports.both = both;
var rightTask = /*#__PURE__*/TT.rightF(T.Functor);
/**
 * @category constructors
 * @since 2.4.0
 */

exports.rightTask = rightTask;
var leftTask = /*#__PURE__*/TT.leftF(T.Functor);
/**
 * @category constructors
 * @since 2.4.0
 */

exports.leftTask = leftTask;
var rightIO = /*#__PURE__*/(0, _function.flow)(T.fromIO, rightTask);
/**
 * @category constructors
 * @since 2.4.0
 */

exports.rightIO = rightIO;
var leftIO = /*#__PURE__*/(0, _function.flow)(T.fromIO, leftTask); // -------------------------------------------------------------------------------------
// natural transformations
// -------------------------------------------------------------------------------------

/**
 * @category natural transformations
 * @since 2.10.0
 */

exports.leftIO = leftIO;
var fromEither = T.of;
/**
 * @category natural transformations
 * @since 2.11.0
 */

exports.fromEither = fromEither;
var fromThese = T.of;
/**
 * @category natural transformations
 * @since 2.7.0
 */

exports.fromThese = fromThese;
var fromIO = rightIO;
/**
 * @category natural transformations
 * @since 2.4.0
 */

exports.fromIO = fromIO;
var fromIOEither = /*#__PURE__*/T.fromIO;
/**
 * @category natural transformations
 * @since 2.7.0
 */

exports.fromIOEither = fromIOEither;
var fromTask = rightTask; // -------------------------------------------------------------------------------------
// destructors
// -------------------------------------------------------------------------------------

/**
 * @category destructors
 * @since 2.10.0
 */

exports.fromTask = fromTask;
var match = /*#__PURE__*/TT.match(T.Functor);
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
var matchE = /*#__PURE__*/TT.matchE(T.Monad);
/**
 * Alias of [`matchE`](#matche).
 *
 * @category destructors
 * @since 2.4.0
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
var matchEW = fold;
/**
 * Alias of [`matchEW`](#matchew).
 *
 * @category destructors
 * @since 2.10.0
 */

exports.matchEW = matchEW;
var foldW = matchEW; // -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------

/**
 * @category combinators
 * @since 2.4.0
 */

exports.foldW = foldW;
var swap = /*#__PURE__*/TT.swap(T.Functor); // -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------

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
}; // -------------------------------------------------------------------------------------
// type class members
// -------------------------------------------------------------------------------------

/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent some computational context.
 *
 * @category Functor
 * @since 2.4.0
 */


var map = /*#__PURE__*/TT.map(T.Functor);
/**
 * Map a pair of functions over the two type arguments of the bifunctor.
 *
 * @category Bifunctor
 * @since 2.4.0
 */

exports.map = map;
var bimap = /*#__PURE__*/TT.bimap(T.Functor);
/**
 * Map a function over the first type argument of a bifunctor.
 *
 * @category Bifunctor
 * @since 2.4.0
 */

exports.bimap = bimap;
var mapLeft = /*#__PURE__*/TT.mapLeft(T.Functor);
/**
 * @category Pointed
 * @since 2.7.0
 */

exports.mapLeft = mapLeft;
var of = right; // -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------

/**
 * @category instances
 * @since 2.4.0
 */

exports.of = of;
var URI = 'TaskThese';
/**
 * @category instances
 * @since 2.4.0
 */

exports.URI = URI;

/**
 * @category instances
 * @since 2.10.0
 */
var getApply = function getApply(A, S) {
  var _ap = TT.ap(A, S);

  return {
    URI: URI,
    _E: undefined,
    map: _map,
    ap: function ap(fab, fa) {
      return (0, _function.pipe)(fab, _ap(fa));
    }
  };
};
/**
 * @category instances
 * @since 2.7.0
 */


exports.getApply = getApply;

function getApplicative(A, S) {
  var _getApply = getApply(A, S),
      ap = _getApply.ap;

  return {
    URI: URI,
    _E: undefined,
    map: _map,
    ap: ap,
    of: of
  };
}
/**
 * @category instances
 * @since 2.10.0
 */


function getChain(S) {
  var A = getApply(T.ApplicativePar, S);

  var _chain = TT.chain(T.Monad, S);

  return {
    URI: URI,
    _E: undefined,
    map: _map,
    ap: A.ap,
    chain: function chain(ma, f) {
      return (0, _function.pipe)(ma, _chain(f));
    }
  };
}
/**
 * @category instances
 * @since 2.4.0
 */


function getMonad(S) {
  var A = getApplicative(T.ApplicativePar, S);
  var C = getChain(S);
  return {
    URI: URI,
    _E: undefined,
    map: _map,
    ap: A.ap,
    of: of,
    chain: C.chain,
    fromIO: fromIO,
    fromTask: fromTask
  };
}
/**
 * @category instances
 * @since 2.10.0
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
var FromEither = {
  URI: URI,
  fromEither: fromEither
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
var fromOptionK = /*#__PURE__*/(0, _FromEither.fromOptionK)(FromEither);
/**
 * @category constructors
 * @since 2.10.0
 */

exports.fromOptionK = fromOptionK;
var fromPredicate = /*#__PURE__*/(0, _FromEither.fromPredicate)(FromEither);
/**
 * @category instances
 * @since 2.11.0
 */

exports.fromPredicate = fromPredicate;
var FromThese = {
  URI: URI,
  fromThese: fromThese
};
/**
 * @category combinators
 * @since 2.11.0
 */

exports.FromThese = FromThese;
var fromTheseK = /*#__PURE__*/(0, _FromThese.fromTheseK)(FromThese);
/**
 * @category instances
 * @since 2.10.0
 */

exports.fromTheseK = fromTheseK;
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
 * @category instances
 * @since 2.10.0
 */

exports.fromIOK = fromIOK;
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
var fromTaskK = /*#__PURE__*/(0, _FromTask.fromTaskK)(FromTask); // -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------

/**
 * @since 2.10.0
 */

exports.fromTaskK = fromTaskK;
var toTuple2 = /*#__PURE__*/TT.toTuple2(T.Functor); // -------------------------------------------------------------------------------------
// sequence T
// -------------------------------------------------------------------------------------

/**
 * @since 2.11.0
 */

exports.toTuple2 = toTuple2;
var ApT = /*#__PURE__*/of(_.emptyReadonlyArray); // -------------------------------------------------------------------------------------
// array utils
// -------------------------------------------------------------------------------------

/**
 * Equivalent to `ReadonlyNonEmptyArray#traverseWithIndex(getApplicative(T.ApplicativePar, S))`.
 *
 * @since 2.11.0
 */

exports.ApT = ApT;

var traverseReadonlyNonEmptyArrayWithIndex = function traverseReadonlyNonEmptyArrayWithIndex(S) {
  var g = TH.traverseReadonlyNonEmptyArrayWithIndex(S);
  return function (f) {
    return (0, _function.flow)(T.traverseReadonlyNonEmptyArrayWithIndex(f), T.map(g(_function.SK)));
  };
};
/**
 * Equivalent to `ReadonlyArray#traverseWithIndex(getApplicative(T.ApplicativePar, S))`.
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
};
/**
 * Equivalent to `ReadonlyNonEmptyArray#traverseWithIndex(getApplicative(T.ApplicativeSeq, S))`.
 *
 * @since 2.11.0
 */


exports.traverseReadonlyArrayWithIndex = traverseReadonlyArrayWithIndex;

var traverseReadonlyNonEmptyArrayWithIndexSeq = function traverseReadonlyNonEmptyArrayWithIndexSeq(S) {
  return function (f) {
    return function (as) {
      return function () {
        return _.tail(as).reduce(function (acc, a, i) {
          return acc.then(function (ebs) {
            return TH.isLeft(ebs) ? acc : f(i + 1, a)().then(function (eb) {
              if (TH.isLeft(eb)) {
                return eb;
              }

              if (TH.isBoth(eb)) {
                var _right = ebs.right;

                _right.push(eb.right);

                return TH.isBoth(ebs) ? TH.both(S.concat(ebs.left, eb.left), _right) : TH.both(eb.left, _right);
              }

              ebs.right.push(eb.right);
              return ebs;
            });
          });
        }, f(0, _.head(as))().then(TH.map(_.singleton)));
      };
    };
  };
};
/**
 * Equivalent to `ReadonlyArray#traverseWithIndex(getApplicative(T.ApplicativeSeq, S))`.
 *
 * @since 2.11.0
 */


exports.traverseReadonlyNonEmptyArrayWithIndexSeq = traverseReadonlyNonEmptyArrayWithIndexSeq;

var traverseReadonlyArrayWithIndexSeq = function traverseReadonlyArrayWithIndexSeq(S) {
  return function (f) {
    var g = traverseReadonlyNonEmptyArrayWithIndexSeq(S)(f);
    return function (as) {
      return _.isNonEmpty(as) ? g(as) : ApT;
    };
  };
}; // -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------

/**
 * Use [`Functor`](#functor) instead.
 *
 * @category instances
 * @since 2.7.0
 * @deprecated
 */


exports.traverseReadonlyArrayWithIndexSeq = traverseReadonlyArrayWithIndexSeq;
var functorTaskThese = {
  URI: URI,
  map: _map
};
/**
 * Use [`Bifunctor`](#bifunctor) instead.
 *
 * @category instances
 * @since 2.7.0
 * @deprecated
 */

exports.functorTaskThese = functorTaskThese;
var bifunctorTaskThese = {
  URI: URI,
  bimap: _bimap,
  mapLeft: _mapLeft
};
/**
 * Use [`toTuple2`](#totuple2) instead.
 *
 * @since 2.4.0
 * @deprecated
 */

exports.bifunctorTaskThese = bifunctorTaskThese;

var toTuple = function toTuple(e, a) {
  return toTuple2(function () {
    return e;
  }, function () {
    return a;
  });
};
/**
 * Use small, specific instances instead.
 *
 * @category instances
 * @since 2.4.0
 * @deprecated
 */


exports.toTuple = toTuple;
var taskThese = {
  URI: URI,
  map: _map,
  bimap: _bimap,
  mapLeft: _mapLeft
};
/**
 * Use [`getApplySemigroup`](./Apply.ts.html#getapplysemigroup) instead.
 *
 * @category instances
 * @since 2.4.0
 * @deprecated
 */

exports.taskThese = taskThese;

var getSemigroup = function getSemigroup(SE, SA) {
  return (0, _Apply.getApplySemigroup)(T.ApplySeq)(TH.getSemigroup(SE, SA));
};

exports.getSemigroup = getSemigroup;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mcC10cy9UYXNrVGhlc2UudHMiXSwibmFtZXMiOlsiVGhlc2UiLCJUSCIsIlRhc2siLCJUIiwibGVmdCIsIlRUIiwiUG9pbnRlZCIsInJpZ2h0IiwiYm90aCIsInJpZ2h0VGFzayIsInJpZ2h0RiIsIkZ1bmN0b3IiLCJsZWZ0VGFzayIsImxlZnRGIiwicmlnaHRJTyIsImZyb21JTyIsImxlZnRJTyIsImZyb21FaXRoZXIiLCJvZiIsImZyb21UaGVzZSIsImZyb21JT0VpdGhlciIsImZyb21UYXNrIiwibWF0Y2giLCJtYXRjaFciLCJtYXRjaEUiLCJNb25hZCIsImZvbGQiLCJtYXRjaEVXIiwiZm9sZFciLCJzd2FwIiwiX21hcCIsImZhIiwiZiIsIm1hcCIsIl9iaW1hcCIsImciLCJiaW1hcCIsIl9tYXBMZWZ0IiwibWFwTGVmdCIsIlVSSSIsImdldEFwcGx5IiwiQSIsIlMiLCJhcCIsIl9FIiwidW5kZWZpbmVkIiwiZmFiIiwiZ2V0QXBwbGljYXRpdmUiLCJnZXRDaGFpbiIsIkFwcGxpY2F0aXZlUGFyIiwiY2hhaW4iLCJtYSIsImdldE1vbmFkIiwiQyIsImZsYXAiLCJCaWZ1bmN0b3IiLCJGcm9tRWl0aGVyIiwiZnJvbU9wdGlvbiIsImZyb21PcHRpb25LIiwiZnJvbVByZWRpY2F0ZSIsIkZyb21UaGVzZSIsImZyb21UaGVzZUsiLCJGcm9tSU8iLCJmcm9tSU9LIiwiRnJvbVRhc2siLCJmcm9tVGFza0siLCJ0b1R1cGxlMiIsIkFwVCIsIl8iLCJlbXB0eVJlYWRvbmx5QXJyYXkiLCJ0cmF2ZXJzZVJlYWRvbmx5Tm9uRW1wdHlBcnJheVdpdGhJbmRleCIsIlNLIiwidHJhdmVyc2VSZWFkb25seUFycmF5V2l0aEluZGV4IiwiYXMiLCJpc05vbkVtcHR5IiwidHJhdmVyc2VSZWFkb25seU5vbkVtcHR5QXJyYXlXaXRoSW5kZXhTZXEiLCJ0YWlsIiwicmVkdWNlIiwiYWNjIiwiYSIsImkiLCJ0aGVuIiwiZWJzIiwiaXNMZWZ0IiwiZWIiLCJpc0JvdGgiLCJwdXNoIiwiY29uY2F0IiwiaGVhZCIsInNpbmdsZXRvbiIsInRyYXZlcnNlUmVhZG9ubHlBcnJheVdpdGhJbmRleFNlcSIsImZ1bmN0b3JUYXNrVGhlc2UiLCJiaWZ1bmN0b3JUYXNrVGhlc2UiLCJ0b1R1cGxlIiwiZSIsInRhc2tUaGVzZSIsImdldFNlbWlncm91cCIsIlNFIiwiU0EiLCJBcHBseVNlcSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFJQTs7QUFHQTs7QUFNQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFTQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0FBN0JBO0FBQ0E7QUFDQTtJQTZCT0EsSyxHQUFRQyxFLENBQUdELEs7SUFDWEUsSSxHQUFPQyxDLENBQUVELEk7O0FBYWhCO0FBQ0E7QUFDQTtBQUNBO0FBQ08sSUFBTUUsSUFBcUQsR0FDaEUsYUFDQUMsRUFBRSxDQUFDRCxJQUFILENBQVFELENBQUMsQ0FBQ0csT0FBVixDQUZLO0FBSVA7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLElBQU1DLEtBQXNELEdBQ2pFLGFBQ0FGLEVBQUUsQ0FBQ0UsS0FBSCxDQUFTSixDQUFDLENBQUNHLE9BQVgsQ0FGSztBQUlQO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxJQUFNRSxJQUEyQyxHQUN0RCxhQUNBSCxFQUFFLENBQUNHLElBQUgsQ0FBUUwsQ0FBQyxDQUFDRyxPQUFWLENBRks7QUFJUDtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTUcsU0FBaUUsR0FDNUUsYUFDQUosRUFBRSxDQUFDSyxNQUFILENBQVVQLENBQUMsQ0FBQ1EsT0FBWixDQUZLO0FBSVA7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLElBQU1DLFFBQWdFLEdBQzNFLGFBQ0FQLEVBQUUsQ0FBQ1EsS0FBSCxDQUFTVixDQUFDLENBQUNRLE9BQVgsQ0FGSztBQUlQO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxJQUFNRyxPQUE2RCxHQUN4RSxhQUNBLG9CQUFLWCxDQUFDLENBQUNZLE1BQVAsRUFBZU4sU0FBZixDQUZL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QUFHO0FBQzdDcEQsRUFBQUEsR0FBRyxFQUFIQSxHQUQ2QztBQUU3Q04sRUFBQUEsR0FBRyxFQUFFSDtBQUZ3QyxDQUF4QztBQUtQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxJQUFNOEQsa0JBQW1DLEdBQUc7QUFDakRyRCxFQUFBQSxHQUFHLEVBQUhBLEdBRGlEO0FBRWpESCxFQUFBQSxLQUFLLEVBQUVGLE1BRjBDO0FBR2pESSxFQUFBQSxPQUFPLEVBQUVEO0FBSHdDLENBQTVDO0FBTVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBQ08sSUFBTXdELE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQU9DLENBQVAsRUFBYWYsQ0FBYjtBQUFBLFNBQ3JCYixRQUFRLENBQ047QUFBQSxXQUFNNEIsQ0FBTjtBQUFBLEdBRE0sRUFFTjtBQUFBLFdBQU1mLENBQU47QUFBQSxHQUZNLENBRGE7QUFBQSxDQUFoQjtBQU1QO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBQ08sSUFBTWdCLFNBQTBDLEdBQUc7QUFDeER4RCxFQUFBQSxHQUFHLEVBQUhBLEdBRHdEO0FBRXhETixFQUFBQSxHQUFHLEVBQUVILElBRm1EO0FBR3hETSxFQUFBQSxLQUFLLEVBQUVGLE1BSGlEO0FBSXhESSxFQUFBQSxPQUFPLEVBQUVEO0FBSitDLENBQW5EO0FBT1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFDTyxJQUFNMkQsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBT0MsRUFBUCxFQUF5QkMsRUFBekI7QUFBQSxTQUMxQiw4QkFBa0IvRixDQUFDLENBQUNnRyxRQUFwQixFQUE4QmxHLEVBQUUsQ0FBQytGLFlBQUgsQ0FBZ0JDLEVBQWhCLEVBQW9CQyxFQUFwQixDQUE5QixDQUQwQjtBQUFBLENBQXJCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAc2luY2UgMi40LjBcbiAqL1xuaW1wb3J0IHsgQXBwbGljYXRpdmUyQyB9IGZyb20gJy4vQXBwbGljYXRpdmUnXG5pbXBvcnQgeyBBcHBseTEsIEFwcGx5MkMsIGdldEFwcGx5U2VtaWdyb3VwIH0gZnJvbSAnLi9BcHBseSdcbmltcG9ydCB7IEJpZnVuY3RvcjIgfSBmcm9tICcuL0JpZnVuY3RvcidcbmltcG9ydCB7IENoYWluMkMgfSBmcm9tICcuL0NoYWluJ1xuaW1wb3J0IHtcbiAgRnJvbUVpdGhlcjIsXG4gIGZyb21PcHRpb24gYXMgZnJvbU9wdGlvbl8sXG4gIGZyb21PcHRpb25LIGFzIGZyb21PcHRpb25LXyxcbiAgZnJvbVByZWRpY2F0ZSBhcyBmcm9tUHJlZGljYXRlX1xufSBmcm9tICcuL0Zyb21FaXRoZXInXG5pbXBvcnQgeyBGcm9tSU8yLCBmcm9tSU9LIGFzIGZyb21JT0tfIH0gZnJvbSAnLi9Gcm9tSU8nXG5pbXBvcnQgeyBGcm9tVGFzazIsIGZyb21UYXNrSyBhcyBmcm9tVGFza0tfIH0gZnJvbSAnLi9Gcm9tVGFzaydcbmltcG9ydCB7IEZyb21UaGVzZTIsIGZyb21UaGVzZUsgYXMgZnJvbVRoZXNlS18gfSBmcm9tICcuL0Zyb21UaGVzZSdcbmltcG9ydCB7IGZsb3csIExhenksIHBpcGUsIFNLIH0gZnJvbSAnLi9mdW5jdGlvbidcbmltcG9ydCB7IGZsYXAgYXMgZmxhcF8sIEZ1bmN0b3IyIH0gZnJvbSAnLi9GdW5jdG9yJ1xuaW1wb3J0IHsgSU8gfSBmcm9tICcuL0lPJ1xuaW1wb3J0IHsgVVJJIGFzIElFVVJJIH0gZnJvbSAnLi9JT0VpdGhlcidcbmltcG9ydCB7IE1vbmFkMkMgfSBmcm9tICcuL01vbmFkJ1xuaW1wb3J0IHsgTW9uYWRUYXNrMkMgfSBmcm9tICcuL01vbmFkVGFzaydcbmltcG9ydCB7IE5hdHVyYWxUcmFuc2Zvcm1hdGlvbjIyIH0gZnJvbSAnLi9OYXR1cmFsVHJhbnNmb3JtYXRpb24nXG5pbXBvcnQgeyBQb2ludGVkMiB9IGZyb20gJy4vUG9pbnRlZCdcbmltcG9ydCB7IFJlYWRvbmx5Tm9uRW1wdHlBcnJheSB9IGZyb20gJy4vUmVhZG9ubHlOb25FbXB0eUFycmF5J1xuaW1wb3J0IHsgU2VtaWdyb3VwIH0gZnJvbSAnLi9TZW1pZ3JvdXAnXG5pbXBvcnQgKiBhcyBUIGZyb20gJy4vVGFzaydcbmltcG9ydCAqIGFzIFRIIGZyb20gJy4vVGhlc2UnXG5pbXBvcnQgKiBhcyBUVCBmcm9tICcuL1RoZXNlVCdcbmltcG9ydCAqIGFzIF8gZnJvbSAnLi9pbnRlcm5hbCdcblxuaW1wb3J0IFRoZXNlID0gVEguVGhlc2VcbmltcG9ydCBUYXNrID0gVC5UYXNrXG5pbXBvcnQgeyBOb25FbXB0eUFycmF5IH0gZnJvbSAnLi9Ob25FbXB0eUFycmF5J1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBtb2RlbFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEBjYXRlZ29yeSBtb2RlbFxuICogQHNpbmNlIDIuNC4wXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVGFza1RoZXNlPEUsIEE+IGV4dGVuZHMgVGFzazxUaGVzZTxFLCBBPj4ge31cblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29uc3RydWN0b3JzXG4gKiBAc2luY2UgMi40LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGxlZnQ6IDxFID0gbmV2ZXIsIEEgPSBuZXZlcj4oZTogRSkgPT4gVGFza1RoZXNlPEUsIEE+ID1cbiAgLyojX19QVVJFX18qL1xuICBUVC5sZWZ0KFQuUG9pbnRlZClcblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29uc3RydWN0b3JzXG4gKiBAc2luY2UgMi40LjBcbiAqL1xuZXhwb3J0IGNvbnN0IHJpZ2h0OiA8RSA9IG5ldmVyLCBBID0gbmV2ZXI+KGE6IEEpID0+IFRhc2tUaGVzZTxFLCBBPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgVFQucmlnaHQoVC5Qb2ludGVkKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb25zdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjQuMFxuICovXG5leHBvcnQgY29uc3QgYm90aDogPEUsIEE+KGU6IEUsIGE6IEEpID0+IFRhc2tUaGVzZTxFLCBBPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgVFQuYm90aChULlBvaW50ZWQpXG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbnN0cnVjdG9yc1xuICogQHNpbmNlIDIuNC4wXG4gKi9cbmV4cG9ydCBjb25zdCByaWdodFRhc2s6IDxFID0gbmV2ZXIsIEEgPSBuZXZlcj4obWE6IFRhc2s8QT4pID0+IFRhc2tUaGVzZTxFLCBBPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgVFQucmlnaHRGKFQuRnVuY3RvcilcblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29uc3RydWN0b3JzXG4gKiBAc2luY2UgMi40LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGxlZnRUYXNrOiA8RSA9IG5ldmVyLCBBID0gbmV2ZXI+KG1lOiBUYXNrPEU+KSA9PiBUYXNrVGhlc2U8RSwgQT4gPVxuICAvKiNfX1BVUkVfXyovXG4gIFRULmxlZnRGKFQuRnVuY3RvcilcblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29uc3RydWN0b3JzXG4gKiBAc2luY2UgMi40LjBcbiAqL1xuZXhwb3J0IGNvbnN0IHJpZ2h0SU86IDxFID0gbmV2ZXIsIEEgPSBuZXZlcj4obWE6IElPPEE+KSA9PiBUYXNrVGhlc2U8RSwgQT4gPVxuICAvKiNfX1BVUkVfXyovXG4gIGZsb3coVC5mcm9tSU8sIHJpZ2h0VGFzaylcblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29uc3RydWN0b3JzXG4gKiBAc2luY2UgMi40LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGxlZnRJTzogPEUgPSBuZXZlciwgQSA9IG5ldmVyPihtZTogSU88RT4pID0+IFRhc2tUaGVzZTxFLCBBPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZmxvdyhULmZyb21JTywgbGVmdFRhc2spXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIG5hdHVyYWwgdHJhbnNmb3JtYXRpb25zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQGNhdGVnb3J5IG5hdHVyYWwgdHJhbnNmb3JtYXRpb25zXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBmcm9tRWl0aGVyOiBGcm9tRWl0aGVyMjxVUkk+Wydmcm9tRWl0aGVyJ10gPSBULm9mXG5cbi8qKlxuICogQGNhdGVnb3J5IG5hdHVyYWwgdHJhbnNmb3JtYXRpb25zXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBmcm9tVGhlc2U6IEZyb21UaGVzZTI8VVJJPlsnZnJvbVRoZXNlJ10gPSBULm9mXG5cbi8qKlxuICogQGNhdGVnb3J5IG5hdHVyYWwgdHJhbnNmb3JtYXRpb25zXG4gKiBAc2luY2UgMi43LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZyb21JTzogRnJvbUlPMjxVUkk+Wydmcm9tSU8nXSA9IHJpZ2h0SU9cblxuLyoqXG4gKiBAY2F0ZWdvcnkgbmF0dXJhbCB0cmFuc2Zvcm1hdGlvbnNcbiAqIEBzaW5jZSAyLjQuMFxuICovXG5leHBvcnQgY29uc3QgZnJvbUlPRWl0aGVyOiBOYXR1cmFsVHJhbnNmb3JtYXRpb24yMjxJRVVSSSwgVVJJPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgVC5mcm9tSU9cblxuLyoqXG4gKiBAY2F0ZWdvcnkgbmF0dXJhbCB0cmFuc2Zvcm1hdGlvbnNcbiAqIEBzaW5jZSAyLjcuMFxuICovXG5leHBvcnQgY29uc3QgZnJvbVRhc2s6IEZyb21UYXNrMjxVUkk+Wydmcm9tVGFzayddID0gcmlnaHRUYXNrXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGRlc3RydWN0b3JzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQGNhdGVnb3J5IGRlc3RydWN0b3JzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBtYXRjaDogPEUsIEIsIEE+KFxuICBvbkxlZnQ6IChlOiBFKSA9PiBCLFxuICBvblJpZ2h0OiAoYTogQSkgPT4gQixcbiAgb25Cb3RoOiAoZTogRSwgYTogQSkgPT4gQlxuKSA9PiAoZmE6IFRhc2tUaGVzZTxFLCBBPikgPT4gVGFzazxCPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgVFQubWF0Y2goVC5GdW5jdG9yKVxuXG4vKipcbiAqIExlc3Mgc3RyaWN0IHZlcnNpb24gb2YgW2BtYXRjaGBdKCNtYXRjaCkuXG4gKlxuICogQGNhdGVnb3J5IGRlc3RydWN0b3JzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBtYXRjaFc6IDxFLCBCLCBBLCBDLCBEPihcbiAgb25MZWZ0OiAoZTogRSkgPT4gQixcbiAgb25SaWdodDogKGE6IEEpID0+IEMsXG4gIG9uQm90aDogKGU6IEUsIGE6IEEpID0+IERcbikgPT4gKG1hOiBUYXNrVGhlc2U8RSwgQT4pID0+IFQuVGFzazxCIHwgQyB8IEQ+ID0gbWF0Y2ggYXMgYW55XG5cbi8qKlxuICogQGNhdGVnb3J5IGRlc3RydWN0b3JzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBtYXRjaEU6IDxFLCBCLCBBPihcbiAgb25MZWZ0OiAoZTogRSkgPT4gVGFzazxCPixcbiAgb25SaWdodDogKGE6IEEpID0+IFRhc2s8Qj4sXG4gIG9uQm90aDogKGU6IEUsIGE6IEEpID0+IFRhc2s8Qj5cbikgPT4gKGZhOiBUYXNrVGhlc2U8RSwgQT4pID0+IFRhc2s8Qj4gPVxuICAvKiNfX1BVUkVfXyovXG4gIFRULm1hdGNoRShULk1vbmFkKVxuXG4vKipcbiAqIEFsaWFzIG9mIFtgbWF0Y2hFYF0oI21hdGNoZSkuXG4gKlxuICogQGNhdGVnb3J5IGRlc3RydWN0b3JzXG4gKiBAc2luY2UgMi40LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZvbGQgPSBtYXRjaEVcblxuLyoqXG4gKiBMZXNzIHN0cmljdCB2ZXJzaW9uIG9mIFtgbWF0Y2hFYF0oI21hdGNoZSkuXG4gKlxuICogQGNhdGVnb3J5IGRlc3RydWN0b3JzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBtYXRjaEVXOiA8RSwgQiwgQSwgQywgRD4oXG4gIG9uTGVmdDogKGU6IEUpID0+IFRhc2s8Qj4sXG4gIG9uUmlnaHQ6IChhOiBBKSA9PiBUYXNrPEM+LFxuICBvbkJvdGg6IChlOiBFLCBhOiBBKSA9PiBUYXNrPEQ+XG4pID0+IChmYTogVGFza1RoZXNlPEUsIEE+KSA9PiBUYXNrPEIgfCBDIHwgRD4gPSBmb2xkIGFzIGFueVxuXG4vKipcbiAqIEFsaWFzIG9mIFtgbWF0Y2hFV2BdKCNtYXRjaGV3KS5cbiAqXG4gKiBAY2F0ZWdvcnkgZGVzdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZvbGRXID0gbWF0Y2hFV1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBjb21iaW5hdG9yc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuNC4wXG4gKi9cbmV4cG9ydCBjb25zdCBzd2FwOiA8RSwgQT4oZmE6IFRhc2tUaGVzZTxFLCBBPikgPT4gVGFza1RoZXNlPEEsIEU+ID1cbiAgLyojX19QVVJFX18qL1xuICBUVC5zd2FwKFQuRnVuY3RvcilcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gbm9uLXBpcGVhYmxlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5jb25zdCBfbWFwOiBGdW5jdG9yMjxVUkk+WydtYXAnXSA9IChmYSwgZikgPT4gcGlwZShmYSwgbWFwKGYpKVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmNvbnN0IF9iaW1hcDogQmlmdW5jdG9yMjxVUkk+WydiaW1hcCddID0gKGZhLCBmLCBnKSA9PiBwaXBlKGZhLCBiaW1hcChmLCBnKSlcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5jb25zdCBfbWFwTGVmdDogQmlmdW5jdG9yMjxVUkk+WydtYXBMZWZ0J10gPSAoZmEsIGYpID0+IHBpcGUoZmEsIG1hcExlZnQoZikpXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIHR5cGUgY2xhc3MgbWVtYmVyc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIGBtYXBgIGNhbiBiZSB1c2VkIHRvIHR1cm4gZnVuY3Rpb25zIGAoYTogQSkgPT4gQmAgaW50byBmdW5jdGlvbnMgYChmYTogRjxBPikgPT4gRjxCPmAgd2hvc2UgYXJndW1lbnQgYW5kIHJldHVybiB0eXBlc1xuICogdXNlIHRoZSB0eXBlIGNvbnN0cnVjdG9yIGBGYCB0byByZXByZXNlbnQgc29tZSBjb21wdXRhdGlvbmFsIGNvbnRleHQuXG4gKlxuICogQGNhdGVnb3J5IEZ1bmN0b3JcbiAqIEBzaW5jZSAyLjQuMFxuICovXG5leHBvcnQgY29uc3QgbWFwOiA8QSwgQj4oZjogKGE6IEEpID0+IEIpID0+IDxFPihmYTogVGFza1RoZXNlPEUsIEE+KSA9PiBUYXNrVGhlc2U8RSwgQj4gPVxuICAvKiNfX1BVUkVfXyovXG4gIFRULm1hcChULkZ1bmN0b3IpXG5cbi8qKlxuICogTWFwIGEgcGFpciBvZiBmdW5jdGlvbnMgb3ZlciB0aGUgdHdvIHR5cGUgYXJndW1lbnRzIG9mIHRoZSBiaWZ1bmN0b3IuXG4gKlxuICogQGNhdGVnb3J5IEJpZnVuY3RvclxuICogQHNpbmNlIDIuNC4wXG4gKi9cbmV4cG9ydCBjb25zdCBiaW1hcDogPEUsIEcsIEEsIEI+KGY6IChlOiBFKSA9PiBHLCBnOiAoYTogQSkgPT4gQikgPT4gKGZhOiBUYXNrVGhlc2U8RSwgQT4pID0+IFRhc2tUaGVzZTxHLCBCPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgVFQuYmltYXAoVC5GdW5jdG9yKVxuXG4vKipcbiAqIE1hcCBhIGZ1bmN0aW9uIG92ZXIgdGhlIGZpcnN0IHR5cGUgYXJndW1lbnQgb2YgYSBiaWZ1bmN0b3IuXG4gKlxuICogQGNhdGVnb3J5IEJpZnVuY3RvclxuICogQHNpbmNlIDIuNC4wXG4gKi9cbmV4cG9ydCBjb25zdCBtYXBMZWZ0OiA8RSwgRz4oZjogKGU6IEUpID0+IEcpID0+IDxBPihmYTogVGFza1RoZXNlPEUsIEE+KSA9PiBUYXNrVGhlc2U8RywgQT4gPVxuICAvKiNfX1BVUkVfXyovXG4gIFRULm1hcExlZnQoVC5GdW5jdG9yKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBQb2ludGVkXG4gKiBAc2luY2UgMi43LjBcbiAqL1xuZXhwb3J0IGNvbnN0IG9mOiA8RSA9IG5ldmVyLCBBID0gbmV2ZXI+KGE6IEEpID0+IFRhc2tUaGVzZTxFLCBBPiA9IHJpZ2h0XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGluc3RhbmNlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjQuMFxuICovXG5leHBvcnQgY29uc3QgVVJJID0gJ1Rhc2tUaGVzZSdcblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi40LjBcbiAqL1xuZXhwb3J0IHR5cGUgVVJJID0gdHlwZW9mIFVSSVxuXG5kZWNsYXJlIG1vZHVsZSAnLi9IS1QnIHtcbiAgaW50ZXJmYWNlIFVSSXRvS2luZDI8RSwgQT4ge1xuICAgIHJlYWRvbmx5IFtVUkldOiBUYXNrVGhlc2U8RSwgQT5cbiAgfVxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGdldEFwcGx5ID0gPEU+KEE6IEFwcGx5MTxULlVSST4sIFM6IFNlbWlncm91cDxFPik6IEFwcGx5MkM8VVJJLCBFPiA9PiB7XG4gIGNvbnN0IGFwID0gVFQuYXAoQSwgUylcbiAgcmV0dXJuIHtcbiAgICBVUkksXG4gICAgX0U6IHVuZGVmaW5lZCBhcyBhbnksXG4gICAgbWFwOiBfbWFwLFxuICAgIGFwOiAoZmFiLCBmYSkgPT4gcGlwZShmYWIsIGFwKGZhKSlcbiAgfVxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjcuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXBwbGljYXRpdmU8RT4oQTogQXBwbHkxPFQuVVJJPiwgUzogU2VtaWdyb3VwPEU+KTogQXBwbGljYXRpdmUyQzxVUkksIEU+IHtcbiAgY29uc3QgeyBhcCB9ID0gZ2V0QXBwbHkoQSwgUylcbiAgcmV0dXJuIHtcbiAgICBVUkksXG4gICAgX0U6IHVuZGVmaW5lZCBhcyBhbnksXG4gICAgbWFwOiBfbWFwLFxuICAgIGFwLFxuICAgIG9mXG4gIH1cbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRDaGFpbjxFPihTOiBTZW1pZ3JvdXA8RT4pOiBDaGFpbjJDPFVSSSwgRT4ge1xuICBjb25zdCBBID0gZ2V0QXBwbHkoVC5BcHBsaWNhdGl2ZVBhciwgUylcbiAgY29uc3QgY2hhaW4gPSBUVC5jaGFpbihULk1vbmFkLCBTKVxuICByZXR1cm4ge1xuICAgIFVSSSxcbiAgICBfRTogdW5kZWZpbmVkIGFzIGFueSxcbiAgICBtYXA6IF9tYXAsXG4gICAgYXA6IEEuYXAsXG4gICAgY2hhaW46IChtYSwgZikgPT4gcGlwZShtYSwgY2hhaW4oZikpXG4gIH1cbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi40LjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldE1vbmFkPEU+KFM6IFNlbWlncm91cDxFPik6IE1vbmFkMkM8VVJJLCBFPiAmIE1vbmFkVGFzazJDPFVSSSwgRT4ge1xuICBjb25zdCBBID0gZ2V0QXBwbGljYXRpdmUoVC5BcHBsaWNhdGl2ZVBhciwgUylcbiAgY29uc3QgQyA9IGdldENoYWluKFMpXG4gIHJldHVybiB7XG4gICAgVVJJLFxuICAgIF9FOiB1bmRlZmluZWQgYXMgYW55LFxuICAgIG1hcDogX21hcCxcbiAgICBhcDogQS5hcCxcbiAgICBvZixcbiAgICBjaGFpbjogQy5jaGFpbixcbiAgICBmcm9tSU8sXG4gICAgZnJvbVRhc2tcbiAgfVxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IEZ1bmN0b3I6IEZ1bmN0b3IyPFVSST4gPSB7XG4gIFVSSSxcbiAgbWFwOiBfbWFwXG59XG5cbi8qKlxuICogRGVyaXZhYmxlIGZyb20gYEZ1bmN0b3JgLlxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgZmxhcCA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZmxhcF8oRnVuY3RvcilcblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBQb2ludGVkOiBQb2ludGVkMjxVUkk+ID0ge1xuICBVUkksXG4gIG9mXG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgQmlmdW5jdG9yOiBCaWZ1bmN0b3IyPFVSST4gPSB7XG4gIFVSSSxcbiAgYmltYXA6IF9iaW1hcCxcbiAgbWFwTGVmdDogX21hcExlZnRcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBGcm9tRWl0aGVyOiBGcm9tRWl0aGVyMjxVUkk+ID0ge1xuICBVUkksXG4gIGZyb21FaXRoZXJcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgbmF0dXJhbCB0cmFuc2Zvcm1hdGlvbnNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZyb21PcHRpb24gPVxuICAvKiNfX1BVUkVfXyovXG4gIGZyb21PcHRpb25fKEZyb21FaXRoZXIpXG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBmcm9tT3B0aW9uSyA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnJvbU9wdGlvbktfKEZyb21FaXRoZXIpXG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbnN0cnVjdG9yc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgZnJvbVByZWRpY2F0ZSA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnJvbVByZWRpY2F0ZV8oRnJvbUVpdGhlcilcblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBGcm9tVGhlc2U6IEZyb21UaGVzZTI8VVJJPiA9IHtcbiAgVVJJLFxuICBmcm9tVGhlc2Vcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZyb21UaGVzZUsgPVxuICAvKiNfX1BVUkVfXyovXG4gIGZyb21UaGVzZUtfKEZyb21UaGVzZSlcblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBGcm9tSU86IEZyb21JTzI8VVJJPiA9IHtcbiAgVVJJLFxuICBmcm9tSU9cbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZyb21JT0sgPVxuICAvKiNfX1BVUkVfXyovXG4gIGZyb21JT0tfKEZyb21JTylcblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBGcm9tVGFzazogRnJvbVRhc2syPFVSST4gPSB7XG4gIFVSSSxcbiAgZnJvbUlPLFxuICBmcm9tVGFza1xufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgZnJvbVRhc2tLID1cbiAgLyojX19QVVJFX18qL1xuICBmcm9tVGFza0tfKEZyb21UYXNrKVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyB1dGlsc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHRvVHVwbGUyOiA8RSwgQT4oZTogTGF6eTxFPiwgYTogTGF6eTxBPikgPT4gKGZhOiBUYXNrVGhlc2U8RSwgQT4pID0+IFRhc2s8cmVhZG9ubHkgW0UsIEFdPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgVFQudG9UdXBsZTIoVC5GdW5jdG9yKVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBzZXF1ZW5jZSBUXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgQXBUOiBUYXNrVGhlc2U8bmV2ZXIsIHJlYWRvbmx5IFtdPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgb2YoXy5lbXB0eVJlYWRvbmx5QXJyYXkpXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGFycmF5IHV0aWxzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogRXF1aXZhbGVudCB0byBgUmVhZG9ubHlOb25FbXB0eUFycmF5I3RyYXZlcnNlV2l0aEluZGV4KGdldEFwcGxpY2F0aXZlKFQuQXBwbGljYXRpdmVQYXIsIFMpKWAuXG4gKlxuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgdHJhdmVyc2VSZWFkb25seU5vbkVtcHR5QXJyYXlXaXRoSW5kZXggPSA8RT4oXG4gIFM6IFNlbWlncm91cDxFPlxuKTogKDxBLCBCPihcbiAgZjogKGluZGV4OiBudW1iZXIsIGE6IEEpID0+IFRhc2tUaGVzZTxFLCBCPlxuKSA9PiAoYXM6IFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxBPikgPT4gVGFza1RoZXNlPEUsIFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxCPj4pID0+IHtcbiAgY29uc3QgZyA9IFRILnRyYXZlcnNlUmVhZG9ubHlOb25FbXB0eUFycmF5V2l0aEluZGV4KFMpXG4gIHJldHVybiAoZikgPT4gZmxvdyhULnRyYXZlcnNlUmVhZG9ubHlOb25FbXB0eUFycmF5V2l0aEluZGV4KGYpLCBULm1hcChnKFNLKSkpXG59XG5cbi8qKlxuICogRXF1aXZhbGVudCB0byBgUmVhZG9ubHlBcnJheSN0cmF2ZXJzZVdpdGhJbmRleChnZXRBcHBsaWNhdGl2ZShULkFwcGxpY2F0aXZlUGFyLCBTKSlgLlxuICpcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHRyYXZlcnNlUmVhZG9ubHlBcnJheVdpdGhJbmRleCA9IDxFPihTOiBTZW1pZ3JvdXA8RT4pID0+IDxBLCBCPihcbiAgZjogKGluZGV4OiBudW1iZXIsIGE6IEEpID0+IFRhc2tUaGVzZTxFLCBCPlxuKTogKChhczogUmVhZG9ubHlBcnJheTxBPikgPT4gVGFza1RoZXNlPEUsIFJlYWRvbmx5QXJyYXk8Qj4+KSA9PiB7XG4gIGNvbnN0IGcgPSB0cmF2ZXJzZVJlYWRvbmx5Tm9uRW1wdHlBcnJheVdpdGhJbmRleChTKShmKVxuICByZXR1cm4gKGFzKSA9PiAoXy5pc05vbkVtcHR5KGFzKSA/IGcoYXMpIDogQXBUKVxufVxuXG4vKipcbiAqIEVxdWl2YWxlbnQgdG8gYFJlYWRvbmx5Tm9uRW1wdHlBcnJheSN0cmF2ZXJzZVdpdGhJbmRleChnZXRBcHBsaWNhdGl2ZShULkFwcGxpY2F0aXZlU2VxLCBTKSlgLlxuICpcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHRyYXZlcnNlUmVhZG9ubHlOb25FbXB0eUFycmF5V2l0aEluZGV4U2VxID0gPEU+KFM6IFNlbWlncm91cDxFPikgPT4gPEEsIEI+KFxuICBmOiAoaW5kZXg6IG51bWJlciwgYTogQSkgPT4gVGFza1RoZXNlPEUsIEI+XG4pID0+IChhczogUmVhZG9ubHlOb25FbXB0eUFycmF5PEE+KTogVGFza1RoZXNlPEUsIFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxCPj4gPT4gKCkgPT5cbiAgXy50YWlsKGFzKS5yZWR1Y2U8UHJvbWlzZTxUaGVzZTxFLCBOb25FbXB0eUFycmF5PEI+Pj4+KFxuICAgIChhY2MsIGEsIGkpID0+XG4gICAgICBhY2MudGhlbigoZWJzKSA9PlxuICAgICAgICBUSC5pc0xlZnQoZWJzKVxuICAgICAgICAgID8gYWNjXG4gICAgICAgICAgOiBmKGkgKyAxLCBhKSgpLnRoZW4oKGViKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChUSC5pc0xlZnQoZWIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGViXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKFRILmlzQm90aChlYikpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByaWdodCA9IGVicy5yaWdodFxuICAgICAgICAgICAgICAgIHJpZ2h0LnB1c2goZWIucmlnaHQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFRILmlzQm90aChlYnMpID8gVEguYm90aChTLmNvbmNhdChlYnMubGVmdCwgZWIubGVmdCksIHJpZ2h0KSA6IFRILmJvdGgoZWIubGVmdCwgcmlnaHQpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWJzLnJpZ2h0LnB1c2goZWIucmlnaHQpXG4gICAgICAgICAgICAgIHJldHVybiBlYnNcbiAgICAgICAgICAgIH0pXG4gICAgICApLFxuICAgIGYoMCwgXy5oZWFkKGFzKSkoKS50aGVuKFRILm1hcChfLnNpbmdsZXRvbikpXG4gIClcblxuLyoqXG4gKiBFcXVpdmFsZW50IHRvIGBSZWFkb25seUFycmF5I3RyYXZlcnNlV2l0aEluZGV4KGdldEFwcGxpY2F0aXZlKFQuQXBwbGljYXRpdmVTZXEsIFMpKWAuXG4gKlxuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgdHJhdmVyc2VSZWFkb25seUFycmF5V2l0aEluZGV4U2VxID0gPEU+KFM6IFNlbWlncm91cDxFPikgPT4gPEEsIEI+KFxuICBmOiAoaW5kZXg6IG51bWJlciwgYTogQSkgPT4gVGFza1RoZXNlPEUsIEI+XG4pOiAoKGFzOiBSZWFkb25seUFycmF5PEE+KSA9PiBUYXNrVGhlc2U8RSwgUmVhZG9ubHlBcnJheTxCPj4pID0+IHtcbiAgY29uc3QgZyA9IHRyYXZlcnNlUmVhZG9ubHlOb25FbXB0eUFycmF5V2l0aEluZGV4U2VxKFMpKGYpXG4gIHJldHVybiAoYXMpID0+IChfLmlzTm9uRW1wdHkoYXMpID8gZyhhcykgOiBBcFQpXG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGRlcHJlY2F0ZWRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBVc2UgW2BGdW5jdG9yYF0oI2Z1bmN0b3IpIGluc3RlYWQuXG4gKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuNy4wXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgY29uc3QgZnVuY3RvclRhc2tUaGVzZTogRnVuY3RvcjI8VVJJPiA9IHtcbiAgVVJJLFxuICBtYXA6IF9tYXBcbn1cblxuLyoqXG4gKiBVc2UgW2BCaWZ1bmN0b3JgXSgjYmlmdW5jdG9yKSBpbnN0ZWFkLlxuICpcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjcuMFxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IGJpZnVuY3RvclRhc2tUaGVzZTogQmlmdW5jdG9yMjxVUkk+ID0ge1xuICBVUkksXG4gIGJpbWFwOiBfYmltYXAsXG4gIG1hcExlZnQ6IF9tYXBMZWZ0XG59XG5cbi8qKlxuICogVXNlIFtgdG9UdXBsZTJgXSgjdG90dXBsZTIpIGluc3RlYWQuXG4gKlxuICogQHNpbmNlIDIuNC4wXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgY29uc3QgdG9UdXBsZSA9IDxFLCBBPihlOiBFLCBhOiBBKTogKChmYTogVGFza1RoZXNlPEUsIEE+KSA9PiBUYXNrPFtFLCBBXT4pID0+XG4gIHRvVHVwbGUyKFxuICAgICgpID0+IGUsXG4gICAgKCkgPT4gYVxuICApIGFzIGFueVxuXG4vKipcbiAqIFVzZSBzbWFsbCwgc3BlY2lmaWMgaW5zdGFuY2VzIGluc3RlYWQuXG4gKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuNC4wXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgY29uc3QgdGFza1RoZXNlOiBGdW5jdG9yMjxVUkk+ICYgQmlmdW5jdG9yMjxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgYmltYXA6IF9iaW1hcCxcbiAgbWFwTGVmdDogX21hcExlZnRcbn1cblxuLyoqXG4gKiBVc2UgW2BnZXRBcHBseVNlbWlncm91cGBdKC4vQXBwbHkudHMuaHRtbCNnZXRhcHBseXNlbWlncm91cCkgaW5zdGVhZC5cbiAqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi40LjBcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRTZW1pZ3JvdXAgPSA8RSwgQT4oU0U6IFNlbWlncm91cDxFPiwgU0E6IFNlbWlncm91cDxBPik6IFNlbWlncm91cDxUYXNrVGhlc2U8RSwgQT4+ID0+XG4gIGdldEFwcGx5U2VtaWdyb3VwKFQuQXBwbHlTZXEpKFRILmdldFNlbWlncm91cChTRSwgU0EpKVxuIl19