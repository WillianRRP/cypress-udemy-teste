const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
     setupNodeEvents(on, config) {
      
      // implement node event listeners here
    },
    baseUrl: 'https://barrigarest.wcaquino.me',
    video: false, 
     videoCompression: 32,
     videoUploadOnPasses: false, 
     videosFolder: "cypress/videos",
  },
});


