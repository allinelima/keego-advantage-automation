Feature: Atualizar Imagem do Produto via API

  Scenario: Atualizar a imagem de um produto
    Given que eu faça uma requisição para atualizar a imagem do produto com o ID "1" e a nova URL "https://novo-endereco-imagem.com"
    Then a resposta deve ter o status "200"
    And a imagem do produto deve ser atualizada para "https://novo-endereco-imagem.com"
