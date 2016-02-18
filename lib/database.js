var mysql      = require('mysql');

module.exports = {
    open: function ( config ) {
        conn = mysql.createConnection({
          host     : config.dbHost,
          user     : config.dbUser,
          password : config.dbPassword
        });
    },
    query: function(query, callback, database){
			if (! database) {
				database = config.dbName;
			}
		    if ( !conn ) db.open( config );

			try{

				conn.query('use ' + database);
				conn.query(query, function(err, rows, fields) {
					if (err) throw err;
					callback({data: rows});
				});

			}
			catch(err){
				callback('{errorMsg: "Database query failed. Please try again later."}');
			}


    }
}
