import loginPage from '../support/pages/Login'
import mapPage from '../support/pages/Map'

describe('Login', () => {
  it('deve logar com sucesso', () => {
    const user = {
      name: 'CASSIA',
      instagram: '@cassiabrilholuar',
      password: 'pwd123'
    }
    //Aula do dia 16/08 criação de pageObject
    loginPage.go()
    loginPage.form(user)
    loginPage.submit()
    mapPage.loggedUser(user.name)
  })

  it('nao deve logar com senha incorreta', () => {
    const user = {
      instagram: '@cassiabrilholuar',
      password: 'p123123'
    }
    loginPage.go()
    loginPage.form(user)
    loginPage.submit()
    loginPage.modal.haveText('Credenciais inválidas, tente novamente!')
    //cy.modalHaveText('Credenciais inválidas, tente novamente!')
  })

  it('nao deve logar com instagram inexistente', () => {
    const user = {
      instagram: '@testcypress',
      password: 'p123123'
    }
    loginPage.go()
    loginPage.form(user)
    loginPage.submit()
    loginPage.modal.haveText('Credenciais inválidas, tente novamente!')
  })

  it('Instagram no formato incorreto', () => {
    const user = {
      instagram: 'testcypress',
      password: 'p123123'
    }
    loginPage.go()
    loginPage.form(user)
    loginPage.submit()
    loginPage.modal.haveText('Credenciais inválidas, tente novamente!')
  })  

  it('credenciais obrigatórias', () => {
    loginPage.go()
    loginPage.submit()
    loginPage.modal.haveText('Por favor, informe suas credenciais!')
  })

  it('instagram obrigatório', () => {
    const user = {
      password: 'p123123'
    }
    loginPage.go()
    loginPage.form(user)
    loginPage.submit()
    loginPage.modal.haveText('Por favor, informe o seu código do Instagram!')
  })

  it('senha obrigatória', () => {
    const user = {
      instagram: '@cassiabrilholuar',
      senha: ''
    }
    loginPage.go()
    loginPage.form(user)
    loginPage.submit()
    loginPage.modal.haveText('Por favor, informe a sua senha secreta!')
  })

})


