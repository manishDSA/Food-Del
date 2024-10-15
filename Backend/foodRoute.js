import express from 'express'
import { addFood, listFood, removeFood } from './foodController.js'
import multer from "multer"


const foodRouter= express.Router();

//image storage engine
// const storage= multer.diskStorage({
//     destination:"uploads",
//     filename:(req,file,cb)=>{
//     return cb(null,`${Date.now()}${file.originalname}`)
    
//     }
// })

const storage2 = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
     return cb(null,`${Date.now()}${file.originalname}`)
    }
})

// const upload= multer({storage:storage})

const upload2= multer({storage:storage2})

foodRouter.post("/add", upload2.single("image"),addFood)
foodRouter.get("/list",listFood)
foodRouter.post("/remove",removeFood)







export default foodRouter