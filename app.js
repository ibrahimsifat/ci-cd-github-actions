const express = require("express");
const app = express();

app.get("/", (_req, res) => {
  res.status(201).send("Hello World!");
});

module.exports = app;
