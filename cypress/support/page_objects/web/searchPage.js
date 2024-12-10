class SearchPage {
    visit() {
      cy.visit('/search');
    }
  
    searchForProduct(productName) {
      cy.get('#search').type(productName);
      cy.get('#searchButton').click();
    }
  
    addProductToCart() {
      cy.get('.product').first().find('.add-to-cart').click();
    }
  
    goToCheckout() {
      cy.get('#checkoutButton').click();
    }
  }
  
  export default SearchPage;
  