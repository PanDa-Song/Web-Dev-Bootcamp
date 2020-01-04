var express = require("express");
var app = express();

app.get("/", function(req,res){
    res.send("Hi, there!");
});

app.get("/bye", function(req,res){
    res.send("Goodbye!!!");
});

app.get("*", function(req,res){
    res.send("We cannot find this page. Try another.");
});

app.listen(3000);