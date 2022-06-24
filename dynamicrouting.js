var express = require('express');

var app = express();

app.get('/get',function(req,res){
    res.send('this is the get homepage');
});

app.get('/contact',function(req,res){
    res.send('this is the contact homepage');
});

app.get('/profile/:id', function(req,res){
    res.send('you requested to see the profile with id '+ req.params.id);
});

app.get('/profile/:name', function(req,res){
    res.send('you requested to see the profile with name '+ req.params.name);
});


app.listen(3000);