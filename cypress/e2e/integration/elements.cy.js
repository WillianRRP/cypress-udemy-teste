/// <reference types="cypress"/>

describe('Work with basic elements', () => {
 
     
     
     it("texto", () => {
       cy.visit('https://wcaquino.me/cypress/componentes.html')
 cy.get('body').should('contain','Nao cadastrado')
 cy.get('div').should('contain','Nao cadastrado')
 cy.get('#resultado').should('contain','Nao cadastrado')
 cy.get('#resultado').should('have.text','Status: Nao cadastrado')
 cy.get('thead > tr > :nth-child(5)').should('contain', "Radio")        

})
    it("Links", () => {
            cy.visit("https://wcaquino.me/cypress/componentes.html")
        cy.reload()
        cy.get('[href="#"]').click()
        cy.get('#resultado').should('have.text','Voltou!')
        cy.contains('Voltar').click()
        cy.get('#resultado').should('have.text','Voltou!')



    })
    it('TextFields',() => {
        cy.visit("https://wcaquino.me/cypress/componentes.html")
        cy.get('[data-cy="dataSobrenome"]').type('testezinho dos guri')
        cy.get('[data-cy="dataSobrenome"]').should('have.value', 'testezinho dos guri')

        cy.get('#elementosForm\\:sugestoes')
        .type('Sugestão')
        .should('have.value', 'Sugestão')


        cy.get(':nth-child(5) > :nth-child(6) > input')
        .type('??? :D')
        .should('have.value', '??? :D')


        cy.get('#formNome')
        .type('ioioioioioio12344{backspace}')
        .should('have.value', 'ioioioioioio1234')
        

        cy.get('#elementosForm\\:sugestoes')
        .clear()
        .type('Erro{selectall}acerto',{delay:100})
        .should('have.value', 'acerto')
        cy.reload()
        
    })

    it("RadioButton", () => {
        cy.visit("https://wcaquino.me/cypress/componentes.html")
        cy.get('#formSexoMasc')
        .click()
        .should("be.checked")

        cy.get('#formSexoFem')
        .should("not.be.checked")


        cy.get("[name='formSexo']").should('have.length', 2)


})



    
    

})