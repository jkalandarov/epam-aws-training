import { Given, Then, When, DataTable } from '@wdio/cucumber-framework';
import { config } from '../../wdio.conf';
import page from '../pageobjects/page';
import { expect } from 'chai';

Given(/^I go to baseUrl$/,async () => {
  await browser.url(config.baseUrl);
});

When(/^I go to "(.+)" of the baseUrl$/,async (params: string) => {
  await browser.url(`${config.baseUrl}${params}`);
});

Then('I should see json reponse',async () => {
  const jsonData = await (await $(page.jsonResponse)).isDisplayed();
  expect(jsonData).to.equal(true);
});

Then('I should see json response to have following properties and values',async (table: DataTable) => {
  const tableData = Object.fromEntries(table.rows());
  const actualData = JSON.parse(await (await $(page.jsonResponse)).getText());
  expect(actualData).to.deep.equal(tableData);  
});

When(/^I click on "(.+)" button$/, {timeout: 30000}, async (buttonName: string) => {
  await page.clickOnButton(buttonName);
});