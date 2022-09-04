import mapPage from '../support/pages/Map'
import createPage from '../support/pages/Create'

describe('Recomendação', () => {
    it('deve recomendar um food truck', () => {

        const user = {
            name: 'Catia',
            instagram: '@catia_abreu',
            password: 'abc123'
        }

        const foodtruck = {
            latitude: '-23.592414732870456',
            longitude: '-46.686285734249395',
            name: 'Tienda Del Chavo',
            details: 'O melhor lugar para tomar suco de tamarindo que parece limão',
            opening_hours: 'das 14h as 20h',
            open_on_weekends: false
        }

        cy.apiCreateUser(user)
        cy.uiLogin(user)
        mapPage.createLink()
        createPage.form(foodtruck)
        createPage.submit()
        createPage.modal.haveText('Food truck cadastrado com sucesso!')
    })

    it('não deve cadastrar foodtruck com o nome duplicado', ()=> {
        const user = {
            name: 'Margaret',
            instagram: '@margaret',
            password: 'pwd123'
        }

        const foodtruck = {
            latitude: '-23.583654062428796',
            longitude: '-46.67752861976624',
            name: 'Churros da Dona Florinda',
            details: 'O melhor churros mexicado da região.',
            opening_hours: 'das 15h às 19h',
            open_on_weekends: false
        }

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
        
        const user = {
            name: 'Andre',
            instagram: '@Andre_santos',
            password: 'abc123'
        }

        const foodtruck = {
            latitude: '-23.926041146019934',
            longitude: '-47.282986953791664'                                    
        }

        cy.apiCreateUser(user)
        cy.uiLogin(user)
        mapPage.createLink()
        cy.setGeolocation(foodtruck.latitude, foodtruck.longitude)
        createPage.submit()
        const message = 'Os campos nome, descrição e horário de funcionamento devem ser informados para recomendar um food truck!'
        createPage.modal.haveText(message)
    })

    it('Localização obrigatórias', () => {
        
        const user = {
            name: 'Tadeu',
            instagram: '@Tadeu_ja_foi',
            password: 'abc123'
        }

        const foodtruck = {
            latitude: '-23.592415032890456',
            longitude: '-46.686290734249395',
            name: 'Casa do Tempurar',
            details: 'O melhor tempurar da região',
            opening_hours: 'das 18h as 22h',
            open_on_weekends: true
        }

        cy.apiCreateUser(user)
        cy.uiLogin(user)
        mapPage.createLink()
        createPage.submit()
        createPage.modal.haveText('Por favor, marque a localização no mapa!')
    })
})