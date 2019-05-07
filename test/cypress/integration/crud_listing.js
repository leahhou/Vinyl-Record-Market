describe('Rails Listing CRUD', function() {

    it("Log in with username", function() {
        
        cy.visit("/users/sign_in"); // go to log in page correctly
        
        
        cy.get("[name='user[login]']").type("leah"); // select username field and type in leah
        
        cy.get("[name='user[password]']").type("123456"); // select password field and type in password

        cy.get("[name='commit']").click(); //click "log in" button to sumbit registration form
        
        cy.contains("Signed in successfully."); //automatically redirect to home and show successfully log in
    });

    it("create a listing", function() {
        
           cy.contains("create a new listing").click(); //click "create a new listing" button to go to new listing page
    
           cy.get("[name='listing[artist]']").type("Al Green"); // type in "Al Green" into artist
        
           cy.get("[name='listing[title]']").type(""); // select password field and type in password

    //     cy.get("[name='commit']").click(); //click "sign up" button to sumbit registration form
        
    //     cy.contains("Signed in successfully."); //automatically redirect to home and show successfully log in
    });

    // it("update a listing", function() {
        
    //     // cy.contains("create a new listing").click(); //click "Go to Profile" button to go to personal profile
    
    //     // cy.get("[name='user[login]']").type("leah13"); // select username field and type in leah
        
    //     // cy.get("[name='user[password]']").type("123456"); // select password field and type in password

    //     // cy.get("[name='commit']").click(); //click "sign up" button to sumbit registration form
        
    //     // cy.contains("Signed in successfully."); //automatically redirect to home and show successfully log in
    // });

    // it("delete a listing", function() {
        
    //     cy.visit("/users/sign_in"); // go to sign up page correctly
    
    //     cy.get("[name='user[login]']").type("leah13"); // select username field and type in leah
        
    //     cy.get("[name='user[password]']").type("123456"); // select password field and type in password

    //     cy.get("[name='commit']").click(); //click "sign up" button to sumbit registration form
        
    //     cy.contains("Signed in successfully."); //automatically redirect to home and show successfully log in
    // });
});