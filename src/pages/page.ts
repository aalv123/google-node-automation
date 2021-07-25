import {By, WebDriver} from "selenium-webdriver";

const assert = require("chai").assert;

export default abstract class Page {

    protected driver: WebDriver;

    public async assertUrl(expectedUrl: string) {
        assert.equal(await this.driver.getCurrentUrl(), expectedUrl);
    }
    //
    // protected async assertExists(selector: string) {
    //     assert.isTrue(await this.exists(selector));
    // }
    // //
    // protected async exists(elementSelector: string) {
    //     await this.driver.findElements(elementSelector).size() > 0
    // }

}