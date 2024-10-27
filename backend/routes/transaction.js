const express=require("express")
const authMiddleware=require("../middlewares/authMiddleware")
 const router=express.Router()

 router.post ("/balance",authMiddleware,(req,res)=>{
   return res.json("transaction")

 })
 module.exports=router
 