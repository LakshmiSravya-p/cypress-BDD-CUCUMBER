describe('Skip tag', function()
{
/* It Block without skip Tag  */ 

   it('First Test', function() {

      cy.log("First Test")
   
})

/* It Block without skip Tag  */
 
it('Second Test', function() {
      
    cy.log("Second Test")
   
})

/*it block with  .skip Tag */
   
   it.skip('Third Test', function() {

      cy.log("Third Test")
   })

})