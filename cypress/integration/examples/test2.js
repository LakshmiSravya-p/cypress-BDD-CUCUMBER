///reference types="cypress" />
describe('My second suite', function()
{
    it('My second case',function(){
        const cons1='I am a constant'
        Cypress.on('fail', (error, runnable) => {
    
            if (!error.message.includes('ADD TO CART1')) {
            cy.writeFile('cypress/logs/message.txt', 'step 1: Error ',{ flag: 'a+' })
            throw error
            
            }
            
            })
        

cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
cy.log('webpage opened')
const d = new Date()
cy.writeFile('cypress/logs/message.txt', d+'\t done')
cy.writeFile('cypress/logs/message.txt', '\nstep 1: webpage opened ',{ flag: 'a+' })
cy.writeFile('cypress/logs/message.txt', '\nstep 2: webpage opened',{ flag: 'a+' })
cy.writeFile('cypress/logs/message.txt', '\n'+cons1+' one',{ flag: 'a+' })
console.log('Webpage opened -- console')
cy.get('.search-keyword').type('ca')
cy.wait(2000)
cy.log('wait is complete')
cy.get('.product').should('have.length',5)
cy.get('.product:visible').should('have.length',4)
//parent child chaining
cy.get('.products').find('.product').should('have.length',4)
cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
cy.get('#ADD TO CART1')

/*cy.get(' products').find('.product').each($e1, index, $list) 
const textveg=$e1.find('h4.product-Name').text()
if(textveg.includes('cashews'))
{
$e1.find('button').click()
{
    $e1.find('button').click()
}
}*/
})
//cy.get('.brand')
})
