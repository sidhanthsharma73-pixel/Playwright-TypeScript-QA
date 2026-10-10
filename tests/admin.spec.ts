import { expect } from "@playwright/test";
import { test } from "./fixture/test";

test("authenticated user reaches inventory", async ({ authenticatedPage }) => {
  await expect(authenticatedPage).toHaveURL(/inventory\.html/);
});