/// <reference types="Cypress" />

const locators = require("../fixtures/locators.json");
import { faker } from '@faker-js/faker';

describe("register test with locators", () => {
        const userData ={
            randomFirstName: faker.name.firstName(),
            randomLastName: faker.name.lastName(),
            randomEmail: faker.internet.email(),
            randomPassword: faker.internet.password(8, true) +1,
            rHgS5orgPvsuzJ7shn8vw28y1XaePY4uDP: faker.internet.password(8, true, "^[a-zA-Z0-9_]*$"),
            shortPassword: faker.internet.password(2),
            randomEmailWithOutMonkey: faker.internet.email().replace("@", "")
        }

    beforeEach("visit gallery app and click on the register link", () => {
        cy.visit("/register");
        cy.get(locators.registerPage.registerButton).click();
    })
    it("register with valid data using locators", () => {
        cy.get(locators.registerPage.firstNameInput).type(userData.randomFirstName);
        cy.get(locators.registerPage.lastNameInput).type(userData.randomLastName);
        cy.get(locators.commonElements.emailInput).type(userData.randomEmail);
        cy.get(locators.commonElements.passwordInput).type(userData.randomPassword);
        cy.get(locators.registerPage.passwordConfirmationInput).type(userData.randomPassword);
        cy.get(locators.registerPage.termCheckBox).check();
        cy.get(locators.registerPage.submitButton).click();
        cy.url().should("not.contain", "/register");
    })
    it("Register without First Name using locators", () => {
        cy.get(locators.registerPage.lastNameInput).type(userData.randomLastName);
        cy.get(locators.commonElements.emailInput).type(userData.randomEmail);
        cy.get(locators.commonElements.passwordInput).type(userData.randomPassword);
        cy.get(locators.registerPage.passwordConfirmationInput).type(userData.randomPassword);
        cy.get(locators.registerPage.termCheckBox).check();
        cy.get(locators.registerPage.submitButton).click();
        cy.url().should("contain", "/register");
    })
    it("Register without Last Name using locators", () => {
        cy.get(locators.registerPage.firstNameInput).type(userData.randomFirstName);
        cy.get(locators.commonElements.emailInput).type(userData.randomEmail);
        cy.get(locators.commonElements.passwordInput).type(userData.randomPassword);
        cy.get(locators.registerPage.passwordConfirmationInput).type(userData.randomPassword);
        cy.get(locators.registerPage.termCheckBox).check();
        cy.get(locators.registerPage.submitButton).click();
        cy.url().should("contain", "/register");
    })
    it("Register without email address using locators", () => {
        cy.get(locators.registerPage.firstNameInput).type(userData.randomFirstName);
        cy.get(locators.registerPage.lastNameInput).type(userData.randomLastName);
        cy.get(locators.commonElements.passwordInput).type(userData.randomPassword);
        cy.get(locators.registerPage.passwordConfirmationInput).type(userData.randomPassword);
        cy.get(locators.registerPage.termCheckBox).check();
        cy.get(locators.registerPage.submitButton).click();
        cy.url().should("contain", "/register");
    })
    it("Register without password using locators", () => {
        cy.get(locators.registerPage.firstNameInput).type(userData.randomFirstName);
        cy.get(locators.registerPage.lastNameInput).type(userData.randomLastName);
        cy.get(locators.commonElements.emailInput).type(userData.randomEmail);
        cy.get(locators.registerPage.passwordConfirmationInput).type(userData.randomPassword);
        cy.get(locators.registerPage.termCheckBox).check();
        cy.get(locators.registerPage.submitButton).click();
        cy.url().should("contain", "/register");
    })
    it("Register without password confirmed using locators", () => {
        cy.get(locators.registerPage.firstNameInput).type(userData.randomFirstName);
        cy.get(locators.registerPage.lastNameInput).type(userData.randomLastName);
        cy.get(locators.commonElements.emailInput).type(userData.randomEmail);
        cy.get(locators.commonElements.passwordInput).type(userData.randomPassword);
        cy.get(locators.registerPage.termCheckBox).check();
        cy.get(locators.registerPage.submitButton).click();
        cy.url().should("contain", "/register");
    })
    it("Register without accepting the terms using locators", () => {
        cy.get(locators.registerPage.firstNameInput).type(userData.randomFirstName);
        cy.get(locators.registerPage.lastNameInput).type(userData.randomLastName);
        cy.get(locators.commonElements.emailInput).type(userData.randomEmail);
        cy.get(locators.commonElements.passwordInput).type(userData.randomPassword);
        cy.get(locators.registerPage.passwordConfirmationInput).type(userData.randomPassword);
        cy.get(locators.registerPage.submitButton).click();
        cy.url().should("contain", "/register");
    })

})