// playwright.config.ts
import { defineConfig } from '@playwright/test';
import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  // ...other configuration options

  // Define globalSetup function
  globalSetup: async () => {
    // Setup steps to be performed before running each test
    await (global as any).__BROWSER__.restart(); // Example: Restart the browser before each test
    // Additional setup steps...
  },

  // ...other configuration options
};

export default config;
