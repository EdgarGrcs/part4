const blogRouter = require("express").Router();
const Blog = require("../models/bloglist");

blogRouter.get("/", async (request, response) => {
  const blogs = await Blog.find({});
  response.json(blogs);
});

blogRouter.post("/", async (request, response) => {
  if (!request.body.likes) {
    request.body.likes = 0;
  }

  if (!request.body.title || !request.body.url) {
    response.status(400).json();
  }

  console.log(request.body);

  const Blog = new Blog(request.body);

  const savedBlog = await Blog.save();
  response.status(201).json(savedBlog);
});

module.exports = blogRouter;
