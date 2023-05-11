const express = require("express");
require("dotenv").config();
const {userRoute}=require("./Routes/user.routes")
const { quizeroute}=require("./Routes/quize.routes")
const mongoose = require("mongoose");
const cors=require("cors")
const {application }=require("express")
const { connection}=require("./Config/db")
const app=express()

app.use(cors({
    origin:"*"
}))
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Welconm TO Home Page")
})
app.use("/user",userRoute)
app.use("/quize",quizeroute)

app.listen(process.env.port,async()=>{
  try {
    await connection
    console.log("Welcome to DB")
  } catch (error) {
    console.log(error)
    console.log("Unable To Connect To DB")
  }



})