
import{ Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

Given("APItestcase",function(){

    cy.visit("https://google.com")

})

let message = 'hello'
const english = {
  greeting(a) {
    return a
  },
}

setTimeout(() => {
  message = 'bye'
}, 1000)

// initially the english.greeting() returns "hello" failing the assertion.
// .invoke('greeting') tries again and again until after 1 second
// the returned message becomes "bye" and the assertion passes


When("Test POST Request",function(){
    //cy.get(".search-keyword").type('cucumber')
})

And("Test",function(){
    cy.wait(3000)
})

Then("Test Post",function(){
    //cy.get(".search-keyword").type('cucumber')
   // cy.get(".search-keyword").type('cucumber')
       // cy.contains('button','ADD TO CART').click()
        //cy.get('.cart-icon > img').click()
        cy.wrap(english).invoke('greeting','bye').should('equal', 'bye')
        //cy.get('p.product-name').should('have.text','Cucumber - 1 KgCucumber - 1 Kg' )
       // cy.contains('button','PROCEED TO CHECKOUT').click()
})

