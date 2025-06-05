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

// Custom command to create a new board
Cypress.Commands.add('createBoard', (boardName) => {
  return cy.request({
    method: 'POST',
    url: 'https://api.trello.com/1/boards',
    qs: {
      name: boardName,
      key: Cypress.env('apiKey'),
      token: Cypress.env('token')
    }
  });
});

// Custom command to create a new list
Cypress.Commands.add('createList', (boardId, listName) => {
  return cy.request({
    method: 'POST',
    url: 'https://api.trello.com/1/lists',
    qs: {
      name: listName,
      idBoard: boardId,
      key: Cypress.env('apiKey'),
      token: Cypress.env('token')
    }
  });
});

// Custom command to create a new card
Cypress.Commands.add('createCard', (listId, cardName) => {
  return cy.request({
    method: 'POST',
    url: 'https://api.trello.com/1/cards',
    qs: {
      name: cardName,
      idList: listId,
      key: Cypress.env('apiKey'),
      token: Cypress.env('token')
    }
  });
});

// Custom command to delete a board
Cypress.Commands.add('deleteBoard', (boardId) => {
  return cy.request({
    method: 'DELETE',
    url: `https://api.trello.com/1/boards/${boardId}`,
    qs: {
      key: Cypress.env('apiKey'),
      token: Cypress.env('token')
    }
  });
});

// Custom command to get board details
Cypress.Commands.add('getBoard', (boardId) => {
  return cy.request({
    method: 'GET',
    url: `https://api.trello.com/1/boards/${boardId}`,
    qs: {
      key: Cypress.env('apiKey'),
      token: Cypress.env('token')
    }
  });
});

// Custom command to get all lists in a board
Cypress.Commands.add('getBoardLists', (boardId) => {
  return cy.request({
    method: 'GET',
    url: `https://api.trello.com/1/boards/${boardId}/lists`,
    qs: {
      key: Cypress.env('apiKey'),
      token: Cypress.env('token')
    }
  });
});

// Custom command to get all cards in a list
Cypress.Commands.add('getListCards', (listId) => {
  return cy.request({
    method: 'GET',
    url: `https://api.trello.com/1/lists/${listId}/cards`,
    qs: {
      key: Cypress.env('apiKey'),
      token: Cypress.env('token')
    }
  });
});