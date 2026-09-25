import { test, expect } from '@playwright/test';

test('homepage should load successfully', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/Swag Labs/);
});