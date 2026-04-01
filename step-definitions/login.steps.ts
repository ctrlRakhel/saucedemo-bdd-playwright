import {Given, Then} from '@cucumber/cucumber'
import {expect} from 'playwright/test'
import { CustomWorld } from '../support/world'

Given('I open the login page', async function (this:CustomWorld) {
    await this.page.goto('https://sauce-demo.myshopify.com/');
})

Then('I should see the page title', async function(this:CustomWorld) {
    await expect(this.page).toHaveTitle('Sauce Demo');
})