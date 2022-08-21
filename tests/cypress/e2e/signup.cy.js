//import { method } from 'cypress/types/bluebird'
import signupPage from '../support/pages/Signup'

describe('Signup', ()=> {
    it('deve cadastrar um novo usuário', ()=> {
        const user = {
            name: 'Foodtruck Hamburgão',
            instagram: '@foodtruck_hamburgao',
            password: 'abc123'
        }
        cy.apiResetUser(user.instagram)
        signupPage.go()
        signupPage.form(user)
        signupPage.submit()        
        signupPage.modal.haveText('Agora você pode recomendar e/ou avaliar Food trucks.')
    })

    it.only('não deve cadastar com instagram duplicado', ()=> {
        const user = {
            name: 'Teste QA',
            instagram: 'teste_qa',
            password: '123pwd'
        }
        cy.apiCreateUser(user)
        signupPage.go()
        signupPage.form(user)
        signupPage.submit()        
        signupPage.modal.haveText('Instagram já cadastrado!')
    })
})



