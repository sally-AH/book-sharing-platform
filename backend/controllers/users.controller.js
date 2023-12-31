const User = require("../models/users.model")

const getAllUsers = async (req, res)=>{
    const users = await User.find()
    res.send(users)
}

const getAllFollowers = async (req, res)=>{
    const users = await User.followers
    res.send(users)
}

const getAllFollowings = async (req, res)=>{
    const users = await User.followings
    res.send(users)
}

const getProfile = async (req, res)=>{
    const user = await User.findById(req.user._id)
    res.send(user)
}

module.exports ={
    getAllUsers,
    getProfile,
    getAllFollowers,
    getAllFollowings,

}