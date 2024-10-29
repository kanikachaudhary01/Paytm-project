//Bearer Token
const { json } = require("express")
const jwt = require("jsonwebtoken")

const authMiddleware=(req,res,next)=>{
    const authHeader=req.headers.authorization
    if(!authHeader || !authHeader.startsWith ( "Bearer "))
       return res.status(400).json({
    msg:"invalid headers"
    })
    const token=authHeader.split(" ")[1]
    try {
        const decode=jwt.verify(token,process.env.SECRETKEY)
        req.userId = decode.userId
        next()
    } catch (error) {
        console.log(error)
    }

}
module.exports=authMiddleware