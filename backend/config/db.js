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






