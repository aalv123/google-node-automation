import {By, WebDriver} from "selenium-webdriver";

const assert = require("chai").assert;

export default abstract class Page {

    protected driver: WebDriver;

    protected constructor(driver: WebDriver) {
        this.driver = driver;
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

    protected async exists(element: string): Promise<boolean> {
        return await this.driver.findElement(By.css(element)) != null;
    }

}