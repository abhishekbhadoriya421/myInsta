const db = require('../models/user');

// Profile Section
module.exports.profile = function(req,res){
    if (req.isAuthenticated()){
        return res.render('user_profile');
    }
    else{
        return res.render('user_sign_in')
    }
};

// Render Sign In page
module.exports.signIn = function(req,res){
    res.render('user_sign_in',{
        title : 'signIn'
    });
}

// Render Sign up page
module.exports.signUp = function(req,res){
    res.render('user_sign_up',{
        title : 'signIn'
    });
}


// If email Exist then it will return null otherwise return its value
async function isEmailExist(userEmail){
    try{
        const Result = await db.findOne({Email : userEmail})
        return Result;
    }
    catch(err){
        console.log("Error Occurred while Checking Email",err);
    }
}

module.exports.create = async function(req,res){
    try{
    let userData = req.body;
    // First Check If password and confirm password is same or not
    if(req.body.Password != req.body.ConfirmPassword){
        // Send Again To signUp page
        return res.redirect('back');
    }
    
    // Check if email is exist or not
    let isExist = await isEmailExist(userData.Email);
    if(isExist!=null){
        // Send Again To signUp page
        return res.redirect('back');
    }

    // Else We are ready to create new account
    const user = db({
        Email : userData.Email,
        Password : userData.Password,
        FullName : userData.FullName
    });

    user.save()
    .then((data)=>{
        console.log("Submitted Data");
        res.render('user_sign_in',{
            title : 'successfully created'
        })
    });

    }   
    catch (err){
        console.log('Error Occurred',err)
    }
}

// Log In
module.exports.createSession = function(req,res){
    return res.redirect('/');  
}

// Sign Out
module.exports.destroySession = function(req,res){
    req.logout(function(err) {
        if (err) {
            return next(err); 
        }
        return res.redirect('/');
      });
}