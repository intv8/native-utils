/**
 * This file exports the LangUtil class and related features.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

/** Common JavaScript language utilities. */
export class LangUtil {
  /** Instantiates a new LangUtil. */
  constructor() {}

  private index = 100;

  uniqueId(prefix = ''): string {
    return prefix + this.index++;
  }
}
