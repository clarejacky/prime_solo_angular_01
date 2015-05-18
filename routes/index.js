var express = require('express');
var router = express.Router();
var path = require('path');
var Love = require('../models/loveNotes');
var mongoose = require('mongoose');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.resolve(__dirname, '../views/index.html'));
});
//
//router.post('/', function(req,res,next) {
//  Love.create(req.body, function (err, post) {
//    res.json(post);
//  });
//});

module.exports = router;
