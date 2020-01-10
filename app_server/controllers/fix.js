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