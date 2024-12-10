Feature: Product search and cart validation

  Scenario: Search and add product to cart
    Given I am logged in
    When I search for "headphones"
    And I add the first product to the cart
    Then the product should appear in the cart