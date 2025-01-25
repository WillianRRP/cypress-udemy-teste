/// <reference types="cypress"/>
describe("Work with alerts", () => {
  beforeEach(() => {
    cy.visit("https://wcaquino.me/cypress/componentes.html");
  });

  beforeEach(() => {
    cy.reload();
  });
  it("Using jquery selector", () => {
    cy.get(':nth-child(5) > :nth-child(6) > [type="text"]');
    cy.get("[onclick*='Usuario B']");
    cy.get("#tabelaUsuarios td:contains('Doutorado'):eq(0) ~ td:eq(3) > input");
    cy.get("#tabelaUsuarios td:contains('Doutorado'):eq(2) ~ td:eq(3) >input");
    cy.get("#tabelaUsuarios tr:contains('Doutorado'):eq(1) td:eq(6) input");
  });
  it("using xpath", () => {
    cy.xpath("//input[contains(@onclick, 'Usuario B')]");
    cy.xpath("//table[@id='tabelaUsuarios']//td[contains(., 'Usuario B')]/..//input[@type='text']");
    cy.xpath("//td[contains(., 'Usuario A')]/following-sibling::td[contains(., 'Mestrado')]/..//input[@type='text']")

  })
});
