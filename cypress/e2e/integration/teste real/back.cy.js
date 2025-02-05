/// <reference types='cypress'/>
import dayjs from "dayjs";

describe("Should test at a funcional level", () => {
  let token;

  beforeEach(() => {
    //cy.login('a@a', 'a');
    //cy.resetApp()
    //cy.get(loc.MENU.HOME).click()
    cy.getToken("testewp@a", "a").then((tkn) => {
      token = tkn;
    });
    cy.resetRest();
  });

  it("should create account", () => {
    cy.request({
      method: "POST",
      headers: { Authorization: `JWT ${token}` },
      url: "/contas",
      body: {
        nome: "Conta de teste via rest 12",
      },
    }).as("resonse");

    cy.get("@resonse").then((res) => {
      expect(res.status).to.be.equal(201);
      expect(res.body).to.have.property("id");
      expect(res.body).to.have.property("nome", "Conta de teste via rest 12");
    });
  });
  it("should update an account", () => {
    cy.getAccountByName("Conta para alterar")
    .then((contaId) => {
      cy.request({
        url: `/contas/${contaId}`,
        method: "PUT",
        headers: { Authorization: `JWT ${token}` },
        body: {
          nome: "Conta de teste via rest 34",
        },
      }).as("resonse")
    })
    cy.get("@resonse").its("status").should("be.equal", 200);
  });

  it("should not creat an account with same name", () => {
    cy.request({
      method: "POST",
      headers: { Authorization: `JWT ${token}` },
      url: "/contas",
      body: {
        nome: "Conta mesmo nome",
      },
      failOnStatusCode: false,
    }).as("resonse");

    cy.get("@resonse").then((res) => {
      console.log(res);
      expect(res.status).to.be.equal(400);
      expect(res.body.error).to.be.equal("Já existe uma conta com esse nome!");
    });
  });
  it("Should create a transaction", () => {
    cy.getAccountByName("Conta para movimentacoes").
    then((contaId) => {
      cy.request({
        method: "POST",
        url: "/transacoes",
        headers: { Authorization: `JWT ${token}` },
        body: {
        conta_id: contaId,
        data_pagamento: dayjs().add(1, "day").format("DD/MM/YYYY"),
        data_transacao: dayjs().format("DD/MM/YYYY"),
        descricao: "desc",
        envolvido: "inter",
        status: true,
         tipo: "REC",
         valor: "123",
        },
      }).as("response");
    });
    cy.get("@response").its("status").should("be.equal", 201);
    cy.get("@response").its("body.id").should("exist");
  });
  it.only("should  get balance", () => {
    cy.request({
      method: "GET",
      url: "/saldo",
      headers: { Authorization: `JWT ${token}` },
    }).then(res => {})
  });
  it("should remove a transaction", () => {});
});
