var express = require('express');
var app = express();


// set the view engine to ejs
app.set('view engine', 'ejs');

app.listen(1001);
console.log('1001 is the magic port');

app.use(express.static('public'));
