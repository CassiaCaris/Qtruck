import signupPage from '../support/pages/Signup'

describe('Signup', ()=> {

    beforeEach(()=> {
        cy.fixture('login-users').then(function (users){
          this.users = users
        })
    })

    it('deve cadastrar um novo usuário', function () {
        const user = this.users.signup_sucess

        cy.apiResetUser(user.instagram)
        signupPage.go()
        signupPage.form(user)
        signupPage.submit()        
        signupPage.modal.haveText('Agora você pode recomendar e/ou avaliar Food trucks.')
    })

    it('não deve cadastar com instagram duplicado', function () {
        const user = this.users.signup_duplicate

        cy.apiCreateUser(user)
        signupPage.go()
        signupPage.form(user)
        signupPage.submit()        
        signupPage.modal.haveText('Instagram já cadastrado!')
    })
})



