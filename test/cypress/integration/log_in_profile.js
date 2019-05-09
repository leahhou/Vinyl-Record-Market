describe('Rails Log In', function() {
    beforeEach(function() {
        cy.login()
    })


    it("see profile", function() {                
        cy.contains("Go to Profile").click(); //click "Go to Profile" button to go to personal profile
    });
});
