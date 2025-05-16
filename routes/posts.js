const express = require("express");
const Post = require("../models/Post");
const router = express.Router();

// Create a post
router.post("/", async (req, res) => {
  const { author, content } = req.body;
  const post = await Post.create({ author, content });
  res.status(201).json(post);
});

// Get all posts
router.get("/", async (req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 });
  res.json(posts);
});

module.exports = router;
