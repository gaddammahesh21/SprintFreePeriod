// import { test, expect } from '@playwright/test';

// test('Launch url', async ({ page }) => {
//   await page.goto('https://tga-qa.staging.thetrainingarcade.com/admin/#!/games');

//   // Expect a title "to contain" a substring.
//  // await expect(page).toHaveTitle(/Playwright/);
// });

// test('Login ', async ({ page }) => {
//   await page.goto('https://tga-qa.staging.thetrainingarcade.com/admin/#!/games');

//   // Click the get started link.

//  // await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await page.getByPlaceholder('Email Address').fill('divyadharshini.r@elearningbrothers.com');
//   await page.getByPlaceholder('Password').fill('P@ssw0rd');
//   await page.getByRole('checkbox',{name:'remember'}).click();
//   await page.getByRole('button',{name:'Sign In'}).click();
//   await expect(page.getByRole('button',{name:'New Game'})).toBeVisible();
// });
import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
    await page.goto('https://edulence.klstaging.net/');
    await page.locator('#email').click();
    await page.locator('#email').fill('mahesh.g@elblearning.com');
    await page.locator('#password').click();
    await page.locator('#password').fill('slacker');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.goto('https://edulence.klstaging.net/dashboard/featured');
    await page.waitForTimeout(5000); 
    await page.getByRole('button', { name: 'Accept', exact: true }).click();
    await page.getByText('Enterprise A.').click();
    await page.getByRole('link', { name: 'Admin page' }).click();
    await page.getByRole('button', { name: 'New ReportsBETA' }).click();
  });
