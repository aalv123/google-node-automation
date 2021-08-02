import {WebDriver} from "selenium-webdriver";

const {Builder} = require("selenium-webdriver");
let driver: WebDriver ;

export async function sleep(millis: number) {
    // Waits until the given time elapses
    return new Promise(resolve => setTimeout(resolve, millis));
}

/**
 *
 * @param driver
 * @param testContext
 */
export async function beforeEachTest(testContext: Mocha.Context): Promise<any> {
    console.log('from beforeEachTest of the helper file');
    driver = await new Builder().forBrowser(`firefox`).build();

    console.log('Attempting to navigate to youtube.com from beforeEachTest of the helper file');
    await driver.get(`https://youtube.com/`);
    await sleep(5000);
    return driver;
}

/**
 *
 * @param driver
 * @param testContext
 */
export async function afterEachTest(driver: any, testContext: Mocha.Context) {

    console.log('from afterEachTest of the helper file');
    // Check to make sure the driver is not null to avoid a null pointer exception
    // This could be null if the browser hasn't started or was already closed
    if(driver) {
        console.log('driver is not null, attempting to close it now .....');
        await driver.quit();
    }
}