import { test, expect } from '@playwright/test';

test('homepage should load', async ({ page }) => {
    await page.goto('http://localhost:3001');
});
test('homepage should display correct message', async ({ page }) => {
    await page.goto('http://localhost:3001');
    const content = await page.textContent('body');
    expect(content).toBe('Hello CI/CD World!');
});


