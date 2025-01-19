/// <reference types="cypress"/>

describe("Work with basic elements", () => {
  beforeEach(() => {
    cy.visit("https://wcaquino.me/cypress/componentes.html");
  });

  it("texto", () => {
    cy.get("body").should("contain", "Nao cadastrado");
    cy.get("div").should("contain", "Nao cadastrado");
    cy.get("#resultado").should("contain", "Nao cadastrado");
    cy.get("#resultado").should("have.text", "Status: Nao cadastrado");
    cy.get("thead > tr > :nth-child(5)").should("contain", "Radio");
  });
  it("Links", () => {
    cy.reload();
    cy.get('[href="#"]').click();
    cy.get("#resultado").should("have.text", "Voltou!");
    cy.contains("Voltar").click();
    cy.get("#resultado").should("have.text", "Voltou!");
  });
  it("TextFields", () => {
    cy.get('[data-cy="dataSobrenome"]').type("testezinho dos guri");
    cy.get('[data-cy="dataSobrenome"]').should("have.value", "testezinho dos guri");

    cy.get("#elementosForm\\:sugestoes")
      .type("Sugestão")
      .should("have.value", "Sugestão");

    cy.get(":nth-child(5) > :nth-child(6) > input")
      .type("??? :D")
      .should("have.value", "??? :D");

    cy.get("#formNome")
      .type("ioioioioioio12344{backspace}")
      .should("have.value", "ioioioioioio1234");

    cy.get("#elementosForm\\:sugestoes")
      .clear()
      .type("Erro{selectall}acerto", { delay: 100 })
      .should("have.value", "acerto");
    cy.reload();
  });

  it("RadioButton", () => {
    cy.get("#formSexoMasc").click().should("be.checked");

    cy.get("#formSexoFem").should("not.be.checked");

    cy.get("[name='formSexo']").should("have.length", 2);
  });

  it("CheckBox", () => {
    cy.get("#formComidaFrango").click().should("be.checked");

    cy.get("[name=formComidaFavorita]").click({ multiple: true });

    cy.get("#formComidaFrango").should("not.be.checked");
    cy.get("#formComidaCarne").should("be.checked");
  });

  it("combo", () => {
    cy.get('[data-test="dataEscolaridade"]')
      .select("Doutorado")
      .should("have.value", "doutorado");
    cy.get('[data-test="dataEscolaridade"]')
      .select("1grauincomp")
      .should("have.value", "1grauincomp");

    cy.get('[data-test="dataEscolaridade"] option').should("have.length", 8);
    cy.get('[data-test="dataEscolaridade"] option').then(($arr) => {
      const values = [];
      $arr.each(function () {
        values.push(this.innerHTML);
      });
      expect(values).to.include.members(["Especializacao", "Doutorado"]);
    });
  });

  it.only("combo multiplo", () => {
    cy.get('[data-testid="dataEsportes"]').select(["futebol", "Karate","nada"]);
    cy.get("[data-testid=dataEsportes]").then(($el) => {
      expect($el.val()).to.be.deep.equal(["futebol", "Karate", "nada"]);
      expect($el.val()).to.have.length(3);
    });
    cy.get('[data-testid="dataEsportes"]')
      .invoke("val")
      .should("eql", ["futebol", "Karate", "nada"]);
  });
});
