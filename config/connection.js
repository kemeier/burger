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
        host: 'localhost',
        user: 'root',
        password: '9tachyons',
        database: 'burgers_db'
    })
};

connection.connect(function(err)    {
    if (err) {
        console.log("Error Connecting: " + err);
    }
    console.log("connected as id: " + connection.threadId);
});

module.exports = connection;
