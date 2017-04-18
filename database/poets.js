/*
* @Author: nurulnabi
* @Date:   2017-04-18 22:49:54
* @Last Modified by:   nurulnabi
* @Last Modified time: 2017-04-18 23:12:44
*/

var defaultValue	= require('config/globalValues')['defaultData'];
var mongoose 		= require('mongoose');
var Schema   		= mongoose.Schema;

var poetSchema = new Schema({
	_id: {
		type: Schema.Types.ObjectId,
		require: true
	},
	name: {
		type: String,
		require: true
	},
	email: {
		type: Schema.Types.email
	},
	mobile: {
		type: Number
	},x
	takhallus: {
		type: String
	},
	dob: {
		type: Date,
		require: true,
		default: defaultValue.DOB
	},
	death: {
		type: Date
	},
	brief: {
		type: String
	}
});

var poets = mongoose.model("poet",poetSchema);

module.exports = poets;