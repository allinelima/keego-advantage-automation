import { productPageLocators } from '../locators/productPageLocators';

class ProductPage {
  selectFirstProduct() {
    cy.get(productPageLocators.firstProduct).click();
  }

  addToCart() {
    cy.get(productPageLocators.addToCartButton).click();
  }
}

export default ProductPage;
