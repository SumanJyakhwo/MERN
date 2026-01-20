import User from "../models/User.js";
import asyncHandler from "express-async-handler";
import { validationResult } from "express-validator";
import generateToken from "../utils/generateToken.js";

//POST /api/users/register
export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, age } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Name, email and password are required");
  }

  const userExists = await User.findOne({email});
  if(userExists){
    res.status(400);
    throw new Error('User already exists');
  }

  const user = await User.create({name, email, password, age});
  res.status(201).json({
    success:true, message: "user registered successfully", data: {_id: user._id, name:user.name, email:user.email, token: generateToken(user._id)
    },
  });
});


//POST /api/users/login
export const authUser = asyncHandler(async(req, res) => {
    const {email, password} = req.body;

    const user = await User.findOne({email});

    if(user && (await user.matchPassword(password))){
        res.status(200).json({
            success:true, message:'logged in successfully', data: {
                _id: user._id, name: user.name, email: user.email, token: generateToken(user._id)
            },
        })
    }else{
      res.status(401)
      throw new Error('Invalid email or password')
    }
})


//GET /api/users
export const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  res
    .status(200)
    .json({ success: true, message: "users fetched", data: users });
});

//GET /api/users/:id
export const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(404);
    throw new Error("user not found");
  }
  res.status(200).json({ success: true, message: "user fetched", data: user });
});

//POST /api/users
export const createUser = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400);
    throw new Error(
      errors
        .array()
        .map((err) => err.msg)
        .join(", "),
    );
  }
  const { name, email, password, age } = req.body;

  //check if email exists
  const existing = await User.findOne({ email });
  if (existing) {
    res.status(400);
    throw new Error("Email already in use");
  }

  const newUser = await User.create({ name, email, password, age });
  res
    .status(201)
    .json({ success: true, message: "user created", data: newUser });
});

//PUT /api/users/:id
export const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!user) {
    res.status(404);
    throw new Error("user not found");
  }
  res.status(200).json({ success: true, message: "user updated", data: user });
});

//DELETE /api/users/:id
export const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  if (!user) {
    res.status(404);
    throw new Error("user not found");
  }
  res.status(200).json({ success: true, message: "user deleted", data: user });
});
