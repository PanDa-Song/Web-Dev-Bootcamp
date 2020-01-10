var mongoose = require("mongoose");
mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb://localhost/blog_demo_2",{useNewUrlParser: true});


var Post = require("./models/post");
var User = require("./models/user");



Post.create({
    title: "How to success pt.4",
    content: "bla bla bla bla bla bla bla"
},function(err,post){
    User.findOne({email:"2891@qq.com"},function(err,foundUser){
        if(err){
            console.log(err);
        } else{
            foundUser.posts.push(post);
            foundUser.save(function(err,data){
                if(err){
                    console.log(err);
                } else{
                    console.log(data);
                }
            })
        }
    })
})

// User.create({
//     email: "2891@qq.com",
//     name: "guowei"
// })



//Find User
//find all posts for that user

// User.findOne({email:"2891@qq.com"}).populate("posts").exec(function(err,user){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// })