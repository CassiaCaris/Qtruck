import loginPage from '../support/pages/Login'

describe('Login', () => {
  it('deve logar com sucesso', () => {
    const user = {
      name: 'CASSIA',
      instagram: '@cassiabrilholuar',
      password: 'pwd123'
    }
    //cy.login(user)
    //cy.loggedUser(user.name)
    //Aula do dia 16/08 criação de pageObject
    loginPage.go()
    loginPage.form(user)
    loginPage.submit()
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
    cy.login({})
    //cy.fieldNull()
    cy.modalHaveText('Por favor, informe suas credenciais!')
  })

  it('instagram obrigatório', () => {
    const user = {
      password: 'p123123'
    }
    cy.login(user)
    //cy.intagramNull(user)
    cy.modalHaveText('Por favor, informe o seu código do Instagram!')
  })

  it('senha obrigatória', () => {
    const user = {
      instagram: '@cassiabrilholuar',
      senha: ''
    }
    cy.login(user)
    //cy.passwordNull(user)
    cy.modalHaveText('Por favor, informe a sua senha secreta!')
  })

})


