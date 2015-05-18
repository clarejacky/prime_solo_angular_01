var express = require('express');
var router = express.Router();
var path = require('path');
var Love = require('../models/loveNotes');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.resolve(__dirname, '../views/index.html'));
});

router.post('/', function(req,res,next) {
  Users.create(req.body, function (err, post) {
});

module.exports = router;
