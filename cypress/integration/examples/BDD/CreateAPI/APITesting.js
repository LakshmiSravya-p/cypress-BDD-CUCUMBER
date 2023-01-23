import{ Given, Then } from "cypress-cucumber-preprocessor/steps";

var userId;

Given('POST Request',function(){
  const BASE_URL='https://gorest.co.in/public/v2'
  const TOKEN='ebea92de55bc49a3836235affed0021b5060ed5ce22beccd6af69bda773e4a39'
  const userName='Sravya'
    //var userId;
 // it('Test POST request',function(){
       
      
    cy.request({
      method: 'POST',
      url: BASE_URL + '/users',
      headers: {
          'authorization': 'Bearer '+ TOKEN,

      },
      body:{
          "name":userName,
          "gender":"female",
          "email":userName+"75"+"@test.com",
          "status":"active"
      }
    }).then((response)=>{
    userId=response.body.id;
      cy.log(userId+" id of user")
      expect(response.status).to.eq(201)
      expect(response.body).has.property('name',userName)
    }
    )  
 // })

});

Then('The response status code should be 201',function(){  
  cy.log('done')
});

Given('PUT Request',function(){
  const BASE_URL='https://gorest.co.in/public/v2'
  const TOKEN='ebea92de55bc49a3836235affed0021b5060ed5ce22beccd6af69bda773e4a39'
  const userName='Sravya'
  const userNameNum='37'
  var userId;
       
  cy.request({
    method: 'PUT',
    url: BASE_URL + '/users/'+86262,
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
});

Then('The response status code should be 200',function(){  
  cy.log('done')
});

Given('GET Request',function(){
  const BASE_URL='https://gorest.co.in/public/v2'
  const TOKEN='ebea92de55bc49a3836235affed0021b5060ed5ce22beccd6af69bda773e4a39'
  const userName='Sravya'
  const userNameNum='37'
  var userId;
       
  cy.request({
    method: 'GET',
    url: BASE_URL + '/users/'+86262,
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
});

Then('The response status code for GET should be 200',function(){  
  cy.log('done')
});

Given('DEL Request',function(){
  const BASE_URL='https://gorest.co.in/public/v2'
  const TOKEN='ebea92de55bc49a3836235affed0021b5060ed5ce22beccd6af69bda773e4a39'
  const userName='Sravya'
  const userNameNum='37'
  var userId;
      
  cy.request({
    method: 'DELETE',
    url: BASE_URL + '/users/'+86851,
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

Then('The response status code for DEL should be 204',function(){  
  cy.log('done')
});

  



  
