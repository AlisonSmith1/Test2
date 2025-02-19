const express = require("express");
const app = express();
const path = require("path");

//serving a static file
//middleware
app.use(express.static("public"));

//handle different request
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/wilson", (req, res) => {
  res.send("This is Wilson's page.");
});

app.get("/mike", (req, res) => {
  res.status(302);
  res.sendFile(path.join(__dirname, "moved.html"));
});

app.get("*", (req, res) => {
  res.status(404);
  // console.log(res.statusCode);
  res.sendFile(path.join(__dirname, "error.html"));
});

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
