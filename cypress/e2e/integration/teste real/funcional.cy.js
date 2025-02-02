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
});