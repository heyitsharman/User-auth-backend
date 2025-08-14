const express = require("express");
const connectDB = require("./db/connectDb");
const app = express();
const PORT = 4000;
const authRouter = require('./routes/auth.routes');

require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    
})
app.use("/auth",authRouter);

connectDB().then(()=>{
  app.listen(PORT, () => console.log("Server running on port " + PORT));
}).catch((error)=>console.log(error))
