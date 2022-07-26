const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'q3727b',
  e2e: {
    env: {
      commandDelay: 1000,
    },
    baseUrl: 'https://example.cypress.io',
    supportFile: false,
    fixturesFolder: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // and load any plugins that require the Node environment
    },
  },
})
