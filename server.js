var express = require('express');
var app =  express();

app.get('/', function (req, res) {
	res.send('hello World!')
})

app.listen(3000);
console.log("listening")