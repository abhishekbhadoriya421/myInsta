const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Email: {
        type: String,
        required: true,
    },
    Password: {
        type: String,
        required: true
    },
    FullName: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});


const User = mongoose.model('User', userSchema);

module.exports = User;