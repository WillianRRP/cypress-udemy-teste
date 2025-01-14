/// <reference types="cypress"/>

const { title } = require("process");

describe("Cypress basic", () => {
  it("should visit a page and assert", () => {
    cy.visit("https://wcaquino.me/cypress/componentes.html");

    cy.title()
      .should("be.equal", "Campo de Treinamento")
      .and("contain", "Campo");

    cy.title()
      .should("be.equal", "Campo de Treinamento")
      .and("contain", "Campo");

      cy.title().then(title => {
        console.log(title)
      })
  });
  it("should find and interact with and element", () => {
    cy.visit("https://wcaquino.me/cypress/componentes.html");

    cy.get("#buttonSimple").click();
    cy.get("#buttonSimple").should("have.value", "Obrigado!");
  });
});
