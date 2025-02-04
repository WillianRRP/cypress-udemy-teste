/// <reference types='cypress'/>

describe('Should test at a funcional level', () => {
  beforeEach(() => {
    //cy.login('a@a', 'a');
    //cy.resetApp()
    //cy.get(loc.MENU.HOME).click()
  });

  it('should create account', () => {
   cy.request({
     method: 'POST',
     url: 'https://barrigarest.wcaquino.me/signin',
     body:{
       email: "testewp@a",
       redirecionar: false,
       senha: "a"
     }
   }).its('body.token').should('not.be.empty')
   .then(token => {
    cy.request({
      method: 'POST',
      headers: { Authorization: `JWT ${token}`},
      url: 'https://barrigarest.wcaquino.me/contas',
      body:{
        nome: 'Conta de teste via rest 22'
  
      }
    }).as("resonse")
   })


   cy.get('@resonse').then(res =>{
    expect(res.status).to.be.equal(201)
    expect(res.body).to.have.property('id')
    expect(res.body).to.have.property('nome', 'Conta de teste via rest 22')
   })

   
  });
  it('should update an account', () => {
  });

  it('should not creat an account with same name', () => {
  });
  it('Should create a transaction', () => {
})

// por algum motivo esse teste esta bugando as vezes
  it('should  get balance', () => {


  });
  it('should remove a transaction', () => {
    
  });
});