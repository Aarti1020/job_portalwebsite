import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    company:{
        type:String,
        required:[true, "Company Name is required"],
    },
    position:{
        type:String,
        required:[true,"Job Position is required"],
        minlenght:100,
    },
    status:{
        type:String,
        enum:["Pending", "Reject", "Interview"],
        default:"Pending",
    },
    workType:{
        type:String,
        enum:["Full-Time", "Part-Time","Internship","Contract-Base"],
        default:"Full-Time",
    },
    workLocation:{
        type:String,
        default:"Mumbai",
        required:[true, "Work Location Is Required"],
    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    },
    },
 {   timestamps:true}
)

export default mongoose.model("job",jobSchema)