const express = require("express");
const favicon = require("express-favicon");
const path = require("path");
const https = require("https");
const http = require("http");
const fs = require("fs");
// Defining the Express app
const app = express();
// const env = require("./src/config/envfile_connect");
app.use(express.static(path.join(__dirname, "/build")));
app.use(favicon(__dirname + "/build/favicon.ico"));
app.get("/ping", (req, res) => {
  return res.send("pong");
});
app.get("*", (req, res) => {
  // res.send(process.env);
  res.sendFile(path.join(__dirname + "/build/index.html"), {
    env: process.env
  });
});


const PORT = 3000;
app.listen(PORT, () => { });

