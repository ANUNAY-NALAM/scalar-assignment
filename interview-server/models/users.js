import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    email:{
        type:String,
        required:true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        require :true,
    },
    name:{
        type:String,
        required:true
    },
    isAdmin:{
        type: Boolean,
        required:true,
        default:false
    }
})
var Users = mongoose.model('Users', userSchema);

export default Users;