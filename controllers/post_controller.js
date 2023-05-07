const Posts = require('../models/post');

module.exports.createPost = function(req,res){
    if(!res.locals.user){
        return res.redirect('back');
    }
    const post = Posts({
        Content : req.body.Content,
        User : res.locals.user.id
   });

   post.save()
    .then((data)=>{
        console.log("PostData SuccessFull");
        res.render('home',{
            message : 'Post Data SuccessFull',
        })
    }).catch((err)=>{
        console.log('Error Occurred',err);nodemon
    })
}