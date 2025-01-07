/// <reference types="cypress"/>



it('Equality', () => {// teste dando certo
    const z = 3;
    expect(z, "deveria ser 3").equal(3);
    expect(z).to.be.equal(3)
    
  }),

 //it('Equality 2', () => { //teste dando erro
    //const z = 3; 
    //expect(z, "deveria ser 3").equal(5);
    //expect(z).to.be.equal(3)
//})

it('Equality 3 ', () => { // teste avisando que "z" não é igual a "y" mas passando
    const z = 3;
    expect(z, "deveria ser 3").equal(3);
    expect(z).to.be.equal(3);
    expect("z").not.to.be.equal('y')
     
  }),

  it('truthy', () => {// teste de verdadeiro ou falso
    const z = true;
    const y = null;
    let w ;
    expect(z).to.be.true;
    expect(true).to.be.true;
    expect(z).to.be.not.null;
    expect(y).to.be.null;
    expect(w).to.be.undefined;
  }),

  it('Obeject Equality', () => {// teste de objetos
    const obj ={
        a: 1,
        b: 2
    }
    expect(obj).equal(obj)
    expect(obj).equals(obj)
    expect(obj).eq(obj)
    expect(obj).to.be.equal(obj)
    expect(obj).to.be.deep.equal({a:1, b:2})
    expect(obj).eql({a:1, b:2})
    expect(obj).include({a:1})
    expect(obj).property("b", 2)
    expect(obj).to.not.be.empty
    expect({}).to.be.empty
  })

  it('Arrays', () => {// teste de arrays
    const arr = [1,2,3]
    expect(arr).to.be.members([1, 2, 3])
    expect(arr).to.be.include.members([1,3])
    expect(arr).to.not.be.empty
    expect([]).to.be.empty
  })

  it('Types', () => {// teste de tipos
    const num = 10
    const str = "string"

    expect(num).to.be.a("number")
    expect(str).to.be.a("string")
    expect({}).to.be.an("object")
    expect([]).to.be.an("array")

  })

  it('String', () => {// teste de string
    const str = "string de teste"

    expect(str).to.be.equal("string de teste")
    expect(str).to.have.length(15)
    expect(str).to.contains("teste")
    expect(str).to.match(/de/)
    expect(str).to.match(/^string/)
    expect(str).to.match(/teste$/)
    expect(str).to.match(/.{15}/)
    expect(str).to.match(/.|W+/)
    expect(str).to.match(/.|D+/)
  })


  it('Numbers', () => {// teste de numeros
    const number = 4
    const floatNumber = 5.2123

    expect(number).to.equal(4)
    expect(number).to.above(2)
    expect(number).to.below(5)
    expect(floatNumber).to.equal(5.2123)
    expect(floatNumber).to.closeTo(5.2, 0.1)
    expect(floatNumber).to.above(2)
  })
