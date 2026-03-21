import { test, expect } from '@playwright/test';

import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  projects: [
    /* Test against desktop browsers */
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    }

    ],
  });

test('test', async ({ page }) => { 
  await page.goto('https://byscoot.eu/notes.html');
  await page.getByRole('heading', { name: 'Formulář' }).click();
  await page.getByText('Formulář').click();
  await page.locator('li').filter({ hasText: 'Formulář' }).click();
  await page.getByLabel('Jméno / Jméno').click();
  await page.getByLabel('Jméno / Jméno').fill('Karel');
  await page.getByLabel('Přijmení').click();
  await page.getByLabel('Příjmení').fill('Stehno');
  await page.getByLabel('Text').click();
  await page.getByLabel('Text').fill('Text-číslo-1');
  await page.getByLabel('E-mail').click();
  await page.getByLabel('E-mail').fill('random.stehno@random.cz')
  await page.getByRole('button', { name: 'Odeslat' }).click();
  //await page.getByText('×').click();
});
