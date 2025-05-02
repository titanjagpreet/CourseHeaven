const { adminModel } = require('../models/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET;

const signupUser = async (req, res) => {

    try {

        const { firstName, lastName, email, username, password } = req.body;

        const emailExists = await adminModel.findOne({ email });
        const usernameExists = await adminModel.findOne({ username });

        if (emailExists || usernameExists) {
            return res.status(400).json({
                error: "User already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = adminModel.create( {firstName, lastName, email, username, password: hashedPassword} );

        res.status(201).json({
            message: "User registered successfully!"
        });

    } catch(error) {

        return res.status(500).json({
            error: error.message || "Something went wrong during signup"
        });
    }
}

const signinUser = async (req, res) => {

    try{

        const { username, password} = req.body;

        const userExists = await adminModel.findOne({ username });

        if(!userExists){
            return res.status(400).json({
                error: "User does not exists"
            });
        }

        const passwordMatch = await bcrypt.compare(password, userExists.password);

        if(!passwordMatch){
            return res.status(401).json({
                error: "Incorrect Credentials!"
            });
        }

        const token = jwt.sign( { id: userExists._id.toString() }, JWT_SECRET, { expiresIn: "2d"});

        res.status(200).json({
            message: "User logged in successfully!"
        });

    } catch(error) {

        return res.status(500).json({
            error: error.message || "Something went wrong during signin"
        });
    }
}

module.exports = {
    signupUser,
    signinUser
}