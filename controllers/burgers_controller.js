var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');
router.get('/', function (req, res) {
    res.redirect('/burger');
});

router.get('/burger', function (req, res)   {
    burger.selectAll(function (burger_data) {
        res.render('index',  { burger_data });
    });
});

router.post('/burger/create', function (req, res)   {
    burger.insertOne(req.body.burger_name, function(result)  {
        console.log(result);
        res.redirect('/')
    });
});

router.put('/burger/update', function (req, res) {
    burger.updateOne(req.body.burger_id, function (result)  {
        console.log(result);
    res.redirect('/');
    });
});
module.exports = router;