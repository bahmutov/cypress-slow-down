// load type definitions that come with Cypress module
// and then add our new commands to the "cy" object
/// <reference types="cypress" />
declare namespace Cypress {
  interface Chainable {
    /**
     * Delays each command by N ms
     * @param commandDelay number
     * @see https://github.com/bahmutov/cypress-slow-down
     */
    slowDown(commandDelay: number): Chainable<any>
    /**
     * Ends any previous slow down
     */
    slowDownEnd(): Chainable<any>
  }
}
