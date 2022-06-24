var express = require('express');

var app = express();

app.get('/get',function(req,res){
    res.send('this is the get homepage');
});

app.get('/contact',function(req,res){
    res.send('this is the contact homepage');
});

app.listen(3000);

