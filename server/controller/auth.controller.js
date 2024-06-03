import  { validationResult } from 'express-validator'
import  User from '../model/user.model.js'
import  bcrypt from 'bcryptjs'
import  jwt from 'jsonwebtoken'



export const Register = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { username, email, password, firstName, lastName, ...rest } = req.body;

  const salt =  await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    const user = new User({
      username,
      email,
      password: hashedPassword,
      firstName,
      lastName,
      ...rest,
    });

    await user.save();

    res
    .status(201)
    .json({ 
        status: true,
        message: 'User created successfully',
        data:user
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating user' , error:err });
  }
};

export const Login = async (req, res, next) => {
  // Sanitize incoming data
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Extract login credentials
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Compare password hashes
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Generate a JWT token
    const payload = { userId: user._id };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '30d' });

    // Set cookies with sanitized user data (excluding password)
    res.cookie('jwt', token, { httpOnly: true }); // Sending JWT token in a cookie

    res.status(200).json({ message: 'Login successful' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error logging in' });
  }
};
