/// <reference types='cypress'/>

describe('Should test at a funcional level', () => {
  let token
  
  beforeEach(() => {
    //cy.login('a@a', 'a');
    //cy.resetApp()
    //cy.get(loc.MENU.HOME).click()
    cy.getToken('testewp@a', 'a')
    .then(tkn => {
      token = tkn 

    })
    cy.resetRest()
    
  });

  it('should create account', () => {
    cy.request({
      method: 'POST',
      headers: { Authorization: `JWT ${token}`},
      url: '/contas',
      body:{
        nome: 'Conta de teste via rest 12'
  
      }
    }).as("resonse")


   cy.get('@resonse').then(res =>{
    expect(res.status).to.be.equal(201)
    expect(res.body).to.have.property('id')
    expect(res.body).to.have.property('nome', 'Conta de teste via rest 12')
   })

   
  });
  it('should update an account', () => {
    cy.request({
      method: 'GET',
      url: '/contas',
      headers: { Authorization: `JWT ${token}`},
      qs:{
        nome: 'Conta para alterar'
      }

    }).then(res =>{
      cy.request({
        url:`/contas/${res.body[0].id}`,
        method: 'PUT',
        headers: { Authorization: `JWT ${token}`},
        body:{
          nome: 'Conta de teste via rest 34'
   
        }
      }).as("resonse")
    })
   cy.get('@resonse').its('status').should('be.equal', 200)
    
  });

  it('should not creat an account with same name', () => {
    cy.request({
      method: 'POST',
      headers: { Authorization: `JWT ${token}`},
      url: '/contas',
      body:{
        nome: 'Conta para saldo'
      },
      failOnStatusCode: false
    }).as("resonse")


   cy.get('@resonse').then(res =>{
    console.log(res)
    expect(res.status).to.be.equal(400)
    expect(res.body.error).to.be.equal('Já existe uma conta com esse nome!')
   })
  });
  it('Should create a transaction', () => {
})

// por algum motivo esse teste esta bugando as vezes
  it('should  get balance', () => {


  });
  it('should remove a transaction', () => {
    
  });
});