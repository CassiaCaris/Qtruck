describe('Login', () => {
  it('deve logar com sucesso', () => {
    const user = {
      name: 'CASSIA',
      instagram: '@cassiabrilholuar',
      password: 'pwd123'
    }
    cy.login(user)
    cy.loggedUser(user.name)
  })

  it('nao deve logar com senha incorreta', () => {
    const user = {
      instagram: '@cassiabrilholuar',
      password: 'p123123'
    }
    cy.login(user)
    cy.modalHaveText('Credenciais inválidas, tente novamente!')
  })

  it('nao deve logar com instagram inexistente', () => {
    const user = {
      instagram: '@testcypress',
      password: 'p123123'
    }
    cy.login(user)
    cy.modalHaveText('Credenciais inválidas, tente novamente!')
  })

  //acresscentando novo cenário
  it('Instagram no formato incorreto', () => {
    const user = {
      instagram: 'testcypress',
      password: 'p123123'
    }
    cy.login(user)
    cy.modalHaveText('Credenciais inválidas, tente novamente!')
  })  

  //desafio 15/08/2022
  it('credenciais obrigatórias', () => {
    cy.fieldNull()
    cy.modalHaveText('Por favor, informe suas credenciais!')
  })

  it('instagram obrigatório', () => {
    const user = {
      password: 'p123123'
    }
    cy.intagramNull(user)
    cy.modalHaveText('Por favor, informe o seu código do Instagram!')
  })

  it('senha obrigatória', () => {
    const user = {
      instagram: '@cassiabrilholuar'
    }
    cy.passwordNull(user)
    cy.modalHaveText('Por favor, informe a sua senha secreta!')
  })

})


