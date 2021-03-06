/**
 * Created by ClareJacky on 5/18/15.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var LoveSchema = new Schema({
    title: { type: String, required: true },
    textarea: { type: String, required: true },
    name: String,
    date: {type: Date, default: new Date()}

});

module.exports = mongoose.model('Love', LoveSchema);