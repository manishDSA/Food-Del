import userModels from "../models/userModel.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import validator from 'validator'

//login user
const loginUser = async(req,res)=>{
    const{email,password}= req.body;
    try{
    const user = await userModels.findOne({email});
    if(!user){
       return res.status(400).json({success:false,message:"User Does't exist"})
    }
    //if user not exist then compare the password
    const isMatch= await bcrypt.compare(password,user.password);
    if(!isMatch){
       return res.status(400).json({success:false,message:"Invalid Password"})
    }
    //create a token
    const token= createToken(user._id);
    res.json({success:true, token})
   }
   catch(error){
   console.log(error);
   res.json({success:false,message:"Error"})
   
   }
}
//create a jwt token
const createToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}
//register user

const registerUser= async(req,res)=>{
    const {name,password,email}= req.body;
    try {
        //checking is user already exists
        // const exists= await userModel.findOne({email});
        const exists=await userModels.findOne({email});
        if(exists){
            return res.json({success:false,message:"user already exists"})
        }
        // validating emial formate $strong password
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"please enter a valid email"})
        }
        if(password.length<8){
            return res.json({success:false,message:"password should be at least 8 characters long"})
        }
        // hashing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword= await bcrypt.hash(password,salt);
       //Create a new user
       const newUser= new userModels({
        name:name,
        email:email,
        password:hashedPassword,
       })
       const user= await newUser.save()
       const token = createToken(user._id)
       res.json({success:true,token})
    } 
    
    catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
        
    }
}

export {loginUser,registerUser}