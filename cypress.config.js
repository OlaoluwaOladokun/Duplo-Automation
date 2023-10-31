const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1020,
  viewportWidth: 1920,
  
  e2e: {
    baseUrl: "https://www.saucedemo.com/",
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
