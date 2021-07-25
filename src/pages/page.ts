import {WebDriver} from "selenium-webdriver";

const assert = require("chai").assert;

export default abstract class Page {

    protected driver: WebDriver;

    public async assertUrl(expectedUrl: string) {
        assert.equal(await this.driver.getCurrentUrl(), expectedUrl);
    }

}