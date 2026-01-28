import Employee from "../models/Employee.js";
import asyncHandler from "express-async-handler";



//GET  /api/employees/

export const getEmployees = asyncHandler(async (req, res) => {
    const employees = await Employee.find();
    res.status(200).json({success:true, message:`employees fetched` , data: [employees]});
})

//GET_BY_ID /api/employee/:id
export const getEmployeesByID = asyncHandler( async (req, res) => {
    const { id } = req.params;

    const employee = await Employee.findById(id)
    if (!employee) {
        res.status(404)
        throw new Error('Employee not found')
    }
    res.status(200).json({success:true, message:"Employee fetched by id", data: employee})
})

//POST /api/employees/
export const createEmployee = asyncHandler(async (req, res) => {
    const {user, employeeId, address, salary, designation, department, dateOfJoining, reportingTo, status, expertise, canTeach, bankDetails, emergencyContact} = req.body;
    const employeeExists = await Employee.findOne({user});

    if(employeeExists){
        res.status(400);
        throw new Error("Employee already exists");
    }

    const employee= await Employee.create({user, employeeId, address, salary, designation, department, dateOfJoining, reportingTo, status, expertise, canTeach, bankDetails, emergencyContact});
    res.status(201).json({
        success:true, message: "employee created successfully", data: employee
    })
})

//PUT /api/employees/:id (update employee)
export const updateEmployee = asyncHandler( async (req, res) => {
    const employee = await Employee.findById(req.params.id);

    if(!employee){
        res.status(404);
        throw new Error('Employee not found')
    }
        
})
