var mysql = require('mysql');

function getConnectionPool(){
	var pool = mysql.createPool({
		host: 'localhost',
		user: 'admin',
		port: 3306,
		database: 'nodejs',
		connectionLimit: 1000;
	});
	return pool;
}
exports.getConnectionPool = getConnectionPool;