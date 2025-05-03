const { userModel, purchaseModel } = require('../models/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const JWT_USER_SECRET = process.env.JWT_USER_SECRET;

const signupUser = async (req, res) => {

    try {

        const { name, email, username, password } = req.body;

        const emailExists = await userModel.findOne({ email });
        const usernameExists = await userModel.findOne({ username });

        if (emailExists || usernameExists) {
            return res.status(400).json({
                error: "User already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = userModel.create({ name, email, username, password: hashedPassword });

        res.status(201).json({
            message: "User registered successfully!"
        });

    } catch (error) {

        return res.status(500).json({
            error: error.message || "Something went wrong during signup"
        });
    }
}

const signinUser = async (req, res) => {

    try {

        const { username, password } = req.body;

        const userExists = await userModel.findOne({ username });

        if (!userExists) {
            return res.status(400).json({
                error: "User does not exists"
            });
        }

        const passwordMatch = await bcrypt.compare(password, userExists.password);

        if (!passwordMatch) {
            return res.status(401).json({
                error: "Incorrect Credentials!"
            });
        }

        const token = jwt.sign({ id: userExists._id.toString() }, JWT_USER_SECRET, { expiresIn: "2d" });

        res.json({
            token: token
        });

        res.status(200).json({
            message: "User logged in successfully!"
        });

    } catch (error) {

        return res.status(500).json({
            error: error.message || "Something went wrong during signin"
        });
    }
}

const getAllPurchases = async (req, res) => {

    try {
        const userId = req.userId;

        const allPurchases = await purchaseModel.find({ userId }).populate('courseId');

        res.status(200).json({ allPurchases });
    } catch (error) {
        res.status(500).json({ error: error.message || "Unable to fetch purchases" });
    }

}

module.exports = {
    signupUser,
    signinUser,
    getAllPurchases
}