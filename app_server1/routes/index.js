var express = require('express');
var router = express.Router();

// Fix pages
var ctrlFix = require('../controllers/fix')

// Other pages
var ctrlOther = require('../controllers/other')

// GET Fix pages.
router.get('/', ctrlFix.fixList);
router.get('/fix/:fixid', ctrlFix.fixInfo);
router.get('/fix/:fixid/comment/new', ctrlFix.addComment);
router.post('/fix/:fixid/comment/new', ctrlFix.doAddComment);

// GET Other pages
router.get('/about', ctrlOther.about);
router.get('/rules', ctrlOther.rules);


module.exports = router;