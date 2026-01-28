import {body, validationResult} from 'express-validator'

export const validateLogin =  [
  body('email').isEmail().withMessage("valid email is required"),
  body('password').notEmpty().withMessage('password  is required'),
]

export const validateRegister = [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters'),
    body('number').isLength({min:10, max:10}).withMessage('Valid 10-digit number is required'),
];

export const validateCreate = [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters'),
    body('number').isLength({min:10, max:10}).withMessage('Valid 10-digit number is required'),
    body('role').notEmpty().isIn(["CEO", "Management", "Employee"]).withMessage('Role must be either CEO, Management, or Employee')
];
export const validateUpdate = [
  body('name').optional({ checkFalsy: true }).notEmpty().withMessage('Name is required'),
  body('email').optional({ checkFalsy: true }).isEmail().withMessage('Valid email is required'),
  body('password').optional({ checkFalsy: true }).isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  body('age').optional({ checkFalsy: true }).isInt({ min: 0 }).withMessage('Age must be positive number'),
  body('address').optional({ checkFalsy: true }).notEmpty().withMessage('Valid address is required'),
  body('number').optional({ checkFalsy: true }).isLength({ min: 10, max: 10 }).withMessage('Valid 10-digit number is required'),
  body('designation').optional({ checkFalsy: true }).notEmpty().withMessage('Designation is required'),
  body('dateOfJoining').optional({ checkFalsy: true }).isISO8601().withMessage('Valid date is required'),
];


export const validate = (req, res, next) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(404).json({success:false, message: "userValidator's validate error", errors: errors.array().map(err => err.msg)})
    }
    next();
}

