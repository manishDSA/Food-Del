import express from 'express'
 import cors from 'cors'
 import bodyParser from 'body-parser';
import foodRouter from './foodRoute.js';
import userRouter from './routes/userRoute.js';

import 'dotenv/config'
import cartRouter from './routes/cartRoute.js';




 //app config

 const app= express();
 const port= 4000

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
 //middleware
 app.use(express.json())
 app.use(cors())

 //api endpoint
 app.use("/api/food",foodRouter)
 app.use("/images",express.static("uploads"))
 app.use("/api/user",userRouter)
 app.use("/api/cart",cartRouter)


 app.get("/",(req,res)=>{
    res.send("hello world")
 })
 app.listen(port,()=>{
    console.log("server runnig on port 4000");
    
 })