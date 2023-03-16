/// <reference types="Cypress" />
import { loginPage } from "../page_object/loginPage";
import { createGalleryPage } from "../page_object/createGalleryPage";
import { faker } from "@faker-js/faker";

const userData = {
    randomTitle: faker.random.word(),
    randomDescriptions: faker.lorem.words(3),
};
describe("all galleries page tests", () => {
    beforeEach("visit gallery app and log in", () => {
        cy.visit("/login");
        loginPage.login("pericaperic11@gmail.com", "test12345");
        cy.url().should("not.contain", "/login");
        createGalleryPage.createGalleryLink.click()
    })

    it("create gallery with valid data", () => {
        createGalleryPage.createGallery(
            userData.randomTitle,
            userData.randomDescriptions,
            ("https://www.skole.hr/wp-content/uploads/2018/07/shutterstock_728372137.jpg"));
    })

})