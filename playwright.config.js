// @ts-check
const { devices } = require('@playwright/test');

const config = {
  testDir: './tests',
  /* Maximum time one test can run for. */
  timeout: 30 * 1000, // test stepleri için beklenen max süre
  expect: { // assertion yaparken beklenen süreyi yazdık
    timeout: 5000
  },
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    // We have to tell which properties that we have f.example: browser type
    browserName: 'chromium',
    headless: false
  },

};

module.exports = config;
