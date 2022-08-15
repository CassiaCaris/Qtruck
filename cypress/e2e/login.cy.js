describe('Login', () => {
  it('deve logar com sucesso', () => {
    const user = {
      name: 'CASSIA',
      instagram: '@cassiabrilholuar',
      password: 'pwd123'
    }
    cy.login(user)
    cy.loggedUser(user.name)
  })

  it('nao deve logar com senha incorreta', () => {
    const user = {
      instagram: '@cassiabrilholuar',
      password: 'p123123'
    }
    cy.login(user)
    cy.modalHaveText('Credenciais inválidas, tente novamente!')
  })

  it('nao deve logar com instagram inexistente', () => {
    const user = {
      instagram: '@testcypress',
      password: 'p123123'
    }
    cy.login(user)
    cy.modalHaveText('Credenciais inválidas, tente novamente!')
  })
})