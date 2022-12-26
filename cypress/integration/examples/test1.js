///<reference types="Cypress" />
describe('login to demo website', function(){
    it('my first login',function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get(".search-keyword").type('cucumber')
        cy.wait(3000)
        cy.contains('button','ADD TO CART').click()
        cy.get('.cart-icon > img').click()
        cy.get('p.product-name').should('have.text','Cucumber - 1 KgCucumber - 1 Kg' )
        cy.contains('button','PROCEED TO CHECKOUT').click()
        cy.contains('button','Place Order').click()
        cy.get('select').select('Germany').should('have.value','Germany')
        cy.get('.chkAgree').check()
        cy.get('button').click()
        cy.get('#root').should('contains.text',"GREENKARTThank you, your order has been placed successfully  You'll be redirected to Home page shortly!!") })
    }
    
    )