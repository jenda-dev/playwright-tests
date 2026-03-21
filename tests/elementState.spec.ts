import { test, expect } from '@playwright/test';

 test('Element state', async ({ page }) => {
  await page.goto('http://www.saucedemo.com');
//kontrola stavu elementů na stránce// 
console.log(await page.locator('#user-name').isEditable());
console.log(await page.locator('#password').isVisible());
console.log(await page.locator('#login-button').isHidden());
});

