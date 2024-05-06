const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:"https://demo.productionready.io/#/",
    trashAssetsBeforeRuns:true,
    video:true,
    videoCompression: 20,
  },
});
