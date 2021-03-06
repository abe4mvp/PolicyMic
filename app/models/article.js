var mongoose = require('mongoose');


var articleSchema = new mongoose.Schema({
	title: { type: String, required: true, unique: true },
	body: { type: String, required: true },
	img: { type: String, required: true}
})

mongoose.model('Article', articleSchema);