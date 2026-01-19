import User from "../models/User.js";
import asyncHandler from "express-async-handler";
import { validationResult } from "express-validator";
//GET /api/users
export const getUsers = async (req, res) => {
  const users = await User.find();
  res
    .status(200)
    .json({ success: true, message: "users fetched", data: users });
};

//GET /api/users/:id
export const getUserById = async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(400);
    throw new Error("user not found");
  }
  res.status(200).json({ success: true, message: "user fetched", data: user });
};

//POST /api/users
export const createUser = async (req, res) => {
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
  const { name, email, age } = req.body;

  //check if email exists
  const existing = await User.findOne({ email });
  if (existing) {
    res.status(400);
    throw new Error("Email already in use");
  }

  const newUser = await User.create({ name, email, age });
  res
    .status(201)
    .json({ success: true, message: "user created", data: newUser });
};

//PUT /api/users/:id
export const updateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!user) {
    res.status(404);
    throw new Error("user not found");
  }
  res.status(200).json({ success: true, message: "user updated", data: user });
};

//DELETE /api/users/:id
export const deleteUser = async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  if (!user) {
    res.status(404);
    throw new Error("user not found");
  }
  res.status(200).json({ success: true, message: "user deleted", data: user });
};
