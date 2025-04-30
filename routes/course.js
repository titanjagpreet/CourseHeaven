const { Router } = require('express');

const courseRouter = Router();

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