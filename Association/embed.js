var mongoose = require("mongoose");
mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb://localhost/blog_demo",{useNewUrlParser: true});


//POST - title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
})
var Post = mongoose.model("Post", postSchema);

//USER - email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
})
var User = mongoose.model("User", userSchema);

// var newUser = new User({
//     email: "289127034@qq.com",
//     name: "guowei",
// })

// newUser.posts.push({
//     title:"It is a test",
//     content: "Just kidding. I am serious."
// })

// newUser.save(function(err, user){
//     if(err){
//         console.log(err);
//     } else{
//         console.log(user);
//     }
// })



// var newUser = new User({
//     email: "pandasong@usc.edu",
//     name: "panda song"
// })
// newUser.save(function(err,user){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// })

// var newPost = new Post({
//     title: "My happy weekend",
//     content: "It is not happy at all"
// })
// newPost.save(function(err,post){
//     if(err){
//         console.log(err);
//     } else{
//         console.log(post);
//     }
// })


User.findOne({name:"guowei"}, function(err,user){
    if(err){
        // console.log(err);
    } else{
        user.posts.push({
            title: "3 things I hate",
            content: "nothing, nothing, nothing."
        })
        user.save(function(err,user){
            if(err){
                console.log(err);
            } else{
                console.log(user);
            }
        })
    }
})