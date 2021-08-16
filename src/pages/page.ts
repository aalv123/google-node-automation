import {By, until, WebDriver, WebElement} from "selenium-webdriver";

const assert = require("chai").assert;

export default abstract class Page {

    protected driver: WebDriver;

    protected constructor(driver: WebDriver) {
        this.driver = driver;
    }

    protected async waitForVisible(selector: string) {
        let element = await this.getElementBySelector(selector);

        await this.driver.wait(await until.elementIsVisible(element), 15000);
    }

    protected async click(selector: string) {
        console.log(`Attempting to click element "${selector}"`)

        await (await this.getElementBySelector(selector)).click();

        console.log(`Successfully clicked element "${selector}"`)
    }

    public async getUrl(): Promise<string> {
        return await this.driver.getCurrentUrl();
    }

    public async assertUrl(expectedUrl: string) {
        assert.equal(await this.getUrl(), expectedUrl);
    }

    protected async assertExists(element: string) {
        assert.isTrue(await this.exists(element));
    }

    protected async exists(selector: string): Promise<boolean> {
        return await this.getElementBySelector(selector) != null;
    }

    protected async getElementBySelector(selector: string): Promise<WebElement> {
        return this.driver.findElement(selector.startsWith('//') ? By.xpath(selector) : By.css(selector));
    }

    protected async setValue(selector: string, value: string) {
        let selectorWebElement = await this.getElementBySelector(selector);

        await this.click(selector)
        await selectorWebElement.sendKeys(value);
    }

}