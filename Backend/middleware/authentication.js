import jwt from "jsonwebtoken"

const authMiddleware = async (req,res,next) =>{
// take the token
const {token}= req.headers;
if (!token) {
    return res. json({success:false,message:"Not authorized Login Again "})
}
try {
    //decode the token

    const token_decode= jwt.verify(token,process.env.JWT_SECRET);
    req.body.userId= token_decode.id;
    next();
} 
catch (error) {
   console.log(error);
   return res.json({success:false,message:"Error"})
    
}
}

export default authMiddleware