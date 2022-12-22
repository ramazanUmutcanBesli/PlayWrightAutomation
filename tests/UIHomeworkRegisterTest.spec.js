const{test,expect}=require('@playwright/test');
test.only('Register Test Rahulshetty Academy',async({browser})=>{
    // Browser Configuration
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client/");

    // Index Page Locator
    const registerButton=page.locator('a.text-reset');
    
    // Index Page Action
    await registerButton.click();

    // Register Page Verification
    console.log(await page.locator('h1.login-title').innerText());

    // Register Page Locator
    const firstName=page.locator('input#firstName');
    const lastName=page.locator('input#lastName');
    const userEmail=page.locator('input#userEmail');
    const phoneNumber=page.locator('input#userMobile');
    const occupation1=page.locator("[formcontrolname='occupation']");
    const occupation2=page.locator("[value='1: Doctor']");
    const genderMale=page.locator("[value='Male']");
    const userPassword=page.locator('input#userPassword');
    const confirmPassword=page.locator('input#confirmPassword');
    const confirmationOfYears=page.locator("[formcontrolname='required']");
    const registerBtn=page.locator('input#login');
    
    // String Data for Registration
    const emailAdress="tester143212333@tester.com";
    const passwordAdress="Testertester1.";
    // Actions Registration Page
    await firstName.fill("tester");
    await lastName.fill("testertester");
    await userEmail.fill(emailAdress);
    await phoneNumber.fill("1234567890");
    //await occupation1.click();
    //await occupation2.click();
    await genderMale.click();
    await userPassword.fill(passwordAdress);
    await confirmPassword.fill(passwordAdress);
    await confirmationOfYears.click();
    await registerBtn.click();

    // Assertions
    await expect(page.locator('h1.headcolor')).toContainText("Account");

    //Login Page Locator
    const loginBtn=page.locator("[tabindex='0']");
    const emailBox=page.locator('input#userEmail');
    const passwordBox=page.locator('input#userPassword');
    const loginButton=page.locator('input#login');

    //Login Page actions
    await loginBtn.click();
    await emailBox.fill(emailAdress);
    await passwordBox.fill(passwordAdress);
    await loginButton.click();


    //Home Page Locator
    const listOfItems=page.locator('div.card-body b');
    //Home Page Actions
    console.log(await listOfItems.first().textContent());
    console.log(await listOfItems.allTextContents());



})