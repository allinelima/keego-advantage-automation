import { When, Then, Given } from '@badeball/cypress-cucumber-preprocessor';

Given('eu faço uma requisição GET para a API de produtos', () => {
  cy.request({
    method: 'GET',
    url: 'https://www.advantageonlineshopping.com/catalog/api/v1/products',
    headers: {
      'accept': '*/*'
    }
  }).as('apiResponse');
});

When('a resposta deve retornar o status code 200', () => {
  cy.get('@apiResponse').its('status').should('eq', 200);
});

When('a resposta deve conter uma lista chamada "products"', () => {
  cy.get('@apiResponse').its('body').should('have.property', 'products');
});

Then('a lista "products" deve conter pelo menos 1 produto', () => {
  cy.get('@apiResponse').its('body.products').should('have.length.greaterThan', 0);
});



// let response; // Variável para armazenar a resposta da API

// Given('que eu tenho o ID do usuário, source e cor do produto', () => {
//   // Definir as variáveis necessárias para a requisição
//   cy.wrap({
//     userId: 'exemploUserId',  // Substitua pelo ID do usuário correto
//     source: 'exemploSource',  // Substitua pelo source correto
//     color: 'exemploColor'     // Substitua pela cor correta
//   }).as('productData');
// });

// When('eu faço uma requisição PUT para atualizar a imagem do produto', function () {
//   const { userId, source, color } = this.productData;
//   const imageUpdateData = {
//     imageUrl: 'https://exemplo.com/nova-imagem.jpg'  // Substitua pela URL da nova imagem
//   };

//   // Fazer a requisição PUT para a API
//   cy.request({
//     method: 'PUT',
//     url: `https://www.advantageonlineshopping.com/catalog/api/v1/product/image/${userId}/${source}/${color}`,
//     body: imageUpdateData,
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   }).then((res) => {
//     response = res; // Armazenar a resposta da API
//   });
// });

// Then('a imagem deve ser atualizada com sucesso', () => {
//   // Verificar se a resposta contém o campo "success" e se é true
//   expect(response.body).to.have.property('success', true);
// });

// Then('o ID da nova imagem deve ser retornado', () => {
//   // Verificar se o ID da nova imagem está presente na resposta
//   expect(response.body).to.have.property('imageId');
//   const newImageId = response.body.imageId;
//   cy.log(`ID da nova imagem: ${newImageId}`);
// });

// Then('o status code da resposta deve ser 200', () => {
//   // Verificar o status code da resposta
//   expect(response.status).to.eq(200);
// });
