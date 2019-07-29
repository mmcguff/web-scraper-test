const reddit = require('./routes/reddit');
const amazon = require('./routes/amazon');
const urbanOutfitters = require('./routes/urban-outfitters');

(async () =>{
    console.log('Reddit scrape result:');
    await reddit.init();
    await reddit.close(); 

    console.log('Amazon scrape result:')
    await amazon.scrape('https://www.amazon.com/gp/product/B01DXI33T0');
    //Very helpful for seeing that the objects collected from your scrap are what you expect. 
    //debugger;  
})();