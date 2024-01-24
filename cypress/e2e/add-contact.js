const {
  generateFirstName,
  generateLastName,
  generateEmailAddress,
  generateDateOfBirth,
  generatePhoneNumber,
  generateCity,
  generateState,
  generatePostalCode,
  generateStreetAddress1,
  generateStreetAddress2,
  generateCountry,
} = require('../support/generate-user-components')

const firstName = generateFirstName()
const lastName = generateLastName()

describe('Add Contact', () => {
  before(() => {
    cy.userAuthentication()
  })

  beforeEach(() => {
    cy.visit(`/contactList`)
  })

  it('User adds contact', () => {
    cy.get('#add-contact', { timeout: 10000 }).should('be.visible')
    cy.get('button#add-contact').click()

    cy.get('#firstName').type(firstName)
    cy.get('#lastName').type(lastName)
    cy.get('#birthdate').type(generateDateOfBirth())
    cy.get('#email').type(generateEmailAddress())
    cy.get('#phone').type(generatePhoneNumber())
    cy.get('#street1').type(generateStreetAddress1())
    cy.get('#street2').type(generateStreetAddress2())
    cy.get('#city').type(generateCity())
    cy.get('#stateProvince').type(generateState())
    cy.get('#postalCode').type(generatePostalCode())
    cy.get('#country').type(generateCountry())

    cy.get('#submit').click()

    //assertion
    cy.contains(`${firstName} ${lastName}`).should('exist')
    cy.contains('Contact List').should('exist')
  })
})
