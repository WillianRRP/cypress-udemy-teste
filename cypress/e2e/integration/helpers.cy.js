/// <reference types='cypress'/>

const { Console } = require('console');

describe('Helpers...', () => {
  beforeEach(() => {
    cy.visit('https://wcaquino.me/cypress/componentes.html');
  });

  it('Wrap', () => {
    const obj = { nome: 'User', idade: 20 };
    expect(obj).to.have.property('nome');
    cy.wrap(obj).should('have.property', 'nome');

    //cy.get('#formNome').then($el =>{
    //   $el.val('Está funcionando via jquery?')
    //   cy.wrap($el).type('Está funcionando via cypress?')
    // })

    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(50);
      }),
        500;
    });

    cy.get('#buttonSimple').then(() =>
      console.log('Encontrei o primeiro botão')
    );
    //promise.then(num => console.log(num))

    cy.wrap(promise).then((ret) => console.log(ret));
    cy.get('#buttonList').then(() => console.log('Encontrei o segundo botão'));
  });

  it('Its...', () => {
    const obj = { nome: 'User', idade: 20 };
    cy.wrap(obj).should('have.property', 'nome', 'User');
    cy.wrap(obj).its('nome').should('be.equal', 'User');

    const obj2 = {
      nome: 'user',
      idade: 20,
      endereco: { rua: 'dos cachorros' },
    };
    cy.wrap(obj2).its('endereco').should('have.property', 'rua');
    cy.wrap(obj2).its('endereco').its('rua').should('contain', 'cachorros');
    cy.wrap(obj2).its('endereco.rua').should('contain', 'cachorros');

    cy.title().its('length').should('be.equal', 20);
  });
  it.only('invoke..', () => {

    const getValue = () => 5;
    const soma = (a, b) => a + b;
  
    cy.wrap({fn:getValue}).invoke('fn').should('be.equal', 5)
    cy.wrap({fn:soma}).invoke('fn', 7, 2).should('be.equal', 9)

    cy.get('#formNome').invoke('val', 'texto via invoke')
    cy.window().invoke('alert', 'ALERTA ALERTA')
    cy.get('#resultado')
    .invoke('html', '<input type="button" value="hacked"/>')
  });
  
});
