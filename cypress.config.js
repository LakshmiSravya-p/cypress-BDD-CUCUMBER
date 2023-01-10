//import { tagify } from 'cypress-tags';
const { defineConfig } = require('cypress');
//const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
//const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

/*async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  //await preprocessor.addCucumberPreprocessorPlugin(on, config);

 // on("file:preprocessor", browserify.default(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  
  return config;
}*/

module.exports = defineConfig({
  
 // reporter: 'reporters/custom.js',

 reporter: 'junit',
  reporterOptions: {
    mochaFile: 'results/my-test-output.xml',
    toConsole: true
  },
  e2e: {
    
    setupNodeEvents(on, config) {
      const cucumber = require('cypress-cucumber-preprocessor').default
      //const tag2=require('cypress-tags').default
      
      on('file:preprocessor', cucumber());
      //on('file:preprocessor', tag2(config));
    },
    
    //supportFile: './cypress/support/e2e.js'
   //specPattern: 'cypress/integration/examples/BDD/*.feature',
    specPattern: 'cypress/integration/examples/test5.js'
    
  },
  //reporter: 'reporters/custom.js',
 /* "retries": {
    // Configure retry attempts for `cypress run`
    // Default is 0
    "runMode": 2,
    // Configure retry attempts for `cypress open`
    // Default is 0
    "openMode": 2
  },*/
});
