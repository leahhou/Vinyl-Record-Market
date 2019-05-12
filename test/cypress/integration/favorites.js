describe('Add and remove favorites', function() {
    
    before(function() {
        cy.app("clean")
        cy.app("seed")
       
        
    });

    beforeEach(function() {
        cy.login()
    })
    
    it("Add to favorite listings", function() {
        
        cy.visit("/users/2");
        cy.contains("go to album").click();
        cy.contains("Add to my favorites").click();
        cy.contains("Listing has been favorited");
        
    
        
  
    });


    
    it("Check that listing appears in favorites", function(){
        cy.visit("/users/my_profile");
        cy.contains("Favorites").click();
    


      
    });

    it
});