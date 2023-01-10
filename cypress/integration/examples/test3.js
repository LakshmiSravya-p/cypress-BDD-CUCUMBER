    /* Command for Auto Suggestions in Cypress */ 
             
         /// <reference types="Cypress" />


         describe('Tags Demonstration', function()


         /* it block with tag .only */
            
         {
            it.only('First Test', function() {
               
              cy.log("First Test")
            
         })
         
         
         /* it block with tag .only */
            
         it.only('Second Test', function() {
               
            cy.log("Second Test")
            
         })
         
         /* Block without .only tag  */   
           
         it('Third Test', function() {
         
               cy.log("Third Test")
         
            })
         
         })