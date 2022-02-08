"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMinMaxBoundedDistributiveLattice = getMinMaxBoundedDistributiveLattice;

var _DistributiveLattice = require("./DistributiveLattice");

/**
 * A `BoundedDistributiveLattice` is a lattice that is both bounded and distributive
 *
 * @since 2.0.0
 */
// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------

/**
 * @category constructors
 * @since 2.0.0
 */
function getMinMaxBoundedDistributiveLattice(O) {
  var L = (0, _DistributiveLattice.getMinMaxDistributiveLattice)(O);
  return function (min, max) {
    return {
      join: L.join,
      meet: L.meet,
      zero: min,
      one: max
    };
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mcC10cy9Cb3VuZGVkRGlzdHJpYnV0aXZlTGF0dGljZS50cyJdLCJuYW1lcyI6WyJnZXRNaW5NYXhCb3VuZGVkRGlzdHJpYnV0aXZlTGF0dGljZSIsIk8iLCJMIiwibWluIiwibWF4Iiwiam9pbiIsIm1lZXQiLCJ6ZXJvIiwib25lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBTUE7O0FBTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLFNBQVNBLG1DQUFULENBQWdEQyxDQUFoRCxFQUE4RztBQUNuSCxNQUFNQyxDQUFDLEdBQUcsdURBQTZCRCxDQUE3QixDQUFWO0FBQ0EsU0FBTyxVQUFDRSxHQUFELEVBQU1DLEdBQU47QUFBQSxXQUFlO0FBQ3BCQyxNQUFBQSxJQUFJLEVBQUVILENBQUMsQ0FBQ0csSUFEWTtBQUVwQkMsTUFBQUEsSUFBSSxFQUFFSixDQUFDLENBQUNJLElBRlk7QUFHcEJDLE1BQUFBLElBQUksRUFBRUosR0FIYztBQUlwQkssTUFBQUEsR0FBRyxFQUFFSjtBQUplLEtBQWY7QUFBQSxHQUFQO0FBTUQiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEEgYEJvdW5kZWREaXN0cmlidXRpdmVMYXR0aWNlYCBpcyBhIGxhdHRpY2UgdGhhdCBpcyBib3RoIGJvdW5kZWQgYW5kIGRpc3RyaWJ1dGl2ZVxuICpcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5pbXBvcnQgeyBCb3VuZGVkTGF0dGljZSB9IGZyb20gJy4vQm91bmRlZExhdHRpY2UnXG5pbXBvcnQgeyBEaXN0cmlidXRpdmVMYXR0aWNlLCBnZXRNaW5NYXhEaXN0cmlidXRpdmVMYXR0aWNlIH0gZnJvbSAnLi9EaXN0cmlidXRpdmVMYXR0aWNlJ1xuaW1wb3J0IHsgT3JkIH0gZnJvbSAnLi9PcmQnXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIG1vZGVsXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQGNhdGVnb3J5IHR5cGUgY2xhc3Nlc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQm91bmRlZERpc3RyaWJ1dGl2ZUxhdHRpY2U8QT4gZXh0ZW5kcyBCb3VuZGVkTGF0dGljZTxBPiwgRGlzdHJpYnV0aXZlTGF0dGljZTxBPiB7fVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBjb25zdHJ1Y3RvcnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29uc3RydWN0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldE1pbk1heEJvdW5kZWREaXN0cmlidXRpdmVMYXR0aWNlPEE+KE86IE9yZDxBPik6IChtaW46IEEsIG1heDogQSkgPT4gQm91bmRlZERpc3RyaWJ1dGl2ZUxhdHRpY2U8QT4ge1xuICBjb25zdCBMID0gZ2V0TWluTWF4RGlzdHJpYnV0aXZlTGF0dGljZShPKVxuICByZXR1cm4gKG1pbiwgbWF4KSA9PiAoe1xuICAgIGpvaW46IEwuam9pbixcbiAgICBtZWV0OiBMLm1lZXQsXG4gICAgemVybzogbWluLFxuICAgIG9uZTogbWF4XG4gIH0pXG59XG4iXX0=