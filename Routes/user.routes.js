const mongoose = require("mongoose");
const express = require("express");
require("dotenv").config();
const { UserModel } = require("../Model/user.model");
const bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');
const userRoute = express.Router();

userRoute.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.find({ email: email });
  if (user.length > 0) {
    res.send("User with this Email Already exist");
  } else {
    try {
      bcrypt.hash(password, 5, async (err, hash) => {
        if (err) {
          res.send("bcrypt error");
          console.log(err);
        } else {
          const newuser = new UserModel({
            email,
            password: hash,
          });
          await newuser.save();
          res.send("User Registerd Sucsessfully.....");
        }
      });
    } catch (error) {
      console.log(error);
      res.send(" error");
    }
  }
});

userRoute.post("/login", async (req, res) => {

    const { email, password } = req.body;
    const user = await UserModel.find({ email: email });
  if(user.length<=0){
    res.send("User with this Email Not Exist Please Signup TO continew..");
  }
  else{
    try {
        bcrypt.compare(password, user[0].password,async(err, result)=> {
         if(err){
            res.send("bcrypt error");
            console.log(err);
         }   
         else{
         const token=jwt.sign({userID:user._id},process.env.key)
         res.send({
            token:token,
            user:{
                email:email
            }
         })

         }
       


        });
    } catch (error) {
        console.log(error);
        res.send(" error");
    }
  }








});

module.exports = {
  userRoute,
};
