var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
    {name: "Slamon Creek", image:"http://cdn.dota2.com/apps/dota2/images/heroes/tiny_full.png?v=5582916?v=5582916"},
    {name: "Granite Hill", image:"http://cdn.dota2.com/apps/dota2/images/heroes/shredder_vert.jpg?v=5582916"},
    {name: "Montain Goat's Rest", image:"http://cdn.dota2.com/apps/dota2/images/heroes/monkey_king_full.png?v=5582916?v=5582916"},
    {name: "Slamon Creek", image:"http://cdn.dota2.com/apps/dota2/images/heroes/tiny_full.png?v=5582916?v=5582916"},
    {name: "Granite Hill", image:"http://cdn.dota2.com/apps/dota2/images/heroes/zuus_vert.jpg?v=5582916"},
    {name: "Montain Goat's Rest", image:"http://cdn.dota2.com/apps/dota2/images/heroes/monkey_king_full.png?v=5582916?v=5582916"},
    {name: "Montain Goat's Rest", image:"http://cdn.dota2.com/apps/dota2/images/heroes/monkey_king_full.png?v=5582916?v=5582916"},
    {name: "Slamon Creek", image:"http://cdn.dota2.com/apps/dota2/images/heroes/tiny_full.png?v=5582916?v=5582916"},
    {name: "Granite Hill", image:"http://cdn.dota2.com/apps/dota2/images/heroes/zuus_vert.jpg?v=5582916"}
]

app.get("/", function(req,res){
    res.render("landing");
})

app.get("/campgrounds", function(req,res){
    res.render("campgrounds", {campgrounds:campgrounds});
})

app.post("/campgrounds", function(req,res){
    //get data  from form and add to array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image}
    campgrounds.push(newCampground);
    //redirect back to campgrounds page
    res.redirect("/campgrounds");
})

app.get("/campgrounds/new", function(req,res){
    res.render("new");
})


app.listen(3000, function(){
    console.log("The YelpCamp Server Started !");
})