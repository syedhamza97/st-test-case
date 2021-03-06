// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('archieve a product', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('archieve a product', async function() {
    await driver.get("http://localhost:3000/operator")
    await driver.manage().window().setRect(1299, 741)
    await driver.findElement(By.css(".RuiSidebar-link-85:nth-child(2) > .RuiSidebar-listItem-82 > .MuiListItemText-root > span")).click()
    {
      const element = await driver.findElement(By.css(".nav-item-active .MuiListItemText-root > span"))
      await driver.actions({ bridge: true}).doubleClick(element).perform()
    }
    {
      const element = await driver.findElement(By.css(".MuiButton-contained > .MuiButton-label"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    await driver.findElement(By.css(".MuiButton-contained > .MuiButton-label")).click()
    {
      const element = await driver.findElement(By.css(".MuiButtonBase-root:nth-child(2) path"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    await driver.findElement(By.css(".MuiButtonBase-root:nth-child(2) path")).click()
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    await driver.findElement(By.css(".MuiMenuItem-root:nth-child(1)")).click()
    {
      const element = await driver.findElement(By.css(".MuiButtonBase-root:nth-child(2) path"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    await driver.findElement(By.css(".MuiButtonBase-root:nth-child(2) path")).click()
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    await driver.findElement(By.css(".MuiButtonBase-root:nth-child(3)")).click()
    await driver.findElement(By.css(".MuiButton-contained:nth-child(2) > .MuiButton-label")).click()
  })
})
