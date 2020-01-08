var express       = require("express");
var app           = express();
var bodyParser    = require("body-parser");
var mongoose      = require("mongoose");

mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb://localhost/yelp_camp",{useNewUrlParser: true});
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");


// SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
//     {
//         name: "Granite Hill", 
//         image:"http://cdn.dota2.com/apps/dota2/images/heroes/shredder_vert.jpg?v=5582916",
//         description: "This is Tiny who is able to grab a tree."
//     }
//     , function(err,campground){
//     if(err){
//         console.log(err);
//     } else{
//         console.log("NEWLY CREATED CAMPGROUND: ");
//         console.log(campground);
//     }
// })


app.get("/", function(req,res){
    res.render("landing");
})

// INDEX - show all campgrounds
app.get("/campgrounds", function(req,res){
    // Get all campgrounds from DB
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        } else{
            res.render("index", {campgrounds:allCampgrounds});
        }
    })
    // res.render("campgrounds", {campgrounds:campgrounds});
})


// CREATE - add new campground to DB
app.post("/campgrounds", function(req,res){
    //get data  from form and add to array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = {name: name, image: image, description: desc}
    // Create new campground and save to DB
    Campground.create(newCampground,function(err, newlyCreated){
        if(err){
            console.log(err);
        } else{
            //redirect back to campgrounds page
            res.redirect("/campgrounds");
        }
    })
})

// NEW - show form to create new campground
app.get("/campgrounds/new", function(req,res){
    res.render("new");
})

// SHOW - shows more info about one campground
app.get("/campgrounds/:id", function(req,res){
    // find the campgruond with provided id
    Campground.findById(req.params.id, function(err,foundCampground){
        if(err){
            console.log(err);
        } else{   
            // render show template with that campground
            res.render("show", {campground: foundCampground});
        }
    })

})

app.listen(3000, function(){
    console.log("The YelpCamp Server Started !");
})