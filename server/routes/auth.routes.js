import  express  from "express" 
import  { check, validationResult } from 'express-validator'
import  { Register, Login } from "../controller/auth.controller.js"

const router = express.Router();

// Validation rules
const registerValidation = [
    check('username', 'Username is required').notEmpty().trim(),
    check('email', 'Please enter a valid email').isEmail().normalizeEmail(),
    check('password', 'Password is required').isLength({ min: 6 }),
    check('firstName', 'First name is required').notEmpty().trim(),
    check('lastName', 'Last name is required').notEmpty().trim(),
    check('phone', 'Please enter a valid phone number').isMobilePhone(), 
  ];
  
  const loginValidation = [
    check('email', 'Please enter a valid email').isEmail().normalizeEmail(),
    check('password', 'Password is required').isLength({ min: 6 }),
  ];

  
router.post(
  "/register",
  registerValidation,
  Register
);

router.post(
  "/login",
  loginValidation,
  Login
);

// http://localhost:8000/api/auth/register
// http://localhost:8000/api/auth/login

export default router;
