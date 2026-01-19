import express from "express";
import {body} from 'express-validator'
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

const router = express.Router();

//Validation rules for POST
const validateUser = [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('age').optional().isInt({min:0}).withMessage('Age must be positive number')
]

router.route("/").get(getUsers).post(validateUser, createUser);
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

export default router;
