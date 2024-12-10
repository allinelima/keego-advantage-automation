class ProductApi {
    // URL base da API
    baseUrl = 'https://api.advantageonlineshopping.com/api';
  
    // Buscar um produto pela ID
    getProductById(productId) {
      return cy.request({
        method: 'GET',
        url: `${this.baseUrl}/products/${productId}`,
        failOnStatusCode: false, // Não falhar em status de erro (ex: 404)
      });
    }
  
    // Atualizar a imagem de um produto
    updateProductImage(productId, newImageUrl) {
      return cy.request({
        method: 'PUT',
        url: `${this.baseUrl}/products/${productId}`,
        body: {
          imageUrl: newImageUrl,
        },
        failOnStatusCode: false,
      });
    }
  }
  
  export default ProductApi;
  