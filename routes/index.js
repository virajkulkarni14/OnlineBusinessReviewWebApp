
/*
 * GET home page.
 */
var db = require('../db.js');
exports.index = function(req, res){
  var connection = db.getConnection();
  connection.connect();
  connection.query('SELECT * from category)', function(err, rows){
  		if(err){
  			console.log('Error fetching values % s', err);
  		}
  		res.render('categories', {
  			page_title: "Categories",
  			data : rows,
  			isAdmin : sess.isAdmin,
  			name : sess.fname,
  			lastLogin : sess.lastLogin,
  			email : sess.email 
  		});
  		connection.end();
  });
};

exports.main = function(req, res){
	res.render('home');
}