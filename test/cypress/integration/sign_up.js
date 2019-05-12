describe('Rails Sign Up Create', function() {
    before(function(){
        cy.app("clean")
        cy.app("seed")
    });
    it("Create a new user", function() {

        
        cy.visit("/users/sign_up"); 
        cy.get("[name='user[username]']").type("leah123"); 
        cy.get("[name='user[email]']").type("hsx_124@hotmail.com"); 
        cy.get("[name='user[password]']").type("123456"); 
        cy.get("[name='user[password_confirmation]']").type("123456"); 
        cy.get("[name='user[location]']").type("Australia");  
        cy.get("[name='commit']").click(); 
        cy.contains("Welcome! You have signed up successfully."); 
    });
    it("Check to ensure can't create multiple users", function() {

        
        cy.visit("/users/sign_up"); 
        cy.get("[name='user[username]']").type("leah123"); 
        cy.get("[name='user[email]']").type("hsx_124@hotmail.com"); 
        cy.get("[name='user[password]']").type("123456"); 
        cy.get("[name='user[password_confirmation]']").type("123456"); 
        cy.get("[name='user[location]']").type("Australia");  
        cy.get("[name='commit']").click(); 
        cy.contains("2 errors prohibited this user from being saved"); 
    });

    it("check username validation", function() {

        
        cy.visit("/users/sign_up"); 
        cy.get("[name='user[username]']").type("leah1234@yahoo.com"); 
        cy.get("[name='user[email]']").type("hsx_1245@hotmail.com"); 
        cy.get("[name='user[password]']").type("123456"); 
        cy.get("[name='user[password_confirmation]']").type("123456"); 
        cy.get("[name='user[location]']").type("Australia"); 
        cy.get("[name='commit']").click(); 
        cy.contains("Username is invalid");
    
    });

    it("check password length", function() {

        
        cy.visit("/users/sign_up"); 
        cy.get("[name='user[username]']").type("newuser99"); 
        cy.get("[name='user[email]']").type("hsx_12456@hotmail.com"); 
        cy.get("[name='user[password]']").type("123"); 
        cy.get("[name='user[password_confirmation]']").type("123"); 
        cy.get("[name='user[location]']").type("Australia"); 
        cy.get("[name='commit']").click(); 
        cy.contains("Password is too short");
    
    });
    it("check password matches", function() {

        
        cy.visit("/users/sign_up"); 
        cy.get("[name='user[username]']").type("newuser99"); 
        cy.get("[name='user[email]']").type("hsx_12456@hotmail.com"); 
        cy.get("[name='user[password]']").type("123456"); 
        cy.get("[name='user[password_confirmation]']").type("1234567"); 
        cy.get("[name='user[location]']").type("Australia"); 
        cy.get("[name='commit']").click(); 
        cy.contains("Password confirmation doesn't match");
    
    });
});