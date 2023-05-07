const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const MongoStore = require('connect-mongo');
const sassMiddleware = require('node-sass-middleware');
// Used for session cookie
// Sass MiddleWare
app.use(sassMiddleware({
src: './assets/scss',
dest: './assets/css',
debug: true,
outputStyle: 'expanded',
prefix: '/css'
}));

app.use(express.json());
app.use(express.urlencoded({extended:false}));

// using Cookies middleWare
app.use(cookieParser());

// view the static file
app.use(express.static('assets'));
// setting Page Layout
app.use(expressLayouts);
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

// Template View engine
app.set('view engine', 'ejs');
app.set('views','./views');

// Create session
app.use(session({
    name: 'myInsta',
    // TODO
    secret: 'abcd',
    saveUninitialized: false,
    resave: false,
    cookie :{
        maxAge: (1000 * 60 * 100)
    },
    store: MongoStore.create({
        mongoUrl: 'mongodb://localhost/my_Insta_Contact',
        autoRemove: 'disabled'
     },
        function(err){
            console.log(err ||  'connect-mongodb setup ok');
        }  
    )

})
);
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);
app.use(flash());


// Main Route 
app.use('/', require('./routes/index'));
app.listen(port,(err)=>{
    if(err){
        console.log('There is an Error',err);
        return;
    }
    console.log('Running at Port: ',port);
});