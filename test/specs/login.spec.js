const loginPage = require('../testpages/login.page');

describe('demo test2', () => {

   it('login test', async () => {

      await browser.url('https://the-internet.herokuapp.com/login');

      await loginPage.Login('tomsmith', 'SuperSecretPassword!');

      await loginPage.checkMessage('You logged into a secure area!');

      // await $('#username').setValue('tomsmith');

      // await $('#password').setValue('SuperSecretPassword!');

      // await $('button[type="submit"]').click();

      // await $('#flash').getText();

      // await expect($('#flash')).toHaveTextContaining('You logged into a secure area!');

   });

});

