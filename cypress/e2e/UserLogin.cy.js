const envVariable = require('../fixtures/envVariable.json')

describe('user login', () => {
  it('login with valid username and password', () => {
    cy.request({
      method: 'POST',
      url: envVariable.baseUrl + "/api/login",
      body:
      {
        "email": "eve.holt@reqres.in",
        "password": "pistol"
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      var token = response.body.token
      envVariable.token = token
      cy.writeFile('cypress/fixtures/envVariable.json', JSON.stringify(envVariable))
    })
  })

  it('login with only username', () => {
    cy.request({
      method: 'POST',
      url: envVariable.baseUrl + "/api/login",
      body:
      {
        "email": "eve.holt@reqres.in"
      },failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body.error).to.eq('Missing password');
      // Log the response body for debugging
      cy.log(JSON.stringify(response.body));
    })
  })

  it('login with wrong username and valid password', () => {
    cy.request({
      method: 'POST',
      url: envVariable.baseUrl + "/api/login",
      body:
      {
        "email": "eve.holt@reqres",
        "password": "pistol"
      },failOnStatusCode: false
    }).then((response) => {
      // Assert the status code
      expect(response.status).to.eq(400);
        
      // Assert the response body contains the expected error message
      expect(response.body.error).to.eq('user not found'); // Adjust based on actual API response for wrong email

      // Log the response body for debugging
      cy.log(JSON.stringify(response.body));
    })
  })
})