const puppeteer = require('puppeteer');

const URL = 'https://hackernoon.com/';

const self = {
    browser: null,
    page: null,

    init: async () => {
        self.browser = await puppeteer.launch({
            headless: false
        });
        self.page = await self.browser.newPage();

        await self.page.goto(URL, {waituntil: 'networkidle0'});
    },

    close: async () => {
        await self.browser.close();
    }
}

module.exports = self;