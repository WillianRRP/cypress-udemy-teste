const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
     video: false, 
     videoCompression: 32,
     videoUploadOnPasses: false, 
     videosFolder: "cypress/videos",

    setupNodeEvents(on, config) {
      
      // implement node event listeners here
    },
  },
});
