
it('Post File to URL', () => {
   
    const yourFile = 'C:/dtici2/fixtures/my-test-output.xml'
    cy.readFile(yourFile)
        .then(function (text) {
           cy.log(text)
           //var x='';
         getBearerToken().then((data) =>{
            cy.log("data"+data);
            const bToken=data;
            postXML(text,bToken)
            //cy.log("bToken"+bToken);
         });
         //cy.log("token from the method"+Cypress.env('bearerToken'))
         //cy.log(Cypress.config("tokenx"))
         //cy.log("X---"+x)
          // postXML(text)
        }
)})

function postXML(text,data) {    
    cy.log("data inside postxml function"+data)
    return cy.request({
        url: 'https://xray.cloud.getxray.app/api/v1/import/execution/junit?projectKey=DTCI',
        method: 'POST',
        body: text,
        headers: {
            'content-type': 'text/xml',
            'authorization': 'Bearer '+ data,
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

}
function  getBearerToken(){
return cy.request({
    method: 'POST',
    url: 'https://xray.cloud.getxray.app/api/v1/authenticate',
    headers: {
      'Content-Type': 'application/json'
    },
    body: '{ "client_id": "67894D4CA0C5401AB6B9332BBE60BC93","client_secret": "0bf7ad571a86b3bd6b5e4750ca14a95dc4dcf7c267dec8c0364259a9770d5eef" }'
  }).then((response) => {
    return response.body
    //return bearerToken
  })
  cy.log(TOKEN)
//return TOKEN
}