//var express = require('express');
//var router = express.Router();
/* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('ballon', { title: 'Search Results' });
//});
module.exports = router;

var express = require('express'); 
const ballon_controlers= require('../controllers/ballon'); 
var router = express.Router(); 
 
/* GET ballon */ 
router.get('/', ballon_controlers.ballon_view_all_Page ); 
module.exports = router; 

/* GET detail ballon page */ 
router.get('/detail', ballon_controlers.ballon_view_one_Page); 
