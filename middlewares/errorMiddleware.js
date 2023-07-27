//error middleware ||next function

const errorMiddleware = (err, req,res,next)=>{
    console.log(err)
const defaultErrors ={
    statusCode:500,
    message:err,
}
//duplicate Error
  if (err.code && err.code===11000){
    defaultErrors.message= `${Object.keys(err.keyvalues)} field has to be unique`;
  }
    //missing field error
    if(err.name==="validationError"){
        defaultErrors.statusCode=400
        defaultErrors.message = object.values(err.errors).map(item.message).join(',')
    }
    res.status (Errors.statusCode).json({message:defaultErrors.message});
};
export default errorMiddleware;