const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name']
    },
    email: {
        type: String,
        required: [true, 'Please provide email'],
        unique: true
    },
    mobile: {
        type: Number,
        required: [true, 'Please provide mobile number'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please provide password']
    },
    Active: {
        type: Boolean,
        default: true
    }
},
    {
        timestamps: true
    })

const UserModel = mongoose.model('user', userSchema)
module.exports = UserModel    