Feature: Login

  Scenario: Usuário faz login com sucesso
    Given que eu acesse a página de login
    When eu preencho o usuário "usuario_teste" e a senha "senha_teste"
    And eu clico no botão de login
    Then eu devo ser redirecionado para a página de dashboard
