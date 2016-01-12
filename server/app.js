var express = require('express'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    errorhandler = require('errorhandler'),
    csrf = require('csurf'),
    routes = require('./routes'),
    api = require('./routes/api'),
    DB = require('./accessDB'),
    protectJSON = require('./lib/protectJSON'),
    app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(session({
  secret: 'customermanagerstandard',
  saveUninitialized: true,
  resave: true }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../'));
app.use(errorhandler());
app.use(protectJSON);
app.use(csrf());

app.use(function (req, res, next) {
  var csrf = req.csrfToken();
  res.cookie('XSRF-TOKEN', csrf);
  res.locals._csrf = csrf;
  next();
});

var conn = 'mongodb://localhost/custmgr';
var db;
db = new DB.startup(conn);

function csrf(req, res, next) {
  res.locals.token = req.session._csrf;
  next();
}

// Routes

app.get('/', routes.index);

// JSON API

app.get('/api/dataservice/Customers', api.customers);
app.get('/api/dataservice/Customer/:id', api.customer);
app.post('/api/dataservice/PostCustomer', api.addCustomer);
app.put('/api/dataservice/PutCustomer/:id', api.editCustomer);
app.delete('/api/dataservice/DeleteCustomer/:id', api.deleteCustomer);

app.get('/api/dataservice/States', api.states);

app.get('/api/dataservice/CustomersSummary', api.customersSummary);
app.get('/api/dataservice/CustomerById/:id', api.customer);
app.get('/api/dataservice/CheckUnique/:email', api.checkemail);


// redirect all others to the index (HTML5 history)
app.get('*', routes.index);

// Start server

app.listen(3000, function(){
  console.log("CustMgr Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
