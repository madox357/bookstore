var mongoose = require( 'mongoose' );

var commentSchema = new mongoose.Schema({
    name: String,   /* */
    comment: String     /* */
});

var fixSchema = new mongoose.Schema({
    name: String,  /*The variable fixSchema requires a schema for json, 7 */
    language: String,/* */
    summary: String,  /* */
    skills: [String],  /* */
    description: String,  /* */
    upvotes: {type: Number, "default": 0, min: 0},  /* */
    comments: [commentSchema]  /* The variable fixSchema requires a schema for json, comments can be an empty array to start with*/
});

mongoose.model('fix', fixSchema);