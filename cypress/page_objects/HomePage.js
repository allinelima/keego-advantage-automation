import { homePageLocators } from '../locators/homePageLocators';

class HomePage {
  visit() {
    cy.visit('https://advantageonlineshopping.com/#/');
  }

  searchForProduct(productName) {
    cy.get(homePageLocators.searchButton).click();
    cy.get(homePageLocators.searchInput).type(productName).type('{enter}');
  }

  verifySearchResults() {
    cy.get(homePageLocators.searchResult).should('be.visible');
  }
}

export default HomePage;
