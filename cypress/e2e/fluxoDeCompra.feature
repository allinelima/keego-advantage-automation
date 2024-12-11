Feature: Fluxo de compra
  Como um cliente 
  Quero fazer uma busca por um produto desejado
  Para que possa adicionar ao carrinho e fazer checkout


 Scenario: Busca de produtos 
  Given que esteja no site Advantage Demo
  And busque por um produto
  And selecione o produto desejado
  When adicione ao carrinho
  And clique em checkout
  Then os produtos devem estar incluídos no carrinho na tela de pagamento


