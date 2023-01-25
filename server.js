var express = require("express"),
  app = express(),
  port = process.env.PORT || 8080,
  bodyParser = require("body-parser"),
  controller = require("./controller");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.bodyParser());

var routes = require("./routes");
routes(app);

app.listen(port);
console.log("Learn Node JS With Kiddy, RESTful API server started on: " + port);
