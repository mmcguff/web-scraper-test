const reddit = require('./routes/reddit');
const amazon = require('./routes/amazon');
const urbanOutfitters = require('./routes/urban-outfitters');

(async () =>{
    await reddit.init();
    
    //close all browsers to avoid memory leaks when converting data create an API out of the scraped data. 
    await reddit.close(); 

    //Very helpful for seeing that the objects collected from your scrap are what you expect. 
    //debugger;  
})();