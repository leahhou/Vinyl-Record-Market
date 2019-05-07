describe('Rails Listing CRUD', function() {
    beforeEach(function() {
        cy.login()
    })

    it("create a listing", function() {
        
           cy.contains("create a new listing").click(); //click "create a new listing" button to go to new listing page
    
           cy.get("[name='listing[artist]']").type("Radiohead"); // type in "Al Green" into artist
        
           cy.get("[name='listing[title]']").type("Pablo Honey "); // type in "Pablo Honest" into artist

           cy.get('select').select('2LP').should('have.value', '1'); // select "2LP" from format dropdown menu

           cy.get("[name='listing[year]']").type("1993"); // type in "1993" into year

           cy.get("[type='radio']").check("good"); // choose "wore" in condition

           cy.get("[name='listing[description]']").type("Pick Up Only"); // type in "Pick Up Only" into description.

           cy.contains("Create Listing").click(); // click "create listing" button to submit 1st part of the form

           cy.get("[type='checkbox']").check(['4', '2']); // choose "wore" in condition

           cy.contains("Update Listing").click(); // click "update listing" button to submit 2nd part of the form

    });

    // it("update a listing", function() {
        
    //     cy.contains("create a new listing").click(); //click "create a new listing" button to go to new listing page
    
    //     cy.get("[name='listing[artist]']").type("Radiohead"); // type in "Al Green" into artist
     
    //     cy.get("[name='listing[title]']").type("Pablo Honey "); // type in "Pablo Honest" into artist

    //     cy.get('select').select('2LP').should('have.value', '1'); // select "2LP" from format dropdown menu

    //     cy.get("[name='listing[year]']").type("1993"); // type in "1993" into year

    //     cy.get("[type='radio']").check("good"); // choose "wore" in condition

    //     cy.get("[name='listing[description]']").type("Pick Up Only"); // type in "Pick Up Only" into description.
    // });

    // it("delete a listing", function() {
        
    //     cy.visit("/users/sign_in"); // go to sign up page correctly
    
    //     cy.get("[name='user[login]']").type("leah13"); // select username field and type in leah
        
    //     cy.get("[name='user[password]']").type("123456"); // select password field and type in password

    //     cy.get("[name='commit']").click(); //click "sign up" button to sumbit registration form
        
    //     cy.contains("Signed in successfully."); //automatically redirect to home and show successfully log in
    // });
});