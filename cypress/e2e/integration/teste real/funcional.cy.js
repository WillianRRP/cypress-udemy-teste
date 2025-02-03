/// <reference types='cypress'/>
import loc from '../../../support/locators';
import '../../../support/commandsContas';

describe('Should test at a funcional level', () => {
  beforeEach(() => {
    cy.login('a@a', 'a');
    cy.resetApp()
  });

  it('should create account', () => {
    cy.acessaMenuConta();
    cy.InserirConta('conta de teste');
    cy.get(loc.MENSSAGE).should('contain', 'Conta inserida com sucesso');
  });
  it('should update an account', () => {
    cy.acessaMenuConta();
    cy.xpath(loc.CONTAS.FN_XP_BTN_ALTERAR('Conta para alterar')).click();
    cy.get(loc.CONTAS.NOME).clear().type('Conta alterada');
    cy.get(loc.CONTAS.BTN_SALVAR).click();
    cy.get(loc.MENSSAGE).should('contain', 'Conta atualizada com sucesso');
  });

  it('should not creat an account with same name', () => {
    cy.acessaMenuConta()
    
   cy.get(loc.CONTAS.NOME).type('Conta alterada')
   cy.get(loc.CONTAS.BTN_SALVAR).click();
   cy.get(loc.CONTAS.BTN_SALVAR).click();
   cy.get(loc.MENSSAGE).should('contain', 'code 400');
   
  });
  it('should  creat a transaction', () => {
  cy.get(loc.MENU.MOVIENTACAO).click()

  cy.get(loc.MOVIENTACAO.DESCRICAO).type('Desc')
  cy.get(loc.MOVIENTACAO.VALOR).type('123')
  cy.get(loc.MOVIENTACAO.INTERESSADO).type('joaozinho')
  cy.get(loc.MOVIENTACAO.STATUS).click()
  cy.get(loc.MOVIENTACAO.BTN_SALVAR).click()
  cy.get(loc.MENSSAGE).should('contain', 'sucesso')
  cy.get('.list-group > li').should('have.length', 7)
  cy.xpath(loc.EXTRATO.FN_XP_BUSCA_ELEMENTO('Desc', '123')).should('exist')
  });
});