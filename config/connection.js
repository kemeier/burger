var mysql = require('mysql');
var connection = mysql.createConnection ({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "9tachyons",
    database: "burgers"
});

connection.connect(function(err)    {
    if (err)    {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id: " + connection.threadID);
});

module.exports = connection;
