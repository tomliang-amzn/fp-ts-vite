/**
 * @since 2.10.0
 */
import { Either, Left, Right } from './Either';
import { NonEmptyArray } from './NonEmptyArray';
import { None, Option, Some } from './Option';
import { ReadonlyNonEmptyArray } from './ReadonlyNonEmptyArray';
/** @internal */
export declare const isNone: (fa: Option<unknown>) => fa is None;
/** @internal */
export declare const isSome: <A>(fa: Option<A>) => fa is Some<A>;
/** @internal */
export declare const none: Option<never>;
/** @internal */
export declare const some: <A>(a: A) => Option<A>;
/** @internal */
export declare const isLeft: <E>(ma: Either<E, unknown>) => ma is Left<E>;
/** @internal */
export declare const isRight: <A>(ma: Either<unknown, A>) => ma is Right<A>;
/** @internal */
export declare const left: <E, A = never>(e: E) => Either<E, A>;
/** @internal */
export declare const right: <A, E = never>(a: A) => Either<E, A>;
/** @internal */
export declare const singleton: <A>(a: A) => NonEmptyArray<A>;
/** @internal */
export declare const isNonEmpty: <A>(as: readonly A[]) => as is ReadonlyNonEmptyArray<A>;
/** @internal */
export declare const head: <A>(as: ReadonlyNonEmptyArray<A>) => A;
/** @internal */
export declare const tail: <A>(as: ReadonlyNonEmptyArray<A>) => readonly A[];
/** @internal */
export declare const emptyReadonlyArray: readonly [];
/** @internal */
export declare const emptyRecord: {};
/** @internal */
export declare const has: (v: PropertyKey) => boolean;
/** @internal */
export declare const fromReadonlyNonEmptyArray: <A>(as: ReadonlyNonEmptyArray<A>) => NonEmptyArray<A>;
