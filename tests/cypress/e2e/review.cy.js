import MapPage from '../support/pages/Map'

describe('Avaliações', ()=> {

    it('deve enviar uma nova avaliação', ()=> {
        const user = {
            name: 'Margaret Vitoria',
            instagram: '@margaret',
            password: 'pwd123'
        }

        const foodtruck = {
            latitude: '-23.653461855213557',
            longitude: '-47.126447903142974',           
            name: 'Sucos de todos os tipos',
            details: 'variedade de suco',
            opening_hours: '10h as 18h',
            open_on_weekends: true
        }

        const review = {
            comment: 'O suco de Limão siciliano estava maravilhoso',
            stars: 5
        }

        cy.apiCreateUser(user)
        cy.apiLogin(user)
        cy.apiCreateFoodTruck(foodtruck)
        cy.uiLogin(user)

        MapPage.goToFoodtruck(foodtruck.name)
        cy.get('textarea[name=comment]').type(review.comment)
        cy.get(`input[name=stars][value="${review.stars}"]`)
          .click({force: true})
        cy.contains('button', 'Enviar avaliação').click()
                
        cy.validationReview(user, review)
    })

})


