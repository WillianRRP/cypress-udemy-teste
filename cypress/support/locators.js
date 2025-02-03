const locators = {
  LOGIN: {
    USER: "[data-test=email]",
    PASSWORD: "[data-test=passwd]",
    BTN_LOGIN: ".btn",
  },
  MENU: {
    SETTINGS: '[data-test=menu-settings]',
    CONTAS: '[href="/contas"]',
    RESET: '[href="/reset"]',
    MOVIENTACAO: '[data-test=menu-movimentacao]',
    DESCRICAO: '[data-test="descricao"]'
  },
  CONTAS: {
    NOME: '[data-test="nome"]',
    BTN_SALVAR: '.btn',
    FN_XP_BTN_ALTERAR: nome => `//table//td[contains(., '${nome}')]/..//i[@class='far fa-edit']`
  },
  MOVIENTACAO: {
    DESCRICAO: '[data-test=descricao]',
    VALOR: '[data-test=valor]',
    INTERESSADO: '[data-test=envolvido]',
    STATUS:'[data-test=status]',
    BTN_SALVAR: '.btn-primary'

  },
  EXTRATO: {
   LINHAS: '.list-group > li',
   FN_XP_BUSCA_ELEMENTO: (desc, value) => `//span[contains(., '${desc}')]/following-sibling::small[contains(., '${value}')]`
  },

  MENSSAGE: ".toast-message",
};
export default locators;
