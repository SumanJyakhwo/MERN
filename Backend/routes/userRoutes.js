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

import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

const validateUser = [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters'),
    body('age').optional().isInt({min:0}).withMessage('Age must be positive number')
];


router.post("/register",validateUser, registerUser);

//POST /api/users/login
router.post("/login", [
  body('email').isEmail().withMessage("valid email is required"),
  body('password').notEmpty().withMessage('password  is required'),
], authUser);

//USERS

//GET /api/users (protected)
router.get("/", protect, getUsers);

//POST /api/users (protected - admin or internal use)
router.post("/", protect, validateUser, createUser)

//GET /api/users:id (protected)
router.get("/:id", protect, getUserById);

//PUT /api/users/:id (protected)
router.put("/:id", protect, updateUser);

//DELETE /api/users/:id (protected)
router.delete("/:id", protect, deleteUser);




/*
router.route("/").get(getUsers).post(validateUser, createUser);
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);
*/
export default router;
;