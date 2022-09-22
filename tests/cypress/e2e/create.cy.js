import mapPage from '../support/pages/Map'
import createPage from '../support/pages/Create'
import recommend from '../fixtures/recommend.json'

describe('Recomendação', () => {

    it('deve recomendar um food truck', () => {

        const user = recommend.valid.user
        const foodtruck = recommend.valid.foodtruck

        cy.apiCreateUser(user)
        cy.uiLogin(user)
        mapPage.createLink()
        createPage.form(foodtruck)
        createPage.submit()
        createPage.modal.haveText('Food truck cadastrado com sucesso!')
    })

    it('não deve cadastrar foodtruck com o nome duplicado', ()=> {
        const user = recommend.duplicate.user
        const foodtruck = recommend.duplicate.foodtruck

        cy.apiCreateUser(user)
        cy.apiLogin(user)
        cy.apiCreateFoodTruck(foodtruck)

        cy.uiLogin(user)
        
        mapPage.createLink()
        createPage.form(foodtruck)
        createPage.submit()
        createPage.modal.haveText('Esse food truck já foi cadastrado!')
    })

    it('Campos obrigatórias', () => {
        const user = recommend.mandatory.user
        const foodtruck = recommend.mandatory.foodtruck

        cy.apiCreateUser(user)
        cy.uiLogin(user)
        mapPage.createLink()
        cy.setGeolocation(foodtruck.latitude, foodtruck.longitude)
        createPage.submit()
        const message = 'Os campos nome, descrição e horário de funcionamento devem ser informados para recomendar um food truck!'
        createPage.modal.haveText(message)
    })

    it('Localização obrigatórias', () => {
        const user = recommend.location.user
        const foodtruck = recommend.location.foodtruck

        cy.apiCreateUser(user)
        cy.uiLogin(user)
        mapPage.createLink()
        createPage.submit()
        createPage.modal.haveText('Por favor, marque a localização no mapa!')
    })
})