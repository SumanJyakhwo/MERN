import express from "express";
import { createEmployee, getEmployees } from "../controllers/employeeController.js";
import { protect } from "../middlewares/authMiddleware.js";
import { validateEmployee } from "../validators/employeeValidator.js";


const employeeRoutes = express.Router();


//GET /api/employees/
employeeRoutes.get("/", protect, getEmployees)

//POST /api/employees/
employeeRoutes.post("/", protect, validateEmployee, createEmployee)

export default employeeRoutes;