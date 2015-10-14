var express = require('express');
var fs = require('fs');
var app = express();

app.get('/products', function(req, res) {
    res.append('Content-Type', 'application/json');
    res.send(fs.readFileSync('products.json'));
});

module.exports = app;