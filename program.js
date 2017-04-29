var express = require('express');
var app = express();
var dateFormat = require('dateformat');
var date = {unix: null,natural: null }
app.get('/:query', function(req, res) {
	var query = req.params.query;

	if(Number(query)){
		var unix = new Date(query*1000);
		if(typeof unix === 'object'){
			date.unix = query;
			date.natural = dateFormat(unix, "mmmm dd, yyyy");
		}
	}else if(new Date(query)) {
		var natural = dateFormat(query);
		console.log(typeof natural);
		if(isNaN(Date.parse(query)) === false){
			var formattedDate = new Date(query).getTime()/1000;
			date.natural = query;
			date.unix = formattedDate;
		}
		
	}

	res.send(date);
})

app.listen(3000);