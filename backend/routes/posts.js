const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

router.get("/", async (req, res) => {
  const posts = await Post.getAll()
  if (posts) {
    res.json(posts)
  }else{
    res.sendStatus(500)
  }
});

router.post("/", async (req, res) => {
  const post = await Post.create(req.body)
  if (post) {
    res.json(post);
    return;
  }
  res.status(400).json({error: "Invalid body"})
});

router.get("/:id", async (req, res) => {
  const post = await Post.getOne(req.params.id)
  if (post) {
    res.json(post)
    
  }else{
    res.status(404).json({error: `Post with id ${req.params.id} not found`})
  }
  
})

router.patch("/:id", async (req, res) => {
  const post = await Post.update(req.body, req.params.id)
  if (post === false) {
    res.status(400).json({error: "Invalid body"})
  }else if(post === null){
    res.status(404).json({error: `Post with id ${req.params.id} not found`})
  }else{ 
    res.json({message: `Post ${req.params.id} updated`})
  }
  
})

router.delete("/:id", async (req, res) => {
  const post = await Post.delete(req.params.id)
  if (post) {
    res.json({message: `Post ${req.params.id} deleted`})    
  }else{ 
    res.status(404).json({error: `Post with id ${req.params.id} not found`})
  }
  
})

module.exports = router
