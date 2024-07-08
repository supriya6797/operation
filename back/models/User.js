const mongoose = require('mongoose') ;
const UserSchema = new mongoose.Schema({
    name:String,
    mobile:String,
    email:String
})
const UserModel = mongoose.model("User", UserSchema)

module.exports= UserModel