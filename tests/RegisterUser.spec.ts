import { test, expect } from '@playwright/test';

const title = 'Automation Exercise';
const name = 'Huetran';
const email = 'hue@yopmail.com'

test('Register user', async ({page}) => {
  //
  await page.goto('http://automationexercise.com');

  //Verify that home page is visible successfully
  await expect(page).toHaveTitle(title);

  //Click on 'Signup / Login' button
  await page.locator('//a[contains(text(),"Login")]').click();

  //Verify 'New User Signup!' is visible
  await expect(page.locator('div.signup-form h2')).toBeVisible();

  //Enter name and email address
  await page.locator('input[name="name"]').fill(name);
  await page.locator('//form[@action="/signup"]//input[@type="email"]').fill(email);

  //Click 'Signup' button
  await page.locator('button[data-qa="signup-button"]').click();

  //Verify that 'ENTER ACCOUNT INFORMATION' is visible
  await expect(page.locator('//b[text()="Enter Account Information"]')).toBeVisible();

  //Fill details: Title, Name, Email, Password, Date of birth
  await page.locator('input#id_gender2').click();
  await page.locator('input#password').fill('123456aA@');
  await page.locator('input#password').fill('123456aA@');



});


