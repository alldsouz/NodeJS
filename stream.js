var http = require('http');
var fs = require('fs');
const { dirname } = require('path');

var myreadstream = fs.createReadStream(__dirname+'./readme.text','utf8');

myreadstream.on('data', function(chunk){
    console.log('new chunk recieved');
    console.log('chunk');
});