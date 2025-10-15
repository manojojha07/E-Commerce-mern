import mongoose from 'mongoose'
import userModel from '../models/user.model.js';
import validator from 'validator';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'



const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRATE);
}

// -------register user---------
const registerUser = async (req, res) => {

    const { name, email, password } = req.body;
    const user = await userModel.findOne({ email })
    if (user) {
        return res.json({ message: "User Allready Exists " })
    }
    if (!validator.isEmail((email))) {
        return res.json({ message: "Please enter valid email " })
    }
    if (password.length < 6) {
        return res.json({ message: "Please enter a stronger password (at least 6 characters)" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = userModel({
        name,
        email,
        password: hashPassword
    });

    const token = createToken(newUser._id);
    res.status(200).json({success:true, token, message: " User registered successfully" })
    await newUser.save();

}

//  ---------route for user login  -----
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(email);

  const user = await userModel.findOne({ email });

  if (!user) {
    return res.json({ message: "User not exist !" });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (isMatch) {
    const token = createToken(user._id);
    return res.status(200).json({ success: true, token, message: "User Login Success Full" });
  } else {
    return res.json({ success: false, message: "Invalid Credentials" });
  }
};



// ------------route for admint login  ------------

const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        
   if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
        const token= jwt.sign(email+password, process.env.JWT_SECRATE);
        res.json({success:true , token })
   }else{
     res.json({success:false , message: "Invalid Credentials " })
   }

    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message })
    }

}

export { registerUser, loginUser, adminLogin }