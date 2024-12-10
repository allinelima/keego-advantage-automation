const { defineConfig } = require("cypress");

module.exports = {
  e2e: {
    baseUrl: 'https://advantageonlineshopping.com',
    supportFile: 'cypress/support/index.js',
    specPattern: 'cypress/e2e/**/*.feature',
    env: {
      username: 'test_user',
      password: 'test_password'
    }
  }
};

