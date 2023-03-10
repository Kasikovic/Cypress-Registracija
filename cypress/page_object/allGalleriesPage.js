class AllGalleriesPage {
    get allGalleriesLink() {
        return cy.get(".nav-link nav-buttons router-link-exact-active router-link-active");
    }

    get searchInput() {
        return cy.get(".form-control");
    }

    get filterButton() {
        return cy.get(".btn btn-outline-secondary input-button");
    }

    get loadMoreButton() {
        return cy.get(".btn btn-custom");
    }

    allGalleries(search) {
        this.searchInput.type(search);
        this.filterButton.click();
        this.loadMoreButton.click();
    }
}