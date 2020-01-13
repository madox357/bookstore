var request = require('request');
var apiOptions = {
    server : "http://localhost:3000"
};

var renderFixList = function(req, res, body){
    res.render('fix-list', 
        {   title: 'Js Bookstore',
            pageHeader: {
                title: 'Js Bookstore',
                strapLine: 'Archive collection of a decade.'
            },
        fixes: body
        });
};

var renderFix = function(req, res, body){
    console.log(body);
    res.render('fix',
    {
        title: 'Book Information',
        fix: body
    });
}

module.exports.fixInfo = function(req, res, next) {
    
    var requestOptions;
    var path;

    path = '/api/fix/' + req.params.fixid;
    requestOptions = {
        url: apiOptions.server + path,
        method: "GET",
        json: {}
    }

    request(requestOptions,
        function(apierr, apires, apibody){ 
            if(apires.statusCode == 200){
                renderFix(req, res, apibody);
            }
        }
    );
};

module.exports.fixList = function(req, res) {
    var requestOptions;
    var path;
    path = '/api/fix';
    requestOptions = {
        url: apiOptions.server + path,
        method: "GET",
        json:  {}
    };
    request(requestOptions,
        function(apierr, apires, apibody){
            if(apires.statusCode == 200 && apibody.length){
                renderFixList(req, res, apibody);
            }
        }
    );
};

module.exports.fixNew = function(req, res) {
    res.render('fix-new', { title: 'Create a New Book'});
};

module.exports.doFixNew = function(req, res){
    var requestOptions, path, postData;  
    path = '/api/fix' ;
    postData = {
        name: req.body.name,
        status: 'Fixing',   
        summary: req.body.summary,
        description: req.body.description,
        skills: req.body.skills
    };
    requestOptions = {
        url: apiOptions.server + path,
        method: 'POST',
        json: postData
    };
    request(requestOptions,
        function(apierr, apires, apibody){
            res.redirect('/');
        }
    );
}

module.exports.doFixUpvote = function(req, res) {

    var requestOptions, path;
    
    path = '/api/fix/' + req.params.fixid;

    requestOptions = {
        url: apiOptions.server + path,
        method: 'POST',
        json: {}
    };
    
    request(requestOptions,
        function(apierr, apires, apibody){
            res.redirect('/');
        }
    );
}

module.exports.addComment = function(req, res, next) {
    res.render('fix-comment', { title: 'Add Comment', fixid: req.params.fixid });  //takes the name of the view template:fix-comment, and thejavascript object containing data for template to use
};

module.exports.doAddComment = function(req, res){
    var requestOptions, path, fix, postData;
    fixid = req.params.fixid;
    path = '/api/fix/' + fixid + '/comment';
    postData = {
        name: req.body.name,
        comment: req.body.comment
    };
    requestOptions = {
        url: apiOptions.server + path,
        method: 'POST',
        json: postData
    };
    request(requestOptions,
        function(apierr, apires, apibody){
            res.redirect('/fix/' + fixid)
        }
    );
}