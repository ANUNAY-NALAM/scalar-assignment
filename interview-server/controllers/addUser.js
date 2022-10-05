import express from "express";
import Users from "../models/users.js";
// import Interviews from "../models/interviews.js";
import { sendError } from "../helper.js";

const addUser = async(req,res)=>{
    const {name,email,password,isAdmin} = req.body
    let newUser = new Users({
        name,
        email,
        password,
        isAdmin
    })
    await newUser.save()
    res.json({success:true, message:"New User Created successfully"})
}


const router = express.Router();

router.post('/',addUser)


export default router