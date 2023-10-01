const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
//const Blog = require("../models/bloglist");
const api = supertest(app);
const helper = require("./test_helper");
const Blog = require("../models/bloglist");

beforeEach(async () => {
  await Blog.deleteMany({});

  const blogObjects = helper.initialBlogs.map((blog) => new Blog(blog));
  const promiseArray = blogObjects.map((blog) => blog.save());
  await Promise.all(promiseArray);
});

test("returns correct amount of blogposts - 4.8", async () => {
  const response = await api.get("/api/blogs");
  expect(response.body).toHaveLength(helper.initialBlogs.length);
});

test("unique identifier property is named id - 4.9", async () => {
  const blog = await Blog.find({});
  expect(blog[0]._id).toBeDefined();
});

test("post request creates a new blog post - 4.10", async () => {
  const testData = {
    title: "From the land down under",
    author: "Aussie Mate",
    url: "aussie4lyf.aus",
    likes: "420",
  };

  await api.post("/api/blogs").send(testData).expect(201);
}, 100000);

test("likes property defaults to zero when missing - 4.11", async () => {
  const testData = {
    title: "From the land down under",
    author: "Aussie Mate",
    url: "aussie4lyf.aus",
  };

  await api.post("/api/blogs").send(testData).expect(201);

  const response = await api.get("/api/blogs");
  expect(response.body[0].likes).toBe(0);
}, 100000);

test("return 400 if title and url are missing - 4.12", async () => {
  const testData = {
    author: "Aussie Mate",
    likes: 1,
  };

  await api.post("/api/blogs").send(testData).expect(400)
}, 100000);
