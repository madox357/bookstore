var request = require('request');
var apiOptions = {
    server : "http://localhost:3000"
};

var renderFixList = function(req, res, body){
    res.render('fix-list', 
        {   title: 'Fix It',
            pageHeader: {
                title: 'Fix It',
                strapLine: 'A forum of friends who fix things.'
            },
        fixes: body
        });
};

var renderFix = function(req, res, body){
    console.log(body);
    res.render('fix',
    {
        title: 'Fix Information',
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

module.exports.addComment = function(req, res, next) {
    res.render('fix-comment', { title: 'Add Comment', fixid: req.params.fixid });
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