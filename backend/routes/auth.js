const express = require("express");
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser')

const JWT_SECRET = "maheshisagoodb$oy";

// ROUTE 1: Create a User using: POST "/api/auth/createuser". No login required
router.post('/createuser',[
    body('name', 'Enter a valid name').isLength({min:3}),
    body('email', 'Enter a valid email').isEmail(),
    body('password','Password must be atleast 5 character').isLength({min:5})
], async(req, res)=>{
    let success = false;
    // If there are errors return Bad request and the errors
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({success, errors: errors.array()})
    }
    try {
        // Check whether the user with this email exists already
        let user = await User.findOne({success, email:req.body.email})
        if(user){
            return res.status(400).json({error:"Sorry a user with this email already exists"})
        }
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);
        // Create a new user
        user = await User.create({
            name: req.body.name,
            password: secPass,
            email: req.body.email
        });
        const data = {
            user:{
                id:user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET)
        // res.json(user)
        success = true;
        res.json({success,authToken});

    } catch(error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error")
    }
})


// ROUTE 2: Authenticate a User using: POST "/api/auth/login".
router.post('/login',[
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists(),
], async(req, res)=>{
    let success = false;
 // If there are errors return Bad request and the errors
 const errors = validationResult(req);
 if(!errors.isEmpty()){
     return res.status(400).json({errors: errors.array()})
 }

 const {email, password} = req.body;
 try {
    let user = await User.findOne({email});
    if(!user){
        return res.status(400).json({success, error:"Please try to login with correct credentials"})
    }

    const passwordCompare = await bcrypt.compare(password, user.password);
    if(!passwordCompare){
        return res.status(400).json({success,error:"Please try to login with correct credentials"})
    }

    const data = {
        user:{
            id:user.id
        }
    }
    const authToken = jwt.sign(data, JWT_SECRET)
    success = true;
    res.json({success,authToken});

} catch(error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error")
    }

})


// ROUTE 3: Getting loggedin user details using: POST "/api/auth/getuser". Login required
router.post('/getuser', fetchuser, async(req, res)=>{
    try {
        let userId = req.user.id;
        const user = await User.findById(userId).select("-password")
        res.send(user);
    } catch(error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error")
    }
})

module.exports = router;