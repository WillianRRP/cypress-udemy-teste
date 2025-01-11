/// <reference types="cypress"/>

const { Console } = require("console");

describe("Helpers...", () => {
    beforeEach(() => {
        cy.visit("https://wcaquino.me/cypress/componentes.html");
      });
    

    it("Wrap", () => {
    const obj = {nome: 'User', idade: 20}    
     expect (obj).to.have.property('nome')
     cy.wrap(obj).should('have.property', 'nome')

     
     //cy.get('#formNome').then($el =>{
     //   $el.val('Está funcionando via jquery?')
     //   cy.wrap($el).type('Está funcionando via cypress?')
     // })

     const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(50)
        }),(500)

     })

     cy.get('#buttonSimple').then(() =>console.log('Encontrei o primeiro botão'))
     //promise.then(num => console.log(num))

     cy.wrap(promise).then(ret => console.log(ret))
     cy.get('#buttonList').then(() =>console.log('Encontrei o segundo botão'))

     
       
     

     
    })

    })