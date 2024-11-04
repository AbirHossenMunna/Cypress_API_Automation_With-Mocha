// const envVariable = require('../fixtures/envVariable.json') // one way
import { baseUrl, token } from '../fixtures/envVariable.json';

import Utils from '../fixtures/Utils';
// One way Import Faker.js
// const { faker } = require('@faker-js/faker');
import { faker } from '@faker-js/faker'; //another way for import


describe('Creating a new User ', () => {
    const utils = new Utils();
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const fullname = firstName + '' + lastName;
    const job = faker.person.jobTitle();
    const randomPhoneNumber = "017" + utils.randomGenerate(10000000, 99999999);
    it('Create user', () => {
        cy.request({
            method: 'POST',
            // url: envVariable.baseUrl + "/api/users", //call const
            url: baseUrl + "/api/users", // 2ND WAY
            headers: {
                "Authorization": token
            },
            body: {
                "name": fullname,
                "job": job,
                "Phone_Number": randomPhoneNumber
            }
        }).then((response) => {
            expect(response.status).to.eq(201);
            cy.log(response.body)
            cy.writeFile('cypress/fixtures/users.json', response.body)
        })
    })
})