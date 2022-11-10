var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var ballon_controller = require('../controllers/ballon'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// BALLON ROUTES /// 
 
// POST request for creating a Ballon.  
router.post('/ballons', ballon_controller.ballon_create_post); 
 
// DELETE request to delete Ballon. 
router.delete('/ballons/:id', ballon_controller.ballon_delete); 
 
// PUT request to update Ballon. 
router.put('/ballons/:id', ballon_controller.ballon_update_put); 
 
// GET request for one Ballon. 
router.get('/ballons/:id', ballon_controller.ballon_detail); 
 
// GET request for list of all Ballon items. 
router.get('/ballons', ballon_controller.ballon_list); 
 
module.exports = router; 