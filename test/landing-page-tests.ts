import {afterEachTest, beforeEachTest} from "../src/utils/utils";
import {WebDriver} from "selenium-webdriver";
import LandingPage from "../src/pages/landing-page";

let driver: WebDriver;

let landingPage: LandingPage

describe('Landing Page Tests', function () {

    beforeEach(async function () {
        driver = await beforeEachTest(this);

        landingPage = await new LandingPage(driver);
    });

    it(`Assert landing page is current #smoke`, async  function () {
        await landingPage.isCurrent();
    });

    it(`Assert search box exists on landing page #smoke`, async  function () {
        await landingPage.assertSearchBoxExists();
    });

    afterEach(async function () {
        await afterEachTest(driver, this);
    });
});
