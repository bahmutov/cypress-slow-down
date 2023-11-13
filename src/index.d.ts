// import the custom Cypress commands provided by this module
import * as globals from './globals'

/**
 * Slows down every Cypress command by the given amount.
 * Can disable the slowdown by passing false.
 * @example
 *  import {slowCypressDown} from 'cypress-slow-down'
 *  slowCypressDown(1000)
 */
export function slowCypressDown(
  ms?: number | false,
  logToConsole?: boolean,
): void
