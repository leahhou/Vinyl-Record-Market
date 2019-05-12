describe('Rails Log In', function() {
    it("Log in with username", function() {
        
        cy.visit("/users/sign_in"); 
        cy.get("[name='user[email]']").type("alex@test.com"); 
        cy.get("[name='user[password]']").type("alex1234"); 
        cy.get("[name='commit']").click(); 
        cy.contains("Signed in successfully."); 
    });
});