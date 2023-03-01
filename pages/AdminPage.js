exports.AdminPage = class AdminPage {
    constructor(page) {
        this.page = page;
        this.adminTab = page.getByRole('link', { name: 'Admin' });
        this.addUserButton = page.getByRole('button', { name: 'Add' });
        this.userRoleDropdown = page.locator('div[class*="input-group"]:has-text("user role")').locator('div[class*="select-text-input"]');
        this.roleOptionESS = page.getByRole('option', { name: 'ESS' });
        this.roleOptionAdmin = page.getByRole('option', { name: 'Admin' })
        this.empNameInput = page.locator('div[class*="input-group"]:has-text("employee name")').locator('input');
        this.empSuggestion = page.getByRole('option').first();
        this.statusDropdown = page.locator('div[class*="input-group"]').filter({ hasText: 'Status' }).locator('div[class*="select-text-input"]');
        this.roleOptionEnabled = page.getByRole('option', { name: 'Enabled' });
        this.usernameField = page.locator('div[class*="input-group"]').filter({ hasText: 'Username' }).locator('input');
        this.passwordField = page.locator('div[class*="input-group"]').filter({ hasText: 'Password' }).locator('input').first();
        this.confirmPasswordField = page.locator('div[class*="input-group"]').filter({ hasText: 'Confirm Password' }).locator('input');
        this.successMessage = page.getByText('Success', { exact: true });
        this.saveButton = page.getByRole('button', { name: 'Save' });
        this.searchUsername = page.locator('div[class*="input-group"]').filter({ hasText: 'Username' }).locator('input');
        this.searchButton = page.getByRole('button', { name: 'Search' });
    }
}