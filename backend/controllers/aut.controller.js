const User = require("../models/users.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const login = async (req, res)=>{

    const {email:login, password} = req.body
    const user = await User.findOne({email:login})
    if(!user) return res.status(404).send({message:"email/password incorrect"})
    const isValid = await bcrypt.compare(password, user.password)
    if(!isValid) return res.status(404).send({message:"email/password incorrect"})
    const {password:p,firstName, lastName, email, _id, ...userInfo} = user.toJSON()
    const token = jwt.sign({firstName, lastName, email, _id}, process.env.SECRET_KEY)
    res.send({token, user})
}

const register = async (req, res)=>{
    const {password} =req.body
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = new User({...req.body, password:hashedPassword})
    user.save()
    res.send(user)

}

const verify =(req, res)=>{
    console.log("Verified")
}

module.exports ={
    login,
    register,
    verify,
}