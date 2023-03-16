/// <reference types="Cypress" />
import { loginPage } from "../page_object/loginPage";
import { createGalleryPage } from "../page_object/createGalleryPage";
import { allGalleriesPage } from "../page_object/allGalleriesPage";
import { faker } from "@faker-js/faker";


describe("create gallery tests", () => {
    const userData = {
        randomTitle: faker.random.word(),
        randomTitleEmpty: faker.system.commonFileExt(),
        randomDescriptions: faker.lorem.words(3),
    };

    beforeEach("visit gallery app and log in", () => {
        cy.visit("/login");
        loginPage.login("pericaperic11@gmail.com", "test12345");
        cy.url().should("not.contain", "/login");
        createGalleryPage.createGalleryLink.click()
    })

    it("create gallery without title", () => {
        createGalleryPage.createGallery(
        " ",
        userData.randomDescriptions,
        ("https://www.skole.hr/wp-content/uploads/2018/07/shutterstock_728372137.jpg"));
        createGalleryPage.errorMessage
        .should("exist")
        .and("be.visible")
        .and("have.text", "The title field is required.")
        .and("have.css", "background-color", "rgb(248, 215, 218)")
        .and("have.css", "color", "rgb(114, 28, 36)")
        .and("have.class", "alert-danger");
    })

    it("create gallery without image url", () => {
        createGalleryPage.createGallery(
            userData.randomTitle,
            userData.randomDescriptions,
            " ")
            
    })

    it("edit and delete gallery", () => {
        createGalleryPage.createGallery(
            userData.randomTitle,
            userData.randomDescriptions,
            ("https://www.skole.hr/wp-content/uploads/2018/07/shutterstock_728372137.jpg"));
        allGalleriesPage.singleGalleryHeading.click()
            
    })

    it("create gallery without description", () => {
        createGalleryPage.createGallery(
            userData.randomTitle,
            " ",
            ("https://www.skole.hr/wp-content/uploads/2018/07/shutterstock_728372137.jpg"))
    })

    it("create gallery with valid data", () => {
        createGalleryPage.createGallery(
            userData.randomTitle,
            userData.randomDescriptions,
            ("https://www.skole.hr/wp-content/uploads/2018/07/shutterstock_728372137.jpg"));
            cy.url().should("not.contain", "/create");
    })

})