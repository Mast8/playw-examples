// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  //await expect(page.getByText("Bad login")).toBeVisible()

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


test('started link', async ({ page }) => {
  const email = "ron";
  const password = "1234";

    //const page = await browser.newPage();
  await page.goto("https://news.ycombinator.com/submit");

  await page.fill('input[name="acct"]', email);
  await page.fill('input[name="pw"]', password);

    
  await page.goto('https://playwright.dev/');

  await page.click('input[value="login"]')
   expect(page.getByText("Bad login"))

 
});

 // Expects page to have a heading with the name of Installation.
  //run tests
  //npx playwright test