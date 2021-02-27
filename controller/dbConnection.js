/* NPM Modules */
var mysql = require('mysql');
var util = require('util');

/* Project Modules */
const config = require("../config/net_config"); 

var dbConfig = {
	host: config.sql.host,
    port: config.sql.port,
    user: config.sql.user,
    password: config.sql.pass,
    database: config.sql.database
};

function handleDisconnect() {
	// Recreate the connection each time.
	con = mysql.createPool(dbConfig); 
	
	// Promisify the con.query to use async/await
	con.query = util.promisify(con.query) 
	
	con.on('error', function(err) {
		console.error('db error', err);
	    if (err.code === 'PROTOCOL_CONNECTION_LOST') { 
			handleDisconnect();
	    } 
	    else {                                     
			console.log('dbConnection.handleDisconnect.con.on(error): err="'+err+'"');
			throw err;
	    }
	});
}

handleDisconnect();

module.exports = con;
