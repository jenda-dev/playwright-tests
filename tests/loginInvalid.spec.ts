import { test, expect } from '@playwright/test';
import { LoginPage } from './page-objects/LoginPage';

test('Successful login', async ({ page }) => {
   const loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
    await loginPage.enterValidUsername();
    await loginPage.enterValidPassword();
    await loginPage.clickLoginButton();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

test('Cannot login with valid username and invalid password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
    await loginPage.enterValidUsername();
    await loginPage.enterInvalidPassword();
    await loginPage.clickLoginButton();
    await expect(loginPage.invalidCredentialsErrorMessage).toBeVisible();

});