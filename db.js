var mysql = require('mysql');

function getConnection(){
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'admin',
		password: 'admin',
		port: 3306,
		database: 'nodejs'
	});
}