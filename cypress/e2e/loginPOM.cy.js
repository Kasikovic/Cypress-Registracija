/// <reference types="Cypress" />
import { loginPage } from "../page_objects/loginPage";

describe("login tests using POM", () => {
  before("visit the app and click the login button", () => {
    cy.visit("/");
    loginPage.loginLink.click();
    cy.url().should("include", "/login");
  });

  it("login with valid credentials", () => {
    loginPage.login("pericaperic9@gmail.com", "perica123");
    cy.url().should("not.contain", "/login");
  });
  
});