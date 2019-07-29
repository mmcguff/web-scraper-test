const puppeteer = require('puppeteer');
//The old url renders things in a way that is more easily scraped if we need to get individual elements. 
const baseUrl = 'https://old.reddit.com'; 
let html = '';

internals = {};

const self = {
    browser: null,
    page: null,

    init: async (targetUrl) => {
        self.browser = await puppeteer.launch({
            //headless: false
        });
        self.page = await self.browser.newPage();

        await self.page.goto(targetUrl, {waituntil: 'networkidle0'});

        //most basic implemenation
        html = await self.page.content();
        console.log(html);

        //transformation to get the desired elements would go here
    },

    close: async () => {
        await self.browser.close();
    }
}

internals.scrape = (targetUrl) => {
    console.log('Reddit scrape result:');
    self.init(targetUrl);
    self.close();
}

module.exports = internals;