import User from "../models/User.js";

export const getUsers = async (req,res) => {
    const users = await User.find();
    res.status(200).json({success:true, message:'users fetched', data:users})
};

export const createUser = async (req, res) => {
    const {name, email, age} = req.body;
    const newUser = await  User.create({name,email,age});
    res.status(201).json({success:true, message:'user created', data: newUser})
}