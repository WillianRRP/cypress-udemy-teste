/// <reference types="cypress"/>

describe("Should test at a funcional level", () => {
  beforeEach(() => {
    cy.visit("https://barrigareact.wcaquino.me");
    cy.get('[data-test="email"]').type("a@a");
    cy.get('[data-test="passwd"]').type("a");
    cy.get(".btn").click();
    cy.get(".toast-message").should("contain", "Bem vindo");
  });

  it("should create account", () => {
    cy.get('[data-test="menu-settings"]').click();
    cy.get('[href="/contas"]').click();
    cy.get('[data-test="nome"]').type("conta de teste");
    cy.get(".btn").click();
    cy.get(".toast-message").should("contain", "Conta inserida com sucesso");
  });
  it.only("should update an account", () => {
    cy.get('[data-test="menu-settings"]').click();
    cy.get('[href="/contas"]').click();
    cy.xpath("//td[contains(.,'Conta alterada')]/..//i[@class='far fa-edit']").click();
    cy.get("[data-test=nome]")
    .clear()
    .type("Conta alterada");
    cy.get(".btn").click();
    cy.get(".toast-message").should("contain", "Conta atualizada com sucesso");
  });
});
