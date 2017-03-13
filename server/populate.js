var http = require('http');
var request = require('request');

var fetchData = function(callback) {
	console.log('inside fetched data. args : ', arguments[0]);
var extServerOptions = {
    host: 'www.clashapi.xyz',
    path: '/api/cards',
    method: 'GET'
};
var chunks = '';

http.request(extServerOptions, function (res) {
        res.setEncoding('utf8');
        res.on('data', function (data) {
        	//console.log('data is here');
        	chunks+= data;
            
        });
        res.on('end', function() {
        	//console.log('in the end it totally matters ');
        	callback(JSON.parse(chunks));
        });
        res.on('error', function(err) {
        	console.log('there was an error : ', err);
        });
 
    }).end();

};


var fetchRandom = function(callback) {
    console.log('inside fetched data. args : ', arguments[0]);
var extServerOptions = {
    host: 'www.clashapi.xyz',
    path: '/api/random-deck',
    method: 'GET'
};
var chunks = '';

http.request(extServerOptions, function (res) {
        res.setEncoding('utf8');
        res.on('data', function (data) {
            console.log('random deck data is here');
            chunks+= data;
            
        });
        res.on('end', function() {
            callback(null, JSON.parse(chunks));
        });
        res.on('error', function(err) {
            console.log('there was an error : ', err);
            callback(err, null);
        });
 
    }).end();

};

module.exports.fetchData = fetchData;
module.exports.fetchRandom = fetchRandom;



