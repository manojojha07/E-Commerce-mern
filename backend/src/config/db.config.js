import mongoose from "mongoose";



const connectDB = async() => {
    try {
       await mongoose.connect(process.env.MONGO_URI);
        console.log("Conacted TO Data Base Sucess ! ");
        
    } catch (error) {
        console.log("this is not worjin");  
    }
}

export default connectDB;