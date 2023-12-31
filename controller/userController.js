import userModel from "../models/userModel.js";

export const updateUserController = async(req,res,next)=>{
    const {name,lastName,email,location}=req.body
    if(!name|| !lastName|| !email || !location){
        next("Please Provide All fields")
    }
    const user = await userModel.findOne({_id: req.user.userId})
    user.name = name
    user.lastName = lastName
    user.email = email
    user.location = location
   
    await user.save()
    const token = user.createJWT()
    res.status(200).json({
        user,
        token
    })
};

//get new data
export const getUserController =async (req,res,next)=>{
    try{
        const user= await userModel.findById({id:req.body.user.userId})
        user.password = undefined
        if(!user){
            return res.status(202).send({
                message:"User not found",
                success: false
            })
        } else{
            res.status(200).send
            ({success:true,
                data:user,
            })
        }
        

        
    }catch(error){
        console.log(error)
        res.status(500).send({
            message:"Auth Error",
            success:false,
            error: error.message
        })
    }

}