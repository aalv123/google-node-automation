import Page from "./page";
import {WebDriver} from "selenium-webdriver";
import {sleep} from "../utils/utils";

export enum Type {
    VIDEO = "Video",
    CHANNEL = "Channel",
    PLAYLIST = "Playlist",
    MOVIE = "Movie"
}

export default class SearchResultsPage extends Page {

    protected driver: WebDriver;

    constructor(driver: WebDriver) {
        super(driver);
        this.driver = driver;
    }

    private searchBoxSelector = "input#search";
    private searchButtonSelector = "button#search-icon-legacy";

    public async search(value: string) {
        await super.setValue(this.searchBoxSelector, value);

        await super.click(this.searchButtonSelector);

        // TODO Implement wait for search to complete (wait for an element that only appears on search results page to appear)
    }

    // TODO Extend to rest of filters and create method with common code
    public async filterByType(type: Type) {
        await sleep(5000);
        await super.click(`//*[text()='Filters']`);

        await super.click(`[title="Search for ${type}"]`);
    }

    public async selectChannel(channelName: string) {
        await sleep(2000)
        await super.click(`//yt-formatted-string[text()="${channelName}"]`)
    }

    public async clickFirstChannelVisible() {
        await sleep(5000);

        let allChannelsSelector = '#avatar.ytd-channel-renderer';
        if(!await super.exists(allChannelsSelector)) {
            console.log(`No channel is visible on the page`);
            return;
        }

        // When a selector has more than one match, it selects the first match in the page
        await super.click(allChannelsSelector);
    }

}