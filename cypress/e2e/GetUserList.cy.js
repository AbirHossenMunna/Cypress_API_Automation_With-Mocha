const envVariable = require('../fixtures/envVariable.json')

describe('Getting User List', () => {
    it('User List', () => {
        cy.request({
            method: 'GET',
            url: envVariable.baseUrl + "/api/users?page=2",
            headers:
            {
                "Authorization": envVariable.token

            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            cy.writeFile('cypress/fixtures/userLists.json', response.body)
        })
    })

    it('Single User List', () => {
        cy.request({
            method: 'GET',
            url: envVariable.baseUrl + "/api/users?id=7",
            headers:
            {
                "Authorization": envVariable.token

            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            cy.writeFile('cypress/fixtures/userLists.json', response.body)
        })
    })

    it('Single User not found', () => {
        cy.request({
            method: 'GET',
            url: envVariable.baseUrl + "/api/users?id=23",
            headers:
            {
                "Authorization": envVariable.token

            },failOnStatusCode: false
        }).then((response) => {
            // Assert the status code
            expect(response.status).to.eq(404);
            
            // Log the response body for debugging
            cy.log(JSON.stringify(response.body));
        })
    })
})