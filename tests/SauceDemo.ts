import { test, expect } from '@playwright/test';

 test('has title', async ({ page }) => {
  await page.goto('/');
page.pause();
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test.use({ baseURL: 'https://youtube.com' });
test.only('get started link', async ({ page }) => {
  await page.goto('/');
  await page.locator ('//input[@data-test="username"]').click();

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});