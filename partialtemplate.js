var express = require ('express');

var app = express()

app.get('/', function(req, res){
    res.render('index')
});

app.get('/contact', function(req, res){
    res.render('contact')
});

app.get('/profile/:name', function(req,res){
    res.send('you requested to see a profile  with the name of ' + req.params.name);
});
app.listen(3000);