var mongoose = require('mongoose');
var Fix = mongoose.model('fix');

var sendJsonResponse = function (res, status, content){
    res.status(status);
    res.json(content);
}

var doAddComment = function(req, res, fix){
    console.log(req.body.name);
    console.log(req.body.comment);
    fix.comments.push({
        name: req.body.name,
        comment: req.body.comment
    });
    fix.save( function(err, fix){
        var thisComment;
        if(err){
            sendJsonResponse(res, 400, err);
        }else{
            thisComment = fix.comments[fix.comments.length - 1];
            sendJsonResponse(res, 201, thisComment);
        }
    });
}

module.exports.commentsCreate = function (req, res) {
    var fixid = req.params.fixid
    if(fixid){
        Fix.findById(fixid)
                .select('comments')
                    .exec( function( err, fix) {
                        if (err){
                            sendJsonResponse(res, 400, err);
                        }else{
                            doAddComment(req, res, fix);
                        }
                    });
    } else {
        sendJsonResponse(res, 404, {"message" : "Fix id not found."});
    }
};
module.exports.commentsReadOne = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};
module.exports.commentsUpdateOne = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};
module.exports.commentsDeleteOne = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};