var express = require('express');

var app = express();

var port = process.env.PORT || 8000;
var url = process.env.URL || 'localhost';

require('./server/config/middleware.js')(app, express);

app.listen(port, url);

console.log('Listening on ' + url + ':' + port);