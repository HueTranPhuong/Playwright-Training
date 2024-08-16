import test, { expect } from "@playwright/test";

test('Verify “Your shopping cart is empty.” is displayed', async ({page}) => {
    await page.goto('https://bookcart.azurewebsites.net/login');

    // login with account an/1234567aA@

    await page.locator('input#mat-input-0').fill('an');
    await page.locator('input#mat-input-1').fill("1234567aA@");
    await page.locator('//span[text()="Login"]').click();

    // access shopping cart
    await page.locator('//mat-icon[text()="shopping_cart"]').click();
 
    // Verify Verify “Your shopping cart is empty.” is displayed
    await expect(page.locator('//mat-card-title[text()="Your shopping cart is empty."]')).toBeVisible();

}
);