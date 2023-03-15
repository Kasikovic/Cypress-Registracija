/// <reference types="Cypress" />

describe("register tests", () => {
    it("register without first name provided", () => {
      cy.visit("/register");
      cy.get("#last-name").type("Peric");
      cy.get("#email").type("pericaperic11@gmail.com");
      cy.get("#password").type("test12345");
      cy.get("#password-confirmation").type("test12345");
      cy.get(":checkbox").check();
      cy.get("button").click();
      cy.url().should("include", "/register");
    });
  
    it("register with email address missing '@'", () => {
      cy.visit("/register");
      cy.get("#first-name").type("Perica");
      cy.get("#last-name").type("Peric");
      cy.get("#email").type("pericaperic11@gmail.com");
      cy.get("#password").type("test12345");
      cy.get("#password-confirmation").type("test12345");
      cy.get(":checkbox").check();
      cy.get("button").click();
      cy.url().should("include", "/register");
    });
  
    it("register with password less than 8 characters", () => {
      cy.visit("/register");
      cy.get("#first-name").type("Perica");
      cy.get("#last-name").type("Peric");
      cy.get("#email").type("pericaperic11@gmail.com");
      cy.get("#password").type("test123");
      cy.get("#password-confirmation").type("test12345");
      cy.get(":checkbox").check();
      cy.get("button").click();
      cy.url().should("include", "/register");
    });
  
    it("register with invalid password confirmation", () => {
      cy.visit("/register");
      cy.get("#first-name").type("Perica");
      cy.get("#last-name").type("Peric");
      cy.get("#email").type("pericaperic11@gmail.com");
      cy.get("#password").type("test12345");
      cy.get("#password-confirmation").type("test1234");
      cy.get(":checkbox").check();
      cy.get("button").click();
      cy.url().should("include", "/register");
    });
  
    it("register without accepting terms and conditions", () => {
      cy.visit("/register");
      cy.get("#first-name").type("Perica");
      cy.get("#last-name").type("Peric");
      cy.get("#email").type("pericaperic11@gmail.com");
      cy.get("#password").type("test12345");
      cy.get("#password-confirmation").type("test12345");
      cy.get("button").click();
      cy.url().should("include", "/register");
    });
  
    it("register with incomplete email address", () => {
      cy.visit("/register");
      cy.get("#first-name").type("Perica");
      cy.get("#last-name").type("Peric");
      cy.get("#email").type("pericaperic11@gmail.com");
      cy.get("#password").type("test12345");
      cy.get("#password-confirmation").type("test12345");
      cy.get(":checkbox").check();
      cy.get("button").click();
      cy.url().should("include", "/register");
    });
  
    it("register with valid data", () => {
      cy.visit("/register");
      cy.get("#first-name").type("Perica");
      cy.get("#last-name").type("Peric");
      cy.get("#email").type("pericaperic11@gmail.com");
      cy.get("#password").type("test12345");
      cy.get("#password-confirmation").type("test12345");
      cy.get(":checkbox").check();
      // cy.get("input[type='checkbox']");
      // cy.get("input").eq(5);
      // cy.get("input").last();
      // cy.get(".form-check-input");
      cy.get("button").click();
      cy.url().should("not.include", "/register");
    });
  });