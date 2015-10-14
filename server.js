var express = require('express');
var api = require('./api.js');

var PORT = process.env.PORT || 5544;

var app = express();

app.use(express.static(__dirname + '/public'));
app.use('/api', api);

app.listen(PORT);

console.log('listening at', PORT);