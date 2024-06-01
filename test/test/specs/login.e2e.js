describe('Login Test', () => {
    it('should login with valid credentials', async () => {
        //access elemen input
        await $('//android.widget.EditText[@text="Email ID"]').setValue("jacky@gmail.com");
        await $('//android.widget.EditText[@text="Password"]').setValue("j");

        await $(
            '//android.view.ViewGroup[@content-desc="Login"]'
        ).click();

        // const selector = 	
        //     'new UiSelector().className("android.view.ViewGroup").instance(11)';
        // const Activitylist = await $(`android=${selector}`)
        // await expect(Activitylist).toHaveText("Activity")
    });
});