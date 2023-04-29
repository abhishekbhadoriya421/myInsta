const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/my_Insta_Contact');

const db = mongoose.connection;

db.on('error',console.error.bind(console, "Error connecting to MongoDB"));

db.once('open',()=>{
    console.log("Connected To Data Base");
})