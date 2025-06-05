// Custom command to test authentication with invalid API key
Cypress.Commands.add('testInvalidApiKey', (invalidApiKey) => {
  return cy.request({
    method: 'GET',
    url: 'https://api.trello.com/1/members/me',
    qs: {
      key: invalidApiKey,
      token: Cypress.env('token')
    },
    failOnStatusCode: false
  });
});

// Custom command to test authentication with invalid token
Cypress.Commands.add('testInvalidToken', (invalidToken) => {
  return cy.request({
    method: 'GET',
    url: 'https://api.trello.com/1/members/me',
    qs: {
      key: Cypress.env('apiKey'),
      token: invalidToken
    },
    failOnStatusCode: false
  });
});

// Custom command to test authentication with both invalid credentials
Cypress.Commands.add('testInvalidCredentials', (invalidApiKey, invalidToken) => {
  return cy.request({
    method: 'GET',
    url: 'https://api.trello.com/1/members/me',
    qs: {
      key: invalidApiKey,
      token: invalidToken
    },
    failOnStatusCode: false
  });
}); 