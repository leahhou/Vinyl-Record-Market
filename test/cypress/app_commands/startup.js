describe('Start Up Test', function() {
    before(function(){
        cy.app("clean")
        cy.app("seed")
    });
    it("Create a new user", function() {

        
        cy.visit("/users/sign_up"); // go to sign up page correctly
        
        
        cy.get("[name='user[username]']").type("leah13"); // select username field and type in leah
        cy.get("[name='user[email]']").type("hsx_124+14@hotmail.com"); // select email field and type in email
        cy.get("[name='user[password]']").type("123456"); // select password field and type in password
        cy.get("[name='user[password_confirmation]']").type("123456"); // select password confirmation field and retype same password
        cy.get("[name='user[location]']").type("Australia"); // select location field and type in location
        
        cy.get("[name='commit']").click(); //click "sign up" button to sumbit registration form
        
        cy.contains("Welcome! You have signed up successfully."); //automatically redirect to home and show successfully log in
    });
    it("Create another user", function() {

        
        cy.visit("/users/sign_up"); // go to sign up page correctly
        
        
        cy.get("[name='user[username]']").type("Alex"); // select username field and type in leah
        cy.get("[name='user[email]']").type("alex@hotmail.com"); // select email field and type in email
        cy.get("[name='user[password]']").type("123456"); // select password field and type in password
        cy.get("[name='user[password_confirmation]']").type("123456"); // select password confirmation field and retype same password
        cy.get("[name='user[location]']").type("Australia"); // select location field and type in location
        
        cy.get("[name='commit']").click(); //click "sign up" button to sumbit registration form
        
        cy.contains("Welcome! You have signed up successfully."); //automatically redirect to home and show successfully log in
    });
    it("Add a listing", function(){
        cy.visit("/listings/new");
        cy.get("[name='listing[artist]']").type("Red Hot Chilli Peppers");
        cy.get("[name='listing[title]']").type("Californication");
        cy.get("select").select("1");
        cy.get("[name='listing[year]']").type("1998");
        cy.get("[name='listing[price]']").type("100");
        cy.get('[type="radio"]').first().check()
        cy.get("[name='listing[description]']").type("It sure is an album");
        cy.contatins("Create Listing").click();
        cy.contains("genre");
        cy.get('[type="checkbox"]').first().check()
        cy.contains("Update Listing").click();
        cy.contains("Status: Available");

    });
    it("Add a Second listing", function(){
        cy.visit("/listings/new");
        cy.get("[name='listing[artist]']").type("Radiohead");
        cy.get("[name='listing[title]']").type("Kid A");
        cy.get("select").select("2");
        cy.get("[name='listing[year]']").type("2000");
        cy.get("[name='listing[price]']").type("150");
        cy.get('[type="radio"]').first().check()
        cy.get("[name='listing[description]']").type("It sure is an album");
        cy.contatins("Create Listing").click();
        cy.contains("genre");
        cy.get('[type="checkbox"]').first().check()
        cy.contains("Update Listing").click();
        cy.contains("Status: Available");

    });
});