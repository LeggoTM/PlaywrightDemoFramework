// @ts-check
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test.describe.configure({ mode: 'serial' });

test.describe('Login Group @login', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await expect(loginPage.loginButton).toBeVisible();
  })

  test('Negative Login Test', async ({ page }) => {
    const loginPage = new LoginPage(page);

  });

  test('Positive Login Test', async ({ page }) => {
    const loginPage = new LoginPage(page);

  });
})
