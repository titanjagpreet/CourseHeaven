const { adminModel } = require('../models/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const JWT_ADMIN_SECRET = process.env.JWT_ADMIN_SECRET;

const signupUser = async (req, res) => {

    try {

        const { firstName, lastName, email, username, password } = req.body;

        const emailExists = await adminModel.findOne({ email });
        const usernameExists = await adminModel.findOne({ username });

        if (emailExists || usernameExists) {
            return res.status(400).json({
                error: "Admin already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const admin = adminModel.create({ firstName, lastName, email, username, password: hashedPassword });

        res.status(201).json({
            message: "Admin registered successfully!"
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

        const adminExists = await adminModel.findOne({ username });

        if (!userExists) {
            return res.status(400).json({
                error: "Admin does not exists"
            });
        }

        const passwordMatch = await bcrypt.compare(password, userExists.password);

        if (!passwordMatch) {
            return res.status(401).json({
                error: "Incorrect Credentials!"
            });
        }

        const token = jwt.sign({ id: userExists._id.toString() }, JWT_ADMIN_SECRET, { expiresIn: "2d" });

        res.json({
            token: token
        });

        res.status(200).json({
            message: "Admin logged in successfully!"
        });

    } catch (error) {

        return res.status(500).json({
            error: error.message || "Something went wrong during signin"
        });
    }
}

const createCourse = async (req, res) => {

    const adminId = req.adminId;

    const { title, description, price, imgURL } = req.body;

    const course = await courseModel.create({ title, description, price, imgURL, creatorId: adminId });

    res.json({
        message: "Course created!",
        courseId: course._id
    });

}

const updateCourse = async (req, res) => {
    try {

        const courseId = req.params.id;
        const adminId = req.adminId;

        const { title, description, price, imgURL } = req.body;

        const course = await courseModel.findOne({ _id: courseId });

        if (!courseId) {

            return res.status(404).json({
                error: "Course not found"
            });
        }

        if (course.creatorId.toString() != amdinId) {
            return res.status(403).json({
                error: "You're not authorized to edit this"
            });
        }

        course.title = title || course.title;
        course.description = description || course.description;
        course.price = price || course.price;
        course.imgURL = imgURL || course.imgURL;

        const updatedCourse = await course.save();

        return res.status(200).json({
            message: "Course updated successfully",
            course: updatedCourse
        });

    } catch (error) {

        return res.status(500).json({
            error: error.message || "Something went wrong during update"
        });
    }
}

const getAllCourses = async (req, res) => {

    try {
        const adminId = req.adminId; // set by adminMiddleware

        const courses = await courseModel.find({ creatorId: adminId });

        res.status(200).json({
            message: "Courses fetched successfully!",
            courses,
        });
    } catch (error) {
        res.status(500).json({
            error: error.message || "Something went wrong while fetching courses",
        });
    }
}

module.exports = {
    signupUser,
    signinUser,
    createCourse,
    updateCourse,
    getAllCourses
}