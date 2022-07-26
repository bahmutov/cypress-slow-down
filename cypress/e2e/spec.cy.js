import { slowCypressDown } from '../..'

slowCypressDown()

describe('TodoMVC', () => {
  it('clears completed todos', () => {
    cy.visit('/todo')
    cy.get('.todo-list li')
      .should('have.length', 2)
      .should('include.text', 'Pay electric bill')
    cy.get('.new-todo').type('Write tests{enter}')
    cy.get('.todo-list li').should('have.length', 3)
    cy.contains('.todo-count', '3 items left')
    cy.get('.todo-list li').first().find('.toggle').click()
    cy.get('.todo-list li').first().should('have.class', 'completed')
    cy.contains('.todo-count', '2 items left')
    cy.get('button.clear-completed').click()
    cy.get('.todo-list li')
      .should('have.length', 2)
      .should('not.include.text', 'Pay electric bill')
  })
})
