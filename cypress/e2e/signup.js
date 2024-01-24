const {
  generateFirstName,
  generateLastName,
  generateEmailAddress,
  generatePassword,
} = require('../support/generate-user-components')

let accessToken = ''

describe('User Signup', () => {
  before(() => {
    cy.visit('/')
    cy.get('#signup').click()
  })

  afterEach(() => {
    cy.deleteUser(accessToken)
  })

  it('user signups', () => {
    cy.get('#firstName').type(generateFirstName())
    cy.get('#lastName').type(generateLastName())
    cy.get('#email').type(generateEmailAddress())
    cy.get('#password').type(generatePassword())
    cy.get('#submit').click()

    // assertion
    cy.contains('Contact List').should('exist')

    cy.getCookie('token').then((cookie) => {
      accessToken = cookie.value
    })
  })
})
