import test, { expect } from '../fixtures/basePages';

test.describe('Screenshots', () => {
    test.beforeEach(async ({ loginPage }) => {
        await loginPage.gotoLoginPage();
        await loginPage.login();
    })

test.only('Viewport screenshot', async ({ page }) => {
    await page.screenshot ({ path: 'screenshots/viewport.png' })
   // await expect(page.locator('#uploadedFilePath')).toBeVisible();
});



});