describe('Testing Purchases', function() {
    it("Make a purchase", function() {
        cy.visit("/authors/new");                          //visit the the first listing   
        cy.get("[name='author[name]']").type("test"); 
        
        cy.contains("Create Author").click();
        
        cy.contains("Author was successfully created.");
    });
});