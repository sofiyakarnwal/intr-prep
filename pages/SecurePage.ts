import {page, Locator} from '@playwright/test';

export class SecurePage
{
    readonly page:Page;
    readonly secureAreaHeading:Locator;
    readonly logoutButton: Locator;

 constructor (page:Page)
 {
    this.page=page;
    this.secureAreaHeading=page.getByRole('heading',{level:1,name:'Secure Area page for Automation Testing Practice'});
    this.logoutButton=page.getByRole('link',{name:'Logout'});

 }

 async verifySecureAreaIsDiaplayed()
 {
    await this.secureAreaHeading.waitFor({ state: 'visible' });
 }

 async logout()
 {
    await this.logoutButton.click();

 }

}