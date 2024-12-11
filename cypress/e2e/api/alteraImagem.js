it.only('Alterar imagem de um produto', () => {
  const source = 'automated_test'
  const color = '424242'
  const productId = 10
  const userId = 608250760

  cy.fixture('ps5.jpg').then(fileContent => {
    const file = Cypress.Blob.base64StringToBlob(fileContent, 'image/jpeg');
    const formData = new FormData();
    formData.append('file', file, 'ps5.jpg');
    cy.request({
      method: 'POST',
      url: `https://www.advantageonlineshopping.com/catalog/api/v1/product/image/${userId}/${source}/${color}?product_id=${productId}`,
      headers: {
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ3d3cuYWR2YW50YWdlb25saW5lc2hvcHBpbmcuY29tIiwidXNlcklkIjo2MDgyNTA3NjAsInN1YiI6IkJydW5vIiwicm9sZSI6IlVTRVIifQ.NlWIUsuywTk6Yy4781f0yjZnuMjD55LgfX_VAA7cq9I',
        'Content-Type': 'multipart/form-data',
        'accept': '*/*'
      },
      body: formData
    }).then(res => {
      expect(res.status).to.eq(200)
      
    })
    })
  })