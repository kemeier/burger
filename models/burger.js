var orm = require("../config/orm.js");
var burger = {
    all: function (cb) {
        orm.seletAll(function (res) {
            cb(res);
        });
    },
    create: function (burger, cb)    {
        orminsertOne(burger, function (res) {
            cb(res);
        });
    },
    update: function (id, cb)    {
        orm.updateOne([id], function (res)  {
            cb(res);
        });
    }
}

module.exports = burger;