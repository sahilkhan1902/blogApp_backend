const mongoose = require("mongoose");
 
require("dotenv").config();

const connectDb =()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParse:true,
        useUnifiedTopology:true
    })
    .then(console.log("Connection Successfull"))
    .catch((err)=>{
        console.log("Server Connection Has Some Issue");
        console.log(err)
        process.exit(1);
    })
}
modules.exports=connectDb;