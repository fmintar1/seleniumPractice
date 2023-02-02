const { By, Key, Builder } = require('selenium-webdriver');
require('chromedriver');

async function test_scrape() {
  let driver = await new Builder().forBrowser('chrome').build();

  await driver.get('https://ratings.fide.com/top.phtml?list=men');

  let names = await driver.findElements(By.css('.tur'));

  for (let n of names) {
    console.log(await n.getText());
  }

  driver.quit();
}

test_scrape();
