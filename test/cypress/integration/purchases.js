describe('Purchases', function() {
    it("Create a new purchase", function() {
        cy.visit("/listings/1");
        
        cy.get("[name='author[name]']")
            .type("test");
        
        cy.contains("Create Author")
            .click();
        
        cy.contains("Author was successfully created.");
    });
});