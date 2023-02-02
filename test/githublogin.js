const {By, Key, Builder} = require("selenium-webdriver");
require("chromedriver");

async function test_login(){
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("https://github.com/");

    await driver.findElement(By.partialLinkText("Sign in")).click();

    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log(await driver.getTitle());

    if ((await driver.getTitle()) === 'Sign in to GitHub · GitHub') {
      console.log('step 1: Success');
    } else {
      console.log('step 1: failed');
      driver.quit();
    }

    await driver.findElement(By.name("login")).sendKeys("TestWrongLogIn");
    await driver.findElement(By.name("password")).sendKeys("************",Key.RETURN);

    if(await driver.findElement(By.className("flash flash-full flash-error")).isDisplayed()) {
        console.log("step 2: success");
    } else {
        console.log("step 2: failed");
    }

    // driver.quit();
}

test_login();