  const { test, expect } = require('@playwright/test');
  const path = require('path');

  test('button click shows new text', async ({ page }) => {
    const filePath = 'file://' + path.resolve(__dirname, '../index.html');
    await page.goto(filePath);
    await page.click('#reveal-btn');
    const message = await page.locator('#message');
    //await expect(message).toHaveText('Hello from CircleCI!');
    await expect(message).toHaveText('This text does not exist');
  });
