var express = require('express');
var router = express.Router();
var ctrlFixes = require('../controllers/fix');
var ctrlComments = require('../controllers/comment');

// fixes
router.get('/fix', ctrlFixes.fixesListByUpvotes); /**gets the value of fixesListByUpvotes from fix.js*/
router.post('/fix', ctrlFixes.fixesCreate);
router.get('/fix/:fixid', ctrlFixes.fixesReadOne);
router.put('/fix/:fixid', ctrlFixes.fixesUpdateOne);
router.post('/fix/:fixid', ctrlFixes.fixesUpvote);
router.delete('/fix/:fixid', ctrlFixes.fixesDeleteOne);

// comments
router.post('/fix/:fixid/comment', ctrlComments.commentsCreate);
router.get('/fix/:fixid/comment/:commentid', ctrlComments.commentsReadOne);
router.put('/fix/:fixid/comment/:commentid', ctrlComments.commentsUpdateOne)
router.delete('/fix/:fixid/comment/:commentid', ctrlComments.commentsDeleteOne);

module.exports = router;