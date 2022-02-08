"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.boundedNumber = void 0;

var _Ord = require("./Ord");

/**
 * The `Bounded` type class represents totally ordered types that have an upper and lower boundary.
 *
 * Instances should satisfy the following law in addition to the `Ord` laws:
 *
 * - Bounded: `bottom <= a <= top`
 *
 * @since 2.0.0
 */
// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
// tslint:disable: deprecation

/**
 * Use [`Bounded`](./number.ts.html#bounded) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
var boundedNumber = {
  equals: _Ord.ordNumber.equals,
  compare: _Ord.ordNumber.compare,
  top: Infinity,
  bottom: -Infinity
};
exports.boundedNumber = boundedNumber;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mcC10cy9Cb3VuZGVkLnRzIl0sIm5hbWVzIjpbImJvdW5kZWROdW1iZXIiLCJlcXVhbHMiLCJvcmROdW1iZXIiLCJjb21wYXJlIiwidG9wIiwiSW5maW5pdHkiLCJib3R0b20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFTQTs7QUFUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFnQkE7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxJQUFNQSxhQUE4QixHQUFHO0FBQzVDQyxFQUFBQSxNQUFNLEVBQUVDLGVBQVVELE1BRDBCO0FBRTVDRSxFQUFBQSxPQUFPLEVBQUVELGVBQVVDLE9BRnlCO0FBRzVDQyxFQUFBQSxHQUFHLEVBQUVDLFFBSHVDO0FBSTVDQyxFQUFBQSxNQUFNLEVBQUUsQ0FBQ0Q7QUFKbUMsQ0FBdkMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoZSBgQm91bmRlZGAgdHlwZSBjbGFzcyByZXByZXNlbnRzIHRvdGFsbHkgb3JkZXJlZCB0eXBlcyB0aGF0IGhhdmUgYW4gdXBwZXIgYW5kIGxvd2VyIGJvdW5kYXJ5LlxuICpcbiAqIEluc3RhbmNlcyBzaG91bGQgc2F0aXNmeSB0aGUgZm9sbG93aW5nIGxhdyBpbiBhZGRpdGlvbiB0byB0aGUgYE9yZGAgbGF3czpcbiAqXG4gKiAtIEJvdW5kZWQ6IGBib3R0b20gPD0gYSA8PSB0b3BgXG4gKlxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmltcG9ydCB7IE9yZCwgb3JkTnVtYmVyIH0gZnJvbSAnLi9PcmQnXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIG1vZGVsXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQGNhdGVnb3J5IHR5cGUgY2xhc3Nlc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQm91bmRlZDxBPiBleHRlbmRzIE9yZDxBPiB7XG4gIHJlYWRvbmx5IHRvcDogQVxuICByZWFkb25seSBib3R0b206IEFcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gZGVwcmVjYXRlZFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyB0c2xpbnQ6ZGlzYWJsZTogZGVwcmVjYXRpb25cblxuLyoqXG4gKiBVc2UgW2BCb3VuZGVkYF0oLi9udW1iZXIudHMuaHRtbCNib3VuZGVkKSBpbnN0ZWFkLlxuICpcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjAuMFxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IGJvdW5kZWROdW1iZXI6IEJvdW5kZWQ8bnVtYmVyPiA9IHtcbiAgZXF1YWxzOiBvcmROdW1iZXIuZXF1YWxzLFxuICBjb21wYXJlOiBvcmROdW1iZXIuY29tcGFyZSxcbiAgdG9wOiBJbmZpbml0eSxcbiAgYm90dG9tOiAtSW5maW5pdHlcbn1cbiJdfQ==