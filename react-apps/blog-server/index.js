const express = require("express");
const app = express();
const fs = require("fs");

app.get("/posts/:pageId", (req, res) => {
  const pageId = req.params.pageId;
  fs.readFile("./data/db.json", (err, data) => {
    if (err) throw err;
    const post = JSON.parse(data);
    res.send(post);
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
