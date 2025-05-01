const { Router } = require('express');

const courseRouter = Router();
const { courseModel } = require('../models/db');

courseRouter.post("/purchase", (req, res) => {
    res.json({
        message: "Purchase Courses endpoint"
    })
})

courseRouter.get("/preview", (req, res) => {
    res.json({
        message: "View Courses endpoint"
    })
})

module.exports = {
    courseRouter: courseRouter
}