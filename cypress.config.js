const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'w9u9eb',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
