var mongoose = require( 'mongoose' );

var commentSchema = new mongoose.Schema({
    name: String,
    comment: String
});

var fixSchema = new mongoose.Schema({
    name: String,
    language: String,
    summary: String,
    skills: [String],
    description: String,
    upvotes: {type: Number, "default": 0, min: 0},
    comments: [commentSchema]
});

mongoose.model('fix', fixSchema);