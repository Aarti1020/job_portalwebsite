//API Documentation
import swaggerUi from 'swagger-ui-express'
import swaggerDoc from 'swagger-jsdoc'
// const express= require("express");
import express from "express";

import dotenv from "dotenv";
import colors from "colors";
import cors from "cors";
import morgan from "morgan";
import  "express-async-errors";
import connectDB from "./config/db.js";

//routes import
import testRoutes from "./routes/testRoutes.js"
import authroutes from "./routes/authroutes.js"
import errorMiddleware from "./middlewares/errorMiddleware.js";
import userRoute from "./routes/userRoute.js";
import jobsroute from "./routes/jobsroute.js";
const path = require('path');
//rest object 
const app= express();
dotenv.config();        

//mongodb connection
connectDB();
// swagger api config
const options ={
    definition:{
        openapi:"3.0.0",
    info:{
        title:"Job Portal Application",
        description:"Node Express js Job Portal Application"
    },
    servers:[
        {
            url:"http://localhost:8080"
        }
    ]
    },
    apis:['./routes/*.js']
};
const spec = swaggerDoc(options)
//middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

//validaton Middleware
app.use(errorMiddleware);
//routes
app.use('/api/v1/test',testRoutes);
app.use('/api/v1/auth',authroutes);
app.use('/api/v1/user',userRoute);
app.use('/api/v1/job', jobsroute)

//homeroute root
app.use("/api-doc", swaggerUi.serve, swaggerUi.setup(spec));

//validation middelware
app.use(errorMiddleware);

//static files
app.use(express.static((path.join__dirname,'./client/build')))
app.get('*',function(req,res){
    res.sendFile(path.join(__dirname, './client/build/index.html'));
})

//port
const PORT= process.env.PORT ||8080

//listen
app.listen(8080,()=>{
    console.log(`node server running ${process.env.DEV_MODE}Mode on port no ${PORT}`.bgCyan.white);
});
