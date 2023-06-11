const blogRouter = require("express").Router();
const Blog = require("../models/bloglist");

blogRouter.get('/', (request, response) => {
  Blog
    .find({})
    .then(blogs => {
      response.json(blogs)
    })
})

blogRouter.post('/', (request, response) => {
  const Blog = new Blog(request.body)

  Blog
    .save()
    .then(result => {
      response.status(201).json(result)
    })
})

module.exports = blogRouter;