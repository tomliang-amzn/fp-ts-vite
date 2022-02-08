"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMinMaxDistributiveLattice = getMinMaxDistributiveLattice;

var _Ord = require("./Ord");

/**
 * A `DistributiveLattice` must satisfy the following laws in addition to `Lattice` laws:
 *
 * - Distributivity for meet: `a ∨ (b ∧ c) <-> (a ∨ b) ∧ (a ∨ c)`
 * - Distributivity for join: `a ∧ (b ∨ c) <-> (a ∧ b) ∨ (a ∧ c)`
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
function getMinMaxDistributiveLattice(O) {
  return {
    meet: (0, _Ord.min)(O),
    join: (0, _Ord.max)(O)
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mcC10cy9EaXN0cmlidXRpdmVMYXR0aWNlLnRzIl0sIm5hbWVzIjpbImdldE1pbk1heERpc3RyaWJ1dGl2ZUxhdHRpY2UiLCJPIiwibWVldCIsImpvaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFTQTs7QUFUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBY0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sU0FBU0EsNEJBQVQsQ0FBeUNDLENBQXpDLEVBQTRFO0FBQ2pGLFNBQU87QUFDTEMsSUFBQUEsSUFBSSxFQUFFLGNBQUlELENBQUosQ0FERDtBQUVMRSxJQUFBQSxJQUFJLEVBQUUsY0FBSUYsQ0FBSjtBQUZELEdBQVA7QUFJRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQSBgRGlzdHJpYnV0aXZlTGF0dGljZWAgbXVzdCBzYXRpc2Z5IHRoZSBmb2xsb3dpbmcgbGF3cyBpbiBhZGRpdGlvbiB0byBgTGF0dGljZWAgbGF3czpcbiAqXG4gKiAtIERpc3RyaWJ1dGl2aXR5IGZvciBtZWV0OiBgYSDiiKggKGIg4oinIGMpIDwtPiAoYSDiiKggYikg4oinIChhIOKIqCBjKWBcbiAqIC0gRGlzdHJpYnV0aXZpdHkgZm9yIGpvaW46IGBhIOKIpyAoYiDiiKggYykgPC0+IChhIOKIpyBiKSDiiKggKGEg4oinIGMpYFxuICpcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5pbXBvcnQgeyBMYXR0aWNlIH0gZnJvbSAnLi9MYXR0aWNlJ1xuaW1wb3J0IHsgT3JkLCBtYXgsIG1pbiB9IGZyb20gJy4vT3JkJ1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBtb2RlbFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEBjYXRlZ29yeSB0eXBlIGNsYXNzZXNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgaW50ZXJmYWNlIERpc3RyaWJ1dGl2ZUxhdHRpY2U8QT4gZXh0ZW5kcyBMYXR0aWNlPEE+IHt9XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGNvbnN0cnVjdG9yc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb25zdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWluTWF4RGlzdHJpYnV0aXZlTGF0dGljZTxBPihPOiBPcmQ8QT4pOiBEaXN0cmlidXRpdmVMYXR0aWNlPEE+IHtcbiAgcmV0dXJuIHtcbiAgICBtZWV0OiBtaW4oTyksXG4gICAgam9pbjogbWF4KE8pXG4gIH1cbn1cbiJdfQ==