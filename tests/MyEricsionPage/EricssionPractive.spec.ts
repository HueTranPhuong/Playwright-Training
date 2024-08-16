import { test, expect } from '@playwright/test';
import { promises } from 'dns';

const downloadFileName = 'modern-slavery-and-human-trafficking-statement.pdf';

test('verify pdf file is downloaded successfully', async ({ page, headless }) => {
    await page.goto("https://www.ericsson.com/en");

    await page.locator('a#CybotCookiebotDialogBodyButtonNecessary').click();

    //step 2 scroll den link 

    // await page.locator('//a[@title="Link to pdf document"]').scrollIntoViewIfNeeded();

    // if (headless) {

        // download file c1 dùng doc playwright
        // const downloadPromise = page.waitForEvent('download');

        // await page.locator('//a[@title="Link to pdf document"]').click();

        // const download = await downloadPromise;

        // console.log(download.suggestedFilename());

        // expect(download.suggestedFilename()).toEqual(downloadFileName); }


        // download file c2 dùng promissAll

    //     const [download, click] = await Promise.all([
    //         page.waitForEvent('download'),
    //         page.locator('//a[@title="Link to pdf document"]').click()

    //     ]);
    //     expect(download.suggestedFilename()).toEqual(downloadFileName);
    // }

    // else {
    //     const [newpage] = await Promise.all([
    //         page.waitForEvent('load'),
    //         page.locator('//a[@title="Link to pdf document"]').click()
    //     ])
    //     newpage.on('response', async (response) => {
    //         expect(response.headers()['content-type']).toBe('application/pdf');

            
    //     })

    //     await newpage.reload();
    // }
})