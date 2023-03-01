exports.DashboardPage = class DashboardPage {
    constructor(page) {
        this.page = page;
        this.adminTab = page.getByRole('link', { name: 'Admin' });
        this.PIMTab = page.getByRole('link', { name: 'PIM' });
        this.leaveTab = page.getByRole('link', { name: 'Leave' });
        this.timeTab = page.getByRole('link', { name: 'Time' });
        this.recruitmentTab = page.getByRole('link', { name: 'Recruitment' });
        this.myInfoTab = page.getByRole('link', { name: 'My Info' });
        this.performanceTab = page.getByRole('link', { name: 'Performance' });
        this.dashboardTab = page.getByRole('link', { name: 'Dashboard' });
        this.directoryTab = page.getByRole('link', { name: 'Directory' });
    }
}