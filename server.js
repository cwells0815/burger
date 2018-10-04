//dependencies
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

//set up express
var app = express();

//set up port
var PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));


//handlebars
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

//pull in routes
var routes = require("./controllers/burgers_controller.js");

app.use(routes); //This does not work.

///start server listening
app.listen(PORT, function() {
    console.log("Server listeninig on PORT: http://localhost" + PORT);
});