# 1. Instructions and Notes

Inside that directory, you can run several commands:

  npx playwright test
    Runs the end-to-end tests.

  npx playwright test --ui
    Starts the interactive UI mode.

  npx playwright test --project=chromium
    Runs the tests only on Desktop Chrome.

  npx playwright test example
    Runs the tests in a specific file.

  npx playwright test --debug
    Runs the tests in debug mode.

  npx playwright codegen
    Auto generate tests with Codegen.

We suggest that you begin by typing:

    npx playwright test

And check out the following files:
  - ./tests/example.spec.ts - Example end-to-end test
  - ./playwright.config.ts - Playwright Test configuration

Visit https://playwright.dev/docs/intro for more information. ✨

Happy hacking! 🎭

## 1.1. In this session... 

__Running the E2E Test Sucessfully__
1. Get the API key and update `.env` file
2. Add the following setting in `playwright.config.ts`
```ts
// Use object
userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",

// Project object
args: ["--disable-blink-features=AutomationControlled", "--disable-features=IsolateOrigins,site-per-process", "--allow-no-sandbox-job"],
```
1. Re-run the test
2. Test ✅ ✅ // control+ command+ space => pop up with icons
---