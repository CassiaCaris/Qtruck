
class foodtruckPage {

    addReview(review) {
        cy.get('textarea[name=comment]').type(review.comment)
        cy.get(`input[name=stars][value="${review.stars}"]`)
          .click({force: true})
        cy.contains('button', 'Enviar avaliação').click()
    }

    reviewShouldBe(review, user) {
        cy.contains('.review-box', user.instagram) .as('reviewBox')

        cy.get('@reviewBox')
          .find('.comment p')
          .should('have.text', review.comment)

        cy.get('@reviewBox')
          .find('.stars svg')
          .should('have.length', review.stars)
          
    }
    
}

export default new foodtruckPage()

//Comando que estava usando no commands antes de criar o page
//Cypress.Commands.add('validationReview', (user, review)=>{
//    cy.get('.review-box-container')
//          .should('be.visible')

//    cy.get('.details > strong')
//          .should('be.visible')
//          .should('have.text', user.name)
//    cy.get('.user .stars')
//          .should('be.visible', review.stars)
//    cy.get('.comment')
//          .should('be.visible')
//          .should('have.text', review.comment)
//})