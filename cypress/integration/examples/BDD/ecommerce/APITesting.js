import{ Given, When } from "cypress-cucumber-preprocessor/steps";

//import { readyException } from "cypress/types/jquery";

Given('APItestcase',function(){
    const BASE_URL='https://gorest.co.in/public/v2'
    const TOKEN='68689ef05471fedbcd45fff7f4abd4739983bd838dc1b57b4e92ffdfd950a641'
    const userName='Sravya'
    const userNameNum='37'
    var userId;
    When("Test POST request",function(){      
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
    })

    it('Test PUT request',function(){
       
      cy.request({
        method: 'PUT',
        url: BASE_URL + '/users/'+userId,
        headers: {
            'authorization': 'Bearer '+ TOKEN,

        },
        body:{
            
            "gender":"male",
            
        }
      }).then((response)=>{
       const userId=response.body.id;
        cy.log(userId+" id of user")
        expect(response.status).to.eq(200)
        expect(response.body).has.property('name',userName)
      }
      )  
    })


    it('Test GET request',function(){
       
      cy.request({
        method: 'GET',
        url: BASE_URL + '/users/'+userId,
        headers: {
            'authorization': 'Bearer '+ TOKEN,

        },
        
      }).then((response)=>{
       const userId=response.body.id;
        cy.log(userId+" id of user")
        expect(response.status).to.eq(200)
        expect(response.body).has.property('name',userName)
      }
      )  
    })

   it('Test DELETE request',function(){
      
      cy.request({
        method: 'DELETE',
        url: BASE_URL + '/users/'+userId,
        headers: {
            'authorization': 'Bearer '+ TOKEN,

        },
        
      }).then((response)=>{
       const userId=response.body.id;
        cy.log(userId+" id of user")
        expect(response.status).to.eq(204)
        //expect(response.body).should('not.exist')
      }
      )  
    })



    
}
)