import {body, validationResult} from 'express-validator'

export const validateLogin =  [
  body('email').isEmail().withMessage("valid email is required"),
  body('password').notEmpty().withMessage('password  is required'),
]

export const validateRegister = [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('address').notEmpty().withMessage('Valid address is required'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters'),
    body('age').optional().isInt({min:0}).withMessage('Age must be positive number')
];

export const validateCreate = [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('address').notEmpty().withMessage('Valid address is required'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters'),
    body('role').isIn(["CEO", "Management", "Employee"]).withMessage('Role must be CEO, Management or Employee'),
    body('age').optional().isInt({min:0}).withMessage('Age must be positive number')
];
export const validateUpdate = [
    body("name").optional().notEmpty().withMessage("Name cannot be empty"),
    body("email").optional().isEmail().withMessage("Must be a valid email"),
    body("address").optional().notEmpty().withMessage("Must be a valid email"),
    body("password").optional().isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
    body("age").optional().isInt({ min: 0 }).withMessage("Age must be positive number"),
];

export const validate = (req, res, next) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(404).json({success:false, errors: errors.array().map(err => err.msg)})
    }
    next();
}

