import { test, expect } from '@playwright/test';

const title = 'Automation Exercise';
const name = 'Huetran';
const email = 'hue12@yopmail.com'
const password = '123456aA@'
const accounttitle = 'Mr'

//c2 điền dob
const dob = {
  'date': '25',
  'month': 'July',
  'year': '1995'
}

test('Register user', async ({page}) => {
  //
  await page.goto('http://automationexercise.com');

  //Verify that home page is visible successfully
  await expect(page).toHaveTitle(title);

  // //Click on 'Signup / Login' button
  // await page.locator('//a[contains(text(),"Login")]').click();

  // //Verify 'New User Signup!' is visible
  // await expect(page.locator('div.signup-form h2')).toBeVisible();

  // //Enter name and email address
  // await page.locator('input[name="name"]').fill(name);
  // await page.locator('//form[@action="/signup"]//input[@type="email"]').fill(email);

  // //Click 'Signup' button
  // await page.locator('button[data-qa="signup-button"]').click();

  // //Verify that 'ENTER ACCOUNT INFORMATION' is visible
  // await expect(page.locator('//b[text()="Enter Account Information"]')).toBeVisible();

  // //Fill details: Title, Name, Email, Password, Date of birth
  // await page.locator(`input[value="${accounttitle}"]`).check();
  // await page.locator('input#password').fill('123456aA@');
  
  // //date of birth c1
  // // await page.locator('select#days').selectOption('25');
  // // await page.locator('select#months').selectOption('July');
  // // await page.locator('select#years').selectOption('1995');

  // // fill dob c2
  // await page.locator('select#days').selectOption({label : dob.date });
  // await page.locator('select#months').selectOption({label : dob.month });
  // await page.locator('select#years').selectOption({label : dob.year });


  // // Select checkbox 'Sign up for our newsletter!' & 'Receive special offers from our partners!'
  // await page.locator('input#newsletter').click();
  // await page.locator('input#optin').click();

  // // Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
  // await page.locator('input#first_name').fill('Hue');
  // await page.locator('input#last_name').fill('Tran');
  // await page.locator('input#address1').fill('165 Thai Ha, Dong Da, Ha Noi');
  // await page.locator('input#password').fill('123456aA@');
  // await page.locator('select#country').selectOption('Singapore');
  // await page.locator('input#state').fill('Naacanze');
  // await page.locator('input#city').fill('HaNoi');
  // await page.locator('input#zipcode').fill('100000');
  // await page.locator('input#mobile_number').fill('05443987564');

  // //Click 'Create Account button'
  // await page.locator('button[data-qa="create-account"]').click();

  // //Verify that 'ACCOUNT CREATED!' is visible
  // await expect(page.locator('//b[contains(text(), "Account Created!")]')).toBeVisible();

  // // Click 'Continue' button
  // await page.locator('a[data-qa="continue-button"]').click();

  // //  Verify that 'Logged in as username' is visible
  // await expect(page.locator('//a[contains(text(),"Logged in as")]')).toBeVisible();

  // // Click 'Delete Account' button
  // await page.locator('//a[contains(text(),"Delete Account")]').click();

  // // Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
  // await expect(page.locator('//b[contains(text(),"Account Deleted!")]')).toBeVisible();
  // await page.locator('//a[contains(text(), "Continue")]').click();
  // // await page.locator('a[data-qa="continue-button"]').click();
});

test('Login success', async ({page}) => {

  await page.goto('http://automationexercise.com');

  // //Verify that home page is visible successfully
  // await expect(page).toHaveTitle(title);

  // //Click on 'Signup / Login' button
  // await page.locator('//a[contains(text(),"Login")]').click();

  // //Verify 'Login to your account' is visible
  // await expect(page.locator('div.login-form h2')).toBeVisible();

  // //Enter correct email address and password
  // await page.locator('div.login-form input[type="email"]').fill(email);
  // await page.locator('input[name="password"]').fill(password);

  // //Click 'Login' button
  // await page.locator('//button[contains(text(),"Login")]').click();

  // //  Verify that 'Logged in as username' is visible
  // await expect(page.locator('//a[contains(text(),"Logged in as")]')).toBeVisible();

  // // Click 'Delete Account' button
  // await page.locator('//a[contains(text(),"Delete Account")]').click();

  // // Verify that 'ACCOUNT DELETED!' is visible 
  // await expect(page.locator('//b[contains(text(),"Account Deleted!")]')).toBeVisible();
  
})

test( 'Login incorrect email & password',async ({page}) => {
  await page.goto('http://automationexercise.com');
  test.skip();

  // //Verify that home page is visible successfully
  // await expect(page).toHaveTitle(title);

  // //Click on 'Signup / Login' button
  // await page.locator('//a[contains(text(),"Login")]').click();

  // //Verify 'Login to your account' is visible
  // await expect(page.locator('div.login-form h2')).toBeVisible();

  // //Enter correct email address and password
  // await page.locator('div.login-form input[type="email"]').fill("test@yopmail.com");
  // await page.locator('input[name="password"]').fill("1234567890");

  // //Click 'Login' button
  // await page.locator('//button[contains(text(),"Login")]').click();

  // //  Verify that 'Logged in as username' is visible
  // await expect(page.locator('//p[text()="Your email or password is incorrect!"]')).toBeVisible();
  
})

test('Logout user', async ({page}) => {
  await page.goto('http://automationexercise.com');

  //Verify that home page is visible successfully
  await expect(page).toHaveTitle(title);

  // //Click on 'Signup / Login' button
  // await page.locator('//a[contains(text(),"Login")]').click();

  // //Verify 'Login to your account' is visible
  // await expect(page.locator('div.login-form h2')).toBeVisible();

  // //Enter correct email address and password
  // await page.locator('div.login-form input[type="email"]').fill(email);
  // await page.locator('input[name="password"]').fill(password);

  // //Click 'Login' button
  // await page.locator('//button[contains(text(),"Login")]').click();

  // //  Verify that 'Logged in as username' is visible
  // await expect(page.locator('//a[contains(text(),"Logged in as")]')).toBeVisible();

  // // Click 'Logout' button
  // await page.locator('//a[contains(text(),"Logout")]').click();

  // // Verify that user is navigated to login page
  // await expect(page).toHaveTitle("Automation Exercise - Signup / Login");
})


