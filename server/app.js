const express = require("express");
require("./mongoConnect");
const blog = require("./models/blogModel");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/addBlog", async (req, res) => {
  let data = new blog(req.body);
  let result = await data.save();
  res.send(result);
});

app.get("/get", async (req, res) => {
  let data = await blog.find();
  res.send(data);
});

app.get("/get/:id", async (req, res) => {
  let result = await blog.findOne({ _id: req.params.id });
  if (result) {
    res.send(result);
  } else {
    res.send({ result: "Record not found" });
  }
});

app.delete("/delete/:id", async (req, res) => {
  let data = await blog.deleteOne(req.params);
  res.send("Done");
});

app.listen(5000);
