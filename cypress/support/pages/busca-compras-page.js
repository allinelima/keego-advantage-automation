class onlineShopping{
    visitBuscaOnlineShopping() {
     cy.visit('https://advantageonlineshopping.com/#/”');
    }
    
    compras = {
      buscarCampo:      () => cy.get('#mobileSearch '),
      lupaBtn:          () => cy.get('button[qa-automation="home-search-button"]'),
      itens:            () => cy.get('[qa-automation="search-itens"]'),
      addToCart:        () => cy.get('.fixedBtn'),
      checkOutPopUp:    () => cy.get('#shoppingCartLink'),
    }
    typeComprasBuscarCampo(String){
      this.compras.buscarCampo().type(String)
    }
    clickComprasLupaBtn(){
      this.compras.lupaBtn().click()
    }
    clickComprasaddToCart(){
      this.compras.addToCart().click()
      this.compras.checkOutPopUp().click()
    }

    selectProduct(productName){
      cy.contains('a.productName', productName).click()
    }

    searchForProduct(product){
      this.compras.buscarCampo().type(product)
      this.compras.buscarCampo().type('{enter}')
      cy.contains('a.productName', product).should('be.visible') 
    
  

    }
    
  }
  export default new onlineShopping();