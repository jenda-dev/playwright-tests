import { Locator, Page } from '@playwright/test';

export class HomePage {
    [x: string]: any;
page: Page;
menu: Locator;
title: Locator;
item: Locator;
addToCart: Locator;
cartBadge: Locator;
shoppingCard: Locator;
removeFromCart: Locator;
continueShopping: Locator;


constructor(page: Page) {
    this.page = page;
    this.menu = page.locator('#react-burger-menu-btn');
    this.title = page.getByText('Swag Labs');
    this.item = page.locator('#item_4_title_link');
    this.addToCart = page.locator('#add-to-cart-sauce-labs-backpack');
    this.cartBadge = page.locator('//span[@class="shopping_cart_badge"]');
    this.shoppingCard = page.locator('//span[@class="shopping_cart_badge"]');
    this.removeFromCart = page.locator('//*[@id="remove-sauce-labs-backpack"]');
    this.continueShopping = page.locator('//*[@id="continue-shopping"]');
  }

  async clickOnMenu() {
    await this.menu.click();
  }
  async clickOnItem() {
    await this.item.click();
  }  

  async clickOnAddToCart() {
    await this.addToCart.click();
  } 
  
}