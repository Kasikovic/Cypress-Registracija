class CreateGalleryPage {
    get createGalleryLink() {
        return cy.get("a[href= '/create']");
    }

    get titleInput() {
        return cy.get("#title");
    }

    get descriptionInput() {
        return cy.get("#description");
    }

    get imageInput() {
        return cy.get(":url");
    }

    get moveUpButton() {
        return cy.get(":button").eq(0);
    }

    get moveDownButton() {
        return cy.get(":button").eq(1);
    }

    get addImageButton() {
        return cy.get(":button").eq(2);
    }

    get submitButton() {
        return cy.get(":submit");
    }

    createGallery(title, description, url) {
        this.titleInput.type(title);
        this.descriptionInput.type(description);
        this.imageInput.type(url);
        this.moveUpButton.click();
        this.moveDownButton.click();
        this.submitButton.click();
    }
}

export const createGalleryPage = new CreateGalleryPage();