import { test, expect } from "@playwright/test";
import { multiply } from "./math";

test("multiply should return the correct result", () => {
  const result = multiply(5, 4);

  expect(result).toBe(20);
});