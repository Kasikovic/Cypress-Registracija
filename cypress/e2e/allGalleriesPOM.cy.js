/// <reference types="Cypress" />

import { allGalleriesPage } from "../page_object/allGalleriesPage";
import { faker } from "@faker-js/faker";

describe("all galleries page tests", () => {
    let comment = faker.faker.random.words(3);

    beforeEach("visit gallery app and log in", () => {
        cy.loginViaBackend();
        cy.visit("/");
        
    })

    it("all galleries succesully loaded", () => {
        allGalleriesPage.allGalleriesHeading
        .should("be.visible")
        .and("have.text", "All Galleries");

        allGalleriesPage.galleriesGrid.children().should("have.length", 10);
        allGalleriesPage.galleriesGrid.children().each((el) => {
            expect(el).to.exist;
        })
        
        allGalleriesPage.searchInput
        .should("exist")
        .and("be.visible")
        
        cy.get("button")
        .should("have.length", 2); 

        allGalleriesPage.loadMoreButton.click()
        allGalleriesPage.galleriesGrid.children().should("have.length", 20);
    })

    it("single gallery tests", () => {
        allGalleriesPage.singleGalleryHeading
        .should("exist")
        
        allGalleriesPage.singleGalleyAuthor
        .should("exist")

        allGalleriesPage.singleGalleryDate
        .should("exist")

        allGalleriesPage.singleGalleryImage
        .should("exist")
        .and("be.visible")    

        allGalleriesPage.galleryComments
        .should("exist")
        .and("be.visible")

        allGalleriesPage.galleryCommentsArea.type(comment)
        .should("exist")
        .and("be.visible")

        allGalleriesPage.submitButton.click()
        .should("exist")
        allGalleriesPage.deleteButton.click()
        .should("exist")
        
    })
})
