import { test as base, Page } from "@playwright/test";
import { LoginPage } from "../pages/login.page";
import { user } from "../data/user";

export const test = base.extend<{
  loginPage: LoginPage;
  authenticatedPage: Page;
}>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  authenticatedPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);

    await page.goto("/");
    await loginPage.login(user.username, user.password);

    await use(page);
  },
});
