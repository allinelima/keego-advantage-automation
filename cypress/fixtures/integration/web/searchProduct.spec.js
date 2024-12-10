import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import SearchPage from '../../support/page_objects/searchPage';

const searchPage = new SearchPage();

Given('que eu acesse a página de busca', () => {
  searchPage.visit();
});

When('eu busco por {string}', (productName) => {
  searchPage.searchForProduct(productName);
});

When('eu adiciono o primeiro produto ao carrinho', () => {
  searchPage.addProductToCart();
});

Then('eu devo ser redirecionado para a página de checkout', () => {
  searchPage.goToCheckout();
});
