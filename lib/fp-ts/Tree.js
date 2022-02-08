"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.chainFirst = exports.chain = exports.bindTo = exports.bind = exports.apSecond = exports.apS = exports.apFirst = exports.ap = exports.URI = exports.Traversable = exports.Pointed = exports.Monad = exports.Functor = exports.Foldable = exports.Do = exports.Comonad = exports.Chain = exports.Apply = exports.Applicative = void 0;
exports.drawForest = drawForest;
exports.drawTree = drawTree;
exports.duplicate = void 0;
exports.elem = elem;
exports.flatten = exports.flap = exports.extract = exports.extend = exports.exists = void 0;
exports.fold = fold;
exports.foldMap = void 0;
exports.getEq = getEq;
exports.getShow = getShow;
exports.make = make;
exports.tree = exports.traverse = exports.sequence = exports.reduceRight = exports.reduce = exports.of = exports.map = void 0;
exports.unfoldForest = unfoldForest;
exports.unfoldForestM = unfoldForestM;
exports.unfoldTree = unfoldTree;
exports.unfoldTreeM = unfoldTreeM;

var _Apply = require("./Apply");

var A = _interopRequireWildcard(require("./Array"));

var _Chain = require("./Chain");

var _Eq = require("./Eq");

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

/**
 * @category constructors
 * @since 2.0.0
 */
function make(value) {
  var forest = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return {
    value: value,
    forest: forest
  };
}
/**
 * @category instances
 * @since 2.0.0
 */


function getShow(S) {
  var show = function show(t) {
    return A.isEmpty(t.forest) ? "make(".concat(S.show(t.value), ")") : "make(".concat(S.show(t.value), ", [").concat(t.forest.map(show).join(', '), "])");
  };

  return {
    show: show
  };
}
/**
 * @category instances
 * @since 2.0.0
 */


function getEq(E) {
  var SA;
  var R = (0, _Eq.fromEquals)(function (x, y) {
    return E.equals(x.value, y.value) && SA.equals(x.forest, y.forest);
  });
  SA = A.getEq(R);
  return R;
}

var draw = function draw(indentation, forest) {
  var r = '';
  var len = forest.length;
  var tree;

  for (var i = 0; i < len; i++) {
    tree = forest[i];
    var isLast = i === len - 1;
    r += indentation + (isLast ? '└' : '├') + '─ ' + tree.value;
    r += draw(indentation + (len > 1 && !isLast ? '│  ' : '   '), tree.forest);
  }

  return r;
};
/**
 * Neat 2-dimensional drawing of a forest
 *
 * @since 2.0.0
 */


function drawForest(forest) {
  return draw('\n', forest);
}
/**
 * Neat 2-dimensional drawing of a tree
 *
 * @example
 * import { make, drawTree } from 'fp-ts/Tree'
 *
 * const fa = make('a', [
 *   make('b'),
 *   make('c'),
 *   make('d', [make('e'), make('f')])
 * ])
 *
 * assert.strictEqual(drawTree(fa), `a
 * ├─ b
 * ├─ c
 * └─ d
 *    ├─ e
 *    └─ f`)
 *
 *
 * @since 2.0.0
 */


function drawTree(tree) {
  return tree.value + drawForest(tree.forest);
}
/**
 * Build a (possibly infinite) tree from a seed value in breadth-first order.
 *
 * @category constructors
 * @since 2.0.0
 */


function unfoldTree(b, f) {
  var _f = f(b),
      _f2 = _slicedToArray(_f, 2),
      a = _f2[0],
      bs = _f2[1];

  return {
    value: a,
    forest: unfoldForest(bs, f)
  };
}
/**
 * Build a (possibly infinite) forest from a list of seed values in breadth-first order.
 *
 * @category constructors
 * @since 2.0.0
 */


function unfoldForest(bs, f) {
  return bs.map(function (b) {
    return unfoldTree(b, f);
  });
}
/**
 * Monadic tree builder, in depth-first order
 *
 * @category constructors
 * @since 2.0.0
 */


function unfoldTreeM(M) {
  var unfoldForestMM = unfoldForestM(M);
  return function (b, f) {
    return M.chain(f(b), function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          a = _ref2[0],
          bs = _ref2[1];

      return M.map(unfoldForestMM(bs, f), function (ts) {
        return {
          value: a,
          forest: ts
        };
      });
    });
  };
}
/**
 * Monadic forest builder, in depth-first order
 *
 * @category constructors
 * @since 2.0.0
 */


function unfoldForestM(M) {
  var traverseM = A.traverse(M);
  return function (bs, f) {
    return (0, _function.pipe)(bs, traverseM(function (b) {
      return unfoldTreeM(M)(b, f);
    }));
  };
}
/**
 * Fold a tree into a "summary" value in depth-first order.
 *
 * For each node in the tree, apply `f` to the `value` and the result of applying `f` to each `forest`.
 *
 * This is also known as the catamorphism on trees.
 *
 * @example
 * import { fold, make } from 'fp-ts/Tree'
 * import { concatAll } from 'fp-ts/Monoid'
 * import { MonoidSum } from 'fp-ts/number'
 *
 * const t = make(1, [make(2), make(3)])
 *
 * const sum = concatAll(MonoidSum)
 *
 * // Sum the values in a tree:
 * assert.deepStrictEqual(fold((a: number, bs: Array<number>) => a + sum(bs))(t), 6)
 *
 * // Find the maximum value in the tree:
 * assert.deepStrictEqual(fold((a: number, bs: Array<number>) => bs.reduce((b, acc) => Math.max(b, acc), a))(t), 3)
 *
 * // Count the number of leaves in the tree:
 * assert.deepStrictEqual(fold((_: number, bs: Array<number>) => (bs.length === 0 ? 1 : sum(bs)))(t), 2)
 *
 * @category destructors
 * @since 2.6.0
 */


function fold(f) {
  var go = function go(tree) {
    return f(tree.value, tree.forest.map(go));
  };

  return go;
} // -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------

/* istanbul ignore next */


var _map = function _map(fa, f) {
  return (0, _function.pipe)(fa, map(f));
};

var _ap = function _ap(fab, fa) {
  return (0, _function.pipe)(fab, chain(function (f) {
    return (0, _function.pipe)(fa, map(f));
  }));
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


var _extend = function _extend(wa, f) {
  return (0, _function.pipe)(wa, extend(f));
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
 * Apply a function to an argument under a type constructor.
 *
 * @category Apply
 * @since 2.0.0
 */


var ap = function ap(fa) {
  return function (fab) {
    return _ap(fab, fa);
  };
};
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation.
 *
 * @category Monad
 * @since 2.0.0
 */


exports.ap = ap;

var chain = function chain(f) {
  return function (ma) {
    var _f3 = f(ma.value),
        value = _f3.value,
        forest = _f3.forest;

    var concat = A.getMonoid().concat;
    return {
      value: value,
      forest: concat(forest, ma.forest.map(chain(f)))
    };
  };
};
/**
 * @category Extend
 * @since 2.0.0
 */


exports.chain = chain;

var extend = function extend(f) {
  return function (wa) {
    return {
      value: f(wa),
      forest: wa.forest.map(extend(f))
    };
  };
};
/**
 * Derivable from `Extend`.
 *
 * @category combinators
 * @since 2.0.0
 */


exports.extend = extend;
var duplicate = /*#__PURE__*/extend(_function.identity);
/**
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.0.0
 */

exports.duplicate = duplicate;
var flatten = /*#__PURE__*/chain(_function.identity);
/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent some computational context.
 *
 * @category Functor
 * @since 2.0.0
 */

exports.flatten = flatten;

var map = function map(f) {
  return function (fa) {
    return {
      value: f(fa.value),
      forest: fa.forest.map(map(f))
    };
  };
};
/**
 * @category Foldable
 * @since 2.0.0
 */


exports.map = map;

var reduce = function reduce(b, f) {
  return function (fa) {
    var r = f(b, fa.value);
    var len = fa.forest.length;

    for (var i = 0; i < len; i++) {
      r = (0, _function.pipe)(fa.forest[i], reduce(r, f));
    }

    return r;
  };
};
/**
 * @category Foldable
 * @since 2.0.0
 */


exports.reduce = reduce;

var foldMap = function foldMap(M) {
  return function (f) {
    return reduce(M.empty, function (acc, a) {
      return M.concat(acc, f(a));
    });
  };
};
/**
 * @category Foldable
 * @since 2.0.0
 */


exports.foldMap = foldMap;

var reduceRight = function reduceRight(b, f) {
  return function (fa) {
    var r = b;
    var len = fa.forest.length;

    for (var i = len - 1; i >= 0; i--) {
      r = (0, _function.pipe)(fa.forest[i], reduceRight(r, f));
    }

    return f(fa.value, r);
  };
};
/**
 * @category Extract
 * @since 2.6.2
 */


exports.reduceRight = reduceRight;

var extract = function extract(wa) {
  return wa.value;
};
/**
 * @since 2.6.3
 */


exports.extract = extract;

var traverse = function traverse(F) {
  var traverseF = A.traverse(F);

  var out = function out(f) {
    return function (ta) {
      return F.ap(F.map(f(ta.value), function (value) {
        return function (forest) {
          return {
            value: value,
            forest: forest
          };
        };
      }), (0, _function.pipe)(ta.forest, traverseF(out(f))));
    };
  };

  return out;
};
/**
 * @since 2.6.3
 */


exports.traverse = traverse;

var sequence = function sequence(F) {
  return traverse(F)(_function.identity);
};
/**
 * @category Pointed
 * @since 2.7.0
 */


exports.sequence = sequence;

var of = function of(a) {
  return make(a);
}; // -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------

/**
 * @category instances
 * @since 2.0.0
 */


exports.of = of;
var URI = 'Tree';
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
 * @category instances
 * @since 2.7.0
 */

exports.chainFirst = chainFirst;
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
 * @since 2.7.0
 */

exports.Traversable = Traversable;
var Comonad = {
  URI: URI,
  map: _map,
  extend: _extend,
  extract: extract
}; // -------------------------------------------------------------------------------------
// do notation
// -------------------------------------------------------------------------------------

/**
 * @since 2.9.0
 */

exports.Comonad = Comonad;
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
// utils
// -------------------------------------------------------------------------------------

/**
 * @since 2.0.0
 */

exports.apS = apS;

function elem(E) {
  var go = function go(a, fa) {
    return E.equals(a, fa.value) || fa.forest.some(function (tree) {
      return go(a, tree);
    });
  };

  return go;
}
/**
 * @since 2.11.0
 */


var exists = function exists(predicate) {
  return function (ma) {
    return predicate(ma.value) || ma.forest.some(exists(predicate));
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


exports.exists = exists;
var tree = {
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
  extract: extract,
  extend: _extend
};
exports.tree = tree;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mcC10cy9UcmVlLnRzIl0sIm5hbWVzIjpbIm1ha2UiLCJ2YWx1ZSIsImZvcmVzdCIsImdldFNob3ciLCJTIiwic2hvdyIsInQiLCJBIiwiaXNFbXB0eSIsIm1hcCIsImpvaW4iLCJnZXRFcSIsIkUiLCJTQSIsIlIiLCJ4IiwieSIsImVxdWFscyIsImRyYXciLCJpbmRlbnRhdGlvbiIsInIiLCJsZW4iLCJsZW5ndGgiLCJ0cmVlIiwiaSIsImlzTGFzdCIsImRyYXdGb3Jlc3QiLCJkcmF3VHJlZSIsInVuZm9sZFRyZWUiLCJiIiwiZiIsImEiLCJicyIsInVuZm9sZEZvcmVzdCIsInVuZm9sZFRyZWVNIiwiTSIsInVuZm9sZEZvcmVzdE1NIiwidW5mb2xkRm9yZXN0TSIsImNoYWluIiwidHMiLCJ0cmF2ZXJzZU0iLCJ0cmF2ZXJzZSIsImZvbGQiLCJnbyIsIl9tYXAiLCJmYSIsIl9hcCIsImZhYiIsIl9jaGFpbiIsIm1hIiwiX3JlZHVjZSIsInJlZHVjZSIsIl9mb2xkTWFwIiwiZm9sZE1hcE0iLCJmb2xkTWFwIiwiX3JlZHVjZVJpZ2h0IiwicmVkdWNlUmlnaHQiLCJfZXh0ZW5kIiwid2EiLCJleHRlbmQiLCJfdHJhdmVyc2UiLCJGIiwidHJhdmVyc2VGIiwidGEiLCJhcCIsImNvbmNhdCIsImdldE1vbm9pZCIsImR1cGxpY2F0ZSIsImlkZW50aXR5IiwiZmxhdHRlbiIsImVtcHR5IiwiYWNjIiwiZXh0cmFjdCIsIm91dCIsInNlcXVlbmNlIiwib2YiLCJVUkkiLCJGdW5jdG9yIiwiZmxhcCIsIlBvaW50ZWQiLCJBcHBseSIsImFwRmlyc3QiLCJhcFNlY29uZCIsIkFwcGxpY2F0aXZlIiwiQ2hhaW4iLCJNb25hZCIsImNoYWluRmlyc3QiLCJGb2xkYWJsZSIsIlRyYXZlcnNhYmxlIiwiQ29tb25hZCIsIkRvIiwiXyIsImVtcHR5UmVjb3JkIiwiYmluZFRvIiwiYmluZCIsImFwUyIsImVsZW0iLCJzb21lIiwiZXhpc3RzIiwicHJlZGljYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFHQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sU0FBU0EsSUFBVCxDQUFpQkMsS0FBakIsRUFBNEQ7QUFBQSxNQUFqQ0MsTUFBaUMsdUVBQWIsRUFBYTtBQUNqRSxTQUFPO0FBQ0xELElBQUFBLEtBQUssRUFBTEEsS0FESztBQUVMQyxJQUFBQSxNQUFNLEVBQU5BO0FBRkssR0FBUDtBQUlEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLFNBQVNDLE9BQVQsQ0FBb0JDLENBQXBCLEVBQStDO0FBQ3BELE1BQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLENBQUQsRUFBd0I7QUFDbkMsV0FBT0MsQ0FBQyxDQUFDQyxPQUFGLENBQVVGLENBQUMsQ0FBQ0osTUFBWixtQkFDS0UsQ0FBQyxDQUFDQyxJQUFGLENBQU9DLENBQUMsQ0FBQ0wsS0FBVCxDQURMLHdCQUVLRyxDQUFDLENBQUNDLElBQUYsQ0FBT0MsQ0FBQyxDQUFDTCxLQUFULENBRkwsZ0JBRTBCSyxDQUFDLENBQUNKLE1BQUYsQ0FBU08sR0FBVCxDQUFhSixJQUFiLEVBQW1CSyxJQUFuQixDQUF3QixJQUF4QixDQUYxQixPQUFQO0FBR0QsR0FKRDs7QUFLQSxTQUFPO0FBQ0xMLElBQUFBLElBQUksRUFBSkE7QUFESyxHQUFQO0FBR0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sU0FBU00sS0FBVCxDQUFrQkMsQ0FBbEIsRUFBeUM7QUFDOUMsTUFBSUMsRUFBSjtBQUNBLE1BQU1DLENBQWMsR0FBRyxvQkFBVyxVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxXQUFVSixDQUFDLENBQUNLLE1BQUYsQ0FBU0YsQ0FBQyxDQUFDZCxLQUFYLEVBQWtCZSxDQUFDLENBQUNmLEtBQXBCLEtBQThCWSxFQUFFLENBQUNJLE1BQUgsQ0FBVUYsQ0FBQyxDQUFDYixNQUFaLEVBQW9CYyxDQUFDLENBQUNkLE1BQXRCLENBQXhDO0FBQUEsR0FBWCxDQUF2QjtBQUNBVyxFQUFBQSxFQUFFLEdBQUdOLENBQUMsQ0FBQ0ksS0FBRixDQUFRRyxDQUFSLENBQUw7QUFDQSxTQUFPQSxDQUFQO0FBQ0Q7O0FBRUQsSUFBTUksSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsV0FBRCxFQUFzQmpCLE1BQXRCLEVBQXlEO0FBQ3BFLE1BQUlrQixDQUFTLEdBQUcsRUFBaEI7QUFDQSxNQUFNQyxHQUFHLEdBQUduQixNQUFNLENBQUNvQixNQUFuQjtBQUNBLE1BQUlDLElBQUo7O0FBQ0EsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSCxHQUFwQixFQUF5QkcsQ0FBQyxFQUExQixFQUE4QjtBQUM1QkQsSUFBQUEsSUFBSSxHQUFHckIsTUFBTSxDQUFDc0IsQ0FBRCxDQUFiO0FBQ0EsUUFBTUMsTUFBTSxHQUFHRCxDQUFDLEtBQUtILEdBQUcsR0FBRyxDQUEzQjtBQUNBRCxJQUFBQSxDQUFDLElBQUlELFdBQVcsSUFBSU0sTUFBTSxHQUFHLEdBQUgsR0FBUyxHQUFuQixDQUFYLEdBQXFDLElBQXJDLEdBQTRDRixJQUFJLENBQUN0QixLQUF0RDtBQUNBbUIsSUFBQUEsQ0FBQyxJQUFJRixJQUFJLENBQUNDLFdBQVcsSUFBSUUsR0FBRyxHQUFHLENBQU4sSUFBVyxDQUFDSSxNQUFaLEdBQXFCLEtBQXJCLEdBQTZCLEtBQWpDLENBQVosRUFBcURGLElBQUksQ0FBQ3JCLE1BQTFELENBQVQ7QUFDRDs7QUFDRCxTQUFPa0IsQ0FBUDtBQUNELENBWEQ7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxTQUFTTSxVQUFULENBQW9CeEIsTUFBcEIsRUFBb0Q7QUFDekQsU0FBT2dCLElBQUksQ0FBQyxJQUFELEVBQU9oQixNQUFQLENBQVg7QUFDRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxTQUFTeUIsUUFBVCxDQUFrQkosSUFBbEIsRUFBOEM7QUFDbkQsU0FBT0EsSUFBSSxDQUFDdEIsS0FBTCxHQUFheUIsVUFBVSxDQUFDSCxJQUFJLENBQUNyQixNQUFOLENBQTlCO0FBQ0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLFNBQVMwQixVQUFULENBQTBCQyxDQUExQixFQUFnQ0MsQ0FBaEMsRUFBcUU7QUFDMUUsV0FBZ0JBLENBQUMsQ0FBQ0QsQ0FBRCxDQUFqQjtBQUFBO0FBQUEsTUFBT0UsQ0FBUDtBQUFBLE1BQVVDLEVBQVY7O0FBQ0EsU0FBTztBQUFFL0IsSUFBQUEsS0FBSyxFQUFFOEIsQ0FBVDtBQUFZN0IsSUFBQUEsTUFBTSxFQUFFK0IsWUFBWSxDQUFDRCxFQUFELEVBQUtGLENBQUw7QUFBaEMsR0FBUDtBQUNEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxTQUFTRyxZQUFULENBQTRCRCxFQUE1QixFQUEwQ0YsQ0FBMUMsRUFBaUY7QUFDdEYsU0FBT0UsRUFBRSxDQUFDdkIsR0FBSCxDQUFPLFVBQUNvQixDQUFEO0FBQUEsV0FBT0QsVUFBVSxDQUFDQyxDQUFELEVBQUlDLENBQUosQ0FBakI7QUFBQSxHQUFQLENBQVA7QUFDRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBb0JPLFNBQVNJLFdBQVQsQ0FBd0JDLENBQXhCLEVBQTZHO0FBQ2xILE1BQU1DLGNBQWMsR0FBR0MsYUFBYSxDQUFDRixDQUFELENBQXBDO0FBQ0EsU0FBTyxVQUFDTixDQUFELEVBQUlDLENBQUo7QUFBQSxXQUFVSyxDQUFDLENBQUNHLEtBQUYsQ0FBUVIsQ0FBQyxDQUFDRCxDQUFELENBQVQsRUFBYztBQUFBO0FBQUEsVUFBRUUsQ0FBRjtBQUFBLFVBQUtDLEVBQUw7O0FBQUEsYUFBYUcsQ0FBQyxDQUFDMUIsR0FBRixDQUFNMkIsY0FBYyxDQUFDSixFQUFELEVBQUtGLENBQUwsQ0FBcEIsRUFBNkIsVUFBQ1MsRUFBRDtBQUFBLGVBQVM7QUFBRXRDLFVBQUFBLEtBQUssRUFBRThCLENBQVQ7QUFBWTdCLFVBQUFBLE1BQU0sRUFBRXFDO0FBQXBCLFNBQVQ7QUFBQSxPQUE3QixDQUFiO0FBQUEsS0FBZCxDQUFWO0FBQUEsR0FBUDtBQUNEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFzQk8sU0FBU0YsYUFBVCxDQUNMRixDQURLLEVBRTBFO0FBQy9FLE1BQU1LLFNBQVMsR0FBR2pDLENBQUMsQ0FBQ2tDLFFBQUYsQ0FBV04sQ0FBWCxDQUFsQjtBQUNBLFNBQU8sVUFBQ0gsRUFBRCxFQUFLRixDQUFMO0FBQUEsV0FDTCxvQkFDRUUsRUFERixFQUVFUSxTQUFTLENBQUMsVUFBQ1gsQ0FBRDtBQUFBLGFBQU9LLFdBQVcsQ0FBQ0MsQ0FBRCxDQUFYLENBQWVOLENBQWYsRUFBa0JDLENBQWxCLENBQVA7QUFBQSxLQUFELENBRlgsQ0FESztBQUFBLEdBQVA7QUFLRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxTQUFTWSxJQUFULENBQW9CWixDQUFwQixFQUF3RTtBQUM3RSxNQUFNYSxFQUFFLEdBQUcsU0FBTEEsRUFBSyxDQUFDcEIsSUFBRDtBQUFBLFdBQXNCTyxDQUFDLENBQUNQLElBQUksQ0FBQ3RCLEtBQU4sRUFBYXNCLElBQUksQ0FBQ3JCLE1BQUwsQ0FBWU8sR0FBWixDQUFnQmtDLEVBQWhCLENBQWIsQ0FBdkI7QUFBQSxHQUFYOztBQUNBLFNBQU9BLEVBQVA7QUFDRCxDLENBRUQ7QUFDQTtBQUNBOztBQUVBOzs7QUFDQSxJQUFNQyxJQUF3QixHQUFHLFNBQTNCQSxJQUEyQixDQUFDQyxFQUFELEVBQUtmLENBQUw7QUFBQSxTQUFXLG9CQUFLZSxFQUFMLEVBQVNwQyxHQUFHLENBQUNxQixDQUFELENBQVosQ0FBWDtBQUFBLENBQWpDOztBQUNBLElBQU1nQixHQUFzQixHQUFHLFNBQXpCQSxHQUF5QixDQUFDQyxHQUFELEVBQU1GLEVBQU47QUFBQSxTQUM3QixvQkFDRUUsR0FERixFQUVFVCxLQUFLLENBQUMsVUFBQ1IsQ0FBRDtBQUFBLFdBQU8sb0JBQUtlLEVBQUwsRUFBU3BDLEdBQUcsQ0FBQ3FCLENBQUQsQ0FBWixDQUFQO0FBQUEsR0FBRCxDQUZQLENBRDZCO0FBQUEsQ0FBL0I7QUFLQTs7O0FBQ0EsSUFBTWtCLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQU9DLEVBQVAsRUFBb0JuQixDQUFwQjtBQUFBLFNBQXNELG9CQUFLbUIsRUFBTCxFQUFTWCxLQUFLLENBQUNSLENBQUQsQ0FBZCxDQUF0RDtBQUFBLENBQWY7QUFDQTs7O0FBQ0EsSUFBTW9CLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQU9MLEVBQVAsRUFBb0JoQixDQUFwQixFQUEwQkMsQ0FBMUI7QUFBQSxTQUFzRCxvQkFBS2UsRUFBTCxFQUFTTSxNQUFNLENBQUN0QixDQUFELEVBQUlDLENBQUosQ0FBZixDQUF0RDtBQUFBLENBQWhCO0FBQ0E7OztBQUNBLElBQU1zQixRQUFtQyxHQUFHLFNBQXRDQSxRQUFzQyxDQUFDakIsQ0FBRCxFQUFPO0FBQ2pELE1BQU1rQixRQUFRLEdBQUdDLE9BQU8sQ0FBQ25CLENBQUQsQ0FBeEI7QUFDQSxTQUFPLFVBQUNVLEVBQUQsRUFBS2YsQ0FBTDtBQUFBLFdBQVcsb0JBQUtlLEVBQUwsRUFBU1EsUUFBUSxDQUFDdkIsQ0FBRCxDQUFqQixDQUFYO0FBQUEsR0FBUDtBQUNELENBSEQ7QUFJQTs7O0FBQ0EsSUFBTXlCLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQU9WLEVBQVAsRUFBb0JoQixDQUFwQixFQUEwQkMsQ0FBMUI7QUFBQSxTQUFzRCxvQkFBS2UsRUFBTCxFQUFTVyxXQUFXLENBQUMzQixDQUFELEVBQUlDLENBQUosQ0FBcEIsQ0FBdEQ7QUFBQSxDQUFyQjtBQUNBOzs7QUFDQSxJQUFNMkIsT0FBK0IsR0FBRyxTQUFsQ0EsT0FBa0MsQ0FBQ0MsRUFBRCxFQUFLNUIsQ0FBTDtBQUFBLFNBQVcsb0JBQUs0QixFQUFMLEVBQVNDLE1BQU0sQ0FBQzdCLENBQUQsQ0FBZixDQUFYO0FBQUEsQ0FBeEM7QUFDQTs7O0FBQ0EsSUFBTThCLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUlDLENBQUosRUFBK0Y7QUFDL0csTUFBTUMsU0FBUyxHQUFHckIsUUFBUSxDQUFDb0IsQ0FBRCxDQUExQjtBQUNBLFNBQU8sVUFBQ0UsRUFBRCxFQUFLakMsQ0FBTDtBQUFBLFdBQVcsb0JBQUtpQyxFQUFMLEVBQVNELFNBQVMsQ0FBQ2hDLENBQUQsQ0FBbEIsQ0FBWDtBQUFBLEdBQVA7QUFDRCxDQUhELEMsQ0FLQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxJQUFNa0MsRUFBOEQsR0FBRyxTQUFqRUEsRUFBaUUsQ0FBQ25CLEVBQUQ7QUFBQSxTQUFRLFVBQUNFLEdBQUQ7QUFBQSxXQUFTRCxHQUFHLENBQUNDLEdBQUQsRUFBTUYsRUFBTixDQUFaO0FBQUEsR0FBUjtBQUFBLENBQXZFO0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNPLElBQU1QLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQU9SLENBQVA7QUFBQSxTQUFnQyxVQUFDbUIsRUFBRCxFQUEwQjtBQUM3RSxjQUEwQm5CLENBQUMsQ0FBQ21CLEVBQUUsQ0FBQ2hELEtBQUosQ0FBM0I7QUFBQSxRQUFRQSxLQUFSLE9BQVFBLEtBQVI7QUFBQSxRQUFlQyxNQUFmLE9BQWVBLE1BQWY7O0FBQ0EsUUFBTStELE1BQU0sR0FBRzFELENBQUMsQ0FBQzJELFNBQUYsR0FBdUJELE1BQXRDO0FBQ0EsV0FBTztBQUNMaEUsTUFBQUEsS0FBSyxFQUFMQSxLQURLO0FBRUxDLE1BQUFBLE1BQU0sRUFBRStELE1BQU0sQ0FBQy9ELE1BQUQsRUFBUytDLEVBQUUsQ0FBQy9DLE1BQUgsQ0FBVU8sR0FBVixDQUFjNkIsS0FBSyxDQUFDUixDQUFELENBQW5CLENBQVQ7QUFGVCxLQUFQO0FBSUQsR0FQb0I7QUFBQSxDQUFkO0FBU1A7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ08sSUFBTTZCLE1BQWlFLEdBQUcsU0FBcEVBLE1BQW9FLENBQUM3QixDQUFEO0FBQUEsU0FBTyxVQUFDNEIsRUFBRDtBQUFBLFdBQVM7QUFDL0Z6RCxNQUFBQSxLQUFLLEVBQUU2QixDQUFDLENBQUM0QixFQUFELENBRHVGO0FBRS9GeEQsTUFBQUEsTUFBTSxFQUFFd0QsRUFBRSxDQUFDeEQsTUFBSCxDQUFVTyxHQUFWLENBQWNrRCxNQUFNLENBQUM3QixDQUFELENBQXBCO0FBRnVGLEtBQVQ7QUFBQSxHQUFQO0FBQUEsQ0FBMUU7QUFLUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFDTyxJQUFNcUMsU0FBNEMsR0FDdkQsYUFDQVIsTUFBTSxDQUFDUyxrQkFBRCxDQUZEO0FBSVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxJQUFNQyxPQUEyQyxHQUN0RCxhQUNBL0IsS0FBSyxDQUFDOEIsa0JBQUQsQ0FGQTtBQUlQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBQ08sSUFBTTNELEdBQXVELEdBQUcsU0FBMURBLEdBQTBELENBQUNxQixDQUFEO0FBQUEsU0FBTyxVQUFDZSxFQUFEO0FBQUEsV0FBUztBQUNyRjVDLE1BQUFBLEtBQUssRUFBRTZCLENBQUMsQ0FBQ2UsRUFBRSxDQUFDNUMsS0FBSixDQUQ2RTtBQUVyRkMsTUFBQUEsTUFBTSxFQUFFMkMsRUFBRSxDQUFDM0MsTUFBSCxDQUFVTyxHQUFWLENBQWNBLEdBQUcsQ0FBQ3FCLENBQUQsQ0FBakI7QUFGNkUsS0FBVDtBQUFBLEdBQVA7QUFBQSxDQUFoRTtBQUtQO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNPLElBQU1xQixNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFPdEIsQ0FBUCxFQUFhQyxDQUFiO0FBQUEsU0FBc0MsVUFBQ2UsRUFBRCxFQUFvQjtBQUM5RSxRQUFJekIsQ0FBSSxHQUFHVSxDQUFDLENBQUNELENBQUQsRUFBSWdCLEVBQUUsQ0FBQzVDLEtBQVAsQ0FBWjtBQUNBLFFBQU1vQixHQUFHLEdBQUd3QixFQUFFLENBQUMzQyxNQUFILENBQVVvQixNQUF0Qjs7QUFDQSxTQUFLLElBQUlFLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdILEdBQXBCLEVBQXlCRyxDQUFDLEVBQTFCLEVBQThCO0FBQzVCSixNQUFBQSxDQUFDLEdBQUcsb0JBQUt5QixFQUFFLENBQUMzQyxNQUFILENBQVVzQixDQUFWLENBQUwsRUFBbUIyQixNQUFNLENBQUMvQixDQUFELEVBQUlVLENBQUosQ0FBekIsQ0FBSjtBQUNEOztBQUNELFdBQU9WLENBQVA7QUFDRCxHQVBxQjtBQUFBLENBQWY7QUFTUDtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDTyxJQUFNa0MsT0FBdUUsR0FBRyxTQUExRUEsT0FBMEUsQ0FBQ25CLENBQUQ7QUFBQSxTQUFPLFVBQUNMLENBQUQ7QUFBQSxXQUM1RnFCLE1BQU0sQ0FBQ2hCLENBQUMsQ0FBQ21DLEtBQUgsRUFBVSxVQUFDQyxHQUFELEVBQU14QyxDQUFOO0FBQUEsYUFBWUksQ0FBQyxDQUFDOEIsTUFBRixDQUFTTSxHQUFULEVBQWN6QyxDQUFDLENBQUNDLENBQUQsQ0FBZixDQUFaO0FBQUEsS0FBVixDQURzRjtBQUFBLEdBQVA7QUFBQSxDQUFoRjtBQUdQO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNPLElBQU15QixXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFPM0IsQ0FBUCxFQUFhQyxDQUFiO0FBQUEsU0FBc0MsVUFBQ2UsRUFBRCxFQUFvQjtBQUNuRixRQUFJekIsQ0FBSSxHQUFHUyxDQUFYO0FBQ0EsUUFBTVIsR0FBRyxHQUFHd0IsRUFBRSxDQUFDM0MsTUFBSCxDQUFVb0IsTUFBdEI7O0FBQ0EsU0FBSyxJQUFJRSxDQUFDLEdBQUdILEdBQUcsR0FBRyxDQUFuQixFQUFzQkcsQ0FBQyxJQUFJLENBQTNCLEVBQThCQSxDQUFDLEVBQS9CLEVBQW1DO0FBQ2pDSixNQUFBQSxDQUFDLEdBQUcsb0JBQUt5QixFQUFFLENBQUMzQyxNQUFILENBQVVzQixDQUFWLENBQUwsRUFBbUJnQyxXQUFXLENBQUNwQyxDQUFELEVBQUlVLENBQUosQ0FBOUIsQ0FBSjtBQUNEOztBQUNELFdBQU9BLENBQUMsQ0FBQ2UsRUFBRSxDQUFDNUMsS0FBSixFQUFXbUIsQ0FBWCxDQUFSO0FBQ0QsR0FQMEI7QUFBQSxDQUFwQjtBQVNQO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNPLElBQU1vRCxPQUE4QixHQUFHLFNBQWpDQSxPQUFpQyxDQUFDZCxFQUFEO0FBQUEsU0FBUUEsRUFBRSxDQUFDekQsS0FBWDtBQUFBLENBQXZDO0FBRVA7QUFDQTtBQUNBOzs7OztBQUNPLElBQU13QyxRQUFnQyxHQUFHLFNBQW5DQSxRQUFtQyxDQUM5Q29CLENBRDhDLEVBRTJCO0FBQ3pFLE1BQU1DLFNBQVMsR0FBR3ZELENBQUMsQ0FBQ2tDLFFBQUYsQ0FBV29CLENBQVgsQ0FBbEI7O0FBQ0EsTUFBTVksR0FBRyxHQUFHLFNBQU5BLEdBQU0sQ0FBTzNDLENBQVA7QUFBQSxXQUFrQyxVQUFDaUMsRUFBRDtBQUFBLGFBQzVDRixDQUFDLENBQUNHLEVBQUYsQ0FDRUgsQ0FBQyxDQUFDcEQsR0FBRixDQUFNcUIsQ0FBQyxDQUFDaUMsRUFBRSxDQUFDOUQsS0FBSixDQUFQLEVBQW1CLFVBQUNBLEtBQUQ7QUFBQSxlQUFjLFVBQUNDLE1BQUQ7QUFBQSxpQkFBd0I7QUFDdkRELFlBQUFBLEtBQUssRUFBTEEsS0FEdUQ7QUFFdkRDLFlBQUFBLE1BQU0sRUFBTkE7QUFGdUQsV0FBeEI7QUFBQSxTQUFkO0FBQUEsT0FBbkIsQ0FERixFQUtFLG9CQUFLNkQsRUFBRSxDQUFDN0QsTUFBUixFQUFnQjRELFNBQVMsQ0FBQ1csR0FBRyxDQUFDM0MsQ0FBRCxDQUFKLENBQXpCLENBTEYsQ0FENEM7QUFBQSxLQUFsQztBQUFBLEdBQVo7O0FBUUEsU0FBTzJDLEdBQVA7QUFDRCxDQWJNO0FBZVA7QUFDQTtBQUNBOzs7OztBQUNPLElBQU1DLFFBQXVDLEdBQUcsU0FBMUNBLFFBQTBDLENBQ3JEYixDQURxRDtBQUFBLFNBRUhwQixRQUFRLENBQUNvQixDQUFELENBQVIsQ0FBWU8sa0JBQVosQ0FGRztBQUFBLENBQWhEO0FBSVA7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ08sSUFBTU8sRUFBdUIsR0FBRyxTQUExQkEsRUFBMEIsQ0FBQzVDLENBQUQ7QUFBQSxTQUFPL0IsSUFBSSxDQUFDK0IsQ0FBRCxDQUFYO0FBQUEsQ0FBaEMsQyxDQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUNPLElBQU02QyxHQUFHLEdBQUcsTUFBWjtBQUVQO0FBQ0E7QUFDQTtBQUNBOzs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxJQUFNQyxPQUFzQixHQUFHO0FBQ3BDRCxFQUFBQSxHQUFHLEVBQUhBLEdBRG9DO0FBRXBDbkUsRUFBQUEsR0FBRyxFQUFFbUM7QUFGK0IsQ0FBL0I7QUFLUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLElBQU1rQyxJQUFJLEdBQ2YsYUFDQSxtQkFBTUQsT0FBTixDQUZLO0FBSVA7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLElBQU1FLE9BQXNCLEdBQUc7QUFDcENILEVBQUFBLEdBQUcsRUFBSEEsR0FEb0M7QUFFcENELEVBQUFBLEVBQUUsRUFBRkE7QUFGb0MsQ0FBL0I7QUFLUDtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTUssS0FBa0IsR0FBRztBQUNoQ0osRUFBQUEsR0FBRyxFQUFIQSxHQURnQztBQUVoQ25FLEVBQUFBLEdBQUcsRUFBRW1DLElBRjJCO0FBR2hDb0IsRUFBQUEsRUFBRSxFQUFFbEI7QUFINEIsQ0FBM0I7QUFNUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxJQUFNbUMsT0FBTyxHQUNsQixhQUNBLG9CQUFTRCxLQUFULENBRks7QUFJUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxJQUFNRSxRQUFRLEdBQ25CLGFBQ0EscUJBQVVGLEtBQVYsQ0FGSztBQUlQO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxJQUFNRyxXQUE4QixHQUFHO0FBQzVDUCxFQUFBQSxHQUFHLEVBQUhBLEdBRDRDO0FBRTVDbkUsRUFBQUEsR0FBRyxFQUFFbUMsSUFGdUM7QUFHNUNvQixFQUFBQSxFQUFFLEVBQUVsQixHQUh3QztBQUk1QzZCLEVBQUFBLEVBQUUsRUFBRkE7QUFKNEMsQ0FBdkM7QUFPUDtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTVMsS0FBa0IsR0FBRztBQUNoQ1IsRUFBQUEsR0FBRyxFQUFIQSxHQURnQztBQUVoQ25FLEVBQUFBLEdBQUcsRUFBRW1DLElBRjJCO0FBR2hDb0IsRUFBQUEsRUFBRSxFQUFFbEIsR0FINEI7QUFJaENSLEVBQUFBLEtBQUssRUFBRVU7QUFKeUIsQ0FBM0I7QUFPUDtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTXFDLEtBQWtCLEdBQUc7QUFDaENULEVBQUFBLEdBQUcsRUFBSEEsR0FEZ0M7QUFFaENuRSxFQUFBQSxHQUFHLEVBQUVtQyxJQUYyQjtBQUdoQ29CLEVBQUFBLEVBQUUsRUFBRWxCLEdBSDRCO0FBSWhDNkIsRUFBQUEsRUFBRSxFQUFGQSxFQUpnQztBQUtoQ3JDLEVBQUFBLEtBQUssRUFBRVU7QUFMeUIsQ0FBM0I7QUFRUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLElBQU1zQyxVQUFVLEdBQ3JCLGFBQ0EsdUJBQVlGLEtBQVosQ0FGSztBQUlQO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxJQUFNRyxRQUF3QixHQUFHO0FBQ3RDWCxFQUFBQSxHQUFHLEVBQUhBLEdBRHNDO0FBRXRDekIsRUFBQUEsTUFBTSxFQUFFRCxPQUY4QjtBQUd0Q0ksRUFBQUEsT0FBTyxFQUFFRixRQUg2QjtBQUl0Q0ksRUFBQUEsV0FBVyxFQUFFRDtBQUp5QixDQUFqQztBQU9QO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxJQUFNaUMsV0FBOEIsR0FBRztBQUM1Q1osRUFBQUEsR0FBRyxFQUFIQSxHQUQ0QztBQUU1Q25FLEVBQUFBLEdBQUcsRUFBRW1DLElBRnVDO0FBRzVDTyxFQUFBQSxNQUFNLEVBQUVELE9BSG9DO0FBSTVDSSxFQUFBQSxPQUFPLEVBQUVGLFFBSm1DO0FBSzVDSSxFQUFBQSxXQUFXLEVBQUVELFlBTCtCO0FBTTVDZCxFQUFBQSxRQUFRLEVBQUVtQixTQU5rQztBQU81Q2MsRUFBQUEsUUFBUSxFQUFSQTtBQVA0QyxDQUF2QztBQVVQO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxJQUFNZSxPQUFzQixHQUFHO0FBQ3BDYixFQUFBQSxHQUFHLEVBQUhBLEdBRG9DO0FBRXBDbkUsRUFBQUEsR0FBRyxFQUFFbUMsSUFGK0I7QUFHcENlLEVBQUFBLE1BQU0sRUFBRUYsT0FINEI7QUFJcENlLEVBQUFBLE9BQU8sRUFBUEE7QUFKb0MsQ0FBL0IsQyxDQU9QO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUNPLElBQU1rQixFQUFZLEdBQ3ZCLGFBQ0FmLEVBQUUsQ0FBQ2dCLENBQUMsQ0FBQ0MsV0FBSCxDQUZHO0FBSVA7QUFDQTtBQUNBOzs7QUFDTyxJQUFNQyxNQUFNLEdBQ2pCLGFBQ0EscUJBQVFoQixPQUFSLENBRks7QUFJUDtBQUNBO0FBQ0E7OztBQUNPLElBQU1pQixJQUFJLEdBQ2YsYUFDQSxpQkFBTVYsS0FBTixDQUZLLEMsQ0FJUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFDTyxJQUFNVyxHQUFHLEdBQ2QsYUFDQSxnQkFBS2YsS0FBTCxDQUZLLEMsQ0FJUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7O0FBQ08sU0FBU2dCLElBQVQsQ0FBaUJwRixDQUFqQixFQUEyRDtBQUNoRSxNQUFNK0IsRUFBRSxHQUFHLFNBQUxBLEVBQUssQ0FBQ1osQ0FBRCxFQUFPYyxFQUFQO0FBQUEsV0FBZ0NqQyxDQUFDLENBQUNLLE1BQUYsQ0FBU2MsQ0FBVCxFQUFZYyxFQUFFLENBQUM1QyxLQUFmLEtBQXlCNEMsRUFBRSxDQUFDM0MsTUFBSCxDQUFVK0YsSUFBVixDQUFlLFVBQUMxRSxJQUFEO0FBQUEsYUFBVW9CLEVBQUUsQ0FBQ1osQ0FBRCxFQUFJUixJQUFKLENBQVo7QUFBQSxLQUFmLENBQXpEO0FBQUEsR0FBWDs7QUFDQSxTQUFPb0IsRUFBUDtBQUNEO0FBRUQ7QUFDQTtBQUNBOzs7QUFDTyxJQUFNdUQsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBSUMsU0FBSjtBQUFBLFNBQWdDLFVBQUNsRCxFQUFEO0FBQUEsV0FDcERrRCxTQUFTLENBQUNsRCxFQUFFLENBQUNoRCxLQUFKLENBQVQsSUFBdUJnRCxFQUFFLENBQUMvQyxNQUFILENBQVUrRixJQUFWLENBQWVDLE1BQU0sQ0FBQ0MsU0FBRCxDQUFyQixDQUQ2QjtBQUFBLEdBQWhDO0FBQUEsQ0FBZixDLENBR1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBQ08sSUFBTTVFLElBQXNFLEdBQUc7QUFDcEZxRCxFQUFBQSxHQUFHLEVBQUhBLEdBRG9GO0FBRXBGbkUsRUFBQUEsR0FBRyxFQUFFbUMsSUFGK0U7QUFHcEYrQixFQUFBQSxFQUFFLEVBQUZBLEVBSG9GO0FBSXBGWCxFQUFBQSxFQUFFLEVBQUVsQixHQUpnRjtBQUtwRlIsRUFBQUEsS0FBSyxFQUFFVSxNQUw2RTtBQU1wRkcsRUFBQUEsTUFBTSxFQUFFRCxPQU40RTtBQU9wRkksRUFBQUEsT0FBTyxFQUFFRixRQVAyRTtBQVFwRkksRUFBQUEsV0FBVyxFQUFFRCxZQVJ1RTtBQVNwRmQsRUFBQUEsUUFBUSxFQUFFbUIsU0FUMEU7QUFVcEZjLEVBQUFBLFFBQVEsRUFBUkEsUUFWb0Y7QUFXcEZGLEVBQUFBLE9BQU8sRUFBUEEsT0FYb0Y7QUFZcEZiLEVBQUFBLE1BQU0sRUFBRUY7QUFaNEUsQ0FBL0UiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE11bHRpLXdheSB0cmVlcyAoYWthIHJvc2UgdHJlZXMpIGFuZCBmb3Jlc3RzLCB3aGVyZSBhIGZvcmVzdCBpc1xuICpcbiAqIGBgYHRzXG4gKiB0eXBlIEZvcmVzdDxBPiA9IEFycmF5PFRyZWU8QT4+XG4gKiBgYGBcbiAqXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuaW1wb3J0IHsgQXBwbGljYXRpdmUgYXMgQXBwbGljYXRpdmVIS1QsIEFwcGxpY2F0aXZlMSB9IGZyb20gJy4vQXBwbGljYXRpdmUnXG5pbXBvcnQgeyBhcEZpcnN0IGFzIGFwRmlyc3RfLCBBcHBseTEsIGFwUyBhcyBhcFNfLCBhcFNlY29uZCBhcyBhcFNlY29uZF8gfSBmcm9tICcuL0FwcGx5J1xuaW1wb3J0ICogYXMgQSBmcm9tICcuL0FycmF5J1xuaW1wb3J0IHsgYmluZCBhcyBiaW5kXywgQ2hhaW4xLCBjaGFpbkZpcnN0IGFzIGNoYWluRmlyc3RfIH0gZnJvbSAnLi9DaGFpbidcbmltcG9ydCB7IENvbW9uYWQxIH0gZnJvbSAnLi9Db21vbmFkJ1xuaW1wb3J0IHsgRXEsIGZyb21FcXVhbHMgfSBmcm9tICcuL0VxJ1xuaW1wb3J0IHsgRXh0ZW5kMSB9IGZyb20gJy4vRXh0ZW5kJ1xuaW1wb3J0IHsgRm9sZGFibGUxIH0gZnJvbSAnLi9Gb2xkYWJsZSdcbmltcG9ydCB7IGlkZW50aXR5LCBwaXBlIH0gZnJvbSAnLi9mdW5jdGlvbidcbmltcG9ydCB7IGJpbmRUbyBhcyBiaW5kVG9fLCBmbGFwIGFzIGZsYXBfLCBGdW5jdG9yMSB9IGZyb20gJy4vRnVuY3RvcidcbmltcG9ydCB7IEhLVCwgS2luZCwgS2luZDIsIEtpbmQzLCBLaW5kNCwgVVJJUywgVVJJUzIsIFVSSVMzLCBVUklTNCB9IGZyb20gJy4vSEtUJ1xuaW1wb3J0ICogYXMgXyBmcm9tICcuL2ludGVybmFsJ1xuaW1wb3J0IHsgTW9uYWQgYXMgTW9uYWRIS1QsIE1vbmFkMSwgTW9uYWQyLCBNb25hZDJDLCBNb25hZDMsIE1vbmFkM0MsIE1vbmFkNCB9IGZyb20gJy4vTW9uYWQnXG5pbXBvcnQgeyBNb25vaWQgfSBmcm9tICcuL01vbm9pZCdcbmltcG9ydCB7IFBvaW50ZWQxIH0gZnJvbSAnLi9Qb2ludGVkJ1xuaW1wb3J0IHsgUHJlZGljYXRlIH0gZnJvbSAnLi9QcmVkaWNhdGUnXG5pbXBvcnQgeyBTaG93IH0gZnJvbSAnLi9TaG93J1xuaW1wb3J0IHsgUGlwZWFibGVUcmF2ZXJzZTEsIFRyYXZlcnNhYmxlMSB9IGZyb20gJy4vVHJhdmVyc2FibGUnXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIG1vZGVsXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQGNhdGVnb3J5IG1vZGVsXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IHR5cGUgRm9yZXN0PEE+ID0gQXJyYXk8VHJlZTxBPj5cblxuLyoqXG4gKiBAY2F0ZWdvcnkgbW9kZWxcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFRyZWU8QT4ge1xuICByZWFkb25seSB2YWx1ZTogQVxuICByZWFkb25seSBmb3Jlc3Q6IEZvcmVzdDxBPlxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb25zdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFrZTxBPih2YWx1ZTogQSwgZm9yZXN0OiBGb3Jlc3Q8QT4gPSBbXSk6IFRyZWU8QT4ge1xuICByZXR1cm4ge1xuICAgIHZhbHVlLFxuICAgIGZvcmVzdFxuICB9XG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRTaG93PEE+KFM6IFNob3c8QT4pOiBTaG93PFRyZWU8QT4+IHtcbiAgY29uc3Qgc2hvdyA9ICh0OiBUcmVlPEE+KTogc3RyaW5nID0+IHtcbiAgICByZXR1cm4gQS5pc0VtcHR5KHQuZm9yZXN0KVxuICAgICAgPyBgbWFrZSgke1Muc2hvdyh0LnZhbHVlKX0pYFxuICAgICAgOiBgbWFrZSgke1Muc2hvdyh0LnZhbHVlKX0sIFske3QuZm9yZXN0Lm1hcChzaG93KS5qb2luKCcsICcpfV0pYFxuICB9XG4gIHJldHVybiB7XG4gICAgc2hvd1xuICB9XG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRFcTxBPihFOiBFcTxBPik6IEVxPFRyZWU8QT4+IHtcbiAgbGV0IFNBOiBFcTxBcnJheTxUcmVlPEE+Pj5cbiAgY29uc3QgUjogRXE8VHJlZTxBPj4gPSBmcm9tRXF1YWxzKCh4LCB5KSA9PiBFLmVxdWFscyh4LnZhbHVlLCB5LnZhbHVlKSAmJiBTQS5lcXVhbHMoeC5mb3Jlc3QsIHkuZm9yZXN0KSlcbiAgU0EgPSBBLmdldEVxKFIpXG4gIHJldHVybiBSXG59XG5cbmNvbnN0IGRyYXcgPSAoaW5kZW50YXRpb246IHN0cmluZywgZm9yZXN0OiBGb3Jlc3Q8c3RyaW5nPik6IHN0cmluZyA9PiB7XG4gIGxldCByOiBzdHJpbmcgPSAnJ1xuICBjb25zdCBsZW4gPSBmb3Jlc3QubGVuZ3RoXG4gIGxldCB0cmVlOiBUcmVlPHN0cmluZz5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIHRyZWUgPSBmb3Jlc3RbaV1cbiAgICBjb25zdCBpc0xhc3QgPSBpID09PSBsZW4gLSAxXG4gICAgciArPSBpbmRlbnRhdGlvbiArIChpc0xhc3QgPyAn4pSUJyA6ICfilJwnKSArICfilIAgJyArIHRyZWUudmFsdWVcbiAgICByICs9IGRyYXcoaW5kZW50YXRpb24gKyAobGVuID4gMSAmJiAhaXNMYXN0ID8gJ+KUgiAgJyA6ICcgICAnKSwgdHJlZS5mb3Jlc3QpXG4gIH1cbiAgcmV0dXJuIHJcbn1cblxuLyoqXG4gKiBOZWF0IDItZGltZW5zaW9uYWwgZHJhd2luZyBvZiBhIGZvcmVzdFxuICpcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gZHJhd0ZvcmVzdChmb3Jlc3Q6IEZvcmVzdDxzdHJpbmc+KTogc3RyaW5nIHtcbiAgcmV0dXJuIGRyYXcoJ1xcbicsIGZvcmVzdClcbn1cblxuLyoqXG4gKiBOZWF0IDItZGltZW5zaW9uYWwgZHJhd2luZyBvZiBhIHRyZWVcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgbWFrZSwgZHJhd1RyZWUgfSBmcm9tICdmcC10cy9UcmVlJ1xuICpcbiAqIGNvbnN0IGZhID0gbWFrZSgnYScsIFtcbiAqICAgbWFrZSgnYicpLFxuICogICBtYWtlKCdjJyksXG4gKiAgIG1ha2UoJ2QnLCBbbWFrZSgnZScpLCBtYWtlKCdmJyldKVxuICogXSlcbiAqXG4gKiBhc3NlcnQuc3RyaWN0RXF1YWwoZHJhd1RyZWUoZmEpLCBgYVxuICog4pSc4pSAIGJcbiAqIOKUnOKUgCBjXG4gKiDilJTilIAgZFxuICogICAg4pSc4pSAIGVcbiAqICAgIOKUlOKUgCBmYClcbiAqXG4gKlxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkcmF3VHJlZSh0cmVlOiBUcmVlPHN0cmluZz4pOiBzdHJpbmcge1xuICByZXR1cm4gdHJlZS52YWx1ZSArIGRyYXdGb3Jlc3QodHJlZS5mb3Jlc3QpXG59XG5cbi8qKlxuICogQnVpbGQgYSAocG9zc2libHkgaW5maW5pdGUpIHRyZWUgZnJvbSBhIHNlZWQgdmFsdWUgaW4gYnJlYWR0aC1maXJzdCBvcmRlci5cbiAqXG4gKiBAY2F0ZWdvcnkgY29uc3RydWN0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVuZm9sZFRyZWU8QSwgQj4oYjogQiwgZjogKGI6IEIpID0+IFtBLCBBcnJheTxCPl0pOiBUcmVlPEE+IHtcbiAgY29uc3QgW2EsIGJzXSA9IGYoYilcbiAgcmV0dXJuIHsgdmFsdWU6IGEsIGZvcmVzdDogdW5mb2xkRm9yZXN0KGJzLCBmKSB9XG59XG5cbi8qKlxuICogQnVpbGQgYSAocG9zc2libHkgaW5maW5pdGUpIGZvcmVzdCBmcm9tIGEgbGlzdCBvZiBzZWVkIHZhbHVlcyBpbiBicmVhZHRoLWZpcnN0IG9yZGVyLlxuICpcbiAqIEBjYXRlZ29yeSBjb25zdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gdW5mb2xkRm9yZXN0PEEsIEI+KGJzOiBBcnJheTxCPiwgZjogKGI6IEIpID0+IFtBLCBBcnJheTxCPl0pOiBGb3Jlc3Q8QT4ge1xuICByZXR1cm4gYnMubWFwKChiKSA9PiB1bmZvbGRUcmVlKGIsIGYpKVxufVxuXG4vKipcbiAqIE1vbmFkaWMgdHJlZSBidWlsZGVyLCBpbiBkZXB0aC1maXJzdCBvcmRlclxuICpcbiAqIEBjYXRlZ29yeSBjb25zdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gdW5mb2xkVHJlZU08TSBleHRlbmRzIFVSSVM0PihcbiAgTTogTW9uYWQ0PE0+XG4pOiA8UywgUiwgRSwgQSwgQj4oYjogQiwgZjogKGI6IEIpID0+IEtpbmQ0PE0sIFMsIFIsIEUsIFtBLCBBcnJheTxCPl0+KSA9PiBLaW5kNDxNLCBTLCBSLCBFLCBUcmVlPEE+PlxuZXhwb3J0IGZ1bmN0aW9uIHVuZm9sZFRyZWVNPE0gZXh0ZW5kcyBVUklTMz4oXG4gIE06IE1vbmFkMzxNPlxuKTogPFIsIEUsIEEsIEI+KGI6IEIsIGY6IChiOiBCKSA9PiBLaW5kMzxNLCBSLCBFLCBbQSwgQXJyYXk8Qj5dPikgPT4gS2luZDM8TSwgUiwgRSwgVHJlZTxBPj5cbmV4cG9ydCBmdW5jdGlvbiB1bmZvbGRUcmVlTTxNIGV4dGVuZHMgVVJJUzMsIEU+KFxuICBNOiBNb25hZDNDPE0sIEU+XG4pOiA8UiwgQSwgQj4oYjogQiwgZjogKGI6IEIpID0+IEtpbmQzPE0sIFIsIEUsIFtBLCBBcnJheTxCPl0+KSA9PiBLaW5kMzxNLCBSLCBFLCBUcmVlPEE+PlxuZXhwb3J0IGZ1bmN0aW9uIHVuZm9sZFRyZWVNPE0gZXh0ZW5kcyBVUklTMj4oXG4gIE06IE1vbmFkMjxNPlxuKTogPEUsIEEsIEI+KGI6IEIsIGY6IChiOiBCKSA9PiBLaW5kMjxNLCBFLCBbQSwgQXJyYXk8Qj5dPikgPT4gS2luZDI8TSwgRSwgVHJlZTxBPj5cbmV4cG9ydCBmdW5jdGlvbiB1bmZvbGRUcmVlTTxNIGV4dGVuZHMgVVJJUzIsIEU+KFxuICBNOiBNb25hZDJDPE0sIEU+XG4pOiA8QSwgQj4oYjogQiwgZjogKGI6IEIpID0+IEtpbmQyPE0sIEUsIFtBLCBBcnJheTxCPl0+KSA9PiBLaW5kMjxNLCBFLCBUcmVlPEE+PlxuZXhwb3J0IGZ1bmN0aW9uIHVuZm9sZFRyZWVNPE0gZXh0ZW5kcyBVUklTPihcbiAgTTogTW9uYWQxPE0+XG4pOiA8QSwgQj4oYjogQiwgZjogKGI6IEIpID0+IEtpbmQ8TSwgW0EsIEFycmF5PEI+XT4pID0+IEtpbmQ8TSwgVHJlZTxBPj5cbmV4cG9ydCBmdW5jdGlvbiB1bmZvbGRUcmVlTTxNPihNOiBNb25hZEhLVDxNPik6IDxBLCBCPihiOiBCLCBmOiAoYjogQikgPT4gSEtUPE0sIFtBLCBBcnJheTxCPl0+KSA9PiBIS1Q8TSwgVHJlZTxBPj5cbmV4cG9ydCBmdW5jdGlvbiB1bmZvbGRUcmVlTTxNPihNOiBNb25hZEhLVDxNPik6IDxBLCBCPihiOiBCLCBmOiAoYjogQikgPT4gSEtUPE0sIFtBLCBBcnJheTxCPl0+KSA9PiBIS1Q8TSwgVHJlZTxBPj4ge1xuICBjb25zdCB1bmZvbGRGb3Jlc3RNTSA9IHVuZm9sZEZvcmVzdE0oTSlcbiAgcmV0dXJuIChiLCBmKSA9PiBNLmNoYWluKGYoYiksIChbYSwgYnNdKSA9PiBNLm1hcCh1bmZvbGRGb3Jlc3RNTShicywgZiksICh0cykgPT4gKHsgdmFsdWU6IGEsIGZvcmVzdDogdHMgfSkpKVxufVxuXG4vKipcbiAqIE1vbmFkaWMgZm9yZXN0IGJ1aWxkZXIsIGluIGRlcHRoLWZpcnN0IG9yZGVyXG4gKlxuICogQGNhdGVnb3J5IGNvbnN0cnVjdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1bmZvbGRGb3Jlc3RNPE0gZXh0ZW5kcyBVUklTND4oXG4gIE06IE1vbmFkNDxNPlxuKTogPFMsIFIsIEUsIEEsIEI+KGJzOiBBcnJheTxCPiwgZjogKGI6IEIpID0+IEtpbmQ0PE0sIFMsIFIsIEUsIFtBLCBBcnJheTxCPl0+KSA9PiBLaW5kNDxNLCBTLCBSLCBFLCBGb3Jlc3Q8QT4+XG5leHBvcnQgZnVuY3Rpb24gdW5mb2xkRm9yZXN0TTxNIGV4dGVuZHMgVVJJUzM+KFxuICBNOiBNb25hZDM8TT5cbik6IDxSLCBFLCBBLCBCPihiczogQXJyYXk8Qj4sIGY6IChiOiBCKSA9PiBLaW5kMzxNLCBSLCBFLCBbQSwgQXJyYXk8Qj5dPikgPT4gS2luZDM8TSwgUiwgRSwgRm9yZXN0PEE+PlxuZXhwb3J0IGZ1bmN0aW9uIHVuZm9sZEZvcmVzdE08TSBleHRlbmRzIFVSSVMzLCBFPihcbiAgTTogTW9uYWQzQzxNLCBFPlxuKTogPFIsIEEsIEI+KGJzOiBBcnJheTxCPiwgZjogKGI6IEIpID0+IEtpbmQzPE0sIFIsIEUsIFtBLCBBcnJheTxCPl0+KSA9PiBLaW5kMzxNLCBSLCBFLCBGb3Jlc3Q8QT4+XG5leHBvcnQgZnVuY3Rpb24gdW5mb2xkRm9yZXN0TTxNIGV4dGVuZHMgVVJJUzI+KFxuICBNOiBNb25hZDI8TT5cbik6IDxSLCBFLCBCPihiczogQXJyYXk8Qj4sIGY6IChiOiBCKSA9PiBLaW5kMjxNLCBSLCBbRSwgQXJyYXk8Qj5dPikgPT4gS2luZDI8TSwgUiwgRm9yZXN0PEU+PlxuZXhwb3J0IGZ1bmN0aW9uIHVuZm9sZEZvcmVzdE08TSBleHRlbmRzIFVSSVMyLCBFPihcbiAgTTogTW9uYWQyQzxNLCBFPlxuKTogPEEsIEI+KGJzOiBBcnJheTxCPiwgZjogKGI6IEIpID0+IEtpbmQyPE0sIEUsIFtBLCBBcnJheTxCPl0+KSA9PiBLaW5kMjxNLCBFLCBGb3Jlc3Q8QT4+XG5leHBvcnQgZnVuY3Rpb24gdW5mb2xkRm9yZXN0TTxNIGV4dGVuZHMgVVJJUz4oXG4gIE06IE1vbmFkMTxNPlxuKTogPEEsIEI+KGJzOiBBcnJheTxCPiwgZjogKGI6IEIpID0+IEtpbmQ8TSwgW0EsIEFycmF5PEI+XT4pID0+IEtpbmQ8TSwgRm9yZXN0PEE+PlxuZXhwb3J0IGZ1bmN0aW9uIHVuZm9sZEZvcmVzdE08TT4oXG4gIE06IE1vbmFkSEtUPE0+XG4pOiA8QSwgQj4oYnM6IEFycmF5PEI+LCBmOiAoYjogQikgPT4gSEtUPE0sIFtBLCBBcnJheTxCPl0+KSA9PiBIS1Q8TSwgRm9yZXN0PEE+PlxuZXhwb3J0IGZ1bmN0aW9uIHVuZm9sZEZvcmVzdE08TT4oXG4gIE06IE1vbmFkSEtUPE0+XG4pOiA8QSwgQj4oYnM6IEFycmF5PEI+LCBmOiAoYjogQikgPT4gSEtUPE0sIFtBLCBBcnJheTxCPl0+KSA9PiBIS1Q8TSwgRm9yZXN0PEE+PiB7XG4gIGNvbnN0IHRyYXZlcnNlTSA9IEEudHJhdmVyc2UoTSlcbiAgcmV0dXJuIChicywgZikgPT5cbiAgICBwaXBlKFxuICAgICAgYnMsXG4gICAgICB0cmF2ZXJzZU0oKGIpID0+IHVuZm9sZFRyZWVNKE0pKGIsIGYpKVxuICAgIClcbn1cblxuLyoqXG4gKiBGb2xkIGEgdHJlZSBpbnRvIGEgXCJzdW1tYXJ5XCIgdmFsdWUgaW4gZGVwdGgtZmlyc3Qgb3JkZXIuXG4gKlxuICogRm9yIGVhY2ggbm9kZSBpbiB0aGUgdHJlZSwgYXBwbHkgYGZgIHRvIHRoZSBgdmFsdWVgIGFuZCB0aGUgcmVzdWx0IG9mIGFwcGx5aW5nIGBmYCB0byBlYWNoIGBmb3Jlc3RgLlxuICpcbiAqIFRoaXMgaXMgYWxzbyBrbm93biBhcyB0aGUgY2F0YW1vcnBoaXNtIG9uIHRyZWVzLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBmb2xkLCBtYWtlIH0gZnJvbSAnZnAtdHMvVHJlZSdcbiAqIGltcG9ydCB7IGNvbmNhdEFsbCB9IGZyb20gJ2ZwLXRzL01vbm9pZCdcbiAqIGltcG9ydCB7IE1vbm9pZFN1bSB9IGZyb20gJ2ZwLXRzL251bWJlcidcbiAqXG4gKiBjb25zdCB0ID0gbWFrZSgxLCBbbWFrZSgyKSwgbWFrZSgzKV0pXG4gKlxuICogY29uc3Qgc3VtID0gY29uY2F0QWxsKE1vbm9pZFN1bSlcbiAqXG4gKiAvLyBTdW0gdGhlIHZhbHVlcyBpbiBhIHRyZWU6XG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKGZvbGQoKGE6IG51bWJlciwgYnM6IEFycmF5PG51bWJlcj4pID0+IGEgKyBzdW0oYnMpKSh0KSwgNilcbiAqXG4gKiAvLyBGaW5kIHRoZSBtYXhpbXVtIHZhbHVlIGluIHRoZSB0cmVlOlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChmb2xkKChhOiBudW1iZXIsIGJzOiBBcnJheTxudW1iZXI+KSA9PiBicy5yZWR1Y2UoKGIsIGFjYykgPT4gTWF0aC5tYXgoYiwgYWNjKSwgYSkpKHQpLCAzKVxuICpcbiAqIC8vIENvdW50IHRoZSBudW1iZXIgb2YgbGVhdmVzIGluIHRoZSB0cmVlOlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChmb2xkKChfOiBudW1iZXIsIGJzOiBBcnJheTxudW1iZXI+KSA9PiAoYnMubGVuZ3RoID09PSAwID8gMSA6IHN1bShicykpKSh0KSwgMilcbiAqXG4gKiBAY2F0ZWdvcnkgZGVzdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjYuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9sZDxBLCBCPihmOiAoYTogQSwgYnM6IEFycmF5PEI+KSA9PiBCKTogKHRyZWU6IFRyZWU8QT4pID0+IEIge1xuICBjb25zdCBnbyA9ICh0cmVlOiBUcmVlPEE+KTogQiA9PiBmKHRyZWUudmFsdWUsIHRyZWUuZm9yZXN0Lm1hcChnbykpXG4gIHJldHVybiBnb1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBub24tcGlwZWFibGVzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5jb25zdCBfbWFwOiBNb25hZDE8VVJJPlsnbWFwJ10gPSAoZmEsIGYpID0+IHBpcGUoZmEsIG1hcChmKSlcbmNvbnN0IF9hcDogTW9uYWQxPFVSST5bJ2FwJ10gPSAoZmFiLCBmYSkgPT5cbiAgcGlwZShcbiAgICBmYWIsXG4gICAgY2hhaW4oKGYpID0+IHBpcGUoZmEsIG1hcChmKSkpXG4gIClcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5jb25zdCBfY2hhaW4gPSA8QSwgQj4obWE6IFRyZWU8QT4sIGY6IChhOiBBKSA9PiBUcmVlPEI+KTogVHJlZTxCPiA9PiBwaXBlKG1hLCBjaGFpbihmKSlcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5jb25zdCBfcmVkdWNlID0gPEEsIEI+KGZhOiBUcmVlPEE+LCBiOiBCLCBmOiAoYjogQiwgYTogQSkgPT4gQik6IEIgPT4gcGlwZShmYSwgcmVkdWNlKGIsIGYpKVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmNvbnN0IF9mb2xkTWFwOiBGb2xkYWJsZTE8VVJJPlsnZm9sZE1hcCddID0gKE0pID0+IHtcbiAgY29uc3QgZm9sZE1hcE0gPSBmb2xkTWFwKE0pXG4gIHJldHVybiAoZmEsIGYpID0+IHBpcGUoZmEsIGZvbGRNYXBNKGYpKVxufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmNvbnN0IF9yZWR1Y2VSaWdodCA9IDxBLCBCPihmYTogVHJlZTxBPiwgYjogQiwgZjogKGE6IEEsIGI6IEIpID0+IEIpOiBCID0+IHBpcGUoZmEsIHJlZHVjZVJpZ2h0KGIsIGYpKVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmNvbnN0IF9leHRlbmQ6IEV4dGVuZDE8VVJJPlsnZXh0ZW5kJ10gPSAod2EsIGYpID0+IHBpcGUod2EsIGV4dGVuZChmKSlcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5jb25zdCBfdHJhdmVyc2UgPSA8Rj4oRjogQXBwbGljYXRpdmVIS1Q8Rj4pOiAoPEEsIEI+KHRhOiBUcmVlPEE+LCBmOiAoYTogQSkgPT4gSEtUPEYsIEI+KSA9PiBIS1Q8RiwgVHJlZTxCPj4pID0+IHtcbiAgY29uc3QgdHJhdmVyc2VGID0gdHJhdmVyc2UoRilcbiAgcmV0dXJuICh0YSwgZikgPT4gcGlwZSh0YSwgdHJhdmVyc2VGKGYpKVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyB0eXBlIGNsYXNzIG1lbWJlcnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBBcHBseSBhIGZ1bmN0aW9uIHRvIGFuIGFyZ3VtZW50IHVuZGVyIGEgdHlwZSBjb25zdHJ1Y3Rvci5cbiAqXG4gKiBAY2F0ZWdvcnkgQXBwbHlcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgYXA6IDxBPihmYTogVHJlZTxBPikgPT4gPEI+KGZhYjogVHJlZTwoYTogQSkgPT4gQj4pID0+IFRyZWU8Qj4gPSAoZmEpID0+IChmYWIpID0+IF9hcChmYWIsIGZhKVxuXG4vKipcbiAqIENvbXBvc2VzIGNvbXB1dGF0aW9ucyBpbiBzZXF1ZW5jZSwgdXNpbmcgdGhlIHJldHVybiB2YWx1ZSBvZiBvbmUgY29tcHV0YXRpb24gdG8gZGV0ZXJtaW5lIHRoZSBuZXh0IGNvbXB1dGF0aW9uLlxuICpcbiAqIEBjYXRlZ29yeSBNb25hZFxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBjaGFpbiA9IDxBLCBCPihmOiAoYTogQSkgPT4gVHJlZTxCPikgPT4gKG1hOiBUcmVlPEE+KTogVHJlZTxCPiA9PiB7XG4gIGNvbnN0IHsgdmFsdWUsIGZvcmVzdCB9ID0gZihtYS52YWx1ZSlcbiAgY29uc3QgY29uY2F0ID0gQS5nZXRNb25vaWQ8VHJlZTxCPj4oKS5jb25jYXRcbiAgcmV0dXJuIHtcbiAgICB2YWx1ZSxcbiAgICBmb3Jlc3Q6IGNvbmNhdChmb3Jlc3QsIG1hLmZvcmVzdC5tYXAoY2hhaW4oZikpKVxuICB9XG59XG5cbi8qKlxuICogQGNhdGVnb3J5IEV4dGVuZFxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBleHRlbmQ6IDxBLCBCPihmOiAod2E6IFRyZWU8QT4pID0+IEIpID0+ICh3YTogVHJlZTxBPikgPT4gVHJlZTxCPiA9IChmKSA9PiAod2EpID0+ICh7XG4gIHZhbHVlOiBmKHdhKSxcbiAgZm9yZXN0OiB3YS5mb3Jlc3QubWFwKGV4dGVuZChmKSlcbn0pXG5cbi8qKlxuICogRGVyaXZhYmxlIGZyb20gYEV4dGVuZGAuXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGR1cGxpY2F0ZTogPEE+KHdhOiBUcmVlPEE+KSA9PiBUcmVlPFRyZWU8QT4+ID1cbiAgLyojX19QVVJFX18qL1xuICBleHRlbmQoaWRlbnRpdHkpXG5cbi8qKlxuICogRGVyaXZhYmxlIGZyb20gYENoYWluYC5cbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgZmxhdHRlbjogPEE+KG1tYTogVHJlZTxUcmVlPEE+PikgPT4gVHJlZTxBPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgY2hhaW4oaWRlbnRpdHkpXG5cbi8qKlxuICogYG1hcGAgY2FuIGJlIHVzZWQgdG8gdHVybiBmdW5jdGlvbnMgYChhOiBBKSA9PiBCYCBpbnRvIGZ1bmN0aW9ucyBgKGZhOiBGPEE+KSA9PiBGPEI+YCB3aG9zZSBhcmd1bWVudCBhbmQgcmV0dXJuIHR5cGVzXG4gKiB1c2UgdGhlIHR5cGUgY29uc3RydWN0b3IgYEZgIHRvIHJlcHJlc2VudCBzb21lIGNvbXB1dGF0aW9uYWwgY29udGV4dC5cbiAqXG4gKiBAY2F0ZWdvcnkgRnVuY3RvclxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBtYXA6IDxBLCBCPihmOiAoYTogQSkgPT4gQikgPT4gKGZhOiBUcmVlPEE+KSA9PiBUcmVlPEI+ID0gKGYpID0+IChmYSkgPT4gKHtcbiAgdmFsdWU6IGYoZmEudmFsdWUpLFxuICBmb3Jlc3Q6IGZhLmZvcmVzdC5tYXAobWFwKGYpKVxufSlcblxuLyoqXG4gKiBAY2F0ZWdvcnkgRm9sZGFibGVcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgcmVkdWNlID0gPEEsIEI+KGI6IEIsIGY6IChiOiBCLCBhOiBBKSA9PiBCKSA9PiAoZmE6IFRyZWU8QT4pOiBCID0+IHtcbiAgbGV0IHI6IEIgPSBmKGIsIGZhLnZhbHVlKVxuICBjb25zdCBsZW4gPSBmYS5mb3Jlc3QubGVuZ3RoXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICByID0gcGlwZShmYS5mb3Jlc3RbaV0sIHJlZHVjZShyLCBmKSlcbiAgfVxuICByZXR1cm4gclxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBGb2xkYWJsZVxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBmb2xkTWFwOiA8TT4oTTogTW9ub2lkPE0+KSA9PiA8QT4oZjogKGE6IEEpID0+IE0pID0+IChmYTogVHJlZTxBPikgPT4gTSA9IChNKSA9PiAoZikgPT5cbiAgcmVkdWNlKE0uZW1wdHksIChhY2MsIGEpID0+IE0uY29uY2F0KGFjYywgZihhKSkpXG5cbi8qKlxuICogQGNhdGVnb3J5IEZvbGRhYmxlXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHJlZHVjZVJpZ2h0ID0gPEEsIEI+KGI6IEIsIGY6IChhOiBBLCBiOiBCKSA9PiBCKSA9PiAoZmE6IFRyZWU8QT4pOiBCID0+IHtcbiAgbGV0IHI6IEIgPSBiXG4gIGNvbnN0IGxlbiA9IGZhLmZvcmVzdC5sZW5ndGhcbiAgZm9yIChsZXQgaSA9IGxlbiAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgciA9IHBpcGUoZmEuZm9yZXN0W2ldLCByZWR1Y2VSaWdodChyLCBmKSlcbiAgfVxuICByZXR1cm4gZihmYS52YWx1ZSwgcilcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgRXh0cmFjdFxuICogQHNpbmNlIDIuNi4yXG4gKi9cbmV4cG9ydCBjb25zdCBleHRyYWN0OiA8QT4od2E6IFRyZWU8QT4pID0+IEEgPSAod2EpID0+IHdhLnZhbHVlXG5cbi8qKlxuICogQHNpbmNlIDIuNi4zXG4gKi9cbmV4cG9ydCBjb25zdCB0cmF2ZXJzZTogUGlwZWFibGVUcmF2ZXJzZTE8VVJJPiA9IDxGPihcbiAgRjogQXBwbGljYXRpdmVIS1Q8Rj5cbik6ICg8QSwgQj4oZjogKGE6IEEpID0+IEhLVDxGLCBCPikgPT4gKHRhOiBUcmVlPEE+KSA9PiBIS1Q8RiwgVHJlZTxCPj4pID0+IHtcbiAgY29uc3QgdHJhdmVyc2VGID0gQS50cmF2ZXJzZShGKVxuICBjb25zdCBvdXQgPSA8QSwgQj4oZjogKGE6IEEpID0+IEhLVDxGLCBCPikgPT4gKHRhOiBUcmVlPEE+KTogSEtUPEYsIFRyZWU8Qj4+ID0+XG4gICAgRi5hcChcbiAgICAgIEYubWFwKGYodGEudmFsdWUpLCAodmFsdWU6IEIpID0+IChmb3Jlc3Q6IEZvcmVzdDxCPikgPT4gKHtcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIGZvcmVzdFxuICAgICAgfSkpLFxuICAgICAgcGlwZSh0YS5mb3Jlc3QsIHRyYXZlcnNlRihvdXQoZikpKVxuICAgIClcbiAgcmV0dXJuIG91dFxufVxuXG4vKipcbiAqIEBzaW5jZSAyLjYuM1xuICovXG5leHBvcnQgY29uc3Qgc2VxdWVuY2U6IFRyYXZlcnNhYmxlMTxVUkk+WydzZXF1ZW5jZSddID0gPEY+KFxuICBGOiBBcHBsaWNhdGl2ZUhLVDxGPlxuKTogKDxBPih0YTogVHJlZTxIS1Q8RiwgQT4+KSA9PiBIS1Q8RiwgVHJlZTxBPj4pID0+IHRyYXZlcnNlKEYpKGlkZW50aXR5KVxuXG4vKipcbiAqIEBjYXRlZ29yeSBQb2ludGVkXG4gKiBAc2luY2UgMi43LjBcbiAqL1xuZXhwb3J0IGNvbnN0IG9mOiBQb2ludGVkMTxVUkk+WydvZiddID0gKGEpID0+IG1ha2UoYSlcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gaW5zdGFuY2VzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBVUkkgPSAnVHJlZSdcblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IHR5cGUgVVJJID0gdHlwZW9mIFVSSVxuXG5kZWNsYXJlIG1vZHVsZSAnLi9IS1QnIHtcbiAgaW50ZXJmYWNlIFVSSXRvS2luZDxBPiB7XG4gICAgcmVhZG9ubHkgW1VSSV06IFRyZWU8QT5cbiAgfVxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjcuMFxuICovXG5leHBvcnQgY29uc3QgRnVuY3RvcjogRnVuY3RvcjE8VVJJPiA9IHtcbiAgVVJJLFxuICBtYXA6IF9tYXBcbn1cblxuLyoqXG4gKiBEZXJpdmFibGUgZnJvbSBgRnVuY3RvcmAuXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBmbGFwID1cbiAgLyojX19QVVJFX18qL1xuICBmbGFwXyhGdW5jdG9yKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IFBvaW50ZWQ6IFBvaW50ZWQxPFVSST4gPSB7XG4gIFVSSSxcbiAgb2Zcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBBcHBseTogQXBwbHkxPFVSST4gPSB7XG4gIFVSSSxcbiAgbWFwOiBfbWFwLFxuICBhcDogX2FwXG59XG5cbi8qKlxuICogQ29tYmluZSB0d28gZWZmZWN0ZnVsIGFjdGlvbnMsIGtlZXBpbmcgb25seSB0aGUgcmVzdWx0IG9mIHRoZSBmaXJzdC5cbiAqXG4gKiBEZXJpdmFibGUgZnJvbSBgQXBwbHlgLlxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBhcEZpcnN0ID1cbiAgLyojX19QVVJFX18qL1xuICBhcEZpcnN0XyhBcHBseSlcblxuLyoqXG4gKiBDb21iaW5lIHR3byBlZmZlY3RmdWwgYWN0aW9ucywga2VlcGluZyBvbmx5IHRoZSByZXN1bHQgb2YgdGhlIHNlY29uZC5cbiAqXG4gKiBEZXJpdmFibGUgZnJvbSBgQXBwbHlgLlxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBhcFNlY29uZCA9XG4gIC8qI19fUFVSRV9fKi9cbiAgYXBTZWNvbmRfKEFwcGx5KVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjcuMFxuICovXG5leHBvcnQgY29uc3QgQXBwbGljYXRpdmU6IEFwcGxpY2F0aXZlMTxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgYXA6IF9hcCxcbiAgb2Zcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBDaGFpbjogQ2hhaW4xPFVSST4gPSB7XG4gIFVSSSxcbiAgbWFwOiBfbWFwLFxuICBhcDogX2FwLFxuICBjaGFpbjogX2NoYWluXG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuNy4wXG4gKi9cbmV4cG9ydCBjb25zdCBNb25hZDogTW9uYWQxPFVSST4gPSB7XG4gIFVSSSxcbiAgbWFwOiBfbWFwLFxuICBhcDogX2FwLFxuICBvZixcbiAgY2hhaW46IF9jaGFpblxufVxuXG4vKipcbiAqIENvbXBvc2VzIGNvbXB1dGF0aW9ucyBpbiBzZXF1ZW5jZSwgdXNpbmcgdGhlIHJldHVybiB2YWx1ZSBvZiBvbmUgY29tcHV0YXRpb24gdG8gZGV0ZXJtaW5lIHRoZSBuZXh0IGNvbXB1dGF0aW9uIGFuZFxuICoga2VlcGluZyBvbmx5IHRoZSByZXN1bHQgb2YgdGhlIGZpcnN0LlxuICpcbiAqIERlcml2YWJsZSBmcm9tIGBDaGFpbmAuXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGNoYWluRmlyc3QgPVxuICAvKiNfX1BVUkVfXyovXG4gIGNoYWluRmlyc3RfKENoYWluKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjcuMFxuICovXG5leHBvcnQgY29uc3QgRm9sZGFibGU6IEZvbGRhYmxlMTxVUkk+ID0ge1xuICBVUkksXG4gIHJlZHVjZTogX3JlZHVjZSxcbiAgZm9sZE1hcDogX2ZvbGRNYXAsXG4gIHJlZHVjZVJpZ2h0OiBfcmVkdWNlUmlnaHRcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi43LjBcbiAqL1xuZXhwb3J0IGNvbnN0IFRyYXZlcnNhYmxlOiBUcmF2ZXJzYWJsZTE8VVJJPiA9IHtcbiAgVVJJLFxuICBtYXA6IF9tYXAsXG4gIHJlZHVjZTogX3JlZHVjZSxcbiAgZm9sZE1hcDogX2ZvbGRNYXAsXG4gIHJlZHVjZVJpZ2h0OiBfcmVkdWNlUmlnaHQsXG4gIHRyYXZlcnNlOiBfdHJhdmVyc2UsXG4gIHNlcXVlbmNlXG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuNy4wXG4gKi9cbmV4cG9ydCBjb25zdCBDb21vbmFkOiBDb21vbmFkMTxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgZXh0ZW5kOiBfZXh0ZW5kLFxuICBleHRyYWN0XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGRvIG5vdGF0aW9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQHNpbmNlIDIuOS4wXG4gKi9cbmV4cG9ydCBjb25zdCBEbzogVHJlZTx7fT4gPVxuICAvKiNfX1BVUkVfXyovXG4gIG9mKF8uZW1wdHlSZWNvcmQpXG5cbi8qKlxuICogQHNpbmNlIDIuOC4wXG4gKi9cbmV4cG9ydCBjb25zdCBiaW5kVG8gPVxuICAvKiNfX1BVUkVfXyovXG4gIGJpbmRUb18oRnVuY3RvcilcblxuLyoqXG4gKiBAc2luY2UgMi44LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGJpbmQgPVxuICAvKiNfX1BVUkVfXyovXG4gIGJpbmRfKENoYWluKVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBwaXBlYWJsZSBzZXF1ZW5jZSBTXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQHNpbmNlIDIuOC4wXG4gKi9cbmV4cG9ydCBjb25zdCBhcFMgPVxuICAvKiNfX1BVUkVfXyovXG4gIGFwU18oQXBwbHkpXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIHV0aWxzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbGVtPEE+KEU6IEVxPEE+KTogKGE6IEEsIGZhOiBUcmVlPEE+KSA9PiBib29sZWFuIHtcbiAgY29uc3QgZ28gPSAoYTogQSwgZmE6IFRyZWU8QT4pOiBib29sZWFuID0+IEUuZXF1YWxzKGEsIGZhLnZhbHVlKSB8fCBmYS5mb3Jlc3Quc29tZSgodHJlZSkgPT4gZ28oYSwgdHJlZSkpXG4gIHJldHVybiBnb1xufVxuXG4vKipcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGV4aXN0cyA9IDxBPihwcmVkaWNhdGU6IFByZWRpY2F0ZTxBPikgPT4gKG1hOiBUcmVlPEE+KTogYm9vbGVhbiA9PlxuICBwcmVkaWNhdGUobWEudmFsdWUpIHx8IG1hLmZvcmVzdC5zb21lKGV4aXN0cyhwcmVkaWNhdGUpKVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBkZXByZWNhdGVkXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogVXNlIHNtYWxsLCBzcGVjaWZpYyBpbnN0YW5jZXMgaW5zdGVhZC5cbiAqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4wLjBcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBjb25zdCB0cmVlOiBNb25hZDE8VVJJPiAmIEZvbGRhYmxlMTxVUkk+ICYgVHJhdmVyc2FibGUxPFVSST4gJiBDb21vbmFkMTxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgb2YsXG4gIGFwOiBfYXAsXG4gIGNoYWluOiBfY2hhaW4sXG4gIHJlZHVjZTogX3JlZHVjZSxcbiAgZm9sZE1hcDogX2ZvbGRNYXAsXG4gIHJlZHVjZVJpZ2h0OiBfcmVkdWNlUmlnaHQsXG4gIHRyYXZlcnNlOiBfdHJhdmVyc2UsXG4gIHNlcXVlbmNlLFxuICBleHRyYWN0LFxuICBleHRlbmQ6IF9leHRlbmRcbn1cbiJdfQ==