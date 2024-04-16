const mongoose=require("mongoose")

const conectToMongoDb=async ()=>{
try{
   await mongoose.connect(process.env.MONGO_DB_URI)
   console.log("Connected to MongoDb")
}
catch(error){

   console.log("Error connecting ti MongoDb",error.message)
}
}

module.exports=conectToMongoDb
