// cypress/support/pages/busca-compras-page.js

import { buscaComprasLocators } from '../../locators/buscaComprasLocators';

class onlineShopping {
    visitBuscaOnlineShopping() {
        cy.visit('https://advantageonlineshopping.com#/'); 
    }

    compras = {
        buscarCampo: () => cy.get(buscaComprasLocators.buscarCampo), 
        lupaBtn: () => cy.get(buscaComprasLocators.lupaBtn),
        itens: () => cy.get(buscaComprasLocators.itens), 
        addToCart: () => cy.get(buscaComprasLocators.addToCart).should('be.visible'), 
        checkOutPopUp: () => cy.get(buscaComprasLocators.checkOutPopUp).should('be.visible'), 
    }

    typeComprasBuscarCampo(valor) {
        this.compras.buscarCampo().type(valor);
    }

    clickComprasLupaBtn() {
        this.compras.lupaBtn().click();
    }

    clickComprasaddToCart() {
        this.compras.addToCart().click();  
        this.compras.checkOutPopUp().click();  
    }

    selectProduct(productName) {
        cy.contains(buscaComprasLocators.produtoNome, productName).click(); 
    }

    searchForProduct(product) {
        this.compras.buscarCampo().type(product);  
        this.compras.buscarCampo().type('{enter}');
        cy.contains(buscaComprasLocators.produtoNome, product).should('be.visible');  
    }
}

export default new onlineShopping();
