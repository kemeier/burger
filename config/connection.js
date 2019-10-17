//contains mysql connection data
var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
    // Database is JawsDB on Heroku
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    // Database is local
    connection = mysql.createConnection({
        port: 3306,
        host: 'ofcmikjy9x4lroa2.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'rut0upnm58972xjgc',
        password: 'j8upg206c3f4g8mk',
        database: 'po3zoeg8q86977hc'
    })
};

connection.connect(function(err)    {
    if (err) {
        console.log("Error Connecting: " + err);
    }
    console.log("connected as id: " + connection.threadId);
});

module.exports = connection;
