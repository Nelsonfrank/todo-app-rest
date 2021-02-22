const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	description: String,
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model("Todos", TodoSchema);
