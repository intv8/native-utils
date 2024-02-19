// deno-lint-ignore-file ban-types no-explicit-any
/**
 * This file exports the FunctionUtil class and related features.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

/** Utilities for native JavaScript functions. */
class BaseFunctionUtil {
  /** Instantiates a new FunctionUtil. */
  constructor() {}

  public get placeholder(): any {
    return Symbol('placeholder');
  }

  public noop(): void {
    return;
  }

  public identity<T>(value: T): T {
    return value;
  }

  public constant<T>(value: T): () => T {
    return () => value;
  }

  public bind<T extends Function>(fn: T, thisArg: unknown, ...args: any[]): T {
    return fn.bind(thisArg, ...args);
  }

  // public partial<T extends Function>(fn: T, ...args: any[]): T {
  //   return fn.bind(undefined, ...args);
  // }

  // public memoize<T extends Function>(fn: T): T {
  //   const cache = new Map();
  //   return function (...args: any[]): any {
  //     const key = JSON.stringify(args);
  //     if (cache.has(key)) {
  //       return cache.get(key);
  //     }

  //     const result = fn.apply(undefined, args);

  //     cache.set(key, result);
  //     return result;
  //   } as any;
  // }
}

export const FunctionUtil = new BaseFunctionUtil();
