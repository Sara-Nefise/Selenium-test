const { Builder, By, Key } = require('selenium-webdriver');

(async function example() {
    const driver = await new Builder().forBrowser('MicrosoftEdge').build()
        //7.senaryo
    await driver.get("http://localhost:8080/#/admin")
    await driver.manage().setTimeouts({ implicit: 20000 });
    new_item_div = await driver.findElement(By.xpath('/html/body/div/div/div/main/div[2]/a'))
    new_item_div.click()
    await driver.manage().setTimeouts({ implicit: 20000 });
    let Url_new_item = await driver.getCurrentUrl()
    if (Url_new_item == 'http://localhost:8080/#/new') {
        console.log(`7.Senaryo Başarili`)
    } else {
        console.log(`7.Senaryo Başarsiz`)
    }

    //9.senaryo
    price_test = '120A'
    price_test_1 = '13'
    price_div = await driver.findElement(By.xpath('/html/body/div/div/div/main/div/form/div[1]/div[1]/div/label[2]/div/div[1]/div[1]/input'))
    price_div.click()
    price_div.sendKeys(price_test, Key.ENTER)
    let test_price_div = await driver.findElement(By.xpath('/html/body/div/div/div/main/div/form/div[1]/div[1]/div/label[2]/div/div[1]/div[1]/input')).getAttribute('value')
    price_div.click()
    price_div.sendKeys(price_test_1, Key.ENTER)
    let test_price_div_1 = await driver.findElement(By.xpath('/html/body/div/div/div/main/div/form/div[1]/div[1]/div/label[2]/div/div[1]/div[1]/input')).getAttribute('value')
    if (test_price_div != price_test & test_price_div_1 == '12013') {
        console.log(`9.Senaryo Başarili`)
    } else {
        console.log(`9.Senaryo Başarsiz`)
    }
    //10.senaryo 
    amount_test = '120A'
    amount_test_1 = '13'
    amount_div = await driver.findElement(By.xpath(' /html/body/div/div/div/main/div/form/div[1]/div[1]/div/label[4]/div/div[1]/div[1]/input '))
    amount_div.click()
    amount_div.sendKeys(amount_test, Key.ENTER)
    let test_amount_div = await driver.findElement(By.xpath(' /html/body/div/div/div/main/div/form/div[1]/div[1]/div/label[4]/div/div[1]/div[1]/input ')).getAttribute('value')
    console.log(`${test_amount_div}`)
    amount_div.click()
    amount_div.sendKeys(amount_test_1, Key.ENTER)
    let test_amount_div_1 = await driver.findElement(By.xpath(' /html/body/div/div/div/main/div/form/div[1]/div[1]/div/label[4]/div/div[1]/div[1]/input ')).getAttribute('value')
    console.log(`${test_amount_div_1}`)

    if (test_amount_div != amount_test & test_amount_div_1 == '12013') {
        console.log(`10.Senaryo Başarili`)
    } else {
        console.log(`10.Senaryo Başarsiz`)
    }
    //11.senaryo
    //fotograf secme dugmesi
    await driver.findElement(By.xpath('/html/body/div/div/div/main/div/form/div[1]/div[2]/div/label[2]/div/div/div')).click()
    await driver.manage().setTimeouts({ implicit: 10000 });
    var { exec } = require("child_process");
    a = exec("G:/FileUpload.exe");

    //12.senaryo
    back_button = await driver.findElement(By.xpath('/html/body/div/div/div/main/div/form/div[2]/a'))
    back_button.click()
    await driver.manage().setTimeouts({ implicit: 20000 });
    let Url_back_button = await driver.getCurrentUrl()
    if (Url_back_button == 'http://localhost:8080/#/admin') {
        console.log(`12.Senaryo Başarili`)
    } else {
        console.log(`12.Senaryo Başarsiz`)
    }
    //13.senaryo
    edit_url_div = await driver.findElement(By.xpath('/html/body/div/div/div/main/div[1]/div[2]/table/tbody/tr/td[6]/div/a/span[2]/i'))
    edit_url_div.click()
    await driver.manage().setTimeouts({ implicit: 20000 });
    let Url_edit_div = await driver.getCurrentUrl()
    if (Url_edit_div == 'http://localhost:8080/#/edit') {
        console.log(`13.Senaryo Başarili`)
    } else {
        console.log(`13.Senaryo Başarsiz`)
    }


})()