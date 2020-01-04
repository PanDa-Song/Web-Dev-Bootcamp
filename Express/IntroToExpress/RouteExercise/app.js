var express = require("express");
var app = express();

app.get("/", function(req,res){
    res.send("Hi there, welcome to my exercise!!!");
});

app.get("/speak/:animal", function(req,res){
    var sounds = {
        pig: "Oink",
        dog: "Woof",
        cow: "Moo"
    }
    var animal = req.params.animal;
    res.send("The " + animal + " says " + sounds[animal]);
});

app.get("/repeat/:message/:times", function(req,res){
    var result = "";
    var message = req.params.message;
    var times = Number(req.params.times);
    for (var i = 0; i < times; i++){
        result += message + " ";
    }
    res.send(result);
})

app.listen(3000);