import { test, expect } from "@playwright/test";

test.describe("Login Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
  });

  test("should display login form", async ({ page }) => {
    await page.getByRole("link", { name: "Make Appointment" }).click();
    await expect(page.getByText("Please login to make")).toBeVisible();

    await page.getByLabel("Username").fill("John Doe");
    await page.getByLabel("Password").fill("ThisIsNotAPassword");

    (await page.getByRole("button", { name: "Login" }).click(),
      // Assert a text
      await expect(page.locator("h2")).toHaveText("Make Appointment"));
  });

  //negative scenario
  test("should display error message for invalid credentials", async ({
    page,
  }) => {
    await page.getByRole("link", { name: "Make Appointment" }).click();
    await expect(page.getByText("Please login to make")).toBeVisible();

    await page.getByLabel("Username").fill("InvalidUser");
    await page.getByLabel("Password").fill("InvalidPassword");

    await page.getByRole("button", { name: "Login" }).click();

    // Assert the error message is displayed

    await expect(page.locator("#login")).toContainText(
      "Login failed! Please ensure the username and password are valid.",
    );
  });
});
