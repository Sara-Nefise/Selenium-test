const { Builder, By, Key } = require('selenium-webdriver');

(async function example() {
    const driver = await new Builder().forBrowser('MicrosoftEdge').build()
    await driver.get("http://localhost:8080/#/admin")
    await driver.manage().setTimeouts({ implicit: 200000 });

    //15.Senaryo
    edit_url_div = await driver.findElement(By.xpath('/html/body/div[1]/div/div/main/div[1]/div[2]/table/tbody/tr[1]/td[5]/div/a/span[2]/i'))
    edit_url_div.click()
    edit_url_div.click()

    await driver.manage().setTimeouts({ implicit: 50000 });
    price_div = await driver.findElement(By.xpath('/html/body/div[1]/div/div/main/div/form/div[1]/div[1]/div/label[2]/div/div[1]/div/input'))
    price_div.click()
    price_div.sendKeys('0', Key.ENTER)
        //await driver.manage().setTimeouts({ implicit: 10000 });
    checkbox = await driver.findElement(By.xpath('/html/body/div[1]/div/div/main/div/form/div[2]/div[1]/div'))
    checkbox.click()
    await driver.findElement(By.xpath('/html/body/div[1]/div/div/main/div/form/div[1]/div[2]/div/label[2]/div')).click()
    await driver.manage().setTimeouts({ implicit: 10000 });
    var { exec } = require("child_process");
    a = exec("G:/FileUpload.exe");
    await driver.manage().setTimeouts({ implicit: 300000 });
    await driver.findElement(By.xpath('/html/body/div[1]/div/div/main/div/form/div[3]/button')).click()
    driver.quit()
})()