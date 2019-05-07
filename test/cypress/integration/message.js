describe('Message flow', function() {
    
    before(function() {
        cy.app("clean")
        cy.app("seed")
        cy.createUser()
        cy.createListing()
        // cy.login()
    });
    
    it("get to conversations", function() {
        
        cy.visit("/"); 
        cy.contains("Messages").click();
        cy.contains("Inbox");
        
  
    });


    
    it("Get to messages from listing", function(){
        cy.clearCookies()
        cy.createUser2()
        cy.createListing2()
        cy.visit("/")
        cy.contains("go to album").click()
        cy.contains("Contact leah").click()
        cy.contains("Inbox");
    });

    it
});