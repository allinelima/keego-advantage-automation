class CartPage {
    openCart() {
      cy.get('#shoppingCartLink').click();
      cy.wait(3000);
    }
  
    proceedToCheckout() {
      cy.get('#checkOutButton').click();
    }
  
    verifyProductInCart() {
      cy.get('.fixedTableEdgeCompatibility > tbody > tr.ng-scope > :nth-child(2)').contains('HP H2310 IN-EAR HEADSET').should('be.visible');
    }
  
    verifyProductPrice() {
      cy.get('.roboto-bold > .roboto-medium').contains('13.99').should('be.visible');
    }
  }
  
  export default CartPage;
