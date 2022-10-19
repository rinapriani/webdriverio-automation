describe('Assertion - Elemet Matchers', () => {
    beforeEach(async () => {
        await browser.url('https://demoqa.com/modal-dialogs')
    })
    
    it('To exist', async () => {
        const SmallModal = await $('#showSmallModal')
        SmallModal.scrollIntoView()
        SmallModal.click()

        //automation close alert to call modal content class
        const modalContainer = await $('.modal-content')
        await expect(modalContainer).toExist()

    });

    it('To not exist (workaround)',async () => {
        const doesExist = await $('.modal-content').isExisting()
        await expect(doesExist).toBe(false)
    });
})