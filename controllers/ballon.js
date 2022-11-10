var Ballon = require('../models/ballon'); 
 
// List of all Ballon 
exports.ballon_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Ballon list'); 
}; 
 
// for a specific Ballon. 
exports.ballon_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Ballon detail: ' + req.params.id); 
}; 
 
// Handle Ballon create on POST. 
exports.ballon_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Ballon create POST'); 
}; 
 
// Handle Ballon delete form on DELETE. 
exports.ballon_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Ballon delete DELETE ' + req.params.id); 
}; 
 
// Handle Ballon update form on PUT. 
exports.ballon_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Ballon update PUT' + req.params.id); 
}; 

// List of all Ballon 
exports.ballon_list = async function(req, res) { 
    try{ 
        theBallons = await Ballon.find(); 
        res.send(theBallons); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// VIEWS 
// Handle a show all view 
exports.ballon_view_all_Page = async function(req, res) { 
    try{ 
        theBallons = await Ballon.find(); 
        res.render('ballon', { title: 'Ballon Search Results', results: theBallons }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// Handle Costume create on POST. 
exports.ballon_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Ballon(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.gas = req.body.gas; 
    document.colour = req.body.colour; 
    document.count = req.body.count; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 