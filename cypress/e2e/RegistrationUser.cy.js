const envVariable = require('../fixtures/envVariable.json')

describe('user Registration', () => {
    it('Registration with valid username and password', () => {
        cy.request({
            method: 'POST',
            url: envVariable.baseUrl + "/api/register",
            body:
            {
                "email": "eve.holt@reqres.in",
                "password": "pistol"
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            cy.log(JSON.stringify(response.body));
        })
    })

    it('Registration with only username', () => {
        cy.request({
            method: 'POST',
            url: envVariable.baseUrl + "/api/register",
            body:
            {
                "email": "eve.holt@reqres.in"
            },failOnStatusCode: false
        }).then((response) => {
            // Assert the status code
            expect(response.status).to.eq(400);

            // Assert the response body contains the expected error message
            expect(response.body.error).to.eq('Missing password');
            
            // Log the response body for debugging
            cy.log(JSON.stringify(response.body));
        })
    })
})