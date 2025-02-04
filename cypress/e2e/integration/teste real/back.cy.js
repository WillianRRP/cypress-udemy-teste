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
    
  });

 //para este teste funfar a base deve ser resetada após o teste ser rodado
  it('should create account', () => {
   cy.getToken('a@a', 'a')
    cy.request({
      method: 'POST',
      headers: { Authorization: `JWT ${token}`},
      url: 'https://barrigarest.wcaquino.me/contas',
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