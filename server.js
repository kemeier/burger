var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// Set Handlebars.
var exphbs = require('express-handlebars');

var PORT = process.env.PORT || 8083;

var app = express();
var path = require("path");
app.use(express.static(path.join(__dirname + '/public')));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(methodOverride('_method'));
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'handlebars');

// Import routes and give the server access to them.
var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);


// Start server so that it can begin listening to client requests.
app.listen(PORT, function() {
    console.log("Server listening on http://localhost:" + PORT);
});








