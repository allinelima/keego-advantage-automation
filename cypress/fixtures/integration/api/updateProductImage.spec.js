import { Given, Then } from 'cypress-cucumber-preprocessor/steps';
import ProductApi from '../../support/api/productApi';

const productApi = new ProductApi();

Given('que eu faça uma requisição para atualizar a imagem do produto com o ID {string} e a nova URL {string}', (productId, newImageUrl) => {
  productApi.updateProductImage(productId, newImageUrl).then((response) => {
    cy.wrap(response).as('updateImageResponse');
  });
});

Then('a resposta deve ter o status {string}', (statusCode) => {
  cy.get('@updateImageResponse').its('status').should('eq', parseInt(statusCode));
});

Then('a imagem do produto deve ser atualizada para {string}', (newImageUrl) => {
  cy.get('@updateImageResponse').its('body.imageUrl').should('eq', newImageUrl);
});
