/// <reference types="cypress"/>


describe('Cypress basic', () => {

    it.only("should visit a page and assert", () => {

        cy.visit("https://wcaquino.me/cypress/componentes.html")

        
        
        cy.title()
        .should("be.equal", "Campo de Treinamento")
        .and("contain", "Campo")

        cy.pause()
        cy.title()
        .should("be.equal", "Campo de Treinamento")
        .and("contain", "Campo")

    })
    it("should find and interact with and element", () => {

        cy.visit("https://wcaquino.me/cypress/componentes.html")

        cy.get('#buttonSimple').click();
        cy.get('#buttonSimple').should('have.value', "Obrigado!")

    })

})