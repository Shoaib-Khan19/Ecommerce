const mongoose = require("mongoose");

const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    name:{
        type : String,
        required: [true,"Please Enter Your Name"]
    },
    email:{
        type : String,
        required: [true,"Please Enter Your Email"],
        unique:[true,"Email Already Exist please provide another"]
    },
    password:{
        type : String,
        required:[true,"Please provide Password"],
        minLength:[4,"password must be at least 4 characters"],
        select: false,
    },
    phoneNumber:{
        type: Number,
        required:[true,"Please enter a valid number"],
    },
    role:{
        type:String,
        default:"User",
    },
    createdAT:{
        type: Date,
        default: Date.now()
    },
    resetPasswordToken:String,
    resetPasswordTime:Date
});

userSchema.pre('save', async function () {
    if(!this.isModified){
        next();
    }
    this.password = await bcrypt.hash(this.password, 10)
})
module.exports = mongoose.model('User',userSchema)