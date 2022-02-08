import { ReadonlyRecord } from './ReadonlyRecord';
/**
 * @category type classes
 * @since 2.0.0
 */
export interface Show<A> {
    readonly show: (a: A) => string;
}
/**
 * @category combinators
 * @since 2.10.0
 */
export declare const struct: <A>(shows: { [K in keyof A]: Show<A[K]>; }) => Show<{ readonly [K_1 in keyof A]: A[K_1]; }>;
/**
 * @category combinators
 * @since 2.10.0
 */
export declare const tuple: <A extends readonly unknown[]>(...shows: { [K in keyof A]: Show<A[K]>; }) => Show<Readonly<A>>;
/**
 * Use [`tuple`](#tuple) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */
export declare const getTupleShow: <T extends ReadonlyArray<Show<any>>>(...shows: T) => Show<{
    [K in keyof T]: T[K] extends Show<infer A> ? A : never;
}>;
/**
 * Use [`struct`](#struct) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */
export declare const getStructShow: <O extends ReadonlyRecord<string, any>>(shows: {
    [K in keyof O]: Show<O[K]>;
}) => Show<O>;
/**
 * Use [`Show`](./boolean.ts.html#show) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
export declare const showBoolean: Show<boolean>;
/**
 * Use [`Show`](./string.ts.html#show) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
export declare const showString: Show<string>;
/**
 * Use [`Show`](./number.ts.html#show) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
export declare const showNumber: Show<number>;