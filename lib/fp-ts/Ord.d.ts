/**
 * The `Ord` type class represents types which support comparisons with a _total order_.
 *
 * Instances should satisfy the laws of total orderings:
 *
 * 1. Reflexivity: `S.compare(a, a) <= 0`
 * 2. Antisymmetry: if `S.compare(a, b) <= 0` and `S.compare(b, a) <= 0` then `a <-> b`
 * 3. Transitivity: if `S.compare(a, b) <= 0` and `S.compare(b, c) <= 0` then `S.compare(a, c) <= 0`
 *
 * @since 2.0.0
 */
import { Contravariant1 } from './Contravariant';
import { Eq } from './Eq';
import { Monoid } from './Monoid';
import { Ordering } from './Ordering';
import { Semigroup } from './Semigroup';
/**
 * @category type classes
 * @since 2.0.0
 */
export interface Ord<A> extends Eq<A> {
    readonly compare: (first: A, second: A) => Ordering;
}
/**
 * @category defaults
 * @since 2.10.0
 */
export declare const equalsDefault: <A>(compare: (first: A, second: A) => Ordering) => (x: A, y: A) => boolean;
/**
 * @category constructors
 * @since 2.0.0
 */
export declare const fromCompare: <A>(compare: (first: A, second: A) => Ordering) => Ord<A>;
/**
 * Given a tuple of `Ord`s returns an `Ord` for the tuple.
 *
 * @example
 * import { tuple } from 'fp-ts/Ord'
 * import * as B from 'fp-ts/boolean'
 * import * as S from 'fp-ts/string'
 * import * as N from 'fp-ts/number'
 *
 * const O = tuple(S.Ord, N.Ord, B.Ord)
 * assert.strictEqual(O.compare(['a', 1, true], ['b', 2, true]), -1)
 * assert.strictEqual(O.compare(['a', 1, true], ['a', 2, true]), -1)
 * assert.strictEqual(O.compare(['a', 1, true], ['a', 1, false]), 1)
 *
 * @category combinators
 * @since 2.10.0
 */
export declare const tuple: <A extends readonly unknown[]>(...ords: { [K in keyof A]: Ord<A[K]>; }) => Ord<Readonly<A>>;
/**
 * @category combinators
 * @since 2.10.0
 */
export declare const reverse: <A>(O: Ord<A>) => Ord<A>;
/**
 * @category Contravariant
 * @since 2.0.0
 */
export declare const contramap: <A, B>(f: (b: B) => A) => (fa: Ord<A>) => Ord<B>;
/**
 * @category instances
 * @since 2.0.0
 */
export declare const URI = "Ord";
/**
 * @category instances
 * @since 2.0.0
 */
export declare type URI = typeof URI;
declare module './HKT' {
    interface URItoKind<A> {
        readonly [URI]: Ord<A>;
    }
}
/**
 * @category instances
 * @since 2.0.0
 */
export declare const getSemigroup: <A = never>() => Semigroup<Ord<A>>;
/**
 * Returns a `Monoid` such that:
 *
 * - its `concat(ord1, ord2)` operation will order first by `ord1`, and then by `ord2`
 * - its `empty` value is an `Ord` that always considers compared elements equal
 *
 * @example
 * import { sort } from 'fp-ts/Array'
 * import { contramap, reverse, getMonoid } from 'fp-ts/Ord'
 * import * as S from 'fp-ts/string'
 * import * as B from 'fp-ts/boolean'
 * import { pipe } from 'fp-ts/function'
 * import { concatAll } from 'fp-ts/Monoid'
 * import * as N from 'fp-ts/number'
 *
 * interface User {
 *   readonly id: number
 *   readonly name: string
 *   readonly age: number
 *   readonly rememberMe: boolean
 * }
 *
 * const byName = pipe(
 *   S.Ord,
 *   contramap((p: User) => p.name)
 * )
 *
 * const byAge = pipe(
 *   N.Ord,
 *   contramap((p: User) => p.age)
 * )
 *
 * const byRememberMe = pipe(
 *   B.Ord,
 *   contramap((p: User) => p.rememberMe)
 * )
 *
 * const M = getMonoid<User>()
 *
 * const users: Array<User> = [
 *   { id: 1, name: 'Guido', age: 47, rememberMe: false },
 *   { id: 2, name: 'Guido', age: 46, rememberMe: true },
 *   { id: 3, name: 'Giulio', age: 44, rememberMe: false },
 *   { id: 4, name: 'Giulio', age: 44, rememberMe: true }
 * ]
 *
 * // sort by name, then by age, then by `rememberMe`
 * const O1 = concatAll(M)([byName, byAge, byRememberMe])
 * assert.deepStrictEqual(sort(O1)(users), [
 *   { id: 3, name: 'Giulio', age: 44, rememberMe: false },
 *   { id: 4, name: 'Giulio', age: 44, rememberMe: true },
 *   { id: 2, name: 'Guido', age: 46, rememberMe: true },
 *   { id: 1, name: 'Guido', age: 47, rememberMe: false }
 * ])
 *
 * // now `rememberMe = true` first, then by name, then by age
 * const O2 = concatAll(M)([reverse(byRememberMe), byName, byAge])
 * assert.deepStrictEqual(sort(O2)(users), [
 *   { id: 4, name: 'Giulio', age: 44, rememberMe: true },
 *   { id: 2, name: 'Guido', age: 46, rememberMe: true },
 *   { id: 3, name: 'Giulio', age: 44, rememberMe: false },
 *   { id: 1, name: 'Guido', age: 47, rememberMe: false }
 * ])
 *
 * @category instances
 * @since 2.4.0
 */
export declare const getMonoid: <A = never>() => Monoid<Ord<A>>;
/**
 * @category instances
 * @since 2.7.0
 */
export declare const Contravariant: Contravariant1<URI>;
/**
 * @since 2.11.0
 */
export declare const trivial: Ord<unknown>;
/**
 * @since 2.11.0
 */
export declare const equals: <A>(O: Ord<A>) => (second: A) => (first: A) => boolean;
/**
 * Test whether one value is _strictly less than_ another
 *
 * @since 2.0.0
 */
export declare const lt: <A>(O: Ord<A>) => (first: A, second: A) => boolean;
/**
 * Test whether one value is _strictly greater than_ another
 *
 * @since 2.0.0
 */
export declare const gt: <A>(O: Ord<A>) => (first: A, second: A) => boolean;
/**
 * Test whether one value is _non-strictly less than_ another
 *
 * @since 2.0.0
 */
export declare const leq: <A>(O: Ord<A>) => (first: A, second: A) => boolean;
/**
 * Test whether one value is _non-strictly greater than_ another
 *
 * @since 2.0.0
 */
export declare const geq: <A>(O: Ord<A>) => (first: A, second: A) => boolean;
/**
 * Take the minimum of two values. If they are considered equal, the first argument is chosen
 *
 * @since 2.0.0
 */
export declare const min: <A>(O: Ord<A>) => (first: A, second: A) => A;
/**
 * Take the maximum of two values. If they are considered equal, the first argument is chosen
 *
 * @since 2.0.0
 */
export declare const max: <A>(O: Ord<A>) => (first: A, second: A) => A;
/**
 * Clamp a value between a minimum and a maximum
 *
 * @since 2.0.0
 */
export declare const clamp: <A>(O: Ord<A>) => (low: A, hi: A) => (a: A) => A;
/**
 * Test whether a value is between a minimum and a maximum (inclusive)
 *
 * @since 2.0.0
 */
export declare const between: <A>(O: Ord<A>) => (low: A, hi: A) => (a: A) => boolean;
/**
 * Use [`tuple`](#tuple) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */
export declare const getTupleOrd: <T extends ReadonlyArray<Ord<any>>>(...ords: T) => Ord<{
    [K in keyof T]: T[K] extends Ord<infer A> ? A : never;
}>;
/**
 * Use [`reverse`](#reverse) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */
export declare const getDualOrd: <A>(O: Ord<A>) => Ord<A>;
/**
 * Use [`Contravariant`](#contravariant) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
export declare const ord: Contravariant1<URI>;
/**
 * Use [`Ord`](./boolean.ts.html#ord) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
export declare const ordBoolean: Ord<boolean>;
/**
 * Use [`Ord`](./string.ts.html#ord) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
export declare const ordString: Ord<string>;
/**
 * Use [`Ord`](./number.ts.html#ord) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
export declare const ordNumber: Ord<number>;
/**
 * Use [`Ord`](./Date.ts.html#ord) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
export declare const ordDate: Ord<Date>;