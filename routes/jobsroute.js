import  express  from "express";
import userAuth from "../middlewares/authMiddleware.js";
import { CreatejobController, deletejobController, getAllJobsController, jobStastController, updatejobController } from "../controller/jobcontroller.js";


const router = express.Router()
//routes
//CREATE_JOB||POST
router.post('/create-job',userAuth,CreatejobController);

//GET_JOB || get
router.get('/get-jobs',userAuth,getAllJobsController);

//UPDATE JOBS ||  PATCH
router.patch("/update-job/:id", userAuth, updatejobController);

//DELETE JOBS || DELETE
router.delete("/delete-job/:id", userAuth, deletejobController);

// JOBS STATS FILTER || GET
router.get("/job-stats", userAuth, jobStastController);
export default router;
