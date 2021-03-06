var express = require('express');
var path = require("path");

var app = express();

app.use('/static', express.static(path.join(__dirname, "static")));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + "/static/index.html"));
});

app.listen(3000, () => {
  console.log("app is listening on port 3000");
});