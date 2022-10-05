import express from "express";
import Users from "../models/users.js";
import Interviews from "../models/interviews.js";
import { sendError } from "../helper.js";

const getInterview = async(req,res)=>{
    // const {email,password} = req


    // let currAdmin = await Users.findOne({ email });
    // if (!currAdmin) {
    //   return sendError(res, "Invalid Email");
    // }
    // if (password!==currAdmin.password) {
    //   sendError(res, "Mismatched Email ID or Password!");
    // } 

    // {start_time:{ $gte: Date.now() }}
    let interviews = await Interviews.find().exec()

    res.json({interviews})
}

 



const router = express.Router();

router.get('/',getInterview)


export default router