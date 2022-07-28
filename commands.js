const {
  setPluginConfigValue,
  getPluginConfigValue,
} = require('cypress-plugin-config')

// stack of command delays so we can restore
// any previous value correctly
const commandDelays = []

const key = 'commandDelay'

Cypress.Commands.add(
  'slowDown',
  { prevSubject: 'optional' },
  (subject, commandDelay) => {
    // TODO: validate the input value
    cy.log(`**slowDown ${commandDelay}**`)
    commandDelays.push(getPluginConfigValue(key))
    setPluginConfigValue(key, commandDelay)

    if (subject) {
      cy.wrap(subject, {
        log: false,
      })
    }
  },
)

Cypress.Commands.add('slowDownEnd', { prevSubject: 'optional' }, (subject) => {
  if (!commandDelays.length) {
    throw new Error('There was not slow down...')
  }
  cy.log(`**slowDownEnd**`)
  const commandDelay = commandDelays.pop()
  setPluginConfigValue(key, commandDelay)

  if (subject) {
    cy.wrap(subject, {
      log: false,
    })
  }
})
