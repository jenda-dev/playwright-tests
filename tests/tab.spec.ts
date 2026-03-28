import test, { expect } from '../fixtures/basePages';
import { LoginPage } from '../fixtures/page-objects/LoginPage';
import {HomePage} from "./page-objects/HomePage"

test.describe('Alerts', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://demoqa.com/alerts');
    })

test('Simple alert', async ({ page }) => {
    page.on("dialog", async dialog => {
        await dialog.accept();
    })
    await page.locator('#alertButton').click();
});

test('Confirm alert', async ({ page }) => {
    page.on("dialog", async dialog => {
        await dialog.dismiss();
    })
    await page.locator('#confirmButton').click();
    await expect(page.locator('#confirmResult')).toHaveText('You selected Cancel');
});

test('Promt alert', async ({ page }) => {
    page.on("dialog", async dialog => {
        await dialog.accept('Skillmea');
    })
    await page.locator('#promtButton').click();
    await expect(page.locator('#promptResult')).toHaveText('You entered Skillmea');
});

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
    await loginPage.login();
    await expect(homePage.title).toBeVisible();
});
})