import puppeteer from 'puppeteer'

describe('check title', () => {
  it(`Title should be 'Example Domain'`, async function () {
    let browser = await puppeteer.launch({
      headless: true
    });

    let page = await browser.newPage();
    await page.goto(`http://github.com`);
    let title = await page.title();
    await browser.close();

    expect(title).toEqual(`The world’s leading software development platform · GitHub`);
  }) 
})
