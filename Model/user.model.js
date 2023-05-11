const mongoose = require('mongoose');

const userSchima=mongoose.Schema({
email:String,
password:String
})

const UserModel=mongoose.model("user",userSchima)


module.exports={
    UserModel
}