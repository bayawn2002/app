var db = require('../lib/database');
//var util = require('../lib/utilities');

module.exports = {

  	read: function (req, res) {
	console.log('1');
      		db.query('SELECT * FROM words WHERE page_id = 1', function(rows){
console.log(rows);
			     res.send(rows.data );
      		});		
    	}	
}
