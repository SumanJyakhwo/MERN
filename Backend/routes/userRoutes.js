import express from "express";
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  registerUser,
  authUser,
} from "../controllers/userController.js";
import { ceoOnly, ceoAndMgmt, protect } from "../middlewares/authMiddleware.js";
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

//GET /api/users (protected, admin only)
userRoutes.get("/", protect, ceoAndMgmt, getUsers);

//GET /api/users:id (protected, ownerOrAdmin)
userRoutes.get("/:id", protect, ceoAndMgmt, getUserById);

//POST /api/users (protected - admin only for internal creation)
userRoutes.post("/", protect, ceoAndMgmt, validateCreate, validate, createUser);

//PUT /api/users/:id (protected)
userRoutes.put(
  "/:id",
  protect,
  ceoAndMgmt,
  validateUpdate,
  updateUser,
);

//DELETE /api/users/:id (protected)
userRoutes.delete("/:id", protect, ceoAndMgmt, deleteUser);

export default userRoutes;
