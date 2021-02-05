const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

router.get("/", async (req, res) => {
  const blogs = await Post.getAll();
  if (blogs) {
    res.json(blogs);
    return;
  }
  res.status(403);
});

router.post("/", async (req, res) => {
  const blog = await Post.create(req.body);
  if (blog) {
    res.json(blog);
    return;
  }
  res.status(500);
});

router.get("/:id", async (req, res) => {
  const blog = await Post.getOne(req.params.id);
  if (blog) {
    res.json(blog)
    
  }else{res.status(403);}
  
});

router.patch("/:id", async (req, res) => {
  const blogs = await Post.update(req.body, req.params.id);
  if (blogs) {
    res.json({message: `Post ${req.params.id} updated`})
  }else{ res.status(403); }
  
});

router.delete("/:id", async (req, res) => {
  const blogs = await Post.delete(req.params.id);
  if (blogs) {
    res.json({message: `Post ${req.params.id} deleted`})    
  }else{ res.status(403); }
  
});

module.exports = router;
