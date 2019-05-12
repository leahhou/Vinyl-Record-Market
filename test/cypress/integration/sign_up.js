describe('Rails Sign Up Create', function() {
    before(function(){
        cy.app("clean")
        cy.app("seed")
    });
    it("Create a new user", function() {

        
        cy.visit("/users/sign_up"); // go to sign up page correctly
        
        
        cy.get("[name='user[username]']").type("leah123"); // select username field and type in leah
        cy.get("[name='user[email]']").type("hsx_124@hotmail.com"); // select email field and type in email
        cy.get("[name='user[password]']").type("123456"); // select password field and type in password
        cy.get("[name='user[password_confirmation]']").type("123456"); // select password confirmation field and retype same password
        cy.get("[name='user[location]']").type("Australia"); // select location field and type in location
        
        cy.get("[name='commit']").click(); //click "sign up" button to sumbit registration form
        
        cy.contains("Welcome! You have signed up successfully."); //automatically redirect to home and show successfully log in
    });
});