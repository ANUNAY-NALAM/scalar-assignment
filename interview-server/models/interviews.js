import mongoose from "mongoose";

const interviewSchema = mongoose.Schema({
    start_time:{
        type:Date,
        required: true,
    },
    end_time:{
        type:Date,
        required:true
    },
    users:[String]
})
var Interviews = mongoose.model('Interviews', interviewSchema);
export default Interviews;