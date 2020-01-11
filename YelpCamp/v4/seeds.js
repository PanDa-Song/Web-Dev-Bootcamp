//This file is aimed to clean the DB and give it some initial data

var mongoose = require("mongoose");
var Cammpground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Jugg", 
        image: "http://cdn.dota2.com/apps/dota2/images/heroes/juggernaut_full.png?v=5594606?v=5594606",
        description: "Power comes with deligence."
    },
    {
        name: "Sven", 
        image: "http://cdn.dota2.com/apps/dota2/images/heroes/sven_full.png?v=5594606?v=5594606",
        description: "He is the REAL MAN!!!"
    },
    {
        name: "Zeus", 
        image: "http://cdn.dota2.com/apps/dota2/images/heroes/zuus_vert.jpg?v=5594606",
        description: "God comes to the earth!"
    }
]


function seedDB(){
    //Remove all campgrounds
    Cammpground.deleteMany({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
        //Remove all comments
        Comment.deleteMany({}, function(err){
            if(err){
                console.log(err);
            }
            console.log("removed comments!");
            //add a few campgrounds
            data.forEach(function(seed){
                Cammpground.create(seed, function(err,campground){
                    if(err){
                        console.log(err);
                    } else {
                        console.log("added a campground");
                        //create a comment
                        Comment.create(
                            {
                                text: "This hero is powerful, but I think it not easy to play.",
                                author: "Homer"
                            }, function(err,comment){
                                if(err){
                                    console.log(err);
                                } else{
                                    campground.comments.push(comment);
                                    campground.save();
                                    console.log("created new comment");
                                }
                            })
                    }
                })
            })
        })
    })
}


module.exports = seedDB;

