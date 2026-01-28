import { body } from 'express-validator';

// Validation middleware for Employee
export const validateEmployee = [
  body('user').notEmpty().withMessage('user ID is required').isMongoId().withMessage('user must be a valid MongoDB ObjectId'),
  body('employeeId').notEmpty().withMessage('employeeId is required').isString().withMessage('employeeId must be a string'),
  body('address').notEmpty().withMessage('address is required').isString().withMessage('address must be a string'),
  body('salary').notEmpty().withMessage('salary is required').isFloat({ min: 0 }).withMessage('salary must be a positive number'),
  body('designation').notEmpty().withMessage('designation is required'),
  body('department').notEmpty().withMessage('department is required'),
  body('dateOfJoining').optional().isISO8601().withMessage('dateOfJoining must be a valid date'),
  body('reportingTo').optional().isMongoId().withMessage('reportingTo must be a valid MongoDB ObjectId'),
  body('employmentType').optional().isIn(['Full-Time', 'Part-Time', 'Contract', 'Intern']).withMessage('employmentType must be one of Full-Time, Part-Time, Contract, Intern'),
  body('status').optional().isIn(['Active', 'Inactive', 'On Leave', 'Resigned']).withMessage('status must be one of Active, Inactive, On Leave, Resigned'),
  body('expertise').optional().isArray().withMessage('expertise must be an array of strings'),
  body('canTeach').optional().isArray().withMessage('canTeach must be an array of ObjectIds'),
  body('bankDetails').optional().isObject().withMessage('bankDetails must be an object'),
  body('emergencyContact').optional().isObject().withMessage('emergencyContact must be an object')
];
