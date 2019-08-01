const rp = require('request-promise');
const cheerio = require('cheerio'); // Basically jQuery for node.js
const url = require('url');
const pc = {
    username: '108.59.3.140',
    password: '18015',
    host: '165.227.118.92',
    port: '8002'
}               
const proxy =  'http://108.59.3.140:18015@165.227.118.92:8002';


internals = {};

internals.scrape = async (targetUrl) => {

    const options = {
        uri: proxy + targetUrl,
        transform: function (body) {
            return cheerio.load(body);
        }
    };
     
    rp(options)
        .then(function ($) {
            console.log('Amazon scrape result:');
            console.log($.html());
        })
        .catch(function (err) {
            console.log(err);
        });
  };



module.exports = internals;