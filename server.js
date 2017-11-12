var express = require("express");

var methodverride = require("method-override");

var bodyParser = require("body-parser");


var app = express();
var port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

app.get("/", function(req, res) {
  connection.query("SELECT * FROM tasks;", function(err, data) {
    if (err) throw err;
    res.render("index", { tasks: data });
  });
});

app.post("/", function(req, res) {
  connection.query("INSERT INTO tasks (task) VALUES (?)", [req.body.task], function(err, result) {
    if (err) throw err;
    res.redirect("/");
  });
});

app.listen(port);