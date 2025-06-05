describe('Authentication Tests', () => {
  const invalidApiKey = 'invalid_api_key_123';
  const invalidToken = 'invalid_token_456';

  it('should fail when using invalid API key', () => {
    cy.testInvalidApiKey(invalidApiKey).then((response) => {
      expect(response.status).to.eq(401);
    });
  });

  it('should fail when using invalid token', () => {
    cy.testInvalidToken(invalidToken).then((response) => {
      expect(response.status).to.eq(401);
    });
  });

  it('should fail when using both invalid API key and token', () => {
    cy.testInvalidCredentials(invalidApiKey, invalidToken).then((response) => {
      expect(response.status).to.eq(401);
    });
  });
}); 