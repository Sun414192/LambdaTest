import { test, expect } from '@playwright/test';
import { BASE_URL } from './Utils/environment.json'

test('Login Skip', async ({ browser }) => {

  const context = await browser.newContext({
    storageState: "./auth.json"
  })

  const page = await context.newPage();

  await page.goto(BASE_URL);
  await page.waitForTimeout(5000);

});
