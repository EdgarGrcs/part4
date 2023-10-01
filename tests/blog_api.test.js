const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
//const Blog = require("../models/bloglist");
const api = supertest(app);

test("returns correct amount of blogposts", async () => {
  const response = await api.get("/api/blogs");

  expect(response.body).toHaveLength(1);
});

test("")