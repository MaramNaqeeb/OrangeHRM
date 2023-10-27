const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    env:{
      requestMode:true,
      snapshotOnly: true 
     },
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      
    },
    baseUrl: 'https://opensource-demo.orangehrmlive.com',
   
  },

});
