
import mongoose from "mongoose";


mongoose.connect('mongodb://manishsolanki:manishsolanki123@cluster0-shard-00-00.rdxsx.mongodb.net:27017,cluster0-shard-00-01.rdxsx.mongodb.net:27017,cluster0-shard-00-02.rdxsx.mongodb.net:27017/Tommato-web?ssl=true&replicaSet=atlas-gv9k0s-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0')
mongoose.connection.on('connected', () => console.log('connected'));


const foodSchema = new mongoose.Schema({
  name:{type:String,required:true},
  description:{type:String,required:true},
  price:{type:Number, required:true},
  
  category:{type:String,required:true},
  image:{type:String,required:true},
})

const foodModel=mongoose.models.food || mongoose.model('food',foodSchema);

export default foodModel;

