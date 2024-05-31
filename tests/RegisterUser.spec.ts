import { test, expect } from '@playwright/test';

const title = 'Automation Exercise';
const name = 'Huetran';
const email = 'hue@yopmail.com'

test('Register user', async ({page}) => {
  //
  await page.goto('http://automationexercise.com');

  await expect(page).toHaveTitle(title);

  await page.locator('//a[contains(text(),"Login")]').click();

  await expect(page.locator('div.signup-form h2')).toBeVisible();

  await page.locator('input[name="name"]').fill(name);

  await page.locator('//form[@action="/signup"]//input[@type="email"]').fill(email);

  await page.locator('button[data-qa="signup-button"]').click();

  await expect(page.locator('//b[text()="Enter Account Information"]')).toBeVisible();

});


