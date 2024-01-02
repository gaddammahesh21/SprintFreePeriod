import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.waitForTimeout(5000); 
    await page.goto('https://edulence.klstaging.net/');
    await page.waitForTimeout(1000);
    await page.locator('#email').click();
    await page.locator('#email').fill('mahesh.g@elblearning.com');
    await page.locator('#password').click();
    await page.locator('#password').fill('slacker');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.goto('https://edulence.klstaging.net/dashboard/featured');
    await page.waitForTimeout(3000); 

    await expect(page.getByRole('button', { name: 'Accept', exact: true })).toBeVisible();
    await page.getByRole('button', { name: 'Accept', exact: true }).click();
    
    await page.getByText('Enterprise A.').click();
    await page.getByRole('link', { name: 'Admin page' }).click();
    await page.waitForTimeout(3000);
    page.getByRole('button', { name: 'New ReportsBETA' });
});
