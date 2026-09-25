import { test, expect } from "@playwright/test";

import {
  username,
  password,
} from "./data/user";

test("user should be able to log in successfully", async ({ page }) => {
  await page.goto("/");

  await page.locator("#user-name").fill(username);

  await page.locator("#password").fill(password);

  await page.locator("#login-button").click();

  await expect(page).toHaveURL(/inventory.html/);

  await expect(page.locator(".title")).toHaveText("Products");
});