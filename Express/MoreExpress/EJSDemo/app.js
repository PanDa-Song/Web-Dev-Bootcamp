var express = require("express");
var app = express();

// tells the express to serve the files in this directory
app.use(express.static("public"));
// tells the express files in view dir be auto-regarded as ejs files
// to make 'res.render("xxx.ejs")' --> 'res.render("xxx")' 
app.set("view engine", "ejs")

app.get("/", function(req,res){
    res.render("home")
})

app.get("/fallinlovewith/:thing",function(req,res){
    var thing = req.params.thing;
    res.render("love", {thingVar: thing});
});

app.get("/posts", function(req,res){
    var posts = [
        {title: "Post 1", author:"Susan"},
        {title: "Post 2", author:"David"},
        {title: "Post 3", author:"Jacky"},
    ];
    res.render("posts", {posts: posts});
})

app.listen(3000);