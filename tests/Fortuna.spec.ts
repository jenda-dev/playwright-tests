import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.ifortuna.cz/');
  await page.getByRole('button', { name: 'Jen nezbytné' }).click();
  await page.locator('#login-mounted div').click();
  await page.getByLabel('Email / uživatelské jméno').click();
  await page.getByLabel('Email / uživatelské jméno').fill('Kvizvir69');
  await page.getByLabel('Heslo').click();
  await page.getByLabel('Heslo').fill('Drticbukvic69');
  await page.getByRole('button', { name: 'Přihlásit' }).click();
  //await page.getByText('×').click();
});