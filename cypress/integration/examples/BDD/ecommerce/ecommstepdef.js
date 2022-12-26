import{ Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

Given("I open Ecommerce appliction",function(){

    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")

})

When("I signIn",function(){
    cy.get(".search-keyword").type('cucumber')
})

And("I LogIn",function(){
    cy.wait(3000)
})

Then("Adding product to the cart",function(){
    //cy.get(".search-keyword").type('cucumber')
   // cy.get(".search-keyword").type('cucumber')
        cy.contains('button','ADD TO CART').click()
        cy.get('.cart-icon > img').click()
        //cy.get('p.product-name').should('have.text','Cucumber - 1 KgCucumber - 1 Kg' )
       // cy.contains('button','PROCEED TO CHECKOUT').click()
})

