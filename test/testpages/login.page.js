class loginPage {
    get inputUsername() { 
        return $('#username'); 
    } 

    get inputPassword() {
        return  $('#password');
    }

    get loginButton() {
        return  $('button[type="submit"]');
    }

    get LoginMessage(){
        return $('#flash');
    }

    async Login(username, password){
        await this.inputUsername.waitForDisplayed({timeout: 5000});
        await this.inputUsername.setValue(username);
        await this.inputPassword.waitForDisplayed({timeout: 5000});
        await this.inputPassword.setValue(password);
        await this.loginButton.waitForDisplayed({timeout: 5000});
        await this.loginButton.click();
    }

    async checkMessage(message){
        await this.LoginMessage.waitForDisplayed({timeout: 5000});
        const text = await this.LoginMessage.getText();
        if (!text.includes(message)) {
            throw new Error(`Expected login message to contain "${message}", got "${text}"`);
        }
    }

}

module.exports = new loginPage();