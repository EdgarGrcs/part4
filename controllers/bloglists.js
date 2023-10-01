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

blogRouter.delete("/:id", async (request, response) => {
  const deletedBlog = await Blog.findByIdAndRemove(request.params.id);
  response.status(204).json();
});

blogRouter.patch("/:id", async (request, response) => {
  const body = request.body;

  console.log("body",body);

  const blog = {
    title: body[0].title,
    author: body[0].author,
    url: body[0].url,
    likes: body[0].likes,
  };

  console.log(blog);

  const updatedBlog = await Blog.findByIdAndUpdate(request.params.id, blog, {
    new: true,
  });
  response.status(204).json(updatedBlog);
});

module.exports = blogRouter;
