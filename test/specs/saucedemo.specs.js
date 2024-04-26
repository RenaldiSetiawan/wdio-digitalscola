describe('SauceDemo Test Cases', () => {
    it('User success login', async () => {
        await browser.url('https://www.saucedemo.com/');
       
        await $('#user-name').setValue('standard_user');
        await $('#password').setValue('secret_sauce');
        await $('#login-button').click();
        
        expect(await browser.getUrl()).toEqual('https://www.saucedemo.com/inventory.html');
    });

    it('Validate user berada di dashboard setelah login', async () => {
        expect(await browser.getUrl()).toEqual('https://www.saucedemo.com/inventory.html');
    });

    it('Add item to cart', async () => {
        await $('.btn_inventory').click();
        
        expect(await $('.shopping_cart_badge').getText()).toEqual('1');
    });

    it('Validate item sukses ditambahkan ke cart', async () => {
        expect(await $('.shopping_cart_badge').getText()).toEqual('1');
    });
});