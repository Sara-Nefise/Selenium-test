const { Builder, By, Key } = require('selenium-webdriver');

function stringContainsNumber(_string) {
    return /\d/.test(_string);
}
(async function example() {
    const driver = await new Builder().forBrowser('firefox').build()
    await driver.get("http://localhost:8080/#/");
    //1.senaryo
    satin_dev = await driver.findElement(By.xpath('/html/body/div/div/div/main/div[1]/div[2]/table/tbody/tr/td[6]/div/a[1]'))
    satin_dev.click()
    await driver.manage().setTimeouts({ implicit: 20000 });
    let Url_satin = await driver.getCurrentUrl()
    if (Url_satin == 'http://localhost:8080/#/payment/2') {
        console.log(`1.Senaryo Başarili`)
    } else {
        console.log(`1.Senaryo Başarsiz`)
    }
    //2.Senaryo
    card_numder_1 = 'AAAAAAA1111'
    card_numder_2 = 'aaaaaaaaaaaa'
    card_number_3 = '1232421'
    card_numder_div = await driver.findElement(By.xpath('/html/body/div/div/div/main/div/form/div[1]/div/div/label[1]/div/div[1]/div[1]/input'))
    card_numder_div.click()
    card_numder_div.sendKeys(card_numder_1, Key.ENTER)
    let test_card_1 = await driver.findElement(By.xpath('/html/body/div/div/div/main/div/form/div[1]/div/div/label[1]/div/div[1]/div[1]/input')).getAttribute('value')

    card_numder_div.click()
    card_numder_div.sendKeys(card_numder_2, Key.ENTER)
    let test_card_2 = await driver.findElement(By.xpath('/html/body/div/div/div/main/div/form/div[1]/div/div/label[1]/div/div[1]/div[1]/input')).getAttribute('value')
    card_numder_div.click()
    card_numder_div.sendKeys(card_number_3, Key.ENTER)
    let test_card_number_3 = await driver.findElement(By.xpath('/html/body/div/div/div/main/div/form/div[1]/div/div/label[1]/div/div[1]/div[1]/input')).getAttribute('value')
    if (test_card_1 == '' & test_card_2 == '' & test_card_number_3 == card_number_3) {
        console.log(`2.Senaryo Başarili `)
    } else {
        console.log(`2.Senaryo Başarsiz `)
    }
    // 3.Senaryo
    text = '112Aaaaasssssdddddfffffggggghhhhhjjjjjlasdjdsafhbfhsadads'
    name_div = await driver.findElement(By.xpath('/html/body/div/div/div/main/div/form/div[1]/div/div/label[2]/div/div[1]/div[1]/input'))
    name_div.click()
    name_div.sendKeys(text, Key.ENTER)
    let name_length = await driver.findElement(By.xpath('/html/body/div[1]/div/div/main/div/form/div[1]/div[1]/div/label[1]/div/div[1]/div[1]/input')).getAttribute('value')
    console.log(`${text.length} `)
    if (name_length.length <= 50 & stringContainsNumber(name_length) == false) {
        console.log(`3.Senaryo Başarili  `)
    } else {
        console.log(`3.Senaryo Başarsiz `)
    }
    //4.Senaryo
    cvv = '44444'
    cvv_div = await driver.findElement(By.xpath('/html/body/div/div/div/main/div/form/div[1]/div/div/label[5]/div/div[1]/div[1]/input'))
    cvv_div.click()
    cvv_div.sendKeys(cvv, Key.ENTER)
    let test_cvv_div = await driver.findElement(By.xpath('/html/body/div/div/div/main/div/form/div[1]/div/div/label[5]/div/div[1]/div[1]/input')).getAttribute('value')
    console.log(`${test_cvv_div}`)
    if (test_cvv_div.length == 3) {
        console.log(`4.Senaryo Başarili `)
    } else {
        console.log(`4.Senaryo Başarsiz `)
    }

    //5.senaryo
    await driver.get("http://localhost:8080/#/");
    await driver.manage().setTimeouts({ implicit: 20000 });
    details_div = await driver.findElement(By.xpath('/html/body/div/div/div/main/div[1]/div[2]/table/tbody/tr/td[6]/div/a[2]'))
    details_div.click()
    await driver.manage().setTimeouts({ implicit: 20000 });

    let Url_detail = await driver.getCurrentUrl()
    if (Url_detail == 'http://localhost:8080/#/details/2') {
        console.log(`5.Senaryo Başarili`)
    } else {
        console.log(`5.Senaryo Başarsiz`)
    }
    await driver.manage().setTimeouts({ implicit: 20000 });





})()