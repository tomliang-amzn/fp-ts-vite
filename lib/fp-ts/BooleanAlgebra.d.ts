/**
 * Boolean algebras are Heyting algebras with the additional constraint that the law of the excluded middle is true
 * (equivalently, double-negation is true).
 *
 * Instances should satisfy the following laws in addition to the `HeytingAlgebra` laws:
 *
 * - Excluded middle: `a ∨ ¬a <-> 1`
 *
 * Boolean algebras generalize classical logic: one is equivalent to "true" and zero is equivalent to "false".
 *
 * @since 2.0.0
 */
import { HeytingAlgebra } from './HeytingAlgebra';
/**
 * @category type classes
 * @since 2.0.0
 */
export interface BooleanAlgebra<A> extends HeytingAlgebra<A> {
}
/**
 * Every boolean algebras has a dual algebra, which involves reversing one/zero as well as join/meet.
 *
 * @category combinators
 * @since 2.10.0
 */
export declare const reverse: <A>(B: BooleanAlgebra<A>) => BooleanAlgebra<A>;
/**
 * @category instances
 * @since 2.0.0
 */
export declare const booleanAlgebraVoid: BooleanAlgebra<void>;
/**
 * Use [`reverse`](#reverse) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */
export declare const getDualBooleanAlgebra: <A>(B: BooleanAlgebra<A>) => BooleanAlgebra<A>;
/**
 * Use [`BooleanAlgebra`](./boolean.ts.html#booleanalgebra) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
export declare const booleanAlgebraBoolean: BooleanAlgebra<boolean>;
/**
 * Use [`getBooleanAlgebra`](./function.ts.html#getbooleanalgebra) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
export declare const getFunctionBooleanAlgebra: <B>(B: BooleanAlgebra<B>) => <A = never>() => BooleanAlgebra<(a: A) => B>;