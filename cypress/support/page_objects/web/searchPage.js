class SearchPage {
    visit() {
      cy.visit('/search');
    }
  
  searchForProduct() {
    cy.get('#menuSearch').click();
    cy.get('#autoComplete')
      .clear()
      .type('Laptop')
      .type('{enter}');
    cy.get('#searchResultLabel').should('have.text', 'Search result: "laptop"');
  }
  
  addProductToCart() {
    cy.get('#7').click();
    cy.get('button[name="save_to_cart"]').click();
    cy.get('tr[id="product"]').should('have.length', 1); 
    cy.get('tr[id="product"]').within(() => {
    cy.contains('HP ENVY - 17T TOUCH LAPTOP').should('be.visible');
    cy.contains('QTY: 2').should('be.visible');
    cy.contains('$1,699.98').should('be.visible');
    });
  }
  
    goToCheckout() {
      cy.get('#checkoutButton').click();
    }
  }
  
  export default SearchPage;
  