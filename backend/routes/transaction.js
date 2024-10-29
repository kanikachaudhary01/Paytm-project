const express=require("express")
const authMiddleware=require("../middlewares/authMiddleware")
const Wallet = require("../models/walletModel")
const { object } = require("zod")
const { default: mongoose } = require("mongoose")
 const router=express.Router()

 router.get ("/balance",authMiddleware, async (req,res)=>{
 try {
    const account=await Wallet.findOne({userId:req.userId,})
    res.status(200).json({
        msg:"balance is patched",account:account.balance.toFixed(2)

    })
 } catch (error) {
  res.status(400).json({
    msg:"unable to fetch balance"
  })  
 }

 })

router.post("/transfer",authMiddleware,async(req,res)=>{
    const session=await mongoose.startSession()
    session.startTransaction()

try {
    const { amount, to } = req.body
    const account=await Wallet.findOne({
      userId:req.userId  
    }).session(session)
    if(!account || account.balance<amount){
        await session.abortTransaction()
        session.endSession()
        res.status(400).json(
            {
                msg:"insufficient balance"
            }
        )
    }
    const receiver=await Wallet.findOne({
        userId:to  
      }).session(session)
      if(!receiver){
          await session.abortTransaction()
          session.endSession()
          res.status(400).json(
              {
                  msg:"receiver do not exist"
              }
          )
      }

      await Wallet.updateOne({userId:req.userId},{$inc:{balance:-amount}}).session(session)
      
      await Wallet.updateOne({userId:to},{$inc:{balance:amount}}).session(session)
      await session.commitTransaction()
      session.endSession()
      res.status(200).json({
        msg:"payment successful"
      })
} catch (error) {
    await session.abortTransaction()
    session.endSession()
    res.status(400).json({
        msg:"payment unsuccessful"
    })
}
})


 module.exports=router
 