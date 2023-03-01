// @ts-check
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { AdminPage } = require('../pages/AdminPage');
const { credentials } = require('../utils/credentials');

test.describe.configure({ mode: 'serial' });

test.describe('User Test Flows @userFlow', () => {
  // Use the stored admin auth state
  test.use({ storageState: 'utils/adminState.json' });

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await expect(loginPage.afterLoginDashboardHeading).toBeVisible();
  });

  test('Add a user role', async ({ page }) => {
    const adminPage = new AdminPage(page);
    await adminPage.adminTab.click();
    await adminPage.addUserButton.click();
    await expect(page).toHaveURL(/admin\/saveSystemUser/);
    await adminPage.userRoleDropdown.click();
    await adminPage.roleOptionESS.click();
    await adminPage.empNameInput.type('a');
    await expect(adminPage.empSuggestion).toBeVisible();
    await adminPage.empSuggestion.click();
    await adminPage.statusDropdown.click();
    await adminPage.roleOptionEnabled.click();
    await adminPage.usernameField.fill(credentials.newUsername);
    await adminPage.passwordField.type(credentials.newPassword);
    await adminPage.confirmPasswordField.type(credentials.newPassword);
    await adminPage.saveButton.click();
    await expect(adminPage.successMessage).toBeVisible();
  })

  test('Search and delete the user', async ({ page }) => {
    const adminPage = new AdminPage(page);
    await adminPage.adminTab.click();
    await adminPage.searchUsername.fill(credentials.newUsername);
    await adminPage.searchButton.click();
    await expect(page.locator('div').getByText(credentials.newUsername)).toBeVisible();
  })
});
