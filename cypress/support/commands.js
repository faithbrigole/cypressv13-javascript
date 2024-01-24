Cypress.Commands.add('deleteUser', (userToken) => {
  cy.request({
    method: 'DELETE',
    url: 'https://thinking-tester-contact-list.herokuapp.com/users/me',
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  }).then((response) => {
    expect(response.status).to.be.equal(200)
  })
})

Cypress.Commands.add('addUser', () => {
  cy.request({
    method: 'POST',
    url: 'https://thinking-tester-contact-list.herokuapp.com/users',
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
    data: {},
  })
})

Cypress.Commands.add('userAuthentication', () => {
  cy.request({
    method: 'POST',
    url: 'https://thinking-tester-contact-list.herokuapp.com/users/login',
    body: {
      email: Cypress.env('userEmail'),
      password: Cypress.env('userPassword'),
    },
  }).then((response) => {
    cy.log('Response:', response)
    expect(response.status).to.be.equal(200)
  })
})
