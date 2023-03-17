/// <reference types="Cypress" />
import { createGalleryPage } from "../page_object/createGalleryPage";
import { faker } from "@faker-js/faker";


describe("create gallery tests", () => {
    let galleryId;
    let userData = {
        randomTitle: faker.random.word(),
        randomDescriptions: faker.lorem.words(3),
        randomImage: faker.image.image() + ".jpg",
    };

    before("visit gallery app and log in", () => {
        cy.loginViaBackend();
    })

    it("create gallery without title", () => {
        createGalleryPage.createGallery(
        " ",
        userData.randomDescriptions,
        userData.randomImage)
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

    it("create gallery without description", () => {
        createGalleryPage.createGallery(
            userData.randomTitle,
            " ",
            userData.randomImage)
    })

    it.only("create gallery with valid data", () => {
        cy.intercept({
            method: "POST",
            url: Cypress.env("apiUrl") + "/galleries",
        }).as("galleryCreation");

        cy.visit("/create");
        cy.url().should("include", "/create");
        createGalleryPage.createGallery(
            userData.randomTitle,
            userData.randomDescriptions,
            userData.randomImage,
        ); 

        cy.wait("@galleryCreation").then((interception) => {
            expect(interception.response.statusCode).to.be.equal(201);
            galleryId = interception.response.body.id;
      
            cy.visit("/galleries/" + galleryId);
        });    
    })
})