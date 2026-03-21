import { test, expect } from '@playwright/test';

test('Twitch iframe se správně načte', async ({ page }) => {
  // Otevře tvou stránku
  await page.goto('https://www.byscoot.eu/soon2.html');

  // Locator pro iframe (předpokládám, že máš iframe s např. id nebo podle src)
  const twitchFrameLocator = page.locator('iframe[src*="player.twitch.tv"]');

  // Ověří, že iframe existuje a je viditelný
  await expect(twitchFrameLocator).toBeVisible();

  // Můžeš se také pokusit dostat do iframe a zkontrolovat obsah
  const frame = await twitchFrameLocator.elementHandle();
  const frameContent = await frame?.contentFrame();

  // Například zkontrolujeme, že v iframe je nějaký element s třídou .player
  // (toto závisí na tom, co Twitch v iframe skutečně vykreslí)
  if (frameContent) {
    const playerElement = frameContent.locator('.player');
    await expect(playerElement).toBeVisible();
  }
});