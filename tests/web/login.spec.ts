import { test, expect } from '@playwright/test';
import {LoginPage} from '../../pages/LoginPage';
import {validLoginData,invalidLoginData} from '../../test-data/loginData';
import { SecurePage } from '../../pages/SecurePage';


test('Verify login page is displayed', async({page})=>
{
    const loginPage=new LoginPage(page);
    await loginPage.navigate();
    await expect(page.getByRole('heading', {name:'Test Login page'})).toBeVisible();

}
);

test('Verify successfull login with valid credentials', async({page})=>
{
    const loginPage=new LoginPage(page);
    await loginPage.navigate();
    await expect(page.getByRole('heading',{name:'Test Login page'})).toBeVisible();
    await loginPage.login(validLoginData.username,validLoginData.password);
    
    await expect(page).toHaveURL('https://practice.expandtesting.com/secure');
    await expect(page.getByRole('heading',{name:'Secure Area page for Automation Testing Practice'})).toBeVisible();

}
);

test('Verify Login failed with a valid Username and invalid Password', async({page})=>
{
    const loginPage=new LoginPage(page);
    await loginPage.navigate();
    await expect(page.getByRole('heading',{name:'Test Login page'})).toBeVisible();
    await loginPage.login(invalidLoginData.username,invalidLoginData.password);

    await expect(page).toHaveURL('https://practice.expandtesting.com/login');
    await expect(page.getByRole('alert')).toContainText('Your password is invalid!');

});

test('Verify user can logout successfully', async({page})=>
{
    const loginPage=new LoginPage(page);
    const securePage=new SecurePage(page);
    await loginPage.navigate();
    await loginPage.login(validLoginData.username, validLoginData.password);
    await securePage.verifySecureAreaIsDiaplayed();
    await securePage.logout();
    await expect(page).toHaveURL('https://practice.expandtesting.com/login');
     await expect(page.getByRole('heading',{name:'Test Login page'})).toBeVisible();
}
)



