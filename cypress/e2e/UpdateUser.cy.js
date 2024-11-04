import { baseUrl, token } from '../fixtures/envVariable.json';
import Utils from '../fixtures/Utils';
import { faker } from '@faker-js/faker'; //another way for import

describe('Updating a User information', () => {

    it('Update all data', () => {
        const utils = new Utils();
        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();
        const fullname = firstName + '' + lastName;
        const job = faker.person.jobTitle();
        const randomPhoneNumber = "017" + utils.randomGenerate(10000000, 99999999);
        cy.request({
            method: 'PUT',
            // url: envVariable.baseUrl + "/api/users", //call const
            url: baseUrl + "/api/users/7", // 2ND WAY
            headers: {
                "Authorization": token
            },
            body: {
                "name": fullname,
                "job": job,
                "Phone_Number": randomPhoneNumber
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            cy.log(response.body)
            cy.writeFile('cypress/fixtures/users.json', response.body)
        })
    })

    it('Update all data', () => {
        cy.request({
            method: 'PATCH',
            // url: envVariable.baseUrl + "/api/users", //call const
            url: baseUrl + "/api/users/7", // 2ND WAY
            headers: {
                "Authorization": token
            },
            body: {
                "name": "Abir Hossen",
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            cy.log(response.body)
            cy.writeFile('cypress/fixtures/users.json', response.body)
        })
    })
})