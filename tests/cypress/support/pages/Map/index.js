class MapPage {

    loggedUser(name) {

      const firstname = name.split(' ')[0]

        cy.get('.logged-user')
          .should('be.visible')
          .should('have.text', `Olá, ${firstname}`)
    }

    createLink() {
        cy.get('a[href="/foodtrucks/create"]')
          .should('be.visible')
          .click()        
    }

    goToFoodtruck(foodtruckname) {
      cy.get(`img[alt="${foodtruckname}"]`)
          .should('be.visible')
          .click({force: true})
        
        cy.get('.leaflet-popup-content a').click()
    }

}

export default new MapPage()