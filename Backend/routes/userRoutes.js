import express from "express";
import {body} from 'express-validator'
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  registerUser,
  authUser,
} from "../controllers/userController.js";

import { admin, ownerOrAdmin, protect } from "../middlewares/authMiddleware.js";

const userRoutes = express.Router();

const validateUser = [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters'),
    body('age').optional().isInt({min:0}).withMessage('Age must be positive number')
];
const validateUpdate = [
    body("name").optional().notEmpty().withMessage("Name cannot be empty"),
    body("email").optional().isEmail().withMessage("Must be a valid email"),
    body("password").optional().isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
    body("age").optional().isInt({ min: 0 }).withMessage("Age must be positive number"),
];


userRoutes.post("/register",validateUser, registerUser);

//POST /api/users/login
userRoutes.post("/login", [
  body('email').isEmail().withMessage("valid email is required"),
  body('password').notEmpty().withMessage('password  is required'),
], authUser);

//USERS

//GET /api/users (protected, admin only)
userRoutes.get("/", protect, admin, getUsers);

//POST /api/users (protected - admin only for internal creation)
userRoutes.post("/", protect, admin, validateUser, createUser)

//GET /api/users:id (protected, ownerOrAdmin)
userRoutes.get("/:id", protect, ownerOrAdmin, getUserById);

//PUT /api/users/:id (protected)
userRoutes.put("/:id", protect, ownerOrAdmin, validateUpdate, updateUser);

//DELETE /api/users/:id (protected)
userRoutes.delete("/:id", protect, ownerOrAdmin, deleteUser);




/*
router.route("/").get(getUsers).post(validateUser, createUser);
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);
*/
export default userRoutes;
;