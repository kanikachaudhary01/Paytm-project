const mongoose = require("mongoose")
async function connectDB (){
try {
    const connection = await mongoose.connect(process.env.MONGO_URI)
    console.log("data base connected")
    
} catch (error) {
 console.log("error")   
}
}
module.exports=connectDB

// const mongoose =require("mongoose")
// mongoose.connect("mongodb://localhost:8000/paytm")

// const userSchema=mongoose.Schema({
//     username:String,
//     password:String,
//     firstname:String,
//     lastname:String,
// })
// const User = mongoose("User,userSchema")

// module.exports={
//     User
// }



