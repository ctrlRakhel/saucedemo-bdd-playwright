import { Before, After, BeforeAll, AfterAll, Status } from "@cucumber/cucumber";
import { chromium, Browser } from "playwright";
import { CustomWorld } from "./world";

let browser: Browser;

BeforeAll(async function () {
    browser = await chromium.launch({
        headless: false
    });   
});

Before(async function (this: CustomWorld) {
    this.browser = browser;
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();    
})

After (async function (this: CustomWorld, scenario) {
    if (scenario.result?.status === Status.FAILED) {
        const screenshot = await this.page.screenshot({
            path: `reports/${scenario.pickle.name}.png`, fullPage: true
        });
        this.attach(screenshot, 'image/png')
    }
    await this.page.close();
    await this.context.close();
})

AfterAll(async function () {
    await browser.close();
})