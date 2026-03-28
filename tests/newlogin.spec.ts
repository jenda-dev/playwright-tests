import test, { expect } from '../fixtures/basePages';
import { LoginPage } from '../fixtures/page-objects/LoginPageExample';
import {HomePage} from "../fixtures/page-objects/HomePage"

test.describe('Alerts', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://demoqa.com/alerts');
    })

test('Simple alert 1', async ({ loginPage, homePage, browserName, page }) => {
    test.skip(browserName === 'firefox', 'Still working on it')
    await loginPage.gotoLoginPage();
    await loginPage.login();
    await expect(homePage.title).toBeVisible();
});

test('Simple alert 2', async ({ page, browserName }) => {
    const homePage = new HomePage(page)
    const loginPage = new LoginPage(page)
    
    test.skip(browserName === 'firefox', 'Still working on it')
    await loginPage.gotoLoginPage();
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(homePage.title).toBeVisible();
});

// potřebuju 1 simple interakci, nevytváříš novou instanci HomePage  //
test('Simple alert 3', async ({ page, browserName }) => {
    
    const loginPage = new LoginPage(page)
    
    test.skip(browserName === 'firefox', 'Still working on it')
    await loginPage.gotoLoginPage();
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(HomePage.menu2(page)).toBeVisible();
});

})