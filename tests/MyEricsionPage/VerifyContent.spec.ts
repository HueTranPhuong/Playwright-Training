import test from "@playwright/test";

test('Verify Content', async ({page}) => {
    await page.goto('https://www.ericsson.com/en/myericsson');
}

)