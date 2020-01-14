//This file is aimed to clean the DB and give it some initial data

var mongoose = require("mongoose");
var Cammpground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Jugg", 
        image: "http://cdn.dota2.com/apps/dota2/images/heroes/juggernaut_full.png?v=5594606?v=5594606",
        description: "No one has ever seen the face hidden beneath the mask of Yurnero the Juggernaut. It is only speculation that he even has one. For defying a corrupt lord, Yurnero was exiled from the ancient Isle of Masks--a punishment that saved his life. The isle soon after vanished beneath the waves in a night of vengeful magic. He alone remains to carry on the Isle's long Juggernaut tradition, one of ritual and swordplay. The last practitioner of the art, Yurnero's confidence and courage are the result of endless practice; his inventive bladework proves that he has never stopped challenging himself. Still, his motives are as unreadable as his expression. For a hero who has lost everything twice over, he fights as if victory is a foregone conclusion."
    },
    {
        name: "Sven", 
        image: "http://cdn.dota2.com/apps/dota2/images/heroes/sven_full.png?v=5594606?v=5594606",
        description: "Sven is the bastard son of a Vigil Knight, born of a Pallid Meranth, raised in the Shadeshore Ruins. With his father executed for violating the Vigil Codex, and his mother shunned by her wild race, Sven believes that honor is to be found in no social order, but only in himself. After tending his mother through a lingering death, he offered himself as a novice to the Vigil Knights, never revealing his identity. For thirteen years he studied in his father's school, mastering the rigid code that declared his existence an abomination. Then, on the day that should have been his In-Swearing, he seized the Outcast Blade, shattered the Sacred Helm, and burned the Codex in the Vigil's Holy Flame. He strode from Vigil Keep, forever solitary, following his private code to the last strict rune. Still a knight, yes...but a Rogue Knight. He answers only to himself."
    },
    {
        name: "Zeus", 
        image: "http://cdn.dota2.com/apps/dota2/images/heroes/zuus_vert.jpg?v=5594606",
        description: "Lord of Heaven, father of gods, Zeus treats all the Heroes as if they are his rambunctious, rebellious children. After being caught unnumbered times in the midst of trysts with countless mortal women, his divine wife finally gave him an ultimatum: 'If you love mortals so much, go and become one. If you can prove yourself faithful, then return to me as my immortal husband. Otherwise, go and die among your creatures.' Zeus found her logic (and her magic) irrefutable, and agreed to her plan. He has been on his best behavior ever since, being somewhat fonder of immortality than he is of mortals. But to prove himself worthy of his eternal spouse, he must continue to pursue victory on the field of battle."
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

