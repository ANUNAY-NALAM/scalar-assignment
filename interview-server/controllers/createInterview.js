import express from "express";
// import Users from "../models/users.js";
import Interviews from "../models/interviews.js";
import { sendError } from "../helper.js";

const createInterview = async(req,res)=>{
    const {start_time,end_time,users} = req.body
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
        // console.log(interviews[i].users)
        // console.log(curr_users)
        for(let u in interviews[i].users){
            if(users.includes(users[u])) sendError(res,error="A user in the group already has a interview scheduled at that time:(")
        }
    }
    let newInterview = new Interviews({
        start_time,
        end_time,
        users
    }) 
    await newInterview.save()

    res.json({success:true, message:"Interview added succesfully"}) 
}





const router = express.Router();

router.post('/',createInterview)


export default router