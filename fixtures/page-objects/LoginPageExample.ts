import { Locator, Page } from '@playwright/test';

export class LoginPage {
page: Page;
userNameInput: Locator;
passwordInput: Locator;
loginButton: Locator;
invalidCredentialsErrorMessage: Locator;

constructor(page: Page) {
    this.page = page;
    this.userNameInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');
    this.invalidCredentialsErrorMessage = page.getByText('Epic sadface: Username and password do not match any user in this service');
  }

  async gotoLoginPage() {
    await this.page.goto('http://www.saucedemo.com/');
  }
  async enterValidUsername() {
    await this.userNameInput.fill('standard_user');
  }  

  async enterInvalidUsername() {
    await this.userNameInput.fill('jméno');
  } 
  
  async enterValidPassword() {
    await this.passwordInput.fill('secret_sauce');
  }

  async enterInvalidPassword() {
    await this.passwordInput.fill('heslo123');
  }

  async clickLoginButton() {
    await this.loginButton.click();
  }

  enterUsername(username: string) {
    return this.userNameInput.fill(username)    
  }

async login (username: string, password: string) {
    await this.userNameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
}

}