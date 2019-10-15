var connection = require('../config/connection.js');

//collects all data from database
var orm = {
    all: function (tableInput, cb)    {
        connection.query('SELECT * FROM '+tableInput+';', function(err, result)    {
            if (err) throw err;
            cb(result);
        })
    },
//creates new data within database
    update: function(tableInput, condition, cb) {
        connection.query('UPDATE '+tableInput+' SET devoured=true WHERE id='+condition+';', function(err,result)    {
            if(err)throw err;
            cb(result);
        })
    },
//updates data within database
    create: function(tableInput,val,cb) {
        connection.query('INSERT INTO '+tableInput+" (burger_name) VALUES ('"+val+"');", function(err,result)    {
            if(err) throw err;
            cb(result);
        })
    }
};

    
module.exports = orm;