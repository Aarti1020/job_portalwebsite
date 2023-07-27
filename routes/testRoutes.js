import express from 'express';
import testController from '../controller/testController.js';
import userAuth from '../middlewares/authMiddleware.js';


//router object
const router =express.Router()

//routes
router.post('/test-post',userAuth, testController)
export default router;