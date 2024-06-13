import { test, expect } from '@playwright/test';
import { promises } from 'dns';

test('verify pdf file is downloaded successfully', async ({page, headless}) => {

    if (headless) {



    await page.goto("https://www.ericsson.com/en");

    await page.locator('a#CybotCookiebotDialogBodyButtonNecessary').click();

    await page.locator('//a[@title="Link to pdf document"]').scrollIntoViewIfNeeded();

    await page.locator('//a[@title="Link to pdf document"]').click();

    //download file pdf

    promises.all
    }

    
})