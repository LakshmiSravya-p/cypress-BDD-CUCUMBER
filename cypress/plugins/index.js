// <reference types=”@shelex/cypress-allure-plugin” />

/// <reference types="@shelex/cypress-allure-plugin" />


//import allureWriter from '@shelex/cypress-allure-plugin/writer';
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

export default (on, config) => {

allureWriter(on, config); return config; 
  

};
const cucumber = require('cypress-cucumber-preprocessor').default
module.exports = (on, config) => {
    on('file:preprocessor', cucumber())
  }