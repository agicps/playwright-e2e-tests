import { test, expect, APIRequest} from "@playwright/test";

// Top-level hook: runs before every single test in this file, regardless of which describe block it's in.
// Navigates to the CURA site so every test starts from the same page.
test.beforeEach(async ({ page }) => {
  await page.goto("https://katalon-demo-cura.herokuapp.com/");
});

test.describe("CURA Healthcare Service", () => {
  // Describe-level hook: runs before each test inside "CURA Healthcare Service" (after the top-level hook above).
  // Clicks "Make Appointment" so those tests land on the appointment page.
  test.beforeEach(async ({ page }) => {
    await page.getByRole("link", { name: "Make Appointment" }).click();
  });

  test("has title", async ({ page }) => {
    await expect(page).toHaveTitle("CURA Healthcare Service");
  });

  test("has heading", async ({ page }) => {
    await expect(page.locator("h1")).toHaveText("CURA Healthcare Service");
  });

test("Should demo locators", async ({ page }) => {
      await page.goto("https://katalon-demo-cura.herokuapp.com/");
      //await page.getByRole('link', { name: 'Make Appointment' }).click();

    let locator = page.getByRole("link", { name: "Make Appointment" });

    //console.log(`The type of locator is: ${typeof locator} and the value of locator is: 
     // ${JSON.stringify(locator)}`);

    await locator.click();
    
    //await page.getByRole('heading', { name: 'We Care About Your Health' }).click();
    await expect(page.getByText("Please login to make appointment.")).toBeVisible();

      // Click the make appointment link.
      //await page.getByRole("link", { name: "Make Appointment" }).click();
    
    
  });


  });
  
  test.describe("suite 2", () => {
    // Nested describe-level hook: runs before each test inside "suite 2", after both hooks above it.
    // Overrides the page with a navigation to playwright.dev, since this nested suite tests a different site.
    test.beforeEach(async ({ page }) => {
      await page.goto("https://playwright.dev/");
    });

    test("has title", async ({ page }) => {
      await page.getByRole("link", { name: "Get started" }).click();
      await expect(page).toHaveTitle(/Playwright/);
    });

    test("get started link", async ({ page }) => {
      // page is a fixture that is provided by playwright
      //test runner. It is an instance of the Page class that represents a single tab or window
      // in the browser. The page fixture is automatically created and passed to each test function,
      // allowing you to interact with the web page being tested.

      // Click the get started link.
      await page.getByRole("link", { name: "Get started" }).click();

      // Expects page to have a heading with the name of Installation.
      await expect(
        page.getByRole("heading", { name: "Installation" }),
      ).toBeVisible();
    });

    
  })