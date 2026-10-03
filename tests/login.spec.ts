import { test } from "./fixture/test";
import { expect } from "@playwright/test";

test("user should be able to log in successfully", async ({ authenticatedPage }) => {
    await expect(authenticatedPage).toHaveURL(/inventory.html/);

    await expect(
        authenticatedPage.locator(".title")
    ).toHaveText("Products");
});