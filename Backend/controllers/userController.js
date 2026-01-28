import User from "../models/User.js";
import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";

//POST /api/users/register
export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, number } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  const user = await User.create({ name, email, password, number });
  res.status(201).json({
    success: true, message: "user registered successfully", data: { _id: user._id, name: user.name, email: user.email, token: generateToken(user._id) },
  });
});


//POST /api/users/login
export const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.status(200).json({
      success: true, message: 'logged in successfully', data: {
        _id: user._id, name: user.name, email: user.email, token: generateToken(user._id)
      },
    })
  } else {
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

//GET /api/users/:id (get user by ID)
export const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(404);
    throw new Error("user not found");
  }
  res.status(200).json({ success: true, message: "user fetched", data: user });
});

//POST /api/users (create user internally by admin)
export const createUser = asyncHandler(async (req, res) => {
  const { name, email, password, number, role } = req.body;

  //check if email exists
  const existing = await User.findOne({ email });
  if (existing) {
    res.status(400);
    throw new Error("Email already in use");
  }

  const newUser = await User.create({ name, email, password, number, role });
  res
    .status(201)
    .json({ success: true, message: "user created", data: newUser });
});

// PUT /api/users/:id to update name, email and number
export const updateUser = asyncHandler(async (req, res) => {
  const allowedFields = ["name", "email", "number"];
  const updates = {};
  allowedFields.forEach((field) => {
    if (req.body[field] !== undefined) {
      updates[field] = req.body[field];
    }
  });

  // Check email uniqueness
  if (updates.email) {
    const existing = await User.findOne({ email: updates.email });
    if (existing && existing._id.toString() !== req.params.id) {
      res.status(400);
      throw new Error("Email already in use");
    }
  }

  const user = await User.findByIdAndUpdate(req.params.id, updates, {
    new: true,
    runValidators: true,
  });
  if (!user) {
    res.status(404);
    throw new Error("user not found");
  }
  res.status(200).json({ success: true, data: user });
});

//PUT /api/users/:id/password user needs to give old password as well but ceo or mgmt just sends newPassword.
export const updateUserPassword = asyncHandler(async (req, res) => {
  const { currentPassword, newPassword } = req.body;

  if (!newPassword) {
    res.status(400)
    throw new Error('new password is required');
  }

  const user = await User.findById(req.params.id).select("+password");

  if (!user) {
    res.status(404);
    throw new Error('user not found')
  }

  //tala req.user vaneko protect middleware le set gardeko ho _id, role, email, name testo anu user matra vaneko hamile varkhar mathi set gareko
  const isOwner = req.user._id.toString() === user._id.toString();
  // Only allow owner or privileged
  if (!isOwner && !isPrivileged) {
    res.status(403);
    throw new Error("Not authorized to update password");
  }

  // If owner, verify current password
  if (isOwner) {
    if (!currentPassword) {
      res.status(400);
      throw new Error("Current password is required");
    }

    const isMatch = await user.matchPassword(currentPassword);
    if (!isMatch) {
      res.status(401);
      throw new Error("Current password is not correct");
    }
  }
  
  // Owner verified or privileged user can update
  user.password = newPassword;
  await user.save(); // triggers pre('save') hashing

  res.status(200).json({
    success: true,
    message: "Password updated successfully",
  });
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
