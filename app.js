var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var session = require('express-session');
var bodyParser = require('body-parser');

var customers = require('./routes/customers_custompool'); 
var app = express();
var connection  = require('express-myconnection'); 
//var mysql = require('mysql');
var sess=null;
// all environments
app.set('port', process.env.PORT || 4300);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//app.use(express.favicon());
app.use(session({secret: 'ssshhhhh'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));
// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/home', routes.index);

app.get('/', customers.login);
app.get('/signup', customers.signup);
app.get('/login', customers.login);
app.post('/login/do', customers.logindo);
app.get('/logout', customers.logout);
app.post('/addCategory', customers.addCategory);
app.post('/addElement', customers.addElement);
app.get('/getDetails/:name', customers.getDetails);
app.get('/listCategory', customers.listCategory);
app.post('/signup/save', customers.save);
app.get('/customers', customers.list);//route add customer, get n post
app.get('/customers/add', customers.add);
app.get('/review_submit/:name', customers.reviews);
app.get('/get_reviews/:name', customers.get_reviews);
app.post('/write_reviews', customers.write_reviews);
app.get('/customers/delete/:id', customers.delete_customer);//edit customer route , get n post
app.get('/customers/edit/:id', customers.edit); 
app.post('/customers/edit/:id',customers.save_edit);
app.use(app.router);
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});