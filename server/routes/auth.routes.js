import  express  from "express" 
import  { check, validationResult } from 'express-validator'
import  { Register, Login } from "../controller/auth.controller.js"
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

// Validation rules
const registerValidation = [
    check('username', 'Username is required').notEmpty().trim(),
    check('email', 'Please enter a valid email').isEmail().normalizeEmail(),
    check('password', 'Password is required').isLength({ min: 6 }),
    check('firstName', 'First name is required').notEmpty().trim(),
    check('lastName', 'Last name is required').notEmpty().trim(),
    check('phone', 'Please enter a valid phone number').isMobilePhone(), 


    // Address validation (assuming all fields are required)
  // check('address.street', 'Street address is required').notEmpty().trim(),
  // check('address.city', 'City is required').notEmpty().trim(),
  // check('address.state', 'State is required').notEmpty().trim(),
  // check('address.postalCode', 'Postal code is required').notEmpty().trim(),
  // check('address.country', 'Country is required').notEmpty().trim(),

  // Date of birth validation (assuming it's a string)
  check('dateOfBirth', 'Date of birth is required').notEmpty(),
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


router.get("/check-auth", verifyToken, (req, res, next) => {
  res.send("Hello! You are authenticated.");
});

router.get("/check-user/:id", verifyUser, (req, res, next) => {
  res.send("Hello User! You are logged in.");
});

router.get("/check-admin/:id", verifyAdmin, (req, res, next) => {
  res.send("Hello Admin! You are logged in.");
});


// http://localhost:8000/api/auth/register
// http://localhost:8000/api/auth/login

export default router;
