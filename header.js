var express = require('express');
var os_locale = require('os-locale');
var os = require('os');
var app = express();
var config = {ipaddress:null, language:null, software:null}
app.get('/whoami', function(req, res) {

	config.ipaddress = req.ip;
	config.language = req.headers["accept-language"];
	config.software = req.headers["user-agent"]; 

	res.send(config);
})

app.listen(3000);