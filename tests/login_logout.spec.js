import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://com.stg.aem.toryburch.com/auth-form.html?redirect=/en-us/');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('storefront');
  await page.getByRole('textbox', { name: 'Username' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('torydev');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.goto('https://com.stg.aem.toryburch.com/en-us/');
  await page.keyboard.press('Meta+R');
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('button', { name: 'My Account' }).hover();
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).fill('basingh@destm.com');
  await page.getByRole('textbox', { name: 'Email Address' }).press('Tab');
  await page.getByRole('textbox', { name: 'show password Password' }).fill('Khalsa@19841699');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('button', { name: 'My Account' }).hover();
  await expect(page.getByLabel('My Account')).toContainText('Hi, Balbindar');
  await page.locator('li').filter({ hasText: 'Sign Out' }).click();
  await page.getByTitle('Sign Out').click();
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'My Account' }).hover();
  await expect(page.getByRole('button', { name: 'Sign In' })).toBeVisible();
});