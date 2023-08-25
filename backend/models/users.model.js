const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    title: String,
    genre: Date,
    author: [genreSchema],
    review: String
},{
    timestamps :true
})


const genreSchema = new mongoose.Schema({
    name: String,
},{
    timestamps :true
})


const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        unique: true,
    },
    password: String,
    country: String,
    user_type:{
        type:String,
        enum: ["USER", "ADMIN"],
        default: "USER",
    },
    following: [userSchema],
    followers: [userSchema],
    books: [bookSchema]
},{
    timestamps :true
})



const model = mongoose.model("User", userSchema)
module.exports = model;