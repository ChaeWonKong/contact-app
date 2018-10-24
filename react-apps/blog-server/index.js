const express = require("express");
const app = express();
const fs = require("fs");
const _ = require("lodash");
const path = require("path");
const bodyParser = require("body-parser");

app.use("/images", express.static("images"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/posts/:pageId", (req, res) => {
  const pageId = req.params.pageId;
  fs.readFile("./data/db.json", (err, data) => {
    if (err) throw err;
    const posts = JSON.parse(data).posts;
    const targetIndex = _.indexOf(posts, _.find(posts, { id: pageId }));
    const output = { ...posts[targetIndex] };
    res.send(JSON.stringify(output));
  });
});

app.get("/", (req, res) => {
  res.send("Hello Express Server~ Please go to /posts/0");
});

app.post("/new");

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Express server running");
});
