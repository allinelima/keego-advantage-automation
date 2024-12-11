describe('Validar lista de busca por produtos e status code', () => {
  
    it('Buscar por um produto', () => {
      cy.request({
        method: 'GET',
        url: 'https://www.advantageonlineshopping.com/catalog/api/v1/products/search' ,
        qs:{
          name:'Tablet',
          quantityPerEachCategory:'-1'
        }
        }).then(response =>{
          expect(response.status).to.equal(200);
          cy.log(response.body)
          const products = response.body[0].products
          cy.log(products)
          products.forEach((product) => {
          expect(product.productName).to.include('Tablet')
        });

        })
       
    
      })
    })