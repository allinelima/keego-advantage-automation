const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://advantageonlineshopping.com',
    supportFile: 'cypress/support/index.js',
    specPattern: 'cypress/e2e/**/*.feature',
    env: {
      username: 'test_user',
      password: 'test_password'
    },
    viewportWidth: 1280,
    viewportHeight: 720,
    video: true,  
    screenshotOnRunFailure: true,  
    defaultCommandTimeout: 10000  
  }
});
