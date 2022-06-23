var http = require('http');
var fs = require('fs');
const { dirname } = require('path');

var myreadstream = fs.createReadStream(__dirname+'./readme.text','utf8');
var mywritestream = fs.createWriteStream(__dirname+ './writeme.txt');

myreadstream.on('data', function(chunk){
    console.log('new chunk recieved');
    console.log('chunk');
});

mywritestream.write(chunk);