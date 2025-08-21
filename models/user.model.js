const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required : true
    },
    email:{
        type:String,
        unique:true,
        required: true
    },
    password:{
        type: String,
        required: true,
        minLength : 6,
        select : false  
    },
   role:{
    type: String,
    enum:["user","admin"],
    default:"user",
    select:false
   }
}
,
    {
        timestamps: true
    }
)

const User = mongoose.model("user",userSchema);
module.exports = User;