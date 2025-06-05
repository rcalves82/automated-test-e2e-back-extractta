// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Import Allure reporter
import '@shelex/cypress-allure-plugin';

// Add Allure reporter to Cypress
Cypress.on('test:after:run', (attributes) => {
  const allure = Cypress.Allure.reporter.getInterface();
  allure.testName(attributes.title);
});