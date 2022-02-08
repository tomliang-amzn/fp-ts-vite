/**
 * Data structure which represents non-empty arrays.
 *
 * ```ts
 * export type NonEmptyArray<A> = Array<A> & {
 *   0: A
 * }
 * ```
 *
 * Note that you don't need any conversion, a `NonEmptyArray` is an `Array`,
 * so all `Array`'s APIs can be used with a `NonEmptyArray` without further ado.
 *
 * @since 2.0.0
 */
import { Alt1 } from './Alt';
import { Applicative1 } from './Applicative';
import { Apply1 } from './Apply';
import { Chain1 } from './Chain';
import { Comonad1 } from './Comonad';
import { Endomorphism } from './Endomorphism';
import { Eq } from './Eq';
import { Foldable1 } from './Foldable';
import { FoldableWithIndex1 } from './FoldableWithIndex';
import { Lazy } from './function';
import { Functor1 } from './Functor';
import { FunctorWithIndex1 } from './FunctorWithIndex';
import { Monad1 } from './Monad';
import { Option } from './Option';
import { Ord } from './Ord';
import { Pointed1 } from './Pointed';
import { Predicate } from './Predicate';
import * as RNEA from './ReadonlyNonEmptyArray';
import { Refinement } from './Refinement';
import * as Se from './Semigroup';
import { Show } from './Show';
import { PipeableTraverse1, Traversable1 } from './Traversable';
import { PipeableTraverseWithIndex1, TraversableWithIndex1 } from './TraversableWithIndex';
import Semigroup = Se.Semigroup;
import ReadonlyNonEmptyArray = RNEA.ReadonlyNonEmptyArray;
/**
 * @category model
 * @since 2.0.0
 */
export interface NonEmptyArray<A> extends Array<A> {
    0: A;
}
/**
 * @internal
 */
export declare const isNonEmpty: <A>(as: A[]) => as is NonEmptyArray<A>;
/**
 * @internal
 */
export declare const isOutOfBound: <A>(i: number, as: A[]) => boolean;
/**
 * @internal
 */
export declare const prependW: <B>(head: B) => <A>(tail: A[]) => NonEmptyArray<B | A>;
/**
 * @internal
 */
export declare const prepend: <A>(head: A) => (tail: Array<A>) => NonEmptyArray<A>;
/**
 * @internal
 */
export declare const appendW: <B>(end: B) => <A>(init: A[]) => NonEmptyArray<B | A>;
/**
 * @internal
 */
export declare const append: <A>(end: A) => (init: Array<A>) => NonEmptyArray<A>;
/**
 * @internal
 */
export declare const unsafeInsertAt: <A>(i: number, a: A, as: A[]) => NonEmptyArray<A>;
/**
 * @internal
 */
export declare const unsafeUpdateAt: <A>(i: number, a: A, as: NonEmptyArray<A>) => NonEmptyArray<A>;
/**
 * Remove duplicates from a `NonEmptyArray`, keeping the first occurrence of an element.
 *
 * @example
 * import { uniq } from 'fp-ts/NonEmptyArray'
 * import * as N from 'fp-ts/number'
 *
 * assert.deepStrictEqual(uniq(N.Eq)([1, 2, 1]), [1, 2])
 *
 * @category combinators
 * @since 2.11.0
 */
export declare const uniq: <A>(E: Eq<A>) => (as: NonEmptyArray<A>) => NonEmptyArray<A>;
/**
 * Sort the elements of a `NonEmptyArray` in increasing order, where elements are compared using first `ords[0]`, then `ords[1]`,
 * etc...
 *
 * @example
 * import * as NEA from 'fp-ts/NonEmptyArray'
 * import { contramap } from 'fp-ts/Ord'
 * import * as S from 'fp-ts/string'
 * import * as N from 'fp-ts/number'
 * import { pipe } from 'fp-ts/function'
 *
 * interface Person {
 *   name: string
 *   age: number
 * }
 *
 * const byName = pipe(S.Ord, contramap((p: Person) => p.name))
 *
 * const byAge = pipe(N.Ord, contramap((p: Person) => p.age))
 *
 * const sortByNameByAge = NEA.sortBy([byName, byAge])
 *
 * const persons: NEA.NonEmptyArray<Person> = [
 *   { name: 'a', age: 1 },
 *   { name: 'b', age: 3 },
 *   { name: 'c', age: 2 },
 *   { name: 'b', age: 2 }
 * ]
 *
 * assert.deepStrictEqual(sortByNameByAge(persons), [
 *   { name: 'a', age: 1 },
 *   { name: 'b', age: 2 },
 *   { name: 'b', age: 3 },
 *   { name: 'c', age: 2 }
 * ])
 *
 * @category combinators
 * @since 2.11.0
 */
export declare const sortBy: <B>(ords: Ord<B>[]) => <A extends B>(as: NonEmptyArray<A>) => NonEmptyArray<A>;
/**
 * @category combinators
 * @since 2.11.0
 */
export declare const union: <A>(E: Eq<A>) => (second: NonEmptyArray<A>) => (first: NonEmptyArray<A>) => NonEmptyArray<A>;
/**
 * Rotate a `NonEmptyArray` by `n` steps.
 *
 * @example
 * import { rotate } from 'fp-ts/NonEmptyArray'
 *
 * assert.deepStrictEqual(rotate(2)([1, 2, 3, 4, 5]), [4, 5, 1, 2, 3])
 * assert.deepStrictEqual(rotate(-2)([1, 2, 3, 4, 5]), [3, 4, 5, 1, 2])
 *
 * @category combinators
 * @since 2.11.0
 */
export declare const rotate: (n: number) => <A>(as: NonEmptyArray<A>) => NonEmptyArray<A>;
/**
 * @category constructors
 * @since 2.10.0
 */
export declare const fromReadonlyNonEmptyArray: <A>(as: ReadonlyNonEmptyArray<A>) => NonEmptyArray<A>;
/**
 * Builds a `NonEmptyArray` from an `Array` returning `none` if `as` is an empty array
 *
 * @category constructors
 * @since 2.0.0
 */
export declare const fromArray: <A>(as: A[]) => Option<NonEmptyArray<A>>;
/**
 * Return a `NonEmptyArray` of length `n` with element `i` initialized with `f(i)`.
 *
 * **Note**. `n` is normalized to a natural number.
 *
 * @example
 * import { makeBy } from 'fp-ts/NonEmptyArray'
 * import { pipe } from 'fp-ts/function'
 *
 * const double = (n: number): number => n * 2
 * assert.deepStrictEqual(pipe(5, makeBy(double)), [0, 2, 4, 6, 8])
 *
 * @category constructors
 * @since 2.11.0
 */
export declare const makeBy: <A>(f: (i: number) => A) => (n: number) => NonEmptyArray<A>;
/**
 * Create a `NonEmptyArray` containing a value repeated the specified number of times.
 *
 * **Note**. `n` is normalized to a natural number.
 *
 * @example
 * import { replicate } from 'fp-ts/NonEmptyArray'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.deepStrictEqual(pipe(3, replicate('a')), ['a', 'a', 'a'])
 *
 * @category constructors
 * @since 2.11.0
 */
export declare const replicate: <A>(a: A) => (n: number) => RNEA.ReadonlyNonEmptyArray<A>;
/**
 * Create a `NonEmptyArray` containing a range of integers, including both endpoints.
 *
 * @example
 * import { range } from 'fp-ts/NonEmptyArray'
 *
 * assert.deepStrictEqual(range(1, 5), [1, 2, 3, 4, 5])
 *
 * @category constructors
 * @since 2.11.0
 */
export declare const range: (start: number, end: number) => NonEmptyArray<number>;
/**
 * Return the tuple of the `head` and the `tail`.
 *
 * @example
 * import { unprepend } from 'fp-ts/NonEmptyArray'
 *
 * assert.deepStrictEqual(unprepend([1, 2, 3]), [1, [2, 3]])
 *
 * @category destructors
 * @since 2.9.0
 */
export declare const unprepend: <A>(as: NonEmptyArray<A>) => [A, A[]];
/**
 * Return the tuple of the `init` and the `last`.
 *
 * @example
 * import { unappend } from 'fp-ts/NonEmptyArray'
 *
 * assert.deepStrictEqual(unappend([1, 2, 3, 4]), [[1, 2, 3], 4])
 *
 * @category destructors
 * @since 2.9.0
 */
export declare const unappend: <A>(as: NonEmptyArray<A>) => [A[], A];
/**
 * @category combinators
 * @since 2.11.0
 */
export declare function concatW<B>(second: NonEmptyArray<B>): <A>(first: Array<A>) => NonEmptyArray<A | B>;
export declare function concatW<B>(second: Array<B>): <A>(first: NonEmptyArray<A>) => NonEmptyArray<A | B>;
/**
 * @category combinators
 * @since 2.2.0
 */
export declare function concat<A>(second: NonEmptyArray<A>): (first: Array<A>) => NonEmptyArray<A>;
export declare function concat<A>(second: Array<A>): (first: NonEmptyArray<A>) => NonEmptyArray<A>;
/** @deprecated */
export declare function concat<A>(first: Array<A>, second: NonEmptyArray<A>): NonEmptyArray<A>;
/** @deprecated */
export declare function concat<A>(first: NonEmptyArray<A>, second: Array<A>): NonEmptyArray<A>;
/**
 * @category combinators
 * @since 2.0.0
 */
export declare const reverse: <A>(as: NonEmptyArray<A>) => NonEmptyArray<A>;
/**
 * Group equal, consecutive elements of an array into non empty arrays.
 *
 * @example
 * import { group } from 'fp-ts/NonEmptyArray'
 * import * as N from 'fp-ts/number'
 *
 * assert.deepStrictEqual(group(N.Ord)([1, 2, 1, 1]), [
 *   [1],
 *   [2],
 *   [1, 1]
 * ])
 *
 * @category combinators
 * @since 2.0.0
 */
export declare function group<B>(E: Eq<B>): {
    <A extends B>(as: NonEmptyArray<A>): NonEmptyArray<NonEmptyArray<A>>;
    <A extends B>(as: Array<A>): Array<NonEmptyArray<A>>;
};
/**
 * Splits an array into sub-non-empty-arrays stored in an object, based on the result of calling a `string`-returning
 * function on each element, and grouping the results according to values returned
 *
 * @example
 * import { groupBy } from 'fp-ts/NonEmptyArray'
 *
 * assert.deepStrictEqual(groupBy((s: string) => String(s.length))(['a', 'b', 'ab']), {
 *   '1': ['a', 'b'],
 *   '2': ['ab']
 * })
 *
 * @category combinators
 * @since 2.0.0
 */
export declare const groupBy: <A>(f: (a: A) => string) => (as: A[]) => Record<string, NonEmptyArray<A>>;
/**
 * @category combinators
 * @since 2.0.0
 */
export declare const sort: <B>(O: Ord<B>) => <A extends B>(as: NonEmptyArray<A>) => NonEmptyArray<A>;
/**
 * @category combinators
 * @since 2.0.0
 */
export declare const insertAt: <A>(i: number, a: A) => (as: A[]) => Option<NonEmptyArray<A>>;
/**
 * @category combinators
 * @since 2.0.0
 */
export declare const updateAt: <A>(i: number, a: A) => (as: NonEmptyArray<A>) => Option<NonEmptyArray<A>>;
/**
 * @category combinators
 * @since 2.0.0
 */
export declare const modifyAt: <A>(i: number, f: (a: A) => A) => (as: NonEmptyArray<A>) => Option<NonEmptyArray<A>>;
/**
 * @category combinators
 * @since 2.0.0
 */
export declare const copy: <A>(as: NonEmptyArray<A>) => NonEmptyArray<A>;
/**
 * @category Pointed
 * @since 2.0.0
 */
export declare const of: Pointed1<URI>['of'];
/**
 * @category combinators
 * @since 2.5.1
 */
export declare const zipWith: <A, B, C>(as: NonEmptyArray<A>, bs: NonEmptyArray<B>, f: (a: A, b: B) => C) => NonEmptyArray<C>;
/**
 * @category combinators
 * @since 2.5.1
 */
export declare function zip<B>(bs: NonEmptyArray<B>): <A>(as: NonEmptyArray<A>) => NonEmptyArray<[A, B]>;
export declare function zip<A, B>(as: NonEmptyArray<A>, bs: NonEmptyArray<B>): NonEmptyArray<[A, B]>;
/**
 * @category combinators
 * @since 2.5.1
 */
export declare const unzip: <A, B>(abs: NonEmptyArray<[A, B]>) => [NonEmptyArray<A>, NonEmptyArray<B>];
/**
 * Prepend an element to every member of an array
 *
 * @example
 * import { prependAll } from 'fp-ts/NonEmptyArray'
 *
 * assert.deepStrictEqual(prependAll(9)([1, 2, 3, 4]), [9, 1, 9, 2, 9, 3, 9, 4])
 *
 * @category combinators
 * @since 2.10.0
 */
export declare const prependAll: <A>(middle: A) => (as: NonEmptyArray<A>) => NonEmptyArray<A>;
/**
 * Places an element in between members of an array
 *
 * @example
 * import { intersperse } from 'fp-ts/NonEmptyArray'
 *
 * assert.deepStrictEqual(intersperse(9)([1, 2, 3, 4]), [1, 9, 2, 9, 3, 9, 4])
 *
 * @category combinators
 * @since 2.9.0
 */
export declare const intersperse: <A>(middle: A) => (as: NonEmptyArray<A>) => NonEmptyArray<A>;
/**
 * @category combinators
 * @since 2.0.0
 */
export declare const foldMapWithIndex: <S>(S: Semigroup<S>) => <A>(f: (i: number, a: A) => S) => (fa: NonEmptyArray<A>) => S;
/**
 * @category combinators
 * @since 2.0.0
 */
export declare const foldMap: <S>(S: Semigroup<S>) => <A>(f: (a: A) => S) => (fa: NonEmptyArray<A>) => S;
/**
 * @category combinators
 * @since 2.10.0
 */
export declare const chainWithIndex: <A, B>(f: (i: number, a: A) => NonEmptyArray<B>) => (as: NonEmptyArray<A>) => NonEmptyArray<B>;
/**
 * @category combinators
 * @since 2.10.0
 */
export declare const chop: <A, B>(f: (as: NonEmptyArray<A>) => [B, A[]]) => (as: NonEmptyArray<A>) => NonEmptyArray<B>;
/**
 * Splits a `NonEmptyArray` into two pieces, the first piece has max `n` elements.
 *
 * @category combinators
 * @since 2.10.0
 */
export declare const splitAt: (n: number) => <A>(as: NonEmptyArray<A>) => [NonEmptyArray<A>, A[]];
/**
 * @category combinators
 * @since 2.10.0
 */
export declare const chunksOf: (n: number) => <A>(as: NonEmptyArray<A>) => NonEmptyArray<NonEmptyArray<A>>;
/**
 * Less strict version of [`alt`](#alt).
 *
 * @category Alt
 * @since 2.9.0
 */
export declare const altW: <B>(that: Lazy<NonEmptyArray<B>>) => <A>(as: NonEmptyArray<A>) => NonEmptyArray<B | A>;
/**
 * Identifies an associative operation on a type constructor. It is similar to `Semigroup`, except that it applies to
 * types of kind `* -> *`.
 *
 * @category Alt
 * @since 2.6.2
 */
export declare const alt: <A>(that: Lazy<NonEmptyArray<A>>) => (fa: NonEmptyArray<A>) => NonEmptyArray<A>;
/**
 * Apply a function to an argument under a type constructor.
 *
 * @category Apply
 * @since 2.0.0
 */
export declare const ap: <A>(as: NonEmptyArray<A>) => <B>(fab: NonEmptyArray<(a: A) => B>) => NonEmptyArray<B>;
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation.
 *
 * @category Monad
 * @since 2.0.0
 */
export declare const chain: <A, B>(f: (a: A) => NonEmptyArray<B>) => (ma: NonEmptyArray<A>) => NonEmptyArray<B>;
/**
 * @category Extend
 * @since 2.0.0
 */
export declare const extend: <A, B>(f: (as: NonEmptyArray<A>) => B) => (as: NonEmptyArray<A>) => NonEmptyArray<B>;
/**
 * Derivable from `Extend`.
 *
 * @category combinators
 * @since 2.5.0
 */
export declare const duplicate: <A>(ma: NonEmptyArray<A>) => NonEmptyArray<NonEmptyArray<A>>;
/**
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.5.0
 */
export declare const flatten: <A>(mma: NonEmptyArray<NonEmptyArray<A>>) => NonEmptyArray<A>;
/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent some computational context.
 *
 * @category Functor
 * @since 2.0.0
 */
export declare const map: <A, B>(f: (a: A) => B) => (as: NonEmptyArray<A>) => NonEmptyArray<B>;
/**
 * @category FunctorWithIndex
 * @since 2.0.0
 */
export declare const mapWithIndex: <A, B>(f: (i: number, a: A) => B) => (as: NonEmptyArray<A>) => NonEmptyArray<B>;
/**
 * @category Foldable
 * @since 2.0.0
 */
export declare const reduce: <A, B>(b: B, f: (b: B, a: A) => B) => (fa: NonEmptyArray<A>) => B;
/**
 * @category FoldableWithIndex
 * @since 2.0.0
 */
export declare const reduceWithIndex: <A, B>(b: B, f: (i: number, b: B, a: A) => B) => (fa: NonEmptyArray<A>) => B;
/**
 * @category Foldable
 * @since 2.0.0
 */
export declare const reduceRight: <A, B>(b: B, f: (a: A, b: B) => B) => (fa: NonEmptyArray<A>) => B;
/**
 * @category FoldableWithIndex
 * @since 2.0.0
 */
export declare const reduceRightWithIndex: <A, B>(b: B, f: (i: number, a: A, b: B) => B) => (fa: NonEmptyArray<A>) => B;
/**
 * @since 2.6.3
 */
export declare const traverse: PipeableTraverse1<URI>;
/**
 * @since 2.6.3
 */
export declare const sequence: Traversable1<URI>['sequence'];
/**
 * @since 2.6.3
 */
export declare const traverseWithIndex: PipeableTraverseWithIndex1<URI, number>;
/**
 * @since 2.7.0
 */
export declare const extract: Comonad1<URI>['extract'];
/**
 * @category instances
 * @since 2.0.0
 */
export declare const URI = "NonEmptyArray";
/**
 * @category instances
 * @since 2.0.0
 */
export declare type URI = typeof URI;
declare module './HKT' {
    interface URItoKind<A> {
        readonly [URI]: NonEmptyArray<A>;
    }
}
/**
 * @category instances
 * @since 2.0.0
 */
export declare const getShow: <A>(S: Show<A>) => Show<NonEmptyArray<A>>;
/**
 * Builds a `Semigroup` instance for `NonEmptyArray`
 *
 * @category instances
 * @since 2.0.0
 */
export declare const getSemigroup: <A = never>() => Se.Semigroup<NonEmptyArray<A>>;
/**
 * @example
 * import { getEq } from 'fp-ts/NonEmptyArray'
 * import * as N from 'fp-ts/number'
 *
 * const E = getEq(N.Eq)
 * assert.strictEqual(E.equals([1, 2], [1, 2]), true)
 * assert.strictEqual(E.equals([1, 2], [1, 3]), false)
 *
 * @category instances
 * @since 2.0.0
 */
export declare const getEq: <A>(E: Eq<A>) => Eq<NonEmptyArray<A>>;
/**
 * @category combinators
 * @since 2.11.0
 */
export declare const getUnionSemigroup: <A>(E: Eq<A>) => Se.Semigroup<NonEmptyArray<A>>;
/**
 * @category instances
 * @since 2.7.0
 */
export declare const Functor: Functor1<URI>;
/**
 * Derivable from `Functor`.
 *
 * @category combinators
 * @since 2.10.0
 */
export declare const flap: <A>(a: A) => <B>(fab: NonEmptyArray<(a: A) => B>) => NonEmptyArray<B>;
/**
 * @category instances
 * @since 2.10.0
 */
export declare const Pointed: Pointed1<URI>;
/**
 * @category instances
 * @since 2.7.0
 */
export declare const FunctorWithIndex: FunctorWithIndex1<URI, number>;
/**
 * @category instances
 * @since 2.10.0
 */
export declare const Apply: Apply1<URI>;
/**
 * Combine two effectful actions, keeping only the result of the first.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.5.0
 */
export declare const apFirst: <B>(second: NonEmptyArray<B>) => <A>(first: NonEmptyArray<A>) => NonEmptyArray<A>;
/**
 * Combine two effectful actions, keeping only the result of the second.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.5.0
 */
export declare const apSecond: <B>(second: NonEmptyArray<B>) => <A>(first: NonEmptyArray<A>) => NonEmptyArray<B>;
/**
 * @category instances
 * @since 2.7.0
 */
export declare const Applicative: Applicative1<URI>;
/**
 * @category instances
 * @since 2.10.0
 */
export declare const Chain: Chain1<URI>;
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation and
 * keeping only the result of the first.
 *
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.5.0
 */
export declare const chainFirst: <A, B>(f: (a: A) => NonEmptyArray<B>) => (first: NonEmptyArray<A>) => NonEmptyArray<A>;
/**
 * @category instances
 * @since 2.7.0
 */
export declare const Monad: Monad1<URI>;
/**
 * @category instances
 * @since 2.7.0
 */
export declare const Foldable: Foldable1<URI>;
/**
 * @category instances
 * @since 2.7.0
 */
export declare const FoldableWithIndex: FoldableWithIndex1<URI, number>;
/**
 * @category instances
 * @since 2.7.0
 */
export declare const Traversable: Traversable1<URI>;
/**
 * @category instances
 * @since 2.7.0
 */
export declare const TraversableWithIndex: TraversableWithIndex1<URI, number>;
/**
 * @category instances
 * @since 2.7.0
 */
export declare const Alt: Alt1<URI>;
/**
 * @category instances
 * @since 2.7.0
 */
export declare const Comonad: Comonad1<URI>;
/**
 * @since 2.9.0
 */
export declare const Do: NonEmptyArray<{}>;
/**
 * @since 2.8.0
 */
export declare const bindTo: <N extends string>(name: N) => <A>(fa: NonEmptyArray<A>) => NonEmptyArray<{ readonly [K in N]: A; }>;
/**
 * @since 2.8.0
 */
export declare const bind: <N extends string, A, B>(name: Exclude<N, keyof A>, f: (a: A) => NonEmptyArray<B>) => (ma: NonEmptyArray<A>) => NonEmptyArray<{ readonly [K in N | keyof A]: K extends keyof A ? A[K] : B; }>;
/**
 * @since 2.8.0
 */
export declare const apS: <N extends string, A, B>(name: Exclude<N, keyof A>, fb: NonEmptyArray<B>) => (fa: NonEmptyArray<A>) => NonEmptyArray<{ readonly [K in N | keyof A]: K extends keyof A ? A[K] : B; }>;
/**
 * @since 2.0.0
 */
export declare const head: <A>(nea: NonEmptyArray<A>) => A;
/**
 * @since 2.0.0
 */
export declare const tail: <A>(as: NonEmptyArray<A>) => A[];
/**
 * @since 2.0.0
 */
export declare const last: <A>(nea: NonEmptyArray<A>) => A;
/**
 * Get all but the last element of a non empty array, creating a new array.
 *
 * @example
 * import { init } from 'fp-ts/NonEmptyArray'
 *
 * assert.deepStrictEqual(init([1, 2, 3]), [1, 2])
 * assert.deepStrictEqual(init([1]), [])
 *
 * @since 2.2.0
 */
export declare const init: <A>(as: NonEmptyArray<A>) => A[];
/**
 * @since 2.0.0
 */
export declare const min: <A>(ord: Ord<A>) => (nea: NonEmptyArray<A>) => A;
/**
 * @since 2.0.0
 */
export declare const max: <A>(ord: Ord<A>) => (nea: NonEmptyArray<A>) => A;
/**
 * @since 2.10.0
 */
export declare const concatAll: <A>(S: Se.Semigroup<A>) => (as: NonEmptyArray<A>) => A;
/**
 * Break an `Array` into its first element and remaining elements.
 *
 * @category destructors
 * @since 2.11.0
 */
export declare const matchLeft: <A, B>(f: (head: A, tail: A[]) => B) => (as: NonEmptyArray<A>) => B;
/**
 * Break an `Array` into its initial elements and the last element.
 *
 * @category destructors
 * @since 2.11.0
 */
export declare const matchRight: <A, B>(f: (init: A[], last: A) => B) => (as: NonEmptyArray<A>) => B;
/**
 * Apply a function to the head, creating a new `NonEmptyArray`.
 *
 * @since 2.11.0
 */
export declare const modifyHead: <A>(f: Endomorphism<A>) => (as: NonEmptyArray<A>) => NonEmptyArray<A>;
/**
 * Change the head, creating a new `NonEmptyArray`.
 *
 * @category combinators
 * @since 2.11.0
 */
export declare const updateHead: <A>(a: A) => (as: NonEmptyArray<A>) => NonEmptyArray<A>;
/**
 * Apply a function to the last element, creating a new `NonEmptyArray`.
 *
 * @since 2.11.0
 */
export declare const modifyLast: <A>(f: Endomorphism<A>) => (as: NonEmptyArray<A>) => NonEmptyArray<A>;
/**
 * Change the last element, creating a new `NonEmptyArray`.
 *
 * @category combinators
 * @since 2.11.0
 */
export declare const updateLast: <A>(a: A) => (as: NonEmptyArray<A>) => NonEmptyArray<A>;
/**
 * This is just `sort` followed by `group`.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */
export declare function groupSort<B>(O: Ord<B>): {
    <A extends B>(as: NonEmptyArray<A>): NonEmptyArray<NonEmptyArray<A>>;
    <A extends B>(as: Array<A>): Array<NonEmptyArray<A>>;
};
/**
 * Use [`filter`](./Array.ts.html#filter) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */
export declare function filter<A, B extends A>(refinement: Refinement<A, B>): (as: NonEmptyArray<A>) => Option<NonEmptyArray<B>>;
export declare function filter<A>(predicate: Predicate<A>): <B extends A>(bs: NonEmptyArray<B>) => Option<NonEmptyArray<B>>;
export declare function filter<A>(predicate: Predicate<A>): (as: NonEmptyArray<A>) => Option<NonEmptyArray<A>>;
/**
 * Use [`filterWithIndex`](./Array.ts.html#filterwithindex) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */
export declare const filterWithIndex: <A>(predicate: (i: number, a: A) => boolean) => (as: NonEmptyArray<A>) => Option<NonEmptyArray<A>>;
/**
 * Use [`unprepend`](#unprepend) instead.
 *
 * @category destructors
 * @since 2.9.0
 * @deprecated
 */
export declare const uncons: <A>(as: NonEmptyArray<A>) => [A, Array<A>];
/**
 * Use [`unappend`](#unappend) instead.
 *
 * @category destructors
 * @since 2.9.0
 * @deprecated
 */
export declare const unsnoc: <A>(as: NonEmptyArray<A>) => [Array<A>, A];
/**
 * Use [`prepend`](./Array.ts.html#prepend) instead.
 *
 * @category constructors
 * @since 2.0.0
 * @deprecated
 */
export declare function cons<A>(head: A): (tail: Array<A>) => NonEmptyArray<A>;
/** @deprecated */
export declare function cons<A>(head: A, tail: Array<A>): NonEmptyArray<A>;
/**
 * Use [`append`](./Array.ts.html#append) instead.
 *
 * @category constructors
 * @since 2.0.0
 * @deprecated
 */
export declare const snoc: <A>(init: A[], end: A) => NonEmptyArray<A>;
/**
 * Use [`prependAll`](#prependall) instead.
 *
 * @category combinators
 * @since 2.9.0
 * @deprecated
 */
export declare const prependToAll: <A>(middle: A) => (as: NonEmptyArray<A>) => NonEmptyArray<A>;
/**
 * Use [`concatAll`](#concatall) instead.
 *
 * @since 2.5.0
 * @deprecated
 */
export declare const fold: <A>(S: Semigroup<A>) => (fa: NonEmptyArray<A>) => A;
/**
 * Use small, specific instances instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
export declare const nonEmptyArray: Monad1<URI> & Comonad1<URI> & TraversableWithIndex1<URI, number> & FunctorWithIndex1<URI, number> & FoldableWithIndex1<URI, number> & Alt1<URI>;