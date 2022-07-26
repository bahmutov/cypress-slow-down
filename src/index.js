function slowCypressDown(commandDelay = Cypress.env('commandDelay')) {
  if (typeof commandDelay === 'undefined') {
    commandDelay = 1000
  }

  if (commandDelay === false) {
    // disabled command slow down
    return
  }

  if (commandDelay < 0) {
    throw new Error(
      `Command delay cannot be negative, you passed ${commandDelay}`,
    )
  }

  const rc = cy.queue.runCommand.bind(cy.queue)
  cy.queue.runCommand = function slowRunCommand(cmd) {
    return Cypress.Promise.delay(commandDelay).then(() => rc(cmd))
  }
}

module.exports = { slowCypressDown }
