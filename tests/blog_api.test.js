const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
//const Blog = require("../models/bloglist");
const api = supertest(app);
const helper = require("./test_helper");
const Blog = require("../models/bloglist");


beforeEach(async () => {
    await Blog.deleteMany({});

    const blogObjects = helper.initialBlogs.map(blog => new Blog(blog));
    const promiseArray = blogObjects.map(blog => blog.save());
    await Promise.all(promiseArray);
})


test("returns correct amount of blogposts - 4.8", async () => {
  const response = await api.get("/api/blogs");
  expect(response.body).toHaveLength(helper.initialBlogs.length);
});

test("unique identifier property is named id - 4.9", async () => {
    const blog = await Blog.find({});
    expect(blog[0]._id).toBeDefined();
})