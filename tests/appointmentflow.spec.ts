import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://katalon-demo-cura.herokuapp.com/');
  await page.getByRole('link', { name: 'Make Appointment' }).click();
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('John Doe');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('ThisIsNotAPassword');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByLabel('Facility').selectOption('Hongkong CURA Healthcare Center');
  await page.getByRole('radio', { name: 'Medicaid' }).check();
  await page.locator('span').click();
  await page.getByRole('cell', { name: '30' }).nth(1).click();
  await page.getByRole('textbox', { name: 'Comment' }).click();
  await page.getByRole('textbox', { name: 'Comment' }).fill('Yep! I got the appointment done!');
  await page.getByRole('button', { name: 'Book Appointment' }).click();
});