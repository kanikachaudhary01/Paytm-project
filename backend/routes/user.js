const express =require("express")
const zod =require("zod")
const User =require("../models/userModel")
const router =express.Router()

// router.post("/signup")

const signupSchema = zod.object({
    name:zod.string(),
    email:zod.string().email(),
    password:zod.string().min(6)
})

router.post("/signup",async(req,res)=>{
   const {success} = signupSchema.safeParse(req.body)
   if(!success){
    return res.status(400).json({
        msg:"invalid inputs"
    })

   }
  const existedUser=await User.findOne({email:req.body.email})
  if(existedUser){
    return res.status(400).json({
        msg:"emaill already exist"
    })
  }
  const newUser=await User.create({name:req.body.name,email:req.body.email,password:req.body.password})
  res.status(200).json({msg:"new user created successfuly",newUser:newUser})


})

const loginSchema=zod.object({
    email:zod.string().email(),
    password:zod.string().min(6)

})

router.post("/login",async(req,res)=>{
 const success=loginSchema.safeParse(req.body)
 if(!success){
    res.status(400).json({
        msg:"invalid inputs"
    })
    return
 }
 const existingUser=await User.findOne({email:req.body.email})
 if(!existingUser){
    return res.status(400).json({
        msg:"user does not exist"
    })
 }
 res.status(200).json({
    msg:"user successfully logged in "
 })
})


module.exports=router;