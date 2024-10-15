import foodModel from "./conn.js";


import fs from 'fs'


//add food item

const addFood= async(req,res)=>{
    let image_filename=`${req.file.filename}`;
    
    const food =new foodModel({
    name:req.body.name,
    description:req.body.description,
    price:req.body.price,
    category:req.body.category,
    image:image_filename
    })
    try {
     await food.save();
     res.json({success:true,message:"Food added"})    
    
    } 
    catch (error) {
       console.log(error);
       res.json({success:false,message:"Failed to add food"})
        
    }
    }
    
    // all food list
    const listFood = async (req,res)=>{
        try {
            const foods= await foodModel.find({});
            res.json({success:true,data:foods})
        } 
        catch (error) {
           console.log(error);
           res.json({success:false,message:"Failed to get all foods"})
            
        }
    }

    const removeFood = async (req,res)=>{
        try {
            const food= await foodModel.findById(req.body.id)
            fs.unlink(`uploads/${food.image}`,()=>{})
            // await foodModel.findByIdAndUpdate(req.body.id);
            await foodModel.findByIdAndDelete(req.body.id);
            res.json({success:true,message:"Food deleted"})
        } catch (error) {
            console.log(error);
            res.json({success:false,message:"Failed to delete food"})
            
        }
    }
 
export {addFood,listFood,removeFood}