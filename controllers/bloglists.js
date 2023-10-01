const blogRouter = require("express").Router();
const Blog = require("../models/bloglist");

blogRouter.get("/", async (request, response) => {
  const blogs = await Blog.find({});
  response.json(blogs);
});

blogRouter.post("/", async (request, response) => {
  const Blog = new Blog(request.body);

  const savedBlog = await Blog.save();
  response.status(201).json(savedBlog);
});

module.exports = blogRouter;
