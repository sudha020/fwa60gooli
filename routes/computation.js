var express = require('express');
var router = express.Router();
var value=Math.round(Math.random*10);
var a=Math.imul(value) 
var b= Math.log(value) 
var c= Math.log10(value) 

/* GET users listing. */
router.get('/', function(req, res, next) {
 
  res.send(`[Math.imul()] applied to [${value}] is [${a}]      [Math.log()] applied to [${value}] is [${b}]     [Math.log10()] applied to [${value}] is [${c}]`);
});

module.exports = router;
