Feature: Automação dos cenários funcionais com cypress + cucumber


Background: beforeEach
  Given que estou na página inicial do site Advantage Online Shopping
  When eu digito HeadPhones na barra de busca e pesquiso
  Then eu devo ver uma lista de produtos relacionados a Fones de Ouvido
  Given que eu tenho uma lista de produtos após a busca, clico no produto de minha preferência
  

# Scenario: Realizar a busca de um produto
#   Given que estou na página inicial do site Advantage Online Shopping
#   When eu digito HeadPhones na barra de busca e pesquiso
#   Then eu devo ver uma lista de produtos relacionados a Fones de Ouvido

# Scenario: Incluir produto no carrinho
#   When após os detalhes do produto serem exibidos, clico no botão “ADD TO CART”
#   Then o produto "Fone de Ouvido XYZ" deve ser adicionado ao meu carrinho

Scenario: Validar os produtos incluídos no carrinho na tela de pagamento
  When após os detalhes do produto serem exibidos, clico no botão “ADD TO CART”
  Then o produto "Fone de Ouvido XYZ" deve ser adicionado ao meu carrinho
  Given que eu adicionei um "Fone de Ouvido XYZ" ao carrinho 
  When eu navego até a tela de pagamento
  Then eu devo ver o "Fone de Ouvido XYZ" listado no carrinho de compras
  When o preço do "Fone de Ouvido XYZ" deve ser exibido corretamente