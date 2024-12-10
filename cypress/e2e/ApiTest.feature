Feature: Validação da resposta da API de produtos

  Scenario: Validar se a API de produtos retorna uma lista chamada "products" com pelo menos 1 produto
    Given eu faço uma requisição GET para a API de produtos
    When a resposta deve retornar o status code 200
    When a resposta deve conter uma lista chamada "products"
    Then a lista "products" deve conter pelo menos 1 produto

