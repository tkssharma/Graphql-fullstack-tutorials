import mongoose from "mongoose"
import User  from './user';
import Message from './message';


const connectMongo = () =>{
   return mongoose.connect(process.env.MONGO_URL, {useNewUrlParser : true})
}

const models = { User, Message };

export { connectMongo };

export default models;