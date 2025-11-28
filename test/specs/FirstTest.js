describe('Demo tests', function () {
    it('My First Test', async () => {
        await browser.url('https://google.com')

        await $('[name="q"]').setValue('WebdriverIO')

        // await $('[id="icon"]').click()

        await browser.keys('Enter')
        
        await browser.pause(4000)
    })
})

