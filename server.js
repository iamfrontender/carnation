var express = require('express');
var app = express();

var PORT = process.env.PORT || 5544;

app.use(express.static(__dirname + '/public'));
app.listen(PORT);

console.log('listening at', PORT);