/*
* @Author: nurulnabi
* @Date:   2017-04-18 20:26:58
* @Last Modified by:   nurulnabi
* @Last Modified time: 2017-04-18 22:43:58
*/

var defaultValue	= require('config/globalValues')['defaultData'];
var mongoose 		= require('mongoose');
var Schema 			= mongoose.Schema;

var commentsSchema = new Schema({
	_id: {
		type: Schema.Types.ObjectId,
		require: true,
		ref: 'users'
	},
	poems: {
		type: Schema.Types.ObjectId,
		ref: 'poems'
	},
	stars:{
		type: Number,
		require: true,
		default: defaultValue.STARS
	},
	comment: {
		type: String,
		require: true,
		default: defaultValue.COMMENT
	},
	mood: {
		type: String,
		require: true,
		default: defaultValue.MOOD
	}
});

var comments = mongoose.model("comments", commentsSchema);

module.exports = comments;