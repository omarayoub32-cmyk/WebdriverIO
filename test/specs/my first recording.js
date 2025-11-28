describe("my first recording", () => {
  it("tests my first recording", async () => {
    await browser.setWindowSize(981, 695)
    await browser.url("https://the-internet.herokuapp.com/login")
    await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/login")
    
    await browser.$("#username").waitForDisplayed({timeout: 5000})
    await browser.$("#username").click()
    await browser.$("#username").setValue("tomsmith")
    
    await browser.$("#password").waitForDisplayed({timeout: 5000})
    await browser.$("#password").click()
    await browser.$("#password").setValue("SuperSecretPassword!")
    
    await browser.$("button[type='submit']").waitForDisplayed({timeout: 5000})
    await browser.$("button[type='submit']").click()
    
    await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/secure")
    
    await browser.$("a=Logout").click()
    await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/login")
  });
});
