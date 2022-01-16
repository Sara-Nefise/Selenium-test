const { Builder, By, Key } = require('selenium-webdriver');

(async function example() {
    const driver = await new Builder().forBrowser('firefox').build()
    await driver.get("http://localhost:8080/#/new")

    //8.Senaryo
    discription_text = '"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"'
    discription_div = await driver.findElement(By.xpath('/html/body/div[1]/div/div/main/div/form/div[1]/div[2]/div/label[1]/div/div[1]/div[1]/textarea'))
    discription_div.click()
    discription_div.sendKeys(discription_text, Key.ENTER)
    let test_discription_div = await driver.findElement(By.xpath('/html/body/div[1]/div/div/main/div/form/div[1]/div[2]/div/label[1]/div/div[1]/div[1]/textarea')).getAttribute('value')
    console.log(`${test_discription_div.length}`)

    if (test_discription_div.length != 100) {
        console.log(`8.Senaryo Başarsiz `)
    } else {
        console.log(`8.Senaryo Başarili `)
    }

    //10.Senaryo

    history_text = '11 31 2021' // month-day-year
    history_text_div = await driver.findElement(By.xpath('/html/body/div[1]/div/div/main/div/form/div[1]/div[1]/div/label[3]/div/div[1]/div[1]/input'))
    history_text_div.click()
    history_text_div.sendKeys(history_text, Key.ENTER)
    let test_history_text_div = await driver.findElement(By.xpath('/html/body/div[1]/div/div/main/div/form/div[1]/div[1]/div/label[3]/div/div[1]/div[1]/input')).getAttribute('value')
    console.log(`${test_history_text_div}`)

    if (history_text == test_history_text_div) {
        console.log(`8.Senaryo Başarsiz `)
    } else {
        console.log(`8.Senaryo Başarili `)
    }
    //11.Senaryo
    /* name_div = await driver.findElement(By.xpath('/html/body/div[1]/div/div/main/div/form/div[1]/div[1]/div/label[1]/div/div[1]/div[1]/input'))
     name_div.click()
     await driver.findElement(By.xpath('/html/body/div[1]/div/div/main/div/form/div[1]/div[1]/div/label[2]/div/div[1]/div[1]/input')).click()
     let name_length = await driver.findElement(By.xpath('/html/body/div[1]/div/div/main/div/form/div[1]/div[1]/div/label[1]/div/div[2]/div/div')).getAttribute('text')
     console.log(`${name_length}`)

     if (name_length == text) {
         console.log(`1.Name kisminda Senaryo Başarsiz `)
     } else {
         console.log(`1.Name kisminda Senaryo Başarili `)
     }
    */

})()