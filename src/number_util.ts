/**
 * This file exports the NumberUtil class and related features.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

/** Utilities for native JavaScript numeric values. */
class BaseNumberUtil {
  /** Instantiates a new NumberUtil. */
  constructor() {}

  randomInt(min: number, max: number): number {
    return Math.floor(this.randomFloat(min, max));
  }

  randomFloat(min: number, max: number, fractionDigits = -1): number {
    const value = Math.random() * (max - min) + min;

    return fractionDigits < 0
      ? value
      : parseFloat(value.toFixed(fractionDigits));
  }
}

export const NumberUtil = new BaseNumberUtil();
