const { Builder, By, Key } = require('selenium-webdriver');

function stringContainsNumber(_string) {
    return /\d/.test(_string);
}
(async function example() {
    const driver = await new Builder().forBrowser('firefox').build()

    //17.Senaryo ve 16.Senaryo
    await driver.get("http://localhost:8080/#/admin")
    await driver.manage().setTimeouts({ implicit: 20000 });

    edit_url_div = await driver.findElement(By.xpath('/html/body/div[1]/div/div/main/div[1]/div[2]/table/tbody/tr[1]/td[5]/div/a/span[2]/i'))
    edit_url_div.click()
    await driver.manage().setTimeouts({ implicit: 20000 });
    let Url_edit = await driver.getCurrentUrl()
    console.log(`${Url_edit}`)
    await driver.get("http://localhost:8080/#/admin")
    delete_div = await driver.findElement(By.xpath('/html/body/div[1]/div/div/main/div[1]/div[2]/table/tbody/tr[2]/td[5]/div/button/span[2]/i'))
    delete_div.click()
    if (Url_edit == 'http://localhost:8080/#/edit') {
        console.log(`17.Senaryo Başarili`)
    } else {
        console.log(`17.Senaryo Başarsiz`)
    }

    //20.Senaryo
    await driver.get("http://localhost:8080/#/")
    satin_dev = await driver.findElement(By.xpath('/html/body/div[1]/div/div/main/div[1]/div[2]/table/tbody/tr/td[5]/div/a'))
    satin_dev.click()
    await driver.manage().setTimeouts({ implicit: 20000 });
    let Url_satin = await driver.getCurrentUrl()
    console.log(`${Url_satin}`)
    if (Url_satin == 'http://localhost:8080/#/payment/38') {
        console.log(`20.Senaryo Başarili`)
    } else {
        console.log(`20.Senaryo Başarsiz`)
    }

    //18.senaryo
    await driver.get("http://localhost:8080/#/")
    await driver.manage().setTimeouts({ implicit: 20000 });

    search_test = 'But I 1000 must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system'
    search_div = await driver.findElement(By.xpath('/html/body/div[1]/div/div/main/div[1]/div[1]/label/div/div/div[1]/input'))
    search_div.click()
    search_div.sendKeys(search_test, Key.ENTER)
    search_div_test = await driver.findElement(By.xpath('/html/body/div[1]/div/div/main/div[1]/div[1]/label/div/div/div[1]/input')).getAttribute('value')
    if ((search_div_test.length <= 50) & stringContainsNumber(search_div_test) == false) {
        console.log(`18.Senaryo Başarili`)
    } else {
        console.log(`18.Senaryo Başarsiz`)
    }

})()