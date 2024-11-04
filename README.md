# Cypress_API_Automation_With_Mocha

### An API is tested by using Cypress integrated with Mocha framework as testing framework for validation purpose. Here, the status codes, validation messages and the flow of API is tested using a Reqres API where there is login,register ,searching,creating,updating features.

Here the following tasks are done:

* Login feature tested using proper valiadtion,negative test cases added for email and password.
* Registration feature tested using proper valiadtion,negative test cases added for email and password.
* Can search any user by proper id.
* Can create a user by random name,email,password,nid and phone number using proper validation.
* Can update any user by the corresponding id, validated using PUT and PATCH method.
* The variables are set and used from config.properties file.

### Technology:

* Tool: Cypress
* IDE: Visual Studio Code
* Language: JavaScript
* Test_Runner: Mocha

### Project Run

* Clone the repo.
* Open cmd in the root folder.


### Run the Automation Script by the following command:

```bash
  npm init -y
```
```bash
  npx cypress run
```

* After automation to view report , give the following commands:

```bash
  npm i mochawesome-report-generator
```
#### Here is the report overview:
![Screenshot 2024-11-05 025349](https://github.com/user-attachments/assets/40322f90-08d8-4bad-a4b2-c4d8182afc6a)


