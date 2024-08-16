import { test, expect } from '@playwright/test';

// path to auth file (must match with Playwright configuration)
const authFile = "./auth/login.json";


test('Register user', async ({page}) => {
    await page.goto('https://www.ericsson.com/en');

    // await page.locator('a#CybotCookiebotDialogBodyButtonNecessary').click();

    await page.locator('.log-in.header__top-item').click();

    await page.locator('input[name="loginfmt"]').fill("ngan.dinh@optimizely.com");
    await page.locator('input.button_primary').click();
    await page.locator('input#passwordInput').fill("@Summer2024")
    await page.locator('#submitButton').click();

    // Verify go to Welcome Ngan page
    await expect(page.locator('//h1[text()="Welcome Ngan"]')).toBeVisible();

    // Store authenticated states to a file
  await page.context().storageState({ path: authFile });


});