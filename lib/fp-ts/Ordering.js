"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sign = exports.semigroupOrdering = exports.reverse = exports.monoidOrdering = exports.match = exports.invert = exports.eqOrdering = exports.Semigroup = exports.Monoid = exports.Eq = void 0;

/**
 * @since 2.0.0
 */
// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

/**
 * @category model
 * @since 2.0.0
 */
// -------------------------------------------------------------------------------------
// destructors
// -------------------------------------------------------------------------------------

/**
 * @category destructors
 * @since 2.10.0
 */
var match = function match(onLessThan, onEqual, onGreaterThan) {
  return function (o) {
    return o === -1 ? onLessThan() : o === 0 ? onEqual() : onGreaterThan();
  };
}; // -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------

/**
 * @category combinators
 * @since 2.10.0
 */


exports.match = match;

var reverse = function reverse(o) {
  return o === -1 ? 1 : o === 1 ? -1 : 0;
}; // -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------

/**
 * @category instances
 * @since 2.10.0
 */


exports.reverse = reverse;
var Eq = {
  equals: function equals(x, y) {
    return x === y;
  }
};
/**
 * @category instances
 * @since 2.10.0
 */

exports.Eq = Eq;
var Semigroup = {
  concat: function concat(x, y) {
    return x !== 0 ? x : y;
  }
};
/**
 * @category instances
 * @since 2.10.0
 */

exports.Semigroup = Semigroup;
var Monoid = {
  concat: Semigroup.concat,
  empty: 0
}; // -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------

/**
 * @since 2.0.0
 */

exports.Monoid = Monoid;

var sign = function sign(n) {
  return n <= -1 ? -1 : n >= 1 ? 1 : 0;
}; // -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------

/**
 * Use [`reverse`](#reverse) instead.
 *
 * @since 2.0.0
 * @deprecated
 */


exports.sign = sign;
var invert = reverse;
/**
 * Use [`Semigroup`](#semigroup) instead
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */

exports.invert = invert;
var semigroupOrdering = Semigroup;
/**
 * Use [`Eq`](#eq) instead
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */

exports.semigroupOrdering = semigroupOrdering;
var eqOrdering = Eq;
/**
 * Use [`Monoid`](#monoid) instead
 *
 * @category instances
 * @since 2.4.0
 * @deprecated
 */

exports.eqOrdering = eqOrdering;
var monoidOrdering = Monoid;
exports.monoidOrdering = monoidOrdering;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mcC10cy9PcmRlcmluZy50cyJdLCJuYW1lcyI6WyJtYXRjaCIsIm9uTGVzc1RoYW4iLCJvbkVxdWFsIiwib25HcmVhdGVyVGhhbiIsIm8iLCJyZXZlcnNlIiwiRXEiLCJlcXVhbHMiLCJ4IiwieSIsIlNlbWlncm91cCIsImNvbmNhdCIsIk1vbm9pZCIsImVtcHR5Iiwic2lnbiIsIm4iLCJpbnZlcnQiLCJzZW1pZ3JvdXBPcmRlcmluZyIsImVxT3JkZXJpbmciLCJtb25vaWRPcmRlcmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUlDLFVBQUosRUFBeUJDLE9BQXpCLEVBQTJDQyxhQUEzQztBQUFBLFNBQXNFLFVBQUNDLENBQUQ7QUFBQSxXQUN6RkEsQ0FBQyxLQUFLLENBQUMsQ0FBUCxHQUFXSCxVQUFVLEVBQXJCLEdBQTBCRyxDQUFDLEtBQUssQ0FBTixHQUFVRixPQUFPLEVBQWpCLEdBQXNCQyxhQUFhLEVBRDRCO0FBQUEsR0FBdEU7QUFBQSxDQUFkLEMsQ0FHUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ08sSUFBTUUsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0QsQ0FBRDtBQUFBLFNBQTRCQSxDQUFDLEtBQUssQ0FBQyxDQUFQLEdBQVcsQ0FBWCxHQUFlQSxDQUFDLEtBQUssQ0FBTixHQUFVLENBQUMsQ0FBWCxHQUFlLENBQTFEO0FBQUEsQ0FBaEIsQyxDQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUNPLElBQU1FLEVBQWtCLEdBQUc7QUFDaENDLEVBQUFBLE1BQU0sRUFBRSxnQkFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsV0FBVUQsQ0FBQyxLQUFLQyxDQUFoQjtBQUFBO0FBRHdCLENBQTNCO0FBSVA7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLElBQU1DLFNBQWdDLEdBQUc7QUFDOUNDLEVBQUFBLE1BQU0sRUFBRSxnQkFBQ0gsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsV0FBV0QsQ0FBQyxLQUFLLENBQU4sR0FBVUEsQ0FBVixHQUFjQyxDQUF6QjtBQUFBO0FBRHNDLENBQXpDO0FBSVA7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLElBQU1HLE1BQTBCLEdBQUc7QUFDeENELEVBQUFBLE1BQU0sRUFBRUQsU0FBUyxDQUFDQyxNQURzQjtBQUV4Q0UsRUFBQUEsS0FBSyxFQUFFO0FBRmlDLENBQW5DLEMsQ0FLUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7O0FBQ08sSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsQ0FBRDtBQUFBLFNBQTBCQSxDQUFDLElBQUksQ0FBQyxDQUFOLEdBQVUsQ0FBQyxDQUFYLEdBQWVBLENBQUMsSUFBSSxDQUFMLEdBQVMsQ0FBVCxHQUFhLENBQXREO0FBQUEsQ0FBYixDLENBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUNPLElBQU1DLE1BQU0sR0FBR1gsT0FBZjtBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxJQUFNWSxpQkFBd0MsR0FBR1AsU0FBakQ7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTVEsVUFBMEIsR0FBR1osRUFBbkM7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTWEsY0FBa0MsR0FBR1AsTUFBM0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5pbXBvcnQgKiBhcyBFIGZyb20gJy4vRXEnXG5pbXBvcnQgKiBhcyBNIGZyb20gJy4vTW9ub2lkJ1xuaW1wb3J0ICogYXMgUyBmcm9tICcuL1NlbWlncm91cCdcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gbW9kZWxcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgbW9kZWxcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgdHlwZSBPcmRlcmluZyA9IC0xIHwgMCB8IDFcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gZGVzdHJ1Y3RvcnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgZGVzdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IG1hdGNoID0gPEE+KG9uTGVzc1RoYW46ICgpID0+IEEsIG9uRXF1YWw6ICgpID0+IEEsIG9uR3JlYXRlclRoYW46ICgpID0+IEEpID0+IChvOiBPcmRlcmluZyk6IEEgPT5cbiAgbyA9PT0gLTEgPyBvbkxlc3NUaGFuKCkgOiBvID09PSAwID8gb25FcXVhbCgpIDogb25HcmVhdGVyVGhhbigpXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGNvbWJpbmF0b3JzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCByZXZlcnNlID0gKG86IE9yZGVyaW5nKTogT3JkZXJpbmcgPT4gKG8gPT09IC0xID8gMSA6IG8gPT09IDEgPyAtMSA6IDApXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGluc3RhbmNlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IEVxOiBFLkVxPE9yZGVyaW5nPiA9IHtcbiAgZXF1YWxzOiAoeCwgeSkgPT4geCA9PT0geVxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IFNlbWlncm91cDogUy5TZW1pZ3JvdXA8T3JkZXJpbmc+ID0ge1xuICBjb25jYXQ6ICh4LCB5KSA9PiAoeCAhPT0gMCA/IHggOiB5KVxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IE1vbm9pZDogTS5Nb25vaWQ8T3JkZXJpbmc+ID0ge1xuICBjb25jYXQ6IFNlbWlncm91cC5jb25jYXQsXG4gIGVtcHR5OiAwXG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIHV0aWxzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBzaWduID0gKG46IG51bWJlcik6IE9yZGVyaW5nID0+IChuIDw9IC0xID8gLTEgOiBuID49IDEgPyAxIDogMClcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gZGVwcmVjYXRlZFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIFVzZSBbYHJldmVyc2VgXSgjcmV2ZXJzZSkgaW5zdGVhZC5cbiAqXG4gKiBAc2luY2UgMi4wLjBcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBjb25zdCBpbnZlcnQgPSByZXZlcnNlXG5cbi8qKlxuICogVXNlIFtgU2VtaWdyb3VwYF0oI3NlbWlncm91cCkgaW5zdGVhZFxuICpcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjAuMFxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IHNlbWlncm91cE9yZGVyaW5nOiBTLlNlbWlncm91cDxPcmRlcmluZz4gPSBTZW1pZ3JvdXBcblxuLyoqXG4gKiBVc2UgW2BFcWBdKCNlcSkgaW5zdGVhZFxuICpcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjAuMFxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IGVxT3JkZXJpbmc6IEUuRXE8T3JkZXJpbmc+ID0gRXFcblxuLyoqXG4gKiBVc2UgW2BNb25vaWRgXSgjbW9ub2lkKSBpbnN0ZWFkXG4gKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuNC4wXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgY29uc3QgbW9ub2lkT3JkZXJpbmc6IE0uTW9ub2lkPE9yZGVyaW5nPiA9IE1vbm9pZFxuIl19