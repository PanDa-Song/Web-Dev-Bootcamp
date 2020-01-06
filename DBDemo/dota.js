var mongoose = require("mongoose");

mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb://localhost/dota_app",{useNewUrlParser: true});

var dotaSchema = new mongoose.Schema({
    name: String,
    level: Number,
    type: String
});

var Hero = mongoose.model("Hero", dotaSchema);

// 1. add new cat into DB

// var jugg= new Hero({
//     name:"Crystal Maiden",
//     level: 10,
//     type: "Intelligence"
// });

// jugg.save(function(err, hero){
//     if(err){
//         console.log("Something went wrong!");
//     } else {
//         console.log("We just saved a hero to our database.");
//         console.log(hero);
//     }
// });

// Another Convinient Method
Hero.create({
    name: "Kunkka",
    level: 17,
    type: "Strength"
}, function(err,hero){
    if(err){
        console.log(err);
    } else{
        console.log(hero);
    }
})

// 2. retrive all cats from the DB and console.log each one


Hero.find({}, function(err, heros){
    if(err){
        console.log("Oh, Error!");
        console.log(err);
    } else{
        console.log("All The Heros...");
        console.log(heros);
    }
})