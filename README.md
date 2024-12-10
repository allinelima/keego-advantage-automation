## Keego Advantage Automation

**Automatizando testes no Advantage Online Shopping com Cypress e Cucumber**

Este projeto tem como objetivo garantir a qualidade do site Advantage Online Shopping através de testes automatizados, utilizando a abordagem BDD.

## Pré-requisitos

- Node.js >= 18.x
- NPM ou Yarn
- Git(https://git-scm.com/)


## Tecnologias:

* **Cypress:** Framework de testes end-to-end.
* **Cucumber:** Ferramenta para definir cenários de teste em linguagem natural.
* **JavaScript:** Linguagem de programação utilizada para escrever os testes.

## Estrutura do Projeto:

```javascript
keego-advantage-automation/
│
├── cypress/
│ ├── integration
│ ├── support
│ ├── pages
├── cypress.config 
├── package.json 
└── README.md 
```
## O projeto está dividido em:

cypress/integration/: Contém os arquivos de teste em Gherkin (.feature) usando o Cucumber.
cypress/pages/: Contém os arquivos PageObjects, que encapsulam a lógica de interação com as páginas.
cypress/support/: Contém configurações e customizações do Cypress, como as definições dos steps do Cucumber.

## Como Usar:
1. **Clone o repositório:** `git clone https://github.com/seu-usuario/keego-advantage-automation.git`
2. **Instale as dependências:** `npm install`
3. **Execute os testes:** `npx cypress open`

## Instalar as dependências
Instale as dependências do projeto usando o npm (que é instalado junto com o Node.js):
npm install

Isso instalará todas as bibliotecas necessárias, incluindo Cypress, Cucumber e quaisquer outras dependências que o projeto exija.

## Executar os testes
Para executar os testes utilizando o Cypress em modo headless (sem interface gráfica), execute o seguinte comando:
npx cypress run

Se você preferir rodar o Cypress com a interface gráfica, use:
npx cypress open

Isso abrirá a interface do Cypress, onde você pode selecionar e executar os testes manualmente.

## Executar um teste específico
Caso queira rodar um teste específico, você pode indicar o caminho para o arquivo de testes usando:
npx cypress run --spec "cypress/integration/path-to-your-test.feature"

## Alterações no Cypress config
As configurações do Cypress foram ajustadas conforme as necessidades do projeto, mas essas modificações são transparentes para o usuário que deseja apenas rodar os testes.

## Explicação do conteúdo:

- **Pré-requisitos**: Informações sobre o que o usuário precisa ter instalado (Node.js, Git).
- **Passos para clonar e rodar o projeto**: Instruções simples para clonar o repositório, instalar dependências, e executar os testes.
- **Estrutura do projeto**: Uma visão geral dos diretórios principais, como onde ficam os arquivos **PageObjects** e os testes em **Cucumber**.
- **Cypress config**: Indica que as alterações no arquivo de configuração são irrelevantes para a execução dos testes.

## Contribuindo:
Agradecemos sua contribuição! Siga estes passos:

1. **Fork o repositório.**
2. **Crie uma nova branch.**
3. **Faça suas alterações e commit.**
4. **Envie um pull request.**


**Links úteis:**

* **Cypress:** https://www.cypress.io/
* **Cucumber:** https://cucumber.io/



