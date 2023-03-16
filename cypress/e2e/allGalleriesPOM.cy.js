/// <reference types="Cypress" />
import { loginPage } from "../page_object/loginPage";
import { allGalleriesPage } from "../page_object/allGalleriesPage";

describe("all galleries page tests", () => {
    beforeEach("visit gallery app and log in", () => {
        cy.visit("/login");
        loginPage.login("pericaperic11@gmail.com", "test12345");
        cy.url().should("not.contain", "/login");
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

        allGalleriesPage.singleGalleryHeading.click()
        cy.url().should("include", "https://gallery-app.vivifyideas.com/galleries/");
        allGalleriesPage.galleryComments
        .should("exist")
        .and("be.visible")

        allGalleriesPage.galleryCommentsArea.type("komentar")
        .should("exist")
        .and("be.visible")

        allGalleriesPage.submitButton.click()
        .should("exist")
        allGalleriesPage.deleteButton.click()
        .should("exist")
        
    })
    
    
})