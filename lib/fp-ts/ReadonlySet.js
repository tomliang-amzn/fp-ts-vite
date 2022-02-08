"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.URI = void 0;
exports.chain = chain;
exports.compact = void 0;
exports.difference = difference;
exports.elem = elem;
exports.every = exports.empty = void 0;
exports.filter = filter;
exports.filterMap = filterMap;
exports.foldMap = foldMap;
exports.getDifferenceMagma = exports.fromSet = exports.fromReadonlyArray = exports.fromArray = void 0;
exports.getEq = getEq;
exports.getIntersectionSemigroup = void 0;
exports.getShow = getShow;
exports.getUnionSemigroup = exports.getUnionMonoid = void 0;
exports.insert = insert;
exports.intersection = intersection;
exports.isEmpty = void 0;
exports.isSubset = isSubset;
exports.map = map;
exports.partition = partition;
exports.partitionMap = partitionMap;
exports.reduce = reduce;
exports.remove = exports.reduceRight = void 0;
exports.separate = separate;
exports.toReadonlyArray = exports.some = exports.size = exports.singleton = void 0;
exports.toSet = toSet;
exports.toggle = void 0;
exports.union = union;

var _Eq = require("./Eq");

var _function = require("./function");

var _Predicate = require("./Predicate");

var _Separated = require("./Separated");

/**
 * @since 2.5.0
 */
// -------------------------------------------------------------------------------------
// interop
// -------------------------------------------------------------------------------------

/**
 * @category interop
 * @since 2.5.0
 */
var fromSet = function fromSet(s) {
  return new Set(s);
}; // -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------

/**
 * Create a set with one element
 *
 * @category constructors
 * @since 2.5.0
 */


exports.fromSet = fromSet;

var singleton = function singleton(a) {
  return new Set([a]);
};
/**
 * Create a `ReadonlySet` from a `ReadonlyArray`
 *
 * @category constructors
 * @since 2.10.0
 */


exports.singleton = singleton;

var fromReadonlyArray = function fromReadonlyArray(E) {
  return function (as) {
    var len = as.length;
    var out = new Set();
    var has = elem(E);

    for (var i = 0; i < len; i++) {
      var _a = as[i];

      if (!has(_a, out)) {
        out.add(_a);
      }
    }

    return out;
  };
}; // -------------------------------------------------------------------------------------
// destructors
// -------------------------------------------------------------------------------------

/**
 * @category destructors
 * @since 2.5.0
 */


exports.fromReadonlyArray = fromReadonlyArray;

function toSet(s) {
  return new Set(s);
}

/**
 * Projects a Set through a function
 *
 * @category combinators
 * @since 2.5.0
 */
function map(E) {
  var elemE = elem(E);
  return function (f) {
    return function (set) {
      var r = new Set();
      set.forEach(function (e) {
        var v = f(e);

        if (!elemE(v, r)) {
          r.add(v);
        }
      });
      return r;
    };
  };
}
/**
 * @category combinators
 * @since 2.5.0
 */


function chain(E) {
  var elemE = elem(E);
  return function (f) {
    return function (set) {
      var r = new Set();
      set.forEach(function (e) {
        f(e).forEach(function (e) {
          if (!elemE(e, r)) {
            r.add(e);
          }
        });
      });
      return r;
    };
  };
}
/**
 * @category combinators
 * @since 2.5.0
 */


function filter(predicate) {
  return function (set) {
    var values = set.values();
    var e;
    var r = new Set(); // tslint:disable-next-line: strict-boolean-expressions

    while (!(e = values.next()).done) {
      var _a2 = e.value;

      if (predicate(_a2)) {
        r.add(_a2);
      }
    }

    return r;
  };
}
/**
 * @since 2.5.0
 */


function partition(predicate) {
  return function (set) {
    var values = set.values();
    var e;
    var right = new Set();
    var left = new Set(); // tslint:disable-next-line: strict-boolean-expressions

    while (!(e = values.next()).done) {
      var _a3 = e.value;

      if (predicate(_a3)) {
        right.add(_a3);
      } else {
        left.add(_a3);
      }
    }

    return (0, _Separated.separated)(left, right);
  };
} // TODO: remove non-curried overloading in v3

/**
 * Form the union of two sets
 *
 * @category combinators
 * @since 2.5.0
 */


function union(E) {
  var elemE = elem(E);
  return function (me, that) {
    if (that === undefined) {
      var unionE = union(E);
      return function (that) {
        return unionE(me, that);
      };
    }

    if (isEmpty(me)) {
      return that;
    }

    if (isEmpty(that)) {
      return me;
    }

    var r = new Set(me);
    that.forEach(function (e) {
      if (!elemE(e, r)) {
        r.add(e);
      }
    });
    return r;
  };
} // TODO: remove non-curried overloading in v3

/**
 * The set of elements which are in both the first and second set
 *
 * @category combinators
 * @since 2.5.0
 */


function intersection(E) {
  var elemE = elem(E);
  return function (me, that) {
    if (that === undefined) {
      var intersectionE = intersection(E);
      return function (that) {
        return intersectionE(that, me);
      };
    }

    if (isEmpty(me) || isEmpty(that)) {
      return empty;
    }

    var r = new Set();
    me.forEach(function (e) {
      if (elemE(e, that)) {
        r.add(e);
      }
    });
    return r;
  };
}
/**
 * @since 2.5.0
 */


function partitionMap(EB, EC) {
  return function (f) {
    return function (set) {
      var values = set.values();
      var e;
      var left = new Set();
      var right = new Set();
      var hasB = elem(EB);
      var hasC = elem(EC); // tslint:disable-next-line: strict-boolean-expressions

      while (!(e = values.next()).done) {
        var v = f(e.value);

        switch (v._tag) {
          case 'Left':
            if (!hasB(v.left, left)) {
              left.add(v.left);
            }

            break;

          case 'Right':
            if (!hasC(v.right, right)) {
              right.add(v.right);
            }

            break;
        }
      }

      return (0, _Separated.separated)(left, right);
    };
  };
} // TODO: remove non-curried overloading in v3

/**
 * Form the set difference (`x` - `y`)
 *
 * @example
 * import { difference } from 'fp-ts/ReadonlySet'
 * import * as N from 'fp-ts/number'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.deepStrictEqual(pipe(new Set([1, 2]), difference(N.Eq)(new Set([1, 3]))), new Set([2]))
 *
 * @category combinators
 * @since 2.5.0
 */


function difference(E) {
  var elemE = elem(E);
  return function (me, that) {
    if (that === undefined) {
      var differenceE = difference(E);
      return function (that) {
        return differenceE(that, me);
      };
    }

    return filter(function (a) {
      return !elemE(a, that);
    })(me);
  };
}
/**
 * @since 2.5.0
 */


function reduce(O) {
  var toReadonlyArrayO = toReadonlyArray(O);
  return function (b, f) {
    return function (fa) {
      return toReadonlyArrayO(fa).reduce(f, b);
    };
  };
}
/**
 * @since 2.5.0
 */


function foldMap(O, M) {
  var toReadonlyArrayO = toReadonlyArray(O);
  return function (f) {
    return function (fa) {
      return toReadonlyArrayO(fa).reduce(function (b, a) {
        return M.concat(b, f(a));
      }, M.empty);
    };
  };
}
/**
 * @since 2.11.0
 */


var reduceRight = function reduceRight(O) {
  var toReadonlyArrayO = toReadonlyArray(O);
  return function (b, f) {
    return function (fa) {
      return toReadonlyArrayO(fa).reduceRight(function (b, a) {
        return f(a, b);
      }, b);
    };
  };
};
/**
 * Insert a value into a set
 *
 * @category combinators
 * @since 2.5.0
 */


exports.reduceRight = reduceRight;

function insert(E) {
  var elemE = elem(E);
  return function (a) {
    return function (set) {
      if (!elemE(a)(set)) {
        var r = new Set(set);
        r.add(a);
        return r;
      } else {
        return set;
      }
    };
  };
}
/**
 * Delete a value from a set
 *
 * @category combinators
 * @since 2.5.0
 */


var remove = function remove(E) {
  return function (a) {
    return function (set) {
      return filter(function (ax) {
        return !E.equals(a, ax);
      })(set);
    };
  };
};
/**
 * Checks an element is a member of a set;
 * If yes, removes the value from the set
 * If no, inserts the value to the set
 *
 * @category combinators
 * @since 2.10.0
 */


exports.remove = remove;

var toggle = function toggle(E) {
  var elemE = elem(E);
  var removeE = remove(E);
  var insertE = insert(E);
  return function (a) {
    return function (set) {
      return (elemE(a, set) ? removeE : insertE)(a)(set);
    };
  };
};
/**
 * @category combinators
 * @since 2.5.0
 */


exports.toggle = toggle;

var compact = function compact(E) {
  return filterMap(E)(_function.identity);
};
/**
 * @since 2.5.0
 */


exports.compact = compact;

function separate(EE, EA) {
  return function (fa) {
    var elemEE = elem(EE);
    var elemEA = elem(EA);
    var left = new Set();
    var right = new Set();
    fa.forEach(function (e) {
      switch (e._tag) {
        case 'Left':
          if (!elemEE(e.left, left)) {
            left.add(e.left);
          }

          break;

        case 'Right':
          if (!elemEA(e.right, right)) {
            right.add(e.right);
          }

          break;
      }
    });
    return (0, _Separated.separated)(left, right);
  };
}
/**
 * @category combinators
 * @since 2.5.0
 */


function filterMap(E) {
  var elemE = elem(E);
  return function (f) {
    return function (fa) {
      var r = new Set();
      fa.forEach(function (a) {
        var ob = f(a);

        if (ob._tag === 'Some' && !elemE(ob.value, r)) {
          r.add(ob.value);
        }
      });
      return r;
    };
  };
} // -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------

/**
 * @since 2.5.0
 */


var empty = new Set();
/**
 * Test whether a `ReadonlySet` is empty.
 *
 * @since 2.10.0
 */

exports.empty = empty;

var isEmpty = function isEmpty(set) {
  return set.size === 0;
};
/**
 * Calculate the number of elements in a `ReadonlySet`.
 *
 * @since 2.10.0
 */


exports.isEmpty = isEmpty;

var size = function size(set) {
  return set.size;
};
/**
 * @since 2.5.0
 */


exports.size = size;

var some = function some(predicate) {
  return function (set) {
    var values = set.values();
    var e;
    var found = false; // tslint:disable-next-line: strict-boolean-expressions

    while (!found && !(e = values.next()).done) {
      found = predicate(e.value);
    }

    return found;
  };
};
/**
 * @since 2.5.0
 */


exports.some = some;

var every = function every(predicate) {
  return (0, _Predicate.not)(some((0, _Predicate.not)(predicate)));
}; // TODO: remove non-curried overloading in v3

/**
 * `true` if and only if every element in the first set is an element of the second set
 *
 * @since 2.5.0
 */


exports.every = every;

function isSubset(E) {
  var elemE = elem(E);
  return function (me, that) {
    if (that === undefined) {
      var isSubsetE = isSubset(E);
      return function (that) {
        return isSubsetE(that, me);
      };
    }

    return every(function (a) {
      return elemE(a, that);
    })(me);
  };
} // TODO: remove non-curried overloading in v3

/**
 * Test if a value is a member of a set
 *
 * @since 2.5.0
 */


function elem(E) {
  return function (a, set) {
    if (set === undefined) {
      var elemE = elem(E);
      return function (set) {
        return elemE(a, set);
      };
    }

    var values = set.values();
    var e;
    var found = false; // tslint:disable-next-line: strict-boolean-expressions

    while (!found && !(e = values.next()).done) {
      found = E.equals(a, e.value);
    }

    return found;
  };
}
/**
 * Get a sorted `ReadonlyArray` of the values contained in a `ReadonlySet`.
 *
 * @since 2.5.0
 */


var toReadonlyArray = function toReadonlyArray(O) {
  return function (set) {
    var out = [];
    set.forEach(function (e) {
      return out.push(e);
    });
    return out.sort(O.compare);
  };
}; // -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------

/**
 * @category instances
 * @since 2.11.0
 */


exports.toReadonlyArray = toReadonlyArray;
var URI = 'ReadonlySet';
/**
 * @category instances
 * @since 2.11.0
 */

exports.URI = URI;

/**
 * @category instances
 * @since 2.5.0
 */
function getShow(S) {
  return {
    show: function show(s) {
      var entries = [];
      s.forEach(function (a) {
        entries.push(S.show(a));
      });
      return "new Set([".concat(entries.sort().join(', '), "])");
    }
  };
}
/**
 * @category instances
 * @since 2.5.0
 */


function getEq(E) {
  var subsetE = isSubset(E);
  return (0, _Eq.fromEquals)(function (x, y) {
    return subsetE(x, y) && subsetE(y, x);
  });
}
/**
 * @category instances
 * @since 2.11.0
 */


var getUnionSemigroup = function getUnionSemigroup(E) {
  return {
    concat: union(E)
  };
};
/**
 * @category instances
 * @since 2.5.0
 */


exports.getUnionSemigroup = getUnionSemigroup;

var getUnionMonoid = function getUnionMonoid(E) {
  return {
    concat: getUnionSemigroup(E).concat,
    empty: empty
  };
};
/**
 * @category instances
 * @since 2.5.0
 */


exports.getUnionMonoid = getUnionMonoid;

var getIntersectionSemigroup = function getIntersectionSemigroup(E) {
  return {
    concat: intersection(E)
  };
};
/**
 * @category instances
 * @since 2.11.0
 */


exports.getIntersectionSemigroup = getIntersectionSemigroup;

var getDifferenceMagma = function getDifferenceMagma(E) {
  return {
    concat: difference(E)
  };
}; // -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------

/**
 * Use [`fromReadonlyArray`](#fromreadonlyarray) instead.
 *
 * @category constructors
 * @since 2.5.0
 * @deprecated
 */


exports.getDifferenceMagma = getDifferenceMagma;
var fromArray = fromReadonlyArray;
exports.fromArray = fromArray;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mcC10cy9SZWFkb25seVNldC50cyJdLCJuYW1lcyI6WyJmcm9tU2V0IiwicyIsIlNldCIsInNpbmdsZXRvbiIsImEiLCJmcm9tUmVhZG9ubHlBcnJheSIsIkUiLCJhcyIsImxlbiIsImxlbmd0aCIsIm91dCIsImhhcyIsImVsZW0iLCJpIiwiYWRkIiwidG9TZXQiLCJtYXAiLCJlbGVtRSIsImYiLCJzZXQiLCJyIiwiZm9yRWFjaCIsImUiLCJ2IiwiY2hhaW4iLCJmaWx0ZXIiLCJwcmVkaWNhdGUiLCJ2YWx1ZXMiLCJuZXh0IiwiZG9uZSIsInZhbHVlIiwicGFydGl0aW9uIiwicmlnaHQiLCJsZWZ0IiwidW5pb24iLCJtZSIsInRoYXQiLCJ1bmRlZmluZWQiLCJ1bmlvbkUiLCJpc0VtcHR5IiwiaW50ZXJzZWN0aW9uIiwiaW50ZXJzZWN0aW9uRSIsImVtcHR5IiwicGFydGl0aW9uTWFwIiwiRUIiLCJFQyIsImhhc0IiLCJoYXNDIiwiX3RhZyIsImRpZmZlcmVuY2UiLCJkaWZmZXJlbmNlRSIsInJlZHVjZSIsIk8iLCJ0b1JlYWRvbmx5QXJyYXlPIiwidG9SZWFkb25seUFycmF5IiwiYiIsImZhIiwiZm9sZE1hcCIsIk0iLCJjb25jYXQiLCJyZWR1Y2VSaWdodCIsImluc2VydCIsInJlbW92ZSIsImF4IiwiZXF1YWxzIiwidG9nZ2xlIiwicmVtb3ZlRSIsImluc2VydEUiLCJjb21wYWN0IiwiZmlsdGVyTWFwIiwiaWRlbnRpdHkiLCJzZXBhcmF0ZSIsIkVFIiwiRUEiLCJlbGVtRUUiLCJlbGVtRUEiLCJvYiIsInNpemUiLCJzb21lIiwiZm91bmQiLCJldmVyeSIsImlzU3Vic2V0IiwiaXNTdWJzZXRFIiwicHVzaCIsInNvcnQiLCJjb21wYXJlIiwiVVJJIiwiZ2V0U2hvdyIsIlMiLCJzaG93IiwiZW50cmllcyIsImpvaW4iLCJnZXRFcSIsInN1YnNldEUiLCJ4IiwieSIsImdldFVuaW9uU2VtaWdyb3VwIiwiZ2V0VW5pb25Nb25vaWQiLCJn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aUJBQTdFIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuaW1wb3J0IHsgRWl0aGVyIH0gZnJvbSAnLi9FaXRoZXInXG5pbXBvcnQgeyBFcSwgZnJvbUVxdWFscyB9IGZyb20gJy4vRXEnXG5pbXBvcnQgeyBpZGVudGl0eSB9IGZyb20gJy4vZnVuY3Rpb24nXG5pbXBvcnQgeyBNYWdtYSB9IGZyb20gJy4vTWFnbWEnXG5pbXBvcnQgeyBNb25vaWQgfSBmcm9tICcuL01vbm9pZCdcbmltcG9ydCB7IE9wdGlvbiB9IGZyb20gJy4vT3B0aW9uJ1xuaW1wb3J0IHsgT3JkIH0gZnJvbSAnLi9PcmQnXG5pbXBvcnQgeyBub3QsIFByZWRpY2F0ZSB9IGZyb20gJy4vUHJlZGljYXRlJ1xuaW1wb3J0IHsgUmVmaW5lbWVudCB9IGZyb20gJy4vUmVmaW5lbWVudCdcbmltcG9ydCB7IFNlbWlncm91cCB9IGZyb20gJy4vU2VtaWdyb3VwJ1xuaW1wb3J0IHsgU2VwYXJhdGVkLCBzZXBhcmF0ZWQgfSBmcm9tICcuL1NlcGFyYXRlZCdcbmltcG9ydCB7IFNob3cgfSBmcm9tICcuL1Nob3cnXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGludGVyb3Bcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW50ZXJvcFxuICogQHNpbmNlIDIuNS4wXG4gKi9cbmV4cG9ydCBjb25zdCBmcm9tU2V0ID0gPEE+KHM6IFNldDxBPik6IFJlYWRvbmx5U2V0PEE+ID0+IG5ldyBTZXQocylcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gY29uc3RydWN0b3JzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQ3JlYXRlIGEgc2V0IHdpdGggb25lIGVsZW1lbnRcbiAqXG4gKiBAY2F0ZWdvcnkgY29uc3RydWN0b3JzXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGNvbnN0IHNpbmdsZXRvbiA9IDxBPihhOiBBKTogUmVhZG9ubHlTZXQ8QT4gPT4gbmV3IFNldChbYV0pXG5cbi8qKlxuICogQ3JlYXRlIGEgYFJlYWRvbmx5U2V0YCBmcm9tIGEgYFJlYWRvbmx5QXJyYXlgXG4gKlxuICogQGNhdGVnb3J5IGNvbnN0cnVjdG9yc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgZnJvbVJlYWRvbmx5QXJyYXkgPSA8QT4oRTogRXE8QT4pID0+IChhczogUmVhZG9ubHlBcnJheTxBPik6IFJlYWRvbmx5U2V0PEE+ID0+IHtcbiAgY29uc3QgbGVuID0gYXMubGVuZ3RoXG4gIGNvbnN0IG91dCA9IG5ldyBTZXQ8QT4oKVxuICBjb25zdCBoYXMgPSBlbGVtKEUpXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCBhID0gYXNbaV1cbiAgICBpZiAoIWhhcyhhLCBvdXQpKSB7XG4gICAgICBvdXQuYWRkKGEpXG4gICAgfVxuICB9XG4gIHJldHVybiBvdXRcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gZGVzdHJ1Y3RvcnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgZGVzdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9TZXQ8QT4oczogUmVhZG9ubHlTZXQ8QT4pOiBTZXQ8QT4ge1xuICByZXR1cm4gbmV3IFNldChzKVxufVxuXG5pbnRlcmZhY2UgTmV4dDxBPiB7XG4gIHJlYWRvbmx5IGRvbmU/OiBib29sZWFuXG4gIHJlYWRvbmx5IHZhbHVlOiBBXG59XG5cbi8qKlxuICogUHJvamVjdHMgYSBTZXQgdGhyb3VnaCBhIGZ1bmN0aW9uXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1hcDxCPihFOiBFcTxCPik6IDxBPihmOiAoeDogQSkgPT4gQikgPT4gKHNldDogUmVhZG9ubHlTZXQ8QT4pID0+IFJlYWRvbmx5U2V0PEI+IHtcbiAgY29uc3QgZWxlbUUgPSBlbGVtKEUpXG4gIHJldHVybiAoZikgPT4gKHNldCkgPT4ge1xuICAgIGNvbnN0IHIgPSBuZXcgU2V0PEI+KClcbiAgICBzZXQuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgY29uc3QgdiA9IGYoZSlcbiAgICAgIGlmICghZWxlbUUodiwgcikpIHtcbiAgICAgICAgci5hZGQodilcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiByXG4gIH1cbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gY2hhaW48Qj4oRTogRXE8Qj4pOiA8QT4oZjogKHg6IEEpID0+IFJlYWRvbmx5U2V0PEI+KSA9PiAoc2V0OiBSZWFkb25seVNldDxBPikgPT4gUmVhZG9ubHlTZXQ8Qj4ge1xuICBjb25zdCBlbGVtRSA9IGVsZW0oRSlcbiAgcmV0dXJuIChmKSA9PiAoc2V0KSA9PiB7XG4gICAgY29uc3QgciA9IG5ldyBTZXQ8Qj4oKVxuICAgIHNldC5mb3JFYWNoKChlKSA9PiB7XG4gICAgICBmKGUpLmZvckVhY2goKGUpID0+IHtcbiAgICAgICAgaWYgKCFlbGVtRShlLCByKSkge1xuICAgICAgICAgIHIuYWRkKGUpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgICByZXR1cm4gclxuICB9XG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlcjxBLCBCIGV4dGVuZHMgQT4ocmVmaW5lbWVudDogUmVmaW5lbWVudDxBLCBCPik6IChzZXQ6IFJlYWRvbmx5U2V0PEE+KSA9PiBSZWFkb25seVNldDxCPlxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlcjxBPihwcmVkaWNhdGU6IFByZWRpY2F0ZTxBPik6IDxCIGV4dGVuZHMgQT4oc2V0OiBSZWFkb25seVNldDxCPikgPT4gUmVhZG9ubHlTZXQ8Qj5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXI8QT4ocHJlZGljYXRlOiBQcmVkaWNhdGU8QT4pOiAoc2V0OiBSZWFkb25seVNldDxBPikgPT4gUmVhZG9ubHlTZXQ8QT5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXI8QT4ocHJlZGljYXRlOiBQcmVkaWNhdGU8QT4pOiAoc2V0OiBSZWFkb25seVNldDxBPikgPT4gUmVhZG9ubHlTZXQ8QT4ge1xuICByZXR1cm4gKHNldDogUmVhZG9ubHlTZXQ8QT4pID0+IHtcbiAgICBjb25zdCB2YWx1ZXMgPSBzZXQudmFsdWVzKClcbiAgICBsZXQgZTogTmV4dDxBPlxuICAgIGNvbnN0IHIgPSBuZXcgU2V0PEE+KClcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHN0cmljdC1ib29sZWFuLWV4cHJlc3Npb25zXG4gICAgd2hpbGUgKCEoZSA9IHZhbHVlcy5uZXh0KCkpLmRvbmUpIHtcbiAgICAgIGNvbnN0IGEgPSBlLnZhbHVlXG4gICAgICBpZiAocHJlZGljYXRlKGEpKSB7XG4gICAgICAgIHIuYWRkKGEpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByXG4gIH1cbn1cblxuLyoqXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnRpdGlvbjxBLCBCIGV4dGVuZHMgQT4oXG4gIHJlZmluZW1lbnQ6IFJlZmluZW1lbnQ8QSwgQj5cbik6IChzZXQ6IFJlYWRvbmx5U2V0PEE+KSA9PiBTZXBhcmF0ZWQ8UmVhZG9ubHlTZXQ8QT4sIFJlYWRvbmx5U2V0PEI+PlxuZXhwb3J0IGZ1bmN0aW9uIHBhcnRpdGlvbjxBPihcbiAgcHJlZGljYXRlOiBQcmVkaWNhdGU8QT5cbik6IDxCIGV4dGVuZHMgQT4oc2V0OiBSZWFkb25seVNldDxCPikgPT4gU2VwYXJhdGVkPFJlYWRvbmx5U2V0PEI+LCBSZWFkb25seVNldDxCPj5cbmV4cG9ydCBmdW5jdGlvbiBwYXJ0aXRpb248QT4oXG4gIHByZWRpY2F0ZTogUHJlZGljYXRlPEE+XG4pOiAoc2V0OiBSZWFkb25seVNldDxBPikgPT4gU2VwYXJhdGVkPFJlYWRvbmx5U2V0PEE+LCBSZWFkb25seVNldDxBPj5cbmV4cG9ydCBmdW5jdGlvbiBwYXJ0aXRpb248QT4oXG4gIHByZWRpY2F0ZTogUHJlZGljYXRlPEE+XG4pOiAoc2V0OiBSZWFkb25seVNldDxBPikgPT4gU2VwYXJhdGVkPFJlYWRvbmx5U2V0PEE+LCBSZWFkb25seVNldDxBPj4ge1xuICByZXR1cm4gKHNldDogUmVhZG9ubHlTZXQ8QT4pID0+IHtcbiAgICBjb25zdCB2YWx1ZXMgPSBzZXQudmFsdWVzKClcbiAgICBsZXQgZTogTmV4dDxBPlxuICAgIGNvbnN0IHJpZ2h0ID0gbmV3IFNldDxBPigpXG4gICAgY29uc3QgbGVmdCA9IG5ldyBTZXQ8QT4oKVxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogc3RyaWN0LWJvb2xlYW4tZXhwcmVzc2lvbnNcbiAgICB3aGlsZSAoIShlID0gdmFsdWVzLm5leHQoKSkuZG9uZSkge1xuICAgICAgY29uc3QgYSA9IGUudmFsdWVcbiAgICAgIGlmIChwcmVkaWNhdGUoYSkpIHtcbiAgICAgICAgcmlnaHQuYWRkKGEpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZWZ0LmFkZChhKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc2VwYXJhdGVkKGxlZnQsIHJpZ2h0KVxuICB9XG59XG5cbi8vIFRPRE86IHJlbW92ZSBub24tY3VycmllZCBvdmVybG9hZGluZyBpbiB2M1xuLyoqXG4gKiBGb3JtIHRoZSB1bmlvbiBvZiB0d28gc2V0c1xuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuNS4wXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1bmlvbjxBPihcbiAgRTogRXE8QT5cbik6IHtcbiAgKHRoYXQ6IFJlYWRvbmx5U2V0PEE+KTogKG1lOiBSZWFkb25seVNldDxBPikgPT4gUmVhZG9ubHlTZXQ8QT5cbiAgKG1lOiBSZWFkb25seVNldDxBPiwgdGhhdDogUmVhZG9ubHlTZXQ8QT4pOiBSZWFkb25seVNldDxBPlxufVxuZXhwb3J0IGZ1bmN0aW9uIHVuaW9uPEE+KFxuICBFOiBFcTxBPlxuKTogKG1lOiBSZWFkb25seVNldDxBPiwgdGhhdD86IFJlYWRvbmx5U2V0PEE+KSA9PiBSZWFkb25seVNldDxBPiB8ICgobWU6IFJlYWRvbmx5U2V0PEE+KSA9PiBSZWFkb25seVNldDxBPikge1xuICBjb25zdCBlbGVtRSA9IGVsZW0oRSlcbiAgcmV0dXJuIChtZSwgdGhhdD8pID0+IHtcbiAgICBpZiAodGhhdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCB1bmlvbkUgPSB1bmlvbihFKVxuICAgICAgcmV0dXJuICh0aGF0KSA9PiB1bmlvbkUobWUsIHRoYXQpXG4gICAgfVxuICAgIGlmIChpc0VtcHR5KG1lKSkge1xuICAgICAgcmV0dXJuIHRoYXRcbiAgICB9XG4gICAgaWYgKGlzRW1wdHkodGhhdCkpIHtcbiAgICAgIHJldHVybiBtZVxuICAgIH1cbiAgICBjb25zdCByID0gbmV3IFNldChtZSlcbiAgICB0aGF0LmZvckVhY2goKGUpID0+IHtcbiAgICAgIGlmICghZWxlbUUoZSwgcikpIHtcbiAgICAgICAgci5hZGQoZSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiByXG4gIH1cbn1cblxuLy8gVE9ETzogcmVtb3ZlIG5vbi1jdXJyaWVkIG92ZXJsb2FkaW5nIGluIHYzXG4vKipcbiAqIFRoZSBzZXQgb2YgZWxlbWVudHMgd2hpY2ggYXJlIGluIGJvdGggdGhlIGZpcnN0IGFuZCBzZWNvbmQgc2V0XG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGludGVyc2VjdGlvbjxBPihcbiAgRTogRXE8QT5cbik6IHtcbiAgKHRoYXQ6IFJlYWRvbmx5U2V0PEE+KTogKG1lOiBSZWFkb25seVNldDxBPikgPT4gUmVhZG9ubHlTZXQ8QT5cbiAgKG1lOiBSZWFkb25seVNldDxBPiwgdGhhdDogUmVhZG9ubHlTZXQ8QT4pOiBSZWFkb25seVNldDxBPlxufVxuZXhwb3J0IGZ1bmN0aW9uIGludGVyc2VjdGlvbjxBPihcbiAgRTogRXE8QT5cbik6IChtZTogUmVhZG9ubHlTZXQ8QT4sIHRoYXQ/OiBSZWFkb25seVNldDxBPikgPT4gUmVhZG9ubHlTZXQ8QT4gfCAoKHRoYXQ6IFJlYWRvbmx5U2V0PEE+KSA9PiBSZWFkb25seVNldDxBPikge1xuICBjb25zdCBlbGVtRSA9IGVsZW0oRSlcbiAgcmV0dXJuIChtZSwgdGhhdD8pID0+IHtcbiAgICBpZiAodGhhdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBpbnRlcnNlY3Rpb25FID0gaW50ZXJzZWN0aW9uKEUpXG4gICAgICByZXR1cm4gKHRoYXQpID0+IGludGVyc2VjdGlvbkUodGhhdCwgbWUpXG4gICAgfVxuICAgIGlmIChpc0VtcHR5KG1lKSB8fCBpc0VtcHR5KHRoYXQpKSB7XG4gICAgICByZXR1cm4gZW1wdHlcbiAgICB9XG4gICAgY29uc3QgciA9IG5ldyBTZXQ8QT4oKVxuICAgIG1lLmZvckVhY2goKGUpID0+IHtcbiAgICAgIGlmIChlbGVtRShlLCB0aGF0KSkge1xuICAgICAgICByLmFkZChlKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHJcbiAgfVxufVxuXG4vKipcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFydGl0aW9uTWFwPEIsIEM+KFxuICBFQjogRXE8Qj4sXG4gIEVDOiBFcTxDPlxuKTogPEE+KGY6IChhOiBBKSA9PiBFaXRoZXI8QiwgQz4pID0+IChzZXQ6IFJlYWRvbmx5U2V0PEE+KSA9PiBTZXBhcmF0ZWQ8UmVhZG9ubHlTZXQ8Qj4sIFJlYWRvbmx5U2V0PEM+PiB7XG4gIHJldHVybiA8QT4oZjogKGE6IEEpID0+IEVpdGhlcjxCLCBDPikgPT4gKHNldDogUmVhZG9ubHlTZXQ8QT4pID0+IHtcbiAgICBjb25zdCB2YWx1ZXMgPSBzZXQudmFsdWVzKClcbiAgICBsZXQgZTogTmV4dDxBPlxuICAgIGNvbnN0IGxlZnQgPSBuZXcgU2V0PEI+KClcbiAgICBjb25zdCByaWdodCA9IG5ldyBTZXQ8Qz4oKVxuICAgIGNvbnN0IGhhc0IgPSBlbGVtKEVCKVxuICAgIGNvbnN0IGhhc0MgPSBlbGVtKEVDKVxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogc3RyaWN0LWJvb2xlYW4tZXhwcmVzc2lvbnNcbiAgICB3aGlsZSAoIShlID0gdmFsdWVzLm5leHQoKSkuZG9uZSkge1xuICAgICAgY29uc3QgdiA9IGYoZS52YWx1ZSlcbiAgICAgIHN3aXRjaCAodi5fdGFnKSB7XG4gICAgICAgIGNhc2UgJ0xlZnQnOlxuICAgICAgICAgIGlmICghaGFzQih2LmxlZnQsIGxlZnQpKSB7XG4gICAgICAgICAgICBsZWZ0LmFkZCh2LmxlZnQpXG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ1JpZ2h0JzpcbiAgICAgICAgICBpZiAoIWhhc0Modi5yaWdodCwgcmlnaHQpKSB7XG4gICAgICAgICAgICByaWdodC5hZGQodi5yaWdodClcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNlcGFyYXRlZChsZWZ0LCByaWdodClcbiAgfVxufVxuXG4vLyBUT0RPOiByZW1vdmUgbm9uLWN1cnJpZWQgb3ZlcmxvYWRpbmcgaW4gdjNcbi8qKlxuICogRm9ybSB0aGUgc2V0IGRpZmZlcmVuY2UgKGB4YCAtIGB5YClcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgZGlmZmVyZW5jZSB9IGZyb20gJ2ZwLXRzL1JlYWRvbmx5U2V0J1xuICogaW1wb3J0ICogYXMgTiBmcm9tICdmcC10cy9udW1iZXInXG4gKiBpbXBvcnQgeyBwaXBlIH0gZnJvbSAnZnAtdHMvZnVuY3Rpb24nXG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChwaXBlKG5ldyBTZXQoWzEsIDJdKSwgZGlmZmVyZW5jZShOLkVxKShuZXcgU2V0KFsxLCAzXSkpKSwgbmV3IFNldChbMl0pKVxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuNS4wXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaWZmZXJlbmNlPEE+KFxuICBFOiBFcTxBPlxuKToge1xuICAodGhhdDogUmVhZG9ubHlTZXQ8QT4pOiAobWU6IFJlYWRvbmx5U2V0PEE+KSA9PiBSZWFkb25seVNldDxBPlxuICAobWU6IFJlYWRvbmx5U2V0PEE+LCB0aGF0OiBSZWFkb25seVNldDxBPik6IFJlYWRvbmx5U2V0PEE+XG59XG5leHBvcnQgZnVuY3Rpb24gZGlmZmVyZW5jZTxBPihcbiAgRTogRXE8QT5cbik6IChtZTogUmVhZG9ubHlTZXQ8QT4sIHRoYXQ/OiBSZWFkb25seVNldDxBPikgPT4gUmVhZG9ubHlTZXQ8QT4gfCAoKG1lOiBSZWFkb25seVNldDxBPikgPT4gUmVhZG9ubHlTZXQ8QT4pIHtcbiAgY29uc3QgZWxlbUUgPSBlbGVtKEUpXG4gIHJldHVybiAobWUsIHRoYXQ/KSA9PiB7XG4gICAgaWYgKHRoYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgZGlmZmVyZW5jZUUgPSBkaWZmZXJlbmNlKEUpXG4gICAgICByZXR1cm4gKHRoYXQpID0+IGRpZmZlcmVuY2VFKHRoYXQsIG1lKVxuICAgIH1cbiAgICByZXR1cm4gZmlsdGVyKChhOiBBKSA9PiAhZWxlbUUoYSwgdGhhdCkpKG1lKVxuICB9XG59XG5cbi8qKlxuICogQHNpbmNlIDIuNS4wXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2U8QT4oTzogT3JkPEE+KTogPEI+KGI6IEIsIGY6IChiOiBCLCBhOiBBKSA9PiBCKSA9PiAoZmE6IFJlYWRvbmx5U2V0PEE+KSA9PiBCIHtcbiAgY29uc3QgdG9SZWFkb25seUFycmF5TyA9IHRvUmVhZG9ubHlBcnJheShPKVxuICByZXR1cm4gKGIsIGYpID0+IChmYSkgPT4gdG9SZWFkb25seUFycmF5TyhmYSkucmVkdWNlKGYsIGIpXG59XG5cbi8qKlxuICogQHNpbmNlIDIuNS4wXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb2xkTWFwPEEsIE0+KE86IE9yZDxBPiwgTTogTW9ub2lkPE0+KTogKGY6IChhOiBBKSA9PiBNKSA9PiAoZmE6IFJlYWRvbmx5U2V0PEE+KSA9PiBNIHtcbiAgY29uc3QgdG9SZWFkb25seUFycmF5TyA9IHRvUmVhZG9ubHlBcnJheShPKVxuICByZXR1cm4gKGYpID0+IChmYSkgPT4gdG9SZWFkb25seUFycmF5TyhmYSkucmVkdWNlKChiLCBhKSA9PiBNLmNvbmNhdChiLCBmKGEpKSwgTS5lbXB0eSlcbn1cblxuLyoqXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCByZWR1Y2VSaWdodCA9IDxBPihPOiBPcmQ8QT4pOiAoPEI+KGI6IEIsIGY6IChhOiBBLCBiOiBCKSA9PiBCKSA9PiAoZmE6IFJlYWRvbmx5U2V0PEE+KSA9PiBCKSA9PiB7XG4gIGNvbnN0IHRvUmVhZG9ubHlBcnJheU8gPSB0b1JlYWRvbmx5QXJyYXkoTylcbiAgcmV0dXJuIChiLCBmKSA9PiAoZmEpID0+IHRvUmVhZG9ubHlBcnJheU8oZmEpLnJlZHVjZVJpZ2h0KChiLCBhKSA9PiBmKGEsIGIpLCBiKVxufVxuXG4vKipcbiAqIEluc2VydCBhIHZhbHVlIGludG8gYSBzZXRcbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5zZXJ0PEE+KEU6IEVxPEE+KTogKGE6IEEpID0+IChzZXQ6IFJlYWRvbmx5U2V0PEE+KSA9PiBSZWFkb25seVNldDxBPiB7XG4gIGNvbnN0IGVsZW1FID0gZWxlbShFKVxuICByZXR1cm4gKGEpID0+IChzZXQpID0+IHtcbiAgICBpZiAoIWVsZW1FKGEpKHNldCkpIHtcbiAgICAgIGNvbnN0IHIgPSBuZXcgU2V0KHNldClcbiAgICAgIHIuYWRkKGEpXG4gICAgICByZXR1cm4gclxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc2V0XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogRGVsZXRlIGEgdmFsdWUgZnJvbSBhIHNldFxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuNS4wXG4gKi9cbmV4cG9ydCBjb25zdCByZW1vdmUgPSA8QT4oRTogRXE8QT4pID0+IChhOiBBKSA9PiAoc2V0OiBSZWFkb25seVNldDxBPik6IFJlYWRvbmx5U2V0PEE+ID0+XG4gIGZpbHRlcigoYXg6IEEpID0+ICFFLmVxdWFscyhhLCBheCkpKHNldClcblxuLyoqXG4gKiBDaGVja3MgYW4gZWxlbWVudCBpcyBhIG1lbWJlciBvZiBhIHNldDtcbiAqIElmIHllcywgcmVtb3ZlcyB0aGUgdmFsdWUgZnJvbSB0aGUgc2V0XG4gKiBJZiBubywgaW5zZXJ0cyB0aGUgdmFsdWUgdG8gdGhlIHNldFxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgdG9nZ2xlID0gPEE+KEU6IEVxPEE+KTogKChhOiBBKSA9PiAoc2V0OiBSZWFkb25seVNldDxBPikgPT4gUmVhZG9ubHlTZXQ8QT4pID0+IHtcbiAgY29uc3QgZWxlbUUgPSBlbGVtKEUpXG4gIGNvbnN0IHJlbW92ZUUgPSByZW1vdmUoRSlcbiAgY29uc3QgaW5zZXJ0RSA9IGluc2VydChFKVxuICByZXR1cm4gKGEpID0+IChzZXQpID0+IChlbGVtRShhLCBzZXQpID8gcmVtb3ZlRSA6IGluc2VydEUpKGEpKHNldClcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgY29uc3QgY29tcGFjdCA9IDxBPihFOiBFcTxBPik6ICgoZmE6IFJlYWRvbmx5U2V0PE9wdGlvbjxBPj4pID0+IFJlYWRvbmx5U2V0PEE+KSA9PiBmaWx0ZXJNYXAoRSkoaWRlbnRpdHkpXG5cbi8qKlxuICogQHNpbmNlIDIuNS4wXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXBhcmF0ZTxFLCBBPihcbiAgRUU6IEVxPEU+LFxuICBFQTogRXE8QT5cbik6IChmYTogUmVhZG9ubHlTZXQ8RWl0aGVyPEUsIEE+PikgPT4gU2VwYXJhdGVkPFJlYWRvbmx5U2V0PEU+LCBSZWFkb25seVNldDxBPj4ge1xuICByZXR1cm4gKGZhKSA9PiB7XG4gICAgY29uc3QgZWxlbUVFID0gZWxlbShFRSlcbiAgICBjb25zdCBlbGVtRUEgPSBlbGVtKEVBKVxuICAgIGNvbnN0IGxlZnQ6IFNldDxFPiA9IG5ldyBTZXQoKVxuICAgIGNvbnN0IHJpZ2h0OiBTZXQ8QT4gPSBuZXcgU2V0KClcbiAgICBmYS5mb3JFYWNoKChlKSA9PiB7XG4gICAgICBzd2l0Y2ggKGUuX3RhZykge1xuICAgICAgICBjYXNlICdMZWZ0JzpcbiAgICAgICAgICBpZiAoIWVsZW1FRShlLmxlZnQsIGxlZnQpKSB7XG4gICAgICAgICAgICBsZWZ0LmFkZChlLmxlZnQpXG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ1JpZ2h0JzpcbiAgICAgICAgICBpZiAoIWVsZW1FQShlLnJpZ2h0LCByaWdodCkpIHtcbiAgICAgICAgICAgIHJpZ2h0LmFkZChlLnJpZ2h0KVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHNlcGFyYXRlZChsZWZ0LCByaWdodClcbiAgfVxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuNS4wXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJNYXA8Qj4oRTogRXE8Qj4pOiA8QT4oZjogKGE6IEEpID0+IE9wdGlvbjxCPikgPT4gKGZhOiBSZWFkb25seVNldDxBPikgPT4gUmVhZG9ubHlTZXQ8Qj4ge1xuICBjb25zdCBlbGVtRSA9IGVsZW0oRSlcbiAgcmV0dXJuIChmKSA9PiAoZmEpID0+IHtcbiAgICBjb25zdCByOiBTZXQ8Qj4gPSBuZXcgU2V0KClcbiAgICBmYS5mb3JFYWNoKChhKSA9PiB7XG4gICAgICBjb25zdCBvYiA9IGYoYSlcbiAgICAgIGlmIChvYi5fdGFnID09PSAnU29tZScgJiYgIWVsZW1FKG9iLnZhbHVlLCByKSkge1xuICAgICAgICByLmFkZChvYi52YWx1ZSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiByXG4gIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gdXRpbHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGVtcHR5OiBSZWFkb25seVNldDxuZXZlcj4gPSBuZXcgU2V0KClcblxuLyoqXG4gKiBUZXN0IHdoZXRoZXIgYSBgUmVhZG9ubHlTZXRgIGlzIGVtcHR5LlxuICpcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGlzRW1wdHkgPSA8QT4oc2V0OiBSZWFkb25seVNldDxBPik6IGJvb2xlYW4gPT4gc2V0LnNpemUgPT09IDBcblxuLyoqXG4gKiBDYWxjdWxhdGUgdGhlIG51bWJlciBvZiBlbGVtZW50cyBpbiBhIGBSZWFkb25seVNldGAuXG4gKlxuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3Qgc2l6ZSA9IDxBPihzZXQ6IFJlYWRvbmx5U2V0PEE+KTogbnVtYmVyID0+IHNldC5zaXplXG5cbi8qKlxuICogQHNpbmNlIDIuNS4wXG4gKi9cbmV4cG9ydCBjb25zdCBzb21lID0gPEE+KHByZWRpY2F0ZTogUHJlZGljYXRlPEE+KSA9PiAoc2V0OiBSZWFkb25seVNldDxBPik6IGJvb2xlYW4gPT4ge1xuICBjb25zdCB2YWx1ZXMgPSBzZXQudmFsdWVzKClcbiAgbGV0IGU6IE5leHQ8QT5cbiAgbGV0IGZvdW5kID0gZmFsc2VcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBzdHJpY3QtYm9vbGVhbi1leHByZXNzaW9uc1xuICB3aGlsZSAoIWZvdW5kICYmICEoZSA9IHZhbHVlcy5uZXh0KCkpLmRvbmUpIHtcbiAgICBmb3VuZCA9IHByZWRpY2F0ZShlLnZhbHVlKVxuICB9XG4gIHJldHVybiBmb3VuZFxufVxuXG4vKipcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgY29uc3QgZXZlcnkgPSA8QT4ocHJlZGljYXRlOiBQcmVkaWNhdGU8QT4pOiAoKHNldDogUmVhZG9ubHlTZXQ8QT4pID0+IGJvb2xlYW4pID0+IG5vdChzb21lKG5vdChwcmVkaWNhdGUpKSlcblxuLy8gVE9ETzogcmVtb3ZlIG5vbi1jdXJyaWVkIG92ZXJsb2FkaW5nIGluIHYzXG4vKipcbiAqIGB0cnVlYCBpZiBhbmQgb25seSBpZiBldmVyeSBlbGVtZW50IGluIHRoZSBmaXJzdCBzZXQgaXMgYW4gZWxlbWVudCBvZiB0aGUgc2Vjb25kIHNldFxuICpcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNTdWJzZXQ8QT4oXG4gIEU6IEVxPEE+XG4pOiB7XG4gICh0aGF0OiBSZWFkb25seVNldDxBPik6IChtZTogUmVhZG9ubHlTZXQ8QT4pID0+IGJvb2xlYW5cbiAgKG1lOiBSZWFkb25seVNldDxBPiwgdGhhdDogUmVhZG9ubHlTZXQ8QT4pOiBib29sZWFuXG59XG5leHBvcnQgZnVuY3Rpb24gaXNTdWJzZXQ8QT4oXG4gIEU6IEVxPEE+XG4pOiAobWU6IFJlYWRvbmx5U2V0PEE+LCB0aGF0PzogUmVhZG9ubHlTZXQ8QT4pID0+IGJvb2xlYW4gfCAoKG1lOiBSZWFkb25seVNldDxBPikgPT4gYm9vbGVhbikge1xuICBjb25zdCBlbGVtRSA9IGVsZW0oRSlcbiAgcmV0dXJuIChtZSwgdGhhdD8pID0+IHtcbiAgICBpZiAodGhhdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBpc1N1YnNldEUgPSBpc1N1YnNldChFKVxuICAgICAgcmV0dXJuICh0aGF0KSA9PiBpc1N1YnNldEUodGhhdCwgbWUpXG4gICAgfVxuICAgIHJldHVybiBldmVyeSgoYTogQSkgPT4gZWxlbUUoYSwgdGhhdCkpKG1lKVxuICB9XG59XG5cbi8vIFRPRE86IHJlbW92ZSBub24tY3VycmllZCBvdmVybG9hZGluZyBpbiB2M1xuLyoqXG4gKiBUZXN0IGlmIGEgdmFsdWUgaXMgYSBtZW1iZXIgb2YgYSBzZXRcbiAqXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVsZW08QT4oXG4gIEU6IEVxPEE+XG4pOiB7XG4gIChhOiBBKTogKHNldDogUmVhZG9ubHlTZXQ8QT4pID0+IGJvb2xlYW5cbiAgKGE6IEEsIHNldDogUmVhZG9ubHlTZXQ8QT4pOiBib29sZWFuXG59XG5leHBvcnQgZnVuY3Rpb24gZWxlbTxBPihFOiBFcTxBPik6IChhOiBBLCBzZXQ/OiBSZWFkb25seVNldDxBPikgPT4gYm9vbGVhbiB8ICgoc2V0OiBSZWFkb25seVNldDxBPikgPT4gYm9vbGVhbikge1xuICByZXR1cm4gKGEsIHNldD8pID0+IHtcbiAgICBpZiAoc2V0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGVsZW1FID0gZWxlbShFKVxuICAgICAgcmV0dXJuIChzZXQpID0+IGVsZW1FKGEsIHNldClcbiAgICB9XG4gICAgY29uc3QgdmFsdWVzID0gc2V0LnZhbHVlcygpXG4gICAgbGV0IGU6IE5leHQ8QT5cbiAgICBsZXQgZm91bmQgPSBmYWxzZVxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogc3RyaWN0LWJvb2xlYW4tZXhwcmVzc2lvbnNcbiAgICB3aGlsZSAoIWZvdW5kICYmICEoZSA9IHZhbHVlcy5uZXh0KCkpLmRvbmUpIHtcbiAgICAgIGZvdW5kID0gRS5lcXVhbHMoYSwgZS52YWx1ZSlcbiAgICB9XG4gICAgcmV0dXJuIGZvdW5kXG4gIH1cbn1cblxuLyoqXG4gKiBHZXQgYSBzb3J0ZWQgYFJlYWRvbmx5QXJyYXlgIG9mIHRoZSB2YWx1ZXMgY29udGFpbmVkIGluIGEgYFJlYWRvbmx5U2V0YC5cbiAqXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGNvbnN0IHRvUmVhZG9ubHlBcnJheSA9IDxBPihPOiBPcmQ8QT4pID0+IChzZXQ6IFJlYWRvbmx5U2V0PEE+KTogUmVhZG9ubHlBcnJheTxBPiA9PiB7XG4gIGNvbnN0IG91dDogQXJyYXk8QT4gPSBbXVxuICBzZXQuZm9yRWFjaCgoZSkgPT4gb3V0LnB1c2goZSkpXG4gIHJldHVybiBvdXQuc29ydChPLmNvbXBhcmUpXG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGluc3RhbmNlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IFVSSSA9ICdSZWFkb25seVNldCdcblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCB0eXBlIFVSSSA9IHR5cGVvZiBVUklcblxuZGVjbGFyZSBtb2R1bGUgJy4vSEtUJyB7XG4gIGludGVyZmFjZSBVUkl0b0tpbmQ8QT4ge1xuICAgIHJlYWRvbmx5IFtVUkldOiBSZWFkb25seVNldDxBPlxuICB9XG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuNS4wXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRTaG93PEE+KFM6IFNob3c8QT4pOiBTaG93PFJlYWRvbmx5U2V0PEE+PiB7XG4gIHJldHVybiB7XG4gICAgc2hvdzogKHMpID0+IHtcbiAgICAgIGNvbnN0IGVudHJpZXM6IEFycmF5PHN0cmluZz4gPSBbXVxuICAgICAgcy5mb3JFYWNoKChhKSA9PiB7XG4gICAgICAgIGVudHJpZXMucHVzaChTLnNob3coYSkpXG4gICAgICB9KVxuICAgICAgcmV0dXJuIGBuZXcgU2V0KFske2VudHJpZXMuc29ydCgpLmpvaW4oJywgJyl9XSlgXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuNS4wXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRFcTxBPihFOiBFcTxBPik6IEVxPFJlYWRvbmx5U2V0PEE+PiB7XG4gIGNvbnN0IHN1YnNldEUgPSBpc1N1YnNldChFKVxuICByZXR1cm4gZnJvbUVxdWFscygoeCwgeSkgPT4gc3Vic2V0RSh4LCB5KSAmJiBzdWJzZXRFKHksIHgpKVxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGdldFVuaW9uU2VtaWdyb3VwID0gPEE+KEU6IEVxPEE+KTogU2VtaWdyb3VwPFJlYWRvbmx5U2V0PEE+PiA9PiAoe1xuICBjb25jYXQ6IHVuaW9uKEUpXG59KVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgY29uc3QgZ2V0VW5pb25Nb25vaWQgPSA8QT4oRTogRXE8QT4pOiBNb25vaWQ8UmVhZG9ubHlTZXQ8QT4+ID0+ICh7XG4gIGNvbmNhdDogZ2V0VW5pb25TZW1pZ3JvdXAoRSkuY29uY2F0LFxuICBlbXB0eVxufSlcblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGdldEludGVyc2VjdGlvblNlbWlncm91cCA9IDxBPihFOiBFcTxBPik6IFNlbWlncm91cDxSZWFkb25seVNldDxBPj4gPT4gKHtcbiAgY29uY2F0OiBpbnRlcnNlY3Rpb24oRSlcbn0pXG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgZ2V0RGlmZmVyZW5jZU1hZ21hID0gPEE+KEU6IEVxPEE+KTogTWFnbWE8UmVhZG9ubHlTZXQ8QT4+ID0+ICh7XG4gIGNvbmNhdDogZGlmZmVyZW5jZShFKVxufSlcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gZGVwcmVjYXRlZFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIFVzZSBbYGZyb21SZWFkb25seUFycmF5YF0oI2Zyb21yZWFkb25seWFycmF5KSBpbnN0ZWFkLlxuICpcbiAqIEBjYXRlZ29yeSBjb25zdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjUuMFxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IGZyb21BcnJheTogPEE+KEU6IEVxPEE+KSA9PiAoYXM6IFJlYWRvbmx5QXJyYXk8QT4pID0+IFJlYWRvbmx5U2V0PEE+ID0gZnJvbVJlYWRvbmx5QXJyYXlcbiJdfQ==