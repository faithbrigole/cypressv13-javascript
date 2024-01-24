const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://thinking-tester-contact-list.herokuapp.com',
    specPattern: 'cypress/e2e/*.js',
    retries: {
      runMode: 1,
    },

    env: {
      userEmail: 'sampletest@g.com',
      userPassword: 'password',
    },
  },
})
