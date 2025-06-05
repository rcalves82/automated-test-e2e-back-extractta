/* 3) Para validarmos a sua técnica de automação de testes, vamos utilizar uma api de desenvolvimento referente a plataforma Trello. 
Caso não conheça o Trello, acessar: www.trello.com 
Link da api para desenvolvimento: https://developers.trello.com/docs/api-introduction 
Com o end-point acima, crie testes automatizados para as seguintes ações:  

Obs: Utilizar o Cypress como ferramenta de automação. 

Para a automação de testes realizada, ilustre através de um mapa mental, a  sua estratégia de testes para construção do seu projeto. 
Primeiro mapear quais end-pont irei excutar e quais a sequencias.*/

describe("Trello API Test", () => {
  let boardId;
  let listId;
  let cardId;

  it("Create a new board", () => {
    cy.createBoard("New Board").then((response) => {
      expect(response.status).to.eq(200);
      boardId = response.body.id;
    });
  });

  it("Check the list of boards", () => {
    cy.getBoardLists(boardId).then((response) => {
      expect(response.status).to.eq(200);
      listId = response.body[0].id;
    });
  });

  it("Create card on the board", () => {
    cy.createCard(listId, "CARD TESTE").then((response) => {
      expect(response.status).to.eq(200);
      cardId = response.body.id;
    });
  });

  it("Delete the card", () => {
    cy.request({
      method: "DELETE",
      url: `https://api.trello.com/1/cards/${cardId}`,
      qs: {
        key: Cypress.env('apiKey'),
        token: Cypress.env('token')
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("Delete the board", () => {
    cy.deleteBoard(boardId).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
