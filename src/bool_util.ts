/**
 * This file exports the BoolUtil class and related features.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { IPrimitiveConvertible } from '../deps.ts';

/** Strings commonly used in software for truthy values. */
const TRUTHY_STRINGS = ['true', 'yes', '1', 'on', 'enabled', 'active'];

/** Utilities for native JavaScript boolean values. */
class BaseBoolUtil {
  /** Instantiates a new BoolUtil. */
  constructor() {}

  /** Convert a value to a boolean using native techniques. */
  public nativeCheck(value: unknown): boolean {
    return !!value;
  }

  /** Internal utility converting a number to a boolean. */
  #fromNumber(value: number): boolean {
    return value !== 0;
  }

  /** Uses commonly used strings to convert, rather than just whether the string is empty or not. */
  #fromString(value: string): boolean {
    return TRUTHY_STRINGS.includes(value.toLowerCase());
  }

  /** Convert a value to a boolean using more thoughtout determinations.  */
  public fromValue(value: unknown): boolean {
    if (typeof value === 'number') {
      return this.#fromNumber(value);
    } else if (typeof value === 'string') {
      return this.#fromString(value);
    } else {
      if (typeof value === 'object') {
        return !(value instanceof Error) && !!value;
      } else if (
        typeof (value as IPrimitiveConvertible).toBoolean === 'function'
      ) {
        return (value as IPrimitiveConvertible).toBoolean();
      }

      return Boolean(value);
    }
  }
}

/** Utilities for native JavaScript boolean values. */
export const BoolUtil = new BaseBoolUtil();
