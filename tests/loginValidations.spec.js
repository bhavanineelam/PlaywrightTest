import { test, expect } from '@playwright/test';

test("Verify Valid UN and Valid Pwd", async({page})=>
{
    //Actions
    await page.setViewportSize({width: 1920, height: 1080})
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator("//input[@name='username']").fill("Admin")
    await page.locator("//input[@name='password']").fill("admin123")
    await page.locator("//button[contains(@class,'login-button')]").click()
    //Assertion
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

})