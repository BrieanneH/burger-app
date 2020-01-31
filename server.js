//referencing the catsApp class activity 

var express = require('express');
var expressHandlebars = require("express-handlebars");


//connecting port
var port = process.env.PORT || 8080;

var app = express();

//being able to view page visual content
app.use(express.static("public"));

//parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//using handlebars
app.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));
app.set("view engine",  "handlebars");

var routes = require("/controllers/burgerController");

app.use(routes);

app.listen(PORT, function () {
    console.log("Server listening on http://localhost:" + PORT);
});