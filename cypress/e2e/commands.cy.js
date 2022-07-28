// @ts-check
// @ts-ignore
import { slowCypressDown } from '../..'
import '../../commands'

// disable any slow down at first
slowCypressDown(false)

describe('TodoMVC', () => {
  it('clears completed todos (slows down part of the test)', () => {
    cy.visit('/todo')
    cy.get('.todo-list li')
      .should('have.length', 2)
      .should('include.text', 'Pay electric bill')
    cy.get('.new-todo').type('Write tests{enter}')
    cy.get('.todo-list li').should('have.length', 3)
    cy.contains('.todo-count', '3 items left').slowDown(1000)
    // now each command should be delayed 1 second
    cy.get('.todo-list li')
      .first()
      .find('.toggle')
      .slowDown(3000)
      // slow down each command by 3 seconds
      .click()
      .slowDownEnd()
    // back to 1 second delays
    cy.get('.todo-list li').first().should('have.class', 'completed')
    cy.contains('.todo-count', '2 items left').slowDownEnd()
    // back to no slow down
    cy.get('button.clear-completed').click()
    cy.get('.todo-list li')
      .should('have.length', 2)
      .should('not.include.text', 'Pay electric bill')
  })
})
