var express = require('express');
var app = express();
var moment = require('moment');

  app.get('/:date', function (req, res) {
    var dateString = req.params.date;
    // console.log(dateString);
    // console.log(moment(dateString).isValid());

	var day = moment.unix(dateString);

	if (moment(day).isValid()) {
		res.send({
			"unix" : moment(day).format("X"),
			"natural" : moment(day).format("MMMM D, YYYY")
		});
	} else if (moment(dateString, ["MMDDYY","MM-DD-YYYY", "YYYY-MM-DD", "D MMMM YYYY", "MMMM D YYYY", "MMM DD YYYY", "MMDDYYYY", "YYYY MM DD"])) {
		res.send({
			"unix" : moment(dateString).format("X"),
			"natural" : moment(dateString).format("MMMM D, YYYY")
		});
	} else {
		res.send({
			"unix" : null,
			"natural" : null
		});
	}
      


  }); //app get

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

//if datestring can convert to a date, send that date. If it cannot convert, use moment date method. 