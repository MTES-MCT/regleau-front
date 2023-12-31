import axios from "axios";

Cypress.Commands.add('logout', () => {
  cy.clearAllLocalStorage();
  cy.clearAllCookies();
  cy.visit('/');
  cy.url().should('match', /connexion/);
});

Cypress.Commands.add('devLogin', (email) => {
  cy.logout();
  if(email) {
    cy.get('.fr-select').select(email);
  } else {
    cy.get('.fr-select').select(1);
    
  }
  cy.get('[data-cy=LoginDevBtn]').click();
  cy.url().should('match', /arrete-cadre/);
});

Cypress.Commands.add('populateDb', async (endpoint) => {
  await axios.post(`${Cypress.env('apiUrl')}/${endpoint}/populateTestData`);
});

Cypress.Commands.add('resetDb', async (endpoint) => {
  await axios.post(`${Cypress.env('apiUrl')}/${endpoint}/clearTestData`);
});