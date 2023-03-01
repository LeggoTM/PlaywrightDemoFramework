exports.LoginPage = class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = page.getByPlaceholder('Username');
        this.passwordInput = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.errorMessage = page.getByRole('alert').locator('div').filter({ hasText: 'Invalid credentials' });
        this.afterLoginPageHeading = page.getByRole('heading', { name: 'Dashboard' });
    }
}