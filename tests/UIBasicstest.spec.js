// Playwright code-
/*
    javascript sıralama ile çalışmadıgı için her stepden önce 
    await keyword yazılması gerekir yada bunlardan kurtulmak
    için functionın yanına async yazılması yeterli olucaktır
    bu önemli bir nottur.
*/



const {test} = require('@playwright/test');
test('Browser Context Decleration Playwright test',async ({browser})=>
{
    // We write our code inside this function
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
});

test('Page decleration Playwright Test',async ({page})=>
{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
});