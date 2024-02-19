/**
 * This file exports the StringUtil class and related features.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

/** Utilities for native JavaScript string values. */
class BaseStringUtil {
  /** Instantiates a new StringUtil. */
  constructor() {}

  public htmlEscape(value: string): string {
    return value
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  public htmlUnescape(value: string): string {
    return value
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&amp;/g, '&');
  }

  // public template(template: string, data: Record<string, string>): string {
  //   return template.replace(/\${(.*?)}/g, (match, key) => data[key] || '');
  // }
}

export const StringUtil = new BaseStringUtil();
