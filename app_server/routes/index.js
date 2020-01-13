var express = require('express');
var router = express.Router();

// Fix pages
var ctrlFix = require('../controllers/fix')

// Other pages
var ctrlOther = require('../controllers/other')

// GET Fix pages and map them to controller functions
router.get('/', ctrlFix.fixList);   //Where router looks for URL, / is the homepage url path
router.get('/fix/new', ctrlFix.fixNew); //Where router looks for URL
router.post('/fix/new', ctrlFix.doFixNew); //Where router looks for URL
router.get('/fix/:fixid', ctrlFix.fixInfo); //Where router looks for URL
router.post('/fix/:fixid/upvotes', ctrlFix.doFixUpvote); //Where router looks for URL
router.get('/fix/:fixid/comment/new', ctrlFix.addComment); //Where router looks for URL
router.post('/fix/:fixid/comment/new', ctrlFix.doAddComment); //Where router looks for URL

// GET Other pages
router.get('/about', ctrlOther.about);
router.get('/rules', ctrlOther.rules);


module.exports = router;