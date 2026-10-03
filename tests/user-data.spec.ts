import { test, expect } from "@playwright/test";

import {
  user
} from "./data/user";

test("user test data should be valid", async () => {
  expect(user.username).toBe("standard_user");

expect(user.password).toBe("secret_sauce");

expect(user.loginAttempts).toBe(3);
});