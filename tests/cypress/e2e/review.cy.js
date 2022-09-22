import MapPage from '../support/pages/Map'
import foodTruckPage from '../support/pages/Foodtruck'

describe('Avaliações', ()=> {

    it('deve enviar uma nova avaliação', ()=> {
        cy.fixture('review').as('userReview')

        cy.get('@userReview').then((data)=> {
            cy.apiCreateUser(data.user)
            cy.apiLogin(data.user)
            cy.apiCreateFoodTruck(data.foodtruck)

            cy.uiLogin(data.user)

            MapPage.goToFoodtruck(data.foodtruck.name)
            foodTruckPage.addReview(data.review)
            foodTruckPage.reviewShouldBe(data.review, data.user)
        })
    })

})


