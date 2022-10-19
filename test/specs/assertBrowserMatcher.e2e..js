describe.skip('Assertions - Browser Matchers', () => {
    beforeEach(async () => {
        await browser.url('https://demoqa.com/')
    })

    it('To have Url', async() => {
        await expect(browser).toHaveUrl('https://demoqa.com/')
    });

    it('To Have Url Containing', async () => {
        await expect(browser).toHaveUrlContaining('demoqa.com')
    });

    it('To Have Title', async () => {
        await expect(browser).toHaveTitle('ToolsQA')
    });

    it.only('To Have Title Containing',async () => {
        await expect(browser).toHaveTitleContaining('ToolsQA')
    });

})