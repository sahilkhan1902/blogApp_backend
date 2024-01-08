const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const blog = require("./routes/blog")

app.use("/api/v1", blog)

const connecWithtDb = require("./config/database")
connecWithtDb();

app.listen(PORT,()=>{
console.log(`Server Started At Port no ${PORT}`)
})

app.get('/',(req,res)=>{
    res.send("<h1>This is home page</h1?")
})