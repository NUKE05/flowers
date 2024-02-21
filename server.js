const express = require("express");
const axios = require('axios');
const bodyParser = require("body-parser");

const app = express();
app.use(express.static('public'));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/flower", (req, res) => {
    res.render("flower");
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

