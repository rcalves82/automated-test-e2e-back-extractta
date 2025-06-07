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