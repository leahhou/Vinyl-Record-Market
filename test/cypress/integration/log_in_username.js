describe('Rails Log In', function() {
    it("Log in with username", function() {
        
        cy.visit("/users/sign_in"); // go to sign up page correctly
    
        cy.get("[name='user[login]']").type("leah13"); // select username field and type in leah
        
        cy.get("[name='user[password]']").type("123456"); // select password field and type in password

        cy.get("[name='commit']").click(); //click "sign up" button to sumbit registration form
        
        cy.contains("Signed in successfully."); //automatically redirect to home and show successfully log in
    });
});