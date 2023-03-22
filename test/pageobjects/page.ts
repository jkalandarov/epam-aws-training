import { config } from "../../wdio.conf";

class Page {
  get jsonResponse() {
    return '//pre';
  }

  get buttons() {
    return {
      'Expand Operations': `//a[normalize-space()="Expand Operations"]`,
      'Try it out!': '//input[@value="Try it out!"][@type="submit"]'
    }
  }

  async clickOnButton(buttonName: string) {
    const buttonSelector = this.buttons[buttonName];
    await (await $(buttonSelector)).waitForEnabled({ timeout: config.waitforTimeout });
    await $(this.buttons[buttonName]).click();
  }
}

export default new Page();
