// for consistency, if we use CommonJS to export from this module
// we should use CommonJS convention to import other dependencies
const {
  setPluginConfigValue,
  getPluginConfigValue,
} = require('cypress-plugin-config')

const key = 'commandDelay'

function slowCypressDown(commandDelay, logToConsole = true) {
  if (typeof commandDelay === 'undefined') {
    commandDelay = getPluginConfigValue(key)
  }
  if (typeof commandDelay === 'undefined') {
    commandDelay = 1000
  }

  if (typeof commandDelay === 'number' && commandDelay < 0) {
    throw new Error(
      `Time is linear (I think), the command delay cannot be negative, you passed ${commandDelay}`,
    )
  }

  setPluginConfigValue(key, commandDelay)
  const rc = cy.queue.runCommand.bind(cy.queue)
  cy.queue.runCommand = function slowRunCommand(cmd) {
    // get the _current_ command delay, which could be changed
    // using the child command slowDown(ms)
    const currentCommandDelay = getPluginConfigValue(key) || commandDelay
    if (logToConsole) {
      console.log({ currentCommandDelay })
    }
    if (!currentCommandDelay) {
      return rc(cmd)
    }
    return Cypress.Promise.delay(currentCommandDelay).then(() => rc(cmd))
  }
}

module.exports = { slowCypressDown }
