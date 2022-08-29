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
            details: 'O melhor luhgar para tomar suco de tamarindo que parece limão',
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

    it('não deve cadastrar um food truck duplicado', () => {

        const user = {
            name: 'Catarina',
            instagram: '@catarina',
            password: 'abc123'
        }

        const foodtruck = {
            latitude: '-23.457211026382886',
            longitude: '-47.50049948706874',
            name: 'Tienda Del Chavo',
            details: 'O melhor luhgar para tomar suco de tamarindo que parece limão',
            opening_hours: 'das 16h as 20h',
            open_on_weekends: true
        }

        cy.apiCreateUser(user)
        cy.uiLogin(user)
        mapPage.createLink()
        createPage.form(foodtruck)
        createPage.submit()
        createPage.modal.haveText('Esse food truck já foi cadastrado!')
    })

    //campos obrigatórios
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
        createPage.form(foodtruck)
        createPage.submit()
        createPage.modal.haveText('O campos nome, descrição e horário de funcionamento devem ser informados para recomendar um food truck!')
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