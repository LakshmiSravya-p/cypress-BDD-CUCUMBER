import{ Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

//import { readyException } from "cypress/types/jquery";
Given("APItestcase",function(){
  });
When('Test POST Request',function(){
    const BASE_URL='https://gorest.co.in/public/v2'
    const TOKEN='68689ef05471fedbcd45fff7f4abd4739983bd838dc1b57b4e92ffdfd950a641'
    const userName='Sravya'
    const userNameNum='37'
    var userId;
    it("Test POST request",function(){        
        cy.request({
        method: 'POST',
        url: BASE_URL + '/users',
        headers: {
            'authorization': 'Bearer '+ TOKEN,
        },
        body:{
            "name":userName,
            "gender":"female",
            "email":userName+"22"+userNameNum+"@test.com",
            "status":"active"
        }
      }).then((response)=>{
      userId=response.body.id;
        cy.log(userId+" id of user")
        expect(response.status).to.eq(201)
        expect(response.body).has.property('name',userName)
      }
      )  
    })  });

    And("Test",function(){
      cy.wait(3000)
  });

  Then("Post",function(){
    cy.wait(3000)
});
    
