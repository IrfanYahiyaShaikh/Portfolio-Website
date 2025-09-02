const express = require("express");
const app = express();
const path = require("path");
app.engine('html', require('ejs').renderFile);


let port = 8080;

app.listen(port, () => {
    console.log("app is listening");
});

app.use(express.static( path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    res.render("index.html");
});

app.get("/about", (req, res) => {
    res.render("about.html");
});

app.get("/resume", (req, res) => {
    res.render("resume.html");
});

app.get("/project", (req, res) => {
    res.render("project.html");
});
