// Playwright code-
/*
    javascript sıralama ile çalışmadıgı için her stepden önce 
    await keyword yazılması gerekir yada bunlardan kurtulmak
    için functionın yanına async yazılması yeterli olucaktır
    bu önemli bir nottur.
*/



const {test, expect} = require('@playwright/test');
test('Browser Context Decleration Playwright test',async ({browser})=>
{
    // We write our code inside this function
    const context = await browser.newContext();
    const page = await context.newPage();
    const userName= page.locator('input#username');
    const signIn=page.locator('input#signInBtn');
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy');
    await userName.type("rahulshetty");
    await page.locator("[name='password']").type("practice");
    await page.locator('input#terms').click();
    
    /**
    * aşagıda yazılan kod satırında otomasyon edilirken yanlış şifre ve kullanıcı adından kaynaklı
    * bir hata mesajı sergilemekte inspect edip bakıldıgında style attribute name none dan blocka
    * dönüşmekte. Ve saniyeler içerisinde hata mesajı yok olmakta bu yüzden * işareti kullanılarak
    * bu web elementin bir parçası sadece alındı. sonrasında textContent fonksiyonu ile bu tag 
    * içerisinde yazılı olan string alınmış oldu 
    */

    console.log(await page.locator("[style*='block']").textContent());

    // toContainText() alınan textin bir parçasında olup olmadıgının kontrolunu yapar.
    await expect(page.locator("[style*='block']")).toContainText('username/password.');

    // type - fill
    await userName.fill("");
    await userName.fill("rahulshettyacademy");
    await signIn.click();
    console.log(await page.locator('div.card-body a').textContent());



});

test('Page decleration Playwright Test',async ({page})=>
{
    await page.goto("https://www.google.com");
    console.log(await page.title());
    await expect(page).toHaveTitle('Google');
    //got
});



