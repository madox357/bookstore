var mongoose = require('mongoose');
var Fix = mongoose.model('fix');

var sendJsonResponse = function (res, status, content){
    res.status(status);
    res.json(content);
}

module.exports.fixesListByUpvotes = function (req, res) {
    Fix.find().exec(function(err, fixes){
        if(!fixes){
            sendJsonResponse(res, 404, {'message' : 'Fixes not found'});
        } else if (err){
            sendJsonResponse(res, 404, err);
        } else {
            sendJsonResponse(res, 200, fixes);
        }
    });
};
module.exports.fixesCreate = function (req, res) {
    Fix.create({
        name: req.body.name,
        status: req.body.status,
        summary: req.body.summary,
        skills: req.body.skills.split(","),
        description: req.body.description,
        //upvotes: req.body.upvotes, should default to zero.
        comments: []
    }, function(err, fix){
        if(err){
            sendJsonResponse(res, 400, err);
        }else{
            sendJsonResponse(res, 201, fix);
        }
    });
};
module.exports.fixesReadOne = function (req, res) {
    if(req.params && req.params.fixid) {
        Fix.findById(req.params.fixid).exec(function(err, fix){
            if(!fix){
                sendJsonResponse(res, 404, {'message' : 'Fix not found'});
            } else if (err){
                sendJsonResponse(res, 404, err);                
            } else {
                sendJsonResponse(res, 200, fix);
            }
        });
    }else{
        sendJsonResponse(res, 404, {'message': 'No fixid in request'});
    }
};
module.exports.fixesUpdateOne = function (req, res) {
    if(req.params && req.params.fixid) {
        Fix.findById(req.params.fixid).exec(
            function(err, fix){
                
                if(!fix){
                    sendJsonResponse(res, 404, {'message' : 'Fix not found'});
                } else if (err){
                    sendJsonResponse(res, 404, err);                
                } else {

                    fix.name = req.body.name;
                    fix.status = req.body.status;
                    fix.summary = req.body.summary;
                    fix.skills = req.body.skills.split(",");
                    fix.description = req.body.description;
                    fix.upvotes = req.body.upvotes;

                    fix.save(function(err, fix){
                        if(err){
                            sendJsonResponse(res, 404, err);
                        }else{
                            sendJsonResponse(res, 200, fix);
                        }
                    });
                    
                }
        });
    }else{
        sendJsonResponse(res, 404, {'message': 'No fixid in request'});
    }
};
module.exports.fixesDeleteOne = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};