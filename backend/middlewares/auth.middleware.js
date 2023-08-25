const jwt = require("jsonwebtoken")

const authMiddleware = (req, res, next)=>{
    const token = req.headers.authorization?.split(" ")[1]
    if(!token) return res.status(401).send({message: "unauthorized"})
    try{
        const decode = jwt.verify(token, process.env.SECRET_KEY)
        req.user = decode
        console.log("Verified")
        next();
    }catch (errr){
        return res.status(401).send({message: "unauthorized"})
    }
    

}

module.exports = authMiddleware