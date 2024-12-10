const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

import { homePageLocators } from '../../locators/homePageLocators';
import { productPageLocators } from '../../locators/productPageLocators';
import { cartPageLocators } from '../../locators/cartPageLocators';

// Step definitions

Given('que estou na página inicial do site Advantage Online Shopping', () => {
  cy.visit('https://advantageonlineshopping.com/#/');
});

When('eu digito HeadPhones na barra de busca e pesquiso', () => {
  cy.get(homePageLocators.searchButton).click();
  cy.get(homePageLocators.searchInput).type('HeadPhones').type('{enter}');
});

Then('eu devo ver uma lista de produtos relacionados a Fones de Ouvido', () => {
  cy.get(homePageLocators.searchResult).should('be.visible');
});

Given('que eu tenho uma lista de produtos após a busca, clico no produto de minha preferência', () => {
  cy.get(productPageLocators.firstProduct).click();
});

When('após os detalhes do produto serem exibidos, clico no botão “ADD TO CART”', () => {
  cy.get(productPageLocators.addToCartButton).click();
});

Then('o produto "Fone de Ouvido XYZ" deve ser adicionado ao meu carrinho', () => {
  cy.get(productPageLocators.shoppingCartLink).click();
});

Given('que eu adicionei um "Fone de Ouvido XYZ" ao carrinho', () => {
  cy.get(cartPageLocators.cartLink).click();
  cy.wait(2000);
  cy.get(cartPageLocators.productInCart).should('be.visible');
});

When('eu navego até a tela de pagamento', () => {
  cy.get(cartPageLocators.checkoutButton).click();
});

Then('eu devo ver o "Fone de Ouvido XYZ" listado no carrinho de compras', () => {
  cy.get(cartPageLocators.productInCart).should('be.visible');
});

Then('o preço do "Fone de Ouvido XYZ" deve ser exibido corretamente', () => {
  cy.get(cartPageLocators.productPrice).should('contain', '13.99');
});
