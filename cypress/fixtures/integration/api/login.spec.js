import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../../support/page_objects/loginPage';

const loginPage = new LoginPage();

Given('que eu acesse a página de login', () => {
  loginPage.visit();
});

When('eu preencho o usuário {string} e a senha {string}', (username, password) => {
  loginPage.fillUsername(username);
  loginPage.fillPassword(password);
});

When('eu clico no botão de login', () => {
  loginPage.submit();
});

Then('eu devo ser redirecionado para a página de dashboard', () => {
  loginPage.verifyLogin();
});
