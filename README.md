## Keego Advantage Automation

**Automatizando testes no Advantage Online Shopping com Cypress e Cucumber**

Este projeto tem como objetivo garantir a qualidade do site Advantage Online Shopping através de testes automatizados, utilizando a abordagem BDD.

## Pré-requisitos

- Node.js >= 18.x
- NPM ou Yarn

## Funcionalidades:

* **Fluxo de compra completo:** Desde a busca até a finalização do pedido.
* **Validação de preços e descontos:** Verifica se os valores estão corretos.
* **Gerenciamento de conta:** Criação, edição e exclusão de contas.

## Tecnologias:

* **Cypress:** Framework de testes end-to-end.
* **Cucumber:** Ferramenta para definir cenários de teste em linguagem natural.
* **JavaScript:** Linguagem de programação utilizada para escrever os testes.

## Estrutura do Projeto:

```javascript
keego-advantage-automation/
│
├── cypress/
│ ├── fixtures/ # Arquivos de dados mock
│ ├── integration/ # Testes
│ │ ├── web/ # Testes web
│ │ │ ├── searchProduct.spec.js
│ │ │ ├── addToCart.spec.js
│ │ │ └── checkout.spec.js
│ │ ├── api/ # Testes API
│ │ │ ├── login.spec.js
│ │ │ └── updateProductImage.spec.js
│ ├── support/ # Suporte e Page Objects
│ │ ├── page_objects/ # Page Objects
│ │ │ ├── homePage.js
│ │ │ ├── searchPage.js
│ │ │ └── cartPage.js
│ │ ├── commands.js # Custom commands
│ │ └── index.js
│
├── features/ # Arquivos Cucumber (Gherkin)
│ ├── web/
│ │ ├── searchProduct.feature
│ │ ├── addToCart.feature
│ │ └── checkout.feature
│ ├── api/
│ │ ├── login.feature
│ │ └── updateProductImage.feature
├── cypress.json # Configuração do Cypress
├── package.json # Dependências do projeto
└── README.md # Instruções de uso
```


## Como Usar:
1. **Clone o repositório:** `git clone https://github.com/seu-usuario/keego-advantage-automation.git`
2. **Instale as dependências:** `npm install`
3. **Execute os testes:** `npx cypress open`

## Contribuindo:
Agradecemos sua contribuição! Siga estes passos:

1. **Fork o repositório.**
2. **Crie uma nova branch.**
3. **Faça suas alterações e commit.**
4. **Envie um pull request.**


**Links úteis:**

* **Cypress:** https://www.cypress.io/
* **Cucumber:** https://cucumber.io/



