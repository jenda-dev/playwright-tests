import { Locator, Page } from '@playwright/test';

export class HomePage {
    [x: string]: any;
page: Page;
title: Locator;
item: Locator;
addToCart: Locator;
cartBadge: Locator;
shoppingCard: Locator;
removeFromCart: Locator;
continueShopping: Locator;

get menu() {return this.page.locator('#react-burger-menu-btn')}
    
static menu2 (page: Page): Locator {return page.locator('#react-burger-menu-btn')}    
    
    
    
    
    

// proč definuješ lokátory přes konstruktor? to jsou přece statické hodnoty, které se nemění
constructor(page: Page) {
    this.page = page;
    this.title = page.getByText('Swag Labs');
this.item = page.locator('#item_4_title_link');
this.addToCart = page.locator('#add-to-cart-sauce-labs-backpack');
this.cartBadge = page.locator('//span[@class="shopping_cart_badge"]');
this.shoppingCard = page.locator('//span[@class="shopping_cart_badge"]');
this.removeFromCart = page.locator('//*[@id="remove-sauce-labs-backpack"]');
this.continueShopping = page.locator('//*[@id="continue-shopping"]');
  }
  
  // proč definujes funkci jako async, když v ni děláš jednu akci? (tedy můžeš vrátit tu akci a efektivně děláš to samé)
  clickOnMenu() {
    return this.menu.click();
  }

  // proč nevraci promise toho kliku?
  async clickOnItem() {
    // this.menu = this.page.locator("div")
    await this.item.click();
  }  

  async clickOnAddToCart() {
    await this.addToCart.click();
  } 
  
}