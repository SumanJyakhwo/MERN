import express from "express";
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  registerUser,
  authUser,
  updateUserPassword,
} from "../controllers/userController.js";
import { protect, ownerOrPrivileged, privilegedonly } from "../middlewares/authMiddleware.js";
import {
  validateUpdate,
  validate,
  validateLogin,
  validateRegister,
  validateCreate,
} from "../validators/userValidator.js";

const userRoutes = express.Router();

//POST /api/users/login
userRoutes.post("/login", validateLogin, authUser);

//POST /api/users/register
userRoutes.post("/register", validateRegister, validate, registerUser);

//GET /api/users
userRoutes.get("/", protect, privilegedonly, getUsers);

//GET /api/users:id 
userRoutes.get("/:id", protect, ownerOrPrivileged, getUserById);

//POST /api/users
userRoutes.post("/", protect, privilegedonly, validateCreate, validate, createUser);

//PUT /api/users/:id 
userRoutes.put("/:id", protect, ownerOrPrivileged, validateUpdate,updateUser,);

//PUT /api/users/:id/password
userRoutes.put("/:id/password", protect, ownerOrPrivileged, updateUserPassword)

//DELETE /api/users/:id
userRoutes.delete("/:id", protect, ownerOrPrivileged, deleteUser);

export default userRoutes;
