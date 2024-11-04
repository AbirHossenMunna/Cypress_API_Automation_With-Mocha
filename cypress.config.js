const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);  // Ensure this line is correct
      // Define the pattern for spec files
      config.specPattern = [
        'cypress/e2e/RegistrationUser.cy.js',
        'cypress/e2e/UserLogin.cy.js',
        'cypress/e2e/GetUserList.cy.js',
        'cypress/e2e/CreateUser.cy.js',
        'cypress/e2e/UpdateUser.cy.js'
      ];
      return config;
    },
  },
});
