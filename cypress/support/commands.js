// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (user)=> {
    cy.visit('/')
    //modificação do commands devido a validação do desafio
    if (user.instagram) cy.get('input[name=instagram]').type(user.instagram)
    if (user.password) cy.get('input[name=password]').type(user.password)
    cy.contains('button', 'Entrar').click()
  })
  
  Cypress.Commands.add('modalHaveText', (text)=> {
    cy.get('.swal2-html-container')
      .should('be.visible')
      .should('have.text', text)
  })
  
  Cypress.Commands.add('loggedUser', (name)=> {
    cy.get('.logged-user')
      .should('be.visible')
      .should('have.text', `Olá, ${name}`)
  })

  //Correção do desafio onde esses pontos foram comentados, devido a resolução ser mais rápido no primeiro commands
  // dia 16/08
  //remoção dos commands criados para o desafio
  //Cypress.Commands.add('fieldNull',()=>{
  //  cy.visit('/')
  //  cy.contains('button', 'Entrar').click()
  //}) 


  //Cypress.Commands.add('intagramNull', (user)=> {
  //  cy.visit('/')
  //  cy.get('input[name=password]').type(user.password)
  //  cy.contains('button', 'Entrar').click()
  //})

  //Cypress.Commands.add('passwordNull', (user)=> {
  //  cy.visit('/')
  //  cy.get('input[name=instagram]').type(user.instagram)
  //  cy.contains('button', 'Entrar').click()
  //})