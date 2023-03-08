/// <reference types="Cypress" />

describe("Register tests", () => {
    it("Register with valid credentials", () => {
     cy.visit("/register");
     cy.get("a[href='/register']").click();
     cy.get("#first-name").type("Perica");
     cy.get("#last-name").type("Peric");
     cy.get("#email").type("pericaperic9@gmail.com");
     cy.get("#password").type("perica123");
     cy.get("#password-confirmation").type("perica123");
     cy.get(".form-check-input").click();
     cy.get("button[type='submit']").click();
     cy.url().should("not.contain", "/register");
    })

    it("Register without First Name", () => {
        cy.visit("/register");
        cy.get("a[href='/register']").click();
        cy.get("#last-name").type("Peric");
        cy.get("#email").type("pericaperic9@gmail.com");
        cy.get("#password").type("perica123");
        cy.get("#password-confirmation").type("perica123");
        cy.get(".form-check-input").click();
        cy.get("button[type='submit']").click();
        cy.url().should("contain", "/register");
    })
    
    it("Register without Last Name", () => {
        cy.visit("/register");
        cy.get("a[href='/register']").click();
        cy.get("#first-name").type("Perica");
        cy.get("#email").type("pericaperic9@gmail.com");
        cy.get("#password").type("perica123");
        cy.get("#password-confirmation").type("perica123");
        cy.get(".form-check-input").click();
        cy.get("button[type='submit']").click();
        cy.url().should("contain", "/register");
    })

    it("Register without email address", () => {
        cy.visit("/register");
        cy.get("a[href='/register']").click();
        cy.get("#first-name").type("Perica");
        cy.get("#last-name").type("Peric");
        cy.get("#password").type("perica123");
        cy.get("#password-confirmation").type("perica123");
        cy.get(".form-check-input").click();
        cy.get("button[type='submit']").click();
        cy.url().should("contain", "/register");
    })

    it("Register without password", () => {
        cy.visit("/register");
        cy.get("a[href='/register']").click();
        cy.get("#first-name").type("Perica");
        cy.get("#last-name").type("Peric");
        cy.get("#email").type("pericaperic9@gmail.com");
        cy.get("#password-confirmation").type("perica123");
        cy.get(".form-check-input").click();
        cy.get("button[type='submit']").click();
        cy.url().should("contain", "/register");
    })

    it("Register without password confirmed", () => {
        cy.visit("/register");
        cy.get("a[href='/register']").click();
        cy.get("#first-name").type("Perica");
        cy.get("#last-name").type("Peric");
        cy.get("#email").type("pericaperic9@gmail.com");
        cy.get("#password").type("perica123");
        cy.get(".form-check-input").click();
        cy.get("button[type='submit']").click();
        cy.url().should("contain", "/register");
    })

    it("Register without accepting the terms", () => {
        cy.visit("/register");
        cy.get("a[href='/register']").click();
        cy.get("#first-name").type("Perica");
        cy.get("#last-name").type("Peric");
        cy.get("#email").type("pericaperic9@gmail.com");
        cy.get("#password").type("perica123");
        cy.get("#password-confirmation").type("perica123");
        cy.get("button[type='submit']").click();
        cy.url().should("contain", "/register");
    })
})