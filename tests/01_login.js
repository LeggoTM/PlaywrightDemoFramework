// @ts-check
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { credentials } = require('../utils/credentials');

test.describe.configure({ mode: 'serial' });

test.describe('Login Group @login @smoke', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await expect(loginPage.loginButton).toBeVisible();
  })

  test('Negative Login Test', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.usernameInput.fill('wrongusername');
    await loginPage.passwordInput.fill('wrongpassword');
    await loginPage.loginButton.click();
    await expect(loginPage.errorMessage).toBeVisible();
  });

  test('Positive Login Test @auth', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.usernameInput.fill(credentials.username);
    await loginPage.passwordInput.fill(credentials.password);
    await loginPage.loginButton.click();
    await expect(loginPage.afterLoginDashboardHeading).toBeVisible();

    // Store admin logged in state
    await page.context().storageState({ path: 'utils/adminState.json' });
  });
});
