import { Given, Then } from 'cypress-cucumber-preprocessor/steps';
import ProductApi from '../../support/api/productApi';

const productApi = new ProductApi();

Given('que eu faça uma requisição para buscar o produto com o ID {string}', (productId) => {
  productApi.getProductById(productId).then((response) => {
    cy.wrap(response).as('productResponse');
  });
});

Then('a resposta deve ter o status {string}', (statusCode) => {
  cy.get('@productResponse').its('status').should('eq', parseInt(statusCode));
});

Then('a resposta deve conter o nome do produto {string}', (productName) => {
  cy.get('@productResponse').its('body.name').should('eq', productName);
});
