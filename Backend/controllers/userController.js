import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from "validator";


const loginUser = async (req,res) =>{
    const {email,password} = req.body;
    if (!email || !password){
        return res.status(400).json({success:false,message:"All fields are required"})
    }

    try {
        const user = await userModel.findOne({email});
        if (!user){
            return res.status(400).json({success:false,message:"Please Register Before Logging In"})
        }

        const isMatch = await bcrypt.compare(password,user.password);
        if (!isMatch){
            return res.status(400).json({success:false,message:"Invalid Credentials"})
        }

        const token = jwtToken(user.name,user.email,user._id);
        return res.status(200).json({success:true,message:"User Logged In",token})

    } catch (error) {
        console.log(error)
        return res.status(500).json({success:false,message:error})
    }

}


const jwtToken = (name,email,id) =>{
    return jwt.sign({name,email,id},process.env.JWT_SECRET,{expiresIn:"10d"})
}

const registerUser = async (req,res) =>{
    const {name,password,email} = req.body;
    if(!name || !password || !email){
        return res.status(400).json({success:false,message:"All fields are required"})
    }

    try {
        const exists = await userModel.findOne({email});
        if (exists){
            return res.status(400).json({success:false,message:"User Already Exists"})
        }

        if (!validator.isEmail(email)){
            return res.status(400).json({success:false,message:"Invalid Email"})
        }

        if (password.length < 8){
            return res.status(400).json({success:false,message:"Password must be atleast 8 characters"})
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = await userModel({
            name:name,
            email:email,
            password:hashedPassword
        })

        const user = await newUser.save();
        const token = jwtToken(user.name,user.email,user._id);

        return res.status(201).json({success:true,message:"User Registered", token})



    } catch (error) {
        return res.status(500).json({success:false,message:error})
    }
}

const loginadmin = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ success: false, message: "All fields are required" });
    }

    try {
        const admin = await userModel.findOne({ email });

        if (!admin) {
            return res.status(401).json({ success: false, message: "Invalid email or password" });
        }

        if (admin.role !== 'admin') {
            return res.status(401).json({ success: false, message: "Unauthorized" });
        }

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: "Invalid email or password" });
        }

        const token = jwt.sign({ id: admin._id, role: admin.role }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });

        res.status(200).json({ success: true, token });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error" });
    }
};

export {loginUser, registerUser, loginadmin};