"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFunctionSemiring = void 0;

var _function = require("./function");

/**
 * The `Semiring` class is for types that support an addition and multiplication operation.
 *
 * Instances must satisfy the following laws:
 *
 * - Commutative monoid under addition:
 *   - Associativity: `(a + b) + c <-> a + (b + c)`
 *   - Identity: `zero + a = a + zero <-> a`
 *   - Commutative: `a + b <-> b + a`
 * - Monoid under multiplication:
 *   - Associativity: `(a * b) * c <-> a * (b * c)`
 *   - Identity: `one * a <-> a * one <-> a`
 * - Multiplication distributes over addition:
 *   - Left distributivity: `a * (b + c) <-> (a * b) + (a * c)`
 *   - Right distributivity: `(a + b) * c <-> (a * c) + (b * c)`
 * - Annihilation: `zero * a <-> a * zero <-> zero`
 *
 * **Note:** The `number` type is not fully law abiding members of this class hierarchy due to the potential
 * for arithmetic overflows, and the presence of `NaN` and `Infinity` values. The behaviour is
 * unspecified in these cases.
 *
 * @since 2.0.0
 */
// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------

/**
 * Use [`getSemiring`](./function.ts.html#getsemiring) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
var getFunctionSemiring = _function.getSemiring;
exports.getFunctionSemiring = getFunctionSemiring;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mcC10cy9TZW1pcmluZy50cyJdLCJuYW1lcyI6WyJnZXRGdW5jdGlvblNlbWlyaW5nIiwiZ2V0U2VtaXJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUF1QkE7O0FBdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFrQkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sSUFBTUEsbUJBQW9FLEdBQUdDLHFCQUE3RSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhlIGBTZW1pcmluZ2AgY2xhc3MgaXMgZm9yIHR5cGVzIHRoYXQgc3VwcG9ydCBhbiBhZGRpdGlvbiBhbmQgbXVsdGlwbGljYXRpb24gb3BlcmF0aW9uLlxuICpcbiAqIEluc3RhbmNlcyBtdXN0IHNhdGlzZnkgdGhlIGZvbGxvd2luZyBsYXdzOlxuICpcbiAqIC0gQ29tbXV0YXRpdmUgbW9ub2lkIHVuZGVyIGFkZGl0aW9uOlxuICogICAtIEFzc29jaWF0aXZpdHk6IGAoYSArIGIpICsgYyA8LT4gYSArIChiICsgYylgXG4gKiAgIC0gSWRlbnRpdHk6IGB6ZXJvICsgYSA9IGEgKyB6ZXJvIDwtPiBhYFxuICogICAtIENvbW11dGF0aXZlOiBgYSArIGIgPC0+IGIgKyBhYFxuICogLSBNb25vaWQgdW5kZXIgbXVsdGlwbGljYXRpb246XG4gKiAgIC0gQXNzb2NpYXRpdml0eTogYChhICogYikgKiBjIDwtPiBhICogKGIgKiBjKWBcbiAqICAgLSBJZGVudGl0eTogYG9uZSAqIGEgPC0+IGEgKiBvbmUgPC0+IGFgXG4gKiAtIE11bHRpcGxpY2F0aW9uIGRpc3RyaWJ1dGVzIG92ZXIgYWRkaXRpb246XG4gKiAgIC0gTGVmdCBkaXN0cmlidXRpdml0eTogYGEgKiAoYiArIGMpIDwtPiAoYSAqIGIpICsgKGEgKiBjKWBcbiAqICAgLSBSaWdodCBkaXN0cmlidXRpdml0eTogYChhICsgYikgKiBjIDwtPiAoYSAqIGMpICsgKGIgKiBjKWBcbiAqIC0gQW5uaWhpbGF0aW9uOiBgemVybyAqIGEgPC0+IGEgKiB6ZXJvIDwtPiB6ZXJvYFxuICpcbiAqICoqTm90ZToqKiBUaGUgYG51bWJlcmAgdHlwZSBpcyBub3QgZnVsbHkgbGF3IGFiaWRpbmcgbWVtYmVycyBvZiB0aGlzIGNsYXNzIGhpZXJhcmNoeSBkdWUgdG8gdGhlIHBvdGVudGlhbFxuICogZm9yIGFyaXRobWV0aWMgb3ZlcmZsb3dzLCBhbmQgdGhlIHByZXNlbmNlIG9mIGBOYU5gIGFuZCBgSW5maW5pdHlgIHZhbHVlcy4gVGhlIGJlaGF2aW91ciBpc1xuICogdW5zcGVjaWZpZWQgaW4gdGhlc2UgY2FzZXMuXG4gKlxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmltcG9ydCB7IGdldFNlbWlyaW5nIH0gZnJvbSAnLi9mdW5jdGlvbidcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gbW9kZWxcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgdHlwZSBjbGFzc2VzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTZW1pcmluZzxBPiB7XG4gIHJlYWRvbmx5IGFkZDogKHg6IEEsIHk6IEEpID0+IEFcbiAgcmVhZG9ubHkgemVybzogQVxuICByZWFkb25seSBtdWw6ICh4OiBBLCB5OiBBKSA9PiBBXG4gIHJlYWRvbmx5IG9uZTogQVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBkZXByZWNhdGVkXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogVXNlIFtgZ2V0U2VtaXJpbmdgXSguL2Z1bmN0aW9uLnRzLmh0bWwjZ2V0c2VtaXJpbmcpIGluc3RlYWQuXG4gKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMC4wXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgY29uc3QgZ2V0RnVuY3Rpb25TZW1pcmluZzogPEEsIEI+KFM6IFNlbWlyaW5nPEI+KSA9PiBTZW1pcmluZzwoYTogQSkgPT4gQj4gPSBnZXRTZW1pcmluZ1xuIl19