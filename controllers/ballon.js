var Ballon = require('../models/ballon'); 
 
// List of all Ballon 
exports.ballon_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Ballon list'); 
}; 
 
// for a specific Costume. 
exports.ballon_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Ballon.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
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

// Handle Costume update form on PUT. 
exports.ballon_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Ballon.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.gas)  
               toUpdate.gas = req.body.gas; 
        if(req.body.colour) toUpdate.colour = req.body.colour; 
        if(req.body.count) toUpdate.count = req.body.count; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
};