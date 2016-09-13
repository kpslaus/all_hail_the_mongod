var mongoose = require('mongoose');
var schema = mongoose.schema;

var TimesSchema = new schema({
	title: {
		type: String,
		required: true
	},

	link: {
		type: String,
		required: true
	},

	note: {
		type: Scheme.Types.ObjectId,
		ref: 'Note'
	}
);

var Article = mongoose.model('Article', TimesSchema);
console.log("I hope I'm on the right track");

module.exports = Article;