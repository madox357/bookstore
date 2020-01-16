var express = require('express');
var router = express.Router();

// Fix pages
var ctrlFix = require('../controllers/fix')

// Other pages
var ctrlOther = require('../controllers/other')

// GET Fix pages and map them to controller functions
router.get('/', ctrlFix.fixList);       //router looks for URL, ctrlFix.fixList controller is created / is the homepage url path
router.get('/fix/new', ctrlFix.fixNew);     //router looks for URL, ctrlFix.fixNew controller is created to, to get data from fixNew
router.post('/fix/new', ctrlFix.doFixNew);  //router looks for URL, ctrlFix.doFixNew controller is created, to post data collected from fixNew
router.get('/fix/:fixid', ctrlFix.fixInfo);     //router looks for URL, ctrlFix.fixInfo controller is created, to get data from fixInfo
router.post('/fix/:fixid/upvotes', ctrlFix.doFixUpvote);    //router looks for URL, ctrlFix.doFixUpvote controller is created, to post data from doFixUpvote
router.get('/fix/:fixid/comment/new', ctrlFix.addComment);   //router looks for URL, ctrlFix.addComment controller is created, to get data from addComment
router.post('/fix/:fixid/comment/new', ctrlFix.doAddComment);   //router looks for URL,ctrlFix.doAddComment, to post data from doAddComment

// GET Other pages
router.get('/about', ctrlOther.about);
router.get('/rules', ctrlOther.rules);


module.exports = router;