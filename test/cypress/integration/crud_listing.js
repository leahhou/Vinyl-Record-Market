describe('Rails Listing CRUD', function() {

    beforeEach(function() {
        cy.app("clean")
        cy.app("seed")
        cy.login()
    })

    it("create a listing", function() {
        
           cy.contains("Sell A Record").click(); 
    
           cy.get("[name='listing[artist]']").type("Radiohead"); 
        
           cy.get("[name='listing[title]']").type("Pablo Honey"); 

           cy.get('select').select('2LP').should('have.value', '1'); 

           cy.get("[name='listing[year]']").type("1993"); 

           cy.get("[name='listing[price]']").type("200"); 

           cy.get("[type='radio']").check("good"); 

           cy.get("[name='listing[description]']").type("Pick Up Only"); 

           cy.contains("Continue").click(); 
 
           cy.get("[type='checkbox']").check(['4', '2']); 

           cy.contains("Create/Update Album").click(); 

    });

    it("update a listing", function() {
        
        cy.visit("/"); 
        cy.contains("My Profile").click();
        cy.contains("My Current Listings");
        cy.get(".card:first").within(() => {
            cy.get('a').click();
          });
        cy.contains("Edit Album").click(); 
        cy.get("[name='listing[artist]']").clear().type("The Beatles"); 
        cy.get("[name='listing[title]']").clear().type("Hey Jude"); 
        cy.get('select').select('2LP').should('have.value', '1'); 
        cy.get("[name='listing[year]']").clear().type("1993"); 
        cy.get("[type='radio']").check("good"); 
        cy.get("[name='listing[description]']").clear().type("Pick Up Only"); 
        cy.contains("Continue").click(); 
        cy.get("[type='checkbox']").check(['4', '2']); 

        cy.contains("Create/Update Album").click(); 
    });

    it("delete a listing", function() {
        cy.visit("/"); 
        cy.contains("My Profile").click();
        cy.contains("My Current Listings");
        cy.get(".card:first").within(() => {
            cy.get('a').click();
          });
        cy.contains("Delete Album").click(); 
          cy.url().should('include', '/users/my_profile');
    });
});