import { test } from "./fixture/test";
import { expect } from "@playwright/test";
import { user } from "./data/user";

test.use({
    storageState: undefined,
});

test("user should be able to log in successfully", async ({ page, loginPage }) => {
    await page.goto("/");

    await loginPage.login(
        user.username,
        user.password
    );

    await expect(page).toHaveURL(/inventory.html/);

    await expect(
        page.locator(".title")
    ).toHaveText("Products");
});