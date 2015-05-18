var express = require('express');
var router = express.Router();
var path = require('path');
var Love = require('../models/loveNotes');


router.get("/", function(req, res, next){
  Love.find(function(err, lovenotes){
    res.json(lovenotes);
  });
});

router.post("/", function(req,res,next){
  console.log("MAde it here");
  console.log(req.body);
  Love.create(req.body, function(err, post){
    res.sendFile(path.join(__dirname, '../views/index.html'));
  })
});

module.exports = router;
