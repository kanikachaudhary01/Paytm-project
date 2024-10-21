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
  const existedUser=await User.find({email:req.body.email})
  if(existedUser){
    return res.status(400).json({
        msg:"emial already exist"
    })
  }
  const newUser=await User.create({name:req.body.name,email:req.body.email,password:req.body.password})
  res.status(200).json({msg:"new user created successfuly",newUser:newUser})


})

// router.post("/signup", async (req,res)=>{
// const body =req.body;
// const {success} = signupSchema.safeParse(req.body)
// if(!success){
// return res.json({
//     message:"Email already taken / incorrect inputs"
// })

// }

// const user=User.findOne({
//     useraname:body.useraname
// })

// if (user._id){
//     return res.json({
//         message:"Email already taken / incorrect inputs"
//     })
// }

// await User.create({

// })
// })

module.exports=router;