import express from "express";
import Users from "../models/users.js";
// import Interviews from "../models/interviews.js";
import { sendError } from "../helper.js";
// import Users from "../models/users.js";

const getUser = async(req,res)=>{
    
    let users = await Users.find({isAdmin: false }).exec()
    res.json({users})
}
const router = express.Router();
router.get('/',getUser)
export default router