const puppeteer = require('puppeteer');

const targetUrl = 'https://www.amazon.com/gp/product/B01DXI33T0'; 
const pc = {
    username: '108.59.3.140',
    password: '18015',
    host: '165.227.118.92',
    port: '8002'
}
//const proxy =  `https://${pc.username}:${pc.password}@${pc.host}:${pc.port}`;

let html = '';

const self = {
    browser: null,
    page: null,

    init: async() => {
        self.browser = await puppeteer.launch({
            args: [
            //'--proxy-server=' + proxy,
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--disable-accelerated-2d-canvas',
            '--disable-gpu',
            '--window-size=1920x1080',
            ],
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

module.exports = self;