
module.exports.about = function(req, res, next) {
    res.render('generic-text', { title: 'About', text: 'Fix It is a forum of friends, fanatical about fixing things.' });
}

module.exports.rules = function(req, res, next) {
    res.render('generic-text', { title: 'Rules', text: '1. No rudeness, we are all friends 2. Fixes only, nothing off topic 3. Have fun. On Fix It we upvote difficult and interesting problem to get them fixed sooner. Fix are in one of three states, Fixed (yeahy), Fixing (we are working on this) or Given Up (Oh no). You can comment or any but the most important ones are those that are currently at Fixing.' });
}