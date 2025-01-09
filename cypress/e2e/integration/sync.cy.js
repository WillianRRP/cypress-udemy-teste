/// <reference types="cypress"/>

describe('Work with basic elements', () => {


    beforeEach(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })


    it('deve esperar o elemento estar disponivel', () => {
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo').should('exist')
        cy.get('#novoCampo').type('teste ')
        
    })
    it('deve fazer retrys', () => {
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo')
        .should('exist')
        .type('teste')
        
    })

})
