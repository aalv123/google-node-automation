import Page from "./page";
import {WebDriver} from "selenium-webdriver";

export default class LandingPage extends Page {

    protected driver: WebDriver;

    constructor(driver: WebDriver) {
        super(driver);
        this.driver = driver;
    }

    public async isCurrent() {
        await super.assertUrl('https://www.youtube.com/')
    }

    public async assertSearchBoxExists() {
        await super.assertExists('#search')
    }

}