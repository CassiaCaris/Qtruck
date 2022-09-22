import loginPage from '../support/pages/Login'
import mapPage from '../support/pages/Map'

import users from '../fixtures/login-users'

describe('Login', () => {

  it('deve logar com sucesso', ()=> {
    const user = users.success

    //Aula do dia 16/08 criação de pageObject
    loginPage.go(-23.65730018889836,-47.123408317565925)
    loginPage.form(user)
    loginPage.submit()
    mapPage.loggedUser(user.name)
  })

  it('nao deve logar com senha incorreta', () => {
    const user = users.inv_pass

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()
    loginPage.modal.haveText('Credenciais inválidas, tente novamente!')
    //cy.modalHaveText('Credenciais inválidas, tente novamente!')
  })

  it('nao deve logar com instagram inexistente', () => {
    const user =  users.not_found

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()
    loginPage.modal.haveText('Credenciais inválidas, tente novamente!')
  })

  it('Instagram no formato incorreto', () => {
    const user = users.insta_invalido

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
    const user = users.required_insta
    
    loginPage.go()
    loginPage.form(user)
    loginPage.submit()
    loginPage.modal.haveText('Por favor, informe o seu código do Instagram!')
  })

  it('senha obrigatória', () => {
    const user = users.required_pass
    
    loginPage.go()
    loginPage.form(user)
    loginPage.submit()
    loginPage.modal.haveText('Por favor, informe a sua senha secreta!')
  })

})


