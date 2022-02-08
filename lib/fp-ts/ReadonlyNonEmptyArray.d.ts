/**
 * Data structure which represents non-empty readonly arrays.
 *
 * ```ts
 * export type ReadonlyNonEmptyArray<A> = ReadonlyArray<A> & {
 *   readonly 0: A
 * }
 * ```
 *
 * Note that you don't need any conversion, a `ReadonlyNonEmptyArray` is a `ReadonlyArray`,
 * so all `ReadonlyArray`'s APIs can be used with a `ReadonlyNonEmptyArray` without further ado.
 *
 * @since 2.5.0
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
import { ReadonlyRecord } from './ReadonlyRecord';
import { Refinement } from './Refinement';
import * as Se from './Semigroup';
import { Show } from './Show';
import { PipeableTraverse1, Traversable1 } from './Traversable';
import { PipeableTraverseWithIndex1, TraversableWithIndex1 } from './TraversableWithIndex';
import Semigroup = Se.Semigroup;
/**
 * @category model
 * @since 2.5.0
 */
export declare type ReadonlyNonEmptyArray<A> = ReadonlyArray<A> & {
    readonly 0: A;
};
/**
 * @internal
 */
export declare const empty: ReadonlyArray<never>;
/**
 * @internal
 */
export declare const isNonEmpty: <A>(as: ReadonlyArray<A>) => as is ReadonlyNonEmptyArray<A>;
/**
 * @internal
 */
export declare const isOutOfBound: <A>(i: number, as: readonly A[]) => boolean;
/**
 * @internal
 */
export declare const prependW: <B>(head: B) => <A>(tail: readonly A[]) => ReadonlyNonEmptyArray<B | A>;
/**
 * @internal
 */
export declare const prepend: <A>(head: A) => (tail: ReadonlyArray<A>) => ReadonlyNonEmptyArray<A>;
/**
 * @internal
 */
export declare const appendW: <B>(end: B) => <A>(init: readonly A[]) => ReadonlyNonEmptyArray<B | A>;
/**
 * @internal
 */
export declare const append: <A>(end: A) => (init: ReadonlyArray<A>) => ReadonlyNonEmptyArray<A>;
/**
 * @internal
 */
export declare const unsafeInsertAt: <A>(i: number, a: A, as: readonly A[]) => ReadonlyNonEmptyArray<A>;
/**
 * @internal
 */
export declare const unsafeUpdateAt: <A>(i: number, a: A, as: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<A>;
/**
 * Remove duplicates from a `ReadonlyNonEmptyArray`, keeping the first occurrence of an element.
 *
 * @example
 * import { uniq } from 'fp-ts/ReadonlyNonEmptyArray'
 * import * as N from 'fp-ts/number'
 *
 * assert.deepStrictEqual(uniq(N.Eq)([1, 2, 1]), [1, 2])
 *
 * @category combinators
 * @since 2.11.0
 */
export declare const uniq: <A>(E: Eq<A>) => (as: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<A>;
/**
 * Sort the elements of a `ReadonlyNonEmptyArray` in increasing order, where elements are compared using first `ords[0]`, then `ords[1]`,
 * etc...
 *
 * @example
 * import * as RNEA from 'fp-ts/ReadonlyNonEmptyArray'
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
 * const sortByNameByAge = RNEA.sortBy([byName, byAge])
 *
 * const persons: RNEA.ReadonlyNonEmptyArray<Person> = [
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
export declare const sortBy: <B>(ords: readonly Ord<B>[]) => <A extends B>(as: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<A>;
/**
 * @category combinators
 * @since 2.11.0
 */
export declare const union: <A>(E: Eq<A>) => (second: ReadonlyNonEmptyArray<A>) => (first: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<A>;
/**
 * Rotate a `ReadonlyNonEmptyArray` by `n` steps.
 *
 * @example
 * import { rotate } from 'fp-ts/ReadonlyNonEmptyArray'
 *
 * assert.deepStrictEqual(rotate(2)([1, 2, 3, 4, 5]), [4, 5, 1, 2, 3])
 * assert.deepStrictEqual(rotate(-2)([1, 2, 3, 4, 5]), [3, 4, 5, 1, 2])
 *
 * @category combinators
 * @since 2.11.0
 */
export declare const rotate: (n: number) => <A>(as: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<A>;
/**
 * Return a `ReadonlyNonEmptyArray` from a `ReadonlyArray` returning `none` if the input is empty.
 *
 * @category constructors
 * @since 2.5.0
 */
export declare const fromReadonlyArray: <A>(as: readonly A[]) => Option<ReadonlyNonEmptyArray<A>>;
/**
 * Return a `ReadonlyNonEmptyArray` of length `n` with element `i` initialized with `f(i)`.
 *
 * **Note**. `n` is normalized to a natural number.
 *
 * @example
 * import { makeBy } from 'fp-ts/ReadonlyNonEmptyArray'
 * import { pipe } from 'fp-ts/function'
 *
 * const double = (n: number): number => n * 2
 * assert.deepStrictEqual(pipe(5, makeBy(double)), [0, 2, 4, 6, 8])
 *
 * @category constructors
 * @since 2.11.0
 */
export declare const makeBy: <A>(f: (i: number) => A) => (n: number) => ReadonlyNonEmptyArray<A>;
/**
 * Create a `ReadonlyNonEmptyArray` containing a value repeated the specified number of times.
 *
 * **Note**. `n` is normalized to a natural number.
 *
 * @example
 * import { replicate } from 'fp-ts/ReadonlyNonEmptyArray'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.deepStrictEqual(pipe(3, replicate('a')), ['a', 'a', 'a'])
 *
 * @category constructors
 * @since 2.11.0
 */
export declare const replicate: <A>(a: A) => (n: number) => ReadonlyNonEmptyArray<A>;
/**
 * Create a `ReadonlyNonEmptyArray` containing a range of integers, including both endpoints.
 *
 * @example
 * import { range } from 'fp-ts/ReadonlyNonEmptyArray'
 *
 * assert.deepStrictEqual(range(1, 5), [1, 2, 3, 4, 5])
 *
 * @category constructors
 * @since 2.11.0
 */
export declare const range: (start: number, end: number) => ReadonlyNonEmptyArray<number>;
/**
 * Return the tuple of the `head` and the `tail`.
 *
 * @example
 * import { unprepend } from 'fp-ts/ReadonlyNonEmptyArray'
 *
 * assert.deepStrictEqual(unprepend([1, 2, 3, 4]), [1, [2, 3, 4]])
 *
 * @category destructors
 * @since 2.9.0
 */
export declare const unprepend: <A>(as: ReadonlyNonEmptyArray<A>) => readonly [A, readonly A[]];
/**
 * Return the tuple of the `init` and the `last`.
 *
 * @example
 * import { unappend } from 'fp-ts/ReadonlyNonEmptyArray'
 *
 * assert.deepStrictEqual(unappend([1, 2, 3, 4]), [[1, 2, 3], 4])
 *
 * @category destructors
 * @since 2.9.0
 */
export declare const unappend: <A>(as: ReadonlyNonEmptyArray<A>) => readonly [readonly A[], A];
/**
 * @category interop
 * @since 2.5.0
 */
export declare const fromArray: <A>(as: A[]) => Option<ReadonlyNonEmptyArray<A>>;
/**
 * @category combinators
 * @since 2.11.0
 */
export declare function concatW<B>(second: ReadonlyNonEmptyArray<B>): <A>(first: ReadonlyArray<A>) => ReadonlyNonEmptyArray<A | B>;
export declare function concatW<B>(second: ReadonlyArray<B>): <A>(first: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<A | B>;
/**
 * @category combinators
 * @since 2.5.0
 */
export declare function concat<A>(second: ReadonlyNonEmptyArray<A>): (first: ReadonlyArray<A>) => ReadonlyNonEmptyArray<A>;
export declare function concat<A>(second: ReadonlyArray<A>): (first: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<A>;
/** @deprecated */
export declare function concat<A>(first: ReadonlyArray<A>, second: ReadonlyNonEmptyArray<A>): ReadonlyNonEmptyArray<A>;
/** @deprecated */
export declare function concat<A>(first: ReadonlyNonEmptyArray<A>, second: ReadonlyArray<A>): ReadonlyNonEmptyArray<A>;
/**
 * @category combinators
 * @since 2.5.0
 */
export declare const reverse: <A>(as: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<A>;
/**
 * Group equal, consecutive elements of a `ReadonlyArray` into `ReadonlyNonEmptyArray`s.
 *
 * @example
 * import { group } from 'fp-ts/ReadonlyNonEmptyArray'
 * import * as N from 'fp-ts/number'
 *
 * assert.deepStrictEqual(group(N.Eq)([1, 2, 1, 1]), [
 *   [1],
 *   [2],
 *   [1, 1]
 * ])
 *
 * @category combinators
 * @since 2.5.0
 */
export declare function group<B>(E: Eq<B>): {
    <A extends B>(as: ReadonlyNonEmptyArray<A>): ReadonlyNonEmptyArray<ReadonlyNonEmptyArray<A>>;
    <A extends B>(as: ReadonlyArray<A>): ReadonlyArray<ReadonlyNonEmptyArray<A>>;
};
/**
 * Splits an array into sub-non-empty-arrays stored in an object, based on the result of calling a `string`-returning
 * function on each element, and grouping the results according to values returned
 *
 * @example
 * import { groupBy } from 'fp-ts/ReadonlyNonEmptyArray'
 *
 * assert.deepStrictEqual(groupBy((s: string) => String(s.length))(['a', 'b', 'ab']), {
 *   '1': ['a', 'b'],
 *   '2': ['ab']
 * })
 *
 * @category combinators
 * @since 2.5.0
 */
export declare const groupBy: <A>(f: (a: A) => string) => (as: readonly A[]) => Readonly<Record<string, ReadonlyNonEmptyArray<A>>>;
/**
 * @category combinators
 * @since 2.5.0
 */
export declare const sort: <B>(O: Ord<B>) => <A extends B>(as: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<A>;
/**
 * @category combinators
 * @since 2.5.0
 */
export declare const updateAt: <A>(i: number, a: A) => (as: ReadonlyNonEmptyArray<A>) => Option<ReadonlyNonEmptyArray<A>>;
/**
 * @category combinators
 * @since 2.5.0
 */
export declare const modifyAt: <A>(i: number, f: (a: A) => A) => (as: ReadonlyNonEmptyArray<A>) => Option<ReadonlyNonEmptyArray<A>>;
/**
 * @category combinators
 * @since 2.5.1
 */
export declare const zipWith: <A, B, C>(as: ReadonlyNonEmptyArray<A>, bs: ReadonlyNonEmptyArray<B>, f: (a: A, b: B) => C) => ReadonlyNonEmptyArray<C>;
/**
 * @category combinators
 * @since 2.5.1
 */
export declare function zip<B>(bs: ReadonlyNonEmptyArray<B>): <A>(as: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<readonly [A, B]>;
export declare function zip<A, B>(as: ReadonlyNonEmptyArray<A>, bs: ReadonlyNonEmptyArray<B>): ReadonlyNonEmptyArray<readonly [A, B]>;
/**
 * @category combinators
 * @since 2.5.1
 */
export declare const unzip: <A, B>(abs: ReadonlyNonEmptyArray<readonly [A, B]>) => readonly [ReadonlyNonEmptyArray<A>, ReadonlyNonEmptyArray<B>];
/**
 * Prepend an element to every member of a `ReadonlyNonEmptyArray`.
 *
 * @example
 * import { prependAll } from 'fp-ts/ReadonlyNonEmptyArray'
 *
 * assert.deepStrictEqual(prependAll(9)([1, 2, 3, 4]), [9, 1, 9, 2, 9, 3, 9, 4])
 *
 * @category combinators
 * @since 2.10.0
 */
export declare const prependAll: <A>(middle: A) => (as: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<A>;
/**
 * Places an element in between members of a `ReadonlyNonEmptyArray`.
 *
 * @example
 * import { intersperse } from 'fp-ts/ReadonlyNonEmptyArray'
 *
 * assert.deepStrictEqual(intersperse(9)([1, 2, 3, 4]), [1, 9, 2, 9, 3, 9, 4])
 *
 * @category combinators
 * @since 2.9.0
 */
export declare const intersperse: <A>(middle: A) => (as: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<A>;
/**
 * @category combinators
 * @since 2.10.0
 */
export declare const chainWithIndex: <A, B>(f: (i: number, a: A) => ReadonlyNonEmptyArray<B>) => (as: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<B>;
/**
 * A useful recursion pattern for processing a `ReadonlyNonEmptyArray` to produce a new `ReadonlyNonEmptyArray`, often used for "chopping" up the input
 * `ReadonlyNonEmptyArray`. Typically `chop` is called with some function that will consume an initial prefix of the `ReadonlyNonEmptyArray` and produce a
 * value and the tail of the `ReadonlyNonEmptyArray`.
 *
 * @category combinators
 * @since 2.10.0
 */
export declare const chop: <A, B>(f: (as: ReadonlyNonEmptyArray<A>) => readonly [B, readonly A[]]) => (as: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<B>;
/**
 * Splits a `ReadonlyNonEmptyArray` into two pieces, the first piece has max `n` elements.
 *
 * @category combinators
 * @since 2.10.0
 */
export declare const splitAt: (n: number) => <A>(as: ReadonlyNonEmptyArray<A>) => readonly [ReadonlyNonEmptyArray<A>, readonly A[]];
/**
 * Splits a `ReadonlyNonEmptyArray` into length-`n` pieces. The last piece will be shorter if `n` does not evenly divide the length of
 * the `ReadonlyNonEmptyArray`.
 *
 * @category combinators
 * @since 2.10.0
 */
export declare const chunksOf: (n: number) => <A>(as: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<ReadonlyNonEmptyArray<A>>;
/**
 * @category Pointed
 * @since 2.5.0
 */
export declare const of: Pointed1<URI>['of'];
/**
 * Less strict version of [`alt`](#alt).
 *
 * @category Alt
 * @since 2.9.0
 */
export declare const altW: <B>(that: Lazy<ReadonlyNonEmptyArray<B>>) => <A>(as: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<B | A>;
/**
 * Identifies an associative operation on a type constructor. It is similar to `Semigroup`, except that it applies to
 * types of kind `* -> *`.
 *
 * @category Alt
 * @since 2.6.2
 */
export declare const alt: <A>(that: Lazy<ReadonlyNonEmptyArray<A>>) => (as: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<A>;
/**
 * @category Apply
 * @since 2.5.0
 */
export declare const ap: <A>(as: ReadonlyNonEmptyArray<A>) => <B>(fab: ReadonlyNonEmptyArray<(a: A) => B>) => ReadonlyNonEmptyArray<B>;
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation.
 *
 * @category Monad
 * @since 2.5.0
 */
export declare const chain: <A, B>(f: (a: A) => ReadonlyNonEmptyArray<B>) => (ma: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<B>;
/**
 * @category Extend
 * @since 2.5.0
 */
export declare const extend: <A, B>(f: (as: ReadonlyNonEmptyArray<A>) => B) => (as: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<B>;
/**
 * Derivable from `Extend`.
 *
 * @category combinators
 * @since 2.5.0
 */
export declare const duplicate: <A>(ma: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<ReadonlyNonEmptyArray<A>>;
/**
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.5.0
 */
export declare const flatten: <A>(mma: ReadonlyNonEmptyArray<ReadonlyNonEmptyArray<A>>) => ReadonlyNonEmptyArray<A>;
/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent some computational context.
 *
 * @category Functor
 * @since 2.5.0
 */
export declare const map: <A, B>(f: (a: A) => B) => (as: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<B>;
/**
 * @category FunctorWithIndex
 * @since 2.5.0
 */
export declare const mapWithIndex: <A, B>(f: (i: number, a: A) => B) => (as: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<B>;
/**
 * @category Foldable
 * @since 2.5.0
 */
export declare const reduce: <A, B>(b: B, f: (b: B, a: A) => B) => (as: ReadonlyNonEmptyArray<A>) => B;
/**
 * **Note**. The constraint is relaxed: a `Semigroup` instead of a `Monoid`.
 *
 * @category Foldable
 * @since 2.5.0
 */
export declare const foldMap: <S>(S: Se.Semigroup<S>) => <A>(f: (a: A) => S) => (as: ReadonlyNonEmptyArray<A>) => S;
/**
 * @category Foldable
 * @since 2.5.0
 */
export declare const reduceRight: <A, B>(b: B, f: (a: A, b: B) => B) => (as: ReadonlyNonEmptyArray<A>) => B;
/**
 * @category FoldableWithIndex
 * @since 2.5.0
 */
export declare const reduceWithIndex: <A, B>(b: B, f: (i: number, b: B, a: A) => B) => (as: ReadonlyNonEmptyArray<A>) => B;
/**
 * **Note**. The constraint is relaxed: a `Semigroup` instead of a `Monoid`.
 *
 * @category FoldableWithIndex
 * @since 2.5.0
 */
export declare const foldMapWithIndex: <S>(S: Se.Semigroup<S>) => <A>(f: (i: number, a: A) => S) => (as: ReadonlyNonEmptyArray<A>) => S;
/**
 * @category FoldableWithIndex
 * @since 2.5.0
 */
export declare const reduceRightWithIndex: <A, B>(b: B, f: (i: number, a: A, b: B) => B) => (as: ReadonlyNonEmptyArray<A>) => B;
/**
 * @category Traversable
 * @since 2.6.3
 */
export declare const traverse: PipeableTraverse1<URI>;
/**
 * @category Traversable
 * @since 2.6.3
 */
export declare const sequence: Traversable1<URI>['sequence'];
/**
 * @category TraversableWithIndex
 * @since 2.6.3
 */
export declare const traverseWithIndex: PipeableTraverseWithIndex1<URI, number>;
/**
 * @category Comonad
 * @since 2.6.3
 */
export declare const extract: Comonad1<URI>['extract'];
/**
 * @category instances
 * @since 2.5.0
 */
export declare const URI = "ReadonlyNonEmptyArray";
/**
 * @category instances
 * @since 2.5.0
 */
export declare type URI = typeof URI;
declare module './HKT' {
    interface URItoKind<A> {
        readonly [URI]: ReadonlyNonEmptyArray<A>;
    }
}
/**
 * @category instances
 * @since 2.5.0
 */
export declare const getShow: <A>(S: Show<A>) => Show<ReadonlyNonEmptyArray<A>>;
/**
 * Builds a `Semigroup` instance for `ReadonlyNonEmptyArray`
 *
 * @category instances
 * @since 2.5.0
 */
export declare const getSemigroup: <A = never>() => Se.Semigroup<ReadonlyNonEmptyArray<A>>;
/**
 * @example
 * import { getEq } from 'fp-ts/ReadonlyNonEmptyArray'
 * import * as N from 'fp-ts/number'
 *
 * const E = getEq(N.Eq)
 * assert.strictEqual(E.equals([1, 2], [1, 2]), true)
 * assert.strictEqual(E.equals([1, 2], [1, 3]), false)
 *
 * @category instances
 * @since 2.5.0
 */
export declare const getEq: <A>(E: Eq<A>) => Eq<ReadonlyNonEmptyArray<A>>;
/**
 * @category combinators
 * @since 2.11.0
 */
export declare const getUnionSemigroup: <A>(E: Eq<A>) => Se.Semigroup<ReadonlyNonEmptyArray<A>>;
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
export declare const flap: <A>(a: A) => <B>(fab: ReadonlyNonEmptyArray<(a: A) => B>) => ReadonlyNonEmptyArray<B>;
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
export declare const apFirst: <B>(second: ReadonlyNonEmptyArray<B>) => <A>(first: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<A>;
/**
 * Combine two effectful actions, keeping only the result of the second.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.5.0
 */
export declare const apSecond: <B>(second: ReadonlyNonEmptyArray<B>) => <A>(first: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<B>;
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
export declare const chainFirst: <A, B>(f: (a: A) => ReadonlyNonEmptyArray<B>) => (first: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<A>;
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
export declare const Do: ReadonlyNonEmptyArray<{}>;
/**
 * @since 2.8.0
 */
export declare const bindTo: <N extends string>(name: N) => <A>(fa: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<{ readonly [K in N]: A; }>;
/**
 * @since 2.8.0
 */
export declare const bind: <N extends string, A, B>(name: Exclude<N, keyof A>, f: (a: A) => ReadonlyNonEmptyArray<B>) => (ma: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<{ readonly [K in N | keyof A]: K extends keyof A ? A[K] : B; }>;
/**
 * @since 2.8.0
 */
export declare const apS: <N extends string, A, B>(name: Exclude<N, keyof A>, fb: ReadonlyNonEmptyArray<B>) => (fa: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<{ readonly [K in N | keyof A]: K extends keyof A ? A[K] : B; }>;
/**
 * @since 2.5.0
 */
export declare const head: <A>(as: ReadonlyNonEmptyArray<A>) => A;
/**
 * @since 2.5.0
 */
export declare const tail: <A>(as: ReadonlyNonEmptyArray<A>) => ReadonlyArray<A>;
/**
 * @since 2.5.0
 */
export declare const last: <A>(as: ReadonlyNonEmptyArray<A>) => A;
/**
 * Get all but the last element of a non empty array, creating a new array.
 *
 * @example
 * import { init } from 'fp-ts/ReadonlyNonEmptyArray'
 *
 * assert.deepStrictEqual(init([1, 2, 3]), [1, 2])
 * assert.deepStrictEqual(init([1]), [])
 *
 * @since 2.5.0
 */
export declare const init: <A>(as: ReadonlyNonEmptyArray<A>) => readonly A[];
/**
 * @since 2.5.0
 */
export declare const min: <A>(O: Ord<A>) => (as: ReadonlyNonEmptyArray<A>) => A;
/**
 * @since 2.5.0
 */
export declare const max: <A>(O: Ord<A>) => (as: ReadonlyNonEmptyArray<A>) => A;
/**
 * @since 2.10.0
 */
export declare const concatAll: <A>(S: Se.Semigroup<A>) => (as: ReadonlyNonEmptyArray<A>) => A;
/**
 * Break a `ReadonlyArray` into its first element and remaining elements.
 *
 * @category destructors
 * @since 2.11.0
 */
export declare const matchLeft: <A, B>(f: (head: A, tail: readonly A[]) => B) => (as: ReadonlyNonEmptyArray<A>) => B;
/**
 * Break a `ReadonlyArray` into its initial elements and the last element.
 *
 * @category destructors
 * @since 2.11.0
 */
export declare const matchRight: <A, B>(f: (init: readonly A[], last: A) => B) => (as: ReadonlyNonEmptyArray<A>) => B;
/**
 * Apply a function to the head, creating a new `ReadonlyNonEmptyArray`.
 *
 * @since 2.11.0
 */
export declare const modifyHead: <A>(f: Endomorphism<A>) => (as: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<A>;
/**
 * Change the head, creating a new `ReadonlyNonEmptyArray`.
 *
 * @category combinators
 * @since 2.11.0
 */
export declare const updateHead: <A>(a: A) => (as: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<A>;
/**
 * Apply a function to the last element, creating a new `ReadonlyNonEmptyArray`.
 *
 * @since 2.11.0
 */
export declare const modifyLast: <A>(f: Endomorphism<A>) => (as: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<A>;
/**
 * Change the last element, creating a new `ReadonlyNonEmptyArray`.
 *
 * @category combinators
 * @since 2.11.0
 */
export declare const updateLast: <A>(a: A) => (as: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<A>;
/**
 * This is just `sort` followed by `group`.
 *
 * @category combinators
 * @since 2.5.0
 * @deprecated
 */
export declare function groupSort<B>(O: Ord<B>): {
    <A extends B>(as: ReadonlyNonEmptyArray<A>): ReadonlyNonEmptyArray<ReadonlyNonEmptyArray<A>>;
    <A extends B>(as: ReadonlyArray<A>): ReadonlyArray<ReadonlyNonEmptyArray<A>>;
};
/**
 * Use [`filter`](./ReadonlyArray.ts.html#filter) instead.
 *
 * @category combinators
 * @since 2.5.0
 * @deprecated
 */
export declare function filter<A, B extends A>(refinement: Refinement<A, B>): (as: ReadonlyNonEmptyArray<A>) => Option<ReadonlyNonEmptyArray<B>>;
export declare function filter<A>(predicate: Predicate<A>): <B extends A>(bs: ReadonlyNonEmptyArray<B>) => Option<ReadonlyNonEmptyArray<B>>;
export declare function filter<A>(predicate: Predicate<A>): (as: ReadonlyNonEmptyArray<A>) => Option<ReadonlyNonEmptyArray<A>>;
/**
 * Use [`filterWithIndex`](./ReadonlyArray.ts.html#filterwithindex) instead.
 *
 * @category combinators
 * @since 2.5.0
 * @deprecated
 */
export declare const filterWithIndex: <A>(predicate: (i: number, a: A) => boolean) => (as: ReadonlyNonEmptyArray<A>) => Option<ReadonlyNonEmptyArray<A>>;
/**
 * Use [`unprepend`](#unprepend) instead.
 *
 * @category destructors
 * @since 2.10.0
 * @deprecated
 */
export declare const uncons: <A>(as: ReadonlyNonEmptyArray<A>) => readonly [A, ReadonlyArray<A>];
/**
 * Use [`unappend`](#unappend) instead.
 *
 * @category destructors
 * @since 2.10.0
 * @deprecated
 */
export declare const unsnoc: <A>(as: ReadonlyNonEmptyArray<A>) => readonly [ReadonlyArray<A>, A];
/**
 * Use [`prepend`](./ReadonlyArray.ts.html#prepend) instead.
 *
 * @category constructors
 * @since 2.5.0
 * @deprecated
 */
export declare function cons<A>(head: A): (tail: ReadonlyArray<A>) => ReadonlyNonEmptyArray<A>;
/** @deprecated */
export declare function cons<A>(head: A, tail: ReadonlyArray<A>): ReadonlyNonEmptyArray<A>;
/**
 * Use [`append`](./ReadonlyArray.ts.html#append) instead.
 *
 * @category constructors
 * @since 2.5.0
 * @deprecated
 */
export declare const snoc: <A>(init: readonly A[], end: A) => ReadonlyNonEmptyArray<A>;
/**
 * Use [`insertAt`](./ReadonlyArray.ts.html#insertat) instead.
 *
 * @category combinators
 * @since 2.5.0
 * @deprecated
 */
export declare const insertAt: <A>(i: number, a: A) => (as: readonly A[]) => Option<ReadonlyNonEmptyArray<A>>;
/**
 * Use [`prependAll`](#prependall) instead.
 *
 * @category combinators
 * @since 2.9.0
 * @deprecated
 */
export declare const prependToAll: <A>(middle: A) => (as: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<A>;
/**
 * Use [`concatAll`](#concatall) instead.
 *
 * @since 2.5.0
 * @deprecated
 */
export declare const fold: <A>(S: Se.Semigroup<A>) => (as: ReadonlyNonEmptyArray<A>) => A;
/**
 * Use small, specific instances instead.
 *
 * @category instances
 * @since 2.5.0
 * @deprecated
 */
export declare const readonlyNonEmptyArray: Monad1<URI> & Comonad1<URI> & TraversableWithIndex1<URI, number> & FunctorWithIndex1<URI, number> & FoldableWithIndex1<URI, number> & Alt1<URI>;
