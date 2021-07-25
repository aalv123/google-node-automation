import {afterEachTest, beforeEachTest, sleep} from "../src/utils/utils";
import {WebDriver} from "selenium-webdriver";
import LandingPage from "../src/pages/landing-page";

let driver: WebDriver;

describe('Print hello', function () {

    beforeEach(async function () {
        driver = await beforeEachTest(this);
    });

    describe('Landing Page', function () {

        it(`Landing page should load #smoke`, async  function () {
            console.log("Hello from the first test");
            console.log('Attempting to navigate to youtube.com from the test to check if driver can be accessed');
            await sleep(4000);
        });

        afterEach(async function () {
            await afterEachTest(driver, this);
        });
    });
});
