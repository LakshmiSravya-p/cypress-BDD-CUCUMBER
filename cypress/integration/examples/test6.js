/// <reference types="Cypress" />

describe('APItestcase',function(){
    const BASE_URL='https://xray.cloud.getxray.app/api/v1/import/execution/junit?projectKey=DTCI'
    const TOKEN='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5hbnQiOiIyMTBkOTYyOS1iOTk2LTNkZDAtYTM3OC1kNjk3NTYyNTU3ZTUiLCJhY2NvdW50SWQiOiI2M2I2OTRlNTc0MTI0ODc0NmJmODY2MDQiLCJpc1hlYSI6ZmFsc2UsImlhdCI6MTY3MzMyNjU2MywiZXhwIjoxNjczNDEyOTYzLCJhdWQiOiI2Nzg5NEQ0Q0EwQzU0MDFBQjZCOTMzMkJCRTYwQkM5MyIsImlzcyI6ImNvbS54cGFuZGl0LnBsdWdpbnMueHJheSIsInN1YiI6IjY3ODk0RDRDQTBDNTQwMUFCNkI5MzMyQkJFNjBCQzkzIn0.Zo8BETdqw4-rAc8UMcFnMwlRWflwrz7aKLqT7GdtxR8'
    const ProjectName='DTCI'
    var qs = require('querystringify'); 

it('Test POST request',function(){
         
    cy.fixture('my-test-output.xml').then(xmlString => {  
      const upd=qs.parse(xmlString)  
    cy.request({
      method: 'POST',
      url: BASE_URL,
       headers: {
          'authorization': 'Bearer '+ TOKEN,
          'Content-Type': 'text/xml'

      },
      body:{
         
        upd

        }
    }).then((response)=>{
   // userId=response.body.id;
     // cy.log(userId+" id of user")
      //expect(response.status).to.eq(200)
      //expect(response.body).has.property('name',userName)
    }
    )  
  })

})




})
