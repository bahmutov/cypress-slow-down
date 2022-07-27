import { getPluginConfigValue } from 'cypress-plugin-config'

function slowCypressDown(commandDelay) {
  if (typeof commandDelay === 'undefined') {
    commandDelay = getPluginConfigValue('commandDelay')
  }
  if (typeof commandDelay === 'undefined') {
    commandDelay = 1000
  }

  if (commandDelay === false) {
    // disabled command slow down
    return
  }

  if (commandDelay < 0) {
    throw new Error(
      `Time is linear (I think), the command delay cannot be negative, you passed ${commandDelay}`,
    )
  }

  const rc = cy.queue.runCommand.bind(cy.queue)
  cy.queue.runCommand = function slowRunCommand(cmd) {
    return Cypress.Promise.delay(commandDelay).then(() => rc(cmd))
  }
}

module.exports = { slowCypressDown }
