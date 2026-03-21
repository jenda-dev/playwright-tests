import test, {expect} from '../fixtures/basePages';
    
test.describe('Login', () => {
    test.beforeEach(async ({ loginPage }) => {
    await loginPage.gotoLoginPage();
    }) 


test('Successful login', async ({ page , loginPage }) => {
    test.info().annotations.push({
        type: 'Test',
        description: 'This test will pass if the user is not able to login with valid username and invalid password.'
    });
    await test.step('Enter valid username', async ()=> {
      await loginPage.enterValidUsername();
    });
    await test.step('Enter valid password', async ()=> {
      await loginPage.enterValidPassword();
    });

    await test.step('Click login button', async ()=> {
      await loginPage.clickLoginButton();
    });

    await test.step('Verify URL is correct', async ()=> {
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    });
    
});

test('Verify Home Title', async ({ page , loginPage, homePage }) => {
    await loginPage.gotoLoginPage();
    await loginPage.login();
    await expect(homePage.title).toBeVisible();
});


test('Verify add to cart functionality', async ({ page, loginPage, homePage }) => {
    await loginPage.gotoLoginPage();
    await loginPage.login(); 
    await homePage.clickOnAddToCart();
    await expect(homePage.cartBadge).toHaveText("1");
    await homePage.shoppingCard.click();
    await homePage.removeFromCart.click();
    await homePage.continueShopping.click();
    console.log(typeof homePage.cartBadge);
    await page.close();
});
});