describe('User Logins', () => {
  beforeEach(() => {
    cy.visit('')
  })

  it('Valid Login', () => {
    cy.get('input#email').type(Cypress.env('userEmail'))
    cy.get('input#password').type(Cypress.env('userPassword'))
    cy.get('button#submit').click()

    // assertions
    cy.contains('Contact List').should('exist')
    cy.get('h1').should('have.text', 'Contact List')
    cy.get('h1').should('contain', 'Contact List').should('be.visible')
  })

  it('Invalid Email', () => {
    cy.get('input#email').type('invalid@g.com')
    cy.get('input#password').type(Cypress.env('userPassword'))
    cy.get('button#submit').click()

    // assertions
    cy.contains('Incorrect username or password').should('exist')
  })

  it('Invalid Password', () => {
    cy.get('input#email').type(Cypress.env('userPassword'))
    cy.get('input#password').type('passwordwewe')
    cy.get('button#submit').click()

    // assertions
    cy.contains('Incorrect username or password').should('exist')
  })

  it('Empty Fields', () => {
    cy.get('button#submit').click()

    // assertions
    cy.contains('Incorrect username or password').should('exist')
  })
})
