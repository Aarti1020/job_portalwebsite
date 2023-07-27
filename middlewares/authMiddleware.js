import JWT from "jsonwebtoken";

const userAuth = (req, res, next)=>{
    const authHeader = req.headers.authorization
    if(!authHeader || authHeader.startsWith('Bearer')){
        next('Auth Failed')
    }
    const token = authHeader.Split('')[1]
    try{
        const payload =JWT.verify(token,process.env.JWT_SECRET)
            req.user ={userID: payload.userID}
            next()
    }
    catch(error){
        next('Authentication Failed');
    }
}
export default userAuth;