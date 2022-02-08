"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.URI = exports.Functor = exports.Filterable = exports.Compactable = void 0;
exports.collect = collect;
exports.difference = exports.deleteAt = exports.compact = void 0;
exports.elem = elem;
exports.filterMapWithIndex = exports.filterMap = exports.filter = exports.empty = void 0;
exports.filterWithIndex = filterWithIndex;
exports.foldMapWithIndex = exports.foldMap = exports.flap = void 0;
exports.fromFoldable = fromFoldable;
exports.getDifferenceMagma = exports.fromMap = void 0;
exports.getEq = getEq;
exports.getFilterableWithIndex = getFilterableWithIndex;
exports.getIntersectionSemigroup = exports.getFunctorWithIndex = exports.getFoldableWithIndex = exports.getFoldable = void 0;
exports.getMonoid = getMonoid;
exports.getShow = getShow;
exports.getUnionSemigroup = exports.getUnionMonoid = exports.getTraversableWithIndex = exports.getTraversable = void 0;
exports.getWitherable = getWitherable;
exports.isEmpty = exports.intersection = exports.insertAt = void 0;
exports.isSubmap = isSubmap;
exports.keys = void 0;
exports.lookup = lookup;
exports.lookupWithKey = lookupWithKey;
exports.mapWithIndex = exports.map = void 0;
exports.member = member;
exports.partitionMapWithIndex = exports.partitionMap = exports.partition = exports.modifyAt = void 0;
exports.partitionWithIndex = partitionWithIndex;
exports.pop = pop;
exports.size = exports.singleton = exports.separate = exports.reduceWithIndex = exports.reduceRightWithIndex = exports.reduceRight = exports.reduce = exports.readonlyMap = void 0;
exports.toMap = toMap;
exports.toReadonlyArray = void 0;
exports.toUnfoldable = toUnfoldable;
exports.values = exports.upsertAt = exports.updateAt = exports.union = void 0;

var _Eq = require("./Eq");

var _function = require("./function");

var _Functor = require("./Functor");

var _ = _interopRequireWildcard(require("./internal"));

var O = _interopRequireWildcard(require("./Option"));

var _Separated = require("./Separated");

var _Witherable = require("./Witherable");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var Option = O.Option; // -------------------------------------------------------------------------------------
// interop
// -------------------------------------------------------------------------------------

/**
 * @category interop
 * @since 2.5.0
 */

var fromMap = function fromMap(m) {
  return new Map(m);
};
/**
 * @category interop
 * @since 2.5.0
 */


exports.fromMap = fromMap;

function toMap(m) {
  return new Map(m);
}
/**
 * @category instances
 * @since 2.5.0
 */


function getShow(SK, SA) {
  return {
    show: function show(m) {
      var entries = [];
      m.forEach(function (a, k) {
        entries.push("[".concat(SK.show(k), ", ").concat(SA.show(a), "]"));
      });
      return "new Map([".concat(entries.sort().join(', '), "])");
    }
  };
}
/**
 * Calculate the number of key/value pairs in a map
 *
 * @since 2.5.0
 */


var size = function size(m) {
  return m.size;
};
/**
 * Test whether or not a map is empty
 *
 * @since 2.5.0
 */


exports.size = size;

var isEmpty = function isEmpty(m) {
  return m.size === 0;
}; // TODO: remove non-curried overloading in v3

/**
 * Test whether or not a key exists in a map
 *
 * @since 2.5.0
 */


exports.isEmpty = isEmpty;

function member(E) {
  var lookupE = lookup(E);
  return function (k, m) {
    if (m === undefined) {
      var memberE = member(E);
      return function (m) {
        return memberE(k, m);
      };
    }

    return _.isSome(lookupE(k, m));
  };
}

function elem(E) {
  return function (a, m) {
    if (m === undefined) {
      var elemE = elem(E);
      return function (m) {
        return elemE(a, m);
      };
    }

    var values = m.values();
    var e; // tslint:disable-next-line: strict-boolean-expressions

    while (!(e = values.next()).done) {
      var v = e.value;

      if (E.equals(a, v)) {
        return true;
      }
    }

    return false;
  };
}
/**
 * Get a sorted `ReadonlyArray` of the keys contained in a `ReadonlyMap`.
 *
 * @since 2.5.0
 */


var keys = function keys(O) {
  return function (m) {
    return Array.from(m.keys()).sort(O.compare);
  };
};
/**
 * Get a sorted `ReadonlyArray` of the values contained in a `ReadonlyMap`.
 *
 * @since 2.5.0
 */


exports.keys = keys;

var values = function values(O) {
  return function (m) {
    return Array.from(m.values()).sort(O.compare);
  };
};
/**
 * @since 2.5.0
 */


exports.values = values;

function collect(O) {
  var keysO = keys(O);
  return function (f) {
    return function (m) {
      var out = [];
      var ks = keysO(m);

      var _iterator = _createForOfIteratorHelper(ks),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var key = _step.value;
          out.push(f(key, m.get(key)));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return out;
    };
  };
}
/**
 * Get a sorted `ReadonlyArray` of the key/value pairs contained in a `ReadonlyMap`.
 *
 * @since 2.5.0
 */


var toReadonlyArray = function toReadonlyArray(O) {
  return collect(O)(function (k, a) {
    return [k, a];
  });
};
/**
 * Unfolds a map into a list of key/value pairs
 *
 * @category destructors
 * @since 2.5.0
 */


exports.toReadonlyArray = toReadonlyArray;

function toUnfoldable(ord, U) {
  var toReadonlyArrayO = toReadonlyArray(ord);
  return function (d) {
    var kas = toReadonlyArrayO(d);
    var len = kas.length;
    return U.unfold(0, function (b) {
      return b < len ? _.some([kas[b], b + 1]) : _.none;
    });
  };
}
/**
 * Insert or replace a key/value pair in a `ReadonlyMap`.
 *
 * @category combinators
 * @since 2.10.0
 */


var upsertAt = function upsertAt(E) {
  var lookupWithKeyE = lookupWithKey(E);
  return function (k, a) {
    var lookupWithKeyEk = lookupWithKeyE(k);
    return function (m) {
      var found = lookupWithKeyEk(m);

      if (_.isNone(found)) {
        var out = new Map(m);
        out.set(k, a);
        return out;
      } else if (found.value[1] !== a) {
        var _out = new Map(m);

        _out.set(found.value[0], a);

        return _out;
      }

      return m;
    };
  };
};
/**
 * Delete a key and value from a map
 *
 * @category combinators
 * @since 2.5.0
 */


exports.upsertAt = upsertAt;

var deleteAt = function deleteAt(E) {
  var lookupWithKeyE = lookupWithKey(E);
  return function (k) {
    return function (m) {
      var found = lookupWithKeyE(k, m);

      if (_.isSome(found)) {
        var r = new Map(m);
        r["delete"](found.value[0]);
        return r;
      }

      return m;
    };
  };
};
/**
 * @since 2.5.0
 */


exports.deleteAt = deleteAt;

var updateAt = function updateAt(E) {
  var modifyAtE = modifyAt(E);
  return function (k, a) {
    return modifyAtE(k, function () {
      return a;
    });
  };
};
/**
 * @since 2.5.0
 */


exports.updateAt = updateAt;

var modifyAt = function modifyAt(E) {
  var lookupWithKeyE = lookupWithKey(E);
  return function (k, f) {
    return function (m) {
      var found = lookupWithKeyE(k, m);

      if (_.isNone(found)) {
        return _.none;
      }

      var _found$value = _slicedToArray(found.value, 2),
          fk = _found$value[0],
          fv = _found$value[1];

      var next = f(fv);

      if (next === fv) {
        return _.some(m);
      }

      var r = new Map(m);
      r.set(fk, next);
      return _.some(r);
    };
  };
};
/**
 * Delete a key and value from a map, returning the value as well as the subsequent map
 *
 * @since 2.5.0
 */


exports.modifyAt = modifyAt;

function pop(E) {
  var lookupE = lookup(E);
  var deleteAtE = deleteAt(E);
  return function (k) {
    var deleteAtEk = deleteAtE(k);
    return function (m) {
      return (0, _function.pipe)(lookupE(k, m), O.map(function (a) {
        return [a, deleteAtEk(m)];
      }));
    };
  };
} // TODO: remove non-curried overloading in v3

/**
 * Lookup the value for a key in a `Map`.
 * If the result is a `Some`, the existing key is also returned.
 *
 * @since 2.5.0
 */


function lookupWithKey(E) {
  return function (k, m) {
    if (m === undefined) {
      var lookupWithKeyE = lookupWithKey(E);
      return function (m) {
        return lookupWithKeyE(k, m);
      };
    }

    var entries = m.entries();
    var e; // tslint:disable-next-line: strict-boolean-expressions

    while (!(e = entries.next()).done) {
      var _e$value = _slicedToArray(e.value, 2),
          ka = _e$value[0],
          _a = _e$value[1];

      if (E.equals(ka, k)) {
        return _.some([ka, _a]);
      }
    }

    return _.none;
  };
} // TODO: remove non-curried overloading in v3

/**
 * Lookup the value for a key in a `Map`.
 *
 * @since 2.5.0
 */


function lookup(E) {
  var lookupWithKeyE = lookupWithKey(E);
  return function (k, m) {
    if (m === undefined) {
      var lookupE = lookup(E);
      return function (m) {
        return lookupE(k, m);
      };
    }

    return (0, _function.pipe)(lookupWithKeyE(k, m), O.map(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          _ = _ref2[0],
          a = _ref2[1];

      return a;
    }));
  };
} // TODO: remove non-curried overloading in v3

/**
 * Test whether or not one `Map` contains all of the keys and values contained in another `Map`
 *
 * @since 2.5.0
 */


function isSubmap(SK, SA) {
  var lookupWithKeyS = lookupWithKey(SK);
  return function (me, that) {
    if (that === undefined) {
      var isSubmapSKSA = isSubmap(SK, SA);
      return function (that) {
        return isSubmapSKSA(that, me);
      };
    }

    var entries = me.entries();
    var e; // tslint:disable-next-line: strict-boolean-expressions

    while (!(e = entries.next()).done) {
      var _e$value2 = _slicedToArray(e.value, 2),
          _k = _e$value2[0],
          _a2 = _e$value2[1];

      var d2OptA = lookupWithKeyS(_k, that);

      if (_.isNone(d2OptA) || !SK.equals(_k, d2OptA.value[0]) || !SA.equals(_a2, d2OptA.value[1])) {
        return false;
      }
    }

    return true;
  };
}
/**
 * @since 2.5.0
 */


var empty = // the type annotation here is intended (otherwise it doesn't type-check)
new Map();
/**
 * @category instances
 * @since 2.5.0
 */

exports.empty = empty;

function getEq(SK, SA) {
  var isSubmapSKSA = isSubmap(SK, SA);
  return (0, _Eq.fromEquals)(function (x, y) {
    return isSubmapSKSA(x, y) && isSubmapSKSA(y, x);
  });
}
/**
 * Gets `Monoid` instance for Maps given `Semigroup` instance for their values
 *
 * @category instances
 * @since 2.5.0
 */


function getMonoid(SK, SA) {
  var lookupWithKeyS = lookupWithKey(SK);
  return {
    concat: function concat(mx, my) {
      if (isEmpty(mx)) {
        return my;
      }

      if (isEmpty(my)) {
        return mx;
      }

      var r = new Map(mx);
      var entries = my.entries();
      var e; // tslint:disable-next-line: strict-boolean-expressions

      while (!(e = entries.next()).done) {
        var _e$value3 = _slicedToArray(e.value, 2),
            _k2 = _e$value3[0],
            _a3 = _e$value3[1];

        var mxOptA = lookupWithKeyS(_k2, mx);

        if (_.isSome(mxOptA)) {
          r.set(mxOptA.value[0], SA.concat(mxOptA.value[1], _a3));
        } else {
          r.set(_k2, _a3);
        }
      }

      return r;
    },
    empty: empty
  };
}
/**
 * Create a map with one key/value pair
 *
 * @category constructors
 * @since 2.5.0
 */


var singleton = function singleton(k, a) {
  return new Map([[k, a]]);
};
/**
 * Create a map from a foldable collection of key/value pairs, using the
 * specified `Magma` to combine values for duplicate keys.
 *
 * @category constructors
 * @since 2.5.0
 */


exports.singleton = singleton;

function fromFoldable(E, M, F) {
  return function (fka) {
    var lookupWithKeyE = lookupWithKey(E);
    return F.reduce(fka, new Map(), function (b, _ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
          k = _ref4[0],
          a = _ref4[1];

      var bOpt = lookupWithKeyE(k, b);

      if (_.isSome(bOpt)) {
        b.set(bOpt.value[0], M.concat(bOpt.value[1], a));
      } else {
        b.set(k, a);
      }

      return b;
    });
  };
}

var _mapWithIndex = function _mapWithIndex(fa, f) {
  var m = new Map();
  var entries = fa.entries();
  var e; // tslint:disable-next-line: strict-boolean-expressions

  while (!(e = entries.next()).done) {
    var _e$value4 = _slicedToArray(e.value, 2),
        key = _e$value4[0],
        _a4 = _e$value4[1];

    m.set(key, f(key, _a4));
  }

  return m;
};
/**
 * @category combinators
 * @since 2.10.0
 */


var partitionMapWithIndex = function partitionMapWithIndex(f) {
  return function (fa) {
    var left = new Map();
    var right = new Map();
    var entries = fa.entries();
    var e; // tslint:disable-next-line: strict-boolean-expressions

    while (!(e = entries.next()).done) {
      var _e$value5 = _slicedToArray(e.value, 2),
          _k3 = _e$value5[0],
          _a5 = _e$value5[1];

      var ei = f(_k3, _a5);

      if (_.isLeft(ei)) {
        left.set(_k3, ei.left);
      } else {
        right.set(_k3, ei.right);
      }
    }

    return (0, _Separated.separated)(left, right);
  };
};
/**
 * @category combinators
 * @since 2.10.0
 */


exports.partitionMapWithIndex = partitionMapWithIndex;

function partitionWithIndex(predicateWithIndex) {
  return function (m) {
    var left = new Map();
    var right = new Map();
    var entries = m.entries();
    var e; // tslint:disable-next-line: strict-boolean-expressions

    while (!(e = entries.next()).done) {
      var _e$value6 = _slicedToArray(e.value, 2),
          _k4 = _e$value6[0],
          _a6 = _e$value6[1];

      if (predicateWithIndex(_k4, _a6)) {
        right.set(_k4, _a6);
      } else {
        left.set(_k4, _a6);
      }
    }

    return (0, _Separated.separated)(left, right);
  };
}
/**
 * @category combinators
 * @since 2.10.0
 */


var filterMapWithIndex = function filterMapWithIndex(f) {
  return function (fa) {
    var m = new Map();
    var entries = fa.entries();
    var e; // tslint:disable-next-line: strict-boolean-expressions

    while (!(e = entries.next()).done) {
      var _e$value7 = _slicedToArray(e.value, 2),
          _k5 = _e$value7[0],
          _a7 = _e$value7[1];

      var o = f(_k5, _a7);

      if (_.isSome(o)) {
        m.set(_k5, o.value);
      }
    }

    return m;
  };
};
/**
 * @category combinators
 * @since 2.10.0
 */


exports.filterMapWithIndex = filterMapWithIndex;

function filterWithIndex(predicateWithIndex) {
  return function (m) {
    var out = new Map();
    var entries = m.entries();
    var e; // tslint:disable-next-line: strict-boolean-expressions

    while (!(e = entries.next()).done) {
      var _e$value8 = _slicedToArray(e.value, 2),
          _k6 = _e$value8[0],
          _a8 = _e$value8[1];

      if (predicateWithIndex(_k6, _a8)) {
        out.set(_k6, _a8);
      }
    }

    return out;
  };
} // -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------


var _map = function _map(fa, f) {
  return _mapWithIndex(fa, function (_, a) {
    return f(a);
  });
};

var _filter = function _filter(fa, p) {
  return _filterWithIndex(fa, function (_, a) {
    return p(a);
  });
};

var _filterMap = function _filterMap(fa, f) {
  return _filterMapWithIndex(fa, function (_, a) {
    return f(a);
  });
};

var _partition = function _partition(fa, predicate) {
  return _partitionWithIndex(fa, function (_, a) {
    return predicate(a);
  });
};

var _partitionMap = function _partitionMap(fa, f) {
  return _partitionMapWithIndex(fa, function (_, a) {
    return f(a);
  });
};

var _filterWithIndex = function _filterWithIndex(fa, p) {
  return (0, _function.pipe)(fa, filterWithIndex(p));
};

var _filterMapWithIndex = function _filterMapWithIndex(fa, f) {
  return (0, _function.pipe)(fa, filterMapWithIndex(f));
};

var _partitionWithIndex = function _partitionWithIndex(fa, p) {
  return (0, _function.pipe)(fa, partitionWithIndex(p));
};

var _partitionMapWithIndex = function _partitionMapWithIndex(fa, f) {
  return (0, _function.pipe)(fa, partitionMapWithIndex(f));
}; // -------------------------------------------------------------------------------------
// type class members
// -------------------------------------------------------------------------------------

/**
 * @category Compactable
 * @since 2.5.0
 */


var compact = function compact(fa) {
  var m = new Map();
  var entries = fa.entries();
  var e; // tslint:disable-next-line: strict-boolean-expressions

  while (!(e = entries.next()).done) {
    var _e$value9 = _slicedToArray(e.value, 2),
        _k7 = _e$value9[0],
        oa = _e$value9[1];

    if (_.isSome(oa)) {
      m.set(_k7, oa.value);
    }
  }

  return m;
};
/**
 * @category Filterable
 * @since 2.5.0
 */


exports.compact = compact;

var filter = function filter(predicate) {
  return function (fa) {
    return _filter(fa, predicate);
  };
};
/**
 * @category Filterable
 * @since 2.5.0
 */


exports.filter = filter;

var filterMap = function filterMap(f) {
  return function (fa) {
    return _filterMap(fa, f);
  };
};
/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent some computational context.
 *
 * @category Functor
 * @since 2.5.0
 */


exports.filterMap = filterMap;

var map = function map(f) {
  return function (fa) {
    return _map(fa, f);
  };
};
/**
 * @category FunctorWithIndex
 * @since 2.7.1
 */


exports.map = map;

var mapWithIndex = function mapWithIndex(f) {
  return function (fa) {
    return _mapWithIndex(fa, f);
  };
};
/**
 * @category Filterable
 * @since 2.5.0
 */


exports.mapWithIndex = mapWithIndex;

var partition = function partition(predicate) {
  return function (fa) {
    return _partition(fa, predicate);
  };
};
/**
 * @category Filterable
 * @since 2.5.0
 */


exports.partition = partition;

var partitionMap = function partitionMap(f) {
  return function (fa) {
    return _partitionMap(fa, f);
  };
};
/**
 * @category Compactable
 * @since 2.5.0
 */


exports.partitionMap = partitionMap;

var separate = function separate(fa) {
  var left = new Map();
  var right = new Map();
  var entries = fa.entries();
  var e; // tslint:disable-next-line: strict-boolean-expressions

  while (!(e = entries.next()).done) {
    var _e$value10 = _slicedToArray(e.value, 2),
        _k8 = _e$value10[0],
        ei = _e$value10[1];

    if (_.isLeft(ei)) {
      left.set(_k8, ei.left);
    } else {
      right.set(_k8, ei.right);
    }
  }

  return (0, _Separated.separated)(left, right);
}; // -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------

/**
 * @category instances
 * @since 2.5.0
 */


exports.separate = separate;
var URI = 'ReadonlyMap';
/**
 * @category instances
 * @since 2.5.0
 */

exports.URI = URI;

/**
 * @category instances
 * @since 2.11.0
 */
var getUnionSemigroup = function getUnionSemigroup(E, S) {
  var unionES = union(E, S);
  return {
    concat: function concat(first, second) {
      return unionES(second)(first);
    }
  };
};
/**
 * @category instances
 * @since 2.11.0
 */


exports.getUnionSemigroup = getUnionSemigroup;

var getUnionMonoid = function getUnionMonoid(E, S) {
  return {
    concat: getUnionSemigroup(E, S).concat,
    empty: empty
  };
};
/**
 * @category instances
 * @since 2.11.0
 */


exports.getUnionMonoid = getUnionMonoid;

var getIntersectionSemigroup = function getIntersectionSemigroup(E, S) {
  var intersectionES = intersection(E, S);
  return {
    concat: function concat(first, second) {
      return intersectionES(second)(first);
    }
  };
};
/**
 * @category instances
 * @since 2.11.0
 */


exports.getIntersectionSemigroup = getIntersectionSemigroup;

var getDifferenceMagma = function getDifferenceMagma(E) {
  return function () {
    var differenceE = difference(E);
    return {
      concat: function concat(first, second) {
        return differenceE(second)(first);
      }
    };
  };
};
/**
 * @category instances
 * @since 2.5.0
 */


exports.getDifferenceMagma = getDifferenceMagma;

function getFilterableWithIndex() {
  return {
    URI: URI,
    _E: undefined,
    map: _map,
    mapWithIndex: _mapWithIndex,
    compact: compact,
    separate: separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap,
    partitionMapWithIndex: _partitionMapWithIndex,
    partitionWithIndex: _partitionWithIndex,
    filterMapWithIndex: _filterMapWithIndex,
    filterWithIndex: _filterWithIndex
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

var getFunctorWithIndex = function getFunctorWithIndex() {
  return {
    URI: URI,
    _E: undefined,
    map: _map,
    mapWithIndex: _mapWithIndex
  };
};
/**
 * @category instances
 * @since 2.7.0
 */


exports.getFunctorWithIndex = getFunctorWithIndex;
var Compactable = {
  URI: URI,
  compact: compact,
  separate: separate
};
/**
 * @category instances
 * @since 2.7.0
 */

exports.Compactable = Compactable;
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
 * @since 2.11.0
 */

exports.Filterable = Filterable;

var reduce = function reduce(O) {
  var reduceWithIndexO = reduceWithIndex(O);
  return function (b, f) {
    return reduceWithIndexO(b, function (_, b, a) {
      return f(b, a);
    });
  };
};
/**
 * @since 2.11.0
 */


exports.reduce = reduce;

var foldMap = function foldMap(O) {
  var foldMapWithIndexO = foldMapWithIndex(O);
  return function (M) {
    var foldMapWithIndexOM = foldMapWithIndexO(M);
    return function (f) {
      return foldMapWithIndexOM(function (_, a) {
        return f(a);
      });
    };
  };
};
/**
 * @since 2.11.0
 */


exports.foldMap = foldMap;

var reduceRight = function reduceRight(O) {
  var reduceRightWithIndexO = reduceRightWithIndex(O);
  return function (b, f) {
    return reduceRightWithIndexO(b, function (_, b, a) {
      return f(b, a);
    });
  };
};
/**
 * @category instances
 * @since 2.10.0
 */


exports.reduceRight = reduceRight;

var getFoldable = function getFoldable(O) {
  var reduceO = reduce(O);
  var foldMapO = foldMap(O);
  var reduceRightO = reduceRight(O);
  return {
    URI: URI,
    _E: undefined,
    reduce: function reduce(fa, b, f) {
      return (0, _function.pipe)(fa, reduceO(b, f));
    },
    foldMap: function foldMap(M) {
      var foldMapOM = foldMapO(M);
      return function (fa, f) {
        return (0, _function.pipe)(fa, foldMapOM(f));
      };
    },
    reduceRight: function reduceRight(fa, b, f) {
      return (0, _function.pipe)(fa, reduceRightO(b, f));
    }
  };
};
/**
 * @since 2.11.0
 */


exports.getFoldable = getFoldable;

var reduceWithIndex = function reduceWithIndex(O) {
  var keysO = keys(O);
  return function (b, f) {
    return function (m) {
      var out = b;

      var _iterator2 = _createForOfIteratorHelper(keysO(m)),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _k9 = _step2.value;
          out = f(_k9, out, m.get(_k9));
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return out;
    };
  };
};
/**
 * @since 2.11.0
 */


exports.reduceWithIndex = reduceWithIndex;

var foldMapWithIndex = function foldMapWithIndex(O) {
  var keysO = keys(O);
  return function (M) {
    return function (f) {
      return function (m) {
        var out = M.empty;

        var _iterator3 = _createForOfIteratorHelper(keysO(m)),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _k10 = _step3.value;
            out = M.concat(out, f(_k10, m.get(_k10)));
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }

        return out;
      };
    };
  };
};
/**
 * @since 2.11.0
 */


exports.foldMapWithIndex = foldMapWithIndex;

var reduceRightWithIndex = function reduceRightWithIndex(O) {
  var keysO = keys(O);
  return function (b, f) {
    return function (m) {
      var out = b;
      var ks = keysO(m);
      var len = ks.length;

      for (var i = len - 1; i >= 0; i--) {
        var _k11 = ks[i];
        out = f(_k11, m.get(_k11), out);
      }

      return out;
    };
  };
};
/**
 * @category instances
 * @since 2.10.0
 */


exports.reduceRightWithIndex = reduceRightWithIndex;

var getFoldableWithIndex = function getFoldableWithIndex(O) {
  var F = getFoldable(O);
  var reduceWithIndexO = reduceWithIndex(O);
  var foldMapWithIndexO = foldMapWithIndex(O);
  var reduceRightWithIndexO = reduceRightWithIndex(O);
  return {
    URI: URI,
    _E: undefined,
    reduce: F.reduce,
    foldMap: F.foldMap,
    reduceRight: F.reduceRight,
    reduceWithIndex: function reduceWithIndex(fa, b, f) {
      return (0, _function.pipe)(fa, reduceWithIndexO(b, f));
    },
    foldMapWithIndex: function foldMapWithIndex(M) {
      var foldMapWithIndexOM = foldMapWithIndexO(M);
      return function (fa, f) {
        return (0, _function.pipe)(fa, foldMapWithIndexOM(f));
      };
    },
    reduceRightWithIndex: function reduceRightWithIndex(fa, b, f) {
      return (0, _function.pipe)(fa, reduceRightWithIndexO(b, f));
    }
  };
};
/**
 * @category instances
 * @since 2.10.0
 */


exports.getFoldableWithIndex = getFoldableWithIndex;

var getTraversable = function getTraversable(O) {
  var TWI = getTraversableWithIndex(O);
  var F = getFoldable(O);
  return {
    URI: URI,
    _E: undefined,
    map: _map,
    reduce: F.reduce,
    foldMap: F.foldMap,
    reduceRight: F.reduceRight,
    traverse: TWI.traverse,
    sequence: TWI.sequence
  };
};
/**
 * @category instances
 * @since 2.10.0
 */


exports.getTraversable = getTraversable;

var getTraversableWithIndex = function getTraversableWithIndex(O) {
  var FWI = getFoldableWithIndex(O);
  var keysO = keys(O);

  var traverseWithIndex = function traverseWithIndex(F) {
    return function (ta, f) {
      var fm = F.of(new Map());
      var ks = keysO(ta);
      var len = ks.length;

      var _loop = function _loop(i) {
        var key = ks[i];
        var a = ta.get(key);
        fm = F.ap(F.map(fm, function (m) {
          return function (b) {
            return m.set(key, b);
          };
        }), f(key, a));
      };

      for (var i = 0; i < len; i++) {
        _loop(i);
      }

      return fm;
    };
  };

  var traverse = function traverse(F) {
    var traverseWithIndexF = traverseWithIndex(F);
    return function (ta, f) {
      return traverseWithIndexF(ta, function (_, a) {
        return f(a);
      });
    };
  };

  var sequence = function sequence(F) {
    var traverseWithIndexF = traverseWithIndex(F);
    return function (ta) {
      return traverseWithIndexF(ta, _function.SK);
    };
  };

  return {
    URI: URI,
    _E: undefined,
    map: _map,
    mapWithIndex: _mapWithIndex,
    reduce: FWI.reduce,
    foldMap: FWI.foldMap,
    reduceRight: FWI.reduceRight,
    reduceWithIndex: FWI.reduceWithIndex,
    foldMapWithIndex: FWI.foldMapWithIndex,
    reduceRightWithIndex: FWI.reduceRightWithIndex,
    traverse: traverse,
    sequence: sequence,
    traverseWithIndex: traverseWithIndex
  };
};
/**
 * @category instances
 * @since 2.5.0
 */


exports.getTraversableWithIndex = getTraversableWithIndex;

function getWitherable(O) {
  var TWI = getTraversableWithIndex(O);
  return {
    URI: URI,
    _E: undefined,
    map: _map,
    compact: compact,
    separate: separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap,
    reduce: TWI.reduce,
    foldMap: TWI.foldMap,
    reduceRight: TWI.reduceRight,
    traverse: TWI.traverse,
    sequence: TWI.sequence,
    mapWithIndex: _mapWithIndex,
    reduceWithIndex: TWI.reduceWithIndex,
    foldMapWithIndex: TWI.foldMapWithIndex,
    reduceRightWithIndex: TWI.reduceRightWithIndex,
    traverseWithIndex: TWI.traverseWithIndex,
    wilt: (0, _Witherable.wiltDefault)(TWI, Compactable),
    wither: (0, _Witherable.witherDefault)(TWI, Compactable)
  };
} // -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------

/**
 * @since 2.11.0
 */


var union = function union(E, M) {
  var lookupE = lookup(E);
  return function (second) {
    return function (first) {
      if (isEmpty(first)) {
        return second;
      }

      if (isEmpty(second)) {
        return first;
      }

      var out = new Map();
      var firstEntries = first.entries();
      var e;

      while (!(e = firstEntries.next()).done) {
        var _e$value11 = _slicedToArray(e.value, 2),
            _k12 = _e$value11[0],
            _a9 = _e$value11[1];

        var oka = lookupE(_k12)(second);

        if (_.isSome(oka)) {
          out.set(_k12, M.concat(_a9, oka.value));
        } else {
          out.set(_k12, _a9);
        }
      }

      var secondEntries = second.entries();

      while (!(e = secondEntries.next()).done) {
        var _e$value12 = _slicedToArray(e.value, 2),
            _k13 = _e$value12[0],
            _a10 = _e$value12[1];

        var _oka = lookupE(_k13)(out);

        if (_.isNone(_oka)) {
          out.set(_k13, _a10);
        }
      }

      return out;
    };
  };
};
/**
 * @since 2.11.0
 */


exports.union = union;

var intersection = function intersection(E, M) {
  var lookupE = lookup(E);
  return function (second) {
    return function (first) {
      if (isEmpty(first) || isEmpty(second)) {
        return empty;
      }

      var out = new Map();
      var entries = first.entries();
      var e;

      while (!(e = entries.next()).done) {
        var _e$value13 = _slicedToArray(e.value, 2),
            _k14 = _e$value13[0],
            _a11 = _e$value13[1];

        var oka = lookupE(_k14)(second);

        if (_.isSome(oka)) {
          out.set(_k14, M.concat(_a11, oka.value));
        }
      }

      return out;
    };
  };
};
/**
 * @since 2.11.0
 */


exports.intersection = intersection;

var difference = function difference(E) {
  var memberE = member(E);
  return function (second) {
    return function (first) {
      if (isEmpty(first)) {
        return second;
      }

      if (isEmpty(second)) {
        return first;
      }

      var out = new Map();
      var firstEntries = first.entries();
      var e;

      while (!(e = firstEntries.next()).done) {
        var _e$value14 = _slicedToArray(e.value, 2),
            _k15 = _e$value14[0],
            _a12 = _e$value14[1];

        if (!memberE(_k15)(second)) {
          out.set(_k15, _a12);
        }
      }

      var secondEntries = second.entries();

      while (!(e = secondEntries.next()).done) {
        var _e$value15 = _slicedToArray(e.value, 2),
            _k16 = _e$value15[0],
            _a13 = _e$value15[1];

        if (!memberE(_k16)(first)) {
          out.set(_k16, _a13);
        }
      }

      return out;
    };
  };
}; // -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------

/**
 * Use [`upsertAt`](#upsertat) instead.
 *
 * @category combinators
 * @since 2.5.0
 * @deprecated
 */


exports.difference = difference;
var insertAt = upsertAt;
/**
 * Use small, specific instances instead.
 *
 * @category instances
 * @since 2.5.0
 * @deprecated
 */

exports.insertAt = insertAt;
var readonlyMap = {
  URI: URI,
  map: _map,
  compact: compact,
  separate: separate,
  filter: _filter,
  filterMap: _filterMap,
  partition: _partition,
  partitionMap: _partitionMap
};
exports.readonlyMap = readonlyMap;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mcC10cy9SZWFkb25seU1hcC50cyJdLCJuYW1lcyI6WyJPcHRpb24iLCJPIiwiZnJvbU1hcCIsIm0iLCJNYXAiLCJ0b01hcCIsImdldFNob3ciLCJTSyIsIlNBIiwic2hvdyIsImVudHJpZXMiLCJmb3JFYWNoIiwiYSIsImsiLCJwdXNoIiwic29ydCIsImpvaW4iLCJzaXplIiwiaXNFbXB0eSIsIm1lbWJlciIsIkUiLCJsb29rdXBFIiwibG9va3VwIiwidW5kZWZpbmVkIiwibWVtYmVyRSIsIl8iLCJpc1NvbWUiLCJlbGVtIiwiZWxlbUUiLCJ2YWx1ZXMiLCJlIiwibmV4dCIsImRvbmUiLCJ2IiwidmFsdWUiLCJlcXVhbHMiLCJrZXlzIiwiQXJyYXkiLCJmcm9tIiwiY29tcGFyZSIsImNvbGxlY3QiLCJrZXlzTyIsImYiLCJvdXQiLCJrcyIsImtleSIsImdldCIsInRvUmVhZG9ubHlBcnJheSIsInRvVW5mb2xkYWJsZSIsIm9yZCIsIlUiLCJ0b1JlYWRvbmx5QXJyYXlPIiwiZCIsImthcyIsImxlbiIsImxlbmd0aCIsInVuZm9sZCIsImIiLCJzb21lIiwibm9uZSIsInVwc2VydEF0IiwibG9va3VwV2l0aEtleUUiLCJsb29rdXBXaXRoS2V5IiwibG9va3VwV2l0aEtleUVrIiwiZm91bmQiLCJpc05vbmUiLCJzZXQiLCJkZWxldGVBdCIsInIiLCJ1cGRhdGVBdCIsIm1vZGlmeUF0RSIsIm1vZGlmeUF0IiwiZmsiLCJmdiIsInBvcCIsImRlbGV0ZUF0RSIsImRlbGV0ZUF0RWsiLCJtYXAiLCJrYSIsImlzU3VibWFwIiwibG9va3VwV2l0aEtleVMiLCJtZSIsInRoYXQiLCJpc1N1Ym1hcFNLU0EiLCJkMk9wdEEiLCJlbXB0eSIsImdldEVxIiwieCIsInkiLCJnZXRNb25vaWQiLCJjb25jYXQiLCJteCIsIm15IiwibXhPcHRBIiwic2luZ2xldG9uIiwiZnJvbUZvbGRhYmxlIiwiTSIsIkYiLCJma2EiLCJyZWR1Y2UiLCJiT3B0IiwiX21hcFdpdGhJbmRleCIsImZhIiwicGFydGl0aW9uTWFwV2l0aEluZGV4IiwibGVmdCIsInJpZ2h0IiwiZWkiLCJpc0xlZnQiLCJwYXJ0aXRpb25XaXRoSW5kZXgiLCJwcmVkaWNhdGVXaXRoSW5kZXgiLCJmaWx0ZXJNYXBXaXRoSW5kZXgiLCJvIiwiZmlsdGVyV2l0aEluZGV4IiwiX21hcCIsIl9maWx0ZXIiLCJwIiwiX2ZpbHRlcldpdGhJbmRleCIsIl9maWx0ZXJNYXAiLCJfZmlsdGVyTWFwV2l0aEluZGV4IiwiX3BhcnRpdGlvbiIsInByZWRpY2F0ZSIsIl9wYXJ0aXRpb25XaXRoSW5kZXgiLCJfcGFydGl0aW9uTWFwIiwiX3BhcnRpdGlvbk1hcFdpdGhJbmRleCIsImNvbXBhY3QiLCJvYSIsImZpbHRlciIsImZpbHRlck1hcCIsIm1hcFdpdGhJbmRleCIsInBhcnRpdGlvbiIsInBhcnRpdGlvbk1hcCIsInNlcGFyYXRlIiwiVVJJIiwiZ2V0VW5pb25TZW1pZ3JvdXAiLCJTIiwidW5pb25FUyIsInVuaW9uIiwiZmlyc3QiLCJzZWNvbmQiLCJnZXRVbmlvbk1vbm9pZCIsImdldEludGVyc2VjdGlvblNlbWlncm91cCIsImludGVyc2VjdGlvbkVTIiwiaW50ZXJzZWN0aW9uIiwiZ2V0RGlmZmVyZW5jZU1hZ21hIiwiZGlmZmVyZW5jZUUiLCJkaWZmZXJlbmNlIiwiZ2V0RmlsdGVyYWJsZVdpdGhJbmRleCIsIl9FIiwiRnVuY3RvciIsImZsYXAiLCJnZXRGdW5jdG9yV2l0aEluZGV4IiwiQ29tcGFjdGFibGUiLCJGaWx0ZXJhYmxlIiwicmVkdWNlV2l0aEluZGV4TyIsInJlZHVjZVdpdGhJbmRleCIsImZvbGRNYXAiLCJmb2xkTWFwV2l0aEluZGV4TyIsImZvbGRNYXBXaXRoSW5kZXgiLCJmb2xkTWFwV2l0aEluZGV4T00iLCJyZWR1Y2VSaWdodCIsInJlZHVjZVJpZ2h0V2l0aEluZGV4TyIsInJlZHVjZVJpZ2h0V2l0aEluZGV4IiwiZ2V0Rm9sZGFibGUiLCJyZWR1Y2VPIiwiZm9sZE1hcE8iLCJyZWR1Y2VSaWdodE8iLCJmb2xkTWFwT00iLCJpIiwiZ2V0Rm9sZGFibGVXaXRoSW5kZXgiLCJnZXRUcmF2ZXJzYWJsZSIsIlRXSSIsImdldFRyYXZlcnNhYmxlV2l0aEluZGV4IiwidHJhdmVyc2UiLCJzZXF1ZW5jZSIsIkZXSSIsInRyYXZlcnNlV2l0aEluZGV4IiwidGEiLCJmbSIsIm9mIiwiYXAiLCJ0cmF2ZXJzZVdpdGhJbmRleEYiLCJnZXRXaXRoZXJhYmxlIiwid2lsdCIsIndpdGhlciIsImZpcnN0RW50cmllcyIsIm9rYSIsInNlY29uZEVudHJpZXMiLCJpbnNlcnRBdCIsInJlYWRvbmx5TWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNQTs7QUFLQTs7QUFDQTs7QUFHQTs7QUFHQTs7QUFLQTs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFT0EsTSxHQUFTQyxDLENBQUVELE0sRUFFbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLElBQU1FLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQU9DLENBQVA7QUFBQSxTQUEyQyxJQUFJQyxHQUFKLENBQVFELENBQVIsQ0FBM0M7QUFBQSxDQUFoQjtBQUVQO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNPLFNBQVNFLEtBQVQsQ0FBcUJGLENBQXJCLEVBQXNEO0FBQzNELFNBQU8sSUFBSUMsR0FBSixDQUFRRCxDQUFSLENBQVA7QUFDRDtBQUVEO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxTQUFTRyxPQUFULENBQXVCQyxFQUF2QixFQUFvQ0MsRUFBcEMsRUFBMEU7QUFDL0UsU0FBTztBQUNMQyxJQUFBQSxJQUFJLEVBQUUsY0FBQ04sQ0FBRCxFQUFPO0FBQ1gsVUFBTU8sT0FBc0IsR0FBRyxFQUEvQjtBQUNBUCxNQUFBQSxDQUFDLENBQUNRLE9BQUYsQ0FBVSxVQUFDQyxDQUFELEVBQUlDLENBQUosRUFBVTtBQUNsQkgsUUFBQUEsT0FBTyxDQUFDSSxJQUFSLFlBQWlCUCxFQUFFLENBQUNF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Ii8qKlxuICogQHNpbmNlIDIuNS4wXG4gKi9cbmltcG9ydCB7IEFwcGxpY2F0aXZlIH0gZnJvbSAnLi9BcHBsaWNhdGl2ZSdcbmltcG9ydCB7IENvbXBhY3RhYmxlMiB9IGZyb20gJy4vQ29tcGFjdGFibGUnXG5pbXBvcnQgeyBFaXRoZXIgfSBmcm9tICcuL0VpdGhlcidcbmltcG9ydCB7IEVxLCBmcm9tRXF1YWxzIH0gZnJvbSAnLi9FcSdcbmltcG9ydCB7IEZpbHRlcmFibGUyIH0gZnJvbSAnLi9GaWx0ZXJhYmxlJ1xuaW1wb3J0IHsgRmlsdGVyYWJsZVdpdGhJbmRleDJDIH0gZnJvbSAnLi9GaWx0ZXJhYmxlV2l0aEluZGV4J1xuaW1wb3J0IHsgRm9sZGFibGUsIEZvbGRhYmxlMSwgRm9sZGFibGUyLCBGb2xkYWJsZTJDLCBGb2xkYWJsZTMgfSBmcm9tICcuL0ZvbGRhYmxlJ1xuaW1wb3J0IHsgRm9sZGFibGVXaXRoSW5kZXgyQyB9IGZyb20gJy4vRm9sZGFibGVXaXRoSW5kZXgnXG5pbXBvcnQgeyBwaXBlLCBTSyB9IGZyb20gJy4vZnVuY3Rpb24nXG5pbXBvcnQgeyBmbGFwIGFzIGZsYXBfLCBGdW5jdG9yMiB9IGZyb20gJy4vRnVuY3RvcidcbmltcG9ydCB7IEZ1bmN0b3JXaXRoSW5kZXgyQyB9IGZyb20gJy4vRnVuY3RvcldpdGhJbmRleCdcbmltcG9ydCB7IEhLVCwgS2luZCwgS2luZDIsIEtpbmQzLCBVUklTLCBVUklTMiwgVVJJUzMgfSBmcm9tICcuL0hLVCdcbmltcG9ydCAqIGFzIF8gZnJvbSAnLi9pbnRlcm5hbCdcbmltcG9ydCB7IE1hZ21hIH0gZnJvbSAnLi9NYWdtYSdcbmltcG9ydCB7IE1vbm9pZCB9IGZyb20gJy4vTW9ub2lkJ1xuaW1wb3J0ICogYXMgTyBmcm9tICcuL09wdGlvbidcbmltcG9ydCB7IE9yZCB9IGZyb20gJy4vT3JkJ1xuaW1wb3J0IHsgUHJlZGljYXRlIH0gZnJvbSAnLi9QcmVkaWNhdGUnXG5pbXBvcnQgeyBSZWZpbmVtZW50IH0gZnJvbSAnLi9SZWZpbmVtZW50J1xuaW1wb3J0IHsgU2VtaWdyb3VwIH0gZnJvbSAnLi9TZW1pZ3JvdXAnXG5pbXBvcnQgeyBTZXBhcmF0ZWQsIHNlcGFyYXRlZCB9IGZyb20gJy4vU2VwYXJhdGVkJ1xuaW1wb3J0IHsgU2hvdyB9IGZyb20gJy4vU2hvdydcbmltcG9ydCB7IFRyYXZlcnNhYmxlMkMgfSBmcm9tICcuL1RyYXZlcnNhYmxlJ1xuaW1wb3J0IHsgVHJhdmVyc2FibGVXaXRoSW5kZXgyQyB9IGZyb20gJy4vVHJhdmVyc2FibGVXaXRoSW5kZXgnXG5pbXBvcnQgeyBVbmZvbGRhYmxlLCBVbmZvbGRhYmxlMSB9IGZyb20gJy4vVW5mb2xkYWJsZSdcbmltcG9ydCB7IHdpbHREZWZhdWx0LCBXaXRoZXJhYmxlMkMsIHdpdGhlckRlZmF1bHQgfSBmcm9tICcuL1dpdGhlcmFibGUnXG5cbmltcG9ydCBPcHRpb24gPSBPLk9wdGlvblxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBpbnRlcm9wXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQGNhdGVnb3J5IGludGVyb3BcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgY29uc3QgZnJvbU1hcCA9IDxLLCBBPihtOiBNYXA8SywgQT4pOiBSZWFkb25seU1hcDxLLCBBPiA9PiBuZXcgTWFwKG0pXG5cbi8qKlxuICogQGNhdGVnb3J5IGludGVyb3BcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9NYXA8SywgQT4obTogUmVhZG9ubHlNYXA8SywgQT4pOiBNYXA8SywgQT4ge1xuICByZXR1cm4gbmV3IE1hcChtKVxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2hvdzxLLCBBPihTSzogU2hvdzxLPiwgU0E6IFNob3c8QT4pOiBTaG93PFJlYWRvbmx5TWFwPEssIEE+PiB7XG4gIHJldHVybiB7XG4gICAgc2hvdzogKG0pID0+IHtcbiAgICAgIGNvbnN0IGVudHJpZXM6IEFycmF5PHN0cmluZz4gPSBbXVxuICAgICAgbS5mb3JFYWNoKChhLCBrKSA9PiB7XG4gICAgICAgIGVudHJpZXMucHVzaChgWyR7U0suc2hvdyhrKX0sICR7U0Euc2hvdyhhKX1dYClcbiAgICAgIH0pXG4gICAgICByZXR1cm4gYG5ldyBNYXAoWyR7ZW50cmllcy5zb3J0KCkuam9pbignLCAnKX1dKWBcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBDYWxjdWxhdGUgdGhlIG51bWJlciBvZiBrZXkvdmFsdWUgcGFpcnMgaW4gYSBtYXBcbiAqXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGNvbnN0IHNpemUgPSA8SywgQT4obTogUmVhZG9ubHlNYXA8SywgQT4pOiBudW1iZXIgPT4gbS5zaXplXG5cbi8qKlxuICogVGVzdCB3aGV0aGVyIG9yIG5vdCBhIG1hcCBpcyBlbXB0eVxuICpcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgY29uc3QgaXNFbXB0eSA9IDxLLCBBPihtOiBSZWFkb25seU1hcDxLLCBBPik6IGJvb2xlYW4gPT4gbS5zaXplID09PSAwXG5cbi8vIFRPRE86IHJlbW92ZSBub24tY3VycmllZCBvdmVybG9hZGluZyBpbiB2M1xuLyoqXG4gKiBUZXN0IHdoZXRoZXIgb3Igbm90IGEga2V5IGV4aXN0cyBpbiBhIG1hcFxuICpcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gbWVtYmVyPEs+KFxuICBFOiBFcTxLPlxuKToge1xuICAoazogSyk6IDxBPihtOiBSZWFkb25seU1hcDxLLCBBPikgPT4gYm9vbGVhblxuICA8QT4oazogSywgbTogUmVhZG9ubHlNYXA8SywgQT4pOiBib29sZWFuXG59XG5leHBvcnQgZnVuY3Rpb24gbWVtYmVyPEs+KEU6IEVxPEs+KTogPEE+KGs6IEssIG0/OiBSZWFkb25seU1hcDxLLCBBPikgPT4gYm9vbGVhbiB8ICgobTogUmVhZG9ubHlNYXA8SywgQT4pID0+IGJvb2xlYW4pIHtcbiAgY29uc3QgbG9va3VwRSA9IGxvb2t1cChFKVxuICByZXR1cm4gKGssIG0/KSA9PiB7XG4gICAgaWYgKG0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgbWVtYmVyRSA9IG1lbWJlcihFKVxuICAgICAgcmV0dXJuIChtKSA9PiBtZW1iZXJFKGssIG0pXG4gICAgfVxuICAgIHJldHVybiBfLmlzU29tZShsb29rdXBFKGssIG0pKVxuICB9XG59XG5cbmludGVyZmFjZSBOZXh0PEE+IHtcbiAgcmVhZG9ubHkgZG9uZT86IGJvb2xlYW5cbiAgcmVhZG9ubHkgdmFsdWU6IEFcbn1cblxuLy8gVE9ETzogcmVtb3ZlIG5vbi1jdXJyaWVkIG92ZXJsb2FkaW5nIGluIHYzXG4vKipcbiAqIFRlc3Qgd2hldGhlciBvciBub3QgYSB2YWx1ZSBpcyBhIG1lbWJlciBvZiBhIG1hcFxuICpcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gZWxlbTxBPihcbiAgRTogRXE8QT5cbik6IHtcbiAgKGE6IEEpOiA8Sz4obTogUmVhZG9ubHlNYXA8SywgQT4pID0+IGJvb2xlYW5cbiAgPEs+KGE6IEEsIG06IFJlYWRvbmx5TWFwPEssIEE+KTogYm9vbGVhblxufVxuZXhwb3J0IGZ1bmN0aW9uIGVsZW08QT4oRTogRXE8QT4pOiA8Sz4oYTogQSwgbT86IFJlYWRvbmx5TWFwPEssIEE+KSA9PiBib29sZWFuIHwgKChtOiBSZWFkb25seU1hcDxLLCBBPikgPT4gYm9vbGVhbikge1xuICByZXR1cm4gKGEsIG0/KSA9PiB7XG4gICAgaWYgKG0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgZWxlbUUgPSBlbGVtKEUpXG4gICAgICByZXR1cm4gKG0pID0+IGVsZW1FKGEsIG0pXG4gICAgfVxuICAgIGNvbnN0IHZhbHVlcyA9IG0udmFsdWVzKClcbiAgICBsZXQgZTogTmV4dDxBPlxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogc3RyaWN0LWJvb2xlYW4tZXhwcmVzc2lvbnNcbiAgICB3aGlsZSAoIShlID0gdmFsdWVzLm5leHQoKSkuZG9uZSkge1xuICAgICAgY29uc3QgdiA9IGUudmFsdWVcbiAgICAgIGlmIChFLmVxdWFscyhhLCB2KSkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG4vKipcbiAqIEdldCBhIHNvcnRlZCBgUmVhZG9ubHlBcnJheWAgb2YgdGhlIGtleXMgY29udGFpbmVkIGluIGEgYFJlYWRvbmx5TWFwYC5cbiAqXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGtleXMgPSA8Sz4oTzogT3JkPEs+KSA9PiA8QT4obTogUmVhZG9ubHlNYXA8SywgQT4pOiBSZWFkb25seUFycmF5PEs+ID0+XG4gIEFycmF5LmZyb20obS5rZXlzKCkpLnNvcnQoTy5jb21wYXJlKVxuXG4vKipcbiAqIEdldCBhIHNvcnRlZCBgUmVhZG9ubHlBcnJheWAgb2YgdGhlIHZhbHVlcyBjb250YWluZWQgaW4gYSBgUmVhZG9ubHlNYXBgLlxuICpcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgY29uc3QgdmFsdWVzID0gPEE+KE86IE9yZDxBPikgPT4gPEs+KG06IFJlYWRvbmx5TWFwPEssIEE+KTogUmVhZG9ubHlBcnJheTxBPiA9PlxuICBBcnJheS5mcm9tKG0udmFsdWVzKCkpLnNvcnQoTy5jb21wYXJlKVxuXG4vKipcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gY29sbGVjdDxLPihPOiBPcmQ8Sz4pOiA8QSwgQj4oZjogKGs6IEssIGE6IEEpID0+IEIpID0+IChtOiBSZWFkb25seU1hcDxLLCBBPikgPT4gUmVhZG9ubHlBcnJheTxCPiB7XG4gIGNvbnN0IGtleXNPID0ga2V5cyhPKVxuICByZXR1cm4gPEEsIEI+KGY6IChrOiBLLCBhOiBBKSA9PiBCKSA9PiAobTogUmVhZG9ubHlNYXA8SywgQT4pOiBSZWFkb25seUFycmF5PEI+ID0+IHtcbiAgICBjb25zdCBvdXQ6IEFycmF5PEI+ID0gW11cbiAgICBjb25zdCBrcyA9IGtleXNPKG0pXG4gICAgZm9yIChjb25zdCBrZXkgb2Yga3MpIHtcbiAgICAgIG91dC5wdXNoKGYoa2V5LCBtLmdldChrZXkpISkpXG4gICAgfVxuICAgIHJldHVybiBvdXRcbiAgfVxufVxuXG4vKipcbiAqIEdldCBhIHNvcnRlZCBgUmVhZG9ubHlBcnJheWAgb2YgdGhlIGtleS92YWx1ZSBwYWlycyBjb250YWluZWQgaW4gYSBgUmVhZG9ubHlNYXBgLlxuICpcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgY29uc3QgdG9SZWFkb25seUFycmF5ID0gPEs+KE86IE9yZDxLPik6ICg8QT4obTogUmVhZG9ubHlNYXA8SywgQT4pID0+IFJlYWRvbmx5QXJyYXk8cmVhZG9ubHkgW0ssIEFdPikgPT5cbiAgY29sbGVjdChPKSgoaywgYSkgPT4gW2ssIGFdIGFzIGNvbnN0KVxuXG4vKipcbiAqIFVuZm9sZHMgYSBtYXAgaW50byBhIGxpc3Qgb2Yga2V5L3ZhbHVlIHBhaXJzXG4gKlxuICogQGNhdGVnb3J5IGRlc3RydWN0b3JzXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvVW5mb2xkYWJsZTxLLCBGIGV4dGVuZHMgVVJJUz4oXG4gIG9yZDogT3JkPEs+LFxuICBVOiBVbmZvbGRhYmxlMTxGPlxuKTogPEE+KGQ6IFJlYWRvbmx5TWFwPEssIEE+KSA9PiBLaW5kPEYsIHJlYWRvbmx5IFtLLCBBXT5cbmV4cG9ydCBmdW5jdGlvbiB0b1VuZm9sZGFibGU8SywgRj4ob3JkOiBPcmQ8Sz4sIFU6IFVuZm9sZGFibGU8Rj4pOiA8QT4oZDogUmVhZG9ubHlNYXA8SywgQT4pID0+IEhLVDxGLCByZWFkb25seSBbSywgQV0+XG5leHBvcnQgZnVuY3Rpb24gdG9VbmZvbGRhYmxlPEssIEY+KFxuICBvcmQ6IE9yZDxLPixcbiAgVTogVW5mb2xkYWJsZTxGPlxuKTogPEE+KGQ6IFJlYWRvbmx5TWFwPEssIEE+KSA9PiBIS1Q8RiwgcmVhZG9ubHkgW0ssIEFdPiB7XG4gIGNvbnN0IHRvUmVhZG9ubHlBcnJheU8gPSB0b1JlYWRvbmx5QXJyYXkob3JkKVxuICByZXR1cm4gKGQpID0+IHtcbiAgICBjb25zdCBrYXMgPSB0b1JlYWRvbmx5QXJyYXlPKGQpXG4gICAgY29uc3QgbGVuID0ga2FzLmxlbmd0aFxuICAgIHJldHVybiBVLnVuZm9sZCgwLCAoYikgPT4gKGIgPCBsZW4gPyBfLnNvbWUoW2thc1tiXSwgYiArIDFdKSA6IF8ubm9uZSkpXG4gIH1cbn1cblxuLyoqXG4gKiBJbnNlcnQgb3IgcmVwbGFjZSBhIGtleS92YWx1ZSBwYWlyIGluIGEgYFJlYWRvbmx5TWFwYC5cbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHVwc2VydEF0ID0gPEs+KEU6IEVxPEs+KTogKDxBPihrOiBLLCBhOiBBKSA9PiAobTogUmVhZG9ubHlNYXA8SywgQT4pID0+IFJlYWRvbmx5TWFwPEssIEE+KSA9PiB7XG4gIGNvbnN0IGxvb2t1cFdpdGhLZXlFID0gbG9va3VwV2l0aEtleShFKVxuICByZXR1cm4gKGssIGEpID0+IHtcbiAgICBjb25zdCBsb29rdXBXaXRoS2V5RWsgPSBsb29rdXBXaXRoS2V5RShrKVxuICAgIHJldHVybiAobSkgPT4ge1xuICAgICAgY29uc3QgZm91bmQgPSBsb29rdXBXaXRoS2V5RWsobSlcbiAgICAgIGlmIChfLmlzTm9uZShmb3VuZCkpIHtcbiAgICAgICAgY29uc3Qgb3V0ID0gbmV3IE1hcChtKVxuICAgICAgICBvdXQuc2V0KGssIGEpXG4gICAgICAgIHJldHVybiBvdXRcbiAgICAgIH0gZWxzZSBpZiAoZm91bmQudmFsdWVbMV0gIT09IGEpIHtcbiAgICAgICAgY29uc3Qgb3V0ID0gbmV3IE1hcChtKVxuICAgICAgICBvdXQuc2V0KGZvdW5kLnZhbHVlWzBdLCBhKVxuICAgICAgICByZXR1cm4gb3V0XG4gICAgICB9XG4gICAgICByZXR1cm4gbVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIERlbGV0ZSBhIGtleSBhbmQgdmFsdWUgZnJvbSBhIG1hcFxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuNS4wXG4gKi9cbmV4cG9ydCBjb25zdCBkZWxldGVBdCA9IDxLPihFOiBFcTxLPik6ICgoazogSykgPT4gPEE+KG06IFJlYWRvbmx5TWFwPEssIEE+KSA9PiBSZWFkb25seU1hcDxLLCBBPikgPT4ge1xuICBjb25zdCBsb29rdXBXaXRoS2V5RSA9IGxvb2t1cFdpdGhLZXkoRSlcbiAgcmV0dXJuIChrKSA9PiAobSkgPT4ge1xuICAgIGNvbnN0IGZvdW5kID0gbG9va3VwV2l0aEtleUUoaywgbSlcbiAgICBpZiAoXy5pc1NvbWUoZm91bmQpKSB7XG4gICAgICBjb25zdCByID0gbmV3IE1hcChtKVxuICAgICAgci5kZWxldGUoZm91bmQudmFsdWVbMF0pXG4gICAgICByZXR1cm4gclxuICAgIH1cbiAgICByZXR1cm4gbVxuICB9XG59XG5cbi8qKlxuICogQHNpbmNlIDIuNS4wXG4gKi9cbmV4cG9ydCBjb25zdCB1cGRhdGVBdCA9IDxLPihFOiBFcTxLPik6ICg8QT4oazogSywgYTogQSkgPT4gKG06IFJlYWRvbmx5TWFwPEssIEE+KSA9PiBPcHRpb248UmVhZG9ubHlNYXA8SywgQT4+KSA9PiB7XG4gIGNvbnN0IG1vZGlmeUF0RSA9IG1vZGlmeUF0KEUpXG4gIHJldHVybiAoaywgYSkgPT4gbW9kaWZ5QXRFKGssICgpID0+IGEpXG59XG5cbi8qKlxuICogQHNpbmNlIDIuNS4wXG4gKi9cbmV4cG9ydCBjb25zdCBtb2RpZnlBdCA9IDxLPihcbiAgRTogRXE8Sz5cbik6ICg8QT4oazogSywgZjogKGE6IEEpID0+IEEpID0+IChtOiBSZWFkb25seU1hcDxLLCBBPikgPT4gT3B0aW9uPFJlYWRvbmx5TWFwPEssIEE+PikgPT4ge1xuICBjb25zdCBsb29rdXBXaXRoS2V5RSA9IGxvb2t1cFdpdGhLZXkoRSlcbiAgcmV0dXJuIChrLCBmKSA9PiAobSkgPT4ge1xuICAgIGNvbnN0IGZvdW5kID0gbG9va3VwV2l0aEtleUUoaywgbSlcbiAgICBpZiAoXy5pc05vbmUoZm91bmQpKSB7XG4gICAgICByZXR1cm4gXy5ub25lXG4gICAgfVxuICAgIGNvbnN0IFtmaywgZnZdID0gZm91bmQudmFsdWVcbiAgICBjb25zdCBuZXh0ID0gZihmdilcbiAgICBpZiAobmV4dCA9PT0gZnYpIHtcbiAgICAgIHJldHVybiBfLnNvbWUobSlcbiAgICB9XG4gICAgY29uc3QgciA9IG5ldyBNYXAobSlcbiAgICByLnNldChmaywgbmV4dClcbiAgICByZXR1cm4gXy5zb21lKHIpXG4gIH1cbn1cblxuLyoqXG4gKiBEZWxldGUgYSBrZXkgYW5kIHZhbHVlIGZyb20gYSBtYXAsIHJldHVybmluZyB0aGUgdmFsdWUgYXMgd2VsbCBhcyB0aGUgc3Vic2VxdWVudCBtYXBcbiAqXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBvcDxLPihFOiBFcTxLPik6IChrOiBLKSA9PiA8QT4obTogUmVhZG9ubHlNYXA8SywgQT4pID0+IE9wdGlvbjxyZWFkb25seSBbQSwgUmVhZG9ubHlNYXA8SywgQT5dPiB7XG4gIGNvbnN0IGxvb2t1cEUgPSBsb29rdXAoRSlcbiAgY29uc3QgZGVsZXRlQXRFID0gZGVsZXRlQXQoRSlcbiAgcmV0dXJuIChrKSA9PiB7XG4gICAgY29uc3QgZGVsZXRlQXRFayA9IGRlbGV0ZUF0RShrKVxuICAgIHJldHVybiAobSkgPT5cbiAgICAgIHBpcGUoXG4gICAgICAgIGxvb2t1cEUoaywgbSksXG4gICAgICAgIE8ubWFwKChhKSA9PiBbYSwgZGVsZXRlQXRFayhtKV0pXG4gICAgICApXG4gIH1cbn1cblxuLy8gVE9ETzogcmVtb3ZlIG5vbi1jdXJyaWVkIG92ZXJsb2FkaW5nIGluIHYzXG4vKipcbiAqIExvb2t1cCB0aGUgdmFsdWUgZm9yIGEga2V5IGluIGEgYE1hcGAuXG4gKiBJZiB0aGUgcmVzdWx0IGlzIGEgYFNvbWVgLCB0aGUgZXhpc3Rpbmcga2V5IGlzIGFsc28gcmV0dXJuZWQuXG4gKlxuICogQHNpbmNlIDIuNS4wXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsb29rdXBXaXRoS2V5PEs+KFxuICBFOiBFcTxLPlxuKToge1xuICAoazogSyk6IDxBPihtOiBSZWFkb25seU1hcDxLLCBBPikgPT4gT3B0aW9uPHJlYWRvbmx5IFtLLCBBXT5cbiAgPEE+KGs6IEssIG06IFJlYWRvbmx5TWFwPEssIEE+KTogT3B0aW9uPHJlYWRvbmx5IFtLLCBBXT5cbn1cbmV4cG9ydCBmdW5jdGlvbiBsb29rdXBXaXRoS2V5PEs+KFxuICBFOiBFcTxLPlxuKTogPEE+KGs6IEssIG0/OiBSZWFkb25seU1hcDxLLCBBPikgPT4gT3B0aW9uPHJlYWRvbmx5IFtLLCBBXT4gfCAoKG06IFJlYWRvbmx5TWFwPEssIEE+KSA9PiBPcHRpb248cmVhZG9ubHkgW0ssIEFdPikge1xuICByZXR1cm4gPEE+KGs6IEssIG0/OiBSZWFkb25seU1hcDxLLCBBPikgPT4ge1xuICAgIGlmIChtID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGxvb2t1cFdpdGhLZXlFID0gbG9va3VwV2l0aEtleShFKVxuICAgICAgcmV0dXJuIChtKSA9PiBsb29rdXBXaXRoS2V5RShrLCBtKVxuICAgIH1cbiAgICBjb25zdCBlbnRyaWVzID0gbS5lbnRyaWVzKClcbiAgICBsZXQgZTogTmV4dDxyZWFkb25seSBbSywgQV0+XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBzdHJpY3QtYm9vbGVhbi1leHByZXNzaW9uc1xuICAgIHdoaWxlICghKGUgPSBlbnRyaWVzLm5leHQoKSkuZG9uZSkge1xuICAgICAgY29uc3QgW2thLCBhXSA9IGUudmFsdWVcbiAgICAgIGlmIChFLmVxdWFscyhrYSwgaykpIHtcbiAgICAgICAgcmV0dXJuIF8uc29tZShba2EsIGFdKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gXy5ub25lXG4gIH1cbn1cblxuLy8gVE9ETzogcmVtb3ZlIG5vbi1jdXJyaWVkIG92ZXJsb2FkaW5nIGluIHYzXG4vKipcbiAqIExvb2t1cCB0aGUgdmFsdWUgZm9yIGEga2V5IGluIGEgYE1hcGAuXG4gKlxuICogQHNpbmNlIDIuNS4wXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsb29rdXA8Sz4oXG4gIEU6IEVxPEs+XG4pOiB7XG4gIChrOiBLKTogPEE+KG06IFJlYWRvbmx5TWFwPEssIEE+KSA9PiBPcHRpb248QT5cbiAgPEE+KGs6IEssIG06IFJlYWRvbmx5TWFwPEssIEE+KTogT3B0aW9uPEE+XG59XG5leHBvcnQgZnVuY3Rpb24gbG9va3VwPEs+KFxuICBFOiBFcTxLPlxuKTogPEE+KGs6IEssIG0/OiBSZWFkb25seU1hcDxLLCBBPikgPT4gT3B0aW9uPEE+IHwgKChtOiBSZWFkb25seU1hcDxLLCBBPikgPT4gT3B0aW9uPEE+KSB7XG4gIGNvbnN0IGxvb2t1cFdpdGhLZXlFID0gbG9va3VwV2l0aEtleShFKVxuICByZXR1cm4gKGssIG0/KSA9PiB7XG4gICAgaWYgKG0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgbG9va3VwRSA9IGxvb2t1cChFKVxuICAgICAgcmV0dXJuIChtKSA9PiBsb29rdXBFKGssIG0pXG4gICAgfVxuICAgIHJldHVybiBwaXBlKFxuICAgICAgbG9va3VwV2l0aEtleUUoaywgbSksXG4gICAgICBPLm1hcCgoW18sIGFdKSA9PiBhKVxuICAgIClcbiAgfVxufVxuXG4vLyBUT0RPOiByZW1vdmUgbm9uLWN1cnJpZWQgb3ZlcmxvYWRpbmcgaW4gdjNcbi8qKlxuICogVGVzdCB3aGV0aGVyIG9yIG5vdCBvbmUgYE1hcGAgY29udGFpbnMgYWxsIG9mIHRoZSBrZXlzIGFuZCB2YWx1ZXMgY29udGFpbmVkIGluIGFub3RoZXIgYE1hcGBcbiAqXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU3VibWFwPEssIEE+KFxuICBTSzogRXE8Sz4sXG4gIFNBOiBFcTxBPlxuKToge1xuICAodGhhdDogUmVhZG9ubHlNYXA8SywgQT4pOiAobWU6IFJlYWRvbmx5TWFwPEssIEE+KSA9PiBib29sZWFuXG4gIChtZTogUmVhZG9ubHlNYXA8SywgQT4sIHRoYXQ6IFJlYWRvbmx5TWFwPEssIEE+KTogYm9vbGVhblxufVxuZXhwb3J0IGZ1bmN0aW9uIGlzU3VibWFwPEssIEE+KFxuICBTSzogRXE8Sz4sXG4gIFNBOiBFcTxBPlxuKTogKG1lOiBSZWFkb25seU1hcDxLLCBBPiwgdGhhdD86IFJlYWRvbmx5TWFwPEssIEE+KSA9PiBib29sZWFuIHwgKChtZTogUmVhZG9ubHlNYXA8SywgQT4pID0+IGJvb2xlYW4pIHtcbiAgY29uc3QgbG9va3VwV2l0aEtleVMgPSBsb29rdXBXaXRoS2V5KFNLKVxuICByZXR1cm4gKG1lOiBSZWFkb25seU1hcDxLLCBBPiwgdGhhdD86IFJlYWRvbmx5TWFwPEssIEE+KSA9PiB7XG4gICAgaWYgKHRoYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgaXNTdWJtYXBTS1NBID0gaXNTdWJtYXAoU0ssIFNBKVxuICAgICAgcmV0dXJuICh0aGF0KSA9PiBpc1N1Ym1hcFNLU0EodGhhdCwgbWUpXG4gICAgfVxuICAgIGNvbnN0IGVudHJpZXMgPSBtZS5lbnRyaWVzKClcbiAgICBsZXQgZTogTmV4dDxyZWFkb25seSBbSywgQV0+XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBzdHJpY3QtYm9vbGVhbi1leHByZXNzaW9uc1xuICAgIHdoaWxlICghKGUgPSBlbnRyaWVzLm5leHQoKSkuZG9uZSkge1xuICAgICAgY29uc3QgW2ssIGFdID0gZS52YWx1ZVxuICAgICAgY29uc3QgZDJPcHRBID0gbG9va3VwV2l0aEtleVMoaywgdGhhdClcbiAgICAgIGlmIChfLmlzTm9uZShkMk9wdEEpIHx8ICFTSy5lcXVhbHMoaywgZDJPcHRBLnZhbHVlWzBdKSB8fCAhU0EuZXF1YWxzKGEsIGQyT3B0QS52YWx1ZVsxXSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlXG4gIH1cbn1cblxuLyoqXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGVtcHR5OiBSZWFkb25seU1hcDxuZXZlciwgbmV2ZXI+ID1cbiAgLy8gdGhlIHR5cGUgYW5ub3RhdGlvbiBoZXJlIGlzIGludGVuZGVkIChvdGhlcndpc2UgaXQgZG9lc24ndCB0eXBlLWNoZWNrKVxuICBuZXcgTWFwPG5ldmVyLCBuZXZlcj4oKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RXE8SywgQT4oU0s6IEVxPEs+LCBTQTogRXE8QT4pOiBFcTxSZWFkb25seU1hcDxLLCBBPj4ge1xuICBjb25zdCBpc1N1Ym1hcFNLU0EgPSBpc1N1Ym1hcChTSywgU0EpXG4gIHJldHVybiBmcm9tRXF1YWxzKCh4LCB5KSA9PiBpc1N1Ym1hcFNLU0EoeCwgeSkgJiYgaXNTdWJtYXBTS1NBKHksIHgpKVxufVxuXG4vKipcbiAqIEdldHMgYE1vbm9pZGAgaW5zdGFuY2UgZm9yIE1hcHMgZ2l2ZW4gYFNlbWlncm91cGAgaW5zdGFuY2UgZm9yIHRoZWlyIHZhbHVlc1xuICpcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TW9ub2lkPEssIEE+KFNLOiBFcTxLPiwgU0E6IFNlbWlncm91cDxBPik6IE1vbm9pZDxSZWFkb25seU1hcDxLLCBBPj4ge1xuICBjb25zdCBsb29rdXBXaXRoS2V5UyA9IGxvb2t1cFdpdGhLZXkoU0spXG4gIHJldHVybiB7XG4gICAgY29uY2F0OiAobXgsIG15KSA9PiB7XG4gICAgICBpZiAoaXNFbXB0eShteCkpIHtcbiAgICAgICAgcmV0dXJuIG15XG4gICAgICB9XG4gICAgICBpZiAoaXNFbXB0eShteSkpIHtcbiAgICAgICAgcmV0dXJuIG14XG4gICAgICB9XG4gICAgICBjb25zdCByID0gbmV3IE1hcChteClcbiAgICAgIGNvbnN0IGVudHJpZXMgPSBteS5lbnRyaWVzKClcbiAgICAgIGxldCBlOiBOZXh0PHJlYWRvbmx5IFtLLCBBXT5cbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogc3RyaWN0LWJvb2xlYW4tZXhwcmVzc2lvbnNcbiAgICAgIHdoaWxlICghKGUgPSBlbnRyaWVzLm5leHQoKSkuZG9uZSkge1xuICAgICAgICBjb25zdCBbaywgYV0gPSBlLnZhbHVlXG4gICAgICAgIGNvbnN0IG14T3B0QSA9IGxvb2t1cFdpdGhLZXlTKGssIG14KVxuICAgICAgICBpZiAoXy5pc1NvbWUobXhPcHRBKSkge1xuICAgICAgICAgIHIuc2V0KG14T3B0QS52YWx1ZVswXSwgU0EuY29uY2F0KG14T3B0QS52YWx1ZVsxXSwgYSkpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgci5zZXQoaywgYSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJcbiAgICB9LFxuICAgIGVtcHR5XG4gIH1cbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBtYXAgd2l0aCBvbmUga2V5L3ZhbHVlIHBhaXJcbiAqXG4gKiBAY2F0ZWdvcnkgY29uc3RydWN0b3JzXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGNvbnN0IHNpbmdsZXRvbiA9IDxLLCBBPihrOiBLLCBhOiBBKTogUmVhZG9ubHlNYXA8SywgQT4gPT4gbmV3IE1hcChbW2ssIGFdXSlcblxuLyoqXG4gKiBDcmVhdGUgYSBtYXAgZnJvbSBhIGZvbGRhYmxlIGNvbGxlY3Rpb24gb2Yga2V5L3ZhbHVlIHBhaXJzLCB1c2luZyB0aGVcbiAqIHNwZWNpZmllZCBgTWFnbWFgIHRvIGNvbWJpbmUgdmFsdWVzIGZvciBkdXBsaWNhdGUga2V5cy5cbiAqXG4gKiBAY2F0ZWdvcnkgY29uc3RydWN0b3JzXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21Gb2xkYWJsZTxGIGV4dGVuZHMgVVJJUzMsIEssIEE+KFxuICBFOiBFcTxLPixcbiAgTTogTWFnbWE8QT4sXG4gIEY6IEZvbGRhYmxlMzxGPlxuKTogPFIsIEU+KGZrYTogS2luZDM8RiwgUiwgRSwgcmVhZG9ubHkgW0ssIEFdPikgPT4gUmVhZG9ubHlNYXA8SywgQT5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tRm9sZGFibGU8RiBleHRlbmRzIFVSSVMyLCBLLCBBPihcbiAgRTogRXE8Sz4sXG4gIE06IE1hZ21hPEE+LFxuICBGOiBGb2xkYWJsZTI8Rj5cbik6IDxFPihma2E6IEtpbmQyPEYsIEUsIHJlYWRvbmx5IFtLLCBBXT4pID0+IFJlYWRvbmx5TWFwPEssIEE+XG5leHBvcnQgZnVuY3Rpb24gZnJvbUZvbGRhYmxlPEYgZXh0ZW5kcyBVUklTLCBLLCBBPihcbiAgRTogRXE8Sz4sXG4gIE06IE1hZ21hPEE+LFxuICBGOiBGb2xkYWJsZTE8Rj5cbik6IChma2E6IEtpbmQ8RiwgcmVhZG9ubHkgW0ssIEFdPikgPT4gUmVhZG9ubHlNYXA8SywgQT5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tRm9sZGFibGU8RiwgSywgQT4oXG4gIEU6IEVxPEs+LFxuICBNOiBNYWdtYTxBPixcbiAgRjogRm9sZGFibGU8Rj5cbik6IChma2E6IEhLVDxGLCByZWFkb25seSBbSywgQV0+KSA9PiBSZWFkb25seU1hcDxLLCBBPlxuZXhwb3J0IGZ1bmN0aW9uIGZyb21Gb2xkYWJsZTxGLCBLLCBBPihcbiAgRTogRXE8Sz4sXG4gIE06IE1hZ21hPEE+LFxuICBGOiBGb2xkYWJsZTxGPlxuKTogKGZrYTogSEtUPEYsIHJlYWRvbmx5IFtLLCBBXT4pID0+IFJlYWRvbmx5TWFwPEssIEE+IHtcbiAgcmV0dXJuIChma2E6IEhLVDxGLCByZWFkb25seSBbSywgQV0+KSA9PiB7XG4gICAgY29uc3QgbG9va3VwV2l0aEtleUUgPSBsb29rdXBXaXRoS2V5KEUpXG4gICAgcmV0dXJuIEYucmVkdWNlPHJlYWRvbmx5IFtLLCBBXSwgTWFwPEssIEE+Pihma2EsIG5ldyBNYXA8SywgQT4oKSwgKGIsIFtrLCBhXSkgPT4ge1xuICAgICAgY29uc3QgYk9wdCA9IGxvb2t1cFdpdGhLZXlFKGssIGIpXG4gICAgICBpZiAoXy5pc1NvbWUoYk9wdCkpIHtcbiAgICAgICAgYi5zZXQoYk9wdC52YWx1ZVswXSwgTS5jb25jYXQoYk9wdC52YWx1ZVsxXSwgYSkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBiLnNldChrLCBhKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGJcbiAgICB9KVxuICB9XG59XG5cbmNvbnN0IF9tYXBXaXRoSW5kZXggPSA8SywgQSwgQj4oZmE6IFJlYWRvbmx5TWFwPEssIEE+LCBmOiAoazogSywgYTogQSkgPT4gQik6IFJlYWRvbmx5TWFwPEssIEI+ID0+IHtcbiAgY29uc3QgbSA9IG5ldyBNYXA8SywgQj4oKVxuICBjb25zdCBlbnRyaWVzID0gZmEuZW50cmllcygpXG4gIGxldCBlOiBOZXh0PHJlYWRvbmx5IFtLLCBBXT5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBzdHJpY3QtYm9vbGVhbi1leHByZXNzaW9uc1xuICB3aGlsZSAoIShlID0gZW50cmllcy5uZXh0KCkpLmRvbmUpIHtcbiAgICBjb25zdCBba2V5LCBhXSA9IGUudmFsdWVcbiAgICBtLnNldChrZXksIGYoa2V5LCBhKSlcbiAgfVxuICByZXR1cm4gbVxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgcGFydGl0aW9uTWFwV2l0aEluZGV4ID0gPEssIEEsIEIsIEM+KGY6IChrOiBLLCBhOiBBKSA9PiBFaXRoZXI8QiwgQz4pID0+IChcbiAgZmE6IFJlYWRvbmx5TWFwPEssIEE+XG4pOiBTZXBhcmF0ZWQ8UmVhZG9ubHlNYXA8SywgQj4sIFJlYWRvbmx5TWFwPEssIEM+PiA9PiB7XG4gIGNvbnN0IGxlZnQgPSBuZXcgTWFwPEssIEI+KClcbiAgY29uc3QgcmlnaHQgPSBuZXcgTWFwPEssIEM+KClcbiAgY29uc3QgZW50cmllcyA9IGZhLmVudHJpZXMoKVxuICBsZXQgZTogTmV4dDxyZWFkb25seSBbSywgQV0+XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogc3RyaWN0LWJvb2xlYW4tZXhwcmVzc2lvbnNcbiAgd2hpbGUgKCEoZSA9IGVudHJpZXMubmV4dCgpKS5kb25lKSB7XG4gICAgY29uc3QgW2ssIGFdID0gZS52YWx1ZVxuICAgIGNvbnN0IGVpID0gZihrLCBhKVxuICAgIGlmIChfLmlzTGVmdChlaSkpIHtcbiAgICAgIGxlZnQuc2V0KGssIGVpLmxlZnQpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJpZ2h0LnNldChrLCBlaS5yaWdodClcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHNlcGFyYXRlZChsZWZ0LCByaWdodClcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnRpdGlvbldpdGhJbmRleDxLLCBBLCBCIGV4dGVuZHMgQT4oXG4gIHByZWRpY2F0ZVdpdGhJbmRleDogKGs6IEssIGE6IEEpID0+IGEgaXMgQlxuKTogKG06IFJlYWRvbmx5TWFwPEssIEE+KSA9PiBTZXBhcmF0ZWQ8UmVhZG9ubHlNYXA8SywgQT4sIFJlYWRvbmx5TWFwPEssIEI+PlxuZXhwb3J0IGZ1bmN0aW9uIHBhcnRpdGlvbldpdGhJbmRleDxLLCBBPihcbiAgcHJlZGljYXRlV2l0aEluZGV4OiAoazogSywgYTogQSkgPT4gYm9vbGVhblxuKTogPEIgZXh0ZW5kcyBBPihtOiBSZWFkb25seU1hcDxLLCBCPikgPT4gU2VwYXJhdGVkPFJlYWRvbmx5TWFwPEssIEI+LCBSZWFkb25seU1hcDxLLCBCPj5cbmV4cG9ydCBmdW5jdGlvbiBwYXJ0aXRpb25XaXRoSW5kZXg8SywgQT4oXG4gIHByZWRpY2F0ZVdpdGhJbmRleDogKGs6IEssIGE6IEEpID0+IGJvb2xlYW5cbik6IChtOiBSZWFkb25seU1hcDxLLCBBPikgPT4gU2VwYXJhdGVkPFJlYWRvbmx5TWFwPEssIEE+LCBSZWFkb25seU1hcDxLLCBBPj5cbmV4cG9ydCBmdW5jdGlvbiBwYXJ0aXRpb25XaXRoSW5kZXg8SywgQT4oXG4gIHByZWRpY2F0ZVdpdGhJbmRleDogKGs6IEssIGE6IEEpID0+IGJvb2xlYW5cbik6IChtOiBSZWFkb25seU1hcDxLLCBBPikgPT4gU2VwYXJhdGVkPFJlYWRvbmx5TWFwPEssIEE+LCBSZWFkb25seU1hcDxLLCBBPj4ge1xuICByZXR1cm4gKG06IFJlYWRvbmx5TWFwPEssIEE+KSA9PiB7XG4gICAgY29uc3QgbGVmdCA9IG5ldyBNYXA8SywgQT4oKVxuICAgIGNvbnN0IHJpZ2h0ID0gbmV3IE1hcDxLLCBBPigpXG4gICAgY29uc3QgZW50cmllcyA9IG0uZW50cmllcygpXG4gICAgbGV0IGU6IE5leHQ8cmVhZG9ubHkgW0ssIEFdPlxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogc3RyaWN0LWJvb2xlYW4tZXhwcmVzc2lvbnNcbiAgICB3aGlsZSAoIShlID0gZW50cmllcy5uZXh0KCkpLmRvbmUpIHtcbiAgICAgIGNvbnN0IFtrLCBhXSA9IGUudmFsdWVcbiAgICAgIGlmIChwcmVkaWNhdGVXaXRoSW5kZXgoaywgYSkpIHtcbiAgICAgICAgcmlnaHQuc2V0KGssIGEpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZWZ0LnNldChrLCBhKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc2VwYXJhdGVkKGxlZnQsIHJpZ2h0KVxuICB9XG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBmaWx0ZXJNYXBXaXRoSW5kZXggPSA8SywgQSwgQj4oZjogKGs6IEssIGE6IEEpID0+IE9wdGlvbjxCPikgPT4gKFxuICBmYTogUmVhZG9ubHlNYXA8SywgQT5cbik6IFJlYWRvbmx5TWFwPEssIEI+ID0+IHtcbiAgY29uc3QgbSA9IG5ldyBNYXA8SywgQj4oKVxuICBjb25zdCBlbnRyaWVzID0gZmEuZW50cmllcygpXG4gIGxldCBlOiBOZXh0PHJlYWRvbmx5IFtLLCBBXT5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBzdHJpY3QtYm9vbGVhbi1leHByZXNzaW9uc1xuICB3aGlsZSAoIShlID0gZW50cmllcy5uZXh0KCkpLmRvbmUpIHtcbiAgICBjb25zdCBbaywgYV0gPSBlLnZhbHVlXG4gICAgY29uc3QgbyA9IGYoaywgYSlcbiAgICBpZiAoXy5pc1NvbWUobykpIHtcbiAgICAgIG0uc2V0KGssIG8udmFsdWUpXG4gICAgfVxuICB9XG4gIHJldHVybiBtXG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJXaXRoSW5kZXg8SywgQSwgQiBleHRlbmRzIEE+KFxuICBwcmVkaWNhdGVXaXRoSW5kZXg6IChrOiBLLCBhOiBBKSA9PiBhIGlzIEJcbik6IChtOiBSZWFkb25seU1hcDxLLCBBPikgPT4gUmVhZG9ubHlNYXA8SywgQj5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJXaXRoSW5kZXg8SywgQT4oXG4gIHByZWRpY2F0ZVdpdGhJbmRleDogKGs6IEssIGE6IEEpID0+IGJvb2xlYW5cbik6IDxCIGV4dGVuZHMgQT4obTogUmVhZG9ubHlNYXA8SywgQj4pID0+IFJlYWRvbmx5TWFwPEssIEI+XG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyV2l0aEluZGV4PEssIEE+KFxuICBwcmVkaWNhdGVXaXRoSW5kZXg6IChrOiBLLCBhOiBBKSA9PiBib29sZWFuXG4pOiAobTogUmVhZG9ubHlNYXA8SywgQT4pID0+IFJlYWRvbmx5TWFwPEssIEE+XG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyV2l0aEluZGV4PEssIEE+KFxuICBwcmVkaWNhdGVXaXRoSW5kZXg6IChrOiBLLCBhOiBBKSA9PiBib29sZWFuXG4pOiAobTogUmVhZG9ubHlNYXA8SywgQT4pID0+IFJlYWRvbmx5TWFwPEssIEE+IHtcbiAgcmV0dXJuIChtOiBSZWFkb25seU1hcDxLLCBBPikgPT4ge1xuICAgIGNvbnN0IG91dCA9IG5ldyBNYXA8SywgQT4oKVxuICAgIGNvbnN0IGVudHJpZXMgPSBtLmVudHJpZXMoKVxuICAgIGxldCBlOiBOZXh0PHJlYWRvbmx5IFtLLCBBXT5cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHN0cmljdC1ib29sZWFuLWV4cHJlc3Npb25zXG4gICAgd2hpbGUgKCEoZSA9IGVudHJpZXMubmV4dCgpKS5kb25lKSB7XG4gICAgICBjb25zdCBbaywgYV0gPSBlLnZhbHVlXG4gICAgICBpZiAocHJlZGljYXRlV2l0aEluZGV4KGssIGEpKSB7XG4gICAgICAgIG91dC5zZXQoaywgYSlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG91dFxuICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIG5vbi1waXBlYWJsZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuY29uc3QgX21hcDogRnVuY3RvcjI8VVJJPlsnbWFwJ10gPSAoZmEsIGYpID0+IF9tYXBXaXRoSW5kZXgoZmEsIChfLCBhKSA9PiBmKGEpKVxuY29uc3QgX2ZpbHRlcjogRmlsdGVyYWJsZTI8VVJJPlsnZmlsdGVyJ10gPSA8SywgQT4oZmE6IFJlYWRvbmx5TWFwPEssIEE+LCBwOiBQcmVkaWNhdGU8QT4pID0+XG4gIF9maWx0ZXJXaXRoSW5kZXgoZmEsIChfLCBhKSA9PiBwKGEpKVxuY29uc3QgX2ZpbHRlck1hcDogRmlsdGVyYWJsZTI8VVJJPlsnZmlsdGVyTWFwJ10gPSAoZmEsIGYpID0+IF9maWx0ZXJNYXBXaXRoSW5kZXgoZmEsIChfLCBhKSA9PiBmKGEpKVxuY29uc3QgX3BhcnRpdGlvbjogRmlsdGVyYWJsZTI8VVJJPlsncGFydGl0aW9uJ10gPSA8SywgQT4oZmE6IFJlYWRvbmx5TWFwPEssIEE+LCBwcmVkaWNhdGU6IFByZWRpY2F0ZTxBPikgPT5cbiAgX3BhcnRpdGlvbldpdGhJbmRleChmYSwgKF8sIGEpID0+IHByZWRpY2F0ZShhKSlcbmNvbnN0IF9wYXJ0aXRpb25NYXA6IEZpbHRlcmFibGUyPFVSST5bJ3BhcnRpdGlvbk1hcCddID0gKGZhLCBmKSA9PiBfcGFydGl0aW9uTWFwV2l0aEluZGV4KGZhLCAoXywgYSkgPT4gZihhKSlcbmNvbnN0IF9maWx0ZXJXaXRoSW5kZXggPSA8SywgQT4oZmE6IFJlYWRvbmx5TWFwPEssIEE+LCBwOiAoazogSywgYTogQSkgPT4gYm9vbGVhbikgPT4gcGlwZShmYSwgZmlsdGVyV2l0aEluZGV4KHApKVxuY29uc3QgX2ZpbHRlck1hcFdpdGhJbmRleCA9IDxLLCBBLCBCPihmYTogUmVhZG9ubHlNYXA8SywgQT4sIGY6IChrOiBLLCBhOiBBKSA9PiBPcHRpb248Qj4pID0+XG4gIHBpcGUoZmEsIGZpbHRlck1hcFdpdGhJbmRleChmKSlcbmNvbnN0IF9wYXJ0aXRpb25XaXRoSW5kZXggPSA8SywgQT4oZmE6IFJlYWRvbmx5TWFwPEssIEE+LCBwOiAoazogSywgYTogQSkgPT4gYm9vbGVhbikgPT4gcGlwZShmYSwgcGFydGl0aW9uV2l0aEluZGV4KHApKVxuY29uc3QgX3BhcnRpdGlvbk1hcFdpdGhJbmRleCA9IDxLLCBBLCBCLCBDPihmYTogUmVhZG9ubHlNYXA8SywgQT4sIGY6IChrOiBLLCBhOiBBKSA9PiBFaXRoZXI8QiwgQz4pID0+XG4gIHBpcGUoZmEsIHBhcnRpdGlvbk1hcFdpdGhJbmRleChmKSlcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gdHlwZSBjbGFzcyBtZW1iZXJzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQGNhdGVnb3J5IENvbXBhY3RhYmxlXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGNvbXBhY3QgPSA8SywgQT4oZmE6IFJlYWRvbmx5TWFwPEssIE9wdGlvbjxBPj4pOiBSZWFkb25seU1hcDxLLCBBPiA9PiB7XG4gIGNvbnN0IG0gPSBuZXcgTWFwPEssIEE+KClcbiAgY29uc3QgZW50cmllcyA9IGZhLmVudHJpZXMoKVxuICBsZXQgZTogTmV4dDxyZWFkb25seSBbSywgT3B0aW9uPEE+XT5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBzdHJpY3QtYm9vbGVhbi1leHByZXNzaW9uc1xuICB3aGlsZSAoIShlID0gZW50cmllcy5uZXh0KCkpLmRvbmUpIHtcbiAgICBjb25zdCBbaywgb2FdID0gZS52YWx1ZVxuICAgIGlmIChfLmlzU29tZShvYSkpIHtcbiAgICAgIG0uc2V0KGssIG9hLnZhbHVlKVxuICAgIH1cbiAgfVxuICByZXR1cm4gbVxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBGaWx0ZXJhYmxlXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZpbHRlcjoge1xuICA8QSwgQiBleHRlbmRzIEE+KHJlZmluZW1lbnQ6IFJlZmluZW1lbnQ8QSwgQj4pOiA8Sz4oZmE6IFJlYWRvbmx5TWFwPEssIEE+KSA9PiBSZWFkb25seU1hcDxLLCBCPlxuICA8QT4ocHJlZGljYXRlOiBQcmVkaWNhdGU8QT4pOiA8SywgQiBleHRlbmRzIEE+KGZiOiBSZWFkb25seU1hcDxLLCBCPikgPT4gUmVhZG9ubHlNYXA8SywgQj5cbiAgPEE+KHByZWRpY2F0ZTogUHJlZGljYXRlPEE+KTogPEs+KGZhOiBSZWFkb25seU1hcDxLLCBBPikgPT4gUmVhZG9ubHlNYXA8SywgQT5cbn0gPSA8QT4ocHJlZGljYXRlOiBQcmVkaWNhdGU8QT4pID0+IDxLPihmYTogUmVhZG9ubHlNYXA8SywgQT4pID0+IF9maWx0ZXIoZmEsIHByZWRpY2F0ZSlcblxuLyoqXG4gKiBAY2F0ZWdvcnkgRmlsdGVyYWJsZVxuICogQHNpbmNlIDIuNS4wXG4gKi9cbmV4cG9ydCBjb25zdCBmaWx0ZXJNYXA6IDxBLCBCPihmOiAoYTogQSkgPT4gT3B0aW9uPEI+KSA9PiA8Sz4oZmE6IFJlYWRvbmx5TWFwPEssIEE+KSA9PiBSZWFkb25seU1hcDxLLCBCPiA9IChmKSA9PiAoXG4gIGZhXG4pID0+IF9maWx0ZXJNYXAoZmEsIGYpXG5cbi8qKlxuICogYG1hcGAgY2FuIGJlIHVzZWQgdG8gdHVybiBmdW5jdGlvbnMgYChhOiBBKSA9PiBCYCBpbnRvIGZ1bmN0aW9ucyBgKGZhOiBGPEE+KSA9PiBGPEI+YCB3aG9zZSBhcmd1bWVudCBhbmQgcmV0dXJuIHR5cGVzXG4gKiB1c2UgdGhlIHR5cGUgY29uc3RydWN0b3IgYEZgIHRvIHJlcHJlc2VudCBzb21lIGNvbXB1dGF0aW9uYWwgY29udGV4dC5cbiAqXG4gKiBAY2F0ZWdvcnkgRnVuY3RvclxuICogQHNpbmNlIDIuNS4wXG4gKi9cbmV4cG9ydCBjb25zdCBtYXA6IDxBLCBCPihmOiAoYTogQSkgPT4gQikgPT4gPEs+KGZhOiBSZWFkb25seU1hcDxLLCBBPikgPT4gUmVhZG9ubHlNYXA8SywgQj4gPSAoZikgPT4gKGZhKSA9PiBfbWFwKGZhLCBmKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBGdW5jdG9yV2l0aEluZGV4XG4gKiBAc2luY2UgMi43LjFcbiAqL1xuZXhwb3J0IGNvbnN0IG1hcFdpdGhJbmRleDogPEssIEEsIEI+KGY6IChrOiBLLCBhOiBBKSA9PiBCKSA9PiAoZmE6IFJlYWRvbmx5TWFwPEssIEE+KSA9PiBSZWFkb25seU1hcDxLLCBCPiA9IChmKSA9PiAoXG4gIGZhXG4pID0+IF9tYXBXaXRoSW5kZXgoZmEsIGYpXG5cbi8qKlxuICogQGNhdGVnb3J5IEZpbHRlcmFibGVcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgY29uc3QgcGFydGl0aW9uOiB7XG4gIDxBLCBCIGV4dGVuZHMgQT4ocmVmaW5lbWVudDogUmVmaW5lbWVudDxBLCBCPik6IDxLPihcbiAgICBmYTogUmVhZG9ubHlNYXA8SywgQT5cbiAgKSA9PiBTZXBhcmF0ZWQ8UmVhZG9ubHlNYXA8SywgQT4sIFJlYWRvbmx5TWFwPEssIEI+PlxuICA8QT4ocHJlZGljYXRlOiBQcmVkaWNhdGU8QT4pOiA8SywgQiBleHRlbmRzIEE+KFxuICAgIGZiOiBSZWFkb25seU1hcDxLLCBCPlxuICApID0+IFNlcGFyYXRlZDxSZWFkb25seU1hcDxLLCBCPiwgUmVhZG9ubHlNYXA8SywgQj4+XG4gIDxBPihwcmVkaWNhdGU6IFByZWRpY2F0ZTxBPik6IDxLPihmYTogUmVhZG9ubHlNYXA8SywgQT4pID0+IFNlcGFyYXRlZDxSZWFkb25seU1hcDxLLCBBPiwgUmVhZG9ubHlNYXA8SywgQT4+XG59ID0gPEE+KHByZWRpY2F0ZTogUHJlZGljYXRlPEE+KSA9PiA8Sz4oZmE6IFJlYWRvbmx5TWFwPEssIEE+KSA9PiBfcGFydGl0aW9uKGZhLCBwcmVkaWNhdGUpXG5cbi8qKlxuICogQGNhdGVnb3J5IEZpbHRlcmFibGVcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgY29uc3QgcGFydGl0aW9uTWFwOiA8QSwgQiwgQz4oXG4gIGY6IChhOiBBKSA9PiBFaXRoZXI8QiwgQz5cbikgPT4gPEs+KGZhOiBSZWFkb25seU1hcDxLLCBBPikgPT4gU2VwYXJhdGVkPFJlYWRvbmx5TWFwPEssIEI+LCBSZWFkb25seU1hcDxLLCBDPj4gPSAoZikgPT4gKGZhKSA9PiBfcGFydGl0aW9uTWFwKGZhLCBmKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBDb21wYWN0YWJsZVxuICogQHNpbmNlIDIuNS4wXG4gKi9cbmV4cG9ydCBjb25zdCBzZXBhcmF0ZSA9IDxLLCBBLCBCPihcbiAgZmE6IFJlYWRvbmx5TWFwPEssIEVpdGhlcjxBLCBCPj5cbik6IFNlcGFyYXRlZDxSZWFkb25seU1hcDxLLCBBPiwgUmVhZG9ubHlNYXA8SywgQj4+ID0+IHtcbiAgY29uc3QgbGVmdCA9IG5ldyBNYXA8SywgQT4oKVxuICBjb25zdCByaWdodCA9IG5ldyBNYXA8SywgQj4oKVxuICBjb25zdCBlbnRyaWVzID0gZmEuZW50cmllcygpXG4gIGxldCBlOiBOZXh0PHJlYWRvbmx5IFtLLCBFaXRoZXI8QSwgQj5dPlxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHN0cmljdC1ib29sZWFuLWV4cHJlc3Npb25zXG4gIHdoaWxlICghKGUgPSBlbnRyaWVzLm5leHQoKSkuZG9uZSkge1xuICAgIGNvbnN0IFtrLCBlaV0gPSBlLnZhbHVlXG4gICAgaWYgKF8uaXNMZWZ0KGVpKSkge1xuICAgICAgbGVmdC5zZXQoaywgZWkubGVmdClcbiAgICB9IGVsc2Uge1xuICAgICAgcmlnaHQuc2V0KGssIGVpLnJpZ2h0KVxuICAgIH1cbiAgfVxuICByZXR1cm4gc2VwYXJhdGVkKGxlZnQsIHJpZ2h0KVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBpbnN0YW5jZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGNvbnN0IFVSSSA9ICdSZWFkb25seU1hcCdcblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IHR5cGUgVVJJID0gdHlwZW9mIFVSSVxuXG5kZWNsYXJlIG1vZHVsZSAnLi9IS1QnIHtcbiAgaW50ZXJmYWNlIFVSSXRvS2luZDI8RSwgQT4ge1xuICAgIHJlYWRvbmx5IFtVUkldOiBSZWFkb25seU1hcDxFLCBBPlxuICB9XG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgZ2V0VW5pb25TZW1pZ3JvdXAgPSA8SywgQT4oRTogRXE8Sz4sIFM6IFNlbWlncm91cDxBPik6IFNlbWlncm91cDxSZWFkb25seU1hcDxLLCBBPj4gPT4ge1xuICBjb25zdCB1bmlvbkVTID0gdW5pb24oRSwgUylcbiAgcmV0dXJuIHtcbiAgICBjb25jYXQ6IChmaXJzdCwgc2Vjb25kKSA9PiB1bmlvbkVTKHNlY29uZCkoZmlyc3QpXG4gIH1cbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRVbmlvbk1vbm9pZCA9IDxLLCBBPihFOiBFcTxLPiwgUzogU2VtaWdyb3VwPEE+KTogTW9ub2lkPFJlYWRvbmx5TWFwPEssIEE+PiA9PiAoe1xuICBjb25jYXQ6IGdldFVuaW9uU2VtaWdyb3VwKEUsIFMpLmNvbmNhdCxcbiAgZW1wdHlcbn0pXG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgZ2V0SW50ZXJzZWN0aW9uU2VtaWdyb3VwID0gPEssIEE+KEU6IEVxPEs+LCBTOiBTZW1pZ3JvdXA8QT4pOiBTZW1pZ3JvdXA8UmVhZG9ubHlNYXA8SywgQT4+ID0+IHtcbiAgY29uc3QgaW50ZXJzZWN0aW9uRVMgPSBpbnRlcnNlY3Rpb24oRSwgUylcbiAgcmV0dXJuIHtcbiAgICBjb25jYXQ6IChmaXJzdCwgc2Vjb25kKSA9PiBpbnRlcnNlY3Rpb25FUyhzZWNvbmQpKGZpcnN0KVxuICB9XG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgZ2V0RGlmZmVyZW5jZU1hZ21hID0gPEs+KEU6IEVxPEs+KSA9PiA8QT4oKTogTWFnbWE8UmVhZG9ubHlNYXA8SywgQT4+ID0+IHtcbiAgY29uc3QgZGlmZmVyZW5jZUUgPSBkaWZmZXJlbmNlKEUpXG4gIHJldHVybiB7XG4gICAgY29uY2F0OiAoZmlyc3QsIHNlY29uZCkgPT4gZGlmZmVyZW5jZUUoc2Vjb25kKShmaXJzdClcbiAgfVxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmlsdGVyYWJsZVdpdGhJbmRleDxLID0gbmV2ZXI+KCk6IEZpbHRlcmFibGVXaXRoSW5kZXgyQzxVUkksIEssIEs+IHtcbiAgcmV0dXJuIHtcbiAgICBVUkksXG4gICAgX0U6IHVuZGVmaW5lZCBhcyBhbnksXG4gICAgbWFwOiBfbWFwLFxuICAgIG1hcFdpdGhJbmRleDogX21hcFdpdGhJbmRleCxcbiAgICBjb21wYWN0LFxuICAgIHNlcGFyYXRlLFxuICAgIGZpbHRlcjogX2ZpbHRlcixcbiAgICBmaWx0ZXJNYXA6IF9maWx0ZXJNYXAsXG4gICAgcGFydGl0aW9uOiBfcGFydGl0aW9uLFxuICAgIHBhcnRpdGlvbk1hcDogX3BhcnRpdGlvbk1hcCxcbiAgICBwYXJ0aXRpb25NYXBXaXRoSW5kZXg6IF9wYXJ0aXRpb25NYXBXaXRoSW5kZXgsXG4gICAgcGFydGl0aW9uV2l0aEluZGV4OiBfcGFydGl0aW9uV2l0aEluZGV4LFxuICAgIGZpbHRlck1hcFdpdGhJbmRleDogX2ZpbHRlck1hcFdpdGhJbmRleCxcbiAgICBmaWx0ZXJXaXRoSW5kZXg6IF9maWx0ZXJXaXRoSW5kZXhcbiAgfVxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjcuMFxuICovXG5leHBvcnQgY29uc3QgRnVuY3RvcjogRnVuY3RvcjI8VVJJPiA9IHtcbiAgVVJJLFxuICBtYXA6IF9tYXBcbn1cblxuLyoqXG4gKiBEZXJpdmFibGUgZnJvbSBgRnVuY3RvcmAuXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBmbGFwID1cbiAgLyojX19QVVJFX18qL1xuICBmbGFwXyhGdW5jdG9yKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGdldEZ1bmN0b3JXaXRoSW5kZXggPSA8SyA9IG5ldmVyPigpOiBGdW5jdG9yV2l0aEluZGV4MkM8VVJJLCBLLCBLPiA9PiAoe1xuICBVUkksXG4gIF9FOiB1bmRlZmluZWQgYXMgYW55LFxuICBtYXA6IF9tYXAsXG4gIG1hcFdpdGhJbmRleDogX21hcFdpdGhJbmRleFxufSlcblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi43LjBcbiAqL1xuZXhwb3J0IGNvbnN0IENvbXBhY3RhYmxlOiBDb21wYWN0YWJsZTI8VVJJPiA9IHtcbiAgVVJJLFxuICBjb21wYWN0LFxuICBzZXBhcmF0ZVxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjcuMFxuICovXG5leHBvcnQgY29uc3QgRmlsdGVyYWJsZTogRmlsdGVyYWJsZTI8VVJJPiA9IHtcbiAgVVJJLFxuICBtYXA6IF9tYXAsXG4gIGNvbXBhY3QsXG4gIHNlcGFyYXRlLFxuICBmaWx0ZXI6IF9maWx0ZXIsXG4gIGZpbHRlck1hcDogX2ZpbHRlck1hcCxcbiAgcGFydGl0aW9uOiBfcGFydGl0aW9uLFxuICBwYXJ0aXRpb25NYXA6IF9wYXJ0aXRpb25NYXBcbn1cblxuLyoqXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCByZWR1Y2UgPSA8Sz4oTzogT3JkPEs+KTogKDxCLCBBPihiOiBCLCBmOiAoYjogQiwgYTogQSkgPT4gQikgPT4gKG06IFJlYWRvbmx5TWFwPEssIEE+KSA9PiBCKSA9PiB7XG4gIGNvbnN0IHJlZHVjZVdpdGhJbmRleE8gPSByZWR1Y2VXaXRoSW5kZXgoTylcbiAgcmV0dXJuIChiLCBmKSA9PiByZWR1Y2VXaXRoSW5kZXhPKGIsIChfLCBiLCBhKSA9PiBmKGIsIGEpKVxufVxuXG4vKipcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZvbGRNYXAgPSA8Sz4oTzogT3JkPEs+KTogKDxNPihNOiBNb25vaWQ8TT4pID0+IDxBPihmOiAoYTogQSkgPT4gTSkgPT4gKG06IFJlYWRvbmx5TWFwPEssIEE+KSA9PiBNKSA9PiB7XG4gIGNvbnN0IGZvbGRNYXBXaXRoSW5kZXhPID0gZm9sZE1hcFdpdGhJbmRleChPKVxuICByZXR1cm4gKE0pID0+IHtcbiAgICBjb25zdCBmb2xkTWFwV2l0aEluZGV4T00gPSBmb2xkTWFwV2l0aEluZGV4TyhNKVxuICAgIHJldHVybiAoZikgPT4gZm9sZE1hcFdpdGhJbmRleE9NKChfLCBhKSA9PiBmKGEpKVxuICB9XG59XG5cbi8qKlxuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgcmVkdWNlUmlnaHQgPSA8Sz4oTzogT3JkPEs+KTogKDxCLCBBPihiOiBCLCBmOiAoYTogQSwgYjogQikgPT4gQikgPT4gKG06IFJlYWRvbmx5TWFwPEssIEE+KSA9PiBCKSA9PiB7XG4gIGNvbnN0IHJlZHVjZVJpZ2h0V2l0aEluZGV4TyA9IHJlZHVjZVJpZ2h0V2l0aEluZGV4KE8pXG4gIHJldHVybiAoYiwgZikgPT4gcmVkdWNlUmlnaHRXaXRoSW5kZXhPKGIsIChfLCBiLCBhKSA9PiBmKGIsIGEpKVxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGdldEZvbGRhYmxlID0gPEs+KE86IE9yZDxLPik6IEZvbGRhYmxlMkM8VVJJLCBLPiA9PiB7XG4gIGNvbnN0IHJlZHVjZU8gPSByZWR1Y2UoTylcbiAgY29uc3QgZm9sZE1hcE8gPSBmb2xkTWFwKE8pXG4gIGNvbnN0IHJlZHVjZVJpZ2h0TyA9IHJlZHVjZVJpZ2h0KE8pXG4gIHJldHVybiB7XG4gICAgVVJJLFxuICAgIF9FOiB1bmRlZmluZWQgYXMgYW55LFxuICAgIHJlZHVjZTogKGZhLCBiLCBmKSA9PiBwaXBlKGZhLCByZWR1Y2VPKGIsIGYpKSxcbiAgICBmb2xkTWFwOiAoTSkgPT4ge1xuICAgICAgY29uc3QgZm9sZE1hcE9NID0gZm9sZE1hcE8oTSlcbiAgICAgIHJldHVybiAoZmEsIGYpID0+IHBpcGUoZmEsIGZvbGRNYXBPTShmKSlcbiAgICB9LFxuICAgIHJlZHVjZVJpZ2h0OiAoZmEsIGIsIGYpID0+IHBpcGUoZmEsIHJlZHVjZVJpZ2h0TyhiLCBmKSlcbiAgfVxufVxuXG4vKipcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHJlZHVjZVdpdGhJbmRleCA9IDxLPihcbiAgTzogT3JkPEs+XG4pOiAoPEIsIEE+KGI6IEIsIGY6IChrOiBLLCBiOiBCLCBhOiBBKSA9PiBCKSA9PiAobTogUmVhZG9ubHlNYXA8SywgQT4pID0+IEIpID0+IHtcbiAgY29uc3Qga2V5c08gPSBrZXlzKE8pXG4gIHJldHVybiAoYiwgZikgPT4gKG0pID0+IHtcbiAgICBsZXQgb3V0ID0gYlxuICAgIGZvciAoY29uc3QgayBvZiBrZXlzTyhtKSkge1xuICAgICAgb3V0ID0gZihrLCBvdXQsIG0uZ2V0KGspISlcbiAgICB9XG4gICAgcmV0dXJuIG91dFxuICB9XG59XG5cbi8qKlxuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgZm9sZE1hcFdpdGhJbmRleCA9IDxLPihcbiAgTzogT3JkPEs+XG4pOiAoPE0+KE06IE1vbm9pZDxNPikgPT4gPEE+KGY6IChrOiBLLCBhOiBBKSA9PiBNKSA9PiAobTogUmVhZG9ubHlNYXA8SywgQT4pID0+IE0pID0+IHtcbiAgY29uc3Qga2V5c08gPSBrZXlzKE8pXG4gIHJldHVybiAoTSkgPT4gKGYpID0+IChtKSA9PiB7XG4gICAgbGV0IG91dCA9IE0uZW1wdHlcbiAgICBmb3IgKGNvbnN0IGsgb2Yga2V5c08obSkpIHtcbiAgICAgIG91dCA9IE0uY29uY2F0KG91dCwgZihrLCBtLmdldChrKSEpKVxuICAgIH1cbiAgICByZXR1cm4gb3V0XG4gIH1cbn1cblxuLyoqXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCByZWR1Y2VSaWdodFdpdGhJbmRleCA9IDxLPihcbiAgTzogT3JkPEs+XG4pOiAoPEIsIEE+KGI6IEIsIGY6IChrOiBLLCBhOiBBLCBiOiBCKSA9PiBCKSA9PiAobTogUmVhZG9ubHlNYXA8SywgQT4pID0+IEIpID0+IHtcbiAgY29uc3Qga2V5c08gPSBrZXlzKE8pXG4gIHJldHVybiAoYiwgZikgPT4gKG0pID0+IHtcbiAgICBsZXQgb3V0ID0gYlxuICAgIGNvbnN0IGtzID0ga2V5c08obSlcbiAgICBjb25zdCBsZW4gPSBrcy5sZW5ndGhcbiAgICBmb3IgKGxldCBpID0gbGVuIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IGsgPSBrc1tpXVxuICAgICAgb3V0ID0gZihrLCBtLmdldChrKSEsIG91dClcbiAgICB9XG4gICAgcmV0dXJuIG91dFxuICB9XG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgZ2V0Rm9sZGFibGVXaXRoSW5kZXggPSA8Sz4oTzogT3JkPEs+KTogRm9sZGFibGVXaXRoSW5kZXgyQzxVUkksIEssIEs+ID0+IHtcbiAgY29uc3QgRiA9IGdldEZvbGRhYmxlKE8pXG4gIGNvbnN0IHJlZHVjZVdpdGhJbmRleE8gPSByZWR1Y2VXaXRoSW5kZXgoTylcbiAgY29uc3QgZm9sZE1hcFdpdGhJbmRleE8gPSBmb2xkTWFwV2l0aEluZGV4KE8pXG4gIGNvbnN0IHJlZHVjZVJpZ2h0V2l0aEluZGV4TyA9IHJlZHVjZVJpZ2h0V2l0aEluZGV4KE8pXG4gIHJldHVybiB7XG4gICAgVVJJLFxuICAgIF9FOiB1bmRlZmluZWQgYXMgYW55LFxuICAgIHJlZHVjZTogRi5yZWR1Y2UsXG4gICAgZm9sZE1hcDogRi5mb2xkTWFwLFxuICAgIHJlZHVjZVJpZ2h0OiBGLnJlZHVjZVJpZ2h0LFxuICAgIHJlZHVjZVdpdGhJbmRleDogKGZhLCBiLCBmKSA9PiBwaXBlKGZhLCByZWR1Y2VXaXRoSW5kZXhPKGIsIGYpKSxcbiAgICBmb2xkTWFwV2l0aEluZGV4OiAoTSkgPT4ge1xuICAgICAgY29uc3QgZm9sZE1hcFdpdGhJbmRleE9NID0gZm9sZE1hcFdpdGhJbmRleE8oTSlcbiAgICAgIHJldHVybiAoZmEsIGYpID0+IHBpcGUoZmEsIGZvbGRNYXBXaXRoSW5kZXhPTShmKSlcbiAgICB9LFxuICAgIHJlZHVjZVJpZ2h0V2l0aEluZGV4OiAoZmEsIGIsIGYpID0+IHBpcGUoZmEsIHJlZHVjZVJpZ2h0V2l0aEluZGV4TyhiLCBmKSlcbiAgfVxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGdldFRyYXZlcnNhYmxlID0gPEs+KE86IE9yZDxLPik6IFRyYXZlcnNhYmxlMkM8VVJJLCBLPiA9PiB7XG4gIGNvbnN0IFRXSSA9IGdldFRyYXZlcnNhYmxlV2l0aEluZGV4KE8pXG4gIGNvbnN0IEYgPSBnZXRGb2xkYWJsZShPKVxuICByZXR1cm4ge1xuICAgIFVSSSxcbiAgICBfRTogdW5kZWZpbmVkIGFzIGFueSxcbiAgICBtYXA6IF9tYXAsXG4gICAgcmVkdWNlOiBGLnJlZHVjZSxcbiAgICBmb2xkTWFwOiBGLmZvbGRNYXAsXG4gICAgcmVkdWNlUmlnaHQ6IEYucmVkdWNlUmlnaHQsXG4gICAgdHJhdmVyc2U6IFRXSS50cmF2ZXJzZSxcbiAgICBzZXF1ZW5jZTogVFdJLnNlcXVlbmNlXG4gIH1cbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRUcmF2ZXJzYWJsZVdpdGhJbmRleCA9IDxLPihPOiBPcmQ8Sz4pOiBUcmF2ZXJzYWJsZVdpdGhJbmRleDJDPFVSSSwgSywgSz4gPT4ge1xuICBjb25zdCBGV0kgPSBnZXRGb2xkYWJsZVdpdGhJbmRleChPKVxuICBjb25zdCBrZXlzTyA9IGtleXMoTylcbiAgY29uc3QgdHJhdmVyc2VXaXRoSW5kZXggPSA8Rj4oXG4gICAgRjogQXBwbGljYXRpdmU8Rj5cbiAgKTogKDxBLCBCPih0YTogUmVhZG9ubHlNYXA8SywgQT4sIGY6IChrOiBLLCBhOiBBKSA9PiBIS1Q8RiwgQj4pID0+IEhLVDxGLCBSZWFkb25seU1hcDxLLCBCPj4pID0+IHtcbiAgICByZXR1cm4gPEEsIEI+KHRhOiBSZWFkb25seU1hcDxLLCBBPiwgZjogKGs6IEssIGE6IEEpID0+IEhLVDxGLCBCPikgPT4ge1xuICAgICAgbGV0IGZtOiBIS1Q8RiwgTWFwPEssIEI+PiA9IEYub2YobmV3IE1hcCgpKVxuICAgICAgY29uc3Qga3MgPSBrZXlzTyh0YSlcbiAgICAgIGNvbnN0IGxlbiA9IGtzLmxlbmd0aFxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBjb25zdCBrZXkgPSBrc1tpXVxuICAgICAgICBjb25zdCBhID0gdGEuZ2V0KGtleSkhXG4gICAgICAgIGZtID0gRi5hcChcbiAgICAgICAgICBGLm1hcChmbSwgKG0pID0+IChiOiBCKSA9PiBtLnNldChrZXksIGIpKSxcbiAgICAgICAgICBmKGtleSwgYSlcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZtXG4gICAgfVxuICB9XG4gIGNvbnN0IHRyYXZlcnNlID0gPEY+KFxuICAgIEY6IEFwcGxpY2F0aXZlPEY+XG4gICk6ICg8QSwgQj4odGE6IFJlYWRvbmx5TWFwPEssIEE+LCBmOiAoYTogQSkgPT4gSEtUPEYsIEI+KSA9PiBIS1Q8RiwgUmVhZG9ubHlNYXA8SywgQj4+KSA9PiB7XG4gICAgY29uc3QgdHJhdmVyc2VXaXRoSW5kZXhGID0gdHJhdmVyc2VXaXRoSW5kZXgoRilcbiAgICByZXR1cm4gKHRhLCBmKSA9PiB0cmF2ZXJzZVdpdGhJbmRleEYodGEsIChfLCBhKSA9PiBmKGEpKVxuICB9XG5cbiAgY29uc3Qgc2VxdWVuY2UgPSA8Rj4oRjogQXBwbGljYXRpdmU8Rj4pOiAoPEE+KHRhOiBSZWFkb25seU1hcDxLLCBIS1Q8RiwgQT4+KSA9PiBIS1Q8RiwgUmVhZG9ubHlNYXA8SywgQT4+KSA9PiB7XG4gICAgY29uc3QgdHJhdmVyc2VXaXRoSW5kZXhGID0gdHJhdmVyc2VXaXRoSW5kZXgoRilcbiAgICByZXR1cm4gKHRhKSA9PiB0cmF2ZXJzZVdpdGhJbmRleEYodGEsIFNLKVxuICB9XG4gIHJldHVybiB7XG4gICAgVVJJLFxuICAgIF9FOiB1bmRlZmluZWQgYXMgYW55LFxuICAgIG1hcDogX21hcCxcbiAgICBtYXBXaXRoSW5kZXg6IF9tYXBXaXRoSW5kZXgsXG4gICAgcmVkdWNlOiBGV0kucmVkdWNlLFxuICAgIGZvbGRNYXA6IEZXSS5mb2xkTWFwLFxuICAgIHJlZHVjZVJpZ2h0OiBGV0kucmVkdWNlUmlnaHQsXG4gICAgcmVkdWNlV2l0aEluZGV4OiBGV0kucmVkdWNlV2l0aEluZGV4LFxuICAgIGZvbGRNYXBXaXRoSW5kZXg6IEZXSS5mb2xkTWFwV2l0aEluZGV4LFxuICAgIHJlZHVjZVJpZ2h0V2l0aEluZGV4OiBGV0kucmVkdWNlUmlnaHRXaXRoSW5kZXgsXG4gICAgdHJhdmVyc2UsXG4gICAgc2VxdWVuY2UsXG4gICAgdHJhdmVyc2VXaXRoSW5kZXhcbiAgfVxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2l0aGVyYWJsZTxLPihPOiBPcmQ8Sz4pOiBXaXRoZXJhYmxlMkM8VVJJLCBLPiAmIFRyYXZlcnNhYmxlV2l0aEluZGV4MkM8VVJJLCBLLCBLPiB7XG4gIGNvbnN0IFRXSSA9IGdldFRyYXZlcnNhYmxlV2l0aEluZGV4KE8pXG4gIHJldHVybiB7XG4gICAgVVJJLFxuICAgIF9FOiB1bmRlZmluZWQgYXMgYW55LFxuICAgIG1hcDogX21hcCxcbiAgICBjb21wYWN0LFxuICAgIHNlcGFyYXRlLFxuICAgIGZpbHRlcjogX2ZpbHRlcixcbiAgICBmaWx0ZXJNYXA6IF9maWx0ZXJNYXAsXG4gICAgcGFydGl0aW9uOiBfcGFydGl0aW9uLFxuICAgIHBhcnRpdGlvbk1hcDogX3BhcnRpdGlvbk1hcCxcbiAgICByZWR1Y2U6IFRXSS5yZWR1Y2UsXG4gICAgZm9sZE1hcDogVFdJLmZvbGRNYXAsXG4gICAgcmVkdWNlUmlnaHQ6IFRXSS5yZWR1Y2VSaWdodCxcbiAgICB0cmF2ZXJzZTogVFdJLnRyYXZlcnNlLFxuICAgIHNlcXVlbmNlOiBUV0kuc2VxdWVuY2UsXG4gICAgbWFwV2l0aEluZGV4OiBfbWFwV2l0aEluZGV4LFxuICAgIHJlZHVjZVdpdGhJbmRleDogVFdJLnJlZHVjZVdpdGhJbmRleCxcbiAgICBmb2xkTWFwV2l0aEluZGV4OiBUV0kuZm9sZE1hcFdpdGhJbmRleCxcbiAgICByZWR1Y2VSaWdodFdpdGhJbmRleDogVFdJLnJlZHVjZVJpZ2h0V2l0aEluZGV4LFxuICAgIHRyYXZlcnNlV2l0aEluZGV4OiBUV0kudHJhdmVyc2VXaXRoSW5kZXgsXG4gICAgd2lsdDogd2lsdERlZmF1bHQoVFdJLCBDb21wYWN0YWJsZSksXG4gICAgd2l0aGVyOiB3aXRoZXJEZWZhdWx0KFRXSSwgQ29tcGFjdGFibGUpXG4gIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gdXRpbHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCB1bmlvbiA9IDxLLCBBPihcbiAgRTogRXE8Sz4sXG4gIE06IE1hZ21hPEE+XG4pOiAoKHNlY29uZDogUmVhZG9ubHlNYXA8SywgQT4pID0+IChmaXJzdDogUmVhZG9ubHlNYXA8SywgQT4pID0+IFJlYWRvbmx5TWFwPEssIEE+KSA9PiB7XG4gIGNvbnN0IGxvb2t1cEUgPSBsb29rdXAoRSlcbiAgcmV0dXJuIChzZWNvbmQpID0+IChmaXJzdCkgPT4ge1xuICAgIGlmIChpc0VtcHR5KGZpcnN0KSkge1xuICAgICAgcmV0dXJuIHNlY29uZFxuICAgIH1cbiAgICBpZiAoaXNFbXB0eShzZWNvbmQpKSB7XG4gICAgICByZXR1cm4gZmlyc3RcbiAgICB9XG4gICAgY29uc3Qgb3V0OiBNYXA8SywgQT4gPSBuZXcgTWFwKClcbiAgICBjb25zdCBmaXJzdEVudHJpZXMgPSBmaXJzdC5lbnRyaWVzKClcbiAgICBsZXQgZTogTmV4dDxyZWFkb25seSBbSywgQV0+XG4gICAgd2hpbGUgKCEoZSA9IGZpcnN0RW50cmllcy5uZXh0KCkpLmRvbmUpIHtcbiAgICAgIGNvbnN0IFtrLCBhXSA9IGUudmFsdWVcbiAgICAgIGNvbnN0IG9rYSA9IGxvb2t1cEUoaykoc2Vjb25kKVxuICAgICAgaWYgKF8uaXNTb21lKG9rYSkpIHtcbiAgICAgICAgb3V0LnNldChrLCBNLmNvbmNhdChhLCBva2EudmFsdWUpKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3V0LnNldChrLCBhKVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBzZWNvbmRFbnRyaWVzID0gc2Vjb25kLmVudHJpZXMoKVxuICAgIHdoaWxlICghKGUgPSBzZWNvbmRFbnRyaWVzLm5leHQoKSkuZG9uZSkge1xuICAgICAgY29uc3QgW2ssIGFdID0gZS52YWx1ZVxuICAgICAgY29uc3Qgb2thID0gbG9va3VwRShrKShvdXQpXG4gICAgICBpZiAoXy5pc05vbmUob2thKSkge1xuICAgICAgICBvdXQuc2V0KGssIGEpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvdXRcbiAgfVxufVxuXG4vKipcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGludGVyc2VjdGlvbiA9IDxLLCBBPihcbiAgRTogRXE8Sz4sXG4gIE06IE1hZ21hPEE+XG4pOiAoKHNlY29uZDogUmVhZG9ubHlNYXA8SywgQT4pID0+IChmaXJzdDogUmVhZG9ubHlNYXA8SywgQT4pID0+IFJlYWRvbmx5TWFwPEssIEE+KSA9PiB7XG4gIGNvbnN0IGxvb2t1cEUgPSBsb29rdXAoRSlcbiAgcmV0dXJuIChzZWNvbmQpID0+IChmaXJzdCkgPT4ge1xuICAgIGlmIChpc0VtcHR5KGZpcnN0KSB8fCBpc0VtcHR5KHNlY29uZCkpIHtcbiAgICAgIHJldHVybiBlbXB0eVxuICAgIH1cbiAgICBjb25zdCBvdXQ6IE1hcDxLLCBBPiA9IG5ldyBNYXAoKVxuICAgIGNvbnN0IGVudHJpZXMgPSBmaXJzdC5lbnRyaWVzKClcbiAgICBsZXQgZTogTmV4dDxyZWFkb25seSBbSywgQV0+XG4gICAgd2hpbGUgKCEoZSA9IGVudHJpZXMubmV4dCgpKS5kb25lKSB7XG4gICAgICBjb25zdCBbaywgYV0gPSBlLnZhbHVlXG4gICAgICBjb25zdCBva2EgPSBsb29rdXBFKGspKHNlY29uZClcbiAgICAgIGlmIChfLmlzU29tZShva2EpKSB7XG4gICAgICAgIG91dC5zZXQoaywgTS5jb25jYXQoYSwgb2thLnZhbHVlKSlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG91dFxuICB9XG59XG5cbi8qKlxuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgZGlmZmVyZW5jZSA9IDxLPihcbiAgRTogRXE8Sz5cbik6ICg8QT4oX3NlY29uZDogUmVhZG9ubHlNYXA8SywgQT4pID0+IChmaXJzdDogUmVhZG9ubHlNYXA8SywgQT4pID0+IFJlYWRvbmx5TWFwPEssIEE+KSA9PiB7XG4gIGNvbnN0IG1lbWJlckUgPSBtZW1iZXIoRSlcbiAgcmV0dXJuIDxBPihzZWNvbmQ6IFJlYWRvbmx5TWFwPEssIEE+KSA9PiAoZmlyc3Q6IFJlYWRvbmx5TWFwPEssIEE+KSA9PiB7XG4gICAgaWYgKGlzRW1wdHkoZmlyc3QpKSB7XG4gICAgICByZXR1cm4gc2Vjb25kXG4gICAgfVxuICAgIGlmIChpc0VtcHR5KHNlY29uZCkpIHtcbiAgICAgIHJldHVybiBmaXJzdFxuICAgIH1cbiAgICBjb25zdCBvdXQ6IE1hcDxLLCBBPiA9IG5ldyBNYXAoKVxuICAgIGNvbnN0IGZpcnN0RW50cmllcyA9IGZpcnN0LmVudHJpZXMoKVxuICAgIGxldCBlOiBOZXh0PHJlYWRvbmx5IFtLLCBBXT5cbiAgICB3aGlsZSAoIShlID0gZmlyc3RFbnRyaWVzLm5leHQoKSkuZG9uZSkge1xuICAgICAgY29uc3QgW2ssIGFdID0gZS52YWx1ZVxuICAgICAgaWYgKCFtZW1iZXJFKGspKHNlY29uZCkpIHtcbiAgICAgICAgb3V0LnNldChrLCBhKVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBzZWNvbmRFbnRyaWVzID0gc2Vjb25kLmVudHJpZXMoKVxuICAgIHdoaWxlICghKGUgPSBzZWNvbmRFbnRyaWVzLm5leHQoKSkuZG9uZSkge1xuICAgICAgY29uc3QgW2ssIGFdID0gZS52YWx1ZVxuICAgICAgaWYgKCFtZW1iZXJFKGspKGZpcnN0KSkge1xuICAgICAgICBvdXQuc2V0KGssIGEpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvdXRcbiAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBkZXByZWNhdGVkXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogVXNlIFtgdXBzZXJ0QXRgXSgjdXBzZXJ0YXQpIGluc3RlYWQuXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi41LjBcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBjb25zdCBpbnNlcnRBdDogPEs+KEU6IEVxPEs+KSA9PiA8QT4oazogSywgYTogQSkgPT4gKG06IFJlYWRvbmx5TWFwPEssIEE+KSA9PiBSZWFkb25seU1hcDxLLCBBPiA9IHVwc2VydEF0XG5cbi8qKlxuICogVXNlIHNtYWxsLCBzcGVjaWZpYyBpbnN0YW5jZXMgaW5zdGVhZC5cbiAqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi41LjBcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBjb25zdCByZWFkb25seU1hcDogRmlsdGVyYWJsZTI8VVJJPiA9IHtcbiAgVVJJLFxuICBtYXA6IF9tYXAsXG4gIGNvbXBhY3QsXG4gIHNlcGFyYXRlLFxuICBmaWx0ZXI6IF9maWx0ZXIsXG4gIGZpbHRlck1hcDogX2ZpbHRlck1hcCxcbiAgcGFydGl0aW9uOiBfcGFydGl0aW9uLFxuICBwYXJ0aXRpb25NYXA6IF9wYXJ0aXRpb25NYXBcbn1cbiJdfQ==