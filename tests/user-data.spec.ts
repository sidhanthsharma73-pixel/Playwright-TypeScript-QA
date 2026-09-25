import { test, expect } from "@playwright/test";

import {
  username,
  password,
  loginAttempts,
} from "./data/user";

test("user test data should be valid", async () => {
  expect(username).toBe("standard_user");

  expect(password).toBe("secret_sauce");

  expect(loginAttempts).toBe(3);
});