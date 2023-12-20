const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHandler = require("../utils/ErrorHandling");
const User = require("../model/userModel");

exports.registerUser = catchAsyncErrors(async (req, res, next) => {
    // console.log(req.body);
    const {email} = req.body;
    const userMail = await User.findOne({email});
    if (userMail) {
        return next(new ErrorHandler("User Already Exist", 400))        
    }
    const createdUser = await User.create(req.body);
    res.status(201).json({ success: true, createdUser });

});

