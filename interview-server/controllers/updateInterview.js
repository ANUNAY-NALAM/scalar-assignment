import express from "express";
// import Users from "../models/users.js";
import Interviews from "../models/interviews.js";
import { sendError } from "../helper.js";
import mongoose from "mongoose";

const updateInterview = async(req,res)=>{
    const {id,start_time,end_time,users} = req.body
    console.log(id)
    // let currAdmin = await Users.findOne({ email });
    // if (!currAdmin) {
    //   return sendError(res, "Invalid Email");
    // }
    // if (password!==currAdmin.password) { 
    //   sendError(res, "Mismatched Email ID or Password!"); 
    // } 
    // const curr_users = users
    if(users.length<2) sendError(res,"A minimum of 2 participants are required to initiate a interview")
    let interviews = await Interviews.find({start_time:{$gte:start_time,$lte:end_time}})
    for (let i in interviews){
        if(id == interviews[i]._id) continue
        console.log(interviews[i]._id)
        for(let u in interviews[i].users){
            if(users.includes(users[u])) sendError(res,"A user in the group already has a interview scheduled at this time:(")
        }
    }
    // _id : mongoose.Types.ObjectId(id)
    const new_interview =  await Interviews.findOne({}) 
    // const new_interview = await Interviews.findOne({users})
    console.log()
    new_interview.start_time = start_time 
    new_interview.end_time = end_time
    await new_interview.save()


    res.json({success:true, message:"Interview rescheduled succesfully"})
}





const router = express.Router();

router.post('/',updateInterview)


export default router