const { Builder, By, Key } = require('selenium-webdriver');

(async function example() {
    const driver = await new Builder().forBrowser('firefox').build()
    await driver.get("http://localhost:8080/#/payment/37")

    //1.Senaryo
    text = 'Aaaaasssssdddddfffffggggghhhhhjjjjj'
    name_div = await driver.findElement(By.xpath('/html/body/div[1]/div/div/main/div/form/div[1]/div[1]/div/label[1]/div/div[1]/div[1]/input'))
    name_div.click()
    name_div.sendKeys(text)
    let name_length = await driver.findElement(By.xpath('/html/body/div[1]/div/div/main/div/form/div[1]/div[1]/div/label[1]/div/div[1]/div[1]/input')).getAttribute('value')
    console.log(`${text.length}`)

    if (name_length == text) {
        console.log(`1.Name kisminda Senaryo Başarsiz `)
    } else {
        console.log(`1.Name kisminda Senaryo Başarili `)
    }
    surename = await driver.findElement(By.xpath('/html/body/div[1]/div/div/main/div/form/div[1]/div[1]/div/label[2]/div/div[1]/div/input'))
    surename.click()
    surename.sendKeys(text)
    let surename_length = await driver.findElement(By.xpath('/html/body/div[1]/div/div/main/div/form/div[1]/div[1]/div/label[2]/div/div[1]/div/input')).getAttribute('value')
    if (surename_length == text) {
        console.log(`1.Surename kisminda Senaryo Başarsiz `)
    } else {
        console.log(`1.Surename kisminda Senaryo Başarili `)
    }

    //2.Senaryo
    card_numder_1 = 'AAAAAAA1111'
    card_numder_2 = 'aaaaaaaaaaaa'
    card_numder_div = await driver.findElement(By.xpath('/html/body/div[1]/div/div/main/div/form/div[1]/div[2]/div/label[1]/div/div[1]/div/input'))
    card_numder_div.click()
    card_numder_div.sendKeys(card_numder_1, Key.ENTER)
    let test_card_1 = await driver.findElement(By.xpath('/html/body/div[1]/div/div/main/div/form/div[1]/div[2]/div/label[1]/div/div[1]/div/input')).getAttribute('value')
    console.log(`${test_card_1}`)
    card_numder_div.click()
    card_numder_div.sendKeys(card_numder_2, Key.ENTER)
    let test_card_2 = await driver.findElement(By.xpath('/html/body/div[1]/div/div/main/div/form/div[1]/div[2]/div/label[1]/div/div[1]/div/input')).getAttribute('value')
    console.log(`${test_card_2}`)
    if (test_card_1 == '' & test_card_2 == '') {
        console.log(`2.Senaryo Başarili `)
    } else {
        console.log(`2.Senaryo Başarsiz `)
    }

    //3.Senaryo
    tc_number = '91100223344556677'
    tc_number_div = await driver.findElement(By.xpath('/html/body/div[1]/div/div/main/div/form/div[1]/div[1]/div/label[6]/div/div[1]/div[1]/input'))
    tc_number_div.click()
    tc_number_div.sendKeys(card_numder_1, Key.ENTER)
    let test_tc_number = await driver.findElement(By.xpath('/html/body/div[1]/div/div/main/div/form/div[1]/div[1]/div/label[6]/div/div[1]/div[1]/input')).getAttribute('value')
    console.log(`${test_tc_number}`)
    if (test_tc_number == '') {
        console.log(`3.Senaryo Başarili `)
    } else {
        console.log(`3.Senaryo Başarsiz `)
    }
    //4.Senaryo
    email = 'ss'
    email_div = await driver.findElement(By.xpath('/html/body/div[1]/div/div/main/div/form/div[1]/div[1]/div/label[4]/div/div[1]/div/input'))
    email_div.click()
    email_div.sendKeys(email, Key.ENTER)
    let test_email_div = await driver.findElement(By.xpath('/html/body/div[1]/div/div/main/div/form/div[1]/div[1]/div/label[4]/div/div[1]/div/input')).getAttribute('value')
    console.log(`${test_email_div}`)
    if (test_email_div == email) {
        console.log(`4.Senaryo Başarsiz `)
    } else {
        console.log(`4.Senaryo Başarili `)
    }

    //5.Senaryo
    cvv = '44444'
    cvv_div = await driver.findElement(By.xpath('/html/body/div[1]/div/div/main/div/form/div[1]/div[2]/div/label[5]/div/div[1]/div[1]/input'))
    cvv_div.click()
    cvv_div.sendKeys(cvv, Key.ENTER)
    let test_cvv_div = await driver.findElement(By.xpath('/html/body/div[1]/div/div/main/div/form/div[1]/div[2]/div/label[5]/div/div[1]/div[1]/input')).getAttribute('value')
    console.log(`${test_cvv_div}`)
    if (test_cvv_div != cvv) {
        console.log(`5.Senaryo Başarili `)
    } else {
        console.log(`5.Senaryo Başarsiz `)
    }

    //6.Senaryo
    card_name_1 = 'test444'
    card_name_2 = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500 s, when an unknown printer took a galley and scrambled it to make a specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960 s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum '

    card_name = await driver.findElement(By.xpath('/html/body/div[1]/div/div/main/div/form/div[1]/div[2]/div/label[2]/div/div[1]/div[1]/input'))
    card_name.click()
    card_name.sendKeys(card_name_1, Key.ENTER)
    let test_card_name = await driver.findElement(By.xpath('/html/body/div[1]/div/div/main/div/form/div[1]/div[2]/div/label[2]/div/div[1]/div[1]/input')).getAttribute('value')
    console.log(`${test_card_name}`)

    card_name.click()
    card_name.sendKeys(card_name_2, Key.ENTER)
    let test_card_name_length = await driver.findElement(By.xpath('/html/body/div[1]/div/div/main/div/form/div[1]/div[2]/div/label[2]/div/div[1]/div/input')).getAttribute('value')
    console.log(`${test_card_name_length}`)
    if ((test_card_name != card_name_1) & test_card_name_length != card_name_2) {
        console.log(`6.Senaryo Başarili `)
    } else {
        console.log(`6.Senaryo Başarsiz `)
    }

})()