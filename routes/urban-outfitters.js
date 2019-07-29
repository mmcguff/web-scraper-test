const rp = require('request-promise');
const cheerio = require('cheerio'); // Basically jQuery for node.js
 
internals = {};

internals.scrape = (targetUrl) => {
    const options = {
        uri: targetUrl,
        transform: function (body) {
            return cheerio.load(body);
        }
    };
     
    rp(options)
        .then(function ($) {
            console.log('Urban Outfitters scrape result:');
            console.log($.html());
        })
        .catch(function (err) {
            console.log(err);
        });
  };



module.exports = internals;