/*
* @Author: nurulnabi
* @Date:   2017-04-18 20:01:54
* @Last Modified by:   nurulnabi
* @Last Modified time: 2017-04-18 22:43:47
*/

var defaultValue	= require('config/globalValues')['defaultData'];
var mongoose 		= require('mongoose');
var Schema   		= mongoose.Schema;

var comments = new Schema({
	word: {
		type: String,
		require: true
	},
	meaning: {
		type: String,
		require: true,
		default: defaultValue.MEANING
	}
});


var poemSchema = new Schema({
	_id: {
		type: Schema.Types.ObjectId,
		require: true
	},
	title: {
		type: String,
		require: true
	},
	genre: {
		type: String,
		require: true,
		default: defaultValue.GENRE
	},
	author: {
		name:{
			type: String,
			require: true,
			default: globalValues.AUTHOR
		},
		authorId: {
			type: Schema.Types.ObjectId,
			require: true,
			default: globalValues.AUTHORID
			ref: 'poets'
		}
	},
	type: {
		type: String,
		require: true,
		default: defaultValue.TYPE
	},
	likes: {
		type: Number,
		require: false,
		default: defaultValue.LIKES
	},
	meaning: [comments],
	users: [{
		type: Schema.Types.ObjectId,
		ref: 'users'
	}],
	comments:[{
		type: Schema.Types.ObjectId,
		ref: 'comments'
	}],
	stars: {
		type: Number,
		require: true,
		default: defaultValue.STARS
	},
	brief: {
		type: String,
		require: true,
		default: defaultValue.BRIEF
	}
});