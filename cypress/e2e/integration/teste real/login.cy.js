/// <reference types="cypress"/>

describe("Should test at a funcional level", () => {
  beforeEach(() => {
    cy.visit("https://barrigareact.wcaquino.me");
    cy.get('[data-test="email"]').type("a@a");
    cy.get('[data-test="passwd"]').type("a");
    cy.get(".btn").click();
    cy.get(".toast-message").should("contain", "Bem vindo");
  });

  it("should create cont", () => {
  cy.get('[data-test="menu-settings"]').click()
  cy.get('[href="/contas"]').click()
  cy.get('[data-test="nome"]').type('conta de teste')
  cy.get('.btn').click()
  cy.get('.toast-message').should('contain','Conta inserida com sucesso')
})
});
