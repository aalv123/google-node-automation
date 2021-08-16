import {afterEachTest, beforeEachTest, sleep} from "../src/utils/utils";
import {WebDriver} from "selenium-webdriver";
import SearchResultsPage, { Type } from "../src/pages/search-results-page";

let driver: WebDriver;

let searchResultsPage: SearchResultsPage;

describe('Print hello', function () {

    beforeEach(async function () {
        driver = await beforeEachTest(this);

        searchResultsPage = await new SearchResultsPage(driver);
    });

    describe('Landing Page', function () {

        it(`Landing page should load #smoke`, async  function () {
            console.log("Hello from the first test");
            console.log('Attempting to navigate to google.com from the test to check if driver can be accessed');
            await sleep(4000);
        });

        afterEach(async function () {
            await afterEachTest(driver, this);
        });
    });

    it('Should search and filter by channel', async function () {
        let channelName = 'YouTube';

        await searchResultsPage.search(channelName);

        await searchResultsPage.filterByType(Type.CHANNEL);
        await searchResultsPage.selectChannel(channelName);
    });
});
