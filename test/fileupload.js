const {By, Key, Builder} = require("selenium-webdriver");
require("chromedriver");

async function upload_test(){
    let driver = new Builder().forBrowser("chrome").build();

    await driver.get('https://easyupload.io/');

    let form = await driver.findElement(By.css('.dz-button'));

    
}

upload_test();