const{test,expect}= require('@playwright/test');
test.only('VALID login Test rahulshetty Academy',async ({browser})=>{
    const context =await browser.newContext();
    const page =  await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    // Locator
    const userName=page.locator('input#username');
    const password=page.locator("[name='password']");
    const signIn=page.locator('input#signInBtn');
    const termsBox=page.locator('input#terms');
    const listOfItems=page.locator('div.card-body a');

    // Verification for Title
    console.log(await page.title());
    await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy');

    // Action part
    await userName.type("rahulshettyacademy");
    await password.type("learning");
    await termsBox.click();
    await signIn.click();


    // Alttaki kod satırında eşleşmiş olan 4 farklı web element oldugu için
    // bizlere hata vericek bu sebeple nth(0) methodunu yada .first() methodunu
    // kullanarak ilkini almamız sağlanır.
    // Verilen hata kodu : Strict mode violationdır.
    console.log(await listOfItems.nth(0).textContent());

    // Oluşturulan bir Locatorın eşleştiği tüm elementleri çekmek için
    /**
     *  eger allTextContents() fonksiyonu kullanılacaksa bundan önce textContent()
     *  fonksiyonu kullanılması gerekir. çünkü allTextContents methodu Playwrightta
     *  bir mekanızmaya sahip değildir. Testler çalıştırıldıgında bunun DOM da attach
     *  olup olmadıgı beklenilmez ve kontrol edilmez.
     */
    console.log(await listOfItems.allTextContents());


})