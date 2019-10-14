var connectyion = require('../config/connection.js');

var orm = {
    all: function (cb)    {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err, res)    {
            if (err)    {
                throw err;
            }
            cb(res);
        });
    },

    create: function (burger, cb)   {
        var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
        connection.query(queryString, [burger], function (err, res) {
            if (err)    {
                throw err;
            }
            cb(res);
        });
    },

    update: function  (id, cb)  {
        var queryString = "UPDATE burgers SET devoured = true where ID = ?";
        connection.query(queryString, [id], function (err, res) {
            if (err)    {
                throw err;
            }
            cb(res);
        });
    }
};

module.exports = orm;