const mongoose = require("mongoose")

const mongodb = ()=>{
    mongoose.connect("mongodb://127.0.0.1:27017/BookSharing")
    .then(()=>{
        console.log('Connected to Mangodb')
    })
    .catch((err)=>{
        console.log(err)
    })
}

module.exports = mongodb