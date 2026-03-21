import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('Playwright');
  page.pause();

// Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('//input[@data-test="username"]');
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.locator('input[data-test="password"]');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login'}).click();

  // Click the get started link.
 //* await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  //await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
