const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

const routes = require("./controllers/scrapedcontroller.js");
const bodyParser = require("body-parser");
app.use(routes);

app.listen(PORT, function () {
    console.log("listening on port: " + PORT);
});