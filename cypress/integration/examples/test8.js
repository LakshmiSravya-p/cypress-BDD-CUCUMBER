//let TOKEN='xyz';

it('Post File to URL', () => {
   
    const yourFile = 'C:/dtici2/cypress/fixtures/my-test-output.xml'
    cy
        .readFile(yourFile)
        .then(function (text) {
           cy.log(text)
           
           //getBearerToken()
           postXML(text)
        }
)})

function postXML(text) {
    //var TOKEN2=''
    cy.getBearerToken().then((TOKEN)=>{
 
    //const TOKEN='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5hbnQiOiIyMTBkOTYyOS1iOTk2LTNkZDAtYTM3OC1kNjk3NTYyNTU3ZTUiLCJhY2NvdW50SWQiOiI2M2I2OTRlNTc0MTI0ODc0NmJmODY2MDQiLCJpc1hlYSI6ZmFsc2UsImlhdCI6MTY3MzMyNjU2MywiZXhwIjoxNjczNDEyOTYzLCJhdWQiOiI2Nzg5NEQ0Q0EwQzU0MDFBQjZCOTMzMkJCRTYwQkM5MyIsImlzcyI6ImNvbS54cGFuZGl0LnBsdWdpbnMueHJheSIsInN1YiI6IjY3ODk0RDRDQTBDNTQwMUFCNkI5MzMyQkJFNjBCQzkzIn0.Zo8BETdqw4-rAc8UMcFnMwlRWflwrz7aKLqT7GdtxR8'
    cy.log(this.TOKEN)
    return cy.request({
        url: 'https://xray.cloud.getxray.app/api/v1/import/execution/junit?projectKey=DTCI',
        method: 'POST',
        body: text,
        headers: {
            'content-type': 'text/xml',
            'authorization': 'Bearer '+ TOKEN,
        }
}).then((response)=>{
    const userId=response.body.id;
    const key=response.body.key;
       cy.log(userId+" id of testcase reults")
       cy.log(key + "-- test case results number")
       expect(response.status).to.eq(200)
       //expect(response.body).has.property('name',userName)
     }
     )  
    })
}
Cypress.Commands.add('getBearerToken', ()=>{
return cy.request({
    method: 'POST',
    url: 'https://xray.cloud.getxray.app/api/v1/authenticate',
    headers: {
      'Content-Type': 'application/json'
    },
    body: '{ "client_id": "67894D4CA0C5401AB6B9332BBE60BC93","client_secret": "0bf7ad571a86b3bd6b5e4750ca14a95dc4dcf7c267dec8c0364259a9770d5eef" }'
  }).then((response) => {
    const TOKEN = response.body
    cy.log(TOKEN)
    // or you can use it as Cypress global variable
    Cypress.env('bearerToken', TOKEN)
    //return bearerToken
  })
  cy.log(TOKEN)
return cy.wrap(TOKEN).as('TOKEN')
})