/// <reference types="Cypress" />

describe("login tests", () => {
    it("login with unregistered user", () => {
        cy.visit("/")
        cy.get(locators.loginPage.loginButton).click();
        cy.get(locators.loginPage.emailInput).type("random@mail.com");
        cy.get(locators.loginPage.passwordInput).type("test123");
        cy.get(locators.loginPage.submitButton).click();
        cy.url().should("contain", "/login");
    })

    it("register without email address provided", () => {
        cy.visit("/");
        cy.get(locators.loginPage.loginButton).click();
        cy.get(locators.loginPage.passwordInput).type("test123");
        cy.get(locators.loginPage.submitButton).click();
        cy.url().should("contain", "/login");
    })

    it("register without password", () => {
        cy.visit("/");
        cy.get(locators.loginPage.loginButton).click();
        cy.get(locators.loginPage.emailInput).type("random@mail.com");
        cy.get(locators.loginPage.submitButton).click();
        cy.url().should("contain", "/login");
    })


    it("login with valid credentials", () => {
        cy.visit("/");
       cy.get(locators.loginPage.loginButton).click();
       cy.get(locators.loginPage.emailInput).type("test123456@gmail.com");
       cy.get(locators.loginPage.passwordInput).type("test12345");
       cy.get(locators.loginPage.submitButton).click();
       cy.url().should("not.contain", "/login");
    })

    it("logut", () => {
        cy.visit("/");
        cy.get(locators.loginPage.loginButton).eq(1).click();
        cy.get(locators.loginPage.emailInput).type("test123456@gmail.com");
        cy.get(locators.loginPage.passwordInput).type("test12345");
        cy.get(locators.loginPage.submitButton).click();
        cy.url().should("not.contain", "/login");
        // cy.wait(1500);
        cy.get(".nav-link").eq(3).click();
    })
});