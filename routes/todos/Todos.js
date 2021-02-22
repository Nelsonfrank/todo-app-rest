const express = require("express");
const Post = require("../../models/todos/Todo");
const routes = express.Router();

// GET ALL TODOS
routes.get("/", async (req, res) => {
	try {
		const posts = await Post.find();
		res.json(posts);
	} catch (error) {
		res.json({ message: error });
	}
});

// GET SPECIFIC TODO
routes.get("/:todoId", async (req, res) => {
	try {
		const posts = await Post.findById(req.params.todoId);
		res.json(posts);
	} catch (error) {
		res.json({ message: error });
	}
});

// POST  TODO
routes.put("/", async (req, res) => {
	const post = new Post({
		title: req.body.title,
		description: req.body.description,
	});
	try {
		const savedPost = await post.save();
		res.json(savedPost);
	} catch (error) {
		res.json({ message: error });
	}
});

// DELETE SPECIFIC TODO ITEM
routes.delete("/:todoId", async (req, res) => {
	try {
		const removedPost = await Post.remove({ _id: req.params.todoId });
		res.json(removedPost);
	} catch (error) {
		res.json({ message: error });
	}
});

routes.patch("/", async (req, res) => {
	try {
		const removedPost = await Post.updateOne(
			{ _id: req.params.todoId },
			{ $set: { title: req.body.title, description: res.body.description } }
		);
		res.json(removedPost);
	} catch (error) {
		res.json({ message: error });
	}
});

module.exports = routes;
