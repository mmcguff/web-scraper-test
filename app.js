const reddit = require('./routes/reddit');
const amazon = require('./routes/amazon');
const urbanOutfitters = require('./routes/urban-outfitters');

(async () =>{
    
    await reddit.scrape('https://old.reddit.com');
    await amazon.scrape('https://www.amazon.com/gp/product/B01DXI33T0');
    await urbanOutfitters.scrape('https://www.urbanoutfitters.com/shop/uo-corduroy-hooded-cropped-jacket?category=jackets-coats-for-women&color=081&type=REGULAR');
    //debugger; 
})();