/**
 * ```ts
 * type Either<E, A> = Left<E> | Right<A>
 * ```
 *
 * Represents a value of one of two possible types (a disjoint union).
 *
 * An instance of `Either` is either an instance of `Left` or `Right`.
 *
 * A common use of `Either` is as an alternative to `Option` for dealing with possible missing values. In this usage,
 * `None` is replaced with a `Left` which can contain useful information. `Right` takes the place of `Some`. Convention
 * dictates that `Left` is used for failure and `Right` is used for success.
 *
 * @since 2.0.0
 */
import { Alt2, Alt2C } from './Alt';
import { Applicative2, Applicative2C } from './Applicative';
import { Apply2 } from './Apply';
import { Bifunctor2 } from './Bifunctor';
import { Chain2 } from './Chain';
import { ChainRec2, ChainRec2C } from './ChainRec';
import { Compactable2C } from './Compactable';
import { Eq } from './Eq';
import { Extend2 } from './Extend';
import { Filterable2C } from './Filterable';
import { Foldable2 } from './Foldable';
import { FromEither2 } from './FromEither';
import { Lazy } from './function';
import { Functor2 } from './Functor';
import { Monad2, Monad2C } from './Monad';
import { MonadThrow2, MonadThrow2C } from './MonadThrow';
import { Monoid } from './Monoid';
import { Pointed2 } from './Pointed';
import { Predicate } from './Predicate';
import { ReadonlyNonEmptyArray } from './ReadonlyNonEmptyArray';
import { Refinement } from './Refinement';
import { Semigroup } from './Semigroup';
import { Show } from './Show';
import { PipeableTraverse2, Traversable2 } from './Traversable';
import { Witherable2C } from './Witherable';
/**
 * @category model
 * @since 2.0.0
 */
export interface Left<E> {
    readonly _tag: 'Left';
    readonly left: E;
}
/**
 * @category model
 * @since 2.0.0
 */
export interface Right<A> {
    readonly _tag: 'Right';
    readonly right: A;
}
/**
 * @category model
 * @since 2.0.0
 */
export declare type Either<E, A> = Left<E> | Right<A>;
/**
 * Constructs a new `Either` holding a `Left` value. This usually represents a failure, due to the right-bias of this
 * structure.
 *
 * @category constructors
 * @since 2.0.0
 */
export declare const left: <E = never, A = never>(e: E) => Either<E, A>;
/**
 * Constructs a new `Either` holding a `Right` value. This usually represents a successful value due to the right bias
 * of this structure.
 *
 * @category constructors
 * @since 2.0.0
 */
export declare const right: <E = never, A = never>(a: A) => Either<E, A>;
/**
 * @category instances
 * @since 2.0.0
 */
export declare const URI = "Either";
/**
 * @category instances
 * @since 2.0.0
 */
export declare type URI = typeof URI;
declare module './HKT' {
    interface URItoKind2<E, A> {
        readonly [URI]: Either<E, A>;
    }
}
/**
 * @category instances
 * @since 2.0.0
 */
export declare const getShow: <E, A>(SE: Show<E>, SA: Show<A>) => Show<Either<E, A>>;
/**
 * @category instances
 * @since 2.0.0
 */
export declare const getEq: <E, A>(EL: Eq<E>, EA: Eq<A>) => Eq<Either<E, A>>;
/**
 * Semigroup returning the left-most non-`Left` value. If both operands are `Right`s then the inner values are
 * concatenated using the provided `Semigroup`
 *
 * @example
 * import { getSemigroup, left, right } from 'fp-ts/Either'
 * import { SemigroupSum } from 'fp-ts/number'
 *
 * const S = getSemigroup<string, number>(SemigroupSum)
 * assert.deepStrictEqual(S.concat(left('a'), left('b')), left('a'))
 * assert.deepStrictEqual(S.concat(left('a'), right(2)), right(2))
 * assert.deepStrictEqual(S.concat(right(1), left('b')), right(1))
 * assert.deepStrictEqual(S.concat(right(1), right(2)), right(3))
 *
 * @category instances
 * @since 2.0.0
 */
export declare const getSemigroup: <E, A>(S: Semigroup<A>) => Semigroup<Either<E, A>>;
/**
 * Builds a `Compactable` instance for `Either` given `Monoid` for the left side.
 *
 * @category instances
 * @since 2.10.0
 */
export declare const getCompactable: <E>(M: Monoid<E>) => Compactable2C<"Either", E>;
/**
 * Builds a `Filterable` instance for `Either` given `Monoid` for the left side
 *
 * @category instances
 * @since 2.10.0
 */
export declare const getFilterable: <E>(M: Monoid<E>) => Filterable2C<"Either", E>;
/**
 * Builds `Witherable` instance for `Either` given `Monoid` for the left side
 *
 * @category instances
 * @since 2.0.0
 */
export declare const getWitherable: <E>(M: Monoid<E>) => Witherable2C<"Either", E>;
/**
 * @category instances
 * @since 2.7.0
 */
export declare const getApplicativeValidation: <E>(SE: Semigroup<E>) => Applicative2C<"Either", E>;
/**
 * @category instances
 * @since 2.7.0
 */
export declare const getAltValidation: <E>(SE: Semigroup<E>) => Alt2C<"Either", E>;
/**
 * @category instance operations
 * @since 2.0.0
 */
export declare const map: <A, B>(f: (a: A) => B) => <E>(fa: Either<E, A>) => Either<E, B>;
/**
 * @category instances
 * @since 2.7.0
 */
export declare const Functor: Functor2<URI>;
/**
 * @category instance operations
 * @since 2.7.0
 */
export declare const of: <E = never, A = never>(a: A) => Either<E, A>;
/**
 * @category instances
 * @since 2.10.0
 */
export declare const Pointed: Pointed2<URI>;
/**
 * Less strict version of [`ap`](#ap).
 *
 * @category instance operations
 * @since 2.8.0
 */
export declare const apW: <E2, A>(fa: Either<E2, A>) => <E1, B>(fab: Either<E1, (a: A) => B>) => Either<E1 | E2, B>;
/**
 * Apply a function to an argument under a type constructor.
 *
 * @category instance operations
 * @since 2.0.0
 */
export declare const ap: <E, A>(fa: Either<E, A>) => <B>(fab: Either<E, (a: A) => B>) => Either<E, B>;
/**
 * @category instances
 * @since 2.10.0
 */
export declare const Apply: Apply2<URI>;
/**
 * @category instances
 * @since 2.7.0
 */
export declare const Applicative: Applicative2<URI>;
/**
 * Less strict version of [`chain`](#chain).
 *
 * @category instance operations
 * @since 2.6.0
 */
export declare const chainW: <E2, A, B>(f: (a: A) => Either<E2, B>) => <E1>(ma: Either<E1, A>) => Either<E2 | E1, B>;
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation.
 *
 * @category instance operations
 * @since 2.0.0
 */
export declare const chain: <E, A, B>(f: (a: A) => Either<E, B>) => (ma: Either<E, A>) => Either<E, B>;
/**
 * @category instances
 * @since 2.10.0
 */
export declare const Chain: Chain2<URI>;
/**
 * @category instances
 * @since 2.7.0
 */
export declare const Monad: Monad2<URI>;
/**
 * Left-associative fold of a structure.
 *
 * @example
 * import { pipe } from 'fp-ts/function'
 * import * as E from 'fp-ts/Either'
 *
 * const startWith = 'prefix'
 * const concat = (a: string, b: string) => `${a}:${b}`
 *
 * assert.deepStrictEqual(
 *   pipe(E.right('a'), E.reduce(startWith, concat)),
 *   'prefix:a'
 * )
 *
 * assert.deepStrictEqual(
 *   pipe(E.left('e'), E.reduce(startWith, concat)),
 *   'prefix'
 * )
 *
 * @category instance operations
 * @since 2.0.0
 */
export declare const reduce: <A, B>(b: B, f: (b: B, a: A) => B) => <E>(fa: Either<E, A>) => B;
/**
 * Map each element of the structure to a monoid, and combine the results.
 *
 * @example
 * import { pipe } from 'fp-ts/function'
 * import * as E from 'fp-ts/Either'
 * import * as S from 'fp-ts/string'
 *
 * const yell = (a: string) => `${a}!`
 *
 * assert.deepStrictEqual(
 *   pipe(E.right('a'), E.foldMap(S.Monoid)(yell)),
 *   'a!'
 * )
 *
 * assert.deepStrictEqual(
 *   pipe(E.left('e'), E.foldMap(S.Monoid)(yell)),
 *   S.Monoid.empty
 * )
 *
 * @category instance operations
 * @since 2.0.0
 */
export declare const foldMap: <M>(M: Monoid<M>) => <A>(f: (a: A) => M) => <E>(fa: Either<E, A>) => M;
/**
 * Right-associative fold of a structure.
 *
 * @example
 * import { pipe } from 'fp-ts/function'
 * import * as E from 'fp-ts/Either'
 *
 * const startWith = 'postfix'
 * const concat = (a: string, b: string) => `${a}:${b}`
 *
 * assert.deepStrictEqual(
 *   pipe(E.right('a'), E.reduceRight(startWith, concat)),
 *   'a:postfix'
 * )
 *
 * assert.deepStrictEqual(
 *   pipe(E.left('e'), E.reduceRight(startWith, concat)),
 *   'postfix'
 * )
 *
 * @category instance operations
 * @since 2.0.0
 */
export declare const reduceRight: <A, B>(b: B, f: (a: A, b: B) => B) => <E>(fa: Either<E, A>) => B;
/**
 * @category instances
 * @since 2.7.0
 */
export declare const Foldable: Foldable2<URI>;
/**
 * Map each element of a structure to an action, evaluate these actions from left to right, and collect the results.
 *
 * @example
 * import { pipe } from 'fp-ts/function'
 * import * as RA from 'fp-ts/ReadonlyArray'
 * import * as E from 'fp-ts/Either'
 * import * as O from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(
 *   pipe(E.right(['a']), E.traverse(O.Applicative)(RA.head)),
 *   O.some(E.right('a'))
 *  )
 *
 * assert.deepStrictEqual(
 *   pipe(E.right([]), E.traverse(O.Applicative)(RA.head)),
 *   O.none
 * )
 *
 * @category instance operations
 * @since 2.6.3
 */
export declare const traverse: PipeableTraverse2<URI>;
/**
 * Evaluate each monadic action in the structure from left to right, and collect the results.
 *
 * @example
 * import { pipe } from 'fp-ts/function'
 * import * as E from 'fp-ts/Either'
 * import * as O from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(
 *   pipe(E.right(O.some('a')), E.sequence(O.Applicative)),
 *   O.some(E.right('a'))
 *  )
 *
 * assert.deepStrictEqual(
 *   pipe(E.right(O.none), E.sequence(O.Applicative)),
 *   O.none
 * )
 *
 * @category instance operations
 * @since 2.6.3
 */
export declare const sequence: Traversable2<URI>['sequence'];
/**
 * @category instances
 * @since 2.7.0
 */
export declare const Traversable: Traversable2<URI>;
/**
 * Map a pair of functions over the two type arguments of the bifunctor.
 *
 * @category instance operations
 * @since 2.0.0
 */
export declare const bimap: <E, G, A, B>(f: (e: E) => G, g: (a: A) => B) => (fa: Either<E, A>) => Either<G, B>;
/**
 * Map a function over the first type argument of a bifunctor.
 *
 * @category instance operations
 * @since 2.0.0
 */
export declare const mapLeft: <E, G>(f: (e: E) => G) => <A>(fa: Either<E, A>) => Either<G, A>;
/**
 * @category instances
 * @since 2.7.0
 */
export declare const Bifunctor: Bifunctor2<URI>;
/**
 * Less strict version of [`alt`](#alt).
 *
 * @category instance operations
 * @since 2.9.0
 */
export declare const altW: <E2, B>(that: Lazy<Either<E2, B>>) => <E1, A>(fa: Either<E1, A>) => Either<E2, A | B>;
/**
 * Identifies an associative operation on a type constructor. It is similar to `Semigroup`, except that it applies to
 * types of kind `* -> *`.
 *
 * @category instance operations
 * @since 2.0.0
 */
export declare const alt: <E, A>(that: Lazy<Either<E, A>>) => (fa: Either<E, A>) => Either<E, A>;
/**
 * @category instances
 * @since 2.7.0
 */
export declare const Alt: Alt2<URI>;
/**
 * @category instance operations
 * @since 2.0.0
 */
export declare const extend: <E, A, B>(f: (wa: Either<E, A>) => B) => (wa: Either<E, A>) => Either<E, B>;
/**
 * @category instances
 * @since 2.7.0
 */
export declare const Extend: Extend2<URI>;
/**
 * @category instances
 * @since 2.7.0
 */
export declare const ChainRec: ChainRec2<URI>;
/**
 * @category instance operations
 * @since 2.6.3
 */
export declare const throwError: MonadThrow2<URI>['throwError'];
/**
 * @category instances
 * @since 2.7.0
 */
export declare const MonadThrow: MonadThrow2<URI>;
/**
 * @category instances
 * @since 2.10.0
 */
export declare const FromEither: FromEither2<URI>;
/**
 * @example
 * import { fromPredicate, left, right } from 'fp-ts/Either'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.deepStrictEqual(
 *   pipe(
 *     1,
 *     fromPredicate(
 *       (n) => n > 0,
 *       () => 'error'
 *     )
 *   ),
 *   right(1)
 * )
 * assert.deepStrictEqual(
 *   pipe(
 *     -1,
 *     fromPredicate(
 *       (n) => n > 0,
 *       () => 'error'
 *     )
 *   ),
 *   left('error')
 * )
 *
 * @category constructors
 * @since 2.0.0
 */
export declare const fromPredicate: {
    <A, B extends A, E>(refinement: Refinement<A, B>, onFalse: (a: A) => E): (a: A) => Either<E, B>;
    <A_1, E_1>(predicate: Predicate<A_1>, onFalse: (a: A_1) => E_1): <B_1 extends A_1>(b: B_1) => Either<E_1, B_1>;
    <A_2, E_2>(predicate: Predicate<A_2>, onFalse: (a: A_2) => E_2): (a: A_2) => Either<E_2, A_2>;
};
/**
 * @example
 * import * as E from 'fp-ts/Either'
 * import { pipe } from 'fp-ts/function'
 * import * as O from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(
 *   pipe(
 *     O.some(1),
 *     E.fromOption(() => 'error')
 *   ),
 *   E.right(1)
 * )
 * assert.deepStrictEqual(
 *   pipe(
 *     O.none,
 *     E.fromOption(() => 'error')
 *   ),
 *   E.left('error')
 * )
 *
 * @category natural transformations
 * @since 2.0.0
 */
export declare const fromOption: <E>(onNone: Lazy<E>) => import("./NaturalTransformation").NaturalTransformation12C<"Option", "Either", E>;
/**
 * Returns `true` if the either is an instance of `Left`, `false` otherwise.
 *
 * @category refinements
 * @since 2.0.0
 */
export declare const isLeft: <E>(ma: Either<E, unknown>) => ma is Left<E>;
/**
 * Returns `true` if the either is an instance of `Right`, `false` otherwise.
 *
 * @category refinements
 * @since 2.0.0
 */
export declare const isRight: <A>(ma: Either<unknown, A>) => ma is Right<A>;
/**
 * Less strict version of [`match`](#match).
 *
 * @category destructors
 * @since 2.10.0
 */
export declare const matchW: <E, B, A, C>(onLeft: (e: E) => B, onRight: (a: A) => C) => (ma: Either<E, A>) => B | C;
/**
 * Alias of [`matchW`](#matchw).
 *
 * @category destructors
 * @since 2.10.0
 */
export declare const foldW: <E, B, A, C>(onLeft: (e: E) => B, onRight: (a: A) => C) => (ma: Either<E, A>) => B | C;
/**
 * Takes two functions and an `Either` value, if the value is a `Left` the inner value is applied to the first function,
 * if the value is a `Right` the inner value is applied to the second function.
 *
 * @example
 * import { match, left, right } from 'fp-ts/Either'
 * import { pipe } from 'fp-ts/function'
 *
 * function onLeft(errors: Array<string>): string {
 *   return `Errors: ${errors.join(', ')}`
 * }
 *
 * function onRight(value: number): string {
 *   return `Ok: ${value}`
 * }
 *
 * assert.strictEqual(
 *   pipe(
 *     right(1),
 *     match(onLeft, onRight)
 *   ),
 *   'Ok: 1'
 * )
 * assert.strictEqual(
 *   pipe(
 *     left(['error 1', 'error 2']),
 *     match(onLeft, onRight)
 *   ),
 *   'Errors: error 1, error 2'
 * )
 *
 * @category destructors
 * @since 2.10.0
 */
export declare const match: <E, A, B>(onLeft: (e: E) => B, onRight: (a: A) => B) => (ma: Either<E, A>) => B;
/**
 * Alias of [`match`](#match).
 *
 * @category destructors
 * @since 2.0.0
 */
export declare const fold: <E, A, B>(onLeft: (e: E) => B, onRight: (a: A) => B) => (ma: Either<E, A>) => B;
/**
 * Less strict version of [`getOrElse`](#getorelse).
 *
 * @category destructors
 * @since 2.6.0
 */
export declare const getOrElseW: <E, B>(onLeft: (e: E) => B) => <A>(ma: Either<E, A>) => B | A;
/**
 * Returns the wrapped value if it's a `Right` or a default value if is a `Left`.
 *
 * @example
 * import { getOrElse, left, right } from 'fp-ts/Either'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.deepStrictEqual(
 *   pipe(
 *     right(1),
 *     getOrElse(() => 0)
 *   ),
 *   1
 * )
 * assert.deepStrictEqual(
 *   pipe(
 *     left('error'),
 *     getOrElse(() => 0)
 *   ),
 *   0
 * )
 *
 * @category destructors
 * @since 2.0.0
 */
export declare const getOrElse: <E, A>(onLeft: (e: E) => A) => (ma: Either<E, A>) => A;
/**
 * Derivable from `Functor`.
 *
 * @category combinators
 * @since 2.10.0
 */
export declare const flap: <A>(a: A) => <E, B>(fab: Either<E, (a: A) => B>) => Either<E, B>;
/**
 * Combine two effectful actions, keeping only the result of the first.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.0.0
 */
export declare const apFirst: <E, B>(second: Either<E, B>) => <A>(first: Either<E, A>) => Either<E, A>;
/**
 * Combine two effectful actions, keeping only the result of the second.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.0.0
 */
export declare const apSecond: <E, B>(second: Either<E, B>) => <A>(first: Either<E, A>) => Either<E, B>;
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation and
 * keeping only the result of the first.
 *
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.0.0
 */
export declare const chainFirst: <E, A, B>(f: (a: A) => Either<E, B>) => (ma: Either<E, A>) => Either<E, A>;
/**
 * Less strict version of [`chainFirst`](#chainfirst)
 *
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.8.0
 */
export declare const chainFirstW: <E2, A, B>(f: (a: A) => Either<E2, B>) => <E1>(ma: Either<E1, A>) => Either<E1 | E2, A>;
/**
 * Less strict version of [`flatten`](#flatten).
 *
 * @category combinators
 * @since 2.11.0
 */
export declare const flattenW: <E1, E2, A>(mma: Either<E1, Either<E2, A>>) => Either<E1 | E2, A>;
/**
 * The `flatten` function is the conventional monad join operator. It is used to remove one level of monadic structure, projecting its bound argument into the outer level.
 *
 * Derivable from `Chain`.
 *
 * @example
 * import * as E from 'fp-ts/Either'
 *
 * assert.deepStrictEqual(E.flatten(E.right(E.right('a'))), E.right('a'))
 * assert.deepStrictEqual(E.flatten(E.right(E.left('e'))), E.left('e'))
 * assert.deepStrictEqual(E.flatten(E.left('e')), E.left('e'))
 *
 * @category combinators
 * @since 2.0.0
 */
export declare const flatten: <E, A>(mma: Either<E, Either<E, A>>) => Either<E, A>;
/**
 * Derivable from `Extend`.
 *
 * @category combinators
 * @since 2.0.0
 */
export declare const duplicate: <E, A>(ma: Either<E, A>) => Either<E, Either<E, A>>;
/**
 * @category combinators
 * @since 2.10.0
 */
export declare const fromOptionK: <E>(onNone: Lazy<E>) => <A extends readonly unknown[], B>(f: (...a: A) => import("./Option").Option<B>) => (...a: A) => Either<E, B>;
/**
 * @category combinators
 * @since 2.11.0
 */
export declare const chainOptionK: <E>(onNone: Lazy<E>) => <A, B>(f: (a: A) => import("./Option").Option<B>) => (ma: Either<E, A>) => Either<E, B>;
/**
 * @example
 * import * as E from 'fp-ts/Either'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.deepStrictEqual(
 *   pipe(
 *     E.right(1),
 *     E.filterOrElse(
 *       (n) => n > 0,
 *       () => 'error'
 *     )
 *   ),
 *   E.right(1)
 * )
 * assert.deepStrictEqual(
 *   pipe(
 *     E.right(-1),
 *     E.filterOrElse(
 *       (n) => n > 0,
 *       () => 'error'
 *     )
 *   ),
 *   E.left('error')
 * )
 * assert.deepStrictEqual(
 *   pipe(
 *     E.left('a'),
 *     E.filterOrElse(
 *       (n) => n > 0,
 *       () => 'error'
 *     )
 *   ),
 *   E.left('a')
 * )
 *
 * @category combinators
 * @since 2.0.0
 */
export declare const filterOrElse: {
    <A, B extends A, E>(refinement: Refinement<A, B>, onFalse: (a: A) => E): (ma: Either<E, A>) => Either<E, B>;
    <A_1, E_1>(predicate: Predicate<A_1>, onFalse: (a: A_1) => E_1): <B_1 extends A_1>(mb: Either<E_1, B_1>) => Either<E_1, B_1>;
    <A_2, E_2>(predicate: Predicate<A_2>, onFalse: (a: A_2) => E_2): (ma: Either<E_2, A_2>) => Either<E_2, A_2>;
};
/**
 * Less strict version of [`filterOrElse`](#filterorelse).
 *
 * @category combinators
 * @since 2.9.0
 */
export declare const filterOrElseW: {
    <A, B extends A, E2>(refinement: Refinement<A, B>, onFalse: (a: A) => E2): <E1>(ma: Either<E1, A>) => Either<E1 | E2, B>;
    <A, E2>(predicate: Predicate<A>, onFalse: (a: A) => E2): <E1, B extends A>(mb: Either<E1, B>) => Either<E1 | E2, B>;
    <A, E2>(predicate: Predicate<A>, onFalse: (a: A) => E2): <E1>(ma: Either<E1, A>) => Either<E1 | E2, A>;
};
/**
 * Returns a `Right` if is a `Left` (and vice versa).
 *
 * @category combinators
 * @since 2.0.0
 */
export declare const swap: <E, A>(ma: Either<E, A>) => Either<A, E>;
/**
 * Less strict version of [`orElse`](#orelse).
 *
 * @category combinators
 * @since 2.10.0
 */
export declare const orElseW: <E1, E2, B>(onLeft: (e: E1) => Either<E2, B>) => <A>(ma: Either<E1, A>) => Either<E2, B | A>;
/**
 * Useful for recovering from errors.
 *
 * @category combinators
 * @since 2.0.0
 */
export declare const orElse: <E1, A, E2>(onLeft: (e: E1) => Either<E2, A>) => (ma: Either<E1, A>) => Either<E2, A>;
/**
 * Takes a default and a nullable value, if the value is not nully, turn it into a `Right`, if the value is nully use
 * the provided default as a `Left`.
 *
 * @example
 * import { fromNullable, left, right } from 'fp-ts/Either'
 *
 * const parse = fromNullable('nully')
 *
 * assert.deepStrictEqual(parse(1), right(1))
 * assert.deepStrictEqual(parse(null), left('nully'))
 *
 * @category interop
 * @since 2.0.0
 */
export declare const fromNullable: <E>(e: E) => <A>(a: A) => Either<E, NonNullable<A>>;
/**
 * Constructs a new `Either` from a function that might throw.
 *
 * See also [`tryCatchK`](#trycatchk).
 *
 * @example
 * import * as E from 'fp-ts/Either'
 *
 * const unsafeHead = <A>(as: ReadonlyArray<A>): A => {
 *   if (as.length > 0) {
 *     return as[0]
 *   } else {
 *     throw new Error('empty array')
 *   }
 * }
 *
 * const head = <A>(as: ReadonlyArray<A>): E.Either<Error, A> =>
 *   E.tryCatch(() => unsafeHead(as), e => (e instanceof Error ? e : new Error('unknown error')))
 *
 * assert.deepStrictEqual(head([]), E.left(new Error('empty array')))
 * assert.deepStrictEqual(head([1, 2, 3]), E.right(1))
 *
 * @category interop
 * @since 2.0.0
 */
export declare const tryCatch: <E, A>(f: Lazy<A>, onThrow: (e: unknown) => E) => Either<E, A>;
/**
 * Converts a function that may throw to one returning a `Either`.
 *
 * @category interop
 * @since 2.10.0
 */
export declare const tryCatchK: <A extends readonly unknown[], B, E>(f: (...a: A) => B, onThrow: (error: unknown) => E) => (...a: A) => Either<E, B>;
/**
 * @category interop
 * @since 2.9.0
 */
export declare const fromNullableK: <E>(e: E) => <A extends readonly unknown[], B>(f: (...a: A) => B | null | undefined) => (...a: A) => Either<E, NonNullable<B>>;
/**
 * @category interop
 * @since 2.9.0
 */
export declare const chainNullableK: <E>(e: E) => <A, B>(f: (a: A) => B | null | undefined) => (ma: Either<E, A>) => Either<E, NonNullable<B>>;
/**
 * @category interop
 * @since 2.10.0
 */
export declare const toUnion: <E, A>(fa: Either<E, A>) => E | A;
/**
 * Default value for the `onError` argument of `tryCatch`
 *
 * @since 2.0.0
 */
export declare function toError(e: unknown): Error;
/**
 * @since 2.0.0
 */
export declare function elem<A>(E: Eq<A>): {
    (a: A): <E>(ma: Either<E, A>) => boolean;
    <E>(a: A, ma: Either<E, A>): boolean;
};
/**
 * Returns `false` if `Left` or returns the result of the application of the given predicate to the `Right` value.
 *
 * @example
 * import { exists, left, right } from 'fp-ts/Either'
 *
 * const gt2 = exists((n: number) => n > 2)
 *
 * assert.strictEqual(gt2(left('a')), false)
 * assert.strictEqual(gt2(right(1)), false)
 * assert.strictEqual(gt2(right(3)), true)
 *
 * @since 2.0.0
 */
export declare const exists: <A>(predicate: Predicate<A>) => <E>(ma: Either<E, A>) => boolean;
/**
 * @since 2.9.0
 */
export declare const Do: Either<never, {}>;
/**
 * @since 2.8.0
 */
export declare const bindTo: <N extends string>(name: N) => <E, A>(fa: Either<E, A>) => Either<E, { readonly [K in N]: A; }>;
/**
 * @since 2.8.0
 */
export declare const bind: <N extends string, A, E, B>(name: Exclude<N, keyof A>, f: (a: A) => Either<E, B>) => (ma: Either<E, A>) => Either<E, { readonly [K in N | keyof A]: K extends keyof A ? A[K] : B; }>;
/**
 * @since 2.8.0
 */
export declare const bindW: <N extends string, A, E2, B>(name: Exclude<N, keyof A>, f: (a: A) => Either<E2, B>) => <E1>(fa: Either<E1, A>) => Either<E1 | E2, {
    readonly [K in keyof A | N]: K extends keyof A ? A[K] : B;
}>;
/**
 * @since 2.8.0
 */
export declare const apS: <N extends string, A, E, B>(name: Exclude<N, keyof A>, fb: Either<E, B>) => (fa: Either<E, A>) => Either<E, { readonly [K in N | keyof A]: K extends keyof A ? A[K] : B; }>;
/**
 * @since 2.8.0
 */
export declare const apSW: <A, N extends string, E2, B>(name: Exclude<N, keyof A>, fb: Either<E2, B>) => <E1>(fa: Either<E1, A>) => Either<E1 | E2, {
    readonly [K in keyof A | N]: K extends keyof A ? A[K] : B;
}>;
/**
 * @since 2.11.0
 */
export declare const ApT: Either<never, readonly []>;
/**
 * Equivalent to `ReadonlyNonEmptyArray#traverseWithIndex(Applicative)`.
 *
 * @since 2.11.0
 */
export declare const traverseReadonlyNonEmptyArrayWithIndex: <A, E, B>(f: (index: number, a: A) => Either<E, B>) => (as: ReadonlyNonEmptyArray<A>) => Either<E, ReadonlyNonEmptyArray<B>>;
/**
 * Equivalent to `ReadonlyArray#traverseWithIndex(Applicative)`.
 *
 * @since 2.11.0
 */
export declare const traverseReadonlyArrayWithIndex: <A, E, B>(f: (index: number, a: A) => Either<E, B>) => (as: readonly A[]) => Either<E, readonly B[]>;
/**
 * @since 2.9.0
 */
export declare const traverseArrayWithIndex: <E, A, B>(f: (index: number, a: A) => Either<E, B>) => (as: ReadonlyArray<A>) => Either<E, ReadonlyArray<B>>;
/**
 * @since 2.9.0
 */
export declare const traverseArray: <E, A, B>(f: (a: A) => Either<E, B>) => (as: readonly A[]) => Either<E, readonly B[]>;
/**
 * @since 2.9.0
 */
export declare const sequenceArray: <E, A>(as: ReadonlyArray<Either<E, A>>) => Either<E, ReadonlyArray<A>>;
/**
 * Use [`Json`](./Json.ts.html) module instead.
 *
 * @since 2.6.7
 * @deprecated
 */
export declare type Json = boolean | number | string | null | JsonArray | JsonRecord;
/**
 * Use [`Json`](./Json.ts.html) module instead.
 *
 * @since 2.6.7
 * @deprecated
 */
export interface JsonRecord {
    readonly [key: string]: Json;
}
/**
 * Use [`Json`](./Json.ts.html) module instead.
 *
 * @since 2.6.7
 * @deprecated
 */
export interface JsonArray extends ReadonlyArray<Json> {
}
/**
 * Use [`parse`](./Json.ts.html#parse) instead.
 *
 * @category constructors
 * @since 2.0.0
 * @deprecated
 */
export declare function parseJSON<E>(s: string, onError: (reason: unknown) => E): Either<E, Json>;
/**
 * Use [`stringify`](./Json.ts.html#stringify) instead.
 *
 * @category constructors
 * @since 2.0.0
 * @deprecated
 */
export declare const stringifyJSON: <E>(u: unknown, onError: (reason: unknown) => E) => Either<E, string>;
/**
 * Use small, specific instances instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
export declare const either: Monad2<URI> & Foldable2<URI> & Traversable2<URI> & Bifunctor2<URI> & Alt2<URI> & Extend2<URI> & ChainRec2<URI> & MonadThrow2<URI>;
/**
 * Use [`getApplySemigroup`](./Apply.ts.html#getapplysemigroup) instead.
 *
 * Semigroup returning the left-most `Left` value. If both operands are `Right`s then the inner values
 * are concatenated using the provided `Semigroup`
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
export declare const getApplySemigroup: <E, A>(S: Semigroup<A>) => Semigroup<Either<E, A>>;
/**
 * Use [`getApplicativeMonoid`](./Applicative.ts.html#getapplicativemonoid) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
export declare const getApplyMonoid: <E, A>(M: Monoid<A>) => Monoid<Either<E, A>>;
/**
 * Use [`getApplySemigroup`](./Apply.ts.html#getapplysemigroup) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
export declare const getValidationSemigroup: <E, A>(SE: Semigroup<E>, SA: Semigroup<A>) => Semigroup<Either<E, A>>;
/**
 * Use [`getApplicativeMonoid`](./Applicative.ts.html#getapplicativemonoid) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
export declare const getValidationMonoid: <E, A>(SE: Semigroup<E>, MA: Monoid<A>) => Monoid<Either<E, A>>;
/**
 * Use [`getApplicativeValidation`](#getapplicativevalidation) and [`getAltValidation`](#getaltvalidation) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
export declare function getValidation<E>(SE: Semigroup<E>): Monad2C<URI, E> & Foldable2<URI> & Traversable2<URI> & Bifunctor2<URI> & Alt2C<URI, E> & Extend2<URI> & ChainRec2C<URI, E> & MonadThrow2C<URI, E>;