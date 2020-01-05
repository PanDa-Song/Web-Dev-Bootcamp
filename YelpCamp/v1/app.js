var express = require("express");
var app = express();
app.set("view engine", "ejs");

app.get("/", function(req,res){
    res.render("landing");
})

app.get("/campgrounds", function(req,res){
    var campgrounds = [
        {name: "Slamon Creek", image:"http://cdn.dota2.com/apps/dota2/images/heroes/tiny_full.png?v=5582916?v=5582916"},
        {name: "Granite Hill", image:"http://cdn.dota2.com/apps/dota2/images/heroes/puck_full.png?v=5582916?v=5582916"},
        {name: "Montain Goat's Rest", image:"http://cdn.dota2.com/apps/dota2/images/heroes/monkey_king_full.png?v=5582916?v=5582916"}
    ]
    res.render("campgrounds", {campgrounds:campgrounds});
})

app.listen(3000, function(){
    console.log("The YelpCamp Server Started !");
})