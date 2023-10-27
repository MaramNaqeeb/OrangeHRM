declare namespace Cypress {
  interface Chainable<Subject> {
    getByCy: typeof getByCy;
  }
}

function getByCy(field: string) {
  return cy.get(`[placeholder='${field}']`);
}

Cypress.Commands.add("getByCy", getByCy);
