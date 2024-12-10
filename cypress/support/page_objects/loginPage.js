class LoginPage {
    visit() {
      cy.visit('/');
    }
  
    fillLogin(username, password) {
      cy.get('#loginUsername').type(username);
      cy.get('#loginPassword').type(password);
    }
  
    submitLogin() {
      cy.get('#loginButton').click();
    }
  }
  
  module.exports = new LoginPage();