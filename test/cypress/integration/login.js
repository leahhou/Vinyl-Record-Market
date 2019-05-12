describe('Rails Log In/Log Out', function() {
    before(function() {
        cy.app("clean")
        cy.app("seed")
       
    });
    it("Login", function() {
        
        cy.visit("/users/sign_in"); // go to sign up page correctly
        
        
        cy.get("[name='user[email]']").type("alex@test.com"); // select username field and type in leah
        
        cy.get("[name='user[password]']").type("alex1234"); // select password field and type in password

        cy.get("[name='commit']").click(); //click "sign up" button to sumbit registration form
        
        cy.contains("Signed in successfully."); //automatically redirect to home and show successfully log in
    });
    
    // before(function() {
    //     cy.login()
    // });
    it("Logout", function(){
        cy.contains("Log Out").click();
        cy.contains("Signed out successfully.");
    });
    
});