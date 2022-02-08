"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trimRight = exports.trimLeft = exports.trim = exports.toUpperCase = exports.toLowerCase = exports.startsWith = exports.split = exports.slice = exports.size = exports.replace = exports.isString = exports.isEmpty = exports.includes = exports.endsWith = exports.empty = exports.Show = exports.Semigroup = exports.Ord = exports.Monoid = exports.Eq = void 0;

var _ReadonlyNonEmptyArray = require("./ReadonlyNonEmptyArray");

/**
 * @since 2.10.0
 */
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------

/**
 * @example
 * import * as S from 'fp-ts/string'
 *
 * assert.deepStrictEqual(S.Eq.equals('a', 'a'), true)
 * assert.deepStrictEqual(S.Eq.equals('a', 'b'), false)
 *
 * @category instances
 * @since 2.10.0
 */
var Eq = {
  equals: function equals(first, second) {
    return first === second;
  }
};
/**
 * `string` semigroup under concatenation.
 *
 * @example
 * import * as S from 'fp-ts/string'
 *
 * assert.deepStrictEqual(S.Semigroup.concat('a', 'b'), 'ab')
 *
 * @category instances
 * @since 2.10.0
 */

exports.Eq = Eq;
var Semigroup = {
  concat: function concat(first, second) {
    return first + second;
  }
};
/**
 * `string` monoid under concatenation.
 *
 * The `empty` value is `''`.
 *
 * @example
 * import * as S from 'fp-ts/string'
 *
 * assert.deepStrictEqual(S.Monoid.concat('a', 'b'), 'ab')
 * assert.deepStrictEqual(S.Monoid.concat('a', S.Monoid.empty), 'a')
 *
 * @category instances
 * @since 2.10.0
 */

exports.Semigroup = Semigroup;
var Monoid = {
  concat: Semigroup.concat,
  empty: ''
};
/**
 * @example
 * import * as S from 'fp-ts/string'
 *
 * assert.deepStrictEqual(S.Ord.compare('a', 'a'), 0)
 * assert.deepStrictEqual(S.Ord.compare('a', 'b'), -1)
 * assert.deepStrictEqual(S.Ord.compare('b', 'a'), 1)
 *
 * @category instances
 * @since 2.10.0
 */

exports.Monoid = Monoid;
var Ord = {
  equals: Eq.equals,
  compare: function compare(first, second) {
    return first < second ? -1 : first > second ? 1 : 0;
  }
};
/**
 * @example
 * import * as S from 'fp-ts/string'
 *
 * assert.deepStrictEqual(S.Show.show('a'), '"a"')
 *
 * @category instances
 * @since 2.10.0
 */

exports.Ord = Ord;
var Show = {
  show: function show(s) {
    return JSON.stringify(s);
  }
}; // -------------------------------------------------------------------------------------
// refinements
// -------------------------------------------------------------------------------------

/**
 * @example
 * import * as S from 'fp-ts/string'
 *
 * assert.deepStrictEqual(S.isString('a'), true)
 * assert.deepStrictEqual(S.isString(1), false)
 *
 * @category refinements
 * @since 2.11.0
 */

exports.Show = Show;

var isString = function isString(u) {
  return typeof u === 'string';
}; // -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------

/**
 * @example
 * import * as S from 'fp-ts/string'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.deepStrictEqual(pipe('a', S.toUpperCase), 'A')
 *
 * @category combinators
 * @since 2.11.0
 */


exports.isString = isString;

var toUpperCase = function toUpperCase(s) {
  return s.toUpperCase();
};
/**
 * @example
 * import * as S from 'fp-ts/string'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.deepStrictEqual(pipe('A', S.toLowerCase), 'a')
 *
 * @category combinators
 * @since 2.11.0
 */


exports.toUpperCase = toUpperCase;

var toLowerCase = function toLowerCase(s) {
  return s.toLowerCase();
};
/**
 * @example
 * import * as S from 'fp-ts/string'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.deepStrictEqual(pipe('abc', S.replace('b', 'd')), 'adc')
 *
 * @category combinators
 * @since 2.11.0
 */


exports.toLowerCase = toLowerCase;

var replace = function replace(searchValue, replaceValue) {
  return function (s) {
    return s.replace(searchValue, replaceValue);
  };
};
/**
 * @example
 * import * as S from 'fp-ts/string'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.deepStrictEqual(pipe(' a ', S.trim), 'a')
 *
 * @category combinators
 * @since 2.11.0
 */


exports.replace = replace;

var trim = function trim(s) {
  return s.trim();
};
/**
 * @example
 * import * as S from 'fp-ts/string'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.deepStrictEqual(pipe(' a ', S.trimLeft), 'a ')
 *
 * @category combinators
 * @since 2.11.0
 */


exports.trim = trim;

var trimLeft = function trimLeft(s) {
  return s.trimLeft();
};
/**
 * @example
 * import * as S from 'fp-ts/string'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.deepStrictEqual(pipe(' a ', S.trimRight), ' a')
 *
 * @category combinators
 * @since 2.11.0
 */


exports.trimLeft = trimLeft;

var trimRight = function trimRight(s) {
  return s.trimRight();
};
/**
 * @example
 * import * as S from 'fp-ts/string'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.deepStrictEqual(pipe('abcd', S.slice(1, 3)), 'bc')
 *
 * @category combinators
 * @since 2.11.0
 */


exports.trimRight = trimRight;

var slice = function slice(start, end) {
  return function (s) {
    return s.slice(start, end);
  };
}; // -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------

/**
 * An empty `string`.
 *
 * @since 2.10.0
 */


exports.slice = slice;
var empty = '';
/**
 * Test whether a `string` is empty.
 *
 * @example
 * import * as S from 'fp-ts/string'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.deepStrictEqual(pipe('', S.isEmpty), true)
 * assert.deepStrictEqual(pipe('a', S.isEmpty), false)
 *
 * @since 2.10.0
 */

exports.empty = empty;

var isEmpty = function isEmpty(s) {
  return s.length === 0;
};
/**
 * Calculate the number of characters in a `string`.
 *
 * @example
 * import * as S from 'fp-ts/string'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.deepStrictEqual(pipe('abc', S.size), 3)
 *
 * @since 2.10.0
 */


exports.isEmpty = isEmpty;

var size = function size(s) {
  return s.length;
};
/**
 * @example
 * import * as S from 'fp-ts/string'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.deepStrictEqual(pipe('abc', S.split('')), ['a', 'b', 'c'])
 * assert.deepStrictEqual(pipe('', S.split('')), [''])
 *
 * @since 2.11.0
 */


exports.size = size;

var split = function split(separator) {
  return function (s) {
    var out = s.split(separator);
    return (0, _ReadonlyNonEmptyArray.isNonEmpty)(out) ? out : [s];
  };
};
/**
 * @example
 * import * as S from 'fp-ts/string'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.deepStrictEqual(pipe('abc', S.includes('b')), true)
 * assert.deepStrictEqual(pipe('abc', S.includes('d')), false)
 *
 * @since 2.11.0
 */


exports.split = split;

var includes = function includes(searchString, position) {
  return function (s) {
    return s.includes(searchString, position);
  };
};
/**
 * @example
 * import * as S from 'fp-ts/string'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.deepStrictEqual(pipe('abc', S.startsWith('a')), true)
 * assert.deepStrictEqual(pipe('bc', S.startsWith('a')), false)
 *
 * @since 2.11.0
 */


exports.includes = includes;

var startsWith = function startsWith(searchString, position) {
  return function (s) {
    return s.startsWith(searchString, position);
  };
};
/**
 * @example
 * import * as S from 'fp-ts/string'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.deepStrictEqual(pipe('abc', S.endsWith('c')), true)
 * assert.deepStrictEqual(pipe('ab', S.endsWith('c')), false)
 *
 * @since 2.11.0
 */


exports.startsWith = startsWith;

var endsWith = function endsWith(searchString, position) {
  return function (s) {
    return s.endsWith(searchString, position);
  };
};

exports.endsWith = endsWith;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mcC10cy9zdHJpbmcudHMiXSwibmFtZXMiOlsiRXEiLCJlcXVhbHMiLCJmaXJzdCIsInNlY29uZCIsIlNlbWlncm91cCIsImNvbmNhdCIsIk1vbm9pZCIsImVtcHR5IiwiT3JkIiwiY29tcGFyZSIsIlNob3ciLCJzaG93IiwicyIsIkpTT04iLCJzdHJpbmdpZnkiLCJpc1N0cmluZyIsInUiLCJ0b1VwcGVyQ2FzZSIsInRvTG93ZXJDYXNlIiwicmVwbGFjZSIsInNlYXJjaFZhbHVlIiwicmVwbGFjZVZhbHVlIiwidHJpbSIsInRyaW1MZWZ0IiwidHJpbVJpZ2h0Iiwic2xpY2UiLCJzdGFydCIsImVuZCIsImlzRW1wdHkiLCJsZW5ndGgiLCJzaXplIiwic3BsaXQiLCJzZXBhcmF0b3IiLCJvdXQiLCJpbmNsdWRlcyIsInNlYXJjaFN0cmluZyIsInBvc2l0aW9uIiwic3RhcnRzV2l0aCIsImVuZHNXaXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBU0E7O0FBVEE7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sSUFBTUEsRUFBZ0IsR0FBRztBQUM5QkMsRUFBQUEsTUFBTSxFQUFFLGdCQUFDQyxLQUFELEVBQVFDLE1BQVI7QUFBQSxXQUFtQkQsS0FBSyxLQUFLQyxNQUE3QjtBQUFBO0FBRHNCLENBQXpCO0FBSVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTUMsU0FBOEIsR0FBRztBQUM1Q0MsRUFBQUEsTUFBTSxFQUFFLGdCQUFDSCxLQUFELEVBQVFDLE1BQVI7QUFBQSxXQUFtQkQsS0FBSyxHQUFHQyxNQUEzQjtBQUFBO0FBRG9DLENBQXZDO0FBSVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08s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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ08sSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0YsWUFBRCxFQUF1QkMsUUFBdkI7QUFBQSxTQUE2QyxVQUFDeEIsQ0FBRDtBQUFBLFdBQ3JFQSxDQUFDLENBQUN5QixVQUFGLENBQWFGLFlBQWIsRUFBMkJDLFFBQTNCLENBRHFFO0FBQUEsR0FBN0M7QUFBQSxDQUFuQjtBQUdQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNPLElBQU1FLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNILFlBQUQsRUFBdUJDLFFBQXZCO0FBQUEsU0FBNkMsVUFBQ3hCLENBQUQ7QUFBQSxXQUNuRUEsQ0FBQyxDQUFDMEIsUUFBRixDQUFXSCxZQUFYLEVBQXlCQyxRQUF6QixDQURtRTtBQUFBLEdBQTdDO0FBQUEsQ0FBakIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuaW1wb3J0ICogYXMgRSBmcm9tICcuL0VxJ1xuaW1wb3J0ICogYXMgTSBmcm9tICcuL01vbm9pZCdcbmltcG9ydCAqIGFzIFMgZnJvbSAnLi9TZW1pZ3JvdXAnXG5pbXBvcnQgKiBhcyBPIGZyb20gJy4vT3JkJ1xuaW1wb3J0ICogYXMgU2ggZnJvbSAnLi9TaG93J1xuaW1wb3J0IHsgUmVmaW5lbWVudCB9IGZyb20gJy4vUmVmaW5lbWVudCdcbmltcG9ydCB7IFJlYWRvbmx5Tm9uRW1wdHlBcnJheSwgaXNOb25FbXB0eSB9IGZyb20gJy4vUmVhZG9ubHlOb25FbXB0eUFycmF5J1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBpbnN0YW5jZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0ICogYXMgUyBmcm9tICdmcC10cy9zdHJpbmcnXG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChTLkVxLmVxdWFscygnYScsICdhJyksIHRydWUpXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKFMuRXEuZXF1YWxzKCdhJywgJ2InKSwgZmFsc2UpXG4gKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgRXE6IEUuRXE8c3RyaW5nPiA9IHtcbiAgZXF1YWxzOiAoZmlyc3QsIHNlY29uZCkgPT4gZmlyc3QgPT09IHNlY29uZFxufVxuXG4vKipcbiAqIGBzdHJpbmdgIHNlbWlncm91cCB1bmRlciBjb25jYXRlbmF0aW9uLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgKiBhcyBTIGZyb20gJ2ZwLXRzL3N0cmluZydcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKFMuU2VtaWdyb3VwLmNvbmNhdCgnYScsICdiJyksICdhYicpXG4gKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgU2VtaWdyb3VwOiBTLlNlbWlncm91cDxzdHJpbmc+ID0ge1xuICBjb25jYXQ6IChmaXJzdCwgc2Vjb25kKSA9PiBmaXJzdCArIHNlY29uZFxufVxuXG4vKipcbiAqIGBzdHJpbmdgIG1vbm9pZCB1bmRlciBjb25jYXRlbmF0aW9uLlxuICpcbiAqIFRoZSBgZW1wdHlgIHZhbHVlIGlzIGAnJ2AuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCAqIGFzIFMgZnJvbSAnZnAtdHMvc3RyaW5nJ1xuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoUy5Nb25vaWQuY29uY2F0KCdhJywgJ2InKSwgJ2FiJylcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoUy5Nb25vaWQuY29uY2F0KCdhJywgUy5Nb25vaWQuZW1wdHkpLCAnYScpXG4gKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgTW9ub2lkOiBNLk1vbm9pZDxzdHJpbmc+ID0ge1xuICBjb25jYXQ6IFNlbWlncm91cC5jb25jYXQsXG4gIGVtcHR5OiAnJ1xufVxuXG4vKipcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgKiBhcyBTIGZyb20gJ2ZwLXRzL3N0cmluZydcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKFMuT3JkLmNvbXBhcmUoJ2EnLCAnYScpLCAwKVxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChTLk9yZC5jb21wYXJlKCdhJywgJ2InKSwgLTEpXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKFMuT3JkLmNvbXBhcmUoJ2InLCAnYScpLCAxKVxuICpcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IE9yZDogTy5PcmQ8c3RyaW5nPiA9IHtcbiAgZXF1YWxzOiBFcS5lcXVhbHMsXG4gIGNvbXBhcmU6IChmaXJzdCwgc2Vjb25kKSA9PiAoZmlyc3QgPCBzZWNvbmQgPyAtMSA6IGZpcnN0ID4gc2Vjb25kID8gMSA6IDApXG59XG5cbi8qKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCAqIGFzIFMgZnJvbSAnZnAtdHMvc3RyaW5nJ1xuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoUy5TaG93LnNob3coJ2EnKSwgJ1wiYVwiJylcbiAqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBTaG93OiBTaC5TaG93PHN0cmluZz4gPSB7XG4gIHNob3c6IChzKSA9PiBKU09OLnN0cmluZ2lmeShzKVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyByZWZpbmVtZW50c1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgKiBhcyBTIGZyb20gJ2ZwLXRzL3N0cmluZydcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKFMuaXNTdHJpbmcoJ2EnKSwgdHJ1ZSlcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoUy5pc1N0cmluZygxKSwgZmFsc2UpXG4gKlxuICogQGNhdGVnb3J5IHJlZmluZW1lbnRzXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBpc1N0cmluZzogUmVmaW5lbWVudDx1bmtub3duLCBzdHJpbmc+ID0gKHU6IHVua25vd24pOiB1IGlzIHN0cmluZyA9PiB0eXBlb2YgdSA9PT0gJ3N0cmluZydcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gY29tYmluYXRvcnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0ICogYXMgUyBmcm9tICdmcC10cy9zdHJpbmcnXG4gKiBpbXBvcnQgeyBwaXBlIH0gZnJvbSAnZnAtdHMvZnVuY3Rpb24nXG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChwaXBlKCdhJywgUy50b1VwcGVyQ2FzZSksICdBJylcbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHRvVXBwZXJDYXNlID0gKHM6IHN0cmluZyk6IHN0cmluZyA9PiBzLnRvVXBwZXJDYXNlKClcblxuLyoqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0ICogYXMgUyBmcm9tICdmcC10cy9zdHJpbmcnXG4gKiBpbXBvcnQgeyBwaXBlIH0gZnJvbSAnZnAtdHMvZnVuY3Rpb24nXG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChwaXBlKCdBJywgUy50b0xvd2VyQ2FzZSksICdhJylcbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHRvTG93ZXJDYXNlID0gKHM6IHN0cmluZyk6IHN0cmluZyA9PiBzLnRvTG93ZXJDYXNlKClcblxuLyoqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0ICogYXMgUyBmcm9tICdmcC10cy9zdHJpbmcnXG4gKiBpbXBvcnQgeyBwaXBlIH0gZnJvbSAnZnAtdHMvZnVuY3Rpb24nXG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChwaXBlKCdhYmMnLCBTLnJlcGxhY2UoJ2InLCAnZCcpKSwgJ2FkYycpXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCByZXBsYWNlID0gKHNlYXJjaFZhbHVlOiBzdHJpbmcgfCBSZWdFeHAsIHJlcGxhY2VWYWx1ZTogc3RyaW5nKSA9PiAoczogc3RyaW5nKTogc3RyaW5nID0+XG4gIHMucmVwbGFjZShzZWFyY2hWYWx1ZSwgcmVwbGFjZVZhbHVlKVxuXG4vKipcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgKiBhcyBTIGZyb20gJ2ZwLXRzL3N0cmluZydcbiAqIGltcG9ydCB7IHBpcGUgfSBmcm9tICdmcC10cy9mdW5jdGlvbidcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKHBpcGUoJyBhICcsIFMudHJpbSksICdhJylcbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHRyaW0gPSAoczogc3RyaW5nKTogc3RyaW5nID0+IHMudHJpbSgpXG5cbi8qKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCAqIGFzIFMgZnJvbSAnZnAtdHMvc3RyaW5nJ1xuICogaW1wb3J0IHsgcGlwZSB9IGZyb20gJ2ZwLXRzL2Z1bmN0aW9uJ1xuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwocGlwZSgnIGEgJywgUy50cmltTGVmdCksICdhICcpXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCB0cmltTGVmdCA9IChzOiBzdHJpbmcpOiBzdHJpbmcgPT4gcy50cmltTGVmdCgpXG5cbi8qKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCAqIGFzIFMgZnJvbSAnZnAtdHMvc3RyaW5nJ1xuICogaW1wb3J0IHsgcGlwZSB9IGZyb20gJ2ZwLXRzL2Z1bmN0aW9uJ1xuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwocGlwZSgnIGEgJywgUy50cmltUmlnaHQpLCAnIGEnKVxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgdHJpbVJpZ2h0ID0gKHM6IHN0cmluZyk6IHN0cmluZyA9PiBzLnRyaW1SaWdodCgpXG5cbi8qKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCAqIGFzIFMgZnJvbSAnZnAtdHMvc3RyaW5nJ1xuICogaW1wb3J0IHsgcGlwZSB9IGZyb20gJ2ZwLXRzL2Z1bmN0aW9uJ1xuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwocGlwZSgnYWJjZCcsIFMuc2xpY2UoMSwgMykpLCAnYmMnKVxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3Qgc2xpY2UgPSAoc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIpID0+IChzOiBzdHJpbmcpOiBzdHJpbmcgPT4gcy5zbGljZShzdGFydCwgZW5kKVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyB1dGlsc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEFuIGVtcHR5IGBzdHJpbmdgLlxuICpcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGVtcHR5OiBzdHJpbmcgPSAnJ1xuXG4vKipcbiAqIFRlc3Qgd2hldGhlciBhIGBzdHJpbmdgIGlzIGVtcHR5LlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgKiBhcyBTIGZyb20gJ2ZwLXRzL3N0cmluZydcbiAqIGltcG9ydCB7IHBpcGUgfSBmcm9tICdmcC10cy9mdW5jdGlvbidcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKHBpcGUoJycsIFMuaXNFbXB0eSksIHRydWUpXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKHBpcGUoJ2EnLCBTLmlzRW1wdHkpLCBmYWxzZSlcbiAqXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBpc0VtcHR5ID0gKHM6IHN0cmluZyk6IGJvb2xlYW4gPT4gcy5sZW5ndGggPT09IDBcblxuLyoqXG4gKiBDYWxjdWxhdGUgdGhlIG51bWJlciBvZiBjaGFyYWN0ZXJzIGluIGEgYHN0cmluZ2AuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCAqIGFzIFMgZnJvbSAnZnAtdHMvc3RyaW5nJ1xuICogaW1wb3J0IHsgcGlwZSB9IGZyb20gJ2ZwLXRzL2Z1bmN0aW9uJ1xuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwocGlwZSgnYWJjJywgUy5zaXplKSwgMylcbiAqXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBzaXplID0gKHM6IHN0cmluZyk6IG51bWJlciA9PiBzLmxlbmd0aFxuXG4vKipcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgKiBhcyBTIGZyb20gJ2ZwLXRzL3N0cmluZydcbiAqIGltcG9ydCB7IHBpcGUgfSBmcm9tICdmcC10cy9mdW5jdGlvbidcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKHBpcGUoJ2FiYycsIFMuc3BsaXQoJycpKSwgWydhJywgJ2InLCAnYyddKVxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChwaXBlKCcnLCBTLnNwbGl0KCcnKSksIFsnJ10pXG4gKlxuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3Qgc3BsaXQgPSAoc2VwYXJhdG9yOiBzdHJpbmcgfCBSZWdFeHApID0+IChzOiBzdHJpbmcpOiBSZWFkb25seU5vbkVtcHR5QXJyYXk8c3RyaW5nPiA9PiB7XG4gIGNvbnN0IG91dCA9IHMuc3BsaXQoc2VwYXJhdG9yKVxuICByZXR1cm4gaXNOb25FbXB0eShvdXQpID8gb3V0IDogW3NdXG59XG5cbi8qKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCAqIGFzIFMgZnJvbSAnZnAtdHMvc3RyaW5nJ1xuICogaW1wb3J0IHsgcGlwZSB9IGZyb20gJ2ZwLXRzL2Z1bmN0aW9uJ1xuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwocGlwZSgnYWJjJywgUy5pbmNsdWRlcygnYicpKSwgdHJ1ZSlcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwocGlwZSgnYWJjJywgUy5pbmNsdWRlcygnZCcpKSwgZmFsc2UpXG4gKlxuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgaW5jbHVkZXMgPSAoc2VhcmNoU3RyaW5nOiBzdHJpbmcsIHBvc2l0aW9uPzogbnVtYmVyKSA9PiAoczogc3RyaW5nKTogYm9vbGVhbiA9PlxuICBzLmluY2x1ZGVzKHNlYXJjaFN0cmluZywgcG9zaXRpb24pXG5cbi8qKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCAqIGFzIFMgZnJvbSAnZnAtdHMvc3RyaW5nJ1xuICogaW1wb3J0IHsgcGlwZSB9IGZyb20gJ2ZwLXRzL2Z1bmN0aW9uJ1xuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwocGlwZSgnYWJjJywgUy5zdGFydHNXaXRoKCdhJykpLCB0cnVlKVxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChwaXBlKCdiYycsIFMuc3RhcnRzV2l0aCgnYScpKSwgZmFsc2UpXG4gKlxuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3Qgc3RhcnRzV2l0aCA9IChzZWFyY2hTdHJpbmc6IHN0cmluZywgcG9zaXRpb24/OiBudW1iZXIpID0+IChzOiBzdHJpbmcpOiBib29sZWFuID0+XG4gIHMuc3RhcnRzV2l0aChzZWFyY2hTdHJpbmcsIHBvc2l0aW9uKVxuXG4vKipcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgKiBhcyBTIGZyb20gJ2ZwLXRzL3N0cmluZydcbiAqIGltcG9ydCB7IHBpcGUgfSBmcm9tICdmcC10cy9mdW5jdGlvbidcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKHBpcGUoJ2FiYycsIFMuZW5kc1dpdGgoJ2MnKSksIHRydWUpXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKHBpcGUoJ2FiJywgUy5lbmRzV2l0aCgnYycpKSwgZmFsc2UpXG4gKlxuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgZW5kc1dpdGggPSAoc2VhcmNoU3RyaW5nOiBzdHJpbmcsIHBvc2l0aW9uPzogbnVtYmVyKSA9PiAoczogc3RyaW5nKTogYm9vbGVhbiA9PlxuICBzLmVuZHNXaXRoKHNlYXJjaFN0cmluZywgcG9zaXRpb24pXG4iXX0=