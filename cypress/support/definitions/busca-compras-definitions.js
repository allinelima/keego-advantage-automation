import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import onlineShopping from '../pages/busca-compras-page';
const productName="HP ElitePad 1000 G2 Tablet"

Cypress.on('uncaught:exception', (err, runnable) => {
    
    return false
})

Given('que esteja no site Advantage Demo', () => {
 onlineShopping.visitBuscaOnlineShopping()	
});

And('busque por um produto', () => {
  onlineShopping.searchForProduct(productName)
  cy.get('.select').should('be.visible')
});

And('selecione o produto desejado', () => {
  onlineShopping.selectProduct(productName)
  
});

When('adicione ao carrinho', () => {
 onlineShopping.clickComprasaddToCart()	
 cy.get('#shoppingCart').should('be.visible')
});

And('clique em checkout', () => {
  cy.get('#checkOutButton').click()
  cy.get('.select').should('be.visible')

 });

Then('os produtos devem estar incluídos no carrinho na tela de pagamento', () => {
  cy.get('#orderPayment').find('h3').should('contain', productName.toUpperCase())
}) 
