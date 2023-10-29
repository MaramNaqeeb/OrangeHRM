const { defineConfig } = require("cypress");



// import * as path from 'path';

module.exports = defineConfig({
  e2e: {
    env:{
      requestMode:true,
      snapshotOnly: true,
      download_dir:'./cypress/downloads',

     },
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      
  
      
      
    },
  baseUrl: 'https://opensource-demo.orangehrmlive.com',


   
  },

});
