describe('Login Test', () => {
    it('should login with valid credentials', async () => {
        //access elemen input
        await $('//android.widget.EditText[@text="Email ID"]').setValue("andrew@gmail.com");
        await $('//android.widget.EditText[@text="Password"]').setValue("andrew1");

        await $('//android.view.ViewGroup[@content-desc="Login"]').click();
    });

    it('add friend', async () => {
        //access elemen input
        await $('//android.widget.TextView[@text="Friends"]').click();
        await $('//android.widget.TextView[@text=""]').click();

        await $('//android.widget.EditText[@text="Input Number"]').setValue("0812 2525 2255");
        await $('//android.view.ViewGroup[@content-desc="Add Friend"]').click();

    });
});