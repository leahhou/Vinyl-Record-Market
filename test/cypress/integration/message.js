describe('Message flow', function() {
    
    before(function() {
        cy.app("clean")
        cy.app("seed")
        
    });
    
    beforeEach(function() {
        cy.login()
    })

    
    it("get to conversations", function() {
        
        cy.visit("/"); 
        cy.contains("Messages").click();
        cy.contains("Inbox");
        
  
    });


    
    it("Get to messages from listing", function(){
        cy.visit("/users/2")
        cy.get(".card:first").within(() => {
            cy.get('a').click();
          });
          cy.contains("Message Owner").click();
        cy.contains("Conversation with");
    });

    it("Send message", function(){
        cy.visit("/users/2")
        cy.get(".card:first").within(() => {
            cy.get('a').click();
          });
          cy.contains("Message Owner").click();
        cy.contains("Conversation with");
        cy.get("textarea").clear().type("Test Message Goes Here");
        cy.contains("Send").click();
        cy.contains("Test Message Goes Here");
    });

    it("Check message persists", function(){
        cy.visit("/"); 
        cy.contains("Messages").click();
        cy.get("#conversations").within(() => {
            cy.get('a:first').click();
          });
          cy.contains("Test Message Goes Here");

    });
});