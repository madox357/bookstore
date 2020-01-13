
module.exports.about = function(req, res, next) {  //Creating an index export method
    res.render('generic-text', { title: 'About', text: 'The website provides information about library archive collection of unique books.' }); //Controller content
}

module.exports.rules = function(req, res, next) {   //Creating an index export method
    res.render('generic-text', { title: 'Rules', text: '1. No rudeness, we are all friends 2. Books only, nothing off topic 3. Have fun.' });  //Controller content
}