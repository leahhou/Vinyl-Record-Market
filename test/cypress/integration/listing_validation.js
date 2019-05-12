before(function() {
    cy.app("clean")
    cy.app("seed")
    
})

beforeEach(function() {
  cy.login()
})

it("Check Artist Validation", function() {
    
       cy.contains("Sell A Record").click(); 

       cy.get("[name='listing[artist]']"); 
    
       cy.get("[name='listing[title]']").type("Pablo Honey"); 

       cy.get('select').select('2LP').should('have.value', '1'); 

       cy.get("[name='listing[year]']").type("1993"); 

       cy.get("[name='listing[price]']").type("200"); 

       cy.get("[type='radio']").check("good"); 

       cy.get("[name='listing[description]']").type("Pick Up Only"); 
       
       cy.contains("Continue").click(); 
       
       cy.contains("Artist can't be blank");

});
it("Check Title Validation", function() {
    
    cy.contains("Sell A Record").click(); 

    cy.get("[name='listing[artist]']").type("Something"); 
 
    cy.get("[name='listing[title]']"); 

    cy.get('select').select('2LP').should('have.value', '1'); 

    cy.get("[name='listing[year]']").type("1993"); 

    cy.get("[name='listing[price]']").type("200"); 

    cy.get("[type='radio']").check("good"); 

    cy.get("[name='listing[description]']").type("Pick Up Only"); 
    
    cy.contains("Continue").click(); 
    
    cy.contains("Title can't be blank");

});

it("Check Year Validation", function() {
    
    cy.contains("Sell A Record").click(); 

    cy.get("[name='listing[artist]']").type("Something"); 
 
    cy.get("[name='listing[title]']").type("Something"); 

    cy.get('select').select('2LP').should('have.value', '1'); 

    cy.get("[name='listing[year]']").type("aaaa"); 

    cy.get("[name='listing[price]']").type("200"); 

    cy.get("[type='radio']").check("good"); 

    cy.get("[name='listing[description]']").type("Pick Up Only"); 
    
    cy.contains("Continue").click(); 
    
    cy.contains("Please enter year between 1900-2099");

});