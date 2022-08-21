import signupPage from '../support/pages/Signup'

describe('Signup', ()=> {
    it('deve cadastrar um novo usuário', ()=> {
        const user = {
            name: 'Foodtruck Hamburgão',
            instagram: '@foodtruck_hamburgao',
            password: 'abc123'
        }

        cy.deleteMany({instagram: user.instagram}, {collection: 'users'}).then(res => {
            cy.log(res); 
        });

        signupPage.go()
        signupPage.form(user)
        signupPage.submit()
        
        signupPage.modal.haveText('Agora você pode recomendar e/ou avaliar Food trucks.')
    })
})