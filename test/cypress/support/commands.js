// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('createUser', () => {
    cy.visit("/users/sign_up"); // go to sign up page correctly
        
        
    cy.get("[name='user[username]']").type("leahhou"); // select username field and type in leah
    cy.get("[name='user[email]']").type("leahhou@hotmail.com"); // select email field and type in email
    cy.get("[name='user[password]']").type("123456"); // select password field and type in password
    cy.get("[name='user[password_confirmation]']").type("123456"); // select password confirmation field and retype same password
    cy.get("[name='user[location]']").type("Australia"); // select location field and type in location
    
    cy.get("[name='commit']").click(); //click "sign up" button to sumbit registration form
    
    cy.contains("Welcome! You have signed up successfully."); //automatically redirect to home and show successfully log in
});



Cypress.Commands.add('createListing', () => {
    cy.visit("/listings/new");
    cy.get("[name='listing[artist]']").type("Red Hot Chilli Peppers");
    cy.get("[name='listing[title]']").type("Californication");
    cy.get("select").select("1");
    cy.get("[name='listing[year]']").type("1998");
    cy.get("[name='listing[price]']").type("100");
    cy.get('[type="radio"]').first().check()
    cy.get("[name='listing[description]']").type("It sure is an album");
    cy.contains("Create Listing").click();
    cy.contains("Genre");
    cy.get('[type="checkbox"]').first().check()
    cy.contains("Update Listing").click();
    cy.contains("Status: Available");
});

Cypress.Commands.add('createListing2', () => {
    cy.visit("/listings/new");
    cy.get("[name='listing[artist]']").type("Radiohead");
    cy.get("[name='listing[title]']").type("Kid A");
    cy.get("select").select("2");
    cy.get("[name='listing[year]']").type("2000");
    cy.get("[name='listing[price]']").type("150");
    cy.get('[type="radio"]').first().check()
    cy.get("[name='listing[description]']").type("It sure is an album");
    cy.contains("Create Listing").click();
    cy.contains("Genre");
    cy.get('[type="checkbox"]').first().check()
    cy.contains("Update Listing").click();
    cy.contains("Status: Available");
});

Cypress.Commands.add('createUser2', () => {
    cy.visit("/users/sign_up"); // go to sign up page correctly
        
        
    cy.get("[name='user[username]']").type("Alex"); // select username field and type in leah
    cy.get("[name='user[email]']").type("alex@hotmail.com"); // select email field and type in email
    cy.get("[name='user[password]']").type("123456"); // select password field and type in password
    cy.get("[name='user[password_confirmation]']").type("123456"); // select password confirmation field and retype same password
    cy.get("[name='user[location]']").type("Australia"); // select location field and type in location
    
    cy.get("[name='commit']").click(); //click "sign up" button to sumbit registration form
    
    cy.contains("Welcome! You have signed up successfully."); //automatically redirect to home and show successfully log in
});



Cypress.Commands.add('login', () => {
    cy.visit("/users/sign_in"); // go to sign up page correctly
            
            
        cy.get("[name='user[email]']").type("alex@test.com"); // select username field and type in leah
        
        cy.get("[name='user[password]']").type("alex1234"); // select password field and type in password

        cy.get("[name='commit']").click(); //click "sign up" button to sumbit registration form
        
        cy.contains("Signed in successfully."); //automatically redirect to home and show successfully log in
});

