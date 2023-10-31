const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bycrpt = require('bcryptjs');
const fetchuser = require ('../middleware/fetchuser')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


const JWT_SECRET = "itshardto@find"

// ROUTE1: Create a user using POST "/api/auth/createuser" - No login required
router.post('/createuser', [
    body('fname', 'First name should be at least 3 characters').isLength({ min: 3 }),
    body('lname', 'Last name should be at least 3 characters').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('phone', 'Mobile number should be at least 10 numbers').isLength({ min: 10 }),
    body('password', 'Password must be at least 5 characters').isLength({ min: 5 }),
    body('gender', 'Select gender').notEmpty(),
    body('userType', 'Select user type').notEmpty(),
    body('birthdate', 'Select a valid birthdate').isISO8601(),
  
  ], async (req, res) => {
    let success = false;
    
    // If there are errors, return a bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }
  
    // Check whether a user with this email already exists
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({ success, error: "Sorry, a user with the same email already exists" });
      }
  
      let salt = await bcrypt.genSalt(10);
      let secPass = await bcrypt.hash(req.body.password, salt);
  
      // Create a user
      user = await User.create({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        phone: req.body.phone,
        password: secPass,
        gender: req.body.gender,
        userType: req.body.userType,
        birthdate: req.body.birthdate,
      });
  
      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);
  
      // Send user data as a JSON response
      success = true;

      res.json({ success, authtoken});
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some error occurred");
    }
  });
  

// ROUTE2 : (LOGIN) Authenticating a user using:  POST "/api/auth/login". no login required
router.post('/login', [
  body('email', 'Enter valid Email').isEmail(),
  body('password', 'Password cannot be empty').exists(),

], async (req, res) => {
  let success=false
  //if there re errors, return bad request and errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  //destructuring 
  const { email, password } = req.body;
  try {
    //check if email is stored in database
    let user = await User.findOne({ email });
    //if not stored then send error 
    if (!user) {
      return res.status(400).json({ error: "Please login  with correct credentials" })
    }
    //comparing stored password with login password
    let comparePassword = await bycrpt.compare(password, user.password)
    //if password mismatched then send error
    if (!comparePassword) {
      return res.status(400).json({ error: "Please login  with correct credentials" })
    }
    //if email and password are correct then take userid and sign it with JWT_SECRET key
    data = {
      user: {
        id: user.id
      }
    }
    const authtoken = jwt.sign(data, JWT_SECRET)
    //sending authentication token as json response
    success=true
    res.json({ success, authtoken , userType: user.userType})

  } catch (error) {
    console.error(error.message)
    res.status(500).send("some error occurred");
  }

})


// ROUTE3 : Getting a user using:  POST "/api/auth/getuser".  login required
router.post('/getuser',fetchuser, async (req, res) => {
  try {

    userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user)
  } catch (error) {
    console.error(error.message)
    res.status(500).send("some error occurred");
  }

})

module.exports = router






