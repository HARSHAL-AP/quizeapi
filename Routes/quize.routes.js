const mongoose = require("mongoose");
const express = require("express");
require("dotenv").config();
const {Quizsmodel}=require("../Model/quize.model")

const quizeroute=express.Router();

quizeroute.get("/get",async(req,res)=>{
const data=await Quizsmodel.find()
res.send(data)

})
quizeroute.get("/get/:id",async(req,res)=>{
let id=req.params.id


try {
    const data=await Quizsmodel.find({_id:id})
res.send(data)
} catch (error) {
    res.send("Somthing Went Wrong...")
}

})

quizeroute.post("/post",async(req,res)=>{
const data=req.body

try {
    const quize=new Quizsmodel({
        data
    })
    await quize.save()
    res.send("Quize Creaated Sucsessfully...")
    
} catch (error) {
    res.send("Somthing Went Wrong...")
}
    
})


quizeroute.delete("/delete/:id",async(req,res)=>{
    let id=req.params.id

    try {
        const data=await Quizsmodel.findByIdAndDelete({_id:id})
    res.send("Quize Deleted Sucsessfully....")
    } catch (error) {
        res.send("Somthing Went Wrong...")
    }
    
    
})


quizeroute.put("/put",async(req,res)=>{

    
})


quizeroute.patch("/patch",async(req,res)=>{

    
})




module.exports = {
    quizeroute
  };