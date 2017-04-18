/*
* @Author: nurulnabi
* @Date:   2017-04-18 20:41:09
* @Last Modified by:   nurulnabi
* @Last Modified time: 2017-04-18 22:43:50
*/

var defaultValue	= require('config/globalValues')['defaultData'];
var mongoose 		= require('mongoose');
var Schema   		= mongoose.Schema;

var deviceIds = new Schema({
	date: {
		type: Date,
		require: true,
		default: new Date()
	},
	deviceId: {
		type: String,
		require: true
	}
});

var userSchema = new Schema({
	_id: {
		type: Schema.Types.ObjectId,
		require: true
	},
	name: {
		type: String,
		require: true
	},
	username: {
		type: String,
		require: true
	},
	password:{
		type: Schema.Types.password,
		require: true
	},
	salt: {
		type: String,
		require: true
	},
	email: {
		type: Schema.Types.email,
		require: true
	},
	dob: {
		type: String,
		require: true
	},
	address: {
		line: {
			type: String,
			require: true
		},
		zip: {
			type: Number,
			require: true
		},
		state: {
			type: String,
			require: true
		},
		country: {
			type: String,
			require: true
		}
	},
	mobile: {
		type: Number,
		require: true
	},
	interestedGenre: [{
		type: String
	}],
	interestedPoet: [{
		type: Schema.Types.ObjectId,
		ref: 'poets'
	}],
	securityQuestion: {
		type: String,
		require: false
	},
	securityAnswer: {
		type: String,
		require: false,
	},
	memberSince: {
		type: Schema.Types.date,
		require: true,
		default: new Date()
	},
	deActivateAccount: {
		type: Boolean,
		require: true,
		default: defaultValue.DEACTIVATEACCOUNT
	},
	accountLocked: {
		type: Boolean,
		require: true,
		default: defaultValue.ACCOUNTLOCKED
	},
	markedToRemove: {
		type: Boolean,
		require: true,
		default: defaultValue.MARKEDTOREMOVE
	},
	deviceIds:[ deviceIds ],
	loginState: {
		type: String,
		require: true
	},

})

var users = mongoose.model("user", userSchema);

module.exports = users;