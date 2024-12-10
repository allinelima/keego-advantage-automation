Feature: Buscar Produto, Adicionar ao Carrinho e Validar no Checkout

  Scenario: Buscar e adicionar um produto ao carrinho
    Given que eu acesse a página de busca
    When eu busco por "Laptop"
    And eu adiciono o primeiro produto ao carrinho
    Then eu devo ser redirecionado para a página de checkout
