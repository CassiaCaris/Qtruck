import modal from "../Components/Modal"

class CreatePage {

    constructor() {
        this.modal = modal
    }
    
    form(foodtruck) {
        cy.setGeolocation(foodtruck.latitude, foodtruck.longitude)
        if (foodtruck.name) cy.get('input[name=name]').type(foodtruck.name)
        if (foodtruck.details) cy.get('textarea[name=details]').type(foodtruck.details)
        if (foodtruck.opening_hours) cy.get('input[name=opening-hours').type(foodtruck.opening_hours)

        cy.contains('button', foodtruck.open_on_weekends ? 'Sim' : 'Não')
          .click()

        //desenvolvimento mais detalhado para localizar o campo nome do food truck
        //cy.contains('label', 'Nome')
        //  .parent()
        //  .find('input').type(foodtruck.name)

        //label[text()="Nome"]/..//input[3]  

        //Dependendo da formatação da modelagem te essa opção de desenvolvimento  
        //if (foodtruck.open_on_weekends === 'Sim')
        //    cy.contains('button','Sim').click()

        //if (foodtruck.open_on_weekends === 'Não')
        //    cy.contains('button','Não').click()
    }

    submit() {
        cy.contains('button', 'Cadastrar').click()
    }

}

export default new CreatePage()