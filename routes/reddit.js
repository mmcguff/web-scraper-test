const puppeteer = require('puppeteer');
//The old url renders things in a way that is more easily scraped if we need to get individual elements. 
const baseUrl = 'https://www.old.reddit.com'; 
let html = '';

const self = {
    browser: null,
    page: null,

    init: async () => {
        self.browser = await puppeteer.launch({
            //headless: false
        });
        self.page = await self.browser.newPage();

        await self.page.goto(baseUrl, {waituntil: 'networkidle0'});

        //most basic implemenation
        html = await self.page.content();
        console.log(html);
    },

    close: async () => {
        await self.browser.close();
    }
}

module.exports = self;