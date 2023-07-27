import express from "express";
import userAuth from "../middlewares/authMiddleware.js";
import { getUserController, updateUserController } from "../controller/userController.js";
//router object
const router = express.Router()

//routes
//GET USER data || Post
router.post('/getUser', userAuth,getUserController)


//UPDATE USER ||PUT
router.put('/update-user',userAuth,updateUserController)
export default router
